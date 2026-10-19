import PageIntro from "@/components/PageIntro";

export const metadata = { title: "Projeler" };

const models = [
  { name: "Gradient Boosting", r2: 95.8, best: true },
  { name: "Random Forest", r2: 95.3 },
  { name: "Doğrusal Regresyon", r2: 69.7 },
];

export default function ProjelerPage() {
  return (
    <div className="wrap">
      <PageIntro title="Projeler">
        Veriyi topladığım, temizlediğim ve bir soruya cevap verecek hale getirdiğim çalışmalar.
      </PageIntro>

      <article className="project" data-reveal>
        <p className="kind">Veri hikâyesi</p>
        <h2>Türkiye Deprem Hikâyesi</h2>
        <div className="prose">
          <p>
            1914–2023 yılları arasında Türkiye&apos;de kaydedilen depremleri, sayfa kaydırıldıkça
            ilerleyen interaktif bir veri hikâyesiyle anlatan proje. Kaggle&apos;daki deprem veri
            seti Python ile temizlenip analiz edildi; depremlerin coğrafi dağılımının, derinliğinin
            ve büyüklüğünün yıllar içinde bölgelere göre nasıl değiştiği harita ve grafiklerle
            gösterildi.
          </p>
        </div>
        <ul className="tags" aria-label="İncelenen değişkenler">
          <li>Konum</li>
          <li>Derinlik</li>
          <li>Büyüklük</li>
          <li>Bölgesel değişim</li>
        </ul>
        <div className="actions">
          <a
            className="btn"
            href="https://turkiyedepremhikayesi.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hikâyeyi aç
          </a>
          <a
            className="btn alt"
            href="https://github.com/ArdaAlacamli35/turkiye-deprem-hikayesi"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kodu GitHub&apos;da incele
          </a>
        </div>
      </article>

      <article className="project" data-reveal>
        <p className="kind">Makine öğrenmesi projesi</p>
        <h2>Makine Öğrenmesi ile İkinci El Araç Fiyat Tahmini</h2>
        <div className="prose">
          <p>
            ABD&apos;de gerçekleşmiş 528 bin ikinci el araç satışıyla, aracın markası, modeli, yaşı,
            kat ettiği mesafe ve durumundan satış fiyatını tahmin eden bir model geliştirdim. Veriyi
            temizlerken aracın durum puanının iki farklı ölçekte girildiğini fark edip tek ölçeğe
            getirdim, satış tarihinden araç yaşını hesapladım ve üç modeli karşılaştırdım.
          </p>
        </div>

        <figure className="model-compare">
          <figcaption>Test verisinde açıklanan fiyat değişimi (R²)</figcaption>
          <ul>
            {models.map((m) => (
              <li key={m.name} className={m.best ? "best" : undefined}>
                <span className="name">{m.name}</span>
                <span className="bar" aria-hidden="true">
                  <span style={{ width: `${m.r2}%` }} />
                </span>
                <span className="value">%{m.r2.toLocaleString("tr-TR")}</span>
              </li>
            ))}
          </ul>
        </figure>

        <dl className="io">
          <dt>En iyi model</dt>
          <dd>Gradient Boosting: tahminler gerçek fiyattan ortalama 1.199 $ sapıyor</dd>
          <dt>Bulgu</dt>
          <dd>Fiyatı en çok aracın kat ettiği mesafe belirliyor, ardından kasa tipi ve marka</dd>
        </dl>
        <div className="actions">
          <a
            className="btn alt"
            href="https://github.com/ArdaAlacamli35/car-price-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kodu GitHub&apos;da incele
          </a>
        </div>
      </article>
    </div>
  );
}
