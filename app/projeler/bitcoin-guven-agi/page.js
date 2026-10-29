import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Bitcoin OTC Güven Ağı",
  description: "İşaretli ağlarda yapısal denge analizi: güvensizlik nerede kümeleniyor?",
};

const KOD = "https://github.com/ArdaAlacamli35/bitcoin-guven-agi";

export default function BitcoinVaka() {
  return (
    <div className="wrap case">
      <PageIntro title="Kripto Takas Platformunda Güven Ağı">
        Bitcoin OTC&apos;de 5.881 kullanıcının birbirine verdiği 35.592 güven puanından işaretli bir ağ kurdum.
        Sorum şuydu: Güvensizlik belirli kümelerde mi toplanıyor, ve ağ yapısal olarak dengeli mi?
      </PageIntro>

      <div className="actions">
        <a className="btn" href="/ag/bitcoin-guven-agi/index.html" target="_blank" rel="noopener">Etkileşimli ağı tam ekran aç</a>
        <a className="btn alt" href={KOD} target="_blank" rel="noopener noreferrer">Kod, rapor ve defter</a>
      </div>

      <section className="section">
        <h2>Etkileşimli ağ</h2>
        <p className="muted">
          Bir kullanıcıyı arayın, bir düğüme tıklayın ya da bir topluluğu filtreleyin. Turuncu çizgiler güvensizlik
          bildiren puanlardır. Kimlikler anonimdir.
        </p>
        <div className="embed">
          <iframe
            src="/ag/bitcoin-guven-agi/index.html"
            title="Bitcoin OTC güven ağı: etkileşimli görselleştirme"
            loading="lazy"
          />
        </div>
      </section>

      <section className="section">
        <h2>Bulgular</h2>
        <dl className="io">
          <dt>Ağ dengeli</dt>
          <dd>
            Üçgenlerin %87,2&apos;si dengeli. İşaretler rastgele dağıtılsaydı bu oran %67,6 olurdu (1.000 rastgele
            ağ, z = 31). &quot;Düşmanımın düşmanı dostumdur&quot; üçgenleri rastlantıdan 2,9 kat sık.
          </dd>
          <dt>Güvensizlik sınırlarda</dt>
          <dd>
            Negatif puanların %41&apos;i topluluklar arasında (pozitiflerde %33). Gruplar kendi içinde güveniyor,
            güvensizlik gruplar arasındaki sınırda yaşanıyor.
          </dd>
          <dt>Üç istisna</dt>
          <dd>
            T7 ve T8&apos;de birkaç hesap çok sayıda kullanıcıyı toplu olarak işaretlemiş. T8&apos;de negatiflerin
            %95&apos;i yalnızca 3 hesaptan geliyor. T9&apos;da ise kullanıcılar birbirine karşılıklı −10 vermiş.
          </dd>
          <dt>İtibar ≠ güvensizlik</dt>
          <dd>
            Pozitif ve negatif alt ağlardaki PageRank neredeyse ilişkisiz (ρ = −0,06). Tek bir &quot;net puan&quot;
            bu iki bilgiyi birbirine karıştırır.
          </dd>
        </dl>
        <figure className="case-figure light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projeler/bitcoin/yapisal_denge.png" alt="Gözlenen üçgen tipleri ile rastgele işaretli ağların karşılaştırması" loading="lazy" />
          <figcaption>Dengesiz &quot;++−&quot; üçgenleri beklenenden çok daha az</figcaption>
        </figure>
        <figure className="case-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projeler/bitcoin/poster.webp" alt="A3 ağ posteri: topluluklar renkli, güvensizlik kenarları turuncu" loading="lazy" />
          <figcaption>A3 poster (PDF depoda)</figcaption>
        </figure>
      </section>

      <section className="section">
        <h2>Yöntem</h2>
        <ul className="tags" aria-label="Kullanılan yöntemler">
          <li>Yapısal denge</li>
          <li>İşaretli PageRank</li>
          <li>Louvain / Leiden</li>
          <li>Configuration model</li>
          <li>Kuvvet yasası testi</li>
          <li>Sigma.js</li>
        </ul>
        <p className="muted case-note">
          Bulgular ağ yapısından çıkarılmıştır, nedensellik iddiası taşımaz. Kimin dolandırıcı olduğu bu veriden çıkarılamaz.
        </p>
      </section>
    </div>
  );
}
