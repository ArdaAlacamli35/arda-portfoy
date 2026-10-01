import Sprite from "@/components/Sprite";
import SectionTitle from "@/components/SectionTitle";

export const metadata = { title: "İletişim" };

const gmailCompose =
  "https://mail.google.com/mail/?view=cm&fs=1&to=alacamliarda35%40gmail.com&su=Portf%C3%B6y%20sitesinden%20mesaj";

export default function IletisimPage() {
  return (
    <section className="page">
      <div className="wrap">
        <SectionTitle>İletişim</SectionTitle>

        <div className="card">
          <span className="ic" style={{ "--c": "var(--glow)" }}>
            <Sprite name="mail" />
          </span>
          <h3>Merhaba!</h3>
          <p style={{ maxWidth: "44ch", margin: "8px auto 0" }}>
            Staj, iş fırsatları veya proje iş birlikleri için bana yazabilirsin. İzmir, Konak.
          </p>

          <div className="cgrid">
            <a className="ct" style={{ "--c": "var(--glow)" }} href="mailto:alacamliarda35@gmail.com">
              <span className="ic"><span><Sprite name="mail" /></span></span>
              <small>E-posta</small>
              alacamliarda35@gmail.com
            </a>
            <a className="ct" style={{ "--c": "var(--mint)" }} href="tel:+905527321859">
              <span className="ic"><span><Sprite name="ph" /></span></span>
              <small>Telefon</small>
              0552 732 18 59
            </a>
            <a
              className="ct"
              style={{ "--c": "var(--sky)" }}
              href="https://www.linkedin.com/in/arda-ala%C3%A7aml%C4%B1-98791743b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ic">in</span>
              <small>LinkedIn</small>
              Arda Alaçamlı
            </a>
            <a
              className="ct"
              style={{ "--c": "var(--lilac)" }}
              href="https://github.com/ArdaAlacamli35"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="ic">{"</>"}</span>
              <small>GitHub</small>
              ArdaAlacamli35
            </a>
          </div>

          <div style={{ marginTop: 26, textAlign: "center" }}>
            <a className="btn" href={gmailCompose} target="_blank" rel="noopener noreferrer">
              Mesaj gönder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
