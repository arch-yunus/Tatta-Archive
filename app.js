document.addEventListener("DOMContentLoaded", () => {
  // Loading screen
  initLoadingScreen();

  // Scroll progress bar
  initScrollProgress();

  // Navigation & SPA Section Switching
  initNavigation();

  // Live lake status widget
  initLiveStatusPanel();

  // Flamingo population modal
  initFlamingoModal();

  // Basin Map Interactions (Geology)
  initBasinMap();

  // Stratigraphic Core Drill Simulator (Geology)
  initCoreDrillSimulator();

  // Water Budget Calculator (Geology)
  initWaterBudgetCalculator();

  // Hipersalin Food Web (Ecology)
  initFoodWeb();

  // Dunaliella Salina & Color Simulator (Ecology)
  initDunaliellaSimulator();

  // Flamingo Breeding Cycle (Ecology)
  initFlamingoStepper();

  // Flora Cards (Ecology)
  initFloraCatalog();

  // Choose-Your-Own-Adventure Story (Mysteries)
  initCYOAStory();

  // Gece Işık Radarı (Mysteries)
  initRadarSimulator();

  // Spatial Disorientation Canvas (Mysteries)
  initIllusionSimulator();

  // Tourism Route Optimizer (Tourism)
  initRouteOptimizer();

  // Sky Mirror Tahmin Algoritması (Tourism)
  initSkyMirrorPredictor();

  // Tourism Gallery Slide (Tourism)
  initGallery();

  // Shrinkage Timeline & Chart (Data & Satellite)
  initShrinkageSimulator();

  // Obruk Risk Overlay Toggle
  initRiskOverlay();

  // Multispectral Satellite Comparator (Data & Satellite)
  initSatelliteComparator();

  // Climate Projection Chart (Data & Satellite)
  initClimateProjection();

  // Cavern Thermodynamics (Mühendislik)
  initHydrogenCavernSimulator();

  // Lithium Recovery (Mühendislik)
  initLithiumRecoverySimulator();

  // Vizyon 2056 Kokpiti (Gelecek Projeksiyonları)
  initVision2056();

  // Fiziksel Dinamikler & Kıyaslamalı Limnoloji
  initPhysicsDynamics();
  initGlobalLakesMatrix();

  // Endüstriyel Tuzla ve Antik Sarnıç Simülatörleri (v13.0)
  initSaltworksSimulator();
  initCisternSimulator();

  // Yeni Simülatörler (v14.0)
  initHalophyteRemediationSimulator();
  initCaravanSimulator();
  initCCNSimulator();

  // Sürüm 15.0 Simülatörleri
  initPaleolimnologySimulator();
  initAlgaeReactorSimulator();
});

/* ==========================================================================
   0a. LOADING SCREEN
   ========================================================================== */
function initLoadingScreen() {
  const screen = document.getElementById("loadingScreen");
  const bar = document.getElementById("loadingBar");
  const text = document.getElementById("loadingText");
  if (!screen) return;

  const steps = [
    { pct: 20, msg: "Jeolojik veriler yükleniyor..." },
    { pct: 45, msg: "Ekoloji kataloğu hazırlanıyor..." },
    { pct: 70, msg: "Radar sistemi başlatılıyor..." },
    { pct: 90, msg: "Uydu analiz modülleri aktif..." },
    { pct: 100, msg: "Arşiv hazır!" }
  ];

  let i = 0;
  const tick = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(tick);
      setTimeout(() => screen.classList.add("hidden"), 300);
      return;
    }
    bar.style.width = steps[i].pct + "%";
    text.innerText = steps[i].msg;
    i++;
  }, 360);
}

/* ==========================================================================
   0b. SCROLL PROGRESS BAR
   ========================================================================== */
function initScrollProgress() {
  const bar = document.getElementById("scrollProgress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = pct + "%";
  }, { passive: true });
}

/* ==========================================================================
   0c. LIVE LAKE STATUS WIDGET
   ========================================================================== */
function initLiveStatusPanel() {
  const tsEl = document.getElementById("liveTimestamp");
  const tempEl = document.getElementById("liveTemp");
  const waterEl = document.getElementById("liveWater");
  const phEl = document.getElementById("livePH");
  const windEl = document.getElementById("liveWind");
  const flamingoEl = document.getElementById("liveFlamingoSight");
  const ndwiEl = document.getElementById("liveNDWI");
  if (!tsEl) return;

  // Realistic seasonal base values (simulated, not real API)
  const baseData = {
    temp: 32,    // °C summer
    water: 3,    // cm thin film
    ph: 7.1,
    wind: 8,     // km/s
    flamingo: 840,
    ndwi: 0.28
  };

  function rand(base, jitter) {
    return (base + (Math.random() - 0.5) * jitter * 2).toFixed(1);
  }

  function update() {
    const now = new Date();
    tsEl.innerText = now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });
    tempEl.innerText = rand(baseData.temp, 0.4);
    waterEl.innerText = rand(baseData.water, 0.3);
    phEl.innerText = rand(baseData.ph, 0.05);
    windEl.innerText = rand(baseData.wind, 1.5);
    flamingoEl.innerText = Math.round(baseData.flamingo + (Math.random() - 0.5) * 40);
    ndwiEl.innerText = rand(baseData.ndwi, 0.02);
  }

  update();
  setInterval(update, 5000);
}

/* ==========================================================================
   0d. FLAMINGO POPULATION MODAL
   ========================================================================== */
let flamingoChartInstance = null;

