"use client";
import { useState } from "react";
import { temperatures, TempEntry } from "../data/temperatures";
import TempCard from "./TempCard";

const CATEGORIES = ["Delicate", "Gentle", "Medium", "Hot", "Extreme"] as const;
type Category = typeof CATEGORIES[number];

const CATEGORY_RANGE: Record<string, string> = {
  Delicate: "88–175°F",
  Gentle:   "175–212°F",
  Medium:   "300–325°F",
  Hot:      "350–400°F",
  Extreme:  "450°F",
};

const CATEGORY_COLOR: Record<string, string> = {
  Delicate: "text-[#60a5fa]",
  Gentle:   "text-[#34d399]",
  Medium:   "text-[#ca8a04]",
  Hot:      "text-[#ea580c]",
  Extreme:  "text-[#dc2626]",
};

const CATEGORY_BAR: Record<string, string> = {
  Delicate: "bg-[#60a5fa]",
  Gentle:   "bg-[#34d399]",
  Medium:   "bg-[#fbbf24]",
  Hot:      "bg-[#f97316]",
  Extreme:  "bg-[#ef4444]",
};

const CATEGORY_ACTIVE_BORDER: Record<string, string> = {
  Delicate: "border-b-2 border-[#60a5fa]",
  Gentle:   "border-b-2 border-[#34d399]",
  Medium:   "border-b-2 border-[#fbbf24]",
  Hot:      "border-b-2 border-[#f97316]",
  Extreme:  "border-b-2 border-[#ef4444]",
};

export default function TemperatureGuidePage() {
  const [active, setActive] = useState<Category | null>(null);

  const grouped = CATEGORIES.reduce<Record<string, TempEntry[]>>((acc, cat) => {
    acc[cat] = temperatures.filter((t) => t.category === cat).sort((a, b) => a.tempF - b.tempF);
    return acc;
  }, {} as Record<string, TempEntry[]>);

  const visibleCategories = active ? [active] : CATEGORIES;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.25em] uppercase text-[#205C49] mb-3">02</p>
      <h1 className="font-heading text-3xl md:text-4xl font-light mb-3 text-[#1F2E2D]">Temperature Guide</h1>
      <p className="text-[#1F2E2D]/50 text-sm max-w-xl mb-4">
        Every cooking task has an ideal temperature. The Impulse holds yours to within ±1°F.
        Click a category to filter.
      </p>

      {/* Clickable scale legend */}
      <div className="flex items-stretch gap-0 mb-10 mt-8 bg-white border border-[#1F2E2D]/10 rounded-[10px] overflow-x-auto overflow-y-hidden max-w-2xl">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          const isDimmed = active !== null && !isActive;
          return (
            <button
              key={cat}
              onClick={() => setActive(isActive ? null : cat)}
              className={`shrink-0 flex-1 min-w-[72px] text-left px-3 py-4 transition-all focus:outline-none group border-r last:border-r-0 border-[#1F2E2D]/8 ${
                isDimmed ? "opacity-30" : "opacity-100"
              } ${isActive ? CATEGORY_ACTIVE_BORDER[cat] : ""}`}
              title={isActive ? "Show all" : `Filter: ${cat}`}
            >
              <div className={`h-0.5 w-full rounded-full mb-2.5 ${CATEGORY_BAR[cat]} ${isActive ? "opacity-100" : "opacity-40 group-hover:opacity-80"} transition-opacity`} />
              <p className={`text-[0.55rem] tracking-[0.15em] uppercase font-medium ${CATEGORY_COLOR[cat]}`}>{cat}</p>
              <p className="text-[0.5rem] text-[#1F2E2D]/30 mt-0.5 hidden sm:block">{CATEGORY_RANGE[cat]}</p>
            </button>
          );
        })}
      </div>

      {/* Active filter pill */}
      {active && (
        <div className="flex items-center gap-3 mb-8">
          <span className={`text-xs font-medium ${CATEGORY_COLOR[active]}`}>
            {active} · {CATEGORY_RANGE[active]}
          </span>
          <button
            onClick={() => setActive(null)}
            className="text-[0.6rem] tracking-widest uppercase text-[#1F2E2D]/40 hover:text-[#1F2E2D] transition-colors border border-[#1F2E2D]/15 px-2 py-0.5 rounded-md"
          >
            Clear
          </button>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-14">
        {visibleCategories.map((cat) => (
          <section key={cat}>
            <div className="flex items-baseline gap-4 mb-5 border-b border-[#1F2E2D]/10 pb-4">
              <h2 className={`font-heading text-xl font-light ${CATEGORY_COLOR[cat]}`}>{cat}</h2>
              <span className="text-sm text-[#1F2E2D]/30">{CATEGORY_RANGE[cat]}</span>
              <span className="text-xs text-[#1F2E2D]/25 ml-auto">{grouped[cat].length} entries</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3">
              {grouped[cat].map((entry) => (
                <TempCard key={entry.task} entry={entry} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
