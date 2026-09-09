"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Pause,
  Play,
  Quote,
  Star,
} from "lucide-react";

export type GoogleReview = {
  name: string;
  text: string;
  rating: number;
};

type ReviewsTranslations = {
  reviews: {
    eyebrow: string;
    title: string;
    text: string;
    ratingLabel: string;
    googleLabel: string;
    button: string;
  };
};

type Props = {
  t: ReviewsTranslations;
  googleReviewsUrl: string;
};

const reviews: GoogleReview[] = [
  {
    name: "Волошина Тетяна",
    rating: 5,
    text: `I’ve been seeing Valeriia for more than 3 years now, and every time I try a new treatment, I am 100% satisfied.

There is a particularly warm and welcoming atmosphere in Valeriia’s space.

She is always attentive to her clients and their needs. Overall, Valeriia is not only an excellent cosmetologist, but also a very pleasant, kind, and caring person.

I highly recommend Kosmetikerin Valeriia!`,
  },

  {
    name: "Ольга Анатольевна",
    rating: 5,
    text: `Ich bin sehr zufrieden mit den Behandlungen bei Kosmetikerin Valeriia 🫶🏻

Besonders gefällt mir, dass sie die Depilation sehr sorgfältig und effektiv macht. Die Behandlung ist immer angenehm und das Ergebnis ist wirklich sehr gut. Auch die Gesichtsbehandlungen führt sie sehr professionell durch. Man merkt sofort, dass sie viel Erfahrung hat und mit hochwertigen Materialien arbeitet.

Seit mehr als zwei Jahren gehe ich nur zu Valeria, weil ich von der hohen Qualität ihrer Arbeit überzeugt bin und ihr vollkommen vertraue ☀️🫶🏻🙏`,
  },

  {
    name: "Елена Калачева",
    rating: 5,
    text: `Хожу к Valeriia уже не первый раз и каждый раз остаюсь в полном восторге!

Очень внимательный и профессиональный косметолог — всё делает аккуратно, бережно и с учётом особенностей кожи.

Отдельно хочу отметить чистоту, атмосферу и ощущение полного комфорта во время процедуры. Видно, что мастер действительно любит своё дело и работает на результат.

Кожа после процедур выглядит свежей, ухоженной и здоровой ✨

С удовольствием рекомендую!`,
  },

  {
    name: "Анастасия Криворучко",
    rating: 5,
    text: `Хочу поделиться своим восторгом 😍

Была на коррекции бровей у Валерии — это просто любовь с первого визита!

Очень внимательный и аккуратный подход. Валерия сразу понимает, как лучше сделать, и работает бережно — в итоге всё выглядит естественно и красиво 👌

Атмосфера невероятно комфортная. Она очень дружелюбная, легко располагает к себе, и на процедуре чувствуешь себя спокойно и расслабленно.

Отдельно хочу отметить уровень сервиса — всё чисто, аккуратно и с заботой о клиенте.

Результат мне очень нравится, брови получились именно такими, как я хотела ✨

Точно приду ещё!`,
  },

  {
    name: "Galyna Bodnaruk",
    rating: 5,
    text: `Nach meinem Besuch bei Valeria zur Carboxytherapie möchte ich eine Bewertung abgeben. Ich war sehr zufrieden! ❤️ Äußerst angenehme Atmosphäre, aufmerksame Betreuung und echte Professionalität. Man merkt, dass die Meisterin ihre Arbeit liebt und sich sehr um die Kunden kümmert. Auch mit dem Ergebnis bin ich überaus zufrieden. Ich komme auf jeden Fall wieder und kann die Praxis wärmstens empfehlen!`,
  },

  {
    name: "Anet P",
    rating: 5,
    text: `Ein tolles Studio mit Wohlfühlatmosphäre! Die Mitarbeiterin war sehr professionell, einfühlsam und hat extrem sauber gearbeitet. Ich habe mich rundum wohlgefühlt. Die Haarentfernung ging schnell und das Ergebnis ist makellos. Vielen Dank für den tollen Service, 5 Sterne!`,
  },

  {
    name: "Данила Сергеев",
    rating: 5,
    text: `Ich war zur Gesichtsreinigung hier und bin sehr zufrieden. Die Behandlung war professionell, gründlich und gleichzeitig angenehm. Alles wurde gut erklärt, und ich habe mich die ganze Zeit wohlgefühlt. Mein Hautbild hat sich sichtbar verbessert und meine Haut fühlt sich viel frischer an.

Klare Empfehlung – ich komme gerne wieder!`,
  },

  {
    name: "Наталья Левчук",
    rating: 5,
    text: `Ich bin bereits seit längerer Zeit Kundin bei Valeria und jedes Mal rundum zufrieden. Die Waxing-Behandlungen und die Masken sind ausgezeichnet und werden mit viel Sorgfalt und Professionalität durchgeführt. Man spürt, mit wie viel Herz und Liebe Valeria ihre Arbeit macht.

Vielen herzlichen Dank, liebe Valeria, für deine wunderbare Betreuung und den Service auf höchstem Niveau. Ich komme immer wieder sehr gerne zu dir und kann dich von Herzen weiterempfehlen. 🌷`,
  },

  {
    name: "Kotelnykova Sofiia",
    rating: 5,
    text: `Meine Mutter geht schon lange zu Valeria zur Behandlung und war immer sehr zufrieden, deshalb hat sie sie mir auch empfohlen. Ich habe mir dort die Haare entfernen lassen und war begeistert. Valeria ist eine echte Expertin. Alles wurde sorgfältig, sanft und effizient durchgeführt, und ich habe mich während der Behandlung sehr wohl gefühlt. Vielen Dank für die einfühlsame Behandlung! Ich komme auf jeden Fall wieder und werde sie gerne weiterempfehlen ✨✨❤️❤️❤️`,
  },

  {
    name: "Galina Maslennikova",
    rating: 5,
    text: `Valeriia is soooo attentive, caring, professional and passionate about her cosmetology job! We are almost 3 years together and I'm so pleased by any service she has done to me. Totally recommended!`,
  },

  {
    name: "Viktoriia Nikolcheva",
    rating: 5,
    text: `Ich war schon mehrmals für verschiedene Behandlungen dort (Epilation, Gesichtsreinigung und andere kosmetische Behandlungen). Jedes Mal war ich sehr zufrieden. Sie arbeitet sehr professionell und freundlich. Ich kann sie nur weiterempfehlen – das Ergebnis ist jedes Mal besser als erwartet.`,
  },

  {
    name: "Oksanka Zahurska",
    rating: 5,
    text: `Ich habe bei Valeriia einen Kurs zur Carboxytherapie fürs Gesicht gemacht und bin mit dem Ergebnis sehr zufrieden. Besonders hervorheben möchte ich ihre Professionalität und ihre einfühlsame Art🌸

Man kann sich einfach entspannen und einer echten Profi vertrauen🌸`,
  },

  {
    name: "Marta Klimenko",
    rating: 5,
    text: `Очень понравилась чистка лица и пилинг 🥰 Косметолог всё подробно объяснила, была очень аккуратной и внимательной. Во время процедуры чувствовала себя комфортно. После чистки кожа стала заметно свежее, чище и мягче ✨ Спасибо большое за заботу и приятную атмосферу! Обязательно приду ещё ❤️`,
  },

  {
    name: "Maru",
    rating: 5,
    text: `I did a eyebrow lamination and I'm happy with the results. Valeria was kind and asked me through the whole process if everything was ok and didn't feel like she was in a rush, like I experienced at other places. I definitely recommend her service! Thank you Valeria!`,
  },

  {
    name: "Том",
    rating: 5,
    text: `Ich war bei Valeria zum Waxing und bin sehr zufrieden. Sie arbeitet sehr professionell, sorgfältig und hygienisch. Sie ist freundlich, nimmt sich Zeit und sorgt dafür, dass man sich wohlfühlt. Das Ergebnis ist perfekt – ich komme gerne wieder. Vielen Dank, Valeria!`,
  },

  {
    name: "Jara Wilensky",
    rating: 5,
    text: `Ich gehe seit über einem Jahr zu Terminen mit Valeriia, weil sie die beste Arbeit leistet, und ich gehe immer noch zu ihr, obwohl ich weiter weggezogen bin, weil niemand sonst so gut ist wie sie.`,
  },

  {
    name: "Murielle",
    rating: 5,
    text: `Ich habe mich sehr wohl gefühlt bei Valeriia. Sie hat die Behandlung auf die Bedürfnisse meiner Haut angepasst und mir auch Vorschläge für preiswerte Kosmetikartikel gegeben. Ich kann sie nur weiterempfehlen.`,
  },

  {
    name: "Катерина Колесник",
    rating: 5,
    text: `Я недавно познакомилась с Валерией, хотя мои подруги уже несколько лет пользуются услугами Валерии как косметолога и очень ее рекомендовали. 💆🏼‍♀️

Я была на сеансе восковой депиляции и очень довольна! Все прошло быстро, качественно, чистота и сервис на высшем уровне. 👌🏻🌸

Валерия очень приятный собеседник, очень благодарна за качественное обслуживание и обязательно прийду еще🥰`,
  },

  {
    name: "Nina Topekha",
    rating: 5,
    text: `Ich hatte eine wunderbare Erfahrung mit Valeriia! Sie ist sehr professionell, aufmerksam und hat dafür gesorgt, dass ich mich während meines Termins rundum wohlgefühlt habe.

Ich bin mit dem Ergebnis sehr zufrieden und werde auf jeden Fall wiederkommen. Absolut empfehlenswert!`,
  },

  {
    name: "Sami D.",
    rating: 5,
    text: `Ich war heute zur Gesichtsreinigung hier und bin wirklich sehr zufrieden. Sie hat sich unglaublich viel Mühe gegeben, sehr sorgfältig und professionell gearbeitet und sich viel Zeit für mich genommen. Man merkt sofort, dass ihr ihre Arbeit wichtig ist. Meine Haut fühlt sich danach super sauber, frisch und gepflegt an. Vielen Dank für die tolle Behandlung – ich komme sehr gerne wieder und kann sie von Herzen weiterempfehlen!`,
  },
];

