"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import ServiceBookingButton from "@/components/ServiceBookingButton";
import { useBooking } from "@/components/useBooking";
import { translations, LangKey } from "@/lib/translations";
import { waxingTranslations } from "@/lib/waxingTranslations";

export default function WaxingPageContent() {
  const [lang, setLang] = useState<LangKey>("de");
  const t = waxingTranslations[lang] ?? waxingTranslations.de;
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

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                {t.hero.title}
                <span className="mt-2 block text-[#D5AA1B]">
                  {t.hero.accent}
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">
                {t.hero.text}
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/70">
  <span>✓ {t.hero.benefits[0]}</span>
  <span>✓ {t.hero.benefits[1]}</span>
  <span>✓ {t.hero.benefits[2]}</span>
</div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.hero.booking}
                </ServiceBookingButton>

                <Link
                  href="/#prices"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-black/15 px-8 text-sm font-medium transition hover:border-black/30 hover:bg-white"
                >
                  {t.hero.prices}
                </Link>
              </div>

              <p className="mt-8 text-sm leading-6 text-black/50">
                {t.hero.address}
                <br />
                {t.hero.location}
              </p>
            </div>
          </div>

          <div className="relative min-h-125 lg:min-h-full">
            <Image
              src="/images/waxing/hero.jpg"
              alt="Waxing bei Kosmetikerin Valeriia in Zürich"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />

            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8">
              <p className="text-2xl font-semibold text-[#D5AA1B]">10+</p>
              <p className="mt-1 text-sm text-black/60">{t.hero.experience}</p>
            </div>
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
            {t.introduction.eyebrow}
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {t.introduction.title}
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">
            {t.introduction.text}
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-black/55">
            {t.introduction.textSecond}
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
              <p className="text-2xl text-[#D5AA1B]">{t.introduction.benefits[0].number}</p>
              <h3 className="mt-4 font-semibold">{t.introduction.benefits[0].title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                {t.introduction.benefits[0].text}
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
              <p className="text-2xl text-[#D5AA1B]">{t.introduction.benefits[1].number}</p>
              <h3 className="mt-4 font-semibold">{t.introduction.benefits[1].title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                {t.introduction.benefits[1].text}
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
              <p className="text-2xl text-[#D5AA1B]">{t.introduction.benefits[2].number}</p>
              <h3 className="mt-4 font-semibold">{t.introduction.benefits[2].title}</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                {t.introduction.benefits[2].text}
              </p>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          PERSONAL / HYGIENE
      ========================================================== */}
      <Reveal>
      <section className="px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="relative min-h-145 overflow-hidden rounded-4xl">
            <Image
              src="/images/waxing/preparation.jpg"
              alt="Kosmetikerin Valeriia bereitet den Behandlungsraum in Zürich vor"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.personal.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.personal.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              {t.personal.text}
            </p>

            <p className="mt-5 leading-7 text-black/55">
              {t.personal.textSecond}
            </p>

            <div className="mt-9 space-y-4">
  {t.personal.benefits.map((item) => (
    <div
      key={item}
      className="flex items-center gap-4 border-b border-black/8 pb-4"
    >
      <span className="text-[#D5AA1B]">✓</span>
      <span className="text-black/70">{item}</span>
    </div>
  ))}
</div>

          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          PRODUCTS
      ========================================================== */}
      <Reveal>
      <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <div className="order-2 lg:order-1">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.products.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.products.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              {t.products.text}
            </p>

            <p className="mt-5 leading-7 text-black/55">
              {t.products.textSecond}
            </p>
          </div>

          <div className="relative order-1 min-h-135 overflow-hidden rounded-4xl lg:order-2">
            <Image
              src="/images/waxing/italwax-cartridges.jpg"
              alt="Professionelle Waxing-Produkte im Kosmetikstudio in Zürich"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          WOMEN / MEN
      ========================================================== */}
      <Reveal>
      <section className="px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.womenMen.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t.womenMen.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              {t.womenMen.text}
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <article className="rounded-4xl bg-white p-8 sm:p-10">
              <span className="text-sm uppercase tracking-[0.18em] text-[#B98A16]">
                {t.womenMen.womenEyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">
                {t.womenMen.womenTitle}
              </h3>
              <p className="mt-5 leading-7 text-black/55">
                {t.womenMen.womenText}
              </p>
            </article>

            <article className="rounded-4xl bg-[#111111] p-8 text-white sm:p-10">
              <span className="text-sm uppercase tracking-[0.18em] text-[#D5AA1B]">
                {t.womenMen.menEyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-semibold">
                {t.womenMen.menTitle}
              </h3>
              <p className="mt-5 leading-7 text-white/65">
                {t.womenMen.menText}
              </p>
            </article>
          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          ZONES
      ========================================================== */}
      <Reveal>
      <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.zones.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.zones.title}
            </h2>

            <p className="mt-7 leading-7 text-black/55">
              {t.zones.text}
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {t.zones.items.map((zone) => (
                <div
                  key={zone}
                  className="rounded-2xl bg-[#FAF9F6] px-5 py-4 text-sm font-medium"
                >
                  <span className="mr-2 text-[#D5AA1B]">✓</span>
                  {zone}
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="relative min-h-125 overflow-hidden rounded-4xl">
              <Image
                src="/images/waxing/blue-wax.jpg"
                alt="Professionelles Wachs für Haarentfernung"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="relative min-h-125 overflow-hidden rounded-4xl">
              <Image
                src="/images/waxing/blue-wax-pour.jpg"
                alt="Waxing Vorbereitung im Kosmetikstudio"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          PROCESS
      ========================================================== */}
      <section className="px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.process.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              {t.process.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              {t.process.text}
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-4xl bg-black/8 md:grid-cols-2 lg:grid-cols-4">
            {t.process.steps.map((step) => (
              <article key={step.number} className="bg-white p-8 lg:p-9">
                <span className="text-3xl font-light text-[#D5AA1B]">
                  {step.number}
                </span>
                <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>
                <p className="mt-4 text-sm leading-6 text-black/55">
                  {step.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
      

      {/* =========================================================
          REAL TREATMENT
      ========================================================== */}
      <section className="overflow-hidden bg-[#111111] text-white">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          <div className="relative min-h-150 lg:min-h-180">
            <Image
              src="/images/waxing/waxing-preparation.jpg"
              alt="Waxing Behandlung für Männer bei Kosmetikerin Valeriia in Zürich"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">
                {t.treatment.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t.treatment.title}
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/65">
                {t.treatment.text}
              </p>

              <p className="mt-5 leading-7 text-white/55">
                {t.treatment.textSecond}
              </p>

              <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                {t.treatment.booking}
              </ServiceBookingButton>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          BEFORE / AFTER CARE
      ========================================================== */}
      <Reveal>
      <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-6xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.care.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.care.title}
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              {t.care.text}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-4xl bg-[#FAF9F6] p-8 sm:p-10">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#B98A16]">
                {t.care.beforeEyebrow}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                {t.care.beforeTitle}
              </h3>

              <div className="mt-7 space-y-4 text-black/60">
                {t.care.beforeItems.map((item) => (
                  <p key={item}>✓ {item}</p>
                ))}
              </div>
            </div>

            <div className="rounded-4xl bg-[#FAF9F6] p-8 sm:p-10">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#B98A16]">
                {t.care.afterEyebrow}
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                {t.care.afterTitle}
              </h3>

              <div className="mt-7 space-y-4 text-black/60">
  {t.care.afterItems.map((item) => (
    <p key={item}>✓ {item}</p>
  ))}
</div>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          CLOSE-UP IMAGE
      ========================================================== */}
      <Reveal>
      <section className="px-6 pb-24 sm:px-10 lg:pb-32">
        <div className="relative mx-auto min-h-150 max-w-6xl overflow-hidden rounded-4xl">
          <Image
            src="/images/waxing/waxing-man-close.jpg"
            alt="Professionelle Waxing-Technik in Zürich"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex items-center px-8 sm:px-14">
            <div className="max-w-md text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-[#D5AA1B]">
                {t.location.eyebrow}
              </p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                {t.location.title}
              </h2>
              <p className="mt-5 leading-7 text-white/75">
                {t.location.text}
              </p>
            </div>
          </div>
        </div>
      </section>
      </Reveal>

      {/* =========================================================
          FAQ
      ========================================================== */}
      <Reveal>
      <section className="bg-[#FAF9F6] px-6 py-24 sm:px-10 lg:py-32">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">
              {t.faq.eyebrow}
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              {t.faq.title}
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-black/55">
              {t.faq.text}
            </p>
          </div>

          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {t.faq.items.map((faq) => (
              <details key={faq.question} className="group py-6">
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
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-4xl bg-[#111111] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex items-center px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">
                {t.finalCta.eyebrow}
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                {t.finalCta.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                {t.finalCta.text}
              </p>

              <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                {t.finalCta.booking}
              </ServiceBookingButton>

              <p className="mt-7 text-sm leading-6 text-white/45">
                {t.finalCta.address}
                <br />
                {t.finalCta.hours}
              </p>
            </div>
          </div>

          <div className="relative min-h-112.5">
            <Image
              src="/images/waxing/pink-wax.jpg"
              alt="Waxing bei Kosmetikerin Valeriia Zürich"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </div>

      </section>
      </Reveal>

            {/* Temporary bottom spacing before site integration */}
      <div className="h-8 bg-white" />
            </main>


      <Footer lang={lang} />
    </>
  );
}
