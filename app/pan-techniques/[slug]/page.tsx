import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { panTechniques } from "../../data/pan-techniques";

export function generateStaticParams() {
  return panTechniques.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const t = panTechniques.find((t) => t.slug === slug);
  if (!t) return {};
  return { title: `${t.title} — Impulse Cooking Guide`, description: t.subtitle };
}

export default async function PanTechniqueDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const technique = panTechniques.find((t) => t.slug === slug);
  if (!technique) notFound();

  return (
    <article>
      {/* Hero */}
      <div className="relative h-[40vh] min-h-[300px] overflow-hidden">
        <Image src={technique.heroImage} alt={technique.title} fill priority className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1F2E2D]/80 via-[#1F2E2D]/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-10">
          <div className="flex items-center gap-3 mb-3">
            <Link href="/pan-techniques" className="text-[0.6rem] tracking-widest uppercase text-white/40 hover:text-white transition-colors">
              Pan Techniques
            </Link>
            <span className="text-white/20">/</span>
            <span className="text-[0.6rem] tracking-widest uppercase text-white/60">{technique.pan}</span>
          </div>
          <h1 className="font-heading text-3xl md:text-4xl font-light text-white max-w-2xl">{technique.title}</h1>
          <p className="text-white/50 mt-2 text-sm max-w-xl">{technique.subtitle}</p>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-[#1F2E2D]/10 bg-white">
        <div className="max-w-7xl mx-auto px-6 py-4 flex gap-8 overflow-x-auto">
          {[
            { label: "Pan", value: technique.pan },
            { label: "Temperature", value: `${technique.tempF}°F`, accent: true },
            { label: "Mode", value: `${technique.mode}` },
          ].map(({ label, value, accent }) => (
            <div key={label} className="shrink-0">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30">{label}</p>
              <p className={`text-sm font-medium mt-0.5 ${accent ? "text-[#205C49]" : "text-[#1F2E2D]"}`}>{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
        {/* Main */}
        <div className="max-w-2xl">
          <p className="text-[#1F2E2D]/50 text-sm leading-relaxed mb-10">{technique.description}</p>

          <p className="text-[0.6rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30 mb-6">Technique</p>
          <div className="space-y-8">
            {technique.steps.map((step, i) => (
              <div key={i} className="grid grid-cols-[32px_1fr] gap-4">
                <div className="w-8 h-8 rounded-md bg-[#1F2E2D]/5 flex items-center justify-center shrink-0">
                  <span className="text-xs font-medium text-[#1F2E2D]/25">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="border-b border-[#1F2E2D]/8 pb-8 last:border-0 last:pb-0">
                  <h3 className="font-heading text-base font-light text-[#1F2E2D] mb-2">{step.heading}</h3>
                  <p className="text-sm text-[#1F2E2D]/50 leading-relaxed">{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <div className="hidden lg:block">
          <div className="sticky top-20 space-y-3">
            <div className="bg-[#205C49]/8 border border-[#205C49]/20 rounded-[10px] p-5">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#205C49]/70 mb-2">Recommended setting</p>
              <p className="font-heading text-3xl font-light text-[#205C49] tabular-nums">{technique.tempF}°F</p>
              <p className="text-xs text-[#205C49]/60 mt-0.5">{technique.mode} mode</p>
            </div>

            <div className="bg-white border border-[#1F2E2D]/10 rounded-[10px] p-5">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30 mb-3">Best for</p>
              <ul className="space-y-1.5">
                {technique.bestFor.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-xs text-[#1F2E2D]/60">
                    <span className="w-1 h-1 rounded-full bg-[#205C49] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#1F2E2D]/10 rounded-[10px] p-5">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30 mb-3">Avoid</p>
              <ul className="space-y-1.5">
                {technique.avoid.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-[#1F2E2D]/35">
                    <span className="w-1 h-1 rounded-full bg-[#1F2E2D]/20 shrink-0 mt-1.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white border border-[#1F2E2D]/10 rounded-[10px] p-5">
              <p className="text-[0.55rem] tracking-[0.2em] uppercase text-[#1F2E2D]/30 mb-3">All Techniques</p>
              <div className="space-y-0.5">
                {panTechniques.map((t) => (
                  <Link
                    key={t.slug}
                    href={`/pan-techniques/${t.slug}`}
                    className={`block text-xs px-2 py-1.5 rounded-md transition-colors ${
                      t.slug === slug
                        ? "bg-[#205C49]/10 text-[#205C49]"
                        : "text-[#1F2E2D]/40 hover:text-[#1F2E2D] hover:bg-[#1F2E2D]/5"
                    }`}
                  >
                    {t.pan}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pb-12">
        <Link href="/pan-techniques" className="inline-flex items-center gap-2 text-xs tracking-widest uppercase text-[#1F2E2D]/30 hover:text-[#205C49] transition-colors">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M8.5 2L3.5 7l5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          All Pan Techniques
        </Link>
      </div>
    </article>
  );
}
