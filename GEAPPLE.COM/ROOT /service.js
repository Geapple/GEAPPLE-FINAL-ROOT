const CACHE_NAME = 'geapple-v27-build-27000-super-pro-max';
const BUILD = 27000;
const URLS_TO_CACHE = ['./','./index.html','./manifest.json','./logo.png','./badge1.html','./badge2.html','./badge3.html','./badge4.html','./badge5.html','./badge6.html','./badge7.html','./badge8.html','./badge9.html','./badge10.html','./badge11.html','./badge12.html','./badge13.html','./badge14.html','./badge15.html','./badge16.html','./badge17.html','./badge18.html','./badge19.html','./badge20.html','./badge21.html','./badge22.html','./badge23.html','./badge24.html','./badge25.html','./badge26.html','./badge27.html','./badge28.html'];
self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(URLS_TO_CACHE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', event => {
  event.waitUntil(caches.keys().then(keys => Promise.all(keys.map(k => { if(k !== CACHE_NAME) return caches.delete(k); }))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', event => {
  if(event.request.url.includes('/api/')){ event.respondWith(fetch(event.request).catch(() => new Response(JSON.stringify({error:'API Offline',build:BUILD}),{headers:{'Content-Type':'application/json'}}))); return; }
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request).then(resp => { const clone = resp.clone(); caches.open(CACHE_NAME).then(c => c.put(event.request, clone)); return resp; }).catch(() => { if(event.request.mode === 'navigate') return caches.match('./index.html'); })));
});
console.log('GEAPPLE Build 27000 Super Pro Max Logo top GEAPPLE.COM only - Creators Tools Funs Have Funs Make More Money No Waste Time No Waste Life Geapple Ecosystem Keeps You Moving - Users 15pct Platform 85pct - 28 Apps - BADGE 28 CEO Dashboard Price Editor - CEO Can Change Price And Values - Provision Added - File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place - CEO Dashboard Admin Visibly - Only Pass ID = name@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Hosting Domain Website Drive Cloud @geamail.con DNS Checker - Business Whatsapp https://www.wa.me/+2348055432048 - Package com.geapple.com v27 Build 27000 - Vercel Deploy Tonight - Apple Store Google Play Store Launch 1st October - Package Tonight - Trade Mark Only logo.png + GEAPPLE.COM at Top - GEAPPLE GLOBALCOMTECH only in Copyright Legal Notes');