import React from "react";

const COLUMNS = [
  "Transaction ID",
  "Date & Time",
  "Candidate Name",
  "Package",
  "Unit",
  "Status",
];

const USAGE_LOGS = [
  {
    transactionId: "TXN8745632198",
    date: "01 Jul 2025",
    candidate: "Ananya Sharma",
    package: "Basic Identity",
    unit: "1 Units",
    status: "Pending",
  },

  {
    transactionId: "UPI202604118765",
    date: "15 Jun 2025",
    candidate: "Priya Patel",
    package: "Enterprise Verification",
    unit: "5 Units",
    status: "Paid",
  },

  {
    transactionId: "BANKTRX90871234",
    date: "01 Jun 2025",
    candidate: "Ishaan Choudhary",
    package: "Premium Background",
    unit: "5 Units",
    status: "Paid",
  },

  {
    transactionId: "IMPS4587129630",
    date: "08 Jun 2025",
    candidate: "Kavya Reddy",
    package: "Standard Employment",
    unit: "7 Units",
    status: "Paid",
  },

  {
    transactionId: "NEFT2026045678",
    date: "22 May 2025",
    candidate: "Ritika Das",
    package: "Enterprise Verification",
    unit: "10 Units",
    status: "Paid",
  },

  {
    transactionId: "SBIUTR982345671",
    date: "01 Apr 2025",
    candidate: "Neel Kapoor",
    package: "Standard Employment",
    unit: "5 Units",
    status: "Pending",
  },

  {
    transactionId: "ICICI784596123",
    date: "01 Apr 2025",
    candidate: "Sanjana Joshi",
    package: "Standard Employment",
    unit: "20 Units",
    status: "Failed",
  },
];

function getStatusStyle(status) {

  switch (status) {

    case "Paid":
      return "bg-green-100 text-green-600";

    case "Pending":
      return "bg-orange-100 text-orange-500";

    case "Failed":
      return "bg-red-100 text-red-500";

    default:
      return "bg-gray-100 text-gray-500";
  }
}

export default function UsageLogTable() {

  return (
    <div>

      {/* HEADER */}
      <div className="flex items-center justify-between mb-5">

        <div>

          <h2 className="text-xl font-bold text-gray-900">
            User Activity Overview
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Track Recent Platform Interactions And User Activities.
          </p>

        </div>

        <button className="border border-indigo-700 text-indigo-700 text-sm font-semibold px-4 py-2 rounded-lg bg-white hover:bg-indigo-50 transition">

          Export CSV

        </button>

      </div>

      {/* TABLE */}
      <div className="bg-white border border-gray-200 rounded-2xl overflow-hidden">

        <table className="w-full border-collapse">

          {/* HEADER */}
          <thead>

            <tr className="bg-[#F3F4F6] border-b border-gray-200">

              {COLUMNS.map((col) => (

                <th
                  key={col}
                  className="px-6 py-4 text-left text-sm font-semibold text-gray-700 whitespace-nowrap"
                >
                  {col}
                </th>

              ))}

            </tr>

          </thead>

          {/* BODY */}
          <tbody>

            {USAGE_LOGS.map((item, index) => (

              <tr
                key={index}
                className="border-b border-gray-100 hover:bg-gray-50 transition"
              >

                {/* TRANSACTION */}
                <td className="px-6 py-4 text-sm text-gray-700 font-medium">
                  {item.transactionId}
                </td>

                {/* DATE */}
                <td className="px-6 py-4 text-sm text-gray-500">
                  {item.date}
                </td>

                {/* CANDIDATE */}
                <td className="px-6 py-4 text-sm text-gray-800 font-medium">
                  {item.candidate}
                </td>

                {/* PACKAGE */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  {item.package}
                </td>

                {/* UNIT */}
                <td className="px-6 py-4 text-sm text-gray-600">
                  {item.unit}
                </td>

                {/* STATUS */}
                <td className="px-6 py-4">

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}