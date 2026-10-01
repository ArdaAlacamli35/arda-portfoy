import Sprite from "@/components/Sprite";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Deneyim" };

export default function DeneyimPage() {
  return (
    <section className="page">
      <div className="wrap">
        <SectionTitle>Deneyim ve Eğitim</SectionTitle>

        <div className="step">
          <div className="card" style={{ "--c": "var(--glow)" }}>
            <span className="ic"><Sprite name="star" /></span>
            <h3>Hedef</h3>
            <p className="meta">Büyük Veri Analisti</p>
          </div>
        </div>
        <div className="link" />

        <div className="step">
          <div className="card" style={{ "--c": "var(--mint)" }}>
            <span className="ic"><Sprite name="snow" /></span>
            <h3>Büyük Veri Analistliği, Ön Lisans</h3>
            <p className="meta">Manisa Celal Bayar Üniversitesi</p>
            <p className="now">Devam ediyor (son yıl)</p>
          </div>
        </div>
        <div className="link" />

        <div className="step">
          <div className="card" style={{ "--c": "var(--sky)" }}>
            <span className="ic"><Sprite name="bk" /></span>
            <h3>Sayısal Bölüm</h3>
            <p className="meta">Karataş Anadolu Lisesi</p>
            <p className="meta">2025</p>
          </div>
        </div>
      </div>
    </section>
  );
}
