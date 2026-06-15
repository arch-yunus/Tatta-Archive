#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Tatta-Archive: Sentinel-2 & Landsat NDWI Water Surface Analysis Script
----------------------------------------------------------------------
Bu script, Tuz Gölü'nün uydu görüntülerinden (Sentinel-2 veya Landsat) su yüzey 
alanını NDWI (Normalized Difference Water Index) yöntemiyle nasıl çıkarılacağını 
gösteren açık kaynaklı bir analiz örneğidir.

Formül:
  NDWI = (Green - NIR) / (Green + NIR)
  Burada:
    - Sentinel-2 için: Green = Band 3, NIR = Band 8
    - Landsat 8 için: Green = Band 3, NIR = Band 5

Eşik Değeri (Threshold):
  > 0 veya > 0.1 değerleri genellikle açık su yüzeylerini temsil eder.
  Tuz Gölü gibi yüksek tuzcul kristallenmenin olduğu göllerde eşik değeri 
  lokal kalibrasyon gerektirir.
"""

import os
import sys

# Not: Bu kütüphaneler gerçek coğrafi analizler için gereklidir.
# Eğer yüklü değilse, kullanıcıya kurması için bilgi verilir.
try:
    import numpy as np
    # rasterio ve matplotlib opsiyonel olarak kontrol ediliyor
    import rasterio
    from rasterio.plot import show
except ImportError:
    print("[WARN] Bu scripti tam fonksiyonel çalıştırmak için 'numpy' ve 'rasterio' kütüphaneleri gereklidir.")
    print("[WARN] Yüklemek için: pip install numpy rasterio matplotlib")
    # Mock çalışması için basit kütüphaneler tanımlıyoruz
    np = None


def calculate_ndwi(green_band_path, nir_band_path):
    """
    Yeşil ve Yakın Kızılötesi (NIR) bant dosyalarını okur ve NDWI hesaplar.
    """
    if np is None or 'rasterio' not in sys.modules:
        print("[ERROR] Gerekli kütüphaneler eksik olduğu için hesaplama yapılamadı.")
        return None

    print(f"[INFO] Yeşil Bant Okunuyor: {green_band_path}")
    print(f"[INFO] NIR Bant Okunuyor: {nir_band_path}")

    with rasterio.open(green_band_path) as green_src:
        green = green_src.read(1).astype('float32')
        meta = green_src.meta

    with rasterio.open(nir_band_path) as nir_src:
        nir = nir_src.read(1).astype('float32')

    # Sıfıra bölünme hatasını engellemek için paydada sıfır kontrolü yapıyoruz
    denominator = green + nir
    # Sıfır olan pikselleri maskeliyoruz veya küçük bir değer ekliyoruz
    denominator[denominator == 0] = 0.00001
    
    ndwi = (green - nir) / denominator

    return ndwi, meta


def extract_water_area(ndwi, pixel_size_m=10.0, threshold=0.1):
    """
    NDWI matrisinden belirlenen eşik değerine göre su piksellerini filtreler
    ve toplam alanı kilometrekare (km2) cinsinden hesaplar.
    """
    if ndwi is None:
        return 0.0
    
    # Eşik değerinin üstündeki pikseller su olarak kabul edilir
    water_pixels = np.sum(ndwi > threshold)
    
    # 1 pikselin alanı (Sentinel-2 için 10m x 10m = 100 m2)
    pixel_area_m2 = pixel_size_m * pixel_size_m
    
    # Toplam alanı m2'den km2'ye dönüştürme
    total_area_km2 = (water_pixels * pixel_area_m2) / 1e6
    
    print(f"[INFO] Eşik Değeri (NDWI > {threshold}) altındaki su pikseli sayısı: {water_pixels}")
    print(f"[INFO] Hesaplanan Su Yüzey Alanı: {total_area_km2:.2f} km²")
    
    return total_area_km2


def save_raster(data, meta, output_path):
    """
    Oluşturulan NDWI matrisini GeoTIFF formatında kaydeder.
    """
    if np is None or 'rasterio' not in sys.modules:
        return
        
    meta.update(dtype=rasterio.float32, count=1)
    
    with rasterio.open(output_path, 'w', **meta) as dst:
        dst.write(data, 1)
    print(f"[SUCCESS] NDWI raster dosyası kaydedildi: {output_path}")


if __name__ == "__main__":
    print("=== Tatta-Archive Sentinel-2 Analiz Modülü ===")
    
    # Mock veri ile bir test çalıştırılması (Eğer dosyalar yoksa bilgilendirme amaçlı)
    green_test = "sentinel2_b03_green.tif"
    nir_test = "sentinel2_b08_nir.tif"
    
    if not os.path.exists(green_test) or not os.path.exists(nir_test):
        print("\n[MOCK RUN] Gerçek GeoTIFF dosyaları bulunamadı. Simüle edilmiş veri üretiliyor...")
        # Simüle numpy dizisi üreterek çalışma mantığını doğrulayalım
        if np is not None:
            # 1000x1000 piksellik bir göl alanı simülasyonu
            simulated_green = np.random.rand(1000, 1000).astype('float32') * 0.4
            simulated_nir = np.random.rand(1000, 1000).astype('float32') * 0.1 # Su için NIR düşüktür
            
            # Merkezde bir dairesel su kütlesi oluşturalım
            y, x = np.ogrid[-500:500, -500:500]
            mask = x**2 + y**2 < 350**2 # 350 piksel yarıçaplı göl
            
            # Su olan yerlerde yeşili yükseltip NIR'ı çok düşürelim
            simulated_green[mask] = 0.35
            simulated_nir[mask] = 0.05
            
            denom = simulated_green + simulated_nir
            denom[denom == 0] = 0.00001
            simulated_ndwi = (simulated_green - simulated_nir) / denom
            
            # Alan hesapla (1 piksel = 10m x 10m)
            area = extract_water_area(simulated_ndwi, pixel_size_m=10.0, threshold=0.1)
            print(f"[MOCK RUN] Simüle edilen göl alanı: {area:.2f} km² (Beklenen: ~38.48 km²)")
        else:
            print("[INFO] Analiz mantığı: NDWI formülü uygulanarak su pikselleri izole edilir ve piksel çözünürlüğü ile çarpılarak alan bulunur.")
            print("[INFO] Kütüphaneleri kurup gerçek verilerle çalıştırmayı deneyin: 'pip install numpy rasterio'")
    else:
        # Gerçek verilerle çalıştır
        try:
            ndwi, meta = calculate_ndwi(green_test, nir_test)
            extract_water_area(ndwi, pixel_size_m=10.0, threshold=0.1)
            save_raster(ndwi, meta, "tuz_golu_ndwi_output.tif")
        except Exception as e:
            print(f"[ERROR] Gerçek veri işlenirken hata oluştu: {e}")
