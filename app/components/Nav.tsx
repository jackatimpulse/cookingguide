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
    <header className="sticky top-0 z-50 border-b border-[#1c1c1c] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between gap-8">
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/impulse-logo.svg"
            alt="Impulse"
            width={80}
            height={20}
            className="brightness-0 invert"
          />
          <span className="text-[#1c1c1c] select-none">|</span>
          <span className="text-xs text-[#5a5a5a] tracking-wide whitespace-nowrap">Cooking Guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(({ href, label }) => {
            const active = pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`text-xs tracking-widest uppercase transition-colors ${
                  active ? "text-[#fafafa]" : "text-[#5a5a5a] hover:text-[#a0a0a0]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <button
          className="md:hidden text-[#a0a0a0] hover:text-[#fafafa] shrink-0"
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
        <div className="md:hidden border-t border-[#1c1c1c] bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#fafafa] transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
