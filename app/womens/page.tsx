"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Sparkles, Star, Clock, MapPin, ChevronLeft, Search } from "lucide-react";

type Salon = {
  id: string;
  name: string;
  nameAr: string | null;
  slug: string;
  logoUrl: string | null;
  coverUrl: string | null;
  description: string | null;
  address: string | null;
  city: string | null;
  openTime: string | null;
  closeTime: string | null;
  rating: number;
  reviewCount: number;
  services: { id: string; name: string; price: number; duration: number }[];
};

export default function WomensPage() {
  const [salons, setSalons] = useState<Salon[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("/api/salons?gender=WOMENS&limit=50")
      .then((r) => r.json())
      .then((d) => { setSalons(d.salons || []); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const filtered = salons.filter(
    (s) =>
      !search ||
      (s.nameAr || s.name).includes(search) ||
      (s.address || "").includes(search)
  );

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Header */}
      <div className="bg-gradient-to-br from-rose-700 to-pink-500 pt-14 pb-20 relative wave-top" style={{ "--tw-wave-bg": "white" } as any}>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <Link href="/" className="inline-flex items-center gap-2 text-rose-100 hover:text-white text-sm font-bold mb-6 transition">
            <ChevronLeft size={16} />
            <span>الرئيسية</span>
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur border border-white/30">
              <Sparkles size={28} className="text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-black text-white">الصالونات الحريمي</h1>
              <p className="text-rose-100 text-sm font-medium">Ladies' Salons & Beauty</p>
            </div>
          </div>
          <div className="relative max-w-lg">
            <Search size={18} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ابحثي عن صالون أو منطقة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pr-11 pl-4 py-3.5 rounded-2xl bg-white text-gray-900 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-rose-300 shadow-lg"
              autoComplete="off"
            />
          </div>
        </div>
      </div>

      {/* Salons Grid */}
      <div className="max-w-6xl mx-auto px-4 -mt-10 pb-14 relative z-10">
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[1,2,3,4,5,6].map(i => (
              <div key={i} className="bg-white rounded-3xl shadow-md border border-gray-100 overflow-hidden animate-pulse">
                <div className="h-44 bg-gray-200" />
                <div className="p-4 space-y-2">
                  <div className="h-4 bg-gray-200 rounded w-3/4" />
                  <div className="h-3 bg-gray-100 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24">
            <Sparkles size={64} className="text-gray-200 mx-auto mb-4" />
            <p className="text-gray-400 font-semibold text-lg">مفيش صالونات متاحة دلوقت</p>
            <p className="text-gray-300 text-sm mt-1">هيتم إضافة صالونات قريباً</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((salon) => (
              <Link
                key={salon.id}
                href={`/womens/${salon.slug}`}
                className="service-card group bg-white"
              >
                <div className="relative h-44 overflow-hidden bg-gradient-to-br from-rose-100 to-pink-50">
                  {salon.coverUrl ? (
                    <img src={salon.coverUrl} alt={salon.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Sparkles size={48} className="text-rose-300" />
                    </div>
                  )}
                  <div className="absolute top-3 right-3 flex items-center gap-1 bg-white/90 backdrop-blur rounded-full px-2 py-0.5 text-xs font-bold text-amber-600">
                    <Star size={11} fill="currentColor" />
                    <span>{salon.rating.toFixed(1)}</span>
                    <span className="text-gray-400">({salon.reviewCount})</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-black text-gray-900 text-base mb-1.5">{salon.nameAr || salon.name}</h3>
                  {salon.address && (
                    <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
                      <MapPin size={12} />
                      <span>{salon.address}</span>
                    </div>
                  )}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-50">
                    {salon.openTime && (
                      <div className="flex items-center gap-1 text-gray-400 text-xs">
                        <Clock size={12} />
                        <span>{salon.openTime} – {salon.closeTime}</span>
                      </div>
                    )}
                    <span className="text-rose-500 text-xs font-bold bg-rose-50 px-2.5 py-1 rounded-full">
                      {salon.services?.length || 0} خدمة
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>

      <footer className="border-t border-gray-100 py-6 text-center">
        <div className="text-teal-600 font-bold text-sm">
          تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
        </div>
        <div className="text-xs text-gray-300 mt-1">© {new Date().getFullYear()} مراية | Meraya</div>
      </footer>
    </div>
  );
}
