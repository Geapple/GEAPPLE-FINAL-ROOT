"use client";
import { useState,useEffect } from "react";
const APP_DATA={
1:{n:"MYGEA SOCIAL",d:"Africa's Facebook killer. Post, Chat, Live, Earn.",icon:"/logo1.png",color:"#0f0",price:"FREE"},
2:{n:"GEA STORE",d:"Jumia + Amazon killer.",icon:"/gea-store.png",color:"#f90",price:"FREE"},
3:{n:"GEA PAY",d:"Fintech: Bills, Crypto.",icon:"/gea-pay.png",color:"#0ff",price:"FREE"},
4:{n:"GEA CON",d:"Zoom killer 1000.",icon:"/logo1.png",color:"#0f0",price:"₦1k/mo"},
5:{n:"GEACONNECT",d:"LinkedIn Africa.",icon:"/logo1.png",color:"#09f",price:"FREE"},
6:{n:"HOLO",d:"Hologram calls.",icon:"/logo2.png",color:"#f0f",price:"₦2k/mo"},
7:{n:"GLOBAL VOTES",d:"Secure e-voting.",icon:"/logo1.png",color:"#ff0",price:"FREE"},
8:{n:"SAT COMMS",d:"Talk without network.",icon:"/gsia-cyber-c.png",color:"#f00",price:"₦5k/mo"},
9:{n:"MILITARY",d:"Defence OS.",icon:"/gsia-cyber-c.png",color:"#f00",price:"PRIVATE"},
10:{n:"VISUAL ART G",d:"AI Art + NFT.",icon:"/logo1.png",color:"#f9f",price:"FREE"},
11:{n:"GEATUNE",d:"Spotify killer.",icon:"/logo1.png",color:"#0f0",price:"FREE"},
12:{n:"4K STUDIO",d:"Video editor 4K.",icon:"/logo1.png",color:"#09f",price:"FREE"},
13:{n:"GEA GAME",d:"1000+ games.",icon:"/logo1.png",color:"#f90",price:"FREE"},
14:{n:"OKIDOKI",d:"TikTok killer.",icon:"/logo1.png",color:"#f0f",price:"FREE"},
15:{n:"GALAREA CHAT",d:"Intergalactic Chat.",icon:"/logo1.png",color:"#0ff",price:"FREE"},
16:{n:"YELLOW PAGE",d:"10M businesses.",icon:"/gea-store.png",color:"#ff0",price:"FREE"},
18:{n:"ORB MARKET",d:"Affiliate 20%.",icon:"/gea-store.png",color:"#f90",price:"FREE"},
19:{n:"CYBER-C",d:"Cybersecurity.",icon:"/gsia-cyber-c.png",color:"#f00",price:"SECURE"},
20:{n:"GSIA AI",d:"Africa's ChatGPT-5.",icon:"/gsia-ai.png",color:"#0ff",price:"FREE"},
21:{n:"ORACLE-M",d:"Market predictor.",icon:"/gsia-ai.png",color:"#0f0",price:"₦3k/mo"},
22:{n:"FRAUD-D",d:"Fraud detector.",icon:"/gsia-cyber-c.png",color:"#f00",price:"₦1k/mo"},
23:{n:"VISUAL-I",d:"AI vision.",icon:"/gsia-ai.png",color:"#09f",price:"FREE"},
24:{n:"ORACLE-W",d:"Weather AI.",icon:"/gsia-ai.png",color:"#0ff",price:"FREE"},
25:{n:"BUDGET-AI",d:"AI Accountant.",icon:"/gsia-ai.png",color:"#0f0",price:"FREE"},
26:{n:"SAT FEED",d:"Satellite TV.",icon:"/gsia-cyber-c.png",color:"#09f",price:"₦4k/mo"},
27:{n:"ARCHI-AI",d:"House plan 10s.",icon:"/gsia-ai.png",color:"#f90",price:"₦2k/mo"},
28:{n:"CARTOONS",d:"Cartoon maker.",icon:"/logo1.png",color:"#f9f",price:"FREE"},
30:{n:"WALLET",d:"Crypto wallet.",icon:"/gea-pay.png",color:"#0ff",price:"FREE"},
31:{n:"GADGETS",d:"Buy gadgets.",icon:"/gea-store.png",color:"#f90",price:"FREE"},
33:{n:"DATA MINT",d:"Mint data & earn.",icon:"/gsia-ai.png",color:"#0f0",price:"FREE"},
34:{n:"INVESTORS",d:"Raise capital.",icon:"/gea-pay.png",color:"#ff0",price:"FREE"},
35:{n:"SYSTEMS",d:"CEO Admin OS.",icon:"/logo2.png",color:"#f00",price:"CEO ONLY"},
};
export default function AppPage(){
 const [id,setId]=useState("1");
 const [bal,setBal]=useState(4000);
 useEffect(()=>{
  const p=window.location.pathname.split('/').pop();
  if(p && p!='apps' &&!isNaN(p)) setId(p);
  const s=localStorage.getItem('geabal');if(s)setBal(+s);
 },[]);
 const app=APP_DATA[id]||{n:`APP ${id}`,d:"Geapple Super App",icon:"/logo1.png",color:"#0f0",price:"FREE"};
 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',fontFamily:'sans-serif'}}>
  {/* TOP - CLEANED - INVISIBLE ID & CEO */}
  <div style={{display:'flex',alignItems:'center',gap:10,padding:12,borderBottom:`2px solid ${app.color}`,background:'#0a0a0a',position:'sticky',top:0,zIndex:10}}>
   <button onClick={()=>location.href='/'} style={{background:'#111',color:'#fff',border:'1px solid #333',borderRadius:8,padding:'6px 12px'}}>← HUB</button>
   <img src={app.icon} width={32} height={32} style={{borderRadius:8}} onError={e=>e.target.src='/logo1.png'}/>
   <div style={{fontWeight:'bold',color:app.color,fontSize:14}}>{app.n}</div>
   <div style={{marginLeft:'auto',fontSize:12,color:'#0f0',border:'1px solid #0f0',padding:'4px 10px',borderRadius:20}}>₦{bal.toLocaleString()}</div>
  </div>

  <div style={{textAlign:'center',padding:24}}>
   <img src={app.icon} width={90} height={90} style={{borderRadius:20,border:`3px solid ${app.color}`,boxShadow:`0 0 18px ${app.color}`}} onError={e=>e.target.src='/logo1.png'}/>
   <h1 style={{color:app.color,margin:'14px 0 0',fontSize:28}}>{app.n}</h1>
   {/* Africa's Facebook killer INVISIBLE AT TOP - as you said */}
   <p style={{display:'none'}}>{app.d}</p>
   <div style={{marginTop:16,display:'flex',gap:10,justifyContent:'center'}}>
    <button onClick={()=>alert(`Launching ${app.n} Super Pro Max!`)} style={{background:'#0f0',color:'#000',border:0,padding:'14px 28px',borderRadius:12,fontWeight:'bold'}}>🚀 LAUNCH FREE</button>
    <button onClick={()=>{const nb=bal+5000;setBal(nb);localStorage.setItem('geabal',nb)}} style={{background:'#111',color:'#fff',border:'1px solid #333',padding:'14px 18px',borderRadius:12}}>+₦5k</button>
   </div>
  </div>

  <div style={{display:'grid',gridTemplateColumns:'repeat(2,1fr)',gap:10,padding:12}}>
   {[{t:"HOLO MODE",d:"3D hologram"},{t:"GSIA SECURED",d:"Military"},{t:"OFFLINE",d:"No internet"},{t:"EARN",d:"GEA coins"}].map(f=>(
    <div key={f.t} style={{background:'#111',border:'1px solid #222',borderRadius:12,padding:12}}>
     <div style={{color:'#0f0',fontWeight:'bold',fontSize:11}}>{f.t}</div><div style={{fontSize:10,color:'#aaa',marginTop:4}}>{f.d}</div>
    </div>
   ))}
  </div>

  <div style={{padding:12}}>
   <div style={{color:'#0f0',fontSize:13,fontWeight:'bold'}}>⚡ QUICK ACTIONS</div>
   {["Open Dashboard","Chat Support","Share App","Add to Home"].map(a=>(
    <div key={a} onClick={()=>alert(`${a} - ${app.n} Coming Soon Super Pro Max!`)} style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:10,padding:14,marginTop:8,display:'flex',justifyContent:'space-between'}}>
     <span style={{fontSize:13}}>{a}</span><span style={{color:'#0f0'}}>→</span>
    </div>
   ))}
  </div>
  {/* CEO line at top INVISIBLE, only at bottom very small */}
  <div style={{textAlign:'center',color:'#333',fontSize:8,marginTop:20,padding:10}}>© 2026 RC:9882150</div>
 </div>
 )
}