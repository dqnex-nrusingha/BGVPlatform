import { Maximize2 } from "lucide-react";

function OverviewCard({
  title,
  value,
  icon,
  color,
}) {

  return (
    <div className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between min-h-37.5">

      {/* TOP */}
      <div className="flex items-start justify-between">

        <h3 className="text-xl font-medium text-gray-800">
          {title}
        </h3>

        <div
          className={`w-12 h-12 rounded-full flex items-center justify-center ${color}`}
        >
          {icon}
        </div>

      </div>

      {/* BOTTOM */}
      <div className="flex items-end justify-between mt-6">

        <h1 className="text-5xl font-semibold text-gray-900">
          {value}
        </h1>

        <button className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition">

           <Maximize2 className="w-4 h-4 text-gray-700" />

        </button>

      </div>

    </div>
  );
}

export default OverviewCard;