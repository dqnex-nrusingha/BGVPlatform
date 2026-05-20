import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, role }) {
  const userRole = localStorage.getItem("role");

  // NOT LOGGED IN → send to home/root
  if (!userRole) {
    return <Navigate to="/" replace />;
  }

  // WRONG ROLE → redirect based on STORED role, not required role
  if (role && userRole !== role) {
    if (userRole === "super-admin") return <Navigate to="/super-admin/home" replace />;
    if (userRole === "admin")       return <Navigate to="/admin/home" replace />;
    if (userRole === "hr")          return <Navigate to="/hr/home" replace />;
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;