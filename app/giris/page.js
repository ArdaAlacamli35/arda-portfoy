import { redirect } from "next/navigation";
import PageIntro from "@/components/PageIntro";
import { aktifYonetici } from "@/lib/auth";
import GirisFormu from "./GirisFormu";

export const metadata = { title: "Yönetici girişi", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function GirisPage() {
  // Zaten giriş yapmışsa doğrudan panele gönder
  if (await aktifYonetici()) redirect("/admin");

  return (
    <div className="wrap">
      <PageIntro title="Yönetici girişi">Bu sayfa yalnızca site yöneticisi içindir.</PageIntro>
      <GirisFormu />
    </div>
  );
}
