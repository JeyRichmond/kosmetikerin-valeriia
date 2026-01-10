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
  title: "Kosmetikerin Valeriia - Zürich",
  description:
    "Professionelle Kosmetik, Gesichtsbehandlungen & Haarentfernung in Zürich. Jetzt Termin buchen!",
  verification: {
    google: "-DdpvDqDOj5fO8OIE4wPY-NdRscQzcb8zg3Qk-xMOzM",
  },
  openGraph: {
    title: "Kosmetikerin Valeriia - Zürich",
    description:
      "Professionelle Kosmetik, Gesichtsbehandlungen & Haarentfernung in Zürich. Jetzt Termin buchen!",
    url: "https://kosmetikerin-valeriia.ch",
    siteName: "Kosmetikerin Valeriia",
    locale: "de_CH",
    type: "website",
  },
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

        {/* Фиксированная кнопка */}
        <FloatingBookingButton />
        
      </body>
    </html>
  );
}

