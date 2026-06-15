import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cooktopRecipes } from "../../data/cooktop-recipes";

export function generateStaticParams() {
  return cooktopRecipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = cooktopRecipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return { title: `${recipe.title} — Impulse Cooking Guide`, description: recipe.subtitle };
}

export default async function RecipeDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = cooktopRecipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[50vh] min-h-[380px] overflow-hidden">
        <Image src={recipe.heroImage} alt={recipe.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E2D]/80 via-[#1F2E2D]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/recipes" className="text-[0.6rem] tracking-widest uppercase text-white/40 hover:text-white transition-colors">
              Recipes
            </Link>
            <span className="text-white/20">/</span>
            <span className="inline-flex items-center gap-1.5 bg-[#205C49]/80 border border-[#205C49] rounded-md px-2 py-0.5">
              <span className="text-[0.6rem] font-medium text-white tabular-nums">{recipe.tempF}°F</span>
              <span className="text-[0.55rem] text-white/60">{recipe.mode} mode</span>
            </span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-light text-white max-w-2xl">{recipe.title}</h1>
          <p className="text-white/50 mt-2 text-sm max-w-xl">{recipe.subtitle}</p>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-[#1F2E2D]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 overflow-x-auto">
          {[
            { label: "Set temp", value: `${recipe.tempF}°F`, accent: true },
            { label: "Mode", value: `${recipe.mode}` },
            { label: "Prep", value: `${recipe.prepTime}m` },
            { label: "Cook", value: `${recipe.cookTime}m` },
            { label: "Total", value: `${totalTime}m` },
            { label: "Serves", value: String(recipe.serves) },
            { label: "Difficulty", value: recipe.difficulty },
          ].map(({ label, value, accent }) => (
            <div key={label} className="shrink-0">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30">{label}</p>
              <p className={`text-sm font-medium mt-0.5 ${accent ? "text-[#205C49]" : "text-[#1F2E2D]"}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-12">
        {/* Left: ingredients */}
        <div>
          <div className="sticky top-20 space-y-4">
            <div className="bg-white border border-[#1F2E2D]/10 rounded-[10px] p-6">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30 mb-1">Ingredients</p>
              <p className="text-xs text-[#1F2E2D]/30 mb-5">Serves {recipe.serves}</p>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-baseline gap-2 border-b border-[#1F2E2D]/8 pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-medium text-[#1F2E2D] shrink-0">{ing.amount} {ing.unit}</span>
                    <span className="text-xs text-[#1F2E2D]/50">{ing.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#205C49]/8 border border-[#205C49]/20 rounded-[10px] p-5">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#205C49]/70 mb-1.5">Cooktop setting</p>
              <p className="font-heading text-3xl font-light text-[#205C49] tabular-nums">{recipe.tempF}°F</p>
              <p className="text-xs text-[#205C49]/60 mt-0.5">{recipe.mode} mode</p>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {recipe.tags.map((tag) => (
                <span key={tag} className="text-[0.55rem] tracking-[0.15em] uppercase px-2.5 py-1 bg-[#1F2E2D]/5 text-[#1F2E2D]/40 rounded-md">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: method */}
        <div>
          <p className="text-[#1F2E2D]/50 text-sm leading-relaxed mb-8 max-w-prose">{recipe.description}</p>

          <div className="border-l-2 border-[#205C49] pl-5 mb-10 bg-[#205C49]/5 py-4 pr-4 rounded-r-[10px]">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#205C49] mb-1.5">Pro tip</p>
            <p className="text-sm text-[#1F2E2D]/60 leading-relaxed">{recipe.tip}</p>
          </div>

          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30 mb-6">Method</p>
          <ol className="space-y-8">
            {recipe.steps.map((step, i) => (
              <li key={i} className="grid grid-cols-[32px_1fr] gap-4">
                <div className="w-8 h-8 rounded-md bg-[#1F2E2D]/5 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-[#1F2E2D]/30">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h3 className="font-heading text-base font-light text-[#1F2E2D]">{step.title}</h3>
                    {step.tempF && (
                      <span className="text-[0.55rem] tracking-widest uppercase text-[#205C49] bg-[#205C49]/10 border border-[#205C49]/20 px-1.5 py-0.5 rounded-md">
                        {step.tempF}°F · {step.mode}
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-[#1F2E2D]/50 leading-relaxed">{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <Link href="/recipes" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#1F2E2D]/30 hover:text-[#205C49] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.5 2L3.5 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Recipes
        </Link>
      </div>
    </article>
  );
}
