import PageIntro from "@/components/PageIntro";
import { sql } from "@/lib/db";

export const metadata = { title: "Referanslar" };

// Her istekte veritabanından taze veri: panelden eklenen kayıt hemen görünür
export const dynamic = "force-dynamic";

function Yildizlar({ puan }) {
  if (!puan) return null;
  return (
    <span className="stars" aria-label={`5 üzerinden ${puan} puan`}>
      {"★".repeat(puan)}
      <span aria-hidden="true">{"★".repeat(5 - puan)}</span>
    </span>
  );
}

function Kart({ r }) {
  return (
    <figure className="ref-card">
      {r.yorum && <blockquote>{r.yorum}</blockquote>}
      <figcaption>
        <b>{r.kisi_adi}</b>
        <span className="muted">{[r.unvan, r.kurum_adi].filter(Boolean).join(", ")}</span>
        <Yildizlar puan={r.puan} />
      </figcaption>
    </figure>
  );
}

export default async function ReferanslarPage() {
  // Sitede yalnızca yayinda = true VE izin_alindi = true olan kayıtlar gösterilir.
  // Referanslar gerçek kişilere ait kişisel veridir; izni olmayan yayınlanmaz.

  // Öne çıkanlar: Görev 3.2'deki "en yeni 3 referans" sorgusu
  const oneCikanlar = await sql`
    SELECT r.*, k.ad AS kurum_adi
    FROM referanslar r
    LEFT JOIN referans_kurumlari k ON k.id = r.kategori_id
    WHERE r.yayinda = true AND r.izin_alindi = true
    ORDER BY r.tarih DESC NULLS LAST
    LIMIT 3`;

  const tumu = await sql`
    SELECT r.*, k.ad AS kurum_adi
    FROM referanslar r
    LEFT JOIN referans_kurumlari k ON k.id = r.kategori_id
    WHERE r.yayinda = true AND r.izin_alindi = true
    ORDER BY r.tarih DESC NULLS LAST, r.id DESC`;

  const oneCikanIdler = new Set(oneCikanlar.map((r) => r.id));
  const digerleri = tumu.filter((r) => !oneCikanIdler.has(r.id));

  return (
    <div className="wrap">
      <PageIntro title="Referanslar">
        Birlikte okuduğum, çalıştığım ve proje yaptığım kişilerin benim hakkımdaki görüşleri.
      </PageIntro>

      {tumu.length === 0 && <p className="muted">Henüz yayınlanmış bir referans yok.</p>}

      {oneCikanlar.length > 0 && (
        <section>
          <h2 className="eyebrow">Öne çıkanlar</h2>
          <div className="ref-grid featured">
            {oneCikanlar.map((r) => (
              <Kart key={r.id} r={r} />
            ))}
          </div>
        </section>
      )}

      {digerleri.length > 0 && (
        <section className="section">
          <h2 className="eyebrow">Diğer referanslar</h2>
          <div className="ref-grid">
            {digerleri.map((r) => (
              <Kart key={r.id} r={r} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
