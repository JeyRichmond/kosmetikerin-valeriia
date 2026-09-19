"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceBookingButton from "@/components/ServiceBookingButton";
import { useBooking } from "@/components/useBooking";
import { translations, LangKey } from "@/lib/translations";
import { peelingsTranslations } from "@/lib/peelingsTranslations";

export default function PeelingsPageContent() {
  const [lang, setLang] = useState<LangKey>("de");

  const t = peelingsTranslations[lang] ?? peelingsTranslations.de;
  const { openBooking } = useBooking();

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangKey | null;

    if (!saved || !translations[saved]) return;

    const timeout = window.setTimeout(() => {
      setLang(saved);
    }, 0);

    return () => window.clearTimeout(timeout);
  }, []);

  const handleLanguageChange = (newLang: LangKey) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <>
      <Header
        lang={lang}
        onLangChange={handleLanguageChange}
        onBook={openBooking}
      />

      <main className="min-h-screen bg-[#FAF9F6] text-[#111111]">
        {/* HERO */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid min-h-180 max-w-7xl lg:grid-cols-2">
            <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <div className="max-w-xl">
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#B98A16]">
                  {t.hero.eyebrow}
                </p>

                <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-[52px] xl:text-[58px]">
                  {t.hero.title}
                  <span className="mt-2 block text-[#D5AA1B]">
                    {t.hero.titleAccent}
                  </span>
                </h1>

                <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">
                  {t.hero.text}
                </p>

                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/70">
                  {t.hero.benefits.map((benefit) => (
                    <span key={benefit}>✓ {benefit}</span>
                  ))}
                </div>

                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                    {t.hero.bookingButton}
                  </ServiceBookingButton>

                  <a
                    href="#peelings"
                    className="inline-flex min-h-13 items-center justify-center rounded-full border border-black/15 px-8 text-sm font-medium transition hover:border-black/30 hover:bg-white"
                  >
                    {t.hero.treatmentsButton}
                  </a>
                </div>

                <p className="mt-8 text-sm leading-6 text-black/50">
                  {t.hero.location}
                  <br />
                  {t.hero.locationNote}
                </p>
              </div>
            </div>

            <div className="relative min-h-125 lg:min-h-full">
              <Image
                src="/images/peelings/hero.jpg"
                alt="Professionelles Peeling bei Kosmetikerin Valeriia in Zürich"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />

              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8">
                <p className="text-2xl font-semibold text-[#D5AA1B]">
                  {t.hero.experience}
                </p>
                <p className="mt-1 text-sm text-black/60">
                  {t.hero.experienceText}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* INTRODUCTION */}
        <section className="border-y border-black/5 bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10 lg:py-28">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                  {t.introduction.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.introduction.title}
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60 sm:text-lg">
                  {t.introduction.text}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 md:grid-cols-3">
              {t.introduction.cards.map((card, index) => (
                <Reveal key={card.title} delay={0.05 + index * 0.06}>
                  <div className="h-full rounded-[24px] border border-black/7 bg-[#FAF9F6] p-7">
                    <div className="mb-6 h-px w-10 bg-[#D5AA1B]" />

                    <h3 className="text-xl font-semibold">{card.title}</h3>

                    <p className="mt-4 text-sm leading-7 text-black/60">
                      {card.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PEELINGS */}
        <section
          id="peelings"
          className="scroll-mt-24 bg-[#FAF9F6]"
        >
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
              <Reveal>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                    {t.treatments.eyebrow}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.treatments.title}
                  </h2>

                  <p className="mt-6 max-w-xl text-base leading-8 text-black/60">
                    {t.treatments.text}
                  </p>

                  <div className="mt-10 overflow-hidden rounded-[28px] bg-white p-5 shadow-sm">
                    <div className="relative aspect-4/3 overflow-hidden rounded-[20px]">
                      <Image
                        src="/images/peelings/peelings.png"
                        alt="Professionelle Peelings bei Kosmetikerin Valeriia"
                        fill
                        sizes="(max-width: 1024px) 100vw, 45vw"
                        className="object-cover"
                      />
                    </div>
                  </div>

                  <p className="mt-5 text-sm leading-6 text-black/50">
                    {t.treatments.note}
                  </p>
                </div>
              </Reveal>

              <div className="grid gap-4">
                {t.treatments.items.map((item, index) => (
                  <Reveal key={item.title} delay={0.04 + index * 0.04}>
                    <div className="group rounded-3xl border border-black/7 bg-white p-6 transition duration-300 hover:-translate-y-0.5 hover:shadow-md sm:p-7">
                      <div className="flex gap-5">
                        <span className="mt-1 text-xs font-semibold tracking-[0.16em] text-[#B98A16]">
                          {String(index + 1).padStart(2, "0")}
                        </span>

                        <div>
                          <h3 className="text-xl font-semibold">
                            {item.title}
                          </h3>

                          <p className="mt-3 text-sm leading-7 text-black/60">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CONSULTATION */}
        <section className="bg-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="relative min-h-120 lg:min-h-170">
              <Image
                src="/images/peelings/consultation.jpg"
                alt="Persönliche Hautberatung bei Kosmetikerin Valeriia in Zürich"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
              <Reveal>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                    {t.consultation.eyebrow}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.consultation.title}
                  </h2>

                  <p className="mt-6 text-base leading-8 text-black/60">
                    {t.consultation.text}
                  </p>

                  <div className="mt-8 space-y-4">
                    {t.consultation.benefits.map((benefit) => (
                      <div
                        key={benefit}
                        className="flex items-start gap-4 border-b border-black/7 pb-4"
                      >
                        <span className="mt-0.5 text-[#D5AA1B]">✓</span>
                        <p className="text-sm leading-6 text-black/70">
                          {benefit}
                        </p>
                      </div>
                    ))}
                  </div>

                  <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                    {t.hero.bookingButton}
                  </ServiceBookingButton>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section className="bg-[#FAF9F6]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
            <Reveal>
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                  {t.process.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.process.title}
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-black/60">
                  {t.process.text}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
              <Reveal className="h-full">
                <div className="relative min-h-125 overflow-hidden rounded-[28px] sm:min-h-150">
                  <Image
                    src="/images/peelings/treatment-device.jpg"
                    alt="Professionelle kosmetische Behandlung in Zürich"
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>

              <div className="grid gap-5">
                <Reveal className="h-full">
                  <div className="relative min-h-65 overflow-hidden rounded-[28px]">
                    <Image
                      src="/images/peelings/ampoules.jpg"
                      alt="Professionelle Kosmetikprodukte für Peeling-Behandlungen"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                </Reveal>

                <div className="grid gap-3 sm:grid-cols-2">
                  {t.process.steps.map((step, index) => (
                    <Reveal
                      key={step.number}
                      delay={0.03 + index * 0.04}
                      className="h-full"
                    >
                      <div className="h-full rounded-[22px] bg-white p-5">
                        <span className="text-xs font-semibold tracking-[0.18em] text-[#B98A16]">
                          {step.number}
                        </span>

                        <h3 className="mt-3 font-semibold">{step.title}</h3>

                        <p className="mt-2 text-sm leading-6 text-black/55">
                          {step.text}
                        </p>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* QUALITY */}
        <section className="overflow-hidden bg-[#111111] text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
            <Reveal>
              <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AA1B]">
                    {t.quality.eyebrow}
                  </p>

                  <h2 className="mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.quality.title}
                  </h2>
                </div>

                <p className="text-base leading-8 text-white/60">
                  {t.quality.text}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 md:grid-cols-3">
              {t.quality.points.map((point, index) => (
                <Reveal key={point} delay={0.04 + index * 0.05}>
                  <div className="h-full rounded-[22px] border border-white/10 bg-white/5 p-6">
                    <span className="text-sm text-[#D5AA1B]">0{index + 1}</span>
                    <p className="mt-5 text-base leading-7 text-white/80">
                      {point}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* PRODUCTS */}
        <section className="bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
              <Reveal>
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative min-h-105 overflow-hidden rounded-[28px] sm:min-h-135">
                    <Image
                      src="/images/peelings/professional-products.jpg"
                      alt="Professionelle Kosmetikprodukte"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="relative min-h-105 overflow-hidden rounded-[28px] sm:min-h-135">
                    <Image
                      src="/images/peelings/valeriia.jpg"
                      alt="Kosmetikerin Valeriia in Zürich"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="max-w-xl">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                    {t.products.eyebrow}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.products.title}
                  </h2>

                  <p className="mt-6 text-base leading-8 text-black/60">
                    {t.products.text}
                  </p>

                  <p className="mt-5 text-base leading-8 text-black/60">
                    {t.products.secondaryText}
                  </p>

                  <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                    {t.hero.bookingButton}
                  </ServiceBookingButton>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* SUITABLE */}
        <section className="border-y border-black/5 bg-[#FAF9F6]">
          <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 lg:py-28">
            <Reveal>
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                  {t.suitable.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.suitable.title}
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-black/60">
                  {t.suitable.text}
                </p>
              </div>
            </Reveal>

            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {t.suitable.cards.map((card, index) => (
                <Reveal
                  key={card.title}
                  delay={0.03 + index * 0.04}
                  className="h-full"
                >
                  <div className="h-full rounded-3xl bg-white p-6">
                    <span className="text-xs font-semibold tracking-[0.18em] text-[#B98A16]">
                      0{index + 1}
                    </span>

                    <h3 className="mt-5 text-lg font-semibold">
                      {card.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-black/55">
                      {card.text}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* LOCATION */}
        <section className="relative min-h-125 overflow-hidden sm:min-h-145">
          <Image
            src="/images/peelings/consultation.jpg"
            alt="Kosmetikstudio in Zürich 8001"
            fill
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/50" />

          <div className="relative mx-auto flex min-h-125 max-w-7xl items-center px-6 py-20 sm:min-h-145 sm:px-10">
            <Reveal>
              <div className="max-w-2xl text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AA1B]">
                  {t.location.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.location.title}
                </h2>

                <p className="mt-6 max-w-xl text-base leading-8 text-white/75">
                  {t.location.text}
                </p>

                <p className="mt-7 text-sm font-medium text-white">
                  {t.location.address}
                </p>

                <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.hero.bookingButton}
                </ServiceBookingButton>
              </div>
            </Reveal>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20 sm:px-10 lg:py-28">
            <Reveal>
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#B98A16]">
                  {t.faq.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.faq.title}
                </h2>
              </div>
            </Reveal>

            <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
              {t.faq.items.map((item) => (
                <details key={item.question} className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-left font-medium">
                    <span>{item.question}</span>

                    <span className="text-2xl font-light text-[#B98A16] transition-transform duration-300 group-open:rotate-45">
                      +
                    </span>
                  </summary>

                  <p className="max-w-3xl pb-6 pr-10 text-sm leading-7 text-black/60 sm:text-base">
                    {item.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section className="bg-[#111111] text-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center sm:px-10 lg:py-28">
            <Reveal>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#D5AA1B]">
                {t.finalCta.eyebrow}
              </p>

              <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t.finalCta.title}
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-white/60">
                {t.finalCta.text}
              </p>

              <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                {t.finalCta.button}
              </ServiceBookingButton>
            </Reveal>
          </div>
        </section>
      </main>

      <Footer lang={lang} />
    </>
  );
}