import PageIntro from "@/components/PageIntro";

export const metadata = { title: "Yetenekler" };

const groups = [
  {
    title: "Veri analizi",
    items: ["Veri temizleme ve hazırlama", "Keşifçi veri analizi (EDA)", "Veri görselleştirme", "Makine öğrenmesi"],
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
  {
    title: "Araçlar",
    level: "Temel düzey",
    items: ["Git", "GitHub", "Vercel"],
    note: "Projelerimi GitHub'da tutuyor, web projelerimi Vercel ile yayınlıyorum.",
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
