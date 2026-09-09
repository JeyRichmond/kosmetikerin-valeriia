import {
  Instagram,
  MessageCircle,
  ArrowUpRight,
} from "lucide-react";
import type { LangKey } from "@/lib/translations";

type Props = {
  lang: LangKey;
};

const content = {
  de: {
    subtitle: "Professionelle Kosmetik in Zürich",
    nav: {
      treatments: "Behandlungen",
      prices: "Preise",
      about: "Über mich",
      faq: "FAQ",
      contact: "Kontakt",
    },
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    location: "Zürich · 8001",
    copyright: "© 2026 Kosmetikerin Valeriia",
    design: "Richmond Design",
  },

  en: {
    subtitle: "Professional beauty care in Zürich",
    nav: {
      treatments: "Treatments",
      prices: "Prices",
      about: "About me",
      faq: "FAQ",
      contact: "Contact",
    },
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    location: "Zürich · 8001",
    copyright: "© 2026 Kosmetikerin Valeriia",
    design: "Richmond Design",
  },

  ua: {
    subtitle: "Професійна косметологія в Цюриху",
    nav: {
      treatments: "Процедури",
      prices: "Ціни",
      about: "Про мене",
      faq: "FAQ",
      contact: "Контакти",
    },
    instagram: "Instagram",
    whatsapp: "WhatsApp",
    location: "Цюрих · 8001",
    copyright: "© 2026 Kosmetikerin Valeriia",
    design: "Richmond Design",
  },
} as const;

const navItems = [
  { key: "treatments", href: "#services" },
  { key: "prices", href: "#prices" },
  { key: "about", href: "#about" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export default function Footer({ lang }: Props) {
  const t = content[lang] ?? content.de;

  return (
    <footer className="border-t border-black/6 bg-[#111111] text-white">
      <div className="mx-auto max-w-360 px-6 py-12 sm:px-10 md:py-14 lg:px-12 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          {/* LEFT */}
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#D5AA1B]">
              Kosmetikerin Valeriia
            </p>

            <h2 className="mt-4 max-w-130 text-[28px] font-semibold leading-[1.15] tracking-[-0.025em] text-white sm:text-[32px]">
              {t.subtitle}
            </h2>

            <p className="mt-4 text-[13px] tracking-[0.04em] text-white/45">
              {t.location}
            </p>
          </div>

          {/* RIGHT */}
          <div className="lg:text-right">
            <nav
              aria-label="Footer navigation"
              className="flex flex-wrap gap-x-5 gap-y-3 lg:justify-end"
            >
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  className="text-[12px] font-medium text-white/65 transition-colors duration-300 hover:text-[#D5AA1B]"
                >
                  {t.nav[item.key]}
                </a>
              ))}
            </nav>

            <div className="mt-6 flex flex-wrap items-center gap-3 lg:justify-end">
              <a
                href="https://www.instagram.com/kosmetikerin_valeriia"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-[12px] font-medium text-white/70 transition-all duration-300 hover:border-[#D5AA1B]/40 hover:text-[#D5AA1B]"
              >
                <Instagram size={15} strokeWidth={1.6} />
                {t.instagram}
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>

              <a
                href="https://wa.me/41765165154?text=Hallo%20Valeriia%2C%20ich%20möchte%20einen%20Termin%20buchen."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex h-10 items-center gap-2 rounded-full border border-white/10 px-4 text-[12px] font-medium text-white/70 transition-all duration-300 hover:border-[#D5AA1B]/40 hover:text-[#D5AA1B]"
              >
                <MessageCircle size={15} strokeWidth={1.6} />
                {t.whatsapp}
                <ArrowUpRight
                  size={13}
                  strokeWidth={1.6}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 pb-2 text-[11px] text-white/45 sm:flex-row sm:items-center sm:justify-between">

          <p>{t.design}</p>
        </div>
      </div>
    </footer>
  );
}