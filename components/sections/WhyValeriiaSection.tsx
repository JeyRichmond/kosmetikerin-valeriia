import {
  Check,
  Heart,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import Reveal from "@/components/Reveal";
import type { LangKey } from "@/lib/translations";

type Props = {
  lang: LangKey;
  onBook: () => void;
};

const content = {
  de: {
    eyebrow: "Warum Valeriia",
    title: "Erfahrung, Präzision und persönliche Betreuung.",
    intro:
  "Mein Anspruch ist es, dass Sie sich bei jeder Behandlung gut aufgehoben fühlen – mit professioneller Kosmetik, persönlicher Aufmerksamkeit und einem Ergebnis, das zu Ihnen passt.",
    experience: "Jahre Erfahrung",
    experienceText:
  "Über 10 Jahre Erfahrung in professioneller Kosmetik – von individueller Hautpflege bis zu Waxing sowie Brow & Lash Behandlungen.",

    reasons: [
      {
        number: "01",
        title: "Individuell statt Standard",
        text:
          "Jede Haut ist anders. Deshalb wird die Behandlung auf Ihren Hautzustand, Ihre Wünsche und Ihre persönlichen Bedürfnisse abgestimmt.",
      },
      {
        number: "02",
        title: "Präzise & hygienische Arbeit",
        text:
          "Sorgfältige Arbeitsweise, hohe Hygienestandards und professionelle Produkte gehören für mich zu jeder Behandlung.",
      },
      {
        number: "03",
        title: "Persönliche Betreuung",
        text:
          "Von der Beratung bis zum Ergebnis werden Sie persönlich von mir betreut – ruhig, aufmerksam und ohne Zeitdruck.",
      },
    ],

    trust1: "10+ Jahre Erfahrung",
    trust2: "Persönliche Beratung",
    trust3: "Zürich 8001",

    button: "Termin buchen",
  },

  en: {
    eyebrow: "Why Valeriia",
    title: "Experience, precision and personal care.",
   intro:
  "My goal is for you to feel genuinely well looked after during every treatment – with professional beauty care, personal attention and results that suit you.",
    experience: "Years of experience",
    experienceText:
  "Over 10 years of experience in professional beauty care – from individual skincare to waxing and brow & lash treatments.",

    reasons: [
      {
        number: "01",
        title: "Individual, not standard",
        text:
          "Every skin is different. Your treatment is therefore adapted to your skin condition, your wishes and your individual needs.",
      },
      {
        number: "02",
        title: "Precise & hygienic",
        text:
          "Careful work, high hygiene standards and professional products are part of every treatment.",
      },
      {
        number: "03",
        title: "Personal care",
        text:
          "From consultation to the final result, you are personally looked after by me – calmly, attentively and without rushing.",
      },
    ],

    trust1: "10+ years experience",
    trust2: "Personal consultation",
    trust3: "Zürich 8001",

    button: "Book appointment",
  },

  ua: {
    eyebrow: "Чому Valeriia",
    title: "Досвід, точність та персональний підхід.",
    intro:
  "Моя мета — щоб під час кожної процедури ви відчували турботу та впевненість: професійний догляд, особиста увага й результат, який підходить саме вам.",
    experience: "Років досвіду",
    experienceText:
  "Понад 10 років досвіду у професійній косметології — від індивідуального догляду за шкірою до воскової депіляції та Brow & Lash процедур.",

    reasons: [
      {
        number: "01",
        title: "Індивідуально, а не стандартно",
        text:
          "Кожна шкіра має свої особливості. Тому процедура підбирається відповідно до стану шкіри, ваших побажань і потреб.",
      },
      {
        number: "02",
        title: "Точність та гігієна",
        text:
          "Акуратна робота, високі стандарти гігієни та професійні засоби є невід’ємною частиною кожної процедури.",
      },
      {
        number: "03",
        title: "Особиста увага",
        text:
          "Від консультації до результату я особисто супроводжую вас — уважно, спокійно та без поспіху.",
      },
    ],

    trust1: "10+ років досвіду",
    trust2: "Особиста консультація",
    trust3: "Zürich 8001",

    button: "Записатися",
  },
} as const;

const icons = [Heart, ShieldCheck, Sparkles];

export default function WhyValeriiaSection({
  lang,
}: Props) {
  const t = content[lang] ?? content.de;

  return (
    <section
      id="why-valeriia"
      className="relative overflow-hidden bg-white"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20">
        {/* HEADER */}
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <Reveal>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.eyebrow}
              </p>
            </div>

            <h2 className="max-w-155 text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#171717] sm:text-[46px] lg:text-[52px]">
              {t.title}
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="lg:flex lg:items-end">
            <p className="max-w-150 text-[15px] leading-[1.85] text-[#666] sm:text-[16px] lg:text-[17px]">
              {t.intro}
            </p>
          </Reveal>
        </div>

        {/* MAIN */}
        <Reveal
  delay={0.1}
  className="mt-14 grid overflow-hidden rounded-[30px] border border-black/[0.07] bg-[#FAF9F6] lg:mt-16 lg:grid-cols-[0.78fr_1.22fr]"
>
          {/* EXPERIENCE */}
          <div className="relative flex min-h-97.5 flex-col justify-between overflow-hidden border-b border-black/[0.07] p-8 sm:p-10 lg:min-h-140 lg:border-b-0 lg:border-r lg:p-12">
            {/* subtle decoration */}
            <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-[#D5AA1B]/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-44 w-44 rounded-full border border-[#D5AA1B]/10" />

            <div className="relative">
              <span className="text-[11px] font-semibold uppercase tracking-[0.22em] text-black/35">
                Kosmetikerin Valeriia
              </span>

              <div className="mt-10 flex items-start">
                <span className="text-[100px] font-semibold leading-[0.8] tracking-[-0.08em] text-[#171717] sm:text-[128px] lg:text-[150px]">
                  10
                </span>

                <span className="ml-2 text-[42px] font-light leading-none text-[#D5AA1B] sm:text-[52px]">
                  +
                </span>
              </div>

              <p className="mt-6 text-[13px] font-semibold uppercase tracking-[0.18em] text-[#171717]">
                {t.experience}
              </p>
            </div>

            <div className="relative mt-12 max-w-97.5">
              <p className="text-[14px] leading-[1.8] text-[#666] sm:text-[15px]">
                {t.experienceText}
              </p>

              <div className="mt-7 h-px w-full bg-black/[0.07]" />

              <div className="mt-6 flex items-center gap-2 text-[11px] font-medium text-[#171717]">
                <Check
                  size={15}
                  strokeWidth={1.7}
                  className="text-[#D5AA1B]"
                />
                Zürich · Weinbergstrasse 18
              </div>
            </div>
          </div>

          {/* REASONS */}
          <div className="flex flex-col">
            {t.reasons.map((reason, index) => {
              const Icon = icons[index];

              return (
                <div
                  key={reason.number}
                  className="
                    group
                    grid flex-1 gap-6
                    border-b border-black/[0.07]
                    p-8
                    transition-colors duration-300
                    last:border-b-0
                    hover:bg-white
                    sm:p-10
                    md:grid-cols-[70px_1fr]
                    md:items-start
                    lg:p-11
                  "
                >
                  <div className="flex items-center gap-4 md:block">
                    <span className="text-[10px] font-semibold tracking-[0.2em] text-[#A77F13]">
                      {reason.number}
                    </span>

                    <div className="ml-auto flex h-11 w-11 items-center justify-center rounded-full border border-black/[0.07] bg-white md:ml-0 md:mt-7">
                      <Icon
                        size={18}
                        strokeWidth={1.35}
                        className="text-[#D5AA1B]"
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-[20px] font-semibold tracking-[-0.02em] text-[#171717] sm:text-[22px]">
                      {reason.title}
                    </h3>

                    <p className="mt-3 max-w-130 text-[14px] leading-[1.8] text-[#666] sm:text-[15px]">
                      {reason.text}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}