import PageIntro from "@/components/PageIntro";

export const metadata = { title: "Yetenekler" };

const groups = [
  {
    title: "Veri analizi",
    items: ["Veri temizleme", "Keşifçi veri analizi (EDA)", "Aykırı değer analizi", "Makine öğrenmesi"],
    note: "Araç fiyat tahmini ve deprem veri hikâyesi projelerinde kullandım.",
  },
  {
    title: "Programlama",
    level: "İyi düzey",
    items: ["Python", "C#"],
    note: "Veri temizleme, analiz ve modelleme için Python kullanıyorum.",
  },
  {
    title: "Raporlama",
    level: "İleri düzey",
    items: ["Excel", "Word", "PowerPoint"],
    note: "Veri tablolama, rapor hazırlama ve proje sunumu.",
  },
];

export default function YeteneklerPage() {
  return (
    <div className="wrap">
      <PageIntro title="Yetenekler" />

      <div className="skill-groups">
        {groups.map((g, i) => (
          <div key={g.title} data-reveal style={{ "--d": i }}>
            <div>
              <h2>{g.title}</h2>
              {g.level && <span>{g.level}</span>}
            </div>
            <div>
              <ul className="tags">
                {g.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
              <p>{g.note}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
