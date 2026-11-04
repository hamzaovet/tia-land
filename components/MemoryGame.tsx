"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Star, Trophy, RotateCcw, Award, CheckCircle2 } from "lucide-react";
import { sounds } from "@/lib/sounds";

interface CardItem {
  id: number;
  icon: string;
  name: string;
  matched: boolean;
}

const ALL_CARDS = [
  { icon: "👑", name: "التاج الملكي" },
  { icon: "🦄", name: "اليونيكورن السحري" },
  { icon: "🎀", name: "فيونكة كيتي" },
  { icon: "🧚‍♀️", name: "الجنية الوردية" },
  { icon: "🌸", name: "وردة الربيع" },
  { icon: "🐱", name: "قطة جميلة" },
];

export default function MemoryGame() {
  const [level, setLevel] = useState<number>(1); // 1 = 4 cards, 2 = 8 cards, 3 = 12 cards
  const [cards, setCards] = useState<CardItem[]>([]);
  const [flippedIndices, setFlippedIndices] = useState<number[]>([]);
  const [moves, setMoves] = useState<number>(0);
  const [isWon, setIsWon] = useState<boolean>(false);

  useEffect(() => {
    startNewGame(level);
  }, [level]);

  const startNewGame = (lvl: number) => {
    sounds.playPop();
    const pairCount = lvl === 1 ? 2 : lvl === 2 ? 4 : 6;
    const selected = ALL_CARDS.slice(0, pairCount);
    const deck = [...selected, ...selected].map((item, index) => ({
      id: index,
      icon: item.icon,
      name: item.name,
      matched: false,
    }));

    // Shuffle
    for (let i = deck.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }

    setCards(deck);
    setFlippedIndices([]);
    setMoves(0);
    setIsWon(false);
  };

  const handleCardClick = (index: number) => {
    if (flippedIndices.length === 2 || cards[index].matched || flippedIndices.includes(index)) {
      return;
    }

    sounds.playPop();
    const newFlipped = [...flippedIndices, index];
    setFlippedIndices(newFlipped);

    if (newFlipped.length === 2) {
      setMoves((m) => m + 1);
      const [firstIdx, secondIdx] = newFlipped;

      if (cards[firstIdx].icon === cards[secondIdx].icon) {
        // MATCH!
        sounds.playMagicWand();
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c, idx) => (idx === firstIdx || idx === secondIdx ? { ...c, matched: true } : c))
          );
          setFlippedIndices([]);

          // Check if all matched
          const remaining = cards.filter(
            (c, idx) => !c.matched && idx !== firstIdx && idx !== secondIdx
          );

          if (remaining.length === 0) {
            handleVictory();
          }
        }, 400);
      } else {
        // NO MATCH
        setTimeout(() => {
          setFlippedIndices([]);
        }, 900);
      }
    }
  };

  const handleVictory = async () => {
    setIsWon(true);
    sounds.playCheer();
    sounds.cheerTia("memory");

    try {
      await fetch("/api/scores", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          playerName: "الأميرة تيا 👑",
          gameType: "MEMORY",
          score: 300 * level,
          stars: 3,
          level,
        }),
      });
    } catch (e) {}
  };

  return (
    <div className="relative bg-white/95 backdrop-blur rounded-3xl p-4 md:p-6 shadow-xl border-4 border-pink-300">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between border-b border-pink-100 pb-3 mb-4 gap-2">
        <div className="flex items-center gap-2">
          <div className="p-2 bg-pink-100 text-pink-600 rounded-2xl shadow-inner">
            <Trophy className="w-6 h-6 animate-pulse" />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-black text-pink-700">
              لعبة تطابق الذاكرة والنجوم 🧠✨
            </h2>
            <p className="text-xs text-pink-500 font-bold">
              اقلبي الكروت واجمعي كل شكلين متطابقين واكسبي 3 نجوم!
            </p>
          </div>
        </div>

        {/* Level Selector */}
        <div className="flex items-center gap-1.5 bg-pink-50 p-1.5 rounded-2xl border border-pink-200">
          {[
            { lvl: 1, label: "سهل (4 كروت)" },
            { lvl: 2, label: "متوسط (8 كروت)" },
            { lvl: 3, label: "بطلة (12 كارت)" },
          ].map((l) => (
            <button
              key={l.lvl}
              onClick={() => {
                setLevel(l.lvl);
              }}
              className={`px-3 py-1.5 rounded-xl text-xs font-bold transition ${
                level === l.lvl
                  ? "bg-pink-500 text-white shadow-sm"
                  : "bg-white text-pink-700 hover:bg-pink-100"
              }`}
            >
              {l.label}
            </button>
          ))}
        </div>
      </div>

      {/* Victory Banner */}
      {isWon && (
        <div className="mb-6 p-4 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-rose-500 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-3 animate-bounce">
          <div className="flex items-center gap-3">
            <div className="flex gap-1 text-yellow-300 text-2xl">
              <Star className="w-7 h-7 fill-yellow-300" />
              <Star className="w-7 h-7 fill-yellow-300" />
              <Star className="w-7 h-7 fill-yellow-300" />
            </div>
            <div>
              <h3 className="text-lg font-black">شطورة يا تيا! مبروووك الفوز 👑🎉</h3>
              <p className="text-xs opacity-90">جمعتِ كل الكروت بذكاء خارق!</p>
            </div>
          </div>

          <button
            onClick={() => startNewGame(level)}
            className="flex items-center gap-1.5 bg-white text-pink-700 font-black px-4 py-2 rounded-2xl shadow-md hover:bg-pink-50 active:scale-95 transition text-xs"
          >
            <RotateCcw className="w-4 h-4" />
            <span>العب دور جديد</span>
          </button>
        </div>
      )}

      {/* Cards Grid */}
      <div
        className={`grid gap-3 sm:gap-4 max-w-lg mx-auto ${
          cards.length <= 4
            ? "grid-cols-2"
            : cards.length <= 8
            ? "grid-cols-4"
            : "grid-cols-3 sm:grid-cols-4"
        }`}
      >
        {cards.map((c, idx) => {
          const isFlipped = flippedIndices.includes(idx) || c.matched;
          return (
            <button
              key={c.id}
              onClick={() => handleCardClick(idx)}
              disabled={c.matched}
              className={`relative h-24 sm:h-32 rounded-3xl border-4 transition-all duration-300 transform active:scale-95 flex items-center justify-center shadow-lg ${
                c.matched
                  ? "bg-emerald-100 border-emerald-300 opacity-90 scale-95"
                  : isFlipped
                  ? "bg-gradient-to-br from-pink-100 to-purple-100 border-pink-400 rotate-y-180"
                  : "bg-gradient-to-br from-pink-400 to-rose-500 border-white hover:brightness-105"
              }`}
            >
              {isFlipped ? (
                <div className="flex flex-col items-center">
                  <span className="text-4xl sm:text-5xl animate-bounce-slow">{c.icon}</span>
                  {c.matched && (
                    <span className="text-[10px] font-black text-emerald-700 mt-1">صح! ✨</span>
                  )}
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center text-white">
                  <Sparkles className="w-8 h-8 opacity-80 animate-pulse" />
                  <span className="text-xs font-black mt-1">TIA</span>
                </div>
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-4 flex items-center justify-between text-xs font-bold text-pink-700 px-2">
        <span>عدد المحاولات: {moves}</span>
        <button
          onClick={() => startNewGame(level)}
          className="flex items-center gap-1 text-pink-600 hover:text-pink-800"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span>إعادة اللعبة</span>
        </button>
      </div>
    </div>
  );
}
