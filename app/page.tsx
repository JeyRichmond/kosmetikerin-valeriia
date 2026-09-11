"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/components/useBooking";
import { translations, LangKey } from "@/lib/translations";

import Header from "@/components/Header";
import HeroSection from "@/components/sections/HeroSection";
import PricesSection from "@/components/sections/PricesSection";
import AboutSection from "@/components/sections/AboutSection";
import PhilosophySection from "@/components/sections/PhilosophySection";
import TreatmentsSection from "@/components/sections/TreatmentsSection";
import ReviewsSection from "@/components/sections/ReviewsSection";
import WhyValeriiaSection from "@/components/sections/WhyValeriiaSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [lang, setLang] = useState<LangKey>("de");

  const t = translations[lang] ?? translations.de;
  const { openBooking } = useBooking();

  /*
   * Восстанавливаем сохранённый язык
   * после первого рендера.
   *
   * Благодаря этому немецкая версия
   * рендерится сразу без пустого экрана,
   * что лучше для LCP и SEO.
   */
 useEffect(() => {
  const saved = localStorage.getItem("lang") as LangKey | null;

  if (!saved || !translations[saved]) {
    return;
  }

  const timeout = window.setTimeout(() => {
    setLang(saved);
  }, 0);

  return () => {
    window.clearTimeout(timeout);
  };
}, []);

  /*
   * Booking
   *
   * Tracking и Google Ads conversion
   * централизованы внутри useBooking().
   */
  const handleBooking = () => {
    openBooking();
  };

  /*
   * Переключение языка
   */
  const toggleLang = (newLang: LangKey) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <div className="flex min-h-screen flex-col bg-white pb-18 text-(--brand-dark) lg:pb-0">
      {/* =========================
          HEADER
      ========================== */}
      <Header
        lang={lang}
        onLangChange={toggleLang}
        onBook={handleBooking}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="flex-1 pt-19.5">
        <HeroSection t={t} />

        <PhilosophySection t={t} />

        <TreatmentsSection t={t} />

        <PricesSection t={t} lang={lang} />

        <ReviewsSection
          t={t}
          googleReviewsUrl="https://www.google.com/maps/place/Kosmetikerin+Valeriia/@47.3784471,8.5419189,17z/data=!3m1!4b1!4m6!3m5!1s0x479aa13c5020309d:0xeea018b7890a540c!8m2!3d47.3784471!4d8.5444938!16s%2Fg%2F11yvtsshkm?entry=ttu&g_ep=EgoyMDI2MDkwMi4wIKXMDSoASAFQAw%3D%3D"
        />

        <WhyValeriiaSection
          lang={lang}
          onBook={handleBooking}
        />

        <AboutSection t={t} />

        <FAQSection lang={lang} />

        <ContactSection
          lang={lang}
          onBook={handleBooking}
        />
      </main>

      <Footer lang={lang} />
    </div>
  );
}