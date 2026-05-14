import { Routes, Route } from "react-router-dom";

import SuperAdminLayout from "../layouts/SuperAdminLayout";

import ClientListPage from "../pages/superAdmin/ClientListPage";
import Login from "../pages/superAdmin/Login";
import CreateClientPage from "../pages/superAdmin/CreateClientPage";
import ViewClientPage from "../pages/superAdmin/ViewClientPage";
import EditClientPage from "../pages/superAdmin/EditClientPage";


function SuperAdminRoutes() {
  return (
    <Routes>

      {/* Login Page */}
      <Route path="login" element={<Login />} />

      {/* Layout Routes */}
      <Route element={<SuperAdminLayout />}>

        {/* Client List */}
        <Route
          path="clients"
          element={<ClientListPage />}
        />
        <Route
          path="create-client"
          element={<CreateClientPage/>}
        />

        <Route
          path="clients/view/:id"
          element={<ViewClientPage />}
        />

        <Route
            path="clients/edit/:id"
            element={<EditClientPage />}
        />

      </Route>

    </Routes>
  );
}

export default SuperAdminRoutes;