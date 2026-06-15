import Link from "next/link";
import Image from "next/image";
import { cooktopRecipes } from "../data/cooktop-recipes";

export default function RecipesPage() {
  const [featured, ...rest] = cooktopRecipes;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-xs tracking-[0.25em] uppercase text-[#205C49] mb-3">03</p>
      <h1 className="font-heading text-3xl md:text-4xl font-light mb-3 text-[#1F2E2D]">Recipes</h1>
      <p className="text-[#1F2E2D]/50 text-sm max-w-xl mb-12">
        Eight recipes built for the Impulse cooktop. Each shows the exact temperature mode setting and why it matters.
      </p>

      {/* Featured */}
      <Link href={`/recipes/${featured.slug}`} className="group block mb-4">
        <div className="relative aspect-[21/9] overflow-hidden rounded-[10px]">
          <Image
            src={featured.heroImage}
            alt={featured.title}
            fill priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E2D]/80 via-[#1F2E2D]/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-2">
              <TempBadge tempF={featured.tempF} mode={featured.mode} />
              <span className="text-[0.6rem] tracking-widest uppercase text-white/50">{featured.difficulty}</span>
            </div>
            <h2 className="font-heading text-2xl md:text-3xl font-light text-white">{featured.title}</h2>
            <p className="text-sm text-white/60 mt-1.5 max-w-lg">{featured.subtitle}</p>
          </div>
        </div>
      </Link>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {rest.map((r) => (
          <Link key={r.slug} href={`/recipes/${r.slug}`} className="group bg-white border border-[#1F2E2D]/10 hover:border-[#205C49]/30 hover:shadow-md transition-all rounded-[10px] overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={r.heroImage} alt={r.title} fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <TempBadge tempF={r.tempF} mode={r.mode} small />
                <span className="text-[#1F2E2D]/20 text-xs">·</span>
                <span className="text-[0.55rem] tracking-widest uppercase text-[#1F2E2D]/30">{r.prepTime + r.cookTime}m</span>
              </div>
              <h3 className="font-heading text-base font-light text-[#1F2E2D] group-hover:text-[#205C49] transition-colors">{r.title}</h3>
              <p className="text-xs text-[#1F2E2D]/40 mt-1 leading-relaxed line-clamp-2">{r.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function TempBadge({ tempF, mode, small }: { tempF: number; mode: string; small?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 bg-[#205C49]/10 border border-[#205C49]/20 rounded-md ${small ? "px-1.5 py-0.5" : "px-2 py-1"}`}>
      <span className={`font-medium text-[#205C49] tabular-nums ${small ? "text-[0.55rem]" : "text-xs"}`}>{tempF}°F</span>
      <span className={`text-[#205C49]/50 ${small ? "text-[0.5rem]" : "text-[0.55rem]"}`}>{mode}</span>
    </span>
  );
}
