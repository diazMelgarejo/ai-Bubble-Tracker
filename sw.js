// Service Worker for AI Bubble Tracker PWA
// Caches essential assets for offline use and serves cached responses when available

const CACHE_VERSION = 'v1';
const CACHE_NAME = `ai-bubble-tracker-${CACHE_VERSION}`;

// List of files to precache
const PRECACHE_ASSETS = [
  '/',
  './index.html',
  './manifest.json'
];

// On install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(PRECACHE_ASSETS);
    })
  );
  // Activate immediately after installation
  self.skipWaiting();
});

// On activate: delete old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// On fetch: respond with cached resources when available, otherwise fetch from network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});