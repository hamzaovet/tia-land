"use client";

import React, { useRef, useState, useEffect } from "react";
import { Sparkles, Palette, Undo, Trash2, Download, Save, Check, Heart, Smile } from "lucide-react";
import { sounds } from "@/lib/sounds";

const COLORS = [
  { name: "وردي باربي", hex: "#ff4081" },
  { name: "بنفسجي سحري", hex: "#a855f7" },
  { name: "أصفر ذهبي", hex: "#fbbf24" },
  { name: "سماوي أميرات", hex: "#38bdf8" },
  { name: "أخضر تفاحي", hex: "#34d399" },
  { name: "أحمر قلوب", hex: "#f43f5e" },
  { name: "أبيض ناصع", hex: "#ffffff" },
  { name: "ممحاة", hex: "eraser" },
];

const STICKERS = ["💖", "👑", "⭐", "🦄", "🎀", "🌸", "🦋", "🐱", "✨", "🍭"];

const TEMPLATES = [
  { id: "blank", name: "لوحة بيضاء حرة 🎨" },
  { id: "crown", name: "تاج الأميرات 👑" },
  { id: "unicorn", name: "يونيكورن سحري 🦄" },
  { id: "kitty", name: "قطة جميلة بفيونكة 🐱" },
  { id: "castle", name: "قصر الأحلام 🏰" },
];