export default function ReviewsSection({
  t,
  googleReviewsUrl,
}: Props) {
  const sliderRef = useRef<HTMLDivElement>(null);

  const [isPaused, setIsPaused] = useState(false);
  const pauseRef = useRef(false);
  const isDraggingRef = useRef(false);
const dragStartXRef = useRef(0);
const dragStartScrollRef = useRef(0);
const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    pauseRef.current = isPaused;
  }, [isPaused]);

  /*
   * Automatic horizontal movement.
   *
   * Important:
   * We scroll a real overflow container rather than moving
   * the cards with CSS transform. This means mouse wheel,
   * touch/swipe and the buttons can all work together.
   */
  useEffect(() => {
    const slider = sliderRef.current;

    if (!slider) return;

    let animationFrameId = 0;
    let previousTime = performance.now();

    const animate = (time: number) => {
      const element = sliderRef.current;

      if (!element) return;

      const delta = Math.min(time - previousTime, 50);
      previousTime = time;

      if (!pauseRef.current) {
        element.scrollLeft += delta * 0.022;

        /*
         * There are two identical copies of the review list.
         * Once we reach the middle, jump to the same position
         * in the first copy. Visually this is seamless.
         */
        const resetPoint = element.scrollWidth / 2;

        if (element.scrollLeft >= resetPoint) {
          element.scrollLeft -= resetPoint;
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const duplicatedReviews = [...reviews, ...reviews];

  const pauseTemporarily = (delay = 1200) => {
  pauseRef.current = true;

  if (resumeTimeoutRef.current) {
    clearTimeout(resumeTimeoutRef.current);
  }

  resumeTimeoutRef.current = setTimeout(() => {
    if (!isDraggingRef.current) {
      pauseRef.current = false;
      setIsPaused(false);
    }
  }, delay);
};

const handlePointerDown = (
  event: React.PointerEvent<HTMLDivElement>
) => {
  const slider = sliderRef.current;

  if (!slider) return;

  isDraggingRef.current = true;
  pauseRef.current = true;

  dragStartXRef.current = event.clientX;
  dragStartScrollRef.current = slider.scrollLeft;

  slider.setPointerCapture(event.pointerId);
};

const handlePointerMove = (
  event: React.PointerEvent<HTMLDivElement>
) => {
  const slider = sliderRef.current;

  if (!slider || !isDraggingRef.current) return;

  const distance = event.clientX - dragStartXRef.current;

  slider.scrollLeft = dragStartScrollRef.current - distance;
};

const handlePointerEnd = (
  event: React.PointerEvent<HTMLDivElement>
) => {
  const slider = sliderRef.current;

  isDraggingRef.current = false;

  if (slider?.hasPointerCapture(event.pointerId)) {
    slider.releasePointerCapture(event.pointerId);
  }

  pauseTemporarily(1000);
};

const scrollReviews = (direction: "left" | "right") => {
  const slider = sliderRef.current;

  if (!slider) return;

  const card = slider.querySelector<HTMLElement>("[data-review-card]");

  const amount = card
    ? card.offsetWidth + 20
    : Math.min(slider.clientWidth * 0.8, 420);

  pauseTemporarily(1400);

  slider.scrollBy({
    left: direction === "left" ? -amount : amount,
    behavior: "smooth",
  });
};

  return (
    <section
      id="reviews"
      className="relative overflow-hidden bg-[#FAF9F6]"
    >
      {/* ================= HEADER ================= */}
      <div className="mx-auto max-w-360 px-6 pt-20 sm:px-10 md:pt-24 lg:px-12 lg:pt-28 xl:px-20">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          {/* LEFT */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.reviews.eyebrow}
              </p>
            </div>

            <h2 className="max-w-162.5 text-[36px] font-semibold leading-[1.08] tracking-[-0.03em] text-[#171717] sm:text-[44px] lg:text-[50px]">
              {t.reviews.title}
            </h2>
          </div>

          {/* RIGHT */}
          <div className="lg:flex lg:justify-end">
            <div className="max-w-125">
              <p className="text-[15px] leading-[1.8] text-[#666] sm:text-[16px]">
                {t.reviews.text}
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={17}
                      strokeWidth={1.4}
                      className="fill-[#D5AA1B] text-[#D5AA1B]"
                    />
                  ))}
                </div>

                <div className="hidden h-5 w-px bg-black/10 sm:block" />

                <div>
                  <p className="text-[12px] font-semibold text-[#171717]">
                    {t.reviews.ratingLabel}
                  </p>

                  <p className="mt-0.5 text-[11px] text-black/40">
                    {t.reviews.googleLabel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= SLIDER ================= */}
      <div className="relative mt-14 lg:mt-16">
        {/* controls */}
        <div className="mx-auto mb-5 flex max-w-360 items-center justify-between px-6 sm:px-10 lg:px-12 xl:px-20">
          <div className="flex items-center gap-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-black/35">
              
            </span>

            <span className="text-[10px] uppercase tracking-[0.16em] text-black/30">
             
            </span>
          </div>

          <div className="hidden items-center gap-2 sm:flex">
            <button
              type="button"
              onClick={() => scrollReviews("left")}
              aria-label="Previous review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/9 bg-white text-[#171717] transition-all duration-300 hover:border-[#D5AA1B]/40 hover:text-[#A77F13]"
            >
              <ArrowLeft size={17} strokeWidth={1.5} />
            </button>

            <button
              type="button"
              onClick={() => setIsPaused((current) => !current)}
              aria-label={isPaused ? "Play reviews" : "Pause reviews"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/9 bg-white text-[#171717] transition-all duration-300 hover:border-[#D5AA1B]/40 hover:text-[#A77F13]"
            >
              {isPaused ? (
                <Play size={15} strokeWidth={1.5} />
              ) : (
                <Pause size={15} strokeWidth={1.5} />
              )}
            </button>

            <button
              type="button"
              onClick={() => scrollReviews("right")}
              aria-label="Next review"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-black/9 bg-white text-[#171717] transition-all duration-300 hover:border-[#D5AA1B]/40 hover:text-[#A77F13]"
            >
              <ArrowRight size={17} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* left fade */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-16 z-10 hidden w-20 bg-linear-to-r from-[#FAF9F6] via-[#FAF9F6]/70 to-transparent lg:block" />

        {/* right fade */}
        <div className="pointer-events-none absolute bottom-0 right-0 top-16 z-10 hidden w-20 bg-linear-to-l from-[#FAF9F6] via-[#FAF9F6]/70 to-transparent lg:block" />

        {/* scroll container */}
        <div
  ref={sliderRef}
  onPointerDown={handlePointerDown}
  onPointerMove={handlePointerMove}
  onPointerUp={handlePointerEnd}
  onPointerCancel={handlePointerEnd}
  onMouseEnter={() => {
    pauseRef.current = true;
  }}
  onMouseLeave={() => {
    if (!isDraggingRef.current && !isPaused) {
      pauseRef.current = false;
    }
  }}
  className="
    flex min-h-97.5
    cursor-grab gap-5
    overflow-x-auto
    px-6 pb-7
    select-none
    active:cursor-grabbing
    sm:px-10
    lg:px-12
    xl:px-20
    [&::-webkit-scrollbar]:hidden
  "
  style={{
    scrollbarWidth: "none",
    WebkitOverflowScrolling: "touch",
    touchAction: "pan-y",
  }}
>
          {duplicatedReviews.map((review, index) => (
            <article
              key={`${review.name}-${index}`}
              data-review-card
              className="
                flex
                h-92.5
                w-[86vw]
                max-w-97.5
                flex-none
                flex-col
                rounded-[26px]
                border border-black/[0.07]
                bg-white
                p-7
                shadow-[0_8px_35px_rgba(0,0,0,0.025)]
                transition-all duration-300
                hover:-translate-y-1
                hover:border-[#D5AA1B]/25
                hover:shadow-[0_20px_55px_rgba(0,0,0,0.06)]
                sm:w-97.5
                sm:p-8
              "
            >
              {/* top */}
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="text-[15px] font-semibold text-[#171717]">
                    {review.name}
                  </p>

                  <div className="mt-3 flex items-center gap-1">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={13}
                        strokeWidth={1.4}
                        className={
                          starIndex < review.rating
                            ? "fill-[#D5AA1B] text-[#D5AA1B]"
                            : "text-black/10"
                        }
                      />
                    ))}
                  </div>
                </div>

                <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-[#FAF9F6]">
                  <Quote
                    size={19}
                    strokeWidth={1.2}
                    className="text-[#D5AA1B]"
                  />
                </div>
              </div>

              {/* review */}
              <div className="relative mt-6 flex-1 overflow-hidden">
                <p className="whitespace-pre-line text-[14px] leading-[1.75] text-[#555]">
                  {review.text}
                </p>

                {/* fade long reviews */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-linear-to-t from-white via-white/95 to-transparent" />
              </div>

              {/* bottom */}
              <div className="mt-5 flex items-center justify-between border-t border-black/6 pt-5">
                <span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/35">
                  Google Review
                </span>

                <div className="flex items-center gap-1.5">
                  <Star
                    size={11}
                    strokeWidth={1.3}
                    className="fill-[#D5AA1B] text-[#D5AA1B]"
                  />

                  <span className="text-[11px] font-semibold text-[#171717]">
                    5.0
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* mobile hint */}
        <div className="mt-1 flex justify-center sm:hidden">
          <div className="flex items-center gap-3 text-[9px] font-medium uppercase tracking-[0.18em] text-black/30">
            <ArrowLeft size={12} strokeWidth={1.4} />
            <span>Swipe</span>
            <ArrowRight size={12} strokeWidth={1.4} />
          </div>
        </div>
      </div>

      {/* ================= CTA ================= */}
      <div className="mx-auto max-w-360 px-6 pb-20 pt-10 sm:px-10 md:pb-24 lg:px-12 lg:pb-28 xl:px-20">
        <div className="flex justify-center">
          <a
            href={googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-white px-7 py-4 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#171717] transition-all duration-300 hover:border-[#D5AA1B]/40 hover:text-[#A77F13]"
          >
            {t.reviews.button}

            <ExternalLink size={14} strokeWidth={1.5} />
          </a>
        </div>
      </div>
    </section>
  );
}