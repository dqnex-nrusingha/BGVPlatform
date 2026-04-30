import React, { useState } from "react";
import ReviewContent from "./ReviewContent";
import SuccessModal from "./SuccessModal";

function ReviewSubmit({ onSubmit }) {
  const [checked, setChecked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    if (!checked) return;

    // show popup
    setShowModal(true);

    // optional backend call
    onSubmit && onSubmit();
  };

  return (
    <>
      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-sm overflow-hidden h-screen flex flex-col">

        {/* Header */}
        <div className="p-8 bg-white shrink-0">
          <h2 className="text-3xl font-bold text-[#05058D]">
            Review & Submit
          </h2>

          <div className="mt-5 border border-[#8B8CFF] bg-[#EEF0FF] rounded-2xl px-6 py-5 text-gray-900">
            Please Review All Sections Before Final Submission.
          </div>
        </div>

        {/* Scroll */}
        <div className="flex-1 overflow-y-auto px-8 py-6">
          <ReviewContent />
        </div>

        {/* Bottom */}
        <div className="bg-white py-4 px-8 shadow-[0_-4px_10px_rgba(0,0,0,0.06)]">
          
          <label className="flex items-center gap-3 text-gray-600 mb-4 cursor-pointer">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              className="w-5 h-5 accent-[#05058D]"
            />
            Click Here To Review Your Details And Upload Documents.
          </label>

          <div className="flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={!checked}
              className={`px-14 py-3 rounded-xl text-white ${
                checked
                  ? "bg-[#05058D] hover:bg-blue-900"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Submit Details
            </button>
          </div>
        </div>
      </div>

      {/* ✅ Popup */}
      {showModal && (
        <SuccessModal onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

export default ReviewSubmit;