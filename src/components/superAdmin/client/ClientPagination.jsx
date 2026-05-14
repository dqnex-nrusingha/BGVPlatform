import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function ClientPagination({
  total = 40,
  perPage = 9,
  currentPage = 1,
  onPageChange,
  onPerPageChange,
}) {
  const [page, setPage] = useState(currentPage);
  const [limit, setLimit] = useState(perPage);

  const totalPages = Math.ceil(total / limit);

  const handlePage = (p) => {
    if (p < 1 || p > totalPages) return;
    setPage(p);
    onPageChange && onPageChange(p);
  };

  const getPages = () => {
    const pages = [];
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }
    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-5 px-1">

      {/* Showing */}
      <div className="flex items-center gap-2 text-sm text-gray-500">
        <span>Showing</span>
        <select
          value={limit}
          onChange={(e) => {
            const val = Number(e.target.value);
            setLimit(val);
            setPage(1);
            onPerPageChange && onPerPageChange(val);
          }}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm text-gray-700 outline-none cursor-pointer"
        >
          {[9, 15, 25, 50].map((n) => <option key={n}>{n}</option>)}
        </select>
        <span>out of {total}</span>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1.5">

        <button
          onClick={() => handlePage(page - 1)}
          disabled={page === 1}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        >
          <ChevronLeft size={14} /> Previous
        </button>

        {getPages().map((p, i) =>
          p === "..." ? (
            <span key={`el-${i}`} className="px-2 text-gray-400 text-sm">...</span>
          ) : (
            <button
              key={p}
              onClick={() => handlePage(p)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition cursor-pointer
                ${page === p ? "bg-indigo-600 text-white" : "text-gray-600 border border-gray-200 hover:bg-gray-50"}`}
            >
              {p}
            </button>
          )
        )}

        <button
          onClick={() => handlePage(page + 1)}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        >
          Next <ChevronRight size={14} />
        </button>

      </div>
    </div>
  );
}