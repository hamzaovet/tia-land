"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Lock, Unlock, Crown, Heart, Sparkles, Volume2, Award, Star, X } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface Badge {
  id: string;
  badgeCode: string;
  title: string;
  description: string;
  icon: string;
  isUnlocked: boolean;
}

interface VoiceMessage {
  id: string;
  fromName: string;
  messageEn: string;
  messageAr: string;
  icon: string;
}

export default function SecretClubModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [pinInput, setPinInput] = useState<string>("");
  const [isUnlocked, setIsUnlocked] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [badges, setBadges] = useState<Badge[]>([]);
  const [messages, setMessages] = useState<VoiceMessage[]>([]);

  useEffect(() => {
    if (isOpen) {
      loadClubData();
    }
  }, [isOpen]);

  const loadClubData = async () => {
    try {
      const [resBadges, resMsgs] = await Promise.all([
        fetch("/api/badges").then((r) => r.json()),
        fetch("/api/voice-messages").then((r) => r.json()),
      ]);
      if (resBadges.badges) setBadges(resBadges.badges);
      if (resMsgs.messages) setMessages(resMsgs.messages);
    } catch (e) {
      console.error(e);
    }
  };

  const handleKeyPress = (char: string) => {
    sounds.playPop();
    setErrorMsg("");
    if (pinInput.length < 5) {
      const next = pinInput + char;
      setPinInput(next);
      if (next.toLowerCase() === "tia") {
        unlockClub();
      }
    }
  };

  const handleClear = () => {
    sounds.playPop();
    setPinInput("");
    setErrorMsg("");
  };

  const unlockClub = () => {
    sounds.playCheer();
    sounds.speak("Welcome to Tia's Secret Club! Daddy loves you so much Princess Tia!");
    setIsUnlocked(true);
  };

  const playVoiceMsg = (msg: VoiceMessage) => {
    sounds.playMagicWand();
    sounds.speak(msg.messageEn);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-lg bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 rounded-3xl p-6 shadow-2xl border-4 border-pink-300 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 left-4 p-2 bg-white/80 hover:bg-white text-pink-700 rounded-full border border-pink-200 shadow-sm transition"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="text-center mb-6">
          <div className="inline-flex p-3 bg-pink-100 text-pink-600 rounded-full mb-2 shadow-inner border border-pink-300">
            {isUnlocked ? (
              <Crown className="w-8 h-8 text-amber-500 animate-bounce" />
            ) : (
              <Lock className="w-8 h-8 text-pink-500 animate-pulse" />
            )}
          </div>
          <h2 className="text-2xl font-black text-pink-700">
            {isUnlocked ? "نادي تيا السري الملكي 👑💖" : "نادي تيا السري (دخول بحروف tia)"}
          </h2>
          <p className="text-xs text-purple-700 font-bold mt-1">
            {isUnlocked
              ? "أهلاً بكِ يا أحلى بنوتة في العالم في ناديكي الخاص!"
              : "اكتبي حروف اسمك الجميلة بالترتيب ( T - I - A ) لفتح النادي"}
          </p>
        </div>

        {!isUnlocked ? (
          /* PIN Input Screen */
          <div className="flex flex-col items-center">
            {/* Display letters */}
            <div className="flex items-center gap-3 mb-6">
              {["T", "I", "A"].map((letter, idx) => {
                const filled = pinInput.length > idx;
                return (
                  <div
                    key={idx}
                    className={`w-14 h-16 rounded-2xl border-4 flex items-center justify-center text-2xl font-black transition-all ${
                      filled
                        ? "bg-pink-500 border-white text-white shadow-lg scale-105"
                        : "bg-white border-pink-300 text-pink-300"
                    }`}
                  >
                    {filled ? pinInput[idx].toUpperCase() : letter}
                  </div>
                );
              })}
            </div>

            {errorMsg && (
              <p className="text-xs font-bold text-rose-600 mb-4 animate-shake">
                {errorMsg}
              </p>
            )}

            {/* Tia Keypad Buttons */}
            <div className="grid grid-cols-3 gap-3 w-full max-w-xs mb-4">
              {["T", "I", "A", "2", "0", "6"].map((char) => (
                <button
                  key={char}
                  onClick={() => handleKeyPress(char)}
                  className="h-14 rounded-2xl bg-white hover:bg-pink-100 border-2 border-pink-300 text-pink-700 text-xl font-black shadow-md active:scale-95 transition"
                >
                  {char}
                </button>
              ))}
            </div>

            <div className="flex gap-2 w-full max-w-xs">
              <button
                onClick={handleClear}
                className="flex-1 py-2.5 rounded-2xl bg-rose-100 hover:bg-rose-200 text-rose-700 font-black text-xs transition"
              >
                مسح 🔄
              </button>
              <button
                onClick={() => {
                  if (pinInput.toLowerCase() === "tia") {
                    unlockClub();
                  } else {
                    sounds.playPop();
                    setErrorMsg("رمز غير صحيح! اضغطي T ثم I ثم A 💖");
                  }
                }}
                className="flex-1 py-2.5 rounded-2xl bg-pink-500 hover:bg-pink-600 text-white font-black text-xs transition shadow-md"
              >
                دخول 👑
              </button>
            </div>
          </div>
        ) : (
          /* Unlocked Club Content */
          <div className="space-y-6">
            {/* Tia Profile Hero inside Club */}
            <div className="bg-white/90 backdrop-blur rounded-3xl p-4 border border-pink-200 shadow-sm flex items-center gap-4">
              <div className="relative w-20 h-20 rounded-full overflow-hidden border-4 border-pink-400 shadow-md shrink-0">
                <Image src="/tia.jpg" alt="Princess Tia" fill className="object-cover" />
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <h3 className="text-lg font-black text-pink-700">الأميرة تيا 💖</h3>
                  <span className="text-[11px] bg-pink-100 text-pink-800 font-bold px-2 py-0.5 rounded-full">
                    6 سنوات
                  </span>
                </div>
                <p className="text-xs text-purple-600 font-semibold mt-0.5">
                  رتبة: أميرة المملكة السحرية الأولى ⭐
                </p>
                <button
                  onClick={() => sounds.cheerTia("love")}
                  className="mt-2 text-xs bg-pink-500 hover:bg-pink-600 text-white font-black px-3 py-1 rounded-full shadow flex items-center gap-1 active:scale-95 transition"
                >
                  <Heart className="w-3.5 h-3.5 fill-white" />
                  <span>رسالة حب من بابا 👨‍👧</span>
                </button>
              </div>
            </div>

            {/* Voice Messages List */}
            <div>
              <h4 className="text-sm font-black text-pink-800 mb-2 flex items-center gap-1.5">
                <Volume2 className="w-4 h-4 text-pink-600" />
                <span>رسائل صوتية خاصة لـ تيا:</span>
              </h4>
              <div className="space-y-2">
                {messages.map((msg) => (
                  <div
                    key={msg.id}
                    className="bg-white/90 p-3 rounded-2xl border border-pink-200 flex items-center justify-between shadow-xs"
                  >
                    <div>
                      <p className="text-xs font-black text-pink-700 flex items-center gap-1">
                        <span>{msg.icon}</span>
                        <span>{msg.fromName}</span>
                      </p>
                      <p className="text-xs text-slate-700 mt-0.5 font-medium">{msg.messageAr}</p>
                      <p className="text-[11px] text-pink-500 font-semibold italic mt-0.5">
                        &quot;{msg.messageEn}&quot;
                      </p>
                    </div>

                    <button
                      onClick={() => playVoiceMsg(msg)}
                      className="p-2.5 bg-pink-100 hover:bg-pink-200 text-pink-700 rounded-full shrink-0 shadow-sm transition active:scale-90"
                      title="استمع للرسالة بالصوت"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Badges & Achievements */}
            <div>
              <h4 className="text-sm font-black text-pink-800 mb-2 flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-500" />
                <span>أوسمة وبطولات تيا 🏆:</span>
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {badges.map((b) => (
                  <div
                    key={b.id}
                    className="bg-white/90 p-2.5 rounded-2xl border border-pink-200 flex items-center gap-2 shadow-xs"
                  >
                    <span className="text-2xl">{b.icon}</span>
                    <div>
                      <p className="text-xs font-black text-slate-800">{b.title}</p>
                      <p className="text-[10px] text-pink-600 font-medium">{b.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
