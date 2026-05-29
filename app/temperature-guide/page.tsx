import { temperatures, TempEntry } from "../data/temperatures";

const CATEGORIES = ["Delicate", "Gentle", "Medium", "Hot", "Extreme"] as const;

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

const CATEGORY_BG: Record<string, string> = {
  Delicate: "bg-[#60a5fa]/10 border-[#60a5fa]/20",
  Gentle: "bg-[#34d399]/10 border-[#34d399]/20",
  Medium: "bg-[#fbbf24]/10 border-[#fbbf24]/20",
  Hot: "bg-[#f97316]/10 border-[#f97316]/20",
  Extreme: "bg-[#e8410a]/10 border-[#e8410a]/20",
};

function TempBar({ tempF }: { tempF: number }) {
  const pct = Math.min(100, Math.max(2, ((tempF - 80) / (450 - 80)) * 100));
  return (
    <div className="w-full h-0.5 bg-[#1c1c1c] rounded-full overflow-hidden">
      <div
        className="h-full bg-[#e8410a] rounded-full"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}

function TempCard({ entry }: { entry: TempEntry }) {
  return (
    <div className="bg-[#111111] rounded-sm p-5 flex flex-col gap-3">
      <div className="flex items-start justify-between gap-3">
        <h3 className="text-sm font-semibold leading-snug">{entry.task}</h3>
        <div className="shrink-0 text-right">
          <span className={`text-lg font-semibold tabular-nums ${CATEGORY_COLOR[entry.category]}`}>
            {entry.tempF}°F
          </span>
          <p className="text-[0.55rem] text-[#5a5a5a]">{entry.tempC}°C</p>
        </div>
      </div>
      <TempBar tempF={entry.tempF} />
      <p className="text-xs text-[#a0a0a0] leading-relaxed">{entry.why}</p>
      <div className={`border rounded-sm px-3 py-2 ${CATEGORY_BG[entry.category]}`}>
        <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#5a5a5a] mb-1">Impulse tip</p>
        <p className="text-xs text-[#a0a0a0] leading-relaxed">{entry.tips}</p>
      </div>
    </div>
  );
}

export default function TemperatureGuidePage() {
  const grouped = CATEGORIES.reduce<Record<string, TempEntry[]>>((acc, cat) => {
    acc[cat] = temperatures.filter((t) => t.category === cat).sort((a, b) => a.tempF - b.tempF);
    return acc;
  }, {} as Record<string, TempEntry[]>);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#e8410a] mb-3">02</p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Temperature Guide</h1>
      <p className="text-[#5a5a5a] text-sm max-w-xl mb-4">
        Every cooking task has an ideal temperature. The Impulse holds yours to within ±1°F.
        Use this as your reference — dial it in, cook with certainty.
      </p>

      {/* Scale legend */}
      <div className="flex items-center gap-0 mb-12 mt-8 max-w-2xl">
        {CATEGORIES.map((cat) => (
          <div key={cat} className="flex-1">
            <div className={`h-1 ${
              cat === "Delicate" ? "bg-[#60a5fa]" :
              cat === "Gentle" ? "bg-[#34d399]" :
              cat === "Medium" ? "bg-[#fbbf24]" :
              cat === "Hot" ? "bg-[#f97316]" : "bg-[#e8410a]"
            }`} />
            <p className={`text-[0.5rem] tracking-[0.15em] uppercase mt-1.5 ${CATEGORY_COLOR[cat]}`}>{cat}</p>
            <p className="text-[0.5rem] text-[#5a5a5a]">{CATEGORY_RANGE[cat]}</p>
          </div>
        ))}
      </div>

      {/* Sections */}
      <div className="space-y-16">
        {CATEGORIES.map((cat) => (
          <section key={cat}>
            <div className="flex items-baseline gap-4 mb-6 border-b border-[#1c1c1c] pb-4">
              <h2 className={`text-xl font-semibold tracking-tight ${CATEGORY_COLOR[cat]}`}>{cat}</h2>
              <span className="text-sm text-[#5a5a5a]">{CATEGORY_RANGE[cat]}</span>
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
