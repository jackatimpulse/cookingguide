"use client";
import { useState } from "react";
import { TempEntry } from "../data/temperatures";

const CATEGORY_COLOR: Record<string, string> = {
  Delicate: "text-[#60a5fa]",
  Gentle:   "text-[#34d399]",
  Medium:   "text-[#ca8a04]",
  Hot:      "text-[#ea580c]",
  Extreme:  "text-[#dc2626]",
};

const CATEGORY_BG: Record<string, string> = {
  Delicate: "bg-blue-50 border-blue-200",
  Gentle:   "bg-emerald-50 border-emerald-200",
  Medium:   "bg-amber-50 border-amber-200",
  Hot:      "bg-orange-50 border-orange-200",
  Extreme:  "bg-red-50 border-red-200",
};

const BAR_COLOR: Record<string, string> = {
  Delicate: "bg-[#60a5fa]",
  Gentle:   "bg-[#34d399]",
  Medium:   "bg-[#fbbf24]",
  Hot:      "bg-[#f97316]",
  Extreme:  "bg-[#ef4444]",
};

export default function TempCard({ entry }: { entry: TempEntry }) {
  const [open, setOpen] = useState(false);
  const pct = Math.min(100, Math.max(2, ((entry.tempF - 80) / (450 - 80)) * 100));

  return (
    <div className={`bg-white border rounded-[10px] overflow-hidden transition-all ${open ? "border-[#1F2E2D]/15 shadow-md" : "border-[#1F2E2D]/10 hover:border-[#1F2E2D]/20 hover:shadow-sm"}`}>
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 pt-5 pb-4 flex flex-col gap-3 focus:outline-none group"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-heading text-base font-light text-[#1F2E2D] group-hover:text-[#205C49] transition-colors leading-snug">
            {entry.task}
          </h3>
          <div className="shrink-0 flex items-center gap-2">
            <span className={`text-lg font-light tabular-nums font-heading ${CATEGORY_COLOR[entry.category]}`}>
              {entry.tempF}°
            </span>
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              className={`shrink-0 text-[#1F2E2D]/20 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="w-full h-1 bg-[#1F2E2D]/8 rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-opacity duration-200 ${BAR_COLOR[entry.category]} ${open ? "opacity-100" : "opacity-50 group-hover:opacity-80"}`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {!open && (
          <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#1F2E2D]/30">
            {entry.tempC}°C · tap to expand
          </p>
        )}
      </button>

      {open && (
        <div className="px-5 pb-5 flex flex-col gap-3">
          <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#1F2E2D]/30">{entry.tempF}°F · {entry.tempC}°C</p>
          <p className="text-sm text-[#1F2E2D]/60 leading-relaxed">{entry.why}</p>
          <div className={`border rounded-md px-3 py-2.5 ${CATEGORY_BG[entry.category]}`}>
            <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#1F2E2D]/40 mb-1">Impulse tip</p>
            <p className="text-xs text-[#1F2E2D]/60 leading-relaxed">{entry.tips}</p>
          </div>
        </div>
      )}
    </div>
  );
}
