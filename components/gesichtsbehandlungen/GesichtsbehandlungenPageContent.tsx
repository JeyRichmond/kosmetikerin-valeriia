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
import { gesichtsbehandlungenTranslations } from "@/lib/gesichtsbehandlungenTranslations";

export default function GesichtsbehandlungenPageContent() {
  const [lang, setLang] = useState<LangKey>("de");
  const t = gesichtsbehandlungenTranslations[lang] ?? gesichtsbehandlungenTranslations.de;
  const { openBooking } = useBooking();

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangKey | null;
    if (!saved || !translations[saved]) return;
    const timeout = window.setTimeout(() => setLang(saved), 0);
    return () => window.clearTimeout(timeout);
  }, []);

  const handleLanguageChange = (newLang: LangKey) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <>
      <Header lang={lang} onLangChange={handleLanguageChange} onBook={openBooking} />

      <main className="min-h-screen bg-[#FAF9F6] text-[#111111]">
        <section className="relative overflow-hidden">
          <div className="mx-auto grid min-h-180 max-w-7xl lg:grid-cols-2">
            <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <div className="max-w-xl">
                <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#B98A16]">{t.hero.eyebrow}</p>
                <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                  {t.hero.title}
                  <span className="mt-2 block text-[#D5AA1B]">{t.hero.titleAccent}</span>
                </h1>
                <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">{t.hero.text}</p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/70">
                  {t.hero.benefits.map((benefit) => <span key={benefit}>✓ {benefit}</span>)}
                </div>
                <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                  <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                    {t.hero.bookingButton}
                  </ServiceBookingButton>
                  <Link href="#treatments" className="inline-flex min-h-13 items-center justify-center rounded-full border border-black/15 px-8 text-sm font-medium transition hover:border-black/30 hover:bg-white">
                    {t.hero.treatmentsButton}
                  </Link>
                </div>
                <p className="mt-8 text-sm leading-6 text-black/50">{t.hero.location}<br />{t.hero.locationNote}</p>
              </div>
            </div>
            <div className="relative min-h-125 lg:min-h-full">
              <Image src="/images/gesichtsbehandlungen/hero.jpg" alt="Gesichtsbehandlung bei Kosmetikerin Valeriia in Zürich" fill priority sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/10 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-6 py-5 shadow-lg backdrop-blur-sm sm:bottom-8 sm:left-8">
                <p className="text-2xl font-semibold text-[#D5AA1B]">{t.hero.experience}</p>
                <p className="mt-1 text-sm text-black/60">{t.hero.experienceText}</p>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-4xl text-center">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.introduction.eyebrow}</p>
              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.introduction.title}</h2>
              <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">{t.introduction.text}</p>
              <p className="mx-auto mt-5 max-w-3xl leading-7 text-black/55">{t.introduction.textSecond}</p>
              <div className="mt-14 grid gap-4 sm:grid-cols-3">
                {t.introduction.benefits.map((benefit) => (
                  <article key={benefit.number} className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
                    <p className="text-2xl text-[#D5AA1B]">{benefit.number}</p>
                    <h3 className="mt-4 font-semibold">{benefit.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-black/55">{benefit.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="treatments" className="scroll-mt-24 px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.treatments.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.treatments.title}</h2>
                <p className="mt-7 text-lg leading-8 text-black/60">{t.treatments.text}</p>
              </div>
              <div className="mt-16 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                {t.treatments.items.map((item, index) => (
                  <article key={item.title} className="flex min-h-72 flex-col rounded-4xl bg-white p-8 sm:p-9">
                    <span className="text-sm font-medium text-[#B98A16]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-5 text-2xl font-semibold">{item.title}</h3>
                    <p className="mt-4 flex-1 leading-7 text-black/55">{item.text}</p>
                    <ServiceBookingButton className="mt-8 self-start text-sm font-semibold text-[#B98A16] transition hover:text-[#111111]">
                      {t.treatments.bookingButton} →
                    </ServiceBookingButton>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ["black-mask-closeup.jpg", "Individuelle Gesichtsbehandlung in Zürich"],
                  ["black-mask-treatment.jpg", "Professionelle Gesichtspflege bei Kosmetikerin Valeriia"],
                ].map(([src, alt]) => (
                  <div key={src} className="relative min-h-135 overflow-hidden rounded-4xl">
                    <Image src={`/images/gesichtsbehandlungen/${src}`} alt={alt} fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.personal.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.personal.title}</h2>
                <p className="mt-7 text-lg leading-8 text-black/60">{t.personal.text}</p>
                <p className="mt-5 leading-7 text-black/55">{t.personal.textSecond}</p>
                <div className="mt-9 space-y-4">
                  {t.personal.benefits.map((item) => (
                    <div key={item} className="flex items-center gap-4 border-b border-black/8 pb-4">
                      <span className="text-[#D5AA1B]">✓</span><span className="text-black/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl">
              <div className="grid items-end gap-10 lg:grid-cols-[1fr_0.9fr]">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.process.eyebrow}</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.process.title}</h2>
                </div>
                <p className="leading-7 text-black/55">{t.process.text}</p>
              </div>
              <div className="mt-14 grid gap-4 md:grid-cols-3">
                <div className="relative min-h-105 overflow-hidden rounded-4xl md:col-span-2">
                  <Image src="/images/gesichtsbehandlungen/facial-cleansing.jpg" alt="Professionelle Gesichtsreinigung in Zürich" fill sizes="(max-width: 768px) 100vw, 66vw" className="object-cover" />
                </div>
                <div className="relative min-h-105 overflow-hidden rounded-4xl">
                  <Image src="/images/gesichtsbehandlungen/facial-mask-treatment.jpg" alt="Gesichtsmaske während einer kosmetischen Behandlung" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
                </div>
              </div>
              <div className="mt-5 grid gap-px overflow-hidden rounded-4xl bg-black/8 md:grid-cols-2 lg:grid-cols-4">
                {t.process.steps.map((step) => (
                  <article key={step.number} className="bg-white p-8 lg:p-9">
                    <span className="text-3xl font-light text-[#D5AA1B]">{step.number}</span>
                    <h3 className="mt-7 text-lg font-semibold">{step.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-black/55">{step.text}</p>
                  </article>
                ))}

              </div>
            </div>
          </section>
        </Reveal>

        <section className="overflow-hidden bg-[#111111] text-white">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            <div className="relative min-h-150 lg:min-h-180">
              <Image src="/images/gesichtsbehandlungen/facial-massage.jpg" alt="Professionelle Gesichtspflege in Zürich" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
              <div className="max-w-xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">{t.quality.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.quality.title}</h2>
                <p className="mt-7 text-lg leading-8 text-white/65">{t.quality.text}</p>
                <div className="mt-9 space-y-4">
                  {t.quality.benefits.map((item) => (
                    <div key={item} className="flex items-center gap-4 border-b border-white/10 pb-4">
                      <span className="text-[#D5AA1B]">✓</span><span className="text-white/70">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.products.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.products.title}</h2>
                <p className="mt-7 text-lg leading-8 text-black/60">{t.products.text}</p>
                <p className="mt-5 leading-7 text-black/55">{t.products.textSecond}</p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative min-h-125 overflow-hidden rounded-4xl">
                  <Image src="/images/gesichtsbehandlungen/professional-products.jpg" alt="Professionelle Kosmetikprodukte für Gesichtsbehandlungen" fill sizes="(max-width: 1024px) 50vw, 30vw" className="object-cover" />
                </div>
                <div className="grid gap-4">
                  <div className="relative min-h-60 overflow-hidden rounded-4xl">
                    <Image src="/images/gesichtsbehandlungen/facial-tools.jpg" alt="Professionell vorbereitete Kosmetik-Instrumente" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                  <div className="relative min-h-60 overflow-hidden rounded-4xl">
                    <Image src="/images/gesichtsbehandlungen/led-mask.png" alt="Kosmetische LED-Maske im Studio in Zürich" fill sizes="(max-width: 1024px) 50vw, 25vw" className="object-cover" />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl">
              <div className="mx-auto max-w-3xl text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.suitable.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.suitable.title}</h2>
                <p className="mt-7 text-lg leading-8 text-black/60">{t.suitable.text}</p>
              </div>
              <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
                {t.suitable.items.map((item, index) => (
                  <article key={item.title} className="rounded-4xl border border-black/5 bg-white p-8">
                    <span className="text-sm font-medium text-[#B98A16]">{String(index + 1).padStart(2, "0")}</span>
                    <h3 className="mt-5 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-4 text-sm leading-6 text-black/55">{item.text}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="relative mx-auto min-h-145 max-w-6xl overflow-hidden rounded-4xl">
              <Image src="/images/gesichtsbehandlungen/personal-treatment1.jpg" alt="Kosmetikerin Valeriia bei einer Gesichtsbehandlung in Zürich" fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-r from-black/75 via-black/40 to-black/5" />
              <div className="absolute inset-0 flex items-center px-8 py-12 sm:px-14 lg:px-16">
                <div className="max-w-xl text-white">
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">{t.location.eyebrow}</p>
                  <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.location.title}</h2>
                  <p className="mt-6 text-lg leading-8 text-white/75">{t.location.text}</p>
                  <p className="mt-6 text-sm leading-6 text-white/60">{t.location.address}<br />{t.location.note}</p>
                  <ServiceBookingButton className="mt-8 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                    {t.location.button}
                  </ServiceBookingButton>
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-4xl">
              <div className="text-center">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#B98A16]">{t.faq.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">{t.faq.title}</h2>
              </div>
              <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
                {t.faq.items.map((faq) => (
                  <details key={faq.question} className="group py-6">
                    <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-lg font-medium">
                      {faq.question}
                      <span className="text-2xl font-light text-[#D5AA1B] transition-transform group-open:rotate-45">+</span>
                    </summary>
                    <p className="max-w-3xl pt-4 leading-7 text-black/55">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section className="bg-white px-6 py-24 sm:px-10 lg:py-32">
            <div className="mx-auto max-w-6xl overflow-hidden rounded-4xl bg-[#111111] px-8 py-16 text-center text-white sm:px-12 lg:px-20 lg:py-20">
              <div className="mx-auto max-w-3xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">{t.finalCta.eyebrow}</p>
                <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">{t.finalCta.title}</h2>
                <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">{t.finalCta.text}</p>
                <ServiceBookingButton className="mt-9 inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-8 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  {t.finalCta.button}
                </ServiceBookingButton>
                <p className="mt-7 text-sm text-white/45">{t.finalCta.location}</p>
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