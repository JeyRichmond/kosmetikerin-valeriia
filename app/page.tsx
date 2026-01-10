// app/page.tsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import PriceAccordion from "@/components/PriceAccordion";
import { useBooking } from "@/components/useBooking";
import Head from "next/head";


const translations = {
  de: {
    nav: {
      home: "Home",
      services: "Leistungen",
      about: "Über mich",
      prices: "Preise",
      contact: "Kontakt",
      book: "Termin buchen",
    },
    hero: {
      title: "Kosmetikerin Valeriia",
      subtitle:
        "Professionelle Behandlungen für Gesicht & Depilation in angenehmer Atmosphäre.",
      primaryCta: "Termin buchen",
      secondaryCta: "Preisliste ansehen",
    },
    services: {
      title: "Leistungen",
      depilationTitle: "Depilation",
      depilationText:
        "Sanfte professionelle Haarentfernung für glatte und gepflegte Haut.",
      faceTitle: "Gesichtsbehandlungen",
      faceText:
        "Individuelle Behandlungen für gesunde, strahlende und gepflegte Haut.",
      more: "Mehr erfahren",
    },
    prices: {
      title: "Preise & Behandlungen",
      description:
        "Beispiele für Behandlungen. Alle Texte und Preise sind vorläufig – nur als Layout.",
      categoryDepilation: "WAXING – FRAUEN",
      categoryDepilation1: "WAXING – MÄNNER",
      categoryFace: "GESICHTSBEHANDLUNGEN",
      categoryBrow: "BROW & LASH LIFTING",
      categoryAugen: "AUGENBRAUEN & WIMPERN",
      categoryPeeling: "PEELING-BEHANDLUNGEN",
      book: "Termin buchen",
    },
    about: {
      title: "Über mich",
      text:
        "Hallo, ich bin Valeria – diplomierte Kosmetikerin mit über 10 Jahren Erfahrung im Bereich Waxing, Brow Styling und professioneller Hautpflege.\n\n" +
        "Meine berufliche Laufbahn begann in der Ukraine, wo ich viele Jahre in Beauty-Studios gearbeitet, zahlreiche Schulungen besucht und meine Techniken perfektioniert habe. Heute freue ich mich, meine Leidenschaft und Expertise nach Zürich zu bringen.\n\n" +
        "Ich glaube, dass Schönheit mit Wohlbefinden beginnt. Deshalb arbeite ich besonders sanft, präzise und hygienisch, mit hochwertigen Produkten und individuellem Ansatz. Mein Ziel ist, dass jede Kundin sich nach der Behandlung leicht, gepflegt und selbstbewusst fühlt.\n\n" +
        "Meine Spezialisierungen:\n" +
        " • Waxing & Haarentfernung (schonend, schnell, für glatte Haut ohne Irritationen)\n" +
        " • Brow & Lash Styling\n" +
        " • Gesichtsbehandlungen, Peelings & Pflegeprogramme\n" +
        " • Hautpflegeberatung\n\n" +
        "Ich freue mich darauf, dich bei mir in Zürich willkommen zu heißen!",
    },
    contact: {
      phoneLabel: "Telefon",
      addressLabel: "Adresse",
      hoursLabel: "Öffnungszeiten",
      dummyPhone: "+41 76 516 51 54",
      dummyAddressLine1: "Weinbergstrasse 18,",
      dummyAddressLine2: "8001 Zürich",
      dummyAddressLine3: "(in den Räumlichkeiten",
      dummyAddressLine4: "von Belmed-Esthetic)",
      dummyAddressLine5: "📍 Bitte klingeln → Valeriia",
      hoursTextLine1: "Mo–Sa: 10:00–21:00",
      socialLabel: "Web & Social",
      mapLabel: "Karte",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      facebook: "Facebook",
    },
    footer: {
      rights: "© 2025 Richmond Design. Alle Rechte vorbehalten.",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About Me",
      prices: "Prices",
      contact: "Contact",
      book: "Book Appointment",
    },
    hero: {
      title: "Beautician Valeriia",
      subtitle:
        "Professional facial & depilation treatments in a pleasant atmosphere.",
      primaryCta: "Book Appointment",
      secondaryCta: "View Price List",
    },
    services: {
      title: "Services",
      depilationTitle: "Depilation",
      depilationText:
        "Gentle professional hair removal for smooth and cared-for skin.",
      faceTitle: "Facial Treatments",
      faceText:
        "Individual treatments for healthy, radiant, and well-cared-for skin.",
      more: "Learn More",
    },
    prices: {
      title: "Prices & Treatments",
      description:
        "Examples of treatments. All texts and prices are provisional – layout purposes only.",
      categoryDepilation: "WAXING – WOMEN",
      categoryDepilation1: "WAXING – MEN",
      categoryFace: "FACIAL TREATMENTS",
      categoryBrow: "BROW & LASH LIFTING",
      categoryAugen: "EYEBROWS & LASHES",
      categoryPeeling: "PEELING TREATMENTS",
      book: "Book Appointment",
    },
    about: {
      title: "About Me",
      text:
        "Hello, I’m Valeria – a certified beautician with over 10 years of experience in waxing, brow styling, and professional skincare.\n\n" +
        "My career began in Ukraine, where I worked many years in beauty studios, attended numerous trainings, and perfected my techniques. Today, I am excited to bring my passion and expertise to Zurich.\n\n" +
        "I believe beauty starts with well-being. That’s why I work especially gently, precisely, and hygienically, using high-quality products and a personalized approach. My goal is for every client to feel light, cared-for, and confident after treatment.\n\n" +
        "My specializations:\n" +
        " • Waxing & Hair Removal (gentle, fast, for smooth skin without irritation)\n" +
        " • Brow & Lash Styling\n" +
        " • Facial Treatments, Peels & Care Programs\n" +
        " • Skincare Consultation\n\n" +
        "I look forward to welcoming you in Zurich!",
    },
    contact: {
      phoneLabel: "Phone",
      addressLabel: "Address",
      hoursLabel: "Opening Hours",
      dummyPhone: "+41 76 516 51 54",
      dummyAddressLine1: "Weinbergstrasse 18,",
      dummyAddressLine2: "8001 Zurich",
      dummyAddressLine3: "(inside the premises",
      dummyAddressLine4: "of Belmed-Esthetic)",
      dummyAddressLine5: "📍 Please ring → Valeriia",
      hoursTextLine1: "Mon–Sat: 10:00–21:00",
      socialLabel: "Web & Social",
      mapLabel: "Map",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      facebook: "Facebook",
    },
    footer: {
      rights: "© 2025 Richmond Design. All rights reserved.",
    },
  },
  ua: {
    nav: {
      home: "Головна",
      services: "Послуги",
      about: "Про мене",
      prices: "Ціни",
      contact: "Контакт",
      book: "Записатися",
    },
    hero: {
      title: "Косметолог Валерія",
      subtitle:
        "Професійні процедури для обличчя та депіляції в приємній атмосфері.",
      primaryCta: "Записатися",
      secondaryCta: "Переглянути прайс",
    },
    services: {
      title: "Послуги",
      depilationTitle: "Депіляція",
      depilationText:
        "Делікатне професійне видалення волосся для гладкої та доглянутої шкіри.",
      faceTitle: "Догляд за обличчям",
      faceText:
        "Індивідуальні процедури для здорової, сяючої та доглянутої шкіри.",
      more: "Детальніше",
    },
    prices: {
      title: "Ціни та процедури",
      description:
        "Приклади процедур. Всі тексти та ціни попередні – лише для макету.",
      categoryDepilation: "ВІСК – ЖІНКИ",
      categoryDepilation1: "ВІСК – ЧОЛОВІКИ",
      categoryFace: "ДОГЛЯД ЗА ОБЛИЧЧЯМ",
      categoryBrow: "BROW & LASH LIFTING",
      categoryAugen: "БРОВИ ТА ВІЇ",
      categoryPeeling: "Пілінги",
      book: "Записатися",
    },
    about: {
      title: "Про мене",
      text:
        "Привіт, я Валерія – сертифікований косметолог з понад 10-річним досвідом у депіляції, оформленні брів та догляді за шкірою.\n\n" +
        "Моя кар’єра почалася в Україні, де я працювала багато років у студіях краси, пройшла численні навчання та вдосконалила свої техніки. Сьогодні я рада приносити свою пристрасть та досвід до Цюріха.\n\n" +
        "Я вірю, що краса починається з добробуту. Тому я працюю максимально дбайливо, точно та гігієнічно, використовуючи високоякісні продукти та індивідуальний підхід. Моя мета – щоб кожна клієнтка почувалася легкою, доглянутою та впевненою після процедури.\n\n" +
        "Мої спеціалізації:\n" +
        " • Депіляція та видалення волосся (делікатно, швидко, для гладкої шкіри без подразнень)\n" +
        " • Оформлення брів та вій\n" +
        " • Догляд за обличчям, пілінги та програми догляду\n" +
        " • Консультації по догляду за шкірою\n\n" +
        "Буду рада вітати вас у Цюріху!",
    },
    contact: {
      phoneLabel: "Телефон",
      addressLabel: "Адреса",
      hoursLabel: "Години роботи",
      dummyPhone: "+41 76 516 51 54",
      dummyAddressLine1: "Weinbergstrasse 18,",
      dummyAddressLine2: "8001 Цюріх",
      dummyAddressLine3: "(у приміщенні",
      dummyAddressLine4: "Belmed-Esthetic)",
      dummyAddressLine5: "📍 Будь ласка, дзвоніть → Valeriia",
      hoursTextLine1: "Пн–Сб: 10:00–21:00",
      socialLabel: "Web & Social",
      mapLabel: "Карта",
      whatsapp: "WhatsApp",
      telegram: "Telegram",
      instagram: "Instagram",
      facebook: "Facebook",
    },
    footer: {
      rights: "© 2025 Richmond Design. Всі права захищені.",
    },
  },
} as const;

