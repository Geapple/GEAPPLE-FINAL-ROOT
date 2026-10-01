// GEAPPLE®™ VOICE TRANSLATION API 10 LANGS V3 FINAL - FIXED SEARCH + VOICE BUTTON - EN YORUBA IGBO HAUSA FRANÇAIS ARABIC العربية ESPAÑOL 中文 SWAHILI PORTUGUÊS
window.VOICE_API_10 = {
  langs: {
    'en-US': {name:'ENGLISH', flag:'🇺🇸', label:'EN'},
    'yo-NG': {name:'YORUBA', flag:'🇳🇬', label:'YO'},
    'ig-NG': {name:'IGBO', flag:'🇳🇬', label:'IG'},
    'ha-NG': {name:'HAUSA', flag:'🇳🇬', label:'HA'},
    'fr-FR': {name:'FRANÇAIS', flag:'🇫🇷', label:'FR'},
    'ar-SA': {name:'ARABIC العربية', flag:'🇸🇦', label:'AR'},
    'es-ES': {name:'ESPAÑOL', flag:'🇪🇸', label:'ES'},
    'zh-CN': {name:'中文', flag:'🇨🇳', label:'ZH'},
    'sw-KE': {name:'SWAHILI', flag:'🇰🇪', label:'SW'},
    'pt-PT': {name:'PORTUGUÊS', flag:'🇵🇹', label:'PT'}
  },

  getLang: function(){ return localStorage.getItem('geapple_lang') || 'en-US'; },
  setLang: function(code){ localStorage.setItem('geapple_lang', code); this.renderVoiceBar('voiceBarContainer'); this.speak('Language set to '+this.langs[code].name, code); },
  getLangs: function(){ return this.langs; },

  // FIXED: RENDER VOICE BAR - SHOWS ALL 10 LANGS CLICKABLE
  renderVoiceBar: function(containerId){
    let c = document.getElementById(containerId) || document.getElementById('voiceBar') || document.getElementById('voiceBarContainer');
    if(!c) return;
    let current = this.getLang();
    let html = `<div style="display:flex;gap:4px;overflow-x:auto;padding:4px">` +
      Object.keys(this.langs).map(code=>{
        let active = code===current;
        return `<button onclick="VOICE_API_10.setLang('${code}')" style="padding:6px 10px;border-radius:99px;border:1px solid ${active?'#00ffff':'#333'};background:${active?'#00ffff':'#111'};color:${active?'#000':'#00ffff'};font-size:9px;font-weight:900;white-space:nowrap">${this.langs[code].flag} ${this.langs[code].label} ${active?'✅':''}</button>`;
      }).join('') + `</div>`;
    c.innerHTML = html;
  },

  // FIXED: SPEAK - WORKS ON LOCALHOST:7700
  speak: function(text, lang){
    let l = lang || this.getLang();
    if(!text) return;
    try{
      if('speechSynthesis' in window){
        speechSynthesis.cancel();
        let u = new SpeechSynthesisUtterance(text);
        u.lang = l;
        u.rate = 0.9; u.pitch = 1; u.volume = 1;
        speechSynthesis.speak(u);
        console.log('SPEAK:', text, 'LANG:', l);
      }
    }catch(e){ console.log('SPEAK ERROR', e); }
  },

  // FIXED: LISTEN - FIXES VOICE BUTTON - SEARCH 35 APPS BY VOICE
  listen: function(callback, fromLang){
    let from = fromLang || 'en-US';
    try{
      let SR = window.SpeechRecognition || window.webkitSpeechRecognition;
      if(!SR){ alert('Voice not supported - Use Chrome'); return; }
      let rec = new SR();
      rec.lang = from; rec.interimResults = false; rec.maxAlternatives = 1;
      rec.onstart = ()=>{ let s=document.getElementById('voiceStatus'); if(s) s.innerText='🎤 Listening... Speak EN → Searching 35 Apps...'; };
      rec.onresult = (e)=>{
        let t = e.results[0][0].transcript;
        console.log('VOICE HEARD:', t);
        if(callback) callback(t);
        let input = document.getElementById('search35');
        if(input){ input.value = t; if(window.filterApps) window.filterApps(); }
        this.speak('Found results for '+t, this.getLang());
      };
      rec.onerror = (e)=>{ console.log('VOICE ERROR', e); alert('Voice error - Try again'); };
      rec.onend = ()=>{ let s=document.getElementById('voiceStatus'); if(s) s.innerText='🎤 HOLO VOICE: Speak English → Hear Local Language | API Ready | 10 LANGS ACTIVE'; };
      rec.start();
    }catch(e){ console.log(e); alert('Voice failed'); }
  }
};