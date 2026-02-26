"use client";

import { useState } from "react";

interface Video {
  id: string;
  titleEn: string;
  titleAm: string;
  descEn?: string;
  descAm?: string;
}

interface VideosProps {
  language: "en" | "am";
}

export default function Videos({ language }: VideosProps) {
  const videos: Video[] = [
    { id: "dVa0Dh1wbBM", titleEn: "Sermon 1", titleAm: "ስርሕ 1" },
    { id: "E2lURG_IASY", titleEn: "Sermon 2", titleAm: "ስርሕ 2" },
    { id: "Sj1GTeoLf3Y", titleEn: "Sermon 3", titleAm: "ስርሕ 3" },
    { id: "EuZc59ZvfH4", titleEn: "Sermon 4", titleAm: "ስርሕ 4" },
    { id: "w7doD1RjCCg", titleEn: "Sermon 5", titleAm: "ስርሕ 5" },
  ];

  const [playing, setPlaying] = useState<boolean[]>(videos.map(() => false));

  const handlePlay = (index: number) => {
    setPlaying((prev) => {
      const arr = [...prev];
      arr[index] = true;
      return arr;
    });
  };

  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-background to-secondary/20 scroll-fade opacity-0">
      <div className="max-w-7xl mx-auto">
        {/* Shimmer heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeInDown animate-shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #92400e 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #92400e 80%)",
            backgroundSize: "200% auto",
          }}
        >
          {language === "en" ? "Sermons & Media" : "ስርሕና ሚዲያ"}
        </h2>
        <div
          className="w-24 h-1 mx-auto mb-8 md:mb-12 rounded-full animate-breathe"
          style={{
            background:
              "linear-gradient(90deg, #92400e, #d4af37, #fef08a, #d4af37, #92400e)",
          }}
        />

        {/* Video grid: 1 col on xs, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {videos.map((video, idx) => (
            <div key={video.id} className="flex flex-col gap-3">
              {/* 16:9 aspect ratio wrapper */}
              <div className="relative w-full rounded-xl overflow-hidden shadow-lg" style={{ paddingTop: "56.25%" }}>
                {playing[idx] ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={language === "en" ? video.titleEn : video.titleAm}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                ) : (
                  <button
                    className="absolute inset-0 w-full h-full flex items-center justify-center group"
                    onClick={() => handlePlay(idx)}
                    aria-label={`Play ${language === "en" ? video.titleEn : video.titleAm}`}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={language === "en" ? video.titleEn : video.titleAm}
                      className="object-cover w-full h-full group-hover:brightness-75 transition-all duration-300"
                    />
                    {/* Play button circle — responsive size */}
                    <svg
                      className="absolute w-10 h-10 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white opacity-90 group-hover:scale-110 transition-transform duration-300 drop-shadow-lg"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle cx="42" cy="42" r="42" fill="rgba(0,0,0,0.65)" />
                      <polygon fill="white" points="33,26 62,42 33,58" />
                    </svg>
                  </button>
                )}
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-foreground">
                {language === "en" ? video.titleEn : video.titleAm}
              </h3>
              <p className="text-foreground/70 text-xs sm:text-sm">
                {language === "en" ? (video.descEn || "") : (video.descAm || "")}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
