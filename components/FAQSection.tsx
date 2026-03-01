"use client";

import Script from "next/script";

export default function FAQSection() {
  const faqData = [
    {
      question: "Bieten Sie Online-Termine an?",
      answer:
        "Ja, Sie können bequem online einen Termin über unsere Buchungsseite vereinbaren.",
    },
    {
      question: "Welche Behandlungen bieten Sie an?",
      answer:
        "Wir bieten Gesichtsbehandlungen, Peelings, Brow & Lash Lifting sowie professionelle Haarentfernung für Frauen und Männer an.",
    },
    {
      question: "Wo befindet sich das Studio?",
      answer:
        "Das Studio befindet sich in Zürich, 8001, in der Weinbergstrasse 18.",
    },
    {
      question: "Arbeiten Sie mit empfindlicher Haut?",
      answer:
        "Ja, alle Behandlungen sind auch für empfindliche Haut geeignet. Wir verwenden hochwertige und hautfreundliche Produkte.",
    },
  ];

  return (
    <>
      {/* Visual FAQ Section */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-semibold mb-8 text-center">
          Häufige Fragen
        </h2>

        <div className="space-y-6">
          {faqData.map((item, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="font-medium">{item.question}</h3>
              <p className="text-sm text-gray-600 mt-2">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Schema */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        strategy="afterInteractive"
      >
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqData.map((item) => ({
            "@type": "Question",
            name: item.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: item.answer,
            },
          })),
        })}
      </Script>
    </>
  );
}