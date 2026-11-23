"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Scissors, Star, Clock, MapPin, Phone, ChevronLeft,
  Users, Sparkles, Calendar, Shield, Award, Zap
} from "lucide-react";

type Salon = {
  id: string;
  name: string;
  nameAr: string | null;
  slug: string;
  gender: string;
  logoUrl: string | null;
  coverUrl: string | null;
  description: string | null;
  phone: string | null;
  address: string | null;
  city: string | null;
  openTime: string | null;
  closeTime: string | null;
  rating: number;
  reviewCount: number;
  services: { id: string; name: string; price: number; duration: number }[];
};

type Setting = { key: string; value: string };

export default function HomePage() {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [settings, setSettings] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/salons?limit=6").then((r) => r.json()),
      fetch("/api/settings").then((r) => r.json()),
    ]).then(([salonsData, settingsData]) => {
      setSalons(salonsData.salons || []);
      const map: Record<string, string> = {};
      (settingsData.settings || []).forEach((s: Setting) => { map[s.key] = s.value; });
      setSettings(map);
      setLoading(false);
    }).catch(() => setLoading(false));
  }, []);

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* ── TOP NAV ── */}
      <nav className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="مراية" className="w-9 h-9 object-contain rounded-lg" onError={(e) => { (e.target as any).style.display = 'none'; }} />
            <div className="flex flex-col">
              <span className="font-black text-xl text-teal-800 leading-none">مراية</span>
              <span className="text-[10px] text-amber-600 font-bold tracking-wider">MERAYA</span>
            </div>
          </Link>

          <div className="flex items-center gap-2 sm:gap-3">
            <Link href="/mens" className="hidden md:flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-700 hover:text-teal-600 transition">
              <Scissors size={15} />
              <span>رجالي</span>
            </Link>
            <Link href="/womens" className="hidden md:flex items-center gap-1.5 text-xs sm:text-sm font-bold text-gray-700 hover:text-rose-500 transition">
              <Sparkles size={15} />
              <span>حريمي</span>
            </Link>
            
            <a
              href="/printable-card-3qr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1.5 text-xs font-bold rounded-xl transition"
            >
              <span>كارت 3-QR</span>
            </a>

            <a
              href="/?install=mobile"
              className="flex items-center gap-1.5 bg-teal-600 hover:bg-teal-700 text-white px-3.5 py-1.5 text-xs font-black rounded-xl transition shadow-md shadow-teal-600/20"
            >
              <span>📱 تثبيت التطبيق</span>
            </a>

            <Link href="/admin" className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-3 py-1.5 text-xs font-bold rounded-xl transition">
              للصالونات
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="pt-24 pb-6 overflow-hidden relative">
        {/* Background decorative circles */}
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-100 rounded-full opacity-50 blur-3xl" />
        <div className="absolute top-10 -right-10 w-56 h-56 bg-amber-100 rounded-full opacity-60 blur-2xl" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-6 mb-10">
            {/* Mirror Logo - The Brand Core */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-32 h-32 rounded-3xl bg-white p-2 shadow-2xl mx-auto border-2 border-teal-100 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="شعار مراية"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      (e.target as any).style.display = 'none';
                    }}
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-amber-400 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles size={14} className="text-white" />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-5xl sm:text-6xl font-black text-gray-900 leading-tight">
                مـرايـة
              </h1>
              <p className="text-teal-600 font-bold text-xl mt-1 tracking-wide">MERAYA</p>
              <p className="text-gray-500 text-lg mt-3 font-medium max-w-lg mx-auto leading-relaxed">
                {settings.hero_tagline || "بعد الصالون، المراية أول ما تبص فيها — تجربة صالون على أصابعك"}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
              <span className="text-gray-500 text-sm font-semibold">ابدأ من هنا:</span>
            </div>
          </div>

          {/* ── GENDER SELECTOR CARDS ── */}
          <div className="grid grid-cols-2 gap-4 max-w-2xl mx-auto mb-12">
            {/* MENS */}
            <Link href="/mens" className="gender-card group">
              <div className="relative h-52 sm:h-64 bg-gradient-to-br from-teal-800 via-teal-600 to-teal-500 rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-9xl font-black text-white select-none">♂</div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Scissors size={30} className="text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-black text-2xl">رجالي</div>
                    <div className="text-teal-100 text-sm font-medium">Men's Salon</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1 text-white text-xs font-bold">
                    <ChevronLeft size={12} />
                    <span>استكشف الصالونات</span>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-teal-300 to-teal-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>

            {/* WOMENS */}
            <Link href="/womens" className="gender-card group">
              <div className="relative h-52 sm:h-64 bg-gradient-to-br from-rose-700 via-rose-500 to-pink-400 rounded-3xl overflow-hidden shadow-xl">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-4 right-4 text-9xl font-black text-white select-none">♀</div>
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-4">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                    <Sparkles size={30} className="text-white" />
                  </div>
                  <div className="text-center">
                    <div className="text-white font-black text-2xl">حريمي</div>
                    <div className="text-rose-100 text-sm font-medium">Ladies' Salon</div>
                  </div>
                  <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1 text-white text-xs font-bold">
                    <ChevronLeft size={12} />
                    <span>استكشفي الصالونات</span>
                  </div>
                </div>
                <div className="absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r from-rose-300 to-pink-100 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
          </div>

          {/* ── INSTALLATION & QUICK ACCESS HUB ── */}
          <div className="max-w-2xl mx-auto mb-12 bg-gradient-to-r from-teal-50 via-white to-amber-50 rounded-3xl p-5 border border-teal-100 shadow-sm text-center">
            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />
              <h3 className="font-black text-gray-900 text-sm sm:text-base">
                منظومة التثبيت الذكي • بدون الحاجة لمتجر تطبيقات
              </h3>
            </div>
            <p className="text-xs text-gray-500 mb-4 max-w-lg mx-auto">
              ثبت مراية كأيقونة مستقلة سريعة على هاتفك (أندرويد وآيفون) أو نزل نسخة سطح المكتب لأجهزة الكمبيوتر والاستقبال.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
              <a
                href="/?install=mobile"
                className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs py-3 px-3 rounded-2xl shadow-sm transition active:scale-95"
              >
                <span>📱 تثبيت ع الموبايل (PWA)</span>
              </a>
              <a
                href="/api/desktop-installer"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-extrabold text-xs py-3 px-3 rounded-2xl shadow-sm transition active:scale-95"
              >
                <span>💻 تثبيت للكمبيوتر (.bat)</span>
              </a>
              <a
                href="/printable-card-3qr.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs py-3 px-3 rounded-2xl shadow-sm transition active:scale-95"
              >
                <span>🖨️ كارت المنظومة (3-QR)</span>
              </a>
            </div>
          </div>

          {/* ── STATS ROW ── */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-12">
            {[
              { icon: Users, label: "صالون مسجل", value: settings.stat_salons || "50+" },
              { icon: Calendar, label: "حجز شهرياً", value: settings.stat_bookings || "1000+" },
              { icon: Star, label: "تقييم متوسط", value: settings.stat_rating || "4.9" },
            ].map((s, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <s.icon size={22} className="text-teal-600 mx-auto mb-1" />
                <div className="font-black text-xl text-gray-900">{s.value}</div>
                <div className="text-xs text-gray-500 font-medium">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SALONS ── */}
      {!loading && salons.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-black text-gray-900">صالونات مميزة</h2>
            <Link href="/mens" className="text-teal-600 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              <span>الكل</span>
              <ChevronLeft size={16} />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {salons.slice(0, 6).map((salon) => (
              <Link
                key={salon.id}
                href={`/${salon.gender === "WOMENS" ? "womens" : "mens"}/${salon.slug}`}
                className="service-card group"
              >
                <div className="relative h-40 overflow-hidden bg-gradient-to-br from-teal-100 to-teal-50">
                  {salon.coverUrl ? (
                    <img src={salon.coverUrl} alt={salon.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Scissors size={48} className="text-teal-300" />
                    </div>
                  )}
                  <div className="absolute top-3 left-3">
                    <span className={`badge text-white ${salon.gender === "WOMENS" ? "bg-rose-500" : "bg-teal-600"}`}>
                      {salon.gender === "WOMENS" ? "حريمي" : "رجالي"}
                    </span>
                  </div>
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-2 py-0.5 text-xs font-bold text-amber-600">
                    <Star size={11} fill="currentColor" />
                    <span>{salon.rating.toFixed(1)}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-base mb-1">{salon.nameAr || salon.name}</h3>
                  {salon.address && (
                    <div className="flex items-center gap-1 text-gray-400 text-xs mb-2">
                      <MapPin size={12} />
                      <span>{salon.address}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    {salon.openTime && (
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock size={12} />
                        <span>{salon.openTime} – {salon.closeTime}</span>
                      </div>
                    )}
                    <span className="text-teal-600 text-xs font-bold bg-teal-50 px-2 py-1 rounded-full">
                      {salon.services?.length || 0} خدمة
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── WHY MERAYA ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">ليه مراية؟</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {[
              { icon: Zap, title: "حجز فوري", desc: "احجز موعدك في ثوانٍ بدون مكالمات", color: "bg-amber-50 text-amber-600" },
              { icon: Shield, title: "متأكدين من الصالونات", desc: "كل صالون بيمر بمعايير جودة صارمة", color: "bg-teal-50 text-teal-600" },
              { icon: Star, title: "تقييمات حقيقية", desc: "آراء حقيقية من عملاء زيك", color: "bg-rose-50 text-rose-500" },
              { icon: Award, title: "أفضل الأسعار", desc: "عروض حصرية لمستخدمي مراية", color: "bg-purple-50 text-purple-600" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-5 text-center shadow-sm border border-gray-100">
                <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mx-auto mb-3`}>
                  <f.icon size={22} />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl mirror-shimmer flex items-center justify-center">
              <Scissors size={18} className="text-white" />
            </div>
            <div>
              <div className="font-black text-lg">مراية | Meraya</div>
              <div className="text-gray-400 text-xs">تجربة صالون على أصابعك</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-teal-400 font-bold text-sm">
              تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
            </div>
            <div className="text-gray-500 text-xs">
              جميع الحقوق محفوظة © {new Date().getFullYear()} مراية | Meraya
            </div>
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <Link href="/mens" className="hover:text-teal-400 transition font-medium">رجالي</Link>
            <Link href="/womens" className="hover:text-rose-400 transition font-medium">حريمي</Link>
            <Link href="/admin" className="hover:text-teal-400 transition font-medium">للصالونات</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
