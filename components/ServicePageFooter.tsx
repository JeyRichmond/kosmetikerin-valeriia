"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/Footer";
import { translations, LangKey } from "@/lib/translations";

export default function ServicePageFooter() {
  const [lang, setLang] = useState<LangKey>("de");

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

  return <Footer lang={lang} />;
}