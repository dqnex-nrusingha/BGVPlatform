import { useState, useRef } from "react";

export default function OtpModal({
  open,
  onClose,
  onVerify,
}) {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [error, setError] = useState(false);

  const inputRefs = useRef([]);

  if (!open) return null;

  const handleChange = (value, index) => {
    if (!/^\d?$/.test(value)) return;

    const updated = [...otp];
    updated[index] = value;
    setOtp(updated);

    // Move to next input automatically
    if (value && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    // Backspace -> previous field
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const submitOtp = () => {
    const finalOtp = otp.join("");

    if (finalOtp === "123456") {
      setError(false);
      onVerify();
    } else {
      setError(true);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center z-50">
      
      <div className="bg-white w-162.5 rounded-3xl border border-indigo-400 px-10 py-8">
        
        <h2 className="text-3xl font-bold text-center text-indigo-900">
          Verify your Aadhar Details
        </h2>

        <p className="text-center text-indigo-700 mt-5">
          OTP send to your Aadhar register mobile no
        </p>

        <p className="text-center text-indigo-800 font-medium mt-1">
          +91 124*****54
        </p>

        {/* OTP Boxes */}
        <div className="flex justify-center gap-4 mt-8">
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              maxLength="1"
              value={digit}
              onChange={(e) =>
                handleChange(e.target.value, index)
              }
              onKeyDown={(e) =>
                handleKeyDown(e, index)
              }
              className={`w-14 h-14 text-center text-2xl rounded-xl border outline-none ${
                error
                  ? "border-red-500"
                  : "border-indigo-700"
              }`}
            />
          ))}
        </div>

        {error && (
          <p className="text-center text-red-500 mt-5">
            The OTP you entered is invalid
          </p>
        )}

        <p className="text-center text-2xl font-semibold text-indigo-900 mt-8">
          Don’t Get OTP?
        </p>

        <p className="text-center text-indigo-800 mt-1 cursor-pointer">
          Resend Code
        </p>

        <div className="flex justify-center mt-6">
          <button
            onClick={submitOtp}
            className="px-8 h-11 bg-indigo-900 text-white rounded-xl"
          >
            Submit otp
          </button>
        </div>
      </div>
    </div>
  );
}