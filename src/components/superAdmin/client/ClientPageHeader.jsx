import React from "react";
import {
  Plus,
  Upload,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

export default function ClientPageHeader({
  showCreateButton = true,
  showExportButton = true,
  createType = "client", // client | vendor | hr | candidate
}) {

  const navigate = useNavigate();

  /* BUTTON TEXT */
  const buttonText =
    createType === "vendor"
      ? "Create Vendor"
      : createType === "hr"
      ? "Create HR"
      : createType === "candidate"
      ? "Create Candidate"
      : "Create Client";

  /* NAVIGATION */
  const handleCreate = () => {

    if (createType === "vendor") {

      navigate("/super-admin/create-vendor");
    }

    else if (createType === "hr") {

      navigate("/super-admin/create-hr");
    }

    else if (createType === "candidate") {

      navigate("/super-admin/create-candidate");
    }

    else {

      navigate("/super-admin/create-client");
    }
  };

  return (

    <div className="flex items-start justify-between mb-6">

      {/* LEFT */}
      <div>

        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Welcome Back, Dhiren! 👋
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Manage Platform Operations Seamlessly.
        </p>

      </div>

      {/* RIGHT */}
      {(showCreateButton || showExportButton) && (

        <div className="flex items-center gap-3">

          {/* CREATE BUTTON */}
          {showCreateButton && (

            <button
              onClick={handleCreate}
              className="flex items-center gap-2 bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-800 transition shadow-sm"
            >

              <Plus size={16} />

              {buttonText}

            </button>

          )}

          {/* EXPORT */}
          {showExportButton && (

            <button
              onClick={() =>
                console.log("Export")
              }
              className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 transition shadow-sm"
            >

              <Upload size={16} />

              Export

            </button>

          )}

        </div>

      )}

    </div>
  );
}