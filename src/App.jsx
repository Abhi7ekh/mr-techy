import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LearnPage from "./pages/LearnPage";
import AptitudePage from "./pages/AptitudePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/learn/:techId/:topicId" element={<LearnPage />} />
        <Route path="/learn/:techId" element={<LearnPage />} />
        <Route path="/learn" element={<Navigate to="/learn/react/introduction" replace />} />
        <Route path="/aptitude/:areaId/:topicId" element={<AptitudePage />} />
        <Route path="/aptitude/:areaId" element={<AptitudePage />} />
        <Route path="/aptitude" element={<Navigate to="/aptitude/quantitative/introduction" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
