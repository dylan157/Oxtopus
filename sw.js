// A simple service worker that caches key files for offline use

const CACHE_NAME = 'octopus-agile-pwa-v1';
const ASSETS_TO_CACHE = [
  './',              // might resolve to index.html in many servers
  './index.html',
  './manifest.json',
  // Add CSS files, icons, etc. if you have them:
  // './icons/icon-192.png',
  // './icons/icon-512.png',
];

// During install, cache the specified assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch handler: tries the cache first, then goes to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      // If found in cache, return it; otherwise fetch from network
      return response || fetch(event.request);
    })
  );
});
