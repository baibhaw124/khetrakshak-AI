import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import { useState } from "react";

const resultTranslations = {
  disease: {
    Early_blight: "अगेती झुलसा (Early Blight)",
    Late_blight: "पछेती झुलसा (Late Blight)",
    healthy: "स्वस्थ (Healthy)",
    Healthy: "स्वस्थ (Healthy)",
    Leaf_Mold: "पत्ती फफूंद रोग (Leaf Mold)",
    Septoria_leaf_spot: "सेप्टोरिया पत्ती धब्बा रोग",
    Tomato___Early_blight: "टमाटर में अगेती झुलसा",
  },
  crop: {
    Tomato: "टमाटर",
    Potato: "आलू",
    Corn: "मक्का",
    Apple: "सेब",
    Grape: "अंगूर",
    Pepper: "मिर्च",
    Strawberry: "स्ट्रॉबेरी",
    Peach: "आड़ू",
    Cherry: "चेरी",
    Blueberry: "ब्लूबेरी",
    Orange: "संतरा",
    Soybean: "सोयाबीन",
    Squash: "स्क्वैश",
    Raspberry: "रास्पबेरी",
  },
  severity: {
    Low: "कम",
    Medium: "मध्यम",
    High: "अधिक",
  },
  risk: {
    Low: "कम जोखिम",
    Medium: "मध्यम जोखिम",
    High: "उच्च जोखिम",
  },
  recommendations: {
    "Remove severely affected foliage where practical.":
      "जहाँ संभव हो, रोग से बहुत अधिक प्रभावित पत्तियों को हटा दें।",
    "Manage crop debris.":
      "फसल के अवशेषों का उचित प्रबंधन करें।",
    "Avoid prolonged leaf wetness.":
      "पत्तियों को लंबे समय तक गीला रहने से बचाएँ।",
    "Follow locally approved disease-management guidance.":
      "स्थानीय कृषि विशेषज्ञों द्वारा स्वीकृत रोग-प्रबंधन निर्देशों का पालन करें।",
    "Practice crop rotation.":
      "फसल चक्र अपनाएँ।",
    "Use healthy planting material.":
      "स्वस्थ बीज या रोपण सामग्री का उपयोग करें।",
    "Maintain field sanitation.":
      "खेत में स्वच्छता बनाए रखें।",
  },
};
function translateResult(value, category, hi) {
  if (value == null) return "";
  if (!hi) return String(value);

  const dictionary = resultTranslations[category] || {};
  const key = String(value).trim();

  return dictionary[key] || key.replaceAll("_", " ");
}

