"use client";

import { MapPin, Phone } from "lucide-react";
import { Card } from "@/components/ui/card";
import { CHURCH_NAME } from "@/lib/constants";

interface LocationProps {
  language: "en" | "am";
}

export default function Location({ language }: LocationProps) {
  return (
    <section className="py-12 md:py-24 px-4 sm:px-6 bg-background scroll-fade opacity-0">
      <div className="max-w-5xl mx-auto">
        {/* Shimmer heading */}
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 animate-fadeInDown animate-shimmer-text"
          style={{
            backgroundImage:
              "linear-gradient(90deg, #1e3a5f 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #1e3a5f 80%)",
            backgroundSize: "200% auto",
          }}
        >
          {language === "en" ? "Visit Us" : "ይጎብኙን"}
        </h2>

        {/* Gold breathe divider */}
        <div
          className="w-24 h-1 mx-auto mb-8 md:mb-12 rounded-full animate-breathe"
          style={{
            background:
              "linear-gradient(90deg, #1e3a5f, #d4af37, #fef08a, #d4af37, #1e3a5f)",
          }}
        />

        {/* Stacks on mobile, side-by-side on md+ */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Map — fixed height on mobile, flexible on md */}
          <div className="rounded-xl overflow-hidden shadow-lg border border-yellow-500/20 animate-slideInLeft animate-gold-glow">
            <div className="relative w-full h-64 sm:h-80 md:h-full md:min-h-[380px]">
              <iframe
                width="100%"
                height="100%"
                frameBorder="0"
                title={language === "en" ? "Church Location" : "የቤተክርስቲያን አድራሻ"}
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.7066379283427!2d38.74889!3d9.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwMDEnNDguMCJOIDM4wrA0NCc1My43IkU!5e0!3m2!1sen!2set!4v1234567890"
                className="absolute inset-0 w-full h-full"
                allowFullScreen={true}
                loading="lazy"
              />
            </div>
          </div>

          {/* Info cards */}
          <div className="flex flex-col justify-center gap-4 md:gap-6 animate-slideInRight">
            {/* Address */}
            <Card className="p-5 md:p-6 bg-card border-accent/30 hover:border-yellow-500/60 hover:shadow-yellow-500/10 transition-all duration-300 hover:animate-gold-glow">
              <div className="flex items-start gap-3 md:gap-4">
                <div className="p-2 md:p-3 bg-accent/10 rounded-lg flex-shrink-0">
                  <MapPin className="w-5 h-5 md:w-6 md:h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-bold text-foreground mb-1 md:mb-2">
                    {language === "en" ? "Address" : "አድራሻ"}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm md:text-base">
                    {language === "en" ? CHURCH_NAME.en : CHURCH_NAME.am}
                    <br />
                    {language === "en" ? "Addis Ababa, Ethiopia" : "አዲስ አበባ፣ ኢትዮጵያ"}
                  </p>
                </div>
              </div>
            </Card>

            {/* Directions */}
            <Card className="p-5 md:p-6 bg-card border-accent/30 hover:border-yellow-500/60 hover:shadow-yellow-500/10 transition-all duration-300 hover:animate-gold-glow">
              <h3 className="text-base md:text-lg font-bold text-foreground mb-3 md:mb-4">
                {language === "en" ? "Directions" : "አቅጣጫ"}
              </h3>
              <a
                href="https://www.google.com/maps/search/Gospel+Church+Addis+Ababa"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors font-medium hover-glow text-sm md:text-base"
              >
                {language === "en" ? "Get Directions" : "አቅጣጫ ያግኙ"}
                <svg className="w-3 h-3 md:w-4 md:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </a>
            </Card>

            {/* Welcome note */}
            <Card className="p-5 md:p-6 bg-accent/5 border-accent/30 animate-breathe hover:animate-gold-glow">
              <p className="text-sm md:text-base text-foreground/70 leading-relaxed">
                {language === "en"
                  ? "We welcome all visitors. Please feel free to join us for any of our services."
                  : "እንኳን ወደ ቤተክርስቲያናችን ደህና መጡ፤ በደስታ እንቀበሎታለን።"}
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
