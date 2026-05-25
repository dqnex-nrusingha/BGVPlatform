import ClientVendorOverview from "../../components/superAdmin/home/ClientVendorOverview";
import RevenueGrowth from "../../components/superAdmin/home/RevenueGrowth";
import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";

function Home() {
  return (
    <div className=" bg-[#F5F7FF] min-h-screen">

      {/* HEADER */}
      <div className="bg-white rounded-2xl px-6 py-5 border border-[#ECEFFC] shadow-sm">
        <ClientPageHeader
          showCreateButton={false}
          showExportButton={false}
        />
      </div>

      {/* CLIENT + VENDOR OVERVIEW */}
      <div className="mt-2 ">
        <ClientVendorOverview />
      </div>

      {/* REVENUE */}
      <div className="mt-4 bg-[#EEF1FF] rounded-2xl border border-[#E5E9FF] p-1.5">
        <RevenueGrowth />
      </div>

    </div>
  );
}

export default Home;