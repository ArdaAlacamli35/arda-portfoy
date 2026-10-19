import Link from "next/link";

export const metadata = { title: "Hakkımda" };

const facts = [
  ["Konum", "İzmir, Konak"],
  ["Bölüm", "Büyük Veri Analistliği"],
  ["Okul", "Manisa Celal Bayar Üniv."],
  ["Diller", "Python, C#"],
];

const projects = [
  {
    title: "Türkiye Deprem Hikâyesi",
    kind: "Veri hikâyesi",
    text: "1914–2023 depremlerini kaydırdıkça ilerleyen harita ve grafiklerle anlatan interaktif site.",
  },
  {
    title: "İkinci El Araç Fiyat Tahmini",
    kind: "Bitirme projesi",
    text: "Aracın teknik ve fiziksel özelliklerinden piyasa değerini tahmin eden makine öğrenmesi modeli.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <h1><span>Arda Alaçamlı</span></h1>
          <p className="role">Veri analizi ve makine öğrenmesi</p>
          <p className="lead">
            Ham veriyi temizleyip analiz ediyor, Python ile sonuca dönüştürüyorum. Manisa Celal
            Bayar Üniversitesi&apos;nde Büyük Veri Analistliği okuyorum.
          </p>
          <div className="actions">
            <Link className="btn" href="/projeler">Projeleri gör</Link>
            <Link className="btn alt" href="/iletisim">İletişime geç</Link>
          </div>
        </div>
      </section>

      <div className="wrap">
        <dl className="facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>

        <section className="section">
          <h2>Projeler</h2>
          <ul className="project-list">
            {projects.map((p) => (
              <li key={p.title}>
                <Link href="/projeler">
                  <h3>{p.title}</h3>
                  <span className="kind">{p.kind}</span>
                  <p>{p.text}</p>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section prose">
          <h2>Hakkımda</h2>
          <p>
            Veriden anlamlı sonuçlar çıkarmak, beni en çok motive eden iş. Python ve C# ile
            projeler geliştiriyorum. Bitirme projemde ikinci el araç fiyatlarını makine
            öğrenmesiyle tahmin ediyorum, Türkiye deprem verisiyle de interaktif bir veri hikâyesi
            hazırladım.
          </p>
          <p>
            Veriyi temizlemekten aykırı değer analizine kadar süreci baştan sona kendim
            yürütüyorum. Sonuçları Excel, Word ve PowerPoint ile okunur raporlara ve sunumlara
            dönüştürüyorum. Staj ve proje iş birliklerine açığım.
          </p>
        </section>
      </div>
    </>
  );
}
