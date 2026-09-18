"use client";

import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { useBooking } from "@/components/useBooking";
import { translations, LangKey } from "@/lib/translations";

export default function ServicePageHeader() {
  const [lang, setLang] = useState<LangKey>("de");
  const { openBooking } = useBooking();

  useEffect(() => {
    const saved = localStorage.getItem("lang") as LangKey | null;

    if (!saved || !translations[saved]) {
      return;
    }

    const timeout = window.setTimeout(() => {
      setLang(saved);
    }, 0);

    return () => {
      window.clearTimeout(timeout);
    };
  }, []);

  const handleLanguageChange = (newLang: LangKey) => {
    setLang(newLang);
    localStorage.setItem("lang", newLang);
  };

  return (
    <Header
      lang={lang}
      onLangChange={handleLanguageChange}
      onBook={openBooking}
    />
  );
}