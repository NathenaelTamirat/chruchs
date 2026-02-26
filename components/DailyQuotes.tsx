'use client';

import { useState, useEffect } from 'react';
import { Card } from '@/components/ui/card';

interface DailyQuotesProps {
  language: 'en' | 'am';
}

const quotes = [
  {
    en: '"For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life." - John 3:16',
    am: '"ምክንያቱም ሰላም አለብዎት በጸሐይ ላይ ሰላም ነው።" - ዮሃንስ 3፡16',
  },
  {
    en: '"Trust in the LORD with all your heart and lean not on your own understanding." - Proverbs 3:5',
    am: '"በሙሉ ልብህ ሰላም አድርግ እና በራስህ ግንዛቤ ላይ እንደገና በማመን።" - ምሳሌ 3፡5',
  },
  {
    en: '"I can do all this through him who gives me strength." - Philippians 4:13',
    am: '"ይህን ሁሉ በእኔ ላይ ተነሳ ደግሞ በሌላው ኃይል ስር።" - ፊሊፖስ 4፡13',
  },
  {
    en: '"Be still, and know that I am God; I will be exalted among the nations." - Psalm 46:10',
    am: '"ዝምት ተብለው፣ እኔ እግዚአብሔር ነኝ ብለው ይወቁ።" - መዝሙር 46፡10',
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
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          {language === 'en' ? 'Daily Quote' : 'ዕለታዊ ጥቅሰት'}
        </h2>

        <Card className="p-8 md:p-12 border-accent/50 bg-card hover:shadow-lg transition-shadow duration-300">
          <div className="text-center min-h-[200px] flex items-center justify-center">
            <p className="text-lg md:text-xl leading-relaxed text-foreground/90 italic">
              {quotes[currentQuote][language]}
            </p>
          </div>

          {/* Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentQuote(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-accent w-8' : 'bg-muted w-2'
                }`}
                aria-label={`Quote ${index + 1}`}
              />
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
