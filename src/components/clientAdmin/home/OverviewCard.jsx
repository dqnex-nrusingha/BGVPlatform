// import { Maximize2 } from "lucide-react";

// function OverviewCard({
//   title,
//   value,
//   icon,
//   color,
// }) {

//   return (
//     <div className="w-full bg-white rounded-2xl p-3 shadow-sm border border-gray-100 flex flex-col justify-between min-h-23">

//       {/* TOP */}
//       <div className="flex items-start justify-between gap-3">

//         {/* TITLE */}
//         <h3 className="text-sm font-medium text-gray-800 leading-5">
//           {title}
//         </h3>

//         {/* ICON */}
//         <div
//           className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ${color}`}
//         >
//           {icon}
//         </div>

//       </div>

//       {/* BOTTOM */}
//       <div className="flex items-end justify-between mt-2">

//         {/* VALUE */}
//         <h1 className="text-3xl font-semibold text-gray-900 leading-none">
//           {value}
//         </h1>

//         {/* BUTTON */}
//         <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition">

//           <Maximize2 className="w-3 h-3 text-gray-700" />

//         </button>

//       </div>

//     </div>
//   );
// }

// export default OverviewCard;


import { Maximize2 } from "lucide-react";

function OverviewCard({ title, value, icon, color }) {
  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex flex-col justify-between min-h-27.5">

      {/* TOP */}
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-medium text-gray-700 leading-5">{title}</h3>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${color}`}>
          {icon}
        </div>
      </div>

      {/* BOTTOM */}
      <div className="flex items-end justify-between mt-3">
        <h1 className="text-4xl font-bold text-gray-900 leading-none">{value}</h1>
        <button className="w-6 h-6 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition">
          <Maximize2 className="w-3 h-3 text-gray-500" />
        </button>
      </div>

    </div>
  );
}

export default OverviewCard;