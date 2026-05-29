"use client";
import { useState } from "react";
import { TempEntry } from "../data/temperatures";

const CATEGORY_COLOR: Record<string, string> = {
  Delicate: "text-[#60a5fa]",
  Gentle: "text-[#34d399]",
  Medium: "text-[#fbbf24]",
  Hot: "text-[#f97316]",
  Extreme: "text-[#e8410a]",
};

const CATEGORY_BG: Record<string, string> = {
  Delicate: "bg-[#60a5fa]/10 border-[#60a5fa]/20",
  Gentle: "bg-[#34d399]/10 border-[#34d399]/20",
  Medium: "bg-[#fbbf24]/10 border-[#fbbf24]/20",
  Hot: "bg-[#f97316]/10 border-[#f97316]/20",
  Extreme: "bg-[#e8410a]/10 border-[#e8410a]/20",
};

const BAR_COLOR: Record<string, string> = {
  Delicate: "bg-[#60a5fa]",
  Gentle: "bg-[#34d399]",
  Medium: "bg-[#fbbf24]",
  Hot: "bg-[#f97316]",
  Extreme: "bg-[#e8410a]",
};

export default function TempCard({ entry }: { entry: TempEntry }) {
  const [open, setOpen] = useState(false);
  const pct = Math.min(100, Math.max(2, ((entry.tempF - 80) / (450 - 80)) * 100));

  return (
    <div
      className={`bg-[#111111] rounded-sm overflow-hidden transition-colors ${open ? "" : "hover:bg-[#161616]"}`}
    >
      {/* Always-visible row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-5 pt-5 pb-4 flex flex-col gap-3 focus:outline-none group"
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-sm font-semibold leading-snug group-hover:text-[#e8e8e8] transition-colors">
            {entry.task}
          </h3>
          <div className="shrink-0 text-right flex items-center gap-3">
            <span className={`text-lg font-semibold tabular-nums ${CATEGORY_COLOR[entry.category]}`}>
              {entry.tempF}°F
            </span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              className={`shrink-0 text-[#5a5a5a] transition-transform duration-200 ${open ? "rotate-180" : ""}`}
            >
              <path d="M2.5 5l4.5 4 4.5-4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Clickable bar */}
        <div className="w-full h-1 bg-[#1c1c1c] rounded-full overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${BAR_COLOR[entry.category]} ${open ? "opacity-100" : "opacity-60 group-hover:opacity-100"}`}
            style={{ width: `${pct}%` }}
          />
        </div>

        {!open && (
          <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#5a5a5a]">
            {entry.tempC}°C · click to expand
          </p>
        )}
      </button>

      {/* Expanded content */}
      {open && (
        <div className="px-5 pb-5 flex flex-col gap-3">
          <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#5a5a5a]">{entry.tempC}°C</p>
          <p className="text-xs text-[#a0a0a0] leading-relaxed">{entry.why}</p>
          <div className={`border rounded-sm px-3 py-2.5 ${CATEGORY_BG[entry.category]}`}>
            <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#5a5a5a] mb-1">Impulse tip</p>
            <p className="text-xs text-[#a0a0a0] leading-relaxed">{entry.tips}</p>
          </div>
        </div>
      )}
    </div>
  );
}
