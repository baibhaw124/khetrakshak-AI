import { useState } from "react";

const cropData = {
  Tomato: {
    variety: "Hybrid Tomato",
    health: 72,
    condition: "Needs Monitoring",
    trend: "-3.4%",
    disease: "Early Blight",
    confidence: "87%",
    recommendation:
      "Monitor affected leaves and consider appropriate disease-control measures.",
  },

  Wheat: {
    variety: "HD-2967",
    health: 91,
    condition: "Healthy",
    trend: "+4.2%",
    disease: "No Major Disease",
    confidence: "94%",
    recommendation:
      "Continue regular monitoring and maintain current field management practices.",
  },

  Rice: {
    variety: "Basmati",
    health: 76,
    condition: "Needs Monitoring",
    trend: "-2.8%",
    disease: "Leaf Blast",
    confidence: "82%",
    recommendation:
      "Monitor affected areas closely and take preventive crop-protection measures.",
  },

  Maize: {
    variety: "Hybrid Maize",
    health: 64,
    condition: "At Risk",
    trend: "-6.4%",
    disease: "Leaf Blight",
    confidence: "89%",
    recommendation:
      "Inspect affected plants and prioritize the field area for further monitoring.",
  },
};

function CropHealth() {
  const [selectedCrop, setSelectedCrop] = useState("Tomato");

  const crop = cropData[selectedCrop];

  const isHealthy = crop.health >= 85;
  const isWarning = crop.health >= 70 && crop.health < 85;

  const statusColor = isHealthy
    ? "text-green-600"
    : isWarning
    ? "text-yellow-600"
    : "text-red-600";

  const progressColor = isHealthy
    ? "bg-green-500"
    : isWarning
    ? "bg-yellow-500"
    : "bg-red-500";

  const statusBg = isHealthy
    ? "bg-green-50"
    : isWarning
    ? "bg-yellow-50"
    : "bg-red-50";

  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#063B25]">
          Crop Health
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Monitor crop condition and identify potential health risks.
        </p>
      </div>


      {/* Crop Selector */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Select Crop
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Choose a crop to view its current health information.
            </p>
          </div>

          <select
            value={selectedCrop}
            onChange={(e) => setSelectedCrop(e.target.value)}
            className="w-full md:w-56 px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-sm text-gray-700 outline-none focus:ring-2 focus:ring-green-200 focus:border-green-500"
          >
            {Object.keys(cropData).map((cropName) => (
              <option key={cropName} value={cropName}>
                {cropName}
              </option>
            ))}
          </select>

        </div>

      </div>


      {/* Main Health Card */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* Health Score */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <p className="text-sm text-gray-500">
            Overall Health Score
          </p>

          <div className="flex items-end gap-2 mt-3">

            <span className="text-5xl font-bold text-[#063B25]">
              {crop.health}
            </span>

            <span className="text-sm text-gray-400 mb-2">
              / 100
            </span>

          </div>

          <div className="h-3 bg-gray-100 rounded-full mt-5 overflow-hidden">

            <div
              className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
              style={{ width: `${crop.health}%` }}
            ></div>

          </div>

          <div className="flex justify-between mt-2">

            <span className="text-xs text-gray-400">
              Poor
            </span>

            <span className="text-xs text-gray-400">
              Excellent
            </span>

          </div>

        </div>


        {/* Crop Details */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <p className="text-sm text-gray-500">
            Crop Information
          </p>

          <h2 className="text-2xl font-bold text-gray-800 mt-3">
            {selectedCrop}
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            {crop.variety}
          </p>

          <div className="mt-6">

            <p className="text-xs text-gray-400">
              Health Trend
            </p>

            <p
              className={`text-lg font-semibold mt-1 ${
                crop.trend.startsWith("+")
                  ? "text-green-600"
                  : "text-red-600"
              }`}
            >
              {crop.trend}
            </p>

          </div>

        </div>


        {/* Condition */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

          <p className="text-sm text-gray-500">
            Current Condition
          </p>

          <div
            className={`inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full ${statusBg}`}
          >

            <span
              className={`w-2.5 h-2.5 rounded-full ${progressColor}`}
            ></span>

            <span className={`text-sm font-semibold ${statusColor}`}>
              {crop.condition}
            </span>

          </div>

          <div className="mt-6">

            <p className="text-xs text-gray-400">
              Detected Issue
            </p>

            <p className="text-sm font-semibold text-gray-700 mt-1">
              {crop.disease}
            </p>

          </div>

        </div>

      </div>


      {/* AI Insight */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">

        <div className="flex items-start gap-4">

          <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-[#075E35] font-bold">
            AI
          </div>

          <div>

            <h2 className="text-lg font-semibold text-gray-800">
              Khetrakshak AI Insight
            </h2>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {crop.recommendation}
            </p>

          </div>

        </div>


        <div className="mt-5 pt-5 border-t border-gray-100 flex flex-wrap gap-6">

          <div>
            <p className="text-xs text-gray-400">
              Selected Crop
            </p>

            <p className="text-sm font-semibold text-gray-700 mt-1">
              {selectedCrop}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Detection Confidence
            </p>

            <p className="text-sm font-semibold text-gray-700 mt-1">
              {crop.confidence}
            </p>
          </div>

          <div>
            <p className="text-xs text-gray-400">
              Data Type
            </p>

            <p className="text-sm font-semibold text-gray-700 mt-1">
              Demonstration Data
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default CropHealth;