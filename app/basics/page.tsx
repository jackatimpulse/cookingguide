import Link from "next/link";
import { basics } from "../data/basics";

export default function BasicsPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.25em] uppercase text-[#205C49] mb-3">01</p>
      <h1 className="font-heading text-3xl md:text-4xl font-light mb-3 text-[#000000]">Basics</h1>
      <p className="text-[#000000]/50 text-sm max-w-xl mb-12">
        Four guides covering everything you need before your first cook — power modes, Active Temperature Sensing, the battery, and cookware.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {basics.map((guide, i) => (
          <Link
            key={guide.slug}
            href={`/basics/${guide.slug}`}
            className="group bg-white hover:border-[#205C49]/30 hover:shadow-md border border-[#000000]/10 transition-all rounded-[10px] p-7 flex flex-col"
          >
            <div className="flex items-start justify-between mb-5">
              <span className="text-[0.55rem] tracking-[0.25em] uppercase text-[#000000]/30">{String(i + 1).padStart(2, "0")}</span>
              <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#000000]/30">{guide.readTime} min read</span>
            </div>
            <h2 className="font-heading text-xl font-light mb-2 text-[#000000] group-hover:text-[#205C49] transition-colors">
              {guide.title}
            </h2>
            <p className="text-sm text-[#000000]/50 leading-relaxed flex-1">{guide.subtitle}</p>
            <div className="mt-5 flex items-center gap-2 text-[#205C49]">
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
