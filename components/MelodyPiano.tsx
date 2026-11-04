"use client";

import React, { useState, useEffect } from "react";
import { Music, Sparkles, Play, Square, Star, Heart, Volume2 } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface KeyNote {
  note: string;
  nameAr: string;
  freq: number;
  color: string;
  border: string;
}

const PIANO_KEYS: KeyNote[] = [
  { note: "C4", nameAr: "دو 🌸", freq: 261.63, color: "bg-pink-400 text-white", border: "border-pink-500" },
  { note: "D4", nameAr: "ري 🎀", freq: 293.66, color: "bg-rose-400 text-white", border: "border-rose-500" },
  { note: "E4", nameAr: "مي 💜", freq: 329.63, color: "bg-purple-400 text-white", border: "border-purple-500" },
  { note: "F4", nameAr: "فا 🩵", freq: 349.23, color: "bg-sky-400 text-white", border: "border-sky-500" },
  { note: "G4", nameAr: "صول 💚", freq: 392.0, color: "bg-emerald-400 text-white", border: "border-emerald-500" },
  { note: "A4", nameAr: "لا 💛", freq: 440.0, color: "bg-amber-400 text-slate-800", border: "border-amber-500" },
  { note: "B4", nameAr: "سي 🧡", freq: 493.88, color: "bg-orange-400 text-white", border: "border-orange-500" },
  { note: "C5", nameAr: "دوو 👑", freq: 523.25, color: "bg-pink-600 text-white", border: "border-pink-700" },
];

const SONGS = [
  {
    id: "twinkle",
    title: "Twinkle Twinkle Little Star ⭐",
    titleAr: "توينكل توينكل ليتل ستار ⭐",
    notes: [
      { note: "C4", dur: 400 },
      { note: "C4", dur: 400 },
      { note: "G4", dur: 400 },
      { note: "G4", dur: 400 },
      { note: "A4", dur: 400 },
      { note: "A4", dur: 400 },
      { note: "G4", dur: 800 },
      { note: "F4", dur: 400 },
      { note: "F4", dur: 400 },
      { note: "E4", dur: 400 },
      { note: "E4", dur: 400 },
      { note: "D4", dur: 400 },
      { note: "D4", dur: 400 },
      { note: "C4", dur: 800 },
    ],
  },
  {
    id: "birthday",
    title: "Happy Birthday Princess Tia 🎂",
    titleAr: "سنة حلوة يا تيا يا قمر 🎂",
    notes: [
      { note: "C4", dur: 350 },
      { note: "C4", dur: 200 },
      { note: "D4", dur: 500 },
      { note: "C4", dur: 500 },
      { note: "F4", dur: 500 },
      { note: "E4", dur: 800 },
      { note: "C4", dur: 350 },
      { note: "C4", dur: 200 },
      { note: "D4", dur: 500 },
      { note: "C4", dur: 500 },
      { note: "G4", dur: 500 },
      { note: "F4", dur: 800 },
      { note: "C4", dur: 350 },
      { note: "C4", dur: 200 },
      { note: "C5", dur: 500 },
      { note: "A4", dur: 500 },
      { note: "F4", dur: 500 },
      { note: "E4", dur: 500 },
      { note: "D4", dur: 800 },
    ],
  },
  {
    id: "fairy",
    title: "Pink Fairy Dance 🧚‍♀️",
    titleAr: "رقصة الجنية الوردية 🧚‍♀️",
    notes: [
      { note: "E4", dur: 300 },
      { note: "G4", dur: 300 },
      { note: "C5", dur: 400 },
      { note: "A4", dur: 300 },
      { note: "G4", dur: 500 },
      { note: "E4", dur: 300 },
      { note: "F4", dur: 300 },
      { note: "G4", dur: 600 },
    ],
  },
];

