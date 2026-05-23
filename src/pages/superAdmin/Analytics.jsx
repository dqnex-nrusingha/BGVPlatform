// src/pages/superAdmin/Analytics.jsx

import { useState, useMemo } from "react";
import AnalyticsTabs from "../../components/superAdmin/analytics/AnalyticsTabs";
import AnalyticsToolbar from "../../components/superAdmin/analytics/AnalyticsToolbar";
import SLABreachTable from "../../components/superAdmin/analytics/SLABreachTable";
import TATTable from "../../components/superAdmin/analytics/TATTable";
import MISTable from "../../components/superAdmin/analytics/MISTable";
import { analyticsData } from "../../components/superAdmin/analytics/analyticsData";
import { misData } from "../../components/superAdmin/analytics/misData";

export default function Analytics() {
  const [activeTab, setActiveTab] = useState("MIS");
  const [search, setSearch] = useState("");

  // Filter SLA/TAT data
  const filteredAnalytics = useMemo(() => {
    if (!search.trim()) return analyticsData;
    const q = search.toLowerCase();
    return analyticsData.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.hr.toLowerCase().includes(q) ||
        String(r.candId).includes(q)
    );
  }, [search]);

  // Filter MIS data
  const filteredMIS = useMemo(() => {
    if (!search.trim()) return misData;
    const q = search.toLowerCase();
    return misData.filter(
      (r) =>
        r.name.toLowerCase().includes(q) ||
        r.hr.toLowerCase().includes(q) ||
        String(r.candId).includes(q)
    );
  }, [search]);

  // CSV download handler
  const handleDownload = () => {
    let headers = [];
    let rows = [];

    if (activeTab === "SLA Breach") {
      headers = [
        "Cand ID,Candidate Name,Email,Phone,Assign HR,Status,Check ID,Employment,SLA,Breached Day",
      ];
      rows = filteredAnalytics.map(
        (r) =>
          `${r.candId},${r.name},${r.email},${r.phone},${r.hr},${r.status},${r.checkId},${r.employment},${r.sla},${r.breachedDay}`
      );
    } else if (activeTab === "MIS") {
      headers = [
        "Cand ID,Candidate Name,Email,Phone,Assign HR,Status,Permanent Address,Present Address,Driving License,Passport,PAN Card,Voter ID,Employment 1,Employment 2,Last Education,Criminal Record,Drug Test",
      ];
      rows = filteredMIS.map(
        (r) =>
          `${r.candId},${r.name},${r.email},${r.phone},${r.hr},${r.status},${r.permanentAddress},${r.presentAddress},${r.drivingLicense},${r.passport},${r.panCard},${r.voterId},${r.employment1},${r.employment2},${r.lastEducation},${r.criminalRecord},${r.drugTest}`
      );
    } else if (activeTab === "TAT") {
      headers = [
        "Cand ID,Candidate Name,Email,Phone,Assign HR,Status,Check ID,Employment,TAT Days",
      ];
      rows = filteredAnalytics.map(
        (r) =>
          `${r.candId},${r.name},${r.email},${r.phone},${r.hr},${r.status},${r.checkId},${r.employment},${r.tatDays}`
      );
    }

    const csv = [...headers, ...rows].join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${activeTab.toLowerCase()}-analytics.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="p-5 bg-gray-50 min-h-screen">
      {/* TITLE */}
      <h1 className="text-2xl font-bold text-gray-900 mb-1">
        Candidate Analytics
      </h1>
      <p className="text-sm text-gray-400 mb-5">
        Track And Manage Verification Data Efficiently.
      </p>

      {/* TABS */}
      <AnalyticsTabs active={activeTab} onChange={setActiveTab} />

      {/* TOOLBAR */}
      <AnalyticsToolbar
        search={search}
        onSearch={setSearch}
        onDownload={handleDownload}
      />

      {/* TABLES */}
      {activeTab === "MIS" && <MISTable data={filteredMIS} />}
      {activeTab === "SLA Breach" && <SLABreachTable data={filteredAnalytics} />}
      {/* {activeTab === "MIS" && <MISTable data={filteredMIS} />} */}
      {activeTab === "TAT" && <TATTable data={filteredAnalytics} />}
    </div>
  );
}
