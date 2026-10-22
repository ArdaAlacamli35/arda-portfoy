import Link from "next/link";
import { requireAdmin } from "@/lib/auth";
import { cikisYap } from "./actions";

export const metadata = { title: "Yönetim paneli", robots: { index: false } };
export const dynamic = "force-dynamic";

export default async function AdminLayout({ children }) {
  const yonetici = await requireAdmin();

  return (
    <div className="wrap admin">
      <div className="admin-bar">
        <nav aria-label="Panel menüsü">
          <Link href="/admin">Özet</Link>
          <Link href="/admin/referanslar">Referanslar</Link>
          <Link href="/admin/mesajlar">Mesajlar</Link>
        </nav>
        <form action={cikisYap} className="admin-user">
          <span className="muted">{yonetici.eposta}</span>
          <button className="btn alt small" type="submit">Çıkış</button>
        </form>
      </div>
      {children}
    </div>
  );
}
