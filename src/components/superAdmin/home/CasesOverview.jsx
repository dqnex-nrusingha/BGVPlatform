import { Maximize2, TrendingUp, TrendingDown, Activity, Clock, CheckCircle, XCircle } from "lucide-react";

const StatCard = ({ label, value, icon, iconBg, trend, trendValue, trendUp }) => (
  <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition min-h-30">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600 font-medium">{label}</p>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
    </div>
    <div>
      <p className="text-3xl font-bold text-gray-900 mt-2">{value}</p>
      <div className="flex items-center justify-between mt-1">
        <div className="flex items-center gap-1">
          {trendUp ? (
            <TrendingUp size={13} className="text-green-500" />
          ) : (
            <TrendingDown size={13} className="text-red-400" />
          )}
          <span className={`text-xs font-medium ${trendUp ? "text-green-500" : "text-red-400"}`}>
            {trendValue}
          </span>
        </div>
        <Maximize2 size={13} className="text-gray-300 cursor-pointer" />
      </div>
    </div>
  </div>
);

const cases = [
  {
    label: "Active", value: "50",
    icon: <Activity size={16} className="text-green-500" />,
    iconBg: "bg-green-50", trendUp: true, trendValue: "5.4",
  },
  {
    label: "On Hold", value: "11",
    icon: <Clock size={16} className="text-indigo-400" />,
    iconBg: "bg-indigo-50", trendUp: true, trendValue: "8.4",
  },
  {
    label: "Closed", value: "09",
    icon: <CheckCircle size={16} className="text-orange-400" />,
    iconBg: "bg-orange-50", trendUp: false, trendValue: "2.4",
  },
  {
    label: "Reject", value: "12",
    icon: <XCircle size={16} className="text-red-400" />,
    iconBg: "bg-red-50", trendUp: false, trendValue: "0.4",
  },
];

export default function CasesOverview() {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 mb-3">Cases</h2>
      <div className="grid grid-cols-2 gap-3">
        {cases.map((c) => <StatCard key={c.label} {...c} />)}
      </div>
    </div>
  );
}