"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, Crown, Wand2, Camera, Heart, Check, RefreshCw } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface FashionLook {
  dress: string;
  crown: string;
  wings: string;
  accessory: string;
  background: string;
}

const DRESSES = [
  { id: "pink_ballgown", name: "فستان الأميرات الوردي 🌸", color: "from-pink-400 to-rose-500", glow: "#ff4081", style: "ballgown" },
  { id: "lavender_fairy", name: "فستان الجنية البنفسجي 💜", color: "from-purple-400 to-indigo-500", glow: "#a855f7", style: "fairy" },
  { id: "ice_queen", name: "فستان ملكة الثلج ❄️", color: "from-cyan-400 to-blue-500", glow: "#38bdf8", style: "ice" },
  { id: "golden_sunshine", name: "فستان الشمس الذهبي ☀️", color: "from-amber-300 to-yellow-500", glow: "#fbbf24", style: "gold" },
  { id: "ruby_star", name: "فستان النجوم الياقوتي ❤️", color: "from-red-400 to-pink-600", glow: "#f43f5e", style: "ruby" },
];

const CROWNS = [
  { id: "gold_tiara", name: "تاج ذهبي مرصع بالألماس 👑", icon: "👑" },
  { id: "pink_bow", name: "فيونكة كيتي الوردية 🎀", icon: "🎀" },
  { id: "flower_wreath", name: "طوق زهور الربيع 🌸", icon: "🌸" },
  { id: "crystal_star", name: "تاج النجمة المتلألئة ⭐", icon: "⭐" },
  { id: "butterfly_clip", name: "فراشة وردية براقة 🦋", icon: "🦋" },
];

const WINGS = [
  { id: "none", name: "بدون أجنحة 👗", icon: "✨" },
  { id: "fairy_pink", name: "أجنحة الجنية الوردية 🧚‍♀️", icon: "🧚‍♀️" },
  { id: "butterfly_glow", name: "أجنحة فراشة النور 🦋", icon: "🦋" },
  { id: "angel_wings", name: "أجنحة الملاك البيضاء 🪽", icon: "🪽" },
];

const ACCESSORIES = [
  { id: "wand", name: "عصا النجمة السحرية 🪄", icon: "🪄" },
  { id: "kitty_bag", name: "شنطة كيتي الأنيقة 👜", icon: "👜" },
  { id: "heart_shades", name: "نظارة القلوب الوردية 🕶️", icon: "🕶️" },
  { id: "bouquet", name: "باقة ورود الأميرات 💐", icon: "💐" },
  { id: "magic_ring", name: "خاتم الألماس السحري 💍", icon: "💍" },
];

const BACKGROUNDS = [
  { id: "castle", name: "قصر الأحلام 🏰", gradient: "from-pink-200 via-purple-200 to-pink-300" },
  { id: "magic_forest", name: "غابة الجنيات 🌳", gradient: "from-emerald-200 via-teal-100 to-pink-200" },
  { id: "starlight_stage", name: "مسرح النجوم 🌟", gradient: "from-indigo-900 via-purple-900 to-pink-900", dark: true },
  { id: "rainbow_sky", name: "سماء قوس قزح 🌈", gradient: "from-sky-200 via-amber-100 to-rose-200" },
];

