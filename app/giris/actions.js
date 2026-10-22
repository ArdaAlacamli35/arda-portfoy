"use server";

import crypto from "node:crypto";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { sql } from "@/lib/db";
import { CEREZ_ADI, OTURUM_SURESI } from "@/lib/auth";

// Hatalı girişte her durumda aynı mesaj: saldırgan, e-postanın mı yoksa
// şifrenin mi yanlış olduğunu öğrenemesin.
const HATA = { hata: "E-posta veya şifre hatalı" };

export async function girisYap(_onceki, formData) {
  const eposta = String(formData.get("eposta") ?? "").trim().toLowerCase().slice(0, 200);
  const sifre = String(formData.get("sifre") ?? "").slice(0, 200);
  if (!eposta || !sifre) return HATA;

  const satirlar = await sql`
    SELECT id, sifre_hash FROM yoneticiler WHERE lower(eposta) = ${eposta}`;
  const yonetici = satirlar[0];

  // bcrypt.compare: girilen şifreyi aynı yöntemle özetleyip kayıtlı özetle karşılaştırır
  const dogru = yonetici ? await bcrypt.compare(sifre, yonetici.sifre_hash) : false;
  if (!dogru) return HATA;

  // Süresi dolmuş eski oturumları temizle
  await sql`DELETE FROM oturumlar WHERE bitis < now()`;

  // Tahmin edilemeyen rastgele giriş kartı: 32 bayt = 64 karakter
  const token = crypto.randomBytes(32).toString("hex");
  await sql`
    INSERT INTO oturumlar (token, yonetici_id, bitis)
    VALUES (${token}, ${yonetici.id}, now() + interval '2 hours')`;

  (await cookies()).set(CEREZ_ADI, token, {
    httpOnly: true, // sayfadaki JavaScript çerezi okuyamaz
    secure: process.env.NODE_ENV === "production", // canlı sitede yalnızca HTTPS ile gönderilir
    sameSite: "lax", // başka sitelerden gelen isteklerle gönderilmez
    path: "/",
    maxAge: OTURUM_SURESI,
  });

  redirect("/admin");
}
