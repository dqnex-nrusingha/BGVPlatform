// export default function StepItem({
//   label,
//   active = false,
//   completed = false,
//   last = false,
// }) {
//   return (
//     <div className="flex gap-6">
      
//       {/* Dot + Line */}
//       <div className="flex flex-col items-center">
        
//         {/* Step Dot */}
//         <div
//           className={`w-3 h-3 rounded-full ${
//             active
//               ? "bg-blue-600"
//               : completed
//               ? "bg-green-500"
//               : "bg-gray-300"
//           }`}
//         ></div>

//         {/* Vertical Line */}
//         {!last && (
//           <div className="w-px h-8 bg-gray-300 mt-1"></div>
//         )}
//       </div>

//       {/* Label */}
//       <p
//         className={`text-lg -mt-1 ${
//           active
//             ? "text-blue-700 font-semibold"
//             : completed
//             ? "text-gray-700"
//             : "text-gray-400"
//         }`}
//       >
//         {label}
//       </p>
//     </div>
//   );
// }

export default function StepItem({
  label,
  active = false,
  completed = false,
  last = false,
  onClick,
}) {
  return (
    <div
      onClick={onClick}
      className="flex gap-6 cursor-pointer"
    >
      
      {/* Dot + Line */}
      <div className="flex flex-col items-center">
        
        {/* Step Dot */}
        <div
          className={`w-3 h-3 rounded-full ${
            active
              ? "bg-blue-600"
              : completed
              ? "bg-green-500"
              : "bg-gray-300"
          }`}
        ></div>

        {/* Vertical Line */}
        {!last && (
          <div className="w-px h-8 bg-gray-300 mt-1"></div>
        )}
      </div>

      {/* Label */}
      <p
        className={`text-lg -mt-1 ${
          active
            ? "text-blue-700 font-semibold"
            : completed
            ? "text-gray-700"
            : "text-gray-400"
        }`}
      >
        {label}
      </p>
    </div>
  );
}