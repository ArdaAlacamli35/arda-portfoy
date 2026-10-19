import PageIntro from "@/components/PageIntro";

export const metadata = { title: "Projeler" };

export default function ProjelerPage() {
  return (
    <div className="wrap">
      <PageIntro title="Projeler">
        Veriyi topladığım, temizlediğim ve bir soruya cevap verecek hale getirdiğim çalışmalar.
      </PageIntro>

      <article className="project">
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

      <article className="project">
        <p className="kind">Bitirme projesi</p>
        <h2>Makine Öğrenmesi ile İkinci El Araç Fiyat Tahmini</h2>
        <div className="prose">
          <p>
            İkinci el araçların teknik ve fiziksel özelliklerinin piyasa değeri üzerindeki
            etkisini analiz eden, makine öğrenmesi tabanlı bir proje. Python ile veri setleri
            temizlendi, aykırı değer analizi (EDA) ve özellik mühendisliği süreçleri yürütüldü.
          </p>
        </div>
        <dl className="io">
          <dt>Girdi</dt>
          <dd>Aracın teknik ve fiziksel özellikleri</dd>
          <dt>Çıktı</dt>
          <dd>Tahmini piyasa değeri</dd>
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
