import PageIntro from "@/components/PageIntro";
import { sql } from "@/lib/db";

export const metadata = { title: "Çerez Politikası" };
export const dynamic = "force-dynamic";

const TUR_ADI = {
  zorunlu: "Zorunlu",
  işlevsel: "İşlevsel",
  analitik: "Analitik",
  pazarlama: "Pazarlama",
};

export default async function CerezPolitikasiPage() {
  // Çerez listesi kodda değil, veritabanındaki cerezler tablosunda tutulur
  let cerezler = [];
  try {
    cerezler = await sql`SELECT ad, tur, amac, sure FROM cerezler ORDER BY tur, ad`;
  } catch {
    cerezler = null; // tablo henüz oluşturulmadıysa
  }

  return (
    <div className="wrap">
      <PageIntro title="Çerez Politikası">
        Bu sitede hangi çerezlerin, ne amaçla ve ne kadar süreyle kullanıldığı.
      </PageIntro>

      <div className="prose">
        <p>
          Çerezler, bir web sitesinin tarayıcına kaydettiği küçük metin dosyalarıdır. Bu site
          reklam, takip veya analiz çerezi kullanmaz. Kullanılan tek çerez, yalnızca site
          yöneticisinin yönetim paneline girişini sağlayan zorunlu bir oturum çerezidir; site
          ziyaretçilerinin tarayıcısına hiçbir çerez yazılmaz.
        </p>
        <p>
          KVKK Kurulu&apos;nun Çerez Uygulamaları Hakkında Rehberi&apos;ne göre, bir hizmetin
          çalışması için kesinlikle gerekli olan zorunlu çerezler için açık rıza alınması gerekmez;
          ancak bu sayfadaki gibi bilgilendirme yapılır. Google Analytics gibi üçüncü taraf
          analitik araçları veya reklam (pazarlama) çerezleri kullanılsaydı, bunlar yalnızca
          ziyaretçinin açık rızasıyla, onay verildikten sonra çalıştırılabilirdi.
        </p>
      </div>

      <section className="section">
        <h2>Kullanılan çerezler</h2>
        {cerezler === null && <p className="muted">Çerez listesi şu anda yüklenemedi.</p>}
        {cerezler?.length === 0 && <p className="muted">Listelenecek çerez yok.</p>}
        {cerezler?.length > 0 && (
          <div className="table-wrap">
            <table className="table">
              <thead>
                <tr>
                  <th>Çerez</th>
                  <th>Tür</th>
                  <th>Amaç</th>
                  <th>Süre</th>
                </tr>
              </thead>
              <tbody>
                {cerezler.map((c) => (
                  <tr key={c.ad}>
                    <td><code>{c.ad}</code></td>
                    <td>{TUR_ADI[c.tur] ?? c.tur}</td>
                    <td>{c.amac}</td>
                    <td className="nowrap">{c.sure}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      <section className="section prose">
        <h2>Çerezleri nasıl silebilirsin?</h2>
        <p>
          Tarayıcının ayarlarından (Gizlilik → Çerezler ve site verileri) bu sitenin çerezlerini
          istediğin zaman görebilir ve silebilirsin. Sorular için{" "}
          <a className="text-link" href="mailto:alacamliarda35@gmail.com">alacamliarda35@gmail.com</a>.
        </p>
      </section>
    </div>
  );
}
