import { steps } from "../data/steps";
import { useNavigate } from "react-router-dom";

export default function SidebarStepper({
  currentStep,
  onStepBack,
}) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (currentStep > 0) {
      onStepBack();
    } else {
      navigate("/");
    }
  };

  return (
    <div className="pt-8 pl-20 flex flex-col h-[calc(100vh-110px)] sticky top-6">
      
      {/* Steps */}
      <div className="flex-1 space-y-1 overflow-y-auto pr-2">
        {steps.map((step, index) => (
          <div key={index} className="flex gap-4">
            
            {/* Dot + Line */}
            <div className="flex flex-col items-center">
              <div
                className={`w-3.5 h-3.5 rounded-full ${
                  index === currentStep
                    ? "bg-blue-600"
                    : index < currentStep
                    ? "bg-green-500"
                    : "bg-gray-300"
                }`}
              ></div>

              {index !== steps.length - 1 && (
                <div className="w-px h-10 bg-gray-300"></div>
              )}
            </div>

            {/* Text */}
            <span
              className={`text-sm ${
                index === currentStep
                  ? "text-blue-700 font-medium"
                  : index < currentStep
                  ? "text-green-600 font-medium"
                  : "text-gray-400"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* Back Button Always Visible */}
      <button
        onClick={handleBack}
        className="mt-4 ml-2 w-fit px-6 h-9 rounded-xl border border-indigo-400 text-indigo-700 text-sm hover:bg-white transition shrink-0"
      >
        ← Back
      </button>
    </div>
  );
}