function initFlamingoModal() {
  const triggerCard = document.getElementById("stat-card-flamingo");
  const modal = document.getElementById("flamingoModal");
  const closeBtn = document.getElementById("closeFlamingoModal");
  if (!triggerCard || !modal) return;

  const flamingoPopData = {
    years: [1975, 1980, 1985, 1990, 1995, 2000, 2005, 2010, 2015, 2020, 2025],
    counts: [3200, 4800, 6500, 8200, 10500, 13000, 15200, 17800, 19500, 21000, 22400]
  };

  function openModal() {
    modal.classList.add("open");
    if (!flamingoChartInstance) {
      const ctx = document.getElementById("flamingoChart");
      if (!ctx) return;
      flamingoChartInstance = new Chart(ctx, {
        type: "line",
        data: {
          labels: flamingoPopData.years,
          datasets: [{
            label: "Flamingo Popülasyonu (Birey)",
            data: flamingoPopData.counts,
            borderColor: "#ff7597",
            backgroundColor: "rgba(255,117,151,0.12)",
            fill: true,
            tension: 0.4,
            borderWidth: 2.5,
            pointBackgroundColor: "#ff7597",
            pointRadius: 4
          }]
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { labels: { color: "#94a3b8", font: { family: "Outfit", size: 11 } } }
          },
          scales: {
            x: {
              grid: { color: "rgba(255,255,255,0.05)" },
              ticks: { color: "#94a3b8", font: { family: "Outfit" } }
            },
            y: {
              grid: { color: "rgba(255,255,255,0.05)" },
              ticks: { color: "#ff7597", font: { family: "Outfit" } },
              title: { display: true, text: "Birey Sayısı", color: "#ff7597" }
            }
          }
        }
      });
    }
  }

  triggerCard.addEventListener("click", openModal);
  closeBtn.addEventListener("click", () => modal.classList.remove("open"));
  modal.addEventListener("click", (e) => { if (e.target === modal) modal.classList.remove("open"); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") modal.classList.remove("open"); });
}


/* ==========================================================================
   1. NAVIGATION SYSTEM
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll(".nav-link");
  const sections = document.querySelectorAll(".section");
  const header = document.getElementById("mainHeader");
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");

  const bannerConfigs = {
    home: {
      img: "banner.png",
      location: '<i class="fa-solid fa-location-dot"></i> Tuz Gölü, İç Anadolu, Türkiye',
      type: '<i class="fa-solid fa-camera"></i> Bahar Aynası — Nisan',
      short: false
    },
    geology: {
      img: "banner_caverns.png",
      location: '<i class="fa-solid fa-mountain"></i> Cihanbeyli & Şereflikoçhisar',
      type: '<i class="fa-solid fa-screwdriver"></i> Sondaj Sahası TG-C1',
      short: true
    },
    ecology: {
      img: "banner_pink_algae.png",
      location: '<i class="fa-solid fa-location-dot"></i> Eskil Koruma Kuşağı',
      type: '<i class="fa-solid fa-dove"></i> Dunaliella & Flamingo Yaşam Alanı',
      short: true
    },
    history: {
      img: "banner.png",
      location: '<i class="fa-solid fa-clock"></i> Tarihi İpek Yolu Rotası',
      type: '<i class="fa-solid fa-landmark"></i> Antik Roma & Selçuklu Ticaret Havzası',
      short: true
    },
    mysteries: {
      img: "banner_pink_algae.png",
      location: '<i class="fa-solid fa-ghost"></i> Optik Anomali Bölgeleri',
      type: '<i class="fa-solid fa-eye"></i> Fata Morgana & Serap Simülasyonu',
      short: true
    },
    tourism: {
      img: "banner.png",
      location: '<i class="fa-solid fa-location-dot"></i> Şereflikoçhisar Turistik Alanı',
      type: '<i class="fa-solid fa-camera"></i> Günbatımı & Ayna Yansıma Rotası',
      short: true
    },
    satellite: {
      img: "banner_satellite.png",
      location: '<i class="fa-solid fa-satellite"></i> Sentinel-2 Yörünge İzleme',
      type: '<i class="fa-solid fa-chart-line"></i> MNDWI Spektroskopi Analizi',
      short: true
    },
    technology: {
      img: "banner_caverns.png",
      location: '<i class="fa-solid fa-gears"></i> Yeraltı Kaverna Hücreleri',
      type: '<i class="fa-solid fa-flask-vial"></i> Hidrojen Depolama & Lityum Prosesi',
      short: true
    },
    vision: {
      img: "banner_satellite.png",
      location: '<i class="fa-solid fa-eye"></i> Vizyon 2056 Kokpiti',
      type: '<i class="fa-solid fa-circle-nodes"></i> Karanlık Gökyüzü Parkı & Sürdürülebilirlik',
      short: true
    },
    physics: {
      img: "banner.png",
      location: '<i class="fa-solid fa-wind"></i> Cihanbeyli & Aksaray Çeperi',
      type: '<i class="fa-solid fa-wave-square"></i> Seş Salınımları & Toz Erozyon Laboratuvarı',
      short: true
    }
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      navMenu.style.display = navMenu.style.display === "flex" ? "none" : "flex";
      menuToggle.innerHTML = navMenu.style.display === "flex" 
        ? '<i class="fa-solid fa-xmark"></i>' 
        : '<i class="fa-solid fa-bars"></i>';
    });
  }

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const targetId = link.getAttribute("href").substring(1);
      
      if (window.innerWidth <= 768) {
        navMenu.style.display = "none";
        menuToggle.innerHTML = '<i class="fa-solid fa-bars"></i>';
      }

      navLinks.forEach(l => l.classList.remove("active"));
      link.classList.add("active");

      sections.forEach(sec => {
        sec.classList.remove("active-section");
        if (sec.id === targetId) {
          sec.classList.add("active-section");
          // Resize canvases on view load
          if (targetId === "geology") {
            setTimeout(() => {
              resizePaleoCanvas();
              startPaleolimnologySimulation();
            }, 100);
          } else if (targetId === "mysteries") {
            setTimeout(() => {
              resizeIllusionCanvas();
              startRadarSweep();
            }, 100);
          } else if (targetId === "technology") {
            setTimeout(() => {
              resizeSaltworksCanvas();
              startCavernSimulation();
              startSaltworksSimulation();
              resizeReactorCanvas();
              startAlgaeReactorSimulation();
            }, 100);
          } else if (targetId === "ecology") {
            setTimeout(() => {
              resizePhytoCanvas();
              startPhytoSimulation();
            }, 100);
          } else if (targetId === "history") {
            setTimeout(() => {
              resizeCisternCanvas();
              startCisternSimulation();
              resizeCaravanCanvas();
              startCaravanSimulation();
            }, 100);
          } else if (targetId === "vision") {
            setTimeout(() => {
              resizeSkyCanvas();
            }, 100);
          } else if (targetId === "physics") {
            setTimeout(() => {
              resizePhysicsCanvases();
              startPhysicsSimulations();
              resizeCCNCanvas();
              startCCNSimulation();
            }, 100);
          }
        }
      });

      // Dinamik Banner Geliştirmesi
      const bannerWrap = document.getElementById("heroBanner");
      const bannerImg = document.getElementById("heroBannerImg");
      const tagLoc = document.getElementById("banner-tag-location");
      const tagType = document.getElementById("banner-tag-type");
      
      const config = bannerConfigs[targetId] || bannerConfigs.home;
      
      if (bannerWrap && bannerImg) {
        bannerImg.style.transition = "opacity 0.25s ease, transform 8s ease";
        bannerImg.style.opacity = "0.2";
        
        setTimeout(() => {
          bannerImg.src = config.img;
          if (tagLoc) tagLoc.innerHTML = config.location;
          if (tagType) tagType.innerHTML = config.type;
          
          if (config.short) {
            bannerWrap.classList.add("short-banner");
          } else {
            bannerWrap.classList.remove("short-banner");
          }
          
          bannerImg.style.opacity = "1";
        }, 200);
      }
      
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
   3. GEOLOGY: STRATİGRAFİK KAROT SONDAJ SİMÜLATÖRÜ (YENİ)
   ========================================================================== */
function initCoreDrillSimulator() {
  const btnStart = document.getElementById("btn-start-drill");
  const drillBit = document.getElementById("drillBit");
  const layers = document.querySelectorAll(".drill-layer");
  const outputCard = document.getElementById("drillOutputCard");
  const reportBtnWrap = document.getElementById("drillReportBtn");
  const btnReport = document.getElementById("btn-drill-report");

  if (!btnStart) return;

  btnStart.addEventListener("click", () => {
    // Reset state
    btnStart.disabled = true;
    btnStart.innerHTML = '<i class="fa-solid fa-sync fa-spin"></i> Sondaj Sürüyor...';
    if (reportBtnWrap) reportBtnWrap.style.display = "none";
    
    layers.forEach(layer => layer.classList.remove("extracted"));
    drillBit.classList.remove("drilling");
    void drillBit.offsetWidth; // Trigger reflow to restart animation
    drillBit.classList.add("drilling");

    outputCard.innerHTML = `
      <div class="drill-output-content">
        <h4>Sondaj Operasyonu Aktif</h4>
        <p><i class="fa-solid fa-gear fa-spin"></i> Elmas karot ucu göl yatağında ilerliyor...</p>
        <ul>
          <li><strong>Aktif Derinlik:</strong> Sürüyor...</li>
          <li><strong>Formasyon:</strong> Evaporit Tabakası</li>
        </ul>
      </div>
    `;

    // Layer 1: Halite (0-2m) — 1.5s
    setTimeout(() => { layers[0].classList.add("extracted"); updateDrillLog(layers[0]); }, 1500);
    // Layer 2: Gypsum (2-5m) — 3.0s
    setTimeout(() => { layers[1].classList.add("extracted"); updateDrillLog(layers[1]); }, 3000);
    // Layer 3: Clay (5-10m) — 4.5s
    setTimeout(() => { layers[2].classList.add("extracted"); updateDrillLog(layers[2]); }, 4500);
    // Layer 4: Sandstone (10-15m) — 6.0s
    setTimeout(() => { layers[3].classList.add("extracted"); updateDrillLog(layers[3]); }, 6000);
    // Layer 5: Basalt (15-20m) — 7.5s
    setTimeout(() => {
      layers[4] && layers[4].classList.add("extracted");
      layers[4] && updateDrillLog(layers[4]);
      // Completion State
      btnStart.disabled = false;
      btnStart.innerHTML = '<i class="fa-solid fa-check"></i> Sondaj Tamamlandı — Yeniden Başlat';
      if (reportBtnWrap) reportBtnWrap.style.display = "block";
    }, 7500);
  });

  // Layer click handler
  layers.forEach(layer => {
    layer.addEventListener("click", () => {
      if (layer.classList.contains("extracted")) updateDrillLog(layer);
    });
  });

  // Drill report button
  if (btnReport) {
    btnReport.addEventListener("click", () => {
      const reportLines = Array.from(layers)
        .filter(l => l.classList.contains("extracted"))
        .map(l => `<tr>
          <td><strong>${l.getAttribute("data-depth")}</strong></td>
          <td>${l.getAttribute("data-layer")}</td>
          <td>${l.getAttribute("data-age")}</td>
          <td style="color:var(--secondary-cyan);font-size:0.75rem">${l.getAttribute("data-composition")}</td>
        </tr>`).join("");

      const reportHTML = `
        <div style="position:fixed;inset:0;background:rgba(6,9,19,0.9);backdrop-filter:blur(10px);z-index:600;display:flex;align-items:center;justify-content:center;padding:20px" id="drillReportModal">
          <div style="background:var(--bg-dark);border:1px solid var(--border-active);border-radius:16px;padding:32px;max-width:650px;width:100%;max-height:80vh;overflow-y:auto">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px">
              <div>
                <div style="font-size:0.7rem;color:var(--secondary-cyan);font-family:var(--font-title);letter-spacing:2px;text-transform:uppercase;margin-bottom:4px">TATTA-ARCHIVE / Jeoloji Modülü</div>
                <h3 style="font-family:var(--font-title);font-size:1.3rem">Stratigrafik Sondaj Raporu</h3>
              </div>
              <button onclick="document.getElementById('drillReportModal').remove()" style="background:none;border:1px solid var(--border-light);color:var(--text-muted);padding:6px 12px;border-radius:8px;cursor:pointer;font-size:0.82rem">✕ Kapat</button>
            </div>
            <div style="display:flex;gap:20px;margin-bottom:20px;font-size:0.82rem;color:var(--text-secondary)">
              <span><strong>Koordinat:</strong> 38.7°K / 33.4°D</span>
              <span><strong>Toplam Derinlik:</strong> 20m</span>
              <span><strong>Tarih:</strong> ${new Date().toLocaleDateString("tr-TR")}</span>
            </div>
            <table style="width:100%;border-collapse:collapse;font-size:0.8rem">
              <thead>
                <tr style="border-bottom:1px solid var(--border-active)">
                  <th style="text-align:left;padding:8px;color:var(--secondary-cyan);font-family:var(--font-title)">Derinlik</th>
                  <th style="text-align:left;padding:8px;color:var(--secondary-cyan);font-family:var(--font-title)">Formasyon</th>
                  <th style="text-align:left;padding:8px;color:var(--secondary-cyan);font-family:var(--font-title)">Jeolojik Dönem</th>
                  <th style="text-align:left;padding:8px;color:var(--secondary-cyan);font-family:var(--font-title)">Kompozisyon</th>
                </tr>
              </thead>
              <tbody style="color:var(--text-secondary)">${reportLines}</tbody>
            </table>
            <div style="margin-top:16px;font-size:0.72rem;color:var(--text-muted);border-top:1px solid var(--border-light);padding-top:12px">
              Kaynak: Tatta-Archive Jeoloji Simülatörü — Referans: MTA Karot Veri Bankası &amp; DSİ Sondaj Arşivi
            </div>
          </div>
        </div>`;
      document.body.insertAdjacentHTML("beforeend", reportHTML);
    });
  }

  function updateDrillLog(layer) {
    const depth = layer.getAttribute("data-depth");
    const name = layer.getAttribute("data-layer");
    const age = layer.getAttribute("data-age");
    const comp = layer.getAttribute("data-composition");

    outputCard.innerHTML = `
      <div class="drill-output-content">
        <h4>Karot Veri Girişi: ${name}</h4>
        <ul>
          <li><strong>Sondaj Derinliği:</strong> ${depth}</li>
          <li><strong>Jeolojik Dönem:</strong> ${age}</li>
          <li><strong>Mineral Bileşimi:</strong> ${comp}</li>
        </ul>
        <p style="font-size:0.75rem; margin-top:8px; color:var(--text-muted);">Tıklayarak diğer karot katmanlarını inceleyebilirsiniz.</p>
      </div>
    `;
  }
}


/* ==========================================================================
   4. GEOLOGY: SU BÜTÇESİ HESAPLAYICI
   ========================================================================== */
function initWaterBudgetCalculator() {
  const slidePrecip = document.getElementById("slide-precip");
  const slideRivers = document.getElementById("slide-rivers");
  const slideGw = document.getElementById("slide-gw");
  const slideEvap = document.getElementById("slide-evap");

  if (!slidePrecip) return;

  const valPrecip = document.getElementById("val-precip");
  const valRivers = document.getElementById("val-rivers");
  const valGw = document.getElementById("val-gw");
  const valEvap = document.getElementById("val-evap");

  const simResultBox = document.getElementById("simResultBox");
  const simNetVal = document.getElementById("sim-net-val");
  const simNetStatus = document.getElementById("sim-net-status");

  function calculate() {
    const precip = parseInt(slidePrecip.value);
    const rivers = parseInt(slideRivers.value); 
    const gw = parseInt(slideGw.value); 
    const evap = parseInt(slideEvap.value);

    valPrecip.innerText = `${precip} mm`;
    valRivers.innerText = `${rivers}m m³`;
    valGw.innerText = `${(gw/1000).toFixed(1)}b m³`;
    valEvap.innerText = `${evap} mm`;

    const lakeArea = 1000 * 1e6;

    const precipInflow = (precip / 1000) * lakeArea; 
    const riverInflow = rivers * 1e6; 
    const naturalGw = 250 * 1e6;
    const netGwInflow = Math.max(0, naturalGw - (gw * 1e6 * 0.1));

    const totalInflow = precipInflow + riverInflow + netGwInflow;
    const evapOutflow = (evap / 1000) * lakeArea; 

    const netVolumeChange = totalInflow - evapOutflow;
    const netMillionM3 = netVolumeChange / 1e6;

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
   5. ECOLOGY: TROFİK BESİN AĞI INTERACTION (YENİ)
   ========================================================================== */
function initFoodWeb() {
  const nodes = document.querySelectorAll(".web-node");
  const webLines = document.querySelectorAll(".web-line");
  const webNodeInfo = document.getElementById("webNodeInfo");

  if (!nodes || nodes.length === 0) return;

  nodes.forEach(node => {
    node.addEventListener("mouseenter", () => {
      const name = node.getAttribute("data-name");
      const desc = node.getAttribute("data-desc");

      // Highlight target node and update text
      webNodeInfo.innerHTML = `
        <h4>${name}</h4>
        <p>${desc}</p>
      `;

      // Highlight specific connections related to node classes
      webLines.forEach(line => {
        line.style.opacity = "0.1";
        line.style.strokeWidth = "1.5";
      });

      if (node.classList.contains("n-sun")) {
        highlightLine("line-sun-alg");
        highlightLine("line-sun-bact");
        webNodeInfo.style.borderColor = "#f59e0b";
      } else if (node.classList.contains("n-producer")) {
        highlightLine("line-sun-alg");
        highlightLine("line-sun-bact");
        highlightLine("line-alg-artemia");
        highlightLine("line-bact-artemia");
        highlightLine("line-alg-flamingo");
        webNodeInfo.style.borderColor = "var(--primary-pink)";
      } else if (node.classList.contains("n-consumer")) {
        highlightLine("line-alg-artemia");
        highlightLine("line-bact-artemia");
        highlightLine("line-artemia-flamingo");
        webNodeInfo.style.borderColor = "var(--secondary-cyan)";
      } else if (node.classList.contains("n-apex")) {
        highlightLine("line-artemia-flamingo");
        highlightLine("line-alg-flamingo");
        webNodeInfo.style.borderColor = "#f43f5e";
      }
    });

    node.addEventListener("mouseleave", () => {
      // Reset connections opacity
      webLines.forEach(line => {
        line.style.opacity = "0.25";
        line.style.strokeWidth = "2.5";
      });
      webNodeInfo.style.borderColor = "var(--border-light)";
    });
  });

  function highlightLine(id) {
    const line = document.getElementById(id);
    if (line) {
      line.style.opacity = "0.95";
      line.style.strokeWidth = "4";
    }
  }
}

/* ==========================================================================
   6. ECOLOGY: DUNALIELLA SALINA & RENK SİMÜLATÖRÜ
   ========================================================================== */
function initDunaliellaSimulator() {
  const slideSal = document.getElementById("ecology-salinity");
  const slideTemp = document.getElementById("ecology-temp");
  
  if (!slideSal) return;

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

    if (sal < 15) {
      waterSim.style.backgroundColor = "#1e40af"; 
      waterLabel.innerText = "Normal Göl Suyu";
      waterLabel.style.color = "#fff";
      popText.innerText = "Diatomlar, Yeşil Algler";
      processText.innerText = "Tuzluluk düşük olduğu için Dunaliella salina baskın değil. Yeşil alglerin fotosentez döngüsü hakimdir.";
    } 
    else if (sal >= 15 && sal < 25) {
      if (temp > 22) {
        waterSim.style.backgroundColor = "#0d9488"; 
        waterLabel.innerText = "Hafif Yeşil Alg Baskınlığı";
        waterLabel.style.color = "#fff";
        popText.innerText = "Dunaliella salina (Aktif Değil)";
        processText.innerText = "Tuzluluk artıyor. Algler beta-karoten üretmeye başlamadı, klorofil rengi yeşil tonları öne çıkarıyor.";
      } else {
        waterSim.style.backgroundColor = "#2563eb"; 
        waterLabel.innerText = "Klasik Tuzlu Su";
        waterLabel.style.color = "#fff";
        popText.innerText = "Halofit Bakteriler (Pasif)";
        processText.innerText = "Sıcaklık düşük olduğu için hücresel bölünme yavaş, tuz kristalleri çökmeye başlıyor.";
      }
    } 
    else {
      if (temp < 20) {
        waterSim.style.backgroundColor = "#475569"; 
        waterLabel.innerText = "Tuz Kristallenmesi";
        waterLabel.style.color = "#e2e8f0";
        popText.innerText = "Durgun Halobakteriler";
        processText.innerText = "Sıcaklık yetersiz olduğu için alg sentezi durdu. Göl yüzeyi beyaz tuz plakalarıyla kaplanıyor.";
      } 
      else if (temp >= 20 && temp < 30) {
        waterSim.style.backgroundColor = "#f97316"; 
        waterLabel.innerText = "Karotenoid Reaksiyonu";
        waterLabel.style.color = "#fff";
        popText.innerText = "Dunaliella salina (Sentez Evresi)";
        processText.innerText = "Güneş ışığı ve tuz stresi altındaki algler, UV koruması için Beta-Karoten sentezleyerek turuncu renk alır.";
      } 
      else {
        waterSim.style.backgroundColor = "#db2777"; 
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
   7. ECOLOGY: FLAMİNGO STEPPER
   ========================================================================== */
const flamingoSteps = {
  1: {
    title: "Mart - Nisan: Havzaya Varış",
    text: "Akdeniz havzasındaki sulak alanlarda kışlayan flamingo sürüleri, üreme dönemi için gölün güneyindeki kimsenin ulaşamadığı derin ve ıslak çamur adacıklarına göç eder. Bu izolasyon, onları yırtıcılardan korur.",
    period: "İlkbahar Başlangıcı"
  },
  2: {
    title: "Mayıs: Çamur Yuvaların İnşası",
    text: "Eşleşen çiftler, gölün sığ çamurlu zemininden gagalarıyla topladıkları çamurlarla yanardağ kraterini andıran 30-40 cm yüksekliğinde konik yuvalar inşa ederler. Yuvalar yükselen suların yumurtayı ıslatmasını engeller.",
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

  if (!stepBtns || stepBtns.length === 0) return;

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
   8. ECOLOGY: FLORA KATALOĞU
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

  if (!grid) return;

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
   9. MYSTERIES: CHOOSE-YOUR-OWN-ADVENTURE STORY ENGINE (YENİ)
   ========================================================================== */
const cyoaNodes = {
  start: {
    text: "Tuz Gölü çeperindeki kervan yolundasınız. Güneş tepeye ulaştığında, sıcaktan çatlamış zemin üzerinde sendeleyen, eski cübbeli yaşlı bir derviş kervanınızın önüne çıkar. Titreyen sesiyle elindeki boş kabı gösterip 'Sonsuz yoldayım, bir damla su verir misiniz?' der.",
    choices: [
      { text: "Suyunuzu dervişle paylaşın", next: "share" },
      { text: "Dervişe buradaki efsaneleri sorun", next: "ask_legend" },
      { text: "Cimrilik edin, yolunuza devam edin", next: "ignore" }
    ],
    progress: "Giriş - Kervan Yolu"
  },
  share: {
    text: "Derviş suyu içerken yüzü aydınlanır. 'Genç yolcu, bu iyiliğin karşılıksız kalmaz' der. 'Eğer gölün doğu yakasındaki killi tepeciklerden güneye saparsan, antik bir obruk içinde saklanmış, tatlı su sızan gizli bir pınar bulacaksın. Oraya sığın.'",
    choices: [
      { text: "Dervişin tarif ettiği gizli pınarı ara", next: "find_spring" },
      { text: "Normal tuz yolundan hızla ilerlemeyi seç", next: "blessed_road" }
    ],
    progress: "Bölüm 2 - Seçim: Yardım Etmek"
  },
  ask_legend: {
    text: "Derviş gözlerinize derin derin bakar. 'Bu uçsuz bucaksız beyazlık sadece tuzdan ibaret değil' der. 'Yalan söyleyenlerin taşa dönüştüğü, ufuksuz gökte gemilerin uçtuğu bir serap diyarıdır burası. Kalbini temiz tut, doğa yalanı yutar.' Size efsaneyi hatırlatır.",
    choices: [
      { text: "Dervişe inanıp, kervanı güvenli patikaya çekin", next: "safe_path" },
      { text: "Dervişi küçümseyip tuz düzlüğünü diklemesine geçin", next: "storm_danger" }
    ],
    progress: "Bölüm 2 - Seçim: Bilgi Edinmek"
  },
  ignore: {
    text: "Dervişin yakarışına sırt çevirip, 'Suyumuz kervana ancak yeter' deyip geçip gidersiniz. Derviş yavaşça doğrulur, asasını beyaz zemine vurur ve göğe bakıp mırıldanır: 'Cimriliğinle bu kuraklıkta boğul. Sen de kervanın da tuz olasınız!'",
    choices: [
      { text: "Fırtına aniden yükselirken kaçmaya çalışın", next: "legend_ending" }
    ],
    progress: "Bölüm 2 - Seçim: Reddetmek"
  },
  find_spring: {
    text: "Dervişin sözüne güvenip güneye yönelirsiniz. Birkaç saat sonra jipsli tepelerin ardında saklı kalmış, sazlıklarla kaplı tatlı su pınarını (Umut Pınarı) bulursunuz. Develeriniz ve adamlarınız dinlenir. Kervanınız kurtulmuştur.",
    choices: [],
    progress: "Son 1 - Umut Pınarı Keşfi (Mutlu Son)"
  },
  blessed_road: {
    text: "Dervişin duasıyla yolunuza devam edersiniz. Normalde tuz kabuğunun kırıldığı tehlikeli balçık alanlardan geçerken, altınızdaki tuz tabakasının mucizevi şekilde sertleşip kervanı taşıdığını görürsünüz. Kazasız belasız menzile ulaşırsınız.",
    choices: [],
    progress: "Son 2 - Takdis Edilmiş Kervan (Mutlu Son)"
  },
  safe_path: {
    text: "Dervişin uyarısını ciddiye alıp, gölün riskli bataklık orta kısmını dolanarak sert Kaldırım rotasından gidersiniz. Akşama doğru büyük tuz fırtınası başlar ancak siz kayalık çeperde olduğunuz için kervanınız zarar görmez.",
    choices: [],
    progress: "Son 3 - Tedbirli Lider (Güvenli Son)"
  },
  storm_danger: {
    text: "Tuz düzlüğünün ortasında, ufuk çizgisi aniden kaybolur. Hava sıcaklığı artar ve yoğun serap sebebiyle kervanınız yönünü tamamen şaşırır. Gece başlayan tuz ve kum fırtınası kervanınızı yutar, kaybolursunuz.",
    choices: [],
    progress: "Son 4 - Serapta Kayboluş (Başarısız Son)"
  },
  legend_ending: {
    text: "Fırtına devasa tuz tozlarını üzerinize savurur. Görüş açısı sıfıra iner. Derinizdeki ıslaklık tuz kristalleriyle kaplanmaya başlar. Hareket edemez hale gelirsiniz. Kervanınız ve siz, dervişin bedduasıyla sonsuza kadar orada taşlaşıp tuz bloklarına dönüşürsünüz.",
    choices: [],
    progress: "Son 5 - Taşlaşan Kervan (Efsane Sonu)"
  }
};

function initCYOAStory() {
  const textEl = document.getElementById("storyCYOAText");
  const choicesContainer = document.getElementById("cyoaChoices");
  const progressEl = document.getElementById("cyoaProgress");
  const btnReset = document.getElementById("btn-reset-cyoa");

  if (!textEl) return;

  function renderNode(nodeKey) {
    const node = cyoaNodes[nodeKey];
    
    // Text animation effect
    textEl.style.opacity = 0;
    setTimeout(() => {
      textEl.innerText = node.text;
      textEl.style.opacity = 1;
    }, 200);

    progressEl.innerText = node.progress;
    
    // Clear old choices
    choicesContainer.innerHTML = "";

    // If there are choices, render them
    if (node.choices && node.choices.length > 0) {
      node.choices.forEach(choice => {
        const btn = document.createElement("button");
        btn.className = "btn-cyoa";
        btn.innerHTML = `<i class="fa-solid fa-angles-right"></i> ${choice.text}`;
        btn.addEventListener("click", () => renderNode(choice.next));
        choicesContainer.appendChild(btn);
      });
    } else {
      // Ending node
      const endAlert = document.createElement("div");
      endAlert.className = "alert-box";
      endAlert.style.borderColor = "var(--primary-pink)";
      endAlert.innerHTML = `<i class="fa-solid fa-flag-checkered"></i> <span><strong>Hikaye Bitti:</strong> Bu kararla serüveninizi tamamladınız.</span>`;
      choicesContainer.appendChild(endAlert);
    }

    // Set narrative backdrop color depending on state
    const overlay = document.getElementById("narrativeOverlay");
    if (nodeKey === "ignore" || nodeKey === "legend_ending") {
      overlay.style.background = "linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)";
    } else if (nodeKey.includes("spring") || nodeKey.includes("blessed") || nodeKey.includes("safe")) {
      overlay.style.background = "linear-gradient(135deg, rgba(74, 222, 128, 0.1) 0%, rgba(0, 0, 0, 0.3) 100%)";
    } else {
      overlay.style.background = "linear-gradient(135deg, rgba(255, 117, 151, 0.03) 0%, rgba(0, 0, 0, 0) 100%)";
    }
  }

  btnReset.addEventListener("click", () => {
    renderNode("start");
  });

  // Init
  renderNode("start");
}

/* ==========================================================================
   10. MYSTERIES: ATMOSFERİK RADAR SİMÜLATÖRÜ (YENİ)
   ========================================================================== */
let radarInterval = null;
let radarAngle = 0;
const radarTargets = [
  { x: 140, y: 70, id: 1, name: "Grup-Alfa: Mineral Işıldaması", desc: "Kaldırım tuzlası yakınlarında saptanan mavi-yeşil parıltı. Laboratuvar analizi: Kuruyan tuz çatlaklarındaki mineral fosforunun (Potasyum/Lityum) termal uyarılması.", type: "Doğal Lüminesans" },
  { x: 220, y: 150, id: 2, name: "Grup-Beta: Sıcaklık Terselmesi", desc: "Şereflikoçhisar kıyısında havada asılı duran dikey ışık sütunları. Atmosferik analiz: Zemin üstündeki soğuk hava tabakasının yıldız ışıklarını kırarak oluşturduğu serap yansıması (Fata Morgana).", type: "Optik Kırılma" },
  { x: 90, y: 190, id: 3, name: "Grup-Gama: Fay Gazı Yanması", desc: "Cihanbeyli aktif fay zonu üzerinde saptanan anlık kıvılcımlar. Jeolojik analiz: Tektonik yarıklardan sızan eser miktardaki metan gazının statik elektrikle havada parlaması.", type: "Tektonik Parlama" }
];

function initRadarSimulator() {
  const canvas = document.getElementById("radarCanvas");
  if (!canvas) return;

  const ctxR = canvas.getContext("2d");
  const logContent = document.getElementById("radarLog");

  function drawRadar() {
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2;
    const radius = w / 2 - 5;

    ctxR.clearRect(0, 0, w, h);

    // Radar arkaplan ızgaraları
    ctxR.strokeStyle = "rgba(0, 229, 255, 0.15)";
    ctxR.lineWidth = 1;
    
    // Eşmerkezli daireler
    for (let r = radius / 3; r <= radius; r += radius / 3) {
      ctxR.beginPath();
      ctxR.arc(cx, cy, r, 0, Math.PI * 2);
      ctxR.stroke();
    }

    // Koordinat eksenleri
    ctxR.beginPath();
    ctxR.moveTo(5, cy); ctxR.lineTo(w - 5, cy);
    ctxR.moveTo(cx, 5); ctxR.lineTo(cx, h - 5);
    ctxR.stroke();

    // Dönen tarama çizgisi (Radar Sweep)
    radarAngle = (radarAngle + 0.02) % (Math.PI * 2);
    
    const sx = cx + Math.cos(radarAngle) * radius;
    const sy = cy + Math.sin(radarAngle) * radius;

    // Tarama kuyruğu (Glow effect)
    const sweepGrad = ctxR.createRadialGradient(cx, cy, 0, cx, cy, radius);
    sweepGrad.addColorStop(0, "rgba(0, 229, 255, 0)");
    sweepGrad.addColorStop(1, "rgba(0, 229, 255, 0.1)");

    ctxR.fillStyle = sweepGrad;
    ctxR.beginPath();
    ctxR.moveTo(cx, cy);
    ctxR.arc(cx, cy, radius, radarAngle - 0.3, radarAngle);
    ctxR.lineTo(cx, cy);
    ctxR.fill();

    // Ana tarama çizgisi
    ctxR.strokeStyle = "rgba(0, 229, 255, 0.8)";
    ctxR.lineWidth = 1.5;
    ctxR.beginPath();
    ctxR.moveTo(cx, cy);
    ctxR.lineTo(sx, sy);
    ctxR.stroke();

    // Hedef sinyallerin (Blips) çizilmesi
    radarTargets.forEach(target => {
      // Tarayıcının hedefe olan açısına göre yanıp sönme parlaklığı
      const targetAngle = Math.atan2(target.y - cy, target.x - cx);
      const angleDiff = Math.abs(radarAngle - (targetAngle < 0 ? targetAngle + Math.PI * 2 : targetAngle));

      let opacity = 0;
      if (angleDiff < 0.3) {
        opacity = 1.0 - (angleDiff / 0.3); // Tarama anında parlak blip
      } else {
        opacity = 0.2; // Sabit sönük ışık
      }

      ctxR.fillStyle = `rgba(255, 117, 151, ${opacity})`;
      ctxR.beginPath();
      ctxR.arc(target.x, target.y, 5, 0, Math.PI * 2);
      ctxR.fill();

      // Dış halka parlaması
      if (opacity > 0.5) {
        ctxR.strokeStyle = `rgba(255, 117, 151, ${opacity - 0.2})`;
        ctxR.beginPath();
        ctxR.arc(target.x, target.y, 10, 0, Math.PI * 2);
        ctxR.stroke();
      }
    });
  }

  // Click collision detection
  canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const mx = e.clientX - rect.left;
    const my = e.clientY - rect.top;

    let clickedTarget = null;
    radarTargets.forEach(target => {
      const dist = Math.sqrt((mx - target.x)**2 + (my - target.y)**2);
      if (dist < 12) {
        clickedTarget = target;
      }
    });

    if (clickedTarget) {
      logContent.innerHTML = `
        <div class="radar-target-tag"><i class="fa-solid fa-circle-dot"></i> DETECTED: ${clickedTarget.name}</div>
        <div style="margin-top: 6px;"><strong>Anomali Sınıfı:</strong> ${clickedTarget.type}</div>
        <div style="margin-top: 4px; font-size:0.75rem; color:var(--text-secondary);">${clickedTarget.desc}</div>
      `;
    }
  });

  // Start Animation
  if (radarInterval) clearInterval(radarInterval);
  radarInterval = setInterval(drawRadar, 30);
}

function startRadarSweep() {
  initRadarSimulator();
}

/* ==========================================================================
   11. MYSTERIES: SERAP & UZAMSAL YÖN KAYBI KANVAS SİMÜLATÖRÜ
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

    // 1. Gökyüzü
    let skyGradient = ctx.createLinearGradient(0, 0, 0, h/2);
    skyGradient.addColorStop(0, "#0284c7");
    skyGradient.addColorStop(1, "#bae6fd");
    ctx.fillStyle = skyGradient;
    ctx.fillRect(0, 0, w, h/2);

    // 2. Yeryüzü / Tuz Düzlüğü
    ctx.fillStyle = "#f8fafc";
    ctx.fillRect(0, h/2, w, h/2);

    // 3. Yansıma
    if (reflection > 0) {
      let refOpacity = reflection / 100 * 0.7;
      let refGradient = ctx.createLinearGradient(0, h/2, 0, h);
      refGradient.addColorStop(0, `rgba(186, 230, 253, ${refOpacity})`);
      refGradient.addColorStop(1, `rgba(2, 132, 243, ${refOpacity * 0.4})`);
      ctx.fillStyle = refGradient;
      ctx.fillRect(0, h/2, w, h/2);
    }

    // 4. Ufuk Çizgisi Bulanıklaştırma (Serap)
    if (haze > 0) {
      let blurHeight = (haze / 100) * 35; 
      let horizonGrad = ctx.createLinearGradient(0, h/2 - blurHeight/2, 0, h/2 + blurHeight/2);
      
      horizonGrad.addColorStop(0, "rgba(186, 230, 253, 1)");
      horizonGrad.addColorStop(0.5, `rgba(248, 250, 252, ${1 - (haze/150)})`); 
      horizonGrad.addColorStop(1, "rgba(248, 250, 252, 1)");

      ctx.fillStyle = horizonGrad;
      ctx.fillRect(0, h/2 - blurHeight/2, w, blurHeight);

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
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, h/2);
      ctx.lineTo(w, h/2);
      ctx.stroke();
    }

    drawWalker(w/2 - 40, h/2 + 20, 10, "#1e293b"); 
    drawWalker(w/2 + 60, h/2 + 5, 4, "#64748b");   
    
    if (reflection > 20) {
      let refOpacity = (reflection/100) * 0.5;
      drawWalkerReflected(w/2 - 40, h/2 + 20, 10, refOpacity);
      drawWalkerReflected(w/2 + 60, h/2 + 5, 4, refOpacity * 0.5);
    }
  }

  function drawWalker(x, y, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x - 1, y - height * 0.8, 2, height * 0.8);
    ctx.beginPath();
    ctx.arc(x, y - height + 1, height * 0.2, 0, Math.PI * 2);
    ctx.fill();
  }

  function drawWalkerReflected(x, y, height, opacity) {
    ctx.fillStyle = `rgba(30, 41, 59, ${opacity})`;
    ctx.fillRect(x - 0.8, y, 1.6, height * 0.5);
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
    illusionCanvas.width = rect.width - 2; 
    if (hazeSlider) {
      hazeSlider.dispatchEvent(new Event("input"));
    }
  }
}

/* ==========================================================================
   12. TOURISM: ROTA PLANLAYICISI
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
  
  if (!routeOptions || routeOptions.length === 0) return;

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
   13. TOURISM: SKY MİRROR TAHMİN EDİCİ (YENİ)
   ========================================================================== */
function initSkyMirrorPredictor() {
  const selectMonth = document.getElementById("predict-month");
  const slideWind = document.getElementById("predict-wind");
  const slideCloud = document.getElementById("predict-cloud");

  if (!selectMonth) return;

  const valWind = document.getElementById("val-predict-wind");
  const valCloud = document.getElementById("val-predict-cloud");
  const pctDisplay = document.getElementById("pred-percentage-val");
  const lblDisplay = document.getElementById("pred-label-text");
  const resultBox = document.getElementById("predictionResult");

  function calculatePrediction() {
    const month = parseInt(selectMonth.value);
    const wind = parseInt(slideWind.value);
    const cloud = parseInt(slideCloud.value);

    valWind.innerText = `${wind} km/s`;
    valCloud.innerText = `%${cloud}`;

    // Prediction math
    let monthFactor = 0;
    if (month === 4) monthFactor = 1.0; // Optimum (April-May)
    else if (month === 1) monthFactor = 0.55; // Too deep water
    else if (month === 7) monthFactor = 0.15; // Too dry
    else if (month === 10) monthFactor = 0.5; // Autumn rain

    let windFactor = 0;
    if (wind < 5) windFactor = 1.0;
    else if (wind < 10) windFactor = 0.9;
    else if (wind < 15) windFactor = 0.5;
    else if (wind < 22) windFactor = 0.15;
    else windFactor = 0.0; // Waves shatter the mirror

    let cloudFactor = 0;
    if (cloud >= 20 && cloud <= 50) cloudFactor = 1.0; // Dramatic reflection clouds
    else if (cloud < 20) cloudFactor = 0.8; // Pure blue sky mirror
    else if (cloud > 50 && cloud < 75) cloudFactor = 0.65;
    else cloudFactor = 0.4; // Dark overcast

    const probability = Math.round(monthFactor * windFactor * cloudFactor * 100);
    
    // UI Output Updates
    pctDisplay.innerText = `${probability}%`;

    if (probability > 75) {
      lblDisplay.innerHTML = "<strong>Kusursuz Ayna Yansıması:</strong> Rüzgar ideal, su kalınlığı mükemmel! Harika yansıma fotoğrafları yakalayabilirsiniz.";
      resultBox.style.borderColor = "var(--secondary-cyan)";
      pctDisplay.style.color = "var(--secondary-cyan)";
    } else if (probability > 40) {
      lblDisplay.innerHTML = "<strong>Kısmi / Dalgalı Yansıma:</strong> Su var ancak hafif rüzgar veya yüksek bulutluluk yansıma netliğini bozuyor.";
      resultBox.style.borderColor = "var(--primary-pink)";
      pctDisplay.style.color = "var(--primary-pink)";
    } else {
      lblDisplay.innerHTML = "<strong>Ayna Efekti Yok:</strong> Göl tabanı ya tamamen kuru durumda ya da rüzgar hızı yüzeyi dalgalandırıyor.";
      resultBox.style.borderColor = "var(--border-light)";
      pctDisplay.style.color = "var(--text-muted)";
    }
  }

  [selectMonth, slideWind, slideCloud].forEach(el => {
    el.addEventListener("input", calculatePrediction);
    el.addEventListener("change", calculatePrediction);
  });

  calculatePrediction();
}

/* ==========================================================================
   14. TOURISM: FOTOĞRAF GALERİSİ SLIDE
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
  if (!slideImgBox) return;

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
   15. DATA: MULTİSPEKTRAL UYDU KARŞILAŞTIRICI (YENİ)
   ========================================================================== */
const satelliteBands = {
  rgb: {
    name: "True Color (Doğal Renk - RGB)",
    bg: "radial-gradient(circle, #f8fafc 40%, #bae6fd 60%, #a16207 90%)",
    filter: "contrast(1.1) saturate(1)"
  },
  nir: {
    name: "False Color (Kızılötesi - B8,B4,B3)",
    bg: "radial-gradient(circle, #e2e8f0 30%, #f472b6 55%, #b91c1c 85%)",
    filter: "contrast(1.3) hue-rotate(330deg) saturate(1.5)"
  },
  ndwi: {
    name: "NDWI Su İndeksi (Kanal Ayrışım)",
    bg: "radial-gradient(circle, #0f172a 45%, #00e5ff 48%, #1e293b 80%)",
    filter: "contrast(1.5) brightness(1.1)"
  }
};

function initSatelliteComparator() {
  const selectBtns = document.querySelectorAll(".sat-selector-btn");
  const satImageSim = document.getElementById("satImageSim");
  const satLabelTag = document.getElementById("satLabelTag");

  if (!selectBtns || selectBtns.length === 0) return;

  selectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      selectBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const bandKey = btn.getAttribute("data-band");
      const band = satelliteBands[bandKey];

      // Simulated scanning transition logic
      satImageSim.style.filter = "blur(8px)";
      
      setTimeout(() => {
        satImageSim.style.background = band.bg;
        satImageSim.style.filter = band.filter;
        satLabelTag.innerText = band.name;
      }, 200);
    });
  });
}

/* ==========================================================================
   16. DATA: DARALMA SİMÜLATÖRÜ & CHART.JS
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
  if (!slider) return;

  const yearDisplay = document.getElementById("sim-year-display");
  const areaDisplay = document.getElementById("sim-area-display");
  const lakePath = document.getElementById("svg-shrink-lake");
  const sinkholesGroup = document.getElementById("svg-sinkholes");
  const btnExport = document.getElementById("btn-export-json");

  function updateVisuals(year) {
    const data = shrinkageHistory[year];
    
    yearDisplay.innerText = year;
    areaDisplay.innerText = `${data.area} km²`;
    lakePath.style.transform = `scale(${data.scale})`;

    sinkholesGroup.innerHTML = "";
    const pointsCount = Math.min(200, Math.floor(data.sinkholes / 3));
    
    for (let i = 0; i < pointsCount; i++) {
      const angle = (i * 2.39996) * (Math.PI / 180); 
      const radius = Math.sqrt(i) * 5.5 + 40; 
      
      const cx = 150 + Math.cos(angle) * radius * 0.8;
      const cy = 150 + Math.sin(angle) * radius * 0.9;
      
      if (cx > 50 && cx < 250 && cy > 50 && cy < 250) {
        const circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
        circle.setAttribute("cx", cx);
        circle.setAttribute("cy", cy);
        circle.setAttribute("class", "sinkhole");
        sinkholesGroup.appendChild(circle);
      }
    }
  }

  slider.addEventListener("input", (e) => {
    updateVisuals(e.target.value);
  });

  updateVisuals(1975);
  renderChart();

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

/* ==========================================================================
   17. OBRUK RİSK ZONE OVERLAY TOGGLE
   ========================================================================== */
function initRiskOverlay() {
  const btn = document.getElementById("btnRiskOverlay");
  const overlay = document.getElementById("svg-risk-overlay");
  if (!btn || !overlay) return;

  let active = false;
  btn.addEventListener("click", () => {
    active = !active;
    overlay.style.display = active ? "block" : "none";
    btn.classList.toggle("active", active);
    btn.innerHTML = active
      ? '<i class="fa-solid fa-eye-slash"></i> Risk Zonlarını Gizle'
      : '<i class="fa-solid fa-layer-group"></i> Risk Zonları';
  });
}

/* ==========================================================================
   18. İKLİM PROJEKSİYON GRAFİĞİ (YENİ)
   ========================================================================== */
let projectionChartInstance = null;

const projectionData = {
  labels: [2025, 2030, 2035, 2040, 2045, 2050, 2055],
  sustainable: [520, 535, 548, 558, 566, 574, 580],
  rcp45:       [520, 495, 465, 430, 385, 345, 310],
  rcp85:       [520, 470, 408, 330, 245, 175, 120]
};

function buildProjectionDatasets(scenario) {
  const all = [
    {
      label: 'Sürdürülebilir Senaryo',
      data: projectionData.sustainable,
      borderColor: '#4ade80',
      backgroundColor: 'rgba(74,222,128,0.08)',
      tension: 0.4, borderWidth: 2.5, fill: true,
      hidden: scenario !== 'all' && scenario !== 'sustainable'
    },
    {
      label: 'RCP 4.5 (Orta)',
      data: projectionData.rcp45,
      borderColor: '#fbbf24',
      backgroundColor: 'rgba(251,191,36,0.08)',
      tension: 0.4, borderWidth: 2.5, fill: true,
      hidden: scenario !== 'all' && scenario !== 'rcp45'
    },
    {
      label: 'RCP 8.5 (Aşırı)',
      data: projectionData.rcp85,
      borderColor: '#ef4444',
      backgroundColor: 'rgba(239,68,68,0.08)',
      tension: 0.4, borderWidth: 2.5, fill: true,
      hidden: scenario !== 'all' && scenario !== 'rcp85'
    }
  ];
  return all;
}

function initClimateProjection() {
  const ctx = document.getElementById("projectionChart");
  if (!ctx) return;

  const scenBtns = document.querySelectorAll(".btn-scenario");

  projectionChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: projectionData.labels,
      datasets: buildProjectionDatasets('all')
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: { mode: 'index', intersect: false },
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Outfit', size: 11 } }
        },
        tooltip: {
          callbacks: {
            label: (ctx) => ` ${ctx.dataset.label}: ${ctx.parsed.y} km²`
          }
        }
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#94a3b8', font: { family: 'Outfit' } }
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.05)' },
          ticks: { color: '#94a3b8', font: { family: 'Outfit' } },
          title: { display: true, text: 'Göl Alanı (km²)', color: '#94a3b8' },
          min: 0,
          max: 650
        }
      }
    }
  });

  scenBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      scenBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const scenario = btn.getAttribute('data-scenario');
      // Update chart dataset visibility
      projectionChartInstance.data.datasets.forEach(ds => {
        if (scenario === 'all') {
          ds.hidden = false;
        } else if (scenario === 'sustainable') {
          ds.hidden = !ds.label.includes('Sürdürülebilir');
        } else if (scenario === 'rcp45') {
          ds.hidden = !ds.label.includes('4.5');
        } else if (scenario === 'rcp85') {
          ds.hidden = !ds.label.includes('8.5');
        }
      });
      projectionChartInstance.update();
    });
  });
}

