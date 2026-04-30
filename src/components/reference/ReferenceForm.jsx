import React, { useState } from "react";
import { Trash2 } from "lucide-react";

const Input = ({ label, field, index, value, type = "text", placeholder = "", onChange, error }) => (
  <div>
    <label htmlFor={`${field}-${index}`} className="block text-sm mb-1 font-medium text-gray-700">
      {label} <span className="text-red-500">*</span>
    </label>
    <input
      id={`${field}-${index}`}
      type={type}
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(index, field, e.target.value)}
      className={`w-full h-11 border rounded-lg px-4 text-sm outline-none focus:ring-2 transition
        ${error
          ? "border-red-400 focus:ring-red-300 focus:border-red-400"
          : "border-gray-300 focus:ring-[#05058D] focus:border-[#05058D]"
        }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const Select = ({ label, field, index, value, options, onChange, error }) => (
  <div>
    <label htmlFor={`${field}-${index}`} className="block text-sm mb-1 font-medium text-gray-700">
      {label} <span className="text-red-500">*</span>
    </label>
    <select
      id={`${field}-${index}`}
      value={value}
      onChange={(e) => onChange(index, field, e.target.value)}
      className={`w-full h-11 border rounded-lg px-4 text-sm outline-none focus:ring-2 bg-white transition
        ${error
          ? "border-red-400 focus:ring-red-300 focus:border-red-400"
          : "border-gray-300 focus:ring-[#05058D] focus:border-[#05058D]"
        }`}
    >
      <option value="">Select</option>
      {options.map((item) => (
        <option key={item} value={item}>{item}</option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

// Validate a single field and return error message or ""
const validateField = (field, value) => {
  const val = String(value).trim();

  switch (field) {
    case "name":
      if (!val) return "Name is required";
      if (val.length < 2) return "Name must be at least 2 characters";
      if (!/^[a-zA-Z\s]+$/.test(val)) return "Name can only contain letters";
      return "";

    case "phone":
      if (!val) return "Phone number is required";
      if (!/^\d{10}$/.test(val)) return "Enter a valid 10-digit phone number";
      return "";

    case "email":
      if (!val) return "Email is required";
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) return "Enter a valid email address";
      return "";

    case "gender":
      if (!val) return "Please select a gender";
      return "";

    case "institute":
      if (!val) return "Institute name is required";
      if (val.length < 2) return "Institute name must be at least 2 characters";
      return "";

    case "designation":
      if (!val) return "Designation is required";
      if (val.length < 2) return "Designation must be at least 2 characters";
      return "";

    default:
      return "";
  }
};

function ReferenceForm({ index, data, total, onChange, onDelete }) {
  // Track which fields have been touched (blurred)
  const [touched, setTouched] = useState({});

  const handleChange = (i, field, value) => {
    onChange(i, field, value);
    // Re-validate on change if already touched
    if (touched[field]) {
      setTouched((prev) => ({ ...prev, [field]: true }));
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
  };

  // Get error only if field was touched
  const getError = (field) =>
    touched[field] ? validateField(field, data[field]) : "";

  return (
    <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm">
      {/* Header */}
      <div className="flex justify-between items-center mb-5">
        <h3 className="text-2xl font-semibold text-[#05058D]">
          Reference {index + 1}
        </h3>
        {total > 1 && (
          <button
            type="button"
            onClick={() => onDelete(index)}
            className="text-red-400 hover:text-red-600 transition"
          >
            <Trash2 size={20} />
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div onBlur={() => handleBlur("name")}>
          <Input
            label="Name"
            field="name"
            index={index}
            value={data.name}
            placeholder="Enter full name"
            onChange={handleChange}
            error={getError("name")}
          />
        </div>

        <div onBlur={() => handleBlur("phone")}>
          <Input
            label="Phone No"
            field="phone"
            index={index}
            value={data.phone}
            type="tel"
            placeholder="Enter 10-digit phone number"
            onChange={handleChange}
            error={getError("phone")}
          />
        </div>

        <div onBlur={() => handleBlur("email")}>
          <Input
            label="Email"
            field="email"
            index={index}
            value={data.email}
            type="email"
            placeholder="Enter email address"
            onChange={handleChange}
            error={getError("email")}
          />
        </div>

        <div onBlur={() => handleBlur("gender")}>
          <Select
            label="Gender"
            field="gender"
            index={index}
            value={data.gender}
            options={["Male", "Female", "Other"]}
            onChange={handleChange}
            error={getError("gender")}
          />
        </div>

        <div onBlur={() => handleBlur("institute")}>
          <Input
            label="Institute Name"
            field="institute"
            index={index}
            value={data.institute}
            placeholder="Enter institute or company name"
            onChange={handleChange}
            error={getError("institute")}
          />
        </div>

        <div onBlur={() => handleBlur("designation")}>
          <Input
            label="Designation"
            field="designation"
            index={index}
            value={data.designation}
            placeholder="e.g. Manager, Director, HR..."
            onChange={handleChange}
            error={getError("designation")}
          />
        </div>
      </div>
    </div>
  );
}

export default ReferenceForm;