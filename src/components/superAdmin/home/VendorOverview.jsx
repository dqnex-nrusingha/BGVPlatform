import { Maximize2, Users, UserCheck, UserX, AlertTriangle } from "lucide-react";

const StatCard = ({ label, value, icon, iconBg }) => (
  <div className="bg-white rounded-2xl p-4 flex flex-col justify-between shadow-sm border border-gray-100 hover:shadow-md transition min-h-30">
    <div className="flex items-center justify-between">
      <p className="text-sm text-gray-600 font-medium">{label}</p>
      <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg}`}>
        {icon}
      </div>
    </div>
    <div className="flex items-end justify-between mt-3">
      <p className="text-3xl font-bold text-gray-900">{value}</p>
      <Maximize2 size={13} className="text-gray-300 cursor-pointer" />
    </div>
  </div>
);

const vendors = [
  {
    label: "Total Case", value: "20",
    icon: <Users size={16} className="text-indigo-400" />,
    iconBg: "bg-indigo-50",
  },
  {
    label: "Pending For Verification", value: "10",
    icon: <UserX size={16} className="text-orange-400" />,
    iconBg: "bg-orange-50",
  },
  {
    label: "Verified", value: "18",
    icon: <UserCheck size={16} className="text-green-500" />,
    iconBg: "bg-green-50",
  },
  {
    label: "SLA Breach", value: "09",
    icon: <AlertTriangle size={16} className="text-red-400" />,
    iconBg: "bg-red-50",
  },
];

export default function VendorOverview() {
  return (
    <div>
      <h2 className="text-base font-semibold text-gray-800 mb-3">Vendor</h2>
      <div className="grid grid-cols-2 gap-3">
        {vendors.map((v) => <StatCard key={v.label} {...v} />)}
      </div>
    </div>
  );
}