/* ==========================================================================
   19. MÜHENDİSLİK: YEŞİL HİDROJEN SİMÜLATÖRÜ
   ========================================================================== */
let cavernInterval = null;
let cavernParticles = [];
let cavernState = {
  pressure: 12.0,      // in MPa
  temperature: 35.0,   // in °C
  storedMass: 820.0,   // in tons
  volume: 100000,      // in m³
  injectionRate: 15,   // kg/s
  withdrawalRate: 0,   // kg/s
};

function initHydrogenCavernSimulator() {
  const slideInject = document.getElementById("cavern-inject");
  const slideWithdraw = document.getElementById("cavern-withdraw");
  const slideVolume = document.getElementById("cavern-volume");

  if (!slideInject) return;

  const valInject = document.getElementById("val-cavern-inject");
  const valWithdraw = document.getElementById("val-cavern-withdraw");
  const valVolume = document.getElementById("val-cavern-volume");

  function updateParams() {
    cavernState.injectionRate = parseFloat(slideInject.value);
    cavernState.withdrawalRate = parseFloat(slideWithdraw.value);
    cavernState.volume = parseFloat(slideVolume.value);

    valInject.innerText = `${cavernState.injectionRate} kg/s`;
    valWithdraw.innerText = `${cavernState.withdrawalRate} kg/s`;
    valVolume.innerText = `${cavernState.volume.toLocaleString("tr-TR")} m³`;
  }

  [slideInject, slideWithdraw, slideVolume].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  updateParams();
  startCavernSimulation();
}

function startCavernSimulation() {
  const canvas = document.getElementById("cavernCanvas");
  if (!canvas) return;

  const ctxC = canvas.getContext("2d");
  
  // Initialize particles
  cavernParticles = [];
  for (let i = 0; i < 60; i++) {
    cavernParticles.push(createCavernParticle(canvas.width, canvas.height));
  }

  if (cavernInterval) clearInterval(cavernInterval);
  
  cavernInterval = setInterval(() => {
    const dt = 0.1;
    
    // Mass conservation dM/dt = inject - withdraw
    const netFlowRateKg = cavernState.injectionRate - cavernState.withdrawalRate;
    cavernState.storedMass += (netFlowRateKg / 1000) * dt;
    const maxMassCapacity = cavernState.volume * 0.015;
    cavernState.storedMass = Math.max(150.0, Math.min(maxMassCapacity, cavernState.storedMass));

    // Joule-Thomson heating on expansion (H2 anomaly) + compression heating
    const dT_comp = 0.008 * cavernState.injectionRate * dt;
    const dT_JT = 0.005 * cavernState.withdrawalRate * dt;
    const dT_rock = -0.04 * (cavernState.temperature - 35.0) * dt;
    
    cavernState.temperature += (dT_comp + dT_JT + dT_rock);
    cavernState.temperature = Math.max(12.0, Math.min(65.0, cavernState.temperature));

    // Pressure calculation: P(MPa) = Mass * 4.124 * (Temp_C + 273.15) / Volume
    const tempK = cavernState.temperature + 273.15;
    cavernState.pressure = (cavernState.storedMass * 4.124 * tempK) / cavernState.volume;
    
    const energyGWh = cavernState.storedMass * 0.03333;

    // Update UI telemetry
    const displayPressure = document.getElementById("cavern-pressure");
    const displayTemp = document.getElementById("cavern-temp");
    const displayMass = document.getElementById("cavern-mass");
    const displayEnergy = document.getElementById("cavern-energy");
    const displayJtEffect = document.getElementById("cavern-jt-effect");
    const stabilityAlert = document.getElementById("cavernStabilityAlert");

    if (displayPressure) displayPressure.innerText = `${cavernState.pressure.toFixed(1)} MPa`;
    if (displayTemp) displayTemp.innerText = `${cavernState.temperature.toFixed(1)} °C`;
    if (displayMass) displayMass.innerText = `${Math.round(cavernState.storedMass)} ton`;
    if (displayEnergy) displayEnergy.innerText = `${energyGWh.toFixed(1)} GWh`;

    if (displayJtEffect) {
      if (cavernState.withdrawalRate > 0) {
        displayJtEffect.innerHTML = '<span style="color:var(--primary-pink)"><i class="fa-solid fa-arrow-trend-up"></i> JT Isınması Aktif</span>';
      } else if (cavernState.injectionRate > 0) {
        displayJtEffect.innerHTML = '<span style="color:#fbbf24"><i class="fa-solid fa-arrow-trend-up"></i> Kompresyon Isısı</span>';
      } else {
        displayJtEffect.innerHTML = '<span style="color:var(--text-muted)">Termal Denge Durumu</span>';
      }
    }

    if (stabilityAlert) {
      if (cavernState.pressure < 6.0) {
        stabilityAlert.className = "cavern-stability-alert danger";
        stabilityAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:#ef4444"></i> <span><strong>KRİTİK HATA:</strong> Basınç çok düşük (<6 MPa)! Kaverna duvarları çökme (tuz sünmesi) riski altında!</span>';
      } else if (cavernState.pressure > 18.0) {
        stabilityAlert.className = "cavern-stability-alert danger";
        stabilityAlert.innerHTML = '<i class="fa-solid fa-triangle-exclamation" style="color:#ef4444"></i> <span><strong>KRİTİK HATA:</strong> Basınç çok yüksek (>18 MPa)! Kaya tuzu çatlama (hidrolik kırılma) riski altında!</span>';
      } else if (cavernState.pressure < 8.0) {
        stabilityAlert.className = "cavern-stability-alert warning";
        stabilityAlert.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color:#fbbf24"></i> <span><strong>UYARI:</strong> Düşük basınç seviyesi. Enjeksiyon takviyesi yapılması önerilir.</span>';
      } else if (cavernState.pressure > 16.0) {
        stabilityAlert.className = "cavern-stability-alert warning";
        stabilityAlert.innerHTML = '<i class="fa-solid fa-circle-exclamation" style="color:#fbbf24"></i> <span><strong>UYARI:</strong> Yüksek basınç seviyesi. Gaz çekimi yapılması önerilir.</span>';
      } else {
        stabilityAlert.className = "cavern-stability-alert";
        stabilityAlert.innerHTML = '<i class="fa-solid fa-circle-check" style="color:#4ade80"></i> <span><strong>Kaverna Durumu:</strong> Stabil ve Güvenli. Mekanik bütünlük korunuyor.</span>';
      }
    }

    // Render Canvas
    const w = canvas.width;
    const h = canvas.height;
    const cx = w / 2;
    const cy = h / 2 + 10;
    
    ctxC.clearRect(0, 0, w, h);

    // Draw Salt Rock Background
    ctxC.fillStyle = "#111827";
    ctxC.fillRect(0, 0, w, h);
    
    ctxC.fillStyle = "rgba(43, 35, 52, 0.4)";
    ctxC.fillRect(0, 40, w, 15);
    ctxC.fillRect(0, 160, w, 20);

    // Draw descent casing pipe
    ctxC.strokeStyle = "#94a3b8";
    ctxC.lineWidth = 4;
    ctxC.beginPath();
    ctxC.moveTo(cx, 0);
    ctxC.lineTo(cx, cy - 40);
    ctxC.stroke();
    
    ctxC.strokeStyle = cavernState.injectionRate > 0 ? "rgba(0, 229, 255, 0.6)" : (cavernState.withdrawalRate > 0 ? "rgba(255, 117, 151, 0.6)" : "transparent");
    ctxC.lineWidth = 1.5;
    ctxC.beginPath();
    ctxC.moveTo(cx, 0);
    ctxC.lineTo(cx, cy - 40);
    ctxC.stroke();

    const ry = 55;
    const getRx = (yVal) => {
      const relativeY = (yVal - (cy - ry)) / (2 * ry);
      if (relativeY < 0 || relativeY > 1) return 0;
      return 50 * Math.sin(relativeY * Math.PI) * (0.3 + relativeY * 0.7);
    };

    ctxC.beginPath();
    ctxC.moveTo(cx, cy - ry);
    for (let y = cy - ry; y <= cy + ry; y += 2) {
      ctxC.lineTo(cx + getRx(y), y);
    }
    for (let y = cy + ry; y >= cy - ry; y -= 2) {
      ctxC.lineTo(cx - getRx(y), y);
    }
    ctxC.closePath();
    
    const normTemp = (cavernState.temperature - 12.0) / 53.0;
    const glowR = Math.round(normTemp * 255);
    const glowB = Math.round((1 - normTemp) * 255);
    const glowColor = `rgba(${glowR}, 100, ${glowB}, 0.15)`;
    const strokeColor = `rgba(${glowR}, 180, ${glowB}, 0.6)`;
    
    ctxC.fillStyle = glowColor;
    ctxC.fill();
    
    ctxC.strokeStyle = strokeColor;
    ctxC.lineWidth = 2.5;
    ctxC.stroke();

    const particleSpeed = 0.5 + (cavernState.temperature / 15);
    const activeParticleCount = Math.min(cavernParticles.length, Math.floor(cavernState.pressure * 4));

    for (let i = 0; i < activeParticleCount; i++) {
      const p = cavernParticles[i];
      
      p.x += p.vx * particleSpeed;
      p.y += p.vy * particleSpeed;

      const currentRx = getRx(p.y);
      const isInside = Math.abs(p.x - cx) < currentRx && p.y > cy - ry && p.y < cy + ry - 5;
      
      if (!isInside) {
        p.y = cy - ry + 15 + Math.random() * (2 * ry - 30);
        p.x = cx + (Math.random() - 0.5) * 2 * getRx(p.y) * 0.8;
        p.vx = (Math.random() - 0.5) * 1.5;
        p.vy = (Math.random() - 0.5) * 1.5;
      }

      ctxC.fillStyle = `rgba(0, 229, 255, ${p.alpha})`;
      ctxC.beginPath();
      ctxC.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctxC.fill();
    }

    if (cavernState.injectionRate > 0) {
      const offset = (Date.now() / 25) % 30;
      ctxC.fillStyle = "rgba(0, 229, 255, 0.8)";
      for (let y = offset; y < cy - 40; y += 30) {
        ctxC.beginPath();
        ctxC.moveTo(cx - 3, y);
        ctxC.lineTo(cx + 3, y);
        ctxC.lineTo(cx, y + 5);
        ctxC.fill();
      }
    } else if (cavernState.withdrawalRate > 0) {
      const offset = (Date.now() / 25) % 30;
      ctxC.fillStyle = "rgba(255, 117, 151, 0.8)";
      for (let y = cy - 40 - offset; y > 0; y -= 30) {
        ctxC.beginPath();
        ctxC.moveTo(cx - 3, y);
        ctxC.lineTo(cx + 3, y);
        ctxC.lineTo(cx, y - 5);
        ctxC.fill();
      }
    }

  }, 50);
}

function createCavernParticle(w, h) {
  return {
    x: w / 2,
    y: h / 2,
    vx: (Math.random() - 0.5) * 1.5,
    vy: (Math.random() - 0.5) * 1.5,
    r: 1 + Math.random() * 2,
    alpha: 0.3 + Math.random() * 0.6
  };
}

/* ==========================================================================
   20. MÜHENDİSLİK: LİTYUM GERİ KAZANIM SİMÜLATÖRÜ
   ========================================================================== */
let lithiumCurrentStage = 1;
const lithiumStages = {
  1: {
    title: "Aşama 1: Güneş Enerjili Doğal Buharlaştırma",
    desc: "Göl yatağındaki evaporasyon havuzlarında, sığ tuzlu su güneş ısısıyla 10x-25x oranında konsantre edilir. Yoğun sodyum klorür (sofra tuzu) kristalleri tabana çökerken, lityum bakımından zenginleşen acı su (mother-liquor) üst katmanda izole edilir.",
    buttonText: "2. Safsızlık Arıtma Aşamasına Geç"
  },
  2: {
    title: "Aşama 2: Kimyasal Safsızlık Çöktürme",
    desc: "Elde edilen yoğun acı su içerisindeki yüksek kalsiyum ($Ca^{2+}$) ve magnezyum ($Mg^{2+}$) iyonları, kireç ve sodyum karbonat ($Na_2CO_3$) reaktifleri eklenerek çöktürülür. Doğru reaktif dozajı (>99% giderim) lityumun saflık kalitesi için kritiktir.",
    buttonText: "3. Resin Adsorpsiyon Aşamasına Geç"
  },
  3: {
    title: "Aşama 3: Seçici Adsorpsiyon (Resin Kolonu)",
    desc: "Safsızlıklardan arınmış çözelti, lityumu seçici olarak yakalayan moleküler elekli reçine (resin) kolonlarından geçirilir. Lityum iyonları reçineye tutunurken diğer iyonlar deşarj edilir. Daha sonra asidik yıkama ile lityum konsantresi kolonlardan geri kazanılır.",
    buttonText: "4. Kristalizasyon Aşamasına Geç"
  },
  4: {
    title: "Aşama 4: Nihai Ürün Kristalizasyonu",
    desc: "Yazılı kimyasal reaksiyonla, sodyum karbonat eklenerek 90°C sıcaklıkta lityum karbonat ($Li_2CO_3$) çökeltilir. Elde edilen kristaller yıkanır, kurutulur ve batarya kalitesinde (%99.5+) ürün olarak paketlenir.",
    buttonText: "Prosesi Sıfırla ve Baştan Başlat"
  }
};

function initLithiumRecoverySimulator() {
  const slideEvap = document.getElementById("li-evap");
  const slideDosing = document.getElementById("li-dosing");
  const slideAdsorb = document.getElementById("li-adsorb");

  if (!slideEvap) return;

  const btnNext = document.getElementById("btn-next-li-stage");
  const stageTitle = document.getElementById("li-stage-title");
  const stageDesc = document.getElementById("li-stage-desc");

  const displayYield = document.getElementById("li-yield");
  const displayPurity = document.getElementById("li-purity");
  const displaySustain = document.getElementById("li-sustain");

  const valEvap = document.getElementById("val-li-evap");
  const valDosing = document.getElementById("val-li-dosing");
  const valAdsorb = document.getElementById("val-li-adsorb");

  function calculateLithiumMetrics() {
    const evap = parseFloat(slideEvap.value);
    const dosing = parseFloat(slideDosing.value);
    const adsorb = parseFloat(slideAdsorb.value);

    valEvap.innerText = `${evap}x`;
    valDosing.innerText = `%${dosing}`;
    valAdsorb.innerText = `%${adsorb}`;

    const baselineYield = 1.6;
    const finalYield = (evap / 10.0) * (adsorb / 85.0) * baselineYield * (dosing >= 100 ? 1.0 : (dosing/100));
    
    const purityLossDosing = Math.abs(100 - dosing) * 0.08;
    const purityLossSelect = (98 - adsorb) * 0.04;
    const finalPurity = Math.max(92.0, Math.min(99.9, 99.6 - purityLossDosing - purityLossSelect));

    const sustainCostEvap = (evap - 5) * 1.5;
    const sustainCostDosing = Math.abs(100 - dosing) * 2.0;
    const sustainCostSelect = (98 - adsorb) * 0.8;
    const sustainabilityScore = Math.round(Math.max(30, Math.min(100, 95 - sustainCostEvap - sustainCostDosing - sustainCostSelect)));

    if (displayYield) displayYield.innerText = `${finalYield.toFixed(1)} kg/gün`;
    if (displayPurity) {
      displayPurity.innerText = `${finalPurity.toFixed(2)}%`;
      if (finalPurity >= 99.5) {
        displayPurity.style.color = "var(--secondary-cyan)";
      } else {
        displayPurity.style.color = "var(--primary-pink)";
      }
    }
    if (displaySustain) {
      displaySustain.innerText = `${sustainabilityScore} / 100`;
      if (sustainabilityScore > 75) {
        displaySustain.style.color = "#4ade80";
      } else if (sustainabilityScore > 50) {
        displaySustain.style.color = "#fbbf24";
      } else {
        displaySustain.style.color = "#ef4444";
      }
    }
  }

  function handleStageChange() {
    if (lithiumCurrentStage < 4) {
      lithiumCurrentStage++;
    } else {
      lithiumCurrentStage = 1;
    }

    const stages = document.querySelectorAll(".process-stage");
    stages.forEach((stage, idx) => {
      const stageIdx = idx + 1;
      stage.classList.remove("active", "completed");
      if (stageIdx === lithiumCurrentStage) {
        stage.classList.add("active");
      } else if (stageIdx < lithiumCurrentStage) {
        stage.classList.add("completed");
      }
    });

    const config = lithiumStages[lithiumCurrentStage];
    if (stageTitle) stageTitle.innerText = config.title;
    if (stageDesc) stageDesc.innerText = config.desc;
    if (btnNext) btnNext.innerHTML = `<i class="fa-solid fa-arrow-right"></i> ${config.buttonText}`;
  }

  [slideEvap, slideDosing, slideAdsorb].forEach(slider => {
    slider.addEventListener("input", calculateLithiumMetrics);
  });

  if (btnNext) {
    btnNext.addEventListener("click", handleStageChange);
  }

  calculateLithiumMetrics();
}

/* ==========================================================================
   21. VİZYON 2056: GELECEK PROJEKSİYONLARI KOKPİTİ
   ========================================================================== */
