"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Globe } from "lucide-react";
import Hero from "@/components/Hero";
import DailyQuotes from "@/components/DailyQuotes";
import About from "@/components/About";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import SocialMedia from "@/components/SocialMedia";
import LeaderSection from "@/components/LeaderSection";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "am">("am"); // default to Amharic
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Load saved preferences
    const savedDark = localStorage.getItem("churchDarkMode") === "true";
    const savedLang =
      (localStorage.getItem("churchLanguage") as "en" | "am") || "am";
    setIsDark(savedDark);
    setLanguage(savedLang);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("churchDarkMode", isDark.toString());
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark, mounted]);

  useEffect(() => {
    if (!mounted) return;
    localStorage.setItem("churchLanguage", language);
    // update html lang attribute for accessibility/SEO
    document.documentElement.lang = language === "en" ? "en" : "am";
  }, [language, mounted]);

  // fade-in on scroll using intersection observer
  useEffect(() => {
    if (!mounted) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("opacity-0");
            entry.target.classList.add("animate-fadeInUp");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".scroll-fade").forEach((el) => {
      observer.observe(el);
    });
    return () => observer.disconnect();
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* Header with Toggles */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
          <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/images/church-logo.png"
                alt="church logo"
                className="w-10 h-10 object-contain"
              />
              <div className="font-bold text-lg text-foreground hidden sm:block">
                {language === "en"
                  ? "Heavenly Places Blessings International Church"
                  : "ሰማያዊ ስፍራ በረከት አለም አቀፍ ቤተ ክርስቲያን"}
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Language Switcher */}
              <button
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className="p-2 rounded-lg hover:bg-accent transition-colors flex items-center gap-2 text-foreground hover-glow"
                aria-label="Toggle language"
              >
                <Globe size={20} />
                <span className="text-sm font-medium">
                  {language === "en" ? "🇺🇸" : "🇪🇹"}
                </span>
              </button>

              {/* Dark Mode Toggle */}
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-accent transition-colors text-foreground hover-glow"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        <main className="pt-16">
          <Hero language={language} />
          <DailyQuotes language={language} />
          <About language={language} />
          <Schedule language={language} />
          <Gallery language={language} />
          <Videos language={language} />
          <LeaderSection language={language} />
          <Location language={language} />
          <SocialMedia language={language} />

          {/* Footer */}
          <footer className="bg-secondary text-foreground py-8 border-t border-border">
            <div className="max-w-7xl mx-auto px-4 text-center">
              <p className="text-sm">
                {language === "en"
                  ? "© 2026 Heavenly Places Blessings International Church. Visioned by Prophet Temesgen Wogaso."
                  : "© 2026 ሰማያዊ ስፍራ በረከት አለም አቀፍ ቤተ ክርስቲያን ። በነቢይ ተመስገን ወገሶ ታሪካዊ ዓላማ።"}
              </p>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
}
