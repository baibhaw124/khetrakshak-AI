import usePageSEO from "../usePageSEO";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";
import farmerCropScanning from "../assets/farmer-crop-scanning.jpg";

const copy = {
  hi: {
    nav: ["मुख्य पृष्ठ", "समाधान", "फसलें", "हमारे बारे में"],
    login: "लॉगिन",
    start: "शुरू करें",
    eyebrow: "AI के साथ, हर खेत अधिक सुरक्षित",
    titleA: "स्वस्थ फसलें,",
    titleB: "सशक्त किसान,",
    titleC: "समृद्ध भारत।",
    description: "फसल की बीमारी पहचानें, जोखिम को समझें और बेहतर कृषि निर्णय लें — अपने खेत के लिए सही जानकारी, सही समय पर।",
    scan: "फसल की जाँच करें",
    explore: "विशेषताएँ देखें",
    stats: ["किसानों के लिए बनाया", "फसल स्वास्थ्य की निगरानी", "AI आधारित पहचान", "स्मार्ट कृषि सहायता"],
    solutionsLabel: "हमारे समाधान",
    solutionsTitle: "किसानों के लिए एक डिजिटल साथी",
    solutionsDesc: "फसल स्वास्थ्य की निगरानी, रोग पहचान और उपयोगी कृषि मार्गदर्शन — एक ही जगह।",
    features: [
      ["रोग पहचान", "पत्ती की तस्वीर से संभावित फसल रोग पहचानें।", "रोग पहचानें"],
      ["मौसम की जानकारी", "मौसम की स्थिति समझें और खेत की बेहतर योजना बनाएँ।", "मौसम देखें"],
      ["जोखिम मानचित्र", "अपने क्षेत्र में फसल जोखिम की जानकारी देखें।", "मानचित्र खोलें"],
      ["किसान सलाह", "फसल की देखभाल और रोकथाम के लिए उपयोगी सुझाव पाएँ।", "सलाह पढ़ें"],
    ],
    quote: "हर खेत की सेहत, हर किसान का भरोसा।",
    quoteDesc: "तकनीक को खेत तक लाकर, बेहतर निर्णयों की ओर एक कदम।",
    footer: "© 2026 खेत रक्षक AI · स्मार्ट कृषि के लिए बनाया गया",
  },
  en: {
    nav: ["Home", "Solutions", "Crops", "About"],
    login: "Log in",
    start: "Get started",
    eyebrow: "AI-powered confidence for every field",
    titleA: "Healthier crops,",
    titleB: "stronger farmers,",
    titleC: "a thriving future.",
    description: "Identify crop diseases, understand risk, and make more informed farming decisions — with useful insights when you need them.",
    scan: "Check crop health",
    explore: "Explore solutions",
    stats: ["Built for farmers", "Crop health monitoring", "AI-assisted detection", "Smarter field decisions"],
    solutionsLabel: "What we offer",
    solutionsTitle: "A digital companion for every farmer",
    solutionsDesc: "Crop health monitoring, disease identification, and practical guidance — together in one place.",
    features: [
      ["Disease detection", "Check a leaf image for possible crop diseases.", "Detect disease"],
      ["Weather insights", "Understand conditions and plan field work better.", "Explore weather"],
      ["Risk map", "Explore crop-risk information for your area.", "Open risk map"],
      ["Farmer advisory", "Find practical crop-care and prevention guidance.", "Read advice"],
    ],
    quote: "Healthier fields. More confident farmers.",
    quoteDesc: "Bringing useful technology closer to the people who grow our food.",
    footer: "© 2026 Khetrakshak AI · Built for smarter agriculture",
  },
};

