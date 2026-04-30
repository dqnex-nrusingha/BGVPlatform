// // import AddressFields from "./AddressFields";

// export default function PermanentAddressSection() {
//   return (
//     <div className="w-full max-w-190 mx-auto mt-5">
      
//       {/* Title */}
//       <h2 className="text-xl font-semibold text-[#101A78]">
//         Permanent Address
//       </h2>

//       {/* Upload Success Example */}
//       <div className="mt-4 border-2 border-dashed border-indigo-400 rounded-xl p-5 text-center">
//         <div className="text-4xl">✅</div>

//         <p className="mt-2 font-medium text-indigo-800">
//           Document Upload Successfully
//         </p>

//         <p className="text-sm text-gray-500">
//           document.pdf • 232 KB
//         </p>

//         <button className="mt-3 border px-4 py-1 rounded text-sm text-indigo-700">
//           Upload Different Document
//         </button>
//       </div>

//       {/* Address Fields */}
//       {/* <div className="mt-5 w-full">
//         <AddressFields />
//       </div> */}
//     </div>
//   );
// }

import AddressFields from "./AddressFields";

export default function PermanentAddressSection() {
  return (
    <div className="w-full max-w-190 mx-auto mt-5">
      
      {/* Title */}
      <h2 className="text-xl font-semibold text-[#101A78]">
        Permanent Address
      </h2>

      {/* Address Fields Only */}
      <div className="mt-4 w-full">
        <AddressFields />
      </div>
    </div>
  );
}