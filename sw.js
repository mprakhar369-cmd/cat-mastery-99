const CACHE_NAME = 'cat-mastery-v15';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles.css',
  './app.min.js',
  './manifest.json',
  './assets/mobile_qr.png',
  './icons/icon-192.png',
  './icons/icon-512.png'
];
// NOTE: data_*.min.js, lab.min.js + KaTeX lazy-load on demand and are cached
// at runtime by the network-first fetch handler — not precached, keeping
// install + first paint lean while staying fully offline-capable after visit.

// Install Event - immediately activate new worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching v14 assets');
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate Event - purge ALL old caches instantly & claim all clients
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Deleting obsolete cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch Event - NETWORK FIRST for all local assets so updates are immediate!
// Falls back to cache only when offline.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        // If response is valid, update the cache in background
        if (networkResponse && networkResponse.status === 200 && networkResponse.type === 'basic') {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        // Offline fallback
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) {
            return cachedResponse;
          }
          if (event.request.mode === 'navigate') {
            return caches.match('./index.html');
          }
        });
      })
  );
});
