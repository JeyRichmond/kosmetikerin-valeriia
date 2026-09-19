import type { Metadata } from "next";
import Script from "next/script";
import GesichtsbehandlungenPageContent from "@/components/gesichtsbehandlungen/GesichtsbehandlungenPageContent";

export const metadata: Metadata = {
  title: "Gesichtsbehandlungen Zürich | Kosmetikerin Valeriia",
  description:
    "Professionelle Gesichtsbehandlungen in Zürich 8001 – individuell abgestimmt auf deine Haut. Gesichtsreinigung, Hydro Glow, Pure Balance, Lifting Deluxe und Carboxytherapie bei Kosmetikerin Valeriia.",

  alternates: {
    canonical: "/gesichtsbehandlungen-zurich",
  },

  openGraph: {
    title: "Gesichtsbehandlungen Zürich | Kosmetikerin Valeriia",
    description:
      "Professionelle Gesichtsbehandlungen in Zürich 8001. Individuelle Pflege mit Gesichtsreinigung, Hydro Glow, Pure Balance, Lifting Deluxe und Carboxytherapie.",
    url: "/gesichtsbehandlungen-zurich",
    siteName: "Kosmetikerin Valeriia",
    locale: "de_CH",
    type: "website",
    images: [
      {
        url: "/images/gesichtsbehandlungen/hero.jpg",
        alt: "Gesichtsbehandlung bei Kosmetikerin Valeriia in Zürich",
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
    question: "Welche Gesichtsbehandlung passt zu meiner Haut?",
    answer:
      "Die passende Behandlung hängt vom aktuellen Hautzustand und deinen persönlichen Bedürfnissen ab. Vor der Behandlung wird die Haut individuell betrachtet, damit Pflege und Ablauf passend ausgewählt werden können.",
  },
  {
    question: "Welche Gesichtsbehandlungen werden angeboten?",
    answer:
      "Zum Angebot gehören Gesichtsreinigung, Hydro Glow, Pure Balance, Lifting Deluxe und Carboxytherapie. Die Behandlung wird je nach Hautbild und gewünschtem Pflegeziel ausgewählt.",
  },
  {
    question: "Wie oft sollte man eine Gesichtsbehandlung machen?",
    answer:
      "Der passende Abstand hängt von Hauttyp, Hautzustand und gewählter Behandlung ab. Regelmäßige Behandlungen können dabei helfen, die Haut kontinuierlich zu pflegen und auf ihre aktuellen Bedürfnisse einzugehen.",
  },
  {
    question:
      "Ist eine Gesichtsbehandlung auch bei empfindlicher Haut möglich?",
    answer:
      "Auch empfindliche Haut kann professionell behandelt werden. Dabei ist es besonders wichtig, Produkte und Behandlungsschritte individuell an den Hautzustand anzupassen.",
  },
  {
    question: "Wie lange dauert eine Gesichtsbehandlung?",
    answer:
      "Die Dauer hängt von der ausgewählten Behandlung und den individuellen Behandlungsschritten ab. Die genaue Dauer ist bei der jeweiligen Behandlung in der Online-Buchung angegeben.",
  },
  {
    question: "Kann ich direkt nach der Behandlung Make-up tragen?",
    answer:
      "Das hängt von der durchgeführten Behandlung und dem aktuellen Hautzustand ab. Nach intensiveren Behandlungen kann es sinnvoll sein, der Haut zunächst Ruhe zu geben. Persönliche Pflegehinweise werden nach der Behandlung besprochen.",
  },
  {
    question: "Kann ich eine Gesichtsbehandlung online buchen?",
    answer:
      "Ja. Termine für Gesichtsbehandlungen können bequem online ausgewählt und gebucht werden.",
  },
  {
    question: "Wo befindet sich das Kosmetikstudio?",
    answer:
      "Das Studio befindet sich an der Weinbergstrasse 18, 8001 Zürich – zentral gelegen und nur wenige Minuten vom Zürich Hauptbahnhof entfernt.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "@id":
    "https://kosmetikerin-valeriia.ch/gesichtsbehandlungen-zurich#service",

  name: "Gesichtsbehandlungen in Zürich",

  description:
    "Professionelle Gesichtsbehandlungen in Zürich 8001 bei Kosmetikerin Valeriia. Individuelle Gesichtspflege mit Gesichtsreinigung, Hydro Glow, Pure Balance, Lifting Deluxe und Carboxytherapie.",

  url: "https://kosmetikerin-valeriia.ch/gesichtsbehandlungen-zurich",

  image:
    "https://kosmetikerin-valeriia.ch/images/gesichtsbehandlungen/hero.jpg",

  serviceType: "Professionelle Gesichtsbehandlungen und Gesichtspflege",

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

  "@id":
    "https://kosmetikerin-valeriia.ch/gesichtsbehandlungen-zurich#faq",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};

export default function GesichtsbehandlungenZurichPage() {
  return (
    <>
      <Script
        id="gesichtsbehandlungen-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <Script
        id="gesichtsbehandlungen-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <GesichtsbehandlungenPageContent />
    </>
  );
}