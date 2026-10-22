import Link from "next/link";
import { notFound } from "next/navigation";
import { sql } from "@/lib/db";
import { requireAdmin } from "@/lib/auth";
import { referansGuncelle } from "../../actions";
import ReferansFormu from "../../ReferansFormu";

export const dynamic = "force-dynamic";

export default async function ReferansDuzenlePage({ params }) {
  await requireAdmin();

  const id = Number((await params).id);
  if (!Number.isInteger(id)) notFound();

  const [kayit] = await sql`SELECT * FROM referanslar WHERE id = ${id}`;
  if (!kayit) notFound();

  const kurumlar = await sql`SELECT id, ad FROM referans_kurumlari ORDER BY ad`;

  return (
    <>
      <p><Link className="text-link" href="/admin/referanslar">← Referanslara dön</Link></p>
      <h1 className="admin-title">Referansı düzenle</h1>
      <ReferansFormu action={referansGuncelle} kurumlar={kurumlar} kayit={kayit} dugme="Kaydet" />
    </>
  );
}
