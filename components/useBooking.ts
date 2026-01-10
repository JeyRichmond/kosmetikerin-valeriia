"use client";

export function useBooking() {
  const openBooking = () => {
    window.open(
      "https://kosmetikerinvaleriia.setmore.com/team/0101b36a-e3f3-4441-a43d-3e609a6d6fd7",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const openServices = () => {
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
