"use client";

import Image from "next/image";
import { useState } from "react";
import { useBooking } from "@/components/useBooking";
import { translations, LangKey } from "@/lib/translations";
import HeroSection from "@/components/sections/HeroSection";
import PromoSection from "@/components/sections/PromoSection";
import PricesSection from "@/components/sections/PricesSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/FAQSection";

export default function HomePage() {
  const [lang, setLang] = useState<LangKey>(() => {
  if (typeof window === "undefined") return "de";

  const savedLang = localStorage.getItem("lang") as LangKey | null;
  return savedLang && translations[savedLang] ? savedLang : "de";
});
  const t = translations[lang] ?? translations.de;
  
  const { openBooking } = useBooking();

  return (
    <>
    <div className="min-h-screen bg-white text-(--brand-dark) flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-20 bg-white/80 backdrop-blur">

      {/* Sticky top area: promo + header */}
<div className="sticky top-0 z-30">
  {/* Top promo bar */}
  <div className="w-full bg-black">
    <div className="max-w-6xl mx-auto px-4 py-2 flex justify-center">
      <p className="text-xs md:text-sm text-white tracking-wide">
        <span className="text-(--brand-gold) font-semibold">
          Willkommensangebot:
        </span>
        <span className="ml-2">
          10 % Rabatt auf die erste Behandlung!
        </span>
      </p>
    </div>
  </div>
  </div>

        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Логотип / Название студии */}
           <div className="flex items-center gap-2">
            <Image
              src="/KV11.png"
              alt="Kosmetikerin Valeriia Logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
              priority
            />
           <div className="flex flex-col leading-tight">
             <span className="font-semibold tracking-wide">
               Kosmetikerin Valeriia
             </span>
             <span className="text-xs text-gray-500">
               Deine Haut. Mein Fokus.
             </span>
          </div>
        </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-(--brand-gold) transition-colors">
              {t.nav.home}
            </a>
            <a
              href="#prices"
              className="hover:text-(--brand-gold) transition-colors"
            >
              {t.nav.prices}
            </a>
            <a
              href="#about"
              className="hover:text-(--brand-gold) transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="hover:text-(--brand-gold) transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Справа: язык + комбинированная кнопка телефон / запись */}
           <div className="flex items-center gap-3">
            {/* Переключатель языка (как был) */}
             <div className="flex items-center text-xs border border-gray-200 rounded-full px-2 py-1 gap-1">
  {(["de", "en", "ua"] as LangKey[]).map((l) => (
    <button
      key={l}
      onClick={() => {
        setLang(l);
        localStorage.setItem("lang", l);
      }}
      className={`px-2 py-0.5 rounded-full transition
        ${lang === l
          ? "bg-(--brand-gold) text-white"
          : "hover:bg-gray-100"
        }`}
    >
      {l.toUpperCase()}
    </button>
  ))}
</div>

          <div className="hidden sm:inline-flex items-center text-sm rounded-full overflow-hidden shadow-sm border border-(--brand-gold) bg-white">
             {/* Телефoн */}
  <a
  href="https://wa.me/41765165154?text=Hallo%20Valeriia%2C%20ich%20möchte%20einen%20Termin%20buchen."
  target="_blank"
  rel="noopener noreferrer"
  className="px-3 py-2 text-(--brand-dark) flex items-center gap-1 hover:bg-black/5 transition-colors"
>
  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-(--brand-gold) text-[10px]">
    ☎
  </span>
  <span className="font-medium">{t.contact.dummyPhone}</span>
</a>


             {/* Termin buchen */}
              <button
                onClick={openBooking}
                className="bg-(--brand-gold) text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
              >
                {t.hero.primaryCta}
              </button>

             </div>
           </div>
        </div>
      </header>

      <main className="flex-1">
{/* Promo banner section (под хедером) */}
<PromoSection />

{/* HERO SECTION */}
<HeroSection t={t} />
        
 {/* HERO SECTION */}       
<PricesSection t={t} />

