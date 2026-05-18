import VendorStats from "../../components/superAdmin/vendor/VendorStats";
import VendorTable from "../../components/superAdmin/vendor/VendorTable";
import Pagination from "../../components/superAdmin/client/ClientPagination";
import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";

export default function Vendor() {
  return (
    <div className="p-5 bg-gray-50 min-h-screen">

      {/* HEADER */}
     <ClientPageHeader
  showCreateButton={true}
  showExportButton={false}
  createType="vendor"
/>

      {/* STATS */}
      <div className="mt-5">
        <VendorStats />
      </div>

      {/* TABLE */}
      <VendorTable />

      {/* PAGINATION */}
      <div className="mt-4">
        <Pagination
          total={40}
          perPage={9}
          current={1}
          onChange={(page) => console.log("page", page)}
        />
      </div>

    </div>
  );
}