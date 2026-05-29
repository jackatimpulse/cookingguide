"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#1c1c1c] bg-[#0a0a0a]/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <Image
            src="/impulse-logo.svg"
            alt="Impulse"
            width={80}
            height={20}
            className="brightness-0 invert"
          />
          <span className="text-[#5a5a5a] text-sm">/ Cooking Guide</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#fafafa] transition-colors">
            All Recipes
          </Link>
          <Link href="/?cat=Pizza" className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#fafafa] transition-colors">
            Pizza
          </Link>
          <Link href="/?cat=Wood-Fired" className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#fafafa] transition-colors">
            Wood-Fired
          </Link>
          <Link href="/?cat=Baking" className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#fafafa] transition-colors">
            Baking
          </Link>
        </nav>

        <button
          className="md:hidden text-[#a0a0a0] hover:text-[#fafafa]"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            {open ? (
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            ) : (
              <>
                <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-[#1c1c1c] bg-[#0a0a0a] px-6 py-4 flex flex-col gap-4">
          {["All Recipes", "Pizza", "Wood-Fired", "Baking"].map((item) => (
            <Link
              key={item}
              href={item === "All Recipes" ? "/" : `/?cat=${item}`}
              onClick={() => setOpen(false)}
              className="text-xs tracking-widest uppercase text-[#a0a0a0] hover:text-[#fafafa] transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
