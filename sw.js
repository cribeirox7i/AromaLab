/* AromaLab — Service Worker do app estático
 * Faz cache dos arquivos da própria origem (shell + CSS/JS).
 * Nunca intercepta /api/* (chamadas dinâmicas ao proxy) - essas sempre
 * precisam ir direto pro servidor, nunca servidas do cache.
 */
const CACHE = 'aromalab-app-v5';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png',
  './icon-apple-touch.png',
  './logo.png'
];

self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open(CACHE).then(function (c) { return c.addAll(ASSETS); })
      .then(function () { return self.skipWaiting(); })
  );
});

self.addEventListener('activate', function (e) {
  e.waitUntil(
    caches.keys().then(function (chaves) {
      return Promise.all(chaves.filter(function (k) { return k !== CACHE; })
        .map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (e) {
  const url = new URL(e.request.url);
  // só mexe nos arquivos estáticos da própria origem; /api/* (proxy) sempre direto pro servidor
  if (url.origin === self.location.origin && url.pathname.indexOf('/api/') !== 0) {
    e.respondWith(
      caches.match(e.request).then(function (resp) { return resp || fetch(e.request); })
    );
  }
});
