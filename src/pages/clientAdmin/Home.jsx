import ProfileHeader from "../../components/clientAdmin/home/ProfileHeader";

import OverviewSection from "../../components/clientAdmin/home/OverviewSection";

import RecentProfiles from "../../components/clientAdmin/home/RecentProfiles";

import MessagePanel from "../../components/clientAdmin/home/MessagePanel";

function Home() {

  return (
    <div className="p-5">

      {/* HEADER */}
      <ProfileHeader
        showExport={false}
        showCreateHR={false}
      />

      {/* MAIN */}
      <div className="grid grid-cols-12 gap-5 mt-6">

        {/* LEFT */}
        <div className="col-span-8">

          <OverviewSection />

        </div>

        {/* CENTER */}
        <div className="col-span-2">

          <RecentProfiles />

        </div>

        {/* RIGHT */}
        <div className="col-span-2">

          <MessagePanel />

        </div>

      </div>

    </div>
  );
}

export default Home;