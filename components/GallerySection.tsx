"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Palette, Heart, Download, Sparkles, Crown } from "lucide-react";
import { sounds } from "@/lib/sounds";

export default function GallerySection({ refreshTrigger }: { refreshTrigger?: number }) {
  const [activeTab, setActiveTab] = useState<"art" | "fashion">("art");
  const [artworks, setArtworks] = useState<any[]>([]);
  const [fashionDesigns, setFashionDesigns] = useState<any[]>([]);

  useEffect(() => {
    loadGallery();
  }, [refreshTrigger]);

  const loadGallery = async () => {
    try {
      const [resArt, resFashion] = await Promise.all([
        fetch("/api/artworks").then((r) => r.json()),
        fetch("/api/fashion").then((r) => r.json()),
      ]);
      if (resArt.artworks) setArtworks(resArt.artworks);
      if (resFashion.designs) setFashionDesigns(resFashion.designs);
    } catch (e) {
      console.error(e);
    }
  };

  const handleLike = (id: string) => {
    sounds.playPop();
    sounds.cheerTia("goodjob");
    setArtworks((prev) =>
      prev.map((a) => (a.id === id ? { ...a, likesCount: a.likesCount + 1 } : a))
    );
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
              معرض إبداعات وإطلالات الأميرة تيا 🖼️✨
            </h2>
            <p className="text-xs text-pink-500 font-bold">
              كل اللوحات والأزياء اللي صممتيها بتتحفظ هنا في معرض المملكة!
            </p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex gap-1.5 bg-pink-50 p-1 rounded-2xl border border-pink-200">
          <button
            onClick={() => {
              sounds.playPop();
              setActiveTab("art");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
              activeTab === "art"
                ? "bg-pink-500 text-white shadow-sm"
                : "bg-white text-pink-700 hover:bg-pink-100"
            }`}
          >
            🎨 اللوحات الفنية ({artworks.length})
          </button>
          <button
            onClick={() => {
              sounds.playPop();
              setActiveTab("fashion");
            }}
            className={`px-3 py-1.5 rounded-xl text-xs font-black transition ${
              activeTab === "fashion"
                ? "bg-pink-500 text-white shadow-sm"
                : "bg-white text-pink-700 hover:bg-pink-100"
            }`}
          >
            👗 إطلالات الموضة ({fashionDesigns.length})
          </button>
        </div>
      </div>

      {/* Artworks Tab */}
      {activeTab === "art" && (
        <div>
          {artworks.length === 0 ? (
            <div className="text-center py-12 text-pink-400">
              <Palette className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-bold">لسة مفيش لوحات محفوظة! اذهبي لمرسم تيا وارسمي أول لوحة سحرية 🎨</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {artworks.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-2xl p-3 border-2 border-pink-200 shadow-md hover:shadow-lg transition flex flex-col justify-between"
                >
                  <div className="relative w-full h-44 rounded-xl overflow-hidden border border-pink-100 bg-slate-50 mb-2">
                    <img
                      src={item.imageData}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs font-black text-pink-800">{item.title}</h4>
                    <p className="text-[10px] text-purple-600 font-semibold">{item.artistName}</p>
                    <div className="flex items-center justify-between mt-2 pt-2 border-t border-pink-100">
                      <button
                        onClick={() => handleLike(item.id)}
                        className="flex items-center gap-1 text-xs text-rose-500 font-bold bg-rose-50 hover:bg-rose-100 px-2.5 py-1 rounded-full transition active:scale-90"
                      >
                        <Heart className="w-3.5 h-3.5 fill-rose-500" />
                        <span>{item.likesCount || 1}</span>
                      </button>
                      <a
                        href={item.imageData}
                        download={`tia-art-${item.id}.png`}
                        className="text-xs text-pink-600 hover:text-pink-800 p-1"
                        title="تحميل"
                      >
                        <Download className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* Fashion Designs Tab */}
      {activeTab === "fashion" && (
        <div>
          {fashionDesigns.length === 0 ? (
            <div className="text-center py-12 text-pink-400">
              <Crown className="w-12 h-12 mx-auto mb-2 opacity-50" />
              <p className="text-sm font-bold">لسة مفيش إطلالات مصورة! ادخلي استوديو الأزياء ونسقي أحلى فستان وصوري 👗</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {fashionDesigns.map((f) => (
                <div
                  key={f.id}
                  className="bg-white rounded-2xl p-4 border-2 border-pink-200 shadow-md hover:shadow-lg transition flex flex-col items-center text-center"
                >
                  <div className="relative w-20 h-20 rounded-full overflow-hidden border-2 border-pink-400 shadow mb-2">
                    <Image src="/tia.jpg" alt="Tia" fill className="object-cover" />
                  </div>
                  <h4 className="text-xs font-black text-pink-800">{f.title}</h4>
                  <div className="flex flex-wrap items-center justify-center gap-1 mt-2 text-[10px] font-bold">
                    <span className="bg-pink-100 text-pink-700 px-2 py-0.5 rounded-full">
                      👑 {f.crown}
                    </span>
                    <span className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded-full">
                      👗 {f.dressStyle}
                    </span>
                    {f.wings !== "none" && (
                      <span className="bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full">
                        🧚‍♀️ أجنحة
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
