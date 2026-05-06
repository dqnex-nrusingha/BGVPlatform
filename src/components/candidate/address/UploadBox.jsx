export default function UploadBox({
  onUpload,
  title = "Present Address",
  showError = false,
}) {
  return (
    <div className="mt-5">
      
      {/* Heading */}
      <h2 className="text-[22px] font-semibold text-[#101A78]">
        {title}
      </h2>

      {/* Note */}
      <p className="mt-2 text-sm text-black">
        <span className="text-red-500 font-semibold">*</span>{" "}
        <span className="font-semibold">Note:</span> Please upload your electric bill
        and Gas bill upload any one of these.
      </p>

      {/* Upload Box */}
      <label className="mt-4 block border-2 border-dashed border-indigo-300 rounded-2xl bg-[#F8F8FF] px-8 py-10 text-center cursor-pointer">
        
        {/* Icon */}
        <div className="text-5xl">📤</div>

        {/* Text */}
        <p className="mt-4 text-base">
          <span className="text-indigo-800 font-semibold">
            Click Here
          </span>{" "}
          <span className="text-gray-500">
            to upload your File or Drag
          </span>
        </p>

        <p className="text-sm text-gray-500 mt-2">
          Supported format PDF, JPG, PNG, up to 5MB
        </p>

        <input
          type="file"
          className="hidden"
          onChange={onUpload}
        />
      </label>

      {/* Error Message */}
      {showError && (
        <p className="text-red-500 text-sm mt-3">
          ⚠ Oops! Something Went Wrong While Uploading Your Document.
          Please Try Again.
        </p>
      )}
    </div>
  );
}