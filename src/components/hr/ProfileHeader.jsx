import { Download, Plus, UserPlus, Upload, FileText, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const ProfileHeader = ({ showExport, showAddCandidate }) => {
  const navigate = useNavigate();

  /* EXPORT DROPDOWN */
  const [openExport, setOpenExport] = useState(false);
  const [selectedType, setSelectedType] = useState("csv");
  const [exporting, setExporting] = useState(false);

  /* ── Fetch candidates ── */
  const fetchForExport = async () => {
    const res = await axios.get(
      "http://localhost:5000/api/candidates/get_all_candidates"
    );
    return res.data.success ? res.data.candidates : [];
  };

  const getStatusLabel = (status) => {
    switch (Number(status)) {
      case 1: return "Awaiting Input";
      case 2: return "Profile Complete";
      case 3: return "Verification In Progress";
      case 4: return "Verified";
      case 5: return "On Hold";
      case 6: return "Rejected";
      default: return "In Progress";
    }
  };

  /* ── CSV Export ── */
  const exportCSV = (candidates) => {
    const headers = ["Cand ID", "Case ID", "First Name", "Last Name", "Email", "Phone", "Function", "Tag", "Status", "Created At"];
    const rows = candidates.map((c) => [
      c.cand_id, c.case_id, c.first_name, c.last_name,
      c.email, c.phone, c.job_function || "", c.tag || "",
      getStatusLabel(c.case_status),
      new Date(c.created_at).toLocaleDateString("en-IN"),
    ]);
    const csvContent = [headers, ...rows]
      .map((row) => row.map((val) => `"${String(val).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `candidates_${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  /* ── PDF Export ── */
  const exportPDF = (candidates) => {
    const doc = new jsPDF({ orientation: "landscape" });
    doc.setFontSize(16);
    doc.setTextColor(1, 2, 110);
    doc.text("BGV Platform — Candidate List", 14, 18);
    doc.setFontSize(9);
    doc.setTextColor(120, 120, 120);
    doc.text(`Exported: ${new Date().toLocaleString("en-IN")}`, 14, 25);
    doc.text(`Total Records: ${candidates.length}`, 14, 30);
    const tableRows = candidates.map((c) => [
      c.cand_id, c.case_id,
      `${c.first_name} ${c.last_name}`,
      c.email, c.phone,
      c.job_function || "-", c.tag || "-",
      getStatusLabel(c.case_status),
    ]);
    autoTable(doc, {
      startY: 35,
      head: [["ID", "Case ID", "Name", "Email", "Phone", "Function", "Tag", "Status"]],
      body: tableRows,
      headStyles: { fillColor: [1, 2, 110], textColor: 255, fontStyle: "bold", fontSize: 8 },
      bodyStyles: { fontSize: 8 },
      alternateRowStyles: { fillColor: [245, 247, 254] },
      styles: { cellPadding: 3 },
    });
    doc.save(`candidates_${new Date().toISOString().slice(0, 10)}.pdf`);
  };

  /* ── Handle Download ── */
  const handleDownload = async () => {
    setExporting(true);
    try {
      const candidates = await fetchForExport();
      if (candidates.length === 0) { alert("No candidates to export."); return; }
      if (selectedType === "csv") exportCSV(candidates);
      else exportPDF(candidates);
      setOpenExport(false);
    } catch (err) {
      alert("Export failed. Please try again.");
    } finally {
      setExporting(false);
    }
  };

  /* ADD CANDIDATE DROPDOWN */
  const [openCandidateDropdown, setOpenCandidateDropdown] = useState(false);

  const exportRef = useRef();
  const candidateRef = useRef();

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (exportRef.current && !exportRef.current.contains(e.target)) {
        setOpenExport(false);
      }
      if (candidateRef.current && !candidateRef.current.contains(e.target)) {
        setOpenCandidateDropdown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="flex justify-between items-center mb-4">
      {/* LEFT SECTION */}
      <div>
        <p className="text-3xl font-semibold text-gray-800">
          Hi Puja Good Morning!
        </p>

        <p className="text-xl font-semibold text-gray-800">
          Let's Customize Your Workspace
        </p>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex gap-3 items-center">
        {/* EXPORT DROPDOWN */}
        {showExport && (
          <div className="relative" ref={exportRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();

                setOpenExport(!openExport);
              }}
              className="flex items-center gap-2 border px-3 py-1 rounded-lg text-sm hover:bg-gray-100"
            >
              <Download className="w-4 h-4" />
              Export
            </button>

            {/* EXPORT PANEL */}
            {openExport && (
              <div className="absolute right-0 mt-2 w-56 bg-white border border-gray-200 rounded-xl shadow-lg z-50 p-4">
                {/* TITLE */}
                <h3 className="text-sm font-semibold text-gray-700 mb-4">
                  Select file type
                </h3>

                {/* OPTIONS */}
                <div className="flex gap-3 mb-5">
                  {/* CSV */}
                  <div
                    onClick={() => setSelectedType("csv")}
                    className={`flex-1 flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer transition ${
                      selectedType === "csv"
                        ? "border-[#01026E] bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <FileText size={16} className="text-green-500" />
                    <span className="text-sm font-medium">CSV</span>
                  </div>

                  {/* PDF */}
                  <div
                    onClick={() => setSelectedType("pdf")}
                    className={`flex-1 flex items-center gap-2 border rounded-lg px-3 py-2 cursor-pointer transition ${
                      selectedType === "pdf"
                        ? "border-[#01026E] bg-blue-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >
                    <FileText size={16} className="text-red-500" />
                    <span className="text-sm font-medium">PDF</span>
                  </div>
                </div>

                {/* DOWNLOAD BUTTON */}
                <div className="flex justify-end">
                  <button
                    onClick={handleDownload}
                    disabled={exporting}
                    className="bg-[#01026E] text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition flex items-center gap-2 disabled:opacity-60"
                  >
                    {exporting ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        Exporting...
                      </>
                    ) : (
                      "Download"
                    )}
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ADD CANDIDATE DROPDOWN */}
        {showAddCandidate && (
          <div className="relative" ref={candidateRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();

                setOpenCandidateDropdown(!openCandidateDropdown);
              }}
              className="flex items-center gap-2 text-white px-3 py-1 rounded-lg text-sm bg-[#01026E]"
            >
              <Plus className="w-4 h-4" />
              Add Candidate
            </button>

            {/* DROPDOWN */}
            {openCandidateDropdown && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-md z-50">
                {/* SINGLE */}
                <div
                  onClick={() => {
                    setOpenCandidateDropdown(false);

                    navigate("/hr/create-candidate");
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <UserPlus size={16} />

                  <span>Add Single</span>
                </div>

                {/* BULK */}
                <div
                  onClick={() => {
                    setOpenCandidateDropdown(false);

                    navigate("/hr/bulk-upload");
                  }}
                  className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 cursor-pointer"
                >
                  <Upload size={16} />

                  <span>Add in Bulk</span>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileHeader;
