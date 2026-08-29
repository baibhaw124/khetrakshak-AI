import { NavLink } from "react-router-dom";

function Sidebar() {

  const menuItems = [
    { path: "/", icon: "⌂", label: "Dashboard" },
    { path: "/crop-health", icon: "✦", label: "Crop Health" },
    { path: "/disease-detection", icon: "⌁", label: "Disease Detection" },
    { path: "/risk-map", icon: "◉", label: "Risk Map" },
    { path: "/alerts", icon: "!", label: "Alerts" },
    { path: "/farmer-advisory", icon: "✚", label: "Farmer Advisory" },
    { path: "/analytics", icon: "▥", label: "Analytics" },
  ];

  return (
    <aside className="hidden md:flex w-64 min-h-screen bg-[#063B25] text-white flex-col shadow-xl">

      {/* Logo */}
      <div className="px-6 py-6 border-b border-green-900">

        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-[#D9F99D] flex items-center justify-center">
            <span className="text-[#075E35] text-xl font-bold">
              K
            </span>
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight">
              Khetrakshak
              <span className="text-lime-300"> AI</span>
            </h1>

            <p className="text-[11px] text-green-200 mt-1">
              Crop Health Intelligence
            </p>
          </div>

        </div>

      </div>


      {/* Navigation */}
      <nav className="flex-1 px-4 py-6">

        <p className="px-3 mb-3 text-[10px] font-semibold tracking-widest text-green-300 uppercase">
          Main Menu
        </p>

        <div className="space-y-1.5">

          {menuItems.map((item) => (

            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `block w-full rounded-xl px-4 py-3 text-sm font-medium transition-all duration-200 ${isActive
                  ? "bg-white text-[#075E35] shadow-sm"
                  : "text-green-50 hover:bg-green-700"
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


      {/* Bottom section */}
      <div className="p-4 border-t border-green-900">

        <div className="mb-3 px-4 py-3 rounded-xl bg-[#084F32]">

          <p className="text-xs text-green-300">
            System Status
          </p>

          <div className="flex items-center gap-2 mt-2">

            <span className="w-2 h-2 rounded-full bg-lime-400"></span>

            <span className="text-xs text-green-100">
              AI Services Online
            </span>

          </div>

        </div>


        <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-green-100 hover:bg-[#084F32] transition">
          <span>⚙</span>
          <span className="text-sm">Settings</span>
        </button>

      </div>

    </aside>
  );
}

export default Sidebar;