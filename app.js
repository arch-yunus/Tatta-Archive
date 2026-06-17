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
          if (targetId === "mysteries") {
            setTimeout(() => {
              resizeIllusionCanvas();
              startRadarSweep();
            }, 100);
          }
        }
      });
      
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

