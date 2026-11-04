import os
import base64
import subprocess
import shutil
import qrcode
from io import BytesIO
from PIL import Image

base_dir = r"D:\Work\tia-land"
public_dir = os.path.join(base_dir, "public")
artifact_dir = r"C:\Users\Dr Princa\.gemini\antigravity\brain\2d9d53fe-6b03-4ac8-8878-725378cea44d"

os.makedirs(public_dir, exist_ok=True)
os.makedirs(artifact_dir, exist_ok=True)

web_url = "https://tia-land.vercel.app"
apk_url = "https://tia-land.vercel.app/api/download/apk"

# Web QR - high contrast crisp royal pink
qr_web = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=1,
)
qr_web.add_data(web_url)
qr_web.make(fit=True)
img_web = qr_web.make_image(fill_color="#9d174d", back_color="#ffffff")
buf_web = BytesIO()
img_web.save(buf_web, format="PNG")
web_qr_b64 = base64.b64encode(buf_web.getvalue()).decode("ascii")

# APK QR - high contrast crisp deep magenta
qr_apk = qrcode.QRCode(
    version=None,
    error_correction=qrcode.constants.ERROR_CORRECT_H,
    box_size=12,
    border=1,
)
qr_apk.add_data(apk_url)
qr_apk.make(fit=True)
img_apk = qr_apk.make_image(fill_color="#831843", back_color="#ffffff")
buf_apk = BytesIO()
img_apk.save(buf_apk, format="PNG")
apk_qr_b64 = base64.b64encode(buf_apk.getvalue()).decode("ascii")

img_web.save(os.path.join(public_dir, "tia-web-qr.png"))
img_apk.save(os.path.join(public_dir, "tia-apk-qr.png"))

# Read Tia Photo
photo_path = os.path.join(public_dir, "tia.jpg")
photo_b64 = ""
if os.path.exists(photo_path):
    with open(photo_path, "rb") as f:
        photo_b64 = base64.b64encode(f.read()).decode("ascii")

