import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const sans = Schibsted_Grotesk({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-sans",
});

export const metadata = {
  title: {
    default: "Arda Alaçamlı | Veri Analizi Portföyü",
    template: "%s | Arda Alaçamlı",
  },
  description:
    "Arda Alaçamlı: Python ile veri temizleme, analiz ve makine öğrenmesi projeleri geliştiren Büyük Veri Analistliği öğrencisi.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#121315",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={sans.variable} suppressHydrationWarning>
      <head>
        {/* JS varsa kaydırma animasyonları için öğeleri başta gizle */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
