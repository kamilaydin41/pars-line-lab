# PARS LINE LAB v0.1.0

Configurable 2D line follower robot simulator prototype.

## Features
- Canvas robot illustration with chassis, wheels, motor block and configurable sensor array.
- Selectable sensor counts (3, 5, 6, 8, 10, 12, 16), sensor type and array width.
- Independent left/right RPM sliders, chassis size and wheel diameter settings.
- Four preset tracks.
- Start/resume, pause and reset controls, elapsed timer and simulation speed.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

This initial release is a visual motion prototype: hardware settings alter the model and display, while the robot follows preset waypoint paths. Sensor-based closed-loop control and realistic differential-drive physics are planned for later versions.
