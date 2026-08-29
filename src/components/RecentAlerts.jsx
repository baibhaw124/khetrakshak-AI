const alerts = [
  {
    id: 1,
    title: "High Disease Risk Detected",
    location: "Gopalganj",
    message: "Leaf Blight probability is above the critical threshold.",
    time: "12 min ago",
    type: "danger",
  },
  {
    id: 2,
    title: "Crop Health Declining",
    location: "Darbhanga",
    message: "Crop health score has decreased over the last 3 days.",
    time: "35 min ago",
    type: "warning",
  },
  {
    id: 3,
    title: "Field Requires Monitoring",
    location: "Muzaffarpur",
    message: "Moderate agricultural risk detected in the monitored area.",
    time: "1 hr ago",
    type: "warning",
  },
  {
    id: 4,
    title: "Field Health Normal",
    location: "Patna",
    message: "No significant crop health issues detected.",
    time: "2 hrs ago",
    type: "success",
  },
];

function RecentAlerts() {
  const styles = {
    danger: {
      icon: "!",
      bg: "bg-red-50",
      iconColor: "text-red-600",
      badge: "bg-red-100 text-red-700",
    },
    warning: {
      icon: "⚠",
      bg: "bg-orange-50",
      iconColor: "text-orange-600",
      badge: "bg-orange-100 text-orange-700",
    },
    success: {
      icon: "✓",
      bg: "bg-green-50",
      iconColor: "text-green-600",
      badge: "bg-green-100 text-green-700",
    },
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

      {/* Header */}
      <div className="p-6 border-b border-gray-100">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Recent Alerts
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Latest crop health notifications
            </p>
          </div>

          <span className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
            3 Active
          </span>

        </div>

      </div>


      {/* Alerts */}
      <div className="divide-y divide-gray-100">

        {alerts.map((alert) => {

          const style = styles[alert.type];

          return (
            <div
              key={alert.id}
              className="p-5 flex gap-4 hover:bg-gray-50 transition"
            >

              {/* Icon */}
              <div
                className={`w-10 h-10 shrink-0 rounded-xl ${style.bg} ${style.iconColor} flex items-center justify-center font-bold`}
              >
                {style.icon}
              </div>


              {/* Content */}
              <div className="flex-1 min-w-0">

                <div className="flex flex-wrap items-center gap-2">

                  <h3 className="text-sm font-semibold text-gray-800">
                    {alert.title}
                  </h3>

                  <span
                    className={`text-[10px] px-2 py-1 rounded-full font-medium ${style.badge}`}
                  >
                    {alert.location}
                  </span>

                </div>

                <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                  {alert.message}
                </p>

                <p className="text-[11px] text-gray-400 mt-2">
                  {alert.time}
                </p>

              </div>

            </div>
          );
        })}

      </div>


      {/* Footer */}
      <div className="p-4 border-t border-gray-100">

        <button
          onClick={() => alert("Alerts module coming soon")}
          className="w-full py-2.5 rounded-xl text-sm font-medium text-[#075E35] bg-green-50 hover:bg-green-100 transition"
        >
          View All Alerts →
        </button>

      </div>

    </div>
  );
}

export default RecentAlerts;