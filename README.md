# PARS LINE LAB v0.4.5

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
