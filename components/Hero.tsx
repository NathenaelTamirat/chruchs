"use client";

interface HeroProps {
  language: "en" | "am";
}

export default function Hero({ language }: HeroProps) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url(/images/pastor-temesgen.jpg)",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        {/* Church Logo */}
        <div className="mb-8 flex justify-center animate-float">
          <div className="animate-glow p-4 rounded-full">
            <img
              src="/images/church-logo.png"
              alt="church logo"
              className="w-24 h-24 md:w-32 md:h-32 object-contain drop-shadow-2xl"
            />
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-balance animate-fadeInDown">
          {language === "en"
            ? "Heavenly Places Blessings International Church"
            : "ሰማያዊ ስፍራ በረከት አለም አቀፍ ቤተ ክርስቲያን"}
        </h1>
        <p
          className="text-xl md:text-2xl mb-6 font-light animate-fadeInUp"
          style={{ animationDelay: "0.2s" }}
        >
          {language === "en"
            ? "Protestant Church & Place of Worship"
            : "ፕሮቴስታንት ቤተክርስቲያን እና ምግባር ስፍራ"}
        </p>
        <p
          className="text-lg md:text-xl leading-relaxed animate-fadeInUp"
          style={{ animationDelay: "0.4s" }}
        >
          {language === "en"
            ? "Visioned by Prophet Temesgen Wogaso, who shares the Gospel and serves as a prophet."
            : "ነቢይ ተመስገን ወገሶ ወንጌልን የሚያሙጥ እና እንደ ነቢይ የሚያገለግል።"}
        </p>

        {/* Scroll Indicator */}
        <div className="mt-12 animate-bounce">
          <svg
            className="w-6 h-6 mx-auto"
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
