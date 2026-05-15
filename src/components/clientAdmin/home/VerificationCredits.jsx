import { CreditCard, FileText, Wallet } from "lucide-react";

export default function VerificationCredits() {
  const credits = [
    {
      label: "Total Credits",
      value: "5,000",
      icon: <FileText size={18} className="text-white/70" />,
    },
    {
      label: "Credits Used",
      value: "3,850",
      icon: <CreditCard size={18} className="text-white/70" />,
    },
    {
      label: "Available Remaining",
      value: "1,150",
      icon: <Wallet size={18} className="text-white/70" />,
    },
  ];

  return (
    <div className="bg-[#1c1c4d] rounded-2xl p-5 text-white flex flex-col h-full">

      {/* TOP */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <CreditCard size={18} className="text-white/80" />
          <span className="text-sm font-semibold">Verification Credits</span>
        </div>
        {/* Donut icon placeholder */}
        <div className="w-10 h-10 rounded-full border-4 border-white/20 border-t-white animate-spin-slow" />
      </div>

      {/* PLAN BADGE */}
      <div className="mb-5">
        <span className="bg-indigo-500/30 text-indigo-300 text-xs px-3 py-1 rounded-full">
          Standard Employment Plan
        </span>
      </div>

      {/* CREDIT ROWS */}
      <div className="flex flex-col gap-3 flex-1">
        {credits.map(({ label, value, icon }) => (
          <div
            key={label}
            className="bg-white/10 rounded-xl px-4 py-4 flex items-center justify-between"
          >
            <div>
              <p className="text-xs text-white/60 mb-1">{label}</p>
              <p className="text-2xl font-bold">{value}</p>
            </div>
            <div className="bg-white/10 p-2 rounded-lg">{icon}</div>
          </div>
        ))}
      </div>
    </div>
  );
}