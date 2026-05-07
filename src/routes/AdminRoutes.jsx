import { Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/clientAdmin/AdminLogin";
import Home from "../pages/clientAdmin/Home";

import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "../layouts/AdminLayout";

function AdminRoutes() {
  return (
    <Routes>

      {/* LOGIN */}
      <Route
        path="login"
        element={<AdminLogin />}
      />

      {/* PROTECTED ADMIN LAYOUT */}
      <Route
        element={
          <ProtectedRoute role="admin">
            <AdminLayout />
          </ProtectedRoute>
        }
      >

        {/* HOME */}
        <Route
          path="home"
          element={<Home />}
        />

        {/* CANDIDATES */}
        <Route
          path="candidates"
          element={<div>Candidate Page</div>}
        />

      </Route>

    </Routes>
  );
}

export default AdminRoutes;