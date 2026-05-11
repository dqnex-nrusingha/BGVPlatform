import {
  Eye,
  Pencil,
  Mail,
  PauseCircle,
  XCircle,
  UserPlus,
  ShieldCheck,
  ClipboardList,
} from "lucide-react";

function ActionDropdown({
  onView,
  onEdit,
  onEmail,
  onAssignHr,
  onAuditLog,
  onAssignVerification,
  onHold,
  onReject,
}) {

  return (
    <div className="w-56 bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.08)] border border-gray-100 py-2">

      {/* VIEW */}
      <button
        onClick={onView}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition"
      >

        <Eye size={16} />

        View

      </button>

      {/* EDIT */}
      <button
        onClick={onEdit}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition"
      >

        <Pencil size={16} />

        Edit

      </button>

      {/* SEND EMAIL */}
      <button
        onClick={onEmail}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition"
      >

        <Mail
          size={16}
          className="text-blue-500"
        />

        Send Email

      </button>

      {/* ASSIGN HR */}
      <button
        onClick={onAssignHr}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-indigo-50 text-sm text-indigo-700 transition"
      >

        <UserPlus size={16} />

        Assign HR

      </button>

      {/* AUDIT LOG */}
      <button
        onClick={onAuditLog}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-gray-50 text-sm text-gray-700 transition"
      >

        <ClipboardList size={16} />

        Audit Log

      </button>

      {/* ASSIGN FOR VERIFICATION */}
      <button
        onClick={onAssignVerification}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-green-50 text-sm text-green-700 transition"
      >

        <ShieldCheck size={16} />

        Assign Verification

      </button>

      {/* ON HOLD */}
      <button
        onClick={onHold}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-yellow-50 text-sm text-yellow-600 transition"
      >

        <PauseCircle size={16} />

        On Hold

      </button>

      {/* REJECT */}
      <button
        onClick={onReject}
        className="w-full flex items-center gap-3 px-4 py-2.5 hover:bg-red-50 text-sm text-red-500 transition"
      >

        <XCircle size={16} />

        Reject

      </button>

    </div>
  );
}

export default ActionDropdown;