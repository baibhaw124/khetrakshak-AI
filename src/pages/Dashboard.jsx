import RiskMap from "../components/RiskMap";
import RecentAlerts from "../components/RecentAlerts";
import CropHealthStatus from "../components/CropHealthStatus";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  Legend,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
function Dashboard() {
  const stats = [
    {
      title: "Total Reports",
      value: "12,458",
      change: "+12.5%",
      description: "from last month",
      icon: "▣",
    },
    {
      title: "High Risk Zones",
      value: "58",
      change: "+8",
      description: "this week",
      icon: "⚠",
      danger: true,
    },
    {
      title: "Active Alerts",
      value: "218",
      change: "+24",
      description: "requiring attention",
      icon: "!",
      warning: true,
    },
    {
      title: "Crops Monitored",
      value: "32",
      change: "+4",
      description: "crop varieties",
      icon: "✦",
    },
  ];
  const riskData = [
    { name: "Low Risk", value: 62 },
    { name: "Moderate Risk", value: 25 },
    { name: "High Risk", value: 13 },
  ];

  const diseaseData = [
    { name: "Leaf Blight", cases: 38 },
    { name: "Stem Borer", cases: 24 },
    { name: "Crop Rust", cases: 18 },
    { name: "Powdery Mildew", cases: 12 },
  ];


  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#063B25]">
          Dashboard
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          Overview of crop health, disease detection and agricultural risk.
        </p>
      </div>


      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">

        {stats.map((stat) => (

          <div
            key={stat.title}
            className="bg-white rounded-2xl border border-gray-100 p-5 shadow-sm hover:shadow-md transition"
          >

            {/* Top */}
            <div className="flex items-center justify-between">

              <p className="text-sm font-medium text-gray-500">
                {stat.title}
              </p>

              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center font-bold ${stat.danger
                  ? "bg-red-50 text-red-600"
                  : stat.warning
                    ? "bg-orange-50 text-orange-600"
                    : "bg-green-50 text-[#075E35]"
                  }`}
              >
                {stat.icon}
              </div>

            </div>


            {/* Number */}
            <div className="mt-4">

              <h2 className="text-3xl font-bold text-gray-800">
                {stat.value}
              </h2>

            </div>


            {/* Change */}
            <div className="flex items-center gap-2 mt-3">

              <span
                className={`text-xs font-semibold ${stat.danger || stat.warning
                  ? "text-red-600"
                  : "text-green-600"
                  }`}
              >
                {stat.change}
              </span>

              <span className="text-xs text-gray-400">
                {stat.description}
              </span>

            </div>

          </div>

        ))}

      </div>


      {/* Dashboard Introduction */}
      <div className="bg-gradient-to-r from-[#063B25] to-[#0B7040] rounded-2xl p-6 text-white">

        <div className="max-w-2xl">

          <p className="text-sm text-green-200 font-medium">
            Khetrakshak AI Intelligence
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-1">
            Detect Early. Predict Risk. Protect Crops.
          </h2>

          <p className="text-sm text-green-100 mt-2 leading-relaxed">
            Monitor crop health, identify potential diseases and assess
            agricultural risks using AI-powered insights and field data.
          </p>

        </div>

      </div>
      {/* Charts Section */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">

        {/* Risk Overview */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Risk Overview
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Current agricultural risk distribution
              </p>
            </div>

            <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700">
              Current
            </span>

          </div>

          <div className="h-[280px]">

            <ResponsiveContainer width="100%" height="100%">

              <PieChart>

                <Pie
                  data={riskData}
                  cx="50%"
                  cy="50%"
                  innerRadius={65}
                  outerRadius={100}
                  paddingAngle={3}
                  dataKey="value"
                >

                  <Cell fill="#22C55E" />
                  <Cell fill="#FACC15" />
                  <Cell fill="#EF4444" />

                </Pie>

                <Tooltip
                  formatter={(value) => [`${value}%`, "Risk"]}
                />

                <Legend
                  verticalAlign="bottom"
                  height={36}
                />

              </PieChart>

            </ResponsiveContainer>

          </div>

        </div>
        <RiskMap />
        {/* Recent Alerts */}
        <RecentAlerts />
        <CropHealthStatus />

        {/* Disease Distribution */}
        <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">

          <div className="flex items-center justify-between mb-4">

            <div>
              <h2 className="text-lg font-semibold text-gray-800">
                Disease Distribution
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                Frequently detected crop diseases
              </p>
            </div>

            <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-50 text-red-600">
              AI Detection
            </span>

          </div>


          <div className="h-[280px]">

            <ResponsiveContainer width="100%" height="100%">

              <BarChart
                data={diseaseData}
                margin={{
                  top: 10,
                  right: 10,
                  left: -20,
                  bottom: 5,
                }}
              >

                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                />

                <XAxis
                  dataKey="name"
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />

                <YAxis
                  tick={{ fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />

                <Tooltip
                  formatter={(value) => [`${value}%`, "Detected"]}
                />

                <Bar
                  dataKey="cases"
                  fill="#075E35"
                  radius={[6, 6, 0, 0]}
                />

              </BarChart>

            </ResponsiveContainer>

          </div>

        </div>

      </div>
      {/* Technology Stack */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[#075E35]">
            Technology Stack
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            Technologies powering Khetrakshak AI
          </p>
        </div>

        {/* Currently Working */}
        <div className="mb-6">

          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <h3 className="font-semibold text-gray-800">
              Currently Working
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* React */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-gray-800">
                    Frontend
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    React.js + Tailwind CSS
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  Working
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Coming Soon */}
        <div>

          <div className="mb-3 flex items-center gap-2">

            <span className="h-3 w-3 rounded-full bg-orange-500"></span>

            <h3 className="font-semibold text-gray-800">
              Coming Soon
            </h3>

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* Backend */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                Backend
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Python (FastAPI)
              </p>
            </div>

            {/* AI / ML */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                AI / ML
              </p>

              <p className="mt-1 text-sm text-gray-500">
                TensorFlow, PyTorch, Scikit-learn
              </p>
            </div>

            {/* Database */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                Database
              </p>

              <p className="mt-1 text-sm text-gray-500">
                PostgreSQL + PostGIS
              </p>
            </div>

            {/* Geospatial */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                Geospatial
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Leaflet.js / Mapbox
              </p>
            </div>

            {/* Deployment */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                Deployment
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Docker, Cloud / Edge
              </p>
            </div>

            {/* APIs */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                APIs & Integrations
              </p>

              <p className="mt-1 text-sm text-gray-500">
                OpenWeatherMap, IMD, etc.
              </p>
            </div>

            {/* IoT */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                IoT & Sensors
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Sensor & Pest Trap Inputs
              </p>
            </div>

          </div>

        </div>

        {/* Future Vision */}
        <div className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4">

          <div className="flex items-start gap-3">

            <span className="text-2xl">
              🚀
            </span>

            <div>

              <h3 className="font-semibold text-[#075E35]">
                Building Towards an Integrated AI Agriculture Platform
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                Khetrakshak AI is being developed step-by-step,
                integrating crop intelligence, AI/ML, weather data,
                geospatial analysis and IoT-based field inputs into
                a unified decision-support system.
              </p>

            </div>

          </div>

        </div>

      </div>
      {/* Developed By */}
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-green-600">
              Developed By
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#075E35]">
              (Khetrakshak AI Team)
              Baibhaw Upadhyay
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Smart Agricultural Intelligence & Decision Support Platform
            </p>
          </div>

          <div className="rounded-xl bg-green-50 px-5 py-3 text-center">

            <p className="text-xs text-gray-500">
              Technology
            </p>

            <p className="mt-1 text-sm font-semibold text-[#075E35]">
              React • Tailwind CSS • AI
            </p>
          </div>
        </div>
      </div>
      {/* Demo Data Disclaimer */}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs text-gray-500">
        <span className="font-semibold text-gray-600">Note:</span>{" "}
        Dashboard metrics shown here use demonstration data for prototype
        presentation purposes.
      </div>
      {/* Footer */}
      <footer className="border-t border-gray-200 pt-6 pb-2">

        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">

          <div>
            <p className="text-sm font-bold text-[#075E35]">
              Khetrakshak <span className="text-green-500">AI</span>
            </p>

            <p className="mt-1 text-xs text-gray-400">
              An agricultural intelligence
            </p>
          </div>

          <p className="text-xs text-gray-400">
            © 2026 Khetrakshak AI.
          </p>

        </div>

      </footer>
    </div>
  );
}

export default Dashboard;