export default function MelodyPiano() {
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [isPlayingSong, setIsPlayingSong] = useState<boolean>(false);
  const [currentSongId, setCurrentSongId] = useState<string | null>(null);

  const handleKeyPress = (k: KeyNote) => {
    sounds.playPiano(k.freq);
    setActiveKey(k.note);
    setTimeout(() => setActiveKey(null), 250);
  };

  const playSong = async (songId: string) => {
    if (isPlayingSong) return;
    setIsPlayingSong(true);
    setCurrentSongId(songId);

    const song = SONGS.find((s) => s.id === songId);
    if (!song) return;

    for (let i = 0; i < song.notes.length; i++) {
      const step = song.notes[i];
      const keyObj = PIANO_KEYS.find((k) => k.note === step.note);
      if (keyObj) {
        handleKeyPress(keyObj);
      }
      await new Promise((res) => setTimeout(res, step.dur));
    }

    setIsPlayingSong(false);
    setCurrentSongId(null);
    sounds.playCheer();
    sounds.speak("You are a musical superstar Tia! I love your music!");
  };

  return (
    <div className="relative bg-white/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-xl border-4 border-pink-300">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-pink-100 pb-3 mb-4">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-pink-100 text-pink-600 rounded-2xl shadow-inner">
            <Music className="w-6 h-6 animate-bounce" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-pink-700">
              بيانو وموسيقى الأميرة تيا 🎹✨
            </h2>
            <p className="text-xs text-pink-500 font-bold">
              اضغطي على المفاتيح واعزفي أحلى أغاني لـ تيا!
            </p>
          </div>
        </div>

        <button
          onClick={() => {
            sounds.playCheer();
            sounds.speak("Let's dance and sing with Princess Tia!");
          }}
          className="flex items-center gap-1.5 bg-pink-100 hover:bg-pink-200 text-pink-700 font-bold px-3.5 py-2 rounded-2xl border border-pink-300 active:scale-95 transition text-xs"
        >
          <Volume2 className="w-4 h-4 text-pink-600" />
          <span>هيييه يا تيا 🎶</span>
        </button>
      </div>

      {/* Songs Jukebox Buttons */}
      <div className="mb-6 bg-pink-50/80 p-3 rounded-2xl border border-pink-200">
        <span className="text-xs font-black text-pink-700 block mb-2">
          أغاني تيا الجاهزة (اضغطي واستمعي للألحان) 🎵:
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {SONGS.map((s) => (
            <button
              key={s.id}
              onClick={() => playSong(s.id)}
              disabled={isPlayingSong}
              className={`p-3 rounded-2xl border flex items-center justify-between text-right transition active:scale-95 ${
                currentSongId === s.id
                  ? "bg-pink-500 text-white border-pink-600 shadow-md animate-pulse"
                  : "bg-white text-slate-800 border-pink-200 hover:bg-pink-100/70"
              }`}
            >
              <div>
                <p className="text-xs font-black">{s.titleAr}</p>
                <p className="text-[10px] opacity-80">{s.title}</p>
              </div>
              <Play className="w-4 h-4 shrink-0 mr-2" />
            </button>
          ))}
        </div>
      </div>

      {/* Musical Piano Keyboard */}
      <div className="flex items-center justify-center p-4 bg-gradient-to-b from-slate-900 to-pink-950 rounded-3xl shadow-2xl border-4 border-pink-400 overflow-x-auto">
        <div className="flex gap-1.5 sm:gap-2.5 py-4 px-2">
          {PIANO_KEYS.map((k) => (
            <button
              key={k.note}
              onClick={() => handleKeyPress(k)}
              className={`relative w-12 sm:w-16 h-48 sm:h-56 rounded-b-2xl border-b-8 flex flex-col justify-between items-center p-3 select-none transition-all duration-100 transform active:translate-y-2 active:brightness-110 shadow-lg ${
                k.color
              } ${k.border} ${
                activeKey === k.note
                  ? "translate-y-2 brightness-125 ring-4 ring-white shadow-2xl scale-95"
                  : ""
              }`}
            >
              <Sparkles className="w-4 h-4 opacity-75" />
              <div className="flex flex-col items-center">
                <span className="text-sm sm:text-base font-black drop-shadow">
                  {k.nameAr}
                </span>
                <span className="text-[10px] font-bold opacity-80">{k.note}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-pink-600 font-bold flex items-center justify-center gap-1">
        <Heart className="w-3.5 h-3.5 fill-pink-500 text-pink-500 animate-pulse" />
        <span>عزف حقيقي وسلس جداً على شاشات التاتش والموبايل!</span>
      </div>
    </div>
  );
}
