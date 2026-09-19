import type { Metadata } from "next";
import Script from "next/script";
import PeelingsPageContent from "@/components/peelings/PeelingsPageContent";

export const metadata: Metadata = {
  title: "Peeling Zürich | Professionelle Peelings | Kosmetikerin Valeriia",
  description:
    "Professionelle Peelings in Zürich 8001 bei Kosmetikerin Valeriia. Manssol, Jessol, Balance Recovery, Tagespeeling und Tri Peel – individuell auf deine Haut abgestimmt.",

  alternates: {
    canonical: "/peelings-zurich",
  },

  openGraph: {
    title: "Peeling Zürich | Kosmetikerin Valeriia",
    description:
      "Professionelle Peelings in Zürich 8001 – individuell auf Hautzustand und Pflegeziel abgestimmt. Manssol, Jessol, Balance Recovery, Tagespeeling und Tri Peel.",
    url: "/peelings-zurich",
    siteName: "Kosmetikerin Valeriia",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/peelings/hero.jpg",
        alt: "Professionelles Peeling bei Kosmetikerin Valeriia in Zürich",
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
    question: "Welches Peeling passt zu meiner Haut?",
    answer:
      "Die Wahl des passenden Peelings hängt vom aktuellen Hautzustand, Hauttyp und gewünschten Pflegeziel ab. Vor der Behandlung wird die Haut individuell betrachtet und das geeignete Peeling entsprechend ausgewählt.",
  },
  {
    question: "Welche Peelings werden angeboten?",
    answer:
      "Zum Angebot gehören Manssol, Jessol, Balance Recovery, Tagespeeling und Tri Peel. Welches Peeling geeignet ist, wird individuell anhand des Hautzustands und des gewünschten Pflegeziels ausgewählt.",
  },
  {
    question: "Was kann ein professionelles Peeling bewirken?",
    answer:
      "Ein professionelles Peeling kann die Hauterneuerung unterstützen, das Hautbild verfeinern und zu einem frischeren und ebenmäßigeren Erscheinungsbild beitragen. Die Wirkung hängt vom verwendeten Peeling und vom individuellen Hautzustand ab.",
  },
  {
    question: "Wie oft kann ein Peeling durchgeführt werden?",
    answer:
      "Der passende Abstand zwischen den Behandlungen hängt von der Art des Peelings, dem Hautzustand und der individuellen Hautreaktion ab. Die Empfehlung wird entsprechend der Haut und dem Behandlungsziel individuell abgestimmt.",
  },
  {
    question: "Ist ein Peeling auch bei empfindlicher Haut möglich?",
    answer:
      "Ob ein Peeling bei empfindlicher Haut geeignet ist, hängt vom individuellen Hautzustand ab. Deshalb wird die Haut vor der Behandlung beurteilt und die Behandlung entsprechend angepasst.",
  },
  {
    question: "Was sollte ich nach einem Peeling beachten?",
    answer:
      "Nach einem Peeling ist eine passende Hautpflege besonders wichtig. Je nach Behandlung können unter anderem konsequenter Sonnenschutz und der vorübergehende Verzicht auf intensive Wirkstoffe sinnvoll sein. Individuelle Pflegehinweise werden nach der Behandlung besprochen.",
  },
  {
    question: "Kann ich einen Peeling-Termin online buchen?",
    answer:
      "Ja. Termine für Peelings können bequem online ausgewählt und gebucht werden.",
  },
  {
    question: "Wo werden die Peelings in Zürich angeboten?",
    answer:
      "Die Behandlungen finden an der Weinbergstrasse 18, 8001 Zürich statt – zentral gelegen und nur wenige Minuten vom Zürich Hauptbahnhof entfernt.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": "https://kosmetikerin-valeriia.ch/peelings-zurich#service",

  name: "Professionelle Peelings in Zürich",

  description:
    "Professionelle Peelings in Zürich 8001 bei Kosmetikerin Valeriia. Manssol, Jessol, Balance Recovery, Tagespeeling und Tri Peel – individuell auf Hautzustand und Pflegeziel abgestimmt.",

  url: "https://kosmetikerin-valeriia.ch/peelings-zurich",

  image: "https://kosmetikerin-valeriia.ch/images/peelings/hero.jpg",

  serviceType: "Professionelle kosmetische Peelings",

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
  "@id": "https://kosmetikerin-valeriia.ch/peelings-zurich#faq",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function PeelingsZurichPage() {
  return (
    <>
      <Script
        id="peelings-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <Script
        id="peelings-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <PeelingsPageContent />
    </>
  );
}