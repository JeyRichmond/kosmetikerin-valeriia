"use client";

import { motion } from "framer-motion";

export default function PromoSection() {
  return (
    <section className="border-b border-gray-100 bg-white">
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-12">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-sm border border-gray-100"
          style={{
            backgroundImage: "url('/back5.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* overlay */}
          <div className="absolute inset-0 bg-black/1" />

          <div className="relative p-8 sm:p-12 text-black/90">
            <div className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.3em]">
              <span className="w-8 h-px bg-black/70" />
              <span>Aktion des Monats</span>
            </div>

            <h2 className="mt-6 text-2xl sm:text-3xl font-semibold">
              Brow + Lash Combo
            </h2>

            <p className="mt-3 text-black/90 text-sm sm:text-base max-w-md">
              100 CHF statt 180 CHF
              <br />
              Nur von 1. bis 31. März!
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}