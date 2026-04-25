// src/components/UploadSuccess.jsx

export default function UploadSuccess({
  fileName = "document.pdf",
  fileSize = "232 KB",
  onChangeFile,
}) {
  return (
    <div className="mt-4 border-2 border-dashed border-indigo-400 rounded-xl p-5 text-center bg-white">
      
      {/* Icon */}
      <div className="text-4xl">✅</div>

      {/* Title */}
      <p className="mt-2 font-semibold text-indigo-800">
        Document Upload Successfully
      </p>

      {/* File Info */}
      <p className="text-sm text-gray-500 mt-1">
        {fileName} • {fileSize}
      </p>

      {/* Change File Button */}
      <button
        type="button"
        onClick={onChangeFile}
        className="mt-3 px-4 py-1.5 rounded border border-indigo-400 text-sm text-indigo-700 hover:bg-indigo-50 transition"
      >
        Upload Different Document
      </button>
    </div>
  );
}