import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Impulse Cooking Guide",
  description: "Fire-cooked recipes and technique guides from Impulse",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0a0a0a] text-[#fafafa]">
        <Nav />
        <main className="flex-1">{children}</main>
        <footer className="border-t border-[#1c1c1c] px-6 py-10 mt-20">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase text-[#5a5a5a]">Impulse</span>
              <p className="text-xs text-[#5a5a5a] mt-1">Obsessively engineered for fire.</p>
            </div>
            <p className="text-xs text-[#5a5a5a]">© 2025 Impulse Labs</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
