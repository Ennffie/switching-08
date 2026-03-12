const CACHE_NAME = 'switching-07-v2';
const urlsToCache = [
  '/switching-07/',
  '/switching-07/index.html',
  '/switching-07/icons/icon-72x72.png',
  '/switching-07/icons/icon-96x96.png',
  '/switching-07/icons/icon-128x128.png',
  '/switching-07/icons/icon-144x144.png',
  '/switching-07/icons/icon-152x152.png',
  '/switching-07/icons/icon-192x192.png',
  '/switching-07/icons/icon-384x384.png',
  '/switching-07/icons/icon-512x512.png'
];

// 安裝 Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Cache opened');
        return cache.addAll(urlsToCache);
      })
  );
});

// 攔截請求
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => {
        // 如果在緩存中找到，返回緩存
        if (response) {
          return response;
        }
        // 否則發起網絡請求
        return fetch(event.request);
      })
  );
});

// 更新 Service Worker
self.addEventListener('activate', (event) => {
  self.clients.claim();
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
