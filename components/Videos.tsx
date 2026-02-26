"use client";

import { useState } from 'react';

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
    {
      id: "dVa0Dh1wbBM",
      titleEn: "Sermon 1",
      titleAm: "ስርሕ 1",
    },
    {
      id: "E2lURG_IASY",
      titleEn: "Sermon 2",
      titleAm: "ስርሕ 2",
    },
    {
      id: "Sj1GTeoLf3Y",
      titleEn: "Sermon 3",
      titleAm: "ስርሕ 3",
    },
    {
      id: "EuZc59ZvfH4",
      titleEn: "Sermon 4",
      titleAm: "ስርሕ 4",
    },
    {
      id: "w7doD1RjCCg",
      titleEn: "Sermon 5",
      titleAm: "ስርሕ 5",
    },
  ];

  // track which video indices are playing
  const [playing, setPlaying] = useState<boolean[]>(
    videos.map(() => false)
  );

  const handlePlay = (index: number) => {
    setPlaying((prev) => {
      const arr = [...prev];
      arr[index] = true;
      return arr;
    });
  };

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/20 scroll-fade opacity-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-foreground animate-fadeInDown">
          {language === "en" ? "Sermons & Media" : "ስርሕና ሚዲያ"}
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-yellow-600 to-orange-600 mx-auto mb-12 rounded-full" />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, idx) => (
            <div key={video.id} className="flex flex-col gap-4">
              <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
                {playing[idx] ? (
                  <iframe
                    className="absolute inset-0 w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1`}
                    title={language === "en" ? video.titleEn : video.titleAm}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  ></iframe>
                ) : (
                  <button
                    className="absolute inset-0 w-full h-full bg-black/20 flex items-center justify-center"
                    onClick={() => handlePlay(idx)}
                    aria-label="Play video"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                      alt={language === "en" ? video.titleEn : video.titleAm}
                      className="object-cover w-full h-full"
                    />
                    <svg
                      className="absolute w-16 h-16 text-white opacity-80"
                      fill="currentColor"
                      viewBox="0 0 84 84"
                    >
                      <circle cx="42" cy="42" r="42" fill="currentColor" />
                      <polygon
                        fill="#000"
                        points="33,26 60,42 33,58"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {language === "en" ? video.titleEn : video.titleAm}
              </h3>
              {language === "en" ? (
                <p className="text-foreground/70 text-sm">
                  {video.descEn || ""}
                </p>
              ) : (
                <p className="text-foreground/70 text-sm">
                  {video.descAm || ""}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
