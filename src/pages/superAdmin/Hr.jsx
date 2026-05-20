import { useState } from "react";

import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";
import HrOverviewSection from "../../components/clientAdmin/hr/HrOverviewSection";
import TableSection from "../../components/clientAdmin/home/TableSection";
import Pagination from "../../components/superAdmin/client/ClientPagination";

const Hr = () => {
  const [page, setPage] = useState(1);
  const totalPages = 9;

  return (
    <div className="p-4 flex flex-col">

      {/* PROFILE HEADER */}
      <ClientPageHeader showCreateButton={false} showExportButton={false}/>

      {/* HR OVERVIEW CARDS */}
      <div className="mt-6">
        <HrOverviewSection />
      </div>

      {/* TABLE */}
      <div className="mt-6">
        <TableSection />
      </div>

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
};

export default Hr;