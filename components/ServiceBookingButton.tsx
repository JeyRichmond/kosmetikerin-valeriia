"use client";

import type { ReactNode } from "react";
import { useBooking } from "@/components/useBooking";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function ServiceBookingButton({
  children,
  className = "",
}: Props) {
  const { openBooking } = useBooking();

  return (
    <button
      type="button"
      onClick={openBooking}
      className={className}
    >
      {children}
    </button>
  );
}