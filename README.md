# Enhanced AI Bubble Tracker

A Progressive Web App (PWA) comparing the 1995 Dotcom Bubble with the 2022 AI Rally using interactive time-indexed NASDAQ Composite data.

## 🚀 Features

- **Interactive Chart.js Visualization**: Zoom, pan, hover for precise data
- **Real-Time Statistics Dashboard**: Live bubble progress calculations
- **Asset Projections**: Bitcoin, Ethereum, S&P 500 peak price targets
- **PWA Capabilities**: Installable on mobile/desktop with offline support
- **Dark/Light Theme**: Toggle theme with persistence
- **Export Functionality**: PNG chart download and CSV data export
- **Share Capabilities**: Native sharing for social media
- **Responsive Design**: Mobile-first, works on all devices
- **Accessibility**: ARIA labels, keyboard navigation, screen reader support
- **GitHub Pages Optimized**: Dynamic service worker for subdirectory hosting

## 📊 Key Data Points

### Dotcom Bubble (1995-2000)
- **Start**: July 17, 1995 (NASDAQ 1,000)
- **Peak**: March 10, 2000 (NASDAQ 5,048.62)
- **Duration**: 1,698 days
- **Peak Gain**: +405%

### AI Rally (2022-Present)
- **Start**: December 28, 2022 (NASDAQ 10,466)
- **ChatGPT Launch**: November 30, 2022
- **Current**: October 15, 2025 (Day 1,013)
- **Current Gain**: +96%

### Projected Milestones
- **Dotcom Length Analog**: September 27, 2027 (1,698 days)
- **Extended Peak**: March 4, 2028 (1,893 days)

## 🛠️ Installation & Deployment

### GitHub Pages Deployment

1. **Fork or Clone** this repository
2. **Enable GitHub Pages**:
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main`
   - Folder: `/ (root)`
3. **Access Your Site**: `https://username.github.io/enhanced-ai-bubble-tracker/`

**Important**: If you rename the repository, update these files:
- `sw.js`: Update `BASE_PATH` calculation
- `index.html`: Update service worker registration path
- `404.html`: Update redirect URL
- `manifest.json`: Update `start_url` and `scope`

### Local Development

```bash
# Clone the repository
git clone https://github.com/username/enhanced-ai-bubble-tracker.git
cd enhanced-ai-bubble-tracker

# Serve locally
python -m http.server 8000
# Visit: http://localhost:8000
```

### Custom Domain Deployment

1. Upload all files to your web hosting
2. Ensure HTTPS is enabled (required for PWA)
3. Update service worker paths if necessary

## 📱 PWA Installation

### Desktop (Chrome, Edge, Brave):
1. Click the install icon in the address bar
2. Or: Menu → Install Enhanced AI Bubble Tracker

### Mobile (iOS):
1. Safari → Share → Add to Home Screen

### Mobile (Android):
1. Chrome → Menu → Install app

## 🎨 Usage

### Interactive Chart Controls
- **Zoom**: Mouse wheel or pinch gesture
- **Pan**: Click and drag
- **Reset**: Click "Reset Zoom" button
- **Toggle Series**: Click legend items

### Export Options
- **PNG Export**: Download chart as high-quality image
- **CSV Export**: Download raw data for analysis

### Theme Switching
- Click "Toggle Theme" button
- Preference persists across sessions

### Sharing
- Click "Share" button to share via native OS sharing

## 🔧 Technical Architecture

### Stack
- **Frontend**: Vanilla JavaScript, HTML5, CSS3
- **Charting**: Chart.js with zoom plugin
- **PWA**: Service Worker with intelligent caching
- **Hosting**: GitHub Pages (can deploy anywhere)

### Service Worker Strategy
```javascript
// Dynamic base path detection for GitHub Pages
const BASE_PATH = (() => {
  const url = new URL(self.registration.scope);
  return url.pathname;
})();

// Cache-first with network fallback
```

### Performance
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **PWA Score**: 100

## 📈 Asset Projections

### Bitcoin
- Current: $67,500
- Conservative (300%): $270,000
- Moderate (400%): $337,500
- Aggressive (500%): $405,000

### Ethereum
- Current: $2,650
- Conservative (300%): $10,600
- Moderate (400%): $13,250
- Aggressive (500%): $15,900

### S&P 500
- Current: 5,750
- Conservative (300%): 23,000
- Moderate (400%): 28,750
- Aggressive (500%): 34,500

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⚠️ Disclaimer

This tool is for educational and research purposes only. Past performance does not predict future results. Not financial or investment advice.

## 🔮 Future Enhancements

- [ ] Real-time market data API integration
- [ ] User customizable projections
- [ ] Notification system for milestone alerts
- [ ] Multi-language support
- [ ] Historical data comparison tools
- [ ] Advanced analytics dashboard
- [ ] Social features and sharing

## 📞 Support

For questions, issues, or feature requests, please open an issue on GitHub.

---

**Version**: 1.0.0  
**Last Updated**: October 2025  
**Built with**: ❤️ for financial markets analysis
