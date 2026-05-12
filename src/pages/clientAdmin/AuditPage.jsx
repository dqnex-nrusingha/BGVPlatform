import React, { useState } from "react";
import { FileDown } from "lucide-react";

import AuditFilters from "../../components/clientAdmin/candidate/AuditFilters";
import AuditTable, { auditData } from "../../components/clientAdmin/candidate/AuditTable";
import Pagination from "../../components/clientAdmin/home/Pagination";

export default function AuditPage() {
  const [search, setSearch] = useState("");
  const [module, setModule] = useState("All Modules");
  const [page, setPage] = useState(1);

  const totalPages = 9;
  const rowsPerPage = 10; // adjust as needed

  // ── FILTER LOGIC ─────────────────────
  const filtered = auditData.filter((row) => {
    const matchSearch =
      search === "" ||
      row.name.toLowerCase().includes(search.toLowerCase()) ||
      row.detail.toLowerCase().includes(search.toLowerCase()) ||
      row.ip.toLowerCase().includes(search.toLowerCase());

    const matchModule = module === "All Modules" || row.module === module;

    return matchSearch && matchModule;
  });

  // ── PAGINATION LOGIC ─────────────────
  const startIndex = (page - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;
  const paginatedData = filtered.slice(startIndex, endIndex);

  return (
    <div className="min-h-screen px-10 py-9 font-sans">
      {/* PAGE HEADER */}
      <div className="flex items-start justify-between mb-6">
        {/* LEFT */}
        <div>
          <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
            System Audit Log
          </h1>
          <p className="text-sm text-gray-400 mt-1">
            A Comprehensive, Immutable Record Of All Activities Across Your Organization.
          </p>
        </div>

        {/* EXPORT BUTTON */}
        <button className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 transition cursor-pointer shadow-sm">
          <FileDown size={16} />
          Export CSV
        </button>
      </div>

      {/* MAIN CARD */}
      <div className="bg-white border border-gray-300 rounded-2xl p-5 shadow-sm">
        {/* FILTERS */}
        <AuditFilters onSearch={setSearch} onModuleChange={setModule} />

        {/* DIVIDER */}
        <div className="border-b border-gray-200 my-5" />

        {/* TABLE */}
        <AuditTable rows={paginatedData} />

        {/* EMPTY STATE */}
        {paginatedData.length === 0 && (
          <div className="text-center py-16 text-gray-400 text-sm">
            No Audit Records Found.
          </div>
        )}

        {/* PAGINATION */}
        <div className="mt-6">
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            onPageChange={setPage}
          />
        </div>
      </div>
    </div>
  );
}
