"use client";
import { useState,useEffect } from "react";

const ICONS = {
  s:"/gea-store.png", pay:"/gea-pay.png", cyber:"/gsia-cyber-c.png",
  ai:"/gsia-ai.png", voice:"/gsia-voice.png", logo1:"/logo1.png", logo2:"/logo2.png"
};

const APPS = [
 {id:1,n:"MYGEA SOCIAL",i:ICONS.logo1},{id:2,n:"GEA STORE",i:ICONS.s},{id:3,n:"GEA PAY",i:ICONS.pay},
 {id:4,n:"GEA CON",i:ICONS.logo1},{id:5,n:"GEACONNECT",i:ICONS.logo1},{id:6,n:"HOLO",i:ICONS.logo2},
 {id:7,n:"GLOBAL VOTES",i:ICONS.logo1},{id:8,n:"SAT COMMS",i:ICONS.cyber},{id:9,n:"MILITARY",i:ICONS.cyber},
 {id:10,n:"VISUAL ART",i:ICONS.logo1},{id:11,n:"GEATUNE",i:ICONS.logo1},{id:12,n:"4K STUDIO",i:ICONS.logo1},
 {id:13,n:"GEA GAME",i:ICONS.logo1},{id:14,n:"OKIDOKI",i:ICONS.logo1},{id:15,n:"GALAREA CHAT",i:ICONS.logo1},
 {id:16,n:"YELLOW PAGE",i:ICONS.s},{id:18,n:"ORB MARKET",i:ICONS.s},{id:19,n:"CYBER-C",i:ICONS.cyber},
 {id:20,n:"GSIA AI",i:ICONS.ai},{id:21,n:"ORACLE-M",i:ICONS.ai},{id:22,n:"FRAUD-D",i:ICONS.cyber},
 {id:23,n:"VISUAL-I",i:ICONS.ai},{id:24,n:"ORACLE-W",i:ICONS.ai},{id:25,n:"BUDGET-AI",i:ICONS.ai},
 {id:26,n:"SAT FEED",i:ICONS.cyber},{id:27,n:"ARCHI-AI",i:ICONS.ai},{id:28,n:"CARTOONS",i:ICONS.logo1},
 {id:30,n:"WALLET",i:ICONS.pay},{id:31,n:"GADGETS",i:ICONS.s},{id:33,n:"DATA MINT",i:ICONS.ai},
 {id:34,n:"INVESTORS",i:ICONS.pay},{id:35,n:"SYSTEMS",i:ICONS.logo2},
];

export default function Page(){
 const [bal,setBal]=useState(5000);
 useEffect(()=>{const s=localStorage.getItem('geabal');if(s)setBal(+s)},[]);
 useEffect(()=>{localStorage.setItem('geabal',bal)},[bal]);
 return (
  <div style={{background:'#000',minHeight:'100vh',color:'#fff',padding:12,fontFamily:'sans-serif'}}>
   <div style={{display:'flex',alignItems:'center',gap:10,border:'2px solid lime',borderRadius:12,padding:10,background:'#0a0a0a'}}>
    <img src={ICONS.logo1} width={50} height={50} style={{borderRadius:25,border:'2px solid lime'}}/>
    <div><div style={{color:'lime',fontWeight:'bold'}}>GEAPPLE HUB 35</div><div style={{fontSize:11,color:'#0f0'}}>₦{bal.toLocaleString()} | www.geapple.com</div></div>
    <button onClick={()=>setBal(bal+1000)} style={{marginLeft:'auto',background:'lime',color:'#000',border:0,borderRadius:8,padding:'8px 14px',fontWeight:'bold'}}>FUND +1k</button>
   </div>
   <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginTop:14}}>
    {APPS.map(a=>(
     <div key={a.id} onClick={()=>location.href=`/apps/${a.id}`} style={{background:'#111',border:'1px solid #222',borderRadius:12,padding:10,textAlign:'center'}}>
      <img src={a.i} width={44} height={44} style={{borderRadius:8}} onError={e=>e.target.src=ICONS.logo1}/>
      <div style={{fontSize:9,marginTop:6}}>{a.id}-{a.n}</div>
     </div>
    ))}
   </div>
   <div style={{textAlign:'center',color:'#444',fontSize:10,marginTop:16}}>CEO Geapple Inc | 35 APPS LIVE | Port Harcourt | gsiacyber.com</div>
  </div>
 )
}