// DrugHeader.jsx
import React from "react";

function DrugHeader() {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#05058D]">
        Drug Test
      </h2>

      <div className="mt-8 border border-[#8B8CFF] bg-[#EEF0FF] rounded-2xl px-6 py-5 text-lg text-gray-900">
        This Information Is Required For Compliance Purposes.
        All Information Will Be Kept Confidential
      </div>
    </>
  );
}

export default DrugHeader;