export default function MagicCanvas({ onSaveArtwork }: { onSaveArtwork?: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [currentColor, setCurrentColor] = useState<string>("#ff4081");
  const [brushSize, setBrushSize] = useState<number>(10);
  const [isRainbow, setIsRainbow] = useState<boolean>(false);
  const [isGlow, setIsGlow] = useState<boolean>(true);
  const [selectedSticker, setSelectedSticker] = useState<string | null>(null);
  const [selectedTemplate, setSelectedTemplate] = useState<string>("blank");
  const [isDrawing, setIsDrawing] = useState<boolean>(false);
  const [rainbowHue, setRainbowHue] = useState<number>(0);
  const [history, setHistory] = useState<ImageData[]>([]);
  const [savedSuccess, setSavedSuccess] = useState<boolean>(false);

  useEffect(() => {
    initCanvas();
  }, []);

  const initCanvas = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Fill white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Save initial state
    setHistory([ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  const getCoordinates = (e: React.MouseEvent | React.TouchEvent) => {
    const canvas = canvasRef.current;
    if (!canvas) return { x: 0, y: 0 };
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    let clientX = 0;
    let clientY = 0;

    if ("touches" in e) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    return {
      x: (clientX - rect.left) * scaleX,
      y: (clientY - rect.top) * scaleY,
    };
  };

  const startDraw = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);

    // If sticker is selected, stamp sticker!
    if (selectedSticker) {
      sounds.playPop();
      ctx.font = "48px serif";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(selectedSticker, x, y);
      saveState();
      return;
    }

    setIsDrawing(true);
    ctx.beginPath();
    ctx.moveTo(x, y);

    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.lineWidth = brushSize;

    if (currentColor === "eraser") {
      ctx.strokeStyle = "#ffffff";
      ctx.shadowBlur = 0;
    } else if (isRainbow) {
      ctx.strokeStyle = `hsl(${rainbowHue}, 100%, 55%)`;
      ctx.shadowBlur = isGlow ? 15 : 0;
      ctx.shadowColor = `hsl(${rainbowHue}, 100%, 55%)`;
    } else {
      ctx.strokeStyle = currentColor;
      ctx.shadowBlur = isGlow ? 12 : 0;
      ctx.shadowColor = currentColor;
    }
  };

  const draw = (e: React.MouseEvent | React.TouchEvent) => {
    if (!isDrawing || selectedSticker) return;
    e.preventDefault();

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const { x, y } = getCoordinates(e);

    if (isRainbow) {
      const nextHue = (rainbowHue + 4) % 360;
      setRainbowHue(nextHue);
      ctx.strokeStyle = `hsl(${nextHue}, 100%, 55%)`;
      ctx.shadowColor = `hsl(${nextHue}, 100%, 55%)`;
    }

    ctx.lineTo(x, y);
    ctx.stroke();
  };

  const stopDraw = () => {
    if (isDrawing) {
      setIsDrawing(false);
      saveState();
    }
  };

  const saveState = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    setHistory((prev) => [...prev.slice(-15), ctx.getImageData(0, 0, canvas.width, canvas.height)]);
  };

  const handleUndo = () => {
    if (history.length <= 1) return;
    sounds.playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const newHistory = [...history];
    newHistory.pop(); // remove current
    const prev = newHistory[newHistory.length - 1];
    ctx.putImageData(prev, 0, 0);
    setHistory(newHistory);
  };

  const handleClear = () => {
    sounds.playPop();
    initCanvas();
  };

  const handleSaveToGallery = async () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    sounds.playMagicWand();
    sounds.cheerTia("art");

    const dataUrl = canvas.toDataURL("image/png");

    try {
      await fetch("/api/artworks", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: "لوحة سحرية جديدة للأميرة تيا 🎨",
          artistName: "الأميرة تيا 👑",
          imageData: dataUrl,
          stickers: selectedSticker || "magic",
        }),
      });

      setSavedSuccess(true);
      if (onSaveArtwork) onSaveArtwork();
      setTimeout(() => setSavedSuccess(false), 3500);
    } catch (e) {
      console.error(e);
    }
  };

  const handleDownload = () => {
    sounds.playPop();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const link = document.createElement("a");
    link.download = `tia-land-art-${Date.now()}.png`;
    link.href = canvas.toDataURL("image/png");
    link.click();
  };

  const drawTemplate = (templateId: string) => {
    setSelectedTemplate(templateId);
    sounds.playMagicWand();
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Reset white
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = "#475569";
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.shadowBlur = 0;

    const w = canvas.width;
    const h = canvas.height;

    if (templateId === "crown") {
      // Crown Outline
      ctx.beginPath();
      ctx.moveTo(w * 0.2, h * 0.7);
      ctx.lineTo(w * 0.8, h * 0.7);
      ctx.lineTo(w * 0.85, h * 0.4);
      ctx.lineTo(w * 0.65, h * 0.55);
      ctx.lineTo(w * 0.5, h * 0.3);
      ctx.lineTo(w * 0.35, h * 0.55);
      ctx.lineTo(w * 0.15, h * 0.4);
      ctx.closePath();
      ctx.stroke();

      // Jewels circles
      [w * 0.15, w * 0.5, w * 0.85].forEach((cx, idx) => {
        ctx.beginPath();
        ctx.arc(cx, idx === 1 ? h * 0.26 : h * 0.36, 12, 0, Math.PI * 2);
        ctx.stroke();
      });
    } else if (templateId === "unicorn") {
      // Unicorn head simple cartoon outline
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.5, 90, 0, Math.PI * 2); // face
      ctx.stroke();
      // Horn
      ctx.beginPath();
      ctx.moveTo(w * 0.45, h * 0.35);
      ctx.lineTo(w * 0.5, h * 0.15);
      ctx.lineTo(w * 0.55, h * 0.35);
      ctx.closePath();
      ctx.stroke();
      // Eye & Smile
      ctx.beginPath();
      ctx.arc(w * 0.55, h * 0.48, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.58, 25, 0, Math.PI);
      ctx.stroke();
    } else if (templateId === "kitty") {
      // Kitty Face
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.52, 95, 0, Math.PI * 2);
      ctx.stroke();
      // Ears
      ctx.beginPath();
      ctx.moveTo(w * 0.35, h * 0.35);
      ctx.lineTo(w * 0.3, h * 0.2);
      ctx.lineTo(w * 0.45, h * 0.28);
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.65, h * 0.35);
      ctx.lineTo(w * 0.7, h * 0.2);
      ctx.lineTo(w * 0.55, h * 0.28);
      ctx.stroke();

      // Bow
      ctx.fillStyle = "#ff69b4";
      ctx.font = "40px serif";
      ctx.fillText("🎀", w * 0.62, h * 0.3);
      ctx.fillStyle = "#000000";

      // Eyes & Whiskers
      ctx.beginPath();
      ctx.arc(w * 0.42, h * 0.5, 6, 0, Math.PI * 2);
      ctx.arc(w * 0.58, h * 0.5, 6, 0, Math.PI * 2);
      ctx.fill();

      ctx.beginPath();
      ctx.ellipse(w * 0.5, h * 0.56, 8, 5, 0, 0, Math.PI * 2);
      ctx.fillStyle = "#fbbf24";
      ctx.fill();
    } else if (templateId === "castle") {
      // Castle
      ctx.strokeRect(w * 0.25, h * 0.45, w * 0.5, h * 0.35); // main body
      ctx.strokeRect(w * 0.15, h * 0.35, w * 0.15, h * 0.45); // tower left
      ctx.strokeRect(w * 0.7, h * 0.35, w * 0.15, h * 0.45); // tower right
      // Cones
      ctx.beginPath();
      ctx.moveTo(w * 0.15, h * 0.35);
      ctx.lineTo(w * 0.225, h * 0.2);
      ctx.lineTo(w * 0.3, h * 0.35);
      ctx.closePath();
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(w * 0.7, h * 0.35);
      ctx.lineTo(w * 0.775, h * 0.2);
      ctx.lineTo(w * 0.85, h * 0.35);
      ctx.closePath();
      ctx.stroke();

      // Door
      ctx.beginPath();
      ctx.arc(w * 0.5, h * 0.7, 30, Math.PI, 0);
      ctx.lineTo(w * 0.56, h * 0.8);
      ctx.lineTo(w * 0.44, h * 0.8);
      ctx.closePath();
      ctx.stroke();
    }

    saveState();
  };

  return (
    <div className="relative bg-white/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-xl border-4 border-pink-300">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-pink-100 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-pink-100 text-pink-600 rounded-2xl shadow-inner">
            <Palette className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-pink-700">
              مرسم تيا السحري وألوان الأميرات 🎨✨
            </h2>
            <p className="text-xs text-pink-500 font-bold">
              لوني، ارسمي بألوان قوس قزح، وحطي استيكرز سحرية!
            </p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleSaveToGallery}
            className="flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 text-white font-black px-3.5 py-2 rounded-2xl shadow-md active:scale-95 transition text-xs sm:text-sm"
          >
            <Save className="w-4 h-4" />
            <span>حفظ اللوحة 💖</span>
          </button>
          <button
            onClick={handleDownload}
            className="p-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-2xl border border-pink-200 active:scale-95 transition"
            title="تحميل الصورة على الموبايل"
          >
            <Download className="w-4 h-4" />
          </button>
          <button
            onClick={handleUndo}
            className="p-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-2xl border border-pink-200 active:scale-95 transition"
            title="تراجع"
          >
            <Undo className="w-4 h-4" />
          </button>
          <button
            onClick={handleClear}
            className="p-2 bg-rose-50 hover:bg-rose-100 text-rose-600 rounded-2xl border border-rose-200 active:scale-95 transition"
            title="مسح اللوحة بالكامل"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {savedSuccess && (
        <div className="mb-4 bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm font-bold px-4 py-2.5 rounded-2xl flex items-center justify-between animate-bounce">
          <span>🎨 يا جمالك يا تيا! اللوحة السحرية اتحفظت في معرض رسوماتك بنجاح!</span>
          <Check className="w-5 h-5 text-emerald-600" />
        </div>
      )}

      {/* Templates Selector */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 mb-3">
        <span className="text-xs font-black text-pink-600 shrink-0">اختر صفحة التلوين:</span>
        {TEMPLATES.map((t) => (
          <button
            key={t.id}
            onClick={() => drawTemplate(t.id)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold shrink-0 transition active:scale-95 border ${
              selectedTemplate === t.id
                ? "bg-pink-500 text-white border-pink-500 shadow-sm"
                : "bg-pink-50 text-pink-700 border-pink-200 hover:bg-pink-100"
            }`}
          >
            {t.name}
          </button>
        ))}
      </div>

      {/* Main Canvas + Tools Area */}
      <div className="flex flex-col lg:flex-row gap-4 items-center justify-center">
        {/* Canvas Element */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-300 bg-white touch-none">
          <canvas
            ref={canvasRef}
            width={600}
            height={420}
            onMouseDown={startDraw}
            onMouseMove={draw}
            onMouseUp={stopDraw}
            onMouseLeave={stopDraw}
            onTouchStart={startDraw}
            onTouchMove={draw}
            onTouchEnd={stopDraw}
            className="w-full max-w-[560px] h-[360px] sm:h-[420px] block cursor-crosshair"
          />
        </div>

        {/* Tools Palette (Right / Bottom) */}
        <div className="w-full lg:w-64 bg-pink-50/80 rounded-3xl p-4 border-2 border-pink-200 flex flex-col gap-4">
          {/* Colors Selection */}
          <div>
            <span className="text-xs font-black text-pink-700 block mb-2">الألوان السحرية 🎨</span>
            <div className="grid grid-cols-4 gap-2">
              {COLORS.map((c) => (
                <button
                  key={c.hex}
                  onClick={() => {
                    sounds.playPop();
                    setSelectedSticker(null);
                    setIsRainbow(false);
                    setCurrentColor(c.hex);
                  }}
                  className={`h-9 rounded-xl border-2 flex items-center justify-center transition active:scale-90 ${
                    currentColor === c.hex && !isRainbow && !selectedSticker
                      ? "ring-2 ring-pink-500 scale-105 border-white shadow-md"
                      : "border-pink-200"
                  }`}
                  style={{
                    backgroundColor: c.hex === "eraser" ? "#ffffff" : c.hex,
                  }}
                  title={c.name}
                >
                  {c.hex === "eraser" ? (
                    <span className="text-xs font-bold text-slate-700">ممحاة</span>
                  ) : null}
                </button>
              ))}
            </div>
          </div>

          {/* Rainbow & Glow Toggles */}
          <div className="flex gap-2">
            <button
              onClick={() => {
                sounds.playMagicWand();
                setSelectedSticker(null);
                setIsRainbow(!isRainbow);
              }}
              className={`flex-1 py-2 px-2 rounded-xl text-xs font-black border transition active:scale-95 flex items-center justify-center gap-1 ${
                isRainbow
                  ? "bg-gradient-to-r from-red-400 via-yellow-400 to-pink-500 text-white shadow-md"
                  : "bg-white text-pink-700 border-pink-200 hover:bg-pink-100"
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>فرشاة قوس قزح 🌈</span>
            </button>

            <button
              onClick={() => {
                sounds.playPop();
                setIsGlow(!isGlow);
              }}
              className={`py-2 px-3 rounded-xl text-xs font-black border transition active:scale-95 ${
                isGlow
                  ? "bg-amber-400 text-amber-900 border-amber-300 shadow-sm"
                  : "bg-white text-slate-600 border-slate-200"
              }`}
            >
              لمعان ✨
            </button>
          </div>

          {/* Brush Sizes */}
          <div>
            <span className="text-xs font-black text-pink-700 block mb-1">حجم الفرشاة:</span>
            <div className="flex gap-2">
              {[
                { size: 5, label: "رفيع" },
                { size: 12, label: "وسط" },
                { size: 24, label: "عريض" },
              ].map((b) => (
                <button
                  key={b.size}
                  onClick={() => {
                    sounds.playPop();
                    setBrushSize(b.size);
                  }}
                  className={`flex-1 py-1.5 rounded-xl text-xs font-bold border transition ${
                    brushSize === b.size
                      ? "bg-pink-500 text-white border-pink-500 shadow-sm"
                      : "bg-white text-pink-700 border-pink-200 hover:bg-pink-100"
                  }`}
                >
                  {b.label}
                </button>
              ))}
            </div>
          </div>

          {/* Cute Stickers Stamp */}
          <div>
            <span className="text-xs font-black text-pink-700 block mb-1.5">
              ستيكرز وتيجان (اضغطي واختمي في اللوحة) 💖:
            </span>
            <div className="flex flex-wrap gap-1.5">
              {STICKERS.map((s) => (
                <button
                  key={s}
                  onClick={() => {
                    sounds.playPop();
                    setSelectedSticker(s);
                  }}
                  className={`w-9 h-9 text-xl rounded-xl flex items-center justify-center transition active:scale-90 border ${
                    selectedSticker === s
                      ? "bg-pink-500 ring-2 ring-pink-400 scale-110 border-white shadow-md"
                      : "bg-white hover:bg-pink-100 border-pink-200"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
