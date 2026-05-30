import { Download, Plus, UserPlus, Upload } from "lucide-react";

import { useNavigate } from "react-router-dom";

import { useState, useRef, useEffect } from "react";

const ProfileHeader = ({ showExport, showAddCandidate }) => {
  const navigate = useNavigate();

  /* EXPORT DROPDOWN */
  const [openExport, setOpenExport] = useState(false);

  /* ADD CANDIDATE DROPDOWN */
  const [openCandidateDropdown, setOpenCandidateDropdown] = useState(false);

  const dropdownRef = useRef();

  /* CLOSE ON OUTSIDE CLICK */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenExport(false);

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
          <div className="relative" ref={dropdownRef}>
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
                  {/* PDF */}
                  <div className="flex items-center gap-2 border border-[#01026E] bg-blue-50 rounded-lg px-4 py-2 cursor-pointer">
                    <Download size={16} className="text-red-500" />

                    <span className="text-sm font-medium">PDF</span>
                  </div>

                  {/* CSV */}
                  <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-4 py-2 cursor-pointer hover:bg-gray-50">
                    <Download size={16} className="text-green-500" />

                    <span className="text-sm font-medium">CSV</span>
                  </div>
                </div>

                {/* DOWNLOAD BUTTON */}
                <div className="flex justify-end">
                  <button
                    onClick={() => {
                      console.log("Download File");

                      setOpenExport(false);
                    }}
                    className="bg-[#01026E] text-white px-5 py-2 rounded-lg text-sm hover:opacity-90 transition"
                  >
                    Download
                  </button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* ADD CANDIDATE DROPDOWN */}
        {showAddCandidate && (
          <div className="relative" ref={dropdownRef}>
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
