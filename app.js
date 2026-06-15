/* ==========================================================================
   Tatta-Archive JS: Core Interactive Functionality
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  // Navigation & SPA Section Switching
  initNavigation();

  // Basin Map Interactions (Geology)
  initBasinMap();

  // Water Budget Calculator (Geology)
  initWaterBudgetCalculator();

  // Dunaliella Salina & Color Simulator (Ecology)
  initDunaliellaSimulator();

  // Flamingo Breeding Cycle (Ecology)
  initFlamingoStepper();

  // Flora Cards (Ecology)
  initFloraCatalog();

  // Taşlaşan Kadın Interactive Story (Mysteries)
  initStoryReader();

  // Spatial Disorientation Canvas (Mysteries)
  initIllusionSimulator();

  // Tourism Route Optimizer (Tourism)
  initRouteOptimizer();

  // Tourism Gallery Slide (Tourism)
  initGallery();

  // Shrinkage Timeline & Chart (Data & Satellite)
  initShrinkageSimulator();
});

/* ==========================================================================
   1. NAVIGATION SYSTEM
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const header = document.getElementById("mainHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  // Scroll header styling
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Mobile menu toggle
  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
      menuToggle.innerHTML = navMenu.style.display === "flex" 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  // Section Switching
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      
      // Close mobile menu on click
      if (window.innerWidth <= 768) {
        navMenu.style.display = "none";
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }

      // Update active nav-link
      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      // Hide all sections, show active
      sections.forEach(sec => {
        sec.classList.remove("active-section");
        if (sec.id === targetId) {
          sec.classList.add("active-section");
          // Re-render canvas elements if they are visible now
          if (targetId === "mysteries") {
            setTimeout(resizeIllusionCanvas, 100);
          }
        }
      });
      
      // Smooth scroll back to top of content
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* ==========================================================================
   2. GEOLOGY: BASIN HARİTASI ETKİLEŞİMİ
   ========================================================================== */
function initBasinMap() {
  const mapPoints = document.querySelectorAll(".map-point");
  const faultLines = document.querySelectorAll(".fault-line");
  const riverPaths = document.querySelectorAll(".river-path");
  const tooltip = document.getElementById("mapTooltip");

  function showDetails(element, titleColor) {
    const name = element.getAttribute("data-name");
    const desc = element.getAttribute("data-desc");
    
    tooltip.innerHTML = `
      <h4 style="color: ${titleColor}">${name}</h4>
      <p>${desc}</p>
    `;
    tooltip.style.background = "rgba(15, 23, 42, 0.95)";
    tooltip.style.borderColor = titleColor;
  }

  mapPoints.forEach(pt => {
    pt.addEventListener("mouseenter", () => showDetails(pt, "#ff7597"));
    pt.addEventListener("click", () => showDetails(pt, "#ff7597"));
  });

  faultLines.forEach(fl => {
    fl.addEventListener("mouseenter", () => showDetails(fl, "#ef4444"));
    fl.addEventListener("click", () => showDetails(fl, "#ef4444"));
  });

  riverPaths.forEach(rp => {
    rp.addEventListener("mouseenter", () => showDetails(rp, "#3b82f6"));
    rp.addEventListener("click", () => showDetails(rp, "#3b82f6"));
  });
}

/* ==========================================================================
   3. GEOLOGY: SU BÜTÇESİ HESAPLAYICI
   ========================================================================== */
