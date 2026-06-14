"use client";
import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mqeowwap", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "w-full h-11 px-4 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-150";

  return (
    <section id="iletisim" className="py-24 px-4 sm:px-6 border-t border-white/[0.06]">
      <div className="max-w-lg mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">İletişime Geçin</h2>
          <p className="text-zinc-400 text-sm sm:text-base">
            Operasyonlarınıza nasıl değer katabileceğimizi konuşalım.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-xs font-medium text-zinc-400 mb-2">
              İsim
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder="Adınız Soyadınız"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-xs font-medium text-zinc-400 mb-2">
              E-posta
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="sirket@ornek.com"
              className={inputClass}
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-xs font-medium text-zinc-400 mb-2">
              Mesaj
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={5}
              placeholder="Nasıl yardımcı olabiliriz?"
              className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.04] text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.07] transition-all duration-150 resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="w-full h-12 rounded-xl bg-gradient-to-r from-violet-500 to-purple-600 text-white font-medium text-sm hover:opacity-90 transition-opacity disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {status === "sending" ? "Gönderiliyor..." : "Gönder"}
          </button>

          {status === "success" && (
            <p className="text-center text-sm text-emerald-400 pt-1">
              Mesajınız alındı, en kısa sürede geri döneceğiz.
            </p>
          )}
          {status === "error" && (
            <p className="text-center text-sm text-red-400 pt-1">
              Bir hata oluştu. Lütfen tekrar deneyin.
            </p>
          )}
        </form>

        <p className="text-center text-xs text-zinc-500 mt-8">
          Doğrudan iletişim için{" "}
          <a
            href="mailto:info@akisdigital.com"
            className="text-violet-400 hover:text-violet-300 transition-colors"
          >
            info@akisdigital.com
          </a>
        </p>
      </div>
    </section>
  );
}
