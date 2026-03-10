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
      <head>
        {/* ================== GOOGLE TAG (GTAL.JS) GA4 & ADS ================== */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-ZQY7NH7WTP"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            // Инициализация Google Analytics
            gtag('config', 'G-ZQY7NH7WTP');

            // Инициализация Google Ads
            gtag('config', 'AW-17869784445');
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
            name: "Kosmetikerin Valeriia",
            url: "https://kosmetikerin-valeriia.ch",
            logo: "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
            image: "https://kosmetikerin-valeriia.ch/android-chrome-512x512.png",
            description:
              "Professionelle Gesichtsbehandlungen, Peelings & Haarentfernung in Zürich.",
            telephone: "+41 76 516 51 54",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Weinbergstrasse 18",
              addressLocality: "Zürich",
              postalCode: "8001",
              addressCountry: "CH",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: 47.3785,
              longitude: 8.5419,
            },
            areaServed: {
              "@type": "City",
              name: "Zürich",
            },
            openingHoursSpecification: [
              {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                ],
                opens: "09:00",
                closes: "21:00",
              },
            ],
            priceRange: "$$",
            currenciesAccepted: "CHF",
            paymentAccepted: "Cash, Credit Card, TWINT",
            sameAs: ["https://kosmetikerinvaleriia.setmore.com"],
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Behandlungen",
              itemListElement: [
                { "@type": "OfferCatalog", name: "Gesichtsbehandlungen" },
                { "@type": "OfferCatalog", name: "Peelings" },
                { "@type": "OfferCatalog", name: "Haarentfernung" },
              ],
            },
          })}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <FloatingBookingButton />
      </body>
    </html>
  );
}