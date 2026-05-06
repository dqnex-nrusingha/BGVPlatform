import React, { useState } from "react";
import { Plus } from "lucide-react";
import EmploymentForm from "./EmploymentForm";
import EmploymentCard from "./EmploymentCard";

function Employment({ onNext }) {
  const [step, setStep] = useState("initial");
  const [formData, setFormData] = useState(null);

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-10 min-h-72">
      <h2 className="text-blue-900 text-2xl font-bold">
        Employment Details
      </h2>

      {step === "initial" && (
        <>
          <h1 className="text-center text-5xl font-light mt-14">
            Add Your Work Experience
          </h1>

          <div className="flex justify-center mt-20">
            <button
              onClick={() => setStep("form")}
              className="flex items-center gap-2 border border-blue-700 text-blue-700 px-6 py-3 rounded-xl"
            >
              <Plus size={18} />
              Add Employment
            </button>
          </div>
        </>
      )}

      {step === "form" && (
        <EmploymentForm
          onSubmit={(data) => {
            setFormData(data);
            setStep("submitted");
          }}
        />
      )}

      {step === "submitted" && formData && (
        <EmploymentCard
          data={formData}
          onAddNew={() => setStep("form")}
          onNext={onNext}
        />
      )}
    </div>
  );
}

export default Employment;
