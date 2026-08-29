import { useState } from "react";

const initialAlerts = [
  {
    id: 1,
    type: "Disease",
    title: "Leaf Blight Risk Detected",
    message:
      "Increased risk of Leaf Blight has been detected in your tomato field.",
    time: "10 minutes ago",
    severity: "High",
    icon: "🦠",
    unread: true,
  },
  {
    id: 2,
    type: "Weather",
    title: "Rain Expected Tomorrow",
    message:
      "Rainfall is expected within the next 24 hours. Consider adjusting irrigation.",
    time: "1 hour ago",
    severity: "Medium",
    icon: "🌧️",
    unread: true,
  },
  {
    id: 3,
    type: "Irrigation",
    title: "Soil Moisture is Optimal",
    message:
      "Current soil moisture is 72%. No immediate irrigation is required.",
    time: "3 hours ago",
    severity: "Low",
    icon: "💧",
    unread: false,
  },
  {
    id: 4,
    type: "Crop",
    title: "Crop Health Improved",
    message:
      "Your tomato crop health score increased from 76% to 82%.",
    time: "Yesterday",
    severity: "Low",
    icon: "🌱",
    unread: false,
  },
];

function Alerts() {
  const [alerts, setAlerts] = useState(initialAlerts);
  const [filter, setFilter] = useState("All");

  const markAsRead = (id) => {
    setAlerts((currentAlerts) =>
      currentAlerts.map((alert) =>
        alert.id === id ? { ...alert, unread: false } : alert
      )
    );
  };

  const markAllAsRead = () => {
    setAlerts((currentAlerts) =>
      currentAlerts.map((alert) => ({
        ...alert,
        unread: false,
      }))
    );
  };

  const filteredAlerts =
    filter === "All"
      ? alerts
      : alerts.filter((alert) => alert.type === filter);

  const unreadCount = alerts.filter((alert) => alert.unread).length;

  const highPriorityCount = alerts.filter(
    (alert) => alert.severity === "High"
  ).length;

  const mediumPriorityCount = alerts.filter(
    (alert) => alert.severity === "Medium"
  ).length;

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Alerts
          </h1>

          <p className="mt-1 text-gray-500">
            Important updates and warnings for your farm
          </p>
        </div>

        <button
          onClick={markAllAsRead}
          className="rounded-lg bg-[#075E35] px-4 py-2 text-sm font-medium text-white transition hover:bg-[#064b2b]"
        >
          Mark All as Read
        </button>

      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">

        <div className="rounded-2xl border border-red-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            High Priority
          </p>

          <h2 className="mt-2 text-3xl font-bold text-red-600">
            {highPriorityCount}
          </h2>
          <p className="mt-1 text-xs text-red-500">
            Requires attention
          </p>
        </div>

        <div className="rounded-2xl border border-yellow-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Medium Priority
          </p>

          <h2 className="mt-2 text-3xl font-bold text-yellow-600">
            {mediumPriorityCount}
          </h2>

          <p className="mt-1 text-xs text-yellow-600">
            Monitor closely
          </p>
        </div>

        <div className="rounded-2xl border border-green-100 bg-white p-5 shadow-sm">
          <p className="text-sm text-gray-500">
            Unread Alerts
          </p>

          <h2 className="mt-2 text-3xl font-bold text-green-600">
            {unreadCount}
          </h2>

          <p className="mt-1 text-xs text-green-600">
            New notifications
          </p>
        </div>

      </div>

      {/* Filters */}
      <div className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">

        <div className="flex flex-wrap gap-2">

          {["All", "Disease", "Weather", "Irrigation", "Crop"].map(
            (category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition ${filter === category
                  ? "bg-[#075E35] text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
              >
                {category}
              </button>
            )
          )}

        </div>

      </div>

      {/* Alerts List */}
      <div className="space-y-4">

        {filteredAlerts.map((alert) => (

          <div
            key={alert.id}
            className={`rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md ${alert.unread
              ? "border-green-200"
              : "border-gray-200"
              }`}
          >

            <div className="flex gap-4">

              {/* Icon */}
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gray-100 text-2xl">
                {alert.icon}
              </div>

              {/* Content */}
              <div className="min-w-0 flex-1">

                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">

                  <div>

                    <div className="flex items-center gap-2">

                      <h2 className="font-semibold text-gray-800">
                        {alert.title}
                      </h2>

                      {alert.unread && (
                        <span className="h-2 w-2 rounded-full bg-green-600"></span>
                      )}

                    </div>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      {alert.message}
                    </p>

                  </div>

                  <span
                    className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${alert.severity === "High"
                      ? "bg-red-100 text-red-700"
                      : alert.severity === "Medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                      }`}
                  >
                    {alert.severity}
                  </span>

                </div>

                {/* Bottom */}
                <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                  <div className="flex items-center gap-3">

                    <span className="text-xs text-gray-400">
                      {alert.type}
                    </span>

                    <span className="text-xs text-gray-400">
                      •
                    </span>

                    <span className="text-xs text-gray-400">
                      {alert.time}
                    </span>

                  </div>

                  {alert.unread && (
                    <button
                      onClick={() => markAsRead(alert.id)}
                      className="w-fit text-sm font-medium text-[#075E35] hover:underline"
                    >
                      Mark as read
                    </button>
                  )}

                </div>

              </div>

            </div>

          </div>

        ))}

      </div>

      {/* Empty State */}
      {filteredAlerts.length === 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-12 text-center shadow-sm">

          <div className="text-5xl">
            🔔
          </div>

          <h2 className="mt-4 font-semibold text-gray-800">
            No alerts found
          </h2>

          <p className="mt-1 text-sm text-gray-500">
            There are no alerts in this category.
          </p>

        </div>
      )}

      {/* Information */}
      <div className="rounded-xl border border-green-100 bg-green-50 p-4 text-sm text-gray-600">
        💡 Khetrakshak alerts are designed to help farmers identify
        important crop, weather, disease and irrigation events quickly.
      </div>

    </div>
  );
}

export default Alerts;