import React, { useState, useRef, useEffect } from "react";
import {
  MoreVertical,
  Eye,
  Pencil,
  Mail,
  Ban,
  X,
  MailCheck,
} from "lucide-react";

const CLIENT_DATA = [
  { id: "CLT100245", name: "Ananya Iyer",    email: "ananya.iyer@example.com",     gst: "29ABCDE1234F1Z5", status: "Active"    },
  { id: "CLT100246", name: "Advait Joshi",   email: "advait.joshi@mail.com",        gst: "27PQRSX5678L1Z2", status: "Active"    },
  { id: "CLT100247", name: "Niten Sharma",   email: "nitenkumar34@gmail.com",       gst: "07LMNOP4321K1Z8", status: "In Active" },
  { id: "CLT100259", name: "Reyansh Reddy",  email: "niten.sharma@webmail.org",     gst: "19GHJKL9876M1Z4", status: "Suspended" },
  { id: "CLT100253", name: "Sia Banerjee",   email: "sia.banerjee@example.com",     gst: "33ZXCVB2468N1Z7", status: "In Active" },
  { id: "CLT100258", name: "Myra Kulkarni",  email: "myra.kulkarni@mail.com",       gst: "06ASDFG7531H1Z3", status: "Active"    },
  { id: "CLT100250", name: "Navya Sharma",   email: "nitenkumar34@gmail.com",       gst: "30QAZWS7788E1Z2", status: "Active"    },
];

const statusStyle = {
  "Active":    "bg-green-100 text-green-600",
  "In Active": "bg-orange-100 text-orange-500",
  "Suspended": "bg-red-100 text-red-500",
};

function ActionMenu({ onView, onEdit, onEmail, onSuspend }) {
  return (
    <div className="absolute right-8 top-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 py-1 w-36 overflow-hidden">
      <button onClick={onView}    className="flex items-center gap-2 w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition cursor-pointer">
        <Eye size={13} className="text-gray-400" /> View
      </button>
      <button onClick={onEdit}    className="flex items-center gap-2 w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition cursor-pointer">
        <Pencil size={13} className="text-gray-400" /> Edit
      </button>
      <button onClick={onEmail}   className="flex items-center gap-2 w-full px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 transition cursor-pointer">
        <Mail size={13} className="text-gray-400" /> Send Email
      </button>
      <button onClick={onSuspend} className="flex items-center gap-2 w-full px-4 py-2 text-xs text-red-500 hover:bg-red-50 transition cursor-pointer">
        <Ban size={13} className="text-red-400" /> Suspend
      </button>
    </div>
  );
}

