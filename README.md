# 🌊 Tatta-Archive: Tuz Gölü Disiplinlerarası Araştırma Deposu

<div align="center">

![Version](https://img.shields.io/badge/versiyon-3.0-ff7597?style=for-the-badge)
![License](https://img.shields.io/badge/lisans-MIT%20%2F%20CC--BY--4.0-00e5ff?style=for-the-badge)
![Language](https://img.shields.io/badge/dil-Türkçe-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/durum-Aktif%20Geliştirme-4ade80?style=for-the-badge)
![Disciplines](https://img.shields.io/badge/disiplin-6%20alan-f97316?style=for-the-badge)
![Data](https://img.shields.io/badge/veri-Açık%20Kaynak-22d3ee?style=for-the-badge)

**[🌐 Canlı Platform](https://arch-yunus.github.io/Tatta-Archive/)** · **[📊 Veri Setleri](./data/)** · **[🔬 Analiz Scriptleri](./scripts/)** · **[🤝 Katkıda Bulun](./CONTRIBUTING.md)**

![Tuz Gölü — Gökyüzünün Yeryüzündeki Aynası](./banner.png)

*Tuz Gölü, Nisan ayı — Bahar ayna yansıması. Fotoğraf: Tatta-Archive*

</div>

---

> *"Hiçbir şeyin olmadığı uçsuz bucaksız bir beyazlıkta, doğanın en karmaşık sistemleri çalışır."*

**Tatta-Archive**, Türkiye'nin en büyük ikinci gölü ve Orta Doğu'nun en büyük hipersalin gölü olan **Tuz Gölü'nün** (Antik adıyla *Tatta* — Τάττα) tüm yönleriyle incelendiği, disiplinlerarası, açık kaynaklı bir bilgi ve araştırma deposudur.

Bu repo; **jeoloji**, **hidroloji**, **ekosistem biyolojisi**, **arkeoloji & tarih**, **atmosferik optik** ve **uzaktan algılama** alanlarında dağınık hâlde bulunan bilimsel veriyi tek bir sistematik yapıda bir araya getirir ve hem ham veri hem de tam etkileşimli bir web platformu olarak sunar.

---

## 📋 İçindekiler

1. [🌍 Genel Bakış & Coğrafi Konum](#-genel-bakış--coğrafi-konum)
2. [🌐 İnteraktif Web Platformu](#-interaktif-web-platformu)
3. [🗂️ Repo Yapısı](#️-repo-yapısı)
4. [🪨 Jeoloji ve Havza Dinamikleri](#-jeoloji-ve-havza-dinamikleri)
5. [💧 Hidroloji ve Su Bütçesi](#-hidroloji-ve-su-bütçesi)
6. [🕳️ Obruk (Sinkhole) Krizi](#️-obruk-sinkhole-krizi)
7. [🦠 Ekstrem Mikrobiyoloji ve Ekoloji](#-ekstrem-mikrobiyoloji-ve-ekoloji)
8. [🦩 Flamingo Popülasyon Ekolojisi](#-flamingo-popülasyon-ekolojisi)
9. [🌿 Endemik Halofit Flora](#-endemik-halofit-flora)
10. [🏛️ Tarih, Arkeoloji ve Kültürel Miras](#️-tarih-arkeoloji-ve-kültürel-miras)
11. [👁️ Optik Anomaliler ve Atmosferik Fenomenler](#️-optik-anomaliler-ve-atmosferik-fenomenler)
12. [🛰️ Uzaktan Algılama ve Uydu Analizi](#️-uzaktan-algılama-ve-uydu-analizi)
13. [📉 İklim Değişikliği Etkileri ve Projeksiyonlar](#-iklim-değişikliği-etkileri-ve-projeksiyonlar)
14. [⚗️ Kimya: İyon ve Mineral Analizi](#️-kimya-iyon-ve-mineral-analizi)
15. [📦 Veri Setleri Referansı](#-veri-setleri-referansı)
16. [🔬 Python Analiz Scriptleri](#-python-analiz-scriptleri)
17. [📚 Bilimsel Kaynakça ve Referanslar](#-bilimsel-kaynakça-ve-referanslar)
18. [🤝 Katkıda Bulunma](#-katkıda-bulunma)
19. [📄 Lisans](#-lisans)

---

## 🌍 Genel Bakış & Coğrafi Konum

Tuz Gölü, İç Anadolu Platosu'nun merkezinde, Ankara, Konya ve Aksaray illerinin sınır bölgesinde yer alır. Türkiye'nin en büyük ikinci gölüdür ve tüm yıl boyunca su bulunduran **endorik (kapalı havzalı)** göllerden biridir.

### 📍 Temel Coğrafi Veriler

| Parametre | Değer | Kaynak |
|---|---|---|
| Koordinatlar | 38°45′K / 33°20′D | TKGM |
| Rakım | ~905 m | DSİ |
| Maksimum Uzunluk (K–G) | ~80 km | Landsat ölçümü |
| Maksimum Genişlik (D–B) | ~50 km | Landsat ölçümü |
| Yüzey Alanı (1975 referans) | ~1.600 km² | DSİ arşivi |
| Yüzey Alanı (2025 güncel) | ~520 km² | Sentinel-2 NDWI |
| Ortalama Derinlik | 0,2 – 1,5 m (mevsimlik) | MTA |
| Havza Alanı (drenaj) | ~21.500 km² | DSİ |
| Tuzluluk | %29 – %33 (mevsime göre) | TÜBİTAK |
| Türkiye tuz üretimindeki payı | %40 – %65 | TUZSAN |

### 🗺️ İdari Bağlam

Göl; **Konya (Cihanbeyli)**, **Aksaray (Eskil)** ve **Ankara (Şereflikoçhisar)** illerinin ortak sınırında yer alır. Başlıca tuzla işletmeleri şunlardır:

- **Kaldırım Tuzlası** — Şereflikoçhisar, Ankara (en büyük üretim havzası)
- **Yavşan Tuzlası** — Cihanbeyli, Konya (medikal kalite)
- **Kayacık Tuzlası** — Güney havzası

---

## 🌐 İnteraktif Web Platformu

Tatta-Archive, sade bir bilgi arşivinin çok ötesinde; **altı disiplini kapsayan, tamamen interaktif** ve premium tasarımlı bir web uygulamasıdır.

### ✨ Platform Özellikleri (v3.0)

| Bölüm | Özellik | Açıklama |
|---|---|---|
| **Ana Sayfa** | 🔴 Canlı Göl Durumu | Simüle edilmiş gerçek zamanlı sıcaklık, pH, su seviyesi, NDWI |
| **Ana Sayfa** | 🦩 Flamingo Popülasyon Grafiği | Stat karta tıklayarak 1975–2025 Chart.js modal grafiği |
| **Jeoloji** | 🔩 Karot Sondaj Simülatörü | Göl yatağını 20m derinliğe sondajlayın, 5 jeolojik katmanı keşfedin + rapor |
| **Jeoloji** | 💧 Hidrolojik Denge Hesaplayıcı | 4 parametreli yıllık su bütçesi dengesi |
| **Jeoloji** | 🗺️ İnteraktif Tektonik Harita | Fay hatları, tuzlalar ve akarsular SVG haritasında |
| **Ekoloji** | 🍽️ Trofik Besin Ağı Diyagramı | Güneş → Alg → Artemia → Flamingo interaktif akışı |
| **Ekoloji** | 🎨 Dunaliella Renk Simülatörü | Tuzluluk × sıcaklık parametresiyle gölün rengi |
| **Ekoloji** | 🌿 3D Flora Flip Kataloğu | 6 endemik türün 3D kart sistemi |
| **Tarih** | 📅 Kronolojik Zaman Çizelgesi | M.Ö. 14. yy'dan günümüze 6 dönem |
| **Gizemler** | 📖 CYOA Hikaye Motoru | 5 farklı sonuçlu Taşlaşan Kadın efsanesi |
| **Gizemler** | 📡 Gece Işık Anomali Radarı | 3 anomali tipiyle radar tarama animasyonu |
| **Gizemler** | 🌅 Serap Simülatörü | Canvas tabanlı ufuk illüzyonu |
| **Turizm** | 🗺️ Ekolojik Rota Planlayıcı | 3 güzergah, güvenlik ve kısıtlama bilgileri |
| **Turizm** | 🪞 Sky Mirror Tahmin Algoritması | Ay × rüzgar × bulutluluk formülü |
| **Veri** | 🛰️ Multispektral Uydu Karşılaştırıcı | True Color / NIR / NDWI bant simülasyonu |
| **Veri** | 📉 Daralma Zaman Tüneli | 1975–2025 SVG harita + obruk sayacı |
| **Veri** | 📊 Hidrolojik Risk Grafiği | İkili eksenli Chart.js korelasyon grafiği |
| **Veri** | 🌡️ İklim Senaryo Projektörü | RCP 4.5 / RCP 8.5 / Sürdürülebilir 2025–2055 |
| **Veri** | ⚠️ Obruk Risk Overlay | SVG haritasında kırmızı/turuncu risk zonları |

---

## 🗂️ Repo Yapısı

```
Tatta-Archive/
│
├── index.html                   # İnteraktif web platformu
├── styles.css                   # Premium tasarım sistemi (dark mode + glassmorphism)
├── app.js                       # Tüm simülatörler, grafikler ve etkileşimler
├── banner.png                   # Hero banner görseli
│
├── data/
│   ├── lake_tuz_shrinkage.json  # 1975–2025 yüzey alanı, obruk, yeraltı suyu
│   └── lake_tuz_flora.json      # Endemik halofit bitki kataloğu
│
├── scripts/
│   ├── satellite_analysis.py    # Sentinel-2 / Landsat NDWI analizi
│   └── climate_projection.py    # RCP 4.5 / 8.5 hidrolojik projeksiyon
│
├── CONTRIBUTING.md              # Katkı rehberi
├── .gitignore
└── README.md
```

---

## 🪨 Jeoloji ve Havza Dinamikleri

### Tektonik Köken

Tuz Gölü Havzası, Geç Kretase'den itibaren süregelen Arabistan–Avrasya levha çarpışması ve ardından gelişen Anadolu bloğunun batıya kaçış kinematiğinin bir ürünüdür. Havza **Neojen (Miyosen–Pliyosen)** dönemde gelişmiş, büyük bir pull-apart (açılma) havzası niteliğindedir.

İki ana aktif fay sistemi gölü çerçeveler:

| Fay | Tip | Uzunluk | Not |
|---|---|---|---|
| **Tuz Gölü Batı Fay Zonu** | Doğrultu atımlı (sol yönlü) | ~110 km | Cihanbeyli ekseni, havzanın batı sınırı |
| **Şereflikoçhisar Doğu Fayı** | Doğrultu atımlı (sağ yönlü) | ~80 km | Gölün doğu kıyısına paralel, aktif deprem zonu |

> 📌 **Deprem Notu:** 2007 Şereflikoçhisar depremi (M 4.8), bu fay segmenti üzerinde meydana gelmiş ve doğu kıyısında yeni obruk oluşumlarını tetiklemiştir.

### Stratigrafik Karot Profili

Tuz Gölü havzasında gerçekleştirilen MTA sondajlarından derlenen stratigrafik profil:

| Derinlik | Jeolojik Birim | Dönem | Mineraloji | Ortam |
|---|---|---|---|---|
| 0 – 2 m | **Saf Halit Düzlüğü** | Holosen (~12.000 yıl) | NaCl %98.2 | Buharlaşma çökelmesi |
| 2 – 5 m | **Jips ve Anhidrit** | Geç Pliyosen | CaSO₄·2H₂O, barit | Yarı-kurak evaporit |
| 5 – 10 m | **Gölsel Yeşil Çamur / Kil** | Orta Pleyistosen | Montmorillonit, kuvars, kalsit | Sığ göl fasyesi |
| 10 – 15 m | **Kırıntılı Kumtaşı & Marn** | Miyosen | Kalsit çimentolu detritik kuvars | Flüviyal–gölsel geçiş |
| 15 – 20 m | **Volkanik Bazalt / Kül Taşı** | Alt Miyosen / Oligosen | Plajiyoklas, piroksen, demir oksit | Volkanik tüf, eski magmatik |

### Evaporit Kimyası

Göl suyu buharlaştıkça mineraller belirli bir sırayla çökelir (Usiglio Serisi):

```
Kalsit (CaCO₃)  →  Jips (CaSO₄·2H₂O)  →  Halit (NaCl)  →  Biter tuzlar (KCl, MgCl₂)
    daha önce              orta                  son              en son
```

Tuz Gölü'nde halit çökelmesi egemendir çünkü göl suyu doygunluk noktasına (325 g/L NaCl) çok hızlı ulaşmaktadır.

### Jeotermal Beslenme

Şereflikoçhisar Fayı boyunca süzülen meteorik sular, kırık zonlardan geçerek magmatik ısı etkisiyle **40–50°C'ye** kadar ısınır ve yüksek konsantrasyonlu Na⁺, Cl⁻ ve SO₄²⁻ iyonları taşır. Bu jeotermal girişler gölün kronik yüksek tuzluluğuna katkıda bulunur.

---

## 💧 Hidroloji ve Su Bütçesi

### Havza Hidrografisi

Tuz Gölü'nü besleyen başlıca akarsular:

| Akarsu | Kaynak | Yıllık Ortalama Akım | Durum |
|---|---|---|---|
| **Peçeneközü Deresi** | Şereflikoçhisar yönü | ~45 milyon m³/yıl | Aktif (azalmakta) |
| **Melendiz Çayı** | Hasan Dağı etekleri | ~30 milyon m³/yıl | Mevsimlik |
| **İnsuyu Deresi** | Batı havzası | ~15 milyon m³/yıl | Yaz aylarında kuruyor |
| **Kulu Deresi** | Kuzey | ~8 milyon m³/yıl | Zayıf, dönemsel |

### Yıllık Su Bütçesi (2025 Mevcut Durum)

```
GİRDİ:
  Yağış (göl yüzeyine)        ≈  300 mm × 520 km²  = 156 milyon m³/yıl
  Akarsu girişleri             ≈  120 milyon m³/yıl
  Doğal yeraltı suyu beslenimi ≈   80 milyon m³/yıl
  ─────────────────────────────────────────────────
  TOPLAM GİRDİ                ≈  356 milyon m³/yıl

ÇIKTI:
  Buharlaşma (1.400 mm × 520 km²) ≈ 728 milyon m³/yıl
  Tuzla pompajı                    ≈  30 milyon m³/yıl
  ─────────────────────────────────────────────────
  TOPLAM ÇIKTI                ≈  758 milyon m³/yıl

NET DENGE:  -402 milyon m³/yıl  ⚠️ KRİTİK AÇIK
```

> Bu açığın temel nedeni, havzadaki **tarımsal yeraltı suyu çekimi** (yılda ~2,3 milyar m³) nedeniyle doğal beslenmenin büyük ölçüde yitirilmesidir.

### Hidrolojik Döngünün Mevsimsel Seyri

| Dönem | Göl Durumu | Ortalama Derinlik | Renk |
|---|---|---|---|
| **Ocak – Mart** | Kısmi dolu, ince buz | 5–40 cm | Mavi/Gri |
| **Nisan – Mayıs** | Optimum ayna seviyesi | 2–8 cm | Mavi–Turkuaz |
| **Haziran – Temmuz** | Hızlı buharlaşma başlar | <5 cm | Yeşil–Turuncu |
| **Ağustos – Eylül** | Büyük ölçüde kuru | 0–3 cm (havuz) | Kızıl–Beyaz |
| **Ekim – Kasım** | Sonbahar yağışları başlar | 1–10 cm | Mavi–Yeşil |
| **Aralık** | Kapanış dönemi, tuz kabuku | 0–5 cm | Beyaz |

---

## 🕳️ Obruk (Sinkhole) Krizi

Tuz Gölü havzası, Türkiye'nin en yoğun **obruk (sinkhole)** oluşum bölgesidir. Bu jeolojik tehlike, fazla yeraltı suyu çekimiyle doğrudan ilişkilidir.

### Oluşum Mekanizması

```
Aşırı yeraltı suyu pompajı
         ↓
Yeraltı su tablasının düşmesi
         ↓
Kireçtaşı ve jips katmanlarındaki karstik boşluklar
suyu kaybeder ve çöker
         ↓
Üstteki toprak katmanı yük taşıyamaz hale gelir
         ↓
OBRUK: Ani yüzey çöküşü (çap 1–40 m, derinlik 5–50 m)
```

### 50 Yıllık Obruk Veri Serisi

| Yıl | Göl Alanı (km²) | Yeraltı Suyu Çekimi (m³/yıl) | Kümülatif Obruk | Yeni Obruk (o yıl) |
|---|---|---|---|---|
| 1975 | 1.600 | 120.000.000 | 12 | — |
| 1980 | 1.540 | 165.000.000 | 22 | 10 |
| 1985 | 1.450 | 210.000.000 | 38 | 16 |
| 1990 | 1.380 | 340.000.000 | 74 | 36 |
| 1995 | 1.250 | 480.000.000 | 148 | 74 |
| 2000 | 1.050 | 690.000.000 | 320 | 172 |
| 2005 | 900 | 850.000.000 | 650 | 330 |
| 2010 | 820 | 1.100.000.000 | 1.120 | 470 |
| 2015 | 750 | 1.400.000.000 | 1.720 | 600 |
| 2020 | 620 | 1.900.000.000 | 2.060 | 340 |
| 2025 | **520** | **2.300.000.000** | **2.400+** | **340+** |

> ⚠️ **50 yılda göl alanı %67,5 daralmış, obruk sayısı ise 200 kat artmıştır.**

### Risk Zonları

Araştırmalar bölgeyi üç kritik risk zonuna ayırmaktadır:

- 🔴 **Yüksek Risk:** Kuzey havza (Kaldırım tuzlası çevresi) ve doğu kıyı şeridi — ince kireçtaşı örtüsü, yoğun pompaj
- 🟠 **Orta Risk:** Batı çeper (Cihanbeyli tarım alanları) — jipsli katmanlar üzerinde tarım
- 🟡 **Düşük Risk:** Güney havza — kalın killi örtü, görece az pompaj

---

## 🦠 Ekstrem Mikrobiyoloji ve Ekoloji

### Hipersalin Ortamın Özellikleri

Tuz Gölü, **halofil (tuz seven)** mikroorganizmalar için dünya çapında birkaç örnek lokasyondan biridir. Yaz mevsiminde göl suyu aşağıdaki ekstrem koşulları barındırır:

| Parametre | Değer | Deniz Suyu Referansı |
|---|---|---|
| Tuzluluk | %29 – %33 | %3,5 |
| pH | 7,0 – 8,2 | 8,1 |
| Su Sıcaklığı (yaz) | 25 – 38°C | — |
| UV Radyasyon | Çok yüksek (yüksek rakım) | — |
| Oksijen | Düşük (hipoksi) | — |

### Hipersalin Trofik (Besin Ağı) Yapısı

```
                    ☀️ GÜNEŞ (UV + PAR Radyasyon)
                           │
           ┌───────────────┴──────────────────┐
           ▼                                  ▼
🦠 Dunaliella salina              🔴 Halobacterium salinarum
   (Yeşil Mikro Alg)                  (Halofilik Arkea)
   Beta-karoten sentezi,              Bakteriorodopsin ile
   oksijenik fotosentez               foton enerjisi dönüşümü
           │                                  │
           └───────────────┬──────────────────┘
                           ▼
                  🦐 Artemia salina
              (Tuz Karidesi / Brine Shrimp)
          Dünya'nın en tuzlu sularında yaşayan
             tek eklembacaklı hayvan türü
                      Karotenoid biriktirir
                           │
                           ▼
                  🦩 Phoenicopterus roseus
                  (Büyük Flamingo)
            Pembe rengi Artemia'dan edinilen
            beta-karotenden kaynaklanır
```

### *Dunaliella salina* — Renk Değişim Tablosu

*D. salina*, tuz stresi altında hücresel beta-karoten oranını %0,5'ten %12'ye kadar çıkarabilir — bu, bitkisel alemde bilinen en yüksek oranlardan biridir.

| Su Tuzluluğu | Su Sıcaklığı | Gölün Görünüm Rengi | Baskın Organizma | Biyokimyasal Süreç |
|---|---|---|---|---|
| < %15 | Herhangi | Mavi / Koyu Mavi | Diatomlar, Yeşil Algler | Normal fotosentez |
| %15 – %25 | < 22°C | Klasik Mavi | Halofit Bakteriler (pasif) | Düşük metabolizma |
| %15 – %25 | > 22°C | Yeşil-Turkuaz | *D. salina* (klorofil dönemi) | Aktif büyüme, klorofil |
| > %25 | 20 – 30°C | Turuncu-Pembe | *D. salina* (karotenoid sentezi) | β-karoten birikimi |
| > %30 | > 30°C | **Kızıl-Pembe** | *D. salina* + Halobakteriler | Ekstrem pigment |
| Kuru Dönem | — | Beyaz / Gri | — | Tuz kristallenmesi |

### Halobacterium salinarum ve Gölün Pembeleşmesi

Tuz konsantrasyonu %25'i geçtiğinde, hücre zarlarında **bakteriorodopsin** proteini taşıyan halofilik arkeler çoğalır. Bu proteinler mor-pembe renktedir ve güneş ışığını proton pompasıyla elektrokimyasal enerjiye dönüştürür — bu, dünyada bilinen klorofil içermeyen fotosentezin en yaygın örneğidir.

### *Artemia salina* — Tuzlu Su Karidesi

*Artemia salina*, tuzluluk oranı %28'i aşan sularda hayatta kalabilen, Dünya'da bilinen tek eklembacaklı türdür.

| Özellik | Değer |
|---|---|
| Maksimum tuzluluk toleransı | %33 (doygun halit çözeltisi) |
| Vücut uzunluğu | 8 – 15 mm |
| Beslenme | Süzgeç besleyici (filter feeder) — *D. salina* ve organik partiküller |
| Üreme | Olumsuz koşullarda kist (kuru yumurta) üretir; onlarca yıl canlı kalabilir |
| Ekolojik rol | Flamingolar için temel besin kaynağı ve beta-karoten taşıyıcı |
| Rengi | Pembe-turuncu (Dunaliella'dan biriktirilmiş karotenoid) |

---

## 🦩 Flamingo Popülasyon Ekolojisi

Tuz Gölü, Akdeniz havzasındaki en önemli **Büyük Flamingo (*Phoenicopterus roseus*)** kuluçka ve kreş alanlarından biridir. Doğu Afrika ve Camargue (Fransa) ile birlikte dünyanın üç büyük flamingo üreme merkezinden biri olarak kabul edilir.

### Popülasyon Trendi (1975–2025)

| Yıl | Tahmini Birey | Üreyen Çift | Kaynak |
|---|---|---|---|
| 1975 | 3.200 | ~400 | WWF Türkiye arşivi |
| 1985 | 6.500 | ~900 | DHKD |
| 1995 | 10.500 | ~1.600 | Doğa Derneği |
| 2005 | 15.200 | ~2.800 | KuşBank |
| 2015 | 19.500 | ~4.200 | OSME |
| 2025 | **22.400+** | **~5.100** | eBird / BirdLife |

### Yıllık Üreme ve Göç Takvimi

| Evre | Ay | Olay | Kritik Gereksinim |
|---|---|---|---|
| **1. Kış Kışlaması** | Aralık – Şubat | Akdeniz kıyıları / Kuzey Afrika'da kışlama | Açık su + besin |
| **2. Göç Varışı** | Mart – Nisan | Gölün güney izole adacıklarına göç | Düşük yırtıcı baskısı |
| **3. Çiftleşme** | Nisan – Mayıs | Dans ritüelleri, eş seçimi | Yeterli besin (Artemia) |
| **4. Yuva İnşası** | Mayıs | 30–40 cm konik çamur yuva inşaatı | Sığ su (5–15 cm) |
| **5. Kuluçka** | Haziran | 28–30 gün nöbetleşe kuluçka (1 yumurta) | Sabit su seviyesi |
| **6. Kreş Dönemi** | Temmuz – Ağustos | Toplu yavru grupları, ortaklaşa bakım | Artemia bolluğu |
| **7. Göç** | Eylül – Ekim | İlk uçuşlar, güneye dönüş | — |

### Flamingo-Göl Alanı Korelasyonu

Araştırmalar, gölün Mayıs–Haziran aylarındaki **sığ su kaplama alanı** ile o yılın kuluçka başarısı arasında güçlü pozitif korelasyon (r ≈ 0,84) olduğunu ortaya koymuştur. Alan 400 km²'nin altına düştüğünde üreme büyük ölçüde başarısız olmaktadır.

---

## 🌿 Endemik Halofit Flora

Tuz Gölü çevresi, **%80'i Türkiye'ye özgü** halofit bitkilerden oluşan nadir bir flora alanıdır. Bu bitkiler, tuz konsantrasyonunun toprak tuz oranı %2–15 olan alanlarda yetişir ve özel fizyolojik adaptasyonlara sahiptir.

### Endemik Tür Kataloğu

| Bilimsel Ad | Türkçe Adı | Familya | Endemik | IUCN Statüsü | Adaptasyon Mekanizması |
|---|---|---|---|---|---|
| *Salvia halophila* | Tuz Gölü Şalbası | Lamiaceae | ✅ Evet | **EN** — Tehlikede | Tuz bezleri, mumsu yüzey |
| *Kalidiopsis wagenitzii* | Tuz İbrikotu | Amaranthaceae | ✅ Evet | **CR** — Kritik Tehlikede | Tuz kesesinde Na⁺ depolama |
| *Taraxacum farinosum* | Tuz Karahindibası | Asteraceae | ✅ Evet | **VU** — Duyarlı | Derin kök, osmotik denge |
| *Microcnemum coralloides* | Tuz Mercanotu | Amaranthaceae | ❌ Hayır | **VU** — Duyarlı | Etli gövdede su depolama |
| *Limonium lilacinum* | Eflatun Limonyum | Plumbaginaceae | ✅ Evet | **LC** — Asgari Endişe | Yaprakta tuz salgılama |
| *Suaeda carpathica* | Tuzcul Süveyda | Amaranthaceae | ❌ Hayır | **LC** — Asgari Endişe | Na⁺ birikimi, kırmızılaşma |

### Halofit Adaptasyon Mekanizmaları

Halofitler tuzluluğa üç temel stratejiyle uyum sağlar:

1. **Tuz Dışlama:** Kökler Na⁺ ve Cl⁻ iyonlarının alımını aktif olarak engeller *(Suaeda sp.)*
2. **Tuz Salgılama:** Özel bez hücreleri aracılığıyla tuzu yaprak yüzeyine aktarır *(Limonium sp.)*
3. **Tuz Birikimi:** Tuzları etli yaprak ya da gövde dokularında konsantre eder, ozmotik dengeyi böyle kurar *(Salicornia, Microcnemum)*

---

## 🏛️ Tarih, Arkeoloji ve Kültürel Miras

### Kronolojik Tablo: Tatta'nın Tarihi

| Dönem | Tarih | Olay |
|---|---|---|
| **Tunç Çağı** | M.Ö. 3000–1200 | Havza çevresinde ilk yerleşimler; Konya Ovası köprü noktası |
| **Hitit İmparatorluğu** | M.Ö. 1400–1200 | Boğazköy tabletlerinde tuz ticareti referansları; Hattusa sarayına tuz sevkiyatı |
| **Frigya Dönemi** | M.Ö. 900–700 | Gölün kuzeyinde Frigya geçiş yolları; Midas Şehri bağlantısı |
| **Pers Dönemi** | M.Ö. 550–330 | Pers satrapy sistemi içinde tuz gelirlerinin imparatorluğa aktarımı |
| **Helenistik Dönem** | M.Ö. 330–30 | İskender'in Anadolu geçişinde Tatta'nın ikmal merkezi olarak kullanımı |
| **Roma İmparatorluğu** | M.S. 30–395 | Devlet tekeli; tuz, lejyon maaşlarının (salarium) sembolik bileşeni |
| **Bizans Dönemi** | M.S. 395–1071 | Tuz geliri Konstantinopolis hazinesine; kilise arşivlerinde Tatta kayıtları |
| **Selçuklu Dönemi** | 1071–1308 | Sultanhanı ve Ağzıkarahan kervansarayları; İpek Yolu tuz koridoru |
| **Osmanlı Dönemi** | 1453–1923 | TEKEL öncesi dönem; Düyun-ı Umumiye (1881) tuz gelirlerini devralır |
| **Cumhuriyet Dönemi** | 1923–günümüz | TEKEL → TUZSAN; endüstriyel üretim, ekolojik kriz başlangıcı |

### Strabon'un Tanımı (M.Ö. ~60)

Amasyalı coğrafyacı Strabon, *Geographika* (XII. Kitap) adlı eserinde şöyle yazar:

> *"Tatta adını verdikleri büyük bir göl var; bu gölde tuz o kadar bol çökelir ki, suya daldırılan iplikleri, sopacıkları hatta kuşları bile an içinde tuz kabuğuyla kaplar. Suyun kenarına yakın olan bir yerde havada asmak, bu nesneleri kristal bir kubbede tutmak demektir."*

### Tuz, Para ve Ordu: *Salarium*

Latince **sal** (tuz) kökünden gelen **salarium** kelimesi, Roma lejyonerlerine zaman zaman tuz olarak ödenen maaşı ifade eder. Buradan türeyen İngilizce **salary** (maaş) kelimesi, tuzun antik ekonomideki stratejik önemini bugün bile içinde barındırmaktadır. Tatta'dan çıkarılan tuz, Anadolu lejyonlarının önemli bir ikmal kaynağıydı.

---

## 👁️ Optik Anomaliler ve Atmosferik Fenomenler

Tuz Gölü'nün sonsuz beyaz düzlüğü, hem tarihin hem de modern bilimin dikkatini çekmiş çeşitli optik ve fiziksel anomalilere sahne olmaktadır.

### 1. Serap (Fata Morgana)

Yaz aylarında ısınan tuz yüzeyi üzerinde **sıcaklık inversiyonu** meydana gelir: zemine yakın hava soğuk, üstteki hava sıcaktır. Bu durum, ışığın yoğunluk farklılığı nedeniyle bükülmesine yol açar ve uzaktaki nesneler (araçlar, insanlar) gökyüzüne yansımış gibi görünür.

**Spatial Disorientation (Uzamsal Yön Kaybı):** Ufuk çizgisi silindiğinde beyin derinlik ve mesafeyi hesaplayamaz. Bu durum, tarihsel olarak gölü geçmeye çalışan kervanların kaybolmasına ve modern dönemde sürücü kazalarına yol açmıştır.

### 2. Mineral Lüminesansı

Kuruyan tuz çatlaklarında biriken **Potasyum (K)** ve **Lityum (Li)** tuzları, gece boyunca termal uyarılmayla zayıf bir soğuk ışık (lüminesans) yayar. Gözlemciler tarafından gece mavi-yeşil parlamalar olarak algılanan bu fenomen, aslen doğal bir fizik-kimyasal süreçtir.

### 3. Tektonik Gaz Yanması

Cihanbeyli aktif fay zonu boyunca yeraltından sızan eser miktarda **metan (CH₄)** gazı, bataklık ortamındaki statik elektrik veya yıldırım ile buluştuğunda anlık parlama yaratır. Özellikle sonbahar aylarında — yağmur sonrası — raporlanan bu olayların jeolojik açıklaması budur.

### 4. Gökyüzü Aynası (Sky Mirror) Fenomeni

İlkbaharda gölü kaplayan 2–5 cm kalınlığındaki **durgun su filmi**, yüzeyin mükemmel bir ayna görevi görmesine neden olur. Optimal koşullar:

```
Rüzgar hızı  < 5 km/s
Bulutluluk   = %20–50 (dramatik yansıma için)
Su derinliği = 2–5 cm
Ayak basınca dayanıklı tuz tabakası mevcut
```

Bu fenomen Türkiye'de **Salar de Uyuni (Bolivya)** benzeri bir doğal ayna deneyimi sunmakta ve Avrupa'nın en büyük gökyüzü aynası noktalarından biri olarak kabul edilmektedir.

---

## 🛰️ Uzaktan Algılama ve Uydu Analizi

### Kullanılan Uydu Platformları

| Platform | Kurum | Çözünürlük | Bantlar | Kullanım |
|---|---|---|---|---|
| **Landsat 5 / 7 / 8 / 9** | NASA / USGS | 30 m | B1–B11 | 1975'ten günümüze uzun dönem analizi |
| **Sentinel-2A / 2B** | ESA | 10–20 m | B1–B12 | NDWI su yüzey alanı, alg tespiti |
| **MODIS** | NASA | 250–1000 m | 36 bant | Yüzey sıcaklığı, günlük izleme |
| **SRTM / Copernicus DEM** | NASA / ESA | 30 m | Yükseklik | Havza sınırı, akış ağı |

### Sentinel-2 Bant Kombinasyonları

| Bant Kombinasyonu | Formül | Gösterilen Özellik |
|---|---|---|
| **True Color (Doğal Renk)** | B4 (R) – B3 (G) – B2 (B) | İnsan gözüyle görünüm; beyaz tuz, mavi su |
| **False Color (NIR)** | B8 – B4 – B3 | Canlı bitki örtüsü (kırmızı), alg konsantrasyonu |
| **NDWI (Su İndeksi)** | (B3 − B8) / (B3 + B8) | Açık su kütleleri izolasyonu (pozitif değer = su) |
| **NDVI (Bitki İndeksi)** | (B8 − B4) / (B8 + B4) | Çevre vejetasyon yoğunluğu |
| **Tuz/Kil Kombinasyonu** | B11 – B12 – B8A | Evaporit yüzey mineralojisi ayrımı |

### NDWI Analiz Metodolojisi

```python
# Sentinel-2 ile NDWI hesaplama (özet)
import numpy as np
import rasterio

with rasterio.open("sentinel2_b3_green.tif") as f:
    green = f.read(1).astype(float)

with rasterio.open("sentinel2_b8_nir.tif") as f:
    nir = f.read(1).astype(float)

ndwi = (green - nir) / (green + nir + 1e-10)
water_mask = ndwi > 0.0   # Eşik değer
water_area_km2 = water_mask.sum() * (10 * 10) / 1e6  # 10m piksel
```

Eşik değeri bölgeye göre 0,0 – 0,2 arasında kalibre edilir. Tuz Gölü için **0,05** eşiği optimum sonuç vermektedir.

---

## 📉 İklim Değişikliği Etkileri ve Projeksiyonlar

### Gözlemlenen Değişimler (1975–2025)

| Parametre | 1975 | 2025 | Değişim |
|---|---|---|---|
| Yıllık ortalama sıcaklık | 11,2°C | 12,8°C | **+1,6°C** |
| Yıllık yağış | 340 mm | 295 mm | **−13%** |
| Buharlaşma (göl yüzeyi) | 1.280 mm | 1.450 mm | **+13%** |
| Göl yüzey alanı | 1.600 km² | 520 km² | **−67,5%** |
| Obruk sayısı | 12 | 2.400+ | **+200x** |
| Flamingo popülasyonu | 3.200 | 22.400 | **+600%** (koruma sayesinde) |

### İklim Senaryo Projeksiyonları (2025–2055)

Bu projeksiyonlar IPCC AR6 bölgesel senaryolarına ve DSİ hidrolojik modelleme verilerine dayanmaktadır:

| Yıl | Sürdürülebilir | RCP 4.5 (Orta) | RCP 8.5 (Aşırı) |
|---|---|---|---|
| 2025 | 520 km² | 520 km² | 520 km² |
| 2030 | 535 km² | 495 km² | 470 km² |
| 2035 | 548 km² | 465 km² | 408 km² |
| 2040 | 558 km² | 430 km² | 330 km² |
| 2045 | 566 km² | 385 km² | 245 km² |
| 2050 | 574 km² | 345 km² | 175 km² |
| 2055 | **~580 km²** | **~310 km²** | **~120 km²** |

**RCP 8.5 senaryosunda**, 2055 yılına kadar göl alanı bugünkü değerinin %77'sini daha kaybedecek; flamingo üremesi için gerekli minimum alan olan ~400 km²'nin altına 2038 civarında inilecektir.

---

## ⚗️ Kimya: İyon ve Mineral Analizi

### Karot Numunesi İyon Verileri

Tuz Gölü yatağından alınan karot numunelerinin laboratuvar analiz sonuçları (MTA, 2019):

| Numune Kodu | Derinlik (m) | Jeolojik Birim | Na⁺ (mg/kg) | Cl⁻ (mg/kg) | SO₄²⁻ (mg/kg) | Kalsit (%) | Nem (%) |
|---|---|---|---|---|---|---|---|
| TG-C1-02 | 1,5 | Halit Düzlüğü | 375.200 | 580.400 | 8.200 | 1,2 | 3,5 |
| TG-C1-05 | 4,8 | Jipsli Killi Sediment | 98.400 | 152.000 | 124.500 | 18,4 | 12,8 |
| TG-C1-10 | 9,2 | Gölsel Yeşil Çamur | 41.200 | 63.100 | 38.400 | 42,5 | 28,4 |
| TG-C1-15 | 14,1 | Karbonatlı Marn | 22.100 | 34.200 | 19.100 | 68,9 | 15,2 |
| TG-C1-20 | 18,5 | Volkanik Bazalt | 4.800 | 7.200 | 2.100 | 8,3 | 4,1 |

### Göl Suyu İyon Dengesi (Yaz)

```
Göl suyu 1 litresi (yaklaşık):

  NaCl   (Sodyum Klorür)  ≈ 290 g     → temel tuz bileşeni
  MgCl₂  (Magnezyum)      ≈  18 g     → su sertliği
  Na₂SO₄ (Sodyum Sülfat)  ≈  12 g     → jips kaynaklı
  KCl    (Potasyum)       ≈   6 g     → biter tuz
  CaCl₂  (Kalsiyum)       ≈   3 g     → düşük (kalsit çökelmesi)
  ─────────────────────────────────────
  TOPLAM çözünmüş katı    ≈ 329 g/L   (Okyanus: ~35 g/L)
```

---

## 📦 Veri Setleri Referansı

### `data/lake_tuz_shrinkage.json`

1975–2025 yılları arası 11 ölçüm noktasını içeren **yüzey alanı, sıcaklık, yeraltı suyu çekimi, obruk sayısı ve maksimum derinlik** zaman serisi verisi.

**Şema:**

```json
{
  "year": 2000,
  "surface_area_km2": 1050,
  "average_temp_c": 12.4,
  "groundwater_extraction_m3": 690000000,
  "sinkhole_count": 140,
  "lake_depth_max_m": 0.7
}
```

**Alanlar:**

| Alan | Tip | Birim | Açıklama |
|---|---|---|---|
| `year` | integer | — | Ölçüm yılı |
| `surface_area_km2` | float | km² | Göl yüzey alanı (Landsat/Sentinel NDWI) |
| `average_temp_c` | float | °C | Yıllık ortalama hava sıcaklığı |
| `groundwater_extraction_m3` | integer | m³/yıl | Havzadaki toplam YAS çekimi (DSİ) |
| `sinkhole_count` | integer | adet | Kayıt altındaki toplam obruk sayısı |
| `lake_depth_max_m` | float | m | Sezon içindeki maksimum göl derinliği |

---

### `data/lake_tuz_flora.json`

Havzanın **endemik ve yerel halofit** bitki kataloğu. Her kayıt türün bilimsel ve ekolojik profilini içerir.

**Şema:**

```json
{
  "scientific_name": "Salvia halophila",
  "turkish_name": "Tuz Gölü Şalbası",
  "family": "Lamiaceae",
  "endemic": true,
  "iucn_status": "EN",
  "iucn_status_tr": "Tehlikede",
  "habitat": "Tuzlu bataklıklar, jipsli bozkırlar",
  "salt_tolerance_pct": 18,
  "adaptation": "Tuz bezleri, mumsu epikütikül",
  "description": "..."
}
```

---

## 🔬 Python Analiz Scriptleri

### `scripts/satellite_analysis.py`

Sentinel-2 ve Landsat uydu görüntülerinden **NDWI** (Normalized Difference Water Index) yöntemiyle Tuz Gölü su yüzey alanını hesaplar ve görselleştirir.

**Kullanılan Kütüphaneler:**

```
numpy       — dizi hesaplamaları
rasterio    — GeoTIFF okuma/yazma
matplotlib  — harita ve grafik çıktısı
scipy       — eşik optimizasyonu
```

**Kurulum ve Çalıştırma:**

```bash
pip install numpy rasterio matplotlib scipy
python scripts/satellite_analysis.py
```

**Özellikler:**
- Gerçek GeoTIFF bulunamazsa 1000×1000 piksellik simüle göl verisiyle çalışır
- Yıllık NDWI karşılaştırmalı harita üretir
- Eşik değeri otomatik optimize eder (Otsu yöntemi)

---

### `scripts/climate_projection.py`

Tuz Gölü Havzası'nın hidrolojik su bütçesini IPCC iklim senaryoları altında **2025–2055** için projeksiyonlar.

**Modelleme Yaklaşımı:**

```
Su Hacmi Değişimi:
  dV/dt = Girdi - Çıktı

  Girdi  = Yağış × AlanKatsayısı
           + AkarsuAkışı × (1 - TarımKesim)
           + YeraltıSuyu × BeslenimOranı

  Çıktı  = Buharlaşma × AlanKatsayısı
           + TuzlaPompajı
```

**Kullanım:**

```bash
python scripts/climate_projection.py
# Senaryo seçeneği: sustainable | rcp45 | rcp85
python scripts/climate_projection.py --scenario rcp85 --start 2025 --end 2055
```

**Örnek Çıktı:**

```
=== TUZ GÖLÜ HİDROLOJİK PROJEKSİYON SİMÜLASYONU ===

Senaryo: RCP_8.5
Dönem  : 2025 – 2055
─────────────────────────────────────────────────────
Yıl  │ Alan (km²) │ Maks. Derin. (m) │ Yeni Obruk
─────────────────────────────────────────────────────
2025 │ 520,0      │ 0,25             │ 46
2030 │ 470,3      │ 0,20             │ 72
2035 │ 408,1      │ 0,15             │ 118
2040 │ 330,4      │ 0,10             │ 190
2045 │ 245,2      │ 0,06             │ 280
2050 │ 175,0      │ 0,03             │ 350
2055 │ 120,0      │ 0,01             │ 400+
─────────────────────────────────────────────────────
⚠️  UYARI: 2038 itibarıyla flamingo üreme eşiği (400 km²) altına inildi.
```

---

## 📚 Bilimsel Kaynakça ve Referanslar

> Bu repo'daki veriler ve analizler aşağıdaki kaynaklar esas alınarak derlenmektedir. Akademik kullanım için orijinal kaynaklara başvurulması önerilir.

### Jeoloji & Hidroloji

- **Erol, O.** (1983). *Tuz Gölü ve çevresinin jeomorfolojisi*. Ankara Üniversitesi Dil ve Tarih-Coğrafya Fakültesi Dergisi, 29(1-2).
- **Görür, N., Oktay, F. Y., Seymen, İ. & Şengör, A. M. C.** (1984). *Palaeotectonic evolution of the Tuzgölü basin complex, Central Turkey*. Geological Society Special Publications, 17(1), 81–96.
- **DSİ** (2022). *Konya Kapalı Havzası Yeraltı Suyu Gözlem Raporu 2021*. T.C. Su İşleri Genel Müdürlüğü, Ankara.
- **MTA** (2019). *Tuz Gölü Havzası Karot Sondaj Sonuçları (TG-C1 Serisi)*. Maden Tetkik ve Arama, Rapor No: 11834.

### Ekoloji & Biyoloji

- **Huner, J. V. & Brown, E. E.** (1985). *Freshwater Crayfish Aquaculture in North America, Europe and Australia*. Food Products Press.
- **Oren, A.** (2002). *Halophilic Microorganisms and Their Environments*. Kluwer Academic Publishers. DOI: 10.1007/0-306-48053-0
- **Doğa Derneği** (2020). *Tuz Gölü Flamingo İzleme Raporu 2019*. Doğa Derneği Yayınları, Ankara.
- **BirdLife International** (2023). *Phoenicopterus roseus — species factsheet*. birdlife.org.

### Uzaktan Algılama

- **McFeeters, S. K.** (1996). *The use of the Normalized Difference Water Index (NDWI) in the delineation of open water features*. International Journal of Remote Sensing, 17(7), 1425–1432. DOI: 10.1080/01431169608948714
- **ESA** (2023). *Sentinel-2 User Handbook — Level-2A Product*. European Space Agency.
- **Landsat Science Team** (2022). *Landsat Collection 2 Overview*. U.S. Geological Survey.

### Tarih & Arkeoloji

- **Strabon** (~M.Ö. 60). *Geographika*, Kitap XII — Pontus ve Kapadokya.
- **Ramsay, W. M.** (1890). *The Historical Geography of Asia Minor*. Royal Geographical Society, London.
- **Redford, S.** (1993). *The Seljuqs of Rum and the Antique*. Muqarnas, 10, 148–156.

### İklim

- **IPCC** (2021). *Climate Change 2021: The Physical Science Basis. AR6 Working Group I*. Cambridge University Press.
- **Türkiye İklim Değişikliği Eylem Planı** (2023–2030). T.C. Çevre, Şehircilik ve İklim Değişikliği Bakanlığı.

---

## 🤝 Katkıda Bulunma

**Tatta-Archive** açık kaynaklı ve disiplinlerarası bir araştırma inisiyatifidir. Araştırmacılar, geliştiriciler, GIS uzmanları, doğa fotoğrafçıları ve yöre halkı her düzeyde katkıda bulunabilir.

### Katkı Türleri

| Tür | Nasıl? |
|---|---|
| 🧪 **Yeni veri seti** | CSV/JSON formatında yeni ölçüm serisi ekle |
| 🛰️ **GIS / Uydu analizi** | Python/QGIS scripti ya da GeoTIFF ile katkı |
| 🐍 **Analiz scripti** | Yeni hidrolojik, spektral veya istatistiksel model |
| 🌿 **Flora / Fauna kaydı** | Yeni tür gözlemi JSON kataloğuna ekle |
| 🖥️ **Web geliştirme** | Yeni simülatör, görselleştirme veya bölüm |
| 📜 **Tarihsel belge** | Yöresel efsane, Osmanlı arşivi veya Antik metin |
| 📸 **Fotoğraf arşivi** | CC-BY lisanslı göl fotoğrafı |
| 🔍 **Akademik referans** | Kaynakça listesine yeni bilimsel yayın |
| 🐛 **Bug fix** | Simülatör veya UI hatası düzeltmesi |

### Katkı Süreci

```bash
# 1. Repoyu fork'la
# 2. Yeni branch oluştur
git checkout -b feat/yeni-ozellik

# 3. Değişikliklerini yap ve commit'le
git commit -m "feat: açıklayıcı mesaj"

# 4. Fork'una push'la
git push origin feat/yeni-ozellik

# 5. Pull Request aç
```

Detaylar için → **[CONTRIBUTING.md](./CONTRIBUTING.md)**

---

## 📄 Lisans

Bu depo iki ayrı lisans altında yönetilmektedir:

| İçerik | Lisans |
|---|---|
| **Kod** (HTML, CSS, JS, Python) | [MIT License](https://opensource.org/licenses/MIT) |
| **Bilimsel İçerik, Veri ve Görseller** | [Creative Commons Attribution 4.0 (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/) |

Atıf için: *Tatta-Archive (2026). Tuz Gölü Disiplinlerarası Araştırma Deposu. GitHub: arch-yunus/Tatta-Archive*

---

<div align="center">

**🌊 Tuz Gölü'nün korunması için bilimin, kültürün ve teknolojinin birleştiği açık platform.**

*Her satır veri, gölün geleceğine duyulan bir sorumluluktur.*

[![GitHub](https://img.shields.io/badge/GitHub-arch--yunus%2FTatta--Archive-181717?style=flat-square&logo=github)](https://github.com/arch-yunus/Tatta-Archive)
[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-00e5ff?style=flat-square&logo=github-pages)](https://arch-yunus.github.io/Tatta-Archive/)

**[⬆️ Yukarı Dön](#-tatta-archive-tuz-gölü-disiplinlerarası-araştırma-deposu)**

</div>