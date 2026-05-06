import { BrowserRouter, Routes, Route } from "react-router-dom";

import CandidateRoutes from "./CandidateRoutes";
import AdminRoutes from "./AdminRoutes";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Candidate */}
        <Route path="/*" element={<CandidateRoutes />} />

        {/* Admin */}
        <Route path="/admin/*" element={<AdminRoutes />} />

      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;