// GEAPPLE®™ CEO MASTER ENGINE V3 FINAL - RC:9882150 - ALL BUTTONS WORKING - HUB STORE PAY MANUAL - NDPA COMPLIANT
window.CEO_ENGINE = {
  DOMAIN: window.location.origin,

  // CORE NAV - ALL FIXED - REDIRECT WORKS ON LOCALHOST:7700/GE... + VERCEL + APK PWA
  openMenu: function(){ window.location.href = './menu.html'; },
  openSettings: function(){ window.location.href = './setting.html'; },
  openThemes: function(){
    let t = prompt('🎨 THEME - Enter: dark / light / neon / midnight', localStorage.getItem('geapple_theme')||'dark');
    if(t){ localStorage.setItem('geapple_theme', t); document.body.setAttribute('data-theme', t); this.speak('Theme '+t); location.reload(); }
  },
  showManual: function(){ window.location.href = './0-USERS-MANUAL.html'; },

  // FIXED: CREATOR BUTTON - WAS NOT WORKING - NOW REDIRECTS TO GSIA EDIT
  openCreator: function(){
    console.log('CREATOR CLICKED');
    window.location.href = './19-gsia-cyber-c.html';
  },

  // FIXED: MULTI STREAMING BUTTON - WAS NOT WORKING - NOW REDIRECTS TO HOLO 50-100
  openMultiStream: function(){
    console.log('MULTI CLICKED');
    window.location.href = './6-mygea-holo.html';
  },

  // FIXED: CLOUD BUTTON - WAS NOT WORKING - NOW REDIRECTS TO GEA.CON CLOUD
  openCloud: function(){
    console.log('CLOUD CLICKED');
    window.location.href = './4-gea-con.html';
  },

  // FIXED: ADVERT BUTTON - WAS NOT WORKING - NOW SHOWS TOP RIGHT POPUP
  showAdvert: function(){
    let old = document.getElementById('geappleAdvertPopup');
    if(old) old.remove();
    let ad = document.createElement('div');
    ad.id = 'geappleAdvertPopup';
    ad.style.cssText = 'position:fixed;top:12px;right:12px;background:#ffeb00;color:#000;padding:14px;border-radius:14px;z-index:99999;font-weight:900;max-width:300px;box-shadow:0 0 30px #00ffff;border:2px solid #000;font-size:11px';
    ad.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:center"><b>📢 ADVERTS TOP RIGHT POPUP</b><span onclick="this.parentElement.parentElement.remove()" style="cursor:pointer;background:#000;color:#ffeb00;padding:2px 8px;border-radius:99px">X</span></div>
      <div style="margin-top:6px;font-size:10px">GEAPPLE®™ 35 APPS - RC:9882150 - NDPA Compliant<br>HOLO 50-100 + Voice 10 Langs FR AR ES 中文 + GEA-PAY Top + To The Glory Of God<br>CEO: Apostle Dr Oladele Mighty Hassan - gsiacyber.com Supabase - 35 Natives Apps MAPS CHAT MUSIC etc</div>
      <div style="margin-top:8px;display:flex;gap:6px">
        <button onclick="location.href='./17-gea-store.html'" style="flex:1;background:#000;color:#ffeb00;border:none;padding:6px;border-radius:99px;font-weight:900">STORE →</button>
        <button onclick="location.href='./29-gea-pay.html'" style="flex:1;background:#00ff88;color:#000;border:none;padding:6px;border-radius:99px;font-weight:900">PAY →</button>
      </div>
    `;
    document.body.appendChild(ad);
    setTimeout(()=>{ let e=document.getElementById('geappleAdvertPopup'); if(e) e.remove(); }, 8000);
  },

  // FIXED: GEA-PAY BUTTON - TOP BANNER + PAY+MANUAL TAB
  openPay: function(){
    console.log('PAY CLICKED');
    window.location.href = './29-gea-pay.html';
  },

  // FIXED: HUB[35 BROWSER] + STORE[35 APPS] TABS - SHOW TAB FUNCTION
  showTab: function(n){
    if(window.showTab) window.showTab(n);
    else {
      document.querySelectorAll('.tab').forEach(t=>t.classList.remove('active'));
      document.querySelectorAll('.tabBtn').forEach(t=>t.classList.remove('active'));
      let tab = document.getElementById('tab'+n);
      if(tab){ tab.classList.add('active'); document.querySelectorAll('.tabBtn')[n-1].classList.add('active'); }
    }
  },

  // UNIVERSAL GO
  go: function(file){
    let f = file.includes('.html')? file : './'+file+'.html';
    window.location.href = f;
  },

  // VOICE - FIXED - SPEAK EN HEAR LOCAL
  speak: function(text, lang){
    let l = lang || (window.VOICE_API_10? VOICE_API_10.getLang() : 'en-US');
    if(window.VOICE_API_10 && VOICE_API_10.speak){ VOICE_API_10.speak(text, l); }
    else if('speechSynthesis' in window){
      let u = new SpeechSynthesisUtterance(text);
      u.lang = l; u.rate = 0.9;
      speechSynthesis.speak(u);
    }
  },

  // SEARCH + VOICE SEARCH
  searchApps: function(q){
    let input = document.getElementById('search35');
    if(input && q) input.value = q;
    if(window.filterApps) window.filterApps();
  },

  // LEGAL
  openLegal: function(){ location.href='./legal.html'; },
  openPrivacy: function(){ location.href='./privacy.html'; },
  openTerms: function(){ location.href='./terms.html'; },
  openNDPA: function(){ location.href='./ndpa-compliance.html'; },

  // TRANSACTION + INIT
  addTransaction: function(t){ let tx=JSON.parse(localStorage.getItem('geapple_tx')||'[]'); tx.unshift({t, time:Date.now()}); localStorage.setItem('geapple_tx', JSON.stringify(tx.slice(0,50))); },
  init: function(){ console.log('GEAPPLE CEO ENGINE V3 READY - RC:9882150 - ALL BUTTONS FIXED - DOMAIN:', this.DOMAIN); }
};

window.CEO_ENGINE.init();