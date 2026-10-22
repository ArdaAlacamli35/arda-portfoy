import { neon } from "@neondatabase/serverless";

// Veritabanı bağlantısı. Adres koda yazılmaz; Vercel'deki ve .env.local'deki
// DATABASE_URL değişkeninden okunur. Böylece GitHub'a hiç gitmez.
//
// Kural: sorgularda değişkenler HER ZAMAN ${...} içinde verilir.
// Kütüphane onları SQL metnine yapıştırmaz, $1, $2 gibi parametre olarak
// ayrı gönderir. Bu, SQL injection saldırısını engeller.
//   Doğru:  await sql`SELECT * FROM referanslar WHERE id = ${id}`
//   YASAK:  "SELECT * FROM referanslar WHERE id = " + id

let baglanti;

// Bağlantı ilk sorguda kurulur (site derlenirken adres gerekmesin diye).
// Kullanımı ödevdeki neon(...) ile aynıdır: sql`...`
export function sql(parcalar, ...degerler) {
  baglanti ??= neon(process.env.DATABASE_URL);
  return baglanti(parcalar, ...degerler);
}
