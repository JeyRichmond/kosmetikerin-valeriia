"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import type { LangKey } from "@/lib/translations";
import Reveal from "@/components/Reveal";

type Props = {
  lang: LangKey;
};

const content = {
  de: {
    eyebrow: "FAQ",
    title: "Häufige Fragen.",
    intro:
      "Hier finden Sie Antworten auf häufige Fragen rund um Behandlungen, Terminbuchung und Ihren Besuch bei mir in Zürich.",

    questions: [
      {
        question: "Welche Behandlung passt zu meiner Haut?",
        answer:
          "Wenn Sie unsicher sind, welche Gesichtsbehandlung für Ihre Haut geeignet ist, besprechen wir Ihre Wünsche und den aktuellen Hautzustand vor der Behandlung. Auf dieser Grundlage kann ich Ihnen eine passende Behandlung empfehlen.",
      },
      {
        question: "Wie kann ich einen Termin buchen?",
        answer:
          "Am einfachsten buchen Sie Ihren Termin direkt online über die Buchungsfunktion auf dieser Website. Dort sehen Sie die verfügbaren Behandlungen, Preise und freien Termine.",
      },
      {
        question: "Wie bereite ich mich auf eine Gesichtsbehandlung vor?",
        answer:
          "Eine besondere Vorbereitung ist in der Regel nicht notwendig. Wenn möglich, vermeiden Sie unmittelbar vor dem Termin aggressive Peelings oder andere stark reizende Hautbehandlungen. Bei Besonderheiten Ihrer Haut können wir diese vor Beginn der Behandlung gemeinsam besprechen.",
      },
      {
        question: "Wie lange hält ein Brow oder Lash Lifting?",
        answer:
          "Das Ergebnis hält in der Regel etwa 6–8 Wochen. Die genaue Haltbarkeit kann je nach natürlichem Haarwachstum und individueller Pflege variieren.",
      },
      {
        question: "Was sollte ich nach dem Waxing beachten?",
        answer:
          "Direkt nach dem Waxing kann die Haut empfindlicher sein. Für etwa 24 Stunden sollten starke Hitze, Sauna, intensive Sonne, Solarium und starkes Schwitzen möglichst vermieden werden. Auch reizende Pflegeprodukte sollten unmittelbar danach nicht verwendet werden.",
      },
      {
        question: "Kann ich mehrere Behandlungen kombinieren?",
        answer:
          "Je nach Behandlung ist eine Kombination möglich. Wenn Sie mehrere Leistungen an einem Termin wünschen, können Sie mich gerne vorab kontaktieren, damit wir genügend Zeit einplanen und eine sinnvolle Kombination auswählen können.",
      },
      {
        question: "Wo befindet sich das Studio?",
        answer:
          "Das Studio befindet sich an der Weinbergstrasse 18, 8001 Zürich, in zentraler Lage. Die genaue Position finden Sie weiter unten auf der Karte.",
      },
    ],
  },

  en: {
    eyebrow: "FAQ",
    title: "Frequently asked questions.",
    intro:
      "Here you will find answers to common questions about treatments, booking and your visit to my studio in Zürich.",

    questions: [
      {
        question: "Which treatment is right for my skin?",
        answer:
          "If you are unsure which facial treatment is suitable for your skin, we will discuss your wishes and your current skin condition before the treatment. Based on this, I can recommend an appropriate treatment.",
      },
      {
        question: "How can I book an appointment?",
        answer:
          "The easiest way is to book directly online using the booking function on this website. You can view the available treatments, prices and appointment times there.",
      },
      {
        question: "How should I prepare for a facial treatment?",
        answer:
          "No special preparation is usually necessary. If possible, avoid aggressive peels or other strongly irritating skin treatments immediately before your appointment. Any individual skin concerns can be discussed before the treatment begins.",
      },
      {
        question: "How long does a brow or lash lift last?",
        answer:
          "The result usually lasts around 6–8 weeks. The exact duration may vary depending on your natural hair growth and individual aftercare.",
      },
      {
        question: "What should I avoid after waxing?",
        answer:
          "Your skin may be more sensitive immediately after waxing. For around 24 hours, it is best to avoid intense heat, sauna, strong sun exposure, solarium and heavy sweating. Irritating skincare products should also be avoided immediately afterwards.",
      },
      {
        question: "Can I combine several treatments?",
        answer:
          "Depending on the treatments, combining services may be possible. If you would like several treatments during one appointment, please contact me beforehand so that enough time can be reserved and we can choose a suitable combination.",
      },
      {
        question: "Where is the studio located?",
        answer:
          "The studio is located at Weinbergstrasse 18, 8001 Zürich, in a central location. You will find the exact location on the map further down the page.",
      },
    ],
  },

  ua: {
    eyebrow: "FAQ",
    title: "Часті запитання.",
    intro:
      "Тут ви знайдете відповіді на поширені запитання про процедури, запис та відвідування мого салону в Цюриху.",

    questions: [
      {
        question: "Яка процедура підійде для моєї шкіри?",
        answer:
          "Якщо ви не впевнені, яка процедура для обличчя підійде саме вам, перед початком ми обговоримо ваші побажання та актуальний стан шкіри. На основі цього я зможу порекомендувати відповідну процедуру.",
      },
      {
        question: "Як записатися на процедуру?",
        answer:
          "Найпростіше записатися онлайн через систему бронювання на цьому сайті. Там ви можете переглянути доступні процедури, ціни та вільний час.",
      },
      {
        question: "Як підготуватися до процедури для обличчя?",
        answer:
          "Спеціальна підготовка зазвичай не потрібна. За можливості безпосередньо перед візитом уникайте агресивних пілінгів та інших процедур, які можуть сильно подразнювати шкіру. Особливості вашої шкіри ми можемо обговорити перед початком процедури.",
      },
      {
        question: "Скільки тримається Brow або Lash Lifting?",
        answer:
          "Результат зазвичай зберігається приблизно 6–8 тижнів. Точна тривалість залежить від природного циклу росту волосків та індивідуального догляду.",
      },
      {
        question: "Що потрібно враховувати після воскової депіляції?",
        answer:
          "Одразу після воскової депіляції шкіра може бути більш чутливою. Приблизно протягом 24 годин бажано уникати сильної спеки, сауни, активного сонця, солярію та інтенсивного потовиділення. Також не варто одразу використовувати засоби, що можуть подразнювати шкіру.",
      },
      {
        question: "Чи можна поєднати кілька процедур?",
        answer:
          "Залежно від процедур їх можна поєднувати. Якщо ви хочете записатися на кілька послуг за один візит, краще зв’язатися зі мною заздалегідь, щоб ми могли запланувати достатньо часу та підібрати оптимальне поєднання.",
      },
      {
        question: "Де знаходиться салон?",
        answer:
          "Салон знаходиться за адресою Weinbergstrasse 18, 8001 Zürich, у центральній частині міста. Точне розташування ви побачите нижче на карті.",
      },
    ],
  },
} as const;

