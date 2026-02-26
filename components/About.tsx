"use client";

import { Card } from "@/components/ui/card";
import { Heart, BookOpen, Users } from "lucide-react";
import { CHURCH_NAME } from "@/lib/constants";

interface AboutProps {
  language: "en" | "am";
}

export default function About({ language }: AboutProps) {
  const values = [
    {
      icon: Heart,
      titleEn: "Worship",
      titleAm: "ምግባር",
      descEn: "A place dedicated to worship and prayer",
      descAm: "ምግባር እና ጸሎት በሚደረግበት ቦታ",
    },
    {
      icon: BookOpen,
      titleEn: "Gospel Teaching",
      titleAm: "ወንጌል ትምህርት",
      descEn: "Sharing the message of Christ",
      descAm: "ስለ ክርስቶስ ዜና መስፋት",
    },
    {
      icon: Users,
      titleEn: "Community",
      titleAm: "ማህበረሰብ",
      descEn: "Building a strong faith community",
      descAm: "ጠንካራ ሙሉ ማህበረሰብ መገንባት",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background to-secondary/30 scroll-fade opacity-0">
      <div className="max-w-5xl mx-auto">
        {/* Section heading with shimmer */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeInDown animate-shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #ca8a04 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #ca8a04 80%)",
            backgroundSize: "200% auto",
          }}
        >
          {language === "en" ? "About Our Church" : "ስለ ቤተክርስቲያንን"}
        </h2>

        {/* Animated golden divider */}
        <div className="w-24 h-1 mx-auto mb-12 rounded-full animate-breathe"
          style={{
            background: "linear-gradient(90deg, #92400e, #d4af37, #fef08a, #d4af37, #92400e)",
          }}
        />

        {/* Main Description */}
        <Card className="p-8 md:p-12 mb-12 bg-secondary/50 border border-blue-500/30 hover:border-yellow-500/60 shadow-lg hover:shadow-yellow-500/20 transition-all duration-500 backdrop-blur-sm animate-slideInLeft">
          {/* Decorative top — tiny gold sparkle stars */}
          <div className="flex justify-end gap-2 mb-4 opacity-60">
            <span className="text-yellow-400 text-xs animate-sparkle" style={{ animationDelay: "0.0s" }}>✦</span>
            <span className="text-yellow-300 text-xs animate-sparkle" style={{ animationDelay: "0.5s" }}>✦</span>
            <span className="text-yellow-400 text-xs animate-sparkle" style={{ animationDelay: "1.0s" }}>✦</span>
          </div>
          <p className="text-lg text-foreground/90 leading-relaxed mb-6">
            {language === "en"
              ? `${CHURCH_NAME.en} is a Protestant church dedicated to the worship of God and the sharing of the Gospel of Jesus Christ. Founded and visioned by Prophet Temesgen Wogaso, our church serves as a beacon of faith, hope, and spiritual growth for our community.`
              : "ሰማያዊ ስፍራ በረከት አለም አቀፍ ቤተ ክርስቲያን የእግዚአብሔር ምግባር እና ስለ ለየሱስ ክርስቶስ ወንጌል መስፋት የሚታከል ፕሮቴስታንት ቤተክርስቲያን ነው። ነቢይ ተመስገን ወገሶ በመምራት፣ ቤተክርስቲያንን ሙሉ ስር ፀሎት እና ሙሉ ምግባር ቦታ አድርጋታለ።"}
          </p>
          <p className="text-lg text-foreground/90 leading-relaxed">
            {language === "en"
              ? "Under the prophetic vision and leadership of Prophet Temesgen Wogaso, we are committed to spreading the Gospel, fostering spiritual growth, and building a compassionate community of believers."
              : "በነቢይ ተመስገን ወገሶ ታሪካዊ ዓላማ ስር፣ እኛ ወንጌልን መስፋት፣ ሙሉ ምግባር መልካም አሠናውት እና ተስፋ ሙሉ ማህበረሰብ መገንባት ለመቆም ተጠርተናል።"}
          </p>
        </Card>

        {/* Values Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => {
            const Icon = value.icon;
            const colors = [
              "from-blue-500/20 to-cyan-500/20 border-blue-500/30 hover:border-yellow-500/60 hover:shadow-yellow-500/20",
              "from-purple-500/20 to-pink-500/20 border-purple-500/30 hover:border-yellow-500/60 hover:shadow-yellow-500/20",
              "from-emerald-500/20 to-teal-500/20 border-emerald-500/30 hover:border-yellow-500/60 hover:shadow-yellow-500/20",
            ];
            return (
              <Card
                key={index}
                className={`p-6 bg-gradient-to-br ${colors[index]} border hover:shadow-xl transition-all duration-500 animate-scaleUp group`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col items-center text-center">
                  {/* Icon with dual halo rings */}
                  <div className="mb-4 p-3 bg-accent/10 rounded-full relative group-hover:animate-divine-pulse transition-all duration-300">
                    <div className="halo-ring opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="halo-ring-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    <Icon className="w-6 h-6 text-accent relative z-10" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-foreground">
                    {language === "en" ? value.titleEn : value.titleAm}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {language === "en" ? value.descEn : value.descAm}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
