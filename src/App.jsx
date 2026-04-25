import { BrowserRouter, Routes, Route } from "react-router-dom";
import VerificationPage from "./pages/VerificationPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VerificationPage />} />
        {/* <Route path="/verification" element={<VerificationPage />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;