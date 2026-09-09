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
  const [lang, setLang] = useState<LangKey>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("lang") as LangKey | null;

      return saved && translations[saved] ? saved : "de";
    }

    return "de";
  });

  const [hasRendered, setHasRendered] = useState(false);

  const t = translations[lang] ?? translations.de;
  const { openBooking } = useBooking();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setHasRendered(true);
    }, 0);

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  /*
   * Booking + Google Ads conversion tracking
   *
   * Эту функцию передаём в Header.
   * Поэтому любая кнопка "Termin buchen" в Header
   * сначала отправит conversion в Google Ads,
   * а затем откроет Setmore.
   */
  const handleBookingWithTracking = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17869784445/GxbfCK_qxeEbEP2K_chC",
      });
    }

    openBooking();
  };

  /*
   * Переключение языка
   */
  const toggleLang = (newLang: LangKey) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  /*
   * Избегаем различий между SSR и первым
   * клиентским рендером из-за localStorage.
   */
  if (!hasRendered) {
    return <div className="min-h-screen bg-[#FAF9F6]" />;
  }

  return (
    <div className="min-h-screen bg-white text-(--brand-dark) flex flex-col pb-18 lg:pb-0">
      {/* =========================
          HEADER
      ========================== */}
      <Header
        lang={lang}
        onLangChange={toggleLang}
        onBook={handleBookingWithTracking}
      />

      {/* =========================
          MAIN CONTENT
      ========================== */}
      <main className="flex-1 pt-19.5">
        {/* Пока оставляем существующие секции без изменений */}

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
  onBook={handleBookingWithTracking}
/>

<AboutSection t={t} />

<FAQSection lang={lang} />

<ContactSection
  lang={lang}
  onBook={handleBookingWithTracking}
/>

      </main>

<Footer lang={lang} />

    </div>
  );
}