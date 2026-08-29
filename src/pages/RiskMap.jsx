import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const riskZones = [
  {
    id: 1,
    name: "Zone A - Tomato Fields",
    position: [28.6139, 77.209],
    risk: "High",
    disease: "Leaf Blight",
    affected: "68%",
  },
  {
    id: 2,
    name: "Zone B - Wheat Fields",
    position: [28.628, 77.22],
    risk: "Medium",
    disease: "Rust",
    affected: "35%",
  },
  {
    id: 3,
    name: "Zone C - Rice Fields",
    position: [28.601, 77.195],
    risk: "Low",
    disease: "No major detection",
    affected: "8%",
  },
  {
    id: 4,
    name: "Zone D - Vegetable Fields",
    position: [28.642, 77.19],
    risk: "High",
    disease: "Early Blight",
    affected: "61%",
  },
];

const getRiskColor = (risk) => {
  if (risk === "High") return "#dc2626";
  if (risk === "Medium") return "#f59e0b";
  return "#16a34a";
};

function RiskMap() {
  return (
    <div className="space-y-6">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-gray-800">
          Risk Map
        </h1>

        <p className="mt-1 text-gray-500">
          Geospatial visualization of crop health risks and disease hotspots
        </p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">High Risk Zones</p>
          <h2 className="mt-2 text-3xl font-bold text-red-600">2</h2>
          <p className="mt-1 text-xs text-red-500">
            Immediate monitoring required
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Medium Risk Zones</p>
          <h2 className="mt-2 text-3xl font-bold text-yellow-600">1</h2>
          <p className="mt-1 text-xs text-yellow-600">
            Continue monitoring
          </p>
        </div>

        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">Low Risk Zones</p>
          <h2 className="mt-2 text-3xl font-bold text-green-600">1</h2>
          <p className="mt-1 text-xs text-green-600">
            Normal crop condition
          </p>
        </div>

      </div>

      {/* Map */}
      <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">

        <div className="flex flex-col gap-3 border-b p-5 sm:flex-row sm:items-center sm:justify-between">

          <div>
            <h2 className="font-semibold text-gray-800">
              Crop Risk Hotspots
            </h2>

            <p className="text-sm text-gray-500">
              Demo field-level risk visualization
            </p>
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 text-sm">

            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-green-600"></span>
              Low
            </span>

            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
              Medium
            </span>

            <span className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-600"></span>
              High
            </span>

          </div>

        </div>

        <div className="h-[500px]">

          <MapContainer
            center={[28.6139, 77.209]}
            zoom={12}
            scrollWheelZoom={true}
            className="h-full w-full"
          >

            <TileLayer
              attribution='&copy; OpenStreetMap contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {riskZones.map((zone) => (
              <CircleMarker
                key={zone.id}
                center={zone.position}
                radius={18}
                pathOptions={{
                  color: getRiskColor(zone.risk),
                  fillColor: getRiskColor(zone.risk),
                  fillOpacity: 0.55,
                }}
              >

                <Popup>

                  <div className="min-w-[180px]">

                    <h3 className="font-bold text-gray-800">
                      {zone.name}
                    </h3>

                    <p className="mt-2">
                      Risk:{" "}
                      <strong style={{ color: getRiskColor(zone.risk) }}>
                        {zone.risk}
                      </strong>
                    </p>

                    <p>
                      Detection: {zone.disease}
                    </p>

                    <p>
                      Affected Area: {zone.affected}
                    </p>

                  </div>

                </Popup>

              </CircleMarker>
            ))}

          </MapContainer>

        </div>

      </div>

      {/* Risk Zone Table */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800">
          Active Risk Zones
        </h2>

        <div className="mt-5 overflow-x-auto">

          <table className="w-full min-w-[650px] text-left">

            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="px-4 py-3">Zone</th>
                <th className="px-4 py-3">Crop</th>
                <th className="px-4 py-3">Risk</th>
                <th className="px-4 py-3">Detection</th>
                <th className="px-4 py-3">Affected</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-4 py-4 font-medium">
                  Zone A
                </td>
                <td className="px-4 py-4">
                  Tomato
                </td>
                <td className="px-4 py-4 font-semibold text-red-600">
                  High
                </td>
                <td className="px-4 py-4">
                  Leaf Blight
                </td>
                <td className="px-4 py-4">
                  68%
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-4 font-medium">
                  Zone B
                </td>
                <td className="px-4 py-4">
                  Wheat
                </td>
                <td className="px-4 py-4 font-semibold text-yellow-600">
                  Medium
                </td>
                <td className="px-4 py-4">
                  Rust
                </td>
                <td className="px-4 py-4">
                  35%
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4 font-medium">
                  Zone C
                </td>
                <td className="px-4 py-4">
                  Rice
                </td>
                <td className="px-4 py-4 font-semibold text-green-600">
                  Low
                </td>
                <td className="px-4 py-4">
                  No major detection
                </td>
                <td className="px-4 py-4">
                  8%
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}

export default RiskMap;