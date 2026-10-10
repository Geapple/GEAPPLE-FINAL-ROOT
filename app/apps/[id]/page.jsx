"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaSocial(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [isPlaying,setIsPlaying]=useState(true);
 const [zoom,setZoom]=useState(1);
 const [fit,setFit]=useState("cover");
 const [facing,setFacing]=useState("user");
 const [activePanel,setActivePanel]=useState(null);
 const [transText,setTransText]=useState("Tap 🎤 Speak English → Hear local & foreign");
 const [chatId,setChatId]=useState(null);
 const [shareId,setShareId]=useState(null);
 const [backupLog,setBackupLog]=useState("Backup System Ready • Manual Linked");
 const videoRef=useRef(null);
 const canvasRef=useRef(null);
 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"MYGEA SOCIAL ! All tools working! 🌍",l:152,liked:false,comments:["Weldone CTO!"],shares:12},
  {id:2,u:"GEAPPLE CEO",t:"Share Link 🖇️ + FB WA YT IG TT All Active! GEA PAY + STORE building along 🚀",l:98,liked:false,comments:[],shares:5},
 ]);

 useEffect(()=>{
  if(typeof window==='undefined') return;
  const p=window.location.pathname.split('/').pop(); 
  if(p && !isNaN(p)) setId(p);
  const b=localStorage.getItem('mygea_backup'); 
  if(b) setBackupLog("Backup Restored @ "+new Date().toLocaleTimeString());
 },[]);

 const startCam=async(mode="cam")=>{
  try{
   const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing,width:1920},audio:true});
   if(videoRef.current){videoRef.current.srcObject=stream; videoRef.current.play(); setLive(true); setIsPlaying(true);}
   if(mode==="video") setPosts([{id:Date.now(),u:"You 🔴 LIVE",t:"LIVE STREAMING started - 5G Video Sensor ON! 📹",l:0,liked:false,comments:[],shares:0},...posts]);
  }catch{alert("Allow Camera for 5G Sensor!");}
 };
 const stopCam=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); };
 const togglePlay=()=>{ if(videoRef.current){ if(isPlaying) videoRef.current.pause(); else videoRef.current.play(); setIsPlaying(!isPlaying);} };
 const flipSelfie=()=>{ setFacing(facing==="user"?"environment":"user"); setTimeout(()=>startCam(),400); };
 const snapshot=()=>{
  if(!videoRef.current || !canvasRef.current) return;
  const c=canvasRef.current; c.width=videoRef.current.videoWidth; c.height=videoRef.current.videoHeight;
  c.getContext('2d').drawImage(videoRef.current,0,0);
  const url=c.toDataURL("image/png");
  const a=document.createElement('a'); a.href=url; a.download=`MYGEA_${Date.now()}.png`; a.click();
  try{localStorage.setItem('mygea_backup',url);}catch{}
  setBackupLog("Snapshot + Backup saved @ "+new Date().toLocaleTimeString());
 };
 const doBackup=(k,v)=>{ try{localStorage.setItem(`mygea_${k}`,v);}catch{} setBackupLog(`Backup: ${k}=${v} @ ${new Date().toLocaleTimeString()}`); };
 const like=(pid)=>{ setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p)); doBackup('like',pid); };
 const openChat=(pid)=>{ setChatId(chatId===pid?null:pid); setShareId(null); };
 const shareLinkAction=(pid=null)=>{
  const url=typeof window!=='undefined'? window.location.href+(pid?`?post=${pid}`:'') : '';
  if(navigator.share){
   navigator.share({title:'MYGEA SOCIAL NATIVE',text:'Join Geapple Ecosystem!',url}).then(()=>{alert('🖇️ Shared! 🔗 '+url);}).catch(()=>{navigator.clipboard.writeText(url); alert('🖇️ Link Copied! 🔗 '+url);});
  }else{ navigator.clipboard.writeText(url); alert('🖇️ Share Link Copied! 🔗\n'+url); setShareId(pid||'global'); }
  doBackup('share_link',url); if(pid) setPosts(posts.map(p=>p.id===pid?{...p,shares:p.shares+1}:p));
 };
 const shareTo=(platform,pid)=>{
  const url=typeof window!=='undefined'? window.location.href+`?post=${pid}` : '';
  if(platform==='wa') window.open(`https://wa.me/?text=${encodeURIComponent('Join MYGEA! '+url)}`);
  if(platform==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  if(platform==='yt') window.open(`https://www.youtube.com/`);
  if(platform==='ig') window.open(`https://www.instagram.com/`);
  if(platform==='tt') window.open(`https://www.tiktok.com/`);
  if(platform==='copy'){ navigator.clipboard.writeText(url); alert('🔗 Link Copied! '+url); }
  setPosts(posts.map(p=>p.id===pid?{...p,shares:p.shares+1}:p)); doBackup('share_'+platform,url);
 };
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR){alert("Use Chrome for Voice!"); return;}
  const rec=new SR(); rec.lang='en-US';
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript; let tr=txt;
   if(lang==='yo') tr=`Yoruba: ${txt}`; if(lang==='ig') tr=`Igbo: ${txt}`; if(lang==='ha') tr=`Hausa: ${txt}`;
   if(lang==='pcm') tr=`Pidgin: ${txt}`; if(lang==='fr') tr=`French: ${txt}`; if(lang==='es') tr=`Spanish: ${txt}`;
   setTransText(tr); speechSynthesis.speak(new SpeechSynthesisUtterance(tr)); doBackup('translate',lang);
  }; rec.start(); setTransText("Listening... Speak English now!");
 };

 if(id!=="1") return (
 <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center',fontFamily:'sans-serif'}}>
  <button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',padding:'8px 14px',borderRadius:8}}>← HUB 35</button>
  <h2 style={{color:'#0f0',marginTop:20}}>APP {id} - Building with MYGEA V3 Ecosystem</h2>
  <p style={{color:'#888',fontSize:12,marginTop:8}}>GEA STORE (2) + GEA PAY (3) next in line</p>
  <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:10,marginTop:20}}>
   <button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:'14px',borderRadius:12,fontWeight:'bold'}}>MYGEA SOCIAL V3</button>
   <button onClick={()=>location.href='/apps/2'} style={{background:'#111',border:'1px solid #fd0',color:'#fd0',padding:'14px',borderRadius:12,fontWeight:'bold'}}>GEA STORE 🛒</button>
   <button onClick={()=>location.href='/apps/3'} style={{background:'#111',border:'1px solid #0ef',color:'#0ef',padding:'14px',borderRadius:12,fontWeight:'bold'}}>GEA PAY 💳</button>
   <button onClick={()=>location.href='/'} style={{background:'#222',color:'#fff',padding:'14px',borderRadius:12}}>HUB 35 🏠</button>
  </div>
 </div>
 );

 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}`}</style>
  <canvas ref={canvasRef} style={{display:'none'}}/>
  <div style={{width:62,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:9,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span className="spin" style={{fontSize:26}}>🌍</span></div>
   <button onClick={()=>{setActivePanel(activePanel==='home'?null:'home');}} style={{background:activePanel==='home'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🏠</button>
   <button onClick={()=>{setActivePanel('camera'); startCam();}} style={{background:activePanel==='camera'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📷</button>
   <button onClick={()=>{setActivePanel('video'); startCam('video');}} style={{background:activePanel==='video'?'#f00':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📹</button>
   <button onClick={()=>{setHolo(!holo); setActivePanel('holo');}} style={{background:holo?'#f0f':'#111',border:`1px solid ${holo?'#f0f':'#222'}`,width:42,height:42,borderRadius:12}}>👁️</button>
   <button onClick={()=>setActivePanel('reel')} style={{background:activePanel==='reel'?'#fa0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🎞️</button>
   <button onClick={()=>setActivePanel(activePanel==='lang'?null:'lang')} style={{background:activePanel==='lang'?'#0ff':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🌐</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#0f0',border:'1px solid #0f0',width:42,height:42,borderRadius:12}}>🖇️</button>
   <button onClick={()=>setActivePanel(activePanel==='settings'?null:'settings')} style={{background:activePanel==='settings'?'#fff':'#111',color:activePanel==='settings'?'#000':'#fff',border:'1px solid #222',width:42,height:42,borderRadius:12}}>⚙️</button>
   <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:6}}><button onClick={()=>location.href='/apps/2'} style={{background:'#fd0',color:'#000',border:0,padding:'5px 6px',borderRadius:6,fontSize:8,fontWeight:'bold'}}>STORE</button><button onClick={()=>location.href='/apps/3'} style={{background:'#0ef',color:'#000',border:0,padding:'5px 6px',borderRadius:6,fontSize:8,fontWeight:'bold'}}>PAY</button><button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button></div>
  </div>
  <div style={{marginLeft:62,flex:1,paddingBottom:84}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="spin" style={{fontSize:18}}>🌎</span><div style={{fontWeight:'bold',color:'#0f0',fontSize:12}}>MYGEA SOCIAL NATIVE V3 • GEA PAY + STORE LINKED</div>
    <div style={{marginLeft:'auto',fontSize:8,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{live? (isPlaying?'▶️ PLAYING':'⏸️ PAUSED')+' • '+zoom.toFixed(1)+'x':'5G • NATIVE V3'}</div>
   </div>
   <div style={{position:'relative',background:'#111',margin:10,borderRadius:16,overflow:'hidden',border:live?'2px solid #f00':'1px solid #222'}}>
    <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live?280:0,objectFit:fit,transform:`scale(${zoom})`,display:live?'block':'none',background:'#000'}}/>
    {!live && <div style={{height:200,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:36}}>📷</div><div style={{color:'#666',fontSize:10,textAlign:'center'}}>5G Camera Sensor - Selfie & Live Streaming Ready</div><div style={{display:'flex',gap:8}}><button onClick={()=>startCam()} style={{background:'#0f0',color:'#000',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START 5G CAM</button><button onClick={()=>startCam('video')} style={{background:'#f00',color:'#fff',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold',fontSize:11}}>START STREAM</button></div></div>}
    {live && <div style={{position:'absolute',bottom:8,left:6,right:6,background:'rgba(0,0,0,0.75)',borderRadius:12,padding:'6px',display:'flex',flexWrap:'wrap',gap:4,justifyContent:'center'}}>
     <button onClick={togglePlay} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:11}}>{isPlaying?'⏸️':'▶️'}</button>
     <button onClick={flipSelfie} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:10}}>🤳 SELFIE</button>
     <button onClick={snapshot} style={{background:'#0f0',color:'#000',border:0,borderRadius:8,padding:'6px 8px',fontSize:11}}>🔘 SNAP</button>
     <button onClick={()=>setZoom(z=>Math.min(2,z+0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:9}}>🔍+</button>
     <button onClick={()=>setZoom(z=>Math.max(0.8,z-0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:9}}>🔍-</button>
     <button onClick={stopCam} style={{background:'#333',color:'#fff',border:0,borderRadius:8,padding:'6px 8px',fontSize:10}}>STOP</button>
    </div>}
   </div>
   <div style={{padding:10}}>
    {posts.map(p=><div key={p.id} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}>
     <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • HOLO • Now</div></div></div>
     <div style={{marginTop:8,fontSize:13}}>{p.t}</div>
     <div style={{display:'flex',gap:8,marginTop:10,flexWrap:'wrap'}}>
      <button onClick={()=>like(p.id)} style={{background:'#111',border:'1px solid #222',color:p.liked?'#f00':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>{p.liked?'❤️':'🤍'} {p.l}</button>
      <button onClick={()=>openChat(p.id)} style={{background:chatId===p.id?'#0f0':'#111',border:'1px solid #222',color:chatId===p.id?'#000':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>💬 Chat</button>
      <button onClick={()=>shareLinkAction(p.id)} style={{background:'#0f0',border:'1px solid #0f0',color:'#000',borderRadius:20,padding:'6px 14px',fontSize:11,fontWeight:'bold'}}>🖇️ Share Link 🔗</button>
     </div>
     {chatId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:8,border:'1px solid #0f03'}}>
      {p.comments.map((c,i)=><div key={i} style={{fontSize:11,padding:'4px 0',borderBottom:'1px solid #222'}}>• {c}</div>)}
      <div style={{display:'flex',gap:6,marginTop:6}}>
       <input id={`c-${p.id}`} placeholder="Write chat..." style={{flex:1,background:'#000',border:'1px solid #333',borderRadius:16,padding:'8px 10px',color:'#fff',fontSize:12}}/>
       <button onClick={()=>{const inp=document.getElementById(`c-${p.id}`); if(!inp.value) return; setPosts(posts.map(x=>x.id===p.id?{...x,comments:[...x.comments,inp.value]}:x)); inp.value='';}} style={{background:'#0f0',color:'#000',border:0,borderRadius:16,padding:'8px 14px',fontWeight:'bold'}}>Send</button>
      </div>
      <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
       <button onClick={()=>shareTo('wa',p.id)} style={{background:'#25D366',color:'#fff',border:0,padding:'6px 10px',borderRadius:12,fontSize:10}}>WA</button>
       <button onClick={()=>shareTo('fb',p.id)} style={{background:'#1877F2',color:'#fff',border:0,padding:'6px 10px',borderRadius:12,fontSize:10}}>FB</button>
       <button onClick={()=>shareTo('copy',p.id)} style={{background:'#333',color:'#fff',border:0,padding:'6px 10px',borderRadius:12,fontSize:10}}>🔗 COPY LINK</button>
      </div>
     </div>}
    </div>)}
   </div>
  </div>
 </div>
 )
}