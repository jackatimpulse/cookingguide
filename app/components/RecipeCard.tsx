import Link from "next/link";
import Image from "next/image";
import { Recipe } from "../data/recipes";

interface Props {
  recipe: Recipe;
  featured?: boolean;
}

export default function RecipeCard({ recipe, featured = false }: Props) {
  const totalTime = recipe.prepTime + recipe.cookTime;

  if (featured) {
    return (
      <Link href={`/recipes/${recipe.slug}`} className="group block relative overflow-hidden rounded-sm bg-[#111111]">
        <div className="relative aspect-[16/9] overflow-hidden">
          <Image
            src={recipe.heroImage}
            alt={recipe.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-[#e8410a] font-medium">
                {recipe.category}
              </span>
              <span className="text-[#5a5a5a]">·</span>
              <span className="text-[0.65rem] tracking-[0.15em] uppercase text-[#a0a0a0]">
                {recipe.difficulty}
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight leading-tight mb-2 group-hover:text-[#e8e8e8] transition-colors">
              {recipe.title}
            </h2>
            <p className="text-sm text-[#a0a0a0] leading-relaxed max-w-xl line-clamp-2">
              {recipe.subtitle}
            </p>
            <div className="flex items-center gap-6 mt-4">
              <Stat label="Prep" value={`${recipe.prepTime}m`} />
              <Stat label="Cook" value={`${recipe.cookTime}m`} />
              <Stat label="Serves" value={String(recipe.serves)} />
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={`/recipes/${recipe.slug}`} className="group block bg-[#111111] rounded-sm overflow-hidden hover:bg-[#161616] transition-colors">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={recipe.heroImage}
          alt={recipe.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-[0.6rem] tracking-[0.2em] uppercase text-[#e8410a] font-medium">
            {recipe.category}
          </span>
          <span className="text-[#5a5a5a] text-xs">·</span>
          <span className="text-[0.6rem] tracking-[0.15em] uppercase text-[#5a5a5a]">
            {totalTime}m
          </span>
        </div>
        <h3 className="text-base font-semibold tracking-tight leading-snug group-hover:text-[#e8e8e8] transition-colors">
          {recipe.title}
        </h3>
        <p className="text-xs text-[#5a5a5a] mt-1.5 leading-relaxed line-clamp-2">{recipe.subtitle}</p>
        <div className="flex items-center gap-1 mt-4">
          <DifficultyDots level={recipe.difficulty} />
          <span className="text-[0.6rem] text-[#5a5a5a] ml-1">{recipe.difficulty}</span>
        </div>
      </div>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[0.6rem] tracking-[0.15em] uppercase text-[#5a5a5a]">{label}</p>
      <p className="text-sm font-medium text-[#fafafa]">{value}</p>
    </div>
  );
}

function DifficultyDots({ level }: { level: string }) {
  const filled = level === "Easy" ? 1 : level === "Intermediate" ? 2 : 3;
  return (
    <div className="flex gap-1">
      {[1, 2, 3].map((n) => (
        <span
          key={n}
          className={`w-1.5 h-1.5 rounded-full ${n <= filled ? "bg-[#e8410a]" : "bg-[#1c1c1c]"}`}
        />
      ))}
    </div>
  );
}
