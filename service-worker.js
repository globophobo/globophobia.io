const cacheName = 'game-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/skyshot.html',
  '/preview_skyshot.png',
  'in_progress.png',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  '/icons/iconsicon-192x192.png',
  '/icons/iconsicon-512x512.png',
  '/pop2.mp3',
  '/grey.png',
  '/yellow.png',
  '/yellowpop.png',
  '/blue.png',
  '/bluepop.png',
  '/red.png',
  '/redpop.png',
  '/green.png',
  '/greenpop.png',
  '/cloud1.png',  
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName)
      .then(cache => cache.addAll(assets))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
