import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ServicePageHeader from "@/components/ServicePageHeader";
import ServicePageFooter from "@/components/ServicePageFooter";
import Script from "next/script";
import Reveal from "@/components/Reveal";
import ServiceBookingButton from "@/components/ServiceBookingButton";

export const metadata: Metadata = {
  title: "Waxing Zürich für Frauen & Männer",
  description:
    "Professionelles Waxing in Zürich 8001 für Frauen und Männer. Haarentfernung für Gesicht und Körper bei Kosmetikerin Valeriia – zentral in Zürich.",

  alternates: {
    canonical: "/waxing-zurich",
  },

  openGraph: {
    title: "Waxing Zürich für Frauen & Männer | Kosmetikerin Valeriia",
    description:
      "Professionelles Waxing in Zürich 8001 für Frauen und Männer. Persönliche Betreuung und Haarentfernung für verschiedene Körperbereiche.",
    url: "/waxing-zurich",
    siteName: "Kosmetikerin Valeriia",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/waxing/hero.jpg",
        alt: "Waxing bei Kosmetikerin Valeriia in Zürich",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const zones = [
  "Gesicht",
  "Achseln",
  "Arme",
  "Beine",
  "Bikini",
  "Intimbereich",
  "Rücken",
  "Brust & Bauch",
];

const steps = [
  {
    number: "01",
    title: "Kurze Beratung",
    text: "Vor der Behandlung besprechen wir die gewünschte Zone, Hautempfindlichkeit und deine individuellen Wünsche.",
  },
  {
    number: "02",
    title: "Vorbereitung der Haut",
    text: "Die Haut wird professionell vorbereitet, damit das Wachs optimal arbeiten kann und die Behandlung möglichst angenehm bleibt.",
  },
  {
    number: "03",
    title: "Professionelles Waxing",
    text: "Die Haare werden sorgfältig und gründlich entfernt. Je nach Körperzone und Hauttyp wird die passende Technik gewählt.",
  },
  {
    number: "04",
    title: "Pflege danach",
    text: "Zum Abschluss wird die Haut beruhigt und du erhältst persönliche Hinweise für die Pflege nach dem Waxing.",
  },
];

const faqs = [
  {
    question: "Wie lange hält das Ergebnis nach dem Waxing?",
    answer:
      "Das ist individuell und hängt unter anderem vom Haarwachstum und der behandelten Zone ab. Häufig bleibt die Haut mehrere Wochen glatt. Bei regelmäßigen Behandlungen kann das Nachwachsen zudem feiner wirken.",
  },
  {
    question: "Wie lang müssen die Haare vor dem Waxing sein?",
    answer:
      "Die Haare sollten lang genug sein, damit das Wachs sie zuverlässig erfassen kann. Sehr kurz rasierte Haare lassen sich häufig noch nicht vollständig entfernen.",
  },
  {
    question: "Ist Waxing schmerzhaft?",
    answer:
      "Das Empfinden ist von Person zu Person unterschiedlich und hängt auch von der Körperzone ab. Eine professionelle Technik und die richtige Vorbereitung helfen dabei, die Behandlung so angenehm wie möglich zu gestalten.",
  },
  {
    question: "Kann ich direkt nach dem Waxing Sport machen?",
    answer:
      "Direkt nach der Behandlung ist die Haut häufig empfindlicher. Intensive Reibung, starkes Schwitzen, Sauna und sehr heiße Bäder sollten deshalb zunächst vermieden werden.",
  },
  {
    question: "Bietest du auch Intim-Waxing an?",
    answer:
      "Ja. Waxing im Bikini- und Intimbereich gehört zu den angebotenen Behandlungen. Diskretion, Hygiene und eine ruhige Atmosphäre haben dabei besondere Bedeutung.",
  },
  {
    question: "Ist Waxing auch für Männer möglich?",
    answer:
      "Ja. Professionelles Waxing wird sowohl für Frauen als auch für Männer angeboten. Mögliche Bereiche sind unter anderem Rücken, Brust, Bauch, Achseln, Beine und weitere Körperzonen.",
  },
  {
    question: "Wie oft sollte Waxing wiederholt werden?",
    answer:
      "Der passende Abstand hängt vom persönlichen Haarwachstum ab. Nach einigen Behandlungen lässt sich meist gut einschätzen, welcher Rhythmus für dich am besten funktioniert.",
  },
  {
    question: "Wo befindet sich das Kosmetikstudio?",
    answer:
      "Das Studio befindet sich an der Weinbergstrasse 18, 8001 Zürich – zentral und nur wenige Minuten vom Zürich Hauptbahnhof entfernt.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kosmetikerin-valeriia.ch/waxing-zurich#service",
  name: "Waxing in Zürich für Frauen & Männer",
  description:
    "Professionelles Waxing in Zürich 8001 für Frauen und Männer. Haarentfernung für Gesicht und verschiedene Körperbereiche bei Kosmetikerin Valeriia.",
  url: "https://kosmetikerin-valeriia.ch/waxing-zurich",
  image:
    "https://kosmetikerin-valeriia.ch/images/waxing/hero.jpg",
  serviceType: "Waxing und professionelle Haarentfernung",
  provider: {
    "@id": "https://kosmetikerin-valeriia.ch/#beautysalon",
  },
  areaServed: {
    "@type": "City",
    name: "Zürich",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": "https://kosmetikerin-valeriia.ch/waxing-zurich#faq",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function WaxingZurichPage() {
  return (
    <>
      <Script
        id="waxing-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <Script
        id="waxing-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <ServicePageHeader />

    <main className="min-h-screen bg-[#FAF9F6] text-[#111111]">
      {/* =========================================================
          HERO
      ========================================================== */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid min-h-[720px] max-w-7xl lg:grid-cols-2">
          <div className="flex items-center px-6 py-20 sm:px-10 lg:px-16 lg:py-24">
            <div className="max-w-xl">
              <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-[#B98A16]">
                Waxing · Zürich 8001
              </p>

              <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
                Waxing in Zürich
                <span className="mt-2 block text-[#D5AA1B]">
                  für Frauen & Männer
                </span>
              </h1>

              <p className="mt-7 max-w-lg text-lg leading-8 text-black/65">
                Professionelle Haarentfernung für glatte, gepflegte Haut –
                individuell, gründlich und in entspannter Atmosphäre im Herzen
                von Zürich.
              </p>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-black/70">
                <span>✓ Zentrale Lage</span>
                <span>✓ Persönliche Betreuung</span>
                <span>✓ Professionelle Produkte</span>
              </div>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                  Termin online buchen
                </ServiceBookingButton>

                <Link
                  href="/#prices"
                  className="inline-flex min-h-13 items-center justify-center rounded-full border border-black/15 px-8 text-sm font-medium transition hover:border-black/30 hover:bg-white"
                >
                  Preise ansehen
                </Link>
              </div>

              <p className="mt-8 text-sm leading-6 text-black/50">
                Weinbergstrasse 18 · 8001 Zürich
                <br />
                nur wenige Minuten vom Zürich HB
              </p>
            </div>
          </div>

          <div className="relative min-h-[500px] lg:min-h-full">
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
              <p className="mt-1 text-sm text-black/60">Jahre Erfahrung</p>
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
            Professionelle Haarentfernung
          </p>

          <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            Professionelles Waxing in Zürich
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-black/60">
            Waxing entfernt die Haare direkt an der Wurzel und sorgt dadurch
            länger für ein glattes und gepflegtes Hautgefühl als eine klassische
            Rasur. Die Behandlung eignet sich für viele Bereiche des Körpers
            und kann individuell an deine Haut und deine Wünsche angepasst
            werden.
          </p>

          <p className="mx-auto mt-5 max-w-3xl leading-7 text-black/55">
            Bei Kosmetikerin Valeriia in Zürich stehen eine sorgfältige
            Behandlung, professionelle Produkte und eine persönliche Betreuung
            im Mittelpunkt – für Frauen und Männer.
          </p>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            <div className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
              <p className="text-2xl text-[#D5AA1B]">01</p>
              <h3 className="mt-4 font-semibold">Gründlich</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Haare werden an der Wurzel entfernt statt nur an der Oberfläche
                gekürzt.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
              <p className="text-2xl text-[#D5AA1B]">02</p>
              <h3 className="mt-4 font-semibold">Individuell</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Technik und Behandlung werden an Haut, Körperzone und
                Bedürfnisse angepasst.
              </p>
            </div>

            <div className="rounded-3xl border border-black/5 bg-[#FAF9F6] p-7">
              <p className="text-2xl text-[#D5AA1B]">03</p>
              <h3 className="mt-4 font-semibold">Professionell</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">
                Hochwertige Produkte, sorgfältige Vorbereitung und hygienisches
                Arbeiten.
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
          <div className="relative min-h-[580px] overflow-hidden rounded-[2rem]">
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
              Persönlich & professionell
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Deine Haut verdient eine sorgfältige Behandlung
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              Eine gute Waxing-Behandlung beginnt lange bevor das Wachs auf die
              Haut kommt. Vorbereitung, Hygiene und die Wahl der richtigen
              Technik sind entscheidend für ein angenehmes Ergebnis.
            </p>

            <p className="mt-5 leading-7 text-black/55">
              Jede Behandlung wird persönlich durchgeführt. Dabei nehme ich mir
              Zeit für deine Wünsche und achte besonders auf eine ruhige,
              diskrete und angenehme Atmosphäre.
            </p>

            <div className="mt-9 space-y-4">
              {[
                "Hygienische Vorbereitung",
                "Professionelle Waxing-Produkte",
                "Individuelle Beratung",
                "Ruhige & diskrete Atmosphäre",
              ].map((item) => (
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
              Qualität
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Professionelle Produkte für unterschiedliche Hautbereiche
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              Nicht jede Körperzone ist gleich. Deshalb kommen je nach
              Behandlung unterschiedliche professionelle Waxing-Produkte und
              Techniken zum Einsatz.
            </p>

            <p className="mt-5 leading-7 text-black/55">
              Das Ziel ist eine gründliche Haarentfernung bei gleichzeitig
              möglichst schonendem Umgang mit der Haut.
            </p>
          </div>

          <div className="relative order-1 min-h-[540px] overflow-hidden rounded-[2rem] lg:order-2">
            <Image
              src="/images/waxing/italwax-cartridges.jpg"
              alt="Professionelle Waxing Produkte im Kosmetikstudio in Zürich"
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
              Für sie & ihn
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              Waxing für Frauen & Männer
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              Professionelle Haarentfernung ist längst nicht nur ein Thema für
              Frauen. Im Studio in Zürich sind sowohl Frauen als auch Männer
              willkommen.
            </p>
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-2">
            <article className="rounded-[2rem] bg-white p-8 sm:p-10">
              <span className="text-sm uppercase tracking-[0.18em] text-[#B98A16]">
                Damen
              </span>
              <h3 className="mt-4 text-2xl font-semibold">
                Waxing für Frauen
              </h3>
              <p className="mt-5 leading-7 text-black/55">
                Von Beinen und Achseln bis zum Bikini- und Intimbereich:
                verschiedene Körperzonen können einzeln oder kombiniert
                behandelt werden. Diskretion und eine persönliche Betreuung
                stehen dabei immer im Vordergrund.
              </p>
            </article>

            <article className="rounded-[2rem] bg-[#111111] p-8 text-white sm:p-10">
              <span className="text-sm uppercase tracking-[0.18em] text-[#D5AA1B]">
                Herren
              </span>
              <h3 className="mt-4 text-2xl font-semibold">
                Waxing für Männer
              </h3>
              <p className="mt-5 leading-7 text-white/65">
                Auch Männer entscheiden sich zunehmend für eine professionelle
                Haarentfernung – zum Beispiel an Brust, Bauch, Rücken, Achseln
                oder Beinen. Die Behandlung wird individuell an die jeweilige
                Körperzone angepasst.
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
              Körperzonen
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Welche Bereiche können gewachst werden?
            </h2>

            <p className="mt-7 leading-7 text-black/55">
              Waxing eignet sich für viele Körperbereiche. Welche Behandlung
              am besten passt, hängt von deinen persönlichen Wünschen und der
              jeweiligen Zone ab.
            </p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {zones.map((zone) => (
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
            <div className="relative min-h-[500px] overflow-hidden rounded-[2rem]">
              <Image
                src="/images/waxing/blue-wax.jpg"
                alt="Professionelles Wachs für Haarentfernung"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
            </div>

            <div className="relative mt-12 min-h-[500px] overflow-hidden rounded-[2rem]">
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
              Deine Behandlung
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
              So läuft eine Waxing-Behandlung ab
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              Besonders beim ersten Termin hilft es zu wissen, was dich
              erwartet. Der Ablauf ist unkompliziert und wird individuell an
              dich angepasst.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] bg-black/8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
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
          <div className="relative min-h-[600px] lg:min-h-[720px]">
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
                Professionelle Anwendung
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Sorgfältig. Persönlich. Gründlich.
              </h2>

              <p className="mt-7 text-lg leading-8 text-white/65">
                Professionelles Waxing bedeutet mehr als nur Haare zu
                entfernen. Die richtige Temperatur, Technik und Arbeitsweise
                spielen eine wichtige Rolle für ein sauberes Ergebnis.
              </p>

              <p className="mt-5 leading-7 text-white/55">
                Besonders bei größeren oder empfindlicheren Körperbereichen
                wird Schritt für Schritt gearbeitet und auf die Reaktion der
                Haut geachtet.
              </p>

              <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                Termin online buchen
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
              Gut vorbereitet
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Vor & nach dem Waxing
            </h2>

            <p className="mt-7 text-lg leading-8 text-black/60">
              Mit ein paar einfachen Regeln kannst du deine Haut optimal auf
              die Behandlung vorbereiten und sie danach unterstützen.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <div className="rounded-[2rem] bg-[#FAF9F6] p-8 sm:p-10">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#B98A16]">
                Vor der Behandlung
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                Die richtige Vorbereitung
              </h3>

              <div className="mt-7 space-y-4 text-black/60">
                <p>✓ Haare nicht unmittelbar vorher rasieren.</p>
                <p>✓ Haut am Behandlungstag sauber halten.</p>
                <p>✓ Stark reizende Hautpflege vorher vermeiden.</p>
                <p>✓ Bei Unsicherheit vorab kurz nachfragen.</p>
              </div>
            </div>

            <div className="rounded-[2rem] bg-[#FAF9F6] p-8 sm:p-10">
              <span className="text-sm font-medium uppercase tracking-[0.18em] text-[#B98A16]">
                Nach der Behandlung
              </span>

              <h3 className="mt-4 text-2xl font-semibold">
                Der Haut etwas Ruhe geben
              </h3>

              <div className="mt-7 space-y-4 text-black/60">
                <p>✓ Reibung möglichst reduzieren.</p>
                <p>✓ Direkt danach intensive Hitze vermeiden.</p>
                <p>✓ Starkes Schwitzen zunächst reduzieren.</p>
                <p>✓ Individuelle Pflegehinweise beachten.</p>
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
        <div className="relative mx-auto min-h-[600px] max-w-6xl overflow-hidden rounded-[2rem]">
          <Image
            src="/images/waxing/waxing-man-close.jpg"
            alt="Professionelle Waxing Technik in Zürich"
            fill
            sizes="(max-width: 1200px) 100vw, 1200px"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-linear-to-r from-black/65 via-black/20 to-transparent" />

          <div className="absolute inset-0 flex items-center px-8 sm:px-14">
            <div className="max-w-md text-white">
              <p className="text-sm uppercase tracking-[0.2em] text-[#D5AA1B]">
                Zentral in Zürich
              </p>
              <h2 className="mt-5 text-3xl font-semibold sm:text-4xl">
                Dein Waxing-Termin in Zürich
              </h2>
              <p className="mt-5 leading-7 text-white/75">
                Persönliche Behandlung in zentraler Lage an der
                Weinbergstrasse 18, 8001 Zürich.
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
              FAQ
            </p>

            <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
              Häufige Fragen zum Waxing
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-7 text-black/55">
              Alles, was du vor deinem ersten oder nächsten Waxing-Termin in
              Zürich wissen möchtest.
            </p>
          </div>

          <div className="mt-14 divide-y divide-black/10 border-y border-black/10">
            {faqs.map((faq) => (
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
        <div className="mx-auto grid max-w-6xl overflow-hidden rounded-[2rem] bg-[#111111] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="flex items-center px-8 py-16 text-white sm:px-12 lg:px-16 lg:py-20">
            <div className="max-w-xl">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#D5AA1B]">
                Bereit für glatte Haut?
              </p>

              <h2 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Jetzt deinen Waxing-Termin buchen
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Wähle deine gewünschte Behandlung und finde direkt online einen
                passenden Termin.
              </p>

              <ServiceBookingButton className="inline-flex min-h-13 items-center justify-center rounded-full bg-[#D5AA1B] px-7 text-sm font-semibold text-[#111111] transition hover:bg-[#B98A16]">
                Termin online buchen
              </ServiceBookingButton>

              <p className="mt-7 text-sm leading-6 text-white/45">
                Weinbergstrasse 18 · 8001 Zürich
                <br />
                Montag–Samstag · 09:00–21:00
              </p>
            </div>
          </div>

          <div className="relative min-h-[450px]">
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

      <ServicePageFooter />
    </>
  );
}