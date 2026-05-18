import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, ChevronRight, Building2, User, ShieldCheck, Info } from "lucide-react";

const services = [
  "Criminal Background Check",
  "Education Verification",
  "Prior Employment Check",
  "Identity Address Verification",
  "Prior Employment Check",
];

export default function CreateVendor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    vendorName: "",
    states: "",
    cities: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [selectedServices, setSelectedServices] = useState({});

  const handleChange = (field, value) =>
    setForm((p) => ({ ...p, [field]: value }));

  const toggleService = (index) =>
    setSelectedServices((p) => ({
      ...p,
      [index]: p[index] !== undefined ? undefined : "",
    }));

  const handleSlaChange = (index, value) =>
    setSelectedServices((p) => ({ ...p, [index]: value }));

  const handleSave = () => {
    console.log("form", form);
    console.log("services", selectedServices);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto p-5">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#02027A] transition mb-4"
        >
          <ArrowLeft size={16} /> Back
        </button>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-[#02027A] mb-1">Create A New Vendor</h1>
        <p className="text-sm text-gray-500 mb-2">Create a client account to manage users and verifications.</p>

        {/* BREADCRUMB */}
        <div className="flex items-center gap-1 text-sm text-gray-400 mb-6">
          <span>Vendor</span>
          <ChevronRight size={14} />
          <span className="text-gray-700 font-medium">Create Vendor</span>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-8">
          {/* Vendor Details */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <Building2 size={18} className="text-[#02027A]" />
              <h2 className="text-base font-semibold text-gray-800">Vendor Details & Coverage</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Vendor Company Name <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  placeholder="Apex background screeners"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Coverage Area (States) <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.states}
                    onChange={(e) => handleChange("states", e.target.value)}
                    placeholder="Karnataka"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Coverage Area (Cities) <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.cities}
                    onChange={(e) => handleChange("cities", e.target.value)}
                    placeholder="Bengaluru"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
                  />
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* Primary Contact */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <User size={18} className="text-[#02027A]" />
              <h2 className="text-base font-semibold text-gray-800">Primary Contact Person</h2>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  value={form.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  placeholder="Manav Joshi"
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Contact Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="manav.joshi@example.com"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Must be unique across the platform.</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1 block">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+91 848 521 4690"
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
                  />
                  <p className="text-[10px] text-gray-400 mt-1">Must be a unique active number.</p>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-100" />

         {/* ── SERVICES & SLA ── */}
<div>
  <div className="flex items-center gap-2 mb-1">
    <ShieldCheck size={18} className="text-[#02027A]" />
    <h2 className="text-base font-semibold text-gray-800">Services Offered & SLA</h2>
  </div>
  <p className="text-xs text-gray-400 mb-4 ml-7">
    Select the services this vendor provides and define the expected turnaround time (SLA) for each.
  </p>

  <div className="space-y-3">
    {services.map((service, index) => {
      const isChecked = selectedServices[index] !== undefined;
      return (
        <div
          key={index}
          className={`flex items-center gap-3 border rounded-xl px-4 py-3 transition ${
            isChecked ? "border-[#02027A] bg-indigo-50/30" : "border-gray-200 bg-white"
          }`}
        >
          {/* CHECKBOX */}
          <input
            type="checkbox"
            checked={isChecked}
            onChange={() => toggleService(index)}
            className="w-4 h-4 accent-[#02027A] cursor-pointer"
          />

          {/* LABEL */}
          <span className="flex-1 text-sm text-gray-700">{service}</span>

          {/* INFO + SLA input (only when checked) */}
          {isChecked && (
            <div className="flex items-center gap-2">
              <Info size={14} className="text-gray-400" />
              <input
                type="number"
                value={selectedServices[index]}
                onChange={(e) => handleSlaChange(index, e.target.value)}
                placeholder="10"
                className="w-16 border border-gray-200 rounded-lg px-2 py-1 text-sm text-center focus:outline-none focus:ring-2 focus:ring-[#02027A]/20"
              />
              <span className="text-sm text-gray-400">Days</span>
            </div>
          )}
        </div>
      );
    })}
  </div>
</div>

{/* ── ACTION BUTTONS ── */}
<div className="flex justify-end gap-3 pt-6">

  <button
    onClick={() => navigate(-1)}
    className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
  >
    Cancel
  </button>

  <button
    onClick={handleSave}
    className="px-6 py-2.5 rounded-xl bg-[#02027A] text-white text-sm font-semibold hover:bg-[#01016a] transition"
  >
    Save Vendor Details
  </button>

</div>

        </div>
      </div>
    </div>
  );
}