const profiles = [
  "Deepak Mukherji",
  "Devika Banaji",
  "Rena Biswal",
  "Arjun Malhotra",
  "Ananya Banerjee",
  "Kyra Pillai",
];

function RecentProfiles() {

  return (
    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 h-full">

      <h2 className="text-2xl font-semibold mb-5">
        Recent Profiles
      </h2>

      <div className="space-y-4">

        {profiles.map((item, index) => (

          <div
            key={index}
            className="flex items-center gap-3"
          >

            <img
              src={`https://i.pravatar.cc/150?img=${index + 10}`}
              alt=""
              className="w-11 h-11 rounded-full"
            />

            <div>
              <h4 className="text-sm font-medium">
                {item}
              </h4>

              <p className="text-xs text-gray-500">
                Candidate
              </p>
            </div>

          </div>
        ))}

      </div>

    </div>
  );
}

export default RecentProfiles;