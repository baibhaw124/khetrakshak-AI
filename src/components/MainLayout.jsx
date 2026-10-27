import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useLanguage } from "../LanguageContext";

function MainLayout({ children }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { language } = useLanguage();
  const hi = language === "hi";
  return (

    <div className="min-h-screen bg-[#F8FAF8] flex">

      {/* Desktop Sidebar */}
      <Sidebar />

      <div className="flex-1 min-w-0">

        <Topbar />

        {/* Mobile Navigation */}
        <div className="relative md:hidden border-b border-gray-200 bg-white">

          {/* Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex w-full items-center justify-between px-4 py-3 text-sm font-semibold text-gray-700"
          >
            <span>{hi ? "☰ नेविगेशन" : "☰ Navigation"}</span>

            <span className={`transition-transform ${menuOpen ? "rotate-180" : ""}`}>
              ▼
            </span>
          </button>

          {/* Dropdown */}
          {menuOpen && (
            <div className="border-t border-gray-100 bg-white px-3 pb-3 pt-2 shadow-md">


              <div className="space-y-1">

                {/* Home */}
                <NavLink
                  to="/"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "⌂ मुख्य पृष्ठ" : "⌂ Home"}
                </NavLink>

                <NavLink
                  to="/dashboard"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "⌂ डैशबोर्ड" : "⌂ Dashboard"}
                </NavLink>

                <NavLink
                  to="/crop-health"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "🌱 फसल स्वास्थ्य" : "🌱 Crop Health"}
                </NavLink>

                <NavLink
                  to="/disease-detection"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "🔬 रोग पहचान" : "🔬 Disease Detection"}
                </NavLink>

                <NavLink
                  to="/risk-map"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "🗺️ जोखिम मानचित्र" : "🗺️ Risk Map"}
                </NavLink>

                <NavLink
                  to="/alerts"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "⚠️ अलर्ट" : "⚠️ Alerts"}
                </NavLink>

                <NavLink
                  to="/farmer-advisory"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "💡 किसान सलाह" : "💡 Farmer Advisory"}
                </NavLink>

                <NavLink
                  to="/analytics"
                  onClick={() => setMenuOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-lg px-4 py-3 text-sm font-medium ${isActive
                      ? "bg-[#075E35] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                    }`
                  }
                >
                  {hi ? "📊 विश्लेषण" : "📊 Analytics"}
                </NavLink>

              </div>

            </div>
          )}

        </div>
        <main className="p-4 md:p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default MainLayout;