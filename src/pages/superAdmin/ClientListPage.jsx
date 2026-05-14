import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";
import ClientStatCards from "../../components/superAdmin/client/ClientStatCards";
import ClientTable from "../../components/superAdmin/client/ClientTable";
import ClientPagination from "../../components/superAdmin/client/ClientPagination";

export default function ClientListPage() {
  const navigate = useNavigate();

  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(9);

  return (
    <div className="min-h-screen px-10 py-9 font-sans">

      {/* Header */}
      <ClientPageHeader />

      {/* Stat Cards */}
      <ClientStatCards />

      {/* Table */}
      <ClientTable
        onView={(row) =>
            navigate(`/super-admin/clients/view/${row.id}`)
            }
        onEdit={(row) =>
            navigate(`/super-admin/clients/edit/${row.id}`)
            }
        onEmail={(row) => console.log("Send email to", row.email)}
        onSuspend={(row) => console.log("Suspend", row.id)}
      />

      {/* Pagination */}
      <ClientPagination
        total={40}
        perPage={perPage}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        onPerPageChange={(val) => {
          setPerPage(val);
          setCurrentPage(1);
        }}
      />

    </div>
  );
}