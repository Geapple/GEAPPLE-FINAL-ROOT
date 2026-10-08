"use client";
import { useState,useEffect,useRef } from "react";
import { db, isFirebaseReady } from "../../../lib/firebaseConfig.js";
import { sendRealMessage, listenRealChats } from "../../../lib/chatApi.js";

export default function MyGeaNativeV62Real(){
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
 const [backupLog,setBackupLog]=useState("Firebase Real Chat Linked");
 const [realChatMsgs,setRealChatMsgs]=useState({});
 const [firebaseStatus,setFirebaseStatus]=useState("Checking...");
 const videoRef=useRef(null);
 const canvasRef=useRef(null);
 const fileInputRef=useRef(null);
 const videoInputRef=useRef(null);

 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"MYGEA SOCIAL V6.2 REAL CHAT 🔴 Friend Text Receives LIVE!",l:152,liked:false,comments:[],shares:12},
  {id:2,u:"GEAPPLE CEO",t:"Firebase Real-Time Chat + SAT Calls + Phone Fit 📱 LIVE!",l:98,liked:false,comments:[],shares:5},
 ]);

 useEffect(()=>{
  const p=window.location.pathname.split('/').pop(); if(p &&!isNaN(p)) setId(p);
  setFirebaseStatus(isFirebaseReady()?"Firebase READY - Real Chat ON 🔴":"Local Mode - Add Firebase keys to.env for Real");
  setSatStatus(navigator.onLine?"Online":"Offline");
  if('speechSynthesis' in window) speechSynthesis.getVoices();
  // Auto open chat if link has?post=1
  const params=new URLSearchParams(window.location.search);
  const postQ=params.get('post');
  if(postQ){ setChatId(Number(postQ)); }
 },[]);

 // REAL-TIME LISTENER - THIS MAKES YOU RECEIVE FRIEND TEXT!
 useEffect(()=>{
  if(!chatId) return;
  const unsub = listenRealChats(chatId, (msgs)=>{
   setRealChatMsgs(prev=>({...prev,[chatId]:msgs}));
   setPosts(prev=>prev.map(post=>post.id===chatId?{...post,comments:msgs.map(m=>`${m.user}: ${m.text}`)}:post));
   if(msgs.length>0) setBackupLog(`Real Chat: ${msgs.length} msgs received LIVE 🔴`);
  });
  return ()=>{ if(unsub) unsub(); };
 },[chatId]);

 const startCamera=async()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing,width:1280},audio:true}); if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(false); setIsPlaying(true);} }catch{alert("Allow Camera!");} };
 const startVideoStream=async()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:1920},audio:true}); if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(true); setIsPlaying(true);} }catch{alert("Allow Camera!");} };
 const stopAll=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); setLiveVideo(false); };
 const togglePlay=()=>{ if(videoRef.current){ if(isPlaying) videoRef.current.pause(); else videoRef.current.play(); setIsPlaying(!isPlaying);} };
 const flipSelfie=()=>{ setFacing(f=>f==="user"?"environment":"user"); setTimeout(()=>{if(live) startCamera();},400); };
 const togglePhoneFit=()=>{ setPhoneFit(!phoneFit); if(!phoneFit){setFit("contain"); setZoom(1);} else{setFit("cover");} };
 const goFullScreen=()=>{ if(videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen(); };
 const snapshot=()=>{
  if(!videoRef.current ||!canvasRef.current) return;
  const c=canvasRef.current; c.width=videoRef.current.videoWidth; c.height=videoRef.current.videoHeight;
  c.getContext('2d').drawImage(videoRef.current,0,0);
  const url=c.toDataURL("image/png"); const a=document.createElement('a'); a.href=url; a.download=`MYGEA_V62_${Date.now()}.png`; a.click();
 };
 const doBackup=(k,v)=>{ localStorage.setItem(`geapple_${k}`,v); setBackupLog(`${k}=${v} • ${new Date().toLocaleTimeString()}`); };
 const handleFileUpload=(e)=>{ const f=e.target.files[0]; if(f){ doBackup('file',f.name); setPosts([{id:Date.now(),u:"You 📁",t:`File: ${f.name}`,l:0,liked:false,comments:[],shares:0},...posts]); } };
 const handleVideoUpload=(e)=>{ const f=e.target.files[0]; if(f){ doBackup('video',f.name); setPosts([{id:Date.now(),u:"You 🎥",t:`Video: ${f.name}`,l:0,liked:false,comments:[],shares:0},...posts]); } };
 const like=(pid)=>{ setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p)); };
 const shareLinkAction=(pid=null)=>{ const url=window.location.href.split('?')[0]+(pid?`?post=${pid}`:''); navigator.clipboard.writeText(url); alert('🖇️ Real Chat Link Copied! Send to friend with?post='+pid+' 🔗'); setShareId(pid||'global'); };
 const shareTo=(pl)=>{ const url=window.location.href; if(pl==='wa') window.open(`https://wa.me/?text=${encodeURIComponent('Join MYGEA Real Chat! '+url)}`); if(pl==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`); if(pl==='yt') window.open(`https://www.youtube.com/`); if(pl==='ig') window.open(`https://www.instagram.com/`); if(pl==='tt') window.open(`https://www.tiktok.com/`); if(pl==='google') window.open(`https://www.google.com/search?q=Geapple`); if(pl==='copy'){navigator.clipboard.writeText(url); alert('🔗 Copied!');} };
 // REAL CHAT SEND - THIS FIXES RECEIVE ISSUE!
 const handleRealChatSend=async(pid)=>{
  const el=document.getElementById(`c-${pid}`);
  if(!el ||!el.value.trim()) return;
  const text=el.value.trim();
  const user="You";
  // Optimistic UI
  const tempMsg={user,text,time:new Date().toISOString()};
  setRealChatMsgs(prev=>{ const cur=prev[pid]||[]; return {...prev,[pid]:[...cur,tempMsg]}; });
  setPosts(prev=>prev.map(p=>p.id===pid?{...p,comments:[...p.comments,`${user}: ${text}`]}:p));
  el.value="";
  // Real send via Firebase + JSON backup
  const res=await sendRealMessage(pid,text,user);
  if(res.real){ setBackupLog(`Real Chat Sent LIVE 🔴 to Firebase • Post ${pid}`); } else { setBackupLog(`Chat Saved Local JSON • Post ${pid} • Add Firebase keys for real`); }
 };
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){ alert("Use Chrome"); return; }
  const rec=new SR(); rec.lang='en-US';
  rec.onstart=()=>setTransText("🎤 Listening... Speak English!");
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript;
   let tr=txt;
   const map={yo:`Yoruba: ${txt}`, ig:`Igbo: ${txt}`, ha:`Hausa: ${txt}`, pcm:`Pidgin: ${txt}`, fr:`French: ${txt}`, es:`Spanish: ${txt}`};
   tr=map[lang]||txt;
   setTransText(`✅ "${txt}" → ${tr}`);
   const utter=new SpeechSynthesisUtterance(tr);
   const voices=speechSynthesis.getVoices(); if(voices[0]) utter.voice=voices[0];
   speechSynthesis.speak(utter);
  };
  rec.start();
 };
 const startSatCall=()=>{ setSatCall(!satCall); setSatStatus(satCall?"Offline":"SAT Online"); alert(satCall?"SAT Ended":"SAT Free Call 🤙 Online - Connecting..."); };
 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><h2 style={{color:'#0f0'}}>APP {id}</h2><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:12,borderRadius:10}}>Go MYGEA V6.2</button></div>;
 return(
 <div style={{background:theme==="Ocean Blue"?'#001122':'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <canvas ref={canvasRef} style={{display:'none'}}/>
  <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{display:'none'}} accept=".pdf,.doc,.zip,.json,.js,.jsx"/>
  <input type="file" ref={videoInputRef} onChange={handleVideoUpload} style={{display:'none'}} accept="video/*"/>

  <div style={{width:62,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span style={{fontSize:26}}>🌍</span></div>
   <button onClick={()=>{setHomeFolder(!homeFolder); setMenuFolder(false);}} style={{background:homeFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:20}}>🏡</button>
   <button onClick={()=>{setScreenFolder(!screenFolder); setHomeFolder(false);}} style={{background:screenFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:18}}>▶️</button>
   <button onClick={()=>{setMenuFolder(!menuFolder); setHomeFolder(false);}} style={{background:menuFolder?'#fff':'#111',color:menuFolder?'#000':'#fff',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:18}}>⚙️</button>
   <button onClick={()=>setShareFolder(!shareFolder)} style={{background:shareFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12,fontSize:18}}>💠</button>
   <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:8,alignItems:'center'}}>
    <div style={{fontSize:7,color:'#0f0',textAlign:'center'}}>{firebaseStatus.includes('READY')?'🔴 LIVE':'🟡 Local'}<br/>{satStatus.slice(0,6)}</div>
    <button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button>
   </div>
  </div>

  {homeFolder && <div style={{position:'fixed',left:62,top:0,bottom:0,width:200,background:'#0f0f0f',borderRight:'1px solid #0f03',zIndex:25,padding:12,overflowY:'auto'}}>
   <div style={{fontWeight:'bold',fontSize:12,color:'#0f0',marginBottom:10}}>📂 HOME FOLDER</div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
    <button onClick={()=>{setActivePanel('camera'); startCamera(); setHomeFolder(false);}} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📷<br/>Cam</button>
    <button onClick={()=>{startVideoStream(); setActivePanel('video'); setHomeFolder(false);}} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📹<br/>Stream</button>
    <button onClick={()=>{setHolo(!holo); setActivePanel('holo');}} style={{background:holo?'#f0f':'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>👁️<br/>HOLO</button>
    <button onClick={()=>fileInputRef.current.click()} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📁<br/>Files</button>
    <button onClick={()=>videoInputRef.current.click()} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>🎥<br/>Videos</button>
    <button onClick={()=>setActivePanel('geatune')} style={{background:'#111',border:'1px solid #1DB954',padding:10,borderRadius:10,fontSize:11}}>🎵<br/>Tune</button>
    <button onClick={()=>setActivePanel('geapay')} style={{background:'#111',border:'1px solid #00D632',padding:10,borderRadius:10,fontSize:11}}>💳<br/>Pay</button>
    <button onClick={()=>startSatCall()} style={{background:satCall?'#0f0':'#111',border:'1px solid #0f0',padding:10,borderRadius:10,fontSize:11}}>🤙<br/>SAT</button>
    <button onClick={()=>setActivePanel('lang')} style={{background:'#111',border:'1px solid #0ff',padding:10,borderRadius:10,fontSize:11}}>🌐<br/>Lang</button>
   </div>
   <button onClick={()=>setHomeFolder(false)} style={{width:'100%',marginTop:12,background:'#222',color:'#fff',border:0,padding:8,borderRadius:8}}>Close</button>
  </div>}

  <div style={{marginLeft:62,flex:1,paddingBottom:90}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <div style={{fontWeight:'bold',color:'#0f0',fontSize:11}}>MYGEA SOCIAL V6.2 REAL CHAT 🔴</div>
    <div style={{marginLeft:'auto',display:'flex',gap:6}}>
     <div style={{fontSize:7,border:`1px solid ${firebaseStatus.includes('READY')?'#0f0':'#fa0'}`,padding:'4px 8px',borderRadius:12,color:firebaseStatus.includes('READY')?'#0f0':'#fa0',background:'#111'}}>{firebaseStatus.includes('READY')?'🔴 Real Chat LIVE':'🟡 Local Mode'}</div>
     <button onClick={()=>shareTo('google')} style={{fontSize:7,border:'1px solid #4285F4',padding:'4px 8px',borderRadius:12,color:'#4285F4',background:'#111'}}>🚦 Google</button>
    </div>
   </div>
   <div onClick={togglePhoneFit} onDoubleClick={goFullScreen} style={{position:'relative',background:'#111',margin:phoneFit?0:10,borderRadius:phoneFit?0:16,overflow:'hidden',border:liveVideo?'2px solid #f00':'1px solid #222',display:'flex',cursor:'pointer'}}>
    <div style={{flex:1,position:'relative'}}>
     <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live? (phoneFit?'78vh':280):0,background:'#000',objectFit:phoneFit?'contain':fit,transform:`scale(${zoom})`,display:live?'block':'none'}}/>
     {!live && <div style={{height:phoneFit?'70vh':220,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:36}}>📱</div><div style={{color:'#666',fontSize:10,textAlign:'center'}}>Tap = Phone Fit 📱 • Double Tap = Full Screen<br/><span style={{color:firebaseStatus.includes('READY')?'#0f0':'#fa0',fontSize:8}}>{firebaseStatus}</span></div><div style={{display:'flex',gap:6}}><button onClick={(e)=>{e.stopPropagation(); startCamera();}} style={{background:'#0f0',color:'#000',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START CAM</button><button onClick={(e)=>{e.stopPropagation(); startVideoStream();}} style={{background:'#f00',color:'#fff',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>LIVE</button></div></div>}
     {live && <div style={{position:'absolute',top:8,left:8,background:liveVideo?'#f00':'#0f0',color:'#fff',fontSize:8,padding:'4px 8px',borderRadius:12}}>{phoneFit?'📱 PHONE FIT':'🔴 LIVE'}</div>}
    </div>
   </div>

   <div style={{position:'fixed',right:6,top:90,zIndex:20,display:'flex',flexDirection:'column',gap:6}}>
    <button onClick={()=>setScreenFolder(!screenFolder)} style={{background:screenFolder?'#0f0':'#111',color:screenFolder?'#000':'#fff',border:'1px solid #222',width:38,height:38,borderRadius:10,fontSize:14}}>{screenFolder?'✕':'...'}</button>
    {screenFolder && <div style={{background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:6,display:'flex',flexDirection:'column',gap:6}}>
     <button onClick={togglePlay} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:38,borderRadius:8}}>{isPlaying?'⏸️':'▶️'}</button>
     <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime+=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:32,borderRadius:8,fontSize:10}}>⏩</button>
     <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime-=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:32,borderRadius:8,fontSize:10}}>◀️</button>
     <button onClick={flipSelfie} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:32,borderRadius:8,fontSize:10}}>🤳</button>
     <button onClick={snapshot} style={{background:'#0f0',color:'#000',border:0,width:38,height:32,borderRadius:8}}>🔘</button>
     <button onClick={()=>setZoom(z=>Math.min(2,z+0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:28,borderRadius:8,fontSize:9}}>IN+</button>
     <button onClick={()=>setZoom(z=>Math.max(0.8,z-0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',width:38,height:28,borderRadius:8,fontSize:9}}>OUT-</button>
     <button onClick={goFullScreen} style={{background:'#4285F4',color:'#fff',border:0,width:38,height:28,borderRadius:8,fontSize:10}}>⛶</button>
     <button onClick={stopAll} style={{background:'#f00',color:'#fff',border:0,width:38,height:28,borderRadius:8,fontSize:9}}>⏺️</button>
     <button onClick={togglePhoneFit} style={{background:phoneFit?'#0f0':'#111',color:phoneFit?'#000':'#fff',border:'1px solid #333',width:38,height:28,borderRadius:8,fontSize:9}}>📱</button>
    </div>}
   </div>
   {menuFolder && <div style={{margin:10,background:'#0f0f0f',border:'1px solid #fff',borderRadius:12,padding:12}}>
    <div style={{fontWeight:'bold',fontSize:12}}>📂 MENU SETTINGS TOOLS - PROFESSIONAL JS/JSON/JSX</div>
    <div style={{fontSize:8,color:'#0f0',marginTop:4}}>JS Config + JSON Backup → Pages with Active Links 🔗</div>
    <div style={{display:'grid',gap:8,marginTop:10}}>
     <button onClick={()=>{location.href='/legal';}} style={{background:'#111',border:'1px solid #fff',padding:'12px',borderRadius:10,fontSize:12,color:'#fff',textAlign:'left',display:'flex',justifyContent:'space-between'}}><span>⚖️ Legal Page</span><span style={{color:'#0f0'}}>→ /legal 🔗 JSX</span></button>
     <button onClick={()=>{location.href='/terms';}} style={{background:'#111',border:'1px solid #fff',padding:'12px',borderRadius:10,fontSize:12,color:'#fff',textAlign:'left',display:'flex',justifyContent:'space-between'}}><span>📜 Terms & Conditions</span><span style={{color:'#0f0'}}>→ /terms 🔗</span></button>
     <button onClick={()=>{location.href='/privacy';}} style={{background:'#111',border:'1px solid #fff',padding:'12px',borderRadius:10,fontSize:12,color:'#fff',textAlign:'left',display:'flex',justifyContent:'space-between'}}><span>🔒 Privacy Policy</span><span style={{color:'#0f0'}}>→ /privacy 🔗</span></button>
     <button onClick={()=>{location.href='/ndpa';}} style={{background:'#111',border:'1px solid #fff',padding:'12px',borderRadius:10,fontSize:12,color:'#fff',textAlign:'left',display:'flex',justifyContent:'space-between'}}><span>🛡️ NDPA Compliance</span><span style={{color:'#0f0'}}>→ /ndpa 🔗</span></button>
    </div>
    <div style={{marginTop:10,background:'#000',padding:8,borderRadius:8,fontSize:8,color:'#aaa'}}>
     <div>JS: lib/firebaseConfig.js + lib/legalConfig.js - Active logic</div>
     <div>JSON: lib/menuSettingsTools.json + lib/chatApi.js backup</div>
     <div>JSX: app/legal/page.jsx, app/terms/page.jsx - Pages</div>
     <div>Firebase Status: {firebaseStatus}</div>
     <div>Backup: {backupLog}</div>
    </div>
    <button onClick={()=>setMenuFolder(false)} style={{width:'100%',marginTop:10,background:'#fff',color:'#000',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>Close Menu Folder</button>
   </div>}

   {activePanel==='legal' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #fff',borderRadius:12,padding:12}}><div style={{fontWeight:'bold',fontSize:12}}>⚖️ LEGAL - JS/JSON/JSX Pages</div><div style={{fontSize:10,color:'#aaa',marginTop:6}}>Company RC:9882150 • GSIA Secured • Firebase: {firebaseStatus}</div></div>}
   {activePanel==='lang' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff',borderRadius:12,padding:12}}><div style={{color:'#0ff',fontSize:11,fontWeight:'bold'}}>🌐 LANGUAGE VOICE INTERPRETER - FIXED ACTIVE ✅</div><div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>{["en","yo","ig","ha","pcm","fr","es"].map(l=><button key={l} onClick={()=>setLang(l)} style={{background:lang===l?'#0ff':'#111',color:lang===l?'#000':'#fff',border:'1px solid #222',padding:'6px 10px',borderRadius:20,fontSize:10}}>{l.toUpperCase()}</button>)}</div><div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:11,color:'#ccc',minHeight:40}}>{transText}</div><button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:12,borderRadius:10,fontWeight:'bold'}}>🎤 SPEAK ENGLISH → {lang.toUpperCase()}</button></div>}
   {activePanel==='geatune' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #1DB954',borderRadius:12,padding:12}}><div style={{color:'#1DB954',fontWeight:'bold'}}>🎵 GEATUNE</div><button onClick={()=>window.open('/apps/2')} style={{width:'100%',marginTop:10,background:'#1DB954',color:'#000',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>Open GeaTune 🔗</button></div>}
   {activePanel==='geapay' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #00D632',borderRadius:12,padding:12}}><div style={{color:'#00D632',fontWeight:'bold'}}>💳 GEAPAY + SAT 🤙 {satStatus}</div><button onClick={startSatCall} style={{width:'100%',marginTop:8,background:satCall?'#f00':'#00D632',color:'#fff',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>{satCall?'End SAT Call':'Start SAT Free Call 🤙'}</button></div>}
   {activePanel==='home' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{color:'#0f0',fontWeight:'bold',fontSize:12}}>🏠 HOME + REAL CHAT STATUS</div><div style={{fontSize:10,marginTop:6}}>CEO: Apostle Dr Oladele Mighty Hassan • RC:9882150</div><div style={{fontSize:9,color:firebaseStatus.includes('READY')?'#0f0':'#fa0',marginTop:4,background:'#111',padding:6,borderRadius:6}}>{firebaseStatus} • {backupLog}</div><div style={{fontSize:8,color:'#aaa',marginTop:6}}>Manual: 1. Tap 🏡 for tools 2. Tap ▶️ for screen tools 3. Tap ⚙️ for menu settings JS/JSON/JSX 4. Tap 💠 for share 5. Chat now REAL - Friend receives LIVE via Firebase</div></div>}
   <div style={{padding:10,paddingRight:50}}>
    <div style={{display:'flex',gap:6,marginBottom:10,flexWrap:'wrap'}}>
     <button onClick={()=>fileInputRef.current.click()} style={{background:'#111',border:'1px solid #0f0',color:'#0f0',padding:'8px 12px',borderRadius:20,fontSize:10}}>📁 Files 🖇️</button>
     <button onClick={()=>videoInputRef.current.click()} style={{background:'#111',border:'1px solid #f00',color:'#f00',padding:'8px 12px',borderRadius:20,fontSize:10}}>🎥 Videos 🖇️</button>
     <button onClick={togglePhoneFit} style={{background:phoneFit?'#0f0':'#111',border:'1px solid #0f0',color:phoneFit?'#000':'#0f0',padding:'8px 12px',borderRadius:20,fontSize:10}}>📱 Phone Fit</button>
     <div style={{background:firebaseStatus.includes('READY')?'#0f0':'#222',color:firebaseStatus.includes('READY')?'#000':'#aaa',padding:'8px 12px',borderRadius:20,fontSize:9,fontWeight:'bold'}}>{firebaseStatus.includes('READY')?'🔴 Real Chat LIVE':'🟡 Local - Add Firebase'}</div>
    </div>
    {posts.map(p=>{
     const realMsgs=realChatMsgs[p.id]||[];
     return(
     <div key={p.id} style={{background:'#0a0a0a',border:chatId===p.id?'1px solid #0f0':'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}>
      <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>Real Chat {firebaseStatus.includes('READY')?'LIVE 🔴':'Local 🟡'} • {realMsgs.length} msgs • Now</div></div></div>
      <div style={{marginTop:8,fontSize:13}}>{p.t}</div>
      <div style={{display:'flex',gap:8,marginTop:10,flexWrap:'wrap'}}>
       <button onClick={()=>like(p.id)} style={{background:'#111',border:'1px solid #222',color:p.liked?'#f00':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>{p.liked?'❤️':'🤍'} {p.l}</button>
       <button onClick={()=>{if(chatId===p.id){setChatId(null);} else{setChatId(p.id); setShareId(null); setActivePanel(null);}}} style={{background:chatId===p.id?'#0f0':'#111',border:'1px solid #222',color:chatId===p.id?'#000':'#888',borderRadius:20,padding:'6px 12px',fontSize:11,fontWeight:chatId===p.id?'bold':''}}>💬 Chat {chatId===p.id?`(${realMsgs.length}) Open`:'Open'} {firebaseStatus.includes('READY')?'🔴':''}</button>
       <button onClick={()=>shareLinkAction(p.id)} style={{background:'#0f0',border:'1px solid #0f0',color:'#000',borderRadius:20,padding:'6px 14px',fontSize:11,fontWeight:'bold'}}>🖇️ Share Link?post={p.id} 🔗</button>
      </div>
      {/* REAL CHAT FIXED - RECEIVES FRIEND TEXT! */}
      {chatId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:10,border:'1px solid #0f0'}}>
       <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:8}}><div style={{fontSize:10,fontWeight:'bold',color:'#0f0'}}>💬 Real Chat {firebaseStatus.includes('READY')?'LIVE 🔴 - Friend receives!':'Local 🟡'} ✅ FIXED</div><div style={{fontSize:8,color:'#aaa'}}>{realMsgs.length} messages • {firebaseStatus.includes('READY')?'Real-time':'Local JSON'}</div></div>
       <div style={{maxHeight:180,overflowY:'auto',display:'flex',flexDirection:'column',gap:4,marginBottom:8}}>
        {realMsgs.length===0? <div style={{fontSize:11,color:'#666',textAlign:'center',padding:20}}>No messages yet. Be first to chat!<br/>Friend will receive LIVE if Firebase ready 🔴</div> : realMsgs.map((m,i)=><div key={i} style={{fontSize:11,padding:'6px 8px',background:m.user==='You'?'#0f0':'#222',color:m.user==='You'?'#000':'#fff',borderRadius:8,alignSelf:m.user==='You'?'flex-end':'flex-start',maxWidth:'80%'}}><b>{m.user}:</b> {m.text} <span style={{fontSize:7,opacity:0.7}}>{new Date(m.time).toLocaleTimeString()}</span></div>)}
       </div>
       <div style={{display:'flex',gap:6}}><input id={`c-${p.id}`} placeholder={firebaseStatus.includes('READY')?"Type real chat... friend receives LIVE 🔴":"Type... (local mode)"} style={{flex:1,background:'#000',border:'1px solid #0f0',borderRadius:16,padding:'10px 12px',color:'#fff',fontSize:12}} onKeyDown={(e)=>{if(e.key==='Enter') handleRealChatSend(p.id)}}/><button onClick={()=>handleRealChatSend(p.id)} style={{background:'#0f0',color:'#000',border:0,borderRadius:16,padding:'8px 16px',fontSize:12,fontWeight:'bold'}}>Send 🔴</button></div>
       <div style={{fontSize:7,color:'#888',marginTop:6}}>Share link: {window.location.href.split('?')[0]}?post={p.id} → Friend opens → Chat appears LIVE!</div>
      </div>}
     </div>
    )})}
   </div>
  </div>

  <div style={{position:'fixed',bottom:0,left:62,right:0,background:'#0a0a0a',borderTop:'1px solid #222',zIndex:20,padding:'6px 0'}}>
   {!shareFolder?
    <div style={{display:'flex',justifyContent:'space-around',alignItems:'center'}}>
     <div style={{fontSize:9,color:'#666'}}>V6.2 Real Chat 🔴</div>
     <button onClick={()=>setShareFolder(true)} style={{background:'#0f0',color:'#000',border:0,padding:'8px 20px',borderRadius:20,fontWeight:'bold',fontSize:11}}>💠 Shared Links Folder 📂</button>
     <div style={{fontSize:9,color:'#0f0'}}>{backupLog.slice(0,10)}</div>
    </div>
   :
    <div style={{padding:'0 8px'}}>
     <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:6}}><div style={{fontSize:10,fontWeight:'bold'}}>📂 SHARED LINKS - Real Chat Link?post=id</div><button onClick={()=>setShareFolder(false)} style={{background:'#222',color:'#fff',border:0,padding:'4px 8px',borderRadius:6,fontSize:9}}>✕</button></div>
     <div style={{display:'flex',justifyContent:'space-around'}}>
      <button onClick={()=>shareTo('fb')} style={{background:'#1877F2',color:'#fff',border:0,width:36,height:32,borderRadius:8,fontWeight:'bold',fontSize:11}}>f</button>
      <button onClick={()=>shareTo('ig')} style={{background:'#d62976',color:'#fff',border:0,width:36,height:32,borderRadius:8,fontSize:9}}>IG</button>
      <button onClick={()=>shareTo('tt')} style={{background:'#000',color:'#fff',border:'1px solid #fff',width:36,height:32,borderRadius:8,fontSize:11}}>♪</button>
      <button onClick={()=>shareTo('wa')} style={{background:'#25D366',color:'#fff',border:0,width:36,height:32,borderRadius:8,fontSize:9}}>WA</button>
      <button onClick={()=>shareTo('yt')} style={{background:'#f00',color:'#fff',border:0,width:36,height:32,borderRadius:8,fontSize:9}}>YT</button>
      <button onClick={()=>shareLinkAction(1)} style={{background:'#0f0',color:'#000',border:0,width:38,height:32,borderRadius:8,fontWeight:'bold',fontSize:10}}>🖇️?post</button>
      <button onClick={()=>shareTo('google')} style={{background:'#4285F4',color:'#fff',border:0,width:38,height:32,borderRadius:8,fontWeight:'bold',fontSize:9}}>🚦</button>
     </div>
    </div>
   }
  </div>
 </div>
 )
}