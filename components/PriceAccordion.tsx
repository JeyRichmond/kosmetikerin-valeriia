"use client";

import React, { useState } from "react";
import { Minus, Plus } from "lucide-react";
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
  readMore: string;
  readLess: string;
};

export default function PriceAccordion({
  title,
  subtitle,
  description,
  items,
  bookLabel,
  readMore,
  readLess,
}: Props) {
  const [open, setOpen] = useState(false);
  const { openBooking } = useBooking();

  return (
    <div className="overflow-hidden">
      {/* CATEGORY HEADER */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="group/header w-full px-6 py-5 text-left transition-colors duration-300 hover:bg-white sm:px-8 sm:py-6 lg:px-9"
      >
        <div className="flex items-start justify-between gap-6">
          <div className="max-w-225">
            <h3 className="text-[14px] font-semibold uppercase tracking-[0.18em] text-[#171717] sm:text-[15px]">
              {title}
            </h3>

            {subtitle && (
              <p className="mt-2 text-[13px] font-medium leading-relaxed text-[#B98A16] sm:text-[14px]">
                {subtitle}
              </p>
            )}

            {description && (
              <div className="mt-3 max-w-205 space-y-2 text-[13px] leading-[1.7] text-[#666] sm:text-[14px]">
                {description.split("\n\n").map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}
          </div>

          <div
            className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
              open
                ? "border-[#D5AA1B] bg-[#D5AA1B] text-[#111111]"
                : "border-black/10 bg-white text-[#171717] group-hover/header:border-[#D5AA1B]/50"
            }`}
          >
            {open ? (
              <Minus size={18} strokeWidth={1.5} />
            ) : (
              <Plus size={18} strokeWidth={1.5} />
            )}
          </div>
        </div>
      </button>

      {/* CONTENT */}
      <div
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-in-out ${
          open
            ? "grid-rows-[1fr] opacity-100"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-black/6 bg-white">
            {items.map((item, index) => (
              <ProcedureRow
                key={index}
                item={item}
                bookLabel={bookLabel}
                openBooking={openBooking}
                isLast={index === items.length - 1}
                readMore={readMore}
                readLess={readLess}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------------------------------- */
/* PROCEDURE ROW                      */
/* ---------------------------------- */

function ProcedureRow({
  item,
  bookLabel,
  openBooking,
  isLast,
  readMore,
  readLess,
}: {
  item: Item;
  bookLabel: string;
  readMore: string;
  readLess: string;
  openBooking: () => void;
  isLast: boolean;
}) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`px-6 py-5 transition-colors duration-300 hover:bg-[#FAF9F6]/70 sm:px-8 sm:py-6 lg:px-9 ${
        !isLast ? "border-b border-black/6" : ""
      }`}
    >
      <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
        {/* PROCEDURE INFO */}
        <div className="max-w-190">
          <h4 className="text-[15px] font-semibold tracking-[-0.01em] text-[#171717] sm:text-[16px]">
            {item.name}
          </h4>

          {item.shortDescription && (
            <p className="mt-2 text-[13px] leading-[1.65] text-[#666] sm:text-[14px]">
              {item.shortDescription}
            </p>
          )}

          {item.fullDescription && (
            <>
              <div
                className={`grid transition-[grid-template-rows,opacity] duration-300 ${
                  expanded
                    ? "mt-4 grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="space-y-3 text-[13px] leading-[1.7] text-[#666] sm:text-[14px]">
                    {item.fullDescription
                      .split("\n\n")
                      .map((paragraph, index) => (
                        <p key={index}>{paragraph}</p>
                      ))}
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setExpanded((v) => !v)}
                className="mt-3 text-[11px] font-semibold uppercase tracking-[0.12em] text-[#A77F13] transition-opacity hover:opacity-60"
              >
                {expanded ? readLess : readMore}
              </button>
            </>
          )}

          <div className="mt-3 text-[12px] font-medium text-[#666]">
            {item.duration}
          </div>
        </div>

        {/* PRICE + BOOKING */}
        <div className="flex items-center justify-between gap-5 border-t border-black/6 pt-5 md:min-w-57.5 md:justify-end md:border-0 md:pt-0">
          <div className="whitespace-nowrap text-[16px] font-semibold text-[#171717]">
            {item.price}
          </div>

          <button
            type="button"
            onClick={openBooking}
            className="whitespace-nowrap rounded-full bg-[#D5AA1B] px-5 py-3 text-[11px] font-semibold text-[#111111] transition-all duration-300 hover:bg-[#B98A16]"
          >
            {bookLabel}
          </button>
        </div>
      </div>
    </div>
  );
}