import { useState } from "react";

import ProfileHeader from "../../components/clientAdmin/home/ProfileHeader";

import TableToolbar from "../../components/clientAdmin/home/TableToolbar";

import CandidateTable from "../../components/clientAdmin/candidate/CandidateTable";

import Pagination from "../../components/clientAdmin/home/Pagination";

const Candidates = () => {

  const [page, setPage] = useState(1);

  const totalPages = 9;

  return (
    <div>

      {/* PROFILE HEADER */}
      <ProfileHeader  showExport={false}
        showCreateHR={false}/>

      {/* TOOLBAR */}
      <div className="mt-6">
        <TableToolbar />
      </div>

      {/* TABLE */}
      <div className="mt-6">
        <CandidateTable />
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

export default Candidates;