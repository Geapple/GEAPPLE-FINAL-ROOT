"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaNativeFinal(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [isPlaying,setIsPlaying]=useState(true);
 const [zoom,setZoom]=useState(1);
 const [fit,setFit]=useState("cover");
 const [facing,setFacing]=useState("user");
 const [activePanel,setActivePanel]=useState(null);
 const [transText,setTransText]=useState("Tap mic speak English");
 const [chatId,setChatId]=useState(null);
 const [shareId,setShareId]=useState(null);
 const [backupLog,setBackupLog]=useState("Backup Ready");
 const videoRef=useRef(null);
 const canvasRef=useRef(null);
 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"MYGEA V3 FINAL! 🌍",l:152,liked:false,comments:["Weldone!"],shares:12},
  {id:2,u:"GEAPPLE CEO",t:"Share Link + FB WA YT IG TT Active!",l:98,liked:false,comments:[],shares:5},
 ]);

 useEffect(()=>{
  const p=window.location.pathname.split('/').pop();
  if(p &&!isNaN(p)) setId(p);
 },[]);

 const startCam=async(mode="cam")=>{
  try{
   const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:facing,width:1280},audio:true});
   if(videoRef.current){videoRef.current.srcObject=s; videoRef.current.play(); setLive(true); setIsPlaying(true);}
   if(mode==="video") setPosts([{id:Date.now(),u:"You LIVE",t:"LIVE STREAMING ON! 📹",l:0,liked:false,comments:[],shares:0},...posts]);
  }catch{alert("Allow Camera!");}
 };
 const stopCam=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop());} setLive(false); };
 const togglePlay=()=>{ if(videoRef.current){ if(isPlaying) videoRef.current.pause(); else videoRef.current.play(); setIsPlaying(!isPlaying);} };
 const flipSelfie=()=>{ setFacing(facing==="user"?"environment":"user"); setTimeout(()=>startCam(),400); };
 const snapshot=()=>{
  if(!videoRef.current ||!canvasRef.current) return;
  const c=canvasRef.current; c.width=videoRef.current.videoWidth; c.height=videoRef.current.videoHeight;
  c.getContext('2d').drawImage(videoRef.current,0,0);
  const url=c.toDataURL("image/png");
  const a=document.createElement('a'); a.href=url; a.download=`MYGEA_${Date.now()}.png`; a.click();
  localStorage.setItem('mygea_backup',url); setBackupLog("Snapshot saved");
 };
 const doBackup=(k,v)=>{ localStorage.setItem(`mygea_${k}`,v); setBackupLog(`${k}=${v}`); };
 const like=(pid)=>{ setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p)); };
 const openChat=(pid)=>{ setChatId(chatId===pid?null:pid); setShareId(null); };
 const shareLinkAction=(pid=null)=>{
  const url=window.location.href+(pid?`?post=${pid}`:'');
  if(navigator.share){ navigator.share({title:'MYGEA',text:'Join Geapple!',url}).catch(()=>{navigator.clipboard.writeText(url); alert('🖇️ Copied! '+url);}); }
  else{ navigator.clipboard.writeText(url); alert('🖇️ Link Copied! 🔗 '+url); setShareId(pid||'global'); }
  doBackup('share_link',url); if(pid) setPosts(posts.map(p=>p.id===pid?{...p,shares:p.shares+1}:p));
 };
 const shareTo=(pl,pid)=>{
  const url=window.location.href+`?post=${pid}`;
  if(pl==='wa') window.open(`https://wa.me/?text=${encodeURIComponent('Join MYGEA! '+url)}`);
  if(pl==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
  if(pl==='yt') window.open(`https://www.youtube.com/`);
  if(pl==='ig') window.open(`https://www.instagram.com/`);
  if(pl==='tt') window.open(`https://www.tiktok.com/`);
  if(pl==='copy'){ navigator.clipboard.writeText(url); alert('🔗 Copied! '+url); }
  setPosts(posts.map(p=>p.id===pid?{...p,shares:p.shares+1}:p));
 };
 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition; if(!SR){alert("Use Chrome");return;}
  const rec=new SR(); rec.lang='en-US';
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript; let tr=txt;
   if(lang==='yo') tr=`Yoruba: ${txt}`; if(lang==='ig') tr=`Igbo: ${txt}`; if(lang==='ha') tr=`Hausa: ${txt}`;
   if(lang==='pcm') tr=`Pidgin: ${txt}`; if(lang==='fr') tr=`French: ${txt}`;
   setTransText(tr); speechSynthesis.speak(new SpeechSynthesisUtterance(tr));
  }; rec.start(); setTransText("Listening...");
 };

 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',padding:8}}>← HUB</button><h2 style={{color:'#0f0'}}>APP {id}</h2><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:12,borderRadius:10}}>Go MYGEA V3</button></div>;

 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.spin{animation:spin 4s linear infinite}`}</style>
  <canvas ref={canvasRef} style={{display:'none'}}/>

  <div style={{width:62,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:9,padding:'10px 0',position:'fixed',height:'100vh',zIndex:30}}>
   <div style={{width:46,height:46,background:'#111',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',border:'1px solid #0f0'}}><span className="spin" style={{fontSize:26}}>🌍</span></div>
   <button onClick={()=>setActivePanel(activePanel==='home'?null:'home')} style={{background:activePanel==='home'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🏠</button>
   <button onClick={()=>{setActivePanel('camera'); startCam();}} style={{background:activePanel==='camera'?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📷</button>
   <button onClick={()=>{setActivePanel('video'); startCam('video');}} style={{background:activePanel==='video'?'#f00':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📹</button>
   <button onClick={()=>{setHolo(!holo); setActivePanel('holo');}} style={{background:holo?'#f0f':'#111',border:`1px solid ${holo?'#f0f':'#222'}`,width:42,height:42,borderRadius:12}}>👁️</button>
   <button onClick={()=>setActivePanel('reel')} style={{background:activePanel==='reel'?'#fa0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🎞️</button>
   <button onClick={()=>setActivePanel(activePanel==='lang'?null:'lang')} style={{background:activePanel==='lang'?'#0ff':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🌐</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#0f0',border:'1px solid #0f0',width:42,height:42,borderRadius:12}}>🖇️</button>
   <button onClick={()=>setActivePanel(activePanel==='settings'?null:'settings')} style={{background:'#fff',color:'#000',border:'1px solid #222',width:42,height:42,borderRadius:12}}>⚙️</button>
   <div style={{marginTop:'auto'}}><button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'5px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button></div>
  </div>

  <div style={{marginLeft:62,flex:1,paddingBottom:84}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="spin" style={{fontSize:18}}>🌎</span><div style={{fontWeight:'bold',color:'#0f0',fontSize:12}}>MYGEA SOCIAL V3</div>
    <div style={{marginLeft:'auto',fontSize:8,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{live? (isPlaying?'▶️ PLAY':'⏸️ PAUSE')+' • '+zoom.toFixed(1)+'x':'5G • V3'}</div>
   </div>

   <div style={{position:'relative',background:'#111',margin:10,borderRadius:16,overflow:'hidden',border:live?'2px solid #f00':'1px solid #222'}}>
    <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:live?280:0,objectFit:fit,transform:`scale(${zoom})`,display:live?'block':'none',background:'#000'}}/>
    {!live && <div style={{height:200,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:8}}><div style={{fontSize:36}}>📷</div><div style={{color:'#666',fontSize:10}}>5G Camera Ready</div><div style={{display:'flex',gap:8}}><button onClick={()=>startCam()} style={{background:'#0f0',color:'#000',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold'}}>START CAM</button><button onClick={()=>startCam('video')} style={{background:'#f00',color:'#fff',border:0,padding:'9px 14px',borderRadius:8,fontWeight:'bold'}}>STREAM</button></div></div>}
    {live && <div style={{position:'absolute',bottom:8,left:6,right:6,background:'rgba(0,0,0,0.75)',borderRadius:12,padding:'6px',display:'flex',flexWrap:'wrap',gap:4,justifyContent:'center'}}>
     <button onClick={togglePlay} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:11}}>{isPlaying?'⏸️':'▶️'}</button>
     <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime+=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:10}}>⏩</button>
     <button onClick={()=>{if(videoRef.current) videoRef.current.currentTime-=5}} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:10}}>◀️</button>
     <button onClick={()=>startCam('video')} style={{background:'#f00',color:'#fff',border:0,borderRadius:8,padding:'6px 8px',fontSize:10}}>🛑 REC</button>
     <button onClick={stopCam} style={{background:'#333',color:'#fff',border:0,borderRadius:8,padding:'6px 8px',fontSize:10}}>⏺️ STOP</button>
     <button onClick={flipSelfie} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:10}}>🤳 SELFIE</button>
     <button onClick={snapshot} style={{background:'#0f0',color:'#000',border:0,borderRadius:8,padding:'6px 8px',fontSize:11}}>🔘 SNAP</button>
     <button onClick={()=>setZoom(z=>Math.min(2,z+0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:9}}>IN+</button>
     <button onClick={()=>setZoom(z=>Math.max(0.8,z-0.2))} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:9}}>OUT-</button>
     <button onClick={()=>setFit(fit==="cover"?"contain":"cover")} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 8px',fontSize:8}}>FIT {fit}</button>
     <button onClick={()=>{setZoom(1); alert("Enhancement ON!");}} style={{background:'#0ff',color:'#000',border:0,borderRadius:8,padding:'6px 8px',fontSize:8}}>✨ ENHANCE</button>
    </div>}
    {holo && <div style={{position:'absolute',top:36,left:4,right:4,display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:3}}>{Array.from({length:10}).map((_,i)=><div key={i} style={{background:'rgba(255,0,255,0.25)',border:'1px solid #f0f',borderRadius:6,padding:2,textAlign:'center'}}><div style={{fontSize:10}}>👤</div><div style={{fontSize:5}}>P{i+1}</div></div>)}</div>}
   </div>
   {activePanel==='reel' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #fa0',borderRadius:12,padding:12}}><div style={{color:'#fa0',fontWeight:'bold',fontSize:12}}>🎞️ REELGEA LINKED</div><div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:8,marginTop:10}}>{[1,2,3,4,5,6].map(i=><div key={i} onClick={()=>alert(`Reel ${i} Playing!`)} style={{background:'#111',border:'1px solid #fa0',borderRadius:10,padding:18,textAlign:'center'}}><div style={{fontSize:20}}>▶️</div><div style={{fontSize:8}}>Reel {i}</div></div>)}</div></div>}
   {activePanel==='lang' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff',borderRadius:12,padding:12}}><div style={{color:'#0ff',fontSize:11,fontWeight:'bold'}}>🌐 TRANSLATE API</div><div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>{["en","yo","ig","ha","pcm","fr","es"].map(l=><button key={l} onClick={()=>setLang(l)} style={{background:lang===l?'#0ff':'#111',color:lang===l?'#000':'#fff',border:'1px solid #222',padding:'6px 10px',borderRadius:20,fontSize:10}}>{l}</button>)}</div><div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:11,color:'#ccc'}}>{transText}</div><button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:11,borderRadius:10,fontWeight:'bold'}}>🎤 SPEAK</button></div>}
   {activePanel==='home' && <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{color:'#0f0',fontWeight:'bold',fontSize:12}}>🏠 HOME + PROFILE</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:6,marginTop:10}}>{["Edit Profile","My Posts","Friends","Earn","Privacy","Backup"].map(m=><button key={m} onClick={()=>{doBackup('home',m); alert(m+' + Backup');}} style={{background:'#111',border:'1px solid #222',padding:'10px',borderRadius:8,fontSize:11,color:'#fff'}}>{m} 🔗</button>)}</div></div>}

   {!activePanel && <div style={{padding:10}}>
    {posts.map(p=><div key={p.id} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}>
     <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • Now</div></div></div>
     <div style={{marginTop:8,fontSize:13}}>{p.t}</div>
     <div style={{display:'flex',gap:8,marginTop:10,flexWrap:'wrap'}}>
      <button onClick={()=>like(p.id)} style={{background:'#111',border:'1px solid #222',color:p.liked?'#f00':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>{p.liked?'❤️':'🤍'} {p.l}</button>
      <button onClick={()=>openChat(p.id)} style={{background:chatId===p.id?'#0f0':'#111',border:'1px solid #222',color:chatId===p.id?'#000':'#888',borderRadius:20,padding:'6px 12px',fontSize:11}}>💬 Chat {p.comments.length?`(${p.comments.length})`:''}</button>
      <button onClick={()=>shareLinkAction(p.id)} style={{background:'#0f0',border:'1px solid #0f0',color:'#000',borderRadius:20,padding:'6px 14px',fontSize:11,fontWeight:'bold'}}>🖇️ Share 🔗 {p.shares?`(${p.shares})`:''}</button>
     </div>
     {chatId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:8}}>{p.comments.map((c,i)=><div key={i} style={{fontSize:11,padding:'4px 0'}}>• {c}</div>)}<div style={{display:'flex',gap:6,marginTop:6}}><input id={`c-${p.id}`} placeholder="Write chat..." style={{flex:1,background:'#000',border:'1px solid #333',borderRadius:16,padding:'8px 10px',color:'#fff',fontSize:12}}/><button onClick={()=>{const el=document.getElementById(`c-${p.id}`); if(el.value){setPosts(posts.map(x=>x.id===p.id?{...x,comments:[...x.comments,el.value]}:x)); el.value="";}}} style={{background:'#0f0',color:'#000',border:0,borderRadius:16,padding:'8px 12px',fontSize:11}}>Send</button></div></div>}
     {shareId===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:8,display:'flex',gap:6,flexWrap:'wrap'}}>
      <button onClick={()=>shareTo('wa',p.id)} style={{background:'#25D366',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>WA 🔗</button>
      <button onClick={()=>shareTo('fb',p.id)} style={{background:'#1877F2',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>FB 🔗</button>
      <button onClick={()=>shareTo('ig',p.id)} style={{background:'#d62976',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>IG 🔗</button>
      <button onClick={()=>shareTo('tt',p.id)} style={{background:'#000',color:'#fff',border:'1px solid #fff',padding:'6px 10px',borderRadius:6,fontSize:10}}>TT 🔗</button>
      <button onClick={()=>shareTo('yt',p.id)} style={{background:'#f00',color:'#fff',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>YT 🔗</button>
      <button onClick={()=>shareTo('copy',p.id)} style={{background:'#fff',color:'#000',border:0,padding:'6px 10px',borderRadius:6,fontSize:10}}>🖇️ Copy 🔗</button>
     </div>}
    </div>)}
    <div style={{display:'flex',gap:8,marginTop:10}}><input id="postIn" placeholder="Post..." style={{flex:1,background:'#111',border:'1px solid #222',borderRadius:20,padding:'12px 14px',color:'#fff'}}/><button onClick={()=>{const v=document.getElementById('postIn').value; if(v){setPosts([{id:Date.now(),u:"You",t:v,l:0,liked:false,comments:[],shares:0},...posts]); document.getElementById('postIn').value="";}}} style={{background:'#0f0',color:'#000',border:0,padding:'0 18px',borderRadius:20,fontWeight:'bold'}}>Post</button></div>
   </div>}
  </div>

  <div style={{position:'fixed',bottom:0,left:62,right:0,background:'#0a0a0a',borderTop:'1px solid #222',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:20}}>
   <button onClick={()=>shareTo('fb','global')} style={{background:'#1877F2',color:'#fff',border:0,width:34,height:32,borderRadius:8,fontWeight:'bold'}}>f</button>
   <button onClick={()=>shareTo('ig','global')} style={{background:'#d62976',color:'#fff',border:0,width:34,height:32,borderRadius:8,fontSize:10}}>IG</button>
   <button onClick={()=>shareTo('tt','global')} style={{background:'#000',color:'#fff',border:'1px solid #fff',width:34,height:32,borderRadius:8}}>♪</button>
   <button onClick={()=>shareTo('wa','global')} style={{background:'#25D366',color:'#fff',border:0,width:34,height:32,borderRadius:8,fontSize:10}}>WA</button>
   <button onClick={()=>shareTo('yt','global')} style={{background:'#f00',color:'#fff',border:0,width:34,height:32,borderRadius:8,fontSize:10}}>YT</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#0f0',color:'#000',border:0,width:40,height:32,borderRadius:8,fontWeight:'bold'}}>🖇️</button>
   <button onClick={()=>shareLinkAction()} style={{background:'#fff',color:'#000',border:0,width:40,height:32,borderRadius:8,fontWeight:'bold'}}>🔗</button>
  </div>
 </div>
 )
}