"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Crown,
  Heart,
  Palette,
  Music,
  Shirt,
  Trophy,
  Volume2,
  VolumeX,
  Wand2,
  QrCode,
  Lock,
  Star,
  Flame,
} from "lucide-react";
import { sounds } from "@/lib/sounds";
import FashionStudio from "@/components/FashionStudio";
import MagicCanvas from "@/components/MagicCanvas";
import MelodyPiano from "@/components/MelodyPiano";
import MemoryGame from "@/components/MemoryGame";
import GallerySection from "@/components/GallerySection";
import SecretClubModal from "@/components/SecretClubModal";

type TabType = "fashion" | "canvas" | "piano" | "memory" | "gallery";

export default function TiaLandHome() {
  const [activeTab, setActiveTab] = useState<TabType>("fashion");
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [isSecretClubOpen, setIsSecretClubOpen] = useState<boolean>(false);
  const [screenShaking, setScreenShaking] = useState<boolean>(false);
  const [magicFlash, setMagicFlash] = useState<boolean>(false);
  const [galleryRefresh, setGalleryRefresh] = useState<number>(0);

  const toggleSound = () => {
    const nextState = sounds.toggleSound();
    setSoundEnabled(nextState);
    if (nextState) {
      sounds.playPop();
    }
  };

  // The requested Screen Shake + Rainbow Lights + Sound Effect!
  const triggerMagicSparkle = () => {
    sounds.playMagicWand();
    sounds.cheerTia("princess");
    setScreenShaking(true);
    setMagicFlash(true);

    setTimeout(() => {
      setMagicFlash(false);
    }, 450);

    setTimeout(() => {
      setScreenShaking(false);
    }, 600);
  };

  const speakRandomGreeting = () => {
    sounds.playPop();
    sounds.cheerTia("welcome");
  };

  return (
    <div
      className={`min-h-screen flex flex-col justify-between transition-all duration-100 ${
        screenShaking ? "shake-screen" : ""
      }`}
    >
      {/* Magic Pink/Rainbow Flash Overlay */}
      {magicFlash && (
        <div className="fixed inset-0 z-50 bg-gradient-to-r from-pink-400/40 via-purple-400/40 to-yellow-300/40 backdrop-blur-[2px] pointer-events-none animate-pulse" />
      )}

      {/* Top Princess Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/85 backdrop-blur-md border-b-2 border-pink-200 shadow-sm px-4 py-2.5">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
          {/* Logo & Tia Avatar */}
          <div className="flex items-center gap-2.5">
            <div className="relative group cursor-pointer" onClick={triggerMagicSparkle}>
              <div className="relative w-11 h-11 rounded-full overflow-hidden border-2 border-pink-400 shadow-md">
                <Image
                  src="/tia.jpg"
                  alt="Princess Tia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-1.5 -right-1.5 bg-amber-400 text-amber-900 rounded-full p-0.5 shadow">
                <Crown className="w-3.5 h-3.5 fill-amber-300" />
              </div>
            </div>

            <div>
              <div className="flex items-center gap-1.5">
                <h1 className="text-lg md:text-xl font-black text-pink-600 drop-shadow-xs">
                  أرض تيا السحرية 💖
                </h1>
                <span className="text-[10px] bg-pink-100 text-pink-800 font-extrabold px-2 py-0.5 rounded-full border border-pink-300 hidden sm:inline">
                  TIA LAND 👑
                </span>
              </div>
              <p className="text-[11px] text-purple-700 font-bold hidden sm:block">
                عالم الموضة، الرسم، والموسيقى للأميرة تيا (6 سنوات)
              </p>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* Magic Wand Button (Screen Shake + Lights) */}
            <button
              onClick={triggerMagicSparkle}
              className="flex items-center gap-1 bg-gradient-to-r from-pink-500 via-rose-500 to-amber-400 text-white font-black text-xs px-3 py-2 rounded-2xl shadow-md active:scale-90 transition hover:brightness-105"
              title="عصا السحر وهز الشاشة والأنوار"
            >
              <Wand2 className="w-4 h-4 animate-spin" />
              <span className="hidden md:inline">سحر تيا ✨</span>
            </button>

            {/* English Voice cheer */}
            <button
              onClick={speakRandomGreeting}
              className="flex items-center gap-1 bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold text-xs px-3 py-2 rounded-2xl border border-pink-300 active:scale-95 transition"
              title="تكلمي مع تيا بالإنجليزي"
            >
              <Volume2 className="w-4 h-4 text-pink-600 animate-bounce" />
              <span className="hidden sm:inline">صوت تيا 🎀</span>
            </button>

            {/* Secret Club (PIN tia) */}
            <button
              onClick={() => {
                sounds.playPop();
                setIsSecretClubOpen(true);
              }}
              className="flex items-center gap-1 bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold text-xs px-3 py-2 rounded-2xl border border-purple-300 active:scale-95 transition"
              title="النادي السري"
            >
              <Lock className="w-4 h-4 text-purple-600" />
              <span className="hidden sm:inline">النادي السري (tia) 👑</span>
            </button>

            {/* Friends Card QR Link */}
            <Link
              href="/card"
              className="flex items-center gap-1 bg-amber-100 hover:bg-amber-200 text-amber-900 font-bold text-xs px-3 py-2 rounded-2xl border border-amber-300 active:scale-95 transition"
              title="كارت الأميرة والـ QR"
            >
              <QrCode className="w-4 h-4 text-amber-700" />
              <span className="hidden sm:inline">كارت اللعب 🪪</span>
            </Link>

            {/* Sound Toggle */}
            <button
              onClick={toggleSound}
              className="p-2 rounded-2xl bg-slate-100 text-slate-700 hover:bg-slate-200 transition active:scale-90"
              title="تشغيل / كتم الصوت"
            >
              {soundEnabled ? (
                <Volume2 className="w-4 h-4 text-pink-600" />
              ) : (
                <VolumeX className="w-4 h-4 text-slate-400" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-6xl mx-auto w-full px-3 sm:px-4 py-4 md:py-6 flex-1 flex flex-col gap-6">
        {/* Hero Banner for Princess Tia */}
        <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-pink-400 via-rose-400 to-purple-400 text-white p-5 md:p-8 shadow-xl border-4 border-white">
          <div className="absolute -right-8 -top-8 w-44 h-44 bg-white/20 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute -left-8 -bottom-8 w-44 h-44 bg-yellow-300/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-right">
            {/* Tia Photo with Princess Aura */}
            <div className="relative flex items-center justify-center">
              <div className="absolute -inset-3 bg-white/30 rounded-full blur-md animate-pulse" />
              <div className="relative w-28 h-28 md:w-32 md:md:h-32 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <Image
                  src="/tia.jpg"
                  alt="Princess Tia"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -top-3 -right-2 bg-amber-400 text-amber-950 p-2 rounded-full shadow-lg border-2 border-white animate-bounce-slow">
                <Crown className="w-6 h-6 fill-amber-300" />
              </div>
            </div>

            {/* Greetings & Super Info */}
            <div className="flex-1 md:pr-4">
              <div className="inline-flex items-center gap-1.5 bg-white/25 backdrop-blur px-3.5 py-1 rounded-full text-xs font-black mb-2 border border-white/40">
                <Sparkles className="w-3.5 h-3.5 text-yellow-200" />
                <span>أهلاً بكِ يا أميرة قلبي تيا (6 سنوات) 💖</span>
              </div>
              <h2 className="text-2xl md:text-4xl font-black drop-shadow-md">
                أرض السحر والموضة والموسيقى ✨
              </h2>
              <p className="text-xs md:text-sm font-semibold opacity-95 mt-1 max-w-xl">
                جهزنالك ألعاب رسم وتلوين سحرية، استوديو أزياء لتصميم أروع فساتين الأميرات، بيانو بأغاني حلوة، ولعبة تطابق الذاكرة الذكية!
              </p>
            </div>

            {/* Quick Action Button */}
            <div className="flex flex-col gap-2 shrink-0">
              <button
                onClick={triggerMagicSparkle}
                className="bg-white hover:bg-pink-50 text-pink-700 font-black px-5 py-3 rounded-2xl shadow-lg border-2 border-pink-200 active:scale-95 transition flex items-center justify-center gap-2 text-sm"
              >
                <Wand2 className="w-5 h-5 text-pink-500 animate-pulse" />
                <span>شغلي سحر الشاشة والأنوار 🪄</span>
              </button>
              <Link
                href="/card"
                className="bg-pink-600/70 hover:bg-pink-600 text-white font-bold px-4 py-2 rounded-2xl text-xs backdrop-blur border border-white/30 text-center transition active:scale-95"
              >
                بطاقة دعوة الأصحاب (QR Code) 🪪
              </Link>
            </div>
          </div>
        </section>

        {/* Game Sections Navigation Tabs */}
        <nav className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 px-1">
          {[
            { id: "fashion", label: "أستوديو الموضة 👗", icon: Shirt, color: "text-rose-600" },
            { id: "canvas", label: "مرسم تيا والتلوين 🎨", icon: Palette, color: "text-purple-600" },
            { id: "piano", label: "البيانو والموسيقى 🎹", icon: Music, color: "text-pink-600" },
            { id: "memory", label: "لعبة تطابق الذاكرة 🧠", icon: Trophy, color: "text-amber-600" },
            { id: "gallery", label: "معرض إبداعات تيا 🖼️", icon: Star, color: "text-emerald-600" },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => {
                  sounds.playPop();
                  setActiveTab(tab.id as TabType);
                }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl font-black text-xs sm:text-sm whitespace-nowrap transition active:scale-95 border-2 ${
                  isActive
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white border-pink-500 shadow-md scale-105"
                    : "bg-white/90 text-slate-700 border-pink-200 hover:bg-pink-50"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : tab.color}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Active Game Component View */}
        <section className="transition-all duration-300">
          {activeTab === "fashion" && (
            <FashionStudio
              onSaveDesign={() => setGalleryRefresh((prev) => prev + 1)}
            />
          )}

          {activeTab === "canvas" && (
            <MagicCanvas
              onSaveArtwork={() => setGalleryRefresh((prev) => prev + 1)}
            />
          )}

          {activeTab === "piano" && <MelodyPiano />}

          {activeTab === "memory" && <MemoryGame />}

          {activeTab === "gallery" && (
            <GallerySection refreshTrigger={galleryRefresh} />
          )}
        </section>
      </main>

      {/* Secret Club Modal */}
      <SecretClubModal
        isOpen={isSecretClubOpen}
        onClose={() => setIsSecretClubOpen(false)}
      />

      {/* Magical Princess Footer */}
      <footer className="mt-8 bg-white/80 backdrop-blur border-t-2 border-pink-200 py-6 px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-2">
          <div className="flex items-center justify-center gap-2 text-pink-600 text-sm font-black">
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
            <span>صُنعت خصيصاً وبكل الحب للأميرة تيا (6 سنوات) من بابا وحبيبه قلبه 💖</span>
            <Heart className="w-4 h-4 fill-pink-500 text-pink-500 animate-pulse" />
          </div>
          <p className="text-xs text-purple-700 font-semibold">
            أرض تيا السحرية — Tia Land • رسم، وتلوين، وموضة، وموسيقى وألعاب للأميرات
          </p>
          <div className="pt-2 border-t border-pink-100 text-[11px] text-pink-500 font-bold">
            تم التطوير بحب بواسطة شركة أوركا لتقنية المعلومات — 01018671000
          </div>
        </div>
      </footer>
    </div>
  );
}
