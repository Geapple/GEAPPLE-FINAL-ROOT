"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaSocial(){
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
 const [transText,setTransText]=useState("Tap 🎤 Speak English, Hear Local - FIXED ACTIVE");
 const [chatId,setChatId]=useState(null);
 const [shareId,setShareId]=useState(null);
 const [theme,setTheme]=useState("HOLO Dark");
 const [satCall,setSatCall]=useState(false);
 const [satStatus,setSatStatus]=useState("Offline");
 const [cart,setCart]=useState([]);
 const [balance,setBalance]=useState(45000);
 const [backupLog,setBackupLog]=useState("MYGEA SOCIAL Integrated - Pay + Store + Backup Linked");
 const videoRef=useRef(null);
 const canvasRef=useRef(null);
 const fileInputRef=useRef(null);
 const videoInputRef=useRef(null);

 const backupJSON={
  project:"MYGEA SOCIAL + GEAPAY + GEASTORE",
  version:"V6.1.0",
  files:{
   "next.config.js":{type:"js",status:"linked"},
   "package.json":{type:"json",status:"linked"},
   "vercel.json":{type:"json",status:"linked"},
   "app/page.jsx":{type:"jsx",status:"active",note:"HUB 35 - 35 APPS"},
   "app/apps/[id]/page.jsx":{type:"jsx",status:"active",note:"V6.1 Integrated"},
   "lib/geappleApi.js":{type:"js",status:"provisioned"},
   "lib/backupProfiles.json":{type:"json",status:"linked",apis:["camera","video","holo","geatune","geapay","geastore","legal","sat","share"]}
  },
  ceo:"Apostle Dr Oladele Mighty Hassan", rc:"9882150",
  sat:{freeCalls:"SAT Free Calls Online/Offline",status:satStatus},
  store:{products:12,cart:cart.length}, pay:{balance}
 };

 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"MYGEA SOCIAL INTEGRATED 🌍 GEA PAY + STORE Built Along!",l:152,liked:false,comments:["Weldone CEO! Chat opens!"],shares:12},
  {id:2,u:"GEAPPLE CEO",t:"SAT Free Calls 🤙 + Phone Fit 📱 + Files 📁 + GEA STORE 🛒 + GEA PAY 💳 ALL LIVE!",l:98,liked:false,comments:[],shares:5},
 ]);

 useEffect(()=>{
  if(typeof window==='undefined') return;
  const p=window.location.pathname.split('/').pop(); if(p &&!isNaN(p)) setId(p);
  const online=()=>setSatStatus("Online"); const offline=()=>setSatStatus("Offline");
  window.addEventListener('online',online); window.addEventListener('offline',offline);
  setSatStatus(navigator.onLine?"Online":"Offline");
  return ()=>{window.removeEventListener('online',online); window.removeEventListener('offline',offline);}
 },[]);

 const startCamera=async()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing,width:1280},audio:true}); if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(false); setIsPlaying(true);} doBackup('camera','ON'); }catch{alert("Allow Camera!");} };
 const startVideoStream=async()=>{ try{ const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"environment",width:1920},audio:true}); if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setLiveVideo(true); setIsPlaying(true);} doBackup('video','LIVE'); }catch{alert("Allow Camera!");} };
 const stopAll=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); setLiveVideo(false); };
 const togglePlay=()=>{ if(videoRef.current){ if(isPlaying) videoRef.current.pause(); else videoRef.current.play(); setIsPlaying(!isPlaying);} };
 const flipSelfie=()=>{ setFacing(f=>f==="user"?"environment":"user"); setTimeout(()=>{if(live) startCamera();},400); };
 const togglePhoneFit=()=>{ setPhoneFit(!phoneFit); setFit(!phoneFit?"contain":"cover"); setZoom(1); doBackup('phone_fit',!phoneFit?'ON':'OFF'); };
 const goFullScreen=()=>{ if(videoRef.current?.requestFullscreen) videoRef.current.requestFullscreen(); };
 const snapshot=()=>{ if(!videoRef.current ||!canvasRef.current) return; const c=canvasRef.current; c.width=videoRef.current.videoWidth; c.height=videoRef.current.videoHeight; c.getContext('2d').drawImage(videoRef.current,0,0); const url=c.toDataURL("image/png"); const a=document.createElement('a'); a.href=url; a.download=`MYGEA_SOCIAL_${Date.now()}.png`; a.click(); doBackup('snapshot','saved'); };
 const doBackup=(k,v)=>{ try{localStorage.setItem(`geapple_${k}`,String(v)); localStorage.setItem('geapple_backup_v6',JSON.stringify({...backupJSON,last:k,val:v,time:Date.now()}));}catch{} setBackupLog(`${k}=${v} • ${new Date().toLocaleTimeString()}`); };
 const handleFileUpload=(e)=>{ const f=e.target.files[0]; if(f){ doBackup('file',f.name); setPosts([{id:Date.now(),u:"You 📁",t:`File: ${f.name} 📁 Linked to backupProfiles.json`,l:0,liked:false,comments:[],shares:0},...posts]); } };
 const handleVideoUpload=(e)=>{ const f=e.target.files[0]; if(f){ doBackup('video',f.name); setPosts([{id:Date.now(),u:"You 🎥",t:`Video: ${f.name} 🎞️`,l:0,liked:false,comments:[],shares:0},...posts]); } };
 const like=(pid)=>{ setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p)); };
 const shareLinkAction=(pid=null)=>{ const url=typeof window!=='undefined'? window.location.href+(pid?`?post=${pid}`:'') : ''; navigator.clipboard.writeText(url); alert('🖇️ Share Link Copied! 🔗 '+url); setShareId(pid||'global'); doBackup('share_link',url); };
 const shareTo=(pl)=>{ const url=typeof window!=='undefined'? window.location.href : ''; if(pl==='wa') window.open(`https://wa.me/?text=${encodeURIComponent('MYGEA SOCIAL! '+url)}`); if(pl==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`); if(pl==='google') window.open(`https://www.google.com/search?q=Geapple+Ecosystem`); if(pl==='copy'){navigator.clipboard.writeText(url); alert('🔗 Copied!');} };
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR){ alert("Use Chrome!"); return; }
  const rec=new SR(); rec.lang='en-US'; rec.onstart=()=>setTransText("🎤 Listening... Speak English!");
  rec.onresult=(e)=>{ const txt=e.results[0][0].transcript; const map={yo:`Yoruba: ${txt} - Bawo ni`, ig:`Igbo: ${txt} - Kedu`, ha:`Hausa: ${txt} - Sannu`, pcm:`Pidgin: ${txt} - How you dey`, fr:`French: ${txt} -> Bonjour`, es:`Spanish: ${txt} -> Hola`, zh:`Chinese: ${txt} -> Ni hao`, ar:`Arabic: ${txt} -> Salam`}; const tr=map[lang]||txt; setTransText(`✅ "${txt}" → ${tr}`); const utter=new SpeechSynthesisUtterance(tr); utter.rate=0.9; speechSynthesis.speak(utter); doBackup('translate',lang); };
  rec.onerror=()=>setTransText("❌ Mic error - Allow mic!"); rec.start();
 };
 const startSatCall=()=>{ setSatCall(!satCall); setSatStatus(satCall?"Offline":"SAT Online - Free Call Active"); doBackup('sat',satCall?'OFF':'ON'); alert(satCall?"SAT Ended":"🤙 SAT Free Call Online - Geapple SAT..."); };
 const addToCart=(name,price)=>{ setCart([...cart,{name,price}]); setBalance(b=>b-price); doBackup('geastore_add',name); alert(`${name} Added to GEA STORE 🛒 - Balance ₦${balance-price}`); };

 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><h2 style={{color:'#0f0'}}>APP {id} - Building Along Ecosystem</h2><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:20}}><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:14,borderRadius:12,fontWeight:'bold'}}>MYGEA SOCIAL</button><button onClick={()=>location.href='/apps/2'} style={{background:'#fd0',color:'#000',padding:14,borderRadius:12,fontWeight:'bold'}}>GEA STORE</button><button onClick={()=>location.href='/apps/3'} style={{background:'#0ef',color:'#000',padding:14,borderRadius:12,fontWeight:'bold'}}>GEA PAY</button><button onClick={()=>location.href='/'} style={{background:'#222',color:'#fff',padding:14,borderRadius:12}}>HUB 35</button></div></div>;

 return(
 <div style={{background:theme==="Ocean Blue"?'#001122':'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}`}</style>
  <canvas ref={canvasRef} style={{display:'none'}}/>
  <input type="file" ref={fileInputRef} onChange={handleFileUpload} style={{display:'none'}}/>
  <input type="file" ref={videoInputRef} onChange={handleVideoUpload} style={{display:'none'}} accept="video/*"/>
  <div style={{width:62,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:10,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span className="spin" style={{fontSize:26}}>🌍</span></div>
   <button onClick={()=>{setHomeFolder(!homeFolder); setMenuFolder(false);}} style={{background:homeFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12}}>🏡</button>
   <button onClick={()=>{setScreenFolder(!screenFolder); setHomeFolder(false);}} style={{background:screenFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12}}>▶️</button>
   <button onClick={()=>{setMenuFolder(!menuFolder); setHomeFolder(false);}} style={{background:menuFolder?'#fff':'#111',color:menuFolder?'#000':'#fff',border:'1px solid #222',width:44,height:44,borderRadius:12}}>⚙️</button>
   <button onClick={()=>setShareFolder(!shareFolder)} style={{background:shareFolder?'#0f0':'#111',border:'1px solid #222',width:44,height:44,borderRadius:12}}>💠</button>
   <div style={{marginTop:'auto',textAlign:'center'}}><div style={{fontSize:7,color:satStatus.includes('Online')?'#0f0':'#888'}}>{satStatus.includes('Online')?'🟢':'🔴'} {satStatus.slice(0,6)}</div><button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold',marginTop:6}}>HUB 35</button></div>
  </div>
  {homeFolder && <div style={{position:'fixed',left:62,top:0,bottom:0,width:200,background:'#0f0f0f',borderRight:'1px solid #0f03',zIndex:25,padding:12,overflowY:'auto'}}>
   <div style={{fontWeight:'bold',fontSize:12,color:'#0f0',marginBottom:10}}>📂 HOME FOLDER - GEAPPLE ECOSYSTEM</div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8}}>
    <button onClick={()=>{setActivePanel('camera'); startCamera();}} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📷<br/>Cam</button>
    <button onClick={()=>{startVideoStream(); setActivePanel('video');}} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📹<br/>Stream</button>
    <button onClick={()=>setActivePanel('geastore')} style={{background:'#fd0',border:'1px solid #fd0',padding:10,borderRadius:10,fontSize:11,color:'#000',fontWeight:'bold'}}>🛒<br/>STORE</button>
    <button onClick={()=>setActivePanel('geapay')} style={{background:'#0ef',border:'1px solid #0ef',padding:10,borderRadius:10,fontSize:11,color:'#000',fontWeight:'bold'}}>💳<br/>PAY</button>
    <button onClick={()=>{setHolo(!holo); setActivePanel('holo');}} style={{background:holo?'#f0f':'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>👁️<br/>HOLO</button>
    <button onClick={()=>fileInputRef.current.click()} style={{background:'#111',border:'1px solid #222',padding:10,borderRadius:10,fontSize:11}}>📁<br/>Files</button>
    <button onClick={()=>setActivePanel('lang')} style={{background:'#111',border:'1px solid #0ff',padding:10,borderRadius:10,fontSize:11}}>🌐<br/>Lang</button>
    <button onClick={startSatCall} style={{background:satCall?'#0f0':'#111',border:'1px solid #0f0',padding:10,borderRadius:10,fontSize:11}}>🤙<br/>SAT</button>
   </div>
   <button onClick={()=>setHomeFolder(false)} style={{width:'100%',marginTop:12,background:'#222',color:'#fff',border:0,padding:8,borderRadius:8}}>Close</button>
  </div>}
  <div style={{marginLeft:62,flex:1,paddingBottom:90}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="spin">🌎</span><div style={{fontWeight:'bold',color:'#0f0',fontSize:11}}>MYGEA V6.1 + STORE + PAY INTEGRATED</div>
    <div style={{marginLeft:'auto',display:'flex',gap:6}}><button onClick={startSatCall} style={{fontSize:7,border:`1px solid ${satCall?'#0f0':'#888'}`,padding:'4px 8px',borderRadius:12,color:satCall?'#0f0':'#888',background:'#111'}}>🤙 {satStatus}</button><div style={{fontSize:7,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{phoneFit?'📱 FIT':'5G V6.1'}</div></div>
   </div>
   <div onClick={togglePhoneFit} style={{position:'relative',background:'#111',margin:phoneFit?0:10,borderRadius:phoneFit?0:16,overflow:'hidden',border:liveVideo?'2px solid #f00':'1px solid #222',cursor:'pointer'}}>
    <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live? (phoneFit?'78vh':280):0,background:'#000',objectFit:phoneFit?'contain':fit,transform:`scale(${zoom})`,display:live?'block':'none'}}/>
    {!live && <div style={{height:phoneFit?'70vh':220,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:36}}>📱</div><div style={{color:'#666',fontSize:10,textAlign:'center'}}>Tap = Fit Phone 📱 Double Tap = Full Screen</div><div style={{display:'flex',gap:6}}><button onClick={(e)=>{e.stopPropagation(); startCamera();}} style={{background:'#0f0',color:'#000',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START 5G CAM</button><button onClick={(e)=>{e.stopPropagation(); startVideoStream();}} style={{background:'#f00',color:'#fff',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START STREAM</button></div></div>}
    {live && <div style={{position:'absolute',top:8,left:8,background:liveVideo?'#f00':'#0f0',color:'#fff',fontSize:8,padding:'4px 8px',borderRadius:12}}>{phoneFit?'📱 FIT':'🔴 LIVE'}</div>}
   </div>
   {activePanel==='geastore' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #fd0',borderRadius:12,padding:12}}><div style={{color:'#fd0',fontWeight:'bold'}}>🛒 GEA STORE - Built Along V6.1</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:10}}>{[{n:"5G Phone",p:120000},{n:"SAT Device",p:85000},{n:"HOLO Glasses",p:150000},{n:"Geapple Watch",p:45000}].map(item=><div key={item.n} style={{background:'#111',border:'1px solid #333',borderRadius:10,padding:10}}><div style={{fontSize:11,fontWeight:'bold'}}>{item.n}</div><div style={{fontSize:10,color:'#fd0'}}>₦{item.p.toLocaleString()}</div><button onClick={()=>addToCart(item.n,item.p)} style={{width:'100%',marginTop:6,background:'#fd0',color:'#000',border:0,padding:'6px',borderRadius:6,fontSize:10,fontWeight:'bold'}}>Add 🛒</button></div>)}</div><div style={{marginTop:10,fontSize:10,color:'#888'}}>Cart: {cart.length} • Balance: ₦{balance.toLocaleString()}</div></div>}
   {activePanel==='geapay' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ef',borderRadius:12,padding:12}}><div style={{color:'#0ef',fontWeight:'bold'}}>💳 GEA PAY + SAT Free Calls</div><div style={{background:'#111',padding:12,borderRadius:10,marginTop:8}}><div style={{fontSize:12}}>Balance: ₦{balance.toLocaleString()}</div><div style={{fontSize:9,color:'#aaa'}}>SAT: {satStatus} • RC: 9882150</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:10}}><button onClick={()=>{setBalance(b=>b+5000); doBackup('pay_add','5000');}} style={{background:'#0ef',color:'#000',border:0,padding:'10px',borderRadius:8,fontWeight:'bold'}}> + ₦5k</button><button onClick={startSatCall} style={{background:satCall?'#f00':'#0f0',color:'#fff',border:0,padding:'10px',borderRadius:8,fontWeight:'bold'}}>{satCall?'End 🤙':'SAT Call 🤙'}</button></div></div></div>}
   {activePanel==='lang' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff',borderRadius:12,padding:12}}><div style={{color:'#0ff',fontWeight:'bold',fontSize:12}}>🌐 VOICE INTERPRETER - FIXED ✅</div><div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>{["en","yo","ig","ha","pcm","fr","es","zh","ar"].map(l=><button key={l} onClick={()=>setLang(l)} style={{background:lang===l?'#0ff':'#111',color:lang===l?'#000':'#fff',border:'1px solid #222',padding:'6px 10px',borderRadius:20,fontSize:10}}>{l.toUpperCase()}</button>)}</div><div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:11,minHeight:40,border:'1px solid #0f0'}}>{transText}</div><button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:12,borderRadius:10,fontWeight:'bold'}}>🎤 SPEAK EN → {lang.toUpperCase()}</button></div>}
   <div style={{padding:10,paddingRight:50}}>
    {posts.map(p=><div key={p.id} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}>
     <div style={{display:'flex',gap:8}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • Clean • Now</div></div></div>
     <div style={{marginTop:8,fontSize:13}}>{p.t}</div>
     <div style={{display:'flex',gap:8,marginTop:10}}><button onClick={()=>like(p.id)} style={{background:'#111',border:'1px solid #222',color:p.liked?'#f00':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>{p.liked?'❤️':'🤍'} {p.l}</button><button onClick={()=>setChatId(chatId===p.id?null:p.id)} style={{background:chatId===p.id?'#0f0':'#111',border:'1px solid #222',borderRadius:20,padding:'6px 12px',fontSize:11}}>💬 Chat</button><button onClick={()=>shareLinkAction(p.id)} style={{background:'#0f0',color:'#000',borderRadius:20,padding:'6px 14px',fontSize:11,fontWeight:'bold'}}>🖇️ Share 🔗</button></div>
     {chatId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:10,border:'1px solid #0f0'}}>{p.comments.map((c,i)=><div key={i} style={{fontSize:11,padding:'4px 0'}}>• {c}</div>)}<div style={{display:'flex',gap:6,marginTop:6}}><input id={`c-${p.id}`} placeholder="Write..." style={{flex:1,background:'#000',border:'1px solid #0f0',borderRadius:16,padding:'8px 10px',color:'#fff'}}/><button onClick={()=>{const el=document.getElementById(`c-${p.id}`); if(el.value){setPosts(posts.map(x=>x.id===p.id?{...x,comments:[...x.comments,el.value]}:x)); el.value="";}}} style={{background:'#0f0',color:'#000',border:0,borderRadius:16,padding:'8px 14px'}}>Send</button></div></div>}
    </div>)}
   </div>
  </div>
 </div>
)
}