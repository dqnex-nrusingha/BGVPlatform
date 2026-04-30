import React from "react";

function CriminalOptions({ selected, onSelect }) {
  const options = [
    {
      label: "No, I do not have any criminal record",
      value: "no",
    },
    {
      label: "Yes, I have a criminal record",
      value: "yes",
    },
  ];

  return (
    <>
      <h3 className="mt-10 text-2xl font-medium text-[#05058D]">
        Do You Have Any Criminal Record?
      </h3>

      <div className="mt-8 space-y-5">
        {options.map((item) => (
          <label
            key={item.value}
            className="flex items-center gap-4 cursor-pointer"
          >
            <input
              type="radio"
              name="criminal"
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

export default CriminalOptions;