html_content = f"""<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
  <meta charset="UTF-8">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800;900&family=Fredoka:wght@600;700&display=swap" rel="stylesheet">
  <style>
    * {{
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }}
    html, body {{
      width: 1200px;
      height: 680px;
      margin: 0;
      padding: 0;
      background: #ffe4ec;
      font-family: 'Cairo', sans-serif;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }}
    .card-wrapper {{
      width: 1140px;
      height: 620px;
      position: relative;
      background: radial-gradient(circle at 10% 20%, #ffffff 0%, #fff0f5 35%, #fce7f3 70%, #fbcfe8 100%);
      border-radius: 40px;
      border: 6px solid #f472b6;
      box-shadow: 0 25px 60px rgba(244, 114, 182, 0.35), inset 0 0 30px rgba(255, 255, 255, 0.8);
      padding: 30px 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      overflow: hidden;
    }}
    /* Background sparkling ornaments */
    .sparkle-decor {{
      position: absolute;
      pointer-events: none;
      opacity: 0.25;
      font-size: 80px;
    }}
    .sd1 {{ top: 20px; left: 30px; }}
    .sd2 {{ bottom: 30px; right: 40px; }}
    .sd3 {{ top: 40px; right: 50%; }}

    /* Header Bar */
    .header-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-bottom: 2px dashed #f472b6;
      padding-bottom: 15px;
      z-index: 2;
    }}
    .brand-title {{
      display: flex;
      align-items: center;
      gap: 12px;
    }}
    .brand-text-ar {{
      font-size: 32px;
      font-weight: 900;
      color: #db2777;
      line-height: 1.1;
      text-shadow: 0 2px 4px rgba(219, 39, 119, 0.2);
    }}
    .brand-text-en {{
      font-family: 'Fredoka', cursive;
      font-size: 20px;
      font-weight: 700;
      color: #9333ea;
      letter-spacing: 1px;
    }}
    .vip-tag {{
      background: linear-gradient(135deg, #ec4899, #db2777);
      color: #ffffff;
      padding: 8px 22px;
      border-radius: 9999px;
      font-size: 16px;
      font-weight: 800;
      box-shadow: 0 4px 15px rgba(219, 39, 119, 0.3);
      display: flex;
      align-items: center;
      gap: 8px;
    }}

    /* Main Body Grid */
    .body-content {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 30px;
      margin: 15px 0;
      z-index: 2;
    }}

    /* Tia Profile Box (Right / Center) */
    .profile-section {{
      flex: 1.1;
      display: flex;
      align-items: center;
      gap: 24px;
      background: rgba(255, 255, 255, 0.85);
      border: 3px solid #fbcfe8;
      border-radius: 30px;
      padding: 20px 24px;
      box-shadow: 0 10px 25px rgba(244, 114, 182, 0.15);
    }}
    .photo-container {{
      position: relative;
      width: 140px;
      height: 140px;
      flex-shrink: 0;
    }}
    .photo-frame {{
      width: 140px;
      height: 140px;
      border-radius: 50%;
      overflow: hidden;
      border: 5px solid #ec4899;
      box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
      background: #ffe4ec;
    }}
    .photo-frame img {{
      width: 100%;
      height: 100%;
      object-fit: cover;
    }}
    .crown-badge {{
      position: absolute;
      top: -12px;
      right: -8px;
      background: #fbbf24;
      border: 3px solid #ffffff;
      border-radius: 50%;
      width: 44px;
      height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    }}
    .info-box h2 {{
      font-size: 26px;
      font-weight: 900;
      color: #9d174d;
      margin-bottom: 4px;
    }}
    .info-box p {{
      font-size: 14px;
      font-weight: 700;
      color: #7e22ce;
      margin-bottom: 10px;
    }}
    .pill-tags {{
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }}
    .pill {{
      background: #fdf2f8;
      border: 1.5px solid #f472b6;
      color: #be185d;
      font-size: 12px;
      font-weight: 800;
      padding: 3px 12px;
      border-radius: 9999px;
    }}

    /* Two QR Codes Section */
    .qr-container {{
      display: flex;
      gap: 20px;
      flex: 1.2;
      justify-content: flex-end;
    }}
    .qr-box {{
      background: #ffffff;
      border-radius: 26px;
      padding: 16px 18px;
      border: 3px solid #f472b6;
      box-shadow: 0 10px 25px rgba(219, 39, 119, 0.15);
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      width: 215px;
    }}
    .qr-badge {{
      padding: 4px 14px;
      border-radius: 9999px;
      color: #ffffff;
      font-size: 13px;
      font-weight: 800;
      margin-bottom: 10px;
      width: 100%;
    }}
    .qr-badge.web {{
      background: linear-gradient(135deg, #db2777, #ec4899);
    }}
    .qr-badge.apk {{
      background: linear-gradient(135deg, #7c3aed, #a855f7);
    }}
    .qr-img-wrap {{
      width: 135px;
      height: 135px;
      padding: 6px;
      background: #ffffff;
      border: 2px solid #fbcfe8;
      border-radius: 18px;
      margin-bottom: 8px;
    }}
    .qr-img-wrap img {{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }}
    .qr-sub {{
      font-size: 11px;
      font-weight: 800;
      color: #6b21a8;
      line-height: 1.3;
    }}

    /* Footer Bar */
    .footer-bar {{
      display: flex;
      align-items: center;
      justify-content: space-between;
      border-top: 2px dashed #f472b6;
      padding-top: 14px;
      z-index: 2;
    }}
    .pin-reminder {{
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 14px;
      font-weight: 800;
      color: #9d174d;
      background: #ffffff;
      padding: 6px 18px;
      border-radius: 9999px;
      border: 2px solid #fbcfe8;
    }}
    .pin-code-highlight {{
      background: #f43f5e;
      color: #ffffff;
      padding: 2px 10px;
      border-radius: 8px;
      font-family: 'Fredoka', cursive;
      font-size: 16px;
      letter-spacing: 2px;
    }}
    .orca-watermark {{
      font-size: 13px;
      font-weight: 800;
      color: #be185d;
      display: flex;
      align-items: center;
      gap: 6px;
    }}
  </style>
</head>
<body>
  <div class="card-wrapper">
    <!-- Decors -->
    <div class="sparkle-decor sd1">✨</div>
    <div class="sparkle-decor sd2">💖</div>
    <div class="sparkle-decor sd3">👑</div>

    <!-- Header -->
    <div class="header-bar">
      <div class="brand-title">
        <span style="font-size: 34px;">👑</span>
        <div>
          <div class="brand-text-ar">أرض تيا السحرية</div>
          <div class="brand-text-en">TIA LAND PRINCESS WORLD</div>
        </div>
      </div>
      <div class="vip-tag">
        <span>✨</span>
        <span>بطاقة الدعوة الرسمية VIP</span>
        <span>💖</span>
      </div>
    </div>

    <!-- Body -->
    <div class="body-content">
      <!-- Profile -->
      <div class="profile-section">
        <div class="photo-container">
          <div class="photo-frame">
            <img src="data:image/jpeg;base64,{photo_b64}" alt="Tia">
          </div>
          <div class="crown-badge">👑</div>
        </div>
        <div class="info-box">
          <h2>الأميرة تيا 💖</h2>
          <p>أرض الألعاب والسحر والأزياء (6 سنوات)</p>
          <div class="pill-tags">
            <span class="pill">🎨 مرسم تيا والتلوين</span>
            <span class="pill">👗 استوديو أزياء الأميرات</span>
            <span class="pill">🎹 بيانو وأغاني لذيذة</span>
            <span class="pill">🧠 لعبة تطابق الذاكرة</span>
          </div>
        </div>
      </div>

      <!-- QR Codes (Two codes side by side) -->
      <div class="qr-container">
        <!-- QR 1: Web -->
        <div class="qr-box">
          <div class="qr-badge web">🌐 اللعب أونلاين</div>
          <div class="qr-img-wrap">
            <img src="data:image/png;base64,{web_qr_b64}" alt="Web QR">
          </div>
          <div class="qr-sub">امسحي بالكاميرا<br>والعبي فوراً بالمتصفح</div>
        </div>

        <!-- QR 2: APK Download -->
        <div class="qr-box">
          <div class="qr-badge apk">📲 تحميل الأبلكيشن APK</div>
          <div class="qr-img-wrap">
            <img src="data:image/png;base64,{apk_qr_b64}" alt="APK QR">
          </div>
          <div class="qr-sub">تحميل تطبيق تيا<br>على الموبايل (أندرويد)</div>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="footer-bar">
      <div class="pin-reminder">
        <span>🔐 كود النادي السري:</span>
        <span class="pin-code-highlight">tia</span>
      </div>
      <div class="orca-watermark">
        <span>💖 تم التطوير بواسطة شركة أوركا لتقنية المعلومات — 01018671000</span>
      </div>
    </div>
  </div>
</body>
</html>
"""

