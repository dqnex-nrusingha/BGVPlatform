import { Monitor, BarChart2 } from "lucide-react";

export default function RevenueGrowth() {
  return (
    <div>
      {/* Title */}
      <h2 className="text-base font-semibold text-gray-800 mb-3 flex items-center gap-2">
        <Monitor size={16} className="text-gray-500" />
        Revenue & Growth
      </h2>

      <div className="bg-[#02027A] rounded-2xl p-6 text-white">

        {/* TOP — main revenue + arrow */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <p className="text-sm text-white/60 mb-1">Revenue (FY 26-27)</p>
            <p className="text-4xl font-bold">₹14.2M</p>
          </div>

          {/* Arrow chart illustration */}
          <div className="relative w-32 h-20">
            <svg viewBox="0 0 120 70" className="w-full h-full">
              {/* Trend line */}
              <polyline
                points="0,60 30,45 55,50 80,25 100,15"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              {/* Arrow head */}
              <polyline
                points="88,8 105,12 100,28"
                fill="none"
                stroke="white"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* BOTTOM — two sub cards */}
        <div className="flex flex-col gap-4">

          <div className="bg-white/30 rounded-xl px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-white/60">Revenue (This Month)</p>
              <BarChart2 size={15} className="text-white/40" />
            </div>
            <p className="text-xl font-bold">₹14.2M</p>
          </div>

          <div className="bg-white/30 rounded-xl px-4 py-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-xs text-white/60">Active Clients</p>
              <BarChart2 size={15} className="text-white/40" />
            </div>
            <p className="text-xl font-bold">342 Active</p>
          </div>

        </div>
      </div>
    </div>
  );
}