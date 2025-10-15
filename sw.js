// Service Worker for Enhanced AI Bubble Tracker PWA
// Automatically detects base path for GitHub Pages compatibility

// Determine the base path at runtime
const BASE_PATH = (() => {
  const url = new URL(self.registration.scope);
  return url.pathname;
})();

const CACHE_VERSION = 'v1';
const CACHE_NAME = `ai-bubble-tracker-${CACHE_VERSION}`;

// Files to precache with dynamic base path
const PRECACHE_ASSETS = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.json`
];

// Install event: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS))
  );
  self.skipWaiting();
});

// Activate event: clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      )
    )
  );
  self.clients.claim();
});

// Fetch event: serve cached resources, fallback to network
self.addEventListener('fetch', event => {
  const request = event.request;
  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request);
    })
  );
});