"use client";
import { useParams } from "next/navigation";

const APPS = [
 {id:1,n:"MYGEA-SOCIAL",d:"Viral Social OS",c:"#00ff88",e:"📱"},
 {id:2,n:"GEA-STORE",d:"Global Marketplace",c:"#ffd700",e:"🛒"},
 {id:3,n:"GEA-PAY",d:"Pay Engine",c:"#00e5ff",e:"💳"},
 {id:4,n:"GEA-CON",d:"Encrypted Comms",c:"#00e5ff",e:"📡"},
 {id:5,n:"GEACONNECT",d:"Professional Network",c:"#00ff88",e:"🤝"},
 {id:6,n:"MYGEA-HOLO",d:"Holo Identity",c:"#ff00ff",e:"👤"},
 {id:7,n:"GLOBAL-VOTES",d:"Blockchain Voting",c:"#ffd700",e:"🗳️"},
 {id:8,n:"DEGALAXY-SAT",d:"Satellite Comms",c:"#00e5ff",e:"🛰️"},
 {id:9,n:"MILITARY-BORD",d:"Military Board",c:"#ff4444",e:"🛡️"},
 {id:10,n:"VISUAL-ART-G",d:"AI Art + NFT",c:"#ff00ff",e:"🎨"},
 {id:11,n:"GEATUNE",d:"Music Streaming",c:"#00ff88",e:"🎵"},
 {id:12,n:"GEA-4K-STUDI",d:"4K Studio",c:"#ff00ff",e:"🎬"},
 {id:13,n:"GEA-GAME",d:"Holo Gaming",c:"#00e5ff",e:"🎮"},
 {id:14,n:"OKIDOKI-SOCI",d:"Viral Social",c:"#ffd700",e:"💬"},
 {id:15,n:"GALAREA-CHAT",d:"Intergalactic Chat",c:"#00e5ff",e:"💜"},
 {id:16,n:"YELLOW-MYGEA",d:"Business Directory",c:"#ffd700",e:"📒"},
 {id:18,n:"DEGALAXY-ORB",d:"Orbital Market",c:"#00e5ff",e:"🌌"},
 {id:19,n:"GSIA-CYBER-C",d:"Cyber Defense",c:"#ff0000",e:"🔐"},
 {id:20,n:"GSIA-AI",d:"Super AI Oracle",c:"#00ff88",e:"🤖"},
 {id:21,n:"REALORACLE-M",d:"Market Oracle",c:"#ffd700",e:"🔮"},
 {id:22,n:"GSIA-FRAUD-D",d:"Fraud Detection",c:"#ff6600",e:"🚨"},
 {id:23,n:"GSIA-VISUAL",d:"Visual Intel",c:"#00e5ff",e:"👁️"},
 {id:24,n:"REALORACLE-W",d:"Wealth Oracle",c:"#ffd700",e:"💰"},
 {id:25,n:"GSIA-BUDGET",d:"Budget AI",c:"#00ff88",e:"📊"},
 {id:26,n:"DEGALAXY-SAT-2",d:"Satellite Feed",c:"#00e5ff",e:"📡"},
 {id:27,n:"GSIA-ARCHITE",d:"Architecture AI",c:"#ffaa00",e:"🏗️"},
 {id:28,n:"GEA-CARTOONS",d:"Kidsverse",c:"#ff00ff",e:"👶"},
 {id:30,n:"GEA-WALLET",d:"Multi Wallet",c:"#ffd700",e:"👛"},
 {id:31,n:"GEAPPLE-GADG",d:"Gadgets Store",c:"#00ff88",e:"📱"},
 {id:33,n:"DATA-MINTING",d:"Data Mining",c:"#00e5ff",e:"⛏️"},
 {id:34,n:"INVESTORS-AN",d:"Investors T1-T4",c:"#ffd700",e:"📈"},
 {id:35,n:"GSIA-SYSTEMS",d:"Systems Core",c:"#ff00ff",e:"⚙️"},
];

export default function AppPage(){
 const {id} = useParams();
 const app = APPS.find(a=>String(a.id)===String(id)) || APPS[0];
 return (
  <div style={{minHeight:'100vh',background:'radial-gradient(ellipse at top,#111,#000 70%)',color:'#fff',padding:12,fontFamily:'sans-serif'}}>
   <div style={{textAlign:'center',padding:10}}>
    <img src="/logo1.png" style={{width:84,height:84,borderRadius:'50%',border:`3px solid ${app.c}`}}/>
    <h2 style={{color:app.c}}>{app.e} {app.id}-{app.n} SUPER PRO MAX</h2>
    <p style={{fontSize:10,color:'#aaa'}}>RC:9882150 | CEO: Apostle Dr Oladele Mighty Hassan | {app.d}</p>
   </div>
   <div style={{background:'rgba(20,20,20,0.6)',backdropFilter:'blur(20px)',border:`1px solid ${app.c}66`,borderRadius:24,margin:12,padding:16}}>
    <h3 style={{color:app.c}}>{app.e} {app.d} - Holo Engine</h3>
    <input placeholder={`${app.n} query...`} style={{width:'100%',padding:12,background:'#000',border:`1px solid ${app.c}66`,borderRadius:12,color:'#fff',margin:'6px 0'}}/>
    <textarea placeholder="Description" style={{width:'100%',padding:12,background:'#000',border:`1px solid ${app.c}66`,borderRadius:12,color:'#fff',margin:'6px 0'}}></textarea>
    <button onClick={()=>{const amt=prompt('Amount:','500');const tx={id:`GEA-${app.n}-${Math.random().toString(36).substr(2,6).toUpperCase()}`,amt};alert(`TX ${tx.id} Sent to CEO via GEA-PAY! ₦${amt}`)}} style={{width:'100%',padding:14,border:'none',borderRadius:30,fontWeight:900,margin:'8px 0',background:`linear-gradient(90deg,${app.c},#fff)`,color:'#000'}}>💳 PAY VIA GEA-PAY (3)</button>
    <button onClick={()=>location.href='/'} style={{width:'100%',padding:14,border:'none',borderRadius:30,fontWeight:900,margin:'8px 0',background:'linear-gradient(90deg,#ffd700,#ff8c00)',color:'#000'}}>🛒 HUB 35</button>
   </div>
   <div style={{position:'fixed',bottom:0,left:0,right:0,display:'flex',background:'rgba(0,0,0,0.9)',borderTop:`1px solid ${app.c}66`,padding:8}}>
    <button onClick={()=>location.href='/'} style={{flex:1,background:'transparent',border:'none',color:'#aaa'}}>🏠 HOLO</button>
    <button style={{flex:1,background:'transparent',border:'none',color:app.c}}>{app.e} LIVE</button>
    <button onClick={()=>location.href='/'} style={{flex:1,background:'transparent',border:'none',color:'#aaa'}}>👑 CEO</button>
   </div>
  </div>
 )
}