import os
import qrcode
import io
import base64

def get_qr_base64(url, fill_color="rgb(15, 118, 110)"):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=10,
        border=2
    )
    qr.add_data(url)
    qr.make(fit=True)
    img = qr.make_image(fill_color=fill_color, back_color="white").convert("RGB")
    buf = io.BytesIO()
    img.save(buf, format="PNG")
    return "data:image/png;base64," + base64.b64encode(buf.getvalue()).decode("utf-8")

def build_html_card():
    output_dir = r"D:\Work\meraya\public"
    os.makedirs(output_dir, exist_ok=True)
    base_url = "https://meraya-six.vercel.app"
    qr_web = get_qr_base64(f"{base_url}/", fill_color="#0f766e")
    qr_mobile = get_qr_base64(f"{base_url}/?install=mobile", fill_color="#b45309")
    qr_desktop = get_qr_base64(f"{base_url}/api/desktop-installer", fill_color="#0d9488")
    
    html = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <title>كارت منظومة مراية الذكية | Meraya 3-QR Card</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&display=swap" rel="stylesheet">
  <style>
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    body {{
      font-family: 'Cairo', sans-serif;
      background: #f1f5f9;
      color: #1e293b;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 15px;
      min-height: 100vh;
    }}
    .print-actions {{
      margin-bottom: 25px;
      display: flex;
      gap: 15px;
    }}
    .btn {{
      padding: 12px 28px;
      border-radius: 14px;
      font-weight: 800;
      font-size: 15px;
      cursor: pointer;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      border: none;
      transition: all 0.2s;
    }}
    .btn-print {{
      background: #0f766e;
      color: white;
    }}
    .btn-print:hover {{
      background: #115e59;
      transform: translateY(-2px);
    }}
    .btn-home {{
      background: white;
      color: #0f766e;
      border: 2px solid #0f766e;
    }}
    .card-wrap {{
      width: 100%;
      max-width: 1100px;
      background: #ffffff;
      border-radius: 28px;
      padding: 40px;
      box-shadow: 0 20px 45px rgba(15, 118, 110, 0.12);
      border: 2px solid #fbbf24;
      position: relative;
      overflow: hidden;
    }}
    .card-wrap::before {{
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 8px;
      background: linear-gradient(90deg, #0f766e, #d97706, #14b8a6);
    }}
    .header {{
      text-align: center;
      margin-bottom: 35px;
    }}
    .logo-badge {{
      display: inline-flex;
      align-items: center;
      gap: 12px;
      background: #f0fdfa;
      border: 1.5px solid #ccfbf1;
      padding: 10px 24px;
      border-radius: 999px;
      margin-bottom: 15px;
    }}
    .logo-badge img {{
      width: 44px;
      height: 44px;
      border-radius: 50%;
    }}
    .logo-badge span {{
      font-weight: 900;
      font-size: 24px;
      color: #0f766e;
    }}
    .header h1 {{
      font-size: 32px;
      font-weight: 900;
      color: #0f766e;
      margin-bottom: 8px;
    }}
    .header p {{
      font-size: 16px;
      color: #b45309;
      font-weight: 700;
    }}
    .qr-grid {{
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
      margin-bottom: 35px;
    }}
    @media (max-width: 860px) {{
      .qr-grid {{
        grid-template-columns: 1fr;
      }}
    }}
    .qr-box {{
      background: #f8fafc;
      border-radius: 20px;
      padding: 24px 18px;
      text-align: center;
      border: 2px solid #e2e8f0;
      transition: transform 0.2s, box-shadow 0.2s;
      display: flex;
      flex-direction: column;
      align-items: center;
    }}
    .qr-box:hover {{
      transform: translateY(-4px);
      box-shadow: 0 12px 25px rgba(0,0,0,0.06);
    }}
    .qr-box.teal {{ border-color: #99f6e4; background: #f0fdfa; }}
    .qr-box.gold {{ border-color: #fde68a; background: #fffbeb; }}
    .qr-box.cyan {{ border-color: #a5f3fc; background: #ecfeff; }}
    
    .pill {{
      display: inline-block;
      padding: 6px 14px;
      border-radius: 999px;
      font-size: 13px;
      font-weight: 800;
      margin-bottom: 12px;
    }}
    .pill.teal {{ background: #0f766e; color: white; }}
    .pill.gold {{ background: #d97706; color: white; }}
    .pill.cyan {{ background: #0284c7; color: white; }}
    
    .qr-box h2 {{
      font-size: 19px;
      font-weight: 800;
      color: #1e293b;
      margin-bottom: 14px;
    }}
    .qr-img-wrap {{
      background: white;
      padding: 12px;
      border-radius: 16px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.05);
      border: 1px solid #e2e8f0;
      margin-bottom: 16px;
    }}
    .qr-img-wrap img {{
      display: block;
      width: 170px;
      height: 170px;
    }}
    .qr-box p.desc {{
      font-size: 14px;
      color: #475569;
      font-weight: 700;
      margin-bottom: 6px;
      line-height: 1.4;
    }}
    .qr-box p.sub {{
      font-size: 12px;
      color: #94a3b8;
      font-weight: 600;
      margin-bottom: 12px;
    }}
    .scan-tip {{
      font-size: 12px;
      font-weight: 800;
      display: inline-flex;
      align-items: center;
      gap: 5px;
    }}
    .scan-tip.teal {{ color: #0f766e; }}
    .scan-tip.gold {{ color: #d97706; }}
    .scan-tip.cyan {{ color: #0284c7; }}

    .footer {{
      background: #0f766e;
      color: white;
      text-align: center;
      padding: 18px 25px;
      border-radius: 16px;
      font-size: 16px;
      font-weight: 800;
      box-shadow: 0 6px 20px rgba(15, 118, 110, 0.25);
    }}
    .footer a {{
      color: #fef08a;
      text-decoration: none;
      font-weight: 900;
    }}

    @media print {{
      body {{
        background: white;
        padding: 0;
      }}
      .print-actions {{
        display: none !important;
      }}
      .card-wrap {{
        box-shadow: none !important;
        border: 1.5px solid #d97706 !important;
        padding: 25px;
      }}
      .qr-box {{
        break-inside: avoid;
      }}
    }}
  </style>
</head>
<body>

  <div class="print-actions">
    <button class="btn btn-print" onclick="window.print()">🖨️ طباعة الكارت / حفظ PDF</button>
    <a class="btn btn-home" href="/">🏠 العودة للمنصة</a>
  </div>

  <div class="card-wrap">
    <div class="header">
      <div class="logo-badge">
        <img src="/logo.png" alt="مراية" onerror="this.style.display='none'">
        <span>مراية | Meraya</span>
      </div>
      <h1>منظومة حجز وإدارة صالونات الحلاقة والتجميل الذكية</h1>
      <p>خدمة متكاملة للصالونات الرجالية والنسائية • تجربة صالون على أصابعك</p>
    </div>

    <div class="qr-grid">
      <!-- QR 1 -->
      <div class="qr-box teal">
        <div class="pill teal">🌐 المنصة والموقع المباشر</div>
        <h2>الموقع الرسمي للحجز</h2>
        <div class="qr-img-wrap">
          <img src="{qr_web}" alt="رابط الموقع">
        </div>
        <p class="desc">استعراض الصالونات والأسعار وحجز المواعيد الفورية</p>
        <p class="sub">متوافق مع جميع الهواتف وأجهزة الكمبيوتر</p>
        <div class="scan-tip teal">📷 وجّه الكاميرا للفتح المباشر</div>
      </div>

      <!-- QR 2 -->
      <div class="qr-box gold">
        <div class="pill gold">📱 تطبيق الموبايل (PWA)</div>
        <h2>تثبيت تطبيق الهاتف</h2>
        <div class="qr-img-wrap">
          <img src="{qr_mobile}" alt="تثبيت التطبيق">
        </div>
        <p class="desc">تثبيت فوري كتطبيق كامل بدون الحاجة للمتجر</p>
        <p class="sub">يدعم هواتف أندرويد وآيفون (شاشة كاملة وإشعارات)</p>
        <div class="scan-tip gold">📲 امسح للتثبيت الفوري ع الموبايل</div>
      </div>

      <!-- QR 3 -->
      <div class="qr-box cyan">
        <div class="pill cyan">💻 نسخة الكمبيوتر (Desktop)</div>
        <h2>تثبيت أيقونة سطح المكتب</h2>
        <div class="qr-img-wrap">
          <img src="{qr_desktop}" alt="تثبيت الديسكتوب">
        </div>
        <p class="desc">تحميل وتشغيل الأيقونة الفورية لسطح المكتب</p>
        <p class="sub">يفتح بنقرة واحدة كنافذة مستقلة بدون تشويش</p>
        <div class="scan-tip cyan">📥 امسح لتحميل مثبت الديسكتوب</div>
      </div>
    </div>

    <div class="footer">
      تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • <a href="tel:01018671000">01018671000</a>
    </div>
  </div>

</body>
</html>
"""
    out_file = os.path.join(output_dir, "printable-card-3qr.html")
    with open(out_file, "w", encoding="utf-8") as f:
        f.write(html)
    print(f"[OK] HTML card generated at: {out_file}")

if __name__ == "__main__":
    build_html_card()
