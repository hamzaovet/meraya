"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Scissors, Star, Clock, MapPin, Phone, ChevronLeft,
  Users, Sparkles, Calendar, Shield, Award, Zap, Menu, X, QrCode, Download, Smartphone, Monitor
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/api/salons?limit=8").then((r) => r.json()),
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
          {/* Brand */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0">
            <img
              src="/logo.png"
              alt="شعار مراية"
              className="w-10 h-10 object-contain rounded-xl p-0.5 border border-teal-100 bg-teal-50/50 shadow-sm"
              onError={(e) => { (e.target as any).style.display = 'none'; }}
            />
            <div className="flex flex-col">
              <span className="font-black text-xl text-teal-800 leading-none">مراية</span>
              <span className="text-[10px] text-amber-600 font-extrabold tracking-wider">MERAYA</span>
            </div>
          </Link>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-4">
            <Link href="/mens" className="flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-teal-600 transition">
              <Scissors size={15} />
              <span>رجالي (صدام ودقن الباشا)</span>
            </Link>
            <Link href="/womens" className="flex items-center gap-1.5 text-sm font-bold text-gray-700 hover:text-rose-500 transition">
              <Sparkles size={15} />
              <span>حريمي (حمام الباشا)</span>
            </Link>
            <a
              href="/printable-card-3qr.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-amber-50 hover:bg-amber-100 text-amber-900 border border-amber-200 px-3 py-1.5 text-xs font-bold rounded-xl transition"
            >
              <QrCode size={13} className="text-amber-700" />
              <span>كارت المنظومة (3-QR)</span>
            </a>
            <a
              href="/Install-Meraya.bat"
              download="Install-Meraya.bat"
              className="flex items-center gap-1.5 bg-gray-50 hover:bg-gray-100 text-gray-700 border border-gray-200 px-3 py-1.5 text-xs font-bold rounded-xl transition"
            >
              <Monitor size={13} className="text-gray-600" />
              <span>نسخة الكمبيوتر</span>
            </a>
            <Link href="/admin" className="btn-teal px-4 py-2 text-xs rounded-xl shadow-sm">
              لوحة الإدارة
            </Link>
          </div>

          {/* Mobile Action Buttons (Never Overlapping!) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/admin"
              className="bg-teal-50 hover:bg-teal-100 text-teal-800 border border-teal-200 px-3 py-1.5 text-xs font-extrabold rounded-xl transition"
            >
              للصالونات
            </Link>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center transition"
              aria-label="القائمة"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Slide-Down Menu Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-gray-200 px-4 py-4 space-y-3 shadow-xl animate-in slide-in-from-top-2 duration-200">
            <div className="grid grid-cols-2 gap-2 pb-2 border-b border-gray-100">
              <Link
                href="/mens"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-teal-50 text-teal-800 font-black p-3 rounded-2xl text-xs border border-teal-100"
              >
                <Scissors size={15} />
                <span>صالونات رجالي</span>
              </Link>
              <Link
                href="/womens"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-rose-50 text-rose-800 font-black p-3 rounded-2xl text-xs border border-rose-100"
              >
                <Sparkles size={15} />
                <span>حريمي وسبا</span>
              </Link>
            </div>

            <div className="space-y-2">
              <a
                href="/?install=mobile"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-teal-600 to-teal-500 text-white font-extrabold text-xs shadow-sm"
              >
                <div className="flex items-center gap-2">
                  <Smartphone size={16} />
                  <span>تثبيت تطبيق الموبايل (PWA)</span>
                </div>
                <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">تثبيت فوري</span>
              </a>

              <a
                href="/Install-Meraya.bat"
                download="Install-Meraya.bat"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-100 text-gray-800 font-bold text-xs"
              >
                <div className="flex items-center gap-2">
                  <Monitor size={16} className="text-gray-600" />
                  <span>تثبيت أيقونة الكمبيوتر لسطح المكتب</span>
                </div>
                <span className="text-teal-600 font-bold">.bat</span>
              </a>

              <a
                href="/printable-card-3qr.html"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-amber-50 text-amber-900 border border-amber-200 font-bold text-xs"
              >
                <div className="flex items-center gap-2">
                  <QrCode size={16} className="text-amber-700" />
                  <span>كارت المنظومة (3-QR) للطباعة</span>
                </div>
                <span className="text-amber-800 font-black">فتح الكارت ↗</span>
              </a>

              <Link
                href="/admin"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-900 text-white font-extrabold text-xs"
              >
                <span>👑 لوحة إدارة الصالونات</span>
                <span className="text-gray-400">دخول الإدارة ↗</span>
              </Link>
            </div>

            <div className="pt-2 text-center text-[10px] text-teal-700 font-bold">
              تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
            </div>
          </div>
        )}
      </nav>

      {/* ── HERO SECTION ── */}
      <section className="pt-24 pb-8 overflow-hidden relative">
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-teal-100 rounded-full opacity-40 blur-3xl" />
        <div className="absolute top-10 -right-10 w-56 h-56 bg-amber-100 rounded-full opacity-50 blur-2xl" />

        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <div className="text-center space-y-4 mb-8">
            {/* Mirror Brand Emblem (Sleek, Centered, No Overlapping Badges) */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-white p-3 shadow-xl mx-auto border-2 border-teal-200/80 flex items-center justify-center">
                  <img
                    src="/logo.png"
                    alt="شعار مراية"
                    className="w-full h-full object-contain"
                    onError={(e) => { (e.target as any).style.display = 'none'; }}
                  />
                </div>
              </div>
            </div>

            <div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-gray-900 tracking-tight">
                مـرايـة
              </h1>
              <p className="text-teal-700 font-black text-lg sm:text-xl tracking-wider mt-0.5">
                M E R A Y A
              </p>
              <p className="text-gray-600 text-base sm:text-lg mt-2 font-bold max-w-lg mx-auto leading-relaxed">
                {settings.hero_tagline || "بعد الصالون، المراية أول ما تبص فيها — تجربة صالون على أصابعك"}
              </p>
            </div>

            <div className="flex items-center justify-center gap-2 pt-1 text-xs font-bold text-gray-400">
              <span>اختر قسم الصالونات للمتابعة:</span>
            </div>
          </div>

          {/* ── GENDER SELECTOR CARDS ── */}
          <div className="grid grid-cols-2 gap-3 sm:gap-6 max-w-2xl mx-auto mb-10">
            {/* MENS */}
            <Link href="/mens" className="gender-card group">
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-teal-900 via-teal-700 to-teal-500 rounded-3xl overflow-hidden shadow-xl p-4 flex flex-col justify-between">
                <div className="absolute top-2 right-2 text-7xl font-black text-white/10 select-none">♂</div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <Scissors size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-xl sm:text-2xl">صالونات رجالي</div>
                  <div className="text-teal-100 text-xs sm:text-sm font-semibold">صالون صدام • دقن الباشا</div>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1 text-white text-xs font-bold">
                    <ChevronLeft size={12} />
                    <span>تصفح الفروع والخدمات</span>
                  </div>
                </div>
              </div>
            </Link>

            {/* WOMENS */}
            <Link href="/womens" className="gender-card group">
              <div className="relative h-56 sm:h-64 bg-gradient-to-br from-rose-800 via-rose-600 to-pink-500 rounded-3xl overflow-hidden shadow-xl p-4 flex flex-col justify-between">
                <div className="absolute top-2 right-2 text-7xl font-black text-white/10 select-none">♀</div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                  <Sparkles size={24} className="text-white" />
                </div>
                <div>
                  <div className="text-white font-black text-xl sm:text-2xl">حريمي وسبا</div>
                  <div className="text-rose-100 text-xs sm:text-sm font-semibold">حمام الباشا VIP للسيدات</div>
                  <div className="mt-3 inline-flex items-center gap-1.5 bg-white/20 backdrop-blur rounded-full px-3 py-1 text-white text-xs font-bold">
                    <ChevronLeft size={12} />
                    <span>تصفحي الحمام والسبا</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* ── INSTALLATION & ACCESS HUB ── */}
          <div className="max-w-2xl mx-auto mb-10 bg-gradient-to-r from-teal-50 via-white to-amber-50 rounded-3xl p-5 border border-teal-100 shadow-sm text-center">
            <div className="flex items-center justify-center gap-2 mb-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500 animate-ping" />
              <h3 className="font-black text-gray-900 text-sm sm:text-base">
                منظومة التثبيت السريع للعملاء والصالونات
              </h3>
            </div>
            <p className="text-xs text-gray-500 mb-4 max-w-md mx-auto font-medium">
              تثبيت مباشر بدون متجر على هواتف أندرويد وآيفون، أو تنزيل أيقونة الكمبيوتر الفورية.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
              <a
                href="/?install=mobile"
                className="flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-extrabold text-xs py-3 px-3 rounded-2xl shadow transition active:scale-95"
              >
                <Smartphone size={15} />
                <span>تثبيت ع الموبايل (PWA)</span>
              </a>
              <a
                href="/Install-Meraya.bat"
                download="Install-Meraya.bat"
                className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-black text-white font-extrabold text-xs py-3 px-3 rounded-2xl shadow transition active:scale-95"
              >
                <Monitor size={15} />
                <span>أيقونة الكمبيوتر (.bat)</span>
              </a>
              <a
                href="/printable-card-3qr.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-extrabold text-xs py-3 px-3 rounded-2xl shadow transition active:scale-95"
              >
                <QrCode size={15} />
                <span>كارت المنظومة (3-QR)</span>
              </a>
            </div>
          </div>

          {/* ── STATS ROW ── */}
          <div className="grid grid-cols-3 gap-3 sm:gap-4 max-w-xl mx-auto mb-10">
            {[
              { icon: Users, label: "فروع رائدة", value: settings.stat_salons || "4 فروع" },
              { icon: Calendar, label: "حجز شهرياً", value: settings.stat_bookings || "1,420+" },
              { icon: Star, label: "تقييم العملاء", value: settings.stat_rating || "4.96 ⭐" },
            ].map((s, i) => (
              <div key={i} className="text-center bg-gray-50 rounded-2xl p-3 sm:p-4 border border-gray-100">
                <s.icon size={20} className="text-teal-600 mx-auto mb-1" />
                <div className="font-black text-lg sm:text-xl text-gray-900">{s.value}</div>
                <div className="text-[11px] text-gray-500 font-bold">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED SALONS (REAL DATA) ── */}
      {!loading && salons.length > 0 && (
        <section className="max-w-6xl mx-auto px-4 pb-14">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-black text-gray-900">الصالونات المعتمدة الحالية</h2>
              <p className="text-xs text-gray-500 font-medium">صالونات حلاقة صدام VIP • صالون دقن الباشا • حمام الباشا للسيدات</p>
            </div>
            <Link href="/mens" className="text-teal-600 text-xs sm:text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all">
              <span>عرض الكل</span>
              <ChevronLeft size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5">
            {salons.map((salon) => (
              <Link
                key={salon.id}
                href={`/${salon.gender === "WOMENS" ? "womens" : "mens"}/${salon.slug}`}
                className="service-card group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-44 overflow-hidden bg-gradient-to-br from-teal-50 to-gray-100">
                    {salon.coverUrl ? (
                      <img src={salon.coverUrl} alt={salon.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Scissors size={48} className="text-teal-300" />
                      </div>
                    )}
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className={`badge text-white font-extrabold ${salon.gender === "WOMENS" ? "bg-rose-500" : "bg-teal-700"}`}>
                        {salon.gender === "WOMENS" ? "حريمي وسبا" : "رجالي VIP"}
                      </span>
                    </div>
                    <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/95 backdrop-blur rounded-full px-2.5 py-1 text-xs font-black text-amber-600 shadow">
                      <Star size={12} fill="currentColor" />
                      <span>{salon.rating.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center gap-2 mb-1.5">
                      {salon.logoUrl && (
                        <img src={salon.logoUrl} alt="" className="w-7 h-7 rounded-full object-cover border border-gray-200" />
                      )}
                      <h3 className="font-black text-gray-900 text-base leading-snug">{salon.nameAr || salon.name}</h3>
                    </div>

                    <p className="text-xs text-gray-500 line-clamp-2 mb-3 font-medium">
                      {salon.description}
                    </p>

                    {salon.address && (
                      <div className="flex items-start gap-1.5 text-gray-500 text-xs mb-2 font-medium">
                        <MapPin size={14} className="shrink-0 text-teal-600 mt-0.5" />
                        <span>{salon.address}</span>
                      </div>
                    )}

                    {salon.phone && (
                      <div className="flex items-center gap-1.5 text-gray-500 text-xs mb-3 font-medium">
                        <Phone size={13} className="shrink-0 text-teal-600" />
                        <span dir="ltr">{salon.phone}</span>
                      </div>
                    )}
                  </div>
                </div>

                <div className="px-4 pb-4 pt-2 border-t border-gray-100 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-1 text-gray-500 font-medium">
                    <Clock size={13} />
                    <span>{salon.openTime} – {salon.closeTime}</span>
                  </div>
                  <span className="text-teal-700 font-extrabold bg-teal-50 px-2.5 py-1 rounded-full">
                    {salon.services?.length || 0} خدمة متوفرة
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ── WHY MERAYA ── */}
      <section className="bg-gray-50 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl font-black text-gray-900 text-center mb-8">ليه مراية للصالونات والعملاء؟</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: Zap, title: "حجز فوري ومؤكد", desc: "احجز دورك في ثوانٍ بدون انتظار في الصالون", color: "bg-amber-50 text-amber-600" },
              { icon: Shield, title: "صالونات معتمدة", desc: "أرقى صالونات الحلاقة والسبا في مصر", color: "bg-teal-50 text-teal-600" },
              { icon: Star, title: "تقييمات موثقة", desc: "آراء حقيقية من زبائن الصالونات", color: "bg-rose-50 text-rose-500" },
              { icon: Award, title: "إدارة متكاملة", desc: "لوحة تحكم كاملة للمواعيد والخزينة وطاقم العمل", color: "bg-purple-50 text-purple-600" },
            ].map((f, i) => (
              <div key={i} className="bg-white rounded-3xl p-5 text-center shadow-sm border border-gray-100">
                <div className={`w-12 h-12 rounded-2xl ${f.color} flex items-center justify-center mx-auto mb-3`}>
                  <f.icon size={22} />
                </div>
                <h4 className="font-black text-gray-900 text-sm mb-1">{f.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-medium">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-white py-10">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-5 text-center md:text-right">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="مراية" className="w-10 h-10 object-contain rounded-xl bg-white/10 p-1" />
            <div>
              <div className="font-black text-lg">مراية | Meraya</div>
              <div className="text-gray-400 text-xs">منظومة صالونات الحلاقة والتجميل الذكية</div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <div className="text-teal-400 font-extrabold text-sm">
              تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
            </div>
            <div className="text-gray-500 text-xs">
              جميع الحقوق محفوظة © {new Date().getFullYear()} مراية | Meraya
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs text-gray-400 font-bold">
            <Link href="/mens" className="hover:text-teal-400 transition">صالونات رجالي</Link>
            <Link href="/womens" className="hover:text-rose-400 transition">حريمي وسبا</Link>
            <Link href="/admin" className="hover:text-teal-400 transition">لوحة الإدارة</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
