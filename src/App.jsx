import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationPage from "./pages/VerificationPage";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/verification" element={<VerificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;