let triggerSkyCanvasRedraw = null;
let activeConstellation = null;
const constellations = [
  {
    name: "Büyük Ayı (Ursa Major)",
    stars: [
      {x: 70, y: 35}, {x: 100, y: 32}, {x: 120, y: 40}, {x: 135, y: 55},
      {x: 130, y: 75}, {x: 160, y: 78}, {x: 165, y: 58}, {x: 135, y: 55}
    ]
  },
  {
    name: "Kraliçe (Cassiopeia)",
    stars: [
      {x: 280, y: 25}, {x: 295, y: 38}, {x: 310, y: 28}, {x: 330, y: 42}, {x: 345, y: 30}
    ]
  },
  {
    name: "Küçük Ayı & Polaris (Ursa Minor)",
    stars: [
      {x: 200, y: 45, main: true, label: "Polaris (Kutup Yıldızı)"}, {x: 185, y: 60}, {x: 175, y: 68}, 
      {x: 170, y: 80}, {x: 182, y: 92}, {x: 195, y: 90}, {x: 185, y: 80}
    ]
  }
];

let randomStars = [];
function generateRandomStars() {
  randomStars = [];
  for (let i = 0; i < 180; i++) {
    randomStars.push({
      x: Math.random() * 600,
      y: Math.random() * 110, 
      size: Math.random() * 1.2 + 0.3,
      twinkle: Math.random() > 0.5
    });
  }
}

function resizeSkyCanvas() {
  const canvas = document.getElementById("skyCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width - 2;
    if (triggerSkyCanvasRedraw) {
      triggerSkyCanvasRedraw();
    }
  }
}

function initVision2056() {
  const cropReformSlider = document.getElementById("vision-crop-reform");
  const wellControlSlider = document.getElementById("vision-well-control");
  const algaeCaptureSlider = document.getElementById("vision-algae-capture");
  const lightPollutionSlider = document.getElementById("vision-light-pollution");
  const filterRateSlider = document.getElementById("vision-filter-rate");

  if (!cropReformSlider) return;

  const valCrop = document.getElementById("val-crop-reform");
  const valWell = document.getElementById("val-well-control");
  const valAlgae = document.getElementById("val-algae-capture");
  const valLight = document.getElementById("val-light-pollution");
  const valFilter = document.getElementById("val-filter-rate");

  const displayWaterArea = document.getElementById("vision-water-area");
  const displayWaterStatus = document.getElementById("vision-water-status");
  const displayCo2Sink = document.getElementById("vision-co2-sink");
  const displayH2Energy = document.getElementById("vision-h2-energy");
  const displayBortle = document.getElementById("vision-bortle-class");
  const displayAstroAttract = document.getElementById("vision-astro-attractiveness");
  
  const summaryBox = document.getElementById("visionSummaryBox");
  const summaryText = document.getElementById("visionSummaryText");

  const wqiDisplay = document.getElementById("eutro-wqi");
  const doDisplay = document.getElementById("eutro-do");
  const algaeDisplay = document.getElementById("eutro-algae");
  const eutroDesc = document.getElementById("eutro-desc");
  const eutroCard = document.getElementById("eutroStatusCard");

  const canvas = document.getElementById("skyCanvas");

  let visionState = {
    cropReform: 0,
    wellControl: 0,
    algaeCapture: 0,
    lightPollution: 0,
    filterRate: 0
  };

  generateRandomStars();

  function drawSkyReflection() {
    if (!canvas) return;
    const ctxS = canvas.getContext("2d");
    const w = canvas.width;
    const h = canvas.height;
    const horizon = h / 2;

    ctxS.clearRect(0, 0, w, h);

    const reformFactor = visionState.lightPollution / 100.0;
    
    // 1. Draw Sky Background
    const skyGrad = ctxS.createLinearGradient(0, 0, 0, horizon);
    if (reformFactor < 0.2) {
      skyGrad.addColorStop(0, "#080c1e");
      skyGrad.addColorStop(0.7, "#181d33");
      skyGrad.addColorStop(1, "#3f303a"); 
    } else if (reformFactor < 0.6) {
      skyGrad.addColorStop(0, "#030712");
      skyGrad.addColorStop(0.7, "#090d22");
      skyGrad.addColorStop(1, "#12142d");
    } else {
      skyGrad.addColorStop(0, "#020208");
      skyGrad.addColorStop(0.7, "#040511");
      skyGrad.addColorStop(1, "#070716");
    }
    ctxS.fillStyle = skyGrad;
    ctxS.fillRect(0, 0, w, horizon);

    // 2. Draw Lake Water Reflection Background
    const lakeGrad = ctxS.createLinearGradient(0, horizon, 0, h);
    if (reformFactor < 0.2) {
      lakeGrad.addColorStop(0, "#2c222c"); 
      lakeGrad.addColorStop(0.3, "#101324");
      lakeGrad.addColorStop(1, "#060913");
    } else if (reformFactor < 0.6) {
      lakeGrad.addColorStop(0, "#0e1029");
      lakeGrad.addColorStop(0.3, "#060918");
      lakeGrad.addColorStop(1, "#02040c");
    } else {
      lakeGrad.addColorStop(0, "#060613");
      lakeGrad.addColorStop(0.3, "#030308");
      lakeGrad.addColorStop(1, "#010103");
    }
    ctxS.fillStyle = lakeGrad;
    ctxS.fillRect(0, horizon, w, h - horizon);

    // 3. Draw Milky Way Galaxy
    if (reformFactor > 0.15) {
      const gAlpha = (reformFactor - 0.15) * 0.45; 
      const mwGrad = ctxS.createRadialGradient(w/2, horizon - 20, 20, w/2 + 30, horizon - 50, 140);
      mwGrad.addColorStop(0, `rgba(167, 139, 250, ${gAlpha})`); 
      mwGrad.addColorStop(0.4, `rgba(244, 114, 182, ${gAlpha * 0.6})`); 
      mwGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctxS.fillStyle = mwGrad;
      ctxS.beginPath();
      ctxS.ellipse(w/2 + 20, horizon - 30, 160, 45, -Math.PI / 8, 0, Math.PI * 2);
      ctxS.fill();

      // Milky Way Reflection
      const mwRefGrad = ctxS.createRadialGradient(w/2, horizon + 20, 20, w/2 + 30, horizon + 50, 140);
      mwRefGrad.addColorStop(0, `rgba(167, 139, 250, ${gAlpha * 0.5})`);
      mwRefGrad.addColorStop(0.4, `rgba(244, 114, 182, ${gAlpha * 0.3})`);
      mwRefGrad.addColorStop(1, "rgba(0, 0, 0, 0)");

      ctxS.fillStyle = mwRefGrad;
      ctxS.beginPath();
      ctxS.ellipse(w/2 + 20, horizon + 30, 160, 45, Math.PI / 8, 0, Math.PI * 2);
      ctxS.fill();
    }

    // 4. Draw Stars
    const starCountLimit = Math.floor(randomStars.length * (0.25 + reformFactor * 0.75));
    const starOpacity = 0.5 + reformFactor * 0.5;

    for (let i = 0; i < starCountLimit; i++) {
      const star = randomStars[i];
      let brightness = starOpacity;
      if (star.twinkle) {
        brightness *= (0.7 + Math.sin(Date.now() * 0.005 + i) * 0.3);
      }

      ctxS.fillStyle = `rgba(255, 255, 255, ${brightness * star.size})`;
      ctxS.fillRect(star.x * (w / 400), star.y, star.size, star.size); 

      const rx = star.x * (w / 400) + Math.sin(Date.now() * 0.002 + star.y) * 0.4;
      const ry = h - star.y; 
      ctxS.fillStyle = `rgba(255, 255, 255, ${brightness * star.size * 0.5})`;
      ctxS.fillRect(rx, ry, star.size * 0.8, star.size * 0.8);
    }

    // 5. Draw Constellations
    if (reformFactor > 0.3) {
      const constAlpha = Math.min(0.8, (reformFactor - 0.3) * 1.5);
      
      constellations.forEach(constell => {
        const isHovered = activeConstellation === constell;
        
        ctxS.strokeStyle = isHovered ? `rgba(0, 229, 255, ${constAlpha})` : `rgba(255, 255, 255, ${constAlpha * 0.18})`;
        ctxS.lineWidth = isHovered ? 1.2 : 0.6;
        
        ctxS.beginPath();
        constell.stars.forEach((s, idx) => {
          const sx = s.x * (w / 400);
          if (idx === 0) ctxS.moveTo(sx, s.y);
          else ctxS.lineTo(sx, s.y);
        });
        ctxS.stroke();

        ctxS.strokeStyle = isHovered ? `rgba(0, 229, 255, ${constAlpha * 0.5})` : `rgba(255, 255, 255, ${constAlpha * 0.08})`;
        ctxS.beginPath();
        constell.stars.forEach((s, idx) => {
          const rx = s.x * (w / 400) + Math.sin(Date.now() * 0.002 + s.y) * 0.3;
          const ry = h - s.y;
          if (idx === 0) ctxS.moveTo(rx, ry);
          else ctxS.lineTo(rx, ry);
        });
        ctxS.stroke();

        constell.stars.forEach(s => {
          const sx = s.x * (w / 400);
          const isMain = s.main;
          ctxS.fillStyle = isHovered ? "rgba(0, 229, 255, 0.9)" : "rgba(255, 255, 255, 0.8)";
          ctxS.beginPath();
          ctxS.arc(sx, s.y, isMain ? 3.5 : 2.0, 0, Math.PI * 2);
          ctxS.fill();

          if (isMain && isHovered) {
            ctxS.strokeStyle = "rgba(0, 229, 255, 0.4)";
            ctxS.beginPath();
            ctxS.arc(sx, s.y, 7, 0, Math.PI * 2);
            ctxS.stroke();
          }

          const rx = sx + Math.sin(Date.now() * 0.002 + s.y) * 0.3;
          const ry = h - s.y;
          ctxS.fillStyle = isHovered ? "rgba(0, 229, 255, 0.5)" : "rgba(255, 255, 255, 0.4)";
          ctxS.beginPath();
          ctxS.arc(rx, ry, isMain ? 2.5 : 1.5, 0, Math.PI * 2);
          ctxS.fill();
        });
      });
    }

    // 6. Draw Horizon Line
    ctxS.strokeStyle = `rgba(255, 255, 255, ${0.05 + reformFactor * 0.08})`;
    ctxS.lineWidth = 1;
    ctxS.beginPath();
    ctxS.moveTo(0, horizon);
    ctxS.lineTo(w, horizon);
    ctxS.stroke();

    // 7. Ambient light glow at the bottom
    if (reformFactor < 0.8) {
      const lpGlow = ctxS.createLinearGradient(0, h - 30, 0, h);
      const lpAlpha = (1.0 - reformFactor) * 0.18;
      lpGlow.addColorStop(0, "rgba(251, 191, 36, 0)");
      lpGlow.addColorStop(1, `rgba(251, 191, 36, ${lpAlpha})`);
      ctxS.fillStyle = lpGlow;
      ctxS.fillRect(0, horizon, w, h - horizon);
    }
  }

  triggerSkyCanvasRedraw = drawSkyReflection;

  function update() {
    visionState.cropReform = parseInt(cropReformSlider.value);
    visionState.wellControl = parseInt(wellControlSlider.value);
    visionState.algaeCapture = parseInt(algaeCaptureSlider.value);
    visionState.lightPollution = parseInt(lightPollutionSlider.value);
    visionState.filterRate = parseInt(filterRateSlider.value);

    valCrop.innerText = `%${visionState.cropReform}`;
    valWell.innerText = `%${visionState.wellControl}`;
    valAlgae.innerText = `${visionState.algaeCapture} ha`;
    valLight.innerText = `%${visionState.lightPollution}`;
    valFilter.innerText = `%${visionState.filterRate}`;

    const waterArea = Math.round(120 + (visionState.cropReform * 2.8) + (visionState.wellControl * 2.0));
    const co2Sink = visionState.algaeCapture * 24;
    const h2Energy = Math.round((visionState.cropReform * 0.4 + visionState.wellControl * 0.6) * 4.5);

    const bortleScore = 4.5 - (visionState.lightPollution * 0.035);
    const bortleClassNum = Math.max(1, Math.min(5, Math.round(bortleScore)));
    let bortleText = "";
    let astroText = "";
    if (bortleClassNum === 1) {
      bortleText = "Sınıf 1 (Kusursuz Karanlık Gökyüzü)";
      astroText = "Astro-Fotoğrafçılık: Olağanüstü";
    } else if (bortleClassNum === 2) {
      bortleText = "Sınıf 2 (Tipik Karanlık Gökyüzü)";
      astroText = "Astro-Fotoğrafçılık: Mükemmel";
    } else if (bortleClassNum === 3) {
      bortleText = "Sınıf 3 (Kırsal Gökyüzü)";
      astroText = "Astro-Fotoğrafçılık: Çok İyi";
    } else if (bortleClassNum === 4) {
      bortleText = "Sınıf 4 (Geçiş Gökyüzü)";
      astroText = "Astro-Fotoğrafçılık: İyi";
    } else {
      bortleText = "Sınıf 5+ (Şehir Gökyüzü / Işıklı)";
      astroText = "Astro-Fotoğrafçılık: Zayıf";
    }

    displayWaterArea.innerText = `${waterArea} km²`;
    displayCo2Sink.innerText = `${co2Sink.toLocaleString("tr-TR")} ton/yıl`;
    displayH2Energy.innerText = `${h2Energy} GWh`;
    displayBortle.innerText = bortleText;
    displayAstroAttract.innerText = astroText;

    if (waterArea < 200) {
      displayWaterStatus.innerText = "Kritik Daralma (Aşırı Kuraklık)";
      displayWaterStatus.style.color = "var(--primary-pink)";
      summaryBox.className = "vision-summary-box negative";
      summaryText.innerText = "Göl kuruma tehlikesi altında. Tarımsal sulama kısıtlanmazsa aktif su alanı 120 km²'ye kadar düşebilir ve flamingo kreş alanları tamamen yok olur.";
    } else if (waterArea < 450) {
      displayWaterStatus.innerText = "Orta Risk (Kısmi Kurtarma)";
      displayWaterStatus.style.color = "#fbbf24";
      summaryBox.className = "vision-summary-box warning";
      summaryText.innerText = "Kısmi kurtarma sağlandı. Flamingolar için göl havzasında sınırlı üreme adacıkları kalır, ancak yeraltı su seviyesi tam stabilite kazanmış değil.";
    } else {
      displayWaterStatus.innerText = "Sürdürülebilir (Ekolojik Denge)";
      displayWaterStatus.style.color = "#4ade80";
      summaryBox.className = "vision-summary-box positive";
      summaryText.innerText = "Ekolojik hedef başarıldı! 2056 yılında 600 km² sulak alan sabitlendi. Yeraltı suları yükseliyor, yeşil hidrojen ve karbon yakalama projeleri tam kapasite çalışıyor.";
    }

    const wqi = Math.round(88 - (visionState.filterRate * 0.76));
    const dissolvedOxygen = parseFloat((1.8 + (visionState.filterRate * 0.06)).toFixed(1));
    
    wqiDisplay.innerText = `${wqi} (${wqi > 70 ? 'Aşırı Kirli' : wqi > 40 ? 'Orta Kirli' : 'Temiz'})`;
    doDisplay.innerText = `${dissolvedOxygen} mg/L (${dissolvedOxygen < 3 ? 'Anoksik' : dissolvedOxygen < 5.5 ? 'Hipoksik' : 'Oksijenli/Sağlıklı'})`;
    
    if (wqi > 70) {
      wqiDisplay.style.color = "var(--primary-pink)";
      doDisplay.style.color = "var(--primary-pink)";
      algaeDisplay.innerText = "Ötrofik Patlama (Zararlı)";
      algaeDisplay.style.color = "var(--primary-pink)";
      eutroCard.style.borderColor = "rgba(239, 68, 68, 0.3)";
      eutroCard.style.background = "rgba(239, 68, 68, 0.06)";
      eutroDesc.innerText = "Konya Kanalı'ndan gelen yoğun azot-fosfor arıtılmıyor. Sülfat indirgeyen bakteriler ve zararlı alg patlamaları suyu zehirliyor, Artemia popülasyonu ölüyor.";
    } else if (wqi > 40) {
      wqiDisplay.style.color = "#fbbf24";
      doDisplay.style.color = "#fbbf24";
      algaeDisplay.innerText = "Stres Altında";
      algaeDisplay.style.color = "#fbbf24";
      eutroCard.style.borderColor = "rgba(251, 191, 36, 0.3)";
      eutroCard.style.background = "rgba(251, 191, 36, 0.06)";
      eutroDesc.innerText = "Kısmi arıtma yapılıyor. Su kalitesi düzelmeye başladı ancak gölün sığ olması nedeniyle ötrofikasyon riski yaz aylarında hala devam ediyor.";
    } else {
      wqiDisplay.style.color = "#4ade80";
      doDisplay.style.color = "#4ade80";
      algaeDisplay.innerText = "Sağlıklı Dunaliella Popülasyonu";
      algaeDisplay.style.color = "#4ade80";
      eutroCard.style.borderColor = "rgba(74, 222, 128, 0.3)";
      eutroCard.style.background = "rgba(74, 222, 128, 0.06)";
      eutroDesc.innerText = "Mükemmel su arıtımı! Havzaya giren sular kimyasal kirlilikten arındırıldı. Dunaliella salina algleri ekosisteme oksijen sağlayarak Artemia ve flamingoları besliyor.";
    }

    drawSkyReflection();
  }

  canvas.addEventListener("mousemove", (e) => {
    if (visionState.lightPollution < 30) return;

    const rect = canvas.getBoundingClientRect();
    const mx = (e.clientX - rect.left) * (canvas.width / rect.width);
    const my = (e.clientY - rect.top) * (canvas.height / rect.height);

    let foundConstell = null;
    constellations.forEach(constell => {
      constell.stars.forEach(s => {
        const sx = s.x * (canvas.width / 400);
        const dSky = Math.sqrt((mx - sx)**2 + (my - s.y)**2);
        const dRef = Math.sqrt((mx - sx)**2 + (my - (canvas.height - s.y))**2);
        if (dSky < 15 || dRef < 15) {
          foundConstell = constell;
        }
      });
    });

    const detailsPanel = document.getElementById("skyDetailsPanel");

    if (foundConstell) {
      if (activeConstellation !== foundConstell) {
        activeConstellation = foundConstell;
        detailsPanel.innerHTML = `
          <i class="fa-solid fa-wand-magic-sparkles" style="color:var(--secondary-cyan)"></i> 
          <strong>Takımyıldız Saptandı:</strong> ${foundConstell.name}<br>
          <span style="font-size:0.75rem; color:var(--text-secondary)">Tuz Gölü'nün ayna yüzeyi, sıfıra yakın ışık kirliliğinde gökyüzündeki derin uzay cisimlerini yansıtarak astronomlar için doğal bir teleskop merceği oluşturur.</span>
        `;
        drawSkyReflection();
      }
    } else {
      if (activeConstellation !== null) {
        activeConstellation = null;
        detailsPanel.innerHTML = `
          <i class="fa-solid fa-star" style="color: #fbbf24;"></i> <strong>Gözlem Paneli:</strong> Takımyıldızları ve samanyolu kuşağını incelemek için üzerlerine gelin.
        `;
        drawSkyReflection();
      }
    }
  });

  [cropReformSlider, wellControlSlider, algaeCaptureSlider, lightPollutionSlider, filterRateSlider].forEach(slider => {
    slider.addEventListener("input", update);
  });

  setTimeout(resizeSkyCanvas, 100);

  update();
}

/* ==========================================================================
   22. FİZİKSEL DİNAMİKLER & KIYASLAMALI LİMNOLOJİ
   ========================================================================== */
let seicheInterval = null;
let seicheTime = 0;
let seicheState = {
  windSpeed: 35, // km/h
  depth: 30, // cm
};

let erosionInterval = null;
let erosionParticles = [];
let erosionState = {
  windSpeed: 45, // km/h
  moisture: 15, // %
  barrier: 'none' // 'none', 'halophyte', 'forest'
};

let lakesRadarChartInstance = null;
const lakesData = {
  tuz: {
    name: "Tuz Gölü (Türkiye)",
    desc: "İç Anadolu'da yer alan, Türkiye'nin ikinci büyük gölüdür. Ortalama 30 cm derinliğe sahip son derece sığ yapısı ve yüksek NaCl (sofra tuzu) doygunluğu ile bilinir. Bölgedeki tektonik fay hatlarıyla beslenen jeotermal girdiler ve meteorik sular göle kimyasal zenginlik katar.",
    ions: "Na⁺, Cl⁻, SO₄²⁻, Mg²⁺",
    threat: "Yeraltı Suyu Çekimi, Tarımsal Drenaj",
    metrics: { area: 1200, salinity: 32.4, altitude: 905, ph: 8.1, threat: 75 }
  },
  deadsea: {
    name: "Lut Gölü (Ölü Deniz - Ürdün/İsrail)",
    desc: "Yeryüzünün en alçak noktası olan (-430m) Lut Havzası'nda yer alır. Sodyumun yanı sıra magnezyum (Mg²⁺) ve kalsiyum (Ca²⁺) iyonları bakımından son derece zengindir. Aşırı tuzluluk nedeniyle balık veya bitki yaşamı barındırmaz.",
    ions: "Mg²⁺, Na⁺, Ca²⁺, Cl⁻",
    threat: "Su Girişlerinin Kesilmesi, Aşırı Karstik Çökme",
    metrics: { area: 600, salinity: 34.0, altitude: -430, ph: 6.2, threat: 95 }
  },
  gsl: {
    name: "Büyük Tuz Gölü (GSL - ABD)",
    desc: "Kuzey Amerika'nın en büyük hipersalin kapalı havzasıdır. Tuzluluk oranı mevsimsel ve bölgesel olarak %5 ile %27 arasında değişir. Sulak alanları göçmen kuşlar için küresel öneme sahiptir.",
    ions: "Na⁺, Cl⁻, Mg²⁺, SO₄²⁻",
    threat: "Besleyici Akarsuların Barajlanması, İklim Kuraklığı",
    metrics: { area: 3400, salinity: 15.0, altitude: 1280, ph: 8.2, threat: 85 }
  },
  uyuni: {
    name: "Salar de Uyuni (Bolivya)",
    desc: "And Dağları'nda 3656 metre rakımda yer alan dünyanın en büyük tuz düzlüğüdür. Antik göllerin buharlaşmasıyla geriye kalan metrelerce kalınlıktaki tuz kabuğu, dünyadaki lityum rezervlerinin yaklaşık %50'sini barındırır.",
    ions: "Li⁺, Na⁺, K⁺, Cl⁻",
    threat: "Lityum Madenciliği Basıncı, Akifer Kirliliği",
    metrics: { area: 10582, salinity: 35.0, altitude: 3656, ph: 7.8, threat: 60 }
  },
  urmia: {
    name: "Urmiye Gölü (İran)",
    desc: "Tuz Gölü gibi sığ ve hipersalin olan Urmiye Gölü, son 30 yılda su hacminin yaklaşık %90'ını kaybetmiştir. Kırmızı renkli Dunaliella algleri ve Artemia karideslerine ev sahipliği yapar.",
    ions: "Na⁺, Cl⁻, Mg²⁺, SO₄²⁻",
    threat: "Vahşi Tarımsal Sulama, Akarsu Barajları",
    metrics: { area: 2500, salinity: 22.0, altitude: 1275, ph: 7.5, threat: 90 }
  }
};

