"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  Scissors, Star, Clock, MapPin, Phone, ChevronLeft,
  Calendar, User, CheckCircle, X, Sparkles
} from "lucide-react";

type Salon = {
  id: string;
  name: string; nameAr: string | null; slug: string; gender: string;
  logoUrl: string | null; coverUrl: string | null; description: string | null;
  phone: string | null; whatsapp: string | null; address: string | null;
  city: string | null; openTime: string | null; closeTime: string | null;
  rating: number; reviewCount: number;
  services: { id: string; name: string; nameAr: string | null; price: number; duration: number; discountPrice: number | null; imageUrl: string | null; description: string | null }[];
  staff: { id: string; name: string; avatarUrl: string | null; title: string | null; specialties: string | null }[];
  gallery: { id: string; url: string; caption: string | null }[];
  reviews: { id: string; customerName: string; rating: number; comment: string }[];
};

export default function SalonDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const gender = typeof window !== "undefined" ? window.location.pathname.startsWith("/womens") ? "womens" : "mens" : "mens";

  const [salon, setSalon] = useState<Salon | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"services" | "gallery" | "reviews">("services");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<Salon["services"][0] | null>(null);

  // Booking form state
  const [bForm, setBForm] = useState({ name: "", phone: "", email: "", date: "", time: "", notes: "" });
  const [otpStep, setOtpStep] = useState<"form" | "otp" | "done">("form");
  const [otp, setOtp] = useState("");
  const [bookingLoading, setBookingLoading] = useState(false);
  const [bookingError, setBookingError] = useState("");
  const [bookingRef, setBookingRef] = useState("");

  useEffect(() => {
    if (!slug) return;
    fetch(`/api/salons/${slug}`)
      .then((r) => r.json())
      .then((d) => { setSalon(d.salon || null); setLoading(false); })
      .catch(() => setLoading(false));
  }, [slug]);

  const handleSendOtp = async () => {
    if (!bForm.name || !bForm.phone || !bForm.email || !bForm.date || !bForm.time || !selectedService) {
      setBookingError("يرجى ملء جميع البيانات المطلوبة واختيار خدمة");
      return;
    }
    setBookingLoading(true); setBookingError("");
    const res = await fetch("/api/send-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: bForm.email, purpose: "BOOKING_CONFIRM" }),
    });
    const data = await res.json();
    setBookingLoading(false);
    if (data.success) setOtpStep("otp");
    else setBookingError(data.error || "فشل إرسال كود التحقق");
  };

  const handleConfirmBooking = async () => {
    if (!otp || otp.length < 4) { setBookingError("أدخل كود التحقق"); return; }
    setBookingLoading(true); setBookingError("");
    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        salonId: salon!.id,
        serviceId: selectedService!.id,
        customerName: bForm.name,
        customerPhone: bForm.phone,
        customerEmail: bForm.email,
        date: bForm.date,
        timeSlot: bForm.time,
        notes: bForm.notes,
        otpEmail: bForm.email,
        otpCode: otp,
        source: "WEBSITE",
      }),
    });
    const data = await res.json();
    setBookingLoading(false);
    if (data.success) { setOtpStep("done"); setBookingRef(data.appointment?.appointmentNo || ""); }
    else setBookingError(data.error || "فشل تأكيد الحجز");
  };

  const isWomens = gender === "womens";
  const accent = isWomens ? "rose" : "teal";
  const accentBg = isWomens ? "from-rose-700 to-pink-500" : "from-teal-800 to-teal-600";

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-white" dir="rtl">
      <div className="text-center space-y-4">
        <div className="w-16 h-16 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin mx-auto" />
        <p className="text-gray-400 font-medium">جاري التحميل...</p>
      </div>
    </div>
  );

  if (!salon) return (
    <div className="min-h-screen flex items-center justify-center bg-white" dir="rtl">
      <div className="text-center">
        <p className="text-gray-400 font-semibold text-lg">الصالون مش موجود</p>
        <Link href="/" className="text-teal-600 text-sm mt-3 inline-block font-bold">← الرجوع للرئيسية</Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white" dir="rtl">
      {/* Cover */}
      <div className={`relative h-56 sm:h-72 bg-gradient-to-br ${accentBg} overflow-hidden`}>
        {salon.coverUrl && (
          <img src={salon.coverUrl} alt={salon.name} className="w-full h-full object-cover opacity-60" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute top-4 right-4">
          <Link href={`/${gender}`} className="inline-flex items-center gap-1.5 bg-white/20 backdrop-blur text-white text-sm font-bold px-3 py-1.5 rounded-full border border-white/30 hover:bg-white/30 transition">
            <ChevronLeft size={15} />
            <span>رجوع</span>
          </Link>
        </div>
        {salon.logoUrl && (
          <div className="absolute bottom-0 right-6 translate-y-1/2">
            <div className="w-20 h-20 rounded-2xl border-4 border-white shadow-xl overflow-hidden bg-white">
              <img src={salon.logoUrl} alt={salon.name} className="w-full h-full object-cover" />
            </div>
          </div>
        )}
      </div>

      <div className="max-w-3xl mx-auto px-4">
        {/* Info Card */}
        <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-5 mt-14 mb-5">
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-black text-gray-900">{salon.nameAr || salon.name}</h1>
              {salon.description && <p className="text-gray-500 text-sm mt-1 leading-relaxed">{salon.description}</p>}
            </div>
            <div className="flex items-center gap-1 bg-amber-50 px-2.5 py-1.5 rounded-full">
              <Star size={14} fill="#f59e0b" className="text-amber-500" />
              <span className="font-black text-amber-600 text-sm">{salon.rating.toFixed(1)}</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 mt-3 text-xs text-gray-500">
            {salon.address && (
              <span className="flex items-center gap-1"><MapPin size={12} />{salon.address}</span>
            )}
            {salon.openTime && (
              <span className="flex items-center gap-1"><Clock size={12} />{salon.openTime} – {salon.closeTime}</span>
            )}
            {salon.phone && (
              <a href={`tel:${salon.phone}`} className="flex items-center gap-1 text-teal-600 font-bold">
                <Phone size={12} />{salon.phone}
              </a>
            )}
          </div>
          {/* Book CTA */}
          <button
            onClick={() => { setBookingOpen(true); setOtpStep("form"); }}
            className={`w-full mt-4 py-3.5 rounded-2xl font-black text-sm text-white transition-all shadow-lg ${isWomens ? "bg-rose-500 hover:bg-rose-400 shadow-rose-300/50" : "bg-teal-600 hover:bg-teal-500 shadow-teal-300/50"}`}
          >
            <Calendar size={16} className="inline ml-2" />
            احجز موعدك دلوقتي
          </button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-5 border-b border-gray-100 pb-1">
          {(["services", "gallery", "reviews"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${activeTab === tab ? (isWomens ? "bg-rose-50 text-rose-600" : "bg-teal-50 text-teal-600") : "text-gray-400 hover:text-gray-600"}`}
            >
              {{ services: "الخدمات", gallery: "معرض الأعمال", reviews: "التقييمات" }[tab]}
            </button>
          ))}
        </div>

        {/* SERVICES TAB */}
        {activeTab === "services" && (
          <div className="space-y-3 mb-10">
            {salon.services.map((svc) => (
              <div
                key={svc.id}
                onClick={() => { setSelectedService(svc); setBookingOpen(true); setOtpStep("form"); }}
                className={`service-card p-4 flex items-center gap-4 cursor-pointer hover:border-${accent}-200`}
              >
                {svc.imageUrl && (
                  <div className="w-16 h-16 rounded-2xl overflow-hidden flex-shrink-0">
                    <img src={svc.imageUrl} alt={svc.name} className="w-full h-full object-cover" />
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <div className="font-bold text-gray-900 text-sm">{svc.nameAr || svc.name}</div>
                  {svc.description && <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{svc.description}</p>}
                  <div className="flex items-center gap-2 mt-1.5">
                    <Clock size={11} className="text-gray-300" />
                    <span className="text-xs text-gray-400">{svc.duration} دقيقة</span>
                  </div>
                </div>
                <div className="text-right flex-shrink-0">
                  {svc.discountPrice ? (
                    <>
                      <div className={`font-black text-base ${isWomens ? "text-rose-600" : "text-teal-600"}`}>{svc.discountPrice} ج</div>
                      <div className="text-gray-300 text-xs line-through">{svc.price} ج</div>
                    </>
                  ) : (
                    <div className={`font-black text-base ${isWomens ? "text-rose-600" : "text-teal-600"}`}>{svc.price} ج</div>
                  )}
                </div>
              </div>
            ))}
            {salon.services.length === 0 && (
              <div className="text-center py-10 text-gray-300 text-sm">لا توجد خدمات مضافة بعد</div>
            )}
          </div>
        )}

        {/* GALLERY TAB */}
        {activeTab === "gallery" && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-10">
            {salon.gallery.map((img) => (
              <div key={img.id} className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <img src={img.url} alt={img.caption || "صورة"} className="w-full h-full object-cover hover:scale-105 transition duration-300" />
              </div>
            ))}
            {salon.gallery.length === 0 && (
              <div className="col-span-3 text-center py-10 text-gray-300 text-sm">لا توجد صور بعد</div>
            )}
          </div>
        )}

        {/* REVIEWS TAB */}
        {activeTab === "reviews" && (
          <div className="space-y-3 mb-10">
            {salon.reviews.map((r) => (
              <div key={r.id} className="bg-white rounded-2xl border border-gray-100 p-4 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-gray-900 text-sm">{r.customerName}</span>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={12} fill={i < r.rating ? "#f59e0b" : "none"} className={i < r.rating ? "text-amber-400" : "text-gray-200"} />
                    ))}
                  </div>
                </div>
                <p className="text-gray-500 text-xs leading-relaxed">{r.comment}</p>
              </div>
            ))}
            {salon.reviews.length === 0 && (
              <div className="text-center py-10 text-gray-300 text-sm">لا توجد تقييمات بعد</div>
            )}
          </div>
        )}

        {/* Staff */}
        {salon.staff.length > 0 && (
          <div className="mb-10">
            <h3 className="font-black text-gray-900 text-lg mb-4">فريق العمل</h3>
            <div className="flex gap-4 overflow-x-auto pb-2">
              {salon.staff.map((s) => (
                <div key={s.id} className="flex-shrink-0 text-center w-24">
                  <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gray-100 mx-auto mb-2">
                    {s.avatarUrl ? (
                      <img src={s.avatarUrl} alt={s.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <User size={28} className="text-gray-300" />
                      </div>
                    )}
                  </div>
                  <div className="font-bold text-gray-900 text-xs">{s.name}</div>
                  {s.title && <div className="text-gray-400 text-[10px] mt-0.5">{s.title}</div>}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ORCA Footer */}
        <div className="border-t border-gray-100 py-6 text-center text-sm text-gray-400 mb-6">
          <div className="text-teal-600 font-bold">
            تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
          </div>
          <div className="text-xs text-gray-300 mt-1">© {new Date().getFullYear()} مراية | Meraya</div>
        </div>
      </div>

      {/* ── BOOKING MODAL ── */}
      {bookingOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-end sm:items-center justify-center p-4" dir="rtl">
          <div className="bg-white rounded-t-3xl sm:rounded-3xl max-w-md w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="font-black text-gray-900">
                {otpStep === "done" ? "تم تأكيد الحجز ✅" : otpStep === "otp" ? "تأكيد البريد الإلكتروني" : `حجز: ${selectedService?.nameAr || selectedService?.name || "موعد"}`}
              </h3>
              <button onClick={() => setBookingOpen(false)} className="p-2 rounded-xl hover:bg-gray-100 transition">
                <X size={18} className="text-gray-400" />
              </button>
            </div>

            <div className="p-5 space-y-4">
              {otpStep === "done" ? (
                <div className="text-center space-y-4 py-4">
                  <CheckCircle size={56} className="text-green-500 mx-auto" />
                  <div>
                    <div className="font-black text-xl text-gray-900">تم الحجز بنجاح!</div>
                    <div className="text-gray-500 text-sm mt-1">رقم الحجز: <span className="font-bold text-teal-600">{bookingRef}</span></div>
                    <p className="text-gray-400 text-xs mt-2">تم إرسال تأكيد الحجز على بريدك الإلكتروني.</p>
                  </div>
                  <button onClick={() => setBookingOpen(false)} className="w-full py-3 rounded-2xl bg-gray-100 font-bold text-gray-700 text-sm">
                    حسناً
                  </button>
                </div>
              ) : otpStep === "otp" ? (
                <>
                  <p className="text-gray-500 text-sm text-center">تم إرسال كود التحقق على <span className="font-bold text-gray-900">{bForm.email}</span></p>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="أدخل كود التحقق"
                    className="inp text-center text-2xl font-black tracking-widest"
                    maxLength={6}
                    autoComplete="one-time-code"
                  />
                  {bookingError && <p className="text-red-500 text-xs text-center">{bookingError}</p>}
                  <button onClick={handleConfirmBooking} disabled={bookingLoading} className={`w-full py-3.5 rounded-2xl font-black text-white text-sm ${isWomens ? "bg-rose-500 hover:bg-rose-400" : "bg-teal-600 hover:bg-teal-500"} disabled:opacity-50`}>
                    {bookingLoading ? "جاري التأكيد..." : "تأكيد الحجز"}
                  </button>
                  <button onClick={() => setOtpStep("form")} className="w-full py-2 text-xs text-gray-400 hover:text-gray-600 font-medium">
                    رجوع وتعديل البيانات
                  </button>
                </>
              ) : (
                <>
                  {selectedService && (
                    <div className={`bg-${accent}-50 rounded-2xl p-3 flex items-center justify-between`}>
                      <span className={`font-bold text-sm text-${accent}-700`}>{selectedService.nameAr || selectedService.name}</span>
                      <span className={`font-black text-${accent}-600`}>{selectedService.discountPrice || selectedService.price} ج</span>
                    </div>
                  )}
                  {!selectedService && (
                    <div>
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">اختر الخدمة *</label>
                      <select className="inp" onChange={(e) => setSelectedService(salon.services.find(s => s.id === e.target.value) || null)}>
                        <option value="">-- اختر خدمة --</option>
                        {salon.services.map(s => (
                          <option key={s.id} value={s.id}>{s.nameAr || s.name} – {s.discountPrice || s.price} ج</option>
                        ))}
                      </select>
                    </div>
                  )}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="col-span-2">
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">الاسم الكامل *</label>
                      <input className="inp" type="text" value={bForm.name} onChange={e => setBForm({...bForm, name: e.target.value})} placeholder="اسمك" autoComplete="off" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">رقم الموبايل *</label>
                      <input className="inp" type="tel" value={bForm.phone} onChange={e => setBForm({...bForm, phone: e.target.value})} placeholder="01xxxxxxxxx" autoComplete="off" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">البريد الإلكتروني *</label>
                      <input className="inp" type="email" value={bForm.email} onChange={e => setBForm({...bForm, email: e.target.value})} placeholder="email@gmail.com" autoComplete="off" />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">تاريخ الموعد *</label>
                      <input className="inp" type="date" value={bForm.date} onChange={e => setBForm({...bForm, date: e.target.value})} min={new Date().toISOString().split("T")[0]} />
                    </div>
                    <div>
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">الوقت *</label>
                      <input className="inp" type="time" value={bForm.time} onChange={e => setBForm({...bForm, time: e.target.value})} />
                    </div>
                    <div className="col-span-2">
                      <label className="block text-gray-700 font-semibold text-xs mb-1.5">ملاحظات (اختياري)</label>
                      <textarea className="inp resize-none" rows={2} value={bForm.notes} onChange={e => setBForm({...bForm, notes: e.target.value})} placeholder="أي ملاحظات أو طلبات خاصة..." />
                    </div>
                  </div>
                  {bookingError && <p className="text-red-500 text-xs text-center">{bookingError}</p>}
                  <button onClick={handleSendOtp} disabled={bookingLoading} className={`w-full py-3.5 rounded-2xl font-black text-white text-sm ${isWomens ? "bg-rose-500 hover:bg-rose-400" : "bg-teal-600 hover:bg-teal-500"} disabled:opacity-50 shadow-lg`}>
                    {bookingLoading ? "جاري الإرسال..." : "متابعة وتأكيد الحجز →"}
                  </button>
                  <p className="text-center text-xs text-gray-400">سيتم إرسال كود تحقق على بريدك الإلكتروني</p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