export default function ClientTable({ data = CLIENT_DATA, onView, onEdit, onEmail, onSuspend }) {
  const [selectedRows, setSelectedRows] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showSuspendModal, setShowSuspendModal] = useState(false);
  const [showSuspendSuccess, setShowSuspendSuccess] = useState(false);
  const [suspendReason, setSuspendReason] = useState("");
  const [selectedClientId, setSelectedClientId] = useState("");
  const menuRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (e) => {
      const clickedInside = menuRefs.current.some((ref) => ref && ref.contains(e.target));
      if (!clickedInside) setOpenMenu(null);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectAll = (e) => {
    setSelectedRows(e.target.checked ? data.map((d) => d.id) : []);
  };

  const handleRowSelect = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  return (
    <div className="bg-white border border-gray-200 rounded-2xl overflow-visible shadow-sm">
      <table className="w-full border-collapse">

        {/* HEADER */}
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="px-5 py-3.5 w-10">
              <input
                type="checkbox"
                checked={selectedRows.length === data.length && data.length > 0}
                onChange={handleSelectAll}
                className="w-4 h-4 accent-indigo-600 cursor-pointer"
              />
            </th>
            {["Client ID", "Name", "E-Mail", "GST", "Status", "Action"].map((col) => (
              <th key={col} className="px-5 py-3.5 text-sm font-semibold text-gray-700 text-left whitespace-nowrap">
                {col}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody>
          {data.map((row, index) => (
            <tr
              key={row.id}
              className={`hover:bg-gray-50 transition-colors duration-100 ${index < data.length - 1 ? "border-b border-gray-100" : ""}`}
            >

              {/* CHECKBOX */}
              <td className="px-5 py-3">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => handleRowSelect(row.id)}
                  className="w-4 h-4 accent-indigo-600 cursor-pointer"
                />
              </td>

              {/* CLIENT ID */}
              <td className="px-5 py-3 text-sm text-gray-700 font-medium">{row.id}</td>

              {/* NAME */}
              <td className="px-5 py-3 text-sm text-gray-900 font-semibold">{row.name}</td>

              {/* EMAIL */}
              <td className="px-5 py-3 text-sm text-indigo-500 font-medium">{row.email}</td>

              {/* GST */}
              <td className="px-5 py-3 text-sm text-gray-700">{row.gst}</td>

              {/* STATUS */}
              <td className="px-5 py-3">
                <span className={`text-xs font-semibold px-3 py-1 rounded-full ${statusStyle[row.status] || "bg-gray-100 text-gray-500"}`}>
                  {row.status}
                </span>
              </td>

              {/* ACTION */}
              <td className="px-5 py-3">
                <div className="relative inline-block" ref={(el) => (menuRefs.current[index] = el)}>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setOpenMenu(openMenu === index ? null : index);
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer"
                  >
                    <MoreVertical size={16} className="text-gray-500" />
                  </button>

                  {openMenu === index && (
                    <ActionMenu
                      onView={() => { onView && onView(row); setOpenMenu(null); }}
                      onEdit={() => { onEdit && onEdit(row); setOpenMenu(null); }}
                      onEmail={() => {
                        onEmail && onEmail(row);
                        setShowEmailModal(true);
                        setOpenMenu(null);
                        }}
                      onSuspend={() => {
                        onSuspend && onSuspend(row);
                        setSelectedClientId(row.id);
                        setShowSuspendModal(true);
                        setOpenMenu(null);
                        }}
                    />
                  )}
                </div>
              </td>

            </tr>
          ))}
        </tbody>

      </table>
      {/* EMAIL SUCCESS MODAL */}
       {showEmailModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999">
          <div className="bg-white rounded-2xl w-120 overflow-hidden shadow-xl text-center">

            <div className="relative bg-purple-600 h-40 flex items-center justify-center">
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-white rounded-t-[50%]" />
              <div className="relative z-10 mb-2">
                <Mail size={56} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            <div className="px-8 py-6">
              <h2 className="text-lg font-bold text-purple-600 mb-2">
                The Email Has Been Successfully Sent To The Client.
              </h2>
              <p className="text-sm text-gray-500">
                We've Sent You An Email — Check Your Inbox.
              </p>
              <button
                onClick={() => setShowEmailModal(false)}
                className="mt-6 border border-purple-500 text-purple-600 hover:bg-purple-50 px-8 py-2.5 rounded-xl text-sm font-medium transition"
              >
                Okay
              </button>
            </div>

          </div>
        </div>
      )}
        {/* SUSPEND MODAL */}
        {showSuspendModal && (
        <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm">

            <div className="w-175 bg-white rounded-2xl shadow-2xl p-14">

            {/* Heading */}
            <h2 className="text-2xl font-semibold text-center leading-tight text-gray-900">
                “Are You Sure You Want To
                <br />
                Suspend{" "}
                <span className="text-orange-500">
                {selectedClientId}
                </span>
                ”
            </h2>

            {/* Textarea */}
            <div className="mt-10">

                <label className="text-sm font-medium text-gray-700">
                “Reason For Terminate”{" "}
                <span className="text-red-500">*</span>
                </label>

                <textarea
                rows={6}
                value={suspendReason}
                onChange={(e) =>
                    setSuspendReason(e.target.value)
                }
                placeholder="Please describe the reason for terminate this candidate."
                className="w-full mt-3 border border-orange-200 rounded-xl px-5 py-4 outline-none resize-none focus:ring-2 focus:ring-orange-100"
                />

            </div>

            {/* Buttons */}
            <div className="flex items-center justify-center gap-10 mt-12">

                <button
                onClick={() => {
                    setShowSuspendModal(false);
                    setSuspendReason("");
                }}
                className="bg-orange-500 text-white px-10 py-3 rounded-lg font-medium hover:bg-orange-600 transition"
                >
                Cancel
                </button>

        <button
        disabled={suspendReason.trim() === ""}
        onClick={() => {
            setShowSuspendModal(false);
            setShowSuspendSuccess(true);
        }}
        className={`
            px-10 py-3 rounded-lg font-medium transition border
            ${
            suspendReason.trim() === ""
                ? "border-gray-300 text-gray-400 bg-gray-100 cursor-not-allowed"
                : "border-orange-400 text-orange-500 hover:bg-orange-50"
            }
        `}
        >
        Terminate Application
        </button>


            </div>

            </div>
        </div>
        )}

{/* SUSPEND SUCCESS MODAL */}
    {showSuspendSuccess && (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 backdrop-blur-sm">

        <div className="relative w-162.5 bg-white rounded-3xl overflow-hidden shadow-2xl">

        {/* Top Orange Shape */}
        <div className="relative h-42.5 bg-orange-500 rounded-b-[320px] flex items-center justify-center">

            {/* Icon */}
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center">

            <Ban
                size={42}
                className="text-orange-500"
            />

            </div>
        </div>

        {/* Content */}
        <div className="px-10 pt-8 pb-10 text-center">

            <h2 className="text-2xl font-bold text-orange-500 leading-snug">
            “{selectedClientId}”
            <br />
            Suspend Successfully
            </h2>

            {/* Button */}
            <button
            onClick={() => {
                setShowSuspendSuccess(false);
                setSuspendReason("");
            }}
            className="mt-10 border border-orange-400 text-orange-500 px-12 py-3 rounded-xl font-medium hover:bg-orange-50 transition"
            >
            Okay
            </button>

        </div>
        </div>
    </div>
    )}
    </div>
  );
}