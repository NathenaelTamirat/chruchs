"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { CHURCH_NAME } from "@/lib/constants";

interface LeaderSectionProps {
  language: "en" | "am";
}

export default function LeaderSection({ language }: LeaderSectionProps) {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background via-rose-500/5 to-secondary scroll-fade opacity-0">
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <h2
          className="text-4xl md:text-5xl font-bold text-center mb-4 text-transparent bg-clip-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #9f1239 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #9f1239 80%)",
          }}
        >
          {language === "en" ? "Our Leadership" : "የእኛ መሪነት"}
        </h2>

        {/* Gold divider */}
        <div
          className="w-24 h-1 mx-auto mb-12 rounded-full"
          style={{
            background:
              "linear-gradient(90deg, #9f1239, #d4af37, #fef08a, #d4af37, #9f1239)",
          }}
        />

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative h-96 md:h-full overflow-visible">
            {/* Inner image container */}
            <div className="relative h-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/20 to-pink-500/20 z-10" />
              <Image
                src="/images/pastor-temesgen.jpg"
                alt="Prophet Temesgen Wogaso"
                fill
                className="object-cover"
              />
              {/* Golden light reflection on the image */}
              <div
                className="absolute inset-0 pointer-events-none z-20"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(212,175,55,0.12) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>

          {/* Content card */}
          <Card className="p-8 md:p-10 bg-gradient-to-br from-rose-500/10 to-pink-500/10 border-2 border-rose-500/30 shadow-lg">
            <div className="mb-2">
              <span className="inline-block px-4 py-2 bg-gradient-to-r from-rose-500/30 to-pink-500/30 text-rose-600 text-sm font-bold rounded-full border border-rose-500/50">
                {language === "en" ? "Prophet & Founder" : "ነቢይ እና ስታ"}
              </span>
            </div>

            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Prophet Temesgen Wogaso
            </h3>

            <p className="text-lg text-foreground/80 leading-relaxed mb-6">
              {language === "en"
                ? `Prophet Temesgen Wogaso is the visionary founder and spiritual leader of ${CHURCH_NAME.en}. With a deep commitment to spreading the Gospel and nurturing believers, he provides prophetic guidance and pastoral care to our congregation.`
                : "ነቢይ ተመስገን ወገሶ የወንጌል ቤተክርስቲያን ታሪካዊ ዓላማ እና መንፈሳዊ መሪ ነው። ወንጌልን መስፋት እና ሙሉ ምግባር በ ልባቸው፣ ወደ ቤተክርስቲያንም ነቢያዊ መመሪያ እና ሥራ ይሰጣሉ።"}
            </p>

            <p className="text-lg text-foreground/80 leading-relaxed">
              {language === "en"
                ? "Under his prophetic leadership, our church continues to grow in faith, unity, and spiritual maturity. He is dedicated to equipping believers with biblical knowledge and fostering a loving community of worshippers."
                : "በውሎ ነቢያዊ መሪነት ስር፣ ቤተክርስቲያንን ሙሉ ምግባር፣ ተዋህዶ እና መንፈሳዊ ሟች የሚራመዱት። ሙሉ ምግባር በሌላ ሙሉ ዕውቀት መታጠቅ እና ሙሉ ምግባር ማህበረሰብ መገንባት ወደ ታሪካዊ ሥራ ሲሆን።"}
            </p>

            <div className="mt-8 pt-8 border-t border-yellow-500/30">
              {/* Decorative golden sparkles row */}
              <div className="flex gap-2 mb-4 opacity-50">
                <span className="text-yellow-400 text-xs">✦</span>
                <span className="text-yellow-300 text-xs">✦</span>
                <span className="text-yellow-400 text-xs">✦</span>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">
                    {language === "en" ? "Title" : "ሙታ"}
                  </p>
                  <p className="text-lg text-foreground">
                    {language === "en"
                      ? "Founder & Spiritual Leader"
                      : "ስታ ተቋቋም እና መንፈሳዊ መሪ"}
                  </p>
                </div>
                <div>
                  <p className="text-sm text-foreground/60 uppercase tracking-wide font-semibold">
                    {language === "en" ? "Mission" : "ታሪካዊ ሥራ"}
                  </p>
                  <p className="text-lg text-foreground">
                    {language === "en"
                      ? "Sharing the Gospel & Spiritual Growth"
                      : "ወንጌል መስፋት እና መንፈሳዊ ሟች"}
                  </p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
