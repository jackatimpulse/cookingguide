import Link from "next/link";
import Image from "next/image";
import { panTechniques } from "../data/pan-techniques";

export default function PanTechniquesPage() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.25em] uppercase text-[#205C49] mb-3">04</p>
      <h1 className="font-heading text-3xl md:text-4xl font-light mb-3 text-[#000000]">Pan Techniques</h1>
      <p className="text-[#000000]/50 text-sm max-w-xl mb-12">
        Every pan behaves differently on the Impulse. Learn how to get the most from carbon steel, cast iron, stainless, non-stick, and enameled cast iron.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        {panTechniques.map((technique) => (
          <Link
            key={technique.slug}
            href={`/pan-techniques/${technique.slug}`}
            className="group bg-white border border-[#000000]/10 hover:border-[#205C49]/30 hover:shadow-md transition-all rounded-[10px] overflow-hidden flex flex-col"
          >
            <div className="relative aspect-[16/7] overflow-hidden">
              <Image
                src={technique.heroImage} alt={technique.title} fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000000]/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-4">
                <span className="text-[0.55rem] tracking-[0.2em] uppercase bg-white/90 text-[#000000] px-2 py-1 rounded-md">
                  {technique.pan}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[0.55rem] tracking-[0.2em] uppercase text-[#205C49]">{technique.tempF}°F</span>
                <span className="text-[#000000]/15">·</span>
                <span className="text-[0.55rem] tracking-[0.15em] uppercase text-[#000000]/30">{technique.mode} mode</span>
              </div>
              <h2 className="font-heading text-lg font-light mb-1.5 text-[#000000] group-hover:text-[#205C49] transition-colors">
                {technique.title}
              </h2>
              <p className="text-xs text-[#000000]/40 leading-relaxed flex-1">{technique.subtitle}</p>
              <div className="mt-4 pt-4 border-t border-[#000000]/8">
                <p className="text-[0.55rem] tracking-[0.15em] uppercase text-[#000000]/25 mb-2">Best for</p>
                <div className="flex flex-wrap gap-1.5">
                  {technique.bestFor.slice(0, 4).map((item) => (
                    <span key={item} className="text-[0.5rem] tracking-[0.1em] uppercase px-2 py-0.5 bg-[#F4F5EF] text-[#000000]/40 rounded-md">
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