type LangKey = keyof typeof translations;

export default function HomePage() {
  const [lang, setLang] = useState<LangKey>(() => {
  if (typeof window === "undefined") return "de";

  const savedLang = localStorage.getItem("lang") as LangKey | null;
  return savedLang && translations[savedLang] ? savedLang : "de";
});
  const t = translations[lang] ?? translations.de;
  const sliderImages = ["/13.jpg", "/12.jpg"];
  const [currentSlide, setCurrentSlide] = useState(0);
  const { openBooking } = useBooking();
  const { openServices } = useBooking();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000); // 4 секунды между сменой

    return () => clearInterval(interval);
  }, [sliderImages.length]);

  return (
    <>
      {/* SEO */}
      <Head>
        <title>Kosmetikerin Valeriia – Zürich</title>
        <meta
          name="description"
          content="Professionelle Kosmetik-, Gesichts- & Depilation-Behandlungen in Zürich. Jetzt Termin buchen!"
        />
        <meta property="og:title" content="Kosmetikerin Valeriia – Zürich" />
        <meta
          property="og:description"
          content="Professionelle Kosmetik-, Gesichts- & Depilation-Behandlungen in Zürich. Jetzt Termin buchen!"
        />
        <meta property="og:type" content="website" />
      </Head>

    
    <div className="min-h-screen bg-white text-(--brand-dark) flex flex-col">

      {/* Header */}
      <header className="border-b border-gray-100 sticky top-0 z-20 bg-white/80 backdrop-blur">

      {/* Sticky top area: promo + header */}
<div className="sticky top-0 z-30">
  {/* Top promo bar */}
  <div className="w-full bg-black">
    <div className="max-w-6xl mx-auto px-4 py-2 flex justify-center">
      <p className="text-xs md:text-sm text-white tracking-wide">
        <span className="text-(--brand-gold) font-semibold">
          Willkommensangebot:
        </span>
        <span className="ml-2">
          10 % Rabatt auf die erste Behandlung!
        </span>
      </p>
    </div>
  </div>
  </div>

        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Логотип / Название студии */}
           <div className="flex items-center gap-2">
            <Image
              src="/KV11.png"
              alt="Kosmetikerin Valeriia Logo"
              width={70}
              height={70}
              className="rounded-full object-cover"
              priority
            />
           <div className="flex flex-col leading-tight">
             <span className="font-semibold tracking-wide">
               Kosmetikerin Valeriia
             </span>
             <span className="text-xs text-gray-500">
               Deine Haut. Mein Fokus.
             </span>
          </div>
        </div>

          {/* Навигация */}
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#hero" className="hover:text-(--brand-gold) transition-colors">
              {t.nav.home}
            </a>
            <a
              href="#prices"
              className="hover:text-(--brand-gold) transition-colors"
            >
              {t.nav.prices}
            </a>
            <a
              href="#about"
              className="hover:text-(--brand-gold) transition-colors"
            >
              {t.nav.about}
            </a>
            <a
              href="#contact"
              className="hover:text-(--brand-gold) transition-colors"
            >
              {t.nav.contact}
            </a>
          </nav>

          {/* Справа: язык + комбинированная кнопка телефон / запись */}
           <div className="flex items-center gap-3">
            {/* Переключатель языка (как был) */}
             <div className="flex items-center text-xs border border-gray-200 rounded-full px-2 py-1 gap-1">
  {(["de", "en", "ua"] as LangKey[]).map((l) => (
    <button
      key={l}
      onClick={() => {
        setLang(l);
        localStorage.setItem("lang", l);
      }}
      className={`px-2 py-0.5 rounded-full transition
        ${lang === l
          ? "bg-(--brand-gold) text-white"
          : "hover:bg-gray-100"
        }`}
    >
      {l.toUpperCase()}
    </button>
  ))}
