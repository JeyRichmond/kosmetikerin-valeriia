"use client";

import PriceAccordion from "@/components/PriceAccordion";
import { getPricesData } from "@/lib/pricesData";
import type { Translation } from "@/lib/translations";

export default function PricesSection({ t }: { t: Translation }) {
  const categories = getPricesData();

  return (
    <section
      id="prices"
      className="relative scroll-mt-32 border-t border-neutral-200/60 overflow-hidden"
    >
      {/* Soft luxury background */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-neutral-50 to-white" />
      <div className="absolute -top-40 -right-40 w-125 h-125 bg-(--brand-gold)/10 rounded-full blur-3xl -z-10" />
      <div className="absolute -bottom-40 -left-40 w-125 h-125 bg-(--brand-gold)/5 rounded-full blur-3xl -z-10" />

      {/* HEADER */}
      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 text-center">
        <span className="inline-block mb-5 text-xs uppercase tracking-[0.45em] text-(--brand-gold)">
          {t.prices.label}
        </span>

        <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-(--brand-dark)">
          {t.prices.title1}
        </h2>

        <div className="w-100 h-px bg-linear-to-r from-transparent via-(--brand-gold)/50 to-transparent mx-auto my-8" />

        <p className="text-sm md:text-base text-neutral-500 max-w-1xl mx-auto leading-relaxed">
          {t.prices.intro}
        </p>
      </div>

      {/* CATEGORIES */}
      <div className="relative max-w-6xl mx-auto px-6 pb-20 space-y-10">
        {categories.map((category, index) => (
          <div key={index} className="relative group">

            {/* luxury border wrapper */}
            <div className="p-[0.5px] rounded-3xl bg-linear-to-br from-transparent via-(--brand-gold)/20 to-transparent opacity-0 group-hover:opacity-70 transition duration-500 absolute inset-0 pointer-events-none" />

            {/* main card */}
            <div className="relative rounded-3xl bg-white/70 backdrop-blur-xl border border-neutral-200/60 shadow-sm group-hover:shadow-2xl transition-all duration-500">
              <PriceAccordion
                title={t.prices[category.titleKey as keyof typeof t.prices]}
                subtitle={category.subtitle}
                description={category.description}
                items={category.items}
                bookLabel={t.prices.book}
              />
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}