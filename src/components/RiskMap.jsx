import {
  MapContainer,
  TileLayer,
  CircleMarker,
  Popup,
} from "react-leaflet";

const riskZones = [
  {
    id: 1,
    location: "Gopalganj",
    position: [26.47, 84.44],
    risk: "High",
    disease: "Leaf Blight",
    area: "42 acres",
  },
  {
    id: 2,
    location: "Muzaffarpur",
    position: [26.12, 85.39],
    risk: "Moderate",
    disease: "Stem Borer",
    area: "28 acres",
  },
  {
    id: 3,
    location: "Patna",
    position: [25.59, 85.14],
    risk: "Low",
    disease: "No major disease",
    area: "64 acres",
  },
  {
    id: 4,
    location: "Darbhanga",
    position: [26.15, 85.89],
    risk: "High",
    disease: "Crop Rust",
    area: "35 acres",
  },
];

function getRiskColor(risk) {
  if (risk === "High") return "#EF4444";
  if (risk === "Moderate") return "#F59E0B";
  return "#22C55E";
}

function RiskMap() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">

      {/* Header */}
      <div className="p-6 border-b border-gray-100">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Risk Hotspot Map
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Geographic distribution of agricultural risk
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
            Prototype Data
          </span>

        </div>

      </div>


      {/* Map */}
      <div className="h-[400px]">

        <MapContainer
          center={[25.95, 85.3]}
          zoom={7}
          scrollWheelZoom={false}
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
              radius={12}
              pathOptions={{
                color: getRiskColor(zone.risk),
                fillColor: getRiskColor(zone.risk),
                fillOpacity: 0.65,
                weight: 2,
              }}
            >

              <Popup>

                <div className="min-w-[180px]">

                  <h3 className="font-bold text-gray-800 text-base">
                    {zone.location}
                  </h3>

                  <div className="mt-2 space-y-1 text-sm">

                    <p>
                      <strong>Risk:</strong>{" "}
                      <span
                        style={{
                          color: getRiskColor(zone.risk),
                          fontWeight: "600",
                        }}
                      >
                        {zone.risk}
                      </span>
                    </p>

                    <p>
                      <strong>Issue:</strong> {zone.disease}
                    </p>

                    <p>
                      <strong>Affected Area:</strong> {zone.area}
                    </p>

                  </div>

                </div>

              </Popup>

            </CircleMarker>

          ))}

        </MapContainer>

      </div>


      {/* Legend */}
      <div className="px-6 py-4 flex flex-wrap gap-5 border-t border-gray-100">

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-xs text-gray-600">
            Low Risk
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="text-xs text-gray-600">
            Moderate Risk
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="text-xs text-gray-600">
            High Risk
          </span>
        </div>

      </div>

    </div>
  );
}

export default RiskMap;