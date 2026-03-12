"use client";

import Image from "next/image";
import { useState, useEffect, useCallback, useRef } from "react";
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
    "/Kosmetikerin_Valeriia_002.jpg",
    "/Kosmetikerin_Valeriia_006.jpg",
    "/Kosmetikerin_Valeriia_013.jpg",
    "/Kosmetikerin_Valeriia_009.jpg",
    "/Kosmetikerin_Valeriia_004.jpg",
    "/Kosmetikerin_Valeriia_007.jpg",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Для обработки свайпов на телефонах
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
  }, [sliderImages.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + sliderImages.length) % sliderImages.length);
  }, [sliderImages.length]);

  // Автоматическая прокрутка
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(nextSlide, 5000); // 5 секунд для более спокойного темпа
    return () => clearInterval(interval);
  }, [isHovered, nextSlide]);

  // Логика свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStartX.current) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (Math.abs(diff) > 50) { // Порог чувствительности 50px
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="hero"
      className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center"
    >
      {/* LEFT SIDE */}
      <div className="space-y-6">
        <p className="text-xs tracking-[0.3em] uppercase text-(--brand-gold) font-medium">
          Kosmetik · Zürich
        </p>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight">
          {t.hero.title}
        </h1>

        <p className="text-gray-600 text-sm md:text-base max-w-lg leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex flex-wrap gap-3">
          <button
            onClick={openBooking}
            className="bg-(--brand-gold) text-white text-sm px-6 py-3 rounded-full hover:opacity-90 transition-all hover:shadow-lg active:scale-95"
          >
            {t.hero.primaryCta}
          </button>

          <button
            onClick={openServices}
            className="border border-(--brand-gold) text-(--brand-gold)
            text-sm px-6 py-3 rounded-full
            hover:bg-(--brand-gold) hover:text-white transition-all active:scale-95"
          >
            {t.hero.secondaryCta}
          </button>
        </div>
      </div>

      {/* RIGHT SIDE — PREMIUM SLIDER */}
      <div
        className="relative group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="h-105 md:h-135 rounded-3xl border border-gray-100 overflow-hidden shadow-xl relative bg-gray-50">
          
          {sliderImages.map((src, index) => (
            <div
              key={src}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                index === currentSlide ? "opacity-100 z-1" : "opacity-0 z-0"
              }`}
            >
              <Image
                src={src}
                alt={`Kosmetik Bild ${index + 1}`}
                fill
                className={`object-cover transition-transform duration-6000 ease-linear ${
                  index === currentSlide ? "scale-110" : "scale-100"
                }`}
                sizes="(max-width: 768px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
          ))}

          {/* Overlay для мягкости */}
          <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent pointer-events-none z-2" />

          {/* КНОПКИ-СТРЕЛКИ (Скрыты на мобилках, видны при ховере на десктопе) */}
          <button
            onClick={prevSlide}
            className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/40 transition-all opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>

        {/* ИНДИКАТОРЫ (DOTS) */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 md:translate-x-0 md:left-auto md:right-0 flex gap-2">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-8 bg-(--brand-gold)"
                  : "w-2 bg-gray-200 hover:bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}