"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.08] bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-sm select-none">
            A
          </div>
          <span className="font-semibold text-white text-sm">Akış Digital</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#cozumler" className="text-sm text-zinc-400 hover:text-white transition-colors duration-150">
            Çözümler
          </a>
          <a href="#hakkimizda" className="text-sm text-zinc-400 hover:text-white transition-colors duration-150">
            Hakkımızda
          </a>
          <a href="#iletisim" className="text-sm text-zinc-400 hover:text-white transition-colors duration-150">
            İletişim
          </a>
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#iletisim"
            className="hidden md:inline-flex h-9 items-center px-4 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors duration-150"
          >
            Demo Talep Et
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-1.5 text-zinc-400 hover:text-white transition-colors"
            aria-label="Menüyü aç"
          >
            {open ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-white/[0.08] px-4 py-4 flex flex-col gap-3 bg-[#0a0a0a]">
          <a href="#cozumler" onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-white transition-colors py-1">
            Çözümler
          </a>
          <a href="#hakkimizda" onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-white transition-colors py-1">
            Hakkımızda
          </a>
          <a href="#iletisim" onClick={() => setOpen(false)} className="text-sm text-zinc-400 hover:text-white transition-colors py-1">
            İletişim
          </a>
          <a
            href="#iletisim"
            onClick={() => setOpen(false)}
            className="inline-flex h-10 items-center justify-center px-4 rounded-lg bg-white text-black text-sm font-medium hover:bg-zinc-100 transition-colors mt-1"
          >
            Demo Talep Et
          </a>
        </div>
      )}
    </nav>
  );
}
