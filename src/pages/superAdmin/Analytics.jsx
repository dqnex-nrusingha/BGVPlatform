import { useState, useMemo } from "react";
import ClientPageHeader from "../../components/superAdmin/client/ClientPageHeader";
import AnalyticsTabs from "../../components/superAdmin/analytics/AnalyticsTabs";
import AnalyticsToolbar from "../../components/superAdmin/analytics/AnalyticsToolbar";
import SLABreachTable from "../../components/superAdmin/analytics/SLABreachTable";
import { analyticsData } from "../../components/superAdmin/analytics/analyticsData";
import TATTable from "../../components/superAdmin/analytics/TATTable";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("SLA Breach");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return analyticsData;
    const q = search.toLowerCase();
    return analyticsData.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.hr.toLowerCase().includes(q) ||
        r.employment.toLowerCase().includes(q) ||
        String(r.candId).includes(q)
    );
  }, [search]);

  const handleDownload = () => {
    const headers = ["Cand ID,Candidate Name,Email,Phone,Assign HR,Status,Check ID,Employment,SLA,Breached Day"];
    const rows = filtered.map((r) =>
      `${r.candId},${r.name},${r.email},${r.phone},${r.hr},${r.status},${r.checkId},${r.employment},${r.sla},${r.breachedDay}`
    );
    const csv = [...headers, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "analytics.csv";
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-5 bg-gray-50 min-h-screen">

      {/* HEADER */}
      {/* <ClientPageHeader
        showCreateButton={false}
        showExportButton={false}
      /> */}

      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">Candidate Analytics</h1>
      <p className="text-sm text-gray-400 mb-5">Track And Manage Verification Data Efficiently.</p>

      {/* TABS */}
      <AnalyticsTabs active={activeTab} onChange={setActiveTab} />

      {/* TOOLBAR */}
      <AnalyticsToolbar
        search={search}
        onSearch={setSearch}
        onDownload={handleDownload}
      />

      {/* TABLE — only SLA Breach for now */}
      {activeTab === "SLA Breach" && (
        <SLABreachTable data={filtered} />
      )}

      {activeTab === "M/S" && (
        <div className="bg-white rounded-xl border border-gray-200 p-10 text-center text-sm text-gray-400">
          M/S data coming soon.
        </div>
      )}

      {activeTab === "TAT" && (
        <TATTable data={filtered} />
      )}
    </div>
  );
}