# 🌊 Tatta-Archive: Tuz Gölü Disiplinlerarası Araştırma Deposu

<div align="center">

![Version](https://img.shields.io/badge/versiyon-10.0-ff7597?style=for-the-badge)
![License](https://img.shields.io/badge/lisans-MIT%20%2F%20CC--BY--4.0-00e5ff?style=for-the-badge)
![Language](https://img.shields.io/badge/dil-Türkçe-blueviolet?style=for-the-badge)
![Status](https://img.shields.io/badge/durum-Aktif%20Geliştirme-4ade80?style=for-the-badge)
![Disciplines](https://img.shields.io/badge/disiplin-16%20alan-f97316?style=for-the-badge)
![Data](https://img.shields.io/badge/veri-Açık%20Kaynak-22d3ee?style=for-the-badge)

**[🌐 Canlı Platform](https://arch-yunus.github.io/Tatta-Archive/)** · **[📊 Veri Setleri](./data/)** · **[🔬 Analiz Scriptleri](./scripts/)** · **[🤝 Katkıda Bulun](./CONTRIBUTING.md)**

![Tuz Gölü — Gökyüzünün Yeryüzündeki Aynası](./banner.png)

*Tuz Gölü, Nisan ayı — Bahar ayna yansıması. Fotoğraf: Tatta-Archive*

</div>

---

> *"Hiçbir şeyin olmadığı uçsuz bucaksız bir beyazlıkta, doğanın en karmaşık jeolojik, biyokimyasal, mühendislik ve folklorik sistemleri çalışır."*

**Tatta-Archive**, Türkiye'nin en büyük ikinci gölü ve Yakın Doğu'nun en büyük hipersalin kapalı havzası olan **Tuz Gölü'nün** (Antik coğrafyacıların adlandırmasıyla *Tatta* — Τάτta) fiziki, kimyasal, biyolojik, mühendislik, endüstriyel, klimatolojik, gelecek projeksiyonlu ve folklorik tüm katmanlarını inceleyen **disiplinlerarası, açık kaynaklı akademik araştırma deposudur**.

Bu depo; jeomorfoloji, yapısal jeoloji, havza hidrolojisi, ekstrem mikrobiyoloji, ornitoloji, halofit botanik, uzaktan algılama, kimya mühendisliği, yeraltı depolama teknolojileri, yerel mitoloji, klimatoloji ve atmosferik optik anomaliler alanlarında dağınık halde bulunan bilimsel, teknik ve kültürel verileri tek bir sistematik çatı altında toplar. Platform, araştırmacılara hem ham veri tabanlarını hem de interaktif simülatörler barındıran bir web arayüzü sunar.

---

## 📋 İçindekiler

1. [🌍 Genel Bakış & Coğrafi Konum](#-genel-bakış--coğrafi-konum)
2. [📊 Küresel Hipersalin Göller Karşılaştırma Matrisi](#-küresel-hipersalin-göller-karşılaştırma-matrisi)
3. [🌐 İnteraktif Web Platformu Detayları](#-initeraktif-web-platformu-detayları)
4. [🗂️ Repo Yapısı ve Dizin Açıklamaları](#-repo-yapısı-ve-dizin-açıklamaları)
5. [🪨 Yapısal Jeoloji ve Havza Stratigrafisi](#-yapısal-jeoloji-ve-havza-stratigrafisi)
6. [🌊 Limnolojik Karşılaştırma ve İyonik Farklılıklar](#-limnolojik-karşılaştırma-ve-iyonik-farklılıklar)
7. [💧 Havza Hidrolojisi ve Su Dengesi Modellemesi](#-havza-hidrolojisi-ve-su-dengesi-modellemesi)
8. [🛶 Tuzlu Su Dinamikleri: Seş (Seiche) Salınımları](#-tuzlu-su-dinamikleri-seş-seiche-salınımları)
9. [🕳️ Karstik Çökme Teorisi ve Obruk Krizi](#-karstik-çökme-teorisi-ve-obruk-krizi)
10. [🛢️ Dev Mühendislik: Yeraltı Doğalgaz Depolama Projesi](#️-dev-mühendislik-yeraltı-doğalgaz-depolama-projesi)
11. [🌡️ Kaverna Termodinamiği ve Joule-Thomson Fiziği](#-kaverna-terodinamiği-ve-joule-thomson-fiziği)
12. [🔋 Lityum ve Stratejik Element Geri Kazanım Potansiyeli](#-lityum-ve-stratejik-element-geri-kazanım-potansiyeli)
13. [🦠 Ekstrem Mikrobiyoloji ve Moleküler Adaptasyon](#-ekstrem-mikrobiyoloji-ve-moleküler-adaptasyon)
14. [🦩 Flamingo Popülasyon Dinamikleri ve Genişletilmiş Avifauna](#-flamingo-popülasyon-dinamikleri-ve-genişletilmiş-avifauna)
15. [🌿 Flora Ekolojisi ve Hücresel Halofit Fizyolojisi](#-flora-ekolojisi-ve-hücresel-halofit-fizyolojisi)
16. [⚗️ Endüstriyel Tuzla Teknolojileri ve Rafinasyon Prosesi](#️-endüstriyel-tuzla-teknolojileri-ve-rafinasyon-prosesi)
17. [🚯 Ekolojik Tehdit: Konya Ana Tahliye Kanalı ve Ötrofikasyon](#-ekolojik-tehdit-konya-ana-tahliye-kanalı-ve-ötrofikasyon)
18. [🏛️ Tarih, Arkeoloji ve Kervansaray Ticaret Ağları](#-tarih-arkeoloji-ve-kervansaray-ticaret-ağları)
19. [🧱 Antik Havza Lojistiği: Sarnıç ve Su Altyapısı](#-antik-havza-lojistiği-sarnıç-ve-su-altyapısı)
20. [👁️ Optik Anomaliler ve Atmosferik Işık Fiziği](#-optik-anomaliler-ve-atmosferik-ışık-fiziği)
21. [🌪️ Rüzgar Erozyonu, Çölleşme ve Tuz Tozu Fırtınaları](#️-rüzgar-erozyonu-çölleşme-ve-tuz-tozu-fırtınaları)
22. [🌧️ Atmosferik Fizik: Bulut Yoğunlaşma Çekirdekleri (CCN)](#-atmosferik-fizik-bulut-yoğunlaşma-çekirdekleri-ccn)
23. [🔮 Efsaneler, Doğaüstü Söylenceler ve Gizemli Anomaliler](#-efsaneler-doğaüstü-söylenceler-ve-gizemli-anomaliler)
24. [🎯 Vizyon 2056: Tuz Gölü'nün Ekolojik ve Teknolojik Geleceği](#-vizyon-2056-tuz-gölünün-ekolojik-ve-teknolojik-geleceği)
25. [🛰️ Spektral Uzaktan Algılama ve İleri İndeks Formülleri](#-spektral-uzaktan-algılama-ve-ileri-indeks-formülleri)
26. [📉 Klimatolojik Trendler ve Projeksiyonlar (2025–2055)](#-klimatolojik-trendler-ve-projeksiyonlar-20252055)
27. [🧪 Tortu Kimyası ve Evaporit İyon Analizi](#-tortu-kimyası-ve-evaporit-iyon-analizi)
28. [📦 Veri Setleri Referansı](#-veri-setleri-referansı)
29. [🔬 Python Analiz Scriptleri İşleyişi](#-python-analiz-scriptleri-işleyişi)
30. [📚 Bilimsel Kaynakça ve Genişletilmiş Referanslar](#-bilimsel-kaynakça-ve-genişletilmiş-referanslar)
31. [🤝 Katkıda Bulunma](#-katkıda-bulunma)
32. [📄 Lisans ve Atıf Bilgisi](#-lisans-ve-atıf-bilgisi)

---

## 🌍 Genel Bakış & Coğrafi Konum

Tuz Gölü Havzası, İç Anadolu Neojen volkanik eyaleti ile Toros Orojenik Kuşağı arasında sıkışmış geniş bir çöküntü alanıdır. Coğrafi olarak Ankara, Konya ve Aksaray illerinin kesişim noktasında yer alan göl, ekolojik olarak 1. Derece Doğal Sit Alanı ve Özel Çevre Koruma Bölgesi (ÖCKB) statüsündedir.

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
*   **Stratigrafik Karot Sondaj Simülatörü:** [app.js](file:///g:/Diğer bilgisayarlar/Dizüstü Bilgisayarım/github repolarım/Tatta-Archive/app.js) içerisindeki sondaj motoru, her katmanın litolojik özelliklerini, yaşını ve kimyasal formüllerini interaktif bir rapor halinde çıktı verir.
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
├── banner.png                   # Hero banner görseli (Ayna efekti)
├── banner_pink_algae.png        # Pembe alg ve flamingo temalı banner görseli
├── banner_caverns.png           # Doğalgaz depolama kavernaları mühendislik banner görseli
├── banner_satellite.png         # Uydu spektroskopisi ve GIS analiz banner görseli
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

Tuz Gölü Havzası, Geç Kretase'den itibaren süregelen Arabistan–Avrasya levha çarpışması ve ardından gelişen Anadolu bloğunun batıya kaçış kinematiğinin bir ürünüdür. Havza **Neojen (Miyosen–Pliyosen)** dönemde gelişmiş, büyük bir pull-apart (açılma) havzası niteliğindedir.

---

## 🌊 Limnolojik Karşılaştırma ve İyonik Farklılıklar

Tuz Gölü, Türkiye'deki diğer büyük kapalı havzalı göllerle kıyaslandığında iyonik karakter bakımından net bir ayrışma sergiler.

---

## 💧 Havza Hidrolojisi ve Su Dengesi Modellemesi

Tuz Gölü kapalı havzası, dışa akışı olmayan endorik bir havzadır. Bu nedenle gölün su seviyesi doğrudan girdi-çıktı bileşenlerinin dengesine bağlıdır.

---

## 🛶 Tuzlu Su Dinamikleri: Seş (Seiche) Salınımları

Tuz Gölü'nün ortalama derinliğinin çok sığ olması (10-30 cm) ve yüzey alanının devasalığı, rüzgar sürtünmesinin su kütlesi üzerindeki etkisini ekstrem boyutlara ulaştırır.

---

## 🕳️ Karstik Çökme Teorisi ve Obruk Krizi

Tuz Gölü Havzası'ndaki karstik çöküntüler (obruklar), havza tabanındaki çözünebilir evaporit ve karbonat kayaçlarının yeraltı suları tarafından aşındırılmasıyla oluşur.

---

## 🛢️ Dev Mühendislik: Yeraltı Doğalgaz Depolama Projesi

Tuz Gölü'nün derinliklerindeki devasa tuz kubbeleri, dünyanın en büyük yapay yeraltı doğalgaz depolama tesislerinden birine ev sahipliği yapmaktadır. Bu proje, Türkiye'nin enerji arz güvenliğinin omurgasını oluşturur.

![Tuz Gölü Yeraltı Doğalgaz Depolama Tesisleri](./banner_caverns.png)

---

## 🌡️ Kaverna Termodinamiği ve Joule-Thomson Fiziği

Yeraltı doğalgaz ve yeşil hidrojen depolama mağaralarında (kavernalarda) gaz enjeksiyonu ve çekimi sırasında aşırı termodinamik yükler oluşur. Bu yüklerin fiziksel analizi kaverna stabilitesi için kritiktir.

### 1. Joule-Thomson Etkisi ve Hidrojen Anomalisi

Bir gazın yüksek basınçtan düşük basınca kısılma valfleri üzerinden genleşmesi sırasındaki sıcaklık değişimi **Joule-Thomson Katsayısı ($\mu_{JT}$)** ile ifade edilir:

$$\mu_{JT} = \left(\frac{\partial T}{\partial P}\right)_H = \frac{1}{C_p}\left[ T\left(\frac{\partial V}{\partial T}\right)_P - V \right]$$

*   **Klasik Gazlar (Doğalgaz/Metan):** Oda sıcaklığında $\mu_{JT} > 0$ olduğu için genleşirken soğurlar.
*   **Hidrojen ($H_2$) Anomalisi:** Hidrojenin oda sıcaklığındaki inversiyon sıcaklığı ($T_{inv} \approx 193\text{ K}$) çok düşük olduğu için, normal işletme koşullarında ($>0^\circ\text{C}$) $\mu_{JT} < 0$ değerine sahiptir. Bu sebeple hidrojen kavernadan çekilirken genleştikçe **ısınır** ($\approx +0.03\text{ K/bar}$). Bu ısınma, kaya tuzu yapısının termal genleşmesine ve mekanik stabilitesinin bozulmasına yol açabileceği için simülatörler vasıtasıyla hassas şekilde izlenmelidir.

### 2. Kompresyon Fiziği (Enjeksiyon)

Kavernaya gaz basılırken, sistem adiyabatiğe yakın sıkışma yaşar. Oluşan sıcaklık artışı ideal sıkıştırma denklemine göre modellenir:

$$\Delta T = T_{in} \left(\frac{P_{final}}{P_{init}}\right)^{\frac{\gamma - 1}{\gamma}} - T_{in}$$

Burada $\gamma$ (adiyabatik indeks, $H_2$ için $\approx 1.4$) sıkışma ısınmasının ana parametresidir.

### 3. Kaya Tuzu Isı Geçişi

Kaverna duvarlarını çevreleyen kaya tuzu, devasa bir termal kütle gibi davranarak gaz sıcaklığını jeotermal gradyana ($35^\circ\text{C}$) doğru dengeler:

$$\frac{dQ}{dt} = h A (T_{kaya} - T_{gaz})$$

---

## 🔋 Lityum ve Stratejik Element Geri Kazanım Potansiyeli

Tuz Gölü acı suları (mother-liquor) ve derin jeotermal sızıntıları, yüksek miktarda çözünmüş nadir element barındırır. Son yıllarda yeşil enerji teknolojileri için hayati öneme sahip olan **Lityum ($Li$)** ve **Magnezyum ($Mg$)** geri kazanımı üzerine havzada ar-ge çalışmaları yürütülmektedir.

### Çok Aşamalı Lityum Karbonat ($Li_2CO_3$) Geri Kazanım Prosesi

Platformumuzdaki simülatör, havzada planlanan 4 aşamalı kimyasal geri kazanım modelini temel alır:

1.  **Doğal Yoğunlaştırma (Güneş Evaporasyonu):** Göl suyu buharlaştırma havuzlarında konsantre edilir. NaCl kristallenerek çökerken, lityum derişimi ~10x-25x katına çıkarılarak ana çözelti izole edilir.
2.  **Safsızlık Çöktürme (Mg/Ca Ayrıştırma):** Çözeltideki kalsiyum ve yüksek oranlı magnezyum iyonları, kireç ($Ca(OH)_2$) ve sodyum karbonat ($Na_2CO_3$) ilavesiyle magnezyum hidroksit ve kalsiyum karbonat formunda çöktürülür:
    $$Mg^{2+} + Ca(OH)_2 \rightarrow Mg(OH)_2 \downarrow + Ca^{2+}$$
    $$Ca^{2+} + Na_2CO_3 \rightarrow CaCO_3 \downarrow + 2Na^+$$
3.  **Seçici Adsorpsiyon (Resin Yakalama):** Lityum iyonları ($Li^+$) selektif reçineler barındıran kolonlarda tutulur. Asidik desorpsiyon elüsyonu ile lityum konsantrasyonu kristalleşme eşiğine getirilir.
4.  **Ürün Kristalizasyonu:** Çözelti $90^\circ\text{C}$ sıcaklığa ısıtılarak sodyum karbonat eklenir. Lityum karbonatın ters çözünürlük özelliği (yüksek sıcaklıkta çözünürlüğünün düşmesi) sayesinde yüksek saflıkta batarya kalitesinde ($>99.5\%$) çökelim gerçekleşir:
    $$2Li^+ + Na_2CO_3 \rightarrow Li_2CO_3 \downarrow + 2Na^+$$

---

## 🦠 Ekstrem Mikrobiyoloji ve Moleküler Adaptasyon

Tuz Gölü suyunun yaz aylarındaki tuzluluk oranı, deniz suyunun yaklaşık 10 katıdır. Bu ekstrem osmotik basınç altında normal hücreler su kaybederek büzüşür ve ölür. Havzadaki halofilik organizmalar ise hayatta kalabilmek için gelişmiş moleküler mekanizmalar kullanırlar.

![Tuz Gölü Pembe Alg ve Flamingo Yaşam Alanı](./banner_pink_algae.png)

---

## 🦩 Flamingo Popülasyon Dinamikleri ve Genişletilmiş Avifauna

Tuz Gölü, sadece flamingolar (*Phoenicopterus roseus*) için değil, hipersalin koşullara ve çorak kıyılara uyum sağlamış zengin bir kuş (avifauna) topluluğu için uluslararası öneme sahip bir sulak alandır.

---

## 🌿 Flora Ekolojisi ve Hücresel Halofit Fizyolojisi

Tuz Gölü çevresi, **%80'i Türkiye'ye özgü** halofit bitkilerden oluşan nadir bir flora alanıdır. Bu bitkiler, tuz konsantrasyonunun toprak tuz oranı %2–15 olan alanlarda yetişir ve özel fizyolojik adaptasyonlara sahiptir.

---

## ⚗️ Endüstriyel Tuzla Teknolojileri ve Rafinasyon Prosesi

Tuz Gölü, Türkiye'nin yıllık sodyum klorür ($NaCl$) ihtiyacının yaklaşık **%60'ını** tek başına karşılar. Kaldırım, Yavşan ve Kayacık tuzlalarındaki üretim, mevsimsel buharlaşmaya dayanan kademeli bir kristalizasyon prosesidir.

---

## 🚯 Ekolojik Tehdit: Konya Ana Tahliye Kanalı ve Ötrofikasyon

Tuz Gölü havzasının karşı karşıya olduğu en büyük antropojenik tehditlerden biri, Konya kentsel atık sularını ve tarımsal drenaj sularını göle taşıyan **Konya Ana Tahliye Kanalı**'dır (Drenaj Hattı).

---

## 🏛️ Tarih, Arkeoloji ve Kervansaray Ticaret Ağları

Tuz Gölü, antik çağlardan bu yana Anadolu'nun en önemli tuz üretim ve ticaret merkezi olmuştur. Roma imparatorluk yollarından Selçuklu kervan yollarına kadar geniş bir lojistik ağın odak noktasını oluşturmuştur.

---

## 🧱 Antik Havza Lojistiği: Sarnıç ve Su Altyapısı

Tuz Gölü havzası yıllık $<300\text{ mm}$ yağışla yarı kurak step iklimine sahiptir. Havzadaki killi ve jipsli zemin yeraltı sularını acılaştırdığı için antik çağlardan beri tatlı su bulmak en büyük hayati sorundur.

---

## 👁️ Optik Anomaliler ve Atmosferik Işık Fiziği

Tuz Gölü'ndeki düz ayna etkisi ve tuz kristali yansımaları, Snell Kırılma Yasası'nın uç uygulamalarına sahne olur.

---

## 🌪️ Rüzgar Erozyonu, Çölleşme ve Tuz Tozu Fırtınaları

Gölün yaz aylarında kurumasıyla geriye kalan gevşek tuz kristalleri ve killi-marnlı dip çökelleri, rüzgar erozyonuna karşı son derece hassastır. Poyraz rüzgarları ($>40\text{ km/s}$) ile kalkan tuz tozları tarım ovalarına (Aksaray ve Konya) çökerek tarımsal plazmolize neden olur.

---

## 🌧️ Atmosferik Fizik: Bulut Yoğunlaşma Çekirdekleri (CCN)

Tuz Gölü havzasından kalkan mikroskobik uçucu tuz aerosolleri ($NaCl$), İç Anadolu atmosfer fiziğinde önemli bir rol oynar.

---

## 🔮 Efsaneler, Doğaüstü Söylenceler ve Gizemli Anomaliler

Tuz Gölü'nün uçsuz bucaksız sonsuz beyazlığı, sadece bilimsel araştırmaların değil, yerel halk inanışlarının, açıklanamayan doğaüstü olayların ve jeofiziksel gizemlerin de merkezidir.

---

## 🎯 Vizyon 2056: Tuz Gölü'nün Ekolojik ve Teknolojik Geleceği

Tuz Gölü havzası, hızlanan iklim değişikliği ve yerel insan baskıları altında kritik bir dönemeçtedir. Bu deponun ana vizyonu, gölün ekolojik mirasını korurken, derin evaporit katmanlarını geleceğin temiz enerji teknolojileriyle entegre etmektir.

### 1. Vizyon Hedefi: 600 km² Aktif Su Alanının Sabitlenmesi ve Tarımsal Reform
*   **Havza Desen Değişimi:** Konya Kapalı Havzası genelinde yüksek su tüketen şeker pancarı, mısır ve yonca gibi bitkilerin tarımı tamamen durdurulmalı; yerine az su tüketen arpa, aspir ve yerel halofit (tuzcul) yem bitkileri teşvik edilmelidir.
*   **Yeraltı Suyu Kontrolü:** Havzadaki 100.000'i aşkın kaçak yeraltı su kuyusu kapatılarak uydu destekli akıllı damlama sulama sistemlerine geçilmelidir. Hedef, yeraltı su seviyesini 2056 yılına kadar yıllık $+0.5\text{ m}$ yükseliş trendine sokmaktır.

### 2. Enerji Vizyonu: Tuz Kavernalarında Yeşil Hidrojen ($H_2$) Depolama
Mevcut yeraltı doğalgaz depolama kavernaları, geleceğin hidrojen ekonomisine geçiş için yeniden tasarlanmalıdır:
*   **Neden Kaya Tuzu?:** Hidrojen ($H_2$) molekül çapı olarak en küçük gazdır ve konvansiyonel tanklarda sızıntı yapar. Gözeneksiz kaya tuzu kristalleri, yüksek basınçlı hidrojeni sızdırmadan depolayabilen dünyadaki tek güvenli jeolojik ortamdır.
*   **Sinerji:** Havza çevresinde kurulacak dev güneş enerjisi santrallerinden (GES) elde edilen elektrikle su elektroliz edilecek; üretilen **yeşil hidrojen** derin tuz mağaralarında depolanarak ihtiyaç halinde şebekeye verilecektir.

### 3. Karbon Yakalama (Sequestration) ve Algal Biyoyakıt Üssü
Gölün hipersalin düzlüklerinde, Dunaliella salina alg kültür havuzları kurulacaktır:
*   **Karbon Yakalama:** Algler, hızlı fotosentez kapasiteleriyle atmosferik karbondioksiti ($CO_2$) yüksek verimle biyokütleye dönüştürürler.
*   **Biyoyakıt ve Biyoplastik:** Hasat edilen Dunaliella biyokütlesinden biyolojik yakıt (biyodizel) ve doğada çözünebilen halofil biyoplastikler üretilerek petrol türevlerine çevreci alternatifler sunulacaktır.

### 4. Astro-Turizm ve Karanlık Gökyüzü Parkı (Dark Sky Park)
Tuz Gölü, sıfıra yakın ışık kirliliği ve geniş düz ayna yüzeyiyle gökyüzü gözlemleri için eşsiz bir konumdur:
*   **Koruma Bölgesi:** Gölün orta kısımları "Karanlık Gökyüzü Koruma Alanı" ilan edilerek ışık kirliliğinden arındırılacak ve uluslararası astro-fotoğrafçılık ile uzay gözlem merkezi haline getirilecektir.
*   **Ekolojik Boardwalk Yürüyüş Yolları:** Ziyaretçilerin hassas tuz kabuğuna doğrudan basarak mikrobiyal örtüyü ($microbial\_mat$) ezmesini engellemek için göl üzerinde yükselen ahşap ekolojik yürüyüş iskeleleri inşa edilecektir.

---

## 🛰️ Spektral Uzaktan Algılama ve İleri İndeks Formülleri

Tuz Gölü havzasının spektral analizinde NDWI indeksinin yanı sıra, tuz kabuğu gürültüsünü engellemek ve toprak tuzluluğunu ölçmek için ileri seviye indeksler kullanılır.

![Tuz Gölü Spektral NDWI ve Coğrafi Bilgi Sistemleri (GIS) Görünümü](./banner_satellite.png)

### 1. MNDWI (Modified Normalized Difference Water Index)

$$\text{MNDWI} = \frac{\text{Green} - \text{SWIR}}{\text{Green} + \text{SWIR}}$$

*   **Sentinel-2 Bantları:** Yeşil = Band 3, SWIR = Band 11 ($1610\text{ nm}$)

### 2. SI (Salinity Index - Toprak Tuzluluk İndeksi)

$$\text{SI} = \sqrt{\text{Blue} \times \text{Red}}$$

### 3. NDTI (Normalized Difference Turbidity Index - Bulanıklık İndeksi)

$$\text{NDTI} = \frac{\text{Red} - \text{Green}}{\text{Red} + \text{Green}}$$

---

## 📉 Klimatolojik Trendler ve Projeksiyonlar (2025–2055)

IPCC (Hükümetlerarası İklim Değişikliği Paneli) 6. Değerlendirme Raporu Akdeniz Havzası projeksiyonları ve DSİ rasat verileri doğrultusunda Tuz Gölü'nün gelecekteki su yüzeyi alan değişimi modellenmiştir:

$$\text{RCP 8.5 Senaryosunda 2055 Alanı} \approx 120\text{ km}^2$$

---

## 🧪 Tortu Kimyası ve Evaporit İyon Analizi

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

### 🌿 `data/lake_tuz_flora.json`

Havzadaki endemik ve halofit bitkilerin taksonomik ve fizyolojik veri tabanıdır.

---

## 🔬 Python Analiz Scriptleri İşleyişi

Proje bünyesinde iki adet bilimsel Python betiği yer almaktadır:

### 1. `scripts/satellite_analysis.py`

GeoTIFF formatındaki uydu bantlarını (Sentinel-2 Yeşil ve NIR bantları) kullanarak NDWI matrisi üretir ve gölün su yüzey alanı sınırlarını belirler.

### 2. `scripts/climate_projection.py`

Havza yağış, buharlaşma ve yeraltı su çekimi parametrelerini içeren diferansiyel denklemi çözen ve gelecek 30 yılın durumunu tahmin eden simülasyon kodudur.

---

## 📚 Bilimsel Kaynakça ve Genişletilmiş Referanslar

Bu depodaki tüm veriler, aşağıdaki hakemli akademik yayınlar ve devlet kurumu raporları esas alınarak yapılandırılmıştır:

### 🪨 Jeoloji, Hidroloji & Mühendislik
1.  **Görür, N., Oktay, F. Y., Seymen, İ. & Şengör, A. M. C.** (1984). *Palaeotectonic evolution of the Tuzgölü basin complex, Central Turkey*. Geological Society Special Publications, 17(1), 81–96.
2.  **BOTAŞ** (2020). *Tuz Gölü Havzası Yeraltı Doğalgaz Depolama Projesi Mühendislik ve Tuz Kavernaları Çözelti Madenciliği Raporları*. BOTAŞ Yayınları, Ankara.
3.  **DSİ** (2023). *Konya Kapalı Havzası Hidrojeolojik Etüt ve Yeraltı Suyu Rezerv Değerlendirme Raporu*. T.C. Devlet Su İşleri Genel Müdürlüğü, Ankara.
4.  **MTA** (2021). *Tuz Gölü Graben Sistemi Aktif Fay Atlası ve Jeotermal Kaynak Potansiyeli*. Maden Tetkik ve Arama Genel Müdürlüğü Yayınları, Seri No: 44.
5.  **Şereflikoçhisar Tuzlası Kimyasal Analizi:** *Journal of Geochemical Exploration*, 182, 112-124. (Lityum geri kazanım referansı).

### 🦠 Ekstrem Mikrobiyoloji & Ekoloji
6.  **Oren, A.** (2008). *Microbial life at high salt concentrations: physiological and phylogenetic diversity*. Saline Systems, 4(2). DOI: 10.1186/1746-1448-4-2.
7.  **Cephalota deserti Ekolojik Dağılımı:** *Coleopterists Bulletin*, 64(2), 145-152. (Tuzcul kaplan böceği referansı).
8.  **Doğa Derneği** (2024). *Tuz Gölü Flamingo (Phoenicopterus roseus) Yıllık İzleme ve Koruma Projesi Sonuç Raporu*. Ankara.

### 🛰️ Uzaktan Algılama & İklim Projeksiyonları
9.  **McFeeters, S. K.** (1996). *The use of the Normalized Difference Water Index (NDWI) in the delineation of open water features*. International Journal of Remote Sensing, 17(7), 1425–1432.
10. **Xu, H.** (2006). *Modification of normalised difference water index (NDWI) to enhance open water features in noise noise areas*. International Journal of Remote Sensing, 27(14), 3025-3033. (MNDWI referansı).
11. **IPCC** (2022). *Sixth Assessment Report (AR6) - Climate Change 2022: Mitigation of Climate Change (Akdeniz Havzası Bölgesel Projeksiyonları)*. Cambridge University Press.

---

## 🤝 Katkıda Bulunma

Tatta-Archive açık kaynaklı bilimsel kolektif bir projedir. Araştırma makaleleri, yeni veri setleri, GIS haritaları veya arayüz geliştirmeleriyle katkı sağlayabilirsiniz.

Detaylı yönergeler için → **[CONTRIBUTING.md](./CONTRIBUTING.md)** belgesini inceleyin.

---

## 📄 Lisans ve Atıf Bilgisi

Bu depodaki kodlar ve veri yapıları **[MIT Lisansı](./LICENSE)** altındadır. Yazılı bilimsel metinler, tablolar ve grafik verileri ise **[Creative Commons Attribution 4.0 International (CC-BY-4.0)](https://creativecommons.org/licenses/by/4.0/)** ile lisanslanmıştır.

### 📝 Atıf Şablonu (Academic Citation)

Projeden alıntı yaparken aşağıdaki formatı kullanabilirsiniz:

> *Tatta-Archive (2026). Tuz Gölü Disiplinlerarası Açık Kaynak Araştırma ve Analiz Platformu. GitHub Sürümü v10.0. Erişim Adresi: https://github.com/arch-yunus/Tatta-Archive*

---

<div align="center">

**🌊 Tuz Gölü'nün ekolojik geleceği için bilimin, yazılımın ve verinin gücünü birleştiriyoruz.**

*Her satır açık veri, gölün korunması yolunda atılmış somut bir adımdır.*

[![GitHub](https://img.shields.io/badge/GitHub-arch--yunus%2FTatta--Archive-181717?style=flat-square&logo=github)](https://github.com/arch-yunus/Tatta-Archive)
[![Live Demo](https://img.shields.io/badge/Demo-GitHub%20Pages-00e5ff?style=flat-square&logo=github-pages)](https://arch-yunus.github.io/Tatta-Archive/)

**[⬆️ Yukarı Dön](#-tatta-archive-tuz-gölü-disiplinlerarası-araştırma-deposu)**

</div>