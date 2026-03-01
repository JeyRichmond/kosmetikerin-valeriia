"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { useBooking } from "@/components/useBooking";

type HeroTranslations = {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
};

type Props = {
  t: HeroTranslations;
};

export default function HeroSection({ t }: Props) {
  const { openBooking, openServices } = useBooking();

  const sliderImages = [
    "/13.jpg",
    "/Kosmetikerin_Valeriia_002.PNG",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered, sliderImages.length]);

  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      {/* LEFT SIDE */}
      <div className="space-y-6">
        <p className="text-xs tracking-[0.3em] uppercase text-(--brand-gold)">
          Kosmetik · Zürich
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-gray-600 text-sm md:text-base max-w-lg">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={openBooking}
            className="bg-(--brand-gold) text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
          >
            {t.hero.primaryCta}
          </button>

          <button
            onClick={openServices}
            className="border border-(--brand-gold) text-(--brand-gold)
            text-sm px-5 py-2.5 rounded-full
            hover:bg-black/5 transition-colors"
          >
            {t.hero.secondaryCta}
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — PREMIUM SLIDER */}
      <div
        className="relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="h-105 md:h-135 rounded-3xl border overflow-hidden shadow-sm relative">

          {sliderImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
                index === currentSlide
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-105"
              }`}
            >
              <Image
                src={src}
                alt={`Kosmetik Bild ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent pointer-events-none" />
        </div>

        {/* DOTS */}
        <div className="absolute -bottom-6 right-0 flex gap-1.5">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === currentSlide
                  ? "w-5 bg-(--brand-gold)"
                  : "w-2 bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}