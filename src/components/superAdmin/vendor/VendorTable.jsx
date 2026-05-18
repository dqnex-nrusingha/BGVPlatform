import { useState, useRef, useEffect } from "react";
import { MoreVertical, Mail } from "lucide-react";

const initialVendors = [
  { id: "CLT100245", vendorName: "NovaEdge Solutions",     poc: "Ananya Iyer",   email: "ananya.iyer@example.com",    status: "Active"    },
  { id: "CLT100246", vendorName: "NovaEdge Solutions",     poc: "Advait Joshi",  email: "advait.joshi@mail.com",      status: "Active"    },
  { id: "CLT100247", vendorName: "NextWave Innovations",   poc: "Niten Sharma",  email: "nitenkumar34@gmail.com",     status: "In Active" },
  { id: "CLT100259", vendorName: "BluePeak Systems",       poc: "Reyansh Reddy", email: "niten.sharma@webmail.org",   status: "Suspended" },
  { id: "CLT100253", vendorName: "PrimeAxis Consulting",   poc: "Sia Banerjee",  email: "sia.banerjee@example.com",   status: "In Active" },
  { id: "CLT100258", vendorName: "FusionGrid Pvt. Ltd.",   poc: "Myra Kulkarni", email: "myra.kulkarni@mail.com",     status: "Active"    },
  { id: "CLT100250", vendorName: "ApexNova Technologies",  poc: "Navya Sharma",  email: "nitenkumar34@gmail.com",     status: "Active"    },
];

const StatusBadge = ({ status }) => {
  const styles = {
    Active:     "bg-green-100 text-green-600",
    "In Active":"bg-orange-100 text-orange-500",
    Suspended:  "bg-red-100 text-red-500",
  };
  return (
    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${styles[status] || "bg-gray-100 text-gray-500"}`}>
      {status}
    </span>
  );
};

const ActionMenu = ({ onView, onEdit, onSendEmail, onTerminate }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((p) => !p)}
        className="p-1 rounded-lg hover:bg-gray-100 transition"
      >
        <MoreVertical size={16} className="text-gray-400" />
      </button>

      {open && (
        <div className="absolute right-0 mt-1 w-36 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-50">
          <button onClick={() => { onView(); setOpen(false); }}
            className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
            View
          </button>
          <button onClick={() => { onEdit(); setOpen(false); }}
            className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50">
            Edit
          </button>
          <button onClick={() => { onSendEmail(); setOpen(false); }}
            className="w-full text-left px-4 py-2 text-xs text-gray-700 hover:bg-gray-50 flex items-center gap-2">
            <Mail size={12} /> Send Email
          </button>
          <button onClick={() => { onTerminate(); setOpen(false); }}
            className="w-full text-left px-4 py-2 text-xs text-red-500 hover:bg-red-50">
            Terminate
          </button>
        </div>
      )}
    </div>
  );
};

export default function VendorTable() {
  const [selected, setSelected] = useState([]);
  const [vendors] = useState(initialVendors);

  const toggleAll = (e) =>
    setSelected(e.target.checked ? vendors.map((v) => v.id) : []);

  const toggleOne = (id) =>
    setSelected((p) =>
      p.includes(id) ? p.filter((x) => x !== id) : [...p, id]
    );

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      <table className="w-full">
        <thead>
          <tr className="border-b border-gray-100">
            <th className="px-4 py-4 w-10">
              <input
                type="checkbox"
                onChange={toggleAll}
                checked={selected.length === vendors.length}
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
              <td className="px-4 py-4">
                <StatusBadge status={v.status} />
              </td>
              <td className="px-4 py-4">
                <ActionMenu
                  onView={() => console.log("view", v.id)}
                  onEdit={() => console.log("edit", v.id)}
                  onSendEmail={() => console.log("email", v.id)}
                  onTerminate={() => console.log("terminate", v.id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}