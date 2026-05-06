import React from "react";
import { Plus } from "lucide-react";

function ReferenceHeader({ onAdd }) {
  return (
    <>
      <h2 className="text-3xl font-bold text-[#05058D]">
        Reference Check
      </h2>

      <div className="mt-6 border border-[#8B8CFF] bg-[#EEF0FF] rounded-2xl px-6 py-5 text-gray-900">
        Please provide details of two professional references
        who can vouch for your work experience and character.
      </div>

      <div className="flex justify-end mt-6">
        <button
          type="button"
          onClick={onAdd}
          className="flex items-center gap-2 border border-[#05058D] text-[#05058D] px-5 py-2.5 rounded-xl hover:bg-blue-50 transition"
        >
          <Plus size={16} />
          Add Reference
        </button>
      </div>
    </>
  );
}

export default ReferenceHeader;
