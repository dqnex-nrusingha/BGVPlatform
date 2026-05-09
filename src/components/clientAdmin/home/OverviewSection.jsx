// import {
//   Users,
//   UserCheck,
//   UserX,
//   UserMinus,
//   BadgeCheck,
//   FileClock,
// } from "lucide-react";

// import OverviewCard from "./OverviewCard";

// function OverviewSection() {

//   return (
//     <div>

//       {/* HR OVERVIEW */}
//       <h2 className="text-2xl font-semibold mb-3">
//         Hr overview
//       </h2>

//       <div className="grid grid-cols-2 gap-3 mb-6">

//         <OverviewCard
//           title="Total (HR)"
//           value="20"
//           icon={<Users size={18} className="text-indigo-600" />}
//           color="bg-indigo-100"
//         />

//         <OverviewCard
//           title="Active"
//           value="10"
//           icon={<UserCheck size={18} className="text-green-600" />}
//           color="bg-green-100"
//         />

//         <OverviewCard
//           title="Inactive"
//           value="09"
//           icon={<UserMinus size={18} className="text-orange-500" />}
//           color="bg-orange-100"
//         />

//         <OverviewCard
//           title="Terminated"
//           value="18"
//           icon={<UserX size={18} className="text-red-500" />}
//           color="bg-red-100"
//         />

//       </div>

//       {/* CANDIDATE OVERVIEW */}
//       <h2 className="text-2xl font-semibold mb-3">
//         Candidate overview
//       </h2>

//       <div className="grid grid-cols-2 gap-3">

//         <OverviewCard
//           title="In Progress"
//           value="20"
//           icon={<FileClock size={18} className="text-indigo-600" />}
//           color="bg-indigo-100"
//         />

//         <OverviewCard
//           title="Complete"
//           value="10"
//           icon={<BadgeCheck size={18} className="text-green-600" />}
//           color="bg-green-100"
//         />

//         <OverviewCard
//           title="Verification In Progress"
//           value="09"
//           icon={<FileClock size={18} className="text-orange-500" />}
//           color="bg-orange-100"
//         />

//         <OverviewCard
//           title="Verified"
//           value="18"
//           icon={<BadgeCheck size={18} className="text-teal-600" />}
//           color="bg-teal-100"
//         />

//       </div>

//     </div>
//   );
// }

// export default OverviewSection;

import { Users, UserCheck, UserX, UserMinus, BadgeCheck, FileClock } from "lucide-react";
import OverviewCard from "./OverviewCard";

function OverviewSection() {
  return (
    <div>

      {/* HR OVERVIEW */}
      <h2 className="text-xl font-semibold text-gray-900 mb-3">Hr overview</h2>

      <div className="grid grid-cols-2 gap-3 mb-6">
        <OverviewCard
          title="Total (HR)"
          value="20"
          icon={<Users size={16} className="text-indigo-600" />}
          color="bg-indigo-100"
        />
        <OverviewCard
          title="Active"
          value="10"
          icon={<UserCheck size={16} className="text-green-600" />}
          color="bg-green-100"
        />
        <OverviewCard
          title="Inactive"
          value="09"
          icon={<UserMinus size={16} className="text-orange-500" />}
          color="bg-orange-100"
        />
        <OverviewCard
          title="Terminated"
          value="18"
          icon={<UserX size={16} className="text-red-500" />}
          color="bg-red-100"
        />
      </div>

      {/* CANDIDATE OVERVIEW */}
      <h2 className="text-xl font-semibold text-gray-900 mb-3">Candidate overview</h2>

      <div className="grid grid-cols-2 gap-3">
        <OverviewCard
          title="In Progress"
          value="20"
          icon={<FileClock size={16} className="text-indigo-600" />}
          color="bg-indigo-100"
        />
        <OverviewCard
          title="Complete"
          value="10"
          icon={<BadgeCheck size={16} className="text-green-600" />}
          color="bg-green-100"
        />
        <OverviewCard
          title="Verification In Progress"
          value="09"
          icon={<FileClock size={16} className="text-orange-500" />}
          color="bg-orange-100"
        />
        <OverviewCard
          title="Verified"
          value="18"
          icon={<BadgeCheck size={16} className="text-teal-600" />}
          color="bg-teal-100"
        />
      </div>

    </div>
  );
}

export default OverviewSection;