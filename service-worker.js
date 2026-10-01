// GEAPPLE®™ SW V3 - RC:9882150 - ALL 35 APPS NATIVE API APK PWA - gsiacyber.com SUPABASE - FINAL
const CACHE = 'geapple-v3-native-35-final-2026';
const SUPA = 'https://gsiacyber.com/api';
const API = 'https://gsiacyber.com/api';
const ALL_35 = [
  './','./index.html','./logo.png','./manifest.json','./ceo-master-engine.js','./native-api-bridge.js','./api-config.json',
  './1-mygea-social.html','./2-reelgea.html','./3-geamail-con.html','./4-gea-con.html','./5-geaconnect.html','./6-mygea-holo.html','./7-global-votes.html','./8-degalaxy-sat-.html','./9-military-bord.html','./10-visual-art-g.html','./11-geatune.html','./12-gea-4k-studi.html','./13-gea-game.html','./14-okidoki-soci.html','./15-galarea-chat.html','./16-yellow-mygea.html','./17-gea-store.html','./18-degalaxy-orb.html','./19-gsia-cyber-c.html','./20-gsia-ai.html','./21-realoracle-m.html','./22-gsia-fraud-d.html','./23-gsia-visual-.html','./24-realoracle-w.html','./25-gsia-budget-.html','./26-degalaxy-sat.html','./27-gsia-archite.html','./28-gea-cartoons.html','./29-gea-pay.html','./30-gea-wallet.html','./31-geapple-gadg.html','./32-ceo-dashboar.html','./33-data-minting.html','./34-investors-an.html','./35-gsia-systems.html'
];
self.addEventListener('install',e=>{
  e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ALL_35).then(()=>{console.log('GEAPPLE V3 NATIVE 35 CACHED - APK PWA READY - gsiacyber SUPABASE'); self.skipWaiting();})));
});
self.addEventListener('activate',e=>{
  e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));
});
self.addEventListener('fetch',e=>{
  const u=e.request.url;
  if(u.includes('gsiacyber.com')||u.includes('/api/')||u.includes('supabase')){
    e.respondWith(fetch(e.request).then(r=>{const cl=r.clone(); caches.open(CACHE).then(c=>c.put(e.request,cl)); return r;}).catch(()=>caches.match(e.request).then(c=>c||new Response(JSON.stringify({offline:true, supa:API, native:true, apk_pwa:true, timestamp:Date.now()}),{headers:{'Content-Type':'application/json'}}))));
    return;
  }
  e.respondWith(caches.match(e.request).then(cached=>{
    const net=fetch(e.request).then(res=>{if(res.ok){const cl=res.clone(); caches.open(CACHE).then(c=>c.put(e.request,cl));} return res;}).catch(()=>cached);
    return cached||net;
  }));
});
self.addEventListener('sync',e=>{
  if(e.tag==='gea-bulk-mail') e.waitUntil(fetch(`${API}/bulk-mail-sync`,{method:'POST'}));
  if(e.tag==='gea-ceo-update') e.waitUntil(fetch(`${API}/ceo-updates-sync`,{method:'POST'}));
  if(e.tag==='gea-transactions') e.waitUntil(fetch(`${API}/transactions-sync`,{method:'POST'}));
  if(e.tag==='gea-survey-gps') e.waitUntil(fetch(`${API}/survey-gps-sync`,{method:'POST'}));
  if(e.tag==='gea-military-border') e.waitUntil(fetch(`${API}/military-border-sync`,{method:'POST'}));
});
self.addEventListener('push',e=>{
  const d=e.data?e.data.json():{title:'GEAPPLE®™ V3 ADVERT TOP RIGHT + CEO UPDATE',body:'HOLO WORLD V3 NATIVE 35 APPS - Multi + Cloud + Tools Horizontal + GEA-PAY TOP - To The Glory Of God'};
  e.waitUntil(self.registration.showNotification(d.title,{body:d.body,icon:'./logo.png',badge:'./logo.png',vibrate:[100,50,100],data:{url:'./32-ceo-dashboar.html'}}));
});
self.addEventListener('notificationclick',e=>{e.notification.close(); e.waitUntil(clients.openWindow(e.notification.data.url||'./index.html'));});