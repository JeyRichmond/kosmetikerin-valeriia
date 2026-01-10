"use client";

import React, { useState } from "react";
import { useBooking } from "@/components/useBooking";

type Item = {
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  duration: string;
  price: string;
};

type Props = {
  title: string;
  subtitle?: string;
  description?: string;
  items: Item[];
  bookLabel: string;
};

export default function PriceAccordion({
  title,
  subtitle,
  description,
  items,
  bookLabel,
}: Props) {
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
<section className="max-w-6xl mx-auto px-4 py-3">
  <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-[0_6px_20px_rgba(0,0,0,0.04)]">

    {/* CATEGORY HEADER */}
    <button
      onClick={() => setOpen(v => !v)}
      className="w-full px-5 py-4 text-left hover:bg-gray-50 transition"
    >
      <h3 className="text-[13px] md:text-sm font-semibold uppercase tracking-[0.22em] text-(--brand-dark)">
        {title}
      </h3>

      {subtitle && (
        <p className="mt-1.5 text-[13px] text-(--brand-gold) font-medium">
          {subtitle}
        </p>
      )}

      {description && (
        <div className="mt-2 space-y-1.5 text-[13px] text-gray-600 max-w-3xl leading-relaxed">
          {description.split("\n\n").map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      )}

      <div className="mt-2 text-[11px] text-gray-400">
        {open ? "▲ Weniger anzeigen" : "▼ Mehr anzeigen"}
      </div>
    </button>

    {/* CONTENT */}
    <div
      className={`grid transition-all duration-500 ease-in-out ${
        open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
      }`}
    >
      <div className="overflow-hidden divide-y divide-gray-100 bg-gray-50/40">
        {items.map((item, idx) => (
          <ProcedureRow
            key={idx}
            item={item}
            bookLabel={bookLabel}
            openBooking={openBooking}
          />
        ))}
      </div>
    </div>

  </div>
</section>
  );
}

/* ---------------------------------- */
/* PROCEDURE ROW */
/* ---------------------------------- */

function ProcedureRow({
  item,
  bookLabel,
  openBooking,
}: {
  item: Item;
  bookLabel: string;
  openBooking: () => void;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="px-6 py-5 hover:bg-white transition">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

        <div className="max-w-3xl">
          <h4 className="text-sm font-semibold text-(--brand-dark)">
            {item.name}
          </h4>

          {item.shortDescription && (
            <p className="mt-1 text-sm text-gray-600">
              {item.shortDescription}
            </p>
          )}

          {item.fullDescription && (
            <>
              {expanded && (
                <div className="mt-4 space-y-3 text-sm text-gray-600 leading-relaxed">
                  {item.fullDescription.split("\n\n").map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              )}

              <button
                onClick={() => setExpanded((v) => !v)}
                className="mt-2 text-xs text-(--brand-gold) hover:underline"
              >
                {expanded ? "Weniger anzeigen" : "Mehr lesen"}
              </button>
            </>
          )}

          <div className="mt-2 text-xs text-gray-400">
            {item.duration}
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <div className="text-sm font-semibold">
            {item.price}
          </div>
          <button
            onClick={openBooking}
            className="text-xs bg-(--brand-gold) text-white px-4 py-2 rounded-full hover:opacity-90"
          >
            {bookLabel}
          </button>
        </div>

      </div>
    </div>
  );
}
