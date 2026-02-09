import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
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
      {/* ================== GOOGLE ANALYTICS ================== */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZQY7NH7WTP"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-ZQY7NH7WTP');
        `}
      </Script>

      {/* ================== SCHEMA.ORG ================== */}
      <Script
        id="schema-beautysalon"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": ["BeautySalon", "LocalBusiness"],
          "@id": "https://kosmetikerin-valeriia.ch/#beautysalon",
          "telephone": "+41 76 516 51 54",
          name: "Kosmetikerin Valeriia",
          url: "https://kosmetikerin-valeriia.ch",
          logo: "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
          image: "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
          description:
            "Professionelle Behandlungen für Gesicht & Haarentfernung in Zürich.",
          address: {
            "@type": "PostalAddress",
            addressLocality: "Zürich",
            addressCountry: "CH",
          },
          areaServed: {
            "@type": "AdministrativeArea",
            name: "Zürich",
          },
          priceRange: "$$",
          sameAs: ["https://kosmetikerinvaleriia.setmore.com"],
        })}
      </Script>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Floating booking button */}

        <FloatingBookingButton />

      </body>
    </html>
  );
}

