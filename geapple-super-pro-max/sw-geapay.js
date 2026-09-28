self.addEventListener('install',e=>{e.waitUntil(caches.open('geapay-v1').then(c=>c.addAll(['./29-gea-pay.html','./logo.png'])))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)))});