{/* About section */}
<AboutSection t={t} />

            {/* Contact & opening hours section */}
      <section id="contact" className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
            {/* Левая часть: телефон, адрес, часы, соцсети */}
            <div className="space-y-6 text-sm">
              {/* Телефон / адрес / часы в одну линию на десктопе */}
              <div className="grid gap-6 sm:grid-cols-3">
                {/* Адрес */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {t.contact.addressLabel}
                  </div>
                  <div className="text-gray-700">
                    <div>{t.contact.dummyAddressLine1}</div>
                    <div>{t.contact.dummyAddressLine2}</div>
                    <div>{t.contact.dummyAddressLine3}</div>
                    <div>{t.contact.dummyAddressLine4}</div>
                    <div>{t.contact.dummyAddressLine5}</div>
                  </div>
                </div>

                {/* Часы */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {t.contact.hoursLabel}
                  </div>
                  <div className="text-gray-700">
                    <div>{t.contact.hoursTextLine1}</div>
                  </div>
                </div>

              {/* Телефон */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {t.contact.phoneLabel}
                  </div>
                  <a
                    href={`tel:${t.contact.dummyPhone.replace(/\s/g, "")}`}
                    className="text-(--brand-dark) hover:text-(--brand-gold)"
                  >
                    {t.contact.dummyPhone}
                  </a>
                </div>
              </div>

              {/* Web & Social — только иконки */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {t.contact.socialLabel}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/41765165154"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.whatsapp}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#25D366"
                        d="M16 3C9.373 3 4 8.373 4 15c0 2.223.61 4.3 1.67 6.086L4 29l8.148-1.632A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
                      />
                      <path
                        fill="#fff"
                        d="M22.155 19.31c-.34-.17-2.01-.99-2.322-1.104-.312-.115-.54-.17-.768.17-.228.34-.882 1.104-1.082 1.332-.199.227-.397.255-.737.085-.34-.17-1.44-.53-2.743-1.69-1.015-.906-1.7-2.025-1.899-2.365-.199-.34-.021-.524.15-.694.155-.154.34-.397.51-.596.17-.198.227-.34.34-.567.114-.227.057-.425-.028-.595-.085-.17-.768-1.852-1.053-2.54-.278-.667-.56-.577-.768-.587l-.655-.01c-.227 0-.596.085-.907.397-.312.311-1.19 1.16-1.19 2.83 0 1.67 1.22 3.284 1.39 3.512.17.227 2.4 3.66 5.818 5.13.813.351 1.447.561 1.94.718.815.259 1.557.223 2.144.135.654-.098 2.01-.822 2.295-1.616.283-.793.283-1.472.198-1.616-.085-.142-.312-.227-.653-.396z"
                      />
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/ValeriyaValeriyaN"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.telegram}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#229ED9"
                        d="M28.5 4.5 3.7 14.4c-1.7.7-1.7 1.7-.3 2.1l6.3 2 2.3 7c.3.8.6 1.1 1.2 1.1.6 0 .9-.2 1.3-.6l3.1-3 6.5 4.8c1.2.7 2 .3 2.3-1.1L30.8 6.2c.4-1.8-.7-2.6-2.3-1.7z"
                      />
                      <path
                        fill="#fff"
                        d="m23.1 9.6-10 9.2-.4 4.3-2-6.3 12.4-7.2z"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/kosmetikerin_valeriia"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.instagram}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <radialGradient
                        id="igGradient"
                        cx="0%"
                        cy="100%"
                        r="150%"
                      >
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="30%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </radialGradient>
                      <rect
                        x="4"
                        y="4"
                        width="24"
                        height="24"
                        rx="7"
                        fill="url(#igGradient)"
                      />
                      <circle cx="16" cy="16" r="5.5" fill="#fff" />
                      <circle cx="16" cy="16" r="3.2" fill="url(#igGradient)" />
                      <circle cx="22" cy="10" r="1.4" fill="#fff" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100030670843113"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.facebook}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#1877F2"
                        d="M16 3C9.383 3 4 8.383 4 15c0 5.985 4.388 10.937 10.125 11.85V19.25h-3.05V15h3.05v-2.9c0-3.016 1.79-4.688 4.533-4.688 1.313 0 2.686.235 2.686.235v2.96h-1.514c-1.492 0-1.956.925-1.956 1.874V15h3.328l-.532 4.25h-2.796v7.6C23.612 25.937 28 20.985 28 15 28 8.383 22.617 3 16 3z"
                      />
                      <path
                        fill="#fff"
                        d="M18.75 26.85v-7.6h2.796L22.078 15h-3.328v-1.52c0-.949.464-1.874 1.956-1.874h1.514v-2.96s-1.373-.235-2.686-.235c-2.743 0-4.533 1.672-4.533 4.688V15h-3.05v4.25h3.05v7.6h3.799z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Правая часть: компактная карта в одну линию с контактами */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {t.contact.mapLabel}
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm h-50">
               <iframe
                title="Google Maps"
                src="https://www.google.com/maps?q=Kosmetikerin+Valeriia+Zürich&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
               />
              </div>
            </div>
          </div>
        </div>

        <p className="sr-only">
  Kosmetikerin in Zürich – professionelle Gesichtsbehandlungen, Peelings und Haarentfernung.
</p>

      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>{t.footer.rights}</div>
        </div>
      </footer>
    </div>
    </>
  );
}

