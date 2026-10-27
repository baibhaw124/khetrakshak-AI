import { Link } from "react-router-dom";
import { useLanguage } from "../LanguageContext";

export default function PrivacyPolicy() {
  const { language } = useLanguage();
  const hi = language === "hi";
  return (
    <main className="min-h-screen bg-[#f7faf4] px-4 py-10 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl rounded-2xl border border-green-100 bg-white p-6 shadow-sm sm:p-10">
        <Link to="/" className="text-sm font-semibold text-green-800 hover:underline">← {hi ? "मुख्य पृष्ठ" : "Home"}</Link>
        <p className="mt-6 text-xs font-bold uppercase tracking-[0.18em] text-green-700">KHETRAKSHAK AI</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">{hi ? "गोपनीयता नीति" : "Privacy Policy"}</h1>
        <p className="mt-2 text-sm text-gray-500">{hi ? "अंतिम अद्यतन: 27 अक्टूबर 2026" : "Last updated: 27 October 2026"}</p>
        {hi ? <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
          <section><h2 className="text-lg font-semibold text-gray-900">1. यह नीति किस बारे में है</h2><p>यह नीति बताती है कि खेत रक्षक AI की वर्तमान रोग-विश्लेषण सुविधा में तस्वीर कैसे संभाली जाती है और ऐप में कौन-सी ब्राउज़र-स्थानीय प्राथमिकता दिखाई देती है। अन्य सुविधाओं या होस्टिंग प्रदाताओं की प्रक्रियाएँ अलग हो सकती हैं।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">2. तस्वीर और विश्लेषण</h2><p>जब आप विश्लेषण शुरू करते हैं, चुनी गई तस्वीर API सर्वर को भेजी जाती है। वर्तमान backend कोड इसे `ml/temp` में अस्थायी फ़ाइल के रूप में लिखता है, पत्ती सत्यापन और भविष्यवाणी चलाता है, और `finally` चरण में फ़ाइल हटाता है। इस endpoint में तस्वीर को मॉडल प्रशिक्षण के लिए सहेजने या रोग-परिणाम को डेटाबेस में दर्ज करने का कोड नहीं है। सर्वर विफलता, होस्टिंग लॉग या बैकअप की स्वतंत्र retention अवधि की पुष्टि इस कोड से नहीं होती।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">3. ब्राउज़र में रखी जानकारी</h2><p>ऐप आपकी भाषा प्राथमिकता (`khetrakshak-language`) को ब्राउज़र के `localStorage` में रखता है। समीक्षा किए गए frontend में रोग-विश्लेषण की तस्वीर को `localStorage` में रखने का कोड नहीं मिला। यह कथन केवल समीक्षा किए गए ऐप कोड तक सीमित है, सभी ब्राउज़र एक्सटेंशन या होस्टिंग-स्तर के लॉग तक नहीं।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">4. डेटाबेस और खेत संबंधी जानकारी</h2><p>backend के डेटा मॉडल में किसान का नाम, फोन नंबर, गाँव/जिला/राज्य, खेत के स्थान निर्देशांक, फसल विवरण और रोग-पहचान रिकॉर्ड के लिए संरचनाएँ मौजूद हैं। समीक्षा किए गए रोग-विश्लेषण endpoint में इन रिकॉर्ड को लिखने का कार्य नहीं दिखता। अन्य सुविधाएँ इनका उपयोग करती हैं या नहीं, इसे तैनात ऐप के पूरे व्यवहार और संबंधित endpoint की समीक्षा से सत्यापित करना होगा।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">5. साझा करना और सुरक्षा</h2><p>विश्लेषण के लिए तस्वीर बाहरी API सर्वर तक जाती है। इंटरनेट पर डेटा भेजने में संचरण और होस्टिंग प्रदाता शामिल होते हैं; इसलिए संवेदनशील व्यक्तिगत जानकारी या ऐसी तस्वीरें अपलोड न करें जिन्हें साझा करने का अधिकार आपके पास नहीं है।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">6. आपकी पसंद और प्रश्न</h2><p>आप तस्वीर चुनने से पहले अपलोड रोक सकते हैं और विश्लेषण के लिए सहमति चेकबॉक्स को अनचेक रख सकते हैं। गोपनीयता संबंधी अनुरोध के लिए सेवा संचालक के प्रकाशित आधिकारिक संपर्क माध्यम का उपयोग करें। इस नीति में अप्रमाणित ईमेल या फोन नंबर नहीं जोड़ा गया है।</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">7. नीति में बदलाव</h2><p>डेटा संग्रह, retention या सुविधाओं में बदलाव होने पर इस पृष्ठ को अपडेट किया जाना चाहिए। किसी नई प्रक्रिया को लागू करने से पहले इस नीति और ऐप के वास्तविक व्यवहार का मिलान आवश्यक है।</p></section>
        </div> : <div className="mt-8 space-y-6 text-sm leading-7 text-gray-700">
          <section><h2 className="text-lg font-semibold text-gray-900">1. Scope</h2><p>This policy describes image handling in the current Khetrakshak AI disease-analysis flow and a browser-local preference used by the app. Other features or hosting providers may have separate processing practices.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">2. Image and analysis processing</h2><p>When you start analysis, your selected image is sent to the API server. The current backend writes it as a temporary file under `ml/temp`, runs leaf validation and prediction, and removes the file in a `finally` block. This endpoint does not contain code to retain images for model training or to write the disease result to the database. Retention in the event of server failure, hosting logs, or backups is not established by this code.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">3. Browser-stored information</h2><p>The app stores your language preference (`khetrakshak-language`) in browser `localStorage`. The reviewed frontend did not show code that stores disease-analysis images in `localStorage`. This statement is limited to the app code reviewed; it does not cover browser extensions or hosting-level logs.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">4. Database and farm information</h2><p>The backend data models define structures for a farmer’s name, phone number, village/district/state, field coordinates, crop details, and disease-detection records. The reviewed disease-analysis endpoint does not write those records. Whether other features use them must be verified against the complete deployed app and relevant endpoints.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">5. Sharing and security</h2><p>Images are sent to an API server for analysis. Network transmission and hosting providers are involved, so do not upload sensitive personal information or images you are not authorized to share.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">6. Your choices and questions</h2><p>You can stop before selecting an image and leave the processing acknowledgement unchecked to prevent analysis from starting. For privacy requests, use an official contact channel published by the service operator. No unverified email address or phone number is listed here.</p></section>
          <section><h2 className="text-lg font-semibold text-gray-900">7. Policy changes</h2><p>This page should be updated if data collection, retention, or features change. The policy must be checked against actual app behavior before a new processing practice is introduced.</p></section>
        </div>}
        <div className="mt-10 border-t border-gray-100 pt-5 text-sm"><Link to="/terms" className="font-semibold text-green-800 hover:underline">{hi ? "नियम और शर्तें →" : "Terms and Conditions →"}</Link></div>
      </article>
    </main>
  );
}
