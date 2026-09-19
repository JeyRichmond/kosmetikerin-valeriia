import type { Metadata } from "next";
import Script from "next/script";
import BrowLashPageContent from "@/components/brow-lash/BrowLashPageContent";
import { browLashTranslations } from "@/lib/browLashTranslations";

export const metadata: Metadata = {
  title: "Brow & Lash Lifting Zürich",

  description:
    "Professionelles Brow & Lash Lifting in Zürich 8001. Natürlich geformte Brauen und geschwungene Wimpern bei Kosmetikerin Valeriia – individuell und sorgfältig.",

  alternates: {
    canonical: "/brow-lash-zurich",
  },

  openGraph: {
    title: "Brow & Lash Lifting Zürich | Kosmetikerin Valeriia",

    description:
      "Professionelles Brow Lifting und Lash Lifting in Zürich. Individuelle Beratung, natürliche Ergebnisse und professionelle Behandlung.",

    url: "/brow-lash-zurich",

    siteName: "Kosmetikerin Valeriia",

    locale: "de_CH",

    type: "website",

    images: [
      {
        url: "/images/brow-lash/client-result.jpg",
        alt: "Brow und Lash Lifting bei Kosmetikerin Valeriia in Zürich",
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const faqs = browLashTranslations.de.faq.items;

const serviceSchema = {
  "@context": "https://schema.org",

  "@type": "Service",

  "@id":
    "https://kosmetikerin-valeriia.ch/brow-lash-zurich#service",

  name: "Brow & Lash Lifting in Zürich",

  description:
    "Professionelles Brow Lifting und Lash Lifting in Zürich 8001. Individuell abgestimmte Behandlungen für natürlich geformte Brauen und geschwungene Wimpern.",

  url:
    "https://kosmetikerin-valeriia.ch/brow-lash-zurich",

  image:
    "https://kosmetikerin-valeriia.ch/images/brow-lash/client-result.jpg",

  serviceType:
    "Brow Lifting und Lash Lifting",

  provider: {
    "@id":
      "https://kosmetikerin-valeriia.ch/#beautysalon",
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
    "https://kosmetikerin-valeriia.ch/brow-lash-zurich#faq",

  mainEntity: faqs.map((faq) => ({
    "@type": "Question",

    name: faq.question,

    acceptedAnswer: {
      "@type": "Answer",

      text: faq.answer,
    },
  })),
};

export default function BrowLashZurichPage() {
  return (
    <>
      <Script
        id="brow-lash-service-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema),
        }}
      />

      <Script
        id="brow-lash-faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />

      <BrowLashPageContent />
    </>
  );
}