# PARS LINE LAB v0.4.14

## Üç sütunlu kontrol paneli

- Simülasyon ve canlı sensör dizisi üstte kalır.
- Simülasyon kontrol paneli tam genişlikte yer alır.
- Pist, robot yerleşimi, sensör ve motor ayarları masaüstünde üç sütuna düzenlenir.
- Özel kod editörü ve bilgilendirme alanı geniş yer kaplayacak şekilde düzenlenir.
- 1050 px altında iki sütun, 620 px altında tek sütun düzenine geçilir.

## PID

Önceki sürümün PID kontrol mantığı, sensör/motor/pist ayarları korunmuştur.

## Yayınlama

GitHub repository'ye proje dosyalarını yükleyip commit edin. Repository Vercel'e bağlıysa commit sonrası deployment otomatik başlar.


Version v0.4.14 explicitly forces the main layout into one full-width simulation row followed by a full-width settings grid with three columns (two below 1050px, one below 620px). The header badge displays the version and layout fix.
