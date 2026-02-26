"use client";

import { useState } from "react";
import Image from "next/image";

interface GalleryProps {
  language: "en" | "am";
}

export default function Gallery({ language }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    {
      src: "/images/worship-1.jpg",
      alt: "Worship Service - Congregation",
      title: language === "en" ? "Sunday Worship" : "አርብ ሰአት ወርሃ",
    },
    {
      src: "/images/worship-2.jpg",
      alt: "Community Prayer",
      title: language === "en" ? "Prayer and Praise" : "ጸሎትና ምስጋና",
    },
    {
      src: "/images/worship-3.jpg",
      alt: "Gospel Teaching",
      title: language === "en" ? "Gospel Message" : "ወንጌል መልካም ዜና",
    },
    {
      src: "/images/worship-4.jpg",
      alt: "Community Fellowship",
      title: language === "en" ? "Fellowship" : "ጉባኤ",
    },
    {
      src: "/images/worship-5.jpg",
      alt: "Worship Gathering",
      title: language === "en" ? "Spiritual Unity" : "መንፈሳዊ አንድነት",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-background/50 scroll-fade opacity-0">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="mb-12 text-center animate-fadeInDown">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-yellow-600 to-orange-600">
            {language === "en" ? "Our Community" : "የእኛ ማህበረሰብ"}
          </h2>
          <p className="text-muted-foreground text-lg">
            {language === "en"
              ? "Moments of worship, fellowship, and spiritual growth at Heavenly Places Blessings International Church"
              : "በወንጌል ቤተክርስቲያን ውስጥ ወርሃ፣ ጉባኤ እና መንፈሳዊ እድገት"}
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer animate-scaleUp"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => setSelectedImage(index)}
            >
              {/* Image Container */}
              <div className="relative w-full h-64 md:h-72 overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                    <p className="text-sm text-gray-200">
                      {language === "en" ? "Click to view" : "ለመመልከት ጠቅ ያድርጉ"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Border Gradient */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-30 pointer-events-none transition-opacity duration-300" />
            </div>
          ))}
        </div>

        {/* Modal / Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeInDown"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-w-4xl max-h-[90vh] bg-black rounded-2xl overflow-hidden animate-scaleUp"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src}
                alt={images[selectedImage].alt}
                className="w-full h-full object-contain"
              />

              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-red-600 hover:bg-red-700 text-white p-2 rounded-full transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === 0
                        ? images.length - 1
                        : selectedImage - 1,
                    )
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                </button>
                <button
                  onClick={() =>
                    setSelectedImage(
                      selectedImage === images.length - 1
                        ? 0
                        : selectedImage + 1,
                    )
                  }
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-full transition-colors duration-200"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
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
