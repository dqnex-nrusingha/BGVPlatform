import {
  Users,
  UserCheck,
  PauseCircle,
  Ban,
} from "lucide-react";

import OverviewCard from "./OverviewCard";

function HROverview() {

  const hrStats = [

    {
      title: "Total (HR)",
      value: "20",

      icon: (
        <Users
          size={16}
          className="text-indigo-600"
        />
      ),

      color: "bg-indigo-100",
    },

    {
      title: "Active",
      value: "10",

      icon: (
        <UserCheck
          size={16}
          className="text-green-600"
        />
      ),

      color: "bg-green-100",
    },

    {
      title: "Inactive",
      value: "09",

      icon: (
        <PauseCircle
          size={16}
          className="text-orange-500"
        />
      ),

      color: "bg-orange-100",
    },

    {
      title: "Terminated",
      value: "18",

      icon: (
        <Ban
          size={16}
          className="text-red-500"
        />
      ),

      color: "bg-red-100",
    },

  ];

  return (

    <div>

      <h2 className="text-base font-semibold text-gray-700 mb-3">

        Hr overview

      </h2>

      <div className="grid grid-cols-2 gap-3">

        {hrStats.map((item) => (

          <OverviewCard
            key={item.title}
            {...item}
          />

        ))}

      </div>

    </div>
  );
}

export default HROverview;