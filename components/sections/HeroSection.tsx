"use client";

import Image from "next/image";
import { ArrowDown, Check, MapPin } from "lucide-react";
import { useBooking } from "@/components/useBooking";

type HeroTranslations = {
  hero: {
    eyebrow: string;

    titleLine1: string;
    titleLine2: string;
    titleAccent: string;

    subtitle: string;

    trust1: string;
    trust2: string;
    trust3: string;

    primaryCta: string;
    secondaryCta: string;

    address: string;

    experienceNumber: string;
    experienceLabel: string;
    experienceText: string;

    locationBadge: string;
  };
};

type Props = {
  t: HeroTranslations;
};

export default function HeroSection({ t }: Props) {
  const { openBooking } = useBooking();

  const handleBooking = () => {
  openBooking();
  };

  const scrollToServices = () => {
    const section = document.getElementById("services");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#FAF9F6] scroll-mt-19.5"
    >
      <div className="mx-auto grid min-h-[calc(100vh-78px)] max-w-360 lg:grid-cols-[0.92fr_1.08fr]">
        {/* LEFT SIDE */}
        <div className="flex items-center px-6 py-14 sm:px-10 sm:py-16 lg:px-12 lg:py-20 xl:px-20">
          <div className="w-full max-w-152.5">
            {/* Eyebrow */}
            <div className="mb-7 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.hero.eyebrow}
              </p>
            </div>

            {/* Heading */}
            <h1 className="max-w-150 text-[40px] font-semibold leading-[1.06] tracking-[-0.035em] text-[#151515] sm:text-[50px] lg:text-[54px] xl:text-[64px]">
              <span className="block">{t.hero.titleLine1}</span>
              <span className="block">{t.hero.titleLine2}</span>
              <span className="block text-[#B98A16]">
                {t.hero.titleAccent}
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-135 text-[15px] leading-[1.8] text-[#666] sm:text-[16px]">
              {t.hero.subtitle}
            </p>

            {/* Trust */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-x-7">
              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D5AA1B]/10 text-[#B98A16]">
                  <Check size={12} strokeWidth={2} />
                </span>

                <span className="text-[13px] text-[#444]">
                  {t.hero.trust1}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D5AA1B]/10 text-[#B98A16]">
                  <Check size={12} strokeWidth={2} />
                </span>

                <span className="text-[13px] text-[#444]">
                  {t.hero.trust2}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#D5AA1B]/10 text-[#B98A16]">
                  <MapPin size={12} strokeWidth={2} />
                </span>

                <span className="text-[13px] text-[#444]">
                  {t.hero.trust3}
                </span>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={handleBooking}
                className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-[12px] font-semibold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#B98A16] hover:shadow-lg active:scale-[0.98]"
              >
                {t.hero.primaryCta}
              </button>

              <button
                type="button"
                onClick={scrollToServices}
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full px-6 text-[12px] font-semibold uppercase tracking-[0.08em] text-[#333] transition-colors hover:text-[#B98A16]"
              >
                {t.hero.secondaryCta}

                <ArrowDown
                  size={15}
                  strokeWidth={1.5}
                  className="transition-transform duration-300 group-hover:translate-y-1"
                />
              </button>
            </div>

            {/* Address */}
            <div className="mt-11 border-t border-black/[0.07] pt-6">
              <p className="text-[11px] uppercase tracking-[0.16em] text-black/40">
                {t.hero.address}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative min-h-130 overflow-hidden sm:min-h-155 lg:min-h-[calc(100vh-78px)]">
          <Image
            src="/Kosmetikerin_Valeriia_005.jpg"
            alt="Kosmetikerin Valeriia in Zürich"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 1024px) 100vw, 55vw"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/25 via-transparent to-transparent lg:bg-linear-to-r lg:from-[#FAF9F6]/10 lg:via-transparent lg:to-transparent" />

          {/* Experience Card */}
          <div className="absolute bottom-6 left-6 right-6 sm:bottom-8 sm:left-8 sm:right-auto lg:bottom-10 lg:left-10">
            <div className="max-w-77.5 rounded-[22px] border border-white/40 bg-white/88 px-6 py-5 shadow-xl backdrop-blur-md">
              <div className="flex items-end gap-3">
                <span className="text-[34px] font-semibold leading-none tracking-[-0.04em] text-[#B98A16]">
                  {t.hero.experienceNumber}
                </span>

                <span className="pb-0.5 text-[11px] font-semibold uppercase leading-[1.4] tracking-[0.12em] text-[#333]">
                  {t.hero.experienceLabel}
                </span>
              </div>

              <div className="mt-4 h-px w-full bg-black/[0.07]" />

              <p className="mt-4 text-[12px] leading-[1.6] text-[#555]">
                {t.hero.experienceText}
              </p>
            </div>
          </div>

          {/* Location Badge */}
          <div className="absolute right-5 top-5 hidden rounded-full border border-white/30 bg-black/20 px-4 py-2 backdrop-blur-md sm:block lg:right-8 lg:top-8">
            <span className="text-[10px] font-medium uppercase tracking-[0.16em] text-white">
              {t.hero.locationBadge}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}