function initWaterBudgetCalculator() {
  const slidePrecip = document.getElementById("slide-precip");
  const slideRivers = document.getElementById("slide-rivers");
  const slideGw = document.getElementById("slide-gw");
  const slideEvap = document.getElementById("slide-evap");

  const valPrecip = document.getElementById("val-precip");
  const valRivers = document.getElementById("val-rivers");
  const valGw = document.getElementById("val-gw");
  const valEvap = document.getElementById("val-evap");

  const simResultBox = document.getElementById("simResultBox");
  const simNetVal = document.getElementById("sim-net-val");
  const simNetStatus = document.getElementById("sim-net-status");

  function calculate() {
    const precip = parseInt(slidePrecip.value);
    const rivers = parseInt(slideRivers.value); // milyon m3
    const gw = parseInt(slideGw.value); // milyon m3
    const evap = parseInt(slideEvap.value);

    // Güncellemeler
    valPrecip.innerText = `${precip} mm`;
    valRivers.innerText = `${rivers}m m³`;
    valGw.innerText = `${(gw/1000).toFixed(1)}b m³`;
    valEvap.innerText = `${evap} mm`;

    // Sabit Göller alanı (ortalama 1000 km² = 1,000,000,000 m²)
    const lakeArea = 1000 * 1e6;

    // Girdiler
    const precipInflow = (precip / 1000) * lakeArea; // m3
    const riverInflow = rivers * 1e6; // m3
    // Doğal yeraltı suyu beslenmesi (çekime bağlı olarak azalır)
    const naturalGw = 250 * 1e6;
    const netGwInflow = Math.max(0, naturalGw - (gw * 1e6 * 0.1));

    const totalInflow = precipInflow + riverInflow + netGwInflow;

    // Çıktılar
    const evapOutflow = (evap / 1000) * lakeArea; // m3

    // Net Bilanço
    const netVolumeChange = totalInflow - evapOutflow;
    const netMillionM3 = netVolumeChange / 1e6;

    // Arayüz Çıktısı
    if (netMillionM3 < 0) {
      simNetVal.innerText = `${netMillionM3.toFixed(1)} milyon m³`;
      simNetVal.style.color = "#ef4444";
      simResultBox.className = "sim-result-box negative";
      
      if (netMillionM3 < -300) {
        simNetStatus.innerText = "Kritik Seviye: Aşırı kuruma ve obruk tetiklenmesi riski çok yüksek!";
      } else {
        simNetStatus.innerText = "Negatif Bakiye: Göl alanı daralıyor, tuz birikimi artıyor.";
      }
    } else {
      simNetVal.innerText = `+${netMillionM3.toFixed(1)} milyon m³`;
      simNetVal.style.color = "#4ade80";
      simResultBox.className = "sim-result-box positive";
      simNetStatus.innerText = "Pozitif/Dengeli: Sulak alan korunuyor, flamingo üreme adaları güvende.";
    }
  }

  [slidePrecip, slideRivers, slideGw, slideEvap].forEach(slider => {
    slider.addEventListener("input", calculate);
  });

  calculate();
}

/* ==========================================================================
   4. ECOLOGY: DUNALIELLA SALINA & RENK SİMÜLATÖRÜ
   ========================================================================== */
function initDunaliellaSimulator() {
  const slideSal = document.getElementById("ecology-salinity");
  const slideTemp = document.getElementById("ecology-temp");
  const valSal = document.getElementById("val-eco-sal");
  const valTemp = document.getElementById("val-eco-temp");

  const waterSim = document.getElementById("lakeWaterSim");
  const waterLabel = document.getElementById("waterLabel");
  const popText = document.getElementById("eco-population");
  const processText = document.getElementById("eco-process");

  function simulate() {
    const sal = parseInt(slideSal.value);
    const temp = parseInt(slideTemp.value);

    valSal.innerText = `%${sal}`;
    valTemp.innerText = `${temp}°C`;

    // Koşul kontrolü
    if (sal < 15) {
      // Düşük tuzluluk: Standart göl biyolojisi
      waterSim.style.backgroundColor = "#1e40af"; // Koyu Mavi
      waterLabel.innerText = "Normal Göl Suyu";
      waterLabel.style.color = "#fff";
      popText.innerText = "Diatomlar, Yeşil Algler";
      processText.innerText = "Tuzluluk düşük olduğu için Dunaliella salina baskın değil. Yeşil alglerin fotosentez döngüsü hakimdir.";
    } 
    else if (sal >= 15 && sal < 25) {
      // Orta-Yüksek tuzluluk: Alg geçiş evresi
      if (temp > 22) {
        waterSim.style.backgroundColor = "#0d9488"; // Turkuaz/Yeşil
        waterLabel.innerText = "Hafif Yeşil Alg Baskınlığı";
        waterLabel.style.color = "#fff";
        popText.innerText = "Dunaliella salina (Aktif Değil)";
        processText.innerText = "Tuzluluk artıyor. Algler beta-karoten üretmeye başlamadı, klorofil rengi yeşil tonları öne çıkarıyor.";
      } else {
        waterSim.style.backgroundColor = "#2563eb"; // Mavi
        waterLabel.innerText = "Klasik Tuzlu Su";
        waterLabel.style.color = "#fff";
        popText.innerText = "Halofit Bakteriler (Pasif)";
        processText.innerText = "Sıcaklık düşük olduğu için hücresel bölünme yavaş, tuz kristalleri çökmeye başlıyor.";
      }
    } 
    else {
      // Aşırı tuzluluk (Hipersalin): >25%
      if (temp < 20) {
        waterSim.style.backgroundColor = "#475569"; // Gri-Kristal
        waterLabel.innerText = "Tuz Kristallenmesi";
        waterLabel.style.color = "#e2e8f0";
        popText.innerText = "Durgun Halobakteriler";
        processText.innerText = "Sıcaklık yetersiz olduğu için alg sentezi durdu. Göl yüzeyi beyaz tuz plakalarıyla kaplanıyor.";
      } 
      else if (temp >= 20 && temp < 30) {
        waterSim.style.backgroundColor = "#f97316"; // Turuncu
        waterLabel.innerText = "Karotenoid Reaksiyonu";
        waterLabel.style.color = "#fff";
        popText.innerText = "Dunaliella salina (Sentez Evresi)";
        processText.innerText = "Güneş ışığı ve tuz stresi altındaki algler, UV koruması için Beta-Karoten sentezleyerek turuncu renk alır.";
      } 
      else {
        // En ekstrem durum: >30°C ve >30% Tuzluluk
        waterSim.style.backgroundColor = "#db2777"; // Canlı Pembe/Kızıl
        waterLabel.innerText = "Kızıl Göl Fenomeni";
        waterLabel.style.color = "#fff";
        popText.innerText = "Dunaliella salina & Halobakteriler";
        processText.innerText = "Ekstrem koşullarda kırmızı halobakteriler ve kırmızı pigmentli algler gölü parlak pembe/kırmızı renge boyar.";
      }
    }
  }

  slideSal.addEventListener("input", simulate);
  slideTemp.addEventListener("input", simulate);
  simulate();
}

