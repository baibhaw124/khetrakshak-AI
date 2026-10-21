import RiskMap from "../components/RiskMap";
import RecentAlerts from "../components/RecentAlerts";
import CropHealthStatus from "../components/CropHealthStatus";
import { useLanguage } from "../LanguageContext";
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
  const { language } = useLanguage();
  const hi = language === "hi";
  const stats = [
    {
      title: (hi ? "कुल रिपोर्ट" : "Total Reports"),
      value: "12,458",
      change: "+12.5%",
      description: (hi ? "पिछले महीने से" : "from last month"),
      icon: "▣",
    },
    {
      title: (hi ? "उच्च जोखिम वाले क्षेत्र" : "High Risk Zones"),
      value: "58",
      change: "+8",
      description: (hi ? "इस सप्ताह" : "this week"),
      icon: "⚠",
      danger: true,
    },
    {
      title: (hi ? "सक्रिय चेतावनियाँ" : "Active Alerts"),
      value: "218",
      change: "+24",
      description: (hi ? "ध्यान देने की आवश्यकता" : "requiring attention"),
      icon: "!",
      warning: true,
    },
    {
      title: (hi ? "निगरानी में फसलें" : "Crops Monitored"),
      value: "32",
      change: "+4",
      description: (hi ? "फसल की किस्में" : "crop varieties"),
      icon: "✦",
    },
  ];
  const riskData = [
    { name: (hi ? "कम जोखिम" : "Low Risk"), value: 62 },
    { name: (hi ? "मध्यम जोखिम" : "Moderate Risk"), value: 25 },
    { name: (hi ? "उच्च जोखिम" : "High Risk"), value: 13 },
  ];

  const diseaseData = [
    { name: (hi ? "पत्ती झुलसा रोग" : "Leaf Blight"), cases: 38 },
    { name: (hi ? "तना छेदक" : "Stem Borer"), cases: 24 },
    { name: (hi ? "फसल का रतुआ" : "Crop Rust"), cases: 18 },
    { name: (hi ? "चूर्णिल आसिता" : "Powdery Mildew"), cases: 12 },
  ];


  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-[#063B25]">
          {hi ? "डैशबोर्ड" : "Dashboard"}
        </h1>

        <p className="text-sm text-gray-500 mt-1">
          {hi ? "फसल स्वास्थ्य, रोग पहचान और कृषि जोखिम का संक्षिप्त विवरण।" : "Overview of crop health, disease detection and agricultural risk."}
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
            {hi ? "खेतरक्षक AI जानकारी" : "Khetrakshak AI Intelligence"}
          </p>

          <h2 className="text-xl md:text-2xl font-bold mt-1">
            {hi ? "समय पर पहचानें। जोखिम समझें। फसल बचाएँ।" : "Detect Early. Predict Risk. Protect Crops."}
          </h2>

          <p className="text-sm text-green-100 mt-2 leading-relaxed">
            {hi ? "फसल के स्वास्थ्य पर नज़र रखें, संभावित रोगों की पहचान करें और AI आधारित जानकारी व खेत के आँकड़ों से कृषि जोखिम का आकलन करें।" : "Monitor crop health, identify potential diseases and assess agricultural risks using AI-powered insights and field data."}
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
                {hi ? "जोखिम का विवरण" : "Risk Overview"}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {hi ? "वर्तमान कृषि जोखिम का वितरण" : "Current agricultural risk distribution"}
              </p>
            </div>

            <span className="text-xs font-medium px-3 py-1 rounded-full bg-green-50 text-green-700">
              {hi ? "वर्तमान" : "Current"}
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
                {hi ? "रोगों का वितरण" : "Disease Distribution"}
              </h2>

              <p className="text-sm text-gray-500 mt-1">
                {hi ? "अक्सर पाए जाने वाले फसल रोग" : "Frequently detected crop diseases"}
              </p>
            </div>

            <span className="text-xs font-medium px-3 py-1 rounded-full bg-red-50 text-red-600">
              {hi ? "AI रोग पहचान" : "AI Detection"}
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
            {hi ? "तकनीकी ढाँचा" : "Technology Stack"}
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            {hi ? "खेतरक्षक AI को चलाने वाली तकनीकें" : "Technologies powering Khetrakshak AI"}
          </p>
        </div>

        {/* Currently Working */}
        <div className="mb-6">

          <div className="mb-3 flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-green-500"></span>

            <h3 className="font-semibold text-gray-800">
              {hi ? "वर्तमान में कार्यरत" : "Currently Working"}
            </h3>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">

            {/* React */}
            <div className="rounded-xl border border-green-200 bg-green-50 p-4">

              <div className="flex items-center justify-between">

                <div>
                  <p className="font-semibold text-gray-800">
                    {hi ? "फ्रंटएंड" : "Frontend"}
                  </p>

                  <p className="mt-1 text-sm text-gray-600">
                    React.js + Tailwind CSS
                  </p>
                </div>

                <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                  {hi ? "कार्यरत" : "Working"}
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
              {hi ? "आगे जोड़ा जाएगा" : "Coming Soon"}
            </h3>

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

            {/* Backend */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                {hi ? "बैकएंड" : "Backend"}
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
                {hi ? "डेटाबेस" : "Database"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                PostgreSQL + PostGIS
              </p>
            </div>

            {/* Geospatial */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                {hi ? "भौगोलिक सूचना प्रणाली" : "Geospatial"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Leaflet.js / Mapbox
              </p>
            </div>

            {/* Deployment */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                {hi ? "परिनियोजन" : "Deployment"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                Docker, Cloud / Edge
              </p>
            </div>

            {/* APIs */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                {hi ? "API और एकीकरण" : "APIs & Integrations"}
              </p>

              <p className="mt-1 text-sm text-gray-500">
                OpenWeatherMap, IMD, etc.
              </p>
            </div>

            {/* IoT */}
            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
              <p className="font-semibold text-gray-800">
                {hi ? "IoT और सेंसर" : "IoT & Sensors"}
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
                {hi ? "एकीकृत AI कृषि मंच की दिशा में" : "Building Towards an Integrated AI Agriculture Platform"}
              </h3>

              <p className="mt-1 text-sm leading-6 text-gray-600">
                {hi ? "खेतरक्षक AI को चरणबद्ध तरीके से विकसित किया जा रहा है। इसमें फसल संबंधी जानकारी, AI/ML, मौसम के आँकड़े, भौगोलिक विश्लेषण और IoT आधारित खेत की जानकारी को एक निर्णय-सहायक प्रणाली में जोड़ा जा रहा है।" : "Khetrakshak AI is being developed step-by-step, integrating crop intelligence, AI/ML, weather data, geospatial analysis and IoT-based field inputs into a unified decision-support system."}
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
              {hi ? "द्वारा विकसित" : "Developed By"}
            </p>

            <h2 className="mt-1 text-xl font-bold text-[#075E35]">
              {hi ? "(खेतरक्षक AI टीम) बैभव उपाध्याय" : "(Khetrakshak AI Team) Baibhaw Upadhyay"}
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              {hi ? "स्मार्ट कृषि जानकारी और निर्णय-सहायक मंच" : "Smart Agricultural Intelligence & Decision Support Platform"}
            </p>
          </div>

          <div className="rounded-xl bg-green-50 px-5 py-3 text-center">

            <p className="text-xs text-gray-500">
              {hi ? "तकनीक" : "Technology"}
            </p>

            <p className="mt-1 text-sm font-semibold text-[#075E35]">
              React • Tailwind CSS • AI
            </p>
          </div>
        </div>
      </div>
      {/* Demo Data Disclaimer */}
      <div className="rounded-xl border border-gray-200 bg-white px-4 py-3 text-xs text-gray-500">
        <span className="font-semibold text-gray-600">{hi ? "ध्यान दें:" : "Note:"}</span>{" "}
        {hi ? "यहाँ डैशबोर्ड के आँकड़े प्रोटोटाइप प्रदर्शन के लिए उदाहरण के रूप में दिए गए हैं।" : "Dashboard metrics shown here use demonstration data for prototype presentation purposes."}
      </div>
      {/* Footer */}
      <footer className="border-t border-gray-200 pt-6 pb-2">

        <div className="flex flex-col items-center justify-between gap-3 text-center md:flex-row md:text-left">

          <div>
            <p className="text-sm font-bold text-[#075E35]">
              Khetrakshak <span className="text-green-500">AI</span>
            </p>

            <p className="mt-1 text-xs text-gray-400">
              {hi ? "एक कृषि सूचना मंच" : "An agricultural intelligence"}
            </p>
          </div>

          <p className="text-xs text-gray-400">
            {hi ? "© 2026 खेतरक्षक AI।" : "© 2026 Khetrakshak AI."}
          </p>

        </div>

      </footer>
    </div>
  );
}

export default Dashboard;