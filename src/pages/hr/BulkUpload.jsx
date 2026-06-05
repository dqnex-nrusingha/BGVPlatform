import { CheckCircle, XCircle, Upload, AlertTriangle, Users, SkipForward } from "lucide-react";
import { useRef, useState } from "react";
import axios from "axios";

const BulkUpload = () => {
  const fileRef = useRef();

  const [file, setFile] = useState(null);
  const [uploadError, setUploadError] = useState(false);
  const [showTable, setShowTable] = useState(false);
  const [parsedData, setParsedData] = useState([]);

  // Upload result state
  const [uploading, setUploading] = useState(false);
  const [uploadResult, setUploadResult] = useState(null); // { created, skipped, skippedList }

  // Duplicate modal — shown after file parse if preview rows had issues
  const [showDuplicateModal, setShowDuplicateModal] = useState(false);

  /* ─── PARSE FILE client-side for preview ─── */
  const parseFile = (selectedFile) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = (e) => {
        try {
          // Dynamic import via CDN-free approach — use xlsx which is already a dep via backend
          // But in frontend we read as ArrayBuffer and use SheetJS via npm
          import("xlsx").then((XLSX) => {
            const data = new Uint8Array(e.target.result);
            const workbook = XLSX.read(data, { type: "array" });
            const sheetName = workbook.SheetNames[0];
            const sheet = workbook.Sheets[sheetName];
            const json = XLSX.utils.sheet_to_json(sheet);
            resolve(json);
          }).catch(reject);
        } catch (err) {
          reject(err);
        }
      };

      reader.onerror = reject;
      reader.readAsArrayBuffer(selectedFile);
    });
  };

  /* ─── VALIDATE & SET FILE ─── */
  const validateAndSetFile = async (selectedFile) => {
    if (!selectedFile) return;

    const validTypes = [".csv", ".xls", ".xlsx"];
    const maxSize = 5 * 1024 * 1024;

    const isValidType = validTypes.some((ext) =>
      selectedFile.name.toLowerCase().endsWith(ext)
    );

    if (!isValidType || selectedFile.size > maxSize) {
      setUploadError(true);
      setFile(null);
      return;
    }

    setUploadError(false);
    setFile(selectedFile);

    try {
      const rows = await parseFile(selectedFile);
      setParsedData(rows);
      setTimeout(() => setShowTable(true), 800);
    } catch {
      setUploadError(true);
      setFile(null);
    }
  };

  const handleFileChange = (e) => validateAndSetFile(e.target.files[0]);

  const handleDrop = (e) => {
    e.preventDefault();
    validateAndSetFile(e.dataTransfer.files[0]);
  };

  /* ─── UPLOAD TO API ─── */
  const handleUpload = async () => {
    if (!file) return;
    setUploading(true);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await axios.post(
        "http://localhost:5000/api/candidates/multiple_candidate_add",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      if (res.data.success) {
        setUploadResult({
          created: res.data.created,
          skipped: res.data.skipped,
          total: res.data.totalRecords,
          skippedList: res.data.skippedList || [],
        });
        setShowTable(false);
      }
    } catch (err) {
      const msg = err.response?.data?.message || "Upload failed. Please try again.";
      alert(msg);
    } finally {
      setUploading(false);
    }
  };

  /* ─── RESET ─── */
  const handleReset = () => {
    setFile(null);
    setParsedData([]);
    setShowTable(false);
    setUploadError(false);
    setUploadResult(null);
    setShowDuplicateModal(false);
    if (fileRef.current) fileRef.current.value = "";
  };

  /* ─── COLUMN HEADERS from first row ─── */
  const columns = parsedData.length > 0 ? Object.keys(parsedData[0]) : [];

  return (
    <div className="p-6 bg-[#F4F7FE] min-h-screen relative">
      <div className="max-w-6xl mx-auto space-y-6">

        {/* Header */}
        <div>
          <h2 className="text-lg font-semibold text-[#2B3674]">
            Bulk Upload Candidates
          </h2>
          <p className="text-xs text-gray-900">
            Upload Multiple Candidate Profiles At Once Using A Standardized File Format.
          </p>
        </div>

        {/* ================= RESULT SCREEN ================= */}
        {uploadResult && (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center space-y-6">

            <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto">
              <CheckCircle size={36} className="text-green-500" />
            </div>

            <div>
              <h3 className="text-[#01026E] font-bold text-lg">Upload Complete!</h3>
              <p className="text-gray-500 text-sm mt-1">
                Your file has been processed successfully.
              </p>
            </div>

            {/* Stats */}
            <div className="flex justify-center gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl px-6 py-4 text-center">
                <Users size={20} className="text-blue-600 mx-auto mb-1" />
                <p className="text-2xl font-bold text-blue-700">{uploadResult.created}</p>
                <p className="text-xs text-gray-500">Candidates Created</p>
              </div>

              <div className="bg-orange-50 border border-orange-200 rounded-xl px-6 py-4 text-center">
                <SkipForward size={20} className="text-orange-500 mx-auto mb-1" />
                <p className="text-2xl font-bold text-orange-600">{uploadResult.skipped}</p>
                <p className="text-xs text-gray-500">Skipped (Duplicates)</p>
              </div>

              <div className="bg-gray-50 border border-gray-200 rounded-xl px-6 py-4 text-center">
                <p className="text-2xl font-bold text-gray-700">{uploadResult.total}</p>
                <p className="text-xs text-gray-500">Total Records</p>
              </div>
            </div>

            {/* Skipped list */}
            {uploadResult.skippedList.length > 0 && (
              <div className="text-left bg-orange-50 border border-orange-100 rounded-xl p-4 max-h-40 overflow-y-auto">
                <p className="text-xs font-semibold text-orange-700 mb-2">Skipped Records:</p>
                {uploadResult.skippedList.map((s, i) => (
                  <p key={i} className="text-xs text-gray-600">
                    Row {s.row} — {s.name}: <span className="text-orange-600">{s.reason}</span>
                  </p>
                ))}
              </div>
            )}

            <button
              onClick={handleReset}
              className="px-6 py-2 bg-[#01026E] text-white rounded-lg text-sm hover:bg-[#02038a] transition font-medium"
            >
              Upload Another File
            </button>
          </div>
        )}

        {/* ================= STEP 1: UPLOAD ================= */}
        {!showTable && !uploadResult && (
          <>
            <div
              onClick={!file ? () => fileRef.current.click() : undefined}
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDrop}
              className={`border-2 border-dashed rounded-2xl h-64 flex flex-col items-center justify-center cursor-pointer transition
                ${uploadError
                  ? "border-red-300 bg-red-50"
                  : "border-[#C3C6F5] bg-[#F4F7FE] hover:bg-[#eef0fc]"
                }`}
            >
              {file ? (
                <>
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-100 mb-4">
                    <CheckCircle size={36} className="text-blue-600" />
                  </div>
                  <p className="text-[#01026E] font-semibold text-sm">
                    Document uploaded successfully
                  </p>
                  <p className="text-xs text-gray-400 mt-1">{file.name}</p>
                  <p className="text-xs text-gray-400">Parsing file...</p>
                </>
              ) : (
                <>
                  <div className="w-20 h-20 rounded-full bg-[#E0EEFF] flex items-center justify-center mb-5">
                    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M6 14C6 11.8 7.8 10 10 10H18L21 14H34C36.2 14 38 15.8 38 18V32C38 34.2 36.2 36 34 36H10C7.8 36 6 34.2 6 32V14Z"
                        fill="url(#folderGrad)"
                      />
                      <path
                        d="M22 29V21M22 21L19 24M22 21L25 24"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <defs>
                        <linearGradient id="folderGrad" x1="6" y1="10" x2="38" y2="36" gradientUnits="userSpaceOnUse">
                          <stop stopColor="#5BB8F5" />
                          <stop offset="1" stopColor="#1A56DB" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <p className="text-sm text-gray-600">
                    <span className="text-[#01026E] font-bold">Click Here</span>{" "}
                    to upload your File or Drag
                  </p>
                  <p className="text-xs text-gray-400 mt-3">
                    Supported formats: .CSV, .XLSX
                  </p>
                </>
              )}

              <input
                type="file"
                ref={fileRef}
                onChange={handleFileChange}
                accept=".csv,.xls,.xlsx"
                className="hidden"
              />
            </div>

            {/* Error message */}
            {uploadError && (
              <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                <XCircle size={13} />
                Upload Failed. Ensure Your File Is In The Correct Format And Size. Then Try Again.
              </p>
            )}
          </>
        )}

        {/* ================= STEP 2: TABLE PREVIEW ================= */}
        {showTable && !uploadResult && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm">

            <div className="px-4 pt-4 pb-2 text-sm text-gray-500 border-b border-gray-100 flex items-center justify-between">
              <span>
                Total Records: <strong className="text-gray-700">{parsedData.length}</strong>
              </span>
              <span className="text-xs text-gray-400">{file?.name}</span>
            </div>

            <div className="overflow-x-auto max-h-96">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-gray-500 text-xs uppercase tracking-wide sticky top-0">
                  <tr>
                    <th className="px-4 py-3 w-10 text-left">#</th>
                    {columns.map((col) => (
                      <th key={col} className="px-4 py-3 text-left whitespace-nowrap">
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {parsedData.map((row, i) => (
                    <tr key={i} className="hover:bg-gray-50 transition">
                      <td className="px-4 py-3 text-gray-400 text-xs">{i + 1}</td>
                      {columns.map((col) => (
                        <td key={col} className="px-4 py-3 text-gray-700 whitespace-nowrap">
                          {String(row[col] ?? "")}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="flex justify-end gap-3 px-4 py-4 border-t border-gray-200 bg-white rounded-b-xl">
              <button
                onClick={handleReset}
                disabled={uploading}
                className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 active:scale-95 transition font-medium disabled:opacity-50"
              >
                Back
              </button>
              <button
                onClick={handleUpload}
                disabled={uploading}
                className="px-6 py-2 bg-[#01026E] text-white rounded-lg text-sm hover:bg-[#02038a] active:scale-95 transition font-medium flex items-center gap-2 disabled:opacity-60"
              >
                {uploading ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload size={14} />
                    Upload {parsedData.length} Candidates
                  </>
                )}
              </button>
            </div>
          </div>
        )}

        {/* ================= GUIDELINES — only on upload step ================= */}
        {!showTable && !uploadResult && (
          <div className="bg-[#FDF2F2] border border-[#FECACA] rounded-xl p-4">
            <p className="text-sm font-medium text-red-500 mb-2 flex items-center gap-2">
              ⚠ Important Guidelines
            </p>
            <ul className="text-xs text-gray-600 space-y-1 list-disc pl-4">
              <li>Only .csv, .xls, .xlsx file types are accepted.</li>
              <li>Ensure that the sheet includes a header row.</li>
              <li>
                Required columns: <strong>firstName, lastName, phone, email</strong>. Optional: jobFunction, tag.
              </li>
              <li>Full name, phone number and email must be present for each candidate.</li>
              <li>Keep your file within the allowed size limit (5MB).</li>
              <li>Currently, we accept batches of up to 1000 records at a time.</li>
              <li>Duplicate phone or email records will be automatically skipped.</li>
            </ul>
          </div>
        )}

      </div>

      {/* ================= DUPLICATE MODAL (manual trigger) ================= */}
      {showDuplicateModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-2xl p-6 w-96 text-center shadow-xl">

            <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-3">
              <AlertTriangle size={24} className="text-orange-500" />
            </div>

            <h3 className="text-[#01026E] font-semibold text-base mb-1">
              Duplicate Records Found
            </h3>
            <p className="text-xs text-gray-500 mb-5">
              Some candidate data is already registered. Duplicates will be automatically skipped during upload.
            </p>

            <div className="flex justify-center gap-3">
              <button
                onClick={() => setShowDuplicateModal(false)}
                className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-100 active:scale-95 transition font-medium"
              >
                Cancel
              </button>
              <button
                onClick={() => { setShowDuplicateModal(false); handleUpload(); }}
                className="px-5 py-2 bg-[#01026E] text-white rounded-lg text-sm hover:bg-[#02038a] active:scale-95 transition font-medium"
              >
                Continue Upload
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BulkUpload;