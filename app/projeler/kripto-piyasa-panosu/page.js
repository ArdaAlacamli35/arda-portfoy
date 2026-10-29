import fs from "node:fs";
import path from "node:path";
import PageIntro from "@/components/PageIntro";

export const metadata = {
  title: "Canlı Kripto Piyasa Panosu",
  description: "WebSocket tabanlı gerçek zamanlı finansal veri görselleştirme: vaka çalışması, mimari ve güvenlik.",
};

const CANLI = "https://kripto-piyasa-panosu.pages.dev";
const KOD = "https://github.com/ArdaAlacamli35/kripto-piyasa-panosu";

// Demo videosu public/projeler/kripto/demo.mp4 olarak eklendiğinde otomatik görünür.
const videoVar = fs.existsSync(path.join(process.cwd(), "public/projeler/kripto/demo.mp4"));

export default function KriptoVaka() {
  return (
    <div className="wrap case">
      <PageIntro title="Canlı Kripto Piyasa Panosu">
        Beş kripto varlığın fiyatını WebSocket ile canlı izleyen, bağlantı koptuğunda kendini toparlayan ve
        varlıklar arası 24 saatlik getiri korelasyonunu gösteren eğitim amaçlı karar destek panosu.
      </PageIntro>

      <div className="actions">
        <a className="btn" href={CANLI} target="_blank" rel="noopener noreferrer">Panoyu aç</a>
        <a className="btn alt" href={KOD} target="_blank" rel="noopener noreferrer">Kodu GitHub&apos;da incele</a>
      </div>

      <p className="case-note">
        Kurgusal müşteri: bir üniversite finans kulübü. Ürün gerçek bir kurumla iş birliği değildir.
        Bilgilendirme amaçlıdır, yatırım tavsiyesi değildir.
      </p>

      <section className="section">
        <h2>Problem ve kullanıcı</h2>
        <div className="prose">
          <p>
            Kulüpteki öğrenciler piyasa hareketini anlamaya çalışıyor, ama borsa uygulamaları alım-satıma odaklı ve
            karmaşık. Onların sorusu daha basit: <em>&quot;Şu an hangi varlık ne yapıyor, ve bunlar birlikte mi
            hareket ediyor?&quot;</em> Pano bu soruyu tek ekranda cevaplar: 3 KPI kartı → fiyat seyri → 24 saatlik
            getiri karşılaştırması → korelasyon matrisi → sıralanabilir tablo.
          </p>
        </div>
      </section>

      <section className="section">
        <h2>Veri hattı</h2>
        <div className="prose">
          <p>
            Tarayıcı, Binance&apos;in anahtarsız piyasa verisi API&apos;sinden geçmiş fiyatları (REST, 5 dakikada bir)
            ve canlı fiyatları (WebSocket ticker akışı, saniyede bir) çeker. GitHub Actions her gün bir
            <em> anlık görüntü</em> alıp siteyle birlikte yayına koyar. API çökerse pano bu son başarılı veriyle açılır
            ve bunu kullanıcıya açıkça söyler. Gelen her mesaj bir şemadan geçer, uymayan mesaj ekrana hiç ulaşmaz.
          </p>
        </div>
        <figure className="case-figure light">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projeler/kripto/mimari.svg" alt="Mimari: kullanıcı tarayıcısı, Cloudflare edge, Binance API ve GitHub Actions arasındaki veri akışı ve güven sınırları" loading="lazy" />
          <figcaption>Veri akışı ve güven sınırları</figcaption>
        </figure>
      </section>

      <section className="section">
        <h2>Ekranlar</h2>
        <div className="case-grid">
          <figure className="case-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projeler/kripto/masaustu.webp" alt="Panonun 1440 piksel genişlikte masaüstü görünümü" loading="lazy" />
            <figcaption>Canlı veriyle masaüstü görünümü: KPI → grafik → tablo akışı</figcaption>
          </figure>
          <figure className="case-figure narrow">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projeler/kripto/mobil.webp" alt="Panonun 360 piksel genişlikte mobil görünümü" loading="lazy" />
            <figcaption>360 px mobil</figcaption>
          </figure>
        </div>
        <figure className="case-figure">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/projeler/kripto/api-kapali.webp" alt="API kapalıyken panonun son başarılı veriyle açıldığını gösteren uyarı bandı" loading="lazy" />
          <figcaption>Hata durumu: API kapalı, son başarılı veri ve yeniden bağlanma sayacı gösteriliyor</figcaption>
        </figure>
      </section>

      <section className="section">
        <h2>Tasarım kararları</h2>
        <dl className="io">
          <dt>Renk kısıtı</dt>
          <dd>
            Artış/azalış için yeşil-kırmızı yerine mavi-turuncu kullanıldı. Turuncu, portföyün tek vurgu rengi
            (<code>--pencere</code>) ile aynı. Bu nedenle kısıt tasarım sistemiyle çelişmedi, tersine onu
            güçlendirdi. Renk tek başına anlam taşımıyor: Her değişimin yanında ▲/▼ oku ve +/− işareti var.
          </dd>
          <dt>Erişilebilirlik</dt>
          <dd>
            Tüm kontroller klavyeyle kullanılabiliyor (grafikte ← → ile noktalar arasında gezilir). Her grafiğin
            yanında otomatik tek cümlelik özet ve &quot;veriyi tablo olarak gör&quot; seçeneği var. İkincil metin
            rengi kontrast için bir ton açıldı (7,4:1). Lighthouse mobil: erişilebilirlik 96, performans 90.
          </dd>
          <dt>Durumlar</dt>
          <dd>Yükleniyor (iskelet), boş sonuç (filtre eşleşmedi) ve hata (API yok) ayrı ayrı tasarlandı.</dd>
        </dl>
      </section>

      <section className="section">
        <h2>Güvenlik ve Altyapı</h2>
        <div className="prose">
          <p>
            Ürün Cloudflare Pages üzerinde, güvenlik başlıkları edge&apos;de (Pages Functions) eklenerek yayında.
            Altyapı <code>wrangler.toml</code> ve GitHub Actions ile kod olarak tanımlı. Hiçbir API anahtarı istemcide
            ya da depoda yok; yayın token&apos;ı yalnızca GitHub Secrets&apos;ta ve tek bir izne sahip.
          </p>
        </div>
        <ol className="controls-list">
          <li>
            <strong>Gelen her WebSocket mesajına şema doğrulaması (zod).</strong> Sembol yalnızca 5 değerden biri olabilir,
            fiyat yalnızca rakam olabilir, akış adı ile sembol eşleşmeli. Uymayan mesaj sayılır ve atılır.
          </li>
          <li>
            <strong>DOM&apos;a yalnızca <code>textContent</code> + Trusted Types.</strong> <code>innerHTML</code> tarayıcı
            düzeyinde kapalı. Geliştirici yanlışlıkla kullansa bile çalışmaz. CI bu tür ifadeleri de yakalar.
          </li>
          <li>
            <strong>Sıkı CSP.</strong> <code>unsafe-inline</code> yok. <code>connect-src</code> yalnızca iki tam Binance
            adresi, <code>wss:</code> gibi joker yok. İhlaller bir rapor uç noktasına loglanıyor.
          </li>
        </ol>
        <dl className="io">
          <dt>Test sonucu</dt>
          <dd>
            Yerel sahte WebSocket sunucusundan gönderilen 11 zararlı yükün 11&apos;i de reddedildi. Hiçbir script
            çalışmadı. İkinci katman testlerinde Trusted Types ve CSP 5 ihlali engelleyip sunucuya raporladı.
            Toplam 24/24 kontrol geçti.
          </dd>
        </dl>
      </section>

      <section className="section">
        <h2>Demo videosu</h2>
        {videoVar ? (
          <video className="case-video" controls preload="metadata" src="/projeler/kripto/demo.mp4">
            <track kind="captions" srcLang="tr" label="Türkçe" src="/projeler/kripto/demo.vtt" default />
          </video>
        ) : (
          <p className="muted">Demo videosu yakında eklenecek.</p>
        )}
      </section>

      <section className="section">
        <h2>Kullanıcı testi</h2>
        <div className="prose">
          <p>
            Borsa ya da kripto takip etmeyen 2 öğrenciyle (19 yaş), Discord üzerinden ekran paylaşımıyla 3 görevli test
            yaptım. Yardım etmedim, süreleri kronometreyle ölçtüm.
          </p>
        </div>
        <div className="table-wrap">
          <table className="table">
            <thead>
              <tr><th>Görev</th><th>Katılımcı 1</th><th>Katılımcı 2</th></tr>
            </thead>
            <tbody>
              <tr><td>24 saatte fiyatı en iyi giden varlık</td><td>Başaramadı (görevi anlamadı)</td><td>Başardı · 36,2 sn</td></tr>
              <tr><td>Ethereum&apos;un 7 günlük grafiği</td><td>Başardı · 5,9 sn</td><td>Başardı · 2,6 sn</td></tr>
              <tr><td>BTC ile en çok birlikte hareket eden</td><td>Başardı · 17,5 sn</td><td>Başardı · 30 sn (önce yanlış tabloya baktı)</td></tr>
            </tbody>
          </table>
        </div>
        <dl className="io">
          <dt>Bulgu</dt>
          <dd>
            Filtreler hemen anlaşıldı. Zorlanılan yer özet bilgiydi: &quot;bugün en iyi giden hangisi?&quot; ve &quot;hangi
            çift birlikte hareket ediyor?&quot; sorularının cevabını katılımcılar grafiklerden kendileri çıkarmak zorunda kaldı.
          </dd>
          <dt>Değişiklik</dt>
          <dd>
            KPI kartlarının altına &quot;Bugün öne çıkanlar&quot; şeridi ekledim (en iyi, en kötü, seçili varlıkla en yüksek
            korelasyon). Katılımcı 1&apos;in önerisiyle getiri grafiğinin tablosu artık açık geliyor.
          </dd>
          <dt>Yöntem notu</dt>
          <dd>
            İlk katılımcıya site açılır açılmaz görev verdim ve görevin ifadesi anlaşılmadı. İkinci katılımcıya 20 saniyelik
            tanışma süresi tanıdım ve görevi sadeleştirdim.
          </dd>
        </dl>
        <div className="case-grid two">
          <figure className="case-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projeler/kripto/test-once.webp" alt="Testten önce: KPI kartlarının altında doğrudan grafikler başlıyor" loading="lazy" />
            <figcaption>Önce: özet bilgi grafiklerin içinde</figcaption>
          </figure>
          <figure className="case-figure">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/projeler/kripto/test-sonra.webp" alt="Testten sonra: KPI kartlarının altında Bugün öne çıkanlar şeridi" loading="lazy" />
            <figcaption>Sonra: &quot;Bugün öne çıkanlar&quot; şeridi</figcaption>
          </figure>
        </div>
      </section>

      <section className="section">
        <h2>Sonuç ve bir haftam daha olsaydı</h2>
        <div className="prose">
          <p>
            Pano, API kapalıyken bile son veriyle açılan, bağlantı koptuğunda bunu görünür şekilde söyleyen ve
            gelen veriye güvenmeyen bir gerçek zamanlı ürün olarak yayında.
          </p>
          <p>
            Bir haftam daha olsaydı: Korelasyonu hareketli bir pencereyle zaman içinde göstermek, fiyat uyarıları
            (ör. %5 düşüşte bildirim) eklemek ve kullanıcı testindeki ikinci turu daha geniş bir grupla yapmak
            isterdim.
          </p>
        </div>
      </section>
    </div>
  );
}
