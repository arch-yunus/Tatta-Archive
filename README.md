# 🌊 Tatta-Archive: Tuz Gölü Disiplinlerarası Bilgi Bankası

<div align="center">

![Version](https://img.shields.io/badge/versiyon-3.0-ff7597?style=for-the-badge)
![License](https://img.shields.io/badge/lisans-MIT%20%2F%20CC--BY--4.0-00e5ff?style=for-the-badge)
![Language](https://img.shields.io/badge/dil-Türkçe-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/durum-Aktif%20Geliştirme-4ade80?style=for-the-badge)

**[🌐 Canlı Demo → GitHub Pages](https://arch-yunus.github.io/Tatta-Archive/)** | **[📊 Veri Setleri](./data/)** | **[🔬 Analiz Scriptleri](./scripts/)** | **[🤝 Katkıda Bulun](./CONTRIBUTING.md)**

![Tuz Gölü — Gökyüzünün Yeryüzündeki Aynası](./banner.png)

</div>

---

> *"Hiçbir şeyin olmadığı uçsuz bucaksız bir beyazlıkta, doğanın en karmaşık sistemleri çalışır."*

**Tatta-Archive**, Türkiye'nin en büyük ikinci gölü olan ve dünya ekolojisi ile jeolojisi açısından eşsiz bir konuma sahip **Tuz Gölü'nün (Antik adıyla *Tatta*)** tüm yönleriyle incelendiği açık kaynaklı bir bilgi ve araştırma deposudur.

Bu repo; jeolojik verilerden kültürel mirasalara, optik anomalilerden uydu telemetri analizlerine kadar dağınık haldeki tüm bilgileri tek bir sistematik yapıda toplamayı ve **tam interaktif bir web platformunda sunmayı** amaçlar.

---

## 📋 İçindekiler

1. [🌐 İnteraktif Web Platformu](#-interaktif-web-platformu)
2. [🗂️ Repo Yapısı](#️-repo-yapısı)
3. [🪨 Jeoloji ve Coğrafi Dinamikler](#1--jeoloji-ve-coğrafi-dinamikler)
4. [🦩 Ekstrem Biyoçeşitlilik ve Ekoloji](#2--ekstrem-biyoçeşitlilik-ve-ekoloji)
5. [🏛️ Tarih, Kültür ve Antik Dönem](#3-️-tarih-kültür-ve-antik-dönem)
6. [👁️ Gizemler, Efsaneler ve Anomaliler](#4-️-gizemler-efsaneler-ve-anomaliler)
7. [📷 Turizm, Gözlem ve Görsel Arşiv](#5--turizm-gözlem-ve-görsel-arşiv)
8. [🛰️ Veri, İklim ve Uydu Analizi](#6-️-veri-i̇klim-ve-uydu-analizi)
9. [📦 Veri Setleri](#-veri-setleri)
10. [🔬 Python Analiz Scriptleri](#-python-analiz-scriptleri)
11. [🤝 Katkıda Bulunma](#-katkıda-bulunma)

---

## 🌐 İnteraktif Web Platformu

Tatta-Archive, sade bir bilgi arşivinin çok ötesinde; **altı disiplini kapsayan, tamamen interaktif** ve premium tasarımlı bir web uygulamasıdır. `index.html` dosyasını tarayıcınızda açarak veya GitHub Pages üzerinden doğrudan kullanabilirsiniz.

### ✨ Platform Özellikleri

| Bölüm | İnteraktif Özellik | Açıklama |
|---|---|---|
| **Jeoloji** | 🔩 Karot Sondaj Simülatörü | Göl yatağını 15 metreye kadar sondajlayın, jeolojik katmanları keşfedin |
| **Jeoloji** | 💧 Hidrolojik Denge Hesaplayıcı | Yağış, dere akışları, yeraltı suyu ve buharlaşma parametrelerini ayarlayın |
| **Jeoloji** | 🗺️ İnteraktif Tektonik Harita | Fay hatları, tuzlalar ve kaynak noktalarını SVG haritasında inceleyin |
| **Ekoloji** | 🍽️ Trofik Besin Ağı Diyagramı | Güneş → Alg → Artemia → Flamingo enerji akışını interaktif olarak izleyin |
| **Ekoloji** | 🎨 Dunaliella Salina Renk Simülatörü | Tuzluluk ve sıcaklık kaydırarak gölün renginin değişimini gözlemleyin |
| **Ekoloji** | 🦩 Flamingo Üreme Döngüsü | Mart'tan Ekim'e 5 aşamalı kuluçka döngüsünü adım adım inceleyin |
| **Ekoloji** | 🌿 3D Flora Flip Kataloğu | 6 endemik türün bilimsel verilerini 3D kart sistemiyle keşfedin |
| **Gizemler** | 📖 Seçim Tabanlı Hikaye (CYOA) | Taşlaşan Kadın efsanesini 5 farklı sonucu olan interaktif bir macera olarak yaşayın |
| **Gizemler** | 📡 Gece Işık Anomali Radarı | Radar tarama animasyonu ile UFO iddialarının bilimsel açıklamalarını keşfedin |
| **Gizemler** | 🌅 Serap & Yön Kaybı Simülatörü | Canvas tabanlı ufuk illüzyonu simülasyonu |
| **Turizm** | 🗺️ Ekolojik Rota Planlayıcı | 3 farklı güzergahın güvenlik, mesafe ve kısıtlama bilgileri |
| **Turizm** | 🪞 Sky Mirror Tahmin Algoritması | Ay, rüzgar ve bulutluluğa göre kusursuz yansıma ihtimalini hesaplayın |
| **Veri** | 🛰️ Multispektral Uydu Görüntü Karşılaştırıcısı | Sentinel-2'nin True Color, NIR ve NDWI bantlarını simüle edin |
| **Veri** | 📉 Daralma Zaman Tüneli (1975-2025) | SVG harita üzerinde 50 yıllık göl küçülmesini kaydırıcıyla izleyin |
| **Veri** | 📊 Chart.js Hidrolojik Risk Grafiği | Alan daralması ile obruk sayısı korelasyon grafiği |
| **Veri** | 🧪 Bilimsel İyon Analiz Tablosu | Farklı karot derinliklerinde mineral ve iyon konsantrasyon verileri |

---

## 🗂️ Repo Yapısı

```
Tatta-Archive/
│
├── index.html              # İnteraktif web uygulaması ana sayfası
├── styles.css              # Premium tasarım sistemi (Dark mode, glassmorphism)
├── app.js                  # Tüm interaktif özellikler ve simülatör mantığı
│
├── data/
│   ├── lake_tuz_shrinkage.json   # 1975-2025 yüzey alanı ve obruk verisi
│   └── lake_tuz_flora.json       # Havzanın endemik halofit bitki kataloğu
│
├── scripts/
│   ├── satellite_analysis.py     # Sentinel-2 / Landsat NDWI su sınırı analizi
│   └── climate_projection.py     # RCP 4.5 / 8.5 hidrolojik projeksiyon modeli
│
├── CONTRIBUTING.md         # Katkı rehberi
├── .gitignore
└── README.md
```

---

## 1. 🪨 Jeoloji ve Coğrafi Dinamikler

Tuz Gölü, sıradan bir su birikintisi değil, kapalı bir havzanın merkezindeki devasa bir buharlaşma laboratuvarıdır.

### Tektonik Yapı

Göl, Neojen dönemde tektonik hareketlerle oluşan büyük bir çöküntü havzasının (Tuz Gölü Havzası) en çukur yerindedir. İki ana aktif fay sistemi gölü çerçeveler:

- **Tuz Gölü Batı Fay Zonu** — Cihanbeyli eksenli, doğrultu atımlı
- **Şereflikoçhisar Doğu Fayı** — Sağ yönlü, havzanın doğu sınırı

### Kapalı Havza Karakteristiği

Dışarıya akıntısı olmayan bu göl, Peçeneközü, Melendiz ve İnsuyu gibi derelerle beslenir. Su döngüsü tamamen buharlaşma üzerine kuruludur.

### Tuz (Halit) Çökelmesi

| Parametre | Değer |
|---|---|
| Tuzluluk Oranı | %32.4 (Doygun Halit Çözeltisi) |
| Kristal Kabuk Kalınlığı | 1 – 30 cm (mevsime göre değişir) |
| Türkiye Tuz Üretimindeki Payı | ~%40 |
| Kaya Tuzu Sertliği | 2.5 (Mohs Ölçeği) |

### Stratigrafik Karot Profili (Simülatörde İnceleyin)

| Derinlik | Jeolojik Birim | Dönem | Temel Mineraloji |
|---|---|---|---|
| 0 – 2 m | Saf Halit Düzlüğü | Holosen | NaCl %98.2 |
| 2 – 5 m | Jips ve Anhidrit | Geç Pliyosen | CaSO₄·2H₂O |
| 5 – 10 m | Gölsel Yeşil Çamur | Orta Pleyistosen | Montmorillonit, Kuvars |
| 10 – 15 m | Kırıntılı Kumtaşı & Marn | Miyosen | Kalsit çimentolu detritik kuvars |

---

## 2. 🦩 Ekstrem Biyoçeşitlilik ve Ekoloji

Tuzluluk oranının okyanuslardan katbekat fazla olduğu bu sert ortamda, yaşamın sınırları zorlanmaktadır.

### Hipersalin Trofik (Besin Ağı) Yapısı

```
☀️ Güneş Enerjisi
      │
      ├──▶ 🦠 Dunaliella salina (Yeşil Mikro Alg)
      │         │ Beta-karoten sentezi, fotosentez
      │         │
      └──▶ 🔴 Halobakteriler (Archaea, Bakteriorodopsin)
                │
                ▼
         🦐 Artemia salina (Tuz Karidesi)
         — Dünya'nın en tuzlu sularında hayatta kalan tek eklembacaklı
                │
                ▼
         🦩 Phoenicopterus roseus (Flamingo)
         — Pembe rengi, algden edinilen karotenoidlerden gelir
```

### Kızıl Göl Fenomeni (*Dunaliella salina*)

Gölün yaz aylarında kırmızı/pembe bir renge bürünmesinin sebebi, tuzluluk ve sıcaklık arttığında beta-karoten üreterek kendini koruyan *Dunaliella salina* adlı mikro alglerdir.

| Koşul | Gölün Rengi | Baskın Organizma |
|---|---|---|
| Düşük Tuzluluk (<15%) | Mavi/Koyu Mavi | Diatomlar, Yeşil Algler |
| Orta Tuzluluk (15–25%) | Yeşil-Turkuaz | D. salina (Klorofil Dönemi) |
| Yüksek Tuzluluk (>25%), Sıcak | Turuncu-Pembe | D. salina (Karotenoid Sentezi) |
| Aşırı Tuzluluk (>30%), Sıcak | Kızıl-Pembe | D. salina + Halobakteriler |
| Kuru Dönem | Beyaz/Gri | — (Tuz Kristallenmesi) |

### Flamingo (*Phoenicopterus roseus*) Üreme Takvimi

| Dönem | Ay | Olay |
|---|---|---|
| Varış | Mart – Nisan | Göç; izole adacıkların seçimi |
| Yuva İnşası | Mayıs | Konik çamur yuvalar (h: 30-40 cm) |
| Kuluçka | Haziran | 28-30 günlük nöbetleşe kuluçka |
| Kreş | Temmuz – Ağustos | Toplu yavru bakımı |
| Göç | Eylül – Ekim | İlk uçuş, Akdeniz'e dönüş |

### Endemik Halofit Bitki Kataloğu

| Bilimsel Ad | Türkçe Adı | Durum |
|---|---|---|
| *Salvia halophila* | Tuz Gölü Şalbası | EN — Tehlikede |
| *Kalidiopsis wagenitzii* | Tuz İbrikotu | CR — Kritik Tehlikede |
| *Taraxacum farinosum* | Tuz Karahindibası | VU — Duyarlı |
| *Microcnemum coralloides* | Tuz Mercanotu | VU — Duyarlı |
| *Limonium lilacinum* | Eflatun Limonyum | LC — Asgari Endişe |
| *Suaeda carpathica* | Tuzcul Süveyda | LC — Asgari Endişe |

---

## 3. 🏛️ Tarih, Kültür ve Antik Dönem

İnsanlığın tuz ihtiyacı, bölgeyi binlerce yıldır stratejik bir merkez haline getirmiştir.

### Kronolojik Zaman Çizelgesi

**M.Ö. 1. Yüzyıl — Strabon'un Geographika'sı:**
> Amasyalı coğrafyacı Strabon, gölden **"Tatta (Τάτta)"** olarak bahseder. Gölün sularının o kadar tuzlu olduğunu yazar ki, suya sokulan her nesne anında tuz kristaliyle kaplanır ve içine düşen kuşlar uçamaz hale gelerek kolayca yakalanır.

**M.S. 2. – 4. Yüzyıl — Roma İmparatorluğu:**
Tatta, eyalet ekonomisinin kalbiydi. Tuz üretimi devlet tekelindeydi. Çıkarılan blok kaya tuzları, Anadolu'yu çevreleyen askeri ve ticari yollar üzerinden lejyonların iaşesi için imparatorluğun dört bir yanına taşınıyordu.

**13. Yüzyıl — Anadolu Selçukluları:**
Gölün doğu ve batı kıyılarından geçen ticaret kolları koruma altına alındı. Şereflikoçhisar ve Aksaray yollarında inşa edilen kervansaraylar (Sultanhanı, Ağzıkarahan), tuz tüccarlarının konakladığı güvenli limanlar haline geldi.

**19. Yüzyıl — Osmanlı Düyun-ı Umumiye:**
Dış borçların ödenmesi için Tuz Gölü'nün gelirleri Düyun-ı Umumiye idaresine devredildi. Bölge, modern Türkiye'de sanayileşme sürecinde kritik önemini korumaya devam etti.

---

## 4. 👁️ Gizemler, Efsaneler ve Anomaliler

Sonsuz bir düzlük ve beyazlık, insan psikolojisini ve algısını tarih boyunca etkilemiş, çeşitli mitlere ve olaylara zemin hazırlamıştır.

### Taşlaşan Kadın Efsanesi (İnteraktif CYOA)

Web platformunda bu efsane, **5 farklı sonucu olan bir seçim-tabanlı interaktif hikaye** olarak deneyimlenebilir:

- ✅ *Umut Pınarı Keşfi* — Dervişe yardım edip gizli kaynağı bulmak
- ✅ *Takdis Edilmiş Kervan* — Dervişin duasıyla sihirli koruma
- ✅ *Tedbirli Lider* — Efsaneye kulak verip güvenli rotayı seçmek
- ❌ *Serapta Kayboluş* — Dervişi küçümseyip tuz düzlüğünde boğulmak
- ❌ *Taşlaşan Kervan* — Cimrilik ederek sonsuza kadar tuz kristallerine dönüşmek

### Serap ve Yön Kaybı (Spatial Disorientation)

Özellikle yazın suların çekilmesiyle oluşan sonsuz beyazlıkta ufuk çizgisi (yer ile gök arasındaki sınır) kaybolur. Bu durum optik ilüzyonlara (serap) yol açar ve navigasyon aletleri olmadan yürüyenlerde ciddi yönelim bozukluklarına, derinlik algısı kaybına ve tarihsel kaybolma vakalarına neden olmuştur.

### Gece Işık Anomalileri — Bilimsel Sınıflandırma

Web platformundaki **Atmosferik Işık Anomali Radarı**'nda üç anomali türü radar koordinatlarıyla belgelenmiştir:

| Anomali Kodu | Tür | Bilimsel Açıklama |
|---|---|---|
| **Grup-Alfa** | Mineral Lüminesansı | Kaldırım tuzlası yakınlarında kuruyan tuz çatlaklarındaki Potasyum/Lityum tuzlarının termal uyarılması |
| **Grup-Beta** | Fata Morgana | Şereflikoçhisar kıyısında zemin üstündeki soğuk hava tabakasının yıldız ışıklarını kırarak oluşturduğu dikey sütun yanılsaması |
| **Grup-Gama** | Tektonik Gaz Yanması | Cihanbeyli aktif fayından sızan eser miktardaki metanın statik elektrikle havada parlaması |

---

## 5. 📷 Turizm, Gözlem ve Görsel Arşiv

Tuz Gölü, doğal bir stüdyo ve dünyanın en büyük aynalarından biridir.

### Ziyaret Rotaları

| Giriş Noktası | Güvenlik | Özellik | Uyarı |
|---|---|---|---|
| **Şereflikoçhisar (Kaldırım)** | ✅ Yüksek | Ayna efekti, fotoğraf | Yalınayak yürümeyin |
| **Cihanbeyli (Yavşan)** | ⚠️ Orta | Tuzla çeperi, doğa | Araçla zeminε girmeyin |
| **Eskil (Flamingo Koruma)** | 🔒 Kısıtlı | Kuş gözlem | Özel izin gerekir |

### Mevsimsel Ziyaret Rehberi

| Mevsim | Gölün Durumu | İdeal Aktivite |
|---|---|---|
| **Nisan – Mayıs** | İnce su filmi (2–5 cm) | Ayna yansıması fotoğrafçılığı |
| **Temmuz – Ağustos** | Kızıl/Pembe D. salina | Ekosistem gözlemi |
| **Eylül – Ekim** | Beyaz tuz çölü | Manzara ve flamingo göçü |
| **Kış** | Sığ su + kısmen donma | Gün batımı fotoğrafçılığı |

### Sky Mirror Tahmin Algoritması

Web platformundaki tahmin aracı, aşağıdaki formüle dayanarak kusursuz yansıma ihtimalini hesaplar:

```
Tahmin = Ay Faktörü × Rüzgar Faktörü × Bulutluluk Faktörü × 100
```

- **Optimum Ay:** Nisan–Mayıs (Faktör: 1.0)
- **Kritik Rüzgar Eşiği:** <10 km/s (Üzerinde su dalgalanır)
- **İdeal Bulutluluk:** %20–50 (Dramatik yansıma efekti için)

---

## 6. 🛰️ Veri, İklim ve Uydu Analizi

Gölün geleceğini anlamak için geçmiş verileri inceliyoruz.

### Yüzey Alanı Daralma Verileri (1975–2025)

| Yıl | Alan (km²) | Yeraltı Suyu Çekimi (m³/yıl) | Obruk Sayısı |
|---|---|---|---|
| 1975 | 1,600 | 120,000,000 | 12 |
| 1985 | 1,450 | 210,000,000 | 25 |
| 1995 | 1,250 | 480,000,000 | 72 |
| 2005 | 900 | 850,000,000 | 280 |
| 2015 | 750 | 1,400,000,000 | 940 |
| 2025 | **520** | **2,300,000,000** | **2,400** |

> ⚠️ 50 yılda göl alanı **%67.5 oranında küçülmüştür.**

### İklim Senaryo Projeksiyonları (2025–2055)

| Senaryo | 2025 Alanı | 2055 Tahmini | Risk Seviyesi |
|---|---|---|---|
| **Sürdürülebilir** | 520 km² | ~580 km² | Düşük |
| **RCP 4.5** (Orta) | 520 km² | ~310 km² | Orta |
| **RCP 8.5** (Aşırı) | 520 km² | ~120 km² | Kritik |

### Multispektral Uydu Bant Kombinasyonları

| Bant | Kombinasyon | Gösterilen Özellik |
|---|---|---|
| **True Color** | B4, B3, B2 | İnsan gözüyle görülen görünüm |
| **False Color / NIR** | B8, B4, B3 | Alg yoğunluğu (parlak kırmızı = D. salina) |
| **NDWI** | (B3–B8)/(B3+B8) | Açık su kütleleri izolasyonu |

---

## 📦 Veri Setleri

Repo bünyesindeki açık veri dosyaları araştırmacılar tarafından serbestçe kullanılabilir.

### `data/lake_tuz_shrinkage.json`

50 yıllık (1975–2025) su seviyesi ve obruk verisi. Her kayıt:

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

### `data/lake_tuz_flora.json`

Havzanın endemik ve yerel halofit bitki kataloğu. Her kayıt:

```json
{
  "scientific_name": "Salvia halophila",
  "turkish_name": "Tuz Gölü Şalbası",
  "family": "Lamiaceae",
  "endemic": true,
  "status": "EN",
  "habitat": "Tuzlu bataklıklar, jipsli bozkırlar",
  "description": "..."
}
```

---

## 🔬 Python Analiz Scriptleri

### `scripts/satellite_analysis.py`

Sentinel-2 ve Landsat uydu görüntülerinden **NDWI (Normalized Difference Water Index)** yöntemiyle su yüzey alanını hesaplar.

**Formül:**
```
NDWI = (Green - NIR) / (Green + NIR)
```

**Kurulum:**
```bash
pip install numpy rasterio matplotlib
python scripts/satellite_analysis.py
```

Script, gerçek GeoTIFF dosyaları bulunamazsa 1000×1000 piksellik simüle edilmiş bir göl üzerinde çalışır.

---

### `scripts/climate_projection.py`

Tuz Gölü Havzası'nın hidrolojik su bütçesini iklim değişikliği parametreleri altında **2025–2055** projeksiyonuyla simüle eder.

**Su Bütçesi Formülü:**
```
dV/dt = Toplam_Girdi - Toplam_Çıktı
Toplam_Girdi = Yağış + Akarsu_Akışı + Yeraltı_Suyu_Beslenimi
Toplam_Çıktı = Buharlaşma
```

**Kullanım:**
```bash
python scripts/climate_projection.py
```

**Örnek Çıktı:**
```
=== TUZ GÖLÜ HİDROLOJİK PROJEKSİYON SİMÜLASYONU (2025 - 2055) ===

Senaryo: RCP_8.5
-----------------------------------------------------------------
Yıl    | Göl Alanı (km2) | Maks. Derinlik (m) | Yeni Obruklar
-----------------------------------------------------------------
2025   | 520.0           | 0.25               | 46
2030   | 420.3           | 0.17               | 72
2035   | 302.1           | 0.11               | 118
2040   | 198.4           | 0.06               | 190
...
```

---

## 🤝 Katkıda Bulunma

**Tatta-Archive** açık kaynaklı bir inisiyatiftir. Araştırmacılar, geliştiriciler, fotoğrafçılar ve yöre halkı repoya katkıda bulunabilir.

Katkı türleri:
- 🧪 Yeni uydu veya meteorolojik veri seti eklemek
- 🐍 Python/GIS analiz scripti paylaşmak
- 🌿 Flora veya fauna kaydı eklemek
- 🖥️ Web uygulamasına yeni simülatör veya görselleştirme kazandırmak
- 📜 Yöresel efsane veya tarihi belge derlemek
- 📸 Fotoğraf arşivini genişletmek

Detaylar için → **[CONTRIBUTING.md](./CONTRIBUTING.md)**

---

## 📄 Lisans

Bu depo iki lisans altında yönetilmektedir:

- **Kod (HTML, CSS, JS, Python):** [MIT License](https://opensource.org/licenses/MIT)
- **İçerik, Veri ve Görseller:** [Creative Commons Attribution 4.0 International (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)

---

<div align="center">

*Tuz Gölü'nün korunması için bilimin, kültürün ve teknolojinin birleştiği bir platform.*

**[⬆️ Yukarı Dön](#-tatta-archive-tuz-gölü-disiplinlerarası-bilgi-bankası)**

</div>