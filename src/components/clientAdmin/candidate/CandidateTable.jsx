import {
  MoreVertical,
} from "lucide-react";

import {
  useState,
  useEffect,
  useRef,
} from "react";

import { candidateTableData } from "../../../components/clientAdmin/data/candidateTableData";

import ActionDropdown from "../candidate/ActionDropdown";

function CandidateTable() {

  const [openMenu, setOpenMenu] = useState(null);

  const menuRef = useRef(null);

  // CLOSE DROPDOWN ON OUTSIDE CLICK
  useEffect(() => {

    const handleClickOutside = (event) => {

      if (
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setOpenMenu(null);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {

      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };

  }, []);

  // STATUS COLORS
  const getStatusStyle = (status) => {

    switch (status) {

      case "In Progress":
        return "bg-orange-100 text-orange-500";

      case "Verify":
        return "bg-indigo-100 text-indigo-600";

      case "Verified":
        return "bg-teal-100 text-teal-600";

      case "Complete":
        return "bg-green-100 text-green-600";

      case "On Hold":
        return "bg-yellow-100 text-yellow-600";

      case "Rejected":
        return "bg-red-100 text-red-500";

      default:
        return "bg-gray-100 text-gray-500";
    }
  };

  return (

    <div className="bg-white rounded-2xl border border-gray-200 overflow-visible shadow-sm">

      <table className="w-full border-collapse">

        {/* HEADER */}
        <thead className="bg-[#FAFAFA] border-b border-gray-200">

          <tr>

            <th className="px-5 py-4 w-12">
              <input type="checkbox" />
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">
              Candidate ID
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">
              Case ID
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">
              Name
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">
              Phone
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">
              Progress
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-left">
              Status
            </th>

            <th className="px-5 py-4 text-sm font-semibold text-[#1F2937] text-center w-20">
              Action
            </th>

          </tr>

        </thead>

        {/* BODY */}
        <tbody>

          {candidateTableData.map((item, index) => (

            <tr
              key={item.id || index}
              className="border-b border-gray-100 hover:bg-[#FAFAFA] transition-all duration-150"
            >

              {/* CHECKBOX */}
              <td className="px-5 py-2.5">
                <input type="checkbox" />
              </td>

              {/* CANDIDATE ID */}
              <td className="px-5 py-2.5 text-sm text-gray-700">
                {item.candidateId}
              </td>

              {/* CASE ID */}
              <td className="px-5 py-2.5 text-sm text-gray-700">
                {item.caseId}
              </td>

              {/* NAME */}
              <td className="px-5 py-2.5">

                <div className="font-semibold text-[15px] text-gray-900 leading-5">
                  {item.name}
                </div>

                <div className="text-xs text-gray-400 mt-0.5">
                  {item.email}
                </div>

              </td>

              {/* PHONE */}
              <td className="px-5 py-2.5 text-sm text-gray-700">
                {item.phone}
              </td>

              {/* PROGRESS */}
              <td className="px-5 py-2.5">

                <div className="flex items-center gap-3">

                  <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">

                    <div
                      className="h-full bg-[#4338CA] rounded-full"
                      style={{
                        width: `${item.progress}%`,
                      }}
                    />

                  </div>

                  <span className="text-sm text-gray-700">
                    {item.progress}%
                  </span>

                </div>

              </td>

              {/* STATUS */}
              <td className="px-5 py-2.5">

                <span
                  className={`px-3 py-1 rounded-full text-[12px] font-semibold whitespace-nowrap ${getStatusStyle(
                    item.status
                  )}`}
                >
                  {item.status}
                </span>

              </td>

              {/* ACTION */}
              <td className="px-5 py-2.5 relative text-center overflow-visible w-20">

                <div
                  className="relative inline-block"
                  ref={menuRef}
                >

                  {/* MENU BUTTON */}
                  <button
                    onClick={(e) => {

                      e.stopPropagation();

                      setOpenMenu(
                        openMenu === index
                          ? null
                          : index
                      );
                    }}
                    className="p-2 rounded-lg hover:bg-gray-100 transition"
                  >

                    <MoreVertical
                      size={18}
                      className="text-gray-500"
                    />

                  </button>

                  {/* DROPDOWN */}
                  {openMenu === index && (

                    <div
                      className={`absolute right-12 w-56 z-9999 ${
                        index >= candidateTableData.length - 3
                          ? "bottom-10"
                          : "top-10"
                      }`}
                    >

                      <ActionDropdown

                        onView={() => {

                          console.log("View");

                          setOpenMenu(null);
                        }}

                        onEdit={() => {

                          console.log("Edit");

                          setOpenMenu(null);
                        }}

                        onEmail={() => {

                          console.log("Send Email");

                          setOpenMenu(null);
                        }}

                        onAssignHr={() => {

                          console.log("Assign HR");

                          setOpenMenu(null);
                        }}

                        onAuditLog={() => {

                          console.log("Audit Log");

                          setOpenMenu(null);
                        }}

                        onAssignVerification={() => {

                          console.log("Assign Verification");

                          setOpenMenu(null);
                        }}

                        onHold={() => {

                          console.log("On Hold");

                          setOpenMenu(null);
                        }}

                        onReject={() => {

                          console.log("Reject");

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
  );
}

export default CandidateTable;