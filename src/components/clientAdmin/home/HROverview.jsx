import {
  UsersRound,
  UserCheck,
  UserX,
  Ban,
  MoveUpRight,
} from "lucide-react";

function HROverview() {

  const hrStats = [

    {
      title: "Total (HR)",
      value: "20",

      icon: (
        <UsersRound
          size={18}
          className="text-[#4F46E5]"
          strokeWidth={2}
        />
      ),

      bg: "bg-[#F3F2FF]",
      border: "bg-[#4338CA]",
      iconBg: "bg-[#DDD8FF]",
    },

    {
      title: "Active",
      value: "10",

      icon: (
        <UserCheck
          size={18}
          className="text-[#16A34A]"
          strokeWidth={2}
        />
      ),

      bg: "bg-[#EAF9EB]",
      border: "bg-[#22C55E]",
      iconBg: "bg-[#86EFAC]",
    },

    {
      title: "Inactive",
      value: "09",

      icon: (
        <UserX
          size={18}
          className="text-[#EA580C]"
          strokeWidth={2}
        />
      ),

      bg: "bg-[#FFF1E8]",
      border: "bg-[#F97316]",
      iconBg: "bg-[#FDBA74]",
    },

    {
      title: "Terminated",
      value: "18",

      icon: (
        <Ban
          size={18}
          className="text-[#EF4444]"
          strokeWidth={2}
        />
      ),

      bg: "bg-[#FFECEC]",
      border: "bg-[#FF3B30]",
      iconBg: "bg-[#FDA4AF]",
    },

  ];

  return (

    <div>

      {/* TITLE */}
      <h2 className="text-[18px] font-semibold text-[#121212] mb-4">

        Hr overview

      </h2>

      {/* GRID */}
      <div className="grid grid-cols-2 gap-4">

        {hrStats.map((item) => (

          <div
            key={item.title}
            className={`
              relative rounded-3xl
              p-5 min-h-33.75
              overflow-hidden
              ${item.bg}

              border border-white
              shadow-[0_4px_14px_rgba(15,23,42,0.04)]
            `}
          >

            {/* LEFT BORDER */}
            <div
              className={`
                absolute left-0 top-5 bottom-5
                w-0.75
                rounded-full
                ${item.border}

                shadow-[0_0_8px_rgba(0,0,0,0.10)]
              `}
            />

            {/* TOP */}
            <div className="flex items-start justify-between">

              {/* TITLE */}
              <h3 className="text-[15px] font-semibold text-[#1F1F1F] leading-5 max-w-35">

                {item.title}

              </h3>

              {/* ICON */}
              <div
                className={`
                  w-12 h-12 rounded-full
                  flex items-center justify-center
                  shrink-0
                  ${item.iconBg}
                `}
              >

                {item.icon}

              </div>

            </div>

            {/* BOTTOM */}
            <div className="flex items-end justify-between mt-8">

              {/* VALUE */}
              <h1 className="text-[44px] font-semibold leading-none text-[#121212]">

                {item.value}

              </h1>

              {/* BUTTON */}
              {/* <button>

                <MoveUpRight
                  size={14}
                  className="text-gray-300"
                />

              </button> */}

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default HROverview;