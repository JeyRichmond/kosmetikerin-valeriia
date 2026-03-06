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
    <section id="about" className="border-t border-gray-100 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28 grid md:grid-cols-2 gap-10 md:gap-16 items-center">
        
        {/* LEFT SIDE: IMAGE WITH DECOR */}
        <div className="relative order-2 md:order-1 group">
          {/* Декоративное свечение */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-(--brand-gold)/10 rounded-full blur-3xl group-hover:bg-(--brand-gold)/20 transition-colors duration-700" />
          
          <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-2xl z-10 transition-transform duration-700 group-hover:scale-[1.01]">
            <Image
              src="/Kosmetikerin_Valeriia_001.jpg"
              alt="Kosmetikerin Valeriia"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        {/* RIGHT SIDE: TEXT */}
        <div className="space-y-6 md:space-y-8 order-1 md:order-2">
          <div className="space-y-4">
            {/* Маленький акцентный штрих над заголовком */}
            <div className="w-12 h-1 bg-(--brand-gold) rounded-full mb-4 opacity-60" />
            <h2 className="text-3xl md:text-4xl font-semibold text-(--brand-dark) leading-tight">
              {t.about.title}
            </h2>
          </div>

          <div className="relative">
            {/* Большая кавычка */}
            <span className="absolute -top-8 -left-4 text-7xl text-gray-100 pointer-events-none font-serif z-0">
              &ldquo;
            </span>
            
            <p className="text-sm md:text-base text-gray-600 leading-relaxed whitespace-pre-line relative z-10">
              {t.about.text}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}