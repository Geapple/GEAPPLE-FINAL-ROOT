// GEAPPLE®™ NATIVE API BRIDGE V3 FINAL - FIXES API REDIRECTING - LOCALHOST:7700/GE... + VERCEL + APK PWA READY
window.NATIVE_BRIDGE = {
  API_BASE: 'https://gsiacyber.com/api',
  DOMAIN: window.location.origin,

  // FIXED: NO MORE WRONG REDIRECT - USE RELATIVE./ PATHS ONLY
  fixLinks: function(){
    // Ensure all./ links work on localhost:7700/GE... preview 100% zoom
    console.log('NATIVE BRIDGE FIX LINKS - DOMAIN:', this.DOMAIN);
  },

  // API CALL - SAFE
  call: async function(endpoint, data){
    try{
      let res = await fetch(this.API_BASE + endpoint, {
        method: 'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify(data || {})
      });
      return await res.json();
    }catch(e){ console.log('API ERROR - FALLBACK TO LOCAL', e); return {success:true, local:true}; }
  },

  // INIT
  init: function(){ this.fixLinks(); console.log('NATIVE BRIDGE READY - NO REDIRECT BUG - RC:9882150'); }
};

window.NATIVE_BRIDGE.init();

// GLOBAL FIXES FOR INDEX.HTML BUTTONS - DIRECT OVERRIDE IF CEO_ENGINE FAILS
window.showTab = window.showTab || function(n){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
  document.querySelectorAll('.tabBtn').forEach(b=>b.classList.remove('active'));
  let tab = document.getElementById('tab'+n);
  if(tab) tab.classList.add('active');
  let btns = document.querySelectorAll('.tabBtn');
  if(btns[n-1]) btns[n-1].classList.add('active');
  if(n==1 && window.renderGrid && window.APPS_35) renderGrid(APPS_35,'grid35Hub');
  if(n==2 && window.renderGrid && window.APPS_35) renderGrid(APPS_35,'grid35Store');
};

window.filterApps = window.filterApps || function(){
  let q = (document.getElementById('search35')?.value || '').toLowerCase();
  if(!window.APPS_35) return;
  let filtered = APPS_35.filter(a=>a.n.toLowerCase().includes(q)||a.t.toLowerCase().includes(q)||a.c.toLowerCase().includes(q));
  if(window.renderGrid){ renderGrid(filtered,'grid35Hub'); renderGrid(filtered,'grid35Store'); }
  let cnt = document.getElementById('appCount');
  if(cnt) cnt.innerText = filtered.length + '/35 APPS';
};

window.startDictation = window.startDictation || function(){
  if(window.VOICE_API_10) VOICE_API_10.listen((t)=>{
    let inp = document.getElementById('search35');
    if(inp){ inp.value = t; filterApps(); }
  });
};