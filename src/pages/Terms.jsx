import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function Terms() {
  const { language } = useLanguage();
  const hi = language === "hi";
  return (
    <main className="min-h-screen bg-[#f7faf4] px-4 py-10 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-10">
        <Link to="/" className="text-sm font-semibold text-green-800 hover:underline">← {hi ? "मुख्य पृष्ठ" : "Home"}</Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-green-700">KHETRAKSHAK AI</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{hi ? "नियम और शर्तें" : "Terms and Conditions"}</h1>
        <p className="mt-2 text-sm text-gray-500">{hi ? "अंतिम अद्यतन: 27 अक्टूबर 2026" : "Last updated: 27 October 2026"}</p>
        {hi ? <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
          <section><h2 className="text-lg font-semibold text-gray-900">1. सेवा का उद्देश्य</h2><p>खेत रक्षक AI फसल की तस्वीरों के आधार पर संभावित रोगों की पहचान, जोखिम संकेत और सामान्य कृषि सुझाव देने वाला निर्णय-सहायता उपकरण है।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">2. AI परिणामों की सीमाएँ</h2><p>AI परिणाम अनुमान हैं; वे निश्चित निदान, उपज की गारंटी या पेशेवर कृषि सलाह का विकल्प नहीं हैं। प्रकाश, तस्वीर की गुणवत्ता, फसल की किस्म और मॉडल की सीमाएँ परिणाम को प्रभावित कर सकती हैं। महत्वपूर्ण निर्णय से पहले स्थानीय कृषि विशेषज्ञ या कृषि-विज्ञान केंद्र से सलाह लें।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">3. आपकी जिम्मेदारियाँ</h2><p>केवल ऐसी तस्वीरें अपलोड करें जिन्हें साझा करने का आपको अधिकार है। अवैध, भ्रामक या दूसरों की गोपनीयता का उल्लंघन करने वाली सामग्री अपलोड न करें। विश्लेषण के लिए स्पष्ट पत्ती की तस्वीर और समर्थित फ़ाइल प्रकार का उपयोग करें।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">4. तस्वीरों का प्रसंस्करण</h2><p>विश्लेषण शुरू करने पर चुनी गई तस्वीर सर्वर पर भेजी जाती है। वर्तमान रोग-विश्लेषण प्रक्रिया तस्वीर को अस्थायी फ़ाइल के रूप में उपयोग करती है और अनुरोध पूरा होने पर उसे हटाने का प्रयास करती है। इसका अर्थ बैकअप, तकनीकी लॉग या होस्टिंग प्रदाता के स्वतंत्र रिकॉर्ड के बारे में कोई सार्वभौमिक गारंटी नहीं है। अधिक जानकारी के लिए <Link className="font-semibold text-green-800 underline" to="/privacy-policy">गोपनीयता नीति</Link> देखें।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">5. उपलब्धता और बदलाव</h2><p>सेवा बिना किसी निर्बाध उपलब्धता या त्रुटि-मुक्त परिणाम की गारंटी के प्रदान की जाती है। सुविधाएँ, मॉडल और सामग्री समय-समय पर बदली जा सकती हैं।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">6. संपर्क</h2><p>इन शर्तों के बारे में प्रश्न होने पर ऐप के आधिकारिक संचालक से उपलब्ध आधिकारिक चैनल के माध्यम से संपर्क करें। इस पृष्ठ पर कोई अप्रमाणित संपर्क विवरण नहीं दिया गया है।</p></section>
        </div> : <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
          <section><h2 className="text-lg font-semibold text-gray-900">1. Purpose of the service</h2><p>Khetrakshak AI is a decision-support tool that estimates possible crop diseases from images and provides risk indicators and general agricultural guidance.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">2. Limits of AI results</h2><p>AI outputs are estimates, not definitive diagnoses, yield guarantees, or substitutes for professional agricultural advice. Lighting, image quality, crop variety, and model limitations can affect results. Consult a local agricultural expert or Krishi Vigyan Kendra before making consequential crop-management decisions.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">3. Your responsibilities</h2><p>Upload only images you have the right to share. Do not upload unlawful, misleading, or privacy-violating content. Use a clear plant-leaf image in a supported file format for analysis.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">4. Image processing</h2><p>When you start analysis, your selected image is sent to the server. The current disease-analysis flow uses a temporary file and attempts to delete it when the request finishes. This is not a blanket guarantee about backups, technical logs, or independent records maintained by hosting providers. See the <Link className="font-semibold text-green-800 underline" to="/privacy-policy">Privacy Policy</Link> for more information.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">5. Availability and changes</h2><p>The service is provided without a guarantee of uninterrupted availability or error-free results. Features, models, and content may change over time.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">6. Contact</h2><p>For questions about these terms, use an official contact channel published by the service operator. No unverified contact details are listed on this page.</p></section>
        </div>}
        <div className="mt-10 border-t border-gray-100 pt-5 text-sm"><Link to="/privacy-policy" className="font-semibold text-green-800 hover:underline">{hi ? "गोपनीयता नीति →" : "Privacy Policy →"}</Link></div>
      </article>
    </main>
  );
}
