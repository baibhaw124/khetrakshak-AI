import { useState } from "react";

function DiseaseDetection() {
  const [image, setImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [analyzing, setAnalyzing] = useState(false);
  const [result, setResult] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];

    if (!file) return;

    const imageUrl = URL.createObjectURL(file);

    setImage(imageUrl);
    setSelectedFile(file);
    setResult(null);
  };

  const analyzeImage = async () => {
    if (!selectedFile) return;

    const file = selectedFile;

    setAnalyzing(true);
    setResult(null);

    try {
      const formData = new FormData();

      formData.append("file", file);

      const API_URL = import.meta.env.VITE_API_URL;

      if (!API_URL) {
        throw new Error("VITE_API_URL is not configured");
      }

      const response = await fetch(
        `${API_URL}/disease/analyze`,
        {
          method: "POST",
          body: formData,
        }
      ); 

      if (!response.ok) {
        let errorMessage = "Disease analysis failed.";

        try {
          const errorData = await response.json();

          if (errorData?.detail) {
            errorMessage =
              typeof errorData.detail === "string"
                ? errorData.detail
                : "The backend rejected the image.";
          }
        } catch {
          // Backend did not return JSON
        }

        throw new Error(errorMessage);
      }

      const data = await response.json();

      if (data.status === "rejected") {
    setResult({
      rejected: true,
      message:
        data.message ||
        "Please upload a clear image of a plant leaf.",
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
        error?.message ||
        "Unable to connect to the Khetrakshak AI backend."
      );

    } finally {
      setAnalyzing(false);
    }
  };

  return (
    <div className="space-y-6">

      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Disease Detection
        </h1>

        <p className="mt-1 text-gray-500">
          AI-powered crop disease identification from plant images
        </p>
      </div>

      {/* Main Section */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Upload Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800">
            Upload Crop Image
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Upload a clear image of the affected crop or leaf.
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
                  AI Analyzing
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  Scanning crop image for possible diseases...
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
                alt="Uploaded crop"
                className="h-72 w-full rounded-xl object-contain"
              />

            ) : (

              <div className="text-center">

                <div className="text-5xl">
                  🌿
                </div>

                <p className="mt-3 font-medium text-gray-700">
                  Upload a crop image
                </p>

                <p className="mt-1 text-sm text-gray-400">
                  JPG, PNG or JPEG
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
              Choose Image
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                disabled={analyzing}
                className="hidden"
              />
            </label>

            <button
              onClick={analyzeImage}
              disabled={!image || analyzing}
              className="flex-1 rounded-xl bg-emerald-100 px-4 py-3 font-medium text-emerald-800 transition hover:bg-emerald-200 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {analyzing ? (
                <span className="flex items-center justify-center gap-2">

                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-emerald-700 border-t-transparent"></span>

                  Analyzing...

                </span>
              ) : (
                "Analyze Crop"
              )}
            </button>
          </div>

        </div>

        {/* Result Section */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800">
            Analysis Result
          </h2>

          {!result ? (
            <div className="flex min-h-[400px] items-center justify-center text-center">

              <div>
                <div className="text-5xl">🔬</div>

                <p className="mt-4 font-medium text-gray-700">
                  No analysis available
                </p>

                <p className="mt-1 max-w-sm text-sm text-gray-400">
                  Upload a crop image and click Analyze Crop
                  to view the AI-based disease assessment.
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
                Image Not Recognized as a Leaf
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                {result.message}
              </p>

              {result.confidence > 0 && (
                <div className="mt-4 inline-block rounded-full bg-orange-50 px-4 py-2 text-sm font-medium text-orange-700">
                  Validation Confidence: {result.confidence}%
                </div>
              )}

              <p className="mt-4 text-sm text-gray-400">
                Please upload a clear image of a plant leaf.
              </p>

            </div>
          </div>

        ) : (

          <div className="mt-5 space-y-5">

              {/* KEEP EVERYTHING FROM HERE EXACTLY AS IT IS */}

              {/* Disease */}
              <div className="rounded-xl bg-red-50 p-5">

                <div className="flex items-center justify-between">

                  <div>
                    <p className="text-sm text-gray-500">
                      Detected Disease
                    </p>

                    <h3 className="mt-1 text-2xl font-bold text-red-700">
                      {result.disease}
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Crop: {result.crop}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">

                      <span className="rounded-full bg-white px-3 py-1 text-xs font-medium text-gray-600">
                        Crop: {result.crop}
                      </span>

                      <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
                        Severity: {result.severity}
                      </span>

                    </div>
                  </div>

                  <div className="rounded-full bg-red-100 px-4 py-2 text-sm font-bold text-red-700">
                    {result.risk} Risk
                  </div>

                </div>

              </div>

              {/* Confidence */}
              <div className="mb-2 flex items-center justify-between">

                <div>
                  <p className="text-sm font-semibold text-gray-700">
                    AI Detection Confidence
                  </p>

                  <p className="text-xs text-gray-400 mt-0.5">
                    Model confidence for detected condition
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
                    AI Analysis Complete
                  </p>

                  <p className="text-xs text-green-700 mt-0.5">
                    Crop image successfully analyzed.
                  </p>
                </div>

              </div>

              {/* Recommendation */}
              <div>

                <h3 className="font-semibold text-gray-800">
                  Recommended Action
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

                      <span>{item}</span>
                    </div>
                  ))}

                </div>

              </div>

            </div>

          )}

        </div>

      </div>

      {/* Recent Analyses */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Analyses
            </h2>

            <p className="text-sm text-gray-500">
              Previously analyzed crop samples
            </p>
          </div>

        </div>

        <div className="mt-5 overflow-x-auto">

          <table className="w-full min-w-[600px] text-left">

            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="px-4 py-3">Crop</th>
                <th className="px-4 py-3">Detection</th>
                <th className="px-4 py-3">Confidence</th>
                <th className="px-4 py-3">Risk</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-4 py-4 font-medium">Tomato</td>
                <td className="px-4 py-4">Leaf Blight</td>
                <td className="px-4 py-4">94%</td>
                <td className="px-4 py-4 text-red-600">High</td>
                <td className="px-4 py-4 text-gray-500">Reviewed</td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-4 font-medium">Wheat</td>
                <td className="px-4 py-4">Healthy</td>
                <td className="px-4 py-4">97%</td>
                <td className="px-4 py-4 text-green-600">Low</td>
                <td className="px-4 py-4 text-gray-500">Healthy</td>
              </tr>

              <tr>
                <td className="px-4 py-4 font-medium">Rice</td>
                <td className="px-4 py-4">Brown Spot</td>
                <td className="px-4 py-4">91%</td>
                <td className="px-4 py-4 text-orange-600">Medium</td>
                <td className="px-4 py-4 text-gray-500">Reviewed</td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div >
  );
}

export default DiseaseDetection;