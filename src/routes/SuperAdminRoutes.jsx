import { Routes, Route } from "react-router-dom";

import SuperAdminLayout from "../layouts/SuperAdminLayout";

import ClientListPage from "../pages/superAdmin/ClientListPage";
import Login from "../pages/superAdmin/Login";
import CreateClientPage from "../pages/superAdmin/CreateClientPage";
import ViewClientPage from "../pages/superAdmin/ViewClientPage";
import EditClientPage from "../pages/superAdmin/EditClientPage";
import Home from "../pages/superAdmin/Home";
import Vendor from "../pages/superAdmin/Vendor";
import CreateVendor from "../pages/superAdmin/CreateVendor";

function SuperAdminRoutes() {
  return (
    <Routes>
      {/* Login Page */}
      <Route path="login" element={<Login />} />

      {/* Layout Routes */}
      <Route element={<SuperAdminLayout />}>
        {/* Client List */}
        <Route path="clients" element={<ClientListPage />} />
        <Route path="create-client" element={<CreateClientPage />} />

        <Route path="clients/view/:id" element={<ViewClientPage />} />

        <Route path="clients/edit/:id" element={<EditClientPage />} />
        <Route path="home" element={<Home />} />
        {/* VENDOR */}
        <Route path="vendor" element={<Vendor />} />

         <Route
          path="create-vendor"
          element={<CreateVendor />}
        />

        {/* <Route path="view-vendor/:id" element={<ViewVendor />} />

        <Route path="edit-vendor/:id" element={<EditVendor />} />  */}
      </Route>
    </Routes>
  );
}

export default SuperAdminRoutes;
