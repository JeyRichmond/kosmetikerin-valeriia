"use client";

import Image from "next/image";

type Props = {
  t: {
    about: {
      title: string;
      text: string;
    };
  };
};

export default function AboutSection({ t }: Props) {
  return (
    <section id="about" className="border-t border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT */}
        <div className="space-y-6">

          <h2 className="text-2xl md:text-3xl font-semibold text-(--brand-dark)">
            {t.about.title}
          </h2>

          <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line">
            {t.about.text}
          </p>
        </div>

        {/* IMAGE */}
        <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-sm">
          <Image
            src="/6.jpg"
            alt="Kosmetikerin Valeriia"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </section>
  );
}