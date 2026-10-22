import { NavLink } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

function Sidebar() {
  const { language } = useLanguage();
  const hi = language === "hi";

  const menuItems = [
    { path: "/dashboard", icon: "⌂", label: hi ? "डैशबोर्ड" : "Dashboard" },
    { path: "/crop-health", icon: "✦", label: hi ? "फसल स्वास्थ्य" : "Crop Health" },
    { path: "/disease-detection", icon: "⌁", label: hi ? "रोग पहचान" : "Disease Detection" },
    { path: "/risk-map", icon: "◉", label: hi ? "जोखिम मानचित्र" : "Risk Map" },
    { path: "/alerts", icon: "!", label: hi ? "अलर्ट" : "Alerts" },
    { path: "/farmer-advisory", icon: "✚", label: hi ? "किसान सलाह" : "Farmer Advisory" },
    { path: "/analytics", icon: "▥", label: hi ? "विश्लेषण" : "Analytics" },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-[#063B25] text-white flex-col shadow-xl">

      import {Link} from "react-router-dom";
      {/* Logo */}
      <Link to="/" aria-label="Go to Khetrakshak AI homepage">
        {<div className="px-6 py-6 border-b border-green-900">

          <div className="flex items-center gap-3">

            <div className="w-11 h-11 rounded-xl bg-[#D9F99D] flex items-center justify-center">
              <span className="text-[#075E35] text-2xl font-bold" aria-hidden="true">ख</span>
            </div>

            <div>
              <h1 className="text-xl font-bold tracking-tight">
                {hi ? "खेत रक्षक" : "Khetrakshak"}
                <span className="text-lime-300"> AI</span>
              </h1>

              <p className="text-[11px] text-green-200 mt-1">
                {hi ? "फसल स्वास्थ्य · समझदार खेती" : "Crop Health Intelligence"}
              </p>
            </div>

          </div>

        </div>}
      </Link>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <p className="px-3 mb-3 text-[10px] font-semibold tracking-widest text-green-300 uppercase">
          {hi ? "मुख्य मेनू" : "Main Menu"}
        </p>

        <div className="space-y-1.5">

          {menuItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `flex items-center gap-3 w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                  ? "bg-[#0B6842] text-white ring-1 ring-inset ring-[#69B98A]/35 shadow-sm"
                  : "text-green-50 hover:bg-[#0A5235]"
                }`
              }
            >

              <span className="w-7 h-7 flex items-center justify-center rounded-lg bg-white/10 text-sm font-semibold">
                {item.icon}
              </span>

              <span className="text-sm font-medium">
                {item.label}
              </span>

            </NavLink>

          ))}

        </div>

      </nav>


      {/* Settings only; intentionally no decorative system-status panel */}
      <div className="p-4 border-t border-green-900">
        <NavLink to="/settings" className="flex items-center gap-3 px-4 py-3 rounded-xl text-green-100 hover:bg-[#084F32] transition">
          <span>⚙</span><span className="text-sm">{hi ? "सेटिंग्स" : "Settings"}</span>
        </NavLink>
        <NavLink to="/" className="flex items-center gap-3 px-4 py-3 rounded-xl text-green-100 hover:bg-[#084F32] transition">
          <span>↗</span><span className="text-sm">{hi ? "मुख्य पृष्ठ पर जाएँ" : "Visit homepage"}</span>
        </NavLink>
      </div>
    </aside>
  );
}

export default Sidebar;