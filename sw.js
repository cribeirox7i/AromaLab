/* AromaLab — Service Worker do app estático
 * Faz cache dos arquivos da própria origem (shell + CSS/JS).
 * Nunca intercepta as chamadas da API (script.google.com/exec via fetch),
 * que são de outra origem e sempre precisam ir direto pro servidor.
 */
const CACHE = 'aromalab-app-v2';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.webmanifest',
  './icon.svg',
  './icon-192.png',
  './icon-512.png'
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
  // só mexe nos arquivos da própria origem; chamadas à API (outra origem) passam direto
  if (url.origin === self.location.origin) {
    e.respondWith(
      caches.match(e.request).then(function (resp) { return resp || fetch(e.request); })
    );
  }
});