html_path = os.path.join(public_dir, "card_render.html")
with open(html_path, "w", encoding="utf-8") as f:
    f.write(html_content)

chrome_candidates = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
    r"C:\Program Files\Microsoft\Edge\Application\msedge.exe",
]
chrome_bin = None
for c in chrome_candidates:
    if os.path.exists(c):
        chrome_bin = c
        break

out_png = os.path.join(public_dir, "tia-official-card.png")
root_png = os.path.join(base_dir, "tia-official-card.png")
artifact_png = os.path.join(artifact_dir, "tia-official-card.png")

if chrome_bin:
    raw_shot = os.path.join(public_dir, "raw_card_shot.png")
    cmd = [
        chrome_bin,
        "--headless=new",
        "--disable-gpu",
        "--hide-scrollbars",
        "--window-size=1200,680",
        f"--screenshot={raw_shot}",
        f"file:///{html_path.replace(os.sep, '/')}",
    ]
    res = subprocess.run(cmd, capture_output=True, text=True)
    if os.path.exists(raw_shot):
        raw_im = Image.open(raw_shot)
        final_im = raw_im.crop((0, 0, 1200, 680))
        final_im.save(out_png)
        final_im.save(root_png)
        final_im.save(artifact_png)
        try:
            os.remove(raw_shot)
        except Exception:
            pass
        print("Successfully generated VIP card at:", out_png)
        print("Copied to artifact at:", artifact_png)
    else:
        print("Screenshot not produced, error:", res.stderr)
else:
    print("Browser not found!")
