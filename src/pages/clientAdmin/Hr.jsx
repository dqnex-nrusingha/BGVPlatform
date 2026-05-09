import { useState } from "react";

import Pagination from "../../components/clientAdmin/home/Pagination";

import ProfileHeader from "../../components/clientAdmin/home/ProfileHeader";

import TableSection from "../../components/clientAdmin/home/TableSection";


const Hr = () => {

  const [page, setPage] = useState(1);

  const totalPages = 9;

  return (
    <div className="p-4 flex flex-col">

      {/* PROFILE HEADER */}
      <ProfileHeader
        showExport={true}
        showCreateHR={true}/>
     

      {/* TABLE */}
      <div className="mt-6">
        <TableSection />
      </div>

      {/* PAGINATION */}
      <div className="mt-6">

        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={setPage}
        />

      </div>

    </div>
  );
};

export default Hr;