# PARS LINE LAB v0.2.0

Line-following robot simulator prototype. Built with React and Vite.

## v0.2.0
- Live simulated sensor sampling against the track centerline.
- Visual sensor LED states on the robot and sensor status panel.
- Analog-style numeric readings and digital display mode.
- Configurable sensor count and array width.
- Configurable track presets, chassis, wheel and motor RPM.
- Pause, resume, reset and speed control.

**Current limitation:** sensors are visualized and sampled, but do not yet control the robot's movement. Closed-loop sensor/motor control is planned for a later release.

## Run locally
```bash
npm install
npm run dev
```

## Build
```bash
npm run build
```

Deploy via GitHub integration on Vercel. Framework preset: Vite; output directory: `dist`.
