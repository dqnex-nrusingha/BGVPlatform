// import { Navigate } from "react-router-dom";

// function ProtectedRoute({ children, role }) {
//   const userRole = localStorage.getItem("role");

//   if (!userRole) {
//     return <Navigate to="/admin/login" />;
//   }

//   if (role && userRole !== role) {
//     return <Navigate to="/" />;
//   }

//   return children;
// }

// export default ProtectedRoute;

import {
  Navigate,
} from "react-router-dom";

function ProtectedRoute({
  children,
  role,
}) {

  const userRole =
    localStorage.getItem(
      "role"
    );

  // NOT LOGGED IN
  if (!userRole) {

    return (
      <Navigate to="/hr/login" />
    );
  }

  // WRONG ROLE
  if (
    role &&
    userRole !== role
  ) {

    return (
      <Navigate to="/hr/login" />
    );
  }

  return children;
}

export default ProtectedRoute;