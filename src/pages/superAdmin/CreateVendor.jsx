import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ChevronRight,
  Building2,
  User,
  ShieldCheck,
  Info,
  CheckCircle2,
  X,
} from "lucide-react";

const SERVICES = [
  "Criminal Background Check",
  "Education Verification",
  "Prior Employment Check",
  "Identity Address Verification",
  "Drug Test",
];

// ── Tag Input ──────────────────────────────────────────
const TagInput = ({ value, onChange, tags, setTags, placeholder, error }) => {
  const handleKey = (e) => {
    if (e.key === "Enter" || e.key === ",") {
      e.preventDefault();
      const trimmed = value.trim();
      if (trimmed && !tags.includes(trimmed)) {
        setTags([...tags, trimmed]);
        onChange("");
      }
    }
    if (e.key === "Backspace" && !value && tags.length) {
      setTags(tags.slice(0, -1));
    }
  };

  const removeTag = (tag) => setTags(tags.filter((t) => t !== tag));

  return (
    <div className={`w-full border rounded-lg px-3 py-2 focus-within:ring-2 transition ${
      error
        ? "border-red-400 focus-within:ring-red-200 bg-red-50"
        : "border-gray-200 focus-within:ring-[#02027A]/20 bg-white"
    }`}>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKey}
        onBlur={() => {
          const trimmed = value.trim();
          if (trimmed && !tags.includes(trimmed)) {
            setTags([...tags, trimmed]);
            onChange("");
          }
        }}
        placeholder={tags.length === 0 ? placeholder : "Type and press Enter..."}
        className="w-full text-sm outline-none bg-transparent placeholder-gray-400 h-7"
      />
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-1.5 mt-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="flex items-center gap-1 bg-indigo-50 text-indigo-700 text-xs font-medium px-2.5 py-1 rounded-full border border-indigo-100"
            >
              {tag}
              <button
                onClick={() => removeTag(tag)}
                className="hover:text-red-500 transition ml-0.5"
              >
                <X size={10} />
              </button>
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Field ──────────────────────────────────────────────
const Field = ({ label, error, children }) => (
  <div>
    <label className="text-sm font-medium text-gray-700 mb-1 block">{label}</label>
    {children}
    {error && (
      <p className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
        <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
        {error}
      </p>
    )}
  </div>
);

const inputClass = (err) =>
  `w-full h-11 border rounded-lg px-4 text-sm focus:outline-none focus:ring-2 transition ${
    err
      ? "border-red-400 focus:ring-red-200 bg-red-50"
      : "border-gray-200 focus:ring-[#02027A]/20 bg-white"
  }`;

// ── Section Header ─────────────────────────────────────
const SectionHeader = ({ icon: Icon, title, subtitle }) => (
  <div className="mb-4">
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
        <Icon size={16} className="text-[#02027A]" />
      </div>
      <h2 className="text-base font-semibold text-gray-900">{title}</h2>
    </div>
    {subtitle && (
      <p className="text-[11px] text-gray-400 mt-1 ml-10">{subtitle}</p>
    )}
  </div>
);

// ── Main Page ──────────────────────────────────────────
export default function CreateVendor() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    vendorName: "",
    gst: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const [stateInput, setStateInput] = useState("");
  const [stateTags, setStateTags]   = useState([]);
  const [cityInput, setCityInput]   = useState("");
  const [cityTags, setCityTags]     = useState([]);

  const [errors, setErrors]                   = useState({});
  const [selectedServices, setSelectedServices] = useState({});
  const [serviceError, setServiceError]         = useState("");
  const [submitted, setSubmitted]               = useState(false);

  // ── Handlers ──────────────────────────────────────────
  const handleChange = (field, value) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: "" }));
  };

  const toggleService = (index) => {
    setSelectedServices((p) => ({
      ...p,
      [index]: p[index] !== undefined ? undefined : "",
    }));
    setServiceError("");
  };

  const handleSlaChange = (index, value) =>
    setSelectedServices((p) => ({ ...p, [index]: value }));

  // ── Validation ────────────────────────────────────────
  const validate = () => {
    const e = {};

    if (!form.vendorName.trim())
      e.vendorName = "Vendor company name is required.";

    if (!form.gst.trim())
      e.gst = "GST number is required.";

    if (!stateTags.length && !stateInput.trim())
      e.states = "Coverage state is required.";

    if (!cityTags.length && !cityInput.trim())
      e.cities = "Coverage city is required.";

    if (!form.fullName.trim())
      e.fullName = "Full name is required.";

    if (!form.email.trim()) {
      e.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      e.email = "Enter a valid email address.";
    }

    if (!form.phone.trim()) {
      e.phone = "Phone number is required.";
    } else if (!/^[+]?[\d\s\-]{10,15}$/.test(form.phone)) {
      e.phone = "Enter a valid phone number.";
    }

    const hasService = Object.values(selectedServices).some((v) => v !== undefined);
    if (!hasService) setServiceError("Please select at least one service.");
    else setServiceError("");

    Object.entries(selectedServices).forEach(([idx, val]) => {
      if (val !== undefined && (!val || isNaN(val) || Number(val) <= 0))
        e[`sla_${idx}`] = "Enter valid days.";
    });

    return e;
  };

  // ── Save ──────────────────────────────────────────────
  const handleSave = () => {
    const e = validate();
    setErrors(e);
    const hasService = Object.values(selectedServices).some((v) => v !== undefined);
    if (Object.keys(e).length > 0 || !hasService) return;
    setSubmitted(true);
    setTimeout(() => navigate(-1), 1500);
  };

  // ── Success Screen ─────────────────────────────────────
  if (submitted) {
    return (
      <div className="h-[92vh] flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <CheckCircle2 size={56} className="text-green-500 mx-auto mb-4" />
          <h2 className="text-xl font-bold text-gray-800">Vendor Created!</h2>
          <p className="text-sm text-gray-400 mt-1">Redirecting back...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-[92vh] px-6 py-5">

      {/* BACK */}
      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#02027A] transition mb-4 w-fit"
      >
        <ArrowLeft size={15} /> Back
      </button>

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-[#02027A]">Create A New Vendor</h1>
      <p className="text-sm text-gray-400 mt-1">
        Create a client account to manage users and verifications.
      </p>

      {/* BREADCRUMB */}
      <div className="flex items-center gap-1 text-xs text-gray-400 mt-3 mb-4">
        <span>Vendor</span>
        <ChevronRight size={12} />
        <span className="text-gray-600 font-medium">Create Vendor</span>
      </div>

      {/* SCROLLABLE CARD */}
      <div className="flex-1 overflow-y-auto">
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-5 max-w-3xl">

          {/* ── SECTION 1: Vendor Details ── */}
          <SectionHeader icon={Building2} title="Vendor Details & Coverage" />

          <div className="space-y-4 -mt-2">

            {/* ROW 1 — Company Name + GST */}
            <div className="grid grid-cols-2 gap-4">
              <Field
                label={<>Vendor Company Name <span className="text-red-500">*</span></>}
                error={errors.vendorName}
              >
                <input
                  value={form.vendorName}
                  onChange={(e) => handleChange("vendorName", e.target.value)}
                  placeholder="Apex background screeners"
                  className={inputClass(errors.vendorName)}
                />
              </Field>

              <Field
                label={<>GST Number <span className="text-red-500">*</span></>}
                error={errors.gst}
              >
                <input
                  value={form.gst}
                  onChange={(e) => handleChange("gst", e.target.value)}
                  placeholder="30QAZWS7788E1Z2"
                  className={inputClass(errors.gst)}
                />
              </Field>
            </div>

            {/* ROW 2 — States + Cities tag inputs */}
            <div className="grid grid-cols-2 gap-4">
              <Field
                label={<>Coverage Area (States) <span className="text-red-500">*</span></>}
                error={errors.states}
              >
                <TagInput
                  value={stateInput}
                  onChange={setStateInput}
                  tags={stateTags}
                  setTags={(tags) => {
                    setStateTags(tags);
                    if (errors.states) setErrors((p) => ({ ...p, states: "" }));
                  }}
                  placeholder="Type state, press Enter"
                  error={errors.states}
                />
              </Field>

              <Field
                label={<>Coverage Area (Cities) <span className="text-red-500">*</span></>}
                error={errors.cities}
              >
                <TagInput
                  value={cityInput}
                  onChange={setCityInput}
                  tags={cityTags}
                  setTags={(tags) => {
                    setCityTags(tags);
                    if (errors.cities) setErrors((p) => ({ ...p, cities: "" }));
                  }}
                  placeholder="Type city, press Enter"
                  error={errors.cities}
                />
              </Field>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* ── SECTION 2: Primary Contact ── */}
          <SectionHeader icon={User} title="Primary Contact Person" />

          <div className="space-y-4 -mt-2">
            <Field
              label={<>Full Name <span className="text-red-500">*</span></>}
              error={errors.fullName}
            >
              <input
                value={form.fullName}
                onChange={(e) => handleChange("fullName", e.target.value)}
                placeholder="Manav Joshi"
                className={inputClass(errors.fullName)}
              />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field
                label={<>Contact Email <span className="text-red-500">*</span></>}
                error={errors.email}
              >
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  placeholder="manav.joshi@example.com"
                  className={inputClass(errors.email)}
                />
                {!errors.email && (
                  <p className="text-[10px] text-gray-400 mt-1">Must be unique across platform.</p>
                )}
              </Field>

              <Field
                label={<>Phone Number <span className="text-red-500">*</span></>}
                error={errors.phone}
              >
                <input
                  value={form.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  placeholder="+91 848 521 4690"
                  className={inputClass(errors.phone)}
                />
                {!errors.phone && (
                  <p className="text-[10px] text-gray-400 mt-1">Must be a unique active number.</p>
                )}
              </Field>
            </div>
          </div>

          <hr className="border-gray-100" />

          {/* ── SECTION 3: Services & SLA ── */}
          <SectionHeader
            icon={ShieldCheck}
            title="Services Offered & SLA"
            subtitle="Select the services this vendor provides and define the expected turnaround time (SLA) for each."
          />

          {serviceError && (
            <p className="text-[11px] text-red-500 -mt-3 flex items-center gap-1">
              <span className="inline-block w-1 h-1 rounded-full bg-red-500" />
              {serviceError}
            </p>
          )}

          <div className="space-y-2.5 -mt-2">
            {SERVICES.map((service, index) => {
              const isChecked = selectedServices[index] !== undefined;
              const slaErr = errors[`sla_${index}`];

              return (
                <div
                  key={index}
                  onClick={() => toggleService(index)}
                  className={`rounded-xl border px-4 py-3.5 transition-all cursor-pointer ${
                    isChecked
                      ? "border-[#02027A] bg-indigo-50/40 shadow-sm"
                      : "border-gray-200 bg-white hover:border-gray-300"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 accent-[#02027A] cursor-pointer"
                    />
                    <span className="flex-1 text-sm font-medium text-gray-800">{service}</span>

                    {isChecked && (
                      <div
                        className="flex items-center gap-2"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Info size={13} className="text-gray-400" />
                        <div className={`flex items-center border rounded-lg overflow-hidden h-8 ${
                          slaErr ? "border-red-400" : "border-gray-300"
                        }`}>
                          <input
                            type="number"
                            value={selectedServices[index]}
                            onChange={(e) => handleSlaChange(index, e.target.value)}
                            placeholder="10"
                            min="1"
                            className="w-14 px-2 text-sm text-center outline-none bg-white"
                          />
                          <div className="px-2.5 text-xs text-gray-500 border-l border-gray-300 h-full flex items-center bg-gray-50">
                            Days
                          </div>
                        </div>
                        {slaErr && (
                          <span className="text-[10px] text-red-500">{slaErr}</span>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>

      {/* BUTTONS */}
      <div className="max-w-3xl w-full mt-4 flex justify-end gap-3">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl bg-[#02027A] text-white text-sm font-semibold hover:bg-[#01016a] transition shadow-sm"
        >
          Save Vendor Details
        </button>
      </div>

    </div>
  );
}