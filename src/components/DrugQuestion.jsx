// DrugQuestion.jsx
import React from "react";

function DrugQuestion({
  question,
  options,
  selected,
  onSelect,
}) {
  return (
    <>
      <h3 className="mt-12 text-2xl font-medium text-[#05058D]">
        {question}
      </h3>

      <div className="mt-8 space-y-5">
        {options.map((item) => (
          <label
            key={item.value}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="radio"
              name="drug-test"
              checked={selected === item.value}
              onChange={() => onSelect(item.value)}
              className="h-5 w-5 accent-[#05058D]"
            />

            <span className="text-lg text-gray-900">
              {item.label}
            </span>
          </label>
        ))}
      </div>
    </>
  );
}

export default DrugQuestion;