/* ==========================================================================
   5. ECOLOGY: FLAMİNGO STEPPER
   ========================================================================== */
const flamingoSteps = {
  1: {
    title: "Mart - Nisan: Havzaya Varış",
    text: "Akdeniz havzasındaki sulak alanlarda kışlayan flamingo sürüleri, üreme dönemi için gölün güneyindeki kimsenin ulaşamadığı derin ve ıslak çamur adacıklarına göç eder. Bu izolasyon, onları yırtıcılardan korur.",
    period: "İlkbahar Başlangıcı"
  },
  2: {
    title: "Mayıs: Çamur Yuvaların İnşası",
    text: "Eşleşen çiftler, gölün sığ çamurlu zemininden gagalarıyla topladıkları çamurlarla yanardağ kraterini andıran 30-40 cm yüksekliğinde konik yuvalar inşa ederler. Bu yuvalar yükselen sulardan yumurtayı korur.",
    period: "Mayıs Başı"
  },
  3: {
    title: "Haziran: Kuluçka Süreci",
    text: "Her dişi yuvaya tek bir yumurta bırakır. Anne ve baba flamingo yaklaşık 28-30 gün boyunca nöbetleşe kuluçkaya yatar. Bu dönemde gölün su seviyesinin korunması yuvaların güvenliği için hayati önem taşır.",
    period: "Haziran"
  },
  4: {
    title: "Temmuz - Ağustos: Kreş Dönemi",
    text: "Yumurtadan çıkan yavrular gri tüylüdür. Birkaç hafta sonra yavrular bir araya gelerek devasa 'yavru kreşleri' oluşturur. Yetişkinler gölün diğer kısımlarından alg ve besin taşıyarak yavruları ortaklaşa besler.",
    period: "Yaz Ortası"
  },
  5: {
    title: "Eylül - Ekim: İlk Uçuş & Göç",
    text: "Eylül sonuna doğru yavrular uçmayı öğrenir ve tüyleri Dunaliella salina alginden aldıkları karotenoid pigmentiyle pembeleşmeye başlar. Havaların soğumasıyla güney kıyılarına büyük göç başlar.",
    period: "Sonbahar"
  }
};

function initFlamingoStepper() {
  const stepBtns = document.querySelectorAll(".step-btn");
  const stepTitle = document.getElementById("step-title");
  const stepText = document.getElementById("step-text");
  const stepPeriod = document.getElementById("step-period");

  stepBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      stepBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const stepNum = btn.getAttribute("data-step");
      const data = flamingoSteps[stepNum];

      stepTitle.innerText = data.title;
      stepText.innerText = data.text;
      stepPeriod.innerText = data.period;
    });
  });
}

/* ==========================================================================
   6. ECOLOGY: FLORA KATALOĞU
   ========================================================================== */