function DiseaseDetection() {
  const { language } = useLanguage();
  const hi = language === "hi";
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);
  const [processingConsent, setProcessingConsent] = useState(false);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    if (!file.type.startsWith("image/")) {
      alert(hi ? "कृपया एक छवि फ़ाइल चुनें।" : "Please choose an image file.");
      event.target.value = "";
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      alert(hi ? "कृपया 10 MB से छोटी तस्वीर चुनें।" : "Please choose an image smaller than 10 MB.");
      event.target.value = "";
      return;
    }

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setSelectedFile(file);
    setResult(null);
  };


  const analyzeImage = async () => {
    if (!selectedFile || analyzing) return;
    if (!processingConsent) {
      alert(hi ? "आगे बढ़ने के लिए तस्वीर के प्रसंस्करण की सहमति दें।" : "Please acknowledge image processing before continuing.");
      return;
    }

    setAnalyzing(true);
    setResult(null);

    const API_URL = import.meta.env.VITE_API_URL?.replace(/\/+$/, "");

    if (!API_URL) {
      alert(
        hi
          ? "API URL कॉन्फ़िगर नहीं है।"
          : "The API URL is not configured."
      );
      setAnalyzing(false);
      return;
    }

    const wait = (ms) =>
      new Promise((resolve) => setTimeout(resolve, ms));

    try {
      let response;
      let lastError;

      // Retry transient gateway/network failures up to 3 attempts.
      for (let attempt = 0; attempt < 3; attempt++) {
        try {
          const formData = new FormData();
          formData.append("file", selectedFile);

          response = await fetch(`${API_URL}/disease/analyze`, {
            method: "POST",
            body: formData,
          });

          // Retry only temporary server/gateway errors.
          if (response.status >= 500 && attempt < 2) {
            await wait(2000 * (attempt + 1));
            continue;
          }

          break;
        } catch (error) {
          lastError = error;

          if (attempt < 2) {
            await wait(2000 * (attempt + 1));
          }
        }
      }

      if (!response) {
        throw lastError || new Error("Network request failed");
      }

      if (!response.ok) {
        let detail = "";

        try {
          const errorData = await response.json();
          detail =
            typeof errorData?.detail === "string"
              ? errorData.detail
              : "";
        } catch {
          // The gateway may return non-JSON content.
        }

        if (response.status >= 500) {
          throw new Error(
            hi
              ? "सर्वर अभी व्यस्त है। कृपया कुछ देर बाद दोबारा प्रयास करें।"
              : "The server is temporarily unavailable. Please try again shortly."
          );
        }

        throw new Error(
          detail ||
          (hi
            ? "तस्वीर की जाँच नहीं हो सकी। कृपया दूसरी तस्वीर आज़माएँ।"
            : "Image analysis failed. Please try another image.")
        );
      }

      const data = await response.json();

      if (data.status === "rejected") {
        setResult({
          rejected: true,
          message:
            hi
              ? "कृपया पौधे की पत्ती की साफ़ तस्वीर अपलोड करें।"
              : "Please upload a clear image of a plant leaf.",
          confidence: Number(data.confidence ?? 0),
        });
        return;
      }

      setResult({
        rejected: false,
        disease: data.disease,
        confidence: data.confidence,
        risk: data.risk,
        crop: data.crop,
        severity: data.severity,
        symptoms: data.symptoms,
        recommendation: data.recommendations || [],
        prevention: data.prevention || [],
      });
    } catch (error) {
      console.error("Disease analysis error:", error);

      alert(
        hi
          ? "खेत रक्षक AI सर्वर से संपर्क नहीं हो पाया। कृपया सर्वर के तैयार होने के बाद दोबारा प्रयास करें।"
          : "Unable to reach the Khetrakshak AI server. Please retry when the server is ready."
      );
    } finally {
      setAnalyzing(false);
    }
  };


  return (
    <div className="space-y-6">

      {/* Page Header */}
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          {hi ? "फसल में रोग की पहचान" : "Disease Detection"}
        </h1>

        <p className="mt-1 text-gray-500">
          {hi
            ? "पौधे की तस्वीर से फसल में संभावित रोग की पहचान करें।"
            : "AI-powered crop disease identification from plant images"}
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Upload Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800">
            {hi ? "फसल की तस्वीर चुनें" : "Upload Crop Image"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {hi ? "प्रभावित फसल या पत्ती की साफ़ तस्वीर अपलोड करें।" : "Upload a clear image of the affected crop or leaf."}
          </p>

          {/* Image Preview */}
          {/* Image Preview / AI Scanner */}
          <div className="mt-5 relative flex min-h-[320px] items-center justify-center overflow-hidden rounded-xl border-2 border-dashed border-gray-300 bg-gray-50">

            {analyzing ? (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/95">

                {/* Scanner Icon */}
                <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-green-50">

                  <div className="absolute h-14 w-14 animate-ping rounded-full bg-green-200 opacity-40"></div>

                  <span className="relative text-4xl">
                    🔬
                  </span>

                </div>

                {/* Text */}
                <h3 className="mt-5 text-lg font-semibold text-[#075E35]">
                  {hi ? "AI जाँच कर रहा है" : "AI Analyzing"}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {hi ? "तस्वीर में संभावित रोगों की जाँच की जा रही है..." : "Scanning crop image for possible diseases..."}
                </p>

                {/* Loading dots */}
                <div className="mt-4 flex gap-1.5">

                  <span className="h-2 w-2 animate-bounce rounded-full bg-green-600"></span>

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-green-600"
                    style={{ animationDelay: "150ms" }}
                  ></span>

                  <span
                    className="h-2 w-2 animate-bounce rounded-full bg-green-600"
                    style={{ animationDelay: "300ms" }}
                  ></span>

                </div>

              </div>

            ) : image ? (

              <img
                src={image}
                alt={hi ? "अपलोड की गई फसल की तस्वीर" : "Uploaded crop"}
                className="h-72 w-full rounded-xl object-contain"
              />

            ) : (

              <div className="text-center">

                <div className="text-5xl">
                  🌿
                </div>

                <p className="mt-3 font-medium text-gray-700">
                  {hi ? "फसल की तस्वीर अपलोड करें" : "Upload a crop image"}
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  {hi ? "JPG, PNG या JPEG फ़ाइल" : "JPG, PNG or JPEG"}
                </p>

              </div>

            )}

          </div>

          {/* Buttons */}
          <div className="mt-5 flex gap-3">

            <label
              className={`flex-1 rounded-xl px-4 py-3 text-center font-medium text-white transition ${analyzing
                ? "cursor-not-allowed bg-gray-400"
                : "cursor-pointer bg-green-700 hover:bg-green-800"
                }`}
            >
              {hi ? "तस्वीर चुनें" : "Choose Image"}
              <input
                type="file"
                accept="image/jpeg,image/png,image/webp"
                onChange={handleImageUpload}
                disabled={analyzing}
                className="hidden"
              />
            </label>

            <button
              onClick={analyzeImage}
              disabled={!image || !processingConsent || analyzing}
              className="flex-1 rounded-xl bg-emerald-100 px-4 py-3 font-medium text-emerald-800 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {analyzing ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-700 border-t-transparent"></span>
                  {hi ? "जाँच जारी है..." : "Analyzing..."}
                </span>
              ) : (
                hi ? "जाँच शुरू करें" : "Analyze Crop"
              )}
            </button>
          </div>

          <div className="mt-4 rounded-xl border border-green-100 bg-green-50/70 p-3">
            <label className="flex cursor-pointer items-start gap-3 text-sm text-gray-700">
              <input
                type="checkbox"
                checked={processingConsent}
                onChange={(event) => setProcessingConsent(event.target.checked)}
                disabled={analyzing}
                className="mt-1 h-4 w-4 shrink-0 accent-green-700"
              />
              <span>
                {hi
                  ? "मैं सहमत हूँ कि चुनी गई तस्वीर AI विश्लेषण के लिए सर्वर पर भेजी और अस्थायी रूप से संसाधित की जाएगी। वर्तमान प्रक्रिया में इसे विश्लेषण के बाद हटाया जाता है।"
                  : "I understand that my selected image will be sent to the server for AI analysis and processed temporarily. Under the current processing flow, the image is deleted after analysis."}
                {" "}<Link to="/privacy-policy" className="font-semibold text-green-800 underline underline-offset-2">{hi ? "गोपनीयता नीति" : "Privacy Policy"}</Link>
                {" · "}<Link to="/terms" className="font-semibold text-green-800 underline underline-offset-2">{hi ? "नियम और शर्तें" : "Terms"}</Link>
              </span>
            </label>
            <p className="mt-2 pl-7 text-xs leading-5 text-gray-500">
              {hi ? "केवल JPG, PNG या WEBP; अधिकतम 10 MB।" : "JPG, PNG, or WEBP only; 10 MB maximum."}
            </p>
          </div>

        </div>

        {/* Result Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800">
            {hi ? "जाँच का परिणाम" : "Analysis Result"}
          </h2>

          {!result ? (
            <div className="flex min-h-[400px] items-center justify-center text-center">

              <div>
                <div className="text-5xl">🔬</div>

                <p className="mt-4 font-medium text-gray-700">
                  {hi ? "अभी कोई परिणाम नहीं है" : "No analysis available"}
                </p>

                <p className="mt-1 max-w-sm text-sm text-gray-400">
                  {hi
                    ? "पहले पत्ती का चित्र चुनें और फिर “जाँच शुरू करें” पर दबाएँ"
                    : "Choose a leaf image, then click Analyze Crop"}
                  {hi ? "ताकि AI से रोग की जाँच का परिणाम देख सकें।" : "to view the AI-based disease assessment."}
                </p>
              </div>

            </div>
          ) : result.rejected ? (

            <div className="flex min-h-[400px] items-center justify-center text-center">
              <div>

                <div className="text-6xl">
                  🌿
                </div>

                <h3 className="mt-5 text-xl font-bold text-orange-600">
                  {hi ? "यह पत्ती की तस्वीर नहीं लगती" : "Image Not Recognized as a Leaf"}
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  {result.message}
                </p>

                {result.confidence > 0 && (
                  <div className="mt-4 inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                    {hi ? "पहचान का विश्वास स्तर:" : "Validation Confidence:"} {result.confidence}%
                  </div>
                )}

                <p className="mt-4 text-sm text-gray-400">
                  {hi ? "कृपया पौधे की पत्ती की साफ़ तस्वीर अपलोड करें।" : "Please upload a clear image of a plant leaf."}
                </p>

              </div>
            </div>

          ) : (

            <div className="mt-5 space-y-5">

              {/* KEEP EVERYTHING FROM HERE EXACTLY AS IT IS */}

              {/* Disease */}
              <div
                className={`rounded-xl p-5 ${result.disease?.toLowerCase().includes("healthy")
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
                  }`}
              >
                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      {hi ? "पहचाना गया रोग" : "Detected Disease"}
                    </p>

                    <h3
                      className={`mt-1 text-2xl font-bold ${result.disease?.toLowerCase().includes("healthy")
                        ? "text-green-700"
                        : "text-red-700"
                        }`}
                    >
                      {translateResult(result.disease, "disease", hi)}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      {hi ? "फसल:" : "Crop:"} {translateResult(result.crop, "crop", hi)}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600">
                        {hi ? "फसल:" : "Crop:"} {translateResult(result.crop, "crop", hi)}
                      </span>

                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        {hi ? "गंभीरता:" : "Severity:"} {translateResult(result.severity, "severity", hi)}
                      </span>

                    </div>
                  </div>

                  <div
                    className={`rounded-full px-4 py-2 text-sm font-bold ${result.disease?.toLowerCase().includes("healthy")
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                      }`}
                  >
                    {hi
                      ? translateResult(result.risk, "risk", true)
                      : `${result.risk} Risk`}
                  </div>
                </div>

              </div>

              {/* Confidence */}
              <div className="mb-2 flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    {hi ? "AI पहचान का विश्वास स्तर" : "AI Detection Confidence"}
                  </p>

                  <p className="text-xs text-gray-400 mt-0.5">
                    {hi ? "पहचानी गई स्थिति के लिए मॉडल का विश्वास स्तर" : "Model confidence for detected condition"}
                  </p>
                </div>

                <span className="text-lg font-bold text-green-700">
                  {result.confidence}%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-gray-200">

                <div
                  className="h-full rounded-full bg-green-600"
                  style={{ width: `${result.confidence}%` }}
                />

              </div>
              <div className="flex items-center gap-3 rounded-xl bg-green-50 border border-green-100 p-4">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-600 text-white text-sm font-bold">
                  AI
                </div>

                <div>
                  <p className="text-sm font-semibold text-green-800">
                    {hi ? "AI जाँच पूरी हुई" : "AI Analysis Complete"}
                  </p>

                  <p className="text-xs text-green-700 mt-0.5">
                    {hi ? "फसल की तस्वीर की सफलतापूर्वक जाँच की गई।" : "Crop image successfully analyzed."}
                  </p>
                </div>

              </div>

              {/* Recommendation */}
              <div>

                <h3 className="font-semibold text-gray-800">
                  {hi ? "सुझाए गए कदम" : "Recommended Action"}
                </h3>

                <div className="mt-3 space-y-2">

                  {result.recommendation.map((item, index) => (
                    <div
                      key={index}
                      className="flex gap-3 rounded-lg bg-gray-50 p-3 text-sm text-gray-600"
                    >
                      <span className="font-bold text-green-600">
                        ✓
                      </span>

                      <span>{translateResult(item, "recommendations", hi)}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

      {/* {hi ? "हाल की जाँचें" : "Recent Analyses"} */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {hi ? "हाल की जाँचें" : "Recent Analyses"}
            </h2>

            <p className="text-sm text-gray-500">
              {hi ? "पहले जाँची गई फसलों के नमूने" : "Previously analyzed crop samples"}
            </p>
          </div>

        </div>

        <div className="mt-5 overflow-x-auto">

          <table className="w-full min-w-[600px] text-left">

            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="px-4 py-3">{hi ? "फसल" : "Crop"}</th>
                <th className="px-4 py-3">{hi ? "रोग की पहचान" : "Detection"}</th>
                <th className="px-4 py-3">{hi ? "विश्वास स्तर" : "Confidence"}</th>
                <th className="px-4 py-3">{hi ? "जोखिम" : "Risk"}</th>
                <th className="px-4 py-3">{hi ? "स्थिति" : "Status"}</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-4 py-4 font-medium">{hi ? "टमाटर" : "Tomato"}</td>
                <td className="px-4 py-4">{hi ? "पत्ती झुलसा रोग" : "Leaf Blight"}</td>
                <td className="px-4 py-4">94%</td>
                <td className="px-4 py-4 text-red-600">{hi ? "उच्च" : "High"}</td>
                <td className="px-4 py-4 text-gray-500">{hi ? "जाँचा गया" : "Reviewed"}</td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-4 font-medium">{hi ? "गेहूँ" : "Wheat"}</td>
                <td className="px-4 py-4">{hi ? "स्वस्थ" : "Healthy"}</td>
                <td className="px-4 py-4">97%</td>
                <td className="px-4 py-4 text-green-600">{hi ? "कम" : "Low"}</td>
                <td className="px-4 py-4 text-gray-500">{hi ? "स्वस्थ" : "Healthy"}</td>
              </tr>

              <tr>
                <td className="px-4 py-4 font-medium">{hi ? "धान" : "Rice"}</td>
                <td className="px-4 py-4">{hi ? "भूरे धब्बे का रोग" : "Brown Spot"}</td>
                <td className="px-4 py-4">91%</td>
                <td className="px-4 py-4 text-orange-600">{hi ? "मध्यम" : "Medium"}</td>
                <td className="px-4 py-4 text-gray-500">{hi ? "जाँचा गया" : "Reviewed"}</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div >
  );
}
export default DiseaseDetection;