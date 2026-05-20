import { useState } from "react";

import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";

import HrOverviewSection from "../../components/superAdmin/hr/HrOverviewSession";

import TableSection from "../../components/superAdmin/hr/TableSection";

import Pagination from "../../components/superAdmin/client/ClientPagination";

const Hr = () => {

  const [page, setPage] = useState(1);

  return (

    <div className="p-4 flex flex-col">

      {/* HEADER */}
      <ClientPageHeader
        createType="hr"
      />

      {/* HR OVERVIEW */}
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
          current={page}
          onChange={(page) =>
            setPage(page)
          }
        />

      </div>

    </div>
  );
};

export default Hr;