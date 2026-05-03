import type { Metadata } from "next";
import { Outfit, Inter, Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-accent" });
const notoSansTC = Noto_Sans_TC({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-zh" });

export const metadata: Metadata = {
  title: "Amigos Brunch | 屏東義式帕里尼早午餐",
  description: "Amigos 早午餐 — 義式帕里尼專門店，位於屏東市濟南街。Panini, brunch, and cafe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${outfit.variable} ${inter.variable} ${plusJakarta.variable} ${notoSansTC.variable}`}>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
