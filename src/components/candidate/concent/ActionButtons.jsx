import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ActionButtons() {
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();

  const handleAgree = () => {
    if (!checked) return;

    navigate("/digilocker"); // 👈 go to DigiLocker page
  };

  return (
    <div className="mt-10 flex items-center justify-between px-6 py-4 rounded-xl">
      
      {/* Left: Checkbox + Text */}
      <div className="flex items-start gap-3 max-w-2xl">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => setChecked(e.target.checked)}
          className="mt-1 w-4 h-4 accent-indigo-600"
        />

        <p className="text-sm text-gray-600 leading-relaxed">
          By selecting <span className="font-medium">‘Yes, I agree’</span>, you consent to sign the
          authorization form and confirm that the information provided is
          accurate to the best of your knowledge.
        </p>
      </div>

      {/* Button */}
      <button
        onClick={handleAgree}
        disabled={!checked}
        className={`px-6 py-2 rounded-lg text-sm text-white transition ${
          checked
            ? "bg-indigo-700 hover:bg-indigo-800"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Yes, I Agree
      </button>
    </div>
  );
}