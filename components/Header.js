"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Sprite from "./Sprite";

const links = [
  { href: "/", label: "Hakkımda" },
  { href: "/deneyim", label: "Deneyim" },
  { href: "/yetenekler", label: "Yetenekler" },
  { href: "/projeler", label: "Projeler" },
  { href: "/iletisim", label: "İletişim" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header>
      <div className="wrap">
        <Link className="brand" href="/">
          <i className="mini">
            <Sprite name="snow" w={28} />
          </i>
          ~/arda
        </Link>
        <nav aria-label="Ana menü">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={active ? "act" : undefined}
                aria-current={active ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
