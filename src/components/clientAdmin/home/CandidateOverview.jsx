import {
  ClipboardList,
  CheckCircle2,
  PauseCircle,
  RefreshCcw,
  BadgeCheck,
  Ban,
} from "lucide-react";

import OverviewCard from "./OverviewCard";

function CandidateOverview() {

  const candidateStats = [

    {
      title: "In Progress",
      value: "20",

      icon: (
        <ClipboardList
          size={16}
          className="text-indigo-600"
        />
      ),

      color: "bg-indigo-100",
    },

    {
      title: "Complete",
      value: "10",

      icon: (
        <CheckCircle2
          size={16}
          className="text-green-600"
        />
      ),

      color: "bg-green-100",
    },

    {
      title: "On Hold",
      value: "10",

      icon: (
        <PauseCircle
          size={16}
          className="text-yellow-600"
        />
      ),

      color: "bg-yellow-100",
    },

    {
      title: "Verification In Progress",
      value: "09",

      icon: (
        <RefreshCcw
          size={16}
          className="text-orange-500"
        />
      ),

      color: "bg-orange-100",
    },

    {
      title: "Verified",
      value: "18",

      icon: (
        <BadgeCheck
          size={16}
          className="text-teal-600"
        />
      ),

      color: "bg-teal-100",
    },

    {
      title: "Reject",
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

        Candidate overview

      </h2>

      <div className="grid grid-cols-3 gap-3">

        {candidateStats.map((item) => (

          <OverviewCard
            key={item.title}
            {...item}
          />

        ))}

      </div>

    </div>
  );
}

export default CandidateOverview;