function resizePhysicsCanvases() {
  const seicheCanvas = document.getElementById("seicheCanvas");
  if (seicheCanvas) {
    const rect = seicheCanvas.parentElement.getBoundingClientRect();
    seicheCanvas.width = rect.width;
  }
  const erosionCanvas = document.getElementById("erosionCanvas");
  if (erosionCanvas) {
    const rect = erosionCanvas.parentElement.getBoundingClientRect();
    erosionCanvas.width = rect.width;
  }
}

function startPhysicsSimulations() {
  initSeicheSimulator();
  initErosionSimulator();
}

function initPhysicsDynamics() {
  const windSlider = document.getElementById("seiche-wind");
  const depthSlider = document.getElementById("seiche-depth");
  if (!windSlider) return;

  const valWind = document.getElementById("val-seiche-wind");
  const valDepth = document.getElementById("val-seiche-depth");

  function updateParams() {
    seicheState.windSpeed = parseInt(windSlider.value);
    seicheState.depth = parseInt(depthSlider.value);

    valWind.innerText = `${seicheState.windSpeed} km/s`;
    valDepth.innerText = `${seicheState.depth} cm`;
  }

  [windSlider, depthSlider].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  updateParams();
}

function initSeicheSimulator() {
  const canvas = document.getElementById("seicheCanvas");
  if (!canvas) return;
  const ctxS = canvas.getContext("2d");

  const periodEl = document.getElementById("seiche-period");
  const speedEl = document.getElementById("seiche-wave-speed");
  const stressEl = document.getElementById("seiche-stress");
  const setupEl = document.getElementById("seiche-setup");

  if (seicheInterval) clearInterval(seicheInterval);

  seicheInterval = setInterval(() => {
    seicheTime += 0.05;

    const L = 80000; // 80 km in meters
    const g = 9.81;
    const H = seicheState.depth / 100; // depth in meters
    
    const waveSpeed = Math.sqrt(g * H);
    const T = (2 * L) / waveSpeed;
    const T_hours = T / 3600;

    const Cd = 0.0013;
    const rho_air = 1.2;
    const U_ms = seicheState.windSpeed / 3.6;
    const tau = Cd * rho_air * (U_ms * U_ms);

    const rho_water = 1200; 
    const delta_h = (tau * L) / (2 * rho_water * g * H);
    const delta_h_cm = delta_h * 100;

    if (periodEl) periodEl.innerText = `${T_hours.toFixed(1)} saat`;
    if (speedEl) speedEl.innerText = `${waveSpeed.toFixed(2)} m/s`;
    if (stressEl) stressEl.innerText = `${tau.toFixed(4)} Pa`;
    if (setupEl) setupEl.innerText = `${delta_h_cm.toFixed(1)} cm`;

    const w = canvas.width;
    const h = canvas.height;
    const cy = h / 2 + 10;
    ctxS.clearRect(0, 0, w, h);

    ctxS.fillStyle = "#090d22";
    ctxS.fillRect(0, 0, w, h);

    ctxS.strokeStyle = "#475569";
    ctxS.lineWidth = 3;
    ctxS.beginPath();
    ctxS.moveTo(0, cy + 45);
    ctxS.quadraticCurveTo(w / 2, cy + 55, w, cy + 45);
    ctxS.stroke();
    
    ctxS.fillStyle = "#1e293b";
    ctxS.beginPath();
    ctxS.moveTo(0, cy + 45);
    ctxS.quadraticCurveTo(w / 2, cy + 55, w, cy + 45);
    ctxS.lineTo(w, h);
    ctxS.lineTo(0, h);
    ctxS.closePath();
    ctxS.fill();

    const sloshAmp = Math.min(30, delta_h_cm * 1.5); 
    const omega = (2 * Math.PI) / 8; 
    const setupY = sloshAmp * Math.cos(seicheTime * omega);

    const waterGrad = ctxS.createLinearGradient(0, cy - 20, 0, h);
    waterGrad.addColorStop(0, "rgba(0, 229, 255, 0.45)");
    waterGrad.addColorStop(1, "rgba(30, 64, 175, 0.2)");

    ctxS.fillStyle = waterGrad;
    ctxS.beginPath();
    ctxS.moveTo(0, cy - setupY);
    for (let x = 0; x <= w; x += 5) {
      const surfaceY = cy - setupY * Math.cos((Math.PI * x) / w);
      ctxS.lineTo(x, surfaceY);
    }
    ctxS.lineTo(w, cy + 45);
    ctxS.quadraticCurveTo(w / 2, cy + 55, 0, cy + 45);
    ctxS.closePath();
    ctxS.fill();

    ctxS.strokeStyle = "rgba(0, 229, 255, 0.85)";
    ctxS.lineWidth = 2;
    ctxS.beginPath();
    ctxS.moveTo(0, cy - setupY);
    for (let x = 0; x <= w; x += 5) {
      const surfaceY = cy - setupY * Math.cos((Math.PI * x) / w);
      ctxS.lineTo(x, surfaceY);
    }
    ctxS.stroke();

    ctxS.fillStyle = "rgba(255, 255, 255, 0.6)";
    ctxS.font = "bold 9px Outfit";
    ctxS.fillText("Yavşan (Batı)", 15, cy + 30);
    ctxS.fillText("Kaldırım (Doğu)", w - 85, cy + 30);

    if (seicheState.windSpeed > 5) {
      ctxS.strokeStyle = "rgba(248, 250, 252, 0.6)";
      ctxS.lineWidth = 2;
      const arrowX = w / 2 - 40;
      const arrowY = 30;
      ctxS.beginPath();
      ctxS.moveTo(arrowX, arrowY);
      ctxS.lineTo(arrowX + 80, arrowY);
      ctxS.moveTo(arrowX + 65, arrowY - 6);
      ctxS.lineTo(arrowX + 80, arrowY);
      ctxS.lineTo(arrowX + 65, arrowY + 6);
      ctxS.stroke();

      ctxS.fillStyle = "#fff";
      ctxS.font = "9px Outfit";
      ctxS.fillText(`Rüzgar Yönü (Poyraz): ${seicheState.windSpeed} km/s`, w / 2 - 70, 18);
    }
  }, 50);
}

function initErosionSimulator() {
  const windSlider = document.getElementById("erosion-wind");
  const moistureSlider = document.getElementById("erosion-moisture");
  const barrierBtns = document.querySelectorAll(".btn-barrier");

  if (!windSlider) return;

  const valWind = document.getElementById("val-erosion-wind");
  const valMoisture = document.getElementById("val-erosion-moisture");

  const fluxEl = document.getElementById("erosion-flux");
  const riskEl = document.getElementById("erosion-plasmolysis");
  const blockEl = document.getElementById("erosion-block-rate");

  function updateParams() {
    erosionState.windSpeed = parseInt(windSlider.value);
    erosionState.moisture = parseInt(moistureSlider.value);

    valWind.innerText = `${erosionState.windSpeed} km/s`;
    valMoisture.innerText = `%${erosionState.moisture}`;
  }

  [windSlider, moistureSlider].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  barrierBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      barrierBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      erosionState.barrier = btn.getAttribute("data-barrier");
    });
  });

  updateParams();

  const canvas = document.getElementById("erosionCanvas");
  if (!canvas) return;
  const ctxE = canvas.getContext("2d");

  erosionParticles = [];

  if (erosionInterval) clearInterval(erosionInterval);

  erosionInterval = setInterval(() => {
    const w = canvas.width;
    const h = canvas.height;
    const horizon = h - 35;

    const Ut = 25 * (1 + erosionState.moisture * 0.04);
    let flux = 0;
    if (erosionState.windSpeed > Ut) {
      flux = 0.005 * Math.pow(erosionState.windSpeed - Ut, 1.8) * (1 - erosionState.moisture / 100);
    }

    let blockRate = 0;
    if (erosionState.barrier === "halophyte") blockRate = 0.45;
    else if (erosionState.barrier === "forest") blockRate = 0.85;

    const netFlux = flux * (1 - blockRate);

    let risk = "Düşük";
    let riskColor = "#4ade80";
    if (netFlux > 1.2) {
      risk = "Ekstrem";
      riskColor = "#ef4444";
    } else if (netFlux > 0.4) {
      risk = "Yüksek";
      riskColor = "#fbbf24";
    } else if (netFlux > 0.05) {
      risk = "Orta";
      riskColor = "#fbbf24";
    }

    if (fluxEl) fluxEl.innerText = `${netFlux.toFixed(3)} g/m²/s`;
    if (riskEl) {
      riskEl.innerText = risk;
      riskEl.style.color = riskColor;
    }
    if (blockEl) blockEl.innerText = `%${Math.round(blockRate * 100)}`;

    if (netFlux > 0.001 && Math.random() < (erosionState.windSpeed / 100)) {
      const spawnCount = Math.ceil(netFlux * 8);
      for (let i = 0; i < spawnCount; i++) {
        erosionParticles.push({
          x: Math.random() * (w * 0.35),
          y: horizon - 2 - Math.random() * 5,
          vx: (erosionState.windSpeed / 10) * (0.8 + Math.random() * 0.4),
          vy: - (Math.random() * 1.5 + 0.5),
          size: Math.random() * 2 + 0.5,
          alpha: 0.8
        });
      }
    }

    for (let i = erosionParticles.length - 1; i >= 0; i--) {
      const p = erosionParticles[i];
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.04; 

      if (erosionState.barrier !== "none" && p.x > w * 0.48 && p.x < w * 0.52 && p.y > horizon - 40) {
        if (Math.random() < blockRate) {
          erosionParticles.splice(i, 1);
          continue;
        }
      }

      if (p.x > w || p.y > horizon) {
        erosionParticles.splice(i, 1);
      }
    }

    ctxE.clearRect(0, 0, w, h);

    ctxE.fillStyle = "#020617";
    ctxE.fillRect(0, 0, w, h);

    ctxE.fillStyle = "#cbd5e1";
    ctxE.fillRect(0, horizon, w * 0.48, h - horizon);
    
    let fieldColor = "#15803d"; 
    if (risk === "Ekstrem") fieldColor = "#78350f"; 
    else if (risk === "Yüksek" || risk === "Orta") fieldColor = "#854d0e"; 
    ctxE.fillStyle = fieldColor;
    ctxE.fillRect(w * 0.52, horizon, w * 0.48, h - horizon);

    ctxE.fillStyle = "#1e293b";
    ctxE.fillRect(w * 0.48, horizon, w * 0.04, h - horizon);

    if (erosionState.barrier === "halophyte") {
      ctxE.fillStyle = "#4ade80";
      ctxE.fillRect(w * 0.48, horizon - 20, w * 0.04, 20);
      ctxE.fillStyle = "#22c55e";
      ctxE.font = "8px FontAwesome";
      ctxE.fillText("🌿", w * 0.48 + 2, horizon - 6);
    } else if (erosionState.barrier === "forest") {
      ctxE.fillStyle = "#3b82f6";
      ctxE.fillRect(w * 0.48, horizon - 40, w * 0.04, 40);
      ctxE.fillStyle = "#1d4ed8";
      ctxE.font = "8px FontAwesome";
      ctxE.fillText("🌲", w * 0.48 + 2, horizon - 15);
    }

    ctxE.fillStyle = "rgba(255, 255, 255, 0.45)";
    ctxE.font = "8px Outfit";
    ctxE.fillText("Kuruyan Göl Yatağı", 10, horizon + 20);
    ctxE.fillText(risk === "Düşük" ? "Sağlıklı Tarım Ovaları" : "Tuzlu Plazmoliz Hasarı", w - 105, horizon + 20);

    ctxE.fillStyle = "rgba(241, 245, 249, 0.75)";
    erosionParticles.forEach(p => {
      ctxE.beginPath();
      ctxE.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctxE.fill();
    });
  }, 40);
}

function initGlobalLakesMatrix() {
  const lakeSelectBtns = document.querySelectorAll(".btn-lake-select");
  if (!lakeSelectBtns || lakeSelectBtns.length === 0) return;

  const lakeName = document.getElementById("comp-lake-name");
  const lakeDesc = document.getElementById("comp-lake-desc");
  const lakeIons = document.getElementById("comp-lake-ions");
  const lakeThreat = document.getElementById("comp-lake-threat");
  
  const ctxL = document.getElementById("lakesRadarChart");
  if (!ctxL) return;

  function getNormalizedMetrics(lakeKey) {
    const raw = lakesData[lakeKey].metrics;
    return [
      Math.round(raw.salinity * 2.5),
      Math.round(raw.area / 120),
      Math.round(((raw.altitude + 500) / 4500) * 100),
      Math.round((raw.ph / 14) * 100),
      raw.threat
    ];
  }

  let currentSelection = "tuz";
  
  if (lakesRadarChartInstance) {
    lakesRadarChartInstance.destroy();
  }

  lakesRadarChartInstance = new Chart(ctxL, {
    type: 'radar',
    data: {
      labels: ['Tuzluluk', 'Yüzey Alanı', 'Rakım', 'pH Oranı', 'Tehdit Derecesi'],
      datasets: [
        {
          label: 'Tuz Gölü (Türkiye)',
          data: getNormalizedMetrics('tuz'),
          fill: true,
          backgroundColor: 'rgba(0, 229, 255, 0.12)',
          borderColor: '#00e5ff',
          pointBackgroundColor: '#00e5ff',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#00e5ff',
          borderWidth: 2
        },
        {
          label: 'Karşılaştırılan Göl',
          data: getNormalizedMetrics('tuz'), 
          fill: true,
          backgroundColor: 'rgba(255, 117, 151, 0.12)',
          borderColor: '#ff7597',
          pointBackgroundColor: '#ff7597',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: '#ff7597',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94a3b8', font: { family: 'Outfit', size: 10 } }
        }
      },
      scales: {
        r: {
          angleLines: { color: 'rgba(255,255,255,0.06)' },
          grid: { color: 'rgba(255,255,255,0.06)' },
          pointLabels: { color: '#94a3b8', font: { family: 'Outfit', size: 10 } },
          ticks: { display: false },
          min: 0,
          max: 100
        }
      }
    }
  });

  function updateComparison(lakeKey) {
    const data = lakesData[lakeKey];
    lakeName.innerText = data.name;
    lakeDesc.innerText = data.desc;
    lakeIons.innerText = data.ions;
    lakeThreat.innerText = data.threat;

    lakesRadarChartInstance.data.datasets[1].label = data.name;
    lakesRadarChartInstance.data.datasets[1].data = getNormalizedMetrics(lakeKey);
    lakesRadarChartInstance.update();
  }

  lakeSelectBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      lakeSelectBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      currentSelection = btn.getAttribute("data-lake");
      updateComparison(currentSelection);
    });
  });

  updateComparison("tuz"); 
}

/* ==========================================================================
   24. INDUSTRIAL SALTWORKS SIMULATOR (v13.0)
   ========================================================================== */
let saltworksInterval = null;
let saltworksState = {
  selectedWorks: "kaldirim",
  densityBe: 24.5,
  evapRate: 1.5,
  washEfficiency: 80,
  dryTemp: 105,
  yield: 450,
  purity: 98.4,
  impurity: 3200,
  moisture: 0.25,
  energy: 14.2,
  animationTime: 0
};

const saltworksConfig = {
  kaldirim: {
    name: "Kaldırım Tuzlası",
    baseCapacity: 450,
    baseImpurity: 3000,
    desc: "Gölün kuzey kesimindeki en büyük tuz üretim havzalarından biridir. Standart sanayi ve sofra tuzu üretimi ağırlıklıdır."
  },
  yavsan: {
    name: "Yavşan Tuzlası",
    baseCapacity: 220,
    baseImpurity: 1200,
    desc: "Batı kıyısında yer alan tarihi tuzla işletmesidir. Medikal ve kimyasal saflıkta üstün kaliteli tuz üretimiyle bilinir."
  },
  kayacik: {
    name: "Kayacık Tuzlası",
    baseCapacity: 700,
    baseImpurity: 5500,
    desc: "Güney havzasındaki tuzla işletmesidir. Yüksek buharlaşma yüzeyi sayesinde yüksek hacimde sanayi tipi tuz üretir."
  }
};

function resizeSaltworksCanvas() {
  const canvas = document.getElementById("saltworksCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initSaltworksSimulator() {
  const worksBtns = document.querySelectorAll(".btn-saltworks");
  const slideBe = document.getElementById("salt-be");
  const slideEvap = document.getElementById("salt-evap");
  const slideWash = document.getElementById("salt-wash");
  const slideTemp = document.getElementById("salt-temp");

  if (!slideBe) return;

  const valName = document.getElementById("val-saltworks-name");
  const valBe = document.getElementById("val-salt-be");
  const valEvap = document.getElementById("val-salt-evap");
  const valWash = document.getElementById("val-salt-wash");
  const valTemp = document.getElementById("val-salt-temp");

  function updateParams() {
    saltworksState.densityBe = parseFloat(slideBe.value);
    saltworksState.evapRate = parseFloat(slideEvap.value);
    saltworksState.washEfficiency = parseInt(slideWash.value);
    saltworksState.dryTemp = parseInt(slideTemp.value);

    valBe.innerText = `${saltworksState.densityBe.toFixed(1)} °Be`;
    valEvap.innerText = `${saltworksState.evapRate.toFixed(1)} mm/gün`;
    valWash.innerText = `%${saltworksState.washEfficiency}`;
    valTemp.innerText = `${saltworksState.dryTemp} °C`;
  }

  [slideBe, slideEvap, slideWash, slideTemp].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  worksBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      worksBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      saltworksState.selectedWorks = btn.getAttribute("data-saltworks");
      valName.innerText = saltworksConfig[saltworksState.selectedWorks].name;
    });
  });

  updateParams();
}

