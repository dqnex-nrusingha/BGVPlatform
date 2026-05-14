import { Outlet } from "react-router-dom";
import Sidebar from "../components/common/sidebar/Sidebar";
import { superAdminMenu } from "../components/common/sidebar/superAdminMenu";
import Header from "../components/common/Header";

function SuperAdminLayout() {
  return (
     <div className="h-screen flex flex-col bg-gray-100">

      {/* HEADER */}
      <Header />

      {/* BODY */}
      <div className="flex flex-1 overflow-hidden">

        {/* SIDEBAR */}
        <Sidebar menu={superAdminMenu} />

        {/* CONTENT */}
        <div className="flex-1 p-6 overflow-y-auto">
          <Outlet />
        </div>

      </div>
    </div>
  );
}

export default SuperAdminLayout;