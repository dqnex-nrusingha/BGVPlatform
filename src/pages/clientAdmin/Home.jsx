import ProfileHeader from "../../components/clientAdmin/home/ProfileHeader";
import OverviewSection from "../../components/clientAdmin/home/OverviewSection";
import VerificationCredits from "../../components/clientAdmin/home/VerificationCredits";
import RecentProfiles from "../../components/clientAdmin/home/RecentProfiles";

function Home() {
  return (
    <div className="p-5 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <ProfileHeader showExport={false} showCreateHR={false} />

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-4 mt-5 items-start">

        {/* LEFT — HR + Candidate Overview cards */}
        <div className="col-span-5">
          <OverviewSection />
        </div>

        {/* CENTER — Verification Credits — full height */}
        <div className="col-span-3 self-stretch">
          <VerificationCredits />
        </div>

        {/* RIGHT — Recent Profiles — full height */}
        <div className="col-span-4 self-stretch">
          <RecentProfiles />
        </div>

      </div>
    </div>
  );
}

export default Home;