function startSaltworksSimulation() {
  const canvas = document.getElementById("saltworksCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const yieldEl = document.getElementById("salt-yield");
  const purityEl = document.getElementById("salt-purity");
  const impurityEl = document.getElementById("salt-impurity");
  const moistureEl = document.getElementById("salt-moisture");
  const energyEl = document.getElementById("salt-energy");
  const alertEl = document.getElementById("saltworksAlert");

  if (saltworksInterval) clearInterval(saltworksInterval);

  saltworksInterval = setInterval(() => {
    saltworksState.animationTime += 0.05;

    const works = saltworksConfig[saltworksState.selectedWorks];
    const Be = saltworksState.densityBe;
    const evap = saltworksState.evapRate;
    const wash = saltworksState.washEfficiency;
    const temp = saltworksState.dryTemp;

    // Yield math
    let optFactor = 0;
    if (Be >= 25.5 && Be <= 28.5) {
      optFactor = 1.0;
    } else {
      optFactor = Math.max(0.1, 1.0 - Math.abs(Be - 27.0) / 6.0);
    }
    const currentYield = works.baseCapacity * (evap / 1.5) * optFactor;

    // Purity math
    let basePurity = 98.0;
    if (Be > 28.5) {
      basePurity = Math.max(90.0, 98.0 - (Be - 28.5) * 2.0);
    } else if (Be < 25.5) {
      basePurity = Math.max(92.0, 98.0 - (25.5 - Be) * 1.5);
    }
    const currentPurity = basePurity + (100.0 - basePurity) * (wash / 100.0) * 0.98;

    // Impurities math (Mg/Ca in ppm)
    let rawImpurities = works.baseImpurity;
    if (Be > 28.5) {
      rawImpurities += (Be - 28.5) * 1500;
    }
    const currentImpurity = rawImpurities * (1 - wash / 100.0);

    // Moisture math
    const currentMoisture = 5.0 * Math.exp(-temp / 35.0);

    // Energy math
    const currentEnergy = (temp * 0.08) + (wash * 0.06);

    // Update Telemetry
    if (yieldEl) yieldEl.innerText = `${Math.round(currentYield)} ton/gün`;
    if (purityEl) purityEl.innerText = `%${currentPurity.toFixed(2)}`;
    if (impurityEl) impurityEl.innerText = `${Math.round(currentImpurity)} ppm`;
    if (moistureEl) moistureEl.innerText = `%${currentMoisture.toFixed(2)}`;
    if (energyEl) energyEl.innerText = `${currentEnergy.toFixed(1)} kWh/t`;

    // Alert Status
    if (alertEl) {
      let statusText = "";
      let icon = "fa-circle-info";
      let colorClass = "var(--text-primary)";
      if (currentPurity >= 99.5 && currentImpurity < 1000 && currentMoisture < 0.2) {
        statusText = "<strong>Tuz Sınıfı: Medikal & İlaç Sanayi Kalitesi.</strong> Ultra yüksek saflıkta NaCl hammaddesi.";
        icon = "fa-circle-check";
        colorClass = "#4ade80";
      } else if (currentPurity >= 98.5 && currentImpurity < 2500 && currentMoisture < 0.4) {
        statusText = "<strong>Tuz Sınıfı: Rafine Sofra Tuzu.</strong> Gıda standardı tüketimine uygundur.";
        icon = "fa-circle-check";
        colorClass = "var(--secondary-cyan)";
      } else if (currentPurity >= 95.0 && currentImpurity < 5000) {
        statusText = "<strong>Tuz Sınıfı: Sanayi & Kar Karşıtı Yol Tuzu.</strong> Sanayi prosesleri ve buz çözme için ideal.";
        icon = "fa-triangle-exclamation";
        colorClass = "#fbbf24";
      } else {
        statusText = "<strong>Tuz Sınıfı: Düşük Kaliteli / Nemli Ham Tuz.</strong> Rafinasyon yetersiz veya acı iyon çökelimi yüksek.";
        icon = "fa-circle-xmark";
        colorClass = "#ef4444";
      }
      alertEl.innerHTML = `<i class="fa-solid ${icon}" style="color:${colorClass}"></i> <span style="color:#f8fafc">${statusText}</span>`;
      alertEl.style.borderColor = colorClass + "33";
    }

    // Canvas Drawing
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Background
    ctx.fillStyle = "#020617";
    ctx.fillRect(0, 0, w, h);

    // 5 Stages Layout
    const numStages = 5;
    const stageWidth = w / numStages;
    const pad = 10;

    const stages = [
      { name: "Evaporasyon", icon: "💧" },
      { name: "Kristalizasyon", icon: "❄️" },
      { name: "Yıkama", icon: "🌀" },
      { name: "Kurutma", icon: "🔥" },
      { name: "Silo / Ürün", icon: "⛰️" }
    ];

    stages.forEach((st, idx) => {
      const x = idx * stageWidth + pad;
      const y = 35;
      const sw = stageWidth - pad * 2;
      const sh = h - 65;

      // Draw container box
      ctx.strokeStyle = "rgba(255, 255, 255, 0.08)";
      ctx.lineWidth = 1;
      ctx.strokeRect(x, y, sw, sh);
      
      // Label
      ctx.fillStyle = "rgba(148, 163, 184, 0.7)";
      ctx.font = "bold 8px Outfit";
      ctx.textAlign = "center";
      ctx.fillText(st.name, x + sw / 2, y - 8);

      // Icon
      ctx.font = "14px Arial";
      ctx.fillText(st.icon, x + sw / 2, y + 25);

      if (idx === 0) {
        // Evaporation pond
        ctx.fillStyle = "rgba(0, 229, 255, 0.15)";
        ctx.fillRect(x + 2, y + sh - 40, sw - 4, 38);
        ctx.fillStyle = "rgba(0, 229, 255, 0.6)";
        const waveY = y + sh - 45 - Math.sin(saltworksState.animationTime * 3) * 3;
        ctx.font = "8px Arial";
        ctx.fillText("↑ ↑", x + sw / 2, waveY);
      } else if (idx === 1) {
        // Crystallization bed
        const heapHeight = Math.min(30, currentYield * 0.04);
        ctx.fillStyle = "rgba(248, 250, 252, 0.85)";
        ctx.beginPath();
        ctx.moveTo(x + 2, y + sh - 2);
        ctx.lineTo(x + sw / 2, y + sh - heapHeight);
        ctx.lineTo(x + sw - 2, y + sh - 2);
        ctx.closePath();
        ctx.fill();
        if (currentYield > 50) {
          ctx.fillStyle = "rgba(248, 250, 252, 0.5)";
          for (let i = 0; i < 4; i++) {
            const dropY = y + 35 + ((saltworksState.animationTime * 20 + i * 15) % (sh - 40));
            ctx.fillRect(x + sw / 2 - 2 + i % 2 * 4, dropY, 2, 2);
          }
        }
      } else if (idx === 2) {
        // Washing drum
        if (wash > 50) {
          ctx.strokeStyle = "rgba(0, 229, 255, 0.4)";
          ctx.lineWidth = 1.5;
          for (let i = 0; i < 3; i++) {
            const lineX = x + 10 + i * (sw - 20) / 2;
            ctx.beginPath();
            ctx.moveTo(lineX, y + 30);
            ctx.lineTo(lineX + Math.sin(saltworksState.animationTime * 10 + i) * 2, y + sh - 10);
            ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(248, 250, 252, 0.7)";
        ctx.fillRect(x + 5, y + sh - 15, sw - 10, 13);
      } else if (idx === 3) {
        // Drying furnace
        ctx.strokeStyle = "rgba(239, 68, 68, 0.5)";
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(x + sw / 2, y + sh - 25, 15, 0, Math.PI * 2);
        ctx.stroke();
        
        ctx.fillStyle = "rgba(239, 68, 68, 0.6)";
        ctx.font = "8px Arial";
        ctx.fillText("♨️", x + sw / 2, y + sh - 22 + Math.sin(saltworksState.animationTime * 5) * 2);
      } else if (idx === 4) {
        // Silo
        const pileColor = currentPurity > 99.0 ? "#ffffff" : "rgba(226, 232, 240, 0.85)";
        const finalHeapHeight = Math.min(45, (currentYield * 0.05));
        ctx.fillStyle = pileColor;
        ctx.beginPath();
        ctx.moveTo(x + 2, y + sh - 2);
        ctx.lineTo(x + sw / 2, y + sh - finalHeapHeight);
        ctx.lineTo(x + sw - 2, y + sh - 2);
        ctx.closePath();
        ctx.fill();

        ctx.fillStyle = "rgba(255,255,255,0.7)";
        ctx.font = "bold 7px Outfit";
        ctx.fillText(`%${currentPurity.toFixed(1)}`, x + sw / 2, y + sh - 5);
      }
    });

    // Connecting arrows
    ctx.strokeStyle = "rgba(255, 255, 255, 0.15)";
    ctx.lineWidth = 2;
    for (let idx = 0; idx < numStages - 1; idx++) {
      const startX = (idx + 1) * stageWidth - 5;
      const arrowY = h / 2 + 10;
      ctx.beginPath();
      ctx.moveTo(startX - 2, arrowY);
      ctx.lineTo(startX + 8, arrowY);
      ctx.lineTo(startX + 4, arrowY - 3);
      ctx.moveTo(startX + 8, arrowY);
      ctx.lineTo(startX + 4, arrowY + 3);
      ctx.stroke();
    }
  }, 50);
}

/* ==========================================================================
   25. ANCIENT CISTERN HYDRAULICS SIMULATOR (v13.0)
   ========================================================================== */
let cisternInterval = null;
let cisternState = {
  selectedCistern: "sultan",
  rainIntensity: 320,
  catchmentArea: 250,
  filterThickness: 45,
  drawRate: 800,
  volume: 42.5,
  clarity: 94,
  sediment: 4.8,
  lifetime: 53,
  animationTime: 0
};

const cisternConfig = {
  sultan: {
    name: "Sultanhanı Kervansarayı Sarnıcı",
    capacity: 120,
    runoffCoeff: 0.85,
    desc: "Tarihi İpek Yolu üzerindeki Sultanhanı Kervansarayı'nın devasa çatısından gelen suları toplayan büyük tonozlu sarnıçtır."
  },
  obruk: {
    name: "Obruk Han Sarnıcı",
    capacity: 60,
    runoffCoeff: 0.75,
    desc: "Karstik çöküntü kenarında yer alan ve kervansarayın avlusundaki yeraltı akışlarından beslenen derin korumalı sarnıçtır."
  },
  serefli: {
    name: "Şereflikoçhisar Antik Sarnıcı",
    capacity: 90,
    runoffCoeff: 0.80,
    desc: "Yerleşim alanındaki antik taş tonozlarla çevrili, sivil halkın tatlı su ihtiyacını karşılayan klasik bir belediye sarnıcıdır."
  }
};

function resizeCisternCanvas() {
  const canvas = document.getElementById("cisternCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initCisternSimulator() {
  const cisternBtns = document.querySelectorAll(".btn-cistern");
  const slideRain = document.getElementById("cistern-rain");
  const slideCatchment = document.getElementById("cistern-catchment");
  const slideFilter = document.getElementById("cistern-filter");
  const slideDraw = document.getElementById("cistern-draw");

  if (!slideRain) return;

  const valName = document.getElementById("val-cistern-name");
  const valRain = document.getElementById("val-cistern-rain");
  const valCatchment = document.getElementById("val-cistern-catchment");
  const valFilter = document.getElementById("val-cistern-filter");
  const valDraw = document.getElementById("val-cistern-draw");

  function updateParams() {
    cisternState.rainIntensity = parseInt(slideRain.value);
    cisternState.catchmentArea = parseInt(slideCatchment.value);
    cisternState.filterThickness = parseInt(slideFilter.value);
    cisternState.drawRate = parseInt(slideDraw.value);

    valRain.innerText = `${cisternState.rainIntensity} mm/yıl`;
    valCatchment.innerText = `${cisternState.catchmentArea} m²`;
    valFilter.innerText = `${cisternState.filterThickness} cm`;
    valDraw.innerText = `${cisternState.drawRate} L/gün`;
  }

  [slideRain, slideCatchment, slideFilter, slideDraw].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  cisternBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      cisternBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      cisternState.selectedCistern = btn.getAttribute("data-cistern");
      const config = cisternConfig[cisternState.selectedCistern];
      valName.innerText = config.name;
      cisternState.volume = config.capacity * 0.5;
      cisternState.sediment = 2.0 + Math.random() * 3.0;
    });
  });

  updateParams();
  cisternState.volume = 65.0;
}

