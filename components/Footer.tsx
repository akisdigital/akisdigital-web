export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] py-8 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <a href="#" className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center text-white font-bold text-xs select-none">
            A
          </div>
          <span className="font-semibold text-white text-sm">Akış Digital</span>
        </a>

        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-xs text-zinc-500">
          <span>© 2026 Akış Digital. Tüm hakları saklıdır.</span>
          <span className="hidden sm:inline text-zinc-700">·</span>
          <span>İstanbul, Türkiye</span>
        </div>
      </div>
    </footer>
  );
}
