import CasesOverview from "../../components/superAdmin/home/CasesOverview";
import VendorOverview from "../../components/superAdmin/home/VendorOverview";
import RevenueGrowth from "../../components/superAdmin/home/RevenueGrowth";
import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";

function Home() {
  return (
    <div className="p-5 bg-white min-h-screen">

      <ClientPageHeader showCreateButton={false} showExportButton={false}/>

      <div className="grid grid-cols-12 gap-6 mt-5">

        {/* LEFT — Cases + Vendor */}
        <div className="col-span-5 space-y-5">
          <CasesOverview />
          <VendorOverview />
        </div>

        {/* RIGHT — Revenue & Growth */}
        <div className="col-span-7">
          <RevenueGrowth />
        </div>

      </div>
    </div>
  );
}

export default Home;