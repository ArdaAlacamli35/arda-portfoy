import PageIntro from "@/components/PageIntro";

export const metadata = { title: "Deneyim" };

const steps = [
  {
    when: "2025 – devam ediyor",
    title: "Büyük Veri Analistliği, Ön Lisans",
    place: "Manisa Celal Bayar Üniversitesi",
    note: "Son yıl. Bitirme projesi: makine öğrenmesi ile ikinci el araç fiyat tahmini.",
    current: true,
  },
  {
    when: "2025",
    title: "Sayısal Bölüm",
    place: "Karataş Anadolu Lisesi",
  },
];

export default function DeneyimPage() {
  return (
    <div className="wrap">
      <PageIntro title="Deneyim ve eğitim" />

      <ol className="timeline">
        {steps.map((s) => (
          <li key={s.title} className={s.current ? "current" : undefined}>
            <p className="when">{s.when}</p>
            <h2>{s.title}</h2>
            <p>{s.place}</p>
            {s.note && <p className="muted">{s.note}</p>}
          </li>
        ))}
      </ol>
    </div>
  );
}
