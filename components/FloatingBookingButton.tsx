"use client";

import { useEffect, useState } from "react";
import { useBooking } from "@/components/useBooking";

export default function FloatingBookingButton() {
  const { openBooking } = useBooking();

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");
    const contact = document.getElementById("contact");

    if (!hero || !contact) {
      return;
    }

    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsHeroVisible(entry.isIntersecting);
      },
      {
        threshold: 0.15,
      }
    );

    const contactObserver = new IntersectionObserver(
      ([entry]) => {
        setIsContactVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2,
      }
    );

    heroObserver.observe(hero);
    contactObserver.observe(contact);

    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  const isVisible = !isHeroVisible && !isContactVisible;

  return (
    <button
      onClick={openBooking}
      aria-label="Online buchen"
      className={`
        fixed bottom-5 right-5 z-50
        rounded-full
        bg-(--brand-gold) px-5 py-3
        text-sm font-semibold text-[#111111]
        shadow-lg
        floating-booking
        transition-all duration-300
        hover:scale-105
        ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
      Online buchen
    </button>
  );
}