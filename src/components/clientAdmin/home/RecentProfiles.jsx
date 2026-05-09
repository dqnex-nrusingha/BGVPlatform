// const profiles = [
//   "Deepak Mukherji",
//   "Devika Banaji",
//   "Rena Biswal",
//   "Arjun Malhotra",
//   "Ananya Banerjee",
//   "Kyra Pillai",
// ];

// function RecentProfiles() {

//   return (
//     <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full overflow-hidden">

//       {/* TITLE */}
//       <h2 className="text-lg font-semibold mb-4">
//         Recent Profiles
//       </h2>

//       {/* LIST */}
//       <div className="space-y-3">

//         {profiles.map((item, index) => (

//           <div
//             key={index}
//             className="flex items-center gap-3"
//           >

//             {/* AVATAR */}
//             <img
//               src={`https://i.pravatar.cc/150?img=${index + 10}`}
//               alt=""
//               className="w-9 h-9 rounded-full object-cover"
//             />

//             {/* CONTENT */}
//             <div className="min-w-0">

//               <h4 className="text-sm font-medium text-gray-800 truncate">
//                 {item}
//               </h4>

//               <p className="text-[11px] text-gray-500">
//                 Candidate
//               </p>

//             </div>

//           </div>
//         ))}

//       </div>

//     </div>
//   );
// }

// export default RecentProfiles;


const profiles = [
  { name: "Deepak Mukherji", role: "Candidate", time: "2.4k day ago", img: 10 },
  { name: "Devika Banaji",   role: "Candidate", time: "4.6k day ago", img: 11 },
  { name: "Rena Biswal",     role: "HR",        time: "4.6k day ago", img: 12 },
  { name: "Arjun Malhotra",  role: "HR",        time: "4.6k day ago", img: 13 },
  { name: "Ananya Banerjee", role: "Candidate", time: "4.6k day ago", img: 14 },
  { name: "Kyra Pillai",     role: "Candidate", time: "4.6k day ago", img: 15 },
  { name: "Dhruv Verma",     role: "Candidate", time: "5.4k day ago", img: 16 },
  { name: "Aryan Mehra",     role: "Candidate", time: "5.4k day ago", img: 17 },
  { name: "Rohan Das",       role: "Candidate", time: "5.4k day ago", img: 18 },
  { name: "Arav Sharma",     role: "Candidate", time: "5.4k day ago", img: 19 },
  { name: "Navya Sharma",    role: "Candidate", time: "6.6k day ago", img: 20 },
  { name: "Aavya Hegde",     role: "HP",        time: "6.6k day ago", img: 21 },
  { name: "Diya Kapoor",     role: "HP",        time: "6.6k day ago", img: 22 },
];

function RecentProfiles() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 h-full overflow-y-auto">

      {/* TITLE */}
      <h2 className="text-base font-semibold text-gray-900 mb-4">Recent Profiles</h2>

      {/* LIST */}
      <div className="space-y-3.5">
        {profiles.map((item, index) => (
          <div key={index} className="flex items-center gap-2.5">

            {/* AVATAR */}
            <img
              src={`https://i.pravatar.cc/150?img=${item.img}`}
              alt=""
              className="w-8 h-8 rounded-full object-cover shrink-0"
            />

            {/* CONTENT */}
            <div className="min-w-0 flex-1">
              <h4 className="text-xs font-medium text-gray-800 truncate">{item.name}</h4>
              <p className="text-[10px] text-gray-400">{item.role}</p>
            </div>

            {/* TIME */}
            <span className="text-[9px] text-gray-400 shrink-0">{item.time}</span>

          </div>
        ))}
      </div>

    </div>
  );
}

export default RecentProfiles;