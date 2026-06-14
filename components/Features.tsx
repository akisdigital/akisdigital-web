const features = [
  {
    icon: "🤖",
    title: "AI Müşteri İletişimi",
    description:
      "7/24 çok dilli müşteri desteği. Operasyonel sorulara anlık, doğru yanıtlar.",
  },
  {
    icon: "📄",
    title: "Belge Otomasyonu",
    description:
      "Manuel veri girişine son. Operasyonel belgeleri AI ile işleyin, sisteminize otomatik aktarın.",
  },
  {
    icon: "⚡",
    title: "Sistem Entegrasyonu",
    description:
      "Mevcut ERP, CRM ve filo takip sistemlerinizle uyumlu çalışır.",
  },
];

export default function Features() {
  return (
    <section id="cozumler" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Çözümlerimiz</h2>
          <p className="text-zinc-400 max-w-lg mx-auto text-sm sm:text-base leading-relaxed">
            Lojistik operasyonlarınızı dönüştüren akıllı otomasyon araçları.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group p-7 rounded-2xl border border-white/[0.08] bg-white/[0.03] hover:border-violet-500/25 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className="text-3xl mb-5">{feature.icon}</div>
              <h3 className="text-white font-semibold text-base mb-2.5">{feature.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
