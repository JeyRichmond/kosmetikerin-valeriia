import {
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Clock3,
  ArrowUpRight,
  Send,
  Facebook,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import type { LangKey } from "@/lib/translations";

type Props = {
  lang: LangKey;
  onBook: () => void;
};

const content = {
  de: {
    eyebrow: "Kontakt · Zürich",
    title: "Besuchen Sie mich in Zürich.",
    intro:
      "Mein Studio befindet sich zentral in Zürich. Termine können Sie bequem online buchen oder mich direkt kontaktieren.",
    addressLabel: "Adresse",
    addressLine1: "Weinbergstrasse 18",
    addressLine2: "8001 Zürich",
    hoursLabel: "Öffnungszeiten",
    hoursLine1: "Montag – Samstag",
    hoursLine2: "09:00 – 21:00",
    contactLabel: "Kontakt",
    phone: "+41 76 516 51 54",
    book: "Termin buchen",
    mapLabel: "Standort",
  },

  en: {
    eyebrow: "Contact · Zürich",
    title: "Visit me in Zürich.",
    intro:
      "My studio is centrally located in Zürich. You can conveniently book your appointment online or contact me directly.",
    addressLabel: "Address",
    addressLine1: "Weinbergstrasse 18",
    addressLine2: "8001 Zürich",
    hoursLabel: "Opening hours",
    hoursLine1: "Monday – Saturday",
    hoursLine2: "09:00 – 21:00",
    contactLabel: "Contact",
    phone: "+41 76 516 51 54",
    book: "Book appointment",
    mapLabel: "Location",
  },

  ua: {
    eyebrow: "Контакти · Цюрих",
    title: "Завітайте до мене в Цюриху.",
    intro:
      "Мій салон знаходиться в центральній частині Цюриха. Ви можете зручно записатися онлайн або зв’язатися зі мною напряму.",
    addressLabel: "Адреса",
    addressLine1: "Weinbergstrasse 18",
    addressLine2: "8001 Zürich",
    hoursLabel: "Години роботи",
    hoursLine1: "Понеділок – Субота",
    hoursLine2: "09:00 – 21:00",
    contactLabel: "Контакти",
    phone: "+41 76 516 51 54",
    book: "Записатися",
    mapLabel: "Розташування",
  },
} as const;

const socialLinks = [
  {
    label: "WhatsApp",
    href: "https://wa.me/41765165154?text=Hallo%20Valeriia%2C%20ich%20möchte%20einen%20Termin%20buchen.",
    icon: MessageCircle,
  },
  {
    label: "Telegram",
    href: "https://t.me/ValeriyaValeriyaN",
    icon: Send,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/kosmetikerin_valeriia",
    icon: Instagram,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/profile.php?id=100030670843113",
    icon: Facebook,
  },
];

export default function ContactSection({ lang, onBook }: Props) {
  const t = content[lang] ?? content.de;

  return (
    <section
      id="contact"
      className="relative scroll-mt-19.5 overflow-hidden bg-[#FAF9F6]"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-10 md:py-18 lg:px-12 lg:py-20 xl:px-20">
        <div className="grid items-start gap-10 lg:grid-cols-[0.92fr_1.08fr] lg:gap-14 xl:gap-20">
          {/* ================= LEFT ================= */}
          <Reveal>
            {/* eyebrow */}
            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.eyebrow}
              </p>
            </div>

            {/* title */}
            <h2 className="max-w-140 text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#171717] sm:text-[44px] lg:text-[48px]">
              {t.title}
            </h2>

            {/* intro */}
            <p className="mt-5 max-w-125 text-[14px] leading-[1.8] text-[#666] sm:text-[15px]">
              {t.intro}
            </p>

            {/* INFO GRID */}
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {/* ADDRESS */}
              <div className="rounded-[22px] border border-black/6 bg-white p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#FAF9F6] text-[#A77F13]">
                    <MapPin size={16} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      {t.addressLabel}
                    </p>

                    <p className="mt-2.5 text-[14px] font-medium leading-[1.55] text-[#272727] sm:text-[14.5px]">
                      {t.addressLine1}
                      <br />
                      {t.addressLine2}
                    </p>
                  </div>
                </div>
              </div>

              {/* HOURS */}
              <div className="rounded-[22px] border border-black/6 bg-white p-5 sm:p-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#FAF9F6] text-[#A77F13]">
                    <Clock3 size={16} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      {t.hoursLabel}
                    </p>

                    <p className="mt-2.5 text-[14px] font-medium leading-[1.55] text-[#272727] sm:text-[14.5px]">
                      {t.hoursLine1}
                      <br />
                      {t.hoursLine2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT ROW */}
            <div className="mt-3 rounded-[22px] border border-black/6 bg-white p-5 sm:p-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-start gap-4">
                  <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-[#FAF9F6] text-[#A77F13]">
                    <Phone size={16} strokeWidth={1.6} />
                  </div>

                  <div>
                    <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                      {t.contactLabel}
                    </p>

                    <a
                      href="tel:+41765165154"
                      className="mt-2.5 block text-[14px] font-medium text-[#272727] transition-colors duration-300 hover:text-[#A77F13] sm:text-[14.5px]"
                    >
                      {t.phone}
                    </a>
                  </div>
                </div>

                {/* SOCIALS */}
                <div className="flex items-center gap-2">
                  {socialLinks.map(({ label, href, icon: Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      title={label}
                      className="flex h-9 w-9 items-center justify-center rounded-full border border-black/8 text-[#444] transition-all duration-300 hover:border-[#D5AA1B]/40 hover:bg-[#FAF9F6] hover:text-[#A77F13]"
                    >
                      <Icon size={15} strokeWidth={1.6} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* BOOK BUTTON */}
            <div className="mt-6">
              <button
                type="button"
                onClick={onBook}
                className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-[#D5AA1B] px-7 py-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-black transition-all duration-300 hover:bg-[#B98A16]"
              >
                {t.book}

                <ArrowUpRight
                  size={15}
                  strokeWidth={1.7}
                  className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </Reveal>

          {/* ================= RIGHT / MAP ================= */}
          <Reveal delay={0.08}>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                {t.mapLabel}
              </p>

              <p className="text-[10px] text-black/35">Zürich · 8001</p>
            </div>

            <div className="relative h-97.5 overflow-hidden rounded-[28px] border border-black/6 bg-white sm:h-105 lg:h-111.25">
              <iframe
                title="Kosmetikerin Valeriia – Google Maps"
                src="https://www.google.com/maps?q=Kosmetikerin+Valeriia+Zürich&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 h-full w-full"
              />
            </div>
          </Reveal>
        </div>
      </div>

      <p className="sr-only">
        Kosmetikerin in Zürich – professionelle Gesichtsbehandlungen,
        Peelings, Waxing sowie Brow und Lash Behandlungen.
      </p>
    </section>
  );
}