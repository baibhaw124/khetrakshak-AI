import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import CropHealth from "./pages/CropHealth";
import DiseaseDetection from "./pages/DiseaseDetection";
import RiskMap from "./pages/RiskMap";
import Alerts from "./pages/Alerts";
import FarmerAdvisory from "./pages/FarmerAdvisory";
import Analytics from "./pages/Analytics";
import { LanguageProvider } from "./LanguageContext";

function App() {
  return (
    <LanguageProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<MainLayout><Dashboard /></MainLayout>} />
        <Route path="/crop-health" element={<MainLayout><CropHealth /></MainLayout>} />
        <Route path="/disease-detection" element={<MainLayout><DiseaseDetection /></MainLayout>} />
        <Route path="/risk-map" element={<MainLayout><RiskMap /></MainLayout>} />
        <Route path="/alerts" element={<MainLayout><Alerts /></MainLayout>} />
        <Route path="/farmer-advisory" element={<MainLayout><FarmerAdvisory /></MainLayout>} />
        <Route path="/analytics" element={<MainLayout><Analytics /></MainLayout>} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
