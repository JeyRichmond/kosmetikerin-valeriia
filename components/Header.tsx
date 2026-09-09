"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Instagram, MessageCircle } from "lucide-react";
import { translations, LangKey } from "@/lib/translations";

type HeaderProps = {
  lang: LangKey;
  onLangChange: (lang: LangKey) => void;
  onBook: () => void;
};

export default function Header({
  lang,
  onLangChange,
  onBook,
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const t = translations[lang];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const handleBooking = () => {
    setIsMenuOpen(false);
    onBook();
  };

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false);

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const handleLanguageChange = (language: LangKey) => {
    onLangChange(language);
  };

  const navItems = [
    {
      label: t.nav.home,
      id: "home",
    },
    {
      label: t.nav.services,
      id: "services",
    },
    {
      label: t.nav.about,
      id: "about",
    },
    {
      label: t.nav.prices,
      id: "prices",
    },
    {
      label: t.nav.contact,
      id: "contact",
    },
  ];

  return (
    <>
      {/* =====================================================
          DESKTOP / MOBILE HEADER
      ====================================================== */}

      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-black/5 bg-[#FAF9F6]/95 shadow-sm backdrop-blur-md"
            : "bg-[#FAF9F6]"
        }`}
      >
        <div className="mx-auto flex h-[78px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <button
            type="button"
            onClick={() => scrollToSection("home")}
            aria-label="Kosmetikerin Valeriia"
            className="flex h-[72px] w-[145px] items-center justify-center overflow-hidden"
          >
            <Image
              src="/KV12.png"
              alt="Kosmetikerin Valeriia"
              width={140}
              height={80}
              priority
              className="h-auto w-[155px] object-contain"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => scrollToSection(item.id)}
                className="group relative py-2 text-[13px] font-medium tracking-[0.02em] text-[#171717] transition-colors duration-200 hover:text-[#B98A16]"
              >
                {item.label}

                <span className="absolute inset-x-0 bottom-0 mx-auto h-px w-0 bg-[#D5AA1B] transition-all duration-200 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Desktop Right Side */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Instagram */}
            <a
              href="https://www.instagram.com/kosmetikerin_valeriia"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="flex h-9 w-9 items-center justify-center rounded-full text-[#333] transition-colors duration-200 hover:text-[#B98A16]"
            >
              <Instagram size={17} strokeWidth={1.6} />
            </a>

            {/* WhatsApp */}
            <a
              href="https://wa.me/41765165154?text=Hallo%20Valeriia%2C%20ich%20möchte%20einen%20Termin%20buchen."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-2 text-[13px] text-[#333] transition-colors hover:text-[#B98A16] xl:flex"
            >
              <MessageCircle size={16} strokeWidth={1.6} />

              <span>+41 76 516 51 54</span>
            </a>

            {/* Languages */}
            <div className="flex items-center gap-1 border-l border-black/10 pl-4">
              {(["de", "en", "ua"] as LangKey[]).map((language) => (
                <button
                  key={language}
                  type="button"
                  onClick={() => handleLanguageChange(language)}
                  className={`px-1.5 py-1 text-[11px] font-medium uppercase tracking-[0.08em] transition-colors ${
                    lang === language
                      ? "text-[#B98A16]"
                      : "text-[#777] hover:text-[#222]"
                  }`}
                >
                  {language}
                </button>
              ))}
            </div>

            {/* Booking */}
            <button
              type="button"
              onClick={handleBooking}
              className="rounded-full bg-[#D5AA1B] px-6 py-3 text-[12px] font-semibold uppercase tracking-[0.08em] text-white transition-all duration-200 hover:bg-[#B98A16] hover:shadow-md"
            >
              {t.nav.book}
            </button>
          </div>

          {/* Mobile Right Side */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={handleBooking}
              className="rounded-full bg-[#D5AA1B] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.07em] text-white sm:px-5 sm:text-[11px]"
            >
              {t.nav.book}
            </button>

            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Open menu"
              className="flex h-10 w-10 items-center justify-center text-[#222]"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================
          FULL SCREEN MOBILE MENU
      ====================================================== */}

      <div
        className={`fixed inset-0 z-[100] bg-[#FAF9F6] transition-all duration-500 lg:hidden ${
          isMenuOpen
            ? "visible translate-x-0 opacity-100"
            : "invisible translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-full flex-col">
          {/* Mobile Menu Header */}
          <div className="flex h-[78px] shrink-0 items-center justify-between border-b border-black/5 px-5 sm:px-8">
            {/* Logo */}
            <button
              type="button"
              onClick={() => scrollToSection("home")}
              aria-label="Kosmetikerin Valeriia"
              className="flex h-[68px] w-[105px] items-center justify-center overflow-hidden"
            >
              <Image
                src="/KV12.png"
                alt="Kosmetikerin Valeriia"
                width={140}
                height={80}
                className="h-auto w-[125px] scale-[1.15] object-contain"
              />
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleBooking}
                className="rounded-full bg-[#D5AA1B] px-4 py-2.5 text-[10px] font-semibold uppercase tracking-[0.07em] text-white sm:px-5 sm:text-[11px]"
              >
                {t.nav.book}
              </button>

              <button
                type="button"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center text-[#222]"
              >
                <X size={25} strokeWidth={1.4} />
              </button>
            </div>
          </div>

          {/* Mobile Menu Content */}
          <div className="flex flex-1 flex-col overflow-y-auto px-7 pb-8 pt-6 sm:px-10">
            {/* Navigation */}
            <nav className="flex flex-col">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={`group flex items-center justify-between py-5 text-left ${
                    index !== navItems.length - 1
                      ? "border-b border-black/5"
                      : ""
                  }`}
                >
                  <span className="text-[20px] font-medium tracking-[-0.01em] text-[#171717]">
                    {item.label}
                  </span>

                  <span className="text-[19px] font-light text-[#D5AA1B] transition-transform duration-200 group-hover:translate-x-1">
                    →
                  </span>
                </button>
              ))}
            </nav>

            {/* Bottom area */}
            <div className="mt-auto pt-10">
              <div className="border-t border-black/5 pt-7">
                <div className="flex items-center justify-between">
                  {/* Languages */}
                  <div className="flex items-center gap-2">
                    {(["de", "en", "ua"] as LangKey[]).map((language) => (
                      <button
                        key={language}
                        type="button"
                        onClick={() => handleLanguageChange(language)}
                        className={`flex h-9 min-w-9 items-center justify-center rounded-full px-3 text-[11px] font-medium uppercase tracking-[0.08em] transition-all ${
                          lang === language
                            ? "bg-[#D5AA1B] text-white"
                            : "bg-black/[0.05] text-[#777]"
                        }`}
                      >
                        {language}
                      </button>
                    ))}
                  </div>

                  {/* Social */}
                  <div className="flex items-center gap-2">
                    <a
                      href="https://wa.me/41765165154?text=Hallo%20Valeriia%2C%20ich%20möchte%20einen%20Termin%20buchen."
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="WhatsApp"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#333]"
                    >
                      <MessageCircle size={17} strokeWidth={1.5} />
                    </a>

                    <a
                      href="https://www.instagram.com/kosmetikerin_valeriia"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Instagram"
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-[#333]"
                    >
                      <Instagram size={17} strokeWidth={1.5} />
                    </a>
                  </div>
                </div>

                {/* Main CTA inside menu */}
                <button
                  type="button"
                  onClick={handleBooking}
                  className="mt-7 w-full rounded-full bg-[#D5AA1B] px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#B98A16]"
                >
                  {t.nav.book}
                </button>

                <p className="mt-6 text-center text-[10px] uppercase tracking-[0.18em] text-black/35">
                  Kosmetikerin Valeriia · Zürich
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}