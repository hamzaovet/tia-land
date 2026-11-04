import os
from PIL import Image, ImageDraw, ImageOps

res_dir = r"D:\Work\tia-land\android\app\src\main\res"
public_dir = r"D:\Work\tia-land\public"
source_photo = os.path.join(public_dir, "tia.jpg")

im = Image.open(source_photo).convert("RGBA")
w, h = im.size

# Crop square centered on Tia's face (top portion has the cute ears and bow)
min_dim = min(w, h)
# Shift crop slightly towards top to keep the cat ears & bow
left = (w - min_dim) // 2
top = max(0, int(h * 0.05))
right = left + min_dim
bottom = top + min_dim
if bottom > h:
    bottom = h
    top = bottom - min_dim

cropped = im.crop((left, top, right, bottom))

# Master Icon Generator (512x512)
master_size = 512
master_icon = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))

# Circular Mask
mask = Image.new("L", (master_size, master_size), 0)
draw_mask = ImageDraw.Draw(mask)
draw_mask.ellipse((16, 16, master_size - 16, master_size - 16), fill=255)

# Resize cropped photo
photo_resized = cropped.resize((master_size - 32, master_size - 32), Image.Resampling.LANCZOS)

# Create background pink circle
bg = Image.new("RGBA", (master_size, master_size), (0, 0, 0, 0))
draw_bg = ImageDraw.Draw(bg)
draw_bg.ellipse((8, 8, master_size - 8, master_size - 8), fill=(255, 64, 129, 255), outline=(251, 191, 36, 255), width=16)

# Paste photo with mask
bg.paste(photo_resized, (16, 16), mask.crop((16, 16, master_size - 16, master_size - 16)))

# Outer golden ring
draw_final = ImageDraw.Draw(bg)
draw_final.ellipse((6, 6, master_size - 6, master_size - 6), outline=(255, 215, 0, 255), width=8)

master_icon = bg
master_icon.save(os.path.join(public_dir, "app-icon.png"))
master_icon.convert("RGB").save(os.path.join(public_dir, "app-icon.jpg"), "JPEG")

# Generate Mipmap densities
densities = {
    "mipmap-mdpi": (48, 108),
    "mipmap-hdpi": (72, 162),
    "mipmap-xhdpi": (96, 216),
    "mipmap-xxhdpi": (144, 324),
    "mipmap-xxxhdpi": (192, 432),
}

for folder, (icon_sz, fg_sz) in densities.items():
    target_dir = os.path.join(res_dir, folder)
    os.makedirs(target_dir, exist_ok=True)

    # ic_launcher & ic_launcher_round
    ic = master_icon.resize((icon_sz, icon_sz), Image.Resampling.LANCZOS)
    ic.save(os.path.join(target_dir, "ic_launcher.png"))
    ic.save(os.path.join(target_dir, "ic_launcher_round.png"))

    # ic_launcher_foreground (adaptive icon foreground with padding)
    fg = Image.new("RGBA", (fg_sz, fg_sz), (0, 0, 0, 0))
    # Paste scaled icon in center (about 72% of foreground size)
    inner_sz = int(fg_sz * 0.72)
    inner_ic = master_icon.resize((inner_sz, inner_sz), Image.Resampling.LANCZOS)
    offset = (fg_sz - inner_sz) // 2
    fg.paste(inner_ic, (offset, offset), inner_ic)
    fg.save(os.path.join(target_dir, "ic_launcher_foreground.png"))
    print(f"Generated {folder}: {icon_sz}x{icon_sz} and fg {fg_sz}x{fg_sz}")

# Splash screen images
drawable_dirs = [
    "drawable",
    "drawable-land-hdpi",
    "drawable-land-mdpi",
    "drawable-land-xhdpi",
    "drawable-land-xxhdpi",
    "drawable-land-xxxhdpi",
    "drawable-port-hdpi",
    "drawable-port-mdpi",
    "drawable-port-xhdpi",
    "drawable-port-xxhdpi",
    "drawable-port-xxxhdpi",
]

for d in drawable_dirs:
    target_dir = os.path.join(res_dir, d)
    if os.path.exists(target_dir):
        # Create a sweet splash with pink bg and Tia icon
        splash_icon = master_icon.resize((256, 256), Image.Resampling.LANCZOS)
        splash_icon.save(os.path.join(target_dir, "splash.png"))

print("All Android launcher icons and splash images updated with Princess Tia's official photo!")
