import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Akış Digital — AI ile Çalışan Lojistik Otomasyonu",
  description:
    "Akış Digital, Türk freight forwarding firmalarına workflow otomasyonu ve akıllı veri işleme çözümleri sunar. Manuel iş yükünü azaltın, operasyonel verimliliği artırın.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className={`${inter.variable} h-full`}>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
