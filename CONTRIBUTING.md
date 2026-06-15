# Tatta-Archive Katkı Sağlama Rehberi (Contributing Guidelines)

Tatta-Archive, Tuz Gölü (*Tatta*) havzası ile ilgili jeolojik, ekolojik, kültürel ve bilimsel verileri bir araya getirmeyi amaçlayan **açık kaynaklı ve disiplinlerarası** bir bilgi deposudur. Projeye katkıda bulunmak istemenizden büyük mutluluk duyarız!

Aşağıda, projeye nasıl katkı sağlayabileceğinize dair yönergeler ve kurallar yer almaktadır.

---

## 🛠️ Nasıl Katkıda Bulunabilirsiniz?

### 1. Yeni Veri Ekleme (`data/`)
- Tuz Gölü florası, faunası, su seviyeleri, meteorolojik ölçümler veya jeolojik formasyonlar hakkında yeni yapılandırılmış veriler ekleyebilirsiniz.
- Eklediğiniz verilerin `JSON` veya `CSV` formatında olmasına özen gösterin.
- Eklediğiniz verilerin bilimsel kaynağını (makale, kurum raporu, akademik çalışma vb.) belirtin.

### 2. Analiz ve Kod Geliştirme (`scripts/`)
- Python, R veya GIS araçları (QGIS/ArcGIS scriptleri) kullanarak yaptığınız analizleri paylaşabilirsiniz.
- Kodunuzun okunabilir, yorum satırlarıyla desteklenmiş ve temiz olmasına dikkat edin.
- Gerekli kütüphaneleri ve kurulum adımlarını kodun başına not edin.

### 3. Kültürel Miras, Mit ve Efsaneler Ekleme
- Yörede anlatılan efsaneleri, göl çevresindeki tarihi kalıntıları (Antik Tatta limanları, tuz yolları, hanlar) veya folklorik hikayeleri eklemek için web uygulamasındaki ilgili alanları veya markdown belgelerini güncelleyebilirsiniz.
- Yöresel ağızla anlatılan hikayelerin derleme kaynaklarını belirtiniz.

### 4. Web Uygulaması Geliştirmeleri (`index.html`, `styles.css`, `app.js`)
- Kullanıcı arayüzünü (UI) iyileştirebilir, yeni interaktif haritalar veya simülatörler ekleyebilirsiniz.
- Tasarımın modern, responsive (mobil uyumlu) ve premium estetiğe (karanlık mod, cam tasarımı vb.) sadık kalmasına özen gösterin.

---

## 🚀 Katkı Süreci (Workflow)

1. **Projeyi Fork Edin:**
   Sağ üstteki `Fork` butonuna tıklayarak projeyi kendi GitHub hesabınıza kopyalayın.

2. **Klonlayın ve Dal (Branch) Oluşturun:**
   ```bash
   git clone https://github.com/kullanici-adiniz/Tatta-Archive.git
   cd Tatta-Archive
   git checkout -b feature/katki-adi
   ```

3. **Değişikliklerinizi Yapın:**
   Gerekli düzenlemeleri ve eklemeleri yapın. Web arayüzünde yaptığınız değişiklikleri tarayıcınızda test edin.

4. **Taahhüt Edin (Commit) ve Pushlayın:**
   ```bash
   git add .
   git commit -m "feat: [Katkı Alanı] Kısa açıklama"
   git push origin feature/katki-adi
   ```

5. **Pull Request (PR) Açın:**
   Orijinal depoya gidip `Compare & pull request` butonuna tıklayın. Değişikliklerinizi açıklayan net bir başlık ve açıklama yazarak PR'ınızı gönderin.

---

## 📜 Davranış ve İçerik Kuralları

- **Akademik Dürüstlük:** Alıntı yapılan tüm bilimsel veriler ve haritalar için kaynak gösterilmelidir.
- **Telif Hakları:** Paylaştığınız fotoğrafların ve yazılı eserlerin telif hakkının size ait olduğundan veya açık lisanslı (CC-BY, MIT vb.) olduğundan emin olun.
- **Doğa Koruma Bilinci:** Tuz Gölü hassas bir ekosistemdir (Özel Çevre Koruma Bölgesi). Tanıtımlarda veya turizm rotalarında endemik türlere ve flamingo kuluçka alanlarına zarar vermeyecek koruma yönergelerini ön planda tutun.

Katkılarınız için şimdiden teşekkür ederiz! 🦢✨
