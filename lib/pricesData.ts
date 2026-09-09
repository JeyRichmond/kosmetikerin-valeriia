// lib/pricesData.ts

import type { LangKey } from "@/lib/translations";

export type PriceItem = {
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  duration: string;
  price: string;
};

export type PriceCategory = {
  titleKey: string;
  subtitle?: string;
  description?: string;
  items: PriceItem[];
};

const tr = (
  lang: LangKey,
  de: string,
  en: string,
  ua: string
): string => {
  return { de, en, ua }[lang];
};

export const getPricesData = (
  lang: LangKey = "de"
): PriceCategory[] => [
  /* =========================================================
     FACE
  ========================================================= */
  {
    titleKey: "categoryFace",

    subtitle: tr(
      lang,
      "Professionelle Gesichtsbehandlungen für jeden Hauttyp",
      "Professional facial treatments for every skin type",
      "Професійні процедури для обличчя для кожного типу шкіри"
    ),

    description: tr(
      lang,
      "Individuell abgestimmte Pflegebehandlungen zur Reinigung, Regeneration und Revitalisierung der Haut. Sie verbessern das Hautbild, fördern die Hautgesundheit und sorgen für einen frischen, natürlichen Glow.",
      "Individually tailored treatments for cleansing, regeneration and revitalisation of the skin. They improve the appearance of the skin and leave it looking fresh and naturally radiant.",
      "Індивідуально підібрані процедури для очищення, відновлення та ревіталізації шкіри. Вони покращують її зовнішній вигляд і допомагають надати шкірі свіжого та природного сяйва."
    ),

    items: [
      {
        name: tr(
          lang,
          "Gesichtsreinigung",
          "Facial Cleansing",
          "Чистка обличчя"
        ),

        shortDescription: tr(
          lang,
          "Tiefenreinigung mit Ultraschall, mechanisch oder kombiniert.",
          "Deep cleansing using ultrasonic, mechanical or combined techniques.",
          "Глибоке очищення ультразвуковим, механічним або комбінованим методом."
        ),

        fullDescription: tr(
          lang,
          `Die Gesichtsreinigung ist eine der wichtigsten Basisbehandlungen für eine gesunde Haut.

Behandlungsarten:
• Ultraschallreinigung
• Mechanische Reinigung
• Kombinierte Reinigung

Ergebnis:
Klare, glatte und sichtbar frischere Haut.`,

          `Facial cleansing is one of the essential basic treatments for healthy-looking skin.

Treatment options:
• Ultrasonic cleansing
• Mechanical cleansing
• Combined cleansing

Result:
Clean, smooth and visibly fresher-looking skin.`,

          `Чистка обличчя — одна з основних процедур для здорового та доглянутого вигляду шкіри.

Види процедури:
• Ультразвукова чистка
• Механічна чистка
• Комбінована чистка

Результат:
Чиста, гладка та помітно свіжіша шкіра.`
        ),

        duration: "60–90 Min",
        price: "CHF 120.–",
      },

      {
        name: tr(
          lang,
          "Gesichtsreinigung + Peeling",
          "Facial Cleansing + Peel",
          "Чистка обличчя + пілінг"
        ),

        shortDescription: tr(
          lang,
          "Intensive Hauterneuerung für einen ebenmäßigen Teint.",
          "Intensive skin renewal for a smoother and more even complexion.",
          "Інтенсивне оновлення шкіри для більш рівного тону."
        ),

        fullDescription: tr(
          lang,
          `Nach der Reinigung folgt ein Peeling zur Aktivierung der Zellerneuerung.

Vorteile:
• Verfeinert Poren
• Glättet feine Linien
• Verbessert die Wirkstoffaufnahme

Ergebnis:
Saubere und revitalisierte Haut.`,

          `After cleansing, a peel is applied to support skin renewal.

Benefits:
• Refines the appearance of pores
• Smooths fine lines
• Improves absorption of skincare ingredients

Result:
Clean and revitalised-looking skin.`,

          `Після очищення виконується пілінг для підтримки процесу оновлення шкіри.

Переваги:
• Допомагає звузити видимість пор
• Розгладжує дрібні лінії
• Покращує засвоєння активних компонентів догляду

Результат:
Чиста та оновлена шкіра.`
        ),

        duration: "90 Min",
        price: "CHF 150.–",
      },

      {
        name: tr(
          lang,
          "Hydro Glow Pflege",
          "Hydro Glow Treatment",
          "Hydro Glow догляд"
        ),

        shortDescription: tr(
          lang,
          "Feuchtigkeit & Strahlkraft für trockene Haut.",
          "Hydration and radiance for dry skin.",
          "Зволоження та сяйво для сухої шкіри."
        ),

        fullDescription: tr(
          lang,
          `Intensive Feuchtigkeitsbehandlung mit Hyaluronsäure.

Ergebnis:
Pralle, hydratisierte Haut.`,

          `Intensive hydrating treatment with hyaluronic acid.

Result:
Plumper and hydrated-looking skin.`,

          `Інтенсивний зволожувальний догляд з гіалуроновою кислотою.

Результат:
Зволожена та більш наповнена шкіра.`
        ),

        duration: "75 Min",
        price: "CHF 150.–",
      },

      {
        name: tr(
          lang,
          "Pure Balance Pflege",
          "Pure Balance Treatment",
          "Pure Balance догляд"
        ),

        shortDescription: tr(
          lang,
          "Klärende Behandlung für unreine und fettige Haut.",
          "Clarifying treatment for blemish-prone and oily skin.",
          "Очищувальний догляд для проблемної та жирної шкіри."
        ),

        fullDescription: tr(
          lang,
          `Reguliert Talgproduktion und wirkt beruhigend.

Ergebnis:
Reine und ausgeglichene Haut.`,

          `Helps regulate excess sebum and soothe the skin.

Result:
Cleaner and more balanced-looking skin.`,

          `Допомагає регулювати вироблення себуму та заспокоює шкіру.

Результат:
Чистіша та більш збалансована шкіра.`
        ),

        duration: "75 Min",
        price: "CHF 150.–",
      },

      {
        name: tr(
          lang,
          "Lifting Deluxe Pflege",
          "Lifting Deluxe Treatment",
          "Lifting Deluxe догляд"
        ),

        shortDescription: tr(
          lang,
          "Anti-Aging-Behandlung für straffe Haut.",
          "Anti-ageing treatment for firmer-looking skin.",
          "Anti-age догляд для більш пружного вигляду шкіри."
        ),

        fullDescription: tr(
          lang,
          `Straffende Premium-Behandlung mit Peptiden.

Ergebnis:
Glattere und jugendlich wirkende Haut.`,

          `Premium firming treatment with peptides.

Result:
Smoother and more youthful-looking skin.`,

          `Преміальний догляд з пептидами для підтримки пружності шкіри.

Результат:
Більш гладкий та молодий вигляд шкіри.`
        ),

        duration: "75 Min",
        price: "CHF 150.–",
      },

      {
        name: "Carboxytherapie",

        shortDescription: tr(
          lang,
          "Die Carboxytherapie im Gesicht verbessert die Hautdurchblutung, regt die Kollagenproduktion an und sorgt für einen frischen, strahlenden Teint.",
          "Facial carboxytherapy supports skin circulation and collagen production and helps create a fresh, radiant complexion.",
          "Карбокситерапія для обличчя сприяє покращенню мікроциркуляції та стимуляції вироблення колагену, допомагаючи надати шкірі свіжого та сяючого вигляду."
        ),

        fullDescription: tr(
          lang,
          "Mit hochwertigen, professionellen Materialien wird Kohlendioxid sanft in die Haut eingebracht, um Spannkraft, Elastizität und Hautstruktur sichtbar zu verbessern.",
          "Professional products are used to introduce carbon dioxide gently to the skin with the aim of improving firmness, elasticity and overall skin appearance.",
          "Під час процедури використовуються професійні засоби з вуглекислим газом, спрямовані на покращення пружності, еластичності та загального вигляду шкіри."
        ),

        duration: "45 Min",
        price: "CHF 130.–",
      },
    ],
  },

  /* =========================================================
     PEELINGS
  ========================================================= */
  {
    titleKey: "categoryPeeling",

    subtitle: tr(
      lang,
      "Professionelle Peelings für Hauterneuerung & Hautbildverbesserung",
      "Professional peels for skin renewal and improved skin appearance",
      "Професійні пілінги для оновлення та покращення вигляду шкіри"
    ),

    description: tr(
      lang,
      "Medizinisch-kosmetische Peelings zur gezielten Hauterneuerung. Sie verbessern Textur, reduzieren Pigmentflecken, Unreinheiten und feine Linien.",
      "Professional cosmetic peels designed for targeted skin renewal. They help improve texture and reduce the appearance of pigmentation, blemishes and fine lines.",
      "Професійні косметичні пілінги для цілеспрямованого оновлення шкіри. Допомагають покращити текстуру та зменшити видимість пігментації, недосконалостей і дрібних ліній."
    ),

    items: [
      {
        name: "MANSSOL PEEL",

        shortDescription: tr(
          lang,
          "Sanftes Mandelsäure-Peeling für empfindliche Haut.",
          "Gentle mandelic acid peel for sensitive skin.",
          "Делікатний пілінг з мигдальною кислотою для чутливої шкіри."
        ),

        fullDescription: tr(
          lang,
          `Mildes Peeling zur sanften Hauterneuerung.

Geeignet für:
Empfindliche, trockene oder pigmentierte Haut.

Ergebnis:
Frische und ebenmässige Haut.`,

          `Gentle peel for mild skin renewal.

Suitable for:
Sensitive, dry or pigmented skin.

Result:
Fresher and more even-looking skin.`,

          `Делікатний пілінг для м’якого оновлення шкіри.

Підходить для:
Чутливої, сухої шкіри або шкіри з пігментацією.

Результат:
Свіжіший та більш рівний вигляд шкіри.`
        ),

        duration: "45 Min",
        price: "CHF 125.–",
      },

      {
        name: "BALANCE RECOVERY PEEL",

        shortDescription: tr(
          lang,
          "Beruhigendes Peeling für unreine Haut.",
          "Soothing peel for blemish-prone skin.",
          "Заспокійливий пілінг для проблемної шкіри."
        ),

        fullDescription: tr(
          lang,
          `Peeling mit Azelain- und Milchsäure zur Reduktion von Entzündungen.

Geeignet für:
Fettige, unreine oder Akne-Haut.

Ergebnis:
Reine, ausgeglichene Haut.`,

          `Peel with azelaic and lactic acids designed to help reduce the appearance of inflammation.

Suitable for:
Oily, blemish-prone or acne-prone skin.

Result:
Cleaner and more balanced-looking skin.`,

          `Пілінг з азелаїновою та молочною кислотами, спрямований на зменшення проявів запалення.

Підходить для:
Жирної, проблемної та схильної до акне шкіри.

Результат:
Чистіша та більш збалансована шкіра.`
        ),

        duration: "45 Min",
        price: "CHF 125.–",
      },

      {
        name: "JESSOL PEEL",

        shortDescription: tr(
          lang,
          "Kombiniertes Peeling für Frische & Straffung.",
          "Combined peel for freshness and firmer-looking skin.",
          "Комбінований пілінг для свіжості та більш пружного вигляду шкіри."
        ),

        fullDescription: tr(
          lang,
          `Wirkt gegen Falten, Unreinheiten und Pigmentflecken.

Geeignet für:
Reife oder müde Haut.

Ergebnis:
Strahlender, glatter Teint.`,

          `Designed to improve the appearance of wrinkles, blemishes and pigmentation.

Suitable for:
Mature or tired-looking skin.

Result:
Brighter and smoother-looking complexion.`,

          `Спрямований на покращення вигляду зморшок, недосконалостей та пігментації.

Підходить для:
Зрілої або втомленої шкіри.

Результат:
Більш сяючий та гладкий тон шкіри.`
        ),

        duration: "45 Min",
        price: "CHF 125.–",
      },

      {
        name: "TAGESPEELING 10% TCA",

        shortDescription: tr(
          lang,
          "Sanftes TCA-Peeling zur Hauterneuerung.",
          "Gentle TCA peel for skin renewal.",
          "Делікатний TCA-пілінг для оновлення шкіри."
        ),

        fullDescription: tr(
          lang,
          `Schonende Erneuerung der Hautstruktur.

Geeignet für:
Empfindliche oder trockene Haut.

Ergebnis:
Frischer, glatter Teint.`,

          `Gentle renewal of the skin's appearance and texture.

Suitable for:
Sensitive or dry skin.

Result:
Fresher and smoother-looking complexion.`,

          `Делікатне оновлення текстури шкіри.

Підходить для:
Чутливої або сухої шкіри.

Результат:
Свіжіший та гладкіший вигляд шкіри.`
        ),

        duration: "45 Min",
        price: "CHF 135.–",
      },

      {
        name: "TRI PEEL 20% TCA",

        shortDescription: tr(
          lang,
          "Intensives Peeling für sichtbare Ergebnisse.",
          "Intensive peel for more visible results.",
          "Інтенсивний пілінг для більш вираженого результату."
        ),

        fullDescription: tr(
          lang,
          `Mitteltiefes Peeling zur Glättung und Aufhellung.

Geeignet für:
Reife Haut, Pigmentflecken.

Ergebnis:
Gleichmässige, verjüngte Haut.`,

          `Medium-depth peel designed to smooth and brighten the skin.

Suitable for:
Mature skin and pigmentation.

Result:
More even and rejuvenated-looking skin.`,

          `Пілінг середньої глибини для вирівнювання та освітлення шкіри.

Підходить для:
Зрілої шкіри та шкіри з пігментацією.

Результат:
Більш рівний і оновлений вигляд шкіри.`
        ),

        duration: "45 Min",
        price: "CHF 150.–",
      },
    ],
  },

  /* =========================================================
     EYEBROWS & LASHES
  ========================================================= */
  {
    titleKey: "categoryAugen",

    subtitle: tr(
      lang,
      "Schöne Augen – perfekter Ausdruck",
      "Beautiful eyes – the perfect expression",
      "Красиві очі — виразний погляд"
    ),

    description: tr(
      lang,
      "Gepflegte Augenbrauen und Wimpern verleihen dem Gesicht Ausdruck, Charakter und Natürlichkeit. Mit viel Erfahrung und Liebe zum Detail forme, färbe und style ich Ihre Brauen und Wimpern – für ein harmonisches, frisches Aussehen. Ich arbeite ausschließlich mit professionellen, hochwertigen Materialien, die sanft zur Haut sind und für langanhaltend schöne Ergebnisse sorgen.",
      "Well-groomed brows and lashes give the face expression, character and a natural look. With experience and attention to detail, I shape, tint and style brows and lashes for a harmonious and fresh appearance. I work exclusively with professional, high-quality products.",
      "Доглянуті брови та вії надають обличчю виразності, характеру й природності. Завдяки досвіду та увазі до деталей я коригую форму, фарбую та стилізую брови й вії для гармонійного та свіжого вигляду. У роботі використовую професійні якісні матеріали."
    ),

    items: [
      {
        name: tr(
          lang,
          "Augenbrauenkorrektur + Färbung",
          "Brow Shaping + Tint",
          "Корекція брів + фарбування"
        ),
        duration: "30 Min",
        price: "CHF 55.–",
      },
      {
        name: tr(
          lang,
          "Wimpernfärbung",
          "Lash Tint",
          "Фарбування вій"
        ),
        duration: "30 Min",
        price: "CHF 35.–",
      },
      {
        name: tr(
          lang,
          "Augenbrauenfärbung",
          "Brow Tint",
          "Фарбування брів"
        ),
        duration: "30 Min",
        price: "CHF 35.–",
      },
      {
        name: tr(
          lang,
          "Augenbrauenkorrektur",
          "Brow Shaping",
          "Корекція брів"
        ),
        duration: "15 Min",
        price: "CHF 25.–",
      },
      {
        name: tr(
          lang,
          "Augenbrauen & Wimpern färben",
          "Brow & Lash Tint",
          "Фарбування брів та вій"
        ),
        duration: "45 Min",
        price: "CHF 75.–",
      },
    ],
  },

  /* =========================================================
     BROW & LASH LIFTING
  ========================================================= */
  {
    titleKey: "categoryBrow",

    subtitle: tr(
      lang,
      "Perfekt gestylt. Wochenlang.",
      "Perfectly styled. For weeks.",
      "Ідеальна форма. На кілька тижнів."
    ),

    description: tr(
      lang,
      "Die Laminierung von Augenbrauen und Wimpern verleiht den Härchen mehr Form, Struktur und Volumen. Die natürliche Wuchsrichtung wird optimiert, die Härchen wirken dichter, gepflegter und perfekt gestylt – ganz ohne tägliches Styling. Das Ergebnis hält bis zu 2 Monate an und sorgt für ausdrucksstarke Augen sowie einen offenen, frischen Blick.",
      "Brow and lash lifting gives the hairs more shape, structure and visual volume. The natural direction is styled so the brows and lashes appear fuller and more defined without daily styling. The result can last up to 2 months.",
      "Ламінування брів і вій надає волоскам форму, структуру та візуальний об’єм. Природний напрямок укладання коригується, завдяки чому брови та вії виглядають більш густими й доглянутими без щоденного стайлінгу. Результат може зберігатися до 2 місяців."
    ),

    items: [
      {
        name: tr(
          lang,
          "Brow Lift (Augenbrauenlifting + Korrektur)",
          "Brow Lift (Lifting + Shaping)",
          "Brow Lift (ламінування + корекція)"
        ),
        duration: "30 Min",
        price: "CHF 80.–",
      },
      {
        name: tr(
          lang,
          "Brow Lift (Augenbrauenlifting mit Färbung + Korrektur)",
          "Brow Lift (Lifting + Tint + Shaping)",
          "Brow Lift (ламінування + фарбування + корекція)"
        ),
        duration: "45 Min",
        price: "CHF 100.–",
      },
      {
        name: tr(
          lang,
          "Lash Lift (Wimpernlifting)",
          "Lash Lift",
          "Lash Lift (ламінування вій)"
        ),
        duration: "45 Min",
        price: "CHF 100.–",
      },
      {
        name: tr(
          lang,
          "Brow + Lash Combo (Augenbrauen- & Wimpernlifting Paket)",
          "Brow + Lash Combo",
          "Brow + Lash Combo (ламінування брів та вій)"
        ),
        duration: "90 Min",
        price: "CHF 180.–",
      },
    ],
  },

  /* =========================================================
     WAXING WOMEN
  ========================================================= */
  {
    titleKey: "categoryDepilation",

    subtitle: tr(
      lang,
      "Haarentfernung mit modernem Wachs für Frauen",
      "Modern waxing for women",
      "Сучасна воскова депіляція для жінок"
    ),

    description: tr(
      lang,
      "Ich arbeite mit Wachs der neuen Generation, der besonders sanft und hautfreundlich ist. Der niedrigtemperierte Wachs wird angenehm warm aufgetragen, verbrennt die Haut nicht und sorgt für ein angenehmes Gefühl während der Behandlung. Er verursacht keine Reizungen, verhindert eingewachsene Haare und hinterlässt die Haut langanhaltend glatt und gepflegt. Erleben Sie den Unterschied – schonende Haarentfernung mit modernem Wachs, ideal auch für empfindliche Haut.",
      "I work with modern low-temperature wax designed for gentle and comfortable hair removal. It is applied pleasantly warm and leaves the skin smooth and well cared for. The treatment is also suitable for sensitive skin.",
      "Я працюю із сучасним низькотемпературним воском, призначеним для делікатного та комфортного видалення волосся. Він наноситься приємно теплим і залишає шкіру гладкою та доглянутою. Процедура також підходить для чутливої шкіри."
    ),

    items: [
      {
        name: tr(lang, "Achseln", "Underarms", "Пахви"),
        duration: "15 Min",
        price: "CHF 30.–",
      },
      {
        name: tr(lang, "Lenden", "Lower Back", "Поперек"),
        duration: "15 Min",
        price: "CHF 30.–",
      },
      {
        name: tr(lang, "Bikinizone", "Bikini Line", "Зона бікіні"),
        duration: "15 Min",
        price: "CHF 35.–",
      },
      {
        name: tr(
          lang,
          "Bikini & Pofalte",
          "Bikini + Intergluteal Area",
          "Бікіні + міжсіднична зона"
        ),
        duration: "30 Min",
        price: "CHF 50.–",
      },
      {
        name: tr(
          lang,
          "Intimbereich",
          "Intimate Area",
          "Інтимна зона"
        ),
        duration: "30 Min",
        price: "CHF 75.–",
      },
      {
        name: tr(lang, "Ganze Beine", "Full Legs", "Ноги повністю"),
        duration: "45 Min",
        price: "CHF 95.–",
      },
      {
        name: tr(lang, "Unterschenkel", "Lower Legs", "Гомілки"),
        duration: "30 Min",
        price: "CHF 60.–",
      },
      {
        name: tr(lang, "Oberschenkel", "Upper Legs", "Стегна"),
        duration: "30 Min",
        price: "CHF 55.–",
      },
      {
        name: tr(lang, "Ganze Arme", "Full Arms", "Руки повністю"),
        duration: "30 Min",
        price: "CHF 55.–",
      },
      {
        name: tr(lang, "Unterarme", "Forearms", "Передпліччя"),
        duration: "30 Min",
        price: "CHF 35.–",
      },
      {
        name: tr(lang, "Bauch", "Abdomen", "Живіт"),
        duration: "30 Min",
        price: "CHF 40.–",
      },
      {
        name: tr(lang, "Rücken", "Back", "Спина"),
        duration: "30 Min",
        price: "CHF 60.–",
      },
      {
        name: tr(lang, "Oberlippe", "Upper Lip", "Верхня губа"),
        duration: "15 Min",
        price: "CHF 20.–",
      },
      {
        name: tr(lang, "Kinn", "Chin", "Підборіддя"),
        duration: "15 Min",
        price: "CHF 15.–",
      },
      {
        name: tr(lang, "Wangen", "Cheeks", "Щоки"),
        duration: "15 Min",
        price: "CHF 15.–",
      },
      {
        name: tr(lang, "Nase", "Nose", "Ніс"),
        duration: "15 Min",
        price: "CHF 20.–",
      },
      {
        name: tr(lang, "Pobacken", "Buttocks", "Сідниці"),
        duration: "15 Min",
        price: "CHF 40.–",
      },
      {
        name: tr(
          lang,
          "Pofalte",
          "Intergluteal Area",
          "Міжсіднична зона"
        ),
        duration: "15 Min",
        price: "CHF 25.–",
      },
      {
        name: tr(
          lang,
          "Pobacken & Pofalte",
          "Buttocks + Intergluteal Area",
          "Сідниці + міжсіднична зона"
        ),
        duration: "30 Min",
        price: "CHF 60.–",
      },
    ],
  },

  /* =========================================================
     WAXING MEN
  ========================================================= */
  {
    titleKey: "categoryDepilation1",

    subtitle: tr(
      lang,
      "Haarentfernung mit modernem Wachs für Männer",
      "Modern waxing for men",
      "Сучасна воскова депіляція для чоловіків"
    ),

    description: tr(
      lang,
      "Ich arbeite mit Wachs der neuen Generation, der besonders sanft und hautfreundlich ist. Der niedrigtemperierte Wachs wird angenehm warm aufgetragen, verbrennt die Haut nicht und sorgt für ein angenehmes Gefühl während der Behandlung. Er verursacht keine Reizungen, verhindert eingewachsene Haare und hinterlässt die Haut langanhaltend glatt und gepflegt. Erleben Sie den Unterschied – schonende Haarentfernung mit modernem Wachs, ideal auch für empfindliche Haut.",
      "I work with modern low-temperature wax designed for gentle and comfortable hair removal. It is applied pleasantly warm and leaves the skin smooth and well cared for. The treatment is also suitable for sensitive skin.",
      "Я працюю із сучасним низькотемпературним воском, призначеним для делікатного та комфортного видалення волосся. Він наноситься приємно теплим і залишає шкіру гладкою та доглянутою. Процедура також підходить для чутливої шкіри."
    ),

    items: [
      {
        name: tr(lang, "Rücken", "Back", "Спина"),
        duration: "30 Min",
        price: "CHF 80.–",
      },
      {
        name: tr(lang, "Brust", "Chest", "Груди"),
        duration: "30 Min",
        price: "CHF 55.–",
      },
      {
        name: tr(lang, "Brust & Bauch", "Chest + Abdomen", "Груди + живіт"),
        duration: "45 Min",
        price: "CHF 80.–",
      },
      {
        name: tr(lang, "Bauch", "Abdomen", "Живіт"),
        duration: "30 Min",
        price: "CHF 45.–",
      },
      {
        name: tr(lang, "Nacken", "Neck", "Шия"),
        duration: "15 Min",
        price: "CHF 30.–",
      },
      {
        name: tr(lang, "Lenden", "Lower Back", "Поперек"),
        duration: "15 Min",
        price: "CHF 40.–",
      },
      {
        name: tr(lang, "Arme komplett", "Full Arms", "Руки повністю"),
        duration: "30 Min",
        price: "CHF 75.–",
      },
      {
        name: tr(lang, "Beine komplett", "Full Legs", "Ноги повністю"),
        duration: "60 Min",
        price: "CHF 120.–",
      },
      {
        name: tr(
          lang,
          "Intimbereich Classic",
          "Intimate Area Classic",
          "Інтимна зона Classic"
        ),
        duration: "30 Min",
        price: "CHF 95.–",
      },
      {
        name: tr(
          lang,
          "Intimbereich Komplett",
          "Full Intimate Area",
          "Інтимна зона повністю"
        ),
        duration: "45 Min",
        price: "CHF 110.–",
      },
      {
        name: tr(lang, "Achseln", "Underarms", "Пахви"),
        duration: "15 Min",
        price: "CHF 30.–",
      },
      {
        name: tr(
          lang,
          "Augenbrauenkorrektur",
          "Brow Shaping",
          "Корекція брів"
        ),
        duration: "15 Min",
        price: "CHF 30.–",
      },
      {
        name: tr(lang, "Nase", "Nose", "Ніс"),
        duration: "15 Min",
        price: "CHF 25.–",
      },
      {
        name: tr(lang, "Ohren", "Ears", "Вуха"),
        duration: "15 Min",
        price: "CHF 25.–",
      },
      {
        name: tr(lang, "Pobacken", "Buttocks", "Сідниці"),
        duration: "30 Min",
        price: "CHF 60.–",
      },
      {
        name: tr(
          lang,
          "Pofalte",
          "Intergluteal Area",
          "Міжсіднична зона"
        ),
        duration: "15 Min",
        price: "CHF 30.–",
      },
      {
        name: tr(
          lang,
          "Pobacken & Pofalte",
          "Buttocks + Intergluteal Area",
          "Сідниці + міжсіднична зона"
        ),
        duration: "45 Min",
        price: "CHF 75.–",
      },
    ],
  },
];