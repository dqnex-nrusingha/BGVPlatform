import { Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/clientAdmin/AdminLogin";
// import Dashboard from "../pages/admin/Dashboard";
// import CandidateList from "../pages/admin/CandidateList";

import ProtectedRoute from "./ProtectedRoute";

function AdminRoutes() {
  return (
    <Routes>

      <Route path="login" element={<AdminLogin />} />

      <Route
        path="dashboard"
        element={
          <ProtectedRoute role="admin">
            {/* <Dashboard /> */}
          </ProtectedRoute>
        }
      />

      <Route
        path="candidates"
        element={
          <ProtectedRoute role="admin">
            {/* <CandidateList /> */}
          </ProtectedRoute>
        }
      />

    </Routes>
  );
}

export default AdminRoutes;