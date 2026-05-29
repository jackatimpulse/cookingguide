"use client";
import { useState } from "react";
import { temperatures, TempEntry } from "../data/temperatures";
import TempCard from "./TempCard";

const CATEGORIES = ["Delicate", "Gentle", "Medium", "Hot", "Extreme"] as const;
type Category = typeof CATEGORIES[number];

const CATEGORY_RANGE: Record<string, string> = {
  Delicate: "88–175°F",
  Gentle: "175–212°F",
  Medium: "300–325°F",
  Hot: "350–400°F",
  Extreme: "450°F",
};

const CATEGORY_COLOR: Record<string, string> = {
  Delicate: "text-[#60a5fa]",
  Gentle: "text-[#34d399]",
  Medium: "text-[#fbbf24]",
  Hot: "text-[#f97316]",
  Extreme: "text-[#e8410a]",
};

const CATEGORY_BAR: Record<string, string> = {
  Delicate: "bg-[#60a5fa]",
  Gentle: "bg-[#34d399]",
  Medium: "bg-[#fbbf24]",
  Hot: "bg-[#f97316]",
  Extreme: "bg-[#e8410a]",
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
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#e8410a] mb-3">02</p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Temperature Guide</h1>
      <p className="text-[#5a5a5a] text-sm max-w-xl mb-4">
        Every cooking task has an ideal temperature. The Impulse holds yours to within ±1°F.
        Use this as your reference — dial it in, cook with certainty.
      </p>

      {/* Clickable scale legend */}
      <div className="flex items-center gap-0 mb-12 mt-8 max-w-2xl">
        {CATEGORIES.map((cat) => {
          const isActive = active === cat;
          const isDimmed = active !== null && !isActive;
          return (
            <button
              key={cat}
              onClick={() => setActive(isActive ? null : cat)}
              className={`flex-1 text-left transition-opacity focus:outline-none group ${isDimmed ? "opacity-30" : "opacity-100"}`}
              title={isActive ? `Show all` : `Filter: ${cat}`}
            >
              <div className={`h-1 ${CATEGORY_BAR[cat]} transition-all ${isActive ? "h-1.5" : "group-hover:h-1.5"}`} />
              <p className={`text-[0.5rem] tracking-[0.15em] uppercase mt-1.5 ${CATEGORY_COLOR[cat]}`}>{cat}</p>
              <p className="text-[0.5rem] text-[#5a5a5a]">{CATEGORY_RANGE[cat]}</p>
            </button>
          );
        })}
      </div>

      {/* Active filter pill */}
      {active && (
        <div className="flex items-center gap-3 mb-8 -mt-4">
          <span className={`text-xs ${CATEGORY_COLOR[active]}`}>Showing: {active}</span>
          <button
            onClick={() => setActive(null)}
            className="text-[0.6rem] tracking-widest uppercase text-[#5a5a5a] hover:text-[#fafafa] transition-colors border border-[#1c1c1c] px-2 py-0.5 rounded-sm"
          >
            Clear
          </button>
        </div>
      )}

      {/* Sections */}
      <div className="space-y-16">
        {visibleCategories.map((cat) => (
          <section key={cat}>
            <div className="flex items-baseline gap-4 mb-6 border-b border-[#1c1c1c] pb-4">
              <h2 className={`text-xl font-semibold tracking-tight ${CATEGORY_COLOR[cat]}`}>{cat}</h2>
              <span className="text-sm text-[#5a5a5a]">{CATEGORY_RANGE[cat]}</span>
              <span className="text-xs text-[#5a5a5a] ml-auto">{grouped[cat].length} entries</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
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
