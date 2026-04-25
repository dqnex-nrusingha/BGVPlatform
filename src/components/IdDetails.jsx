import React, { useState } from "react";
import { Upload, ChevronDown, ChevronUp, X } from "lucide-react";

const docs = ["Passport", "PAN card", "Driving license", "Voter ID"];

export default function IdDetails() {
  const [data, setData] = useState({
    Passport: null,
    "PAN card": null,
    "Driving license": null,
    "Voter ID": null,
  });

  const [openCard, setOpenCard] = useState(null);

  const handleUpload = (e, docType) => {
    const file = e.target.files[0];
    if (!file) return;

    const allowed = ["image/png", "image/jpeg", "application/pdf"];

    if (!allowed.includes(file.type) || file.size > 5 * 1024 * 1024) {
      alert("Only PDF/JPG/PNG up to 5MB");
      return;
    }

    // Dummy OCR Data
    const fakeData = {
      passport_number: "LYA52014E",
      first_name: "Ramesh Kumar",
      last_name: "Mishra",
      dob: "25/5/1997",
      place_of_birth: "Odisha",
      issue_date: "21/6/2020",
      expiry_date: "04/10/2030",
      nationality: "Indian",
      gender: "Male",
    };

    setData((prev) => ({
      ...prev,
      [docType]: {
        fileName: file.name,
        size: (file.size / 1024 / 1024).toFixed(1),
        fields: fakeData,
      },
    }));

    setOpenCard(docType);
  };

  const removeFile = (docType) => {
    setData((prev) => ({
      ...prev,
      [docType]: null,
    }));
    setOpenCard(null);
  };

  return (
    <main className="bg-white rounded-2xl shadow-sm w-215 px-8 py-6">
      {/* Title */}
      <h1 className="text-[34px] font-bold text-[#05058D] mb-6">
        ID Details
      </h1>

      {/* Info Box */}
      <div className="rounded-2xl border border-[#6E72E8] bg-[#EEF0FF] px-8 py-6 mb-8">
        <p className="text-[15px] leading-8 text-[#222]">
          <span className="font-bold">How It Works:</span> Upload Your Identity
          Documents (Passport, PAN, Driving License, Or Voter ID) In JPG, PNG,
          Or PDF Format. Our OCR System Will Automatically Extract The
          Information From Your Document. Review The Extracted Data And Make Any
          Necessary Corrections Before Saving.
        </p>
      </div>

      {/* Section Heading */}
      <h2 className="text-[22px] font-semibold text-[#05058D] mb-5">
        Document Upload & Verification
      </h2>

      {docs.map((doc) => (
        <div key={doc} className="mb-5">
          {/* Card */}
          <div className="bg-white border border-[#D8D8F8] rounded-2xl shadow-md px-5 py-5">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="text-[18px] font-semibold text-[#05058D]">
                  {doc}
                </h3>

                {!data[doc] ? (
                  <p className="text-[13px] text-gray-500 mt-1">
                    Supported format PDF, JPG, PNG, up to 5MB
                  </p>
                ) : (
                  <p className="text-[13px] text-green-600 mt-1">
                    Upload successful
                  </p>
                )}
              </div>

              {!data[doc] ? (
                <label className="bg-[#05058D] text-white h-11 px-6 rounded-xl flex items-center gap-2 cursor-pointer text-[18px] shadow-md">
                  <Upload size={18} />
                  Upload
                  <input
                    hidden
                    type="file"
                    onChange={(e) => handleUpload(e, doc)}
                  />
                </label>
              ) : (
                <button
                  onClick={() =>
                    setOpenCard(openCard === doc ? null : doc)
                  }
                >
                  {openCard === doc ? (
                    <ChevronUp size={28} />
                  ) : (
                    <ChevronDown size={28} />
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Expanded OCR Box */}
          {openCard === doc && data[doc] && (
            <div className="mt-4 border border-[#D8D8F8] rounded-2xl px-5 py-6">
              {/* File Chip */}
              <div className="flex flex-col items-center mb-5">
                <div className="border border-[#6E72E8] px-4 py-2 rounded-xl flex items-center gap-3 text-sm text-[#05058D]">
                  {data[doc].fileName}
                  <X
                    size={16}
                    className="cursor-pointer"
                    onClick={() => removeFile(doc)}
                  />
                </div>

                <span className="text-xs text-gray-500 mt-2">
                  {data[doc].size} MB
                </span>
              </div>

              {/* OCR Fields */}
              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(data[doc].fields).map(([key, value]) => (
                  <div key={key}>
                    <label className="text-[14px] text-black block mb-1 capitalize">
                      {key.replaceAll("_", " ")}
                    </label>

                    <div className="relative">
                      <input
                        value={value}
                        readOnly
                        className="w-full h-10 rounded border border-gray-300 px-3 text-sm"
                      />
                      <span className="absolute right-2 top-3 text-[10px] text-green-600">
                        Verified
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Submit */}
              <div className="flex justify-center mt-8">
                <button className="w-28 h-10 rounded-xl bg-[#05058D] text-white text-sm">
                  Submit
                </button>
              </div>
            </div>
          )}
        </div>
      ))}
    </main>
  );
}