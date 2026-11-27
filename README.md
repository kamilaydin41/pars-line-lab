# PARS LINE LAB v0.4.1

Çizgi izleyen robot simülatörü.

## v0.4.1
- Sensör örnekleme robotun ilerleme yönünde, sensör barı boyunca dik yerleştirildi.
- Çizgi algılayan sanal sensör LED'leri yeşil; algılamayanlar kırmızı.
- PID-benzeri diferansiyel sürüşün yön/polaritesi düzeltildi.
- Başlangıç PID değerleri otomatik olarak güvenli alt sınırlarla ayarlanır.
- Çizgi kaybında son algılanan yönle arama davranışı.

## Yayınlama
GitHub repository'de dosyaları güncelleyin; Vercel bağlı repository üzerinden otomatik deploy yapar.

## Yerel geliştirme
```bash
npm install
npm run dev
```
