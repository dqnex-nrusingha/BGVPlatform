import React, { useRef, useState } from "react";
import { AlertCircle, Upload } from "lucide-react";
import DrugHeader from "./DrugHeader";
import DrugQuestion from "./DrugQuestion";

function DrugTestStep({ onNext }) {
  const [selected, setSelected] = useState("");
  const [details, setDetails] = useState("");
  const [file, setFile] = useState(null);
  const [error, setError] = useState(false);

  const fileRef = useRef(null);

  const questionData = {
    question: "Have You Taken The Drug Test?",
    options: [
      { label: "Yes", value: "yes" },
      { label: "No", value: "no" },
    ],
  };

  const handleSelect = (value) => {
    setSelected(value);
    setDetails("");
    setFile(null);
    setError(false);
  };

  const handleFileUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    const allowed = [
      "application/pdf",
      "image/png",
      "image/jpeg",
      "image/jpg",
    ];

    if (!allowed.includes(selectedFile.type)) {
      setError(true);
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError(true);
      return;
    }

    setFile(selectedFile);
    setError(false);
  };

  const handleSubmit = () => {
    if (!selected) {
      setError(true);
      return;
    }

    if (selected === "yes") {
      if (!details.trim()) {
        setError(true);
        return;
      }

      if (!file) {
        setError(true);
        return;
      }
    }

    setError(false);
    onNext && onNext();
  };

  return (
    <div className="w-full max-w-5xl bg-white rounded-2xl shadow-sm p-10 min-h-screen">
      <DrugHeader />

      <DrugQuestion
        question={questionData.question}
        options={questionData.options}
        selected={selected}
        onSelect={handleSelect}
      />

      {/* YES Selected */}
      {selected === "yes" && (
        <>
          {/* Details */}
          <div className="mt-8">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Please Provide Test Details{" "}
              <span className="text-red-500">*</span>
            </label>

            <textarea
              rows="5"
              value={details}
              placeholder="Please provide brief details about the drug test report"
              onChange={(e) => {
                setDetails(e.target.value);
                setError(false);
              }}
              className="w-full border border-[#d7dcff] rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-[#05058D]"
            />
          </div>

          {/* Upload Section */}
          <div className="mt-8">
            <h3 className="text-2xl font-medium text-[#05058D] mb-4">
              Please upload your drug test report
            </h3>

            <div
              onClick={() => fileRef.current.click()}
              className="border-2 border-dashed border-[#8B8CFF] rounded-2xl bg-[#F7F7FF] p-8 text-center cursor-pointer hover:bg-[#eef0ff]"
            >
              <div className="flex justify-center mb-3">
                <div className="w-12 h-12 rounded-xl bg-cyan-200 flex items-center justify-center">
                  <Upload size={22} className="text-blue-700" />
                </div>
              </div>

              {file ? (
                <>
                  <p className="text-[#05058D] font-medium">
                    Document upload successfully
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {file.name}
                  </p>
                </>
              ) : (
                <>
                  <p className="text-[#05058D] font-medium">
                    Click here to upload
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Supported format PDF, JPG, PNG, up to 5MB
                  </p>
                </>
              )}
            </div>

            <input
              type="file"
              hidden
              ref={fileRef}
              accept=".pdf,.png,.jpg,.jpeg"
              onChange={handleFileUpload}
            />
          </div>
        </>
      )}

      {/* Error */}
      {error && (
        <p className="mt-4 text-red-500 text-sm flex items-center gap-2">
          <AlertCircle size={14} />
          Please complete all required fields correctly.
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

export default DrugTestStep;