"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaNativeFixed(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [liveVideo,setLiveVideo]=useState(false);
 const [activePanel,setActivePanel]=useState(null);
 const [transText,setTransText]=useState("Tap 🎤 to speak English, hear local & foreign");
 const videoRef=useRef(null);
 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"Welcome to MYGEA SOCIAL NATIVE - Geapple Ecosystem LIVE! 🌍",l:152,liked:false,comments:["Welcome CEO!"]},
  {id:2,u:"GEAPPLE CEO",t:"HOLO Video Chat + 5G Sensor Activated! 🚀",l:98,liked:false,comments:[]},
 ]);

 useEffect(()=>{const p=window.location.pathname.split('/').pop(); if(p &&!isNaN(p)) setId(p);},[]);

 // 5G CAMERA SENSOR
 const startCamera=async()=>{
  try{
   const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user",width:1280},audio:true});
   if(videoRef.current){videoRef.current.srcObject=s; setLive(true); setLiveVideo(false);}
  }catch{alert("Allow Camera for 5G Sensor!");}
 };
 // VIDEO STREAMING SENSOR - FIXED
 const startVideoStream=async()=>{
  try{
   const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:1920},audio:true});
   if(videoRef.current){videoRef.current.srcObject=s; setLive(true); setLiveVideo(true);}
   setPosts([{id:Date.now(),u:"You 🔴 LIVE",t:"LIVE STREAMING started - 5G Video Sensor ON! 📹",l:0,liked:false,comments:[]},...posts]);
  }catch{alert("Allow Camera for Video Streaming!");}
 };
 const stopAll=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); setLiveVideo(false); };

 const like=(pid)=>{setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p));};
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert("Use Chrome!");return;}
  const rec=new SR(); rec.lang='en-US';
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript;
   let tr=txt;
   if(lang==='yo') tr=`Yoruba: ${txt}`;
   if(lang==='ig') tr=`Igbo: ${txt}`;
   if(lang==='ha') tr=`Hausa: ${txt}`;
   if(lang==='pcm') tr=`Pidgin: ${txt}`;
   if(lang==='fr') tr=`French: ${txt} → Bonjour ${txt}`;
   if(lang==='es') tr=`Spanish: ${txt} → Hola ${txt}`;
   if(lang==='zh') tr=`Chinese: ${txt} → Ni hao ${txt}`;
   if(lang==='ar') tr=`Arabic: ${txt} → Salam ${txt}`;
   setTransText(tr); speechSynthesis.speak(new SpeechSynthesisUtterance(tr));
  };
  rec.start(); setTransText("Listening... Speak English now!");
 };

 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',padding:8}}>← HUB</button><h2 style={{color:'#0f0'}}>APP {id} - Build after MYGEA</h2><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:12,borderRadius:10}}>Go MYGEA NATIVE</button></div>;

 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}`}</style>

  {/* VERTICAL TOOLS - ALL WITH SETTINGS */}
  <div style={{width:62,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   {/* FIXED: Clean revolving 🌍 clockwise only - no floating text */}
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span className="spin" style={{fontSize:26}}>🌍</span></div>

   <button onClick={()=>setActivePanel(activePanel==='home'? null : 'home')} style={{background:activePanel==='home'?'#0f0':'#111',color:activePanel==='home'?'#000':'#fff',border:'1px solid #222',width:42,height:42,borderRadius:12}} title="Home + Profile + Menu Settings">🏠</button>
   <button onClick={()=>setActivePanel(activePanel==='camera'? null : 'camera')} style={{background:activePanel==='camera'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}} title="Camera + Settings">📷</button>
   <button onClick={()=>{startVideoStream(); setActivePanel('video');}} style={{background:liveVideo?'#f00':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}} title="Video Streaming + Settings">📹</button>
   <button onClick={()=>{setHolo(!holo); setActivePanel('holo');}} style={{background:holo?'#f0f':'#111',border:`1px solid ${holo?'#f0f':'#222'}`,width:42,height:42,borderRadius:12}} title="HOLO Conference 10-15">👁️</button>
   <button onClick={()=>setActivePanel(activePanel==='lang'? null : 'lang')} style={{background:activePanel==='lang'?'#0ff':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}} title="Language Interpreter">🌐</button>
   <button onClick={()=>setActivePanel(activePanel==='theme'? null : 'theme')} style={{background:activePanel==='theme'?'#fa0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}} title="Themes">🎨</button>
   <button onClick={()=>setActivePanel(activePanel==='settings'? null : 'settings')} style={{background:activePanel==='settings'?'#fff':'#111',color:activePanel==='settings'?'#000':'#fff',border:'1px solid #222',width:42,height:42,borderRadius:12}} title="MENU Settings">⚙️</button>
   <div style={{marginTop:'auto'}}><button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button></div>
  </div>

  <div style={{marginLeft:62,flex:1,paddingBottom:70}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="spin" style={{fontSize:18}}>🌎</span>
    <div style={{fontWeight:'bold',color:'#0f0',fontSize:13}}>MYGEA SOCIAL NATIVE</div>
    <div style={{marginLeft:'auto',fontSize:8,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{liveVideo?'🔴 LIVE STREAMING':live?'📷 5G CAM':'5G • NATIVE'} {holo?'• HOLO 15':''}</div>
   </div>

   {/* CAMERA / VIDEO STREAMING WINDOW - FIXED */}
   <div style={{position:'relative',background:'#111',margin:10,borderRadius:16,overflow:'hidden',border:liveVideo?'2px solid #f00':holo?'2px solid #f0f':'1px solid #222'}}>
    <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live?260:0,background:'#000',objectFit:'cover',display:live?'block':'none'}}/>
    {!live && <div style={{height:190,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:36}}>📷</div><div style={{color:'#666',fontSize:10,textAlign:'center',padding:'0 20px'}}>5G Camera Sensor - Selfie & Live Streaming Ready<br/>Tap 📷 for selfie, 📹 for streaming</div><div style={{display:'flex',gap:8}}><button onClick={startCamera} style={{background:'#0f0',color:'#000',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:12}}>START 5G CAM</button><button onClick={startVideoStream} style={{background:'#f00',color:'#fff',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:12}}>START VIDEO STREAM</button></div></div>}
    {live && <><div style={{position:'absolute',top:8,left:8,background:liveVideo?'#f00':'#0f0',color:'#fff',fontSize:8,padding:'3px 8px',borderRadius:12}}>{liveVideo?'🔴 LIVE • VIDEO STREAMING':'📷 5G CAMERA SENSOR'}</div><button onClick={stopAll} style={{position:'absolute',bottom:10,left:'50%',transform:'translateX(-50%)',background:'#222',color:'#fff',border:'1px solid #444',padding:'6px 14px',borderRadius:20,fontSize:11}}>STOP</button></>}

    {/* HOLO CONFERENCE 10-15 PARTICIPANTS WITH SHADOWS PROJECTOR */}
    {holo && live && <div style={{position:'absolute',bottom:40,left:6,right:6,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:4}}>
     {Array.from({length:10}).map((_,i)=><div key={i} style={{background:'rgba(255,0,255,0.2)',border:'1px solid #f0f',borderRadius:8,padding:4,textAlign:'center',boxShadow:'0 4px 10px rgba(255,0,255,0.5)'}}><div style={{fontSize:14}}>👤</div><div style={{fontSize:6}}>P{i+1}</div><div style={{height:2,background:'#f0f',marginTop:2,boxShadow:'0 0 6px #f0f'}}/></div>)}
    </div>}
    {holo &&!live && <div style={{padding:10,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:6}}>{Array.from({length:15}).map((_,i)=><div key={i} style={{background:'#111',border:'1px solid #f0f',borderRadius:8,padding:6,textAlign:'center',boxShadow:'0 2px 8px #f0f3'}}><div style={{fontSize:16}}>👤</div><div style={{fontSize:7,color:'#f0f'}}>HOLO P{i+1}</div><div style={{width:'100%',height:8,background:'radial-gradient(ellipse,#000 0%, #f0f 100%)',borderRadius:'50%',marginTop:4,opacity:0.6}} title="Shadow Projector Sensor"/></div>)}</div>}
   </div>

   {/* SETTINGS PANELS FOR ALL TOOLS */}
   {activePanel==='home' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{color:'#0f0',fontWeight:'bold',fontSize:12}}>🏠 HOME + USER PROFILE + MENU SETTINGS</div><div style={{display:'flex',gap:10,marginTop:10,alignItems:'center'}}><div style={{width:50,height:50,background:'#0f0',borderRadius:25}}/><div><div style={{fontSize:13,fontWeight:'bold'}}>Apostle Dr Oladele Mighty Hassan</div><div style={{fontSize:10,color:'#888'}}>CEO Geapple Inc RC:9882150 • Port Harcourt</div></div></div><div style={{marginTop:10,display:'grid',gridTemplateColumns:'1fr 1fr',gap:6}}>{["Edit Profile","My Posts","Friends 1.2k","Earn ₦4,000","Privacy","Notifications","Dark Mode","Logout"].map(m=><div key={m} style={{background:'#111',border:'1px solid #222',padding:'8px 10px',borderRadius:8,fontSize:11}}>{m}</div>)}</div><button onClick={()=>setActivePanel(null)} style={{width:'100%',marginTop:10,background:'#222',color:'#fff',border:0,padding:8,borderRadius:8}}>Close</button></div>}

   {activePanel==='camera' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{color:'#0f0',fontWeight:'bold',fontSize:12}}>📷 CAMERA SETTINGS + 5G SENSOR</div><div style={{marginTop:10,display:'grid',gap:6}}>{["Resolution: 4K 1080p 720p","Front/Back Camera Switch","Flash: On/Off/Auto","HDR Sensor: ON","5G Enhancement: ON","AI Beauty: ON","Grid Lines","Timer"].map(s=><div key={s} style={{background:'#111',border:'1px solid #222',padding:'8px 10px',borderRadius:8,fontSize:11,display:'flex',justifyContent:'space-between'}}><span>{s}</span><span style={{color:'#0f0'}}>ON</span></div>)}</div><button onClick={startCamera} style={{width:'100%',marginTop:10,background:'#0f0',color:'#000',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>APPLY & START CAMERA</button></div>}

   {activePanel==='video' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #f00',borderRadius:12,padding:12}}><div style={{color:'#f00',fontWeight:'bold',fontSize:12}}>📹 VIDEO SETTINGS + LIVE STREAMING SENSOR</div><div style={{marginTop:10,display:'grid',gap:6}}>{["Streaming Quality: 4K Live","Bitrate: Auto 5G","Microphone: ON","Stabilization: ON","Background Blur: OFF","Live Chat Overlay: ON","Save to Gallery: ON","Go Live to HOLO"].map(s=><div key={s} style={{background:'#111',border:'1px solid #222',padding:'8px 10px',borderRadius:8,fontSize:11}}>{s}</div>)}</div><button onClick={startVideoStream} style={{width:'100%',marginTop:10,background:'#f00',color:'#fff',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>🔴 GO LIVE STREAMING NOW</button></div>}

   {activePanel==='holo' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #f0f',borderRadius:12,padding:12}}><div style={{color:'#f0f',fontWeight:'bold',fontSize:12}}>👁️ HOLO CONFERENCE 10-15 PARTICIPANTS + SHADOW PROJECTOR SENSORS</div><div style={{fontSize:10,color:'#aaa',marginTop:6}}>Projector Sensors: Active • Shadows: Realistic • Depth: 3D Hologram • Participants: 15 max</div><div style={{marginTop:10,display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:6}}>{["Projector Brightness","Shadow Intensity","Depth Sensor","Auto Focus HOLO","Noise Cancellation","Screen Share HOLO","Record HOLO","Mute All","Invite Link","End Conference"].map(s=><div key={s} style={{background:'#111',border:'1px solid #f0f',padding:'8px',borderRadius:8,fontSize:9,textAlign:'center'}}>{s}</div>)}</div><button onClick={()=>{setHolo(true); setActivePanel(null);}} style={{width:'100%',marginTop:10,background:'#f0f',color:'#fff',border:0,padding:10,borderRadius:8,fontWeight:'bold'}}>ACTIVATE HOLO CONFERENCE</button></div>}

   {activePanel==='lang' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff',borderRadius:12,padding:12}}><div style={{color:'#0ff',fontSize:11,fontWeight:'bold'}}>🌐 LANGUAGE INTERPRETER VOICE TRANSLATION API</div><div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>{[{k:"en",l:"English"},{k:"yo",l:"Yoruba"},{k:"ig",l:"Igbo"},{k:"ha",l:"Hausa"},{k:"pcm",l:"Pidgin"},{k:"fr",l:"French"},{k:"es",l:"Spanish"},{k:"zh",l:"Chinese"},{k:"ar",l:"Arabic"}].map(L=><button key={L.k} onClick={()=>setLang(L.k)} style={{background:lang===L.k?'#0ff':'#111',color:lang===L.k?'#000':'#fff',border:'1px solid #222',padding:'6px 10px',borderRadius:20,fontSize:10}}>{L.l}</button>)}</div><div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:11,color:'#ccc',minHeight:36}}>{transText}</div><button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:11,borderRadius:10,fontWeight:'bold'}}>🎤 SPEAK ENGLISH → HEAR {lang.toUpperCase()}</button><div style={{marginTop:8,fontSize:9,color:'#666'}}>Settings: Auto Detect, Real-time, Offline Pack, Voice Speed</div></div>}

   {activePanel==='theme' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #fa0',borderRadius:12,padding:12}}><div style={{color:'#fa0',fontWeight:'bold',fontSize:12}}>🎨 MENU THEMES SETTINGS</div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginTop:10}}>{["HOLO Dark","Neon Green","Ocean Blue","Sunset Orange","Midnight","Geapple"].map(t=><div key={t} style={{background:'#111',border:'1px solid #333',padding:12,borderRadius:10,textAlign:'center',fontSize:10}}>{t}</div>)}</div></div>}

   {activePanel==='settings' && <div style={{margin:10,background:'#111',border:'1px solid #fff',borderRadius:12,padding:12}}><div style={{fontWeight:'bold'}}>⚙️ MAIN MENU SETTINGS</div><div style={{marginTop:10,fontSize:11,lineHeight:'20px',color:'#aaa'}}><div>• CEO: Apostle Dr Oladele Mighty Hassan</div><div>• RC:9882150 • Geapple Inc</div><div>• Geapple Ecosystem • www.geapple.com</div><div>• gsiacyber.com • GSIA Secured</div><div>• Version: Native 1.0 Super Pro Max</div></div><button onClick={()=>setActivePanel(null)} style={{width:'100%',marginTop:10,background:'#fff',color:'#000',padding:10,borderRadius:8,fontWeight:'bold'}}>Close</button></div>}

   {!activePanel && <div style={{padding:10}}>{posts.map(p=><div key={p.id} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}><div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • HOLO • Now</div></div></div><div style={{marginTop:8,fontSize:13}}>{p.t}</div><div style={{display:'flex',gap:14,marginTop:10,fontSize:12}}><span onClick={()=>like(p.id)} style={{color:p.liked?'#f00':'#888',cursor:'pointer'}}>{p.liked?'❤️':'🤍'} {p.l}</span><span style={{cursor:'pointer'}}>💬 Chat</span><span style={{cursor:'pointer'}}>🔗 Share</span></div></div>)}<div style={{display:'flex',gap:8,marginTop:10}}><input id="postIn" placeholder="What's happening? Post..." style={{flex:1,background:'#111',border:'1px solid #222',borderRadius:20,padding:'12px 14px',color:'#fff'}}/><button onClick={()=>{const v=document.getElementById('postIn').value; if(v){setPosts([{id:Date.now(),u:"You",t:v,l:0,liked:false,comments:[]},...posts]); document.getElementById('postIn').value="";}}} style={{background:'#0f0',color:'#000',border:0,padding:'0 18px',borderRadius:20,fontWeight:'bold'}}>Post</button></div></div>}
  </div>

  <div style={{position:'fixed',bottom:0,left:62,right:0,background:'#0a0a0a',borderTop:'1px solid #222',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:20}}>
   <button onClick={()=>window.open('https://facebook.com')} style={{background:'#1877F2',color:'#fff',border:0,width:40,height:32,borderRadius:8,fontWeight:'bold'}}>f</button>
   <button onClick={()=>window.open('https://instagram.com')} style={{background:'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',color:'#fff',border:0,width:40,height:32,borderRadius:8}}>IG</button>
   <button onClick={()=>window.open('https://tiktok.com')} style={{background:'#000',color:'#fff',border:'1px solid #fff',width:40,height:32,borderRadius:8}}>♪</button>
   <button onClick={()=>window.open('https://wa.me')} style={{background:'#25D366',color:'#fff',border:0,width:40,height:32,borderRadius:8}}>WA</button>
   <button onClick={()=>window.open('https://youtube.com')} style={{background:'#FF0000',color:'#fff',border:0,width:40,height:32,borderRadius:8}}>YT</button>
  </div>
 </div>
 )
}