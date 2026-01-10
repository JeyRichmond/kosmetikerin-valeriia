"use client";

import { useBooking } from "@/components/useBooking";

export default function FloatingBookingButton() {
  const { openBooking } = useBooking();

  return (
    <button
      onClick={openBooking}
      className="
        fixed bottom-5 right-5 z-50
        px-5 py-3 rounded-full
        bg-(--brand-gold) text-white
        text-sm font-semibold
        shadow-lg
        floating-booking
        hover:scale-105
        transition
      "
    >
      Online buchen
    </button>
  );
}
