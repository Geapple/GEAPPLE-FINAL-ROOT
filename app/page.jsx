"use client";
import { useState,useEffect,useRef } from "react";

export default function MyGeaSocialNative(){
 const [id,setId]=useState("1");
 const [lang,setLang]=useState("en");
 const [theme,setTheme]=useState("holo");
 const [holo,setHolo]=useState(false);
 const [live,setLive]=useState(false);
 const [transText,setTransText]=useState("Speak English and hear local language...");
 const videoRef=useRef(null);
 const [bal,setBal]=useState(4000);
 const [posts,setPosts]=useState([
  {u:"Apostle Dr Mighty",t:"Welcome to MYGEA SOCIAL - Africa's Facebook Killer is LIVE!",l:152},
  {u:"GEAPPLE CEO",t:"HOLO Video Chat + 5G Sensor Activated!",l:98},
 ]);

 useEffect(()=>{
  const p=window.location.pathname.split('/').pop();
  if(p &&!isNaN(p)) setId(p);
  const s=localStorage.getItem('geabal');if(s)setBal(+s);
 },[]);

 // 5G CAMERA SENSOR
 const startCamera=async()=>{
  try{
   const stream=await navigator.mediaDevices.getUserMedia({video:{facingMode:"user"},audio:true});
   if(videoRef.current){videoRef.current.srcObject=stream; setLive(true);}
  }catch(e){alert("Camera permission needed for 5G Sensor!")}
 };
 const stopCamera=()=>{
  if(videoRef.current?.srcObject){videoRef.current.srcObject.getTracks().forEach(t=>t.stop()); setLive(false);}
 };

 // VOICE TRANSLATION API - Speak English -> Local
 const translateVoice=()=>{
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SpeechRecognition){alert("Use Chrome for Voice Translation!"); return;}
  const rec=new SpeechRecognition();
  rec.lang='en-US';
  rec.onresult=(e)=>{
   const txt=e.results[0][0].transcript;
   let translated=txt;
   if(lang==='yo') translated=`(Yoruba) ${txt} -> Mo n sọ: ${txt}`;
   if(lang==='ig') translated=`(Igbo) ${txt} -> Ana m ekwu: ${txt}`;
   if(lang==='ha') translated=`(Hausa) ${txt} -> Ina magana: ${txt}`;
   if(lang==='pcm') translated=`(Pidgin) ${txt} -> I dey talk: ${txt}`;
   setTransText(translated);
   const utter=new SpeechSynthesisUtterance(translated);
   utter.lang=lang==='en'?'en-US':lang==='yo'?'yo-NG':'en-US';
   speechSynthesis.speak(utter);
  };
  rec.start();
  setTransText("Listening... Speak English now!");
 };

 const share=(platform)=>{
  const url=window.location.href;
  const text=`Join MYGEA SOCIAL - Africa's Facebook Killer! ${url}`;
  if(platform==='wa') window.open(`https://wa.me/?text=${encodeURIComponent(text)}`);
  if(platform==='fb') window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`);
  if(platform==='tw') window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`);
  if(platform==='li') window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`);
  if(platform==='ig') {navigator.clipboard.writeText(url); alert("Link copied! Paste on Instagram Story!");}
  if(platform==='tt') {navigator.clipboard.writeText(url); alert("Link copied! Paste on TikTok!");}
 };

 if(id!=="1"){
  // OTHER 34 APPS - GENERIC
  return (
   <div style={{background:'#000',minHeight:'100vh',color:'#fff',padding:20,textAlign:'center',fontFamily:'sans-serif'}}>
    <button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',border:'1px solid #333',padding:'8px 14px',borderRadius:8}}>← HUB</button>
    <h1 style={{color:'#0f0',marginTop:20}}>APP {id} SUPER PRO MAX</h1>
    <p style={{color:'#aaa'}}>This app window will be built after MYGEA SOCIAL. Hub 35 is Live!</p>
    <button onClick={()=>location.href='/apps/1'} style={{background:'#0f0',color:'#000',padding:'12px 24px',borderRadius:10,marginTop:20,fontWeight:'bold'}}>Go to MYGEA SOCIAL NATIVE</button>
   </div>
  )
 }

 // ID=1 - MYGEA SOCIAL NATIVE PLATFORM WINDOW
 return(
 <div style={{background:theme==='holo'?'#000':'#111',minHeight:'100vh',color:'#fff',fontFamily:'sans-serif',display:'flex'}}>
  {/* VERTICAL TOOLS - LEFT */}
  <div style={{width:60,background:'#0a0a0a',borderRight:'1px solid #0f02',display:'flex',flexDirection:'column',alignItems:'center',gap:14,padding:'12px 0',position:'fixed',height:'100vh',zIndex:20}}>
   <div style={{width:36,height:36,background:'#0f0',borderRadius:10,display:'flex',alignItems:'center',justifyContent:'center',fontWeight:'bold',color:'#000'}}>G</div>
   {[
    {i:"🏠",t:"Home"},{i:"📷",t:"5G Cam",a:live?stopCamera:startCamera},{i:"🎥",t:"Live",a:()=>live?stopCamera():startCamera()},
    {i:"👁️",t:"HOLO",a:()=>setHolo(!holo)},{i:"🌐",t:"Translate",a:translateVoice},{i:"🎨",t:"Themes",a:()=>setTheme(theme==='holo'?'dark':'holo')},
    {i:"⚙️",t:"Settings",a:()=>alert("Settings: CEO Apostle Dr Oladele Mighty Hassan - Geapple Inc RC:9882150")},
   ].map(b=>(
    <button key={b.t} onClick={b.a} title={b.t} style={{background:'#111',border:holo&&b.t==='HOLO'?'1px solid #f0f':'1px solid #222',width:42,height:42,borderRadius:12,fontSize:18}}>{b.i}</button>
   ))}
   <div style={{marginTop:'auto',display:'flex',flexDirection:'column',gap:8}}>
    <button onClick={()=>location.href='/'} style={{background:'#0f0',color:'#000',border:0,width:42,height:12,borderRadius:8,fontSize:9,fontWeight:'bold'}}>HUB 35</button>
   </div>
  </div>

  {/* MAIN WINDOW */}
  <div style={{marginLeft:60,flex:1,paddingBottom:70}}>
   {/* TOP */}
   <div style={{display:'flex',alignItems:'center',gap:10,padding:10,background:'#0a0a0a',borderBottom:'1px solid #0f03',position:'sticky',top:0,zIndex:10}}>
    <img src="/logo1.png" width={28} height={28} style={{borderRadius:8}} onError={e=>e.target.style.display='none'}/>
    <div style={{fontWeight:'bold',color:'#0f0',fontSize:14}}>MYGEA SOCIAL NATIVE</div>
    <div style={{marginLeft:'auto',fontSize:10,border:'1px solid #0f0',padding:'3px 8px',borderRadius:12,color:'#0f0'}}>₦{bal.toLocaleString()} • 5G • {holo?"HOLO ON":"HOLO OFF"}</div>
   </div>

   {/* HOLO + CAMERA */}
   <div style={{position:'relative',background:'#111',margin:10,borderRadius:16,overflow:'hidden',border:holo?'2px solid #f0f':'1px solid #222'}}>
    <video ref={videoRef} autoPlay muted playsInline style={{width:'100%',height:220,background:'#000',objectFit:'cover',display:live?'block':'none'}}/>
    {!live && <div style={{height:220,display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',gap:10}}>
     <div style={{fontSize:40}}>📷</div><div style={{color:'#666',fontSize:12}}>5G Camera Sensor - Tap 📷 to start Selfie & Live Streaming</div>
     <button onClick={startCamera} style={{background:'#0f0',color:'#000',border:0,padding:'8px 16px',borderRadius:8,fontWeight:'bold'}}>START 5G CAMERA</button>
    </div>}
    {holo && <div style={{position:'absolute',top:8,left:8,background:'#f0f',color:'#fff',fontSize:9,padding:'3px 8px',borderRadius:12}}>HOLO VIDEO CHAT SENSOR ACTIVE</div>}
    {live && <button onClick={stopCamera} style={{position:'absolute',bottom:10,left:'50%',transform:'translateX(-50%)',background:'#f00',color:'#fff',border:0,padding:'8px 16px',borderRadius:20}}>STOP LIVE</button>}
   </div>

   {/* VOICE TRANSLATION API */}
   <div style={{margin:10,background:'#0a0a0a',border:'1px solid #0ff3',borderRadius:12,padding:12}}>
    <div style={{color:'#0ff',fontSize:11,fontWeight:'bold'}}>🔊 LANGUAGE VOICE INTERPRETATION API</div>
    <div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>
     {[{k:"en",l:"English"},{k:"yo",l:"Yoruba"},{k:"ig",l:"Igbo"},{k:"ha",l:"Hausa"},{k:"pcm",l:"Pidgin"}].map(L=>(
      <button key={L.k} onClick={()=>setLang(L.k)} style={{background:lang===L.k?'#0ff':'#111',color:lang===L.k?'#000':'#fff',border:'1px solid #222',padding:'6px 10px',borderRadius:20,fontSize:10}}>{L.l}</button>
     ))}
    </div>
    <div style={{background:'#111',borderRadius:8,padding:10,marginTop:10,fontSize:12,color:'#ccc',minHeight:40}}>{transText}</div>
    <button onClick={translateVoice} style={{width:'100%',marginTop:8,background:'#0ff',color:'#000',border:0,padding:12,borderRadius:10,fontWeight:'bold'}}>🎤 SPEAK ENGLISH → HEAR {lang.toUpperCase()}</button>
   </div>

   {/* FEED */}
   <div style={{padding:10}}>
    {posts.map((p,i)=>(
     <div key={i} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:12,marginBottom:10}}>
      <div style={{display:'flex',gap:8,alignItems:'center'}}><div style={{width:32,height:32,background:'#0f0',borderRadius:16}}/><div><div style={{fontSize:12,fontWeight:'bold'}}>{p.u}</div><div style={{fontSize:9,color:'#666'}}>5G • HOLO • Now</div></div></div>
      <div style={{marginTop:8,fontSize:13}}>{p.t}</div>
      <div style={{display:'flex',gap:12,marginTop:10,fontSize:11,color:'#666'}}><span>❤️ {p.l}</span><span>💬 Chat</span><span onClick={()=>share('wa')}>🔗 Share</span></div>
     </div>
    ))}
    <div style={{display:'flex',gap:8,marginTop:10}}>
     <input placeholder="What's happening? Post to MyGea..." style={{flex:1,background:'#111',border:'1px solid #222',borderRadius:20,padding:'12px 14px',color:'#fff'}} id="postIn"/>
     <button onClick={()=>{const v=document.getElementById('postIn').value; if(v){setPosts([{u:"You",t:v,l:0},...posts]); document.getElementById('postIn').value="";}}} style={{background:'#0f0',color:'#000',border:0,padding:'0 18px',borderRadius:20,fontWeight:'bold'}}>Post</button>
    </div>
   </div>
  </div>

  {/* BOTTOM SHARE - FB TikTok IG WA LinkedIn */}
  <div style={{position:'fixed',bottom:0,left:60,right:0,background:'#0a0a0a',borderTop:'1px solid #222',display:'flex',justifyContent:'space-around',padding:'8px 0',zIndex:20}}>
   {[
    {k:"fb",i:"f",c:"#1877F2",n:"Facebook"},{k:"tt",i:"♪",c:"#000",n:"TikTok"},{k:"ig",i:"📸",c:"#E4405F",n:"Instagram"},{k:"wa",i:"W",c:"#25D366",n:"WhatsApp"},{k:"li",i:"in",c:"#0077B5",n:"LinkedIn"},
   ].map(s=>(
    <button key={s.k} onClick={()=>share(s.k)} style={{background:'#111',border:'1px solid #222',width:44,height:32,borderRadius:8,fontSize:12,color:'#fff'}}>{s.n[0]}</button>
   ))}
  </div>
 </div>
 )
}