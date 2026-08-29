const crops = [
  {
    name: "Wheat",
    variety: "HD-2967",
    health: 91,
    trend: "+4.2%",
    condition: "Healthy",
    status: "healthy",
  },
  {
    name: "Rice",
    variety: "Basmati",
    health: 76,
    trend: "-2.8%",
    condition: "Needs Monitoring",
    status: "warning",
  },
  {
    name: "Maize",
    variety: "Hybrid",
    health: 64,
    trend: "-6.4%",
    condition: "At Risk",
    status: "danger",
  },
  {
    name: "Potato",
    variety: "Kufri",
    health: 87,
    trend: "+1.7%",
    condition: "Healthy",
    status: "healthy",
  },
];

const statusStyles = {
  healthy: {
    badge: "bg-green-50 text-green-700",
    dot: "bg-green-500",
    bar: "bg-green-500",
  },
  warning: {
    badge: "bg-yellow-50 text-yellow-700",
    dot: "bg-yellow-500",
    bar: "bg-yellow-500",
  },
  danger: {
    badge: "bg-red-50 text-red-700",
    dot: "bg-red-500",
    bar: "bg-red-500",
  },
};

function CropHealthStatus() {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm">

      {/* Header */}
      <div className="p-6 border-b border-gray-100">

        <div className="flex items-center justify-between">

          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              Crop Health Status
            </h2>

            <p className="text-sm text-gray-500 mt-1">
              Current health condition of monitored crops
            </p>
          </div>

          <span className="hidden sm:block text-xs px-3 py-1 rounded-full bg-green-50 text-green-700 font-medium">
            32 Crops Monitored
          </span>

        </div>

      </div>


      {/* Crop List */}
      <div className="divide-y divide-gray-100">

        {crops.map((crop) => {

          const style = statusStyles[crop.status];

          return (
            <div
              key={crop.name}
              className="p-5 hover:bg-gray-50 transition"
            >

              <div className="flex items-center gap-4">

                {/* Crop Icon */}
                <div className="w-11 h-11 shrink-0 rounded-xl bg-green-50 flex items-center justify-center text-[#075E35] font-bold">
                  {crop.name.charAt(0)}
                </div>


                {/* Crop Information */}
                <div className="flex-1 min-w-0">

                  <div className="flex items-center gap-2">

                    <h3 className="text-sm font-semibold text-gray-800">
                      {crop.name}
                    </h3>

                    <span className="text-[10px] text-gray-400">
                      {crop.variety}
                    </span>

                  </div>


                  {/* Progress */}
                  <div className="mt-2 flex items-center gap-3">

                    <div className="flex-1 h-2 bg-gray-100 rounded-full overflow-hidden">

                      <div
                        className={`h-full rounded-full ${style.bar}`}
                        style={{ width: `${crop.health}%` }}
                      ></div>

                    </div>

                    <span className="text-xs font-semibold text-gray-700 w-8">
                      {crop.health}
                    </span>

                  </div>

                </div>


                {/* Status */}
                <div className="hidden sm:flex flex-col items-end gap-1">

                  <span
                    className={`flex items-center gap-1.5 text-[11px] px-2.5 py-1 rounded-full font-medium ${style.badge}`}
                  >

                    <span className={`w-1.5 h-1.5 rounded-full ${style.dot}`}>
                    </span>

                    {crop.condition}

                  </span>

                  <span
                    className={`text-[10px] ${
                      crop.trend.startsWith("+")
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {crop.trend} health trend
                  </span>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}

export default CropHealthStatus;