function startCisternSimulation() {
  const canvas = document.getElementById("cisternCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const volEl = document.getElementById("cistern-volume");
  const capSubEl = document.getElementById("cistern-capacity-sub");
  const clarityEl = document.getElementById("cistern-clarity");
  const sedimentEl = document.getElementById("cistern-sediment");
  const lifetimeEl = document.getElementById("cistern-lifetime");
  const alertEl = document.getElementById("cisternAlert");

  if (cisternInterval) clearInterval(cisternInterval);

  cisternInterval = setInterval(() => {
    cisternState.animationTime += 0.05;

    const conf = cisternConfig[cisternState.selectedCistern];
    const rain = cisternState.rainIntensity;
    const area = cisternState.catchmentArea;
    const filter = cisternState.filterThickness;
    const draw = cisternState.drawRate;

    // Daily Rain Inflow math
    const rainDailyL = (rain / 365.0) * area * conf.runoffCoeff;

    // Filter math
    const clarity = 100.0 - (35.0 * Math.exp(-filter / 22.0));
    const filterEfficiency = 1.0 - (filter * 0.0012);
    const inflowL = rainDailyL * filterEfficiency;

    // Outflow math
    const outflowL = draw;

    // Net flow in m³ per day
    const netM3PerDay = (inflowL - outflowL) / 1000.0;

    // Tick represents 0.5 days
    const dt = 0.5;
    cisternState.volume += netM3PerDay * dt;
    cisternState.volume = Math.max(0, Math.min(conf.capacity, cisternState.volume));

    // Sediment growth
    const sedimentInflow = (inflowL / 1000.0) * (1.0 - clarity / 100.0) * 0.015 * dt;
    cisternState.sediment += sedimentInflow;
    cisternState.sediment = Math.min(25.0, cisternState.sediment);

    // Lifetime estimate
    let lifetimeText = "";
    if (netM3PerDay >= 0) {
      lifetimeText = "Dengeli / Sürekli Akış";
    } else {
      const days = (cisternState.volume * 1000.0) / Math.abs(inflowL - outflowL);
      lifetimeText = `${Math.ceil(days)} gün`;
    }

    // Update telemetry UI
    if (volEl) volEl.innerText = `${cisternState.volume.toFixed(1)} m³`;
    if (capSubEl) capSubEl.innerText = `Kapasite: ${conf.capacity} m³`;
    if (clarityEl) clarityEl.innerText = `%${Math.round(clarity)}`;
    if (sedimentEl) sedimentEl.innerText = `${cisternState.sediment.toFixed(1)} cm`;
    if (lifetimeEl) lifetimeEl.innerText = lifetimeText;

    // Status alert message
    if (alertEl) {
      let statusText = "";
      let icon = "fa-circle-check";
      let color = "#4ade80";
      
      const pct = (cisternState.volume / conf.capacity) * 100;
      if (cisternState.volume <= 0.05) {
        statusText = "<strong>Sarnıç Tamamen Kurudu!</strong> Su kaynağı tükendi, kervanlar susuzluk riskiyle karşı karşıya.";
        icon = "fa-circle-xmark";
        color = "#ef4444";
      } else if (clarity < 80) {
        statusText = "<strong>Bulanık Su Kalitesi:</strong> Filtre yatağı yetersiz. Su tortulu, doğrudan içmek risklidir.";
        icon = "fa-triangle-exclamation";
        color = "#fbbf24";
      } else if (pct < 15) {
        statusText = "<strong>Kritik Su Seviyesi:</strong> Rezerv bitmek üzere. Tüketim acilen azaltılmalıdır.";
        icon = "fa-circle-exclamation";
        color = "#f97316";
      } else {
        statusText = "<strong>Güvenli Rezerv & Kalite:</strong> Berrak, filtre edilmiş su içmeye uygun ve kervanların hizmetinde.";
        icon = "fa-circle-check";
        color = "#f97316";
      }
      alertEl.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> <span style="color:#f8fafc">${statusText}</span>`;
      alertEl.style.borderColor = color + "33";
    }

    // Canvas drawing
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Deep Dark background
    ctx.fillStyle = "#030712";
    ctx.fillRect(0, 0, w, h);

    // Ground level drawing
    const groundY = 60;
    ctx.fillStyle = "#1f2937";
    ctx.fillRect(0, groundY, w, 10);
    
    // Draw surface rain
    if (rain > 150) {
      ctx.strokeStyle = "rgba(59, 130, 246, 0.4)";
      ctx.lineWidth = 1;
      const numDrops = Math.min(40, Math.ceil(rain / 12));
      for (let i = 0; i < numDrops; i++) {
        const rx = ((cisternState.animationTime * 200 + i * 45) % w);
        const ry = ((cisternTime = cisternState.animationTime * 300 + i * 25) % groundY);
        ctx.beginPath();
        ctx.moveTo(rx, ry);
        ctx.lineTo(rx - 2, ry + 6);
        ctx.stroke();
      }
    }

    // Filter box
    const fx = w / 2 - 25;
    const fy = groundY - 5;
    const fw = 50;
    const fh = 25;
    
    // Sand layer
    ctx.fillStyle = "#d97706";
    ctx.fillRect(fx, fy + 5, fw, 10);
    // Gravel layer
    ctx.fillStyle = "#4b5563";
    ctx.fillRect(fx, fy + 15, fw, 10);
    
    ctx.strokeStyle = "#9ca3af";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(fx, fy, fw, fh);
    
    ctx.fillStyle = "#fff";
    ctx.font = "bold 6px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("FİLTRE", fx + fw / 2, fy - 2);

    // Water flowing down from filter
    if (rain > 150 && cisternState.volume < conf.capacity) {
      ctx.strokeStyle = "rgba(0, 229, 255, 0.6)";
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(w / 2, fy + fh);
      ctx.lineTo(w / 2, groundY + 50 + Math.sin(cisternState.animationTime * 12) * 5);
      ctx.stroke();
    }

    // Cistern vaulted structure
    const cx = 30;
    const cy = groundY + 30;
    const cw = w - 60;
    const ch = h - cy - 15;

    // Vault Arches
    ctx.strokeStyle = "#b45309";
    ctx.lineWidth = 4;
    
    const archW = cw / 3;
    for (let i = 0; i < 3; i++) {
      const ax = cx + i * archW;
      ctx.beginPath();
      ctx.arc(ax + archW / 2, cy + 10, archW / 2, Math.PI, 0, false);
      ctx.stroke();
    }

    // Columns
    ctx.fillStyle = "#78350f";
    ctx.fillRect(cx + archW - 4, cy + 10, 8, ch - 10);
    ctx.fillRect(cx + archW * 2 - 4, cy + 10, 8, ch - 10);

    // Pool filling level
    const maxWaterHeight = ch - 12;
    const waterHeight = maxWaterHeight * (cisternState.volume / conf.capacity);
    const poolY = cy + ch - waterHeight;

    // Sediment bed
    const sedHeight = Math.min(15, cisternState.sediment * 0.6);
    ctx.fillStyle = "#451a03";
    ctx.fillRect(cx, cy + ch - sedHeight, cw, sedHeight);

    // Water block
    if (waterHeight > 0) {
      const waterGrad = ctx.createLinearGradient(0, poolY, 0, cy + ch);
      const rVal = Math.round(59 + (100 - clarity) * 1.5);
      const gVal = Math.round(130 + (100 - clarity) * 0.5);
      const bVal = Math.round(246 - (100 - clarity) * 1.5);
      waterGrad.addColorStop(0, `rgba(${rVal}, ${gVal}, ${bVal}, 0.55)`);
      waterGrad.addColorStop(1, "rgba(30, 58, 138, 0.3)");

      ctx.fillStyle = waterGrad;
      ctx.beginPath();
      ctx.moveTo(cx, poolY);
      const numWaves = 10;
      const waveSpan = cw / numWaves;
      for (let i = 0; i <= numWaves; i++) {
        const wx = cx + i * waveSpan;
        const wy = poolY + Math.sin(cisternState.animationTime * 4 + i) * 1.8;
        ctx.lineTo(wx, wy);
      }
      ctx.lineTo(cx + cw, cy + ch - sedHeight);
      ctx.lineTo(cx, cy + ch - sedHeight);
      ctx.closePath();
      ctx.fill();
    }

    // Cistern Wall Outlines
    ctx.strokeStyle = "#92400e";
    ctx.lineWidth = 2.5;
    ctx.strokeRect(cx, cy, cw, ch);

    // Scale markers
    ctx.fillStyle = "rgba(255, 255, 255, 0.4)";
    ctx.font = "6px Outfit";
    ctx.textAlign = "right";
    ctx.fillText("Max", cx - 4, cy + 15);
    ctx.fillText("50%", cx - 4, cy + ch / 2 + 5);
    ctx.fillText("Min", cx - 4, cy + ch - 5);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.2)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(cx - 2, cy + 12); ctx.lineTo(cx, cy + 12);
    ctx.moveTo(cx - 2, cy + ch / 2); ctx.lineTo(cx, cy + ch / 2);
    ctx.moveTo(cx - 2, cy + ch - 2); ctx.lineTo(cx, cy + ch - 2);
    ctx.stroke();

  }, 60);
}

/* ==========================================================================
   26. PHYTOMEDIATION SIMULATOR (v14.0)
   ========================================================================== */
let phytoInterval = null;
let phytoState = {
  selectedPlant: "salicornia",
  initialSalinity: 45,
  plantingDensity: 35,
  heavyMetals: 150,
  irrigation: 250,
  currentSalinity: 45,
  absorbedMetals: 0,
  carbonSeq: 0,
  biomass: 0,
  animationTime: 0,
  particles: []
};

const phytoConfig = {
  salicornia: {
    name: "Salicornia europaea (Deniz Börülcesi)",
    salAccumulationRate: 0.12,
    metalAccumulationRate: 0.08,
    carbonRate: 5.5,
    biomassRate: 0.05,
    desc: "Hipersalin koşullara en dayanıklı türdür. Hücrelerinde yüksek miktarda tuz biriktirebilir. Fitoremediasyon şampiyonudur."
  },
  suaeda: {
    name: "Suaeda prostrata (Tuz Otu)",
    salAccumulationRate: 0.08,
    metalAccumulationRate: 0.15,
    carbonRate: 4.8,
    biomassRate: 0.04,
    desc: "Topraktaki kurşun (Pb) ve kadmiyum (Cd) gibi ağır metalleri bünyesinde biriktirmede üstün başarı sergiler."
  },
  limonium: {
    name: "Limonium gmelinii (Deniz Lavantası)",
    salAccumulationRate: 0.06,
    metalAccumulationRate: 0.05,
    carbonRate: 7.2,
    biomassRate: 0.06,
    desc: "Tuz bezleriyle fazla tuzu dışarı atar. Geniş yaprak yapısıyla yüksek karbon emilimi ve estetik biyokütle sağlar."
  }
};

function resizePhytoCanvas() {
  const canvas = document.getElementById("phytoCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initHalophyteRemediationSimulator() {
  const plantBtns = document.querySelectorAll(".btn-phyto-plant");
  const slideSal = document.getElementById("phyto-salinity");
  const slideDen = document.getElementById("phyto-density");
  const slideMet = document.getElementById("phyto-metals");
  const slideIrr = document.getElementById("phyto-irrigation");

  if (!slideSal) return;

  const valSal = document.getElementById("val-phyto-sal");
  const valDen = document.getElementById("val-phyto-density");
  const valMet = document.getElementById("val-phyto-metals");
  const valIrr = document.getElementById("val-phyto-irr");

  function updateParams() {
    phytoState.initialSalinity = parseFloat(slideSal.value);
    phytoState.plantingDensity = parseInt(slideDen.value);
    phytoState.heavyMetals = parseInt(slideMet.value);
    phytoState.irrigation = parseInt(slideIrr.value);

    valSal.innerText = `${phytoState.initialSalinity} dS/m`;
    valDen.innerText = `${phytoState.plantingDensity} adet/m²`;
    valMet.innerText = `${phytoState.heavyMetals} ppm`;
    valIrr.innerText = `${phytoState.irrigation} mm`;

    phytoState.currentSalinity = phytoState.initialSalinity;
    phytoState.absorbedMetals = 0;
    phytoState.carbonSeq = 0;
    phytoState.biomass = 0;
    phytoState.animationTime = 0;
  }

  [slideSal, slideDen, slideMet, slideIrr].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  plantBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      plantBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      phytoState.selectedPlant = btn.getAttribute("data-plant");
      phytoState.currentSalinity = phytoState.initialSalinity;
      phytoState.absorbedMetals = 0;
      phytoState.carbonSeq = 0;
      phytoState.biomass = 0;
      phytoState.animationTime = 0;
    });
  });

  updateParams();
}

function startPhytoSimulation() {
  const canvas = document.getElementById("phytoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const curSalEl = document.getElementById("phyto-current-sal");
  const salRedEl = document.getElementById("phyto-sal-reduction");
  const absMetEl = document.getElementById("phyto-absorbed-metals");
  const metRedEl = document.getElementById("phyto-metal-reduction");
  const carbSeqEl = document.getElementById("phyto-carbon-seq");
  const biomassEl = document.getElementById("phyto-biomass");
  const alertEl = document.getElementById("phytoAlert");

  if (phytoInterval) clearInterval(phytoInterval);

  phytoState.particles = [];
  const numParticles = 80;
  for (let i = 0; i < numParticles; i++) {
    phytoState.particles.push({
      x: Math.random(),
      y: 0.5 + Math.random() * 0.5,
      type: Math.random() > 0.4 ? "salt" : "metal",
      speed: 0.2 + Math.random() * 0.3
    });
  }

  phytoInterval = setInterval(() => {
    phytoState.animationTime += 0.02;

    const plant = phytoConfig[phytoState.selectedPlant];
    const density = phytoState.plantingDensity;
    const initialSal = phytoState.initialSalinity;
    const metals = phytoState.heavyMetals;
    const irr = phytoState.irrigation;

    const t = phytoState.animationTime;
    const maxT = 10;
    const factor = Math.min(1.0, t / maxT);

    const salUptakeCoef = plant.salAccumulationRate * (density / 40.0) * (irr / 300.0);
    const finalSal = initialSal * Math.exp(-salUptakeCoef * factor * 1.5);
    phytoState.currentSalinity = finalSal;
    const salReductionPct = Math.round(((initialSal - finalSal) / initialSal) * 100);

    const metalUptakeCoef = plant.metalAccumulationRate * (density / 40.0) * (irr / 300.0);
    const absorbed = metals * (1.0 - Math.exp(-metalUptakeCoef * factor * 1.8));
    phytoState.absorbedMetals = absorbed;
    const metalReductionPct = Math.round((absorbed / (metals > 0 ? metals : 1.0)) * 100);

    phytoState.carbonSeq = plant.carbonRate * density * factor * (irr / 250.0) * 12.0;
    phytoState.biomass = plant.biomassRate * density * factor * (irr / 250.0) * 0.8;

    if (curSalEl) curSalEl.innerText = `${phytoState.currentSalinity.toFixed(1)} dS/m`;
    if (salRedEl) salRedEl.innerText = `Azalma: -%${salReductionPct}`;
    if (absMetEl) absMetEl.innerText = `${phytoState.absorbedMetals.toFixed(1)} mg/kg`;
    if (metRedEl) metRedEl.innerText = `Topraktan temizlenen: %${metalReductionPct}`;
    if (carbSeqEl) carbSeqEl.innerText = `${Math.round(phytoState.carbonSeq)} g/m²`;
    if (biomassEl) biomassEl.innerText = `${phytoState.biomass.toFixed(2)} kg/m²`;

    if (alertEl) {
      let statusText = "";
      let icon = "fa-circle-check";
      let colorClass = "#22c55e";
      if (salReductionPct >= 60 && metalReductionPct >= 50) {
        statusText = `<strong>Mükemmel İyileşme (Sınıf 1):</strong> Toprak yapısı normalleşiyor. Tarımsal faaliyetler için elverişli seviyeye yaklaşıldı.`;
        icon = "fa-circle-check";
        colorClass = "#22c55e";
      } else if (salReductionPct >= 30) {
        statusText = `<strong>Orta Düzey İyileşme (Sınıf 2):</strong> Tuzluluk düşüyor, ağır metaller kısmen temizlendi. Süreç devam etmeli.`;
        icon = "fa-circle-check";
        colorClass = "var(--secondary-cyan)";
      } else {
        statusText = `<strong>Fitoremediasyon Başlangıcı:</strong> Bitkiler adaptasyon sürecinde. Toprak iyileşmesi henüz başlangıç seviyesinde.`;
        icon = "fa-circle-exclamation";
        colorClass = "#fbbf24";
      }
      alertEl.innerHTML = `<i class="fa-solid ${icon}" style="color:${colorClass}"></i> <span style="color:#f8fafc">${statusText}</span>`;
      alertEl.style.borderColor = colorClass + "33";
    }

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = "#1e1b18";
    ctx.fillRect(0, h / 2, w, h / 2);
    
    ctx.strokeStyle = "#3f3f46";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(0, h / 2);
    ctx.lineTo(w, h / 2);
    ctx.stroke();

    const numPlants = Math.min(12, Math.ceil(density / 6));
    const plantSpacing = w / (numPlants + 1);
    
    for (let i = 1; i <= numPlants; i++) {
      const px = i * plantSpacing;
      const py = h / 2;
      const maxHeight = 50 + (plant.biomassRate * 400);
      const curHeight = maxHeight * factor;

      ctx.strokeStyle = "rgba(168, 85, 247, 0.4)";
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.quadraticCurveTo(px - 15, py + 25, px - 5, py + 45);
      ctx.moveTo(px, py);
      ctx.quadraticCurveTo(px + 15, py + 20, px + 5, py + 40);
      ctx.moveTo(px, py);
      ctx.lineTo(px, py + 30);
      ctx.stroke();

      ctx.strokeStyle = "#22c55e";
      ctx.fillStyle = "#4ade80";
      ctx.lineWidth = 2.5;
      ctx.beginPath();
      ctx.moveTo(px, py);
      ctx.lineTo(px, py - curHeight);
      ctx.stroke();

      if (curHeight > 15) {
        ctx.beginPath();
        ctx.ellipse(px - 8, py - curHeight * 0.4, 5, 2, -Math.PI / 4, 0, Math.PI * 2);
        ctx.ellipse(px + 8, py - curHeight * 0.4, 5, 2, Math.PI / 4, 0, Math.PI * 2);
        ctx.ellipse(px - 10, py - curHeight * 0.7, 6, 2.5, -Math.PI / 4, 0, Math.PI * 2);
        ctx.ellipse(px + 10, py - curHeight * 0.7, 6, 2.5, Math.PI / 4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    phytoState.particles.forEach(p => {
      const px = p.x * w;
      const py = p.y * h;

      if (p.type === "salt") {
        ctx.fillStyle = "rgba(255, 255, 255, 0.6)";
        ctx.fillRect(px, py, 3, 3);
      } else {
        ctx.fillStyle = "rgba(239, 68, 68, 0.75)";
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      p.y -= p.speed * 0.005;

      if (p.y <= 0.52) {
        p.y = 0.95;
        p.x = Math.random();
      }
    });

  }, 40);
}

/* ==========================================================================
   27. CARAVAN LOGISTICS SIMULATOR (v14.0)
   ========================================================================== */
let caravanInterval = null;
let caravanState = {
  selectedRoute: "tatta-konya",
  camelCount: 15,
  loadPerCamel: 120,
  waterReserve: 1200,
  season: "spring",
  distanceLeft: 0,
  daysElapsed: 0,
  currentWater: 1200,
  health: 100,
  profit: 0,
  cargoWeight: 0,
  isRunning: false,
  caravanX: 0,
  animationTime: 0
};

const caravanRoutes = {
  "tatta-konya": {
    name: "Tatta ➔ Iconium (Konya)",
    totalDistance: 120,
    safetyBase: 90,
    waterReplenishPoints: [40, 80],
    pricePerKg: 3.5,
    desc: "Düz ova rotası. Kervansaraylar sıktır, su tedariği kolaydır, eşkıya riski düşüktür."
  },
  "tatta-hattusa": {
    name: "Tatta ➔ Hattuşaş (Çorum)",
    totalDistance: 240,
    safetyBase: 65,
    waterReplenishPoints: [70, 150],
    pricePerKg: 6.8,
    desc: "Uzun ve dalgalı arazi rotası. Su kuyuları seyrektir, geçitlerde hava sıcaklığı zorlayıcıdır."
  },
  "tatta-kayseri": {
    name: "Tatta ➔ Caesarea (Kayseri)",
    totalDistance: 190,
    safetyBase: 78,
    waterReplenishPoints: [60, 120],
    pricePerKg: 5.2,
    desc: "Kısmi engebeli rota. Tuz tozu fırtınasına açık ovalardan geçer. Orta risklidir."
  }
};

function resizeCaravanCanvas() {
  const canvas = document.getElementById("caravanCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initCaravanSimulator() {
  const routeBtns = document.querySelectorAll(".btn-caravan-route");
  const slideCamels = document.getElementById("caravan-camels");
  const slideLoad = document.getElementById("caravan-load");
  const slideWater = document.getElementById("caravan-water");
  const selectSeason = document.getElementById("caravan-season");
  const btnStart = document.getElementById("btn-start-caravan");

  if (!slideCamels) return;

  const valCamels = document.getElementById("val-caravan-camels");
  const valLoad = document.getElementById("val-caravan-load");
  const valWater = document.getElementById("val-caravan-water");

  function updateParams() {
    if (caravanState.isRunning) return;

    caravanState.camelCount = parseInt(slideCamels.value);
    caravanState.loadPerCamel = parseInt(slideLoad.value);
    caravanState.waterReserve = parseInt(slideWater.value);
    caravanState.season = selectSeason.value;

    valCamels.innerText = `${caravanState.camelCount} deve`;
    valLoad.innerText = `${caravanState.loadPerCamel} kg`;
    valWater.innerText = `${caravanState.waterReserve} L`;

    const route = caravanRoutes[caravanState.selectedRoute];
    caravanState.distanceLeft = route.totalDistance;
    caravanState.daysElapsed = 0;
    caravanState.currentWater = caravanState.waterReserve;
    caravanState.health = 100;
    caravanState.cargoWeight = caravanState.camelCount * caravanState.loadPerCamel;
    caravanState.profit = 0;

    updateCaravanUI();
  }

  [slideCamels, slideLoad, slideWater].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });
  selectSeason.addEventListener("change", updateParams);

  routeBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      if (caravanState.isRunning) return;
      routeBtns.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      caravanState.selectedRoute = btn.getAttribute("data-route");
      updateParams();
    });
  });

  btnStart.addEventListener("click", () => {
    if (caravanState.isRunning) {
      caravanState.isRunning = false;
      btnStart.innerHTML = '<i class="fa-solid fa-play"></i> Yolculuğu Başlat';
      updateParams();
    } else {
      caravanState.isRunning = true;
      btnStart.innerHTML = '<i class="fa-solid fa-square-xmark"></i> Yolculuğu İptal Et / Sıfırla';
      runCaravanJourney();
    }
  });

  updateParams();
}

function updateCaravanUI() {
  const distEl = document.getElementById("caravan-dist");
  const daysEl = document.getElementById("caravan-day-display");
  const waterEl = document.getElementById("caravan-water-telemetry");
  const usageEl = document.getElementById("caravan-water-usage");
  const healthEl = document.getElementById("caravan-health");
  const profitEl = document.getElementById("caravan-profit");
  const cargoEl = document.getElementById("caravan-cargo");
  const statusEl = document.getElementById("caravan-status");

  if (distEl) distEl.innerText = `${Math.round(caravanState.distanceLeft)} km`;
  if (daysEl) daysEl.innerText = `Gün: ${caravanState.daysElapsed}`;
  if (waterEl) waterEl.innerText = `${Math.round(caravanState.currentWater)} L`;
  
  let dailyUsage = caravanState.camelCount * 12;
  if (caravanState.season === "summer") dailyUsage *= 1.8;
  if (usageEl) usageEl.innerText = `Tüketim: ${Math.round(dailyUsage)} L/gün`;
  
  if (healthEl) healthEl.innerText = `%${Math.round(caravanState.health)}`;
  if (profitEl) profitEl.innerText = `${Math.round(caravanState.profit)} Dinar`;
  if (cargoEl) cargoEl.innerText = `Toplam Yük: ${caravanState.cargoWeight} kg`;
}

function runCaravanJourney() {
  const alertEl = document.getElementById("caravanAlert");
  const btnStart = document.getElementById("btn-start-caravan");
  
  let route = caravanRoutes[caravanState.selectedRoute];
  
  let dailyDist = 20;
  if (caravanState.loadPerCamel > 160) dailyDist -= 4;
  if (caravanState.season === "summer") dailyDist -= 3;
  
  let dailyWaterUse = caravanState.camelCount * 12;
  if (caravanState.season === "summer") dailyWaterUse *= 1.8;

  let baseSafety = route.safetyBase;
  if (caravanState.season === "autumn") baseSafety -= 10;
  if (caravanState.season === "summer") baseSafety -= 5;

  let messageLog = "Yolculuk başladı! Kervan Tatta Gölü'nün beyaz düzlüklerinden ayrılıyor.";
  if (alertEl) alertEl.innerHTML = `<i class="fa-solid fa-map-location-dot" style="color:#a855f7"></i> <span style="color:#f8fafc"><strong>Günlük:</strong> ${messageLog}</span>`;

  caravanInterval = setInterval(() => {
    if (!caravanState.isRunning) {
      clearInterval(caravanInterval);
      return;
    }

    caravanState.daysElapsed++;
    caravanState.distanceLeft -= dailyDist;
    caravanState.currentWater -= dailyWaterUse;

    let routeConfig = caravanRoutes[caravanState.selectedRoute];
    let traveled = routeConfig.totalDistance - caravanState.distanceLeft;
    let replenished = false;
    routeConfig.waterReplenishPoints.forEach(pt => {
      if (traveled >= pt && traveled - dailyDist < pt) {
        let addedWater = 400 + Math.random() * 400;
        caravanState.currentWater = Math.min(caravanState.waterReserve, caravanState.currentWater + addedWater);
        replenished = true;
      }
    });

    let eventRoll = Math.random() * 100;
    let eventMsg = "";
    if (eventRoll > baseSafety) {
      let dangerType = Math.random() > 0.5 ? "bandit" : "weather";
      if (dangerType === "bandit") {
        let lostCargo = Math.round(caravanState.cargoWeight * 0.15);
        caravanState.cargoWeight -= lostCargo;
        caravanState.health -= 15;
        eventMsg = ` Kervan eşkıya saldırısına uğradı! ${lostCargo} kg tuz kaybedildi.`;
      } else {
        caravanState.health -= 10;
        caravanState.currentWater -= 100;
        eventMsg = caravanState.season === "autumn" 
          ? " Kervan şiddetli tuz tozu fırtınasına yakalandı! Sağlık ve su azaldı." 
          : " Aşırı sıcaklık nedeniyle develer bitkin düştü.";
      }
    }

    if (caravanState.currentWater <= 0) {
      caravanState.currentWater = 0;
      caravanState.health -= 25;
      eventMsg += " Su kaynakları tamamen tükendi! Kervan susuzluktan kırılıyor.";
    }

    if (caravanState.health < 0) caravanState.health = 0;

    if (replenished) {
      messageLog = `İpek Yolu hanına ulaşıldı. Sarnıçlardan taze su ikmali yapıldı.${eventMsg}`;
    } else {
      messageLog = `Kervan ${dailyDist} km ilerledi.${eventMsg}`;
    }

    if (alertEl) {
      alertEl.innerHTML = `<i class="fa-solid fa-caravan" style="color:#a855f7"></i> <span style="color:#f8fafc"><strong>Gün ${caravanState.daysElapsed}:</strong> ${messageLog}</span>`;
    }

    if (caravanState.distanceLeft <= 0) {
      caravanState.distanceLeft = 0;
      caravanState.profit = caravanState.cargoWeight * routeConfig.pricePerKg;
      caravanState.isRunning = false;
      clearInterval(caravanInterval);
      btnStart.innerHTML = '<i class="fa-solid fa-play"></i> Yeni Yolculuk';
      if (alertEl) {
        alertEl.innerHTML = `<i class="fa-solid fa-circle-check" style="color:#22c55e"></i> <span style="color:#f8fafc"><strong>Başarı:</strong> Kervan varış noktasına ulaştı! ${Math.round(caravanState.profit)} Altın Dinar kâr elde edildi.</span>`;
        alertEl.style.borderColor = "#22c55e33";
      }
    }

    if (caravanState.health <= 0) {
      caravanState.isRunning = false;
      clearInterval(caravanInterval);
      btnStart.innerHTML = '<i class="fa-solid fa-play"></i> Yeniden Dene';
      if (alertEl) {
        alertEl.innerHTML = `<i class="fa-solid fa-skull-crossbones" style="color:#ef4444"></i> <span style="color:#f8fafc"><strong>Hata:</strong> Kervan çölde kayboldu ve telef oldu. Yolculuk başarısız.</span>`;
        alertEl.style.borderColor = "#ef444433";
      }
    }

    updateCaravanUI();

  }, 1000);
}

function startCaravanSimulation() {
  const canvas = document.getElementById("caravanCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  let animTime = 0;

  function draw() {
    if (!canvas) return;
    animTime += 0.05;
    
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    ctx.fillStyle = "#050515";
    ctx.fillRect(0, 0, w, h);

    const routeName = caravanState.selectedRoute;
    const totalDist = caravanRoutes[routeName].totalDistance;
    const traveled = totalDist - caravanState.distanceLeft;
    const pct = traveled / totalDist;

    const startNode = { x: 50, y: h / 2 };
    const endNode = { x: w - 50, y: h / 2 };
    
    ctx.strokeStyle = "rgba(168, 85, 247, 0.25)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(startNode.x, startNode.y);
    ctx.quadraticCurveTo(w / 2, h / 2 - 40, endNode.x, endNode.y);
    ctx.stroke();

    ctx.strokeStyle = "#a855f7";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(startNode.x, startNode.y);
    const midX = startNode.x + (endNode.x - startNode.x) * pct;
    const midY = startNode.y + (endNode.y - startNode.y) * pct - Math.sin(pct * Math.PI) * 40;
    ctx.quadraticCurveTo(startNode.x + (w/2 - startNode.x) * pct, startNode.y + (h/2 - 40 - startNode.y) * pct, midX, midY);
    ctx.stroke();

    ctx.fillStyle = "#00e5ff";
    ctx.beginPath();
    ctx.arc(startNode.x, startNode.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.font = "bold 8px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("Tatta", startNode.x, startNode.y - 12);

    ctx.fillStyle = "#e2e8f0";
    ctx.beginPath();
    ctx.arc(endNode.x, endNode.y, 8, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#fff";
    ctx.fillText("Hedef", endNode.x, endNode.y - 12);

    const cx = startNode.x + (endNode.x - startNode.x) * pct;
    const cy = startNode.y + (endNode.y - startNode.y) * pct - Math.sin(pct * Math.PI) * 40;

    ctx.fillStyle = "#a855f7";
    ctx.beginPath();
    ctx.arc(cx, cy, 6, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(168, 85, 247, 0.5)";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.arc(cx, cy, 10 + Math.sin(animTime * 3) * 2, 0, Math.PI * 2);
    ctx.stroke();

    if (caravanState.season === "summer") {
      ctx.fillStyle = "rgba(239, 68, 68, 0.04)";
      ctx.fillRect(0, 0, w, h);
    }

    if (caravanState.season === "autumn" && caravanState.isRunning) {
      ctx.strokeStyle = "rgba(245, 158, 11, 0.15)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        let sy = (animTime * 150 + i * 40) % h;
        ctx.beginPath();
        ctx.moveTo(0, sy);
        ctx.lineTo(w, sy + Math.sin(animTime + i) * 10);
        ctx.stroke();
      }
    }

    if (caravanState.isRunning) {
      requestAnimationFrame(draw);
    }
  }

  draw();
}

/* ==========================================================================
   28. CCN & AEROSOL YAĞIŞ YOĞUNLAŞMA LABORATUVARI (v14.0)
   ========================================================================== */
let ccnInterval = null;
let ccnState = {
  windSpeed: 45,
  humidity: 75,
  aerosolFlux: 350,
  temperature: -15,
  dropletDiameter: 1.25,
  condensationRate: 840,
  cloudProbability: 72,
  rainIncrement: 6.4,
  animationTime: 0,
  particles: []
};

function resizeCCNCanvas() {
  const canvas = document.getElementById("ccnCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initCCNSimulator() {
  const slideWind = document.getElementById("ccn-wind");
  const slideHum = document.getElementById("ccn-humidity");
  const slideFlux = document.getElementById("ccn-flux");
  const slideTemp = document.getElementById("ccn-temp");

  if (!slideWind) return;

  const valWind = document.getElementById("val-ccn-wind");
  const valHum = document.getElementById("val-ccn-hum");
  const valFlux = document.getElementById("val-ccn-flux");
  const valTemp = document.getElementById("val-ccn-temp");

  function updateParams() {
    ccnState.windSpeed = parseInt(slideWind.value);
    ccnState.humidity = parseInt(slideHum.value);
    ccnState.aerosolFlux = parseInt(slideFlux.value);
    ccnState.temperature = parseInt(slideTemp.value);

    valWind.innerText = `${ccnState.windSpeed} km/s`;
    valHum.innerText = `%${ccnState.humidity}`;
    valFlux.innerText = `${ccnState.aerosolFlux} p/cm³`;
    valTemp.innerText = `${ccnState.temperature} °C`;
  }

  [slideWind, slideHum, slideFlux, slideTemp].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  updateParams();
}

function startCCNSimulation() {
  const canvas = document.getElementById("ccnCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const dropSizeEl = document.getElementById("ccn-droplet-size");
  const satRatioEl = document.getElementById("ccn-sat-ratio");
  const condRateEl = document.getElementById("ccn-condensation-rate");
  const cloudProbEl = document.getElementById("ccn-cloud-prob");
  const rainIncEl = document.getElementById("ccn-rain-increment");
  const alertEl = document.getElementById("ccnAlert");

  if (ccnInterval) clearInterval(ccnInterval);

  ccnState.particles = [];
  for (let i = 0; i < 40; i++) {
    ccnState.particles.push({
      x: 0.1 + Math.random() * 0.4,
      y: 0.2 + Math.random() * 0.6,
      vx: (Math.random() - 0.5) * 1.5,
      vy: (Math.random() - 0.5) * 1.5,
      size: 1 + Math.random() * 2
    });
  }

  ccnInterval = setInterval(() => {
    ccnState.animationTime += 0.05;

    const wind = ccnState.windSpeed;
    const hum = ccnState.humidity;
    const flux = ccnState.aerosolFlux;
    const temp = ccnState.temperature;

    const saturationRatio = 100.0 + (0.5 * (100.0 - hum) / 50.0);
    const criticalDiameter = Math.max(0.1, 2.5 - (hum / 60.0) - (flux / 800.0));
    
    const rate = Math.round(flux * (hum / 100.0) * (Math.abs(temp - 10) / 15.0) * 1.5);
    const cloudProb = Math.min(100, Math.round((hum * 0.7) + (flux * 0.03) + (wind * 0.1)));
    const rainInc = (flux / 200.0) * (hum / 75.0) * 2.8;

    if (dropSizeEl) dropSizeEl.innerText = `${criticalDiameter.toFixed(2)} μm`;
    if (satRatioEl) satRatioEl.innerText = `Aşırı Doygunluk Eşiği: %${saturationRatio.toFixed(1)}`;
    if (condRateEl) condRateEl.innerText = `${rate} damla/s`;
    if (cloudProbEl) {
      cloudProbEl.innerText = `%${cloudProb}`;
      let cType = "Cirrus";
      if (cloudProb > 80) cType = "Cumulonimbus";
      else if (cloudProb > 50) cType = "Stratocumulus";
      else if (cloudProb > 25) cType = "Altocumulus";
      const sub = document.querySelector("#ccn-cloud-prob + .tel-sub");
      if (sub) sub.innerText = `Bulut Tipi: ${cType}`;
    }
    if (rainIncEl) rainIncEl.innerText = `+%${rainInc.toFixed(1)}`;

    if (alertEl) {
      let statusText = "";
      let icon = "fa-cloud-showers-water";
      let color = "var(--secondary-cyan)";
      if (cloudProb > 75) {
        statusText = "<strong>Aerosol Fiziği Durumu:</strong> Yüksek yoğunlaşma hızı ve doygunluk. İç Anadolu'da yerel sağanak yağışlar tetikleniyor.";
        color = "var(--secondary-cyan)";
      } else if (cloudProb > 40) {
        statusText = "<strong>Aerosol Fiziği Durumu:</strong> Parçalı bulutlanma aktif. Yoğunlaşma dengeli, yağış ihtimali orta düzeyde.";
        color = "#fbbf24";
      } else {
        statusText = "<strong>Aerosol Fiziği Durumu:</strong> Düşük nem oranı. Yoğunlaşma yavaş, gökyüzü açık veya sığ bulutlu.";
        color = "#ef4444";
      }
      alertEl.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> <span style="color:#f8fafc">${statusText}</span>`;
      alertEl.style.borderColor = color + "33";
    }

    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const midX = w / 2;

    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX, h);
    ctx.stroke();

    const cx = midX / 2;
    const cy = h / 2;
    const r = Math.min(midX, h) / 2 - 15;
    
    ctx.fillStyle = "#0c4a6e";
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(6, 182, 212, 0.4)";
    ctx.lineWidth = 3;
    ctx.stroke();

    ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
    ctx.font = "bold 6px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("CCN MİKROSKOBİK GÖRÜNÜM (NaCl)", cx, cy - r + 12);

    const nucSize = 18;
    ctx.fillStyle = "#ffffff";
    ctx.strokeStyle = "#00e5ff";
    ctx.lineWidth = 1.5;
    ctx.strokeRect(cx - nucSize/2, cy - nucSize/2, nucSize, nucSize);
    
    const maxShellRad = r - 25;
    const shellRad = nucSize/2 + (maxShellRad - nucSize/2) * (hum / 100.0);
    
    ctx.fillStyle = "rgba(0, 229, 255, 0.25)";
    ctx.strokeStyle = "rgba(0, 229, 255, 0.75)";
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.arc(cx, cy, shellRad + Math.sin(ccnState.animationTime * 4) * 1.5, 0, Math.PI * 2);
    ctx.fill();
    ctx.stroke();

    ccnState.particles.forEach(p => {
      ctx.fillStyle = "#38bdf8";
      ctx.beginPath();
      ctx.arc(p.x * midX, p.y * h, p.size, 0, Math.PI * 2);
      ctx.fill();

      const dx = cx - (p.x * midX);
      const dy = cy - (p.y * h);
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < shellRad) {
        const angle = Math.random() * Math.PI * 2;
        p.x = (cx + Math.cos(angle) * (r - 5)) / midX;
        p.y = (cy + Math.sin(angle) * (r - 5)) / h;
      } else {
        p.x += (dx / dist) * 0.003 * (flux / 350.0);
        p.y += (dy / dist) * 0.003 * (flux / 350.0);
      }
    });

    const rx = midX + 15;
    const rw = w - rx - 15;

    if (cloudProb > 25) {
      const numClouds = Math.ceil(cloudProb / 20);
      ctx.fillStyle = "rgba(148, 163, 184, 0.4)";
      for (let i = 0; i < numClouds; i++) {
        const ccx = rx + 30 + i * (rw / numClouds);
        const ccy = 40 + Math.sin(ccnState.animationTime + i) * 3;
        ctx.beginPath();
        ctx.arc(ccx, ccy, 18, 0, Math.PI * 2);
        ctx.arc(ccx - 12, ccy, 14, 0, Math.PI * 2);
        ctx.arc(ccx + 12, ccy, 14, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    if (cloudProb > 50) {
      const rainCount = Math.min(35, Math.round(rate / 25));
      ctx.strokeStyle = "rgba(56, 189, 248, 0.5)";
      ctx.lineWidth = 1.5;
      for (let i = 0; i < rainCount; i++) {
        const dropX = rx + ((ccnState.animationTime * 150 + i * 27) % rw);
        const dropY = 55 + ((ccnState.animationTime * 220 + i * 38) % (h - 95));
        ctx.beginPath();
        ctx.moveTo(dropX, dropY);
        ctx.lineTo(dropX - 1, dropY + 6);
        ctx.stroke();
      }
    }

    ctx.fillStyle = "#1e2937";
    ctx.fillRect(midX + 5, h - 25, w - midX - 10, 20);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 6px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("ATMOSFERİK YAĞIŞ SÜRECİ", midX + (w - midX)/2, h - 10);

    ctx.fillStyle = "#1e2937";
    ctx.fillRect(midX + 5, h - 25, w - midX - 10, 20);

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 6px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("ATMOSFERİK YAĞIŞ SÜRECİ", midX + (w - midX)/2, h - 10);

  }, 50);
}

/* ==========================================================================
   29. QUATERNARY PALEOLIMNOLOGY SIMULATOR (v15.0)
   ========================================================================== */
let paleoInterval = null;
let paleoState = {
  timeKya: 0,
  eccentricity: 0.0167,
  obliquity: 23.44,
  precession: 102,
  waterLevel: 0.2,
  tempAnomaly: 0.0,
  sedRate: 0.12,
  insolation: 485,
  animationTime: 0
};

function getPaleoData(kya) {
  const lookup = [
    { kya: 0, level: 0.2, temp: 0.0, sed: 0.12, type: "Sığ Hipersalin Halit", desc: "Sığ tuz gölü, yüksek buharlaşma." },
    { kya: 10, level: 12.0, temp: -1.5, sed: 0.35, type: "Orta Acı Limnik", desc: "Erken Holosen nemli evre." },
    { kya: 20, level: 48.0, temp: -7.2, sed: 0.85, type: "Derin Tatlı Su (Pluvial)", desc: "Son Buzul Maksimumu dev göl evresi." },
    { kya: 30, level: 28.0, temp: -5.0, sed: 0.62, type: "Derin Limnik Kil/Marn", desc: "Soğuk nemli buzul gölü." },
    { kya: 40, level: 15.0, temp: -4.0, sed: 0.44, type: "Orta Limnik", desc: "Buzul dönemi geçiş evresi." },
    { kya: 50, level: 32.0, temp: -5.8, sed: 0.70, type: "Derin Tatlı Su", desc: "Yüksek yağışlı buzul maksimumu." },
    { kya: 60, level: 24.0, temp: -4.8, sed: 0.52, type: "Orta-Derin Limnik", desc: "Kararlı soğuk göl evresi." },
    { kya: 70, level: 8.0, temp: -3.0, sed: 0.28, type: "Sığ Acı Su", desc: "Yarı kurak buzul geçişi." },
    { kya: 80, level: 4.5, temp: -1.0, sed: 0.20, type: "Sığ Salin Jips", desc: "Sıcak buzul-arası geçiş." },
    { kya: 90, level: -1.2, temp: 1.0, sed: 0.08, type: "Kurumuş Çamur Düzlüğü", desc: "Ekstrem buharlaşma, göl neredeyse yok." },
    { kya: 100, level: -2.0, temp: 1.8, sed: 0.05, type: "Ekstrem Kurak Sabka", desc: "Sıcak buzul-arası pik evre." },
    { kya: 110, level: 1.0, temp: 0.5, sed: 0.15, type: "Sığ Hipersalin Halit", desc: "Geçiş evresi tuz birikimi." },
    { kya: 120, level: 2.8, temp: 1.2, sed: 0.18, type: "Sığ Salin Jips", desc: "Eemian Sıcak Dönem başlangıcı." }
  ];
  let i = 0;
  while (i < lookup.length - 1 && kya > lookup[i+1].kya) {
    i++;
  }
  const p1 = lookup[i];
  const p2 = lookup[i+1];
  const frac = (kya - p1.kya) / (p2.kya - p1.kya);
  
  return {
    level: p1.level + (p2.level - p1.level) * frac,
    temp: p1.temp + (p2.temp - p1.temp) * frac,
    sed: p1.sed + (p2.sed - p1.sed) * frac,
    type: p1.level > 20 ? p2.type : p1.type,
    desc: p1.level > 20 ? p2.desc : p1.desc
  };
}

function resizePaleoCanvas() {
  const canvas = document.getElementById("paleoCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initPaleolimnologySimulator() {
  const slideTime = document.getElementById("paleo-time");
  const slideEcc = document.getElementById("paleo-ecc");
  const slideObliq = document.getElementById("paleo-obliq");
  const slidePrec = document.getElementById("paleo-prec");

  if (!slideTime) return;

  const valTime = document.getElementById("val-paleo-time");
  const valEcc = document.getElementById("val-paleo-ecc");
  const valObliq = document.getElementById("val-paleo-obliq");
  const valPrec = document.getElementById("val-paleo-prec");

  function updateParams() {
    paleoState.timeKya = parseInt(slideTime.value);
    paleoState.eccentricity = parseFloat(slideEcc.value);
    paleoState.obliquity = parseFloat(slideObliq.value);
    paleoState.precession = parseInt(slidePrec.value);

    valTime.innerText = `${paleoState.timeKya} kya (${paleoState.timeKya === 0 ? "Günümüz" : "Bin Yıl Önce"})`;
    valEcc.innerText = paleoState.eccentricity.toFixed(4);
    valObliq.innerText = `${paleoState.obliquity.toFixed(2)}°`;
    valPrec.innerText = `${paleoState.precession}°`;

    // Overwrite default sliders to match historic time defaults slightly (helping user adjust)
    // Formula for orbital insolation
    const insolation = 485 + 30 * (paleoState.eccentricity - 0.0167) * 45 + 10 * (paleoState.obliquity - 23.44) + 14 * Math.sin(paleoState.precession * Math.PI / 180);
    paleoState.insolation = insolation;
  }

  [slideTime, slideEcc, slideObliq, slidePrec].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  updateParams();
}

function startPaleolimnologySimulation() {
  const canvas = document.getElementById("paleoCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const wLevelEl = document.getElementById("paleo-water-level");
  const lTypeEl = document.getElementById("paleo-lake-type");
  const tAnomEl = document.getElementById("paleo-temp-anomaly");
  const sRateEl = document.getElementById("paleo-sed-rate");
  const insolEl = document.getElementById("paleo-insolation");
  const alertEl = document.getElementById("paleoAlert");

  if (paleoInterval) clearInterval(paleoInterval);

  paleoInterval = setInterval(() => {
    paleoState.animationTime += 0.05;

    const baseData = getPaleoData(paleoState.timeKya);

    // Dynamic coupling based on sliders
    // Obliquity increase increases summer temperatures slightly. Eccentricity amplifies precession seasonal swings.
    const orbTempJitter = (paleoState.obliquity - 23.44) * 0.8 + (paleoState.eccentricity - 0.0167) * 12 * Math.cos(paleoState.precession * Math.PI / 180);
    
    // Su seviyesi ve sedimantasyon hesapları
    const finalLevel = Math.max(-3.0, baseData.level - orbTempJitter * 2.5);
    const finalTemp = baseData.temp + orbTempJitter;
    const finalSed = baseData.sed * (1.0 + (finalLevel / 50.0));

    // Telemetry updates
    if (wLevelEl) wLevelEl.innerText = `${finalLevel >= 0 ? "+" : ""}${finalLevel.toFixed(1)} m`;
    if (lTypeEl) {
      let lType = baseData.type;
      if (finalLevel > 35) lType = "Derin Tatlı Su (Pluvial)";
      else if (finalLevel > 15) lType = "Orta Derin Limnik Kil";
      else if (finalLevel > 2) lType = "Sığ Salin Jips";
      else if (finalLevel > -0.5) lType = "Sığ Hipersalin Halit";
      else lType = "Ekstrem Kurak Sabka / Çamur Düzlüğü";
      lTypeEl.innerText = lType;
    }
    if (tAnomEl) tAnomEl.innerText = `${finalTemp >= 0 ? "+" : ""}${finalTemp.toFixed(1)} °C`;
    if (sRateEl) sRateEl.innerText = `${finalSed.toFixed(2)} mm/yıl`;
    if (insolEl) insolEl.innerText = `${Math.round(paleoState.insolation)} W/m²`;

    // Status message
    if (alertEl) {
      let statusText = "";
      let color = "var(--secondary-cyan)";
      if (finalLevel > 25) {
        statusText = `<strong>Buzul (Pluvial) Göl Safhası:</strong> Havzada genişleyen ormanlar, düşük buharlaşma ve derin tatlı su ekosistemi hakimdir.`;
        color = "#3b82f6";
      } else if (finalLevel < 0) {
        statusText = `<strong>Buzul-Arası Kurak Evre:</strong> Sıcaklık yüksek, buharlaşma ekstrem boyutta. Göl yatağı kuru tuz kabuğu ve sabkalara dönüşmüştür.`;
        color = "#ef4444";
      } else {
        statusText = `<strong>Dengeli Yarı Kurak Evre:</strong> Mevcut duruma yakın sığ su ve tuzcul evaporit çökelleri birikmektedir.`;
        color = "#fbbf24";
      }
      alertEl.innerHTML = `<i class="fa-solid fa-earth-europe" style="color:${color}"></i> <span style="color:#f8fafc">${statusText}</span>`;
      alertEl.style.borderColor = color + "33";
    }

    // Render Canvas
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    const midX = w / 2;

    // Split Canvas: Left (Orbital Diagram) and Right (Lake Sediment profile)
    ctx.strokeStyle = "rgba(255, 255, 255, 0.1)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(midX, 0);
    ctx.lineTo(midX, h);
    ctx.stroke();

    // ----------------------------------------------------
    // LEFT VIEW: Orbital Mechanics (Earth & Sun)
    // ----------------------------------------------------
    const cx = midX / 2;
    const cy = h / 2 - 10;
    
    // Draw Sun
    ctx.fillStyle = "#eab308";
    ctx.beginPath();
    ctx.arc(cx, cy, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = "rgba(234, 179, 8, 0.3)";
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.arc(cx, cy, 17 + Math.sin(paleoState.animationTime * 2) * 1.5, 0, Math.PI * 2);
    ctx.stroke();

    // Orbit ellipse (Eccentricity affects ratios)
    const rx = 55;
    const ry = 40 * (1 - (paleoState.eccentricity * 3));
    ctx.strokeStyle = "rgba(255, 255, 255, 0.12)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
    ctx.stroke();

    // Earth position along orbit
    const orbitAngle = paleoState.animationTime * 0.5;
    const ex = cx + rx * Math.cos(orbitAngle);
    const ey = cy + ry * Math.sin(orbitAngle);

    // Draw Earth
    ctx.fillStyle = "#3b82f6";
    ctx.beginPath();
    ctx.arc(ex, ey, 6, 0, Math.PI * 2);
    ctx.fill();

    // Tilt Axis (Obliquity)
    const tiltAngle = (paleoState.obliquity * Math.PI) / 180;
    ctx.strokeStyle = "#4ade80";
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    ctx.moveTo(ex - 10 * Math.sin(tiltAngle), ey - 10 * Math.cos(tiltAngle));
    ctx.lineTo(ex + 10 * Math.sin(tiltAngle), ey + 10 * Math.cos(tiltAngle));
    ctx.stroke();

    // Label
    ctx.fillStyle = "rgba(255,255,255,0.4)";
    ctx.font = "bold 6px Outfit";
    ctx.textAlign = "center";
    ctx.fillText("MİLANKOVİTCH DÖNGÜLERİ", cx, h - 10);

    // ----------------------------------------------------
    // RIGHT VIEW: Lake Sediment and Water Level
    // ----------------------------------------------------
    const rx2 = midX + 15;
    const rw = w - rx2 - 15;

    // Draw geology strata (fixed)
    const strataY = h - 50;
    
    // Stratum 1: Basal clay (gray)
    ctx.fillStyle = "#374151";
    ctx.fillRect(rx2, strataY, rw, 40);
    // Stratum 2: Marl (greenish gray)
    ctx.fillStyle = "#4b5563";
    ctx.fillRect(rx2, strataY - 15, rw, 15);
    // Stratum 3: Gypsum/Halite layer (white-brown)
    ctx.fillStyle = "#9ca3af";
    ctx.fillRect(rx2, strataY - 25, rw, 10);

    // Label Strata
    ctx.fillStyle = "rgba(255,255,255,0.3)";
    ctx.font = "5px Outfit";
    ctx.fillText("Marn / Kil", rx2 + 25, strataY + 12);
    ctx.fillText("Evaporit", rx2 + 25, strataY - 20);

    // Draw water block (Dynamic level)
    // Mapping: finalLevel (-3m to 50m) maps to (strataY - 25) to (30px)
    const maxH = strataY - 25 - 30;
    const normLevel = Math.min(1.0, Math.max(0.0, (finalLevel + 3.0) / 53.0));
    const waterH = maxH * normLevel;
    const waterY = strataY - 25 - waterH;

    if (waterH > 0) {
      // Deep blue for deep water, greenish-pink for shallow evaporite
      const waterGrad = ctx.createLinearGradient(0, waterY, 0, strataY - 25);
      if (finalLevel > 15) {
        waterGrad.addColorStop(0, "rgba(59, 130, 246, 0.6)");
        waterGrad.addColorStop(1, "rgba(29, 78, 216, 0.3)");
      } else {
        waterGrad.addColorStop(0, "rgba(255, 117, 151, 0.5)");
        waterGrad.addColorStop(1, "rgba(0, 229, 255, 0.25)");
      }
      ctx.fillStyle = waterGrad;
      ctx.fillRect(rx2, waterY, rw, waterH);
    } else {
      // Cracked soil representation for negative water levels
      ctx.strokeStyle = "#b45309";
      ctx.lineWidth = 1.5;
      ctx.strokeRect(rx2, strataY - 25, rw, 1);
    }

    ctx.fillStyle = "#ffffff";
    ctx.font = "bold 6px Outfit";
    ctx.fillText("GÖL HAVZASI EN KESİTİ", midX + (w - midX)/2, h - 10);

  }, 50);
}

/* ==========================================================================
   30. ALGAE BIO-REACTOR SIMULATOR (v15.0)
   ========================================================================== */
let reactorInterval = null;
let reactorState = {
  co2Feed: 400,
  light: 500,
  nutrients: 16,
  temperature: 25,
  growthRate: 0.45,
  cellDensity: "Orta",
  carbonSeq: 12.5,
  bioplasticYield: 14.8,
  lipidContent: 28.4,
  animationTime: 0,
  cells: []
};

function resizeReactorCanvas() {
  const canvas = document.getElementById("reactorCanvas");
  if (canvas) {
    const rect = canvas.parentElement.getBoundingClientRect();
    canvas.width = rect.width;
  }
}

function initAlgaeReactorSimulator() {
  const slideCo2 = document.getElementById("reactor-co2");
  const slideLight = document.getElementById("reactor-light");
  const slideNut = document.getElementById("reactor-nutrients");
  const slideTemp = document.getElementById("reactor-temp");

  if (!slideCo2) return;

  const valCo2 = document.getElementById("val-reactor-co2");
  const valLight = document.getElementById("val-reactor-light");
  const valNut = document.getElementById("val-reactor-nut");
  const valTemp = document.getElementById("val-reactor-temp");

  function updateParams() {
    reactorState.co2Feed = parseInt(slideCo2.value);
    reactorState.light = parseInt(slideLight.value);
    reactorState.nutrients = parseInt(slideNut.value);
    reactorState.temperature = parseInt(slideTemp.value);

    valCo2.innerText = `${reactorState.co2Feed} ppm`;
    valLight.innerText = `${reactorState.light} W/m²`;
    valNut.innerText = `N/P ${reactorState.nutrients}`;
    valTemp.innerText = `${reactorState.temperature} °C`;
  }

  [slideCo2, slideLight, slideNut, slideTemp].forEach(slider => {
    slider.addEventListener("input", updateParams);
  });

  updateParams();
}

function startAlgaeReactorSimulation() {
  const canvas = document.getElementById("reactorCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");

  const growthEl = document.getElementById("reactor-growth-rate");
  const densityEl = document.getElementById("reactor-cell-density");
  const lipidEl = document.getElementById("reactor-lipid-content");
  const carbonEl = document.getElementById("reactor-carbon-sequestration");
  const plasticEl = document.getElementById("reactor-bioplastic-yield");
  const alertEl = document.getElementById("reactorAlert");

  if (reactorInterval) clearInterval(reactorInterval);

  // Initialize Dunaliella cell population
  reactorState.cells = [];
  const cellCount = 25;
  for (let i = 0; i < cellCount; i++) {
    reactorState.cells.push({
      x: 0.15 + Math.random() * 0.7,
      y: 0.15 + Math.random() * 0.7,
      vx: (Math.random() - 0.5) * 0.8,
      vy: (Math.random() - 0.5) * 0.8,
      size: 5 + Math.random() * 4,
      rotation: Math.random() * Math.PI
    });
  }

  reactorInterval = setInterval(() => {
    reactorState.animationTime += 0.05;

    const co2 = reactorState.co2Feed;
    const light = reactorState.light;
    const nut = reactorState.nutrients;
    const temp = reactorState.temperature;

    // Photosynthesis & growth equations
    // Temperature optimal is 28 °C
    const tempFactor = Math.max(0.05, 1.0 - Math.pow(Math.abs(temp - 28.0) / 18.0, 2));
    
    // Nutrient factor: too low N/P limits growth, but triggers high stress lipid/PHA accumulation
    const nutFactor = nut / (nut + 4.0);

    const growth = 1.8 * (co2 / (co2 + 400.0)) * (light / (light + 250.0)) * tempFactor * nutFactor;
    reactorState.growthRate = growth;

    // Stress levels drive lipid accumulation (%)
    // High light + low nutrients + temperature extremes increase lipid accumulation
    const stressIndex = (light / 1000.0) * (50.0 - nut) / 45.0;
    const lipid = 12.0 + 45.0 * Math.min(1.0, Math.max(0.0, stressIndex));
    reactorState.lipidContent = lipid;

    // Carbon Sequestration (tons/year)
    const carbon = growth * (co2 / 400.0) * 14.5;
    reactorState.carbonSeq = carbon;

    // Bioplastic yield (kg/day)
    const plastic = growth * (lipid / 100.0) * 22.0;
    reactorState.bioplasticYield = plastic;

    // Density category
    let density = "Normal";
    if (growth > 1.2) density = "Aşırı Yoğun";
    else if (growth > 0.8) density = "Yüksek Yoğunluk";
    else if (growth > 0.4) density = "Orta Yoğunluk";
    else density = "Düşük Yoğunluk";
    reactorState.cellDensity = density;

    // Update Telemetry
    if (growthEl) growthEl.innerText = `${reactorState.growthRate.toFixed(2)} g/L/gün`;
    if (densityEl) densityEl.innerText = `Hücre Yoğunluğu: ${reactorState.cellDensity}`;
    if (lipidEl) lipidEl.innerText = `%${reactorState.lipidContent.toFixed(1)}`;
    if (carbonEl) carbonEl.innerText = `${reactorState.carbonSeq.toFixed(1)} ton/yıl`;
    if (plasticEl) plasticEl.innerText = `${reactorState.bioplasticYield.toFixed(1)} kg/gün`;

    // Alert Status
    if (alertEl) {
      let statusText = "";
      let icon = "fa-flask";
      let color = "#10b981";
      if (lipid > 35) {
        statusText = "<strong>Biyoreaktör Stres Altında:</strong> Besin yetersizliği ve yüksek ışık alglerde yoğun yağ/biyoyakıt sentezini tetikliyor.";
        color = "#fbbf24";
      } else if (growth > 1.0) {
        statusText = "<strong>Maksimum Fotosentez Verimi:</strong> Optimum CO₂ ve sıcaklık. Karbon yakalama oranı en üst seviyededir.";
        color = "#10b981";
      } else if (tempFactor < 0.25) {
        statusText = "<strong>Termal Limit Aşıldı:</strong> Sıcaklık alg hücresel protein yapılarını zorluyor, büyüme durma noktasına yakın.";
        color = "#ef4444";
      } else {
        statusText = "<strong>Stabil Üretim:</strong> Algal fotosentez reaksiyonları dengeli devam ediyor.";
        color = "var(--secondary-cyan)";
      }
      alertEl.innerHTML = `<i class="fa-solid ${icon}" style="color:${color}"></i> <span style="color:#f8fafc">${statusText}</span>`;
      alertEl.style.borderColor = color + "33";
    }

    // Canvas drawing
    const w = canvas.width;
    const h = canvas.height;
    ctx.clearRect(0, 0, w, h);

    // Deep reactor transparent chamber gradient background
    const bgGrad = ctx.createLinearGradient(0, 0, 0, h);
    bgGrad.addColorStop(0, "#022c22");
    bgGrad.addColorStop(1, "#020617");
    ctx.fillStyle = bgGrad;
    ctx.fillRect(0, 0, w, h);

    // Reactor outline glass borders
    ctx.strokeStyle = "rgba(16, 185, 129, 0.2)";
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    // CO2 bubble sparger animation (bubbles rising from sparger at bottom)
    const bubbleCount = Math.min(50, Math.round(co2 / 20));
    ctx.fillStyle = "rgba(0, 229, 255, 0.4)";
    for (let i = 0; i < bubbleCount; i++) {
      const bx = 20 + ((reactorState.animationTime * 90 + i * 45) % (w - 40));
      const by = h - 20 - ((reactorState.animationTime * 140 + i * 25) % (h - 40));
      ctx.beginPath();
      ctx.arc(bx, by, 1.5 + (i % 3), 0, Math.PI * 2);
      ctx.fill();
    }

    // Cells: Draw Dunaliella Salina cells (red/green shift based on stress)
    // Low nutrient (N/P < 15) and high light increases red beta-carotene/lipid content
    const redFactor = Math.min(1.0, Math.max(0.0, (lipid - 12) / 35.0));

    reactorState.cells.forEach(c => {
      // Particle drift motion
      c.x += c.vx * 0.5 * (1 + growth * 0.5);
      c.y += c.vy * 0.5 * (1 + growth * 0.5);

      // Boundaries collision bounce
      if (c.x < 0.05 || c.x > 0.95) c.vx *= -1;
      if (c.y < 0.05 || c.y > 0.95) c.vy *= -1;

      // Keep cell in bounds
      c.x = Math.max(0.06, Math.min(0.94, c.x));
      c.y = Math.max(0.06, Math.min(0.94, c.y));

      const cx = c.x * w;
      const cy = c.y * h;

      // Cell rotation
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(c.rotation + reactorState.animationTime * c.vx);

      // Cell body color (green-to-red gradient based on carotene accumulation)
      const cellGrad = ctx.createRadialGradient(0, 0, 1, 0, 0, c.size);
      
      const greenColor = `rgba(${Math.round(34 + 180 * redFactor)}, ${Math.round(197 - 120 * redFactor)}, ${Math.round(94 - 40 * redFactor)}, 0.85)`;
      const coreColor = `rgba(${Math.round(239 * redFactor)}, ${Math.round(68 * redFactor)}, ${Math.round(68 * redFactor)}, 0.95)`;
      
      cellGrad.addColorStop(0, coreColor);
      cellGrad.addColorStop(1, greenColor);

      ctx.fillStyle = cellGrad;
      ctx.beginPath();
      ctx.ellipse(0, 0, c.size, c.size * 0.7, 0, 0, Math.PI * 2);
      ctx.fill();

      // Flagella drawing (two small flagellar tails at the front)
      ctx.strokeStyle = "rgba(255,255,255,0.4)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(-c.size, 0);
      ctx.quadraticCurveTo(-c.size - 12, -8, -c.size - 18, -6 + Math.sin(reactorState.animationTime * 8) * 3);
      ctx.moveTo(-c.size, 0);
      ctx.quadraticCurveTo(-c.size - 12, 8, -c.size - 18, 6 + Math.cos(reactorState.animationTime * 8) * 3);
      ctx.stroke();

      // Draw accumulated lipid/fat droplets inside the cells under stress
      if (lipid > 20) {
        const numDroplets = Math.min(4, Math.floor((lipid - 10) / 8));
        ctx.fillStyle = "rgba(234, 179, 8, 0.75)";
        for (let j = 0; j < numDroplets; j++) {
          const dx = (j % 2 === 0 ? 3 : -3) * (j / 2 + 0.5);
          const dy = (j % 2 === 0 ? -2 : 2) * (j / 2 + 0.5);
          ctx.beginPath();
          ctx.arc(dx, dy, 1.5, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      ctx.restore();
    });

  }, 40);
}




