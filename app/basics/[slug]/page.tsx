import { notFound } from "next/navigation";
import Link from "next/link";
import { basics } from "../../data/basics";

export function generateStaticParams() {
  return basics.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = basics.find((g) => g.slug === slug);
  if (!guide) return {};
  return { title: `${guide.title} — Impulse Cooking Guide`, description: guide.subtitle };
}

export default async function BasicsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = basics.find((g) => g.slug === slug);
  if (!guide) notFound();

  const index = basics.findIndex((g) => g.slug === slug);
  const next = basics[index + 1];

  return (
    <article className="max-w-7xl mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-16">
        {/* Main */}
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/basics" className="text-[0.6rem] tracking-widest uppercase text-[#5a5a5a] hover:text-[#fafafa] transition-colors">
              Basics
            </Link>
            <span className="text-[#1c1c1c]">/</span>
            <span className="text-[0.6rem] tracking-widest uppercase text-[#a0a0a0]">{guide.title}</span>
          </div>

          <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#e8410a] mb-3">
            {String(index + 1).padStart(2, "0")} · {guide.readTime} min read
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">{guide.title}</h1>
          <p className="text-[#5a5a5a] text-base leading-relaxed mb-12">{guide.subtitle}</p>

          <div className="space-y-10">
            {guide.content.map((section, i) => (
              <div key={i} className="border-t border-[#1c1c1c] pt-8">
                <h2 className="text-base font-semibold mb-3">{section.heading}</h2>
                <p className="text-sm text-[#a0a0a0] leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {next && (
            <div className="mt-16 border-t border-[#1c1c1c] pt-8">
              <p className="text-[0.6rem] tracking-widest uppercase text-[#5a5a5a] mb-3">Next guide</p>
              <Link
                href={`/basics/${next.slug}`}
                className="group flex items-center justify-between bg-[#111111] hover:bg-[#161616] transition-colors rounded-sm p-5"
              >
                <div>
                  <h3 className="text-sm font-semibold group-hover:text-[#e8e8e8] transition-colors">{next.title}</h3>
                  <p className="text-xs text-[#5a5a5a] mt-1">{next.subtitle}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-4 text-[#5a5a5a] group-hover:text-[#fafafa] transition-colors">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        {/* Sidebar: all guides */}
        <div className="hidden lg:block">
          <div className="sticky top-20">
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#5a5a5a] mb-4">All Basics</p>
            <div className="space-y-1">
              {basics.map((g, i) => (
                <Link
                  key={g.slug}
                  href={`/basics/${g.slug}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-sm text-xs transition-colors ${
                    g.slug === slug
                      ? "bg-[#1c1c1c] text-[#fafafa]"
                      : "text-[#5a5a5a] hover:text-[#a0a0a0] hover:bg-[#111111]"
                  }`}
                >
                  <span className="text-[0.5rem] tracking-widest text-[#5a5a5a]">{String(i + 1).padStart(2, "0")}</span>
                  {g.title}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#1c1c1c]">
              <Link href="/basics" className="text-[0.55rem] tracking-widest uppercase text-[#5a5a5a] hover:text-[#fafafa] transition-colors">
                ← All Basics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
