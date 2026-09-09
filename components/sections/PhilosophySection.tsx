"use client";

import { Sparkles, ShieldCheck, HeartHandshake, Gem } from "lucide-react";

type PhilosophyTranslations = {
  philosophy: {
    eyebrow: string;
    title: string;
    text: string;

    item1Title: string;
    item1Text: string;

    item2Title: string;
    item2Text: string;

    item3Title: string;
    item3Text: string;

    item4Title: string;
    item4Text: string;

    value1: string;
    value2: string;
    value3: string;
  };
};

type Props = {
  t: PhilosophyTranslations;
};

export default function PhilosophySection({ t }: Props) {
  const items = [
    {
      icon: Sparkles,
      title: t.philosophy.item1Title,
      text: t.philosophy.item1Text,
    },
    {
      icon: HeartHandshake,
      title: t.philosophy.item2Title,
      text: t.philosophy.item2Text,
    },
    {
      icon: ShieldCheck,
      title: t.philosophy.item3Title,
      text: t.philosophy.item3Text,
    },
    {
      icon: Gem,
      title: t.philosophy.item4Title,
      text: t.philosophy.item4Text,
    },
  ];

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-10 md:py-24 lg:px-12 xl:px-20">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          {/* LEFT */}
          <div className="max-w-130">
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.philosophy.eyebrow}
              </p>
            </div>

            <h2 className="text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171717] sm:text-[44px] lg:text-[50px]">
              {t.philosophy.title}
            </h2>

            <p className="mt-7 max-w-117.5 text-[15px] leading-[1.8] text-[#666] sm:text-[16px]">
              {t.philosophy.text}
            </p>

            <div className="mt-10 flex items-center gap-4 text-[11px] font-medium uppercase tracking-[0.16em] text-black/40">
              <span>{t.philosophy.value1}</span>
              <span className="h-1 w-1 rounded-full bg-[#D5AA1B]" />
              <span>{t.philosophy.value2}</span>
              <span className="h-1 w-1 rounded-full bg-[#D5AA1B]" />
              <span>{t.philosophy.value3}</span>
            </div>
          </div>

          {/* RIGHT */}
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-black/6 bg-black/6 sm:grid-cols-2">
            {items.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group bg-[#FAF9F6] p-7 transition-colors duration-300 hover:bg-white sm:p-8 lg:p-9"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#D5AA1B]/20 bg-[#D5AA1B]/8 text-[#B98A16]">
                    <Icon size={19} strokeWidth={1.5} />
                  </div>

                  <h3 className="mt-6 text-[19px] font-semibold tracking-[-0.015em] text-[#1A1A1A]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-[14px] leading-[1.7] text-[#666]">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}