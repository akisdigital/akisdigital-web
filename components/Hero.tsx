export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Radial gradient glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(139,92,246,0.18), transparent 70%)",
        }}
      />

      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-400 mb-8 fade-in">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-pulse" />
          Lojistik için yapay zeka otomasyonu
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.12] mb-6 fade-in fade-in-delay-1">
          Lojistiğin operasyonel yükünü{" "}
          <span className="bg-gradient-to-r from-violet-500 to-purple-600 bg-clip-text text-transparent">
            AI&apos;a devredin
          </span>
        </h1>

        <p className="text-base sm:text-lg text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed fade-in fade-in-delay-2">
          Akış Digital, Türk lojistik ve taşımacılık firmalarına workflow otomasyonu ve akıllı
          veri işleme çözümleri sunar. Manuel iş yükünü azaltın, operasyonel verimliliği artırın.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center fade-in fade-in-delay-3">
          <a
            href="#iletisim"
            className="inline-flex h-12 items-center justify-center px-7 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium text-sm hover:opacity-90 transition-opacity"
          >
            Demo Talep Et
          </a>
          <a
            href="#cozumler"
            className="inline-flex h-12 items-center justify-center px-7 rounded-xl border border-white/10 bg-white/5 text-white font-medium text-sm hover:bg-white/10 transition-colors"
          >
            Çözümleri Keşfet
          </a>
        </div>
      </div>
    </section>
  );
}
