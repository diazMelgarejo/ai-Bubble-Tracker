// Service Worker for AI Bubble Tracker PWA hosted on GitHub Pages
// This version derives its base path automatically so that caching works
// correctly when the site is served from a subdirectory (e.g. /ai-Bubble-Tracker/).

// Determine the base path at runtime.  When the service worker is installed
// under a scope like https://username.github.io/ai-Bubble-Tracker/, the pathname
// will end with '/sw.js'.  Removing the filename yields the directory path.
const BASE_PATH = (() => {
  const url = new URL(self.registration.scope);
  // Scope always ends with a trailing slash. Return it as the base.
  return url.pathname;
})();

const CACHE_VERSION = 'v1';
const CACHE_NAME = `ai-bubble-tracker-${CACHE_VERSION}`;

// List of files to precache.  These are constructed relative to the base path.
const PRECACHE_ASSETS = [
  BASE_PATH,
  `${BASE_PATH}index.html`,
  `${BASE_PATH}manifest.json`
];

// On install: cache core assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(PRECACHE_ASSETS))
  );
  // Activate immediately after installation
  self.skipWaiting();
});

// On activate: delete old caches
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

// On fetch: respond with cached resources when available; otherwise fetch from network.
self.addEventListener('fetch', event => {
  const request = event.request;
  // Always attempt to serve cached files from our scope first.
  event.respondWith(
    caches.match(request).then(response => {
      return response || fetch(request);
    })
  );
});