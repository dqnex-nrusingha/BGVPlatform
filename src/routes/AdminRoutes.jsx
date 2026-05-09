import { Routes, Route } from "react-router-dom";

import AdminLogin from "../pages/clientAdmin/AdminLogin";
import Home from "../pages/clientAdmin/Home";

import ProtectedRoute from "./ProtectedRoute";

import AdminLayout from "../layouts/AdminLayout";
import Candidates from "../pages/clientAdmin/Candidates";
import Hr from "../pages/clientAdmin/Hr";
import CreateHR from "../pages/clientAdmin/CreateHR";
import EditHr from "../pages/clientAdmin/EditHr";

import ViewHr from "../pages/clientAdmin/ViewHr";


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
          element={<Candidates/>}
        />
        {/* Hr */}
        <Route
          path="hr"
          element={<Hr/>}
        />
        <Route
          path="create-hr"
          element={<CreateHR />}
        />
         {/* EDIT HR */}
        <Route
          path="edit-hr"
          element={<EditHr />}
        />

        {/* VIEW HR */}
        <Route
          path="view-hr"
          element={<ViewHr />}
        />

      </Route>

    </Routes>
  );
}

export default AdminRoutes;