# AI Bubble Tracker

This project compares the trajectory of the late‑1990s dot‑com bubble against the current AI boom by aligning both cycles on a common timeline.  It renders a fully interactive line chart with annotations for key milestones (current position, dot‑com peak equivalent and extended peak) and provides bullish/bearish projections for major assets like Bitcoin, Ethereum and the S&P 500.

The tracker is implemented as a **Progressive Web App (PWA)** and can be installed on desktops and mobile devices.  It includes offline support via a service worker and a manifest for home‑screen installation.

## Features

- **Interactive chart** — Zoom and pan horizontally to explore both cycles.  Hover for tooltips or toggle each series via the legend.
- **Milestone markers** — Vertical dashed lines highlight “You Are Here”, the **dot‑com peak equivalent** (Day 1698) and the **extended peak** (Day 1893).  Annotations include date labels and day counts.
- **Statistics dashboard** — A header displays the current position and the number of days until the projected peaks, along with a progress bar.
- **Projections** — Cards show conservative, moderate and aggressive price targets for Bitcoin, Ethereum and the S&P 500.
- **Controls** — Reset zoom with one click, toggle markers, or export the underlying dataset as a CSV file.
- **Offline support** — The app can be installed and used without an internet connection thanks to a service worker.

## Usage

To run this project locally, simply open `index.html` in your browser.  If you deploy it to a GitHub Pages site, ensure you adjust the service‑worker registration and manifest paths for the subdirectory (this repository uses `/ai-Bubble-Tracker/` as the base path).  The service worker and manifest in this repository have been updated accordingly.

### GitHub Pages

This repository is configured for GitHub Pages deployment.  To enable Pages:

1. Go to **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select **main** as the branch and `/` (root) as the folder.
4. Click **Save**.  After a few moments the site will be live at:

```
https://your-username.github.io/ai-Bubble-Tracker/
```

Because the app is served from a subpath, the `BASE_PATH` constant in `sw.js` and the `start_url`/`scope` in `manifest.json` are set to `/ai-Bubble-Tracker/`.  If you change the repository name or deploy elsewhere, update these values accordingly.

## License

This project is provided for educational purposes and is released under the MIT License.  Feel free to modify and distribute it with attribution.
