import { Pixelify_Sans, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Background from "@/components/Background";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const px = Pixelify_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["500", "700"],
  display: "swap",
  variable: "--font-px",
});
const body = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-body",
});
const mono = JetBrains_Mono({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500"],
  display: "swap",
  variable: "--font-mono",
});

export const metadata = {
  title: {
    default: "Arda Alaçamlı | Portföy",
    template: "%s | Arda Alaçamlı",
  },
  description:
    "Arda Alaçamlı: Büyük Veri Analistliği öğrencisi, Python ve C# ile proje geliştiriyor.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className={`${px.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <Background />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
