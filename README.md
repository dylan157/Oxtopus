# Octopus Agile – Margins & Tomorrow Data

A web app for visualizing **Octopus Agile** electricity prices, regional tariff breakdowns, tomorrow's pricing (when available), current energy mix, and UK wind/solar forecasts. Designed with a clean dark theme and supports offline use with PWA support.

## 🚀 Features

- 📈 Real-time Agile electricity pricing with emoji and color indicators
- 🕒 Half-hourly price tables for **today** and **tomorrow**
- 📊 Dynamic bar charts for visualising price variation
- 🌍 Live UK energy generation mix (Carbon Intensity API)
- 🌞 Wind and solar forecast for the next 3 days (Open-Meteo API)
- 🌐 Region selector (all UK Agile regions supported)
- 📲 PWA support – install to home screen like a native app
- 🧪 Debug panel and referral link section

## 🔧 Setup & Usage

### 📦 Requirements

- Any modern web browser (Chrome, Firefox, Edge, etc.)
- [Optional] A web server (e.g., `Live Server` in VS Code or host via GitHub Pages)

### ▶️ Run Locally

1. Clone or download the repo
2. Open `index.html` in your browser
3. That’s it! No build step required.

### 🧠 Customization

- Change the **Agile product code** in the script tag if Octopus updates to a new one:
  ```js
  const AGILE_PRODUCT_CODE = 'AGILE-24-10-01';
  ```
- If you're outside the UK, you can adapt or replace the Carbon Intensity and Open-Meteo APIs.

### 🛠 PWA Support

- The app supports offline viewing via a `service-worker.js` and `manifest.json`
- A minimal **"Add to Home Screen"** prompt will appear on supported devices
- Make sure to serve over HTTPS for full PWA functionality

## 📡 APIs Used

- 🔌 [Octopus Energy API](https://developer.octopus.energy/)
- 🧪 [Carbon Intensity UK (National Grid ESO)](https://carbon-intensity.github.io/)
- ☀️ [Open-Meteo API](https://open-meteo.com/)

## 🤝 Referral

Like the project? You can support the developer by switching to Octopus with this [£50 referral link](https://share.octopus.energy/eager-cliff-143).

## 📄 License

MIT License

---
