import React from "react";
import { Plus, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function ClientPageHeader() {
  const navigate = useNavigate();

  return (
    <div className="flex items-start justify-between mb-6">

      {/* Left */}
      <div>
        <h1 className="text-2xl font-extrabold text-gray-900 tracking-tight">
          Welcome Back, Dhiren! 👋
        </h1>

        <p className="text-sm text-gray-400 mt-1">
          Manage Platform Operations Seamlessly.
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">

        {/* Create Client */}
        <button
          onClick={() => navigate("/super-admin/create-client")}
          className="flex items-center gap-2 bg-indigo-700 text-white text-sm font-semibold px-4 py-2.5 rounded-xl hover:bg-indigo-800 transition shadow-sm"
        >
          <Plus size={16} />
          Create Client
        </button>

        {/* Export */}
        <button
          onClick={() => console.log("Export")}
          className="flex items-center gap-2 border border-gray-300 text-gray-700 text-sm font-semibold px-4 py-2.5 rounded-xl bg-white hover:bg-gray-50 transition shadow-sm"
        >
          <Upload size={16} />
          Export
        </button>

      </div>
    </div>
  );
}