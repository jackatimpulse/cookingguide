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
    <article className="max-w-7xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/basics" className="text-[0.6rem] tracking-widest uppercase text-[#000000]/40 hover:text-[#205C49] transition-colors">
              Basics
            </Link>
            <span className="text-[#000000]/20">/</span>
            <span className="text-[0.6rem] tracking-widest uppercase text-[#000000]/60">{guide.title}</span>
          </div>

          <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#205C49] mb-3">
            {String(index + 1).padStart(2, "0")} · {guide.readTime} min read
          </p>
          <h1 className="font-heading text-3xl md:text-4xl font-light mb-4 text-[#000000]">{guide.title}</h1>
          <p className="text-[#000000]/50 text-base leading-relaxed mb-12">{guide.subtitle}</p>

          <div className="space-y-10">
            {guide.content.map((section, i) => (
              <div key={i} className="border-t border-[#000000]/10 pt-8">
                <h2 className="font-heading text-lg font-light mb-3 text-[#000000]">{section.heading}</h2>
                <p className="text-sm text-[#000000]/60 leading-relaxed">{section.body}</p>
              </div>
            ))}
          </div>

          {next && (
            <div className="mt-16 border-t border-[#000000]/10 pt-8">
              <p className="text-[0.6rem] tracking-widest uppercase text-[#000000]/30 mb-3">Next guide</p>
              <Link
                href={`/basics/${next.slug}`}
                className="group flex items-center justify-between bg-white border border-[#000000]/10 hover:border-[#205C49]/30 hover:shadow-md transition-all rounded-[10px] p-5"
              >
                <div>
                  <h3 className="font-heading text-base font-light text-[#000000] group-hover:text-[#205C49] transition-colors">{next.title}</h3>
                  <p className="text-xs text-[#000000]/40 mt-1">{next.subtitle}</p>
                </div>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 ml-4 text-[#000000]/20 group-hover:text-[#205C49] transition-colors">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          )}
        </div>

        <div className="hidden lg:block">
          <div className="sticky top-20">
            <p className="text-[0.55rem] tracking-[0.25em] uppercase text-[#000000]/30 mb-4">All Basics</p>
            <div className="space-y-0.5">
              {basics.map((g, i) => (
                <Link
                  key={g.slug}
                  href={`/basics/${g.slug}`}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-md text-xs transition-colors ${
                    g.slug === slug
                      ? "bg-[#205C49]/10 text-[#205C49]"
                      : "text-[#000000]/40 hover:text-[#000000] hover:bg-[#000000]/5"
                  }`}
                >
                  <span className="text-[0.5rem] tracking-widest text-[#000000]/20">{String(i + 1).padStart(2, "0")}</span>
                  {g.title}
                </Link>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-[#000000]/10">
              <Link href="/basics" className="text-[0.55rem] tracking-widest uppercase text-[#000000]/30 hover:text-[#205C49] transition-colors">
                ← All Basics
              </Link>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
