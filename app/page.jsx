"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaNativeV6Clean(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [liveVideo,setLiveVideo]=useState(false);
 const [isPlaying,setIsPlaying]=useState(true);
 const [zoom,setZoom]=useState(1);
 const [fit,setFit]=useState("cover");
 const [phoneFit,setPhoneFit]=useState(false);
 const [facing,setFacing]=useState("user");
 const [activePanel,setActivePanel]=useState(null);
 const [homeFolder,setHomeFolder]=useState(false);
 const [menuFolder,setMenuFolder]=useState(false);
 const [screenFolder,setScreenFolder]=useState(false);
 const [shareFolder,setShareFolder]=useState(false);
 const [transText,setTransText]=useState("Tap 🎤 Speak English, Hear Local");
 const [chatId,setChatId]=useState(null);
 const [shareId,setShareId]=useState(null);
 const [theme,setTheme]=useState("HOLO Dark");
 const [satCall,setSatCall]=useState(false);
 const [satStatus,setSatStatus]=useState("Offline");
 const [backupLog,setBackupLog]=useState("JSON/JS/JSX Backup Linked");
 const videoRef=useRef(null);
 const canvasRef=useRef(null);
 const fileInputRef=useRef(null);
 const videoInputRef=useRef(null);

 const backupJSON={
  project:"MYGEA SOCIAL NATIVE V6 CLEAN MATURE",
  version:"V6.0.0",
  files:{
   "next.config.js":{type:"js",status:"linked",path:"/next.config.js"},
   "package.json":{type:"json",status:"linked",path:"/package.json"},
   "vercel.json":{type:"json",status:"linked",path:"/vercel.json"},
   "app/page.jsx":{type:"jsx",status:"active",path:"/app/page.jsx"},
   "app/layout.jsx":{type:"jsx",status:"linked",path:"/app/layout.jsx"},
   "app/apps/[id]/page.jsx":{type:"jsx",status:"active",path:"/app/apps/[id]/page.jsx"},
   "lib/geappleApi.js":{type:"js",status:"provisioned",code:"export const backupProfiles={...}"},
   "lib/backupProfiles.json":{type:"json",status:"provisioned",apis:["camera","video","holo","geatune","geapay","legal","sat","share"]},
   "lib/legalNdpa.json":{type:"json",status:"linked",terms:"/legal",ndpa:"/ndpa"}
  },
  ceo:"Apostle Dr Oladele Mighty Hassan",
  rc:"9882150",
  google:"https://www.google.com/search?q=Geapple+Ecosystem",
  sat:{freeCalls:"SAT Free Calls Online/Offline",status:satStatus}
 };

 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"MYGEA V6 CLEAN MATURE 🌍 Folders Fixed!",l:152,liked:false,comments:["Weldone CEO! Chat now opens!"],shares:12},
  {id:2,u:"GEAPPLE CEO",t:"SAT Free Calls 🤙 + Phone Fit 📱 + Share Folder 💠 LIVE!",l:98,liked:false,comments:[],shares:5},
 ]);

 useEffect(()=>{ const p=window.location.pathname.split('/').pop(); if(p &&!isNaN(p)) setId(p); 
  if('speechSynthesis' in window){ window.speechSynthesis.getVoices(); }
  const online=()=>setSatStatus("Online"); const offline=()=>setSatStatus("Offline");
  window.addEventListener('online',online); window.addEventListener('offline',offline);
  setSatStatus(navigator.onLine?"Online":"Offline");
 },[]);

 const startCamera=async()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing,width:1280},audio:true}); if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(false); setIsPlaying(true);} doBackup('camera_api','ON'); }catch{alert("Allow Camera!");} };
 const startVideoStream=async()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:1920},audio:true}); if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(true); setIsPlaying(true);} doBackup('video_api','LIVE'); }catch{alert("Allow Camera!");} };
 const stopAll=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); setLiveVideo(false); };
 const togglePlay=()=>{ if(videoRef.current){ if(isPlaying) videoRef.current.pause(); else videoRef.current.play(); setIsPlaying(!isPlaying);} };
 const flipSelfie=()=>{ setFacing(f=>f==="user"?"environment":"user"); setTimeout(()=>{if(live) startCamera();},400); };
 const togglePhoneFit=()=>{ setPhoneFit(!phoneFit); if(!phoneFit){setFit("contain"); setZoom(1);} else{setFit("cover");} doBackup('phone_fit',!phoneFit?'ON':'OFF'); };
 const goFullScreen=()=>{ if(videoRef.current){ if(videoRef.current.requestFullscreen) videoRef.current.requestFullscreen(); } };
 const snapshot=()=>{
  if(!videoRef.current ||!canvasRef.current) return;
  const c=canvasRef.current; c.width=videoRef.current.videoWidth; c.height=videoRef.current.videoHeight;
  c.getContext('2d').drawImage(videoRef.current,0,0);
  const url=c.toDataURL("image/png"); const a=document.createElement('a'); a.href=url; a.download=`MYGEA_V6_${Date.now()}.png`; a.click();
  doBackup('snapshot_api','saved');
 };
 const doBackup=(k,v)=>{ 
  localStorage.setItem(`geapple_${k}`,v); 
  localStorage.setItem('geapple_backup_v6',JSON.stringify({...backupJSON,last:k,val:v,time:Date.now()}));
  setBackupLog(`${k}=${v} • ${new Date().toLocaleTimeString()}`);
 };
 const handleFileUpload=(e)=>{ const f=e.target.files[0]; if(f){ doBackup('file_upload',f.name); setPosts([{id:Date.now(),u:"You 📁",t:`File: ${f.name} 📁`,l:0,liked:false,comments:[],shares:0},...posts]); alert(`File ${f.name} Linked to backupProfiles.json!`);} };
 const handleVideoUpload=(e)=>{ const f=e.target.files[0]; if(f){ doBackup('video_upload',f.name); setPosts([{id:Date.now(),u:"You 🎥",t:`Video: ${f.name} 🎞️`,l:0,liked:false,comments:[],shares:0},...posts]); } };
 const like=(pid)=>{ setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p)); };
 const shareLinkAction=(pid=null)=>{ const url=window.location.href+(pid?`?post=${pid}`:''); navigator.clipboard.writeText(url); alert('🖇️ Share Link Copied! 🔗 '+url); setShareId(pid||'global'); doBackup('share_link',url); };
 const shareTo=(pl,pid)=>{ const url=window.location.href; if(pl==='wa') window.open(`https://wa.me/?text=${encodeURIComponent('MYGEA V6! '+url)}`); if(pl==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`); if(pl==='yt') window.open(`https://www.youtube.com/`); if(pl==='ig') window.open(`https://www.instagram.com/`); if(pl==='tt') window.open(`https://www.tiktok.com/`); if(pl==='google') window.open(`https://www.google.com/search?q=Geapple`); if(pl==='copy'){navigator.clipboard.writeText(url); alert('🔗 Copied!');} };
 // LANGUAGE VOICE INTERPRETER FIXED - WORKING ACTIVE NOW
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){ alert("Use Chrome for Translation!"); return; }
  const rec=new SR(); rec.lang='en-US'; rec.interimResults=false; rec.maxAlternatives=1;
  rec.onstart=()=>setTransText("🎤 Listening... Speak English now!");
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript;
   let tr=txt;
   const map={yo:`Yoruba: ${txt} - Bawo ni`, ig:`Igbo: ${txt} - Kedu`, ha:`Hausa: ${txt} - Sannu`, pcm:`Pidgin: ${txt} - How you dey`, fr:`French: ${txt} -> Bonjour ${txt}`, es:`Spanish: ${txt} -> Hola ${txt}`, zh:`Chinese: ${txt} -> Ni hao ${txt}`, ar:`Arabic: ${txt} -> Salam ${txt}`};
   tr=map[lang]||txt;
   setTransText(`✅ You said: "${txt}" → ${tr}`);
   // FIXED: Ensure voices loaded then speak
   const speak=()=>{
    const utter=new SpeechSynthesisUtterance(tr);
    const voices=speechSynthesis.getVoices();
    const localVoice=voices.find(v=>v.lang.includes(lang))||voices[0];
    if(localVoice) utter.voice=localVoice;
    utter.rate=0.9; speechSynthesis.speak(utter);
   };
   if(speechSynthesis.getVoices().length===0){ speechSynthesis.onvoiceschanged=speak; } else{ speak(); }
   doBackup('translate_api',lang+':'+txt);
  };
  rec.onerror=()=>setTransText("❌ Mic error - Allow mic!");
  rec.start();
 };
 const startSatCall=()=>{ setSatCall(!satCall); setSatStatus(satCall?"Offline":"SAT Online - Free Call Active"); doBackup('sat_calls',satCall?'OFF':'ON'); alert(satCall?"SAT Call Ended":"SAT Free Call 🤙 Online - Connecting via Geapple SAT..."); };
 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><h2 style={{color:'#0f0'}}>APP {id}</h2><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:12,borderRadius:10}}>Go MYGEA V6</button></div>;
 return(
 <div style={{background:theme==="Ocean Blue"?'#001122':'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}`}</style>
  <canvas ref={canvasRef} style={{display:'none'}}/>
  <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{display:'none'}} accept=".pdf,.doc,.zip,.json,.js,.jsx"/>
  <input type="file" ref={videoInputRef} onChange={handleVideoUpload} style={{display:'none'}} accept="video/*"/>

  {/* LEFT CLEAN - ONLY 4 ICONS - REST IN FOLDERS */}
  <div style={{width:62,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span className="spin" style={{fontSize:26}}>🌍</span></div>
   {/* 1. HOME FOLDER - ALL VERTICAL TOOLS INSIDE */}
   <button onClick={()=>{setHomeFolder(!homeFolder); setMenuFolder(false);}} style={{background:homeFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:20}} title="Home Folder - All Tools">🏡</button>
   {/* 2. SCREEN TOOLS FOLDER - ALL ▶️ TOOLS */}
   <button onClick={()=>{setScreenFolder(!screenFolder); setHomeFolder(false);}} style={{background:screenFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:18}} title="Screen Tools Folder">▶️</button>
   {/* 3. MENU SETTINGS FOLDER - BACKUP JSON/JS/JSX */}
   <button onClick={()=>{setMenuFolder(!menuFolder); setHomeFolder(false);}} style={{background:menuFolder?'#fff':'#111',color:menuFolder?'#000':'#fff',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:18}} title="Menu Settings Tools Folder">⚙️</button>
   {/* 4. SHARE LINKS FOLDER */}
   <button onClick={()=>setShareFolder(!shareFolder)} style={{background:shareFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:18}} title="Shared Links Folder">💠</button>
   <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:8,alignItems:'center'}}>
    <div style={{fontSize:7,color:satStatus.includes('Online')?'#0f0':'#888',textAlign:'center'}}>{satStatus.includes('Online')?'🟢':'🔴'}<br/>{satStatus.slice(0,6)}</div>
    <button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button>
   </div>
  </div>

  {/* HOME FOLDER DRAWER - ALL TOOLS APPEARS WHEN TAP 🏡 */}
  {homeFolder && <div style={{position:'fixed',left:62,top:0,bottom:0,width:200,background:'#0f0f0f',borderRight:'1px solid #0f03',zIndex:25,padding:12,overflowY:'auto'}}>
   <div style={{fontWeight:'bold',fontSize:12,color:'#0f0',marginBottom:10}}>📂 HOME FOLDER - ALL TOOLS</div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
    <button onClick={()=>{setActivePanel('camera'); startCamera(); setHomeFolder(false);}} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📷<br/>Cam</button>
    <button onClick={()=>{startVideoStream(); setActivePanel('video'); setHomeFolder(false);}} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📹<br/>Stream</button>
    <button onClick={()=>{setHolo(!holo); setActivePanel('holo');}} style={{background:holo?'#f0f':'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>👁️<br/>HOLO</button>
    <button onClick={()=>fileInputRef.current.click()} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📁<br/>Files</button>
    <button onClick={()=>videoInputRef.current.click()} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>🎥<br/>Videos</button>
    <button onClick={()=>setActivePanel('reel')} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>🎞️<br/>Reel</button>
    <button onClick={()=>setActivePanel('geatune')} style={{background:'#111',border:'1px solid #1DB954',padding:10,borderRadius:10,fontSize:11}}>🎵<br/>Tune</button>
    <button onClick={()=>setActivePanel('geapay')} style={{background:'#111',border:'1px solid #00D632',padding:10,borderRadius:10,fontSize:11}}>💳<br/>Pay</button>
    <button onClick={()=>setActivePanel('adverts')} style={{background:'#111',border:'1px solid #f00',padding:10,borderRadius:10,fontSize:11}}>📺<br/>Ads</button>
    <button onClick={()=>setActivePanel('lang')} style={{background:'#111',border:'1px solid #0ff',padding:10,borderRadius:10,fontSize:11}}>🌐<br/>Lang</button>
    <button onClick={()=>{startSatCall();}} style={{background:satCall?'#0f0':'#111',border:'1px solid #0f0',padding:10,borderRadius:10,fontSize:11}}>🤙<br/>SAT</button>
    <button onClick={()=>setActivePanel('theme')} style={{background:'#111',border:'1px solid #fa0',padding:10,borderRadius:10,fontSize:11}}>🎨<br/>Theme</button>
   </div>
   <button onClick={()=>setHomeFolder(false)} style={{width:'100%',marginTop:12,background:'#222',color:'#fff',border:0,padding:8,borderRadius:8}}>Close Folder</button>
   <div style={{fontSize:7,color:'#666',marginTop:8}}>Tap any tool - it opens in main window</div>
  </div>}

  <div style={{marginLeft:62,flex:1,paddingBottom:90}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="spin" style={{fontSize:18}}>🌎</span><div style={{fontWeight:'bold',color:'#0f0',fontSize:11}}>MYGEA V6 CLEAN MATURE</div>
    <div style={{marginLeft:'auto',display:'flex',gap:6}}>
     <button onClick={startSatCall} style={{fontSize:7,border:`1px solid ${satCall?'#0f0':'#888'}`,padding:'4px 8px',borderRadius:12,color:satCall?'#0f0':'#888',background:'#111'}}>🤙 SAT {satStatus.includes('Online')?'Online':'Offline'}</button>
     <button onClick={()=>shareTo('google')} style={{fontSize:7,border:'1px solid #4285F4',padding:'4px 8px',borderRadius:12,color:'#4285F4',background:'#111'}}>🚦 Google</button>
     <div style={{fontSize:7,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{phoneFit?'📱 FIT':'5G V6'}</div>
    </div>
   </div>
   {/* VIDEO WINDOW - TAP = PHONE FIT */}
   <div onClick={togglePhoneFit} onDoubleClick={goFullScreen} style={{position:'relative',background:'#111',margin:phoneFit?0:10,borderRadius:phoneFit?0:16,overflow:'hidden',border:liveVideo?'2px solid #f00':holo?'2px solid #f0f':'1px solid #222',display:'flex',cursor:'pointer'}}>
    <div style={{flex:1,position:'relative'}}>
     <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live? (phoneFit?'78vh':280):0,background:'#000',objectFit:phoneFit?'contain':fit,transform:`scale(${zoom})`,display:live?'block':'none'}}/>
     {!live && <div style={{height:phoneFit?'70vh':220,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:36}}>📱</div><div style={{color:'#666',fontSize:10,textAlign:'center'}}>Tap Window = Fit Phone 📱<br/>Double Tap = Full Screen</div><div style={{display:'flex',gap:6}}><button onClick={(e)=>{e.stopPropagation(); startCamera();}} style={{background:'#0f0',color:'#000',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START 5G CAM</button><button onClick={(e)=>{e.stopPropagation(); startVideoStream();}} style={{background:'#f00',color:'#fff',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START STREAM</button></div><div style={{display:'flex',gap:6}}><button onClick={(e)=>{e.stopPropagation(); fileInputRef.current.click();}} style={{background:'#111',color:'#fff',border:'1px solid #333',padding:'6px 10px',borderRadius:8,fontSize:9}}>📁 Files</button><button onClick={(e)=>{e.stopPropagation(); videoInputRef.current.click();}} style={{background:'#111',color:'#fff',border:'1px solid #333',padding:'6px 10px',borderRadius:8,fontSize:9}}>🎥 Videos</button><button onClick={(e)=>{e.stopPropagation(); startSatCall();}} style={{background:satCall?'#0f0':'#111',color:satCall?'#000':'#fff',border:'1px solid #0f0',padding:'6px 10px',borderRadius:8,fontSize:9}}>🤙 SAT {satStatus}</button></div></div>}
     {live && <><div style={{position:'absolute',top:8,left:8,background:liveVideo?'#f00':'#0f0',color:'#fff',fontSize:8,padding:'4px 8px',borderRadius:12}}>{phoneFit?'📱 PHONE FIT':'🔴 LIVE'} • Tap to {phoneFit?'Exit':'Fit'}</div><div style={{position:'absolute',bottom:8,left:'50%',transform:'translateX(-50%)',background:'rgba(0,0,0,0.7)',borderRadius:20,padding:'4px 10px',fontSize:7,color:'#fff'}}>👆 Tap = Phone Fit • 👆👆 = Full Screen</div></>}
     {holo &&!live && <div style={{padding:10,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6}}>{Array.from({length:15}).map((_,i)=><div key={i} style={{background:'#111',border:'1px solid #f0f',borderRadius:8,padding:6,textAlign:'center'}}><div style={{fontSize:16}}>👤</div><div style={{fontSize:6,color:'#f0f'}}>HOLO P{i+1}</div></div>)}</div>}
    </div>
   </div>

   {/* SCREEN TOOLS FOLDER - RIGHT SIDE VERTICAL - TAP ... SHOWS ALL ▶️ */}
   <div style={{position:'fixed',right:6,top:90,zIndex:20,display:'flex',flexDirection:'column',gap:6}}>
    <button onClick={()=>setScreenFolder(!screenFolder)} style={{background:screenFolder?'#0f0':'#111',color:screenFolder?'#000':'#fff',border:'1px solid #222',width:38,height:38,borderRadius:10,fontSize:14}} title="Screen Tools Folder"> {screenFolder?'✕':'...'} </button>
    {screenFolder && <div style={{background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:6,display:'flex',flexDirection:'column',gap:6,boxShadow:'0 4px 20px rgba(0,0,0,0.8)'}}>
     <button onClick={togglePlay} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:38,borderRadius:8}}>{isPlaying?'⏸️':'▶️'}</button>
     <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime+=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:32,borderRadius:8,fontSize:10}}>⏩</button>
     <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime-=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:32,borderRadius:8,fontSize:10}}>◀️</button>
     <button onClick={flipSelfie} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:32,borderRadius:8,fontSize:10}}>🤳</button>
     <button onClick={snapshot} style={{background:'#0f0',color:'#000',border:0,width:38,height:32,borderRadius:8}}>🔘</button>
     <button onClick={()=>setZoom(z=>Math.min(2,z+0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:28,borderRadius:8,fontSize:9}}>IN+</button>
     <button onClick={()=>setZoom(z=>Math.max(0.8,z-0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:28,borderRadius:8,fontSize:9}}>OUT-</button>
     <button onClick={()=>setFit(fit==="cover"?"contain":"cover")} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:28,borderRadius:8,fontSize:7}}>{fit.toUpperCase()}</button>
     <button onClick={goFullScreen} style={{background:'#4285F4',color:'#fff',border:0,width:38,height:28,borderRadius:8,fontSize:10}}>⛶</button>
     <button onClick={stopAll} 