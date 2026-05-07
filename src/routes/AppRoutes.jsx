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

// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

// import CandidateRoutes from "./CandidateRoutes";
// import AdminRoutes from "./AdminRoutes";

// function AppRoutes() {
//   return (
//     <BrowserRouter>

//       <Routes>

//         {/* ✅ ADMIN ROUTES FIRST */}
//         <Route
//           path="/admin/*"
//           element={<AdminRoutes />}
//         />

//         {/* ✅ CANDIDATE ROUTES */}
//         <Route
//           path="/candidate/*"
//           element={<CandidateRoutes />}
//         />

//       </Routes>

//     </BrowserRouter>
//   );
// }

// export default AppRoutes;