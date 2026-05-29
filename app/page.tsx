"use client";
import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { recipes, Category } from "./data/recipes";
import RecipeCard from "./components/RecipeCard";

const CATEGORIES: (Category | "All")[] = ["All", "Pizza", "Baking", "Wood-Fired", "Flatbread", "Seafood"];

function RecipeGrid() {
  const params = useSearchParams();
  const cat = params.get("cat") as Category | null;

  const filtered = cat ? recipes.filter((r) => r.category === cat) : recipes;
  const [featured, ...rest] = filtered;

  return (
    <>
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <p className="text-[0.65rem] tracking-[0.25em] uppercase text-[#e8410a] mb-2">
            {cat ? cat : "All Recipes"}
          </p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight max-w-2xl">
            Recipes for extreme heat.<br className="hidden md:block" /> Obsessively tested.
          </h1>
        </div>

        {featured && <RecipeCard recipe={featured} featured />}
      </section>

      {/* Filter bar */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="border-t border-[#1c1c1c] pt-6 pb-4 flex items-center gap-2 flex-wrap">
          {CATEGORIES.map((c) => (
            <a
              key={c}
              href={c === "All" ? "/" : `/?cat=${c}`}
              className={`text-[0.6rem] tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm border transition-colors ${
                (cat ?? "All") === c
                  ? "border-[#fafafa] text-[#fafafa] bg-[#fafafa]/5"
                  : "border-[#1c1c1c] text-[#5a5a5a] hover:border-[#5a5a5a] hover:text-[#a0a0a0]"
              }`}
            >
              {c}
            </a>
          ))}
        </div>
      </section>

      {/* Recipe grid */}
      <section className="max-w-7xl mx-auto px-6 py-8">
        {rest.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {rest.map((r) => (
              <RecipeCard key={r.slug} recipe={r} />
            ))}
          </div>
        ) : (
          <p className="text-[#5a5a5a] text-sm py-20 text-center">No recipes in this category yet.</p>
        )}
      </section>
    </>
  );
}

export default function Home() {
  return (
    <Suspense>
      <RecipeGrid />
    </Suspense>
  );
}
