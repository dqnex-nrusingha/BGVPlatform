import { useState } from "react";

import ProfileHeader from "../../components/clientAdmin/home/ProfileHeader";
import CandidateOverviewSection from "../../components/superAdmin/candidate/CandidateOverviewSection";
import TableToolbar from "../../components/clientAdmin/home/TableToolbar";
import CandidateTable from "../../components/superAdmin/candidate/CandidateTable";
import Pagination from "../../components/superAdmin/client/ClientPagination";

const Candidates = () => {
  const [page, setPage] = useState(1);
  const totalPages = 9;

  return (
    <div className="p-5">

      {/* PROFILE HEADER */}
      <ProfileHeader showExport={false} showCreateHR={false} showCreateCandidate={true} />

      {/* CANDIDATE OVERVIEW CARDS */}
      <div className="mt-6">
        <CandidateOverviewSection />
      </div>

      {/* TOOLBAR */}
      <div className="mt-2">
        <TableToolbar />
      </div>

      {/* TABLE */}
      <div className="mt-4">
        <CandidateTable />
      </div>

      {/* PAGINATION */}
      <div className="mt-4">
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