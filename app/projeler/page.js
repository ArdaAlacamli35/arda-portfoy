import Sprite from "@/components/Sprite";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Projeler" };

export default function ProjelerPage() {
  return (
    <section className="page">
      <div className="wrap">
        <SectionTitle>Projeler</SectionTitle>

        <article className="card">
          <span className="ic" style={{ "--c": "var(--peach)" }}>
            <Sprite name="chart" />
          </span>
          <span className="lbl" style={{ "--c": "var(--mint)" }}>Bitirme projesi</span>
          <h3>Makine Öğrenmesi ile İkinci El Araç Fiyat Tahmini</h3>
          <p style={{ marginTop: 10, maxWidth: "56ch", marginInline: "auto" }}>
            İkinci el araçların teknik ve fiziksel özelliklerinin piyasa değeri üzerindeki
            etkisini analiz eden, makine öğrenmesi tabanlı bir proje. Python ile veri setleri
            temizlendi, aykırı değer analizi (EDA) ve özellik mühendisliği süreçleri yürütüldü.
          </p>
          <a
            className="repo"
            href="https://github.com/ArdaAlacamli35/car-price-analysis"
            target="_blank"
            rel="noopener noreferrer"
          >
            <small>GitHub</small>
            <b>car-price-analysis</b>
            <span>Projeyi GitHub&apos;da incele →</span>
          </a>
        </article>

        <div className="card">
          <h3>Proje girdileri ve çıktısı</h3>
          <div className="io">
            <span className="pill">Teknik özellikler</span>
            <span className="pill">Fiziksel özellikler</span>
            <i className="arr" />
            <span className="pill" style={{ "--c": "var(--glow)" }}>Piyasa değeri</span>
          </div>
        </div>
      </div>
    </section>
  );
}
