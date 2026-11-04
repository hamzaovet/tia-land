"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import {
  Sparkles,
  Heart,
  Crown,
  Share2,
  Printer,
  ArrowRight,
  Volume2,
  Download,
  Smartphone,
  Globe,
  Lock,
} from "lucide-react";
import { sounds } from "@/lib/sounds";

export default function TiaCardPage() {
  const [webQr, setWebQr] = useState<string>("");
  const [apkQr, setApkQr] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_APP_URL || "https://tia-land.vercel.app";

    const webUrl = origin;
    const apkUrl = `${origin}/api/download/apk`;

    QRCode.toDataURL(webUrl, {
      width: 280,
      margin: 1,
      color: { dark: "#9d174d", light: "#ffffff" },
    }).then(setWebQr);

    QRCode.toDataURL(apkUrl, {
      width: 280,
      margin: 1,
      color: { dark: "#831843", light: "#ffffff" },
    }).then(setApkQr);
  }, []);

  const handleShare = async () => {
    sounds.playMagicWand();
    sounds.cheerTia("welcome");
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://tia-land.vercel.app";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "بطاقة دعوة أرض تيا السحرية 👑💖",
          text: "تعالوا العبوا معايا في أرض تيا السحرية! رسم وموضة وموسيقى وألعاب حلوة جداً، وحملوا كمان تطبيق الأندرويد 📲✨",
          url: shareUrl,
        });
      } catch (e) {}
    } else {
      navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const playGreeting = () => {
    sounds.playMagicWand();
    sounds.speak("Hello! Welcome to Princess Tia's magical world! Let's play and shine together!");
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 py-6 px-3 sm:px-6 flex flex-col items-center justify-between text-slate-800">
      {/* Top Navigation */}
      <div className="w-full max-w-2xl flex items-center justify-between mb-4">
        <Link
          href="/"
          className="flex items-center gap-1.5 bg-white/90 backdrop-blur px-4 py-2 rounded-full font-black text-pink-700 shadow-sm border border-pink-200 active:scale-95 transition text-xs sm:text-sm"
        >
          <ArrowRight className="w-4 h-4" />
          <span>رجوع لعالم تيا 👑</span>
        </Link>
        <button
          onClick={playGreeting}
          className="flex items-center gap-1.5 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-black px-4 py-2 rounded-full shadow-md active:scale-95 transition text-xs sm:text-sm"
        >
          <Volume2 className="w-4 h-4 animate-bounce" />
          <span>صوت تيا 💖</span>
        </button>
      </div>

      {/* Official Master VIP Card Container (Correct Text Direction, No Inversion) */}
      <div className="w-full max-w-2xl bg-white/95 rounded-[36px] border-4 border-pink-300 shadow-2xl p-5 sm:p-7 relative overflow-hidden my-auto">
        {/* Background Decors */}
        <div className="absolute top-2 left-2 text-4xl opacity-15 pointer-events-none">✨</div>
        <div className="absolute bottom-2 right-2 text-4xl opacity-15 pointer-events-none">💖</div>

        {/* Header Bar */}
        <div className="flex flex-wrap items-center justify-between border-b-2 border-dashed border-pink-200 pb-4 mb-5 gap-2">
          <div className="flex items-center gap-2.5">
            <span className="text-3xl">👑</span>
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-pink-700 leading-tight">
                أرض تيا السحرية
              </h1>
              <p className="text-[11px] sm:text-xs font-bold text-purple-700">
                TIA LAND PRINCESS WORLD
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" />
            <span>بطاقة الدعوة الرسمية VIP</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
          {/* Princess Profile */}
          <div className="md:col-span-6 bg-pink-50/80 rounded-3xl p-4 border-2 border-pink-200 flex items-center gap-3.5 shadow-xs">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 shrink-0">
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-pink-500 shadow-md">
                <Image
                  src="/tia.jpg"
                  alt="Princess Tia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-1 bg-amber-400 text-amber-950 p-1 rounded-full shadow border-2 border-white">
                <Crown className="w-4 h-4 fill-amber-300" />
              </div>
            </div>

            <div>
              <h2 className="text-lg sm:text-xl font-black text-pink-700">
                الأميرة تيا 💖
              </h2>
              <p className="text-xs text-purple-700 font-bold mb-2">
                أميرة الألعاب والسحر (6 سنوات)
              </p>
              <div className="flex flex-wrap gap-1 text-[10px] font-bold">
                <span className="bg-white text-pink-700 px-2 py-0.5 rounded-full border border-pink-200">
                  🎨 مرسم وتلوين
                </span>
                <span className="bg-white text-purple-700 px-2 py-0.5 rounded-full border border-purple-200">
                  👗 أزياء وموضة
                </span>
                <span className="bg-white text-rose-700 px-2 py-0.5 rounded-full border border-rose-200">
                  🎹 بيانو وأغاني
                </span>
              </div>
            </div>
          </div>

          {/* TWO QR Codes Grid */}
          <div className="md:col-span-6 grid grid-cols-2 gap-3">
            {/* QR 1: Web Game */}
            <div className="bg-white rounded-2xl p-3 border-2 border-pink-300 shadow-md flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-black px-2 py-0.5 rounded-full w-full mb-1.5 flex items-center justify-center gap-1">
                <Globe className="w-3 h-3" />
                <span>اللعب أونلاين</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 p-1 bg-pink-50 rounded-xl border border-pink-200 mb-1 flex items-center justify-center">
                {webQr ? (
                  <img src={webQr} alt="Web QR" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-[10px] text-pink-400">جاري التحميل...</div>
                )}
              </div>
              <span className="text-[10px] font-bold text-slate-700">
                امسحي والعبي فوراً بالمتصفح
              </span>
            </div>

            {/* QR 2: APK Download */}
            <div className="bg-white rounded-2xl p-3 border-2 border-purple-300 shadow-md flex flex-col items-center text-center">
              <div className="bg-gradient-to-r from-purple-600 to-indigo-500 text-white text-[11px] font-black px-2 py-0.5 rounded-full w-full mb-1.5 flex items-center justify-center gap-1">
                <Smartphone className="w-3 h-3" />
                <span>تطبيق أندرويد APK</span>
              </div>
              <div className="w-24 h-24 sm:w-28 sm:h-28 p-1 bg-purple-50 rounded-xl border border-purple-200 mb-1 flex items-center justify-center">
                {apkQr ? (
                  <img src={apkQr} alt="APK QR" className="w-full h-full object-contain" />
                ) : (
                  <div className="text-[10px] text-purple-400">جاري التحميل...</div>
                )}
              </div>
              <span className="text-[10px] font-bold text-purple-800">
                تحميل التطبيق على الموبايل
              </span>
            </div>
          </div>
        </div>

        {/* Footer Bar */}
        <div className="mt-5 pt-3.5 border-t-2 border-dashed border-pink-200 flex flex-wrap items-center justify-between text-xs font-bold text-pink-700 gap-2">
          <div className="flex items-center gap-1.5 bg-pink-50 px-3 py-1 rounded-full border border-pink-200">
            <Lock className="w-3.5 h-3.5 text-pink-600" />
            <span>كود النادي السري:</span>
            <span className="bg-pink-600 text-white font-black px-2 py-0.5 rounded-md text-[11px]">
              tia
            </span>
          </div>

          <div className="text-[11px] text-pink-600">
            💖 تم التطوير بواسطة شركة أوركا لتقنية المعلومات — 01018671000
          </div>
        </div>
      </div>

      {/* Action Buttons Under Card */}
      <div className="w-full max-w-2xl mt-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {/* Download Standalone Card Image */}
        <a
          href="/tia-official-card.png"
          download="tia-official-card.png"
          onClick={() => sounds.playMagicWand()}
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 text-white font-black py-2.5 px-3 rounded-2xl shadow-md active:scale-95 transition text-xs"
        >
          <Download className="w-4 h-4" />
          <span>حفظ صورة الكارت 📸</span>
        </a>

        {/* Download APK directly */}
        <a
          href="/api/download/apk"
          onClick={() => sounds.playMagicWand()}
          className="flex items-center justify-center gap-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 text-white font-black py-2.5 px-3 rounded-2xl shadow-md active:scale-95 transition text-xs"
        >
          <Smartphone className="w-4 h-4" />
          <span>تحميل tialand.apk 📲</span>
        </a>

        {/* Share via WhatsApp / Native */}
        <button
          onClick={handleShare}
          className="flex items-center justify-center gap-1.5 bg-white text-pink-700 border-2 border-pink-300 hover:bg-pink-50 font-black py-2.5 px-3 rounded-2xl shadow-sm active:scale-95 transition text-xs"
        >
          <Share2 className="w-4 h-4" />
          <span>{copied ? "تم النسخ! ✨" : "مشاركة الكارت 💖"}</span>
        </button>

        {/* Print */}
        <button
          onClick={() => {
            sounds.playPop();
            window.print();
          }}
          className="flex items-center justify-center gap-1.5 bg-white text-slate-700 border-2 border-slate-200 hover:bg-slate-50 font-black py-2.5 px-3 rounded-2xl shadow-sm active:scale-95 transition text-xs"
        >
          <Printer className="w-4 h-4" />
          <span>طباعة 🖨️</span>
        </button>
      </div>
    </main>
  );
}
