import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext({ language: "hi", setLanguage: () => {} });

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    try { return localStorage.getItem("khetrakshak-language") || "hi"; } catch { return "hi"; }
  });
  const setLanguage = (value) => {
    const next = value === "en" ? "en" : "hi";
    setLanguageState(next);
    try { localStorage.setItem("khetrakshak-language", next); } catch {}
    document.documentElement.lang = next;
  };
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return <LanguageContext.Provider value={{ language, setLanguage }}>{children}</LanguageContext.Provider>;
}
export const useLanguage = () => useContext(LanguageContext);
