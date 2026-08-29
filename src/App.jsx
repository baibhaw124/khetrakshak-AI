import { BrowserRouter, Routes, Route } from "react-router-dom";

import MainLayout from "./components/MainLayout";

import Dashboard from "./pages/Dashboard";
import CropHealth from "./pages/CropHealth";
import DiseaseDetection from "./pages/DiseaseDetection";
import RiskMap from "./pages/RiskMap";
import Alerts from "./pages/Alerts";
import FarmerAdvisory from "./pages/FarmerAdvisory";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>

      <MainLayout>

        <Routes>

          <Route path="/" element={<Dashboard />} />

          <Route
            path="/crop-health"
            element={<CropHealth />}
          />

          <Route
            path="/disease-detection"
            element={<DiseaseDetection />}
          />

          <Route
            path="/risk-map"
            element={<RiskMap />}
          />

          <Route
            path="/alerts"
            element={<Alerts />}
          />

          <Route
            path="/farmer-advisory"
            element={<FarmerAdvisory />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

        </Routes> 

      </MainLayout>

    </BrowserRouter>
  );
}

export default App;

