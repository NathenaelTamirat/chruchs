"use client";

import { Card } from "@/components/ui/card";
import { Clock } from "lucide-react";

interface ScheduleProps {
  language: "en" | "am";
}

const schedule = [
  {
    dayEn: "Sunday",
    dayAm: "እሁድ",
    timeEn: "All Day",
    timeAm: "ሙሉ ቀን",
  },
  {
    dayEn: "Wednesday",
    dayAm: "ሮብ",
    timeEn: "4:00 PM - 9:00 PM (EAT)",
    timeAm: "4:00 PM - 9:00 PM (EAT)",
  },
  {
    dayEn: "Saturday",
    dayAm: "ቅዳሜ",
    timeEn: "4:00 PM - 9:00 PM (EAT)",
    timeAm: "4:00 PM - 9:00 PM (EAT)",
  },
];

// Sparkle star positions for each card
const sparklePositions = [
  [{ top: "8%", right: "10%", delay: "0s" }, { top: "15%", right: "20%", delay: "0.8s" }, { top: "5%", right: "30%", delay: "1.6s" }],
  [{ top: "8%", right: "10%", delay: "0.3s" }, { top: "15%", right: "20%", delay: "1.1s" }, { top: "5%", right: "30%", delay: "1.9s" }],
  [{ top: "8%", right: "10%", delay: "0.6s" }, { top: "15%", right: "20%", delay: "1.4s" }, { top: "5%", right: "30%", delay: "0.2s" }],
];

export default function Schedule({ language }: ScheduleProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background via-purple-500/5 to-background scroll-fade opacity-0">
      <div className="max-w-5xl mx-auto">
        {/* Shimmer heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeInDown animate-shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #92400e 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #92400e 80%)",
            backgroundSize: "200% auto",
          }}
        >
          {language === "en" ? "Program Schedule" : "የፕሮግራም ሰዓትስ"}
        </h2>

        {/* Animated gold divider */}
        <div
          className="w-24 h-1 mx-auto mb-12 rounded-full animate-breathe"
          style={{
            background:
              "linear-gradient(90deg, #92400e, #d4af37, #fef08a, #d4af37, #92400e)",
          }}
        />

        <div className="grid md:grid-cols-3 gap-6">
          {schedule.map((item, index) => (
            <Card
              key={index}
              className="p-8 bg-gradient-to-br from-purple-500/20 to-blue-500/20 border border-purple-500/30 hover:border-yellow-500/60 hover:shadow-xl hover:shadow-yellow-500/20 transition-all duration-500 group animate-scaleUp relative overflow-hidden hover:animate-gold-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Floating sparkle stars */}
              {sparklePositions[index].map((pos, si) => (
                <span
                  key={si}
                  className="absolute text-yellow-300/50 text-xs animate-sparkle pointer-events-none"
                  style={{ top: pos.top, right: pos.right, animationDelay: pos.delay }}
                >
                  ✦
                </span>
              ))}

              {/* Subtle inner golden glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-lg"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(212,175,55,0.08) 0%, transparent 70%)",
                }}
              />

              <div className="flex items-center gap-3 mb-4 relative z-10">
                <div className="p-2 bg-purple-500/20 rounded-lg group-hover:animate-divine-pulse transition-all relative">
                  <Clock className="w-5 h-5 text-purple-500" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  {language === "en" ? item.dayEn : item.dayAm}
                </h3>
              </div>

              <p className="text-lg text-foreground/80 font-semibold relative z-10">
                {language === "en" ? item.timeEn : item.timeAm}
              </p>

              <div className="mt-4 pt-4 border-t border-yellow-500/20 relative z-10">
                <p className="text-sm text-foreground/60">
                  {language === "en" ? "East African Time" : "የኢትዮጵያ ሰዓት"}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* Important Note */}
        <Card className="mt-12 p-6 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 hover:border-yellow-500/60 transition-all animate-slideInLeft animate-breathe">
          <p className="text-sm text-foreground/70 text-center">
            {language === "en"
              ? "Please check with the church for any schedule changes or special events."
              : "እባክዎ ለማንኛውም ለውጥ በሚኖርበት ጊዜ ከቤተክርስቲያናችን ጋር ያረጋግጡ።"}
          </p>
        </Card>
      </div>
    </section>
  );
}
