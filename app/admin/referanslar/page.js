import Link from "next/link";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { referansEkle, referansSil, yayinDegistir } from "../actions";
import ReferansFormu from "../ReferansFormu";

export const dynamic = "force-dynamic";

export default async function AdminReferanslarPage({ searchParams }) {
  await requireAdmin();

  // Güvenli arama (Görev 6): kullanıcıdan gelen metin en fazla 100 karakter
  // ve SQL'e ${...} ile PARAMETRE olarak gider, metne yapıştırılmaz.
  const q = String((await searchParams)?.q ?? "").slice(0, 100);

  // JOIN: her referansın kurum adını referans_kurumlari tablosundan getirir.
  // LEFT JOIN kullandık ki kurumu boş olan kayıtlar da listede görünsün.
  const kayitlar = await sql`
    SELECT r.*, k.ad AS kurum_adi
    FROM referanslar r
    LEFT JOIN referans_kurumlari k ON k.id = r.kategori_id
    WHERE r.kisi_adi ILIKE ${"%" + q + "%"}
    ORDER BY r.id DESC
    LIMIT 50`;

  const kurumlar = await sql`SELECT id, ad FROM referans_kurumlari ORDER BY ad`;

  return (
    <>
      <h1 className="admin-title">Referanslar</h1>

      <form className="search" role="search">
        <input name="q" defaultValue={q} placeholder="Kişi adında ara" maxLength={100} aria-label="Kişi adında ara" />
        <button className="btn alt small" type="submit">Ara</button>
        {q && <Link className="text-link" href="/admin/referanslar">Temizle</Link>}
      </form>

      <div className="table-wrap">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Kişi</th>
              <th>Kurum</th>
              <th>Puan</th>
              <th>Tarih</th>
              <th>İzin</th>
              <th>Durum</th>
              <th><span className="sr-only">İşlemler</span></th>
            </tr>
          </thead>
          <tbody>
            {kayitlar.length === 0 && (
              <tr>
                <td colSpan={8} className="muted">Kayıt bulunamadı.</td>
              </tr>
            )}
            {kayitlar.map((r) => (
              <tr key={r.id}>
                <td className="muted">{r.id}</td>
                <td>
                  <b>{r.kisi_adi}</b>
                  {r.unvan && <span className="muted block">{r.unvan}</span>}
                </td>
                <td>{r.kurum_adi ?? <span className="muted">—</span>}</td>
                <td>{r.puan ?? "—"}</td>
                <td className="nowrap">{r.tarih ? new Date(r.tarih).toLocaleDateString("tr-TR") : "—"}</td>
                <td>{r.izin_alindi ? "Var" : <span className="warn">Yok</span>}</td>
                <td>
                  <form action={yayinDegistir}>
                    <input type="hidden" name="id" value={r.id} />
                    <button className={`pill ${r.yayinda ? "on" : ""}`} type="submit" title="Durumu değiştir">
                      {r.yayinda ? "Yayında" : "Yayında değil"}
                    </button>
                  </form>
                </td>
                <td>
                  <div className="row-actions">
                    <Link className="text-link" href={`/admin/referanslar/${r.id}`}>Düzenle</Link>
                    <form action={referansSil}>
                      <input type="hidden" name="id" value={r.id} />
                      <button className="link-danger" type="submit">Sil</button>
                    </form>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section className="admin-section">
        <h2>Yeni referans ekle</h2>
        <ReferansFormu action={referansEkle} kurumlar={kurumlar} dugme="Ekle" />
      </section>
    </>
  );
}