</div>

          <div className="hidden sm:inline-flex items-center text-sm rounded-full overflow-hidden shadow-sm border border-(--brand-gold) bg-white">
             {/* Телефoн */}
  <a
  href="https://wa.me/41765165154?text=Hallo%20Valeriia%2C%20ich%20möchte%20einen%20Termin%20buchen."
  target="_blank"
  rel="noopener noreferrer"
  className="px-3 py-2 text-(--brand-dark) flex items-center gap-1 hover:bg-black/5 transition-colors"
>
  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-(--brand-gold) text-[10px]">
    ☎
  </span>
  <span className="font-medium">{t.contact.dummyPhone}</span>
</a>


             {/* Termin buchen */}
  <button
  onClick={openBooking}
  className="bg-(--brand-gold) text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity"
>
  {t.hero.primaryCta}
</button>

</div>

           </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Promo banner section (под хедером) */}
        <section className="border-b border-gray-100 bg-white">
          <div className="max-w-6xl mx-auto px-4 pt-6 pb-8">
            <div className="flex flex-col md:flex-row gap-4">
              {/* Баннер с картинкой и текстом */}
              <div
                className="relative flex-1 rounded-3xl overflow-hidden shadow-sm border border-gray-100"
                style={{
                  backgroundImage: "url('/back2.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                {/* Полупрозрачная подложка */}
                <div className="absolute inset-0 bg-black/25" />

                <div className="relative h-full flex flex-col justify-between p-6 sm:p-8 text-white">
                  <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em]">
                      <span className="w-6 h-px bg-white/70" />
                      <span>Aktion des Monats – Februar</span>
                    </div>

                  <div className="mt-4 space-y-2 max-w-md">
                    <h2 className="text-2xl sm:text-3xl font-semibold">
                      Gesichtsreinigung + Peeling
                    </h2>
                    <p className="text-sm sm:text-base text-white/90">
                      120 CHF statt 150 CHF<br />
                      Nur von 1. bis 28. Februar!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        
        {/* Hero section */}
        <section
          id="hero"
          className="max-w-6xl mx-auto px-4 py-10 md:py-16 grid md:grid-cols-2 gap-10 items-center"
        >
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
              className="bg-(--brand-gold) text-white text-sm px-5 py-2.5 rounded-full hover:opacity-90 transition-opacity">
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

          {/* Правая колонка — слайдер с фото */}
<div className="relative">
  <div
    className="aspect-4/5 rounded-3xl border overflow-hidden shadow-sm relative"
    style={{
      borderColor: "rgba(212,175,55,0.4)",
      background:
        "linear-gradient(to bottom right, rgba(212,175,55,0.35), #ffffff, rgba(243,230,201,0.7))",
    }}
  >
    {/* Слайды */}
    {sliderImages.map((src, index) => (
      <div
        key={src}
        className={`absolute inset-0 transition-opacity duration-700 ${
          index === currentSlide ? "opacity-100" : "opacity-0"
        }`}
      >
        <Image
          src={src}
          alt={`Kosmetikstudio Bild ${index + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    ))}

    {/* Маленький градиент сверху/снизу для красоты (опционально) */}
    <div className="absolute inset-x-0 bottom-0 h-20 bg-linear-to-t from-black/35 to-transparent pointer-events-none" />

    {/* Небольшая подпись внизу справа */}
    <div className="absolute bottom-3 right-3 bg-white/85 backdrop-blur rounded-full px-3 py-1 text-[11px] text-(--brand-dark)">
      Kosmetikerin Valeriia · Zürich
    </div>
  </div>

  {/* Карточка снизу как была */}
  <div className="absolute -bottom-4 -left-4 bg-white shadow-sm rounded-2xl border border-gray-100 px-4 py-3 text-xs">
    <div className="font-semibold text-(--brand-dark)">
      Individuelle Behandlungen
    </div>
    <div className="text-gray-500">
      Termine nach Vereinbarung!
    </div>
  </div>

  {/* Индикаторы снизу (точки) */}
  <div className="absolute -bottom-6 right-0 flex gap-1.5">
    {sliderImages.map((_, index) => (
      <button
        key={index}
        onClick={() => setCurrentSlide(index)}
        className={`h-1.5 rounded-full transition-all ${
          index === currentSlide ? "w-5 bg-(--brand-gold)" : "w-2 bg-gray-300"
        }`}
        aria-label={`Bild ${index + 1}`}
      />
    ))}
  </div>
</div>
</section>
 
        {/* Prices section */}
        <section
          id="prices"
          className="border-t border-gray-100"
          style={{
            background: "rgba(243,230,201,0.15)",
          }}
        ></section>

{/* FACE */}
<PriceAccordion
  title={t.prices.categoryFace}
  subtitle="Professionelle Gesichtsbehandlungen für jeden Hauttyp"
  description={`Individuell abgestimmte Pflegebehandlungen zur Reinigung, Regeneration und Revitalisierung der Haut.

Sie verbessern das Hautbild, fördern die Hautgesundheit und sorgen für einen frischen, natürlichen Glow.`}
  bookLabel={t.prices.book}
  items={[
    {
      name: "Gesichtsreinigung",
      shortDescription:
        "Tiefenreinigung mit Ultraschall, mechanisch oder kombiniert.",
      fullDescription: `Die Gesichtsreinigung ist eine der wichtigsten Basisbehandlungen für eine gesunde Haut.

Behandlungsarten:
• Ultraschallreinigung – sanfte, nicht-invasive Tiefenreinigung
• Mechanische Reinigung – gezielte Entfernung von Unreinheiten
• Kombinierte Reinigung – maximale Tiefenwirkung

Ergebnis:
Klare, glatte und sichtbar frischere Haut.`,
      duration: "60–90 Min",
      price: "CHF 120.–",
    },

    {
      name: "Gesichtsreinigung + Peeling",
      shortDescription:
        "Intensive Hauterneuerung für einen ebenmäßigen Teint.",
      fullDescription: `Nach der gründlichen Reinigung folgt ein Peeling, das die Zellerneuerung aktiviert.

Vorteile:
• Verfeinert Poren
• Glättet feine Linien
• Verbessert die Wirkstoffaufnahme

Ergebnis:
Saubere, glatte und revitalisierte Haut.`,
      duration: "90 Min",
      price: "CHF 150.–",
    },

    {
      name: "Hydro Glow Pflege",
      shortDescription:
        "Feuchtigkeit & Strahlkraft für trockene Haut.",
      fullDescription: `Intensive Feuchtigkeitsbehandlung mit Hyaluronsäure und Kollagenmaske.

Ergebnis:
Pralle, hydratisierte Haut mit gesundem Glow.`,
      duration: "75 Min",
      price: "CHF 150.–",
    },

    {
      name: "Pure Balance Pflege",
      shortDescription:
        "Klärende Behandlung für unreine und fettige Haut.",
      fullDescription: `Reguliert die Talgproduktion, wirkt antibakteriell und beruhigend.

Ergebnis:
Reine, ausgeglichene und matte Haut.`,
      duration: "75 Min",
      price: "CHF 150.–",
    },

    {
      name: "Lifting Deluxe Pflege",
      shortDescription:
        "Anti-Aging-Behandlung für straffe Haut.",
      fullDescription: `Straffende Premium-Behandlung mit Peptiden und hochwirksamen Aktivstoffen.

Ergebnis:
Glattere, straffere und jugendlich wirkende Haut.`,
      duration: "75 Min",
      price: "CHF 150.–",
    },

    {
      name: "Carboxytherapie",
      shortDescription:
        "Die Carboxytherapie im Gesicht verbessert die Hautdurchblutung, regt die Kollagenproduktion an und sorgt für einen frischen, strahlenden Teint.",
      fullDescription: `Mit hochwertigen, professionellen Materialien wird Kohlendioxid sanft in die Haut eingebracht, um Spannkraft, Elastizität und Hautstruktur sichtbar zu verbessern.`,
      duration: "45 Min",
      price: "CHF 130.–",
    },
  ]}
/>

{/* Peeling */}
<PriceAccordion
  title={t.prices.categoryPeeling}
  subtitle="Professionelle Peelings für Hauterneuerung & Hautbildverbesserung"
  description={`Medizinisch-kosmetische Peelings zur gezielten Hauterneuerung.

Sie verbessern Textur, reduzieren Pigmentflecken, Unreinheiten und feine Linien.`}
  bookLabel={t.prices.book}
  items={[
    {
      name: "MANSSOL PEEL",
      shortDescription:
        "Sanftes Mandelsäure-Peeling für empfindliche Haut.",
      fullDescription: `Mildes Peeling zur sanften Hauterneuerung.

Geeignet für:
Empfindliche, trockene oder pigmentierte Haut.

Ergebnis:
Frische, glatte und ebenmäßige Haut.`,
      duration: "45 Min",
      price: "CHF 125.–",
    },

    {
      name: "BALANCE RECOVERY PEEL",
      shortDescription:
        "Beruhigendes Peeling für unreine Haut.",
      fullDescription: `Peeling mit Azelain- und Milchsäure zur Reduktion von Entzündungen.

Geeignet für:
Fettige, unreine oder Akne-Haut.

Ergebnis:
Reine, ausgeglichene Haut.`,
      duration: "45 Min",
      price: "CHF 125.–",
    },

    {
      name: "JESSOL PEEL",
      shortDescription:
        "Kombiniertes Peeling für Frische & Straffung.",
      fullDescription: `Wirkt gegen Falten, Unreinheiten und Pigmentflecken.

Geeignet für:
Reife oder müde Haut.

Ergebnis:
Strahlender, glatter Teint.`,
      duration: "45 Min",
      price: "CHF 125.–",
    },

    {
      name: "TAGESPEELING 10% TCA",
      shortDescription:
        "Sanftes TCA-Peeling zur Hauterneuerung.",
      fullDescription: `Schonende Erneuerung der Hautstruktur.

Geeignet für:
Empfindliche oder trockene Haut.

Ergebnis:
Frischer, glatter Teint.`,
      duration: "45 Min",
      price: "CHF 135.–",
    },

    {
      name: "TRI PEEL 20% TCA",
      shortDescription:
        "Intensives Peeling für sichtbare Ergebnisse.",
      fullDescription: `Mitteltiefes Peeling zur Glättung und Aufhellung.

Geeignet für:
Reife Haut, Pigmentflecken.

Ergebnis:
Gleichmäßige, verjüngte Haut.`,
      duration: "45 Min",
      price: "CHF 150.–",
    },
  ]}
/>

{/* AUGEN */}
<PriceAccordion
  title={t.prices.categoryAugen}
  subtitle="Schöne Augen – perfekter Ausdruck"
  description={`Gepflegte Augenbrauen und Wimpern verleihen dem Gesicht Ausdruck, Charakter und Natürlichkeit.

Mit viel Erfahrung und Liebe zum Detail forme, färbe und style ich Ihre Brauen und Wimpern – für ein harmonisches, frisches Aussehen.

Ich arbeite ausschließlich mit professionellen, hochwertigen Materialien, die sanft zur Haut sind und für langanhaltend schöne Ergebnisse sorgen.`}
  bookLabel={t.prices.book}
  items={[
    {
      name: "Augenbrauenkorrektur + Färbung",
      duration: "30 Min",
      price: "CHF 55.–",
    },
    {
      name: "Wimpernfärbung",
      duration: "30 Min",
      price: "CHF 35.–",
    },
    {
      name: "Augenbrauenfärbung",
      duration: "30 Min",
      price: "CHF 35.–",
    },
    {
      name: "Augenbrauenkorrektur",
      duration: "15 Min",
      price: "CHF 25.–",
    },
    {
      name: "Augenbrauen & Wimpern färben",
      duration: "45 Min",
      price: "CHF 75.–",
    },
  ]}
/>


{/* Brows */}
<PriceAccordion
  title={t.prices.categoryBrow}
   subtitle="Perfekt gestylt. Wochenlang."
  description={`Die Laminierung von Augenbrauen und Wimpern verleiht den Härchen mehr Form, Struktur und Volumen.

Die natürliche Wuchsrichtung wird optimiert, die Härchen wirken dichter, gepflegter und perfekt gestylt – ganz ohne tägliches Styling.

Das Ergebnis hält bis zu 2 Monate an und sorgt für ausdrucksstarke Augen sowie einen offenen, frischen Blick.`}
  bookLabel={t.prices.book}
  items={[
    {
      name: "Brow Lift (Augenbrauenlifting + Korrektur)",
      duration: "30 Min",
      price: "CHF 80.–",
    },
    {
      name: "Brow Lift (Augenbrauenlifting mit Färbung + Korrektur)",
      duration: "45 Min",
      price: "CHF 100.–",
    },
    {
      name: "Lash Lift (Wimpernlifting)",
      duration: "45 Min",
      price: "CHF 100.–",
    },
    {
      name: "Brow + Lash Combo (Augenbrauen- & Wimpernlifting Paket)",
      duration: "90 Min",
      price: "CHF 180.–",
    },
  ]}
/>

        {/* WAXING – FRAUEN */}
<PriceAccordion
  title={t.prices.categoryDepilation}
  subtitle="Haarentfernung mit Wachs für Frauen"
  description={`Ich arbeite mit Wachs der neuen Generation, der besonders sanft und hautfreundlich ist.
Der niedrigtemperierte Wachs wird angenehm warm aufgetragen, verbrennt die Haut nicht und sorgt für ein angenehmes Gefühl während der Behandlung.
Er verursacht keine Reizungen, verhindert eingewachsene Haare und hinterlässt die Haut langanhaltend glatt und gepflegt.

Erleben Sie den Unterschied – schonende Haarentfernung mit modernem Wachs, ideal auch für empfindliche Haut.`}
  bookLabel={t.prices.book}
  items={[
    { name: "Achseln", duration: "15 min", price: "CHF 30.–" },
    { name: "Bikinizone", duration: "15 min", price: "CHF 35.–" },
    { name: "Intimbereich", duration: "30 min", price: "CHF 75.–" },
    { name: "Ganze Beine", duration: "45 min", price: "CHF 95.–" },
    { name: "Unterschenkel", duration: "30 min", price: "CHF 60.–" },
    { name: "Oberschenkel", duration: "30 min", price: "CHF 55.–" },
    { name: "Ganze Arme", duration: "30 min", price: "CHF 55.–" },
    { name: "Unterarme", duration: "30 min", price: "CHF 35.–" },
    { name: "Bauch", duration: "30 min", price: "CHF 40.–" },
    { name: "Rücken", duration: "30 min", price: "CHF 60.–" },
    { name: "Oberlippe", duration: "15 min", price: "CHF 20.–" },
    { name: "Kinn", duration: "15 min", price: "CHF 15.–" },
    { name: "Wangen", duration: "15 min", price: "CHF 15.–" },
    { name: "Nase", duration: "15 min", price: "CHF 20.–" },
    { name: "Lenden", duration: "15 min", price: "CHF 25.–" },
    { name: "Pobacken", duration: "15 min", price: "CHF 40.–" },
    { name: "Pofalte", duration: "15 min", price: "CHF 25.–" },
    { name: "Pobacken & Pofalte", duration: "30 min", price: "CHF 60.–" },
  ]}
/>

{/* WAXING – MÄNNER */}
<PriceAccordion
  title={t.prices.categoryDepilation1}
  subtitle="Haarentfernung mit Wachs für Manner"
  description={`Ich arbeite mit Wachs der neuen Generation, der besonders sanft und hautfreundlich ist.
Der niedrigtemperierte Wachs wird angenehm warm aufgetragen, verbrennt die Haut nicht und sorgt für ein angenehmes Gefühl während der Behandlung.
Er verursacht keine Reizungen, verhindert eingewachsene Haare und hinterlässt die Haut langanhaltend glatt und gepflegt.

Erleben Sie den Unterschied – schonende Haarentfernung mit modernem Wachs, ideal auch für empfindliche Haut.`}
  bookLabel={t.prices.book}
  items={[
    { name: "Rücken", duration: "30 Min", price: "CHF 80.–" },
    { name: "Brust", duration: "30 Min", price: "CHF 55.–" },
    { name: "Brust & Bauch", duration: "45 Min", price: "CHF 80.–" },
    { name: "Bauch", duration: "30 Min", price: "CHF 45.–" },
    { name: "Nacken", duration: "15 Min", price: "CHF 30.–" },
    { name: "Arme komplett", duration: "30 Min", price: "CHF 75.–" },
    { name: "Beine komplett", duration: "60 Min", price: "CHF 120.–" },
    {
      name: "Intimbereich Classic",
      duration: "30 Min",
      price: "CHF 95.–",
    },
    {
      name: "Intimbereich Komplett",
      duration: "45 Min",
      price: "CHF 110.–",
    },
    { name: "Achseln", duration: "15 Min", price: "CHF 30.–" },
    { name: "Augenbrauenkorrektur", duration: "15 Min", price: "CHF 30.–" },
    { name: "Nase", duration: "15 Min", price: "CHF 25.–" },
    { name: "Ohren", duration: "15 Min", price: "CHF 25.–" },
    { name: "Pobacken", duration: "30 Min", price: "CHF 60.–" },
    { name: "Pofalte", duration: "15 Min", price: "CHF 30.–" },
    {
      name: "Pobacken & Pofalte",
      duration: "45 Min",
      price: "CHF 75.–",
    },
  ]}
/>

        {/* About section */}
        <section
          id="about"
          className="border-t border-gray-100"
        >
          <div className="max-w-6xl mx-auto px-4 py-10 md:py-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold">
                {t.about.title}
              </h2>
              <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                {t.about.text}
              </p>
            </div>
            <div className="aspect-4/5 rounded-3xl border border-dashed flex items-center justify-center text-xs text-gray-500"
              style={{ 
                backgroundImage: "url('/6.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}>
                
            </div>
          </div>
        </section>

            {/* Contact & opening hours section */}
      <section id="contact" className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-10 md:py-14">
          <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] items-start">
            {/* Левая часть: телефон, адрес, часы, соцсети */}
            <div className="space-y-6 text-sm">
              {/* Телефон / адрес / часы в одну линию на десктопе */}
              <div className="grid gap-6 sm:grid-cols-3">
                {/* Адрес */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {t.contact.addressLabel}
                  </div>
                  <div className="text-gray-700">
                    <div>{t.contact.dummyAddressLine1}</div>
                    <div>{t.contact.dummyAddressLine2}</div>
                    <div>{t.contact.dummyAddressLine3}</div>
                    <div>{t.contact.dummyAddressLine4}</div>
                    <div>{t.contact.dummyAddressLine5}</div>
                  </div>
                </div>

                {/* Часы */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {t.contact.hoursLabel}
                  </div>
                  <div className="text-gray-700">
                    <div>{t.contact.hoursTextLine1}</div>
                  </div>
                </div>

              {/* Телефон */}
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 mb-2">
                    {t.contact.phoneLabel}
                  </div>
                  <a
                    href={`tel:${t.contact.dummyPhone.replace(/\s/g, "")}`}
                    className="text-(--brand-dark) hover:text-(--brand-gold)"
                  >
                    {t.contact.dummyPhone}
                  </a>
                </div>
              </div>

              {/* Web & Social — только иконки */}
              <div className="space-y-3">
                <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                  {t.contact.socialLabel}
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/41765165154"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.whatsapp}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#25D366"
                        d="M16 3C9.373 3 4 8.373 4 15c0 2.223.61 4.3 1.67 6.086L4 29l8.148-1.632A11.9 11.9 0 0 0 16 27c6.627 0 12-5.373 12-12S22.627 3 16 3z"
                      />
                      <path
                        fill="#fff"
                        d="M22.155 19.31c-.34-.17-2.01-.99-2.322-1.104-.312-.115-.54-.17-.768.17-.228.34-.882 1.104-1.082 1.332-.199.227-.397.255-.737.085-.34-.17-1.44-.53-2.743-1.69-1.015-.906-1.7-2.025-1.899-2.365-.199-.34-.021-.524.15-.694.155-.154.34-.397.51-.596.17-.198.227-.34.34-.567.114-.227.057-.425-.028-.595-.085-.17-.768-1.852-1.053-2.54-.278-.667-.56-.577-.768-.587l-.655-.01c-.227 0-.596.085-.907.397-.312.311-1.19 1.16-1.19 2.83 0 1.67 1.22 3.284 1.39 3.512.17.227 2.4 3.66 5.818 5.13.813.351 1.447.561 1.94.718.815.259 1.557.223 2.144.135.654-.098 2.01-.822 2.295-1.616.283-.793.283-1.472.198-1.616-.085-.142-.312-.227-.653-.396z"
                      />
                    </svg>
                  </a>

                  {/* Telegram */}
                  <a
                    href="https://t.me/ValeriyaValeriyaN"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.telegram}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#229ED9"
                        d="M28.5 4.5 3.7 14.4c-1.7.7-1.7 1.7-.3 2.1l6.3 2 2.3 7c.3.8.6 1.1 1.2 1.1.6 0 .9-.2 1.3-.6l3.1-3 6.5 4.8c1.2.7 2 .3 2.3-1.1L30.8 6.2c.4-1.8-.7-2.6-2.3-1.7z"
                      />
                      <path
                        fill="#fff"
                        d="m23.1 9.6-10 9.2-.4 4.3-2-6.3 12.4-7.2z"
                      />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/kosmetikerin_schweiz"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.instagram}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <radialGradient
                        id="igGradient"
                        cx="0%"
                        cy="100%"
                        r="150%"
                      >
                        <stop offset="0%" stopColor="#fdf497" />
                        <stop offset="30%" stopColor="#fd5949" />
                        <stop offset="60%" stopColor="#d6249f" />
                        <stop offset="100%" stopColor="#285AEB" />
                      </radialGradient>
                      <rect
                        x="4"
                        y="4"
                        width="24"
                        height="24"
                        rx="7"
                        fill="url(#igGradient)"
                      />
                      <circle cx="16" cy="16" r="5.5" fill="#fff" />
                      <circle cx="16" cy="16" r="3.2" fill="url(#igGradient)" />
                      <circle cx="22" cy="10" r="1.4" fill="#fff" />
                    </svg>
                  </a>

                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/profile.php?id=100030670843113"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 hover:border-(--brand-gold) hover:bg-black/5 transition-colors"
                    aria-label={t.contact.facebook}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      className="h-5 w-5"
                    >
                      <path
                        fill="#1877F2"
                        d="M16 3C9.383 3 4 8.383 4 15c0 5.985 4.388 10.937 10.125 11.85V19.25h-3.05V15h3.05v-2.9c0-3.016 1.79-4.688 4.533-4.688 1.313 0 2.686.235 2.686.235v2.96h-1.514c-1.492 0-1.956.925-1.956 1.874V15h3.328l-.532 4.25h-2.796v7.6C23.612 25.937 28 20.985 28 15 28 8.383 22.617 3 16 3z"
                      />
                      <path
                        fill="#fff"
                        d="M18.75 26.85v-7.6h2.796L22.078 15h-3.328v-1.52c0-.949.464-1.874 1.956-1.874h1.514v-2.96s-1.373-.235-2.686-.235c-2.743 0-4.533 1.672-4.533 4.688V15h-3.05v4.25h3.05v7.6h3.799z"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Правая часть: компактная карта в одну линию с контактами */}
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
                {t.contact.mapLabel}
              </div>
              <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-sm h-50">
               <iframe
                title="Google Maps"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2760.755947902559!2d8.5419189!3d47.3784507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479aa0a78383c4fb%3A0x3c33ad066d10cf93!2sWeinbergstrasse%2018%2C%208001%20Z%C3%BCrich!5e0!3m2!1sde!2sch!4v1700000000000!5m2!1sde!2sch"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
               />
              </div>
            </div>
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-100 bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 text-xs text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div>{t.footer.rights}</div>
        </div>
      </footer>
    </div>
    </>
  );
}

