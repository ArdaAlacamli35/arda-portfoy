import Link from "next/link";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  await requireAdmin();

  const [mesaj] = await sql`
    SELECT COUNT(*)::int AS sayi FROM iletisim_mesajlari WHERE okundu = false`;
  const [referans] = await sql`
    SELECT COUNT(*)::int AS sayi FROM referanslar`;

  return (
    <>
      <h1 className="admin-title">Yönetim paneli</h1>
      <dl className="stats">
        <div>
          <dt>Okunmamış mesaj</dt>
          <dd>{mesaj.sayi}</dd>
          <Link className="text-link" href="/admin/mesajlar">Mesajlara git</Link>
        </div>
        <div>
          <dt>Referans kaydı</dt>
          <dd>{referans.sayi}</dd>
          <Link className="text-link" href="/admin/referanslar">Referanslara git</Link>
        </div>
      </dl>
    </>
  );
}
