// THEMES-BACKUP.js - GEAPPLE®™ RC:9882150 - BACKUP FOR THEMES - LIGHT DARK NEON HOLO YELLOW - NDPA COMPLIANT
const THEMES_BACKUP = {
 themes: {
   dark: { bg:'#000', card:'#0a0a0a', border:'#222', text:'#fff', accent:'#00ffff', name:'DARK (Default)' },
   light: { bg:'#f5f5f5', card:'#ffffff', border:'#ddd', text:'#000', accent:'#0088ff', name:'LIGHT' },
   neon: { bg:'#000', card:'#110011', border:'#ff00ff', text:'#ff00ff', accent:'#ff00ff', name:'NEON CYBER' },
   holo: { bg:'#001122', card:'#001a33', border:'#00ff88', text:'#00ff88', accent:'#00ff88', name:'HOLO GREEN' },
   yellow: { bg:'#111100', card:'#222200', border:'#ffeb00', text:'#ffeb00', accent:'#ffeb00', name:'YELLOW FEED' }
 },
 current: 'dark',
 apply: function(name){
   let t=this.themes[name]; if(!t) return;
   document.body.style.background=t.bg; document.body.style.color=t.text;
   document.querySelectorAll('.card').forEach(c=>{c.style.background=t.card; c.style.borderColor=t.border;});
   localStorage.setItem('GEAPPLE_THEME_BACKUP', name);
   this.current=name;
   console.log('THEME BACKUP APPLIED:', name);
   if(window.VOICE_API_10) VOICE_API_10.speak('Theme changed to '+t.name, 'en-US');
 },
 restore: function(){ let s=localStorage.getItem('GEAPPLE_THEME_BACKUP'); if(s) this.apply(s); },
 renderBar: function(id){
   let el=document.getElementById(id); if(!el) return;
   el.innerHTML=`<div style="display:flex;gap:4px;overflow-x:auto;padding:4px">`+
   Object.keys(this.themes).map(k=>`<button onclick="THEMES_BACKUP.apply('${k}')" style="padding:6px 10px;border-radius:99px;background:#111;border:1px solid ${this.themes[k].accent};color:${this.themes[k].accent};font-size:8px;font-weight:800">${this.themes[k].name}</button>`).join('')+
   `</div>`;
 }
};
window.THEMES_BACKUP=THEMES_BACKUP;
window.addEventListener('load',()=>{ THEMES_BACKUP.restore(); });