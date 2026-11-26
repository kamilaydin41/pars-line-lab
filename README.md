# PARS LINE LAB v0.3.3

## v0.3.3 – PID-benzeri sensör kontrollü hareket
- Robotun ön (burun) tarafı, tekerleklerin karşı tarafı olarak sensör dizisinin konumunda örneklenir.
- Robot artık waypoint interpolasyonu ile pistte zorla ilerletilmez. Sensör çizgi yakınlık değerleri bir ağırlıklı hata üretir.
- Eğitsel P/I/D-benzeri kontrol, diferansiyel motor hızlarını ayarlayarak robot yönünü düzeltir.
- Çizgi kaybında son algılama yönünde basit arama davranışı uygulanır.
- RPM, teker çapı, şasi genişliği, simülasyon hızı ve sensör sayısı model hareketini etkiler.

## GitHub/Vercel
GitHub repository'ye bu proje dosyalarını yükleyip commit edin. Vercel bağlı repository'den otomatik deploy edecektir.

## Çalıştırma
`npm install` ardından `npm run dev`.

> Kontrol modeli eğitim amaçlı yaklaşık bir diferansiyel sürüş/PID-benzeri modeldir; gerçek robot dinamiklerinin kalibre edilmiş birebir simülasyonu değildir.
