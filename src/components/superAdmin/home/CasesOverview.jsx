import { Users, UserCheck, Activity, Clock3, XCircle } from "lucide-react";

/* ───────────────── CARD ───────────────── */

const StatCard = ({ label, value, icon, iconBg, borderColor, cardBg }) => (
  <div className={`relative rounded-2xl p-5 overflow-hidden ${cardBg}`}>
    {/* LEFT BORDER */}
    <div
      className={`absolute left-0 top-5 bottom-5 w-1 rounded-full ${borderColor}`}
    />

    {/* TOP */}
    <div className="flex items-start justify-between">
      <h3 className="text-[15px] font-semibold text-[#202020] leading-5">
        {label}
      </h3>

      <div
        className={`w-10 h-10 rounded-full flex items-center justify-center ${iconBg}`}
      >
        {icon}
      </div>
    </div>

    {/* VALUE */}
    <div className="mt-7">
      <h1 className="text-[46px] font-bold leading-none text-[#202020]">
        {value}
      </h1>
    </div>
  </div>
);

/* ───────────────── DATA ───────────────── */

const cases = [
  {
    label: "Total Client",
    value: "20",

    icon: <Users size={18} className="text-[#5B4CEB]" />,

    iconBg: "bg-[#DCD4FF]",

    borderColor: "bg-[#5B4CEB]",

    cardBg: "bg-[#F4F2FF]",
  },

  {
    label: "Verified",
    value: "09",

    icon: <UserCheck size={18} className="text-[#2AA8F2]" />,

    iconBg: "bg-[#D7F1FF]",

    borderColor: "bg-[#2AA8F2]",

    cardBg: "bg-[#EEF9FF]",
  },

  {
    label: "Active Cases",
    value: "10",

    icon: <Activity size={18} className="text-[#36C95F]" />,

    iconBg: "bg-[#D9F8E2]",

    borderColor: "bg-[#36C95F]",

    cardBg: "bg-[#EDF9F0]",
  },

  {
    label: "On Hold",
    value: "09",

    icon: <Clock3 size={18} className="text-[#FF8A3D]" />,

    iconBg: "bg-[#FFE6D7]",

    borderColor: "bg-[#FF8A3D]",

    cardBg: "bg-[#FFF4EC]",
  },

  {
    label: "Awaiting Input",
    value: "10",

    icon: <Clock3 size={18} className="text-[#D8AE20]" />,

    iconBg: "bg-[#FFF1BE]",

    borderColor: "bg-[#E7C94B]",

    cardBg: "bg-[#FFFBEA]",
  },

  {
    label: "Rejected",
    value: "18",

    icon: <XCircle size={18} className="text-[#FF5C5C]" />,

    iconBg: "bg-[#FFDCDC]",

    borderColor: "bg-[#FF5C5C]",

    cardBg: "bg-[#FFF1F1]",
  },
];

/* ───────────────── COMPONENT ───────────────── */

export default function CasesOverview() {
  return (
    <div className="bg-[#F4F6FF] rounded-2xl p-5">
      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-[28px] font-bold text-[#202020]">Client</h2>

        <div className="text-right">
          <p className="text-xs text-gray-500">Total Clients</p>

          <h3 className="text-[42px] font-bold text-[#202020] leading-none">
            140
          </h3>
        </div>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4">
        {cases.map((item) => (
          <StatCard key={item.label} {...item} />
        ))}
      </div>
    </div>
  );
}
