
const CACHE_NAME = 'orologioquiz-ghp-v1';
const ASSETS = ["/orologioquiz/", "/orologioquiz/OrologioQuiz.html", "/orologioquiz/manifest.json", "/orologioquiz/images/icon-192.png", "/orologioquiz/images/icon-512.png", "/orologioquiz/images/icon-maskable-192.png", "/orologioquiz/images/icon-maskable-512.png", "/orologioquiz/images/favicon-16.png", "/orologioquiz/images/favicon-32.png", "/orologioquiz/images/favicon.ico"];
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(k => k !== CACHE_NAME && caches.delete(k))))
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((resp) => resp || fetch(event.request))
  );
});
