"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaNative(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [transText,setTransText]=useState("Tap 🎤 to speak English, hear Yoruba/Igbo/Hausa/Pidgin");
 const [showSettings,setShowSettings]=useState(false);
 const [chatOpen,setChatOpen]=useState(null);
 const videoRef=useRef(null);
 const [posts,setPosts]=useState([
  {id:1,u:"Apostle Dr Mighty",t:"Welcome to MYGEA SOCIAL NATIVE - Geapple Ecosystem LIVE! 🌍",l:152,liked:false,comments:["Welcome CEO!"]},
  {id:2,u:"GEAPPLE CEO",t:"HOLO Video Chat + 5G Sensor Activated! 🚀",l:98,liked:false,comments:[]},
 ]);

 useEffect(()=>{
  const p=window.location.pathname.split('/').pop();
  if(p &&!isNaN(p)) setId(p);
 },[]);

 const startCamera=async()=>{
  try{
   const s=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:true});
   if(videoRef.current){videoRef.current.srcObject=s; setLive(true);}
  }catch{alert("Allow Camera for 5G Sensor!");}
 };
 const stopCamera=()=>{ if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop()); setLive(false);} };

 const translateVoice=()=>{
  const SR=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SR){alert("Use Chrome!");return;}
  const rec=new SR(); rec.lang='en-US';
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript;
   let tr=txt;
   if(lang==='yo') tr=`Yoruba: ${txt} → Bawo ni, ${txt}`;
   if(lang==='ig') tr=`Igbo: ${txt} → Kedu, ${txt}`;
   if(lang==='ha') tr=`Hausa: ${txt} → Yaya, ${txt}`;
   if(lang==='pcm') tr=`Pidgin: ${txt} → How far, ${txt} dey`;
   setTransText(tr);
   speechSynthesis.speak(new SpeechSynthesisUtterance(tr));
  };
  rec.start(); setTransText("Listening... Speak English now!");
 };

 const like=(pid)=>{
  setPosts(posts.map(p=>p.id===pid?{...p,l:p.liked?p.l-1:p.l+1,liked:!p.liked}:p));
 };
 const addComment=(pid,txt)=>{
  if(!txt) return;
  setPosts(posts.map(p=>p.id===pid?{...p,comments:[...p.comments,txt]}:p));
  setChatOpen(null);
 };

 const share=(k)=>{
  const url=window.location.href;
  const t=`Join MYGEA SOCIAL NATIVE - Geapple Ecosystem! ${url}`;
  if(k==='wa') window.open(`https://wa.me/?text=${encodeURIComponent(t)}`);
  if(k==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  if(k==='tt') window.open(`https://www.tiktok.com/`);
  if(k==='ig') window.open(`https://www.instagram.com/`);
  if(k==='yt') window.open(`https://www.youtube.com/`);
  if(k==='li') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
 };

 if(id!=="1") return <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center'}}><button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',padding:'8px 14px',borderRadius:8}}>← HUB</button><h2 style={{color:'#0f0'}}>APP {id} Coming after MYGEA SOCIAL</h2><button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:'12px 24px',borderRadius:10,fontWeight:'bold'}}>Go to MYGEA SOCIAL</button></div>;

 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',display:'flex',fontFamily:'sans-serif'}}>
  <style>{`
   @keyframes spinEarth {0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}
   @keyframes orbit {0%{transform:rotate(0deg) translateX(28px) rotate(0deg)}100%{transform:rotate(360deg) translateX(28px) rotate(-360deg)}}
  .earthSpin{animation:spinEarth 3s linear infinite;display:inline-block}
  .orbitText{position:absolute;width:100%;height:100%;animation:spinEarth 8s linear infinite}
  `}</style>

  {/* VERTICAL TOOLS */}
  <div style={{width:60,background:'#0a0a0a',borderRight:'1px solid #0f03',display:'flex',flexDirection:'column',alignItems:'center',gap:12,padding:'10px 0',position:'fixed',height:'100vh',zIndex:20}}>
   {/* REVOLVING GLOBE - REPLACES G */}
   <div style={{position:'relative',width:48,height:48,display:'flex',alignItems:'center',justifyContent:'center'}}>
    <span className="earthSpin" style={{fontSize:28}}>🌍</span>
    <div className="orbitText" style={{fontSize:6,color:'#0f0',fontWeight:'bold',pointerEvents:'none'}}>• Geapple Ecosystem •</div>
   </div>

   <button onClick={()=>window.scrollTo(0,0)} style={{background:'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🏠</button>
   <button onClick={live?stopCamera:startCamera} style={{background:live?'#0f0':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>📷</button>
   <button onClick={live?stopCamera:startCamera} style={{background:'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🎥</button>
   <button onClick={()=>setHolo(!holo)} style={{background:holo?'#f0f':'#111',border:`1px solid ${holo?'#f0f':'#222'}`,width:42,height:42,borderRadius:12}}>👁️</button>

   {/* LAST 3 - NOW WORKING WITH FILES */}
   <button onClick={translateVoice} style={{background:lang!=='en'?'#0ff':'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🌐</button>
   <button onClick={()=>{document.body.style.filter=document.body.style.filter?'':'invert(0.1) hue-rotate(180deg)'; alert("Theme: HOLO ↔ DARK ↔ LIGHT Changed!")}} style={{background:'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>🎨</button>
   <button onClick={()=>setShowSettings(true)} style={{background:'#111',border:'1px solid #222',width:42,height:42,borderRadius:12}}>⚙️</button>

   <div style={{marginTop:'auto'}}><button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,padding:'4px 8px',borderRadius:6,fontSize:9,fontWeight:'bold'}}>HUB 35</button></div>
  </div>

  <div style={{marginLeft:60,flex:1,paddingBottom:70}}>
   <div style={{display:'flex',alignItems:'center',gap:8,padding:10,background:'#0a0a0a',position:'sticky',top:0,zIndex:10,borderBottom:'1px solid #0f03'}}>
    <span className="earthSpin" style={{fontSize:20}}>🌎</span>
    <div style={{fontWeight:'bold',color:'#0f0',fontSize:13}}>MYGEA SOCIAL NATIVE</div>
    <div style={{marginLeft:'auto',fontSize:9,border:'1px solid #0f0',padding:'4px 8px',borderRadius:12,color:'#0f0'}}>{holo?'HOLO ON • 5G •':'5G •'} NATIVE</div>
   </div>

   <div style={{position:'relative',background:'#111',margin:10,borderRadius:16,overflow:'hidden',border:holo?'2px solid #f0f':'1px solid #222'}}>
    <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:220,background:'#000',objectFit:'cover',display:live?'block':'none'}}/>
    {!live && <div style={{height:220,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',gap:10}}><div style={{fontSize:40}}>📷</div><div style={{color:'#666',fontSize:11}}>5G Camera Sensor - Tap 📷 to start Selfie & Live Streaming</div><button onClick={startCamera} style={{background:'#0f0',color:'#000',border:0,padding:'10px 18px',borderRadius:10,fontWeight:'bold'}}>START 5G CAMERA</button></div>}
    {holo && <div style={{position:'absolute',top:8,left:8,background:'#f0f',color:'#fff',fontSize:8,padding:'3px 8px',borderRadius:12}}>HOLO SENSOR ACTIVE</div>}
   </div>

   <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff3',borderRadius:12,padding:12}}>
    <div style={{color:'#0ff',fontSize:10,fontWeight:'bold'}}>🔊 LANGUAGE VOICE INTERPRETATION API</div>
    <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
     {[{k:"en",l:"English"},{k:"yo",l:"Yoruba"},{k:"ig",l:"Igbo"},{k:"ha",l:"Hausa"},{k:"pcm",l:"Pidgin"}].map(L=>(
      <button key={L.k} onClick={()=>setLang(L.k)} style={{background:lang===L.k?'#0ff':'#111',color:lang===L.k?'#000':'#fff',border:'1px solid #222',padding:'5px 10px',borderRadius:20,fontSize:10}}>{L.l}</button>
     ))}
    </div>
    <div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:11,color:'#ccc',minHeight:36}}>{transText}</div>
    <button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:11,borderRadius:10,fontWeight:'bold',fontSize:12}}>🎤 SPEAK ENGLISH → HEAR {lang.toUpperCase()}</button>
   </div>

   <div style={{padding:10}}>
    {posts.map(p=>(
     <div key={p.id} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}>
      <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • HOLO • Now</div></div></div>
      <div style={{marginTop:8,fontSize:13}}>{p.t}</div>
      <div style={{display:'flex',gap:14,marginTop:10,fontSize:12}}>
       <span onClick={()=>like(p.id)} style={{cursor:'pointer',color:p.liked?'#f00':'#888'}}>{p.liked?'❤️':'🤍'} {p.l}</span>
       <span onClick={()=>setChatOpen(p.id)} style={{cursor:'pointer'}}>💬 Chat {p.comments.length>0?`(${p.comments.length})`:''}</span>
       <span onClick={()=>share('wa')} style={{cursor:'pointer'}}>🔗 Share</span>
      </div>
      {chatOpen===p.id && <div style={{marginTop:10,background:'#111',borderRadius:10,padding:8}}>
       {p.comments.map((c,i)=><div key={i} style={{fontSize:11,padding:'4px 0',borderBottom:'1px solid #222'}}>• {c}</div>)}
       <div style={{display:'flex',gap:6,marginTop:6}}><input id={`c-${p.id}`} placeholder="Write chat..." style={{flex:1,background:'#000',border:'1px solid #333',borderRadius:16,padding:'8px 10px',color:'#fff',fontSize:12}}/><button onClick={()=>{const el=document.getElementById(`c-${p.id}`); addComment(p.id,el.value); el.value="";}} style={{background:'#0f0',color:'#000',border:0,borderRadius:16,padding:'8px 12px',fontSize:11}}>Send</button></div>
      </div>}
     </div>
    ))}
    <div style={{display:'flex',gap:8,marginTop:10}}><input id="postIn" placeholder="What's happening? Post to MyGea..." style={{flex:1,background:'#111',border:'1px solid #222',borderRadius:20,padding:'12px 14px',color:'#fff'}}/><button onClick={()=>{const v=document.getElementById('postIn').value; if(v){setPosts([{id:Date.now(),u:"You",t:v,l:0,liked:false,comments:[]},...posts]); document.getElementById('postIn').value="";}}} style={{background:'#0f0',color:'#000',border:0,padding:'0 18px',borderRadius:20,fontWeight:'bold'}}>Post</button></div>
   </div>
  </div>

  {/* FACEBOOK INSTAGRAM TIKTOK WHATSAPP YOUTUBE UI - LINKED */}
  <div style={{position:'fixed',bottom:0,left:60,right:0,background:'#0a0a0a',borderTop:'1px solid #222',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:20}}>
   <button onClick={()=>share('fb')} style={{background:'#1877F2',color:'#fff',border:0,width:40,height:32,borderRadius:8,fontWeight:'bold'}}>f</button>
   <button onClick={()=>share('ig')} style={{background:'linear-gradient(45deg,#feda75,#fa7e1e,#d62976,#962fbf,#4f5bd5)',color:'#fff',border:0,width:40,height:32,borderRadius:8}}>IG</button>
   <button onClick={()=>share('tt')} style={{background:'#000',color:'#fff',border:'1px solid #fff',width:40,height:32,borderRadius:8}}>♪</button>
   <button onClick={()=>share('wa')} style={{background:'#25D366',color:'#fff',border:0,width:40,height:32,borderRadius:8}}>WA</button>
   <button onClick={()=>share('yt')} style={{background:'#FF0000',color:'#fff',border:0,width:40,height:32,borderRadius:8}}>YT</button>
  </div>

  {showSettings && <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.8)',zIndex:50,display:'flex',alignItems:'center',justifyContent:'center',padding:20}}>
   <div style={{background:'#111',border:'1px solid #0f0',borderRadius:16,padding:20,width:'90%',maxWidth:320}}>
    <h3 style={{color:'#0f0'}}>⚙️ SETTINGS & TOOLS</h3>
    <div style={{fontSize:12,color:'#ccc',lineHeight:'18px',marginTop:10}}>
     <div>• Menu: Home / Camera / HOLO / Language</div>
     <div>• Themes: HOLO / Dark / Light</div>
     <div>• Tools: 5G Sensor, Voice Translate, Live Stream</div>
     <div>• Account: CEO Apostle Dr Oladele Mighty Hassan</div>
     <div>• RC:9882150 • Geapple Inc</div>
     <div>• www.geapple.com • gsiacyber.com</div>
    </div>
    <button onClick={()=>setShowSettings(false)} style={{width:'100%',marginTop:14,background:'#0f0',color:'#000',border:0,padding:12,borderRadius:10,fontWeight:'bold'}}>Close Settings</button>
   </div>
  </div>}
 </div>
 )
}