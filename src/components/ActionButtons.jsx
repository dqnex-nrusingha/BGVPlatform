export default function ActionButtons({
  onNext,
  onBack,
}) {
  return (
    <div className="mt-8 flex items-center justify-between gap-4">
      
      {/* Consent Checkbox */}
      <label className="flex items-center gap-2 text-xs text-gray-800">
        <input
          type="checkbox"
          className="w-4 h-4 accent-indigo-600"
        />
        Click Here To Your Consent
      </label>

      {/* Buttons */}
      <div className="flex items-center gap-3">
        
        {/* <button
          onClick={onBack}
          className="px-5 py-2 border border-gray-300 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition"
        >
          Back
        </button> */}

        <button
          onClick={onNext}
          className="px-8 py-2 bg-indigo-700 text-white rounded-lg text-sm hover:bg-indigo-800 transition"
        >
          Next
        </button>
      </div>
    </div>
  );
}