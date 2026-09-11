"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";

type TreatmentsTranslations = {
  treatments: {
    eyebrow: string;
    title: string;
    text: string;

    facialTitle: string;
    facialSubtitle: string;

    peelingTitle: string;
    peelingSubtitle: string;

    browsTitle: string;
    browsSubtitle: string;

    waxingTitle: string;
    waxingSubtitle: string;

    discover: string;
  };
};

type Props = {
  t: TreatmentsTranslations;
};

const treatments = [
  {
    number: "01",
    key: "facial",
    image: "/Kosmetikerin_Valeriia_003.jpg",
  },
  {
    number: "02",
    key: "peeling",
    image: "/Kosmetikerin_Valeriia_002.jpg",
  },
  {
    number: "03",
    key: "brows",
    image: "/Kosmetikerin_Valeriia_014.jpg",
  },
  {
    number: "04",
    key: "waxing",
    image: "/Kosmetikerin_Valeriia_011.jpg",
  },
] as const;

export default function TreatmentsSection({ t }: Props) {
  const getContent = (key: (typeof treatments)[number]["key"]) => {
    switch (key) {
      case "facial":
        return {
          title: t.treatments.facialTitle,
          subtitle: t.treatments.facialSubtitle,
        };

      case "peeling":
        return {
          title: t.treatments.peelingTitle,
          subtitle: t.treatments.peelingSubtitle,
        };

      case "brows":
        return {
          title: t.treatments.browsTitle,
          subtitle: t.treatments.browsSubtitle,
        };

      case "waxing":
        return {
          title: t.treatments.waxingTitle,
          subtitle: t.treatments.waxingSubtitle,
        };
    }
  };

  const scrollToPrices = () => {
    document.getElementById("prices")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="services"
      className="scroll-mt-19.5 bg-[#FAF9F6]"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20">
        {/* HEADER */}
        <div className="mb-12 grid gap-7 lg:mb-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.treatments.eyebrow}
              </p>
            </div>

            <h2 className="max-w-155 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171717] sm:text-[44px] lg:text-[50px]">
              {t.treatments.title}
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:flex lg:justify-end">
  <p className="max-w-125 text-[15px] leading-[1.8] text-[#666] sm:text-[16px]">
    {t.treatments.text}
  </p>
</Reveal>
        </div>

        {/* TREATMENTS GRID */}
        <div className="grid gap-4 md:grid-cols-2 lg:gap-5">
  {treatments.map((item, index) => {
    const content = getContent(item.key);

    return (
      <Reveal
        key={item.key}
        delay={0.05 + index * 0.05}
        className="h-full"
      >
        <button
          type="button"
          onClick={scrollToPrices}
          className="group relative min-h-107.5 w-full overflow-hidden rounded-[26px] text-left sm:min-h-125 lg:min-h-140"
        >
                <Image
                  src={item.image}
                  alt={content.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.035]"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />

                {/* DARK GRADIENT */}
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/15 to-black/5" />

                {/* NUMBER */}
                <div className="absolute left-6 top-6 flex h-10 min-w-10 items-center justify-center rounded-full border border-white/25 bg-black/10 px-3 backdrop-blur-md sm:left-8 sm:top-8">
                  <span className="text-[10px] font-medium tracking-[0.18em] text-white">
                    {item.number}
                  </span>
                </div>

                {/* ARROW */}
                <div className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-md transition-all duration-300 group-hover:border-[#D5AA1B] group-hover:bg-[#D5AA1B] sm:right-8 sm:top-8">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                    className="transition-transform duration-300 group-hover:rotate-45"
                  />
                </div>

                {/* CONTENT */}
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-9">
                  <div className="mb-4 h-px w-10 bg-[#D5AA1B] transition-all duration-500 group-hover:w-16" />

                  <h3 className="text-[28px] font-semibold tracking-[-0.025em] text-white sm:text-[32px]">
                    {content.title}
                  </h3>

                  <p className="mt-3 max-w-107.5 text-[14px] leading-[1.65] text-white/75 sm:text-[15px]">
                    {content.subtitle}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/80">
                    <span>{t.treatments.discover}</span>

                    <ArrowUpRight
                      size={14}
                      strokeWidth={1.6}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </button>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}