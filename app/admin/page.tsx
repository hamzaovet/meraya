"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import {
  Scissors, Eye, EyeOff, LogOut, LayoutDashboard, Store,
  Users, Calendar, Image, DollarSign, Settings, Plus, Edit,
  Trash2, CheckCircle, X, Upload, Star, Clock, MapPin,
  ArrowUp, ArrowDown, Menu, ChevronLeft, Shield, Sparkles
} from "lucide-react";

type CurrentUser = { id: string; username: string; name: string; role: string };

// ─── IMAGE UPLOAD HELPER ───────────────────────────────────────
async function uploadImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = async (e) => {
      const base64 = e.target?.result as string;
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ imageBase64: base64 }),
      });
      const data = await res.json();
      if (data.url) resolve(data.url);
      else reject(new Error(data.error || "فشل الرفع"));
    };
    reader.readAsDataURL(file);
  });
}

// ─── IMAGE UPLOAD COMPONENT ────────────────────────────────────
function ImageUploader({ value, onChange, label }: { value: string; onChange: (url: string) => void; label?: string }) {
  const ref = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  return (
    <div>
      {label && <label className="block text-gray-700 font-semibold text-xs mb-1.5">{label}</label>}
      <div className="flex items-center gap-3">
        {value && <img src={value} alt="" className="w-16 h-16 rounded-xl object-cover border border-gray-200" />}
        <div>
          <button type="button" onClick={() => ref.current?.click()}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-teal-50 text-teal-700 font-bold text-xs border border-teal-200 hover:bg-teal-100 transition disabled:opacity-50"
            disabled={loading}>
            <Upload size={14} />
            <span>{loading ? "جاري الرفع..." : "رفع صورة"}</span>
          </button>
          <input ref={ref} type="file" accept="image/*" className="hidden" onChange={async (e) => {
            const file = e.target.files?.[0]; if (!file) return;
            setLoading(true);
            try { const url = await uploadImage(file); onChange(url); }
            catch { alert("فشل رفع الصورة"); }
            finally { setLoading(false); e.target.value = ""; }
          }} />
        </div>
      </div>
    </div>
  );
}

