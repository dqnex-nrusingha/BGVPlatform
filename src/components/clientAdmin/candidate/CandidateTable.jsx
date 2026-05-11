import { MoreVertical, Mail } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { candidateTableData } from "../../../components/clientAdmin/data/candidateTableData";
import ActionDropdown from "../candidate/ActionDropdown";
import RejectModal from "../candidate/RejectModal";
import OnHoldModal from "../candidate/OnHoldModal";

function CandidateTable() {
  const [openMenu, setOpenMenu] = useState(null);
  const [showRejectModal, setShowRejectModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showEmailModal, setShowEmailModal] = useState(false);
  const [showOnHoldModal, setShowOnHoldModal] = useState(false);
  const [onHoldCandidate, setOnHoldCandidate] = useState(null);

  // ✅ ONE ref per row using a refs array
  const menuRefs = useRef([]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      const clickedInsideAny = menuRefs.current.some(
        (ref) => ref && ref.contains(event.target)
      );
      if (!clickedInsideAny) {
        setOpenMenu(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getStatusStyle = (status) => {
    switch (status) {
      case "In Progress": return "bg-orange-100 text-orange-500";
      case "Verify":      return "bg-indigo-100 text-indigo-600";
      case "Verified":    return "bg-teal-100 text-teal-600";
      case "Complete":    return "bg-green-100 text-green-600";
      case "On Hold":     return "bg-yellow-100 text-yellow-600";
      case "Rejected":    return "bg-red-100 text-red-500";
      default:            return "bg-gray-100 text-gray-500";
    }
  };

  return (
    <>
      {/* ── REJECT MODAL ────────────────────────────── */}
      {showRejectModal && (
        <RejectModal
          candidate={selectedCandidate}
          onClose={() => {
            setShowRejectModal(false);
            setSelectedCandidate(null);
          }}
        />
      )}

      {showOnHoldModal && (
        <OnHoldModal
          candidate={onHoldCandidate}
          onClose={() => {
            setShowOnHoldModal(false);
            setOnHoldCandidate(null);
          }}
        />
      )}

      {/* ── EMAIL SUCCESS MODAL ──────────────────────── */}
      {showEmailModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-9999">
          <div className="bg-white rounded-2xl w-120 overflow-hidden shadow-xl text-center">

            {/* PURPLE WAVE TOP */}
            <div className="relative bg-purple-600 h-52 flex items-center justify-center">
              <div className="absolute bottom-0 left-0 right-0 h-14 bg-white rounded-t-[50%]" />
              <div className="relative z-10 mb-4">
                <Mail size={64} className="text-white" strokeWidth={1.5} />
              </div>
            </div>

            {/* CONTENT */}
            <div className="px-10 py-7">
              <h2 className="text-xl font-bold text-purple-600 mb-2">
                Invitation E-Mail Send Successfully
              </h2>
              <p className="text-sm text-gray-500">
                "We've Sent You An Email—Take A Look In Your Inbox."
              </p>
              <button
                onClick={() => setShowEmailModal(false)}
                className="mt-8 border border-purple-500 text-purple-600 hover:bg-purple-50 px-10 py-2.5 rounded-xl text-sm font-medium transition"
              >
                Okay
              </button>
            </div>

          </div>
        </div>
      )}

      {/* ── TABLE ───────────────────────────────────── */}
      <div className="bg-white rounded-2xl border border-gray-200 overflow-visible shadow-sm">
        <table className="w-full border-collapse">

          <thead className="bg-[#FAFAFA] border-b border-gray-200">
            <tr>
              <th className="px-5 py-4 w-12"><input type="checkbox" /></th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">Candidate ID</th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">Case ID</th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">Name</th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">Phone</th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">Progress</th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">Status</th>
              <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-center w-20">Action</th>
            </tr>
          </thead>

          <tbody>
            {candidateTableData.map((item, index) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 hover:bg-[#FAFAFA] transition-all duration-150"
              >
                <td className="px-5 py-2.5"><input type="checkbox" /></td>
                <td className="px-5 py-2.5 text-sm text-gray-700">{item.candidateId}</td>
                <td className="px-5 py-2.5 text-sm text-gray-700">{item.caseId}</td>
                <td className="px-5 py-2.5">
                  <div className="font-semibold text-[15px] text-gray-900 leading-5">{item.name}</div>
                  <div className="text-xs text-gray-400 mt-0.5">{item.email}</div>
                </td>
                <td className="px-5 py-2.5 text-sm text-gray-700">{item.phone}</td>
                <td className="px-5 py-2.5">
                  <div className="flex items-center gap-3">
                    <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#4338CA] rounded-full" style={{ width: `${item.progress}%` }} />
                    </div>
                    <span className="text-sm text-gray-700">{item.progress}%</span>
                  </div>
                </td>
                <td className="px-5 py-2.5">
                  <span className={`px-3 py-1 rounded-full text-[12px] font-semibold whitespace-nowrap ${getStatusStyle(item.status)}`}>
                    {item.status}
                  </span>
                </td>

                {/* ── ACTION CELL ───────────────────── */}
                <td className="px-5 py-2.5 text-center w-20">
                  <div
                    className="relative inline-block"
                    ref={(el) => (menuRefs.current[index] = el)} // ✅ per-row ref
                  >
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setOpenMenu(openMenu === index ? null : index);
                      }}
                      className="p-2 rounded-lg hover:bg-gray-100 transition"
                    >
                      <MoreVertical size={18} className="text-gray-500" />
                    </button>

                    {openMenu === index && (
                      <div className={`absolute right-12 w-56 z-9999 ${
                        index >= candidateTableData.length - 3 ? "bottom-10" : "top-10"
                      }`}>
                        <ActionDropdown
                          onView={() => setOpenMenu(null)}
                          onEdit={() => setOpenMenu(null)}
                          onEmail={() => {
                            setShowEmailModal(true);
                            setOpenMenu(null);
                          }}
                          onAssignHr={() => setOpenMenu(null)}
                          onAuditLog={() => setOpenMenu(null)}
                          onAssignVerification={() => setOpenMenu(null)}
                          onHold={() => {
                            setOnHoldCandidate(item);
                            setShowOnHoldModal(true);
                            setOpenMenu(null);
                          }}
                          onReject={() => {
                            setSelectedCandidate(item);
                            setShowRejectModal(true);
                            setOpenMenu(null);
                          }}
                        />
                      </div>
                    )}
                  </div>
                </td>

              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default CandidateTable;