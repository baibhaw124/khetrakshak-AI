import { useState } from "react";
import { useLanguage } from "../LanguageContext";

function FarmerAdvisory() {
  const [crop, setCrop] = useState("Tomato");
  const { language } = useLanguage();
  const hi = language === "hi";

  const advisoryData = {
    Tomato: {
      health: "82%",
      status: "Healthy",
      irrigation: "Moderate irrigation recommended",
      fertilizer: "Use balanced NPK fertilizer",
      disease: "Monitor for early signs of Leaf Blight",
      weather: "Avoid irrigation before expected rainfall",
    },

    Wheat: {
      health: "91%",
      status: "Excellent",
      irrigation: "Light irrigation recommended",
      fertilizer: "Nitrogen application may be beneficial",
      disease: "Low disease risk",
      weather: "Weather conditions are suitable",
    },

    Rice: {
      health: "76%",
      status: "Moderate",
      irrigation: "Maintain adequate field moisture",
      fertilizer: "Consider potassium-rich fertilizer",
      disease: "Monitor for Brown Spot",
      weather: "High humidity may increase disease risk",
    },

    Potato: {
      health: "86%",
      status: "Healthy",
      irrigation: "Maintain consistent soil moisture",
      fertilizer: "Use potassium-rich fertilizer",
      disease: "Monitor leaves for fungal infection",
      weather: "Good growing conditions",
    },
  };

  const data = advisoryData[crop];

  const hiText = {
    "Healthy": "स्वस्थ", "Excellent": "बहुत अच्छा", "Moderate": "मध्यम",
    "Moderate irrigation recommended": "मध्यम सिंचाई की सलाह",
    "Use balanced NPK fertilizer": "संतुलित NPK उर्वरक का उपयोग करें",
    "Monitor for early signs of Leaf Blight": "पत्ती झुलसा रोग के शुरुआती लक्षणों पर नज़र रखें",
    "Avoid irrigation before expected rainfall": "संभावित वर्षा से पहले सिंचाई न करें",
    "Light irrigation recommended": "हल्की सिंचाई की सलाह",
    "Nitrogen application may be beneficial": "नाइट्रोजन का उपयोग लाभकारी हो सकता है",
    "Low disease risk": "रोग का जोखिम कम है",
    "Weather conditions are suitable": "मौसम की स्थिति अनुकूल है",
    "Maintain adequate field moisture": "खेत में पर्याप्त नमी बनाए रखें",
    "Consider potassium-rich fertilizer": "पोटैशियम युक्त उर्वरक पर विचार करें",
    "Monitor for Brown Spot": "ब्राउन स्पॉट रोग पर नज़र रखें",
    "High humidity may increase disease risk": "अधिक आर्द्रता से रोग का जोखिम बढ़ सकता है",
    "Maintain consistent soil moisture": "मिट्टी की नमी स्थिर बनाए रखें",
    "Use potassium-rich fertilizer": "पोटैशियम युक्त उर्वरक का उपयोग करें",
    "Monitor leaves for fungal infection": "पत्तियों में फफूंद संक्रमण के लक्षण देखें",
    "Good growing conditions": "विकास के लिए अच्छी परिस्थितियाँ"
  };
  const tx = (value) => hi ? (hiText[value] || value) : value;


  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Farmer Advisory
        </h1>

        <p className="mt-1 text-gray-500">
          Smart, simple and actionable recommendations for your crop
        </p>
      </div>

      {/* Controls */}
      <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">

        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          <div>
            <h2 className="font-semibold text-gray-800">
              Advisory Settings
            </h2>

            <p className="text-sm text-gray-500">
              Select your crop and preferred language
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">

            <select
              value={crop}
              onChange={(e) => setCrop(e.target.value)}
              className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:ring-2 focus:ring-green-600"
            >
              <option value="Tomato"> {hi ? "टमाटर" : "Tomato"} </option>
              <option value="Wheat"> {hi ? "गेहूँ" : "Wheat"} </option>
              <option value="Rice"> {hi ? "धान" : "Rice"} </option>
              <option value="Potato"> {hi ? "आलू" : "Potato"} </option>
            </select>



          </div>

        </div>

      </div>

      {/* Crop Overview */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

        {/* Health */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Current Crop Health
          </p>

          <div className="mt-4 flex items-center gap-4">

            <div className="flex h-20 w-20 items-center justify-center rounded-full border-8 border-green-500">
              <span className="text-xl font-bold text-green-700">
                {data.health}
              </span>
            </div>

            <div>
              <h3 className="font-semibold text-green-700">
                {tx(data.status)}
              </h3>

              <p className="mt-1 text-sm text-gray-500">
                {crop} {hi ? "का खेत" : "field"}
              </p>
            </div>

          </div>

        </div>

        {/* Priority */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Priority
          </p>

          <h2 className="mt-4 text-3xl font-bold text-orange-500">
            Medium
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Regular monitoring recommended
          </p>

        </div>

        {/* Advisory Status */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <p className="text-sm text-gray-500">
            Advisory Status
          </p>

          <h2 className="mt-4 text-xl font-bold text-[#075E35]">
            Up to date
          </h2>

          <p className="mt-2 text-sm text-gray-500">
            Recommendations generated from current crop conditions
          </p>

        </div>

      </div>

      {/* Main Recommendations */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-6">

          <h2 className="text-xl font-semibold text-[#075E35]">
            Smart Recommendations
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Recommended actions for your {crop} crop
          </p>

        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* Irrigation */}
          <div className="rounded-xl bg-blue-50 p-5">

            <div className="flex items-center gap-3">

              <span className="text-2xl">
                💧
              </span>

              <h3 className="font-semibold text-gray-800">
                Irrigation
              </h3>

            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {tx(data.irrigation)}
            </p>

          </div>

          {/* Fertilizer */}
          <div className="rounded-xl bg-green-50 p-5">

            <div className="flex items-center gap-3">

              <span className="text-2xl">
                🌱
              </span>

              <h3 className="font-semibold text-gray-800">
                Fertilizer
              </h3>

            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {tx(data.fertilizer)}
            </p>

          </div>

          {/* Disease */}
          <div className="rounded-xl bg-red-50 p-5">

            <div className="flex items-center gap-3">

              <span className="text-2xl">
                🦠
              </span>

              <h3 className="font-semibold text-gray-800">
                Disease Prevention
              </h3>

            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {tx(data.disease)}
            </p>

          </div>

          {/* Weather */}
          <div className="rounded-xl bg-yellow-50 p-5">

            <div className="flex items-center gap-3">

              <span className="text-2xl">
                🌦️
              </span>

              <h3 className="font-semibold text-gray-800">
                Weather Advisory
              </h3>

            </div>

            <p className="mt-3 text-sm leading-6 text-gray-600">
              {tx(data.weather)}
            </p>

          </div>

        </div>

      </div>

      {/* Today's Action Plan */}
      <div className="rounded-2xl border border-green-200 bg-green-50 p-6">

        <h2 className="text-xl font-semibold text-[#075E35]">
          Today's Action Plan
        </h2>

        <div className="mt-5 space-y-3">

          <div className="flex items-center gap-3 rounded-lg bg-white p-4">
            <span className="font-bold text-green-600">✓</span>
            <span className="text-sm text-gray-700">
              Inspect crop leaves for visible symptoms
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-white p-4">
            <span className="font-bold text-green-600">✓</span>
            <span className="text-sm text-gray-700">
              Check soil moisture before irrigation
            </span>
          </div>

          <div className="flex items-center gap-3 rounded-lg bg-white p-4">
            <span className="font-bold text-green-600">✓</span>
            <span className="text-sm text-gray-700">
              Monitor weather conditions for the next 24 hours
            </span>
          </div>

        </div>

      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-500">
        💡 Advisory information is intended as decision-support guidance.
        Farmers should verify recommendations with local agricultural experts
        before taking major action.
      </div>

    </div>
  );
}

export default FarmerAdvisory;