const floraData = [
  {
    sci: "Salvia halophila",
    tr: "Tuz Gölü Şalbası",
    fam: "Lamiaceae",
    endemic: true,
    status: "EN",
    statusText: "Tehlikede",
    desc: "Dünyada sadece Tuz Gölü havzasındaki tuzlu ve nemli topraklarda yetişen, morumsu-mavi çiçekli çok yıllık endemik bir adaçayı türüdür.",
    habitat: "Tuzlu bataklıklar, jipsli bozkırlar"
  },
  {
    sci: "Kalidiopsis wagenitzii",
    tr: "Tuz İbrikotu",
    fam: "Amaranthaceae",
    endemic: true,
    status: "CR",
    statusText: "Kritik Tehlikede",
    desc: "Tuz Gölü havzasına özgü monosentrik endemik bir cinstir. Yüksek tuz konsantrasyonlarına dayanabilen sucul-etli yapraklı ekstrem bir halofittir.",
    habitat: "Aşırı tuzlu bataklıklar ve tuz düzlükleri çeperi"
  },
  {
    sci: "Taraxacum farinosum",
    tr: "Tuz Karahindibası",
    fam: "Asteraceae",
    endemic: true,
    status: "VU",
    statusText: "Duyarlı",
    desc: "Tuzlu topraklara adapte olmuş, rozet yapraklı ve sarı çiçekli endemik bir hindiba türüdür. Yapraklarındaki mumsu tabaka tuz kaybını önler.",
    habitat: "Göl kıyısındaki tuzlu çayırlar"
  },
  {
    sci: "Microcnemum coralloides",
    tr: "Tuz Mercanotu",
    fam: "Amaranthaceae",
    endemic: false,
    status: "VU",
    statusText: "Duyarlı",
    desc: "Görünümü küçük mercan dallarını andıran, boğumlu ve etli gövdeye sahip tek yıllık bir bitkidir. Sonbaharda kırmızı/pembe renge bürünür.",
    habitat: "Çok yüksek tuzluluk oranına sahip ıslak çamurlar"
  },
  {
    sci: "Limonium lilacinum",
    tr: "Eflatun Limonyum",
    fam: "Plumbaginaceae",
    endemic: true,
    status: "LC",
    statusText: "Asgari Endişe",
    desc: "Gölün etrafındaki tuzlu topraklarda geniş topluluklar oluşturan, yaz sonuna doğru açan eflatun renkli kuru çiçekleriyle bilinen bir bitkidir.",
    habitat: "Tuzlu bozkırlar, göl çevresi alüvyonal düzlükler"
  },
  {
    sci: "Suaeda carpathica",
    tr: "Tuzcul Süveyda",
    fam: "Amaranthaceae",
    endemic: false,
    status: "LC",
    statusText: "Asgari Endişe",
    desc: "Sodyum biriktirme kapasitesi çok yüksek olan, yaprakları tuz yoğunluğuna göre yeşilden parlak kırmızıya dönen öncü bir halofit türüdür.",
    habitat: "Tuzlu göl kıyıları, geçici tuzlu gölet çeperleri"
  }
];

function initFloraCatalog() {
  const grid = document.getElementById("floraGrid");
  const filterBtns = document.querySelectorAll(".btn-filter");

  function render(filter = "all") {
    grid.innerHTML = "";
    
    const filtered = floraData.filter(item => {
      if (filter === "all") return true;
      if (filter === "endemic") return item.endemic;
      if (filter === "cr") return item.status === "CR" || item.status === "EN";
      return true;
    });

    filtered.forEach(item => {
      const card = document.createElement("div");
      card.className = "flora-card";
      
      const badgeClass = item.endemic ? "endemic" : "safe";
      const threatClass = (item.status === "CR" || item.status === "EN") ? "threat" : "safe";
      
      card.innerHTML = `
        <div class="flora-card-inner">
          <div class="flora-card-front">
            <div class="flora-front-header">
              <span class="flora-sci">${item.sci}</span>
              <span class="flora-tr">${item.tr}</span>
              <span class="flora-fam">${item.fam}</span>
            </div>
            <div class="flora-meta">
              <span class="flora-badge ${badgeClass}">${item.endemic ? 'Endemik' : 'Yerli'}</span>
              <span class="flora-badge ${threatClass}">${item.status} (${item.statusText})</span>
            </div>
            <span class="flip-prompt"><i class="fa-solid fa-rotate"></i> Tıkla/İncele</span>
          </div>
          <div class="flora-card-back">
            <div>
              <h4>Ekolojik Tanım</h4>
              <p>${item.desc}</p>
            </div>
            <div class="flora-habitat">
              <strong>Yetişme Alanı:</strong> ${item.habitat}
            </div>
          </div>
        </div>
      `;
      
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });

      grid.appendChild(card);
    });
  }

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      filterBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      render(btn.getAttribute("data-filter"));
    });
  });

  render();
}

/* ==========================================================================
   7. MYSTERIES: TAŞLAŞAN KADIN HİKAYE OKUYUCU
   ========================================================================== */
