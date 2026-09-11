"use client";

import PriceAccordion from "@/components/PriceAccordion";
import { getPricesData } from "@/lib/pricesData";
import type { LangKey, Translation } from "@/lib/translations";
import Reveal from "@/components/Reveal";

export default function PricesSection({
  t,
  lang,
}: {
  t: Translation;
  lang: LangKey;
}) {
  const categories = getPricesData(lang);

  return (
    <section
      id="prices"
      className="relative scroll-mt-19.5 overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-360 px-6 py-16 sm:px-10 md:py-20 lg:px-12 lg:py-24 xl:px-20">
        {/* HEADER */}
<Reveal className="max-w-245">
  <div className="mb-5 flex items-center gap-3">
    <span className="h-px w-8 bg-[#D5AA1B]" />

    <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
      {t.prices.label}
    </p>
  </div>

  <h2 className="text-[38px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171717] sm:text-[46px] lg:text-[52px]">
    {t.prices.title1}
  </h2>

  <p className="mt-5 max-w-225 text-[15px] leading-[1.75] text-[#666] sm:text-[16px]">
    {t.prices.intro}
  </p>

  <div className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-medium uppercase tracking-[0.16em] text-black/40">
    <span>{t.prices.transparent}</span>
    <span className="h-1 w-1 rounded-full bg-[#D5AA1B]" />
    <span>{t.prices.clear}</span>
    <span className="h-1 w-1 rounded-full bg-[#D5AA1B]" />
    <span>{t.prices.noSurprises}</span>
  </div>
</Reveal>

<div className="my-10 h-px w-full bg-black/6 lg:my-12" />

        {/* CATEGORIES */}
        <Reveal
  delay={0.08}
  className="mx-auto mt-12 max-w-300 space-y-3 lg:mt-14"
>
          {categories.map((category, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-black/[0.07] bg-[#FAF9F6]"
            >
              <PriceAccordion
                title={t.prices[category.titleKey as keyof typeof t.prices]}
                subtitle={category.subtitle}
                description={category.description}
                items={category.items}
                bookLabel={t.prices.book}
                readMore={t.prices.readMore}
                readLess={t.prices.readLess}
              />
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}