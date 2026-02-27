"use client";

import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";

interface DailyQuotesProps {
  language: "en" | "am";
}

const quotes = [
  {
    en: '"For God so loved the world that He gave His only begotten Son, that whoever believes in Him should not perish but have everlasting life." - John 3:16',
    am: '"እግዚአብሔር ዓለምን እንዲሁ ወዶአልና፤ በእርሱ የሚያምን ሁሉ እንዳይጠፋ የዘላለም ሕይወት እንዲኖረው አንድያ ልጁን ሰጠ።" - ዮሐንስ 3:16',
  },
  {
    en: '"Trust in the LORD with all your heart, and lean not on your own understanding; in all your ways acknowledge Him, and He shall direct your paths." - Proverbs 3:5-6',
    am: '"በልብህ ሁሉ በእግዚአብሔር ታመን፤ በራስህም ግንዛቤ አትደገፍ። በመንገድህ ሁሉ እርሱን አውቅ፤ እርሱም ጎዳናህን ቀና ያደርጋል።" - ምሳሌ 3:5-6',
  },
  {
    en: '"I can do all things through Christ who strengthens me." - Philippians 4:13',
    am: '"በሚያበረታኝ በክርስቶስ ሁሉን እችላለሁ።" - ፊልጵስዩስ 4:13',
  },
  {
    en: '"Be still, and know that I am God." - Psalm 46:10',
    am: '"ዝም በሉ፤ እኔ እግዚአብሔር እንደ ሆንሁ ዕወቁ።" - መዝሙር 46:10',
  },
  {
    en: '"But seek first the kingdom of God and His righteousness, and all these things shall be added to you." - Matthew 6:33',
    am: '"እናንተ ግን አስቀድሞ መንግሥቱንና ጽድቁን ፈልጉ፤ ይህም ሁሉ ይጨመርላችኋል።" - ማቴዎስ 6:33',
  },
  {
    en: '"For by grace you have been saved through faith, and that not of yourselves; it is the gift of God." - Ephesians 2:8',
    am: '"በጸጋ በእምነት ድናችሁ ነውና፤ ይህም ከእናንተ አይደለም፥ የእግዚአብሔር ስጦታ ነው።" - ኤፌሶን 2:8',
  },
  {
    en: '"All Scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness." - 2 Timothy 3:16',
    am: '"መጽሐፍ ቅዱስ ሁሉ በእግዚአብሔር መንፈስ ተነፍሶ የተጻፈ ነው፤ ለትምህርት፥ ለመግለጫ፥ ለማቅናት፥ በጽድቅም ለማስተማር ይጠቅማል።" - 2 ጢሞቴዎስ 3:16',
  },
  {
    en: '"For where two or three are gathered together in My name, I am there in the midst of them." - Matthew 18:20',
    am: '"ሁለት ወይም ሦስት በስሜ በተሰበሰቡ ስፍራ በመካከላቸው እኔ አለሁ።" - ማቴዎስ 18:20',
  },
  {
    en: '"The LORD is my shepherd; I shall not want." - Psalm 23:1',
    am: '"እግዚአብሔር እረኛዬ ነው፤ የሚያጣኝ የለም።" - መዝሙር 23:1',
  },
  {
    en: '"Jesus Christ is the same yesterday, today, and forever." - Hebrews 13:8',
    am: '"ኢየሱስ ክርስቶስ ትናንትና ዛሬም እስከ ዘላለም ያንድ ነው።" - ዕብራውያን 13:8',
  },
];

export default function DailyQuotes({ language }: DailyQuotesProps) {
  const [currentQuote, setCurrentQuote] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % quotes.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-emerald-500/5 via-background to-teal-500/5 scroll-fade opacity-0">
      <div className="max-w-4xl mx-auto">
        {/* Shimmer heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeInDown animate-shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #065f46 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #065f46 80%)",
            backgroundSize: "200% auto",
          }}
        >
          {language === "en" ? "Daily Inspiration" : "ዕለታዊ ጥቅሰት"}
        </h2>

        {/* Animated gold divider */}
        <div
          className="w-24 h-1 mx-auto mb-12 rounded-full animate-breathe"
          style={{
            background:
              "linear-gradient(90deg, #065f46, #d4af37, #fef08a, #d4af37, #065f46)",
          }}
        />

        {/* Quote card with divine breathe border */}
        <Card className="p-8 md:p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 animate-breathe hover:shadow-2xl transition-all duration-300 animate-slideInLeft relative overflow-hidden">

          {/* Subtle inner radial glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 40% at 50% 10%, rgba(212,175,55,0.07) 0%, transparent 70%)",
            }}
          />

          {/* Opening quote decoration */}
          <div className="text-center mb-2">
            <span
              className="text-6xl font-serif leading-none"
              style={{ color: "rgba(212,175,55,0.3)" }}
            >
              "
            </span>
          </div>

          <div className="text-center min-h-[160px] flex items-center justify-center">
            <p
              key={currentQuote}
              className="text-lg md:text-xl leading-relaxed text-foreground/90 italic font-light animate-fadeInUp"
            >
              {quotes[currentQuote][language]}
            </p>
          </div>

          {/* Decorative sparkles */}
          <div className="flex justify-center gap-6 mt-4 opacity-40">
            <span className="text-yellow-400 text-xs animate-sparkle" style={{ animationDelay: "0.0s" }}>✦</span>
            <span className="text-yellow-300 text-sm animate-sparkle" style={{ animationDelay: "0.7s" }}>✦</span>
            <span className="text-yellow-400 text-xs animate-sparkle" style={{ animationDelay: "1.4s" }}>✦</span>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-3 mt-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`rounded-full transition-all duration-300 ${index === currentQuote
                  ? "w-8 h-3 animate-divine-pulse"
                  : "bg-muted w-2 h-2 hover:bg-yellow-500/50"
                  }`}
                style={
                  index === currentQuote
                    ? {
                      background:
                        "linear-gradient(90deg, #d4af37, #fef08a, #d4af37)",
                    }
                    : {}
                }
                aria-label={`Quote ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
