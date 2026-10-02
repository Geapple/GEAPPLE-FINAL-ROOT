// GEAPPLE®™ LOGO.PNG + ROTATING 🌍 COMPONENT - FINAL V3 - RC:9882150 - AUTO INJECTS TO ALL PAGES
function injectLogoHeader(targetId='logoHeaderContainer'){
  let container=document.getElementById(targetId);
  if(!container){ container=document.createElement('div'); container.id=targetId; document.body.insertBefore(container, document.body.firstChild); }
  let DOMAIN=window.location.origin;
  container.innerHTML=`
  <link rel="stylesheet" href="./logo-rotate.css">
  <div class="logo-header">
    <div class="globe-wrap"><div class="globe-orbit"></div><div class="globe-rotate"><span>🌍</span></div></div>
    <img src="./logo.png" class="logo-img" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'" alt="GEAPPLE LOGO"><div class="logo-img fallback" style="display:none">G</div>
    <div class="logo-text"><div class="logo-title">GEAPPLE®™ HOLO WORLD V3</div><div class="logo-sub">RC:9882150 • 35 APPS • 10 LANGS VOICE • HOLO 50-100 • NDPA ✅</div><div style="font-size:7px;color:#888;white-space:nowrap;overflow:hidden;text-overflow:ellipsis">${DOMAIN} • To The Glory Of God</div></div>
    <div style="display:flex;flex-direction:column;gap:4px;align-items:flex-end"><span class="logo-badge">LIVE • ${new Date().toLocaleTimeString()}</span><span style="font-size:7px;background:#111;color:#00ffff;border:1px solid #00ffff;padding:2px 6px;border-radius:99px">APK PWA READY</span></div>
  </div>`;
}
// Auto inject if container exists
window.addEventListener('DOMContentLoaded',()=>{ if(document.getElementById('logoHeaderContainer')||true) injectLogoHeader('logoHeaderContainer'); });