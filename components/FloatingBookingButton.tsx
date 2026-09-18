"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { useBooking } from "@/components/useBooking";

export default function FloatingBookingButton() {
  const { openBooking } = useBooking();
  const pathname = usePathname();

  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [isContactVisible, setIsContactVisible] = useState(false);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    if (pathname === "/") {
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
    }

    const footer = document.querySelector("footer");

    const handleScroll = () => {
      setHasScrolled(window.scrollY > 250);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    let footerObserver: IntersectionObserver | null = null;

    if (footer) {
      footerObserver = new IntersectionObserver(
        ([entry]) => {
          setIsFooterVisible(entry.isIntersecting);
        },
        {
          threshold: 0.05,
        }
      );

      footerObserver.observe(footer);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
      footerObserver?.disconnect();
    };
  }, [pathname]);

  const isVisible =
    pathname === "/"
      ? !isHeroVisible && !isContactVisible
      : hasScrolled && !isFooterVisible;

  return (
    <button
      type="button"
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