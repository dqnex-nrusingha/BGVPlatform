import { useNavigate, useParams } from "react-router-dom";
import { ArrowLeft, ChevronRight, MapPin, User, ShieldCheck, Clock, CheckCircle2, Award } from "lucide-react";

// ── Quality Score Ring ─────────────────────────────────
const QualityScoreCard = ({ score = 96.5 }) => {
  const radius = 54;
  const circumference = 2 * Math.PI * radius;
  const progress = (score / 100) * circumference;
  const gap = circumference - progress;


  return (
    <div className="bg-[#E9E8FF] rounded-2xl p-6 flex flex-col h-full min-h-80">

  {/* TITLE */}
  <div className="flex items-center gap-2 mb-4">
    <div className="w-7 h-7 rounded-full flex items-center justify-center">
      <Award size={16} className="text-[#6C63FF]" />
    </div>

    <h3 className="text-[18px] font-semibold text-[#02027A]">
      Quality Score
    </h3>
  </div>

  {/* CONTENT */}
  <div className="flex-1 flex flex-col items-center justify-center relative">

    {/* Shield */}
    <div className="absolute top-0 right-2">
      <ShieldCheck
        size={90}
        className="text-[#B7B2FF]"
        strokeWidth={1.5}
      />
    </div>

    {/* DONUT */}
    <div className="relative flex items-center justify-center mt-2">
      <svg width="170" height="170" viewBox="0 0 170 170">

        {/* TRACK */}
        <circle
          cx="85"
          cy="85"
          r={radius}
          fill="none"
          stroke="#D7D5FF"
          strokeWidth="10"
        />

        {/* PROGRESS */}
        <circle
          cx="85"
          cy="85"
          r={radius}
          fill="none"
          stroke="#0BA000"
          strokeWidth="10"
          strokeLinecap="round"
          strokeDasharray={`${progress-18} ${circumference}`}
          transform="rotate(-120 85 85)"
        />
      </svg>

      {/* CENTER TEXT */}
      <div className="absolute">
        <p className="text-[34px] font-bold text-[#02027A]">
          {score}%
        </p>
      </div>
    </div>

    {/* BADGE */}
    <div className="mt-4">
      <span className="bg-[#C8F3CC] text-[#168B2D] text-[11px] font-medium px-4 py-1.5 rounded-full">
        Excellent Rating
      </span>
    </div>

    {/* TEXT */}
    <p className="text-[11px] text-[#4B4B8A] text-center leading-4 mt-5">
      Based On Accuracy And SLA
      <br />
      Adherence Over 90 Days.
    </p>

  </div>
</div>
  );
};

// ── Section Wrapper ────────────────────────────────────
const Section = ({ icon: Icon, title, children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
    <div className="flex items-center gap-2 mb-5">
      <div className="w-8 h-8 rounded-lg bg-indigo-50 flex items-center justify-center">
        <Icon size={16} className="text-[#02027A]" />
      </div>
      <h2 className="text-base font-semibold text-gray-800">{title}</h2>
    </div>
    {children}
  </div>
);

// ── Main Page ──────────────────────────────────────────
export default function ViewVendor() {
  const navigate = useNavigate();
  const { id } = useParams();

  // Static vendor data — replace with API call using id
  const vendor = {
    states: ["Karnataka", "Maharashtra", "Delhi NCR"],
    cities: "Bengaluru, Mumbai, Pune, New Delhi",
    gst: "30QAZWS7788E1Z2",
    fullName: "Manav Joshi",
    role: "Head Of Operations",
    email: "Manav.Joshi@Example.Com",
    phone: "+91 848 521 4690",
    services: [
      { name: "Criminal Background Check", sla: "3 day SLA" },
      { name: "Education Verification",     sla: "5 day SLA" },
      { name: "Identity & Address Verification", sla: "6 day SLA" },
      { name: "Prior Employment Check", sla: "6 day SLA" },
    ],
    qualityScore: 96.5,
  };

  return (
    <div className="flex flex-col h-[92vh] bg-gray-50">

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-6 py-5">

        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#02027A] transition mb-4 w-fit"
        >
          <ArrowLeft size={15} /> Back
        </button>

        {/* TITLE */}
        <h1 className="text-2xl font-bold text-[#02027A]">View Vendor Details</h1>

        {/* BREADCRUMB */}
        <div className="flex items-center gap-1 text-xs text-gray-400 mt-2 mb-5">
          <span>Vendor</span>
          <ChevronRight size={12} />
          <span className="text-gray-600 font-medium">View Vendor</span>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-5">

          {/* LEFT — sections */}
          <div className="col-span-8 space-y-5">

            {/* COVERAGE AREA */}
            <Section icon={MapPin} title="Coverage Area">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-xs text-gray-400 mb-2">Supported States</p>
                  <div className="flex flex-wrap gap-2">
                    {vendor.states.map((s) => (
                      <span key={s} className="bg-indigo-50 text-indigo-700 text-xs font-medium px-3 py-1 rounded-full border border-indigo-100">
                        {s}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-gray-400 mt-4 mb-1">Supported Cities</p>
                  <p className="text-sm text-gray-700">{vendor.cities}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">GST Number</p>
                  <p className="text-sm font-medium text-gray-700">{vendor.gst}</p>
                </div>
              </div>
            </Section>

            {/* PRIMARY CONTACT */}
            <Section icon={User} title="Primary Contact Person">
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <p className="text-xs text-gray-400 mb-1">Full Name</p>
                  <p className="text-sm font-semibold text-gray-800">{vendor.fullName}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{vendor.role}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Contact Email</p>
                  <p className="text-sm text-indigo-500 font-medium">{vendor.email}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-400 mb-1">Phone Number</p>
                  <p className="text-sm text-gray-700">{vendor.phone}</p>
                </div>
              </div>
            </Section>

            {/* SERVICES & SLAs */}
            <Section icon={ShieldCheck} title="Services Offered & SLAs">
              <div className="space-y-3">
                {vendor.services.map((s, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border border-gray-100 rounded-xl px-4 py-3 hover:bg-gray-50 transition"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle2 size={16} className="text-green-500" />
                      <span className="text-sm text-gray-700">{s.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-indigo-50 text-indigo-600 text-xs font-semibold px-3 py-1.5 rounded-lg">
                      <Clock size={12} />
                      {s.sla}
                    </div>
                  </div>
                ))}
              </div>
            </Section>

          </div>

          {/* RIGHT — Quality Score */}
          <div className="col-span-4 h-1/2">
            <QualityScoreCard score={vendor.qualityScore} />
          </div>

        </div>
      </div>

      {/* FIXED BOTTOM BUTTONS */}
      <div className="bg-white border-t border-gray-100 px-6 py-4 flex justify-end gap-3 shadow-[0_-2px_10px_rgba(0,0,0,0.05)]">
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-xl border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
        >
          Back
        </button>
        <button
          onClick={() => navigate(-1)}
          className="px-6 py-2.5 rounded-xl bg-[#02027A] text-white text-sm font-semibold hover:bg-[#01016a] transition"
        >
          Done
        </button>
      </div>

    </div>
  );
}