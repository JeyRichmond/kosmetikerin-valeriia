"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export function useBooking() {
  const trackEvent = (event: string, label: string) => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", event, {
        event_category: "engagement",
        event_label: label,
      });
    }
  };

  const trackBookingConversion = () => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-17869784445/GxbfCK_qxeEbEP2K_chC",
      });
    }
  };

  const openBooking = () => {
    trackEvent("booking_click", "Termin buchen");
    trackBookingConversion();

    window.open(
      "https://kosmetikerinvaleriia.setmore.com/team/0101b36a-e3f3-4441-a43d-3e609a6d6fd7",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openServices = () => {
    trackEvent("services_click", "Services ansehen");

    window.open(
      "https://kosmetikerinvaleriia.setmore.com/",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return {
    openBooking,
    openServices,
  };
}