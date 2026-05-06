import React from "react";

function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-white rounded-2xl p-10 w-[600px] text-center relative">
        
        {/* Title */}
        <h2 className="text-green-600 text-xl font-semibold mb-6">
          Document Submitted Successfully
        </h2>

        {/* Circle Animation */}
        <div className="flex justify-center mb-6">
          <div className="w-32 h-32 rounded-full bg-green-100 flex items-center justify-center relative">
            <div className="w-20 h-20 rounded-full bg-green-500 flex items-center justify-center text-white text-3xl">
              ✓
            </div>
          </div>
        </div>

        {/* Done Button */}
        <button
          onClick={onClose}
          className="bg-[#05058D] text-white px-8 py-2 rounded-lg hover:bg-blue-900"
        >
          Done
        </button>
      </div>
    </div>
  );
}

export default SuccessModal;