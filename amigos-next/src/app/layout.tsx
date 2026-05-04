import type { Metadata, Viewport } from "next";
import { Outfit, Inter, Noto_Sans_TC, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const plusJakarta = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-accent" });
const notoSansTC = Noto_Sans_TC({ weight: ["300", "400", "500", "700"], subsets: ["latin"], variable: "--font-zh" });

export const metadata: Metadata = {
  metadataBase: new URL("https://amigos-brunch.vercel.app"),
  title: "Amigos Brunch | 屏東義式帕里尼早午餐",
  description: "屏東早午餐推薦！Amigos 早午餐，在地十年帕里尼專門店，20+ 口味每天 7:30 現烤。朋友聚餐、家庭早午餐、公司團體訂餐。屏東市濟南街14號，電話 (08) 766-9690。",
  keywords: ["屏東早午餐", "屏東帕里尼", "屏東早餐", "Pingtung brunch", "panini Pingtung", "Amigos Brunch", "屏東聚餐", "屏東團體訂餐"],
  alternates: {
    languages: {
      "zh-TW": "https://amigos-brunch.vercel.app",
      "en": "https://amigos-brunch.vercel.app",
    },
  },
  openGraph: {
    title: "Amigos Brunch | 屏東義式帕里尼早午餐",
    description: "屏東在地十年帕里尼專門店，20+ 口味每天 7:30 現烤。朋友聚餐、家庭早午餐、團體訂餐歡迎洽詢。",
    url: "https://amigos-brunch.vercel.app",
    siteName: "Amigos Brunch",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/panini1.png", width: 1200, height: 630, alt: "Amigos Brunch 義式帕里尼" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Amigos Brunch | Italian Panini & Brunch in Pingtung, Taiwan",
    description: "Pingtung's favorite panini spot. 20+ flavors hot-pressed daily from 7:30 AM. Perfect for friends, family brunch & corporate group orders.",
    images: ["/panini1.png"],
  },
  other: {
    "og:phone_number": "(08) 766-9690",
    "og:street-address": "濟南街14號",
    "og:locality": "屏東市",
    "og:country-name": "Taiwan",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-Hant" className={`${outfit.variable} ${inter.variable} ${plusJakarta.variable} ${notoSansTC.variable}`}>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Restaurant",
              name: "Amigos 早午餐",
              alternateName: "Amigos Brunch",
              description: "屏東早午餐推薦！在地十年帕里尼專門店，20+ 口味每天 7:30 現烤。早午餐、輕食、咖啡，團體訂餐歡迎洽詢。",
              url: "https://amigos-brunch.vercel.app",
              telephone: "+886-8-766-9690",
              servesCuisine: ["Italian", "Brunch", "Panini", "Cafe"],
              priceRange: "$80–$235",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.2",
                reviewCount: "564",
                bestRating: "5",
              },
              address: {
                "@type": "PostalAddress",
                streetAddress: "濟南街14號",
                addressLocality: "屏東市",
                addressRegion: "屏東縣",
                addressCountry: "TW",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 22.6727,
                longitude: 120.4880,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                opens: "07:30",
                closes: "13:30",
              },
              sameAs: ["https://www.facebook.com/amigosyan"],
              hasMenu: {
                "@type": "Menu",
                name: "全日菜單",
                description: "帕里尼、早午餐拼盤、輕食三明治、午餐精選、咖啡與茶飲",
              },
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
