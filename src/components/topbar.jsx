function Topbar() {
  return (
    <header className="h-20 bg-white border-b border-gray-200 flex items-center justify-between px-6 lg:px-8">

      {/* Left Section */}
      <div>
        <h2 className="text-lg font-semibold text-[#063B25]">
          Khetrakshak AI
        </h2>

        <p className="text-sm text-gray-500 mt-0.5">
          Intelligent Crop Health Monitoring & Risk Assessment
        </p>
      </div>


      {/* Right Section */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="hidden lg:flex items-center w-64 h-10 bg-[#F4F8F5] border border-gray-200 rounded-xl px-3">

          <span className="text-gray-400 mr-2">
            🔍
          </span>

          <input
            type="text"
            placeholder="Search crops, farmers..."
            className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
          />

        </div>


        {/* Notification */}
        <button className="relative w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#F4F8F5] transition flex items-center justify-center">

          <span className="text-lg">
            🔔
          </span>

          {/* Notification dot */}
          <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white"></span>

        </button>


        {/* Profile */}
        <div className="flex items-center gap-3 pl-3 border-l border-gray-200">

          <div className="w-10 h-10 rounded-full bg-[#D9F99D] flex items-center justify-center">

            <span className="text-[#063B25] font-bold">
              AO
            </span>

          </div>

          <div className="hidden sm:block">

            <p className="text-sm font-semibold text-gray-800">
              Agriculture Officer
            </p>

            <p className="text-xs text-gray-500">
              Admin
            </p>

          </div>

        </div>

      </div>

    </header>
  );
}

export default Topbar;