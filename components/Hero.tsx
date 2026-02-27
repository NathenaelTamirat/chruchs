"use client";

import Image from "next/image";
import DivineLightRays from "@/components/DivineLightRays";

interface HeroProps {
  language: "en" | "am";
}

export default function Hero({ language }: HeroProps) {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/images/pastor-temesgen.jpg)",
        // NOTE: backgroundAttachment:fixed is intentionally omitted — it breaks on iOS Safari.
        // The parallax feel comes from the fixed canvas particles and gradient overlay instead.
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Divine Light Rays */}
      <DivineLightRays />

      {/* Ambient gold vignette at the top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.18) 0%, transparent 70%)",
        }}
      />

      {/* Content — responsive padding + text sizing */}
      <div className="relative z-10 text-center text-white px-4 sm:px-8 max-w-xs sm:max-w-xl md:max-w-2xl mx-auto">
        {/* Church Logo with dual halo rings */}
        <div className="mb-6 md:mb-8 flex justify-center animate-float">
          <div className="relative animate-divine-pulse p-3 sm:p-4 rounded-full hover:animate-gold-glow transition-all duration-300">
            <div className="halo-ring-2" />
            <div className="halo-ring" />
            <Image
              src="/images/church-logo.png"
              alt="Heavenly Places Blessings International Church Logo"
              width={128}
              height={128}
              className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl animate-cross-glow relative z-10"
              priority
            />
          </div>
        </div>

        {/* Church name — scales from 2xl on mobile to 7xl on desktop */}
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 text-balance animate-fadeInDown animate-divine-glow-text leading-tight">
          {language === "en"
            ? "Heavenly Places Blessings International Church"
            : "ሰማያዊ ስፍራ በረከት አለም አቀፍ ቤተ ክርስቲያን"}
        </h1>

        <p
          className="text-base sm:text-lg md:text-2xl mb-4 md:mb-6 font-light animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {language === "en"
            ? "Protestant Church & Place of Worship"
            : "የወንጌላዊያን ቤተክርስቲያን እና አምልኮ ስፍራ"}
        </p>

        <p
          className="text-sm sm:text-base md:text-xl leading-relaxed animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          {language === "en"
            ? "Visioned by Prophet Temesgen Wogaso, who shares the Gospel and serves as a prophet."
            : "በነቢይ ተመስገን ወገሶ አገልግሎት የሚመራ።"}
        </p>

        {/* Decorative golden divider */}
        <div className="mt-6 md:mt-8 flex items-center justify-center gap-3 md:gap-4">
          <div className="h-px w-10 sm:w-16 bg-gradient-to-r from-transparent to-yellow-400/70" />
          <span className="text-yellow-300/80 text-base md:text-lg animate-sparkle" style={{ animationDelay: "0.3s" }}>✦</span>
          <span className="text-yellow-300/80 text-lg md:text-2xl animate-sparkle" style={{ animationDelay: "0.0s" }}>✦</span>
          <span className="text-yellow-300/80 text-base md:text-lg animate-sparkle" style={{ animationDelay: "0.6s" }}>✦</span>
          <div className="h-px w-10 sm:w-16 bg-gradient-to-l from-transparent to-yellow-400/70" />
        </div>

        {/* Scroll Indicator */}
        <div className="mt-8 md:mt-10 animate-bounce">
          <svg
            className="w-5 h-5 md:w-6 md:h-6 mx-auto text-yellow-300/70"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
