#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Tatta-Archive: Lake Tuz Water-Balance & Climate Projection Model
-----------------------------------------------------------------
Bu script, Tuz Gölü Havzası'ndaki hidrolojik dengenin (su bütçesi) iklim değişikliği 
ve aşırı yeraltı suyu kullanımı (vahşi tarımsal sulama) parametreleri altında 
2025 - 2055 yılları arasındaki değişimini simüle eder.

Su Bütçesi Formülü:
  dV/dt = Inflow - Outflow
  Burada:
    - Inflow (Girdiler) = Yağış (Precipitation) + Akarsu Akışı (Rivers) + Yeraltı Suyu Beslemesi (Groundwater Inflow)
    - Outflow (Çıktılar) = Buharlaşma (Evaporation) + Yeraltı Suyu Çekimi (Agricultural Groundwater Extraction)
"""

import math

class LakeTuzModel:
    def __init__(self, initial_area_km2=520.0, initial_depth_m=0.25):
        # 2025 Başlangıç parametreleri
        self.area = initial_area_km2
        self.max_depth = initial_depth_m
        
        # Ortalama Havza Parametreleri (Yıllık ortalamalar)
        self.precipitation_rate_m_year = 0.30  # Havzadaki yıllık ortalama yağış (300 mm)
        self.evaporation_rate_m_year = 1.40    # Yıllık ortalama buharlaşma potansiyeli (1400 mm)
        
        # Akarsu girdileri (m3/yıl) - Peçeneközü, Melendiz vb. toplamı yaklaşık 120 milyon m3
        self.river_inflow_m3 = 120 * 1e6
        
        # Havzaya doğal yeraltı suyu beslenimi (m3/yıl)
        self.natural_gw_recharge_m3 = 250 * 1e6

    def simulate_year(self, year, scenario="RCP_8.5", gw_extraction_m3=2.3e9):
        """
        1 yıllık su dengesi değişimi simülasyonu.
        
        Senaryolar:
          - "Sürdürülebilir": Yeraltı suyu çekimi %50 azaltılmış, sıcaklık artışı sabit.
          - "RCP_4.5" (Orta Salınım): Sıcaklık artışı yavaş, yağışlar %5 azalıyor, buharlaşma %10 artıyor.
          - "RCP_8.5" (Yüksek Salınım): Sıcaklık artışı hızlı, yağışlar %15 azalıyor, buharlaşma %25 artıyor.
        """
        # Senaryoya göre iklim çarpanları
        if scenario == "Sürdürülebilir":
            temp_mult = 1.0
            precip_mult = 1.0
            evap_mult = 1.0
            gw_mult = 0.5  # Tarımsal çekim yarıya iniyor
        elif scenario == "RCP_4.5":
            # Yıllara göre kümülatif etki (2025'ten itibaren her yıl artan etki)
            years_passed = year - 2025
            temp_mult = 1.0 + (years_passed * 0.01)
            precip_mult = 1.0 - (years_passed * 0.002)
            evap_mult = 1.0 + (years_passed * 0.004)
            gw_mult = 1.0 + (years_passed * 0.01)  # Kuraklık sebebiyle yeraltı suyuna talep artıyor
        else: # RCP_8.5 (Worst Case)
            years_passed = year - 2025
            temp_mult = 1.0 + (years_passed * 0.02)
            precip_mult = 1.0 - (years_passed * 0.005)
            evap_mult = 1.0 + (years_passed * 0.008)
            gw_mult = 1.0 + (years_passed * 0.02)  # Kontrolsüz aşırı çekim

        # Yağış ve Buharlaşma hesaplamaları
        precip = self.precipitation_rate_m_year * precip_mult
        evap = self.evaporation_rate_m_year * evap_mult
        
        # Havza alanına göre metreküp cinsinden hacim değişimleri
        lake_area_m2 = self.area * 1e6
        precip_vol_m3 = lake_area_m2 * precip
        evap_vol_m3 = lake_area_m2 * evap
        
        # Yeraltı suyu dengesi
        # Çekilen su doğal beslenmeden fazlaysa göle giden yeraltı suyu beslemesi azalır (akifer çöküşü)
        gw_balance_m3 = self.natural_gw_recharge_m3 - (gw_extraction_m3 * gw_mult)
        
        if gw_balance_m3 < 0:
            # Negatif bakiye göle giden yeraltı suyu sızıntısını keser ve obruk oluşumunu tetikler
            gw_to_lake_m3 = max(0.0, self.natural_gw_recharge_m3 * 0.2 + gw_balance_m3 * 0.05)
            obruks_formed = int(abs(gw_balance_m3) / 1e6 * 0.8) # Obruk tetikleme simülasyonu
        else:
            gw_to_lake_m3 = self.natural_gw_recharge_m3 * 0.2
            obruks_formed = 2 # Doğal seviye

        # Toplam Girdiler ve Çıktılar
        total_inflow_m3 = precip_vol_m3 + self.river_inflow_m3 + gw_to_lake_m3
        total_outflow_m3 = evap_vol_m3
        
        # Net Hacim Değişimi (m3)
        net_change_m3 = total_inflow_m3 - total_outflow_m3
        
        # Mevcut göl hacmini tahmin edelim (Basit bir konik/çanak modeliyle alan-derinlik ilişkisi)
        # Hacim V = 1/3 * Alan * Derinlik (ortalama)
        current_volume_m3 = (lake_area_m2 * self.max_depth) / 2.0
        new_volume_m3 = current_volume_m3 + net_change_m3
        
        if new_volume_m3 <= 0:
            new_volume_m3 = 0.0
            self.area = 0.0
            self.max_depth = 0.0
        else:
            # Yeni alan ve derinlik hesaplama (çanak modeline göre oranlama)
            # Hacim azaldıkça alan karekök oranında, derinlik doğrusal azalır
            vol_ratio = new_volume_m3 / (current_volume_m3 if current_volume_m3 > 0 else 1.0)
            
            # Alan değişimi
            self.area = max(0.0, self.area * math.sqrt(vol_ratio))
            # Derinlik değişimi
            self.max_depth = max(0.0, self.max_depth * vol_ratio)
            
            # Maksimum fiziksel sınırları aşmamalı (Havza sınırları)
            if self.area > 1660.0:
                self.area = 1660.0
            if self.max_depth > 1.5:
                self.max_depth = 1.5

        return {
            "year": year,
            "area_km2": round(self.area, 2),
            "max_depth_m": round(self.max_depth, 3),
            "precipitation_m3": round(precip_vol_m3, 1),
            "evaporation_m3": round(evap_vol_m3, 1),
            "new_obruks": obruks_formed
        }


def run_projection():
    print("=== TUZ GÖLÜ HİDROLOJİK PROJEKSİYON SİMÜLASYONU (2025 - 2055) ===")
    
    scenarios = ["Sürdürülebilir", "RCP_4.5", "RCP_8.5"]
    
    for sc in scenarios:
        print(f"\nSenaryo: {sc}")
        print("-" * 65)
        print(f"{'Yıl':<6} | {'Göl Alanı (km2)':<16} | {'Maks. Derinlik (m)':<18} | {'Yeni Obruklar':<12}")
        print("-" * 65)
        
        # Her senaryo için modeli baştan başlatıyoruz
        model = LakeTuzModel()
        
        for y in range(2025, 2056, 5):
            res = model.simulate_year(y, scenario=sc)
            print(f"{res['year']:<6} | {res['area_km2']:<16} | {res['max_depth_m']:<18} | {res['new_obruks']:<12}")
            
            # Model durumunu güncelliyoruz (her 5 yıllık adım için aradaki yılları simüle edelim)
            for sub_year in range(y+1, min(y+5, 2056)):
                model.simulate_year(sub_year, scenario=sc)


if __name__ == "__main__":
    run_projection()