const featureIcons = [
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4C11 4 5 7 5 14c0 3 2 5 5 5 7 0 10-6 10-15Z" /><path d="M3 21c3-6 7-9 13-12" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18h12a4 4 0 0 0 .2-8A6.5 6.5 0 0 0 6 9a4.5 4.5 0 0 0 0 9Z" /><path d="m9 21 2-3m3 3 2-3" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>,
  <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 18h6m-5 3h4M8 14a7 7 0 1 1 8 0c-1 .7-1.5 1.5-1.5 2.5h-5C9.5 15.5 9 14.7 8 14Z" /></svg>,
];

const featurePaths = ["/disease-detection", "/crop-health", "/risk-map", "/farmer-advisory"];

export default function Home() {
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = copy[language];

  const scrollToSolutions = () => document.getElementById("solutions")?.scrollIntoView({ behavior: "smooth" });
  usePageSEO("home");
  return (
    <div className="kh-home" lang={language === "hi" ? "hi" : "en"}>
      <header className="kh-header">
        <Link to="/" className="kh-brand" aria-label="Khetrakshak AI home">
          <span className="kh-brand-mark"><svg viewBox="0 0 40 40" aria-hidden="true"><path d="M20 34V16M20 24C8 24 5 15 6 7c9 0 15 5 14 17ZM21 18C21 8 28 4 35 5c0 9-5 14-14 13ZM13 33h14" /></svg></span>
          <span><strong>{language === "hi" ? "खेत रक्षक" : "Khetrakshak"}<i> AI</i></strong><small>{language === "hi" ? "फसल स्वास्थ्य, समृद्ध किसान" : "Crop health. Stronger farmers."}</small></span>
        </Link>

        <button className="kh-mobile-toggle" onClick={() => setMobileMenuOpen((v) => !v)} aria-label="Toggle navigation" aria-expanded={mobileMenuOpen}>
          <span></span><span></span><span></span>
        </button>

        <nav className={`kh-nav ${mobileMenuOpen ? "is-open" : ""}`} aria-label="Main navigation">
          <a className="active" href="#home" onClick={() => setMobileMenuOpen(false)}>{t.nav[0]}</a>
          <a href="#solutions" onClick={() => setMobileMenuOpen(false)}>{t.nav[1]}</a>
          <Link to="/crop-health" onClick={() => setMobileMenuOpen(false)}>{t.nav[2]}</Link>
          <a href="#about" onClick={() => setMobileMenuOpen(false)}>{t.nav[3]}</a>
        </nav>

        <div className="kh-header-actions">
          <div className="kh-language" role="group" aria-label={language === "hi" ? "भाषा चुनें" : "Choose language"}><button type="button" className={`kh-language-option ${language === "hi" ? "is-selected" : ""}`} onClick={() => setLanguage("hi")} aria-pressed={language === "hi"}>हिन्दी</button><span className="kh-language-divider" aria-hidden="true"></span><button type="button" className={`kh-language-option ${language === "en" ? "is-selected" : ""}`} onClick={() => setLanguage("en")} aria-pressed={language === "en"}>EN</button></div>
          <button
            type="button"
            className="kh-login"
            onClick={() =>
              window.alert(
                language === "hi"
                  ? "लॉगिन सुविधा जल्द उपलब्ध होगी।"
                  : "Login will be available soon."
              )
            }
          >
            {t.login}
          </button>
          <Link className="kh-start" to="/disease-detection">{t.start}<span aria-hidden="true"> ↗</span></Link>
        </div>
      </header>

      <main>
        <section className="kh-hero" id="home">
          <img className="kh-hero-farmer" src={farmerCropScanning} alt={language === "hi" ? "खेत में मोबाइल से फसल देखते किसान" : "Farmer checking crops on a phone in the field"} />
          <div className="kh-hero-shade"></div>
          <div className="kh-hero-inner">
            <div className="kh-hero-copy">
              <span className="kh-eyebrow"><span className="kh-live-dot"></span>{t.eyebrow}</span>
              <h1>{t.titleA}<br />{t.titleB}<br /><em>{t.titleC}</em></h1>
              <p>{t.description}</p>
              <div className="kh-hero-buttons">
                <Link to="/disease-detection" className="kh-button kh-button-lime"><span>✳</span>{t.scan}<span className="kh-arrow">→</span></Link>
                <button className="kh-button kh-button-glass" onClick={scrollToSolutions}><span className="kh-play">▶</span>{t.explore}</button>
              </div>
              <div className="kh-trust-note"><span className="kh-avatar-stack"><b>क</b><b>🌱</b><b>✓</b></span><span>{language === "hi" ? "किसानों के लिए उपयोगी तकनीक" : "Practical technology for farmers"}</span></div>
            </div>

          </div>
          <div className="kh-statbar">
            <div><span className="kh-stat-icon">♧</span><span><strong>10,000+</strong><small>{t.stats[0]}</small></span></div>
            <div><span className="kh-stat-icon">❧</span><span><strong>32+</strong><small>{t.stats[1]}</small></span></div>
            <div><span className="kh-stat-icon">✓</span><span><strong>AI</strong><small>{t.stats[2]}</small></span></div>
            <div><span className="kh-stat-icon">⌖</span><span><strong>24/7</strong><small>{t.stats[3]}</small></span></div>
          </div>
        </section>

        <section className="kh-solutions" id="solutions">
          <div className="kh-section-heading">
            <span className="kh-section-kicker">{t.solutionsLabel}</span>
            <h2>{t.solutionsTitle}</h2>
            <p>{t.solutionsDesc}</p>
          </div>
          <div className="kh-feature-grid">
            {t.features.map((feature, index) => (
              <Link to={featurePaths[index]} className={`kh-feature-card kh-feature-${index + 1}`} key={feature[0]}>
                <span className="kh-feature-icon">{featureIcons[index]}</span>
                <span className="kh-feature-content"><strong>{feature[0]}</strong><small>{feature[1]}</small><span className="kh-feature-link">{feature[2]} <b>→</b></span></span>
              </Link>
            ))}
          </div>
        </section>

        <section className="kh-quote-section" id="about">
          <div className="kh-quote-leaf" aria-hidden="true">❧</div>
          <div><span className="kh-section-kicker">{language === "hi" ? "तकनीक से खेती तक" : "Technology for the field"}</span><h2>“{t.quote}”</h2><p>{t.quoteDesc}</p></div>
          <Link className="kh-button kh-button-green" to="/disease-detection">{t.scan}<span> →</span></Link>
        </section>

        <section className="kh-developer-card" aria-label={language === "hi" ? "वेबसाइट निर्माता" : "Website developer credit"}>
          <span className="kh-developer-kicker">{language === "hi" ? "निर्माण किया" : "DEVELOPED BY"}</span>
          <h2>{language === "hi" ? "(खेत रक्षक AI टीम) बैभव उपाध्याय" : "(Khetrakshak AI Team) Baibhaw Upadhyay"}</h2>
          <p>{language === "hi" ? "स्मार्ट कृषि बुद्धिमत्ता और निर्णय सहायता मंच" : "Smart Agricultural Intelligence & Decision Support Platform"}</p>
        </section>
      </main>

      <footer className="kh-footer">
        <Link to="/" className="kh-footer-brand">✳ {language === "hi" ? "खेत रक्षक" : "Khetrakshak"} <i>AI</i></Link>
        <span>{t.footer}</span>
        <nav className="flex flex-wrap items-center gap-4" aria-label={language === "hi" ? "कानूनी लिंक" : "Legal links"}>
          <Link to="/terms" className="text-green-800 hover:underline">{language === "hi" ? "नियम और शर्तें" : "Terms"}</Link>
          <Link to="/privacy-policy" className="text-green-800 hover:underline">{language === "hi" ? "गोपनीयता नीति" : "Privacy Policy"}</Link>
          <a href="#home">{language === "hi" ? "ऊपर जाएँ ↑" : "Back to top ↑"}</a>
        </nav>
      </footer>
    </div>
  );
}
