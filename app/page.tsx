import Link from "next/link";

const SECTIONS = [
  {
    href: "/basics",
    label: "Basics",
    number: "01",
    description: "Getting started with Active Temperature Sensing, the integrated battery, and cookware compatibility.",
    guides: ["Getting Started", "Active Temperature Sensing", "Power & the Battery", "Cookware Guide"],
  },
  {
    href: "/temperature-guide",
    label: "Temperature Guide",
    number: "02",
    description: "A complete reference for every cooking task — from 88°F chocolate tempering to 450°F searing.",
    guides: ["Delicate (88–175°F)", "Gentle (175–212°F)", "Medium (300–325°F)", "Hot & Extreme (350–450°F)"],
  },
  {
    href: "/recipes",
    label: "Recipes",
    number: "03",
    description: "Eight recipes designed for the Impulse cooktop — each with exact temperature mode instructions.",
    guides: ["Perfect Seared Steak", "Brown Butter Pasta", "Foolproof Hollandaise", "Wok-Style Stir-Fry"],
  },
  {
    href: "/pan-techniques",
    label: "Pan Techniques",
    number: "04",
    description: "How to use carbon steel, cast iron, stainless, non-stick, and enameled cast iron on the Impulse.",
    guides: ["Carbon Steel Sear", "Cast Iron & Thermal Mass", "Stainless & the Fond", "Non-Stick Precision"],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-20 border-b border-[#1F2E2D]/10">
        <p className="text-xs tracking-[0.25em] uppercase text-[#205C49] mb-5">
          Impulse Cooking Guide
        </p>
        <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1.05] max-w-4xl text-[#1F2E2D]">
          Cook with precision.<br />
          <span className="text-[#1F2E2D]/30">Not guesswork.</span>
        </h1>
        <p className="mt-6 text-[#1F2E2D]/60 text-base max-w-lg leading-relaxed">
          The Impulse cooktop delivers up to 10,000W and single-digit temperature precision.
          This guide teaches you how to use both — from an 88°F chocolate temper to a 450°F sear.
        </p>

        {/* Stats */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1F2E2D]/10">
          {[
            { value: "10,000W", label: "Peak power per burner" },
            { value: "±1°F", label: "Temperature accuracy" },
            { value: "40s", label: "Time to boil water" },
            { value: "90–450°F", label: "Precision range" },
          ].map(({ value, label }) => (
            <div key={label} className="bg-[#F4F5EF] px-6 py-5">
              <p className="font-heading text-2xl md:text-3xl font-light text-[#1F2E2D]">{value}</p>
              <p className="text-xs text-[#1F2E2D]/40 mt-1">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Section cards */}
      <section className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {SECTIONS.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group bg-white hover:bg-white border border-[#1F2E2D]/10 hover:border-[#205C49]/30 hover:shadow-md transition-all rounded-[10px] p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-[0.55rem] tracking-[0.3em] uppercase text-[#205C49]">{s.number}</span>
                <svg
                  width="16" height="16" viewBox="0 0 16 16" fill="none"
                  className="text-[#1F2E2D]/20 group-hover:text-[#205C49] transition-colors"
                >
                  <path d="M3 13L13 3M13 3H6M13 3v7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl font-light mb-3 text-[#1F2E2D] group-hover:text-[#205C49] transition-colors">
                {s.label}
              </h2>
              <p className="text-sm text-[#1F2E2D]/50 leading-relaxed mb-6 flex-1">{s.description}</p>
              <div className="border-t border-[#1F2E2D]/8 pt-4 flex flex-wrap gap-1.5">
                {s.guides.map((g) => (
                  <span key={g} className="text-[0.55rem] tracking-[0.1em] uppercase px-2 py-1 bg-[#F4F5EF] text-[#1F2E2D]/40 rounded-md">
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
        <div className="bg-[#1F2E2D] rounded-[10px] p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#F4F5EF]/40 mb-2">New to Impulse?</p>
            <h3 className="font-heading text-2xl md:text-3xl font-light text-[#F4F5EF]">Start with the Basics.</h3>
            <p className="text-sm text-[#F4F5EF]/50 mt-2 max-w-md">
              Power modes, temperature sensing, and cookware — everything before your first cook.
            </p>
          </div>
          <Link
            href="/basics"
            className="shrink-0 bg-[#F4F5EF] text-[#1F2E2D] text-xs tracking-widest uppercase px-6 py-3 rounded-md hover:bg-white transition-colors font-medium"
          >
            Get Started
          </Link>
        </div>
      </section>
    </>
  );
}
