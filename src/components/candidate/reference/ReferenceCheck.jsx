import React, { useState } from "react";
import { AlertCircle } from "lucide-react";
import ReferenceHeader from "./ReferenceHeader";
import ReferenceForm from "./ReferenceForm";

function ReferenceCheck({ onNext }) {
  const createEmptyRef = () => ({
    id: crypto.randomUUID(),
    name: "",
    phone: "",
    email: "",
    gender: "",
    institute: "",
    designation: "",
  });

  const [references, setReferences] = useState([
    createEmptyRef(),
    createEmptyRef(),
  ]);

  const [error, setError] = useState("");

  // Input change
  const handleChange = (index, field, value) => {
    setReferences((prev) =>
      prev.map((item, i) =>
        i === index
          ? { ...item, [field]: value }
          : item
      )
    );

    setError("");
  };

  // Add reference
  const handleAdd = () => {
    setReferences((prev) => [
      ...prev,
      createEmptyRef(),
    ]);
    setError("");
  };

  // Delete reference
  const handleDelete = (index) => {
    setReferences((prev) =>
      prev.filter((_, i) => i !== index)
    );
    setError("");
  };

  // Validation
  const validate = () => {
    const fields = [
      "name",
      "phone",
      "email",
      "gender",
      "institute",
      "designation",
    ];

    for (let i = 0; i < references.length; i++) {
      const ref = references[i];

      for (const key of fields) {
        if (!String(ref[key]).trim()) {
          setError(
            `Please fill all required fields in Reference ${i + 1}`
          );
          return false;
        }
      }
    }

    return true;
  };

  // Submit
  const handleSubmit = () => {
    if (!validate()) return;

    setError("");
    onNext && onNext(references);
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-10 min-h-screen">
      <ReferenceHeader onAdd={handleAdd} />

      <div className="space-y-10 mt-6">
        {references.map((item, index) => (
          <ReferenceForm
            key={item.id}
            index={index}
            data={item}
            total={references.length}
            onChange={handleChange}
            onDelete={handleDelete}
          />
        ))}
      </div>

      {/* Error */}
      {error && (
        <p className="mt-6 text-red-500 text-sm flex items-center gap-2">
          <AlertCircle size={14} />
          {error}
        </p>
      )}

      {/* Submit */}
      <div className="flex justify-center mt-12">
        <button
          onClick={handleSubmit}
          className="bg-[#05058D] text-white px-14 py-3 rounded-xl hover:bg-blue-900 transition"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default ReferenceCheck;