import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "./db";

// Tarayıcıda giriş kartını (token) tutan çerezin adı
export const CEREZ_ADI = "admin_oturum";

// Oturum süresi: 2 saat (saniye cinsinden)
export const OTURUM_SURESI = 2 * 60 * 60;

// Çerezdeki token'ı oturumlar tablosunda arar.
// Token yoksa, tabloda bulunamazsa ya da süresi dolmuşsa null döner.
export async function aktifYonetici() {
  const token = (await cookies()).get(CEREZ_ADI)?.value;
  if (!token) return null;

  const satirlar = await sql`
    SELECT y.id, y.eposta
    FROM oturumlar o
    JOIN yoneticiler y ON y.id = o.yonetici_id
    WHERE o.token = ${token} AND o.bitis > now()`;

  return satirlar[0] ?? null;
}

// /admin sayfalarının ve tüm Server Action'ların başında çağrılır.
// Geçerli oturum yoksa kişiyi /giris sayfasına gönderir.
export async function requireAdmin() {
  const yonetici = await aktifYonetici();
  if (!yonetici) redirect("/giris");
  return yonetici;
}
