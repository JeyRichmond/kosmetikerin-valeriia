import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import FloatingBookingButton from "@/components/FloatingBookingButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  /* ================== BASIC SEO ================== */
  title: {
    default: "Kosmetikerin Valeriia – Zürich",
    template: "%s | Kosmetikerin Valeriia",
  },
  description:
    "Professionelle Kosmetik, Gesichtsbehandlungen, Peelings & Haarentfernung in Zürich. Jetzt Termin online buchen.",

  /* ================== GOOGLE VERIFICATION ================== */
  verification: {
    google: "-DdpvDqDOj5fO8OIE4wPY-NdRscQzcb8zg3Qk-xMOzM",
  },

  /* ================== ICONS / LOGO ================== */
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/favicon-32x32.png",
      },
    ],
  },

  alternates: {
    canonical: "https://kosmetikerin-valeriia.ch",
    languages: {
      "de-CH": "https://kosmetikerin-valeriia.ch",
      "en-CH": "https://kosmetikerin-valeriia.ch/?lang=en",
      "uk-UA": "https://kosmetikerin-valeriia.ch/?lang=ua",
    },
  },

  /* ================== OPEN GRAPH (SOCIAL + GOOGLE) ================== */
  openGraph: {
    title: "Kosmetikerin Valeriia – Zürich",
    description:
      "Professionelle Gesichtsbehandlungen, Peelings & Haarentfernung in Zürich. Jetzt Termin buchen!",
    url: "https://kosmetikerin-valeriia.ch",
    siteName: "Kosmetikerin Valeriia",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
        width: 512,
        height: 512,
        alt: "Kosmetikerin Valeriia Logo",
      },
    ],
  },

  /* ================== ROBOTS ================== */
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },

  /* ================== META ================== */
  metadataBase: new URL("https://kosmetikerin-valeriia.ch"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Floating booking button */}
        <FloatingBookingButton />

        <script
  type="application/ld+json"
  dangerouslySetInnerHTML={{
    __html: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BeautySalon",
      "@id": "https://kosmetikerin-valeriia.ch/#beautysalon",
      "name": "Kosmetikerin Valeriia",
      "url": "https://kosmetikerin-valeriia.ch",
      "logo": "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
      "image": "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
      "description":
        "Professionelle Behandlungen für Gesicht & Haarentfernung in Zürich.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Zürich",
        "addressCountry": "CH"
      },
      "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Zürich"
      },
      "priceRange": "$$",
      "sameAs": [
        "https://kosmetikerinvaleriia.setmore.com"
      ]
    }),
  }}
/>


      </body>
    </html>
  );
}

