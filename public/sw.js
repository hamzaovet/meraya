const CACHE_NAME = 'meraya-v1';
const ASSETS = ['/', '/manifest.json', '/favicon.ico', '/icons/icon-192.png', '/icons/icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS).catch(() => {})));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.map((k) => k !== CACHE_NAME && caches.delete(k)))));
  self.clients.claim();
});

self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  const url = new URL(e.request.url);
  if (url.pathname.startsWith('/api/')) return;
  e.respondWith(
    fetch(e.request).then((r) => {
      if (r && r.status === 200) {
        const clone = r.clone();
        caches.open(CACHE_NAME).then((c) => c.put(e.request, clone).catch(() => {}));
      }
      return r;
    }).catch(async () => {
      const cached = await caches.match(e.request);
      return cached || (e.request.mode === 'navigate' ? caches.match('/') : new Response('Offline', { status: 408 }));
    })
  );
});
