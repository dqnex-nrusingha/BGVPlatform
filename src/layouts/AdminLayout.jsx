import { Link, Outlet, useNavigate } from "react-router-dom";
import Header from "../components/common/Header"; // ✅ import header

function AdminLayout() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear(); // better than removing only role
    navigate("/admin/login");   // ✅ you are using /login for admin
  };

  return (
    <div className="flex h-screen">

      {/* Sidebar */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/candidates">Candidates</Link>
        </nav>

        <button
          onClick={handleLogout}
          className="mt-10 bg-red-500 px-4 py-2 rounded"
        >
          Logout
        </button>
      </div>

      {/* Right Side */}
      <div className="flex-1 flex flex-col">

        {/* ✅ Header always on top */}
        <Header />

        {/* Page Content */}
        <div className="flex-1 p-6 bg-gray-100 overflow-auto">
          <Outlet />
        </div>

      </div>

    </div>
  );
}

export default AdminLayout;