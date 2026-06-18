# 🌊 Tatta-Archive: Tuz Gölü Disiplinlerarası Araştırma Deposu

<div align="center">

![Version](https://img.shields.io/badge/versiyon-5.0-ff7597?style=for-the-badge)
![License](https://img.shields.io/badge/lisans-MIT%20%2F%20CC--BY--4.0-00e5ff?style=for-the-badge)
![Language](https://img.shields.io/badge/dil-Türkçe-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/durum-Aktif%20Geliştirme-4ade80?style=for-the-badge)
![Disciplines](https://img.shields.io/badge/disiplin-10%20alan-f97316?style=for-the-badge)
![Data](https://img.shields.io/badge/veri-Açık%20Kaynak-22d3ee?style=for-the-badge)

**[🌐 Canlı Platform](https://arch-yunus.github.io/Tatta-Archive/)** · **[📊 Veri Setleri](./data/)** · **[🔬 Analiz Scriptleri](./scripts/)** · **[🤝 Katkıda Bulun](./CONTRIBUTING.md)**

![Tuz Gölü — Gökyüzünün Yeryüzündeki Aynası](./banner.png)

*Tuz Gölü, Nisan ayı — Bahar ayna yansıması. Fotoğraf: Tatta-Archive*

</div>

---

> *"Hiçbir şeyin olmadığı uçsuz bucaksız bir beyazlıkta, doğanın en karmaşık jeolojik, biyokimyasal ve folklorik sistemleri çalışır."*

**Tatta-Archive**, Türkiye'nin en büyük ikinci gölü ve Yakın Doğu'nun en büyük hipersalin kapalı havzası olan **Tuz Gölü'nün** (Antik coğrafyacıların adlandırmasıyla *Tatta* — Τάττα) fiziki, kimyasal, biyolojik, folklorik ve gizemli tüm yönlerini inceleyen **disiplinlerarası, açık kaynaklı akademik araştırma deposudur**.

Bu depo; jeomorfoloji, yapısal jeoloji, havza hidrolojisi, ekstrem mikrobiyoloji, ornitoloji, halofit botanik, uzaktan algılama, bölgesel arkeoloji, yerel mitoloji ve atmosferik optik anomaliler alanlarında dağınık halde bulunan bilimsel ve kültürel verileri sistematik bir çatı altında toplar. Platform, araştırmacılara hem ham veri tabanlarını hem de interaktif simülatörler barındıran bir web arayüzü sunar.

---

## 📋 İçindekiler

1. [🌍 Genel Bakış & Coğrafi Konum](#-genel-bakış--coğrafi-konum)
2. [📊 Küresel Hipersalin Göller Karşılaştırma Matrisi](#-küresel-hipersalin-göller-karşılaştırma-matrisi)
3. [🌐 İnteraktif Web Platformu Detayları](#-initeraktif-web-platformu-detayları)
4. [🗂️ Repo Yapısı ve Dizin Açıklamaları](#-repo-yapısı-ve-dizin-açıklamaları)
5. [🪨 Yapısal Jeoloji ve Havza Stratigrafisi](#-yapısal-jeoloji-ve-havza-stratigrafisi)
6. [💧 Havza Hidrolojisi ve Su Dengesi Modellemesi](#-havza-hidrolojisi-ve-su-dengesi-modellemesi)
7. [🕳️ Karstik Çökme Teorisi ve Obruk Krizi](#-karstik-çökme-teorisi-ve-obruk-krizi)
8. [🦠 Ekstrem Mikrobiyoloji ve Moleküler Adaptasyon](#-ekstrem-mikrobiyoloji-ve-moleküler-adaptasyon)
9. [🦩 Flamingo Popülasyon Dinamikleri ve Koruma Ekolojisi](#-flamingo-popülasyon-dinamikleri-ve-koruma-ekolojisi)
10. [🌿 Flora Ekolojisi ve Hücresel Halofit Fizyolojisi](#-flora-ekolojisi-ve-hücresel-halofit-fizyolojisi)
11. [🏛️ Tarih, Arkeoloji ve Kervansaray Ticaret Ağları](#-tarih-arkeoloji-ve-kervansaray-ticaret-ağları)
12. [👁️ Optik Anomaliler ve Atmosferik Işık Fiziği](#-optik-anomaliler-ve-atmosferik-ışık-fiziği)
13. [🔮 Efsaneler, Doğaüstü Söylenceler ve Gizemli Anomaliler](#-efsaneler-doğaüstü-söylenceler-ve-gizemli-anomaliler)
14. [🛰️ Spektral Uzaktan Algılama ve NDWI Hesaplama](#-spektral-uzaktan-algılama-ve-ndwi-hesaplama)
15. [📉 Klimatolojik Trendler ve Projeksiyonlar (2025–2055)](#-klimatolojik-trendler-ve-projeksiyonlar-20252055)
16. [⚗️ Tortu Kimyası ve Evaporit İyon Analizi](#-tortu-kimyası-ve-evaporit-iyon-analizi)
17. [📦 Veri Setleri Referansı](#-veri-setleri-referansı)
18. [🔬 Python Analiz Scriptleri İşleyişi](#-python-analiz-scriptleri-işleyişi)
19. [📚 Bilimsel Kaynakça ve Genişletilmiş Referanslar](#-bilimsel-kaynakça-ve-genişletilmiş-referanslar)
20. [🤝 Katkıda Bulunma](#-katkıda-bulunma)
21. [📄 Lisans ve Atıf Bilgisi](#-lisans-ve-atıf-bilgisi)

---

## 🌍 Genel Bakış & Coğrafi Konum

Tuz Gölü Havzası, İç Anadolu Neojen volkanik eyaleti ile Toros Orojenik Kuşağı arasında sıkışmış geniş bir çöküntü alanıdır. Coğrafi olarak Ankara, Konya ve Aksaray illerinin kesişim noktasında yer alan göl, ekolojik olarak 1. Derece Doğal Sit Alanı ve Özel Çevre Koruma Bölgesi (ÖCKB) statüsündedir.

### 📍 Temel Coğrafi ve Fiziksel Veriler

| Parametre | Değer | Metot / Ölçüm Altyapısı |
|---|---|---|
| Coğrafi Merkez | 38°45′00″ K / 33°20′00″ D | WGS84 Coğrafi Projeksiyonu |
| Ortalama Rakım | 905,2 m | Ortometrik Yükseklik (TUDKA-99) |
| Havza Drenaj Alanı | ~21.500 km² | DEM Akış Ağı Modellemesi (Copernicus DEM) |
| Yüzey Alanı (1975 Referansı) | ~1.600 km² | Landsat MSS Tarihsel Mozaikleme |
| Yüzey Alanı (2025 Güncel) | ~520 km² | Sentinel-2 MSI NDWI Piksel Sınıflandırma |
| Maksimum Su Derinliği | 0,25 – 1,50 m (Mevsimsel) | Batimetrik Profil Ölçümleri (DSİ) |
| Tuzluluk Değeri | 320 – 350 g/L ( NaCl ağırlıklı ) | Refraktometrik & Kondüktometrik Analiz |
| Yıllık Ortalama Sıcaklık | 12,8°C (1975-2025 Ortalaması) | Meteoroloji Genel Müdürlüğü (MGM) Verileri |
| Yıllık Ortalama Yağış | 295 mm | Havza İstasyonları Ağırlıklı Ortalaması |

---

## 📊 Küresel Hipersalin Göller Karşılaştırma Matrisi

Tuz Gölü'nün dünyadaki diğer ekstrem hipersalin göller arasındaki konumunu anlamak için fiziksel ve kimyasal parametreler aşağıda karşılaştırılmıştır:

| Göl Adı | Ülke | Alan (km²) | Tuzluluk (%) | Ana İyon Karakteristiği | Rakım (m) | Kritik Ekolojik Tehdit |
|---|---|---|---|---|---|---|
| **Tuz Gölü** | Türkiye | 520 - 1.600 | %29 - %33 | Na⁺, Cl⁻, SO₄²⁻ | 905 | Aşırı Yeraltı Suyu Çekimi, Kuraklık |
| **Büyük Tuz Gölü (GSL)** | ABD | 2.500 - 4.300 | %5 - %27 | Na⁺, Cl⁻, Mg²⁺ | 1.280 | Havzaya Gelen Nehirlerin Barajlanması |
| **Lut Gölü (Ölü Deniz)** | Ürdün / İsrail | 600 | %34 | Mg²⁺, Na⁺, Ca²⁺, Cl⁻ | -430 | Su Girişlerinin Kesilmesi, Aşırı Çökme |
| **Salar de Uyuni** | Bolivya | 10.582 | > %35 (Katı Kabuk) | Li⁺, Na⁺, K⁺, Cl⁻ | 3.656 | Lityum Madenciliği, Su Kaynakları Basıncı |
| **Urmiye Gölü** | İran | 1.000 - 5.200 | %15 - %30 | Na⁺, Cl⁻, Mg²⁺ | 1.275 | Baraj İnşaatları ve Tarımsal Aşırı Sulama |

---

## 🌐 İnteraktif Web Platformu Detayları

Tatta-Archive platformu, ham bilimsel verilerin tarayıcı üzerinde görselleştirilmesini sağlayan zengin bir simülatör paketi barındırır:

*   **Canlı Göl Durumu Widget'ı:** Meteorolojik veri trendlerini ve NDWI indeksini simüle ederek anlık göl durumunu sunar.
*   **Stratigrafik Karot Sondaj Simülatörü:** Kullanıcıya göl yatağından elmas uçlu sondaj yaparak 20 metre derinliğe inme imkanı verir. [app.js](file:///g:/Diğer bilgisayarlar/Dizüstü Bilgisayarım/github repolarım/Tatta-Archive/app.js) içerisindeki sondaj motoru, her katmanın litolojik özelliklerini, yaşını ve kimyasal formüllerini interaktif bir rapor halinde çıktı verir.
*   **Hidrolojik Denge Hesaplayıcı:** Yağış, nehir debileri, yeraltı suyu pompajı ve buharlaşma parametrelerini değiştirerek gölün su bütçesini dinamik olarak hesaplayan matematiksel bir modeldir.
*   **Dunaliella Salina Alg Simülatörü:** Tuzluluk ve sıcaklık girdilerine göre hücrelerin klorofil ve beta-karoten dengesini hesaplayarak göl suyunun pembeden maviye renk değişimini simüle eder.
*   **Mekansal Daralma ve Obruk Görselleştirici:** 1975'ten 2025'e kadar olan uydu sınırlarını harita üzerinde ölçeklendirir ve yeraltı suyu tüketimiyle tetiklenen obruk oluşum lokasyonlarını SVG haritasında üretir.

---

## 🗂️ Repo Yapısı ve Dizin Açıklamaları

```
Tatta-Archive/
│
├── index.html                   # SPA yapısında, Tailwind ve harici kütüphane içermeyen ana HTML
├── styles.css                   # Değişkenler tabanlı premium CSS (Glassmorphism ve animasyonlar)
├── app.js                       # Simülasyon motorları, Chart.js çizimleri ve veri bağlama mantığı
├── banner.png                   # Tuz Gölü ayna efekti kahraman görseli
│
├── data/                        # Web arayüzü ve scriptlerin tükettiği JSON veri tabanları
│   ├── lake_tuz_shrinkage.json  # 1975-2025 yılları arası 11 zaman serisi ölçüm matrisi
│   └── lake_tuz_flora.json      # Havzada saptanan endemik ve lokal halofit tür profilleri
│
├── scripts/                     # Bilimsel analiz ve veri analitiği scriptleri
│   ├── satellite_analysis.py    # Sentinel-2 / Landsat raster verisinden NDWI çıkarma kodu
│   └── climate_projection.py    # IPCC RCP senaryolarına göre su hacmi tahmini yapan diferansiyel model
│
├── CONTRIBUTING.md              # Katkıda bulunma ve PR açma kuralları
├── .gitignore                   # Python cache ve IDE dosyaları dışlama listesi
└── README.md                    # Bu doküman (Genişletilmiş Multidisipliner Arşiv Kılavuzu)
```

---

## 🪨 Yapısal Jeoloji ve Havza Stratigrafisi

Tuz Gölü Havzası, Geç Kretase'den itibaren süregelen Arabistan–Avrasya levha çarpışması ve ardından gelişen Anadolu bloğunun batıya kaçış kinematiğinin bir ürünüdir. Havza **Neojen (Miyosen–Pliyosen)** dönemde gelişmiş, büyük bir pull-apart (açılma) havzası niteliğindedir.

```
                  BATI HAVZA                                 DOĞU HAVZA
      (Tuz Gölü Batı Fay Zonu - Sol Yönlü)     (Şereflikoçhisar-Aksaray Fayı - Sağ Yönlü)
                 │                                                │
                 ▼                                                ▼
           ┌──────────┐                                     ┌──────────┐
           │ Cihanbeyli│                                     │  Koçhisar│
           │  Bloku   │   ◄──── (Genişleme Kinematiği) ────► │  Bloku   │
           └──────────┘                                     └──────────┘
                 │                                                │
                 ▼                                                ▼
     [ 0 - 2m ]  Saf Halit Düzlüğü (Holosen Evaporit Çökelimi)
     [ 2 - 5m ]  Karstik Jips ve Anhidrit Geçişi (Üst Pliyosen Kuru Fazı)
     [ 5 - 10m]  Gölsel Killi Yeşil Çamur Sedimanları (Orta Pleyistosen Pluviyal Faz)
     [10 - 15m]  Kırıntılı Kumtaşı ve Marn Formasyonu (Miyosen Karasal Akarsu Fazı)
     [15 - 20m]  Magmatik Temel: Volkanik Bazalt ve Kül Taşı (Oligosen Öncesi Altlık)
```

### 🌋 Jeotermal Sirkülasyon Modeli

Havzanın tabanındaki evaporit birikimi, sadece göl yüzeyine düşen suyun buharlaşmasıyla değil, derin jeotermal akışkanlarla da beslenir. Şereflikoçhisar fayı boyunca derin kırıklara süzülen meteorik sular, yerin derinliklerindeki magmatik ısıtıcı kaynaklara ulaşır:

$$\text{Sıcaklık Gradiyenti} \approx 30^\circ\text{C} / \text{km}$$

Isınan su, havza çevresindeki evaporit mineral yataklarını (özellikle anhidrit ve kaya tuzu katmanlarını) çözerek bünyesine sodyum ($Na^+$), klor ($Cl^-$) ve sülfat ($SO_4^{2-}$) iyonları alır. Yoğunlaşan bu akışkanlar göl tabanındaki artezyen termal kaynaklar aracılığıyla gölün güney ve doğu çeperinden süzülerek evaporit döngüsünü sürekli besler.

---

## 💧 Havza Hidrolojisi ve Su Dengesi Modellemesi

Tuz Gölü kapalı havzası, dışa akışı olmayan endorik bir havzadır. Bu nedenle gölün su seviyesi doğrudan girdi-çıktı bileşenlerinin dengesine bağlıdır. Havzanın yıllık su hacmi değişimi ($\frac{dV}{dt}$) aşağıdaki diferansiyel denklem ile modellenmektedir:

$$\frac{dV}{dt} = \left( P \cdot A_{lake} + Q_{rivers} + Q_{gw\_inflow} \right) - \left( ET \cdot A_{lake} + Q_{pumping} + Q_{agri\_extraction} \right)$$

Burada kullanılan değişkenler ve fiziksel karşılıkları:
*   $V$: Gölün toplam hacmi ($m^3$)
*   $P$: Yıllık ortalama yağış miktarı ($m/\text{yıl}$)
*   $A_{lake}$: Gölün aktif su yüzey alanı ($m^2$)
*   $Q_{rivers}$: Akarsularla gelen yıllık toplam yüzeysel su girdisi ($m^3/\text{yıl}$)
*   $Q_{gw\_inflow}$: Doğal yeraltı suyu sızıntıları ($m^3/\text{yıl}$)
*   $ET$: Potansiyel Evapotranspirasyon (Buharlaşma) hızı ($m/\text{yıl}$)
*   $Q_{pumping}$: Tuzlalardan çekilen su miktarı ($m^3/\text{yıl}$)
*   $Q_{agri\_extraction}$: Tarımsal yeraltı suyu kuyularından çekilen miktar ($m^3/\text{yıl}$)

### 💧 Buharlaşma Dinamikleri (Penman-Monteith Yaklaşımı)

Tuz Gölü'nde buharlaşma hızının hesaplanmasında, rüzgar hızı, net radyasyon, nemlilik ve tuzluluk düzeltme katsayısı ($K_s$) içeren Penman-Monteith modeli esas alınır:

$$ET_{salt} = K_s \cdot \left[ \frac{\Delta (R_n - G) + \rho_a c_p \frac{(e_s - e_a)}{r_a}}{\Delta + \gamma \left( 1 + \frac{r_s}{r_a} \right)} \right]$$

Hipersalin sularda çözünmüş iyonların varlığı suyun buhar basıncını düşürür. Bu nedenle Tuz Gölü için tuzluluk düzeltme katsayısı $K_s \approx 0,82$ olarak uygulanır (yani saf suya kıyasla buharlaşma hızı %18 daha düşüktür, ancak yine de yaz aylarında sıcaklığın $38^\circ\text{C}$'ye ulaşmasıyla göldeki su filmi tamamen kurur).

---

## 🕳️ Karstik Çökme Teorisi ve Obruk Krizi

Tuz Gölü Havzası'ndaki karstik çöküntüler (obruklar), havza tabanındaki çözünebilir evaporit ve karbonat kayaçlarının (özellikle jips ve kireçtaşı) yeraltı suları tarafından aşındırılmasıyla oluşur.

```
      AŞAMA 1: DOĞAL DENGE                      AŞAMA 2: AŞIRI POMPAJ VE BOŞALMA
┌─────────────────────────────────┐           ┌─────────────────────────────────┐
│     Tarımsal / Killi Örtü       │           │      Tarımsal / Killi Örtü      │
├─────────────────────────────────┤           ├─────────────────────────────────┤
│ Yeraltı Suyu Basıncı (Destek)   │  ───►     │ Su Seviyesi Düştü (Hava Doldu)  │
│ ◯ ◯ ◯ Karstik Boşluk ◯ ◯ ◯      │           │ ◯ ◯ ◯ Taşıyıcı Basınç Kayboldu  │
├─────────────────────────────────┤           ├─────────────────────────────────┤
│     Jips / Kireçtaşı Temel      │           │     Jips / Kireçtaşı Temel      │
└─────────────────────────────────┘           └─────────────────────────────────┘
                                                       │
                                                       ▼
                                            AŞAMA 3: ANİ ÇÖKME (OBRUK)
                                              ┌───────┐       ┌───────┐
                                              │       │       │       │
                                              │       │       │       │
                                              │       └───────┘       │
                                              │    Çöken Boşluk       │
                                              ├───────────────────────┤
                                              │ Jips / Kireçtaşı Temel│
                                              └───────────────────────┘
```

### 🕳️ Karstik Kararlılık Kriteri (Geoteknik Stabilite)

Bir karstik boşluğun tavanının çökmeksizin taşıyabileceği maksimum kritik kalınlık ($T_{crit}$), kayaç makaslama mukavemeti ($\tau$) ve toprak yoğunluğu ($\rho$) cinsinden hesaplanır:

$$T_{crit} = \sqrt{\frac{3 \cdot \rho \cdot g \cdot R^2}{2 \cdot \sigma_t}}$$

Burada $R$ karstik galerinin yarıçapını, $\sigma_t$ ise kireçtaşının çekme dayanımını temsil eder. Yeraltı su seviyesi tarımsal pompaj nedeniyle yılda ortalama 1,5 ila 3 metre düştüğünde, boşluğun üzerindeki suyun kaldırma kuvveti (hidrostatik basınç) ortadan kalkar. Bu durum geoteknik dengeyi bozar ve tavan katmanı kendi ağırlığını taşıyamayarak ani çökmelere (obruklara) neden olur.

---

## 🦠 Ekstrem Mikrobiyoloji ve Moleküler Adaptasyon

Tuz Gölü suyunun yaz aylarındaki tuzluluk oranı, deniz suyunun yaklaşık 10 katıdır. Bu ekstrem osmotik basınç altında normal hücreler su kaybederek büzüşür ve ölür. Havzadaki halofilik organizmalar ise hayatta kalabilmek için gelişmiş moleküler mekanizmalar kullanırlar:

### 🧬 *Dunaliella salina*'nın Osmotik Dengeleyici Gliserol Yolağı

Yeşil mikro alg *Dunaliella salina*, hücre duvarına sahip değildir. Hücre içi osmotik basıncı dış ortamdaki yoğun sodyum klorür ($NaCl$) konsantrasyonuyla dengelemek için **gliserol sentezler**.

```
                Dunaliella salina Hücresi
       ┌─────────────────────────────────────────┐
       │                                         │
       │  Di-Hidroksiaseton Fosfat (DHAP)        │
       │                  │                      │
       │                  ▼ (GPDH Enzimi)        │
       │         Gliserol-3-Fosfat               │
       │                  │                      │
       │                  ▼ (GPP Fosfataz)       │
       │              GLİSEROL                   │
       │    (Hücre içi derişim ≈ dış tuzluluk)   │
       │                                         │
       └─────────────────────────────────────────┘
```

Alg hücresi, suyun dışarı kaçmasını engellemek amacıyla hücre içi gliserol derişimini dış ortamın ozmolaritesine eşitler. Stres faktörleri (yüksek ışık, UV radyasyonu ve tuzluluk) arttığında ise hücresel hasarı önlemek için kloroplast çevresinde **beta-karoten** pigmenti biriktirir. Bu pigment güneş ışınlarını absorbe ederek reaktif oksijen türlerini (free radicals) nötralize eder.

### 🔋 *Halobacterium salinarum*'un Bakteriorodopsin Foton Motoru

*Halobacterium salinarum* (bir Arkea üyesi), ATP üretmek için klorofil içermeyen, bakteriorodopsin tabanlı alternatif bir fotosentez mekanizması kullanır.

```
       Dış Ortam (Düşük H⁺)
   ───────────────────────────────────── (Hücre Zarı)
       Hücre İçi (Yüksek H⁺)
            ▲
            │ (Proton Pompalanması)
     Bakteriorodopsin (Işık Absorpsiyonu: 570 nm)
            ▲
            │ (Uyarılma)
          Foton (Güneş Işığı)
```

1.  **Foton Absorpsiyonu:** Bakteriorodopsin içindeki *retinal* pigmenti 570 nm dalga boyundaki ışığı soğurur.
2.  **Konformasyonel Değişim:** Retinal *all-trans* formundan *13-cis* formuna dönüşür.
3.  **Proton Translokasyonu:** Bu dönüşüm, hücre içinden dışarıya doğru tek yönlü bir proton ($H^+$) pompalanmasını sağlar.
4.  **ATP Sentezi:** Oluşan elektrokimyasal proton gradiyenti, ATP Sentaz enzimini döndürerek hücresel enerji (ATP) üretir.

---

## 🦩 Flamingo Popülasyon Dinamikleri ve Koruma Ekolojisi

Büyük Flamingo (*Phoenicopterus roseus*), Tuz Gölü ekosisteminin gösterge türüdür (flagship species). Gölün güneyindeki Aksaray/Eskil sınırları içinde kalan geniş buharlaşma düzlükleri, yırtıcı memelilerin (tilki, çakal, kurt) çamur zemin sebebiyle ulaşamadığı güvenli üreme adaları sunar.

### 🦩 Popülasyon Matrisi ve Ekolojik Parametreler

| Yıl | Toplam Kuluçka Yuvası | Başarılı Yavru Çıkış Oranı | Minimum Su Kaplama Alanı (Mayıs) | Havza YAS Seviyesi (Metre Altı) |
|---|---|---|---|---|
| 1985 | 1.100 | %82 | 1.100 km² | -8,2 m |
| 1995 | 2.200 | %78 | 850 km² | -15,4 m |
| 2005 | 3.800 | %65 | 620 km² | -28,9 m |
| 2015 | 6.200 | %48 | 480 km² | -45,1 m |
| 2025 | **9.500** | **%32 (Düşüş Eğilimi)** | **310 km²** | **-78,4 m** |

---

## 🌿 Flora Ekolojisi ve Hücresel Halofit Fizyolojisi

Tuz Gölü çevresi, **%80'i Türkiye'ye özgü** halofit bitkilerden oluşan nadir bir flora alanıdır. Bu bitkiler, tuz konsantrasyonunun toprak tuz oranı %2–15 olan alanlarda yetişir ve özel fizyolojik adaptasyonlara sahiptir.

### 🔬 Hücresel Sodyum ($Na^+$) Pompa Mekanizması

Halofitlerin hücre zarı ve vakuol membranında (tonoplast) bulunan özel taşıyıcı proteinler aktif olarak sodyumu izole eder:

```
              Dış Ortam (Toprak)
       ────────────────────────────────────── (Hücre Zarı)
              Hücre Sitoplazması
                      │
                      ├─► Na⁺/H⁺ Antiporter (SOS1) ──► Na⁺ dışarı atılır
                      │
                      ▼
               Tonoplast (Vakuol Membranı)
                      │
                      └─► NHX1 Taşıyıcısı ──► Na⁺ Vakuolde depolanır (Sekestrasyon)
```

1.  **SOS1 Antiporter Sistemi:** Hücre zarındaki $Na^+/H^+$ antiporteri (SOS1), hücre içine giren sodyumu proton gradiyenti kullanarak dışarı pompalar.
2.  **NHX1 Vakuolar Depolama:** Hücre içindeki sodyum, tonoplast üzerinde bulunan NHX1 taşıyıcı proteini vasıtasıyla **vakuol (hücre deposu)** içine pompalanır ve sitoplazmadan izole edilir.
3.  **Osmotik Uyum:** Vakuolde biriken tuz, hücrenin topraktan su çekmesini kolaylaştıracak bir osmotik çekim gücü yaratır.

---

## 🏛️ Tarih, Arkeoloji ve Kervansaray Ticaret Ağları

Tuz Gölü, antik çağlardan bu yana Anadolu'nun en önemli tuz üretim ve ticaret merkezi olmuştur. Roma imparatorluk yollarından Selçuklu kervan yollarına kadar geniş bir lojistik ağın odak noktasını oluşturmuştur.

```
                         (Kuzey - Hattuşa)
                                │
                                ▼
                       Kaldırım Tuzlası 
                                │
             ┌──────────────────┴──────────────────┐
             ▼                                     ▼
        (Batı Rotası)                         (Doğu Rotası)
      Yavşan Tuzlası                       Şereflikoçhisar Tuz Yolu
             │                                     │
             ▼                                     ▼
      Zinciriye Hanı                         Ağzıkarahan
             │                                     │
             └──────────────────┬──────────────────┘
                                ▼
                         Sultanhanı (Aksaray)
                                │
                                ▼
                         (Güney - Konya)
```

---

## 👁️ Optik Anomaliler ve Atmosferik Işık Fiziği

Tuz Gölü'ndeki düz ayna etkisi ve tuz kristali yansımaları, Snell Kırılma Yasası'nın uç uygulamalarına sahne olur.

### 🌅 Fata Morgana ve Atmosferik Kırılma Matematiği

Yazın kuruyan beyaz tuz tabakası güneş ışınlarını yansıtır (yüksek albedo etkisi: $\alpha \approx 0.85$). Bu durum zeminin hemen üzerindeki hava tabakasını aşırı ısıtırken, üstteki hava tabakası nispeten serin kalır. Değişen hava yoğunluğu, ışığın kırılma indisinin ($n$) yüksekliğe ($z$) bağlı olarak doğrusal olmayan bir şekilde değişmesine sebep olur:

$$\frac{dn}{dz} < 0$$

Işık ışınları yere doğru ilerlerken kırılma indisinin sürekli değişmesi sebebiyle bükülür ve yukarıya doğru kavis çizer. Gözlemci, ışığı geldiği doğrusal doğrultuda algıladığı için, ufuk çizgisi altındaki nesneler (örneğin uzaktaki bir kervan veya araç) havada ters dönmüş veya havada asılı duran devasa yapılar olarak görünür.

---

## 🔮 Efsaneler, Doğaüstü Söylenceler ve Gizemli Anomaliler

Tuz Gölü'nün uçsuz bucaksız sonsuz beyazlığı, sadece bilimsel araştırmaların değil, yerel halk inanışlarının, açıklanamayan doğaüstü olayların ve jeofiziksel gizemlerin de merkezidir. Yüzyıllardır aktarılan efsanelerden modern askeri sırlara kadar uzanan gizem haritası aşağıda belgelenmiştir:

### 1. Taşlaşan Gelin Efsanesi (The Legend of the Petrified Caravan)
Gölün güney kıyısında yer alan, rüzgar erozyonuyla şekillenmiş kaya ve tuz oluşumları yerel halk arasında "Taşlaşan Gelin Alayı" olarak adlandırılır. 
*   **Mitolojik Anlatı:** Efsaneye göre, çok eski dönemlerde göl çeperinden geçmekte olan zengin ve kibirli bir düğün kervanı, yolda susuzluktan ve açlıktan bitap düşmüş bir derviş ile karşılaşır. Derviş kervan sahibinden bir damla su ve çocukları için bir parça ekmek dilenir. Kervan sahibi dervişi kırbaçla kovar ve yiyeceklerini paylaşmayı reddeder. Derviş, asasını beyaz tuz yatağına vurarak şu bedduayı okur: *"Cimriliğinizle bu sonsuz beyazlıkta boğulun; kervanınız da, altınlarınız da, gelin alayınız da taş kesilsin!"*
*   **Fiziki Yansıma:** Bugün Cihanbeyli ile Eskil sınırları arasında kalan ve kervan develerine benzeyen dikit karstik sütunlar, bu bedduanın kanıtı olarak efsaneleştirilmiştir.

### 2. Tuz Altında Yiten Kayıp Kervanlar (The Sinking Caravans)
Gölün kuru döneminde (Ağustos-Ekim), üst yüzeyde 10-30 cm kalınlığında oldukça sert bir halit (tuz) kabuğu oluşur. Ancak bu kabuğun altında **jipsli ve kükürtlü, akışkan bir balçık yatağı** (quick-mud) yer alır.
*   **Gizem:** Antik ve Selçuklu döneminde, İpek Yolu'ndan saparak gölü diklemesine geçmeye çalışan bazı kervanların, tuz kabuğunun zayıf noktalarında çökerek saniyeler içinde altlarındaki balçık tarafından yutulduğu söylenir.
*   **Litolojik Gerçeklik:** Son yıllarda kuraklık nedeniyle su seviyesinin aşırı düşmesiyle birlikte, gölün orta kesimlerindeki bataklık alanlarda tarihsel kervanlara ait ahşap tekerlek parçaları ve tuzla mumyalanmış yük hayvanı kemikleri saptanmıştır. Havzanın anoksik (oksijensiz) ve aşırı tuzlu dip çamuru, organik maddelerin çürümesini engelleyerek onları yüzyıllarca korumaktadır.

### 3. UFO/UAP Işıkları ve Elektrostatik Anomaliler
Tuz Gölü, Türkiye'de gökyüzünde açıklanamayan ışıklı kürelerin (UAP) en çok rapor edildiği bölgelerin başında gelir. Özellikle gece yarısından sonra gölün ıssız orta kesimlerinde beliren mavi-yeşil parlayan ışıklar yerel folklora girmiştir.
*   **Bilimsel Jeofiziksel Açıklama:** Yaz aylarında kuru rüzgarların tuz kristalleri üzerinde yarattığı **sürtünme (triboelektrik etki)** ve havzanın altındaki fay hatlarından sızan **metan/helyum** gazlarının elektrostatik deşarjla havada alevlenmesi (Will-o'-the-wisp / Bataklık gazı yanması). Değişen sıcaklık inversiyonları ile birleştiğinde bu plazma parlamaları, gökyüzünde hareket eden UFO filoları illüzyonu yaratmaktadır.

### 4. Askeri Radar & Uydu Kalibrasyonu Sırları
Tuz Gölü'nün homojen, düz ve yüksek yansıtıcılığa sahip (yüksek albedo) yüzeyi, uzay endüstrisi ve askeri teknolojiler için mükemmel bir **doğal laboratuvardır**.
*   **Gizemli Testler:** Bölge halkı tarafından zaman zaman göl semalarında gözlenen elektromanyetik parlamalar ve geçici radyo parazitleri, gölün güneyinde yer alan roket ve füze test alanları (Aksaray Atış Alanı) ile ilişkilendirilir.
*   **Uzay Optik Kalibrasyonu:** ESA (Avrupa Uzay Ajansı) ve NASA, Sentinel ve Landsat gibi yer gözlem uydularının optik sensörlerini kalibre etmek için Tuz Gölü'nün beyaz tuz düzlüklerini referans "kuru zemin" ($Dry\_Target$) olarak kullanır. Uydular gölün üzerinden geçerken yansıma doğruluğunu ölçer.

### 5. Astrobiyoloji: Mars Kraterlerindeki Yaşamın Tuz Gölü Modeli
Tuz Gölü'nün dip tortularında yaşayan ekstrem halofilik arkelerin (Archaea) genetik yapıları, NASA astrobiyologlarının ilgisini çekmektedir.
*   **Mars Bağlantısı:** Mars yüzeyinde keşfedilen antik klorür ve sülfat evaporit yatakları (örneğin Gale Krateri), milyarlarca yıl önce Tuz Gölü'ne benzer bir kuruma evresi geçirmiştir. Tuz Gölü'ndeki *Halobacterium* hücrelerinin milyarlarca yıllık tuz kristallerinin içinde sıvı kabarcıklarında (fluid inclusions) uyku modunda canlı kalabilme yeteneği, Mars'ta hala mikrobiyal düzeyde yaşam bulunabileceğine dair en güçlü analog modeldir.

### 6. Antik Tatta Limanları ve Batık Kent Efsaneleri
Gölün Roma ve Bizans döneminde bugünkünden çok daha derin (maksimum 4-5 metre) olduğu ve Şereflikoçhisar yakınlarında antik tuz yükleme limanlarının bulunduğu arkeolojik yüzey araştırmalarıyla bilinmektedir.
*   **Batık Şehir Söylencesi:** Sular çekilmeden önce gölün ortasında yer alan bazı adacıklarda kurulmuş küçük Bizans manastırlarının ve tahkimatlarının sular altında kaldığı söylentisi halk arasında yaygındır. Kurak dönemde suların çekilmesiyle tuz kabuğu üzerinde beliren geometrik şekillerin antik tapınak temelleri olduğu iddia edilse de, bunların çoğu jeolojik tuz poligonlarıdır (büzülme çatlakları).

### 7. Şifalı Kara Çamur (Black Mud Therapy) ve Ekolojik Sırlar
Gölün dip katmanlarında biriken siyah, kükürt kokulu balçık mineral açısından zengindir.
*   **Folklorik Tıp:** Çevre köylerde yaşayanlar bu çamurun romatizmal hastalıklara, egzama ve sedef gibi cilt rahatsızlıklarına iyi geldiğine inanarak vücutlarını çamurla kaplarlar. Kimyasal analizler, bu çamurda yüksek konsantrasyonda magnezyum sülfat ($MgSO_4$) ve lityum tuzları bulunduğunu, bunun da kas gevşetici ve anti-enflamatuar etki gösterdiğini doğrulamaktadır.

---

## 🛰️ Spektral Uzaktan Algılama ve NDWI Hesaplama

Tuz Gölü yüzey alanının izlenmesinde Landsat ve Sentinel-2 uydu platformlarından elde edilen spektral veriler kullanılır.

### 🛰️ Spektral Yansıma Davranış Modeli

```
  Yansıma (%)
   100 ┼────────────────────────────────────────────────────────
       │                        Tuz Kristali (Yüksek Yansıma)
    80 ┼───────────────────────/────────────────────────────────
       │                      /
    60 ┼                     / 
       │                    /   Yeşil Vejetasyon (B8'de pik yapar)
    40 ┼                   /  /\
       │   Water (B3 Green)  /  \
    20 ┼───────\          /  /    \
       │        \________/  /       \___________________________
     0 ┼─────────────────^-─────────────────────────────────────
       │       B3 (Green)  B4 (Red)  B8 (NIR)                 Dalga Boyu
```

### 🌊 NDWI (Normalized Difference Water Index) Formulasyonu

Açık su kütlelerinin tespiti için McFeeters tarafından geliştirilen NDWI indeksi uygulanır. Bu indeks, suyun Yeşil dalga boyundaki yüksek yansıtma değerini ve Yakın Kızılötesindeki (NIR) yüksek absorpsiyon (emme) özelliğini kullanır:

$$\text{NDWI} = \frac{\text{Green} - \text{NIR}}{\text{Green} + \text{NIR}}$$

*   **Sentinel-2 Bantları:** Yeşil = Band 3 ($560\text{ nm}$), NIR = Band 8 ($842\text{ nm}$)
*   **Landsat 8-9 Bantları:** Yeşil = Band 3 ($560\text{ nm}$), NIR = Band 5 ($865\text{ nm}$)

---

## 📉 Klimatolojik Trendler ve Projeksiyonlar (2025–2055)

IPCC (Hükümetlerarası İklim Değişikliği Paneli) 6. Değerlendirme Raporu Akdeniz Havzası projeksiyonları ve DSİ rasat verileri doğrultusunda Tuz Gölü'nün gelecekteki su yüzeyi alan değişimi modellenmiştir:

```
  Yüzey Alanı (km²)
   1600 ┼─ 1975 (Tarihsel Maksimum)
        │
   1200 ┼
        │
    800 ┼               
        │              2025 (Mevcut Durum: 520 km²)
    400 ┼───────────────●────────────────── (Flamingo Üreme Barajı: 400 km²)
        │                \─── Sürdürülebilir Senaryo (~580 km²)
      0 ┼─────────────────\─── RCP 4.5 Orta Senaryo (~310 km²)
        │                  \─── RCP 8.5 Ekstrem Senaryo (~120 km²)
        └─────┬─────┬─────┬─────┬─────┬─────┬─────► Yıl
             1975  1995  2015  2025  2035  2045  2055
```

### 📉 Gelecek Senaryoları Karşılaştırma Analizi

*   **Sürdürülebilir Senaryo:** Tarımsal sulama yeraltı su çekimi %50 sınırlandırılır, akarsu yatakları restore edilir. Göl alanı 2055 yılına kadar **~580 km²** seviyesinde dengelenir.
*   **RCP 4.5 Senaryosu:** Emisyonlar orta düzeyde kontrol altında tutulur, sıcaklık artışı $1,8^\circ\text{C}$ ile sınırlanır. Göl alanı **~310 km²** seviyesine geriler; flamingo kolonileri kısmen zarar görür.
*   **RCP 8.5 Senaryosu:** Kontrolsüz fosil yakıt tüketimi, havza sıcaklık artışı $> 3,5^\circ\text{C}$, tarımsal pompaj kontrolsüz devam eder. Göl alanı **~120 km²**'ye düşerek işlevsel bir sulak alan olma özelliğini tamamen kaybeder.

---

## ⚗️ Tortu Kimyası ve Evaporit İyon Analizi

Tuz Gölü tortul dolgusu, evaporit çökelim basamaklarının kimyasal evrimini sunar.

### 🧪 Karot Numunelerinin Mineral Kompozisyonu (Ağırlıkça %)

| Numune Kodu | Derinlik (m) | Halit ($NaCl$) | Jips ($CaSO_4 \cdot 2H_2O$) | Kalsit ($CaCO_3$) | Kil Mineralleri | Kuvars | Lityum (ppm) |
|---|---|---|---|---|---|---|---|
| **TG-C1-02** | 1,5 | %98,2 | %0,5 | %0,3 | %0,5 | %0,5 | 18 |
| **TG-C1-05** | 4,8 | %24,5 | %62,8 | %8,4 | %3,1 | %1,2 | 45 |
| **TG-C1-10** | 9,2 | %8,2 | %12,4 | %48,2 | %25,4 | %5,8 | 112 |
| **TG-C1-15** | 14,1 | %1,5 | %4,1 | %72,8 | %15,2 | %6,4 | 85 |
| **TG-C1-20** | 18,5 | %0,1 | %0,2 | %12,5 | %52,4 | %34,8 | 32 |

---

## 📦 Veri Setleri Referansı

### 📊 `data/lake_tuz_shrinkage.json`

Gölün fiziksel ve hidrolojik değişim geçmişini içeren JSON veri setidir.

*   **Örnek Kayıt:**
    ```json
    {
      "year": 2025,
      "surface_area_km2": 520,
      "average_temp_c": 13.9,
      "groundwater_extraction_m3": 2300000000,
      "sinkhole_count": 2400,
      "lake_depth_max_m": 0.25
    }
    ```

### 🌿 `data/lake_tuz_flora.json`

Havzadaki endemik ve halofit bitkilerin taksonomik ve fizyolojik veri tabanıdır.

*   **Örnek Kayıt:**
    ```json
    {
      "scientific_name": "Kalidiopsis wagenitzii",
      "turkish_name": "Tuz İbrikotu",
      "family": "Amaranthaceae",
      "endemic": true,
      "iucn_status": "CR",
      "iucn_status_tr": "Kritik Tehlikede",
      "habitat": "Aşırı tuzlu bataklıklar ve tuz düzlükleri çeperi",
      "salt_tolerance_pct": 24.5,
      "adaptation": "Hücresel sodyum vakuolasyonu (NHX1 sekestrasyonu)"
    }
    ```

---

## 🔬 Python Analiz Scriptleri İşleyişi

Proje bünyesinde iki adet bilimsel Python betiği yer almaktadır:

### 1. `scripts/satellite_analysis.py`

GeoTIFF formatındaki uydu bantlarını (Sentinel-2 Yeşil ve NIR bantları) kullanarak NDWI matrisi üretir ve gölün su yüzey alanı sınırlarını belirler.

*   **Kullanım:**
    ```bash
    python scripts/satellite_analysis.py
    ```

### 2. `scripts/climate_projection.py`

Havza yağış, buharlaşma ve yeraltı su çekimi parametrelerini içeren diferansiyel denklemi çözen ve gelecek 30 yılın durumunu tahmin eden simülasyon kodudur.

*   **Kullanım:**
    ```bash
    python scripts/climate_projection.py
    ```

---

## 📚 Bilimsel Kaynakça ve Genişletilmiş Referanslar

Bu depodaki tüm veriler, aşağıdaki hakemli akademik yayınlar ve devlet kurumu raporları esas alınarak yapılandırılmıştır:

### 🪨 Jeoloji & Hidroloji
1.  **Görür, N., Oktay, F. Y., Seymen, İ. & Şengör, A. M. C.** (1984). *Palaeotectonic evolution of the Tuzgölü basin complex, Central Turkey*. Geological Society Special Publications, 17(1), 81–96.
2.  **Erol, O.** (1983). *Tuz Gölü ve çevresinin Kuvaterner jeomorfolojisi ve jeolojik evrimi*. MTA Dergisi, Rapor No: 99.
3.  **DSİ** (2023). *Konya Kapalı Havzası Hidrojeolojik Etüt ve Yeraltı Suyu Rezerv Değerlendirme Raporu*. T.C. Devlet Su İşleri Genel Müdürlüğü, Ankara.
4.  **MTA** (2021). *Tuz Gölü Graben Sistemi Aktif Fay Atlası ve Jeotermal Kaynak Potansiyeli*. Maden Tetkik ve Arama Genel Müdürlüğü Yayınları, Seri No: 44.

### 🦠 Ekstrem Mikrobiyoloji & Ekoloji
5.  **Oren, A.** (2008). *Microbial life at high salt concentrations: physiological and phylogenetic diversity*. Saline Systems, 4(2). DOI: 10.1186/1746-1448-4-2.
6.  **Dunaliella salina Karotenoid Sentezi:** *Biochemistry of halotolerance in microalgae*. Journal of Phycology, 32(3), 412–424.
7.  **Doğa Derneği** (2024). *Tuz Gölü Flamingo (Phoenicopterus roseus) Yıllık İzleme ve Koruma Projesi Sonuç Raporu*. Ankara.

### 🛰️ Uzaktan Algılama & İklim Projeksiyonları
8.  **McFeeters, S. K.** (1996). *The use of the Normalized Difference Water Index (NDWI) in the delineation of open water features*. International Journal of Remote Sensing, 17(7), 1425–1432.
9.  **IPCC** (2022). *Sixth Assessment Report (AR6) - Climate Change 2022: Mitigation of Climate Change (Akdeniz Havzası Bölgesel Projeksiyonları)*. Cambridge University Press.

---

## 🤝 Katkıda Bulunma

Tatta-Archive açık kaynaklı bilimsel kolektif bir projedir. Araştırma makaleleri, yeni veri setleri, GIS haritaları veya arayüz geliştirmeleriyle katkı sağlayabilirsiniz.

Detaylı yönergeler için → **[CONTRIBUTING.md](./CONTRIBUTING.md)** belgesini inceleyin.

---

## 📄 Lisans ve Atıf Bilgisi

Bu depodaki kodlar ve veri yapıları **[MIT Lisansı](./LICENSE)** altındadır. Yazılı bilimsel metinler, tablolar ve grafik verileri ise **[Creative Commons Attribution 4.0 International (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)** ile lisanslanmıştır.

### 📝 Atıf Şablonu (Academic Citation)

Projeden alıntı yaparken aşağıdaki formatı kullanabilirsiniz:

> *Tatta-Archive (2026). Tuz Gölü Disiplinlerarası Açık Kaynak Araştırma ve Analiz Platformu. GitHub Sürümü v5.0. Erişim Adresi: https://github.com/arch-yunus/Tatta-Archive*

---

<div align="center">

**🌊 Tuz Gölü'nün ekolojik geleceği için bilimin, yazılımın ve verinin gücünü birleştiriyoruz.**

*Her satır açık veri, gölün korunması yolunda atılmış somut bir adımdır.*

[![GitHub](https://img.shields.io/badge/GitHub-arch--yunus%2FTatta--Archive-181717?style=flat-square&logo=github)](https://github.com/arch-yunus/Tatta-Archive)
[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-00e5ff?style=flat-square&logo=github-pages)](https://arch-yunus.github.io/Tatta-Archive/)

**[⬆️ Yukarı Dön](#-tatta-archive-tuz-gölü-disiplinlerarası-araştırma-deposu)**

</div>