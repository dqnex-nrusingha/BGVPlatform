import React, { useState, useEffect } from "react";
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

  /* TOTAL PAGES */
  const totalPages = Math.ceil(total / limit);

  /* SYNC EXTERNAL PAGE */
  useEffect(() => {
    setPage(currentPage);
  }, [currentPage]);

  /* PAGE CHANGE */
  const handlePage = (p) => {

    // VALIDATION
    if (
      isNaN(p) ||
      p < 1 ||
      p > totalPages
    ) {
      return;
    }

    setPage(p);

    if (onPageChange) {
      onPageChange(p);
    }
  };

  /* LIMIT CHANGE */
  const handleLimitChange = (e) => {

    const val = Number(e.target.value);

    // VALIDATION
    if (
      isNaN(val) ||
      val <= 0
    ) {
      return;
    }

    setLimit(val);
    setPage(1);

    if (onPerPageChange) {
      onPerPageChange(val);
    }
  };

  /* PAGE LIST */
  const getPages = () => {

    const pages = [];

    for (let i = 1; i <= totalPages; i++) {

      if (
        i === 1 ||
        i === totalPages ||
        (i >= page - 1 && i <= page + 1)
      ) {
        pages.push(i);

      } else if (
        pages[pages.length - 1] !== "..."
      ) {
        pages.push("...");
      }
    }

    return pages;
  };

  return (
    <div className="flex items-center justify-between mt-5 px-1">

      {/* LEFT */}
      <div className="flex items-center gap-2 text-sm text-gray-500">

        <span>Showing</span>

        <select
          value={limit}
          onChange={handleLimitChange}
          className="border border-gray-300 rounded-lg px-2 py-1 text-sm text-gray-700 outline-none cursor-pointer"
        >
          {[9, 15, 25, 50].map((n) => (
            <option key={n} value={n}>
              {n}
            </option>
          ))}
        </select>

        <span>
          out of {total}
        </span>

      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-1.5">

        {/* PREVIOUS */}
        <button
          onClick={() => handlePage(page - 1)}
          disabled={page === 1}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        >
          <ChevronLeft size={14} />
          Previous
        </button>

        {/* PAGE BUTTONS */}
        {getPages().map((p, i) =>

          p === "..." ? (

            <span
              key={`el-${i}`}
              className="px-2 text-gray-400 text-sm"
            >
              ...
            </span>

          ) : (

            <button
              key={p}
              onClick={() => handlePage(p)}
              className={`w-8 h-8 rounded-lg text-sm font-medium transition cursor-pointer
              ${
                page === p
                  ? "bg-indigo-600 text-white"
                  : "text-gray-600 border border-gray-200 hover:bg-gray-50"
              }`}
            >
              {p}
            </button>

          )
        )}

        {/* NEXT */}
        <button
          onClick={() => handlePage(page + 1)}
          disabled={page === totalPages}
          className="flex items-center gap-1 px-3 py-1.5 text-sm text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition cursor-pointer"
        >
          Next
          <ChevronRight size={14} />
        </button>

      </div>
    </div>
  );
}