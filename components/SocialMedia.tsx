"use client";

import { Card } from "@/components/ui/card";
import { Facebook, Youtube } from "lucide-react";

interface SocialMediaProps {
  language: "en" | "am";
}

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
    <path d="M224,202.66A53.34,53.34,0,1,0,277.34,256,53.38,53.38,0,0,0,224,202.66Zm124.71-41a54,54,0,0,0-30.86-30.86C289.81,124,224,124,224,124s-65.81,0-93.85,6.81a54,54,0,0,0-30.86,30.86C94.42,165.19,94.42,224,94.42,224s0,58.81,5.87,93.85a54,54,0,0,0,30.86,30.86C158.19,324,224,324,224,324s65.81,0,93.85-5.87a54,54,0,0,0,30.86-30.86C353.58,282.81,353.58,224,353.58,224S353.58,165.19,348.71,161.66ZM224,338a82,82,0,1,1,82-82A82.09,82.09,0,0,1,224,338Zm85.33-148.67a19.2,19.2,0,1,1-19.2-19.2A19.2,19.2,0,0,1,309.33,189.33Z" />
  </svg>
);

const TikTokIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12">
    <path d="M448,209.91a210.09,210.09,0,0,1-131.08-43.5v98.84a83.15,83.15,0,0,1-83.52-82.9V0H164.8C74.27,0,0,74.23,0,164.76a164.65,164.65,0,0,0,43,110.1A164.21,164.21,0,0,0,164,352c72.24,0,131.72-51.22,151.94-118.63V317.5A83.19,83.19,0,0,1,233.42,400c-45.79,0-83.42-37.6-83.42-83.5s37.63-83.5,83.42-83.5a83.09,83.09,0,0,1,51.58,17.68V209.91Z" />
  </svg>
);

const socialLinks = [
  { name: "Facebook", icon: Facebook, url: "https://www.facebook.com/share/15bQzSkMTHV/?mibextid=wwXIfr", color: "text-blue-600" },
  { name: "Instagram", icon: InstagramIcon, url: "https://www.instagram.com/prophettemesgen", color: "text-pink-500" },
  { name: "TikTok", icon: TikTokIcon, url: "https://www.tiktok.com/@temesgenamilake50", color: "text-black dark:text-white" },
  { name: "YouTube", icon: Youtube, url: "https://youtube.com/@prophettemesgenwogaso", color: "text-red-600" },
];

export default function SocialMedia({ language }: SocialMediaProps) {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-orange-500/5 via-background to-yellow-500/5 scroll-fade opacity-0">
      <div className="max-w-5xl mx-auto">
        {/* Shimmer heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeInDown animate-shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #92400e 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #92400e 80%)",
            backgroundSize: "200% auto",
          }}
        >
          {language === "en" ? "Connect With Us" : "ከእኛ ጋር ያገናኙ"}
        </h2>

        <div
          className="w-24 h-1 mx-auto mb-4 rounded-full animate-breathe"
          style={{ background: "linear-gradient(90deg, #92400e, #d4af37, #fef08a, #d4af37, #92400e)" }}
        />

        <p className="text-center text-foreground/70 mb-8 md:mb-12 text-sm sm:text-base max-w-2xl mx-auto">
          {language === "en"
            ? "Follow us on social media for updates, messages, and community news."
            : "ለወቅታዊ መረጃ፣ መልእክቶች እና ማህበረሰብ ጫዋታዎች ፌስቡክ ይከተሉ።"}
        </p>

        {/* Social grid: 2×2 on xs/sm, 4 on md+ */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            const colors = [
              "from-blue-500/20 to-blue-500/5 border-blue-500/30 hover:border-blue-500/60 hover:shadow-blue-500/20",
              "from-pink-500/20 to-pink-500/5 border-pink-500/30 hover:border-pink-500/60 hover:shadow-pink-500/20",
              "from-cyan-500/20 to-cyan-500/5 border-cyan-500/30 hover:border-cyan-500/60 hover:shadow-cyan-500/20",
              "from-orange-500/20 to-orange-500/5 border-orange-500/30 hover:border-orange-500/60 hover:shadow-orange-500/20",
            ];
            return (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group animate-scaleUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card
                  className={`p-5 sm:p-6 md:p-8 bg-gradient-to-br ${colors[index]} border-2 hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center h-full hover-glow`}
                >
                  <Icon className={`group-hover:scale-125 transition-transform duration-300 ${social.color}`} />
                  <p className="mt-3 text-foreground font-bold text-center text-sm md:text-base">
                    {social.name}
                  </p>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Newsletter Signup */}
        <Card className="p-6 sm:p-8 md:p-12 bg-gradient-to-r from-orange-500/20 via-yellow-500/10 to-orange-500/20 border-2 border-orange-500/30 hover:border-yellow-500/60 shadow-lg hover:shadow-2xl transition-all animate-slideInUp animate-breathe">
          <div className="text-center max-w-2xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-yellow-600">
              {language === "en" ? "Stay Updated" : "ወቅታዊ ይስሙ"}
            </h3>
            <p className="text-foreground/70 mb-5 md:mb-6 text-sm sm:text-base">
              {language === "en"
                ? "Subscribe to our newsletter for weekly messages and updates."
                : "ለ ሳምንታዊ መልእክቶች እና ወቅታዊ መረጃ ይመዝገቡ።"}
            </p>
            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder={language === "en" ? "Your email address" : "የእርስዎ ኢሜይል አድራሻ"}
                className="flex-1 px-4 py-3 rounded-lg bg-background border border-border focus:outline-none focus:border-accent text-foreground text-sm md:text-base"
                required
              />
              <button
                type="submit"
                className="px-5 py-3 bg-gradient-to-r from-orange-600 to-yellow-600 text-white rounded-lg hover:shadow-lg hover:shadow-orange-500/40 hover:scale-105 transition-all font-bold whitespace-nowrap text-sm md:text-base"
              >
                {language === "en" ? "Subscribe" : "ይመዝገቡ"}
              </button>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}
