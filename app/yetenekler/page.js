import SectionTitle from "@/components/SectionTitle";
import SkillCard from "@/components/SkillCard";

export const metadata = { title: "Yetenekler" };

const analysis = ["Veri temizleme", "Keşifçi veri analizi (EDA)", "Aykırı değer analizi", "Makine öğrenmesi"];
const office = ["Raporlama", "Veri tablolama", "Proje sunumu"];

export default function YeteneklerPage() {
  return (
    <section className="page">
      <div className="wrap">
        <SectionTitle>Yetenekler</SectionTitle>

        <SkillCard
          label="İyi düzey"
          title="Programlama"
          color="var(--lilac)"
          level="72%"
          skills={["Python", "C#"]}
        />
        <SkillCard
          label="İleri düzey"
          title="Microsoft Office"
          color="var(--peach)"
          level="92%"
          skills={["Excel", "Word", "PowerPoint"]}
        />

        <div className="card">
          <h3>Veri analizi</h3>
          <div className="pills">
            {analysis.map((p) => (
              <span key={p} className="pill" style={{ "--c": "var(--sky)" }}>{p}</span>
            ))}
          </div>
        </div>

        <div className="card">
          <h3>Office ile yapabildiklerim</h3>
          <div className="pills">
            {office.map((p) => (
              <span key={p} className="pill" style={{ "--c": "var(--mint)" }}>{p}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
