# PARS LINE LAB v0.4.9

## PID kontrol güncellemesi

PID, zaman aralığına (dt) bağlı ayrık kontrol olarak çalışır:

- **P:** anlık normalize çizgi hatası (`Kp * error`). Kp yükseldikçe düzeltme kuvveti artar; aşırı değer salınım yaratabilir.
- **I:** hatanın zamana göre birikimi (`integral += error * dt`). Sürekli küçük sapmaları gidermeye yardım eder. Integral sınırlandırılır ve anti-windup uygulanır. Çizgi izleyen robotlarda genellikle küçük tutulması, hatta sıfırdan başlanması önerilir.
- **D:** hata değişim hızını (`(error - previousError) / dt`) hesaplar; filtrelenerek ani sensör değişimlerinin motor komutlarına aşırı yansıması azaltılır.

PID terimleri motorlar arasındaki hız farkını belirler. Çıkış ±0.72 sınırına alınır. Simülatör PID terimlerini P/I/D/Çıkış olarak canlı gösterir.

## Yayınlama

GitHub repository'ye proje dosyalarını yükleyip commit edin. Repository Vercel'e bağlıysa commit sonrası deployment otomatik başlar.
