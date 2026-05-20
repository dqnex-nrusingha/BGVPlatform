import { useState, useRef, useEffect } from "react";
import {
  MoreVertical,
  Mail,
  Eye,
  Pencil,
  Trash2,
  X,
  MinusCircle,
  CheckCircle2,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const initialVendors = [
  { id: "CLT100245", vendorName: "NovaEdge Solutions",    poc: "Ananya Iyer",   email: "ananya.iyer@example.com",  status: "Active"    },
  { id: "CLT100246", vendorName: "NovaEdge Solutions",    poc: "Advait Joshi",  email: "advait.joshi@mail.com",    status: "Active"    },
  { id: "CLT100247", vendorName: "NextWave Innovations",  poc: "Niten Sharma",  email: "nitenkumar34@gmail.com",   status: "In Active" },
  { id: "CLT100259", vendorName: "BluePeak Systems",      poc: "Reyansh Reddy", email: "niten.sharma@webmail.org", status: "Suspended" },
  { id: "CLT100253", vendorName: "PrimeAxis Consulting",  poc: "Sia Banerjee",  email: "sia.banerjee@example.com", status: "In Active" },
  { id: "CLT100258", vendorName: "FusionGrid Pvt. Ltd.",  poc: "Myra Kulkarni", email: "myra.kulkarni@mail.com",   status: "Active"    },
  { id: "CLT100250", vendorName: "ApexNova Technologies", poc: "Navya Sharma",  email: "nitenkumar34@gmail.com",   status: "Active"    },
];

// ── Status Badge ───────────────────────────────────────────
const StatusBadge = ({ status }) => {
  const styles = {
    Active:      "bg-green-100 text-green-600",
    "In Active": "bg-orange-100 text-orange-500",
    Suspended:   "bg-red-100 text-red-500",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-500"}`}>
      {status}
    </span>
  );
};

// ── Backdrop Modal ─────────────────────────────────────────
const Modal = ({ children, onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
    <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden">
      <button
        onClick={onClose}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 z-10"
      >
        <X size={18} />
      </button>
      {children}
    </div>
  </div>
);

// ── Terminate Modal ────────────────────────────────────────
const TerminateModal = ({ vendor, onClose, onConfirm }) => {
  const [reason, setReason] = useState("");

  return (
    <Modal onClose={onClose}>
      <div className="p-8 text-center">
        <h2 className="text-xl font-bold text-gray-800 leading-snug mb-6">
          "Are You Sure You Want To{" "}
          <span className="text-red-600">Terminate {vendor.id}"</span>
        </h2>

        <div className="text-left mb-5">
          <label className="text-xs font-medium text-gray-600 mb-1 block">
            Reason For Terminate <span className="text-red-500">*</span>
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={4}
            placeholder="Please describe the reason for terminate this candidate."
            className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-200 resize-none"
          />
        </div>

        <div className="flex gap-3 justify-center">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={() => onConfirm(reason)}
            className="px-5 py-2 rounded-lg bg-red-600 text-white text-sm font-semibold hover:bg-red-700 transition"
          >
            Terminate Application
          </button>
        </div>
      </div>
    </Modal>
  );
};

// ── Terminate Success Modal ────────────────────────────────
const TerminateSuccessModal = ({ vendor, onClose }) => (
  <Modal onClose={onClose}>
    <div className="text-center">
      {/* Red wave top */}
      <div className="bg-red-700 h-28 flex items-center justify-center rounded-t-2xl">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
          <MinusCircle size={32} className="text-white" />
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-lg font-bold text-gray-800 mb-1">
          "{vendor.id}"
        </h2>
        <p className="text-base font-semibold text-gray-600 mb-6">
          Terminated Successfully
        </p>
        <button
          onClick={onClose}
          className="px-8 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
        >
          Okay
        </button>
      </div>
    </div>
  </Modal>
);

// ── Send Email Modal ───────────────────────────────────────
const SendEmailModal = ({ onClose }) => (
  <Modal onClose={onClose}>
    <div className="text-center">
      {/* Purple wave top */}
      <div className="bg-purple-600 h-28 flex items-center justify-center rounded-t-2xl">
        <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center">
          <Mail size={32} className="text-white" />
        </div>
      </div>

      <div className="p-8">
        <h2 className="text-lg font-bold text-gray-800 mb-2">
          The Email Has Been Successfully<br />Sent To The Client.
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          "We've Sent You An Email—Take A Look In Your Inbox."
        </p>
        <button
          onClick={onClose}
          className="px-8 py-2 rounded-lg border border-gray-200 text-sm font-medium text-gray-600 hover:bg-gray-50 transition"
        >
          Okay
        </button>
      </div>
    </div>
  </Modal>
);

// ── Action Menu ────────────────────────────────────────────
const ActionMenu = ({ vendor, onView, onEdit, onSendEmail, onTerminate }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const actions = [
    { label: "View",       icon: <Eye size={13} />,    onClick: onView,       className: "text-gray-700" },
    { label: "Edit",       icon: <Pencil size={13} />, onClick: onEdit,       className: "text-gray-700" },
    { label: "Send Email", icon: <Mail size={13} />,   onClick: onSendEmail,  className: "text-gray-700" },
    { label: "Terminate",  icon: <Trash2 size={13} />, onClick: onTerminate,  className: "text-red-500"  },
  ];

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="p-1.5 rounded-lg hover:bg-gray-100 transition"
      >
        <MoreVertical size={16} className="text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-40 bg-white border border-gray-100 rounded-xl shadow-xl py-1 z-50">
          {actions.map(({ label, icon, onClick, className }) => (
            <button
              key={label}
              onClick={() => { onClick(); setOpen(false); }}
              className={`w-full text-left px-4 py-2 text-xs flex items-center gap-2 hover:bg-gray-50 transition ${className}`}
            >
              {icon} {label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// ── Main Table ─────────────────────────────────────────────
export default function VendorTable() {
  const navigate = useNavigate();
  const [selected, setSelected] = useState([]);
  const [vendors, setVendors] = useState(initialVendors);

  const [terminateTarget, setTerminateTarget] = useState(null);
  const [terminateSuccess, setTerminateSuccess] = useState(null);
  const [emailSuccess, setEmailSuccess] = useState(false);

  const toggleAll = (e) =>
    setSelected(e.target.checked ? vendors.map((v) => v.id) : []);

  const toggleOne = (id) =>
    setSelected((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  const handleTerminateConfirm = (reason) => {
    setVendors((p) => p.filter((v) => v.id !== terminateTarget.id));
    setTerminateTarget(null);
    setTerminateSuccess(terminateTarget);
  };

  return (
    <>
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-100 bg-gray-50/50">
              <th className="px-4 py-4 w-10">
                <input
                  type="checkbox"
                  onChange={toggleAll}
                  checked={vendors.length > 0 && selected.length === vendors.length}
                  className="rounded"
                />
              </th>
              {["Vendor ID", "Vendor Name", "Poc Name", "POC- Email", "Status", "Action"].map((h) => (
                <th key={h} className="px-4 py-4 text-left text-sm font-medium text-gray-600">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {vendors.map((v) => (
              <tr key={v.id} className="border-b border-gray-50 hover:bg-gray-50 transition">
                <td className="px-4 py-4">
                  <input
                    type="checkbox"
                    checked={selected.includes(v.id)}
                    onChange={() => toggleOne(v.id)}
                    className="rounded"
                  />
                </td>
                <td className="px-4 py-4 text-sm text-gray-700">{v.id}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{v.vendorName}</td>
                <td className="px-4 py-4 text-sm text-gray-700">{v.poc}</td>
                <td className="px-4 py-4 text-sm text-indigo-500">{v.email}</td>
                <td className="px-4 py-4"><StatusBadge status={v.status} /></td>
                <td className="px-4 py-4">
                  <ActionMenu
                    vendor={v}
                    onView={() => navigate(`/super-admin/vendor/${v.id}`)}
                    onEdit={() => navigate(`/super-admin/vendor/edit/${v.id}`)}
                    onSendEmail={() => setEmailSuccess(true)}
                    onTerminate={() => setTerminateTarget(v)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* TERMINATE CONFIRM MODAL */}
      {terminateTarget && (
        <TerminateModal
          vendor={terminateTarget}
          onClose={() => setTerminateTarget(null)}
          onConfirm={handleTerminateConfirm}
        />
      )}

      {/* TERMINATE SUCCESS MODAL */}
      {terminateSuccess && (
        <TerminateSuccessModal
          vendor={terminateSuccess}
          onClose={() => setTerminateSuccess(null)}
        />
      )}

      {/* SEND EMAIL SUCCESS MODAL */}
      {emailSuccess && (
        <SendEmailModal onClose={() => setEmailSuccess(false)} />
      )}
    </>
  );
}