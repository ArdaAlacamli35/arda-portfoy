import { Schibsted_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  themeColor: "#0f1b33",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={sans.variable}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
