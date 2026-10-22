"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Hakkımda" },
  { href: "/projeler", label: "Projeler" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/yetenekler", label: "Yetenekler" },
  { href: "/referanslar", label: "Referanslar" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <div className="wrap">
        <Link className="brand" href="/">
          Arda Alaçamlı
        </Link>
        <nav className="site-nav" aria-label="Ana menü">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
