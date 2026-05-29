import Link from "next/link";

const SECTIONS = [
  {
    href: "/basics",
    label: "Basics",
    number: "01",
    description:
      "Getting started with Active Temperature Sensing, the integrated battery, and cookware compatibility.",
    guides: ["Getting Started", "Active Temperature Sensing", "Power & the Battery", "Cookware Guide"],
  },
  {
    href: "/temperature-guide",
    label: "Temperature Guide",
    number: "02",
    description:
      "A complete reference for every cooking task — from 88°F chocolate tempering to 450°F searing.",
    guides: ["Delicate (88–175°F)", "Gentle (175–212°F)", "Medium (300–325°F)", "Hot & Extreme (350–450°F)"],
  },
  {
    href: "/recipes",
    label: "Recipes",
    number: "03",
    description:
      "Eight recipes designed specifically for the Impulse cooktop — each with temperature mode instructions.",
    guides: ["Perfect Seared Steak", "Brown Butter Pasta", "Foolproof Hollandaise", "Wok-Style Stir-Fry"],
  },
  {
    href: "/pan-techniques",
    label: "Pan Techniques",
    number: "04",
    description:
      "How to use carbon steel, cast iron, stainless, non-stick, and enameled cast iron on the Impulse.",
    guides: ["Carbon Steel Sear", "Cast Iron & Thermal Mass", "Stainless & the Fond", "Non-Stick Precision"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 border-b border-[#1c1c1c]">
        <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#e8410a] mb-4">
          Impulse Cooking Guide
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] max-w-4xl">
          Cook with precision.<br />
          <span className="text-[#5a5a5a]">Not guesswork.</span>
        </h1>
        <p className="mt-6 text-[#5a5a5a] text-base max-w-xl leading-relaxed">
          The Impulse cooktop delivers up to 10,000W and single-digit temperature precision.
          This guide teaches you how to use both — from a 88°F chocolate temper to a 450°F sear.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1c1c1c]">
          {[
            { value: "10,000W", label: "Peak power per burner" },
            { value: "±1°F", label: "Temperature accuracy" },
            { value: "40s", label: "Time to boil water" },
            { value: "90°F–450°F", label: "Precision range" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-[#0a0a0a] px-6 py-5">
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-[#fafafa]">{value}</p>
              <p className="text-xs text-[#5a5a5a] mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-[#111111] hover:bg-[#161616] transition-colors rounded-sm p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[#e8410a]">{s.number}</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="text-[#5a5a5a] group-hover:text-[#fafafa] transition-colors group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transform duration-200"
                >
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>

              <h2 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#e8e8e8] transition-colors">
                {s.label}
              </h2>
              <p className="text-sm text-[#5a5a5a] leading-relaxed mb-6 flex-1">{s.description}</p>

              <div className="border-t border-[#1c1c1c] pt-4 flex flex-wrap gap-2">
                {s.guides.map((g) => (
                  <span
                    key={g}
                    className="text-[0.55rem] tracking-[0.1em] uppercase px-2 py-1 bg-[#1c1c1c] text-[#5a5a5a] rounded-sm"
                  >
                    {g}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-6 pb-20">
        <div className="bg-[#e8410a] rounded-sm p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#fafafa]/60 mb-2">New to Impulse?</p>
            <h3 className="text-xl md:text-2xl font-semibold text-[#fafafa] tracking-tight">
              Start with the Basics.
            </h3>
            <p className="text-sm text-[#fafafa]/70 mt-1.5 max-w-md">
              Everything you need to know before your first cook — power modes, temperature sensing, and cookware.
            </p>
          </div>
          <Link
            href="/basics"
            className="shrink-0 bg-[#fafafa] text-[#0a0a0a] text-xs tracking-widest uppercase px-6 py-3 rounded-sm hover:bg-[#e8e8e8] transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
