import Link from "next/link";
import { basics } from "../data/basics";

export default function BasicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#e8410a] mb-3">01</p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Basics</h1>
      <p className="text-[#5a5a5a] text-sm max-w-xl mb-12">
        Four guides covering everything you need before your first cook — power modes, Active Temperature Sensing, the battery, and cookware.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {basics.map((guide, i) => (
          <Link
            key={guide.slug}
            href={`/basics/${guide.slug}`}
            className="group bg-[#111111] hover:bg-[#161616] transition-colors rounded-sm p-7 flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#5a5a5a]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#5a5a5a]">
                {guide.readTime} min read
              </span>
            </div>
            <h2 className="text-lg font-semibold tracking-tight mb-2 group-hover:text-[#e8e8e8] transition-colors">
              {guide.title}
            </h2>
            <p className="text-sm text-[#5a5a5a] leading-relaxed flex-1">{guide.subtitle}</p>
            <div className="mt-5 flex items-center gap-2 text-[#e8410a]">
              <span className="text-xs tracking-widest uppercase">Read guide</span>
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M2 6h8M7 3l3 3-3 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