export default function FashionStudio({ onSaveDesign }: { onSaveDesign?: () => void }) {
  const [look, setLook] = useState<FashionLook>({
    dress: DRESSES[0].id,
    crown: CROWNS[0].id,
    wings: WINGS[0].id,
    accessory: ACCESSORIES[0].id,
    background: BACKGROUNDS[0].id,
  });

  const [activeTab, setActiveTab] = useState<"dress" | "crown" | "wings" | "accessory" | "background">("dress");
  const [photoFlash, setPhotoFlash] = useState(false);
  const [savedSuccess, setSavedSuccess] = useState(false);

  const currentDress = DRESSES.find((d) => d.id === look.dress) || DRESSES[0];
  const currentCrown = CROWNS.find((c) => c.id === look.crown) || CROWNS[0];
  const currentWings = WINGS.find((w) => w.id === look.wings) || WINGS[0];
  const currentAccessory = ACCESSORIES.find((a) => a.id === look.accessory) || ACCESSORIES[0];
  const currentBg = BACKGROUNDS.find((b) => b.id === look.background) || BACKGROUNDS[0];

  const handleSelect = (category: keyof FashionLook, value: string) => {
    sounds.playPop();
    setLook((prev) => ({ ...prev, [category]: value }));
  };

  const handleSnapshot = async () => {
    sounds.playMagicWand();
    sounds.cheerTia("fashion");
    setPhotoFlash(true);

    try {
      await fetch("/api/fashion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: `إطلالة تيا: ${currentDress.name}`,
          dressStyle: look.dress,
          hairStyle: "cute_curls",
          crown: look.crown,
          wings: look.wings,
          accessory: look.accessory,
          background: look.background,
        }),
      });
      setSavedSuccess(true);
      if (onSaveDesign) onSaveDesign();
      setTimeout(() => setSavedSuccess(false), 3000);
    } catch (e) {
      console.error(e);
    }

    setTimeout(() => {
      setPhotoFlash(false);
    }, 600);
  };

  return (
    <div className="relative bg-white/90 backdrop-blur rounded-3xl p-4 md:p-6 shadow-xl border-4 border-pink-300">
      {/* Photo Flash Overlay */}
      {photoFlash && (
        <div className="fixed inset-0 z-50 bg-white/95 animate-ping pointer-events-none" />
      )}

      {/* Header */}
      <div className="flex items-center justify-between border-b border-pink-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-pink-100 text-pink-600 rounded-2xl shadow-inner">
            <Crown className="w-6 h-6 animate-spin" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-pink-700">
              أستوديو أزياء وموضة الأميرة تيا 👗✨
            </h2>
            <p className="text-xs text-pink-500 font-bold">
              نسقي أحلى فستان وتاج وأجنحة وصوري أجمل إطلالة!
            </p>
          </div>
        </div>

        <button
          onClick={handleSnapshot}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 text-white font-black px-4 py-2.5 rounded-2xl shadow-md active:scale-95 transition"
        >
          <Camera className="w-5 h-5" />
          <span className="hidden sm:inline">صوري الإطلالة 📸</span>
        </button>
      </div>

      {savedSuccess && (
        <div className="mb-4 bg-emerald-100 border border-emerald-300 text-emerald-800 text-sm font-bold px-4 py-2.5 rounded-2xl flex items-center justify-between animate-bounce">
          <span>💖 الله يا تيا! الإطلالة الملكية اتحفظت في معرض أزيائك بنجاح!</span>
          <Check className="w-5 h-5 text-emerald-600" />
        </div>
      )}

      {/* Main Studio Viewport */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Model Runway Frame (Left / Center) */}
        <div className="lg:col-span-5 flex flex-col items-center">
          <div
            className={`relative w-full max-w-xs h-[420px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b ${currentBg.gradient} flex flex-col items-center justify-center p-4 transition-all duration-500`}
          >
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none opacity-40">
              <Sparkles className="absolute top-4 left-4 w-6 h-6 text-yellow-300 animate-pulse" />
              <Heart className="absolute top-8 right-6 w-5 h-5 text-pink-400 animate-bounce" />
              <Crown className="absolute bottom-6 left-6 w-8 h-8 text-amber-300 animate-pulse" />
            </div>

            {/* Wings Behind Model */}
            {look.wings !== "none" && (
              <div className="absolute top-20 text-7xl animate-pulse filter drop-shadow-md z-0">
                {currentWings.icon}
              </div>
            )}

            {/* Model Avatar (Princess Tia Real Photo Face) */}
            <div className="relative z-10 flex flex-col items-center">
              {/* Crown on top of head */}
              <div className="text-4xl -mb-4 animate-bounce-slow z-20 filter drop-shadow-md">
                {currentCrown.icon}
              </div>

              {/* Tia's Face */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-4 border-white shadow-xl bg-pink-100 z-10">
                <Image
                  src="/tia.jpg"
                  alt="Tia Princess"
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Princess Dress Body */}
              <div
                className={`w-36 h-36 rounded-b-[40px] rounded-t-lg bg-gradient-to-b ${currentDress.color} shadow-xl border-2 border-white -mt-3 flex flex-col items-center justify-center text-white relative transition-all duration-300`}
                style={{
                  boxShadow: `0 10px 25px ${currentDress.glow}66`,
                }}
              >
                {/* Dress Decors */}
                <div className="absolute top-2 w-8 h-8 rounded-full bg-white/30 backdrop-blur border border-white/60 flex items-center justify-center">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="absolute bottom-4 flex gap-1">
                  <span className="text-xs bg-white/40 px-2 py-0.5 rounded-full font-bold">
                    Tia Land
                  </span>
                </div>
              </div>

              {/* Hand Held Accessory */}
              <div className="absolute bottom-2 -right-4 text-3xl animate-bounce z-20 filter drop-shadow">
                {currentAccessory.icon}
              </div>
            </div>

            {/* Runway Title Banner */}
            <div className="absolute bottom-3 bg-white/90 backdrop-blur px-4 py-1 rounded-full border border-pink-200 shadow-md text-xs font-black text-pink-700 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>{currentDress.name}</span>
            </div>
          </div>

          {/* Quick Voice button for outfit */}
          <button
            onClick={() => sounds.cheerTia("fashion")}
            className="mt-3 text-xs bg-pink-100 text-pink-700 font-bold px-4 py-2 rounded-full border border-pink-300 flex items-center gap-1.5 hover:bg-pink-200 active:scale-95 transition"
          >
            <Wand2 className="w-4 h-4 text-pink-600" />
            <span>اسمعي رأي الجنية في اللبس 🧚‍♀️</span>
          </button>
        </div>

        {/* Customization Closet Panel (Right) */}
        <div className="lg:col-span-7 flex flex-col">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-4 bg-pink-50 p-2 rounded-2xl border border-pink-200">
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab("dress");
              }}
              className={`flex-1 min-w-[70px] py-2 px-3 rounded-xl font-black text-xs transition ${
                activeTab === "dress"
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white text-pink-700 hover:bg-pink-100"
              }`}
            >
              👗 الفساتين
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab("crown");
              }}
              className={`flex-1 min-w-[70px] py-2 px-3 rounded-xl font-black text-xs transition ${
                activeTab === "crown"
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white text-pink-700 hover:bg-pink-100"
              }`}
            >
              👑 التيجان والفيونكات
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab("wings");
              }}
              className={`flex-1 min-w-[70px] py-2 px-3 rounded-xl font-black text-xs transition ${
                activeTab === "wings"
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white text-pink-700 hover:bg-pink-100"
              }`}
            >
              🧚‍♀️ الأجنحة
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab("accessory");
              }}
              className={`flex-1 min-w-[70px] py-2 px-3 rounded-xl font-black text-xs transition ${
                activeTab === "accessory"
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white text-pink-700 hover:bg-pink-100"
              }`}
            >
              🪄 الإكسسوارات
            </button>
            <button
              onClick={() => {
                sounds.playPop();
                setActiveTab("background");
              }}
              className={`flex-1 min-w-[70px] py-2 px-3 rounded-xl font-black text-xs transition ${
                activeTab === "background"
                  ? "bg-pink-500 text-white shadow-md"
                  : "bg-white text-pink-700 hover:bg-pink-100"
              }`}
            >
              🏰 الخلفية
            </button>
          </div>

          {/* Options Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[340px] p-1">
            {activeTab === "dress" &&
              DRESSES.map((d) => (
                <button
                  key={d.id}
                  onClick={() => handleSelect("dress", d.id)}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition active:scale-95 ${
                    look.dress === d.id
                      ? "border-pink-500 bg-pink-100/80 shadow-md ring-2 ring-pink-400"
                      : "border-pink-200 bg-white hover:bg-pink-50"
                  }`}
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${d.color} shadow-sm border border-white flex items-center justify-center`}
                  >
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xs font-bold text-slate-800">{d.name}</span>
                </button>
              ))}

            {activeTab === "crown" &&
              CROWNS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => handleSelect("crown", c.id)}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition active:scale-95 ${
                    look.crown === c.id
                      ? "border-pink-500 bg-pink-100/80 shadow-md ring-2 ring-pink-400"
                      : "border-pink-200 bg-white hover:bg-pink-50"
                  }`}
                >
                  <span className="text-3xl">{c.icon}</span>
                  <span className="text-xs font-bold text-slate-800">{c.name}</span>
                </button>
              ))}

            {activeTab === "wings" &&
              WINGS.map((w) => (
                <button
                  key={w.id}
                  onClick={() => handleSelect("wings", w.id)}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition active:scale-95 ${
                    look.wings === w.id
                      ? "border-pink-500 bg-pink-100/80 shadow-md ring-2 ring-pink-400"
                      : "border-pink-200 bg-white hover:bg-pink-50"
                  }`}
                >
                  <span className="text-3xl">{w.icon}</span>
                  <span className="text-xs font-bold text-slate-800">{w.name}</span>
                </button>
              ))}

            {activeTab === "accessory" &&
              ACCESSORIES.map((a) => (
                <button
                  key={a.id}
                  onClick={() => handleSelect("accessory", a.id)}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition active:scale-95 ${
                    look.accessory === a.id
                      ? "border-pink-500 bg-pink-100/80 shadow-md ring-2 ring-pink-400"
                      : "border-pink-200 bg-white hover:bg-pink-50"
                  }`}
                >
                  <span className="text-3xl">{a.icon}</span>
                  <span className="text-xs font-bold text-slate-800">{a.name}</span>
                </button>
              ))}

            {activeTab === "background" &&
              BACKGROUNDS.map((b) => (
                <button
                  key={b.id}
                  onClick={() => handleSelect("background", b.id)}
                  className={`p-3 rounded-2xl border-2 flex flex-col items-center text-center gap-2 transition active:scale-95 ${
                    look.background === b.id
                      ? "border-pink-500 bg-pink-100/80 shadow-md ring-2 ring-pink-400"
                      : "border-pink-200 bg-white hover:bg-pink-50"
                  }`}
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${b.gradient} shadow-inner border border-pink-200`} />
                  <span className="text-xs font-bold text-slate-800">{b.name}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
