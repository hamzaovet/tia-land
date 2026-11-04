"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import QRCode from "qrcode";
import { Sparkles, Heart, Crown, Share2, Printer, ArrowRight, Volume2, Stars, Wand2 } from "lucide-react";
import { sounds } from "@/lib/sounds";

export default function TiaCardPage() {
  const [qrDataUrl, setQrDataUrl] = useState<string>("");
  const [copied, setCopied] = useState<boolean>(false);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  useEffect(() => {
    const appUrl =
      typeof window !== "undefined"
        ? window.location.origin
        : process.env.NEXT_PUBLIC_APP_URL || "https://tia-land.vercel.app";

    QRCode.toDataURL(appUrl, {
      width: 320,
      margin: 2,
      color: {
        dark: "#be185d", // deep royal pink/magenta
        light: "#ffffff",
      },
    })
      .then((url) => setQrDataUrl(url))
      .catch((err) => console.error(err));
  }, []);

  const handleShare = async () => {
    sounds.playMagicWand();
    sounds.cheerTia("welcome");
    const shareUrl = typeof window !== "undefined" ? window.location.origin : "https://tia-land.vercel.app";
    if (navigator.share) {
      try {
        await navigator.share({
          title: "أرض تيا السحرية | Tia Land 💖",
          text: "تعالوا العبوا معايا في أرض تيا السحرية! رسم، وموضة، وموسيقى وألعاب حلوة جداً للأميرات 👑✨",
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
    <main className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-50 to-pink-200 py-8 px-4 flex flex-col items-center justify-between text-slate-800">
      {/* Top Bar */}
      <div className="w-full max-w-md flex items-center justify-between mb-4">
        <Link
          href="/"
          className="flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-2 rounded-full font-bold text-pink-700 shadow-sm border border-pink-200 active:scale-95 transition"
        >
          <ArrowRight className="w-4 h-4" />
          <span>رجوع لعالم تيا</span>
        </Link>
        <button
          onClick={playGreeting}
          className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-400 text-white font-bold px-4 py-2 rounded-full shadow-md active:scale-95 transition"
        >
          <Volume2 className="w-4 h-4 animate-bounce" />
          <span>صوت تيا 💖</span>
        </button>
      </div>

      {/* 3D Flip Card Container */}
      <div className="w-full max-w-sm perspective-1000 my-auto">
        <div
          onClick={() => {
            sounds.playPop();
            setIsFlipped(!isFlipped);
          }}
          className={`relative w-full rounded-3xl cursor-pointer transition-all duration-700 transform-style-3d shadow-2xl border-4 border-pink-300 ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          style={{
            minHeight: "560px",
            background: "linear-gradient(135deg, #fff0f5 0%, #fce7f3 50%, #fbcfe8 100%)",
          }}
        >
          {/* Card Front */}
          <div
            className={`w-full h-full p-6 flex flex-col items-center justify-between text-center transition-opacity duration-300 ${
              isFlipped ? "hidden" : "flex"
            }`}
          >
            {/* Crown & Sparkles Header */}
            <div className="relative w-full flex flex-col items-center">
              <div className="flex items-center gap-2 bg-pink-500 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-sm mb-2">
                <Crown className="w-4 h-4 text-amber-300 animate-spin" />
                <span>بطاقة أميرات تيا الرسمية VIP</span>
                <Sparkles className="w-4 h-4 text-yellow-200" />
              </div>
              <h1 className="text-3xl font-black text-pink-600 tracking-wide drop-shadow-sm">
                TIA LAND 💖
              </h1>
              <p className="text-xs font-bold text-purple-700 mt-0.5">
                أرض الألعاب والسحر للأميرة تيا (6 سنوات)
              </p>
            </div>

            {/* Tia Photo Frame */}
            <div className="relative my-4 group">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-500 via-purple-400 to-pink-500 rounded-full blur-md opacity-75 animate-pulse"></div>
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <Image
                  src="/tia.jpg"
                  alt="Princess Tia"
                  fill
                  className="object-cover object-center transform group-hover:scale-105 transition duration-500"
                  priority
                />
              </div>
              <div className="absolute -top-2 -right-2 bg-amber-400 text-white p-2 rounded-full shadow-lg border-2 border-white animate-bounce-slow">
                <Crown className="w-5 h-5 text-amber-900 fill-amber-300" />
              </div>
              <div className="absolute -bottom-1 -left-1 bg-pink-500 text-white p-1.5 rounded-full shadow-lg border-2 border-white">
                <Heart className="w-4 h-4 text-white fill-white" />
              </div>
            </div>

            {/* Tia Title & Badges */}
            <div className="bg-white/80 backdrop-blur rounded-2xl p-3 w-full border border-pink-200 shadow-sm">
              <h2 className="text-xl font-black text-pink-700">الأميرة تيا 👑</h2>
              <p className="text-xs font-semibold text-pink-500 mt-0.5">
                رسم وتلوين • ستايل وأزياء • بيانو وأغاني
              </p>
              <div className="flex items-center justify-center gap-1.5 mt-2">
                <span className="text-xs bg-pink-100 text-pink-800 font-bold px-2.5 py-0.5 rounded-full border border-pink-300">
                  💖 6 سنوات
                </span>
                <span className="text-xs bg-purple-100 text-purple-800 font-bold px-2.5 py-0.5 rounded-full border border-purple-300">
                  ✨ رسامة المملكة
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 font-bold px-2.5 py-0.5 rounded-full border border-amber-300">
                  ⭐ كود الدخول: tia
                </span>
              </div>
            </div>

            {/* Quick QR teaser */}
            <div className="mt-4 flex flex-col items-center">
              <span className="text-xs font-bold text-pink-600 bg-white px-3 py-1 rounded-full border border-pink-200 shadow-xs flex items-center gap-1">
                <Wand2 className="w-3.5 h-3.5 text-pink-500" />
                اضغطي لقلب الكارت ومسح كود اللعب
              </span>
            </div>

            {/* Watermark footer */}
            <div className="mt-4 text-[10px] text-pink-400 font-semibold">
              تم التطوير بحب بواسطة شركة أوركا لتقنية المعلومات — 01018671000
            </div>
          </div>

          {/* Card Back (Single Direct QR Code) */}
          <div
            className={`w-full h-full p-6 flex flex-col items-center justify-between text-center transition-opacity duration-300 ${
              !isFlipped ? "hidden" : "flex"
            }`}
          >
            <div className="w-full">
              <div className="inline-flex items-center gap-1.5 bg-pink-600 text-white text-xs font-black px-4 py-1.5 rounded-full shadow-sm mb-1">
                <Stars className="w-4 h-4 text-yellow-300" />
                <span>امسحي والعبي مع تيا فوراً</span>
              </div>
              <h3 className="text-xl font-black text-pink-700 mt-1">امسحي بكاميرا الموبايل</h3>
              <p className="text-xs text-purple-600 font-medium">
                وافتحي أرض تيا السحرية بدون تحميل ولا وجع دماغ!
              </p>
            </div>

            {/* Direct Official QR Code */}
            <div className="relative my-2 p-3 bg-white rounded-3xl shadow-xl border-4 border-pink-300">
              {qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt="Tia Land QR Code"
                  className="w-48 h-48 rounded-xl object-contain"
                />
              ) : (
                <div className="w-48 h-48 flex items-center justify-center text-pink-400">
                  جاري تجهيز الكود السحري...
                </div>
              )}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-pink-500 to-rose-400 text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow">
                tia-land.vercel.app
              </div>
            </div>

            <div className="bg-pink-100/90 rounded-2xl p-3 w-full border border-pink-300 text-xs text-pink-900 font-semibold space-y-1">
              <p>🎨 رسم وتلوين وحفظ اللوحات</p>
              <p>👗 أزياء وتلبيس ومكياج أميرات</p>
              <p>🎹 بيانو وأغاني تفاعلية حلوة</p>
            </div>

            <div className="mt-2 text-[10px] text-pink-400 font-semibold">
              تم التطوير بحب بواسطة شركة أوركا لتقنية المعلومات — 01018671000
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full max-w-sm mt-6 flex items-center justify-center gap-3">
        <button
          onClick={handleShare}
          className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white font-black py-3 px-4 rounded-2xl shadow-lg active:scale-95 transition"
        >
          <Share2 className="w-5 h-5" />
          <span>{copied ? "تم نسخ الرابط! ✨" : "مشاركة مع الأصحاب 💖"}</span>
        </button>

        <button
          onClick={() => {
            sounds.playPop();
            window.print();
          }}
          className="flex items-center justify-center gap-2 bg-white text-pink-700 border-2 border-pink-300 hover:bg-pink-50 font-black py-3 px-4 rounded-2xl shadow-md active:scale-95 transition"
          title="طباعة الكارت"
        >
          <Printer className="w-5 h-5" />
          <span>طباعة</span>
        </button>
      </div>

      {/* Bottom hint */}
      <div className="mt-4 text-center text-xs text-pink-700/80 font-bold">
        💖 اضغطي على الكارت في أي وقت لقلبه ورؤية الكيو آر كود!
      </div>
    </main>
  );
}
