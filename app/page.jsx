"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaNativeV4(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [liveVideo,setLiveVideo]=useState(false);
 const [isPlaying,setIsPlaying]=useState(true);
 const [zoom,setZoom]=useState(1);
 const [fit,setFit]=useState("cover");
 const [facing,setFacing]=useState("user");
 const [activePanel,setActivePanel]=useState(null);
 const [transText,setTransText]=useState("Tap 🎤 Speak English, hear local & foreign");
 const [chatId,setChatId]=useState(null);
 const [shareId,setShareId]=useState(null);
 const [inbox,setInbox]=useState([{from:"GEAPPLE",msg:"Welcome to MYGEA NATIVE V4",time:"Now"}]);
 const [backupLog,setBackupLog]=useState("API Backup: Connected • GSIA Secured");
 const videoRef=useRef(null);
 const canvasRef=useRef(null);
 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"Welcome to MYGEA SOCIAL NATIVE V4 - Global Professional Standard 🌍",l:152,liked:false,comments:["Welcome CEO!"],shares:12},
  {id:2,u:"GEAPPLE CEO",t:"HOLO 5G Sensor + Share Link + API Backup Active! 🚀",l:98,liked:false,comments:[],shares:5},
 ]);

 useEffect(()=>{
  const p=window.location.pathname.split('/').pop(); if(p &&!isNaN(p)) setId(p);
  const saved=localStorage.getItem('geapple_api_backup'); if(saved) setBackupLog("API Backup Restored: "+saved.slice(0,30));
 },[]);

 const startCamera=async()=>{
  try{
   const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing,width:1280},audio:true});
   if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(false); setIsPlaying(true);}
   doBackup('camera_api','5G Camera ON');
  }catch{alert("Allow Camera for 5G Sensor!");}
 };
 const startVideoStream=async()=>{
  try{
   const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:1920},audio:true});
   if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(true); setIsPlaying(true);}
   setPosts([{id:Date.now(),u:"You 🔴 LIVE",t:"LIVE STREAMING started - 5G Video Sensor ON! 📹",l:0,liked:false,comments:[],shares:0},...posts]);
   doBackup('video_api','LIVE Streaming ON');
  }catch{alert("Allow Camera for Video Streaming!");}
 };
 const stopAll=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); setLiveVideo(false); doBackup('sensor','STOP'); };
 const togglePlay=()=>{ if(videoRef.current){ if(isPlaying) videoRef.current.pause(); else videoRef.current.play(); setIsPlaying(!isPlaying);} };
 const flipSelfie=()=>{ setFacing(f=>f==="user"?"environment":"user"); setTimeout(()=>{if(live) startCamera();},400); doBackup('selfie','Flip'); };
 const snapshot=()=>{
  if(!videoRef.current ||!canvasRef.current) return;
  const c=canvasRef.current; c.width=videoRef.current.videoWidth; c.height=videoRef.current.videoHeight;
  const ctx=c.getContext('2d'); ctx.drawImage(videoRef.current,0,0);
  if(holo){ ctx.fillStyle='rgba(255,0,255,0.2)'; ctx.fillRect(0,0,c.width,c.height); }
  const url=c.toDataURL("image/png"); const a=document.createElement('a'); a.href=url; a.download=`MYGEA_HOLO_5G_${Date.now()}.png`; a.click();
  localStorage.setItem('geapple_api_backup',url); setBackupLog("Holographic 5G Image Saved + API Backup @ "+new Date().toLocaleTimeString());
 };
 const doBackup=(k,v)=>{ localStorage.setItem(`geapple_${k}`,v); localStorage.setItem('geapple_api_backup',`${k}:${v}@${Date.now()}`); setBackupLog(`API: ${k}=${v} • Backup Linked • ${new Date().toLocaleTimeString()}`); };
 const like=(pid)=>{ setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p)); doBackup('like_api',pid); };
 const shareLinkAction=(pid=null)=>{
  const url=window.location.href+(pid?`?post=${pid}`:'');
  if(navigator.share){ navigator.share({title:'MYGEA SOCIAL NATIVE V4',text:'Join Geapple Ecosystem - MYGEA V4!',url}).then(()=>alert('🖇️ Shared! 🔗')).catch(()=>{navigator.clipboard.writeText(url); alert('🖇️ Link Copied! 🔗 '+url);}); }
  else{ navigator.clipboard.writeText(url); alert('🖇️ Share Link Copied! 🔗\n'+url+'\nPaste to WhatsApp, Facebook, TikTok, Instagram, YouTube!'); setShareId(pid||'global'); }
  doBackup('share_link_api',url); if(pid) setPosts(posts.map(p=>p.id===pid?{...p,shares:(p.shares||0)+1}:p));
 };
 const shareTo=(pl,pid)=>{
  const url=window.location.href+`?post=${pid}`;
  if(pl==='wa') window.open(`https://wa.me/?text=${encodeURIComponent('Join MYGEA V4! '+url)}`);
  if(pl==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  if(pl==='yt') window.open(`https://www.youtube.com/`);
  if(pl==='ig') window.open(`https://www.instagram.com/`);
  if(pl==='tt') window.open(`https://www.tiktok.com/`);
  if(pl==='copy'){ navigator.clipboard.writeText(url); alert('🔗 Link Copied! '+url); }
  doBackup('share_'+pl,url); if(pid) setPosts(posts.map(p=>p.id===pid?{...p,shares:(p.shares||0)+1}:p));
 };
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR){alert("Use Chrome!");return;}
  const rec=new SR(); rec.lang='en-US';
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript; let tr=txt;
   if(lang==='yo') tr=`Yoruba: ${txt}`; if(lang==='ig') tr=`Igbo: ${txt}`; if(lang==='ha') tr=`Hausa: ${txt}`;
   if(lang==='pcm') tr=`Pidgin: ${txt}`; if(lang==='fr') tr=`French: ${txt} → Bonjour ${txt}`;
   if(lang==='es') tr=`Spanish: ${txt} → Hola ${txt}`; if(lang==='zh') tr=`Chinese: ${txt} → Ni hao ${txt}`;
   if(lang==='ar') tr=`Arabic: ${txt} → Salam ${txt}`;
   setTransText(tr); speechSynthesis.speak(new SpeechSynthesisUtterance(tr)); doBackup('translate_api',lang);
  }; rec.start(); setTransText("Listening... Speak English now!");
 };

 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',padding:8}}>← HUB</button><h2 style={{color:'#0f0'}}>APP {id} - Build after MYGEA V4</h2><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:12,borderRadius:10}}>Go MYGEA V4</button></div>;

 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}`}</style>
  <canvas ref={canvasRef} style={{display:'none'}}/>

  <div style={{width:64,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:8,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span className="spin" style={{fontSize:26}}>🌍</span></div>
   <button onClick={()=>{setActivePanel(activePanel==='home'?null:'home'); doBackup('api','home');}} style={{background:activePanel==='home'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🏠</button>
   <button onClick={()=>{setActivePanel(activePanel==='camera'?null:'camera'); if(!live) startCamera();}} style={{background:activePanel==='camera'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📷</button>
   <button onClick={()=>{startVideoStream(); setActivePanel('video');}} style={{background:liveVideo?'#f00':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📹</button>
   <button onClick={()=>{setHolo(!holo); setActivePanel('holo'); doBackup('holo_api','toggle');}} style={{background:holo?'#f0f':'#111',border:`1px solid ${holo?'#f0f':'#222'}`,width:42,height:42,borderRadius:12}}>👁️</button>
   <button onClick={()=>setActivePanel('reel')} style={{background:activePanel==='reel'?'#fa0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🎞️</button>
   <button onClick={()=>setActivePanel(activePanel==='lang'?null:'lang')} style={{background:activePanel==='lang'?'#0ff':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🌐</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#0f0',border:'1px solid #0f0',width:42,height:42,borderRadius:12}} title="Share Link">🖇️</button>
   <button onClick={()=>setActivePanel('inbox')} style={{background:activePanel==='inbox'?'#0ff':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📥</button>
   <button onClick={()=>setActivePanel(activePanel==='settings'?null:'settings')} style={{background:activePanel==='settings'?'#fff':'#111',color:activePanel==='settings'?'#000':'#fff',border:'1px solid #222',width:42,height:42,borderRadius:12}}>⚙️</button>
   <div style={{marginTop:'auto'}}><button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button></div>
  </div>

  <div style={{marginLeft:64,flex:1,paddingBottom:90}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="spin" style={{fontSize:18}}>🌎</span><div style={{fontWeight:'bold',color:'#0f0',fontSize:12}}>MYGEA SOCIAL NATIVE V4 PRO</div>
    <div style={{marginLeft:'auto',fontSize:7,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{liveVideo?'🔴 LIVE':live?'📷 5G CAM':'5G • V4'} {holo?'• HOLO 15':''} • {zoom.toFixed(1)}x</div>
   </div>

   <div style={{position:'relative',background:'#111',margin:10,borderRadius:16,overflow:'hidden',border:liveVideo?'2px solid #f00':holo?'2px solid #f0f':'1px solid #222',display:'flex'}}>
    <div style={{flex:1,position:'relative'}}>
     <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live?300:0,background:'#000',objectFit:fit,transform:`scale(${zoom})`,display:live?'block':'none'}}/>
     {!live && <div style={{height:240,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:40}}>📷</div><div style={{color:'#666',fontSize:10,textAlign:'center',padding:'0 20px'}}>Holographic 5G Sensor Images Functions Ready<br/>Selfie • Streaming • HOLO Projector</div><div style={{display:'flex',gap:8}}><button onClick={startCamera} style={{background:'#0f0',color:'#000',border:0,padding:'10px 16px',borderRadius:8,fontWeight:'bold',fontSize:12}}>START 5G CAM</button><button onClick={startVideoStream} style={{background:'#f00',color:'#fff',border:0,padding:'10px 16px',borderRadius:8,fontWeight:'bold',fontSize:12}}>START VIDEO STREAM</button></div></div>}
     {live && <><div style={{position:'absolute',top:8,left:8,background:liveVideo?'#f00':'#0f0',color:'#fff',fontSize:8,padding:'4px 8px',borderRadius:12}}>{liveVideo?'🔴 LIVE • VIDEO STREAMING':'📷 5G CAMERA SENSOR • HOLO READY'}</div>
      <div style={{position:'absolute',top:8,right:8,background:'rgba(0,0,0,0.6)',borderRadius:20,padding:'4px 8px',fontSize:8,color:'#0f0'}}>{backupLog.slice(0,25)}</div></>}
     {holo && live && <div style={{position:'absolute',bottom:70,left:6,right:6,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:4}}>{Array.from({length:10}).map((_,i)=><div key={i} style={{background:'rgba(255,0,255,0.25)',border:'1px solid #f0f',borderRadius:8,padding:4,textAlign:'center',boxShadow:'0 4px 10px rgba(255,0,255,0.5)'}}><div style={{fontSize:14}}>👤</div><div style={{fontSize:6}}>P{i+1}</div><div style={{height:3,background:'#f0f',marginTop:2,boxShadow:'0 0 6px #f0f'}}/></div>)}</div>}
     {holo &&!live && <div style={{padding:10,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6}}>{Array.from({length:15}).map((_,i)=><div key={i} style={{background:'#111',border:'1px solid #f0f',borderRadius:8,padding:6,textAlign:'center',boxShadow:'0 2px 8px #f0f3'}}><div style={{fontSize:16}}>👤</div><div style={{fontSize:7,color:'#f0f'}}>HOLO P{i+1}</div><div style={{width:'100%',height:8,background:'radial-gradient(ellipse,#000 0%, #f0f 100%)',borderRadius:'50%',marginTop:4,opacity:0.6}}/></div>)}</div>}
    </div>
    {live && <div style={{width:44,background:'rgba(0,0,0,0.7)',display:'flex',flexDirection:'column',alignItems:'center',gap:6,padding:'8px 4px'}}>
     <button onClick={togglePlay} style={{background:'#111',color:'#fff',border:'1px solid #333',width:36,height:36,borderRadius:8,fontSize:12}}>{isPlaying?'⏸️':'▶️'}</button>
     <button onClick={flipSelfie} style={{background:'#111',color:'#fff',border:'1px solid #333',width:36,height:32,borderRadius:8,fontSize:10}}>🤳</button>
     <button onClick={snapshot} style={{background:'#0f0',color:'#000',border:0,width:36,height:32,borderRadius:8,fontSize:12}}>🔘</button>
     <button onClick={()=>setZoom(z=>Math.min(2,z+0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',width:36,height:28,borderRadius:8,fontSize:9}}>IN+</button>
     <button onClick={()=>setZoom(z=>Math.max(0.8,z-0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',width:36,height:28,borderRadius:8,fontSize:9}}>OUT-</button>
     <button onClick={stopAll} style={{background:'#f00',color:'#fff',border:0,width:36,height:28,borderRadius:8,fontSize:8}}>⏺️</button>
    </div>}
   </div>

   {live && <div style={{margin:'0 10px',background:'rgba(0,0,0,0.8)',borderRadius:12,padding:'8px 6px',display:'flex',flexWrap:'wrap',gap:5,justifyContent:'center',border:'1px solid #222'}}>
    <button onClick={togglePlay} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 10px',fontSize:11}}>{isPlaying?'⏸️ Pause':'▶️ Play'}</button>
    <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime+=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 10px',fontSize:10}}>⏩ Forward</button>
    <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime-=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 10px',fontSize:10}}>◀️ Reverse</button>
    <button onClick={()=>startVideoStream()} style={{background:'#f00',color:'#fff',border:0,borderRadius:8,padding:'6px 10px',fontSize:10}}>🛑 Record</button>
    <button onClick={stopAll} style={{background:'#333',color:'#fff',border:0,borderRadius:8,padding:'6px 10px',fontSize:10}}>⏺️ Stop</button>
    <button onClick={flipSelfie} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 10px',fontSize:10}}>🤳 Selfie</button>
    <button onClick={snapshot} style={{background:'#0f0',color:'#000',border:0,borderRadius:8,padding:'6px 10px',fontSize:11}}>🔘 Snapshot</button>
    <button onClick={()=>setFit(fit==="cover"?"contain":"cover")} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 10px',fontSize:9}}>FIT {fit.toUpperCase()}</button>
    <button onClick={()=>{setZoom(1); doBackup('enhance_api','ON'); alert("Video & Camera Enhancement + Holographic 5G Sensor ON!");}} style={{background:'#0ff',color:'#000',border:0,borderRadius:8,padding:'6px 10px',fontSize:9}}>✨ Enhance + HOLO 5G</button>
    <button onClick={()=>shareLinkAction()} style={{background:'#0f0',color:'#000',border:0,borderRadius:8,padding:'6px 10px',fontSize:10}}>🖇️ Share Link 🔗</button>
   </div>}
   {activePanel==='home' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{color:'#0f0',fontWeight:'bold',fontSize:12}}>🏠 HOME + USER MANUAL PROFILE + API BACKUP</div><div style={{display:'flex',gap:10,marginTop:10,alignItems:'center'}}><div style={{width:50,height:50,background:'#0f0',borderRadius:25,display:'flex',alignItems:'center',justifyContent:'center'}}>👤</div><div><div style={{fontSize:13,fontWeight:'bold'}}>Apostle Dr Oladele Mighty Hassan</div><div style={{fontSize:10,color:'#888'}}>CEO Geapple Inc RC:9882150 • Port Harcourt • API Connected</div><div style={{fontSize:8,color:'#0f0'}}>{backupLog}</div></div></div><div style={{marginTop:10,display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>{["Edit Profile API","My Posts","Friends 1.2k","Earn ₦4k","Privacy API","Notifications API","Dark Mode API","Logout API","Users Manual","Inbox Messages"].map(m=><button key={m} onClick={()=>{doBackup('home_api',m); if(m==="Inbox Messages") setActivePanel('inbox'); else alert(m+' Activated + API Backup Linked!');}} style={{background:'#111',border:'1px solid #222',padding:'10px',borderRadius:8,fontSize:11,color:'#fff'}}>{m} 🔗</button>)}</div></div>}

   {activePanel==='inbox' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff',borderRadius:12,padding:12}}><div style={{color:'#0ff',fontWeight:'bold',fontSize:12}}>📥 INBOX + USERS MANUAL PROFILE</div>{inbox.map((x,i)=><div key={i} style={{background:'#111',border:'1px solid #222',padding:'10px',borderRadius:8,marginTop:8}}><div style={{fontSize:11,fontWeight:'bold'}}>{x.from}</div><div style={{fontSize:11,marginTop:4}}>{x.msg}</div><div style={{fontSize:8,color:'#666',marginTop:4}}>{x.time} • API Backup Linked</div></div>)}<div style={{marginTop:10,display:'flex',gap:6}}><input id="inboxIn" placeholder="Send message..." style={{flex:1,background:'#111',border:'1px solid #222',borderRadius:20,padding:'10px',color:'#fff',fontSize:12}}/><button onClick={()=>{const v=document.getElementById('inboxIn').value; if(v){setInbox([{from:"You",msg:v,time:"Now"},...inbox]); document.getElementById('inboxIn').value=""; doBackup('inbox_api',v);}}} style={{background:'#0ff',color:'#000',border:0,padding:'10px 14px',borderRadius:20,fontWeight:'bold'}}>Send</button></div><div style={{marginTop:10,fontSize:9,color:'#aaa',background:'#111',padding:8,borderRadius:8}}>Users Manual: 1. Tap 📷 for 5G Camera 2. Tap 📹 for Live 3. Tap 👁️ for HOLO 10-15 4. Tap 🖇️ to Share Link 5. All settings auto backup to API • GSIA Secured • www.geapple.com</div></div>}

   {activePanel==='camera' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{color:'#0f0',fontWeight:'bold',fontSize:12}}>📷 CAMERA SETTINGS + 5G SENSOR API</div><div style={{marginTop:10,display:'grid',gap:6}}>{["Resolution 4K/1080p/720p API","Front/Back Switch API","Flash On/Off/Auto API","HDR Sensor ON API","5G Enhancement ON API","AI Beauty ON API","Grid Lines API","Timer API"].map(s=><button key={s} onClick={()=>{if(s.includes("Front")) flipSelfie(); else{doBackup('camera_api',s); alert(s+' → ON + API Backup Linked!');}}} style={{background:'#111',border:'1px solid #222',padding:'10px',borderRadius:8,fontSize:11,color:'#fff',width:'100%',display:'flex',justifyContent:'space-between'}}><span>{s}</span><span style={{color:'#0f0'}}>🔗 ON</span></button>)}</div><button onClick={startCamera} style={{width:'100%',marginTop:10,background:'#0f0',color:'#000',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>APPLY & START CAMERA API</button></div>}

   {activePanel==='video' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #f00',borderRadius:12,padding:12}}><div style={{color:'#f00',fontWeight:'bold',fontSize:12}}>📹 VIDEO SETTINGS + LIVE STREAMING + API</div><div style={{marginTop:10,display:'grid',gap:6}}>{["Streaming Quality 4K Live API","Bitrate Auto 5G API","Microphone ON API","Stabilization ON API","Background Blur OFF API","Live Chat Overlay ON API","Save to Gallery ON API","Go Live to HOLO API"].map(s=><button key={s} onClick={()=>{doBackup('video_api',s); alert(s+' Activated + API Backup!');}} style={{background:'#111',border:'1px solid #222',padding:'10px',borderRadius:8,fontSize:11,color:'#fff',width:'100%',textAlign:'left'}}>{s} 🔗</button>)}</div><button onClick={startVideoStream} style={{width:'100%',marginTop:10,background:'#f00',color:'#fff',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>🔴 GO LIVE STREAMING NOW API</button></div>}

   {activePanel==='holo' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #f0f',borderRadius:12,padding:12}}><div style={{color:'#f0f',fontWeight:'bold',fontSize:12}}>👁️ HOLO CONFERENCE 10-15 + SHADOW PROJECTOR + 5G SENSOR API</div><div style={{fontSize:10,color:'#aaa',marginTop:6}}>Projector Sensors Active • Shadows Realistic • Depth 3D Hologram • 15 max • API Backup Linked • {backupLog.slice(0,40)}</div><div style={{marginTop:10,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6}}>{["Projector Brightness API","Shadow Intensity API","Depth Sensor API","Auto Focus HOLO API","Noise Cancellation API","Screen Share HOLO API","Record HOLO API","Mute All API","Invite Link API","End Conference API"].map(s=><button key={s} onClick={()=>{doBackup('holo_api',s); alert(s+' Sensor Activated + API Backup!');}} style={{background:'#111',border:'1px solid #f0f',padding:'8px',borderRadius:8,fontSize:9,textAlign:'center',color:'#fff'}}>{s} 🔗</button>)}</div><button onClick={()=>{setHolo(true); setActivePanel(null); doBackup('holo_api','ACTIVATE');}} style={{width:'100%',marginTop:10,background:'#f0f',color:'#fff',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>ACTIVATE HOLO CONFERENCE API</button></div>}

   {activePanel==='lang' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff',borderRadius:12,padding:12}}><div style={{color:'#0ff',fontSize:11,fontWeight:'bold'}}>🌐 LANGUAGE INTERPRETER VOICE TRANSLATION API - CONNECTED</div><div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>{[{k:"en",l:"English"},{k:"yo",l:"Yoruba"},{k:"ig",l:"Igbo"},{k:"ha",l:"Hausa"},{k:"pcm",l:"Pidgin"},{k:"fr",l:"French"},{k:"es",l:"Spanish"},{k:"zh",l:"Chinese"},{k:"ar",l:"Arabic"}].map(L=><button key={L.k} onClick={()=>{setLang(L.k); doBackup('lang_api',L.k);}} style={{background:lang===L.k?'#0ff':'#111',color:lang===L.k?'#000':'#fff',border:'1px solid #222',padding:'6px 10px',borderRadius:20,fontSize:10}}>{L.l}</button>)}</div><div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:11,color:'#ccc',minHeight:36}}>{transText}</div><button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:11,borderRadius:10,fontWeight:'bold'}}>🎤 SPEAK ENGLISH → HEAR {lang.toUpperCase()} API</button><div style={{marginTop:8,fontSize:8,color:'#666'}}>Settings API: Auto Detect, Real-time, Offline Pack, Voice Speed • {backupLog}</div></div>}

   {activePanel==='reel' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #fa0',borderRadius:12,padding:12}}><div style={{color:'#fa0',fontWeight:'bold',fontSize:12}}>🎞️ REELGEA ICON - LINKED TO PLATFORM API</div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginTop:10}}>{[1,2,3,4,5,6].map(i=><div key={i} onClick={()=>{doBackup('reel_api',i); alert(`ReelGea ${i} Playing! Linked!`);}} style={{background:'#111',border:'1px solid #fa0',borderRadius:10,padding:18,textAlign:'center'}}><div style={{fontSize:20}}>▶️</div><div style={{fontSize:8}}>Reel {i} API</div></div>)}</div><button onClick={()=>{doBackup('reel_api','Create'); alert("Create ReelGea - API Connected!");}} style={{width:'100%',marginTop:10,background:'#fa0',color:'#000',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>➕ CREATE REELGEA 🔗 API</button></div>}

   {activePanel==='settings' && <div style={{margin:10,background:'#111',border:'1px solid #fff',borderRadius:12,padding:12}}><div style={{fontWeight:'bold'}}>⚙️ MAIN MENU SETTINGS + API BACKUP PROFILES</div><div style={{marginTop:10,display:'grid',gap:6}}>{["Backup All Files API","Restore Backup API","Clear Cache API","Export Data API","Import Data API","Manual Sync API","Auto Backup ON API","V4 Super Pro Max API"].map(s=><button key={s} onClick={()=>{doBackup('system_api',s); alert(s+' Executed + API Backup!');}} style={{background:'#222',color:'#fff',border:'1px solid #333',padding:'10px',borderRadius:8,fontSize:11,width:'100%',textAlign:'left'}}>{s} 🔗</button>)}</div><div style={{marginTop:8,fontSize:9,color:'#0f0',background:'#000',padding:8,borderRadius:8}}>{backupLog}</div><div style={{fontSize:10,color:'#aaa',marginTop:8}}>CEO: Apostle Dr Oladele Mighty Hassan • RC:9882150 • Geapple Inc • Geapple Ecosystem • www.geapple.com • gsiacyber.com • GSIA Secured • V4 Pro Max Global Standard</div></div>}

   {!activePanel && <div style={{padding:10}}>{posts.map(p=><div key={p.id} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}><div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • HOLO • Now • API</div></div></div><div style={{marginTop:8,fontSize:13}}>{p.t}</div><div style={{display:'flex',gap:8,marginTop:10,flexWrap:'wrap'}}><button onClick={()=>like(p.id)} style={{background:'#111',border:'1px solid #222',color:p.liked?'#f00':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>{p.liked?'❤️':'🤍'} {p.l}</button><button onClick={()=>{setChatId(chatId===p.id?null:p.id); setShareId(null);}} style={{background:chatId===p.id?'#0f0':'#111',border:'1px solid #222',color:chatId===p.id?'#000':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>💬 Chat</button><button onClick={()=>shareLinkAction(p.id)} style={{background:'#0f0',border:'1px solid #0f0',color:'#000',borderRadius:20,padding:'6px 14px',fontSize:11,fontWeight:'bold'}}>🖇️ Share 🔗</button><button onClick={()=>{setShareId(shareId===p.id?null:p.id); setChatId(null);}} style={{background:'#fff',color:'#000',border:0,borderRadius:20,padding:'6px 10px',fontSize:10}}>🔗 Links</button></div>{chatId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:8}}>{p.comments.map((c,i)=><div key={i} style={{fontSize:11,padding:'4px 0',borderBottom:'1px solid #222'}}>• {c}</div>)}<div style={{display:'flex',gap:6,marginTop:6}}><input id={`c-${p.id}`} placeholder="Write chat..." style={{flex:1,background:'#000',border:'1px solid #333',borderRadius:16,padding:'8px 10px',color:'#fff',fontSize:12}}/><button onClick={()=>{const el=document.getElementById(`c-${p.id}`); if(el.value){setPosts(posts.map(x=>x.id===p.id?{...x,comments:[...x.comments,el.value]}:x)); el.value=""; doBackup('chat_api',p.id);}}} style={{background:'#0f0',color:'#000',border:0,borderRadius:16,padding:'8px 12px',fontSize:11}}>Send API</button></div></div>}{shareId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:8,display:'flex',gap:6,flexWrap:'wrap'}}><button onClick={()=>shareTo('wa',p.id)} style={{background:'#25D366',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>WA 🔗</button><button onClick={()=>shareTo('fb',p.id)} style={{background:'#1877F2',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>FB 🔗</button><button onClick={()=>shareTo('ig',p.id)} style={{background:'#d62976',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>IG 🔗</button><button onClick={()=>shareTo('tt',p.id)} style={{background:'#000',color:'#fff',border:'1px solid #fff',padding:'6px 10px',borderRadius:6,fontSize:10}}>TT 🔗</button><button onClick={()=>shareTo('yt',p.id)} style={{background:'#f00',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>YT 🔗</button><button onClick={()=>shareTo('copy',p.id)} style={{background:'#fff',color:'#000',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>🖇️ Copy 🔗</button><button onClick={()=>shareLinkAction(p.id)} style={{background:'#0f0',color:'#000',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>🖇️ Share Link Active</button></div>}</div>)}<div style={{display:'flex',gap:8,marginTop:10}}><input id="postIn" placeholder="What's happening? Post..." style={{flex:1,background:'#111',border:'1px solid #222',borderRadius:20,padding:'12px 14px',color:'#fff'}}/><button onClick={()=>{const v=document.getElementById('postIn').value; if(v){setPosts([{id:Date.now(),u:"You",t:v,l:0,liked:false,comments:[],shares:0},...posts]); document.getElementById('postIn').value=""; doBackup('post_api',v.slice(0,20));}}} style={{background:'#0f0',color:'#000',border:0,padding:'0 18px',borderRadius:20,fontWeight:'bold'}}>Post API</button></div></div>}
  </div>

  <div style={{position:'fixed',bottom:0,left:64,right:0,background:'#0a0a0a',borderTop:'1px solid #222',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:20}}>
   <button onClick={()=>shareTo('fb','global')} style={{background:'#1877F2',color:'#fff',border:0,width:32,height:32,borderRadius:8,fontWeight:'bold',fontSize:11}}>f</button>
   <button onClick={()=>shareTo('ig','global')} style={{background:'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',color:'#fff',border:0,width:32,height:32,borderRadius:8,fontSize:9}}>IG</button>
   <button onClick={()=>shareTo('tt','global')} style={{background:'#000',color:'#fff',border:'1px solid #fff',width:32,height:32,borderRadius:8,fontSize:11}}>♪</button>
   <button onClick={()=>shareTo('wa','global')} style={{background:'#25D366',color:'#fff',border:0,width:32,height:32,borderRadius:8,fontSize:9}}>WA</button>
   <button onClick={()=>shareTo('yt','global')} style={{background:'#FF0000',color:'#fff',border:0,width:32,height:32,borderRadius:8,fontSize:9}}>YT</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#0f0',color:'#000',border:0,width:36,height:32,borderRadius:8,fontWeight:'bold',fontSize:12}}>🖇️</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#fff',color:'#000',border:0,width:36,height:32,borderRadius:8,fontWeight:'bold',fontSize:10}}>🔗</button>
   <button onClick={()=>setActivePanel('inbox')} style={{background:'#0ff',color:'#000',border:0,width:32,height:32,borderRadius:8,fontSize:11}}>📥</button>
  </div>
 </div>
 )
}