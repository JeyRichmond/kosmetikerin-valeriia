import type { Metadata } from "next";
import Script from "next/script";
import WaxingPageContent from "@/components/waxing/WaxingPageContent";

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

      <WaxingPageContent />
    </>
  );
}