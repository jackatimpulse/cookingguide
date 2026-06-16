"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/basics", label: "Basics" },
  { href: "/temperature-guide", label: "Temperature Guide" },
  { href: "/recipes", label: "Recipes" },
  { href: "/pan-techniques", label: "Pan Techniques" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[#1F2E2D]/10 bg-[#F4F5EF]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/impulse-logo.svg"
            alt="Impulse"
            width={72}
            height={18}
            className="brightness-0"
          />
          <span className="text-[#1F2E2D]/20 select-none">|</span>
          <span className="text-xs text-[#1F2E2D]/50 tracking-wide whitespace-nowrap">Cooking Guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  active ? "text-[#1F2E2D]" : "text-[#1F2E2D]/40 hover:text-[#1F2E2D]/70"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-[#1F2E2D]/50 hover:text-[#1F2E2D] shrink-0 p-2 -mr-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1F2E2D]/10 bg-[#F4F5EF] px-6 py-5 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-widest uppercase text-[#1F2E2D]/50 hover:text-[#1F2E2D] transition-colors py-3 border-b border-[#1F2E2D]/8 last:border-0"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
