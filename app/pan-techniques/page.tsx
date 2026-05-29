import Link from "next/link";
import Image from "next/image";
import { panTechniques } from "../data/pan-techniques";

export default function PanTechniquesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#e8410a] mb-3">04</p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Pan Techniques</h1>
      <p className="text-[#5a5a5a] text-sm max-w-xl mb-12">
        Every pan behaves differently on the Impulse. Learn how to get the most from carbon steel, cast iron, stainless, non-stick, and enameled cast iron.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {panTechniques.map((technique) => (
          <Link
            key={technique.slug}
            href={`/pan-techniques/${technique.slug}`}
            className="group bg-[#111111] hover:bg-[#161616] transition-colors rounded-sm overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={technique.heroImage}
                alt={technique.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#111111]/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-[0.55rem] tracking-[0.2em] uppercase bg-[#0a0a0a]/80 text-[#a0a0a0] px-2 py-1 rounded-sm">
                  {technique.pan}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[#e8410a]">
                  {technique.tempF}°F
                </span>
                <span className="text-[#1c1c1c]">·</span>
                <span className="text-[0.55rem] tracking-[0.15em] uppercase text-[#5a5a5a]">
                  {technique.mode} mode
                </span>
              </div>
              <h2 className="text-base font-semibold tracking-tight mb-1.5 group-hover:text-[#e8e8e8] transition-colors">
                {technique.title}
              </h2>
              <p className="text-xs text-[#5a5a5a] leading-relaxed flex-1">{technique.subtitle}</p>

              <div className="mt-4 pt-4 border-t border-[#1c1c1c]">
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#5a5a5a] mb-2">Best for</p>
                <div className="flex flex-wrap gap-1.5">
                  {technique.bestFor.slice(0, 4).map((item) => (
                    <span key={item} className="text-[0.5rem] tracking-[0.1em] uppercase px-2 py-0.5 bg-[#1c1c1c] text-[#5a5a5a] rounded-sm">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
