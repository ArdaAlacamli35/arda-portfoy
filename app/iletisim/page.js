import PageIntro from "@/components/PageIntro";

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
        {channels.map((c) => (
          <div key={c.label}>
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

      <div className="actions">
        <a className="btn" href={mailto}>E-posta gönder</a>
      </div>
    </div>
  );
}
