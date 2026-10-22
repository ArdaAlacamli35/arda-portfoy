import PageIntro from "@/components/PageIntro";
import IletisimFormu from "./IletisimFormu";

export const metadata = { title: "İletişim" };

const mailto =
  "mailto:alacamliarda35@gmail.com?subject=Portf%C3%B6y%20sitesinden%20mesaj";

const channels = [
  { label: "E-posta", value: "alacamliarda35@gmail.com", href: "mailto:alacamliarda35@gmail.com" },
  {
    label: "LinkedIn",
    value: "Arda Alaçamlı",
    href: "https://www.linkedin.com/in/arda-ala%C3%A7aml%C4%B1-98791743b/",
    external: true,
  },
  {
    label: "GitHub",
    value: "ArdaAlacamli35",
    href: "https://github.com/ArdaAlacamli35",
    external: true,
  },
];

export default function IletisimPage() {
  return (
    <div className="wrap">
      <PageIntro title="İletişim">
        Staj, iş fırsatları veya proje iş birlikleri için bana yazabilirsin. İzmir&apos;deyim.
      </PageIntro>

      <dl className="channels">
        {channels.map((c, i) => (
          <div key={c.label} data-reveal style={{ "--d": i }}>
            <dt>{c.label}</dt>
            <dd>
              <a
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                {c.value}
              </a>
            </dd>
          </div>
        ))}
      </dl>

      <div className="actions" data-reveal style={{ "--d": 3 }}>
        <a className="btn" href={mailto}>E-posta gönder</a>
      </div>

      <section className="section">
        <h2>Bana buradan yaz</h2>
        <IletisimFormu />
        <details className="notice">
          <summary>Kişisel verilerin işlenmesine ilişkin aydınlatma metni</summary>
          <p>
            Veri sorumlusu Arda Alaçamlı&apos;dır. Formda yazdığın ad soyad, e-posta ve mesaj,
            yalnızca mesajına yanıt verebilmek amacıyla, açık rızana dayanarak işlenir. Veriler,
            Avrupa&apos;daki (Frankfurt) bir sunucuda bulunan veritabanında saklanır, üçüncü
            kişilerle paylaşılmaz ve yanıt verildikten sonra en geç 6 ay içinde silinir. KVKK
            11. madde kapsamındaki haklarını kullanmak ya da verilerinin silinmesini istemek için{" "}
            <a className="text-link" href="mailto:alacamliarda35@gmail.com">alacamliarda35@gmail.com</a>{" "}
            adresine yazabilirsin.
          </p>
        </details>
      </section>
    </div>
  );
}
