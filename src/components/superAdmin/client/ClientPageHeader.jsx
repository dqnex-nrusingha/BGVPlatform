import React, { useState, useRef, useEffect } from "react";

import {
  Plus,
  Upload,
  FileText,
  FileSpreadsheet,
  FileDown,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function ClientPageHeader({
  showCreateButton = true,
  showExportButton = true,
  createType = "client",
}) {
  const navigate = useNavigate();

  const [showExportModal, setShowExportModal] = useState(false);

  const [selectedType, setSelectedType] = useState(null);

  const exportBtnRef = useRef(null);

  /* ───────────────── CLOSE OUTSIDE ───────────────── */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        exportBtnRef.current &&
        !exportBtnRef.current.contains(event.target)
      ) {
        setShowExportModal(false);
      }
    };

    if (showExportModal) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showExportModal]);

  /* ───────────────── BUTTON TEXT ───────────────── */
  const buttonText =
    createType === "vendor"
      ? "Create Vendor"
      : createType === "hr"
        ? "Create HR"
        : createType === "candidate"
          ? "Create Candidate"
          : "Create Client";

  /* ───────────────── CREATE ───────────────── */
  const handleCreate = () => {
    if (createType === "vendor") {
      navigate("/super-admin/create-vendor");
    } else if (createType === "hr") {
      navigate("/super-admin/create-hr");
    } else if (createType === "candidate") {
      navigate("/super-admin/create-candidate");
    } else {
      navigate("/super-admin/create-client");
    }
  };

  /* ───────────────── DOWNLOAD ───────────────── */
  const handleDownload = () => {
    console.log("Downloading as", selectedType);

    setShowExportModal(false);
  };

  return (
    <div className="flex items-start justify-between mb-6">
      {/* ───────────────── LEFT ───────────────── */}
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Welcome Back, Dhiren! 👋
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Manage Platform Operations Seamlessly.
        </p>
      </div>

      {/* ───────────────── RIGHT ───────────────── */}
      {(showCreateButton || showExportButton) && (
        <div className="flex items-center gap-3">
          {/* CREATE BUTTON */}
          {showCreateButton && (
            <button
              type="button"
              onClick={handleCreate}
              className="flex items-center gap-2 bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-800 transition shadow-sm"
            >
              <Plus size={16} />

              {buttonText}
            </button>
          )}

          {/* EXPORT */}
          {showExportButton && (
            <div className="relative" ref={exportBtnRef}>
              {/* EXPORT BUTTON */}
              <button
                type="button"
                onClick={() => setShowExportModal(!showExportModal)}
                className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 transition shadow-sm"
              >
                <Upload size={16} />
                Export
              </button>

              {/* ───────────────── EXPORT MODAL ───────────────── */}
              {showExportModal && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-full mt-3 bg-white rounded-2xl shadow-2xl border border-gray-100 p-6 w-85 z-50"
                >
                  {/* TITLE */}
                  <h2 className="text-lg font-bold text-gray-900 mb-5">
                    Select file type
                  </h2>

                  {/* FILE TYPES */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {/* PDF */}
                    <button
                      type="button"
                      onClick={() => setSelectedType("PDF")}
                      className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 transition ${
                        selectedType === "PDF"
                          ? "border-indigo-600 bg-indigo-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <FileText size={26} className="text-indigo-600" />

                      <span className="text-sm font-medium">PDF</span>
                    </button>

                    {/* EXCEL */}
                    <button
                      type="button"
                      onClick={() => setSelectedType("Excel")}
                      className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 transition ${
                        selectedType === "Excel"
                          ? "border-green-600 bg-green-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <FileSpreadsheet size={26} className="text-green-600" />

                      <span className="text-sm font-medium">Excel</span>
                    </button>

                    {/* CSV */}
                    <button
                      type="button"
                      onClick={() => setSelectedType("CSV")}
                      className={`flex flex-col items-center justify-center gap-2 border rounded-xl p-4 transition ${
                        selectedType === "CSV"
                          ? "border-orange-500 bg-orange-50"
                          : "border-gray-200 hover:bg-gray-50"
                      }`}
                    >
                      <FileDown size={26} className="text-orange-500" />

                      <span className="text-sm font-medium">CSV</span>
                    </button>
                  </div>

                  {/* DOWNLOAD BUTTON */}
                  <button
                    type="button"
                    onClick={handleDownload}
                    disabled={!selectedType}
                    className={`w-full py-3 rounded-xl text-white font-semibold transition ${
                      selectedType
                        ? "bg-indigo-700 hover:bg-indigo-800"
                        : "bg-gray-300 cursor-not-allowed"
                    }`}
                  >
                    Download
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}