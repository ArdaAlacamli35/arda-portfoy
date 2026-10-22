"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";
import { sql } from "@/lib/db";
import { requireAdmin, CEREZ_ADI } from "@/lib/auth";

// ---------- yardımcılar ----------

// Formdan metin alır: boşsa null, çok uzunsa keser
function metin(formData, ad, enFazla) {
  const deger = String(formData.get(ad) ?? "").trim();
  return deger ? deger.slice(0, enFazla) : null;
}

// Formdan sayı alır: geçerli tam sayı değilse null
function sayi(formData, ad) {
  const deger = Number(formData.get(ad));
  return Number.isInteger(deger) && deger > 0 ? deger : null;
}

// Referans formundaki alanları okuyup kontrol eder
function referansVerisi(formData) {
  const puan = sayi(formData, "puan");
  const tarih = metin(formData, "tarih", 10);
  return {
    kisi_adi: metin(formData, "kisi_adi", 120),
    unvan: metin(formData, "unvan", 120),
    yorum: metin(formData, "yorum", 1000),
    puan: puan && puan <= 5 ? puan : null,
    tarih: tarih && /^\d{4}-\d{2}-\d{2}$/.test(tarih) ? tarih : null,
    izin_alindi: formData.get("izin_alindi") === "on",
    kategori_id: sayi(formData, "kategori_id"),
    yayinda: formData.get("yayinda") === "on",
  };
}

function sayfalariYenile() {
  revalidatePath("/admin", "layout");
  revalidatePath("/referanslar");
}

// ---------- çıkış ----------

export async function cikisYap() {
  const cerezler = await cookies();
  const token = cerezler.get(CEREZ_ADI)?.value;
  if (token) await sql`DELETE FROM oturumlar WHERE token = ${token}`;
  cerezler.delete(CEREZ_ADI);
  redirect("/giris");
}

// ---------- referanslar ----------

export async function referansEkle(formData) {
  await requireAdmin();
  const r = referansVerisi(formData);
  if (!r.kisi_adi) return;

  await sql`
    INSERT INTO referanslar (kisi_adi, unvan, yorum, puan, tarih, izin_alindi, kategori_id, yayinda)
    VALUES (${r.kisi_adi}, ${r.unvan}, ${r.yorum}, ${r.puan}, ${r.tarih},
            ${r.izin_alindi}, ${r.kategori_id}, ${r.yayinda})`;

  sayfalariYenile();
}

export async function referansGuncelle(formData) {
  await requireAdmin();
  const id = sayi(formData, "id");
  const r = referansVerisi(formData);
  if (!id || !r.kisi_adi) return;

  await sql`
    UPDATE referanslar
    SET kisi_adi = ${r.kisi_adi}, unvan = ${r.unvan}, yorum = ${r.yorum}, puan = ${r.puan},
        tarih = ${r.tarih}, izin_alindi = ${r.izin_alindi}, kategori_id = ${r.kategori_id},
        yayinda = ${r.yayinda}
    WHERE id = ${id}`;

  sayfalariYenile();
  redirect("/admin/referanslar");
}

export async function referansSil(formData) {
  await requireAdmin();
  const id = sayi(formData, "id");
  if (!id) return;
  await sql`DELETE FROM referanslar WHERE id = ${id}`;
  sayfalariYenile();
}

// "Yayında / yayında değil" düğmesi: değeri tersine çevirir
export async function yayinDegistir(formData) {
  await requireAdmin();
  const id = sayi(formData, "id");
  if (!id) return;
  await sql`UPDATE referanslar SET yayinda = NOT yayinda WHERE id = ${id}`;
  sayfalariYenile();
}

// ---------- mesajlar ----------

export async function mesajOkundu(formData) {
  await requireAdmin();
  const id = sayi(formData, "id");
  if (!id) return;
  await sql`UPDATE iletisim_mesajlari SET okundu = true WHERE id = ${id}`;
  sayfalariYenile();
}

export async function mesajSil(formData) {
  await requireAdmin();
  const id = sayi(formData, "id");
  if (!id) return;
  await sql`DELETE FROM iletisim_mesajlari WHERE id = ${id}`;
  sayfalariYenile();
}
