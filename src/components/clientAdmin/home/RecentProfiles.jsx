const profiles = [
  { name: "Deepak Mukherji", role: "Candidate", time: "2 day ago", img: 10 },
  { name: "Devika Banaji", role: "Candidate", time: "4 day ago", img: 11 },
  { name: "Rena Biswal", role: "HR", time: "4 day ago", img: 12 },
  { name: "Arjun Malhotra", role: "HR", time: "4 day ago", img: 13 },
  { name: "Ananya Banerjee", role: "Candidate", time: "4 day ago", img: 14 },
  { name: "Kyra Pillai", role: "HR", time: "4 day ago", img: 15 },
  { name: "Dhruv Verma", role: "Candidate", time: "4 day ago", img: 16 },
  { name: "Aryan Mehra", role: "HR", time: "5 day ago", img: 17 },
  { name: "Rohan Das", role: "Candidate", time: "4 day ago", img: 18 },
  { name: "Arav Sharma", role: "Candidate", time: "4 day ago", img: 19 },
  { name: "Navya Sharma", role: "Candidate", time: "6 day ago", img: 20 },
  { name: "Aavya Hegde", role: "HR", time: "6 day ago", img: 21 },
  { name: "Diya Kapoor", role: "HR", time: "4 day ago", img: 22 },
  { name: "Diya Kapoor", role: "HR", time: "4 day ago", img: 23 },
 
];

function RecentProfiles() {

  return (

    <div className="bg-[#09004D] rounded-3xl p-5 h-full overflow-hidden border border-indigo-900 shadow-xl">

      {/* HEADER */}
      <h2 className="text-[18px] font-semibold text-white mb-5">

        Recent Profiles

      </h2>

      {/* LIST */}
      <div className="space-y-4 overflow-y-auto pr-1 max-h-180 custom-scrollbar">

        {profiles.map((item, index) => (

          <div
            key={index}
            className="flex items-start justify-between gap-3"
          >

            {/* LEFT */}
            <div className="flex items-start gap-3 min-w-0">

              {/* IMAGE */}
              <img
                src={`https://i.pravatar.cc/150?img=${item.img}`}
                alt=""
                className="w-10 h-10 rounded-full object-cover shrink-0 border border-white/10"
              />

              {/* INFO */}
              <div className="min-w-0">

                {/* NAME */}
                <h4 className="text-[15px] font-medium text-white truncate leading-none">

                  {item.name}

                </h4>

                {/* ROLE BADGE */}
                <div className="mt-1">

                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] font-medium ${
                      item.role === "HR"
                        ? "bg-indigo-100 text-indigo-700"
                        : "bg-white text-indigo-700"
                    }`}
                  >

                    {item.role}

                  </span>

                </div>

              </div>

            </div>

            {/* TIME */}
            <span className="text-[10px] text-gray-400 whitespace-nowrap mt-1">

              {item.time}

            </span>

          </div>

        ))}

      </div>

    </div>
  );
}

export default RecentProfiles;