import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LoginPage from "./pages/LoginPage";
import VerificationPage from "./pages/VerificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<LoginPage />} /> */}
        <Route path="/verification" element={<VerificationPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;