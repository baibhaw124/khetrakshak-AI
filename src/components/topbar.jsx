import { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

const searchablePages = [
  { path: "/dashboard", en: "Dashboard", hi: "डैशबोर्ड", keywords: "home overview reports" },
  { path: "/crop-health", en: "Crop Health", hi: "फसल स्वास्थ्य", keywords: "crop condition health status" },
  { path: "/disease-detection", en: "Disease Detection", hi: "रोग पहचान", keywords: "scan leaf image disease upload" },
  { path: "/risk-map", en: "Risk Map", hi: "जोखिम मानचित्र", keywords: "map field zones location" },
  { path: "/alerts", en: "Alerts", hi: "अलर्ट", keywords: "notifications warnings" },
  { path: "/farmer-advisory", en: "Farmer Advisory", hi: "किसान सलाह", keywords: "recommendations guidance fertilizer irrigation" },
  { path: "/analytics", en: "Analytics", hi: "विश्लेषण", keywords: "charts trends statistics" },
  { path: "/", en: "Homepage", hi: "मुख्य पृष्ठ", keywords: "landing home website" },
];

function Topbar() {
  const { language, setLanguage } = useLanguage();
  const hi = language === "hi";
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const [focused, setFocused] = useState(false);
  const suggestions = useMemo(() => {
    const q = query.trim().toLocaleLowerCase();
    if (!q) return [];
    return searchablePages.filter((page) =>
      `${page.en} ${page.hi} ${page.keywords}`.toLocaleLowerCase().includes(q)
    ).slice(0, 6);
  }, [query]);

  const goToPage = (path) => {
    navigate(path);
    setQuery("");
    setFocused(false);
  };

  return (
    <header className="sticky top-0 z-30 min-h-20 bg-white/90 backdrop-blur-md border-b border-gray-200/80 flex flex-wrap items-center justify-between gap-3 px-4 md:px-6 lg:px-8">
      <div><h2 className="text-lg font-semibold text-[#063B25]">{hi ? "खेत रक्षक AI" : "Khetrakshak AI"}</h2><p className="text-sm text-gray-500 mt-0.5">{hi ? "फसल स्वास्थ्य निगरानी और जोखिम आकलन" : "Intelligent Crop Health Monitoring & Risk Assessment"}</p></div>
      <div className="flex items-center gap-3">
        <div className="relative hidden lg:block w-60 xl:w-72">
          <div className="flex items-center h-10 bg-[#F4F8F5] border border-gray-200 rounded-xl px-3 focus-within:border-green-600 focus-within:ring-2 focus-within:ring-green-100">
            <span className="text-gray-400 mr-2" aria-hidden="true">⌕</span>
            <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} onFocus={() => setFocused(true)} onBlur={() => window.setTimeout(() => setFocused(false), 140)} onKeyDown={(e) => { if (e.key === "Enter" && suggestions[0]) goToPage(suggestions[0].path); if (e.key === "Escape") { setQuery(""); setFocused(false); } }} placeholder={hi ? "पेज या सुविधा खोजें..." : "Search pages and features..."} aria-label={hi ? "पेज खोजें" : "Search pages"} aria-expanded={focused && suggestions.length > 0} className="w-full bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400" />
          </div>
          {focused && query.trim() && <div className="absolute top-12 left-0 right-0 z-50 overflow-hidden rounded-xl border border-gray-200 bg-white py-1 shadow-xl">
            {suggestions.length ? suggestions.map((page) => <button type="button" key={page.path} onMouseDown={(e) => e.preventDefault()} onClick={() => goToPage(page.path)} className="flex w-full items-center justify-between gap-3 px-3 py-2.5 text-left text-sm text-gray-700 hover:bg-green-50 hover:text-green-900"><span>{hi ? page.hi : page.en}</span><span className="text-gray-400">↗</span></button>) : <p className="px-3 py-3 text-sm text-gray-500">{hi ? "कोई मेल नहीं मिला" : "No matching pages found"}</p>}
          </div>}
        </div>
        <div className="flex items-center gap-1 rounded-full border border-green-100 bg-white p-1 text-sm" aria-label={hi ? "भाषा चुनें" : "Choose language"}>
          <button onClick={() => setLanguage("hi")} aria-pressed={hi} className={`rounded-full px-3 py-2 font-semibold transition ${hi ? "bg-green-100 text-green-900" : "text-gray-600 hover:bg-gray-50"}`}>हिन्दी</button><span className="text-gray-300">|</span>
          <button onClick={() => setLanguage("en")} aria-pressed={!hi} className={`rounded-full px-3 py-2 font-semibold transition ${!hi ? "bg-green-100 text-green-900" : "text-gray-600 hover:bg-gray-50"}`}>EN</button>
        </div>
        <button aria-label={hi ? "सूचनाएँ" : "Notifications"} className="relative w-10 h-10 rounded-xl border border-gray-200 bg-white hover:bg-[#F4F8F5] flex items-center justify-center">♧<span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-white" /></button>
        <div className="flex items-center gap-3 pl-3 border-l border-gray-200"><div className="w-10 h-10 rounded-full bg-[#D9F99D] flex items-center justify-center text-[#063B25] font-bold">{hi ? "कृ" : "AO"}</div><div className="hidden sm:block"><p className="text-sm font-semibold text-gray-800">{hi ? "कृषि अधिकारी" : "Agriculture Officer"}</p><p className="text-xs text-gray-500">{hi ? "व्यवस्थापक" : "Administrator"}</p></div></div>
      </div>
    </header>
  );
}
export default Topbar;
