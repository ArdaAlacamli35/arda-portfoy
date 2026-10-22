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

-- ---------- Veri ekleme (deneme verisi, öğretim elemanının izniyle) ----------

INSERT INTO referans_kurumlari (ad) VALUES
  ('Karataş Anadolu Lisesi'),
  ('Manisa Celal Bayar Üniversitesi'),
  ('Özel Dershane'),
  ('Veri Bilimi Topluluğu');   -- hiç referansı yok: Görev 3.4'te 0 görünür

INSERT INTO referanslar (kisi_adi, unvan, yorum, puan, tarih, izin_alindi, kategori_id) VALUES
  ('Ahmet K.', 'Matematik Öğretmeni', 'Arda derslere hazırlıklı gelen, sorumluluk sahibi bir öğrenciydi.', 5, '2022-06-15', true, 1),
  ('Zeynep A.', 'Sınıf Arkadaşı', 'Grup ödevlerinde işi hep o organize ederdi.', 4, '2023-05-20', true, 1),
  ('Mert D.', NULL, 'Yardımsever ve güvenilir bir arkadaş.', 4, '2024-09-10', false, 1),
  ('Elif S.', 'Öğretim Görevlisi', 'Veri analizi dersinde Python çalışmalarıyla öne çıktı.', 5, '2025-12-05', true, 2),
  ('Burak T.', 'Proje Arkadaşı', 'Araç fiyat tahmini projesinde veri temizliğini baştan sona üstlendi.', 5, '2026-03-14', true, 2),
  ('Selin Ö.', NULL, 'Derslerde soru sormaktan çekinmeyen, meraklı biri.', 3, '2026-05-02', true, 2),
  ('Can Y.', NULL, 'seni seviyorum', 1, '2025-10-01', false, 2),
  ('Hakan B.', 'Dershane Müdürü', 'İki yıl boyunca istikrarlı çalıştı, deneme sınavlarında sürekli yükseldi.', 5, '2024-06-20', true, 3),
  ('Deniz K.', 'Rehber Öğretmen', NULL, 4, NULL, false, 3),
  ('Arda Alaçamlı (2516016006)', 'Öğrenci', 'Görev 3.5 için eklenen deneme kaydı.', 2, '2026-10-20', false, NULL);

-- =====================================================
-- Görev 3: SQL sorguları
-- =====================================================

-- Görev 3.1: Puanı 4 ve üzeri VE yayın izni alınmış referanslar
SELECT * FROM referanslar
WHERE puan >= 4 AND izin_alindi = true;

-- (3.2 - 3.7 eklenecek)