export default function AdminPage() {
  const [currentUser, setCurrentUser] = useState<CurrentUser | null>(null);
  const [loginForm, setLoginForm] = useState({ username: "", password: "", pinCode: "" });
  const [showPass, setShowPass] = useState(false);
  const [showPin, setShowPin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");
  const [activeTab, setActiveTab] = useState("dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Data state
  const [salons, setSalons] = useState<any[]>([]);
  const [appointments, setAppointments] = useState<any[]>([]);
  const [treasury, setTreasury] = useState<any>({ transactions: [], totalIn: 0, totalOut: 0, balance: 0 });
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  // Modals
  const [salonModal, setSalonModal] = useState(false);
  const [editingSalon, setEditingSalon] = useState<any>(null);
  const [salonForm, setSalonForm] = useState<any>({
    name: "", nameAr: "", slug: "", gender: "BOTH", description: "",
    phone: "", whatsapp: "", address: "", city: "", openTime: "09:00",
    closeTime: "22:00", workDays: "sat,sun,mon,tue,wed,thu", logoUrl: "", coverUrl: "",
  });

  const [txModal, setTxModal] = useState(false);
  const [txForm, setTxForm] = useState({ type: "IN", category: "OTHER", amount: "", description: "", paymentMethod: "CASH" });

  const [userModal, setUserModal] = useState(false);
  const [userForm, setUserForm] = useState({ username: "", password: "", pinCode: "", name: "", role: "ADMIN" });

  // ── LOAD from localStorage ──
  useEffect(() => {
    const saved = localStorage.getItem("meraya_admin_user");
    if (saved) {
      try { setCurrentUser(JSON.parse(saved)); } catch {}
    }
  }, []);

  // ── LOAD DATA after login ──
  useEffect(() => {
    if (!currentUser) return;
    loadAll();
  }, [currentUser]);

  async function loadAll() {
    setLoading(true);
    try {
      const [salonsRes, aptsRes, txRes, usersRes] = await Promise.all([
        fetch("/api/salons?limit=100"),
        fetch("/api/appointments?limit=100"),
        fetch("/api/treasury"),
        fetch("/api/auth/users"),
      ]);
      const [s, a, t, u] = await Promise.all([salonsRes.json(), aptsRes.json(), txRes.json(), usersRes.json()]);
      setSalons(s.salons || []);
      setAppointments(a.appointments || []);
      setTreasury(t);
      setUsers(u.users || []);
    } catch {}
    setLoading(false);
  }

  // ── LOGIN ──
  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true); setLoginError("");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(loginForm),
    });
    const data = await res.json();
    setLoginLoading(false);
    if (data.success) {
      setCurrentUser(data.user);
      localStorage.setItem("meraya_admin_user", JSON.stringify(data.user));
    } else {
      setLoginError(data.error || "بيانات الدخول غلط");
    }
  }

  // ── LOGOUT ──
  function handleLogout() {
    setCurrentUser(null);
    localStorage.removeItem("meraya_admin_user");
  }

  // ── SAVE SALON ──
  async function handleSaveSalon(e: React.FormEvent) {
    e.preventDefault();
    const payload = { ...salonForm };
    if (!payload.slug) payload.slug = payload.name.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    const method = "POST";
    const url = editingSalon ? "/api/salons" : "/api/salons";
    const body = editingSalon ? { id: editingSalon.id, ...payload } : payload;
    const res = await fetch(url, { method: editingSalon ? "PATCH" : "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    const data = await res.json();
    if (data.success) { setSalonModal(false); loadAll(); }
    else alert(data.error);
  }

  async function deleteSalon(id: string) {
    if (!confirm("مؤكد حذف الصالون؟")) return;
    await fetch("/api/salons", { method: "DELETE", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id }) });
    loadAll();
  }

  async function handleUpdateAppointment(id: string, updates: any) {
    await fetch("/api/appointments", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, ...updates }) });
    loadAll();
  }

  async function handleAddTx(e: React.FormEvent) {
    e.preventDefault();
    await fetch("/api/treasury", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...txForm, amount: parseFloat(txForm.amount), createdBy: currentUser?.name }) });
    setTxModal(false); loadAll();
  }

  async function handleAddUser(e: React.FormEvent) {
    e.preventDefault();
    const res = await fetch("/api/auth/users", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...userForm, callerRole: currentUser?.role }) });
    const data = await res.json();
    if (data.success) { setUserModal(false); loadAll(); }
    else alert(data.error);
  }

  async function toggleUserActive(id: string, isActive: boolean, name: string) {
    if (!confirm(`${isActive ? "تعطيل" : "تفعيل"} حساب ${name}؟`)) return;
    await fetch("/api/auth/users", { method: "PATCH", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ id, isActive: !isActive, callerRole: currentUser?.role }) });
    loadAll();
  }

  // ── STATUS COLOR ──
  const statusColor: Record<string, string> = {
    PENDING: "bg-yellow-100 text-yellow-700",
    CONFIRMED: "bg-blue-100 text-blue-700",
    IN_PROGRESS: "bg-purple-100 text-purple-700",
    DONE: "bg-green-100 text-green-700",
    CANCELLED: "bg-red-100 text-red-700",
    NO_SHOW: "bg-gray-100 text-gray-500",
  };
  const statusLabel: Record<string, string> = {
    PENDING: "قيد الانتظار", CONFIRMED: "مؤكد", IN_PROGRESS: "جاري",
    DONE: "منتهي", CANCELLED: "ملغي", NO_SHOW: "لم يحضر",
  };

  const tabs = [
    { id: "dashboard", label: "الرئيسية", icon: LayoutDashboard },
    { id: "salons", label: "الصالونات", icon: Store },
    { id: "appointments", label: "المواعيد", icon: Calendar },
    { id: "treasury", label: "الخزينة", icon: DollarSign },
    { id: "staff", label: "فريق العمل", icon: Users },
    { id: "settings", label: "الإعدادات", icon: Settings },
  ];

  // ───── LOGIN SCREEN ─────
  if (!currentUser) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50 flex flex-col items-center justify-center p-4" dir="rtl">
        <div className="w-full max-w-sm">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-20 h-24 mirror-shimmer rounded-t-full rounded-b-2xl flex items-center justify-center mx-auto mb-4 shadow-xl">
              <div className="w-14 h-18 bg-white/20 backdrop-blur rounded-t-full rounded-b-xl flex items-center justify-center">
                <Scissors size={28} className="text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-black text-gray-900">مراية</h1>
            <p className="text-teal-600 font-bold text-sm">لوحة إدارة الصالونات</p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-6">
            <h2 className="font-black text-gray-900 text-lg mb-5 text-center">تسجيل الدخول</h2>
            <form onSubmit={handleLogin} className="space-y-4" autoComplete="off">
              <input type="text" name="fake_username" className="hidden" autoComplete="username" />
              <input type="password" name="fake_password" className="hidden" autoComplete="password" />

              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">اسم المستخدم</label>
                <input
                  type="text"
                  value={loginForm.username}
                  onChange={(e) => setLoginForm({ ...loginForm, username: e.target.value })}
                  className="inp"
                  placeholder="username"
                  autoComplete="off"
                  autoCorrect="off"
                  spellCheck={false}
                  readOnly
                  onFocus={(e) => e.target.removeAttribute("readonly")}
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">كلمة المرور</label>
                <div className="relative">
                  <input
                    type={showPass ? "text" : "password"}
                    value={loginForm.password}
                    onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                    className="inp pl-10"
                    placeholder="••••••••"
                    autoComplete="new-password"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute("readonly")}
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPass ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">كود الأمان (PIN)</label>
                <div className="relative">
                  <input
                    type={showPin ? "text" : "password"}
                    value={loginForm.pinCode}
                    onChange={(e) => setLoginForm({ ...loginForm, pinCode: e.target.value.replace(/\D/g, "") })}
                    className="inp pl-10 tracking-widest"
                    placeholder="••••••"
                    maxLength={8}
                    autoComplete="off"
                    inputMode="numeric"
                    readOnly
                    onFocus={(e) => e.target.removeAttribute("readonly")}
                  />
                  <button type="button" onClick={() => setShowPin(!showPin)} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    {showPin ? <EyeOff size={16} /> : <Eye size={16} />}
                  </button>
                </div>
              </div>

              {loginError && (
                <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-red-600 text-xs font-medium text-center">
                  {loginError}
                </div>
              )}

              <button type="submit" disabled={loginLoading} className="w-full py-3.5 rounded-2xl btn-teal text-sm disabled:opacity-50">
                {loginLoading ? "جاري التحقق..." : "دخول لوحة الإدارة 🌿"}
              </button>
            </form>

            <div className="mt-5 pt-4 border-t border-gray-100 space-y-2 text-center">
              <div className="text-teal-600 font-bold text-xs">
                تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000
              </div>
              <Link href="/" className="inline-flex items-center gap-1.5 text-gray-400 hover:text-gray-600 text-xs font-medium transition">
                <ChevronLeft size={12} />
                العودة للموقع
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ───── ADMIN DASHBOARD ─────
  const todayAppts = appointments.filter((a) => a.date === new Date().toISOString().split("T")[0]);
  const pendingAppts = appointments.filter((a) => a.status === "PENDING");
  const doneAppts = appointments.filter((a) => a.status === "DONE");

  return (
    <div className="min-h-screen bg-gray-50 flex" dir="rtl">
      {/* ── SIDEBAR ── */}
      {sidebarOpen && <div className="fixed inset-0 bg-black/40 z-20 md:hidden" onClick={() => setSidebarOpen(false)} />}
      <aside className={`fixed top-0 right-0 h-full w-64 bg-white border-l border-gray-100 shadow-xl z-30 flex flex-col transition-transform duration-300 ${sidebarOpen ? "translate-x-0" : "translate-x-full"} md:translate-x-0 md:static md:shadow-none md:z-auto`}>
        <div className="p-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-12 mirror-shimmer rounded-t-full rounded-b-xl flex items-center justify-center">
              <Scissors size={16} className="text-white" />
            </div>
            <div>
              <div className="font-black text-gray-900 text-sm">مراية | Meraya</div>
              <div className="text-xs text-gray-400">لوحة الإدارة</div>
            </div>
          </div>
        </div>

        {/* User pill */}
        <div className="mx-3 mt-3 bg-teal-50 rounded-2xl p-3 flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-teal-600 text-white flex items-center justify-center font-black text-sm">
            {currentUser.name.charAt(0)}
          </div>
          <div className="min-w-0">
            <div className="font-bold text-gray-900 text-xs truncate">{currentUser.name}</div>
            <div className="text-[10px] text-teal-600 font-medium">{currentUser.role === "OWNER" ? "👑 المالك" : "مدير النظام"}</div>
          </div>
        </div>

        {/* Nav items */}
        <nav className="flex-1 p-3 space-y-1 mt-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-2xl text-sm font-bold transition-all ${activeTab === tab.id ? "bg-teal-600 text-white shadow-md shadow-teal-200" : "text-gray-600 hover:bg-gray-100"}`}
            >
              <tab.icon size={16} />
              <span>{tab.label}</span>
            </button>
          ))}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-gray-100">
          <button onClick={handleLogout} className="w-full flex items-center gap-2 px-3 py-2.5 rounded-2xl text-sm font-bold text-red-500 hover:bg-red-50 transition">
            <LogOut size={16} />
            <span>تسجيل الخروج</span>
          </button>
          <div className="text-center mt-3 text-[10px] text-teal-500 font-bold">
            Orca Tech 🐬 • 01018671000
          </div>
        </div>
      </aside>

      {/* ── MAIN CONTENT ── */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar */}
        <header className="bg-white border-b border-gray-100 h-14 flex items-center justify-between px-4 sticky top-0 z-10">
          <button onClick={() => setSidebarOpen(true)} className="md:hidden p-2 rounded-xl hover:bg-gray-100 transition">
            <Menu size={20} className="text-gray-600" />
          </button>
          <h1 className="font-black text-gray-900 text-sm">
            {tabs.find(t => t.id === activeTab)?.label}
          </h1>
          <div className="flex items-center gap-2">
            <Link href="/" target="_blank" className="text-xs text-gray-400 hover:text-teal-600 font-medium transition hidden sm:block">
              عرض الموقع ↗
            </Link>
            <a href="/api/desktop-installer?target=admin" download className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-teal-50 text-teal-700 text-xs font-bold hover:bg-teal-100 transition">
              💻 تثبيت للديسكتوب
            </a>
          </div>
        </header>

        <main className="flex-1 p-4 overflow-auto">
          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="w-10 h-10 border-4 border-teal-200 border-t-teal-600 rounded-full animate-spin" />
            </div>
          )}

          {/* ── DASHBOARD TAB ── */}
          {!loading && activeTab === "dashboard" && (
            <div className="space-y-5 max-w-4xl fade-in">
              {/* KPI Cards */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "صالونات نشطة", value: salons.filter(s => s.isActive).length, icon: Store, color: "bg-teal-50 text-teal-600" },
                  { label: "مواعيد اليوم", value: todayAppts.length, icon: Calendar, color: "bg-blue-50 text-blue-600" },
                  { label: "قيد الانتظار", value: pendingAppts.length, icon: Clock, color: "bg-amber-50 text-amber-600" },
                  { label: "رصيد الخزينة", value: `${treasury.balance?.toFixed(0)} ج`, icon: DollarSign, color: "bg-green-50 text-green-600" },
                ].map((kpi, i) => (
                  <div key={i} className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
                    <div className={`w-10 h-10 rounded-2xl ${kpi.color} flex items-center justify-center mb-3`}>
                      <kpi.icon size={18} />
                    </div>
                    <div className="font-black text-2xl text-gray-900">{kpi.value}</div>
                    <div className="text-xs text-gray-400 font-medium mt-0.5">{kpi.label}</div>
                  </div>
                ))}
              </div>

              {/* Recent appointments */}
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="flex items-center justify-between p-5 border-b border-gray-50">
                  <h3 className="font-black text-gray-900">أحدث المواعيد</h3>
                  <button onClick={() => setActiveTab("appointments")} className="text-teal-600 text-xs font-bold">عرض الكل</button>
                </div>
                <div className="divide-y divide-gray-50">
                  {appointments.slice(0, 5).map((apt) => (
                    <div key={apt.id} className="flex items-center justify-between p-4">
                      <div>
                        <div className="font-bold text-gray-900 text-sm">{apt.customerName}</div>
                        <div className="text-xs text-gray-400">{apt.date} • {apt.timeSlot}</div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className={`badge text-xs ${statusColor[apt.status] || "bg-gray-100 text-gray-500"}`}>
                          {statusLabel[apt.status] || apt.status}
                        </span>
                        <span className="font-black text-teal-600 text-sm">{apt.finalPrice} ج</span>
                      </div>
                    </div>
                  ))}
                  {appointments.length === 0 && (
                    <div className="text-center py-8 text-gray-300 text-sm">لا توجد مواعيد بعد</div>
                  )}
                </div>
              </div>

              {/* PWA install card */}
              <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-5 text-white">
                <div className="font-black text-lg mb-1">تثبيت تطبيق مراية 📱💻</div>
                <p className="text-teal-100 text-sm mb-4">ثبت التطبيق على جوالك أو جهاز الكمبيوتر للوصول السريع</p>
                <div className="flex flex-wrap gap-3">
                  <a href="/api/desktop-installer?target=app" download className="bg-white/20 hover:bg-white/30 text-white font-bold text-xs px-4 py-2 rounded-xl backdrop-blur transition">
                    💻 مثبت الديسكتوب (Windows)
                  </a>
                  <a href="/api/desktop-installer?target=admin" download className="bg-white/20 hover:bg-white/30 text-white font-bold text-xs px-4 py-2 rounded-xl backdrop-blur transition">
                    🔐 مثبت لوحة الإدارة
                  </a>
                </div>
              </div>
            </div>
          )}

          {/* ── SALONS TAB ── */}
          {!loading && activeTab === "salons" && (
            <div className="max-w-4xl fade-in">
              <div className="flex items-center justify-between mb-5">
                <h2 className="font-black text-gray-900">إدارة الصالونات ({salons.length})</h2>
                <button onClick={() => { setEditingSalon(null); setSalonForm({ name: "", nameAr: "", slug: "", gender: "BOTH", description: "", phone: "", whatsapp: "", address: "", city: "", openTime: "09:00", closeTime: "22:00", workDays: "sat,sun,mon,tue,wed,thu", logoUrl: "", coverUrl: "" }); setSalonModal(true); }}
                  className="btn-teal flex items-center gap-2 px-4 py-2 text-sm">
                  <Plus size={16} />
                  <span>صالون جديد</span>
                </button>
              </div>

              <div className="space-y-3">
                {salons.map((salon) => (
                  <div key={salon.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4 flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl overflow-hidden bg-gradient-to-br from-teal-100 to-teal-50 flex-shrink-0">
                      {salon.logoUrl ? (
                        <img src={salon.logoUrl} alt={salon.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center">
                          <Scissors size={22} className="text-teal-300" />
                        </div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-black text-gray-900 text-sm">{salon.nameAr || salon.name}</div>
                      <div className="text-xs text-gray-400 mt-0.5">{salon.address || "—"}</div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <span className={`badge text-[10px] ${salon.gender === "WOMENS" ? "bg-rose-50 text-rose-600" : salon.gender === "MENS" ? "bg-teal-50 text-teal-600" : "bg-gray-50 text-gray-500"}`}>
                          {salon.gender === "WOMENS" ? "حريمي" : salon.gender === "MENS" ? "رجالي" : "الاثنين"}
                        </span>
                        <span className={`badge text-[10px] ${salon.isActive ? "bg-green-50 text-green-600" : "bg-red-50 text-red-500"}`}>
                          {salon.isActive ? "نشط" : "موقوف"}
                        </span>
                        <span className="flex items-center gap-1 text-[10px] text-amber-600">
                          <Star size={9} fill="currentColor" /> {salon.rating.toFixed(1)}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                      <button onClick={() => { setEditingSalon(salon); setSalonForm(salon); setSalonModal(true); }} className="p-2 rounded-xl bg-blue-50 text-blue-600 hover:bg-blue-100 transition">
                        <Edit size={14} />
                      </button>
                      <button onClick={() => deleteSalon(salon.id)} className="p-2 rounded-xl bg-red-50 text-red-500 hover:bg-red-100 transition">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                ))}
                {salons.length === 0 && (
                  <div className="text-center py-16 text-gray-300">
                    <Store size={48} className="mx-auto mb-3" />
                    <p className="font-semibold">لا توجد صالونات مضافة بعد</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── APPOINTMENTS TAB ── */}
          {!loading && activeTab === "appointments" && (
            <div className="max-w-4xl fade-in">
              <h2 className="font-black text-gray-900 mb-5">المواعيد ({appointments.length})</h2>
              <div className="space-y-3">
                {appointments.map((apt) => (
                  <div key={apt.id} className="bg-white rounded-3xl shadow-sm border border-gray-100 p-4">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="font-black text-gray-900 text-sm">{apt.customerName}</div>
                        <div className="text-xs text-gray-400 mt-0.5">{apt.customerPhone}</div>
                        <div className="text-xs text-gray-400">{apt.date} • {apt.timeSlot}</div>
                      </div>
                      <div className="text-right">
                        <div className="font-black text-teal-600">{apt.finalPrice} ج</div>
                        <div className="text-[10px] text-gray-400 mt-0.5">{apt.appointmentNo}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`badge text-xs ${statusColor[apt.status] || "bg-gray-100 text-gray-500"}`}>
                        {statusLabel[apt.status] || apt.status}
                      </span>
                      {apt.status !== "DONE" && apt.status !== "CANCELLED" && (
                        <>
                          {apt.status === "PENDING" && (
                            <button onClick={() => handleUpdateAppointment(apt.id, { status: "CONFIRMED" })}
                              className="text-xs px-3 py-1 rounded-xl bg-blue-50 text-blue-600 font-bold hover:bg-blue-100 transition">
                              تأكيد
                            </button>
                          )}
                          {apt.status === "CONFIRMED" && (
                            <button onClick={() => handleUpdateAppointment(apt.id, { status: "IN_PROGRESS" })}
                              className="text-xs px-3 py-1 rounded-xl bg-purple-50 text-purple-600 font-bold hover:bg-purple-100 transition">
                              بدأ
                            </button>
                          )}
                          {apt.status === "IN_PROGRESS" && (
                            <button onClick={() => handleUpdateAppointment(apt.id, { status: "DONE", paymentStatus: "PAID", paymentMethod: "CASH" })}
                              className="text-xs px-3 py-1 rounded-xl bg-green-50 text-green-600 font-bold hover:bg-green-100 transition">
                              ✓ إنهاء وتحصيل
                            </button>
                          )}
                          <button onClick={() => handleUpdateAppointment(apt.id, { status: "CANCELLED" })}
                            className="text-xs px-3 py-1 rounded-xl bg-red-50 text-red-500 font-bold hover:bg-red-100 transition">
                            إلغاء
                          </button>
                        </>
                      )}
                    </div>
                  </div>
                ))}
                {appointments.length === 0 && (
                  <div className="text-center py-16 text-gray-300">
                    <Calendar size={48} className="mx-auto mb-3" />
                    <p className="font-semibold">لا توجد مواعيد بعد</p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ── TREASURY TAB ── */}
          {!loading && activeTab === "treasury" && (
            <div className="max-w-4xl fade-in space-y-5">
              {/* Summary */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-green-50 rounded-3xl p-5 border border-green-100">
                  <div className="text-xs text-green-600 font-bold mb-1">إجمالي الوارد</div>
                  <div className="font-black text-2xl text-green-700">{treasury.totalIn?.toFixed(2)} ج</div>
                </div>
                <div className="bg-red-50 rounded-3xl p-5 border border-red-100">
                  <div className="text-xs text-red-500 font-bold mb-1">إجمالي الصادر</div>
                  <div className="font-black text-2xl text-red-600">{treasury.totalOut?.toFixed(2)} ج</div>
                </div>
                <div className="bg-teal-50 rounded-3xl p-5 border border-teal-100">
                  <div className="text-xs text-teal-600 font-bold mb-1">الرصيد الحالي</div>
                  <div className="font-black text-2xl text-teal-700">{treasury.balance?.toFixed(2)} ج</div>
                </div>
              </div>

              <div className="flex justify-end">
                <button onClick={() => setTxModal(true)} className="btn-teal flex items-center gap-2 px-4 py-2 text-sm">
                  <Plus size={16} />
                  <span>حركة جديدة</span>
                </button>
              </div>

              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="divide-y divide-gray-50">
                  {treasury.transactions?.map((tx: any) => (
                    <div key={tx.id} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${tx.type === "IN" ? "bg-green-100" : "bg-red-100"}`}>
                          {tx.type === "IN" ? <ArrowDown size={16} className="text-green-600" /> : <ArrowUp size={16} className="text-red-500" />}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{tx.description}</div>
                          <div className="text-xs text-gray-400">{tx.category} • {new Date(tx.createdAt).toLocaleDateString("ar-EG")}</div>
                        </div>
                      </div>
                      <div className={`font-black text-base ${tx.type === "IN" ? "text-green-600" : "text-red-500"}`}>
                        {tx.type === "IN" ? "+" : "-"}{tx.amount.toFixed(2)} ج
                      </div>
                    </div>
                  ))}
                  {(!treasury.transactions || treasury.transactions.length === 0) && (
                    <div className="text-center py-10 text-gray-300 text-sm">لا توجد حركات مالية بعد</div>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* ── STAFF TAB ── */}
          {!loading && activeTab === "staff" && (
            <div className="max-w-4xl fade-in">
              <h2 className="font-black text-gray-900 mb-5">فريق العمل والمستخدمين</h2>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-5">
                <div className="flex items-center justify-between p-4 border-b border-gray-50">
                  <h3 className="font-black text-gray-900 text-sm">حسابات الإدارة ({users.length})</h3>
                  {currentUser.role === "OWNER" && (
                    <button onClick={() => { setUserForm({ username: "", password: "", pinCode: "", name: "", role: "ADMIN" }); setUserModal(true); }}
                      className="btn-teal flex items-center gap-2 px-3 py-1.5 text-xs">
                      <Plus size={12} />
                      <span>حساب جديد</span>
                    </button>
                  )}
                </div>
                <div className="divide-y divide-gray-50">
                  {users.map((u) => (
                    <div key={u.id} className="flex items-center justify-between p-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm ${u.role === "OWNER" ? "bg-amber-100 text-amber-600" : "bg-teal-100 text-teal-600"}`}>
                          {u.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-bold text-gray-900 text-sm">{u.name}</div>
                          <div className="text-xs text-gray-400">@{u.username} • {u.role === "OWNER" ? "👑 مالك" : "مدير"}</div>
                        </div>
                      </div>
                      {currentUser.role === "OWNER" && u.role !== "OWNER" && (
                        <button onClick={() => toggleUserActive(u.id, u.isActive, u.name)}
                          className={`text-xs px-3 py-1.5 rounded-xl font-bold transition ${u.isActive ? "bg-red-50 text-red-500 hover:bg-red-100" : "bg-green-50 text-green-600 hover:bg-green-100"}`}>
                          {u.isActive ? "تعطيل" : "تفعيل"}
                        </button>
                      )}
                      {u.role === "OWNER" && <span className="badge bg-amber-50 text-amber-600 text-xs">المالك الرئيسي</span>}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ── SETTINGS TAB ── */}
          {!loading && activeTab === "settings" && (
            <div className="max-w-2xl fade-in space-y-5">
              <h2 className="font-black text-gray-900">إعدادات النظام</h2>
              <div className="bg-white rounded-3xl shadow-sm border border-gray-100 p-5 space-y-4">
                <h3 className="font-black text-gray-900 text-sm border-b border-gray-100 pb-3">الإعدادات العامة</h3>
                <SettingField label="العنوان الرئيسي للصفحة" settingKey="hero_tagline" defaultValue="بعد الصالون، المراية أول ما تبص فيها" />
                <SettingField label="عدد الصالونات (للعرض)" settingKey="stat_salons" defaultValue="50+" />
                <SettingField label="عدد الحجوزات الشهرية (للعرض)" settingKey="stat_bookings" defaultValue="1000+" />
                <SettingField label="متوسط التقييم (للعرض)" settingKey="stat_rating" defaultValue="4.9" />
              </div>

              <div className="bg-gradient-to-br from-teal-600 to-teal-500 rounded-3xl p-5 text-white">
                <div className="font-black text-sm mb-1">مراية | Meraya v1.0</div>
                <div className="text-teal-100 text-xs">تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000</div>
              </div>
            </div>
          )}
        </main>
      </div>

      {/* ── SALON MODAL ── */}
      {salonModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" dir="rtl">
          <div className="bg-white rounded-3xl max-w-lg w-full shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="font-black text-gray-900">{editingSalon ? "تعديل صالون" : "إضافة صالون جديد"}</h3>
              <button onClick={() => setSalonModal(false)} className="p-2 rounded-xl hover:bg-gray-100 transition">
                <X size={18} className="text-gray-400" />
              </button>
            </div>
            <form onSubmit={handleSaveSalon} className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">اسم الصالون بالعربي *</label>
                  <input className="inp" type="text" value={salonForm.nameAr} onChange={e => setSalonForm({...salonForm, nameAr: e.target.value})} placeholder="صالون فلان" required autoComplete="off" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">الاسم بالإنجليزي</label>
                  <input className="inp" type="text" value={salonForm.name} onChange={e => setSalonForm({...salonForm, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, "-")})} placeholder="Salon Name" autoComplete="off" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">نوع الصالون *</label>
                  <select className="inp" value={salonForm.gender} onChange={e => setSalonForm({...salonForm, gender: e.target.value})}>
                    <option value="MENS">رجالي فقط</option>
                    <option value="WOMENS">حريمي فقط</option>
                    <option value="BOTH">رجالي وحريمي</option>
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">رقم التليفون</label>
                  <input className="inp" type="tel" value={salonForm.phone} onChange={e => setSalonForm({...salonForm, phone: e.target.value})} placeholder="01xxxxxxxxx" autoComplete="off" />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">وقت الفتح</label>
                  <input className="inp" type="time" value={salonForm.openTime} onChange={e => setSalonForm({...salonForm, openTime: e.target.value})} />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">وقت الإغلاق</label>
                  <input className="inp" type="time" value={salonForm.closeTime} onChange={e => setSalonForm({...salonForm, closeTime: e.target.value})} />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">العنوان</label>
                  <input className="inp" type="text" value={salonForm.address} onChange={e => setSalonForm({...salonForm, address: e.target.value})} placeholder="العنوان التفصيلي" autoComplete="off" />
                </div>
                <div className="col-span-2">
                  <label className="block text-gray-700 font-semibold text-xs mb-1.5">وصف الصالون</label>
                  <textarea className="inp resize-none" rows={2} value={salonForm.description} onChange={e => setSalonForm({...salonForm, description: e.target.value})} placeholder="نبذة عن الصالون وخدماته..." />
                </div>
                <div className="col-span-2">
                  <ImageUploader label="لوجو الصالون" value={salonForm.logoUrl} onChange={url => setSalonForm({...salonForm, logoUrl: url})} />
                </div>
                <div className="col-span-2">
                  <ImageUploader label="صورة الغلاف" value={salonForm.coverUrl} onChange={url => setSalonForm({...salonForm, coverUrl: url})} />
                </div>
              </div>
              <button type="submit" className="w-full py-3.5 btn-teal text-sm">
                {editingSalon ? "حفظ التعديلات" : "إضافة الصالون"} ✓
              </button>
            </form>
          </div>
        </div>
      )}

      {/* ── TX MODAL ── */}
      {txModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" dir="rtl">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="font-black text-gray-900">حركة خزينة جديدة</h3>
              <button onClick={() => setTxModal(false)} className="p-2 rounded-xl hover:bg-gray-100 transition"><X size={18} className="text-gray-400" /></button>
            </div>
            <form onSubmit={handleAddTx} className="p-5 space-y-4">
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setTxForm({...txForm, type: "IN"})}
                  className={`py-2.5 rounded-xl font-bold text-sm border transition ${txForm.type === "IN" ? "bg-green-500 text-white border-green-500" : "border-gray-200 text-gray-500 hover:border-green-300"}`}>
                  ⬇ وارد
                </button>
                <button type="button" onClick={() => setTxForm({...txForm, type: "OUT"})}
                  className={`py-2.5 rounded-xl font-bold text-sm border transition ${txForm.type === "OUT" ? "bg-red-500 text-white border-red-500" : "border-gray-200 text-gray-500 hover:border-red-300"}`}>
                  ⬆ صادر
                </button>
              </div>
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">المبلغ (ج) *</label>
                <input className="inp" type="number" step="0.01" value={txForm.amount} onChange={e => setTxForm({...txForm, amount: e.target.value})} placeholder="0.00" required autoComplete="off" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">البيان *</label>
                <input className="inp" type="text" value={txForm.description} onChange={e => setTxForm({...txForm, description: e.target.value})} placeholder="وصف الحركة المالية" required autoComplete="off" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">التصنيف</label>
                <select className="inp" value={txForm.category} onChange={e => setTxForm({...txForm, category: e.target.value})}>
                  <option value="APPOINTMENT">حجز موعد</option>
                  <option value="SALARY">مرتبات</option>
                  <option value="EXPENSE">مصروفات</option>
                  <option value="OTHER">أخرى</option>
                </select>
              </div>
              <button type="submit" className="w-full py-3.5 btn-teal text-sm">تسجيل الحركة</button>
            </form>
          </div>
        </div>
      )}

      {/* ── USER MODAL ── */}
      {userModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4" dir="rtl">
          <div className="bg-white rounded-3xl max-w-md w-full shadow-2xl">
            <div className="flex items-center justify-between p-5 border-b border-gray-100">
              <h3 className="font-black text-gray-900">إضافة حساب جديد</h3>
              <button onClick={() => setUserModal(false)} className="p-2 rounded-xl hover:bg-gray-100 transition"><X size={18} className="text-gray-400" /></button>
            </div>
            <form onSubmit={handleAddUser} className="p-5 space-y-4">
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">الاسم الكامل *</label>
                <input className="inp" type="text" value={userForm.name} onChange={e => setUserForm({...userForm, name: e.target.value})} required autoComplete="off" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">اسم المستخدم *</label>
                <input className="inp" type="text" value={userForm.username} onChange={e => setUserForm({...userForm, username: e.target.value})} required autoComplete="off" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">كلمة المرور *</label>
                <input className="inp" type="text" value={userForm.password} onChange={e => setUserForm({...userForm, password: e.target.value})} required autoComplete="off" />
              </div>
              <div>
                <label className="block text-gray-700 font-semibold text-xs mb-1.5">كود الأمان (PIN) *</label>
                <input className="inp" type="text" value={userForm.pinCode} onChange={e => setUserForm({...userForm, pinCode: e.target.value.replace(/\D/g, "")})} required autoComplete="off" maxLength={8} />
              </div>
              <button type="submit" className="w-full py-3.5 btn-teal text-sm">إضافة الحساب</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── SETTING FIELD COMPONENT ───────────────────────────────────
function SettingField({ label, settingKey, defaultValue }: { label: string; settingKey: string; defaultValue: string }) {
  const [value, setValue] = useState(defaultValue);
  const [saved, setSaved] = useState(false);

  const handleSave = async () => {
    await fetch("/api/settings", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ key: settingKey, value }) });
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  return (
    <div>
      <label className="block text-gray-700 font-semibold text-xs mb-1.5">{label}</label>
      <div className="flex gap-2">
        <input className="inp flex-1" type="text" value={value} onChange={e => setValue(e.target.value)} autoComplete="off" />
        <button type="button" onClick={handleSave} className={`px-4 py-2.5 rounded-xl font-bold text-xs transition ${saved ? "bg-green-500 text-white" : "bg-teal-50 text-teal-700 hover:bg-teal-100"}`}>
          {saved ? <CheckCircle size={14} /> : "حفظ"}
        </button>
      </div>
    </div>
  );
}
