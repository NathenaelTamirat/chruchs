"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  language: "en" | "am";
}

export default function Gallery({ language }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { src: "/images/worship-1.jpg", alt: "Worship Service - Congregation", title: language === "en" ? "Sunday Worship" : "እሁድ አምልኮ" },
    { src: "/images/worship-2.jpg", alt: "Community Prayer", title: language === "en" ? "Prayer and Praise" : "ጸሎትና ምስጋና" },
    { src: "/images/worship-3.jpg", alt: "Gospel Teaching", title: language === "en" ? "Gospel Message" : "ወንጌል ስርጭት" },
    { src: "/images/worship-4.jpg", alt: "Community Fellowship", title: language === "en" ? "Fellowship" : "ጉባኤ" },
    { src: "/images/worship-5.jpg", alt: "Worship Gathering", title: language === "en" ? "Spiritual Unity" : "መንፈሳዊ አንድነት" },
  ];

  return (
    <section className="py-12 md:py-24 bg-gradient-to-b from-background to-background/50 scroll-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="mb-8 md:mb-12 text-center animate-fadeInDown">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 md:mb-4 animate-shimmer-text"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #92400e 20%, #d4af37 40%, #fef08a 50%, #d4af37 60%, #92400e 80%)",
              backgroundSize: "200% auto",
            }}
          >
            {language === "en" ? "Our Community" : "የእኛ ማህበረሰብ"}
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base md:text-lg max-w-xl md:max-w-2xl mx-auto px-2">
            {language === "en"
              ? "Moments of worship, fellowship, and spiritual growth at Heavenly Places Blessings International Church"
              : "የሰማያዊ ስፍራዎች በረከት አለም አቀፍ ቤተክርስቲያን የአምልኮ፣ የኅብረት፣ እና የመንፈሳዊ እድገት ጊዜያት"}
          </p>
        </div>

        {/* Gallery Grid — 1 col on xs, 2 on sm, 3 on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scaleUp hover:animate-gold-glow"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative w-full h-52 sm:h-56 md:h-64 lg:h-72 overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 md:p-6 text-left">
                  <div className="text-white">
                    <h3 className="text-base md:text-xl font-bold mb-1">{image.title}</h3>
                    <p className="text-xs md:text-sm text-gray-200">
                      {language === "en" ? "Click to view" : "ለመመልከት ጠቅ ያድርጉ"}
                    </p>
                  </div>
                </div>
              </div>
              {/* Border Gradient on hover */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4 animate-fadeInDown"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-sm sm:max-w-2xl md:max-w-4xl max-h-[90vh] bg-black rounded-xl sm:rounded-2xl overflow-hidden animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                width={1200}
                height={800}
                className="w-full h-full object-contain max-h-[80vh]"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-3 right-3 md:top-4 md:right-4 bg-red-600 hover:bg-red-700 text-white p-1.5 md:p-2 rounded-full transition-colors duration-200"
                aria-label="Close"
              >
                <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation */}
              <div className="absolute bottom-3 md:bottom-4 left-1/2 -translate-x-1/2 flex gap-3 md:gap-4">
                <button
                  onClick={() => setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 md:p-2 rounded-full transition-colors duration-200"
                  aria-label="Previous image"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={() => setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1)}
                  className="bg-blue-600 hover:bg-blue-700 text-white p-1.5 md:p-2 rounded-full transition-colors duration-200"
                  aria-label="Next image"
                >
                  <svg className="w-4 h-4 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
