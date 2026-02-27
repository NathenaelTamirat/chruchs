import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

import { CHURCH_NAME, META_DESCRIPTION } from "@/lib/constants";

const geistSans = Geist({ subsets: ["latin"] });
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://heavenlyplacesblessings.com"),
  title: `${CHURCH_NAME.en} - Protestant Church & Place of Worship in Addis Ababa`,
  description: META_DESCRIPTION.en,
  keywords: [
    "Church services in Addis Ababa",
    "Christian worship schedule",
    "Heavenly Places Blessings Church messages",
    "Protestant Church Addis Ababa",
    "Prophet Temesgen Wogaso church",
    "Ethiopian Christian worship"
  ],
  generator: "Next.js",
  openGraph: {
    title: `${CHURCH_NAME.en} - Protestant Church in Addis Ababa`,
    description: META_DESCRIPTION.en,
    url: "https://heavenlyplacesblessings.com", // Example URL, should be updated with real one
    siteName: CHURCH_NAME.en,
    images: [
      {
        url: "/images/church-logo.png", // Must be an absolute URL in production
        width: 800,
        height: 600,
      },
    ],
    locale: "am_ET",
    type: "website",
  },
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="am">
      <body
        className={`${geistSans.className} ${geistMono.className} font-sans antialiased`}
      >
        {children}
        {/* subtle rotating cross logo */}
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none animate-flip-slow">
          <img
            src="/cross.svg"
            alt="church cross logo"
            className="w-12 h-12 sm:w-16 sm:h-16"
          />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
