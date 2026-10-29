
import { useEffect } from "react";
import { useLanguage } from "./LanguageContext";

const pageSEO = {
  home: {
    en: {
      title: "Khetrakshak AI | Crop Disease Detection & Crop Health",
      description:
        "Detect potential crop diseases using AI-powered leaf image analysis. Explore crop health insights and practical agricultural guidance.",
    },
    hi: {
      title: "खेत रक्षक AI | फसल रोग पहचान और फसल स्वास्थ्य",
      description:
        "पत्तियों की तस्वीर से संभावित फसल रोग पहचानें और फसल स्वास्थ्य व कृषि संबंधी उपयोगी जानकारी पाएँ।",
    },
  },
  disease: {
    en: {
      title: "Crop Disease Detection from Photo | Khetrakshak AI",
      description:
        "Upload a crop leaf photo to identify potential plant diseases with AI-assisted analysis. Explore preliminary crop health insights and disease prevention guidance.",
    },
    hi: {
      title: "पौधे की फोटो से रोग पहचानें | खेत रक्षक AI",
      description:
        "पत्ती की साफ तस्वीर अपलोड करके AI की मदद से संभावित फसल रोग पहचानें और फसल की देखभाल व रोकथाम की शुरुआती जानकारी पाएं।",
    },
  },
  cropHealth: {
    en: {
      title: "Crop Health Monitoring | Khetrakshak AI",
      description:
        "Explore crop health indicators, potential disease risks, and crop monitoring insights.",
    },
    hi: {
      title: "फसल स्वास्थ्य निगरानी | खेत रक्षक AI",
      description:
        "फसल के स्वास्थ्य संकेतकों, संभावित रोग जोखिमों और निगरानी संबंधी जानकारी देखें।",
    },
  },
  advisory: {
    en: {
      title: "Farmer Advisory & Crop Care | Khetrakshak AI",
      description:
        "Explore practical crop-care guidance, irrigation suggestions, and disease prevention information.",
    },
    hi: {
      title: "किसान सलाह और फसल की देखभाल | खेत रक्षक AI",
      description:
        "सिंचाई, फसल की देखभाल और रोगों की रोकथाम से जुड़ी उपयोगी सलाह पाएँ।",
    },
  },
  riskMap: {
    en: {
      title: "Crop Disease Risk Map | Khetrakshak AI",
      description:
        "Explore crop health risk zones and disease hotspot information on an interactive map.",
    },
    hi: {
      title: "फसल रोग जोखिम मानचित्र | खेत रक्षक AI",
      description:
        "इंटरैक्टिव मानचित्र पर फसल स्वास्थ्य जोखिम वाले क्षेत्रों की जानकारी देखें।",
    },
  },
};

function setMeta(attribute, key, content) {
  let element = document.querySelector(
    `meta[${attribute}="${key}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

export default function usePageSEO(page) {
  const { language } = useLanguage();

  useEffect(() => {
    const isHindi = language === "hi";
    const metadata = pageSEO[page]?.[isHindi ? "hi" : "en"];

    if (!metadata) return;

    const canonicalURL =
      `${window.location.origin}${window.location.pathname}`;

    document.documentElement.lang = isHindi ? "hi" : "en";
    document.title = metadata.title;

    setMeta("name", "description", metadata.description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "Khetrakshak AI");
    setMeta("property", "og:title", metadata.title);
    setMeta("property", "og:description", metadata.description);
    setMeta("property", "og:url", canonicalURL);
    setMeta("name", "twitter:card", "summary");
    setMeta("name", "twitter:title", metadata.title);
    setMeta("name", "twitter:description", metadata.description);

    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }

    canonical.href = canonicalURL;
  }, [page, language]);
}
