-- BVA 2205 Siber Güvenlik ve Bilişim Hukuku - Bireysel Ödev
-- Arda Alaçamlı - 2516016006
-- Tüm SQL komutları Neon SQL Editor'de çalıştırıldı.

-- =====================================================
-- Görev 1: Ortak tablolar
-- =====================================================

-- Panele giriş yapabilecek yöneticiler
CREATE TABLE yoneticiler (
  id SERIAL PRIMARY KEY,
  eposta TEXT UNIQUE NOT NULL,
  sifre_hash TEXT NOT NULL,          -- şifrenin kendisi DEĞİL, bcrypt özeti
  olusturma TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- Giriş yapan yöneticinin oturumları (giriş kartları)
CREATE TABLE oturumlar (
  token TEXT PRIMARY KEY,            -- tarayıcı çerezinde tutulan rastgele değer
  yonetici_id INT NOT NULL REFERENCES yoneticiler(id) ON DELETE CASCADE,
  bitis TIMESTAMPTZ NOT NULL
);

-- İletişim formundan gelen mesajlar
CREATE TABLE iletisim_mesajlari (
  id SERIAL PRIMARY KEY,
  ad_soyad TEXT NOT NULL,
  eposta TEXT NOT NULL,
  mesaj TEXT NOT NULL,
  kvkk_onay BOOLEAN NOT NULL DEFAULT false,
  okundu BOOLEAN NOT NULL DEFAULT false,
  gonderim_zamani TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- bcrypt özeti üretmek için PostgreSQL şifreleme eklentisi
CREATE EXTENSION IF NOT EXISTS pgcrypto;

-- Özet şu sorguyla üretildi (şifre bu dosyada YOKTUR):
-- SELECT crypt('<şifre>', gen_salt('bf', 12));

-- Yönetici hesabı (sifre_hash alanına yukarıdaki sorgunun çıktısı yazıldı)
-- INSERT INTO yoneticiler (eposta, sifre_hash)
-- VALUES ('<e-posta>', '<bcrypt özeti>');

-- =====================================================
-- Görev 2: Referanslar (Tavsiyeler) tabloları
-- =====================================================

-- Referansların geldiği kurumlar (kendi yazdığım tablo)
CREATE TABLE referans_kurumlari (
  id SERIAL PRIMARY KEY,
  ad TEXT NOT NULL UNIQUE
);

-- Referans kayıtları
CREATE TABLE referanslar (
  id SERIAL PRIMARY KEY,
  kisi_adi TEXT NOT NULL,
  unvan TEXT,
  yorum TEXT,
  puan INT CHECK (puan BETWEEN 1 AND 5),
  tarih DATE,
  izin_alindi BOOLEAN DEFAULT false,
  kategori_id INT REFERENCES referans_kurumlari(id) ON DELETE SET NULL,
  yayinda BOOLEAN NOT NULL DEFAULT true,
  olusturma TIMESTAMPTZ NOT NULL DEFAULT now()
);

-- (Veri ekleme ve Görev 3 sorguları buraya eklenecek)