export default function FAQSection({ lang }: Props) {
  const t = content[lang] ?? content.de;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section
  id="faq"
  className="relative scroll-mt-19.5 overflow-hidden bg-white"
>
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20 xl:gap-28">
          {/* LEFT */}
            <Reveal>
  <div className="lg:sticky lg:top-30">
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#D5AA1B]" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                  {t.eyebrow}
                </p>
              </div>

              <h2 className="max-w-120 text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#171717] sm:text-[46px] lg:text-[52px]">
                {t.title}
              </h2>

              <p className="mt-6 max-w-107.5 text-[14px] leading-[1.85] text-[#666] sm:text-[15.5px]">
                {t.intro}
              </p>
            </div>
          </Reveal>

          {/* RIGHT / ACCORDION */}
          <Reveal delay={0.08} className="border-t border-black/9">
            {t.questions.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="border-b border-black/9"
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex((current) =>
                        current === index ? null : index
                      )
                    }
                    aria-expanded={isOpen}
                    className="group flex w-full items-start justify-between gap-8 py-7 text-left sm:py-8"
                  >
                    <div className="flex items-start gap-5 sm:gap-7">
                      <span
                        className={`mt-1 text-[9px] font-semibold tracking-[0.18em] transition-colors duration-300 ${
                          isOpen
                            ? "text-[#A77F13]"
                            : "text-black/25"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <h3
                        className={`max-w-155 text-[17px] font-medium leading-[1.45] tracking-[-0.015em] transition-colors duration-300 sm:text-[19px] ${
                          isOpen
                            ? "text-[#171717]"
                            : "text-[#333] group-hover:text-[#A77F13]"
                        }`}
                      >
                        {item.question}
                      </h3>
                    </div>

                    <div
                      className={`flex h-9 w-9 flex-none items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-[#D5AA1B]/35 bg-[#FAF9F6] text-[#A77F13]"
                          : "border-black/8 text-black/35 group-hover:border-[#D5AA1B]/30 group-hover:text-[#A77F13]"
                      }`}
                    >
                      <Plus size={15} strokeWidth={1.5} />
                    </div>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="pb-8 pl-9.5 pr-10 sm:pl-13 sm:pr-16">
                        <p className="max-w-162.5 text-[14px] leading-[1.85] text-[#666] sm:text-[15px]">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}