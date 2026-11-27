# PARS LINE LAB v0.4.7

Çizgi izleyen robot eğitim simülatörü.

## v0.4.5
- Hazır T1-T5 pistleri kapalı döngü/tur parkurları olacak şekilde güncellendi.
- Yerleşik otomatik PID kontrolü varsayılan kontrol modu olarak çalışır.
- Robot Kontrol Kodları panelinden kullanıcı JavaScript `controller(ctx)` fonksiyonunu yazıp özel motor komutlarıyla simülasyonu kontrol edebilir.
- Özel kontrol fonksiyonunun `{left, right}` döndürmesi beklenir; değerler -1 ile 1 arasında sınırlandırılır.
- Kontrol panelleri sağ tarafta iki sütunlu kompakt düzen olarak sunulur; kod paneli tam genişlik kullanır.
- v0.4.3'ten pist yükleme, robot konumlandırma ve start-line timer özellikleri korunmuştur.

## Özel kontrol fonksiyonu örneği

```js
function controller(ctx) {
  const correction = Math.max(-1, Math.min(1, ctx.error * 1.4));
  return { left: 0.72 - correction * 0.45, right: 0.72 + correction * 0.45 };
}
```

`ctx` içinde `error`, `sensors`, `dt`, `integral`, `derivative` ve `previous` alanları bulunur.

## Çalıştırma

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```


### v0.4.5
- 3, 5, and other sensor counts now use a normalized sensor-centroid error. The center sensor (or central pair) produces a straight-driving zero error when centered.
- Sensor readings average a small pixel footprint for less fragile line detection.
- Configuration panels are moved below the live sensor array.


### v0.4.6
- Sensor array sampling position is moved to a forward, near-center location on the robot, using rendered robot length as a scale reference.
- Sensor array remains laterally centered for all supported sensor counts.
- Sensor array span is clamped relative to robot width so higher sensor counts stay on the chassis.


## v0.4.7 – Merkez sensör düz sürüş düzeltmesi
- Tek merkez sensör (tek sayılı diziler) veya dengeli merkez çiftinin (çift sayılı diziler) çizgiyi algılaması halinde küçük hata değerleri sıfırlanır.
- Merkezdeki okumalar PID integralini sıfırlar ve türev düzeltmesini kapatarak düz sürüşte birikmiş düzeltmenin devam etmesini önler.
- Sensör hata deadband'i jitter'ı azaltacak şekilde genişletildi.
- Sol/sağ motor RPM farkı, merkez hata sıfırken eşit teker hızına kompansasyon ile dengelenir.
