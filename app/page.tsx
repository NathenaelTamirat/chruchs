"use client";

import { useState, useEffect } from "react";
import { Moon, Sun, Globe, Menu, X } from "lucide-react";
import Hero from "@/components/Hero";
import DailyQuotes from "@/components/DailyQuotes";
import About from "@/components/About";
import Location from "@/components/Location";
import Schedule from "@/components/Schedule";
import SocialMedia from "@/components/SocialMedia";
import LeaderSection from "@/components/LeaderSection";
import Gallery from "@/components/Gallery";
import Videos from "@/components/Videos";
import HeavenlyParticles from "@/components/HeavenlyParticles";

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [language, setLanguage] = useState<"en" | "am">("am");
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedDark = localStorage.getItem("churchDarkMode") === "true";
    const savedLang = (localStorage.getItem("churchLanguage") as "en" | "am") || "am";
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
    document.documentElement.lang = language === "en" ? "en" : "am";
  }, [language, mounted]);

  // Scroll-fade via IntersectionObserver
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
      { threshold: 0.1 },
    );
    document.querySelectorAll(".scroll-fade").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  // Close mobile menu on scroll
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleScroll = () => setMobileMenuOpen(false);
    window.addEventListener("scroll", handleScroll, { passive: true, once: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  if (!mounted) return null;

  return (
    <div className={`${isDark ? "dark" : ""}`}>
      {/* Global heavenly floating particles */}
      <HeavenlyParticles />

      <div className="min-h-screen bg-background transition-colors duration-300">
        {/* ── Header ─────────────────────────────────── */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-background/85 backdrop-blur-md border-b border-border">
          {/* Thin golden shimmer bar at top of header */}
          <div
            className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none animate-shimmer-text"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(212,175,55,0.7), rgba(255,235,130,1), rgba(212,175,55,0.7), transparent)",
              backgroundSize: "200% auto",
            }}
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
            {/* Logo + name */}
            <div className="flex items-center gap-2 sm:gap-3 min-w-0">
              <div className="relative flex-shrink-0">
                <div
                  className="absolute inset-0 rounded-full animate-divine-pulse opacity-60 pointer-events-none"
                  style={{ inset: "-3px" }}
                />
                <img
                  src="/images/church-logo.png"
                  alt="church logo"
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain relative z-10 animate-cross-glow"
                />
              </div>
              {/* Church name — truncates on very small screens */}
              <div className="font-bold text-sm sm:text-base md:text-lg text-foreground truncate max-w-[140px] xs:max-w-[180px] sm:max-w-none">
                {language === "en"
                  ? "Heavenly Places Blessings International Church"
                  : "ሰማያዊ ስፍራ በረከት አለም አቀፍ ቤተ ክርስቲያን"}
              </div>
            </div>

            {/* Desktop controls */}
            <div className="hidden sm:flex items-center gap-3 md:gap-4">
              <button
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className="p-2 rounded-lg hover:bg-accent/20 transition-colors flex items-center gap-1.5 text-foreground hover-glow"
                aria-label="Toggle language"
              >
                <Globe size={18} />
                <span className="text-sm font-medium">{language === "en" ? "🇺🇸" : "🇪🇹"}</span>
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-2 rounded-lg hover:bg-accent/20 transition-colors text-foreground hover-glow"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            </div>

            {/* Mobile: compact controls inline + hamburger */}
            <div className="flex sm:hidden items-center gap-1">
              <button
                onClick={() => setLanguage(language === "en" ? "am" : "en")}
                className="p-1.5 rounded-lg hover:bg-accent/20 transition-colors text-foreground"
                aria-label="Toggle language"
              >
                <span className="text-base">{language === "en" ? "🇺🇸" : "🇪🇹"}</span>
              </button>
              <button
                onClick={() => setIsDark(!isDark)}
                className="p-1.5 rounded-lg hover:bg-accent/20 transition-colors text-foreground"
                aria-label="Toggle dark mode"
              >
                {isDark ? <Sun size={16} /> : <Moon size={16} />}
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-1.5 rounded-lg hover:bg-accent/20 transition-colors text-foreground ml-1"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </div>

          {/* Mobile slide-down nav menu */}
          {mobileMenuOpen && (
            <div className="sm:hidden bg-background/95 backdrop-blur-md border-t border-border px-4 py-3 flex flex-col gap-2 animate-fadeInDown">
              {[
                { href: "#about", labelEn: "About", labelAm: "ስለ ቤተ" },
                { href: "#schedule", labelEn: "Schedule", labelAm: "ሰንጠረዥ" },
                { href: "#gallery", labelEn: "Gallery", labelAm: "ምስሎች" },
                { href: "#videos", labelEn: "Sermons", labelAm: "ስርሕ" },
                { href: "#leader", labelEn: "Leadership", labelAm: "መሪነት" },
                { href: "#location", labelEn: "Visit Us", labelAm: "ጉብኝት" },
                { href: "#connect", labelEn: "Connect", labelAm: "ያገናኙ" },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="py-2 px-3 rounded-lg text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium text-sm"
                >
                  {language === "en" ? item.labelEn : item.labelAm}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* ── Page Sections ───────────────────────────── */}
        <main className="pt-14 sm:pt-16">
          <div id="hero"><Hero language={language} /></div>
          <div id="quotes"><DailyQuotes language={language} /></div>
          <div id="about"><About language={language} /></div>
          <div id="schedule"><Schedule language={language} /></div>
          <div id="gallery"><Gallery language={language} /></div>
          <div id="videos"><Videos language={language} /></div>
          <div id="leader"><LeaderSection language={language} /></div>
          <div id="location"><Location language={language} /></div>
          <div id="connect"><SocialMedia language={language} /></div>

          {/* Footer */}
          <footer className="bg-secondary text-foreground py-8 md:py-10 border-t border-yellow-500/20 relative overflow-hidden">
            <div
              className="absolute top-0 left-0 right-0 h-[2px] pointer-events-none"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(212,175,55,0.5), rgba(255,235,130,0.9), rgba(212,175,55,0.5), transparent)",
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.05) 0%, transparent 70%)",
              }}
            />
            <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
              <div className="flex justify-center gap-3 md:gap-4 mb-3 md:mb-4 opacity-40">
                <span className="text-yellow-400 text-xs animate-sparkle" style={{ animationDelay: "0.0s" }}>✦</span>
                <span className="text-yellow-300 text-sm animate-sparkle" style={{ animationDelay: "0.6s" }}>✦</span>
                <span className="text-yellow-400 text-xs animate-sparkle" style={{ animationDelay: "1.2s" }}>✦</span>
              </div>
              <p className="text-xs sm:text-sm text-foreground/70 leading-relaxed">
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
