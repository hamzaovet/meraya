import os
import math
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import arabic_reshaper
from bidi.algorithm import get_display

def ar(text):
    reshaped = arabic_reshaper.reshape(text)
    return get_display(reshaped)

def create_brand_assets():
    base_dir = r"D:\Work\meraya\public"
    icons_dir = os.path.join(base_dir, "icons")
    os.makedirs(icons_dir, exist_ok=True)
    
    # 1024x1024 Canvas
    size = 1024
    img = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    draw = ImageDraw.Draw(img)
    
    # Light luxury background with subtle radial warm glow
    cx, cy = size // 2, size // 2 - 40
    
    # Background subtle circles
    for r in range(480, 200, -20):
        alpha = int(12 * (1 - r / 480))
        draw.ellipse([cx - r, cy - r, cx + r, cy + r], fill=(15, 118, 110, alpha))
        
    # Fonts
    font_path = "C:\\Windows\\Fonts\\tahoma.ttf"
    font_bold = "C:\\Windows\\Fonts\\tahomabd.ttf"
    font_arial = "C:\\Windows\\Fonts\\arialbd.ttf"
    
    font_ar = ImageFont.truetype(font_bold, 88)
    font_en = ImageFont.truetype(font_arial, 42)
    font_sub = ImageFont.truetype(font_path, 26)
    
    # Draw Mirror Frame
    # Outer gold arch / mirror
    # Arch top + rounded bottom
    # Center of mirror: (cx, cy - 60), radius ~ 220
    m_cx, m_cy = cx, cy - 80
    mw, mh = 210, 270
    
    # Glow around mirror
    for i in range(15, 0, -1):
        color = (217, 119, 6, int(18 - i))
        draw.rounded_rectangle([m_cx - mw - i*2, m_cy - mh - i*2, m_cx + mw + i*2, m_cy + mh + i*2], radius=180, outline=color, width=3)
        
    # Main outer border (Gold/Teal gradient simulation)
    draw.rounded_rectangle([m_cx - mw, m_cy - mh, m_cx + mw, m_cy + mh], radius=160, outline=(217, 119, 6, 255), width=10)
    draw.rounded_rectangle([m_cx - mw + 14, m_cy - mh + 14, m_cx + mw - 14, m_cy + mh - 14], radius=150, outline=(15, 118, 110, 230), width=6)
    
    # Mirror inner surface (soft cyan/teal wash)
    draw.rounded_rectangle([m_cx - mw + 20, m_cy - mh + 20, m_cx + mw - 20, m_cy + mh - 20], radius=140, fill=(240, 253, 250, 255))
    
    # Reflection arc / sheen inside mirror
    draw.arc([m_cx - mw + 35, m_cy - mh + 35, m_cx + mw - 70, m_cy + mh - 70], start=210, end=330, fill=(255, 255, 255, 200), width=16)
    draw.arc([m_cx - mw + 55, m_cy - mh + 55, m_cx + mw - 110, m_cy + mh - 110], start=215, end=300, fill=(255, 255, 255, 160), width=8)

    # Stylized central emblem: Scissors & Mirror handle / Comb motif
    # Cross styling shears in elegant gold & teal
    # Left blade & handle
    draw.line([m_cx - 70, m_cy + 90, m_cx + 50, m_cy - 70], fill=(15, 118, 110, 255), width=10)
    draw.line([m_cx + 70, m_cy + 90, m_cx - 50, m_cy - 70], fill=(217, 119, 6, 255), width=10)
    
    # Pivot screw
    draw.ellipse([m_cx - 14, m_cy + 10 - 14, m_cx + 14, m_cy + 10 + 14], fill=(217, 119, 6, 255), outline=(255, 255, 255, 255), width=4)
    draw.ellipse([m_cx - 6, m_cy + 10 - 6, m_cx + 6, m_cy + 10 + 6], fill=(15, 118, 110, 255))
    
    # Shears finger loops (circles at bottom)
    draw.ellipse([m_cx - 105, m_cy + 80, m_cx - 55, m_cy + 130], outline=(15, 118, 110, 255), width=8)
    draw.ellipse([m_cx + 55, m_cy + 80, m_cx + 105, m_cy + 130], outline=(217, 119, 6, 255), width=8)
    
    # Sparkle stars around mirror
    def draw_star(sx, sy, r, color):
        points = []
        for a in range(8):
            ang = a * math.pi / 4
            rad = r if a % 2 == 0 else r * 0.35
            points.append((sx + rad * math.cos(ang), sy + rad * math.sin(ang)))
        draw.polygon(points, fill=color)
        
    draw_star(m_cx + mw - 20, m_cy - mh + 50, 24, (217, 119, 6, 255))
    draw_star(m_cx - mw + 30, m_cy - 40, 18, (15, 118, 110, 230))
    draw_star(m_cx + mw - 40, m_cy + 80, 16, (217, 119, 6, 220))
    draw_star(m_cx, m_cy - mh - 25, 20, (217, 119, 6, 255))
    
    # Base stand / Pedestal of mirror
    draw.polygon([
        (m_cx - 50, m_cy + mh),
        (m_cx + 50, m_cy + mh),
        (m_cx + 90, m_cy + mh + 35),
        (m_cx - 90, m_cy + mh + 35)
    ], fill=(217, 119, 6, 255))
    draw.rounded_rectangle([m_cx - 110, m_cy + mh + 35, m_cx + 110, m_cy + mh + 50], radius=8, fill=(15, 118, 110, 255))
    
    # Typography
    # Arabic: مراية
    txt_ar = ar("مراية")
    bbox_ar = draw.textbbox((0, 0), txt_ar, font=font_ar)
    w_ar = bbox_ar[2] - bbox_ar[0]
    draw.text((cx - w_ar // 2, m_cy + mh + 70), txt_ar, font=font_ar, fill=(15, 118, 110, 255))
    
    # Decorative line with gold diamond
    line_y = m_cy + mh + 175
    draw.line([cx - 160, line_y, cx - 25, line_y], fill=(217, 119, 6, 200), width=3)
    draw.line([cx + 25, line_y, cx + 160, line_y], fill=(217, 119, 6, 200), width=3)
    draw_star(cx, line_y, 12, (217, 119, 6, 255))
    
    # English: MERAYA
    txt_en = "M E R A Y A"
    bbox_en = draw.textbbox((0, 0), txt_en, font=font_en)
    w_en = bbox_en[2] - bbox_en[0]
    draw.text((cx - w_en // 2, line_y + 12), txt_en, font=font_en, fill=(217, 119, 6, 255))
    
    # Subtitle: SALONS & BEAUTY PLATFORM
    txt_sub = ar("منصة صالونات الحلاقة والتجميل الأولى")
    bbox_sub = draw.textbbox((0, 0), txt_sub, font=font_sub)
    w_sub = bbox_sub[2] - bbox_sub[0]
    draw.text((cx - w_sub // 2, line_y + 65), txt_sub, font=font_sub, fill=(100, 116, 139, 255))

    # Save 1024x1024 logo
    logo_png_path = os.path.join(base_dir, "logo.png")
    img.save(logo_png_path, "PNG")
    
    logo_jpg_path = os.path.join(base_dir, "logo.jpg")
    img.convert("RGB").save(logo_jpg_path, "JPEG", quality=95)
    
    # App Icons Generation
    # For app icons: crop or fit the mirror emblem nicely centered in a rounded square
    icon_canvas = Image.new("RGBA", (size, size), (255, 255, 255, 255))
    ic_draw = ImageDraw.Draw(icon_canvas)
    
    # Soft background gradient
    for y in range(size):
        ratio = y / size
        r = int(240 * (1 - ratio) + 255 * ratio)
        g = int(253 * (1 - ratio) + 250 * ratio)
        b = int(250 * (1 - ratio) + 240 * ratio)
        ic_draw.line([(0, y), (size, y)], fill=(r, g, b, 255))
        
    # Paste logo scaled inside icon
    icon_canvas.paste(img, (0, 0), img)
    
    # Export 512x512
    icon_512 = icon_canvas.resize((512, 512), Image.Resampling.LANCZOS)
    icon_512.save(os.path.join(icons_dir, "icon-512.png"), "PNG")
    
    # Export 192x192
    icon_192 = icon_canvas.resize((192, 192), Image.Resampling.LANCZOS)
    icon_192.save(os.path.join(icons_dir, "icon-192.png"), "PNG")
    
    # Apple touch icon 180x180
    icon_180 = icon_canvas.resize((180, 180), Image.Resampling.LANCZOS)
    icon_180.save(os.path.join(base_dir, "apple-touch-icon.png"), "PNG")
    
    # Favicon.png
    icon_64 = icon_canvas.resize((64, 64), Image.Resampling.LANCZOS)
    icon_64.save(os.path.join(base_dir, "favicon.png"), "PNG")
    
    # Multi-resolution favicon.ico
    icon_sizes = [(16, 16), (32, 32), (48, 48), (64, 64), (128, 128)]
    ico_imgs = [icon_canvas.resize(s, Image.Resampling.LANCZOS) for s in icon_sizes]
    ico_imgs[0].save(os.path.join(base_dir, "favicon.ico"), format="ICO", sizes=icon_sizes)
    
    print("[OK] All branding assets generated successfully!")

if __name__ == "__main__":
    create_brand_assets()
