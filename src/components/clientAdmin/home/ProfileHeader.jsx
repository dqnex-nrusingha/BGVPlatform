import {
  Download,
  Plus,
  FileText,
  FileSpreadsheet,
} from "lucide-react";

import {
  useState,
  useRef,
  useEffect,
} from "react";
import { useNavigate } from "react-router-dom";

const ProfileHeader = ({
  title = "Welcome Back Magnesh 👋🏻",
  subtitle = "Let’s Customize Your Workspace",
  showExport = true,
  showCreateHR = false,
}) => {

  const [showExportModal, setShowExportModal] =useState(false);

  const [selectedType, setSelectedType] = useState("pdf");
  const navigate = useNavigate();

  const modalRef = useRef(null);

  // CLOSE ON OUTSIDE CLICK
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target)
      ) {
        setShowExportModal(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div className="flex items-start justify-between mb-6">

      {/* LEFT */}
      <div>

        <h1 className="text-[38px] font-bold text-black leading-tight">
          {title}
        </h1>

        <p className="text-[18px] text-gray-700 mt-1">
          {subtitle}
        </p>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4 relative">

        {/* CREATE HR BUTTON */}
        {showCreateHR && (
          <button
            onClick={() => navigate("/admin/create-hr")}
            className="flex items-center gap-2 bg-[#02027A] hover:bg-[#00005E] text-white px-5 py-3 rounded-xl text-sm font-medium transition-all"
          >
            <Plus size={18} />

            Create HR
          </button>
        )}

        {/* EXPORT BUTTON */}
        {showExport && (
          <div
            className="relative"
            ref={modalRef}
          >

            <button
              onClick={() =>
                setShowExportModal(
                  !showExportModal
                )
              }
              className="flex items-center gap-2 border border-[#02027A] text-[#02027A] hover:bg-indigo-50 px-5 py-3 rounded-xl text-sm font-medium transition-all"
            >

              <Download size={18} />

              Export
            </button>

            {/* EXPORT MODAL */}
            {showExportModal && (

              <div className="absolute right-0 mt-3 w-80 bg-white border border-gray-200 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] z-50 p-5">

                {/* TITLE */}
                <h3 className="text-sm font-semibold text-gray-800 mb-4">
                  Select file type
                </h3>

                {/* OPTIONS */}
                <div className="grid grid-cols-3 gap-3 mb-5">

                  {/* PDF */}
                  <div
                    onClick={() =>
                      setSelectedType("pdf")
                    }
                    className={`flex flex-col items-center justify-center gap-2 border rounded-xl px-3 py-4 cursor-pointer transition-all ${
                      selectedType === "pdf"
                        ? "border-[#01026E] bg-indigo-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >

                    <FileText
                      size={22}
                      className="text-red-500"
                    />

                    <span className="text-xs font-medium text-gray-700">
                      PDF
                    </span>

                  </div>

                  {/* EXCEL */}
                  <div
                    onClick={() =>
                      setSelectedType("excel")
                    }
                    className={`flex flex-col items-center justify-center gap-2 border rounded-xl px-3 py-4 cursor-pointer transition-all ${
                      selectedType === "excel"
                        ? "border-[#01026E] bg-indigo-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >

                    <FileSpreadsheet
                      size={22}
                      className="text-green-600"
                    />

                    <span className="text-xs font-medium text-gray-700">
                      Excel
                    </span>

                  </div>

                  {/* CSV */}
                  <div
                    onClick={() =>
                      setSelectedType("csv")
                    }
                    className={`flex flex-col items-center justify-center gap-2 border rounded-xl px-3 py-4 cursor-pointer transition-all ${
                      selectedType === "csv"
                        ? "border-[#01026E] bg-indigo-50"
                        : "border-gray-200 hover:bg-gray-50"
                    }`}
                  >

                    <FileText
                      size={22}
                      className="text-emerald-500"
                    />

                    <span className="text-xs font-medium text-gray-700">
                      CSV
                    </span>

                  </div>

                </div>

                {/* DOWNLOAD BUTTON */}
                <div className="flex justify-end">

                  <button
                    onClick={() => {
                      console.log(
                        "Download:",
                        selectedType
                      );

                      setShowExportModal(false);
                    }}
                    className="bg-[#01026E] hover:bg-[#00005E] text-white px-5 py-2 rounded-xl text-sm font-medium transition-all"
                  >
                    Download
                  </button>

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