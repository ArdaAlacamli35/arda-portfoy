"use client";

import { useActionState } from "react";
import { mesajGonder } from "./actions";

export default function IletisimFormu() {
  const [durum, gonder, bekliyor] = useActionState(mesajGonder, null);

  if (durum?.tamam) {
    return (
      <p className="form-msg ok" role="status">
        {durum.tamam}
      </p>
    );
  }

  return (
    <form action={gonder} className="form">
      <label>
        Ad soyad
        <input name="ad_soyad" required minLength={2} maxLength={100} autoComplete="name" />
      </label>
      <label>
        E-posta
        <input type="email" name="eposta" required maxLength={200} autoComplete="email" />
      </label>
      <label>
        Mesaj
        <textarea name="mesaj" rows={5} required minLength={5} maxLength={2000} />
      </label>
      <label className="check">
        <input type="checkbox" name="kvkk" required />
        <span>
          Yazdığım ad, e-posta ve mesajın, yalnızca bu mesaja yanıt verilmesi amacıyla Arda
          Alaçamlı tarafından işlenmesine ilişkin aşağıdaki aydınlatma metnini okudum, onaylıyorum.
        </span>
      </label>
      {durum?.hata && (
        <p className="form-msg error" role="alert">
          {durum.hata}
        </p>
      )}
      <div>
        <button className="btn" type="submit" disabled={bekliyor}>
          {bekliyor ? "Gönderiliyor…" : "Mesajı gönder"}
        </button>
      </div>
    </form>
  );
}
