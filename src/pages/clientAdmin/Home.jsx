import ProfileHeader from "../../components/clientAdmin/home/ProfileHeader";
import OverviewSection from "../../components/clientAdmin/home/OverviewSection";
import RecentProfiles from "../../components/clientAdmin/home/RecentProfiles";
import MessagePanel from "../../components/clientAdmin/home/MessagePanel";

function Home() {
  return (
    <div className="p-5 bg-gray-50 min-h-screen">

      {/* HEADER */}
      <ProfileHeader showExport={false} showCreateHR={false} />

      {/* MAIN GRID */}
      <div className="grid grid-cols-12 gap-4 mt-5" style={{ height: "calc(100vh - 140px)" }}>

        {/* LEFT — Overview cards */}
        <div className="col-span-4 overflow-y-auto">
          <OverviewSection />
        </div>

        {/* CENTER — Recent Profiles */}
        <div className="col-span-4 overflow-hidden">
          <RecentProfiles />
        </div>

        {/* RIGHT — Message Panel */}
        <div className="col-span-4 overflow-hidden">
          <MessagePanel />
        </div>

      </div>

    </div>
  );
}

export default Home;