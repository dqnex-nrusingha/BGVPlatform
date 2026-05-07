import { Outlet } from "react-router-dom";

import Sidebar from "../components/clientAdmin/sidebar/Sidebar";
import Header from "../components/common/Header";

function AdminLayout() {
  return (
    <div className="h-screen flex flex-col bg-gray-100">

      {/* HEADER */}
      <Header />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <Sidebar />

        {/* CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default AdminLayout;