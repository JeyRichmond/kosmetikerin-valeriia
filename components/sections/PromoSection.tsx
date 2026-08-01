"use client";

import { motion } from "framer-motion";

export default function PromoSection() {
  const bookingLink = "https://kosmetikerinvaleriia.setmore.com/book?step=additional-products&products=c75f6baa-4b0b-4395-8773-76c2a1648341&type=service&staff=0101b36a-e3f3-4441-a43d-3e609a6d6fd7&staffSelected=false";

  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8 md:py-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100 min-h-55 flex items-center"
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('/back5.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          {/* Мягкий светлый градиент для читаемости на любом экране */}
          <div className="absolute inset-0 bg-white/60 md:bg-white/40" />

          <div className="relative p-6 sm:p-10 w-full flex flex-col md:flex-row md:items-center justify-between gap-6">
            
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-gray-600 font-medium">
                <span className="w-6 h-px bg-gray-400" />
                <span>Aktion des Monats &quot;August&quot; </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-semibold text-gray-900 leading-tight">
                • Nadelfrei <span className="text-(--brand-gold)">Carboxytherapie</span>
              </h2>

              <h2 className="text-1xl sm:text-2xl font-semibold text-gray-900 leading-tight">
                100 CHF <span className="text-(--brand-gold)">STATT 130 CHF</span>
              </h2>

              <p className="text-gray-700 text-sm sm:text-base">
                {/* <span className="font-bold">100 CHF</span> statt <span className="line-through opacity-60">180 CHF</span> */}
                <span className="block text-[11px] text-gray-500 uppercase tracking-tighter mt-1 italic">
                  *Nur von 1. bis 31. August!
                </span>
              </p>
            </div>

            <a
              href={bookingLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-black text-white text-[11px] uppercase tracking-[0.15em] px-8 py-3.5 rounded-full hover:bg-(--brand-gold) transition-all duration-300 shadow-md active:scale-95 text-center"
            >
              Jetzt buchen
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}