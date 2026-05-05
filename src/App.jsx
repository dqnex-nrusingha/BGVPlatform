import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationPage from "./pages/VerificationPage";
import LoginPage from "./pages/LoginPage";
import ForgotPassword from "./components/login/ForgotPassword";
import DigiLockerPage from "./components/digilocker/DigiLockerPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/verification" element={<VerificationPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/digilocker" element={<DigiLockerPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;