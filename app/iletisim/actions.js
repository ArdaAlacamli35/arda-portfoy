"use server";

import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";

const EPOSTA_DESENI = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// İletişim formu: alanlar tarayıcıda da kontrol ediliyor ama tarayıcı kontrolü
// atlatılabilir, bu yüzden aynı kontroller burada, sunucuda da yapılır.
export async function mesajGonder(_onceki, formData) {
  const ad_soyad = String(formData.get("ad_soyad") ?? "").trim();
  const eposta = String(formData.get("eposta") ?? "").trim();
  const mesaj = String(formData.get("mesaj") ?? "").trim();
  const kvkk = formData.get("kvkk") === "on";

  if (ad_soyad.length < 2 || ad_soyad.length > 100) {
    return { hata: "Ad soyad 2 ile 100 karakter arasında olmalı." };
  }
  if (!EPOSTA_DESENI.test(eposta) || eposta.length > 200) {
    return { hata: "Geçerli bir e-posta adresi yaz." };
  }
  if (mesaj.length < 5 || mesaj.length > 2000) {
    return { hata: "Mesaj 5 ile 2000 karakter arasında olmalı." };
  }
  if (!kvkk) {
    return { hata: "Mesaj gönderebilmek için aydınlatma metnini onaylaman gerekiyor." };
  }

  await sql`
    INSERT INTO iletisim_mesajlari (ad_soyad, eposta, mesaj, kvkk_onay)
    VALUES (${ad_soyad}, ${eposta}, ${mesaj}, ${kvkk})`;

  revalidatePath("/admin", "layout");
  return { tamam: "Mesajın ulaştı, teşekkürler! En kısa sürede dönüş yapacağım." };
}
