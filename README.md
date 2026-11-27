# PARS LINE LAB v0.4.3

Çizgi izleyen robot simülatörü.

## v0.4.3 yenilikleri
- PNG, JPG veya WebP biçiminde dış pist görseli yükleme.
- Robotu simülasyon alanında sürükleyerek veya yerleştirme düğmesiyle konumlandırma.
- Robot yönünü açı kontrolüyle ayarlama.
- Başlangıç çizgisini simülasyon alanına tıklayarak yerleştirme ve yönünü ayarlama.
- Simülasyon süresi, robot başlangıç çizgisini ileri yönde geçince başlar.
- Yüklenen pist görsellerinde sensör algılama, çizgi renk standardı seçimine göre piksel örnekleme yapar.

## Pist görseli
Pist görselini simülasyon panelindeki **Dışarıdan pist resmi yükle** alanından seçin. Görsel en-boy oranı korunarak simülasyon alanına sığdırılır. Ardından çizgi standardını (siyah zemin/beyaz çizgi veya beyaz zemin/siyah çizgi) seçin.

## Robotu yerleştirme
Robotu doğrudan canvas üzerinde sürükleyebilir veya **Robotu piste tıklayarak yerleştir** düğmesini kullanabilirsiniz. Yönünü açı sliderı ile ayarlayın.

## Sayaç
Başlat düğmesi robotu hareket ettirir. Sayaç, robot başlangıç çizgisini belirtilen ileri yönde geçtiğinde çalışmaya başlar. Başlangıç çizgisi canvas'a tıklanarak taşınabilir ve açısı slider ile ayarlanabilir.

## Kurulum
```bash
npm install
npm run dev
```

## Yayın
```bash
npm run build
```
GitHub'a commit edildiğinde bağlı Vercel projesi otomatik deploy yapar.
