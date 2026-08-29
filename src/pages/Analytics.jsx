import { useState } from "react";

function Analytics() {
  const [crop, setCrop] = useState("Tomato");
  const [period, setPeriod] = useState("6 Weeks");

  const cropData = {
    Tomato: {
      health: 82,
      disease: 32,
      moisture: 72,
      yield: 88,
    },
    Wheat: {
      health: 91,
      disease: 14,
      moisture: 68,
      yield: 94,
    },
    Rice: {
      health: 76,
      disease: 41,
      moisture: 81,
      yield: 79,
    },
    Potato: {
      health: 86,
      disease: 25,
      moisture: 70,
      yield: 87,
    },
  };

  const data = cropData[crop];

  const healthTrend = [55, 61, 65, 70, 76, data.health];

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Analytics
          </h1>

          <p className="mt-1 text-gray-500">
            Data-driven insights into crop health and field conditions
          </p>
        </div>

        <div className="flex gap-3">

          <select
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600"
          >
            <option>Tomato</option>
            <option>Wheat</option>
            <option>Rice</option>
            <option>Potato</option>
          </select>

          <select
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-green-600"
          >
            <option>4 Weeks</option>
            <option>6 Weeks</option>
            <option>3 Months</option>
          </select>

        </div>

      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Health Score
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {data.health}%
          </h2>

          <p className="mt-1 text-xs text-green-600">
            ↑ Improving
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Disease Risk
          </p>

          <h2 className="mt-2 text-3xl font-bold text-orange-500">
            {data.disease}%
          </h2>

          <p className="mt-1 text-xs text-gray-500">
            Current estimated risk
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Soil Moisture
          </p>

          <h2 className="mt-2 text-3xl font-bold text-blue-600">
            {data.moisture}%
          </h2>

          <p className="mt-1 text-xs text-blue-600">
            Within optimal range
          </p>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Yield Potential
          </p>

          <h2 className="mt-2 text-3xl font-bold text-[#075E35]">
            {data.yield}%
          </h2>

          <p className="mt-1 text-xs text-green-600">
            Estimated potential
          </p>
        </div>

      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

        {/* Health Trend */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Crop Health Trend
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {crop} health over the last {period.toLowerCase()}
            </p>
          </div>

          <div className="mt-8 flex h-64 items-end gap-3">

            {healthTrend.map((value, index) => (
              <div
                key={index}
                className="flex flex-1 flex-col items-center justify-end"
              >

                <span className="mb-2 text-xs font-medium text-gray-500">
                  {value}%
                </span>

                <div
                  className="w-full rounded-t-lg bg-green-600 transition-all duration-500"
                  style={{
                    height: `${value * 2.1}px`,
                  }}
                ></div>

                <span className="mt-2 text-xs text-gray-400">
                  W{index + 1}
                </span>

              </div>
            ))}

          </div>

        </div>

        {/* Risk Distribution */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

          <h2 className="text-lg font-semibold text-gray-800">
            Risk Distribution
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Current risk indicators for {crop}
          </p>

          <div className="mt-8 space-y-6">

            {/* Disease */}
            <div>

              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">
                  Disease Risk
                </span>

                <span className="font-semibold text-red-600">
                  {data.disease}%
                </span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-red-500"
                  style={{ width: `${data.disease}%` }}
                ></div>
              </div>

            </div>

            {/* Weather */}
            <div>

              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">
                  Weather Risk
                </span>

                <span className="font-semibold text-yellow-600">
                  28%
                </span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-yellow-500"
                  style={{ width: "28%" }}
                ></div>
              </div>

            </div>

            {/* Pest */}
            <div>

              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">
                  Pest Risk
                </span>

                <span className="font-semibold text-orange-600">
                  21%
                </span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-orange-500"
                  style={{ width: "21%" }}
                ></div>
              </div>

            </div>

            {/* Soil */}
            <div>

              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600">
                  Soil Risk
                </span>

                <span className="font-semibold text-green-600">
                  12%
                </span>
              </div>

              <div className="h-3 rounded-full bg-gray-200">
                <div
                  className="h-3 rounded-full bg-green-500"
                  style={{ width: "12%" }}
                ></div>
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Field Insights */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <h2 className="text-lg font-semibold text-gray-800">
          Field Insights
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Key observations generated from current crop data
        </p>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">

          <div className="rounded-xl bg-green-50 p-5">

            <span className="text-2xl">
              📈
            </span>

            <h3 className="mt-3 font-semibold text-gray-800">
              Health Improving
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Crop health has shown a positive trend during the selected
              monitoring period.
            </p>

          </div>

          <div className="rounded-xl bg-orange-50 p-5">

            <span className="text-2xl">
              ⚠️
            </span>

            <h3 className="mt-3 font-semibold text-gray-800">
              Disease Monitoring
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Disease risk should be monitored regularly, especially after
              changes in humidity and rainfall.
            </p>

          </div>

          <div className="rounded-xl bg-blue-50 p-5">

            <span className="text-2xl">
              💧
            </span>

            <h3 className="mt-3 font-semibold text-gray-800">
              Moisture Balanced
            </h3>

            <p className="mt-2 text-sm leading-6 text-gray-600">
              Current soil moisture is within the preferred range for the
              selected crop.
            </p>

          </div>

        </div>

      </div>

      {/* Data Table */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Crop Metrics
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Current monitoring indicators
            </p>
          </div>

          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
            Demo Monitoring
          </span>

        </div>

        <div className="mt-5 overflow-x-auto">

          <table className="w-full min-w-[600px] text-left">

            <thead>
              <tr className="border-b text-sm text-gray-500">
                <th className="px-4 py-3">Metric</th>
                <th className="px-4 py-3">Value</th>
                <th className="px-4 py-3">Status</th>
              </tr>
            </thead>

            <tbody>

              <tr className="border-b">
                <td className="px-4 py-4">Crop Health</td>
                <td className="px-4 py-4 font-semibold">
                  {data.health}%
                </td>
                <td className="px-4 py-4 text-green-600">
                  Healthy
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-4">Disease Risk</td>
                <td className="px-4 py-4 font-semibold">
                  {data.disease}%
                </td>
                <td className="px-4 py-4 text-orange-600">
                  Monitor
                </td>
              </tr>

              <tr className="border-b">
                <td className="px-4 py-4">Soil Moisture</td>
                <td className="px-4 py-4 font-semibold">
                  {data.moisture}%
                </td>
                <td className="px-4 py-4 text-blue-600">
                  Optimal
                </td>
              </tr>

              <tr>
                <td className="px-4 py-4">Yield Potential</td>
                <td className="px-4 py-4 font-semibold">
                  {data.yield}%
                </td>
                <td className="px-4 py-4 text-green-600">
                  Good
                </td>
              </tr>

            </tbody>

          </table>

        </div>

      </div>

      {/* Disclaimer */}
      <div className="rounded-xl border border-gray-200 bg-white p-4 text-sm text-gray-500">
        💡 Analytics shown in this prototype use demonstration data and are
        intended to illustrate the Khetrakshak decision-support interface.
      </div>

    </div>
  );
}

export default Analytics;