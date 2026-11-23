"use client";
import { useState, useEffect } from "react";
import {
  Download,
  Smartphone,
  Monitor,
  Share2,
  PlusSquare,
  CheckCircle2,
  X,
  ExternalLink,
  Sparkles,
  QrCode
} from "lucide-react";

export default function InstallHelper() {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [activeTab, setActiveTab] = useState<"mobile" | "desktop" | "card">("mobile");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Check if already installed
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      (window.navigator as any).standalone === true
    ) {
      setIsStandalone(true);
    }

    // Check iOS
    const ua = window.navigator.userAgent.toLowerCase();
    const isApple = /iphone|ipad|ipod/.test(ua);
    setIsIOS(isApple);

    // Listen for PWA prompt
    const handleBeforeInstall = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);

    // Auto-open if query param ?install=mobile or ?install=pwa
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      if (params.get("install")) {
        setShowModal(true);
      }
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const choiceResult = await deferredPrompt.userChoice;
      if (choiceResult.outcome === "accepted") {
        setDeferredPrompt(null);
        setShowModal(false);
      }
    } else {
      setShowModal(true);
    }
  };

  const handleDownloadBat = () => {
    window.location.href = "/api/desktop-installer";
  };

  if (isStandalone) {
    return null; // Don't annoy installed users
  }

  return (
    <>
      {/* ── FLOATING INSTALL BUTTON (Always visible at bottom left) ── */}
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-2.5 items-start">
        <button
          onClick={() => {
            setActiveTab("mobile");
            setShowModal(true);
          }}
          className="flex items-center gap-2.5 bg-gradient-to-r from-teal-700 via-teal-600 to-teal-500 hover:from-teal-800 hover:to-teal-600 text-white font-extrabold px-4 py-3 rounded-full shadow-2xl hover:shadow-teal-500/50 transition-all duration-300 hover:scale-105 active:scale-95 border-2 border-teal-300/40 text-sm group"
        >
          <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center animate-bounce">
            <Smartphone size={16} className="text-white" />
          </div>
          <span className="tracking-wide">تثبيت التطبيق</span>
          <span className="bg-amber-400 text-amber-950 text-[10px] px-2 py-0.5 rounded-full font-black">
            مجاناً
          </span>
        </button>

        <a
          href="/printable-card-3qr.html"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden sm:flex items-center gap-2 bg-white/95 hover:bg-white text-gray-800 font-bold px-3.5 py-2 rounded-full shadow-lg border border-gray-200 text-xs hover:text-teal-700 transition"
        >
          <QrCode size={14} className="text-teal-600" />
          <span>كارت المنظومة (3-QR)</span>
        </a>
      </div>

      {/* ── INSTALL MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">
          <div
            className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl border border-teal-100 relative text-right animate-in fade-in zoom-in-95 duration-200"
            dir="rtl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-5 left-5 w-9 h-9 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 flex items-center justify-center transition"
            >
              <X size={18} />
            </button>

            {/* Modal Header */}
            <div className="text-center mb-6">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-tr from-teal-700 to-amber-500 p-0.5 mx-auto mb-3 shadow-lg">
                <div className="w-full h-full bg-white rounded-2xl flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="مراية"
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      (e.target as any).style.display = "none";
                    }}
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black text-gray-900">
                تثبيت منظومة مراية | Meraya
              </h3>
              <p className="text-xs sm:text-sm text-gray-500 font-medium mt-1">
                احصل على التطبيق كأيقونة مستقلة سريعة على هاتفك أو جهاز الكمبيوتر
              </p>
            </div>

            {/* Navigation Tabs */}
            <div className="flex bg-gray-100 p-1.5 rounded-2xl mb-6">
              <button
                onClick={() => setActiveTab("mobile")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                  activeTab === "mobile"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Smartphone size={16} />
                <span>تطبيق الموبايل</span>
              </button>

              <button
                onClick={() => setActiveTab("desktop")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                  activeTab === "desktop"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <Monitor size={16} />
                <span>نسخة الكمبيوتر</span>
              </button>

              <button
                onClick={() => setActiveTab("card")}
                className={`flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition ${
                  activeTab === "card"
                    ? "bg-white text-teal-700 shadow-sm"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <QrCode size={16} />
                <span>الكارت والكيو آر</span>
              </button>
            </div>

            {/* TAB 1: MOBILE INSTALL */}
            {activeTab === "mobile" && (
              <div className="space-y-4">
                {isIOS ? (
                  // iOS Guide
                  <div className="bg-amber-50/70 border border-amber-200 rounded-2xl p-4 space-y-3">
                    <div className="flex items-center gap-2 text-amber-800 font-black text-sm">
                      <Sparkles size={16} className="text-amber-600" />
                      <span>طريقة التثبيت على هواتف آيفون (iOS Safari):</span>
                    </div>
                    <ol className="text-xs sm:text-sm text-gray-700 space-y-2.5 pr-2 font-medium">
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          1
                        </span>
                        <span>
                          اضغط على زر المشاركة <strong>Share</strong> (
                          <Share2 size={13} className="inline mx-1 text-blue-600" />)
                          في أسفل شاشة متصفح Safari.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          2
                        </span>
                        <span>
                          مرر القائمة لأسفل واختر{" "}
                          <strong>"إضافة إلى الشاشة الرئيسية" (Add to Home Screen)</strong>{" "}
                          (
                          <PlusSquare
                            size={13}
                            className="inline mx-1 text-teal-700"
                          />
                          ).
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="w-5 h-5 rounded-full bg-amber-500 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          3
                        </span>
                        <span>
                          اضغط على <strong>"إضافة" (Add)</strong> في أعلى اليمين.
                        </span>
                      </li>
                    </ol>
                    <div className="text-[11px] text-amber-900 bg-amber-100/70 p-2 rounded-xl text-center font-bold">
                      ✨ سيظهر تطبيق مراية كأيقونة مستقلة فوراً بشاشة كاملة وسرعة فائقة!
                    </div>
                  </div>
                ) : (
                  // Android / Chrome
                  <div className="space-y-3">
                    <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 text-center">
                      <p className="text-sm text-teal-900 font-bold mb-3">
                        يمكنك تثبيت تطبيق مراية مباشرة على هاتفك بنقرة واحدة بدون الحاجة لـ Google Play!
                      </p>
                      <button
                        onClick={handleInstallClick}
                        className="w-full bg-teal-600 hover:bg-teal-700 text-white font-black py-3 rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center gap-2 text-sm"
                      >
                        <Download size={18} />
                        <span>تثبيت التطبيق على الشاشة الرئيسية الآن</span>
                      </button>
                    </div>

                    <div className="bg-gray-50 rounded-2xl p-3 text-xs text-gray-500 space-y-1">
                      <p className="font-bold text-gray-700">إذا لم يظهر التثبيت التلقائي:</p>
                      <p>
                        اضغط على قائمة المتصفح (⋮ الثلاث نقاط) أعلى اليسار، ثم اختر{" "}
                        <strong>"تثبيت التطبيق" (Install App)</strong> أو{" "}
                        <strong>"إضافة إلى الشاشة الرئيسية"</strong>.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 2: DESKTOP INSTALL */}
            {activeTab === "desktop" && (
              <div className="space-y-4">
                <div className="bg-gray-50 border border-gray-200 rounded-2xl p-4 space-y-3">
                  <div className="flex items-center gap-2 text-gray-900 font-black text-sm">
                    <Monitor size={18} className="text-teal-600" />
                    <span>تثبيت أيقونة الكمبيوتر لسطح المكتب (Windows):</span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed font-medium">
                    قم بتحميل ملف التثبيت السريع (.bat) لتوليد أيقونة رسمية لمراية على سطح المكتب، وتفتح كنافذة مستقلة بدون تشويش المتصفح.
                  </p>
                  <button
                    onClick={handleDownloadBat}
                    className="w-full bg-gradient-to-r from-teal-700 to-teal-500 hover:from-teal-800 hover:to-teal-600 text-white font-black py-3.5 rounded-xl shadow-lg transition active:scale-95 flex items-center justify-center gap-2 text-sm"
                  >
                    <Download size={18} />
                    <span>تحميل مثبت سطح المكتب (Install-Meraya.bat)</span>
                  </button>
                  <p className="text-[11px] text-gray-400 text-center">
                    * بعد التحميل، قم بفتح الملف (Double Click) وسيتم إنشاء الأيقونة فوراً على سطح مكتبك!
                  </p>
                </div>
              </div>
            )}

            {/* TAB 3: SYSTEM CARD (3-QR) */}
            {activeTab === "card" && (
              <div className="space-y-4 text-center">
                <div className="bg-teal-50 border border-teal-200 rounded-2xl p-4 space-y-3">
                  <h4 className="font-black text-teal-900 text-sm">
                    كارت المنظومة الشامل (3 كيو آر كود)
                  </h4>
                  <p className="text-xs text-teal-700 font-medium">
                    كارت احترافي جاهز للطباعة والمشاركة مع الصالونات والعملاء يحتوي على كود الموقع، كود تثبيت الموبايل، وكود الديسكتوب.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-2 pt-1">
                    <a
                      href="/printable-card-3qr.html"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-teal-600 hover:bg-teal-700 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <ExternalLink size={14} />
                      <span>فتح الكارت للطباعة والتنزيل</span>
                    </a>
                    <a
                      href="/meraya-3qr-card.png"
                      download="meraya-3qr-card.png"
                      className="flex-1 bg-amber-500 hover:bg-amber-600 text-white font-bold py-2.5 px-4 rounded-xl text-xs flex items-center justify-center gap-1.5 transition shadow"
                    >
                      <Download size={14} />
                      <span>تحميل صورة الكارت HD</span>
                    </a>
                  </div>
                </div>
              </div>
            )}

            {/* Modal Footer with Orca Signature */}
            <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[11px] text-gray-400">
              <span className="font-bold text-teal-700">
                تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬
              </span>
              <a href="tel:01018671000" className="text-gray-600 font-black hover:text-teal-700">
                01018671000
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
