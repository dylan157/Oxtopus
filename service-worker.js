const CACHE_NAME = 'octopus-agile-cache-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json'
  // Add additional assets (CSS, JS, images) as needed.
];

// Install event – cache static assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch event – network-first for navigation, cache-first for others
self.addEventListener('fetch', event => {
  if (event.request.mode === 'navigate') {
    // For HTML navigations, use network first.
    event.respondWith(
      fetch(event.request)
        .then(response => {
          return caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, response.clone());
              return response;
            });
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
  } else {
    // For other requests, try cache first then network.
    event.respondWith(
      caches.match(event.request)
        .then(response => response || fetch(event.request))
    );
  }
});

// Activate event – clear out old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys()
      .then(cacheNames => {
        return Promise.all(
          cacheNames.map(cacheName => {
            if (!cacheWhitelist.includes(cacheName)) {
              return caches.delete(cacheName);
            }
          })
        );
      })
  );
});
