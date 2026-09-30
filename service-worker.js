// GEAPPLE®™ PWA - OFFLINE HOLO WORLD V2 - RC:9882150
const CACHE_NAME = "geapple-holo-v2-35apps";
const APPS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./logo.png",
  "./ceo-master-engine.js",
  "./manifest-ceo-dashboard.json",
  "./3-geamail-con.html",
  "./4-gea-con.html",
  "./5-geaconnect.html",
  "./17-gea-store.html",
  "./29-gea-pay.html",
  "./30-gea-wallet.html",
  "./31-geapple-gadg.html",
  "./32-ceo-dashboard.html",
  "./33-data-minting.html",
  "./34-investors-an.html",
  "./35-gsia-systems.html"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(APPS_TO_CACHE)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE_NAME).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(e.request, res.clone());
          return res;
        });
      }).catch(()=>caches.match("./index.html"));
    })
  );
});