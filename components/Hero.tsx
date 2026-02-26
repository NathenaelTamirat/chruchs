'use client';

interface HeroProps {
  language: 'en' | 'am';
}

export default function Hero({ language }: HeroProps) {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: 'url(/images/pastor-temesgen.jpg)',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-2xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-balance">
          {language === 'en' ? 'Gospel Church' : 'ወንጌል ቤተክርስቲያን'}
        </h1>
        <p className="text-xl md:text-2xl mb-6 font-light">
          {language === 'en'
            ? 'Protestant Church & Place of Worship'
            : 'ፕሮቴስታንት ቤተክርስቲያን እና ምግባር ስፍራ'}
        </p>
        <p className="text-lg md:text-xl leading-relaxed">
          {language === 'en'
            ? 'Visioned by Prophet Temesgen Wogaso, who shares the Gospel and serves as a prophet.'
            : 'ነቢይ ተመስገን ወገሶ ወንጌልን የሚያሙጥ እና እንደ ነቢይ የሚያገለግል።'}
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
