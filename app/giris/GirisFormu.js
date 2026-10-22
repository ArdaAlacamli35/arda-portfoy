"use client";

import { useActionState } from "react";
import { girisYap } from "./actions";

export default function GirisFormu() {
  const [durum, gonder, bekliyor] = useActionState(girisYap, null);

  return (
    <form action={gonder} className="form narrow">
      <label>
        E-posta
        <input type="email" name="eposta" autoComplete="username" required maxLength={200} />
      </label>
      <label>
        Şifre
        <input type="password" name="sifre" autoComplete="current-password" required maxLength={200} />
      </label>
      {durum?.hata && (
        <p className="form-msg error" role="alert">
          {durum.hata}
        </p>
      )}
      <button className="btn" type="submit" disabled={bekliyor}>
        {bekliyor ? "Kontrol ediliyor…" : "Giriş yap"}
      </button>
    </form>
  );
}
