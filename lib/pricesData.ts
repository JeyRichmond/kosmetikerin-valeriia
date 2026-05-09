// lib/pricesData.ts

export type PriceItem = {
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  duration: string;
  price: string;
};

export type PriceCategory = {
  titleKey: string;   // 👈 ключ перевода
  subtitle?: string;
  description?: string;
  items: PriceItem[];
};

export const getPricesData = (): PriceCategory[] => [
  /* ===================== FACE ===================== */
  {
    titleKey: "categoryFace",
    subtitle: "Professionelle Gesichtsbehandlungen für jeden Hauttyp",
    description: "Individuell abgestimmte Pflegebehandlungen zur Reinigung, Regeneration und Revitalisierung der Haut.\n" + 
    " Sie verbessern das Hautbild, fördern die Hautgesundheit und sorgen für einen frischen, natürlichen Glow.",
    items: [
      {
        name: "Gesichtsreinigung",
        shortDescription:
          "Tiefenreinigung mit Ultraschall, mechanisch oder kombiniert.",
        fullDescription: `Die Gesichtsreinigung ist eine der wichtigsten Basisbehandlungen für eine gesunde Haut.

Behandlungsarten:
• Ultraschallreinigung
• Mechanische Reinigung
• Kombinierte Reinigung

Ergebnis:
Klare, glatte und sichtbar frischere Haut.`,
        duration: "60–90 Min",
        price: "CHF 120.–",
      },
      {
        name: "Gesichtsreinigung + Peeling",
        shortDescription:
          "Intensive Hauterneuerung für einen ebenmäßigen Teint.",
        fullDescription: `Nach der Reinigung folgt ein Peeling zur Aktivierung der Zellerneuerung.

Vorteile:
• Verfeinert Poren
• Glättet feine Linien
• Verbessert die Wirkstoffaufnahme

Ergebnis:
Saubere und revitalisierte Haut.`,
        duration: "90 Min",
        price: "CHF 150.–",
      },
      {
        name: "Hydro Glow Pflege",
        shortDescription: "Feuchtigkeit & Strahlkraft für trockene Haut.",
        fullDescription: `Intensive Feuchtigkeitsbehandlung mit Hyaluronsäure.

Ergebnis:
Pralle, hydratisierte Haut.`,
        duration: "75 Min",
        price: "CHF 150.–",
      },
      {
        name: "Pure Balance Pflege",
        shortDescription:
          "Klärende Behandlung für unreine und fettige Haut.",
        fullDescription: `Reguliert Talgproduktion und wirkt beruhigend.

Ergebnis:
Reine und ausgeglichene Haut.`,
        duration: "75 Min",
        price: "CHF 150.–",
      },
      {
        name: "Lifting Deluxe Pflege",
        shortDescription: "Anti-Aging-Behandlung für straffe Haut.",
        fullDescription: `Straffende Premium-Behandlung mit Peptiden.

Ergebnis:
Glattere und jugendlich wirkende Haut.`,
        duration: "75 Min",
        price: "CHF 150.–",
      },
      { 
        name: "Carboxytherapie", 
        shortDescription: "Die Carboxytherapie im Gesicht verbessert die Hautdurchblutung, regt die Kollagenproduktion an und sorgt für einen frischen, strahlenden Teint.", 
        fullDescription: "Mit hochwertigen, professionellen Materialien wird Kohlendioxid sanft in die Haut eingebracht, um Spannkraft, Elastizität und Hautstruktur sichtbar zu verbessern.", 
        duration: "45 Min", 
        price: "CHF 130.–", },
    ],
  },

  /* ===================== PEELING ===================== */
  {
    titleKey: "categoryPeeling",
    subtitle: "Professionelle Peelings für Hauterneuerung & Hautbildverbesserung",
    description:
      "Medizinisch-kosmetische Peelings zur gezielten Hauterneuerung.\n Sie verbessern Textur, reduzieren Pigmentflecken, Unreinheiten und feine Linien.",
    items: [
      {
        name: "MANSSOL PEEL",
        shortDescription: "Sanftes Mandelsäure-Peeling für empfindliche Haut.",
        fullDescription: `Mildes Peeling zur sanften Hauterneuerung.
        
Geeignet für: 
Empfindliche, trockene oder pigmentierte Haut.

Ergebnis:
Frische und ebenmässige Haut.`,
        duration: "45 Min",
        price: "CHF 125.–",
      },
      {
        name: "BALANCE RECOVERY PEEL",
        shortDescription: "Beruhigendes Peeling für unreine Haut.",
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
        shortDescription: "Kombiniertes Peeling für Frische & Straffung.",
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
        shortDescription: "Sanftes TCA-Peeling zur Hauterneuerung.",
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
        shortDescription: "Intensives Peeling für sichtbare Ergebnisse.",
        fullDescription: `Mitteltiefes Peeling zur Glättung und Aufhellung.
        
Geeignet für: 
Reife Haut, Pigmentflecken.

Ergebnis:
Gleichmässige, verjüngte Haut.`,
        duration: "45 Min",
        price: "CHF 150.–",
      },
    ],
  },

  /* AUGEN */
  {
    titleKey: "categoryAugen",
    subtitle: "Schöne Augen – perfekter Ausdruck",
    description: `Gepflegte Augenbrauen und Wimpern verleihen dem Gesicht Ausdruck, Charakter und Natürlichkeit. Mit viel Erfahrung und Liebe zum Detail forme, färbe und style ich Ihre Brauen und Wimpern – für ein harmonisches, frisches Aussehen. Ich arbeite ausschließlich mit professionellen, hochwertigen Materialien, die sanft zur Haut sind und für langanhaltend schöne Ergebnisse sorgen.`,
    items: [
      { name: "Augenbrauenkorrektur + Färbung", duration: "30 Min", price: "CHF 55.–", },
      { name: "Wimpernfärbung", duration: "30 Min", price: "CHF 35.–", },
      { name: "Augenbrauenfärbung", duration: "30 Min", price: "CHF 35.–", },
      { name: "Augenbrauenkorrektur", duration: "15 Min", price: "CHF 25.–", },
      { name: "Augenbrauen & Wimpern färben", duration: "45 Min", price: "CHF 75.–", },
    ],
  },

  /* BROW */
  {
    titleKey: "categoryBrow",
    subtitle: "Perfekt gestylt. Wochenlang.",
    description:
      `Die Laminierung von Augenbrauen und Wimpern verleiht den Härchen mehr Form, Struktur und Volumen. Die natürliche Wuchsrichtung wird optimiert, die Härchen wirken dichter, gepflegter und perfekt gestylt – ganz ohne tägliches Styling. Das Ergebnis hält bis zu 2 Monate an und sorgt für ausdrucksstarke Augen sowie einen offenen, frischen Blick.`,
    items: [
      { name: "Brow Lift (Augenbrauenlifting + Korrektur)", duration: "30 Min", price: "CHF 80.–", },
      { name: "Brow Lift (Augenbrauenlifting mit Färbung + Korrektur)", duration: "45 Min", price: "CHF 100.–", },
      { name: "Lash Lift (Wimpernlifting)", duration: "45 Min", price: "CHF 100.–", },
      { name: "Brow + Lash Combo (Augenbrauen- & Wimpernlifting Paket)", duration: "90 Min", price: "CHF 180.–", },
    ],
  },

  /* ===================== WAXING WOMEN ===================== */
  {
    titleKey: "categoryDepilation",
    subtitle: "Haarentfernung mit modernem Wachs für Frauen",
    description:
      "Ich arbeite mit Wachs der neuen Generation, der besonders sanft und hautfreundlich ist. Der niedrigtemperierte Wachs wird angenehm warm aufgetragen, verbrennt die Haut nicht und sorgt für ein angenehmes Gefühl während der Behandlung. Er verursacht keine Reizungen, verhindert eingewachsene Haare und hinterlässt die Haut langanhaltend glatt und gepflegt. Erleben Sie den Unterschied – schonende Haarentfernung mit modernem Wachs, ideal auch für empfindliche Haut.",
    items: [
      { name: "Achseln", duration: "15 min", price: "CHF 30.–" }, 
      { name: "Lenden", duration: "15 min", price: "CHF 30.–" },
      { name: "Bikinizone", duration: "15 min", price: "CHF 35.–" }, 
      { name: "Bikini & Pofalte", duration: "30 min", price: "CHF 50.–" },
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
      { name: "Pobacken", duration: "15 min", price: "CHF 40.–" }, 
      { name: "Pofalte", duration: "15 min", price: "CHF 25.–" }, 
      { name: "Pobacken & Pofalte", duration: "30 min", price: "CHF 60.–" },
    ],
  },

  /* ===================== WAXING MEN ===================== */
  {
    titleKey: "categoryDepilation1",
    subtitle: "Haarentfernung mit modernem Wachs für Männer",
    description:
      "Ich arbeite mit Wachs der neuen Generation, der besonders sanft und hautfreundlich ist. Der niedrigtemperierte Wachs wird angenehm warm aufgetragen, verbrennt die Haut nicht und sorgt für ein angenehmes Gefühl während der Behandlung. Er verursacht keine Reizungen, verhindert eingewachsene Haare und hinterlässt die Haut langanhaltend glatt und gepflegt. Erleben Sie den Unterschied – schonende Haarentfernung mit modernem Wachs, ideal auch für empfindliche Haut.",
    items: [
      { name: "Rücken", duration: "30 Min", price: "CHF 80.–" }, 
      { name: "Brust", duration: "30 Min", price: "CHF 55.–" }, 
      { name: "Brust & Bauch", duration: "45 Min", price: "CHF 80.–" }, 
      { name: "Bauch", duration: "30 Min", price: "CHF 45.–" }, 
      { name: "Nacken", duration: "15 Min", price: "CHF 30.–" }, 
      { name: "Lenden", duration: "15 Min", price: "CHF 40.–" },
      { name: "Arme komplett", duration: "30 Min", price: "CHF 75.–" }, 
      { name: "Beine komplett", duration: "60 Min", price: "CHF 120.–" }, 
      { name: "Intimbereich Classic", duration: "30 Min", price: "CHF 95.–", }, 
      { name: "Intimbereich Komplett", duration: "45 Min", price: "CHF 110.–", }, 
      { name: "Achseln", duration: "15 Min", price: "CHF 30.–" }, 
      { name: "Augenbrauenkorrektur", duration: "15 Min", price: "CHF 30.–" }, 
      { name: "Nase", duration: "15 Min", price: "CHF 25.–" }, 
      { name: "Ohren", duration: "15 Min", price: "CHF 25.–" }, 
      { name: "Pobacken", duration: "30 Min", price: "CHF 60.–" }, 
      { name: "Pofalte", duration: "15 Min", price: "CHF 30.–" }, 
      { name: "Pobacken & Pofalte", duration: "45 Min", price: "CHF 75.–", },
    ],
  },
];