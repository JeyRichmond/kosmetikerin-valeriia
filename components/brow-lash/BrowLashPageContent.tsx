"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceBookingButton from "@/components/ServiceBookingButton";
import { useBooking } from "@/components/useBooking";
import { translations, LangKey } from "@/lib/translations";
import { browLashTranslations } from "@/lib/browLashTranslations";

export default function BrowLashPageContent() {
  const [lang, setLang] = useState<LangKey>("de");
  const t = browLashTranslations[lang] ?? browLashTranslations.de;
  const { openBooking } = useBooking();

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangKey | null;

    if (!saved || !translations[saved]) {
      return;
    }

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
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden">
          <div className="mx-auto grid min-h-180 max-w-7xl lg:grid-cols-2">
            <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <div className="max-w-xl">
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#B98A16]">
                  {t.hero.eyebrow}
                </p>

                <h1 className="whitespace-pre-line text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  {t.hero.title}
                </h1>

                <div className="mt-7 h-px w-16 bg-[#D5AA1B]" />

                <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">
                  {t.hero.text}
                </p>

                <ServiceBookingButton className="mt-10 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.hero.button}
                </ServiceBookingButton>
              </div>
            </div>

            <div className="relative min-h-125 lg:min-h-full">
              <Image
                src="/images/brow-lash/client-result.jpg"
                alt="Brow und Lash Lifting bei Kosmetikerin Valeriia in Zürich"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
            </div>
          </div>
        </section>

        {/* =========================================================
            INTRODUCTION
        ========================================================== */}
        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                {t.intro.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t.intro.title}
              </h2>

              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">
                {t.intro.text}
              </p>

              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {t.intro.cards.map((card, index) => (
                  <article
                    key={card.title}
                    className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7"
                  >
                    <p className="text-2xl text-[#D5AA1B]">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h3 className="mt-4 font-semibold">{card.title}</h3>

                    <p className="mt-2 text-sm leading-6 text-black/55">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            BROW LIFTING
        ========================================================== */}
        <Reveal>
          <section
            id="brow-lash"
            className="scroll-mt-24 px-6 py-24 sm:px-10 lg:py-32"
          >
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="relative min-h-145 overflow-hidden rounded-4xl bg-white">
                <Image
                  src="/images/brow-lash/brow-result.jpg"
                  alt="Ergebnis eines professionellen Brow Liftings in Zürich"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B98A16]">
                    {t.brow.resultLabel}
                  </p>

                  <p className="mt-2 font-semibold">
                    {t.brow.resultTitle}
                  </p>
                </div>
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                  {t.brow.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.brow.title}
                </h2>

                <p className="mt-7 text-lg leading-8 text-black/60">
                  {t.brow.text}
                </p>

                <div className="mt-9 space-y-4">
                  {t.brow.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-4 border-b border-black/8 pb-4"
                    >
                      <span className="text-[#D5AA1B]">✓</span>

                      <span className="text-black/70">{point}</span>
                    </div>
                  ))}
                </div>

                <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.hero.button}
                </ServiceBookingButton>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            LASH LIFTING
        ========================================================== */}
        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="order-2 lg:order-1">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                  {t.lash.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.lash.title}
                </h2>

                <p className="mt-7 text-lg leading-8 text-black/60">
                  {t.lash.text}
                </p>

                <div className="mt-9 space-y-4">
                  {t.lash.points.map((point) => (
                    <div
                      key={point}
                      className="flex items-center gap-4 border-b border-black/8 pb-4"
                    >
                      <span className="text-[#D5AA1B]">✓</span>

                      <span className="text-black/70">{point}</span>
                    </div>
                  ))}
                </div>

                <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.hero.button}
                </ServiceBookingButton>
              </div>

              <div className="relative order-1 min-h-145 overflow-hidden rounded-4xl bg-[#FAF9F6] lg:order-2">
                <Image
                  src="/images/brow-lash/lash-result.jpg"
                  alt="Ergebnis eines professionellen Lash Liftings in Zürich"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />

                <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#B98A16]">
                    {t.lash.resultLabel}
                  </p>

                  <p className="mt-2 font-semibold">
                    {t.lash.resultTitle}
                  </p>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            PERSONAL CONSULTATION
        ========================================================== */}
        <Reveal>
          <section className="px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
              <div className="relative min-h-145 overflow-hidden rounded-4xl">
                <Image
                  src="/images/brow-lash/valeriia.jpg"
                  alt="Kosmetikerin Valeriia bei der professionellen Vorbereitung einer Behandlung"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover"
                />
              </div>

              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                  {t.consultation.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.consultation.title}
                </h2>

                <p className="mt-7 text-lg leading-8 text-black/60">
                  {t.consultation.text}
                </p>

                <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.consultation.button}
                </ServiceBookingButton>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            PROCESS
        ========================================================== */}
        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                    {t.process.eyebrow}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.process.title}
                  </h2>
                </div>

                <p className="leading-7 text-black/55">
                  {t.process.text}
                </p>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-3">
                <div className="relative min-h-105 overflow-hidden rounded-4xl md:col-span-2">
                  <Image
                    src="/images/brow-lash/gloves.jpg"
                    alt="Hygienische Vorbereitung für Brow und Lash Lifting"
                    fill
                    sizes="(max-width: 768px) 100vw, 66vw"
                    className="object-cover"
                  />
                </div>

                <div className="relative min-h-105 overflow-hidden rounded-4xl bg-[#FAF9F6]">
                  <Image
                    src="/images/brow-lash/lifting-products.png"
                    alt="Professionelle Produkte und Tools für Brow und Lash Lifting"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </div>

              <div className="mt-5 grid gap-px overflow-hidden rounded-4xl bg-black/8 md:grid-cols-2 lg:grid-cols-4">
                {t.process.steps.map((step) => (
                  <article
                    key={step.number}
                    className="bg-[#FAF9F6] p-8 lg:p-9"
                  >
                    <span className="text-3xl font-light text-[#D5AA1B]">
                      {step.number}
                    </span>

                    <h3 className="mt-7 text-lg font-semibold">
                      {step.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-black/55">
                      {step.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            QUALITY
        ========================================================== */}
        <section className="overflow-hidden bg-[#111111] text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="relative min-h-150 lg:min-h-180">
              <Image
                src="/images/brow-lash/client-result.jpg"
                alt="Natürliches Ergebnis einer Brow und Lash Behandlung bei Kosmetikerin Valeriia"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-black/10" />
            </div>

            <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <div className="max-w-xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">
                  {t.quality.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.quality.title}
                </h2>

                <p className="mt-7 text-lg leading-8 text-white/65">
                  {t.quality.text}
                </p>

                <div className="mt-9 space-y-4">
                  {t.quality.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-4 border-b border-white/10 pb-4"
                    >
                      <span className="text-[#D5AA1B]">✓</span>

                      <span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================
            PRODUCTS
        ========================================================== */}
        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                    {t.products.eyebrow}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.products.title}
                  </h2>

                  <p className="mt-7 text-lg leading-8 text-black/60">
                    {t.products.text}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="relative min-h-125 overflow-hidden rounded-4xl">
                    <Image
                      src="/images/brow-lash/products.jpg"
                      alt="Professionelle ZOLA Produkte für Brow und Lash Behandlungen"
                      fill
                      sizes="(max-width: 1024px) 50vw, 30vw"
                      className="object-cover"
                    />
                  </div>

                  <div className="grid gap-4">
                    <div className="relative min-h-60 overflow-hidden rounded-4xl">
                      <Image
                        src="/images/brow-lash/brow-products.jpg"
                        alt="Professionelle Produkte für Brow Lifting"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>

                    <div className="relative min-h-60 overflow-hidden rounded-4xl bg-[#FAF9F6]">
                      <Image
                        src="/images/brow-lash/tools.png"
                        alt="Präzise Tools für Brow und Lash Styling"
                        fill
                        sizes="(max-width: 1024px) 50vw, 25vw"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-14 grid gap-4 md:grid-cols-3">
                {t.products.cards.map((card, index) => (
                  <article
                    key={card.title}
                    className="rounded-4xl border border-black/5 bg-[#FAF9F6] p-8"
                  >
                    <span className="text-sm font-medium text-[#B98A16]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-black/55">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            SUITABLE
        ========================================================== */}
        <Reveal>
          <section className="px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                  {t.suitable.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.suitable.title}
                </h2>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {t.suitable.cards.map((card, index) => (
                  <article
                    key={card.title}
                    className="rounded-4xl border border-black/5 bg-white p-8"
                  >
                    <span className="text-sm font-medium text-[#B98A16]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <h3 className="mt-5 text-xl font-semibold">
                      {card.title}
                    </h3>

                    <p className="mt-4 text-sm leading-6 text-black/55">
                      {card.text}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            LOCATION
        ========================================================== */}
        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="relative mx-auto min-h-145 max-w-6xl overflow-hidden rounded-4xl">
              <Image
                src="/images/brow-lash/valeriia.jpg"
                alt="Kosmetikerin Valeriia – Brow und Lash Lifting in Zürich"
                fill
                sizes="(max-width: 1200px) 100vw, 1200px"
                className="object-cover"
              />

              <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/45 to-black/10" />

              <div className="absolute inset-0 flex items-center px-8 py-12 sm:px-14 lg:px-16">
                <div className="max-w-xl text-white">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">
                    {t.location.eyebrow}
                  </p>

                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                    {t.location.title}
                  </h2>

                  <p className="mt-6 text-lg leading-8 text-white/75">
                    {t.location.text}
                  </p>

                  <p className="mt-6 text-sm leading-6 text-white/60">
                    {t.location.address}
                  </p>

                  <ServiceBookingButton className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                    {t.location.button}
                  </ServiceBookingButton>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            FAQ
        ========================================================== */}
        <Reveal>
          <section className="px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
                  {t.faq.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.faq.title}
                </h2>
              </div>

              <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
                {t.faq.items.map((faq) => (
                  <details
                    key={faq.question}
                    className="group py-6"
                  >
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                      {faq.question}

                      <span className="text-2xl font-light text-[#D5AA1B] transition-transform group-open:rotate-45">
                        +
                      </span>
                    </summary>

                    <p className="max-w-3xl pt-4 leading-7 text-black/55">
                      {faq.answer}
                    </p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        {/* =========================================================
            FINAL CTA
        ========================================================== */}
        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#111111] px-8 py-16 text-center text-white sm:px-12 lg:px-20 lg:py-20">
              <div className="mx-auto max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">
                  {t.cta.eyebrow}
                </p>

                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                  {t.cta.title}
                </h2>

                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
                  {t.cta.text}
                </p>

                <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.cta.button}
                </ServiceBookingButton>
              </div>
            </div>
          </section>
        </Reveal>

        <div className="h-8 bg-white" />
      </main>

      <Footer lang={lang} />
    </>
  );
}