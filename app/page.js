import Link from "next/link";
import Sprite from "@/components/Sprite";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "Hakkımda" };

// [css sınıfı, metin] çiftleri; sınıfı olmayanlar düz metin
const codeLines = [
  [["c", "# profil.py"]],
  [["k", "class"], [null, " "], ["f", "Arda"], [null, ":"]],
  [[null, "    ad = "], ["s", '"Arda Alaçamlı"']],
  [[null, "    rol = "], ["s", '"Büyük Veri Analisti Adayı"']],
  [[null, "    okul = "], ["s", '"Manisa Celal Bayar Üniv."']],
  [[null, "    diller = ["], ["s", '"Python"'], [null, ", "], ["s", '"C#"'], [null, "]"]],
  [[null, " "]],
  [[null, "    "], ["k", "def"], [null, " "], ["f", "hedef"], [null, "(self):"]],
  [[null, "        "], ["k", "return"], [null, " "], ["s", '"veriden anlam çıkarmak"']],
];

const facts = [
  ["Konum", "İzmir, Konak"],
  ["Bölüm", "Büyük Veri Analistliği"],
  ["Durum", "Son sınıf"],
  ["Diller", "Python, C#"],
];

const tiles = [
  { href: "/deneyim", color: "var(--mint)", icon: "bk", title: "Deneyim", text: "Eğitim geçmişim" },
  { href: "/yetenekler", color: "var(--glow)", icon: "bolt", title: "Yetenekler", text: "Python, C#, veri analizi, Office" },
  { href: "/projeler", color: "var(--peach)", icon: "chart", title: "Projeler", text: "Araç fiyat tahmini, deprem veri hikâyesi" },
  { href: "/iletisim", color: "var(--sky)", icon: "mail", title: "İletişim", text: "Bana ulaş" },
];

export default function HomePage() {
  return (
    <section className="page">
      <div className="wrap">
        <div className="hero">
          <h1>Arda Alaçamlı</h1>
          <p className="role">Büyük Veri Analisti Adayı</p>
          <p className="lead">
            Veriyi temizleyen, analiz eden ve Python ile anlamlı sonuçlara dönüştüren, proje
            odaklı bir son sınıf öğrencisiyim.
          </p>
          <div className="cta">
            <Link className="btn" href="/projeler">Projeye göz at</Link>
            <Link className="btn alt" href="/iletisim">İletişime geç</Link>
          </div>
        </div>

        <div className="card code" aria-hidden="true">
          <div className="bar">
            <i /><i /><i />&nbsp; profil.py
          </div>
          <pre>
            {codeLines.map((tokens, i) => (
              <span key={i} className="ln" style={{ "--i": i }}>
                {tokens.map(([cls, text], j) =>
                  cls ? <span key={j} className={cls}>{text}</span> : text
                )}
                {i === codeLines.length - 1 && <span className="cur" />}
              </span>
            ))}
          </pre>
        </div>

        <div className="facts">
          {facts.map(([label, value]) => (
            <div key={label}>
              <small>{label}</small>
              {value}
            </div>
          ))}
        </div>

        <div className="card about">
          <SectionTitle>Hakkımda</SectionTitle>
          <p>
            Veriden anlamlı sonuçlar çıkarmak, beni en çok motive eden iş. Manisa Celal Bayar
            Üniversitesi&apos;nde Büyük Veri Analistliği okuyorum ve şu an son sınıftayım. Python
            ve C# ile projeler geliştiriyorum; bitirme projemde ikinci el araç fiyatlarını
            makine öğrenmesiyle tahmin etmeye çalışıyorum.
          </p>
          <p>
            Veriyi temizlemekten aykırı değer analizine kadar süreci baştan sona kendim
            yürütüyorum, sonuçları da Excel, Word ve PowerPoint ile okunur raporlara ve
            sunumlara dönüştürüyorum. Yeni araçlar öğrenmeye ve gerçek problemlere pratik
            çözümler bulmaya açığım.
          </p>
        </div>

        <SectionTitle>Gezin</SectionTitle>
        <div className="tiles">
          {tiles.map((t) => (
            <Link key={t.href} className="tile card" style={{ "--c": t.color }} href={t.href}>
              <span className="ic" style={{ "--c": t.color }}>
                <Sprite name={t.icon} />
              </span>
              <b>{t.title}</b>
              <span className="t">{t.text}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
