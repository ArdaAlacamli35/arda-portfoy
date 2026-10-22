import Link from "next/link";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { mesajOkundu, mesajSil } from "../actions";

export const dynamic = "force-dynamic";

export default async function AdminMesajlarPage({ searchParams }) {
  await requireAdmin();

  // Güvenli arama: ad soyad VEYA e-postada arar, metin parametre olarak gider
  const q = String((await searchParams)?.q ?? "").slice(0, 100);
  const desen = "%" + q + "%";

  const mesajlar = await sql`
    SELECT * FROM iletisim_mesajlari
    WHERE ad_soyad ILIKE ${desen} OR eposta ILIKE ${desen}
    ORDER BY gonderim_zamani DESC
    LIMIT 100`;

  return (
    <>
      <h1 className="admin-title">Mesajlar</h1>

      <form className="search" role="search">
        <input name="q" defaultValue={q} placeholder="Ad veya e-postada ara" maxLength={100} aria-label="Ad veya e-postada ara" />
        <button className="btn alt small" type="submit">Ara</button>
        {q && <Link className="text-link" href="/admin/mesajlar">Temizle</Link>}
      </form>

      {mesajlar.length === 0 && <p className="muted">Mesaj bulunamadı.</p>}

      <ul className="messages">
        {mesajlar.map((m) => (
          <li key={m.id} className={m.okundu ? "" : "unread"}>
            <div className="msg-head">
              <b>{m.ad_soyad}</b>
              <a className="muted" href={`mailto:${m.eposta}`}>{m.eposta}</a>
              <span className="muted">
                {new Date(m.gonderim_zamani).toLocaleString("tr-TR", { timeZone: "Europe/Istanbul" })}
              </span>
              {!m.okundu && <span className="pill on">Yeni</span>}
            </div>
            <p className="msg-body">{m.mesaj}</p>
            <div className="row-actions">
              <span className="muted">KVKK onayı: {m.kvkk_onay ? "var" : "yok"}</span>
              {!m.okundu && (
                <form action={mesajOkundu}>
                  <input type="hidden" name="id" value={m.id} />
                  <button className="btn alt small" type="submit">Okundu işaretle</button>
                </form>
              )}
              <form action={mesajSil}>
                <input type="hidden" name="id" value={m.id} />
                <button className="link-danger" type="submit">Sil</button>
              </form>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
