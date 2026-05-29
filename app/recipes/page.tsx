import Link from "next/link";
import Image from "next/image";
import { cooktopRecipes } from "../data/cooktop-recipes";

export default function RecipesPage() {
  const [featured, ...rest] = cooktopRecipes;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <p className="text-[0.65rem] tracking-[0.3em] uppercase text-[#e8410a] mb-3">03</p>
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-3">Recipes</h1>
      <p className="text-[#5a5a5a] text-sm max-w-xl mb-12">
        Eight recipes built for the Impulse cooktop. Each one shows you the exact temperature mode setting and why it matters.
      </p>

      {/* Featured */}
      <Link href={`/recipes/${featured.slug}`} className="group block mb-6">
        <div className="relative aspect-[21/9] overflow-hidden rounded-sm">
          <Image
            src={featured.heroImage}
            alt={featured.title}
            fill
            priority
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/30 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-2">
              <TempBadge tempF={featured.tempF} mode={featured.mode} />
              <span className="text-[0.6rem] tracking-widest uppercase text-[#a0a0a0]">{featured.difficulty}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{featured.title}</h2>
            <p className="text-sm text-[#a0a0a0] mt-1.5 max-w-lg">{featured.subtitle}</p>
          </div>
        </div>
      </Link>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((r) => (
          <Link key={r.slug} href={`/recipes/${r.slug}`} className="group bg-[#111111] hover:bg-[#161616] transition-colors rounded-sm overflow-hidden">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={r.heroImage}
                alt={r.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <TempBadge tempF={r.tempF} mode={r.mode} small />
                <span className="text-[0.55rem] text-[#5a5a5a]">·</span>
                <span className="text-[0.55rem] tracking-widest uppercase text-[#5a5a5a]">{r.prepTime + r.cookTime}m</span>
              </div>
              <h3 className="text-sm font-semibold tracking-tight group-hover:text-[#e8e8e8] transition-colors">{r.title}</h3>
              <p className="text-xs text-[#5a5a5a] mt-1 leading-relaxed line-clamp-2">{r.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function TempBadge({ tempF, mode, small }: { tempF: number; mode: string; small?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-1 bg-[#e8410a]/10 border border-[#e8410a]/20 rounded-sm ${small ? "px-1.5 py-0.5" : "px-2 py-1"}`}>
      <span className={`font-medium text-[#e8410a] tabular-nums ${small ? "text-[0.55rem]" : "text-xs"}`}>
        {tempF}°F
      </span>
      <span className={`text-[#e8410a]/60 ${small ? "text-[0.5rem]" : "text-[0.55rem]"}`}>{mode}</span>
    </span>
  );
}
