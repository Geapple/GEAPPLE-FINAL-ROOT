// SERVICE-WORKER.js - GEAPPLE®™ RC:9882150 - FINAL V3 - CACHE ALL 35 APPS + HOLO 50-100 + 5 BACKUPS + ENGINES + PWA
const CACHE_NAME='geapple-v3-final-35-apps-holo-50-100-backup-5-engines-2026-10-02';
const URLS_TO_CACHE=[
'./',
'./index.html',
'./manifest.json',
'./logo.png',
// 35 APPS CORE
'./1-mygea-social.html',
'./2-reelgea.html',
'./3-gea-message.html',
'./4-gea-con.html',
'./5-okidoki-grid-.html',
'./6-mygea-holo.html',
'./7-gea-maps.html',
'./8-gea-chat.html',
'./9-gea-music.html',
'./10-visual-art-g.html',
'./11-gea-camera.html',
'./12-gea-4k-studi.html',
'./13-gea-cloud-vid.html',
'./14-mygea-profile.html',
'./15-mygea-setting.html',
'./17-gea-store.html',
'./19-gsia-cyber-c.html',
'./20-gsia-ai.html',
'./21-gsia-voice.html',
'./22-gsia-map.html',
'./23-gsia-visual-.html',
'./24-gsia-camera-.html',
'./25-gsia-budget-.html',
'./26-gsia-files.html',
'./27-gea-docs.html',
'./28-gea-sheets.html',
'./29-gea-pay.html',
'./32-ceo-dashboar.html',
'./34-investors-an.html',
'./menu.html',
'./setting.html',
'./0-USERS-MANUAL.html',
'./legal.html',
'./privacy.html',
'./terms.html',
'./ndpa-compliance.html',
// ENGINES - CEO + VOICE + NATIVE + LOGO
'./ceo-master-engine.js',
'./voice-translation-api-10-lang.js',
'./native-api-bridge.js',
'./logo-header.js',
// BACKUPS - 5 ENGINES + MASTER CONNECTOR - ALL BUTTONS API CONNECTED
'./themes-backup.js',
'./cloud-backup.js',
'./multi-streaming-backup.js',
'./creator-backup.js',
'./adverts-backup.js',
'./master-connector-fix.js'
];

self.addEventListener('install', event=>{
 console.log('SW INSTALL V3 - 35 Apps + Holo 50-100 + 5 Backups');
 event.waitUntil(
  caches.open(CACHE_NAME).then(cache=>{
   console.log('SW Caching', URLS_TO_CACHE.length, 'files');
   return cache.addAll(URLS_TO_CACHE);
  }).then(()=>self.skipWaiting())
 );
});

self.addEventListener('activate', event=>{
 console.log('SW ACTIVATE V3 - Clearing old caches');
 event.waitUntil(
  caches.keys().then(keys=>{
   return Promise.all(keys.map(k=>{ if(k!==CACHE_NAME){ console.log('SW Delete old',k); return caches.delete(k); } }));
  }).then(()=>self.clients.claim())
 );
});

self.addEventListener('fetch', event=>{
 if(event.request.method!=='GET' ||!event.request.url.startsWith('http')) return;
 event.respondWith(
  caches.match(event.request).then(res=>{
   if(res){ return res; }
   return fetch(event.request).then(netRes=>{
    if(netRes && netRes.status===200 && netRes.type==='basic'){
     let clone=netRes.clone();
     caches.open(CACHE_NAME).then(cache=>{ cache.put(event.request, clone); });
    }
    return netRes;
   }).catch(()=>{
    return caches.match('./index.html');
   });
  })
 );
});

self.addEventListener('message', event=>{
 if(event.data==='SKIP_WAITING'){ self.skipWaiting(); }
 if(event.data==='CLEAR_CACHE'){
  caches.delete(CACHE_NAME).then(()=>{ console.log('SW Cache Cleared - 35 Apps + Backups'); });
 }
});