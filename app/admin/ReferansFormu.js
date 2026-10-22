// Ekleme ve düzenleme sayfalarında kullanılan ortak form.
// "kayit" verilirse düzenleme formu olur, verilmezse boş ekleme formu.
export default function ReferansFormu({ action, kurumlar, kayit, dugme }) {
  const tarih = kayit?.tarih ? new Date(kayit.tarih).toISOString().slice(0, 10) : "";

  return (
    <form action={action} className="form grid">
      {kayit && <input type="hidden" name="id" value={kayit.id} />}
      <label>
        Kişi adı *
        <input name="kisi_adi" required maxLength={120} defaultValue={kayit?.kisi_adi ?? ""} />
      </label>
      <label>
        Unvan
        <input name="unvan" maxLength={120} defaultValue={kayit?.unvan ?? ""} />
      </label>
      <label className="full">
        Yorum
        <textarea name="yorum" rows={3} maxLength={1000} defaultValue={kayit?.yorum ?? ""} />
      </label>
      <label>
        Puan
        <select name="puan" defaultValue={kayit?.puan ?? ""}>
          <option value="">Seçilmedi</option>
          {[1, 2, 3, 4, 5].map((p) => (
            <option key={p} value={p}>{p}</option>
          ))}
        </select>
      </label>
      <label>
        Tarih
        <input type="date" name="tarih" defaultValue={tarih} />
      </label>
      <label>
        Kurum
        <select name="kategori_id" defaultValue={kayit?.kategori_id ?? ""}>
          <option value="">Kurumsuz</option>
          {kurumlar.map((k) => (
            <option key={k.id} value={k.id}>{k.ad}</option>
          ))}
        </select>
      </label>
      <div className="checks">
        <label className="check">
          <input type="checkbox" name="izin_alindi" defaultChecked={kayit?.izin_alindi ?? false} />
          Yayın izni alındı
        </label>
        <label className="check">
          <input type="checkbox" name="yayinda" defaultChecked={kayit?.yayinda ?? true} />
          Yayında
        </label>
      </div>
      <div className="full">
        <button className="btn" type="submit">{dugme}</button>
      </div>
    </form>
  );
}
