import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { recipes } from "../../data/recipes";

export function generateStaticParams() {
  return recipes.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) return {};
  return { title: `${recipe.title} — Impulse Cooking Guide`, description: recipe.subtitle };
}

export default async function RecipePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const recipe = recipes.find((r) => r.slug === slug);
  if (!recipe) notFound();

  const totalTime = recipe.prepTime + recipe.cookTime;

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[55vh] min-h-[400px] overflow-hidden">
        <Image
          src={recipe.heroImage}
          alt={recipe.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-[#0a0a0a]/10" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link
              href={`/?cat=${recipe.category}`}
              className="text-[0.6rem] tracking-[0.2em] uppercase text-[#e8410a] hover:text-[#ff5522] transition-colors"
            >
              {recipe.category}
            </Link>
            <span className="text-[#5a5a5a]">·</span>
            <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#a0a0a0]">
              {recipe.difficulty}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-3xl">
            {recipe.title}
          </h1>
          <p className="text-[#a0a0a0] mt-2 max-w-xl text-sm leading-relaxed">{recipe.subtitle}</p>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-[#1c1c1c] bg-[#111111]">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 overflow-x-auto">
          {[
            { label: "Prep", value: `${recipe.prepTime} min` },
            { label: "Cook", value: `${recipe.cookTime} min` },
            { label: "Total", value: `${totalTime} min` },
            { label: "Serves", value: String(recipe.serves) },
            { label: "Difficulty", value: recipe.difficulty },
          ].map(({ label, value }) => (
            <div key={label} className="flex-shrink-0">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#5a5a5a]">{label}</p>
              <p className="text-sm font-medium mt-0.5">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12">
        {/* Left: ingredients */}
        <div>
          <div className="sticky top-20">
            <div className="bg-[#111111] rounded-sm p-6">
              <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#5a5a5a] mb-5">
                Ingredients
              </p>
              <p className="text-xs text-[#5a5a5a] mb-5">Serves {recipe.serves}</p>
              <ul className="space-y-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i} className="flex items-baseline gap-2 border-b border-[#1c1c1c] pb-3 last:border-0 last:pb-0">
                    <span className="text-xs font-medium text-[#fafafa] shrink-0">
                      {ing.amount} {ing.unit}
                    </span>
                    <span className="text-xs text-[#a0a0a0] leading-snug">{ing.item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="mt-5 flex flex-wrap gap-2">
              {recipe.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-[0.55rem] tracking-[0.15em] uppercase px-2.5 py-1 bg-[#1c1c1c] text-[#5a5a5a] rounded-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Right: description + steps */}
        <div>
          <p className="text-[#a0a0a0] text-base leading-relaxed mb-10 max-w-prose">
            {recipe.description}
          </p>

          {/* Chef tip */}
          <div className="border-l-2 border-[#e8410a] pl-5 mb-12 bg-[#111111] py-4 pr-4 rounded-r-sm">
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#e8410a] mb-1.5">Pro tip</p>
            <p className="text-sm text-[#a0a0a0] leading-relaxed">{recipe.tip}</p>
          </div>

          {/* Method */}
          <div>
            <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#5a5a5a] mb-6">Method</p>
            <ol className="space-y-8">
              {recipe.steps.map((step, i) => (
                <li key={i} className="grid grid-cols-[32px_1fr] gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-sm bg-[#1c1c1c] flex items-center justify-center">
                    <span className="text-xs font-medium text-[#5a5a5a]">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1.5">{step.title}</h3>
                    <p className="text-sm text-[#a0a0a0] leading-relaxed">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

      </div>

      {/* Back */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#5a5a5a] hover:text-[#fafafa] transition-colors"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.5 2L3.5 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Recipes
        </Link>
      </div>
    </article>
  );
}
