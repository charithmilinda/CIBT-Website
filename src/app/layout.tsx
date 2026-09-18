import type { Metadata } from "next";
import { Manrope, Inter } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

// Replace with your actual live domain in production
// Fallback placeholder — set NEXT_PUBLIC_SITE_URL to your real domain once confirmed.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://your-domain.example";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Impact Education | Premier Higher Education Pathways to New Zealand",
    template: "%s | Impact Education",
  },
  description:
    "Official higher education pathway provider for Sri Lankan students. Transfer directly to top-ranked New Zealand universities after GCE O/L or A/L.",
  keywords: [
    "Impact Education",
    "Study in New Zealand",
    "Sri Lanka Higher Education",
    "New Zealand University Transfer",
    "GCE A/L Pathways",
    "GCE O/L Foundation",
    "Victoria University of Wellington",
  ],
  authors: [{ name: "Impact Education" }],
  creator: "Impact Education",
  publisher: "Impact Education",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_LK",
    url: siteUrl,
    siteName: "Impact Education",
    title: "Impact Education | Premier Higher Education Pathways to New Zealand",
    description:
      "Transfer directly to top-ranked New Zealand universities after GCE O/L or A/L with accredited pathways.",
    images: [
      {
        url: "/opengraph-image", // Points to the dynamic image route built in Step 2
        width: 1200,
        height: 630,
        alt: "Impact Education - Pathways to New Zealand",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Impact Education | Premier Higher Education Pathways to New Zealand",
    description:
      "Transfer directly to top-ranked New Zealand universities after GCE O/L or A/L.",
    images: ["/opengraph-image"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${manrope.variable}${inter.variable}`}>
      <body className="font-sans bg-canvas text-charcoal antialiased">
        {children}
      </body>
    </html>
  );
}