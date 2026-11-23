import os
import qrcode
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import arabic_reshaper
from bidi.algorithm import get_display

def ar(text):
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

def make_qr(url, box_size=8, border=2, fill_color=(15, 118, 110), back_color=(255, 255, 255)):
    qr = qrcode.QRCode(
        version=None,
        error_correction=qrcode.constants.ERROR_CORRECT_H,
        box_size=box_size,
        border=border
    )
    qr.add_data(url)
    qr.make(fit=True)
    img_qr = qr.make_image(fill_color=fill_color, back_color=back_color).convert("RGBA")
    return img_qr

def generate_card():
    output_dir = r"D:\Work\meraya\public"
    os.makedirs(output_dir, exist_ok=True)
    
    # 1800 x 1050 High Resolution System Card
    W, H = 1800, 1050
    card = Image.new("RGBA", (W, H), (255, 255, 255, 255))
    draw = ImageDraw.Draw(card)
    
    # Background: Soft pearl gradient with teal/gold ambiance
    for y in range(H):
        ratio = y / H
        r = int(250 * (1 - ratio) + 245 * ratio)
        g = int(254 * (1 - ratio) + 250 * ratio)
        b = int(253 * (1 - ratio) + 248 * ratio)
        draw.line([(0, y), (W, y)], fill=(r, g, b, 255))
        
    # Luxury Outer Border
    draw.rounded_rectangle([30, 30, W - 30, H - 30], radius=35, outline=(217, 119, 6, 220), width=6)
    draw.rounded_rectangle([42, 42, W - 42, H - 42], radius=28, outline=(15, 118, 110, 180), width=3)
    
    # Fonts
    font_bold = "C:\\Windows\\Fonts\\tahomabd.ttf"
    font_reg = "C:\\Windows\\Fonts\\tahoma.ttf"
    font_arial_bd = "C:\\Windows\\Fonts\\arialbd.ttf"
    
    f_title = ImageFont.truetype(font_bold, 54)
    f_sub = ImageFont.truetype(font_reg, 24)
    f_card_title = ImageFont.truetype(font_bold, 28)
    f_card_desc = ImageFont.truetype(font_reg, 20)
    f_badge = ImageFont.truetype(font_bold, 18)
    f_footer = ImageFont.truetype(font_bold, 26)
    f_tagline = ImageFont.truetype(font_bold, 22)
    
    # Header Section
    # Logo miniature on top
    logo_path = os.path.join(output_dir, "logo.png")
    if os.path.exists(logo_path):
        mini_logo = Image.open(logo_path).convert("RGBA").resize((110, 110), Image.Resampling.LANCZOS)
        card.paste(mini_logo, (W // 2 - 55, 60), mini_logo)
        
    # App Title
    title_text = ar("مراية | Meraya")
    bbox_t = draw.textbbox((0, 0), title_text, font=f_title)
    w_t = bbox_t[2] - bbox_t[0]
    draw.text((W // 2 - w_t // 2, 185), title_text, font=f_title, fill=(15, 118, 110, 255))
    
    # Slogan / Tagline
    slogan_text = ar("منظومة حجز وإدارة صالونات الحلاقة والتجميل (صالون صدام • دقن الباشا • حمام الباشا)")
    bbox_s = draw.textbbox((0, 0), slogan_text, font=f_sub)
    w_s = bbox_s[2] - bbox_s[0]
    draw.text((W // 2 - w_s // 2, 255), slogan_text, font=f_sub, fill=(217, 119, 6, 255))
    
    # Gold divider bar
    draw.line([W // 2 - 250, 305, W // 2 + 250, 305], fill=(217, 119, 6, 180), width=3)
    draw.ellipse([W // 2 - 6, 305 - 6, W // 2 + 6, 305 + 6], fill=(15, 118, 110, 255))
    
    # 3 QR Sections Data
    base_url = "https://meraya-six.vercel.app"
    sections = [
        {
            "tag": ar("1 • الموقع الرسمي"),
            "title": ar("منصة الحجز والموقع"),
            "desc": ar("استعراض الصالونات والأسعار وحجز المواعيد الفورية"),
            "sub_desc": ar("متوافق مع جميع الشاشات والمتصفحات"),
            "url": f"{base_url}/",
            "color": (15, 118, 110), # Teal
            "badge": ar("🌐 الموقع المباشر")
        },
        {
            "tag": ar("2 • تطبيق الموبايل"),
            "title": ar("تثبيت تطبيق الموبايل"),
            "desc": ar("يعمل كأبليكيشن كامل بدون الحاجة لمتجر تطبيقات"),
            "sub_desc": ar("يدعم أندرويد وآيفون (PWA مع إشعارات)"),
            "url": f"{base_url}/?install=mobile",
            "color": (180, 83, 9), # Rich Amber/Gold
            "badge": ar("📱 Android & iOS (PWA)")
        },
        {
            "tag": ar("3 • نسخة الكمبيوتر"),
            "title": ar("تثبيت أيقونة الديسكتوب"),
            "desc": ar("تثبيت فوري لأيقونة البرنامج على سطح المكتب"),
            "sub_desc": ar("يفتح بنافذة مستقلة وسريعة مثل البرامج المثبتة"),
            "url": f"{base_url}/Install-Meraya.bat",
            "color": (13, 148, 136), # Vibrant Teal
            "badge": ar("💻 Windows Desktop App")
        }
    ]
    
    # Draw 3 Cards
    card_w = 480
    card_h = 560
    card_y = 330
    gap = 60
    start_x = (W - (card_w * 3 + gap * 2)) // 2
    
    for idx, sec in enumerate(sections):
        cx = start_x + idx * (card_w + gap)
        
        # White card background with shadow effect
        # Soft shadow
        draw.rounded_rectangle([cx - 4, card_y - 4, cx + card_w + 4, card_y + card_h + 4], radius=26, fill=(0, 0, 0, 15))
        draw.rounded_rectangle([cx, card_y, cx + card_w, card_y + card_h], radius=24, fill=(255, 255, 255, 255), outline=sec["color"], width=3)
        
        # Card Header Pill
        pill_w = 260
        pill_h = 42
        pill_x = cx + (card_w - pill_w) // 2
        pill_y = card_y + 20
        draw.rounded_rectangle([pill_x, pill_y, pill_x + pill_w, pill_y + pill_h], radius=21, fill=sec["color"])
        
        bbox_bg = draw.textbbox((0, 0), sec["badge"], font=f_badge)
        draw.text((pill_x + (pill_w - (bbox_bg[2] - bbox_bg[0])) // 2, pill_y + 10), sec["badge"], font=f_badge, fill=(255, 255, 255, 255))
        
        # Section Title
        bbox_st = draw.textbbox((0, 0), sec["title"], font=f_card_title)
        draw.text((cx + (card_w - (bbox_st[2] - bbox_st[0])) // 2, card_y + 80), sec["title"], font=f_card_title, fill=(30, 41, 59, 255))
        
        # QR Code Generation
        qr_img = make_qr(sec["url"], box_size=6, border=2, fill_color=sec["color"])
        qr_w, qr_h = qr_img.size
        # QR container with rounded gold border
        qr_box_x = cx + (card_w - qr_w) // 2
        qr_box_y = card_y + 130
        draw.rounded_rectangle([qr_box_x - 10, qr_box_y - 10, qr_box_x + qr_w + 10, qr_box_y + qr_h + 10], radius=16, fill=(255, 255, 255, 255), outline=(226, 232, 240, 255), width=2)
        card.paste(qr_img, (qr_box_x, qr_box_y), qr_img)
        
        # Description
        bbox_d = draw.textbbox((0, 0), sec["desc"], font=f_card_desc)
        draw.text((cx + (card_w - (bbox_d[2] - bbox_d[0])) // 2, qr_box_y + qr_h + 24), sec["desc"], font=f_card_desc, fill=(71, 85, 105, 255))
        
        bbox_sd = draw.textbbox((0, 0), sec["sub_desc"], font=f_sub)
        draw.text((cx + (card_w - (bbox_sd[2] - bbox_sd[0])) // 2, qr_box_y + qr_h + 58), sec["sub_desc"], font=f_sub, fill=(148, 163, 184, 255))
        
        # Scan prompt
        scan_txt = ar("امسح الكاميرا للفتح الفوري 📷")
        bbox_sc = draw.textbbox((0, 0), scan_txt, font=f_badge)
        draw.text((cx + (card_w - (bbox_sc[2] - bbox_sc[0])) // 2, qr_box_y + qr_h + 96), scan_txt, font=f_badge, fill=sec["color"])

    # Bottom Orca Tech Footer
    footer_bar_y = H - 100
    draw.rounded_rectangle([80, footer_bar_y, W - 80, footer_bar_y + 60], radius=16, fill=(15, 118, 110, 245))
    
    orca_text = ar("تطوير شركة أوركا للحلول البرمجية (Orca Tech) 🐬 • 01018671000")
    bbox_o = draw.textbbox((0, 0), orca_text, font=f_footer)
    w_o = bbox_o[2] - bbox_o[0]
    draw.text((W // 2 - w_o // 2, footer_bar_y + 14), orca_text, font=f_footer, fill=(255, 255, 255, 255))
    
    # Save image
    out_png = os.path.join(output_dir, "meraya-3qr-card.png")
    card.save(out_png, "PNG")
    print(f"[OK] System card generated at: {out_png}")
    
    # Also save in artifact directory if accessible
    artifact_dir = r"C:\Users\Dr Princa\.gemini\antigravity\brain\dabec748-18c4-4b79-b3ba-14fe0ba0608c"
    if os.path.exists(artifact_dir):
        art_png = os.path.join(artifact_dir, "meraya-3qr-card.png")
        card.save(art_png, "PNG")
        print(f"[OK] System card copied to artifacts: {art_png}")

if __name__ == "__main__":
    generate_card()
