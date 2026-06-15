import type { Metadata } from "next";
import "./globals.css";
import Nav from "./components/Nav";

export const metadata: Metadata = {
  title: "Impulse Cooking Guide",
  description: "Recipes, technique guides, and temperature references for the Impulse cooktop.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col bg-[#F4F5EF] text-[#1F2E2D]">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#1F2E2D]/10 px-6 py-10 mt-20 bg-[#F4F5EF]">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-4">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#1F2E2D]/40">Impulse</span>
              <p className="text-xs text-[#1F2E2D]/40 mt-1">Obsessively engineered for precision.</p>
            </div>
            <p className="text-xs text-[#1F2E2D]/30">© 2025 Impulse Labs</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
