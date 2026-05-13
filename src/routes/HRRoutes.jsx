import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import ProtectedRoute from "./ProtectedRoute";

import HRLayout from "../layouts/HRLayout";

import Home from "../pages/hr/Home";
import BulkUpload from "../pages/hr/BulkUpload";
import EditCandidate from "../pages/hr/EditCandidate";
import CandidateDetails from "../pages/hr/CandidateDetails";
import DashBoard from "../pages/hr/DashBoard";

import CreateCandidateForm from "../components/hr/CreateCandidateForm";

// ✅ LOGIN PAGE
import Login from "../pages/hr/Login";

function HRRoutes() {

  return (

    <Routes>

      {/* LOGIN */}
      <Route
        path="login"
        element={<Login/>}
      />

      {/* HR LAYOUT */}
      <Route
        path="/"
        element={
          <ProtectedRoute role="hr">

            <HRLayout />

          </ProtectedRoute>
        }
      >

        {/* DEFAULT */}
        <Route
          index
          element={
            <Navigate to="home" />
          }
        />

        {/* HOME */}
        <Route
          path="home"
          element={<Home />}
        />

        {/* DASHBOARD */}
        <Route
          path="dashboard"
          element={<DashBoard />}
        />

        {/* BULK */}
        <Route
          path="bulk-upload"
          element={<BulkUpload />}
        />

        {/* CREATE */}
        <Route
          path="create-candidate"
          element={<CreateCandidateForm />}
        />

        {/* VIEW */}
        <Route
          path="view"
          element={<CandidateDetails />}
        />

        {/* EDIT */}
        <Route
          path="edit"
          element={<EditCandidate />}
        />

      </Route>

    </Routes>
  );
}

export default HRRoutes;