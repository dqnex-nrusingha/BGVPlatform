import React from "react";
import { Upload, ChevronDown, ChevronUp } from "lucide-react";

export default function UploadCard({
  doc,
  uploaded,
  open,
  onUpload,
  onToggle,
}) {
  return (
    <div className="bg-white border border-[#D8D8F8] rounded-2xl shadow-md px-5 py-5">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-[18px] font-semibold text-[#05058D]">
            {doc}
          </h3>

          {!uploaded ? (
            <p className="text-xs text-gray-500 mt-1">
              Supported format PDF, JPG, PNG, up to 5MB
            </p>
          ) : (
            <p className="text-xs text-green-600 mt-1">
              Upload successful
            </p>
          )}
        </div>

        {!uploaded ? (
          <label className="bg-[#05058D] text-white h-11 px-6 rounded-xl flex items-center gap-2 cursor-pointer text-sm">
            <Upload size={18} />
            Upload
            <input
              hidden
              type="file"
              onChange={onUpload}
            />
          </label>
        ) : (
          <button onClick={onToggle}>
            {open ? (
              <ChevronUp size={26} />
            ) : (
              <ChevronDown size={26} />
            )}
          </button>
        )}
      </div>
    </div>
  );
}