const storySteps = [
  {
    text: "Bir varmış bir yokmuş... Çok eski zamanlarda gölün henüz kıyısında, sürüsüyle yaşayan yaşlı bir kadın varmış. Bu kadının yüzlerce koyunu, bolca sütü ve peyniri olurmuş ancak kendisi oldukça cimriymiş.",
    overlay: "linear-gradient(135deg, rgba(255, 117, 151, 0.05) 0%, rgba(0, 0, 0, 0) 100%)"
  },
  {
    text: "Sıcak bir yaz günü, susuzluktan ve açlıktan dudakları çatlamış pir-i fani bir derviş kadının çadırına yanaşmış. 'Allah rızası için bir tas su veya bir kase süt ver, günlerdir yoldayım' demiş derviş.",
    overlay: "linear-gradient(135deg, rgba(251, 191, 36, 0.08) 0%, rgba(0, 0, 0, 0.1) 100%)"
  },
  {
    text: "Cimri kadın kafasını kaldırmış, 'Sana verecek bir damla suyum da sütüm de yok! Haydi başka kapıya!' diyerek yaşlı adamı kovmuş. Derviş üzüntüyle boynunu bükmüş, göğe bakarak dua etmiş: 'Eğer yalan söylüyorsan, sen de sürün de tuz olasınız!'",
    overlay: "linear-gradient(135deg, rgba(239, 68, 68, 0.08) 0%, rgba(0, 0, 0, 0.2) 100%)"
  },
  {
    text: "O anda gök gürlemiş, bir fırtına kopmuş. Çadır, kadın ve tüm koyun sürüsü beyaz tuz kristallerine dönüşerek donakalmış. Bugün göl kıyısında görülen bazı tümsek kaya tuzu bloklarının bu sürünün kalıntıları olduğuna inanılır.",
    overlay: "linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(0, 0, 0, 0.3) 100%)"
  }
];

function initStoryReader() {
  let currentStep = 0;
  const textEl = document.getElementById("storyText");
  const progressEl = document.getElementById("storyProgress");
  const prevBtn = document.getElementById("story-prev");
  const nextBtn = document.getElementById("story-next");
  const overlay = document.getElementById("narrativeOverlay");

  function update() {
    textEl.style.opacity = 0;
    setTimeout(() => {
      textEl.innerText = storySteps[currentStep].text;
      textEl.style.opacity = 1;
    }, 200);

    progressEl.innerText = `${currentStep + 1} / ${storySteps.length}`;
    overlay.style.background = storySteps[currentStep].overlay;

    prevBtn.disabled = currentStep === 0;
    nextBtn.innerHTML = currentStep === storySteps.length - 1 
      ? 'Tekrar Oku <i class="fa-solid fa-rotate-left"></i>' 
      : 'İleri <i class="fa-solid fa-chevron-right"></i>';
  }

  nextBtn.addEventListener("click", () => {
    if (currentStep < storySteps.length - 1) {
      currentStep++;
    } else {
      currentStep = 0;
    }
    update();
  });

  prevBtn.addEventListener("click", () => {
    if (currentStep > 0) {
      currentStep--;
    }
    update();
  });
}

/* ==========================================================================
   8. MYSTERIES: SERAP & UZAMSAL YÖN KAYBI KANVAS SİMÜLATÖRÜ
   ========================================================================== */
let illusionCanvas, ctx;
let hazeSlider, reflectionSlider;

