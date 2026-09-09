import Image from "next/image";

type Props = {
  t: {
    about: {
  eyebrow: string;
  title: string;
  quote: string;
  text: string;
};
  };
};

export default function AboutSection({ t }: Props) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#FAF9F6]"
    >
      <div className="mx-auto max-w-360 px-6 py-20 sm:px-10 md:py-24 lg:px-12 lg:py-28 xl:px-20">
        <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20 xl:gap-28">
          {/* ================= IMAGE ================= */}
          <div className="relative">
            {/* decorative line */}
            <div className="absolute -left-5 top-12 hidden h-45 w-px bg-[#D5AA1B]/30 lg:block" />

            <div className="relative mx-auto max-w-147.5 lg:mx-0">
              <div className="relative aspect-4/5 overflow-hidden rounded-[30px] bg-[#EEEAE3]">
                <Image
                  src="/Kosmetikerin_Valeriia_001.jpg"
                  alt="Valeriia – Kosmetikerin in Zürich"
                  fill
                  className="object-cover transition-transform duration-1200 hover:scale-[1.015]"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                />
              </div>
            </div>
          </div>

          {/* ================= CONTENT ================= */}
          <div className="pt-4 lg:pt-0">
            {/* eyebrow */}
            <div className="mb-6 flex items-center gap-3">
              <span className="h-px w-8 bg-[#D5AA1B]" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#A77F13] sm:text-[11px]">
                {t.about.eyebrow}
              </p>
            </div>

            {/* title */}
            <h2 className="max-w-162.5 text-[38px] font-semibold leading-[1.08] tracking-[-0.035em] text-[#171717] sm:text-[46px] lg:text-[52px]">
              {t.about.title}
            </h2>

            {/* quote */}
            <div className="mt-8 border-l border-[#D5AA1B]/45 pl-6 sm:pl-8">
              <p className="max-w-145 text-[17px] font-medium leading-[1.7] tracking-[-0.01em] text-[#2A2A2A] sm:text-[19px]">
                {t.about.quote}
              </p>
            </div>

            {/* about text */}
            <div className="mt-8 max-w-152.5">
              <p className="whitespace-pre-line text-[14px] leading-[1.9] text-[#666] sm:text-[15.5px]">
                {t.about.text}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}