function initIllusionSimulator() {
  illusionCanvas = document.getElementById("illusionCanvas");
  if (!illusionCanvas) return;
  
  ctx = illusionCanvas.getContext("2d");
  hazeSlider = document.getElementById("illusion-haze");
  reflectionSlider = document.getElementById("illusion-reflection");

  const valHaze = document.getElementById("val-haze");
  const valRef = document.getElementById("val-reflection");

  function draw() {
    const haze = parseInt(hazeSlider.value);
    const reflection = parseInt(reflectionSlider.value);

    valHaze.innerText = `%${haze}`;
    valRef.innerText = `%${reflection}`;

    const w = illusionCanvas.width;
    const h = illusionCanvas.height;
    
    ctx.clearRect(0, 0, w, h);

    // 1. Gökyüzü Çizimi (Açık Mavi/Cyan Geçiş)
    let skyGradient = ctx.createLinearGradient(0, 0, 0, h/2);
    skyGradient.addColorStop(0, "#0284c7");
    skyGradient.addColorStop(1, "#bae6fd");
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, w, h/2);

    // 2. Yeryüzü / Tuz Düzlüğü Çizimi (Beyaz zemin)
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, h/2, w, h/2);

    // 3. Yansıma Çizimi (Sky Mirror Effect)
    if (reflection > 0) {
      let refOpacity = reflection / 100 * 0.7;
      let refGradient = ctx.createLinearGradient(0, h/2, 0, h);
      refGradient.addColorStop(0, `rgba(186, 230, 253, ${refOpacity})`);
      refGradient.addColorStop(1, `rgba(2, 132, 243, ${refOpacity * 0.4})`);
      ctx.fillStyle = refGradient;
      ctx.fillRect(0, h/2, w, h/2);
    }

    // 4. Ufuk Çizgisi Bulanıklaştırma (Serap / Isı Titremesi)
    if (haze > 0) {
      let blurHeight = (haze / 100) * 35; // Maksimum 35px yükseklikte bulanıklık bandı
      let horizonGrad = ctx.createLinearGradient(0, h/2 - blurHeight/2, 0, h/2 + blurHeight/2);
      
      horizonGrad.addColorStop(0, "rgba(186, 230, 253, 1)");
      horizonGrad.addColorStop(0.5, `rgba(248, 250, 252, ${1 - (haze/150)})`); // Ufuk erimesi
      horizonGrad.addColorStop(1, "rgba(248, 250, 252, 1)");

      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, h/2 - blurHeight/2, w, blurHeight);

      // Çizgisel titreşim simülasyonu
      ctx.strokeStyle = `rgba(255,255,255, ${haze/100 * 0.5})`;
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        let yOffset = (Math.random() - 0.5) * 4;
        ctx.beginPath();
        ctx.moveTo(0, h/2 + yOffset - 2 + i*2);
        ctx.lineTo(w, h/2 + yOffset - 2 + i*2);
        ctx.stroke();
      }
    } else {
      // Net Ufuk çizgisi
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h/2);
      ctx.lineTo(w, h/2);
      ctx.stroke();
    }

    // 5. Simüle edilmiş "Yürüyen İnsan" figürleri (Derinlik algısı için)
    drawWalker(w/2 - 40, h/2 + 20, 10, "#1e293b"); // Yakındaki kişi
    drawWalker(w/2 + 60, h/2 + 5, 4, "#64748b");   // Uzaktaki kişi (ufuğa yakın)
    
    // Eğer serap şiddeti ve yansıma yüksekse, uzaktaki kişinin yansımasını çiz
    if (reflection > 20) {
      let refOpacity = (reflection/100) * 0.5;
      drawWalkerReflected(w/2 - 40, h/2 + 20, 10, refOpacity);
      drawWalkerReflected(w/2 + 60, h/2 + 5, 4, refOpacity * 0.5);
    }
  }

  function drawWalker(x, y, height, color) {
    ctx.fillStyle = color;
    // Gövde
    ctx.fillRect(x - 1, y - height * 0.8, 2, height * 0.8);
    // Kafa
    ctx.beginPath();
    ctx.arc(x, y - height + 1, height * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawWalkerReflected(x, y, height, opacity) {
    ctx.fillStyle = `rgba(30, 41, 59, ${opacity})`;
    // Yansıma gövdesi (aşağı doğru çizilir)
    ctx.fillRect(x - 0.8, y, 1.6, height * 0.5);
    // Yansıma kafası
    ctx.beginPath();
    ctx.arc(x, y + height * 0.6, height * 0.15, 0, Math.PI * 2);
    ctx.fill();
  }

  [hazeSlider, reflectionSlider].forEach(slider => {
    slider.addEventListener("input", draw);
  });

  draw();
}

function resizeIllusionCanvas() {
  if (illusionCanvas) {
    const rect = illusionCanvas.parentElement.getBoundingClientRect();
    illusionCanvas.width = rect.width - 2; // Çerçeve payı
    // Yeniden çiz
    if (hazeSlider) {
      hazeSlider.dispatchEvent(new Event("input"));
    }
  }
}

/* ==========================================================================
   9. TOURISM: ROTA PLANLAYICISI
   ========================================================================== */
const routeData = {
  north: {
    title: "Şereflikoçhisar Kaldırım Girişi",
    walk: "1.0 - 2.0 km",
    safety: "Yüksek (Sert Tuz Kaplaması)",
    safetyClass: "text-success",
    desc: "Tuz Gölü'ne en çok ziyaretçi çeken giriş noktasıdır. Otoyol kenarında yer alan tesisler sayesinde erişimi kolaydır. Tabanı kalın bir kristal tuz tabakasıyla örtülü olduğu için çamura batma riski yoktur. İlkbahar aylarında oluşan ayna efektini fotoğraflamak için en popüler rotadır.",
    warn: "Keskin tuz kristallerine karşı yalınayak yürürken dikkat edin, küçük çizikler tuzlu su nedeniyle yanabilir."
  },
  west: {
    title: "Cihanbeyli Yavşan Girişi",
    walk: "2.0 - 4.5 km",
    safety: "Orta (Balçık / Çamur Riski)",
    safetyClass: "text-warning",
    desc: "Gölün batı çeperinde yer alır. Sanayi tuzlalarına yakındır. Bu bölgede tuz kristallerinin altında yoğun ve kaygan jips çamuru bulunur. Araçla göl zeminine girmek kesinlikle yasak ve tehlikelidir; araçlar anında balçığa saplanabilir.",
    warn: "Islak görünen siyah/koyu gri bölgelere basmayın. Bu alanlarda tuz tabakası incedir ve altı dipsiz çamurdur."
  },
  south: {
    title: "Eskil Flamingo Koruma Alanı",
    walk: "Yasaktır (Sadece Uzaktan Gözlem)",
    safety: "Kısıtlı / Özel İzinli",
    safetyClass: "text-danger",
    desc: "Gölün güneyinde yer alan, flamingoların kuluçka adacıklarının bulunduğu ekolojik koruma kuşağıdır. Yavruların ve yuvaların zarar görmemesi için bu alana sivil ziyaretçi girişi tamamen yasaktır. Sadece özel araştırma izinleriyle girilebilir.",
    warn: "Koruma kurallarını ihlal etmek ekosisteme zarar verir ve ağır cezai yaptırımlara tabidir."
  }
};

function initRouteOptimizer() {
  const routeOptions = document.querySelectorAll(".route-option");
  const rTitle = document.getElementById("route-title");
  const rWalk = document.getElementById("route-walk");
  const rSafety = document.getElementById("route-safety");
  const rDesc = document.getElementById("route-desc");
  const rWarn = document.getElementById("route-warn");

  routeOptions.forEach(opt => {
    opt.addEventListener("click", () => {
      routeOptions.forEach(o => o.classList.remove("active"));
      opt.classList.add("active");

      const routeKey = opt.getAttribute("data-route");
      const data = routeData[routeKey];

      rTitle.innerText = data.title;
      rWalk.innerText = data.walk;
      rSafety.innerText = data.safety;
      rSafety.className = data.safetyClass;
      rDesc.innerText = data.desc;
      rWarn.innerHTML = `<i class="fa-solid fa-circle-exclamation"></i> ${data.warn}`;
    });
  });
}

/* ==========================================================================
   10. TOURISM: FOTOĞRAF GALERİSİ SLIDE
   ========================================================================== */
const gallerySlides = [
  {
    title: "Bahar Aynası (Nisan - Mayıs)",
    desc: "Gökyüzünün sınırlarının eridiği, bulutların üzerinde yürüyüş hissi veren ayna efekti.",
    bg: "linear-gradient(to bottom, #bae6fd, #e0f2fe, #f1f5f9)"
  },
  {
    title: "Dunaliella Salina Kızıllığı (Temmuz - Ağustos)",
    desc: "Sıcaklığın yükselmesi ve suyun buharlaşmasıyla oluşan sürreal pembe/kırmızı su birikintileri.",
    bg: "linear-gradient(to bottom, #f472b6, #db2777, #9d174d)"
  },
  {
    title: "Sonsuz Beyaz Çöl (Eylül - Ekim)",
    desc: "Suyun tamamen çekilerek geriye kilometrelerce uzanan devasa bir tuz kabuğu bıraktığı dönem.",
    bg: "linear-gradient(to bottom, #f8fafc, #e2e8f0, #cbd5e1)"
  }
];

function initGallery() {
  let activeIndex = 0;
  const slideImgBox = document.getElementById("slide-img-box");
  const slideTitle = document.getElementById("slide-title");
  const slideDesc = document.getElementById("slide-desc");
  const indicator = document.getElementById("gal-indicator");
  const btnPrev = document.getElementById("gal-prev");
  const btnNext = document.getElementById("gal-next");

  function renderSlide() {
    const data = gallerySlides[activeIndex];
    
    slideImgBox.style.backgroundImage = "none";
    slideImgBox.style.background = data.bg;
    
    slideTitle.innerText = data.title;
    slideDesc.innerText = data.desc;
    indicator.innerText = `${activeIndex + 1} / ${gallerySlides.length}`;
  }

  btnNext.addEventListener("click", () => {
    activeIndex = (activeIndex + 1) % gallerySlides.length;
    renderSlide();
  });

  btnPrev.addEventListener("click", () => {
    activeIndex = (activeIndex - 1 + gallerySlides.length) % gallerySlides.length;
    renderSlide();
  });

  renderSlide();
}

/* ==========================================================================
   11. DATA: DARALMA SİMÜLATÖRÜ & CHART.JS ENTEGRASYONU
   ========================================================================== */
const shrinkageHistory = {
  1975: { area: 1600, scale: 1.0, sinkholes: 2 },
  1980: { area: 1540, scale: 0.96, sinkholes: 4 },
  1985: { area: 1450, scale: 0.91, sinkholes: 6 },
  1990: { area: 1380, scale: 0.86, sinkholes: 10 },
  1995: { area: 1250, scale: 0.78, sinkholes: 18 },
  2000: { area: 1050, scale: 0.66, sinkholes: 35 },
  2005: { area: 900, scale: 0.56, sinkholes: 70 },
  2010: { area: 820, scale: 0.51, sinkholes: 130 },
  2015: { area: 750, scale: 0.47, sinkholes: 235 },
  2020: { area: 620, scale: 0.39, sinkholes: 400 },
  2025: { area: 520, scale: 0.32, sinkholes: 600 }
};

let chartInstance = null;

function initShrinkageSimulator() {
  const slider = document.getElementById("timeline-slider");
  const yearDisplay = document.getElementById("sim-year-display");
  const areaDisplay = document.getElementById("sim-area-display");
  const lakePath = document.getElementById("svg-shrink-lake");
  const sinkholesGroup = document.getElementById("svg-sinkholes");
  const btnExport = document.getElementById("btn-export-json");

  function updateVisuals(year) {
    const data = shrinkageHistory[year];
    
    // Yıl ve alan metin güncellemeleri
    yearDisplay.innerText = year;
    areaDisplay.innerText = `${data.area} km²`;

    // SVG Ölçeklendirme (Gölün daralması)
    // scale transform uygulayarak görsel olarak gölü daraltıyoruz
    lakePath.style.transform = `scale(${data.scale})`;

    // Obruk noktalarını SVG içine ekleme
    sinkholesGroup.innerHTML = "";
    // Yıla göre orantılı rastgele obruk noktaları çizelim (aynı tohum noktalarını korumak için deterministik konumlar)
    const pointsCount = Math.min(200, Math.floor(data.sinkholes / 3));
    
    for (let i = 0; i < pointsCount; i++) {
      // Deterministik ama rastgele dağılmış konumlar (sinüs/cosinüs ile)
      const angle = (i * 2.39996) * (Math.PI / 180); // Altın oran açısı
      const radius = Math.sqrt(i) * 5.5 + 40; // Dağılım yarıçapı
      
      const cx = 150 + Math.cos(angle) * radius * 0.8;
      const cy = 150 + Math.sin(angle) * radius * 0.9;
      
      // Sadece gölün dış çeperinde ve havzada olmasını sağlamak için sınırlar (100-200 arası)
      if (cx > 50 && cx < 250 && cy > 50 && cy < 250) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("class", "sinkhole");
        sinkholesGroup.appendChild(circle);
      }
    }
  }

  // Slider olayı
  slider.addEventListener("input", (e) => {
    updateVisuals(e.target.value);
  });

  // Başlangıç durumu
  updateVisuals(1975);

  // Grafik Çizimi (Chart.js)
  renderChart();

  // JSON Export Olayı
  btnExport.addEventListener("click", () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(shrinkageHistory, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", "lake_tuz_shrinkage_history.json");
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  });
}

function renderChart() {
  const ctxChart = document.getElementById("shrinkageChart");
  if (!ctxChart) return;

  const years = Object.keys(shrinkageHistory);
  const areas = years.map(y => shrinkageHistory[y].area);
  const sinkholes = years.map(y => shrinkageHistory[y].sinkholes);

  // Varsa eski grafik örneğini sil
  if (chartInstance) {
    chartInstance.destroy();
  }

  chartInstance = new Chart(ctxChart, {
    type: 'line',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Göl Alanı (km²)',
          data: areas,
          borderColor: '#00e5ff',
          backgroundColor: 'rgba(0, 229, 255, 0.1)',
          yAxisID: 'y-area',
          tension: 0.3,
          borderWidth: 2,
          fill: true
        },
        {
          label: 'Obruk Sayısı',
          data: sinkholes,
          borderColor: '#ef4444',
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          yAxisID: 'y-sinkholes',
          tension: 0.3,
          borderWidth: 2,
          fill: false
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: {
            color: '#94a3b8',
            font: { family: 'Outfit', size: 11 }
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#94a3b8', font: { family: 'Outfit' } }
        },
        'y-area': {
          type: 'linear',
          position: 'left',
          grid: { color: 'rgba(255, 255, 255, 0.05)' },
          ticks: { color: '#00e5ff', font: { family: 'Outfit' } },
          title: { display: true, text: 'Alan (km²)', color: '#00e5ff' }
        },
        'y-sinkholes': {
          type: 'linear',
          position: 'right',
          grid: { drawOnChartArea: false },
          ticks: { color: '#ef4444', font: { family: 'Outfit' } },
          title: { display: true, text: 'Obruk Adedi', color: '#ef4444' }
        }
      }
    }
  });
}
