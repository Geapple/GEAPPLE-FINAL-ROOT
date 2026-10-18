"use client";
import { useState } from "react";

const APPS = [
{id:"13-gea-game",name:"13-GEA-GAME",icon:"🎮",type:"game",desc:"Play win earn MB GB RTM rewards",tools:["🎮 Play","🏆 Win","💰 Earn MB/GB/RTM"]},
{id:"14-okidoki-social",name:"14-OKIDOKI-SOCIAL",icon:"🎬",type:"tiktok",desc:"Advanced TikTok prototype vertical feed",tools:["📤 Upload","🎙️ Voice","✨ Effects","💰 Earn"]},
{id:"15-galarea-chat",name:"15-GALAREA-CHAT",icon:"💬",type:"chat",desc:"WhatsApp Messenger + SAT free calls + Holo chat",tools:["💬 Chat","📞 SAT Free","👁️ Holo"]},
{id:"16-yellow-mygea",name:"16-YELLOW-MYGEA",icon:"💛",type:"messenger",desc:"Social Messenger platform",tools:["💛 Chat","📞 Call","👁️ Holo"]},
{id:"17-gea-store",name:"17-GEA-STORE+",icon:"🏪",type:"store",desc:"Marketplace all apps + download prices + Gea Pay",tools:["🏪 Marketplace","💳 Gea Pay","⬇️ Download"]},
{id:"18-degalaxy-orbital",name:"18-DEGALAXY-ORBITAL",icon:"🗺️",type:"map",desc:"Orbital SAT MAPS locations Drive CCTV remote",tools:["🗺️ SAT MAPS","📹 CCTV","📡 Sensors"]},
{id:"19-gsia-cyber-core",name:"19-GSIA-CYBER-CORE",icon:"🛡️",type:"security",desc:"Cyber Protection front end for Banks orgs",tools:["🛡️ Protect","🏦 Banks","🏢 Orgs"]},
{id:"20-gsia-ai",name:"20-GSIA-AI",icon:"🤖",type:"ai",desc:"Global Super Intelligence ask me anything",tools:["🤖 Ask","💬 Chat","🧠 AI"]},
{id:"21-realoracle-manager",name:"21-REALORACLE-MANAGER",icon:"🔙",type:"antivirus",desc:"Back end protection Antivirus",tools:["🔙 Backend","🛡️ Antivirus","🔒 Safe"]},
{id:"22-gsia-fraud",name:"22-GSIA-FRAUD",icon:"💰",type:"finance",desc:"AI Audit Manager financial control",tools:["🔍 Audit","💰 Finance","📊 Control"]},
{id:"23-gsia-visual",name:"23-GSIA-VISUAL",icon:"🎨",type:"code",desc:"Codes to movies games cartoons apps",tools:["💻 Code→Movie","🎮 Code→Game","🖼️ Code→Cartoon"]},
{id:"24-weather",name:"24-WEATHER",icon:"⛅",type:"weather",desc:"RealOracle Weather forecast",tools:["☁️ Forecast","🌡️ Temp","🌧️ Rain"]},
{id:"1-mygea-social",name:"1-MYGEA-SOCIAL",icon:"🌐",type:"social",desc:"Social + Holo + Voice"},
{id:"2-reelgea",name:"2-REELGEA",icon:"🎬",type:"social"},
{id:"3-geamail-con",name:"3-GEAMAIL.CON",icon:"📧",type:"mail"},
{id:"4-gea-con",name:"4-GEA-CON",icon:"💬",type:"cloud"},
{id:"5-geaconnect",name:"5-GEACONNECT",icon:"🔗",type:"call"},
{id:"6-mygea-holo",name:"6-HOLO",icon:"👁️",type:"holo"},
{id:"7-global-votes",name:"7-VOTES",icon:"🗳️",type:"vote"},
{id:"8-degalaxy-sat-",name:"8-SAT",icon:"🛰️",type:"sat"},
{id:"9-military-bord",name:"9-MILITARY",icon:"🎖️",type:"military"},
{id:"10-visual-art-g",name:"10-VISUAL",icon:"🎨",type:"visual"},
{id:"11-geatune",name:"11-GEATUNE",icon:"🎵",type:"music"},
{id:"12-gea-4k-studio",name:"12-4K-STUDIO",icon:"🎥",type:"studio"},
];

export default function Batch2(){
const [active,setActive]=useState("13-gea-game");
const [menu36,setMenu36]=useState(false);
const [sub,setSub]=useState("home");
const [vert,setVert]=useState(false);
const [play,setPlay]=useState(false);
const [msg,setMsg]=useState("");
const [chats,setChats]=useState([{u:"CEO",m:"SAT Free Call Ready?",t:"1:20"},{u:"Gea",m:"Holo Chat ON 👁️ API LIVE 🟢",t:"1:21"}]);
const [gameScore,setGameScore]=useState(2450);
const [weatherTab,setWeatherTab]=useState("PHC");
const cur = APPS.find(a=>a.id===active);

const renderWindow = () =>{
if(cur.type==="game") return (
<div style={{background:"#000",height:300,padding:10,position:"relative"}}>
<div style={{background:"linear-gradient(180deg,#111,#000)",border:"2px solid #0f0",borderRadius:12,height:"100%",padding:10}}>
<div style={{display:"flex",justifyContent:"space-between"}}><span style={{color:"#0f0",fontSize:10}}>SCORE: {gameScore} MB</span><span style={{color:"gold",fontSize:10}}>RTM: 12.5</span></div>
<div style={{height:120,background:"#000",borderRadius:8,marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:40}}>🎮 {play?"Playing...":"Tap ▶️ to Play"}</div>
<div style={{display:"flex",gap:6,marginTop:10}}><button onClick={()=>{setPlay(!play);setGameScore(s=>s+100);}} style={{flex:1,padding:12,background:play?"#f00":"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold"}}>{play?"🛑 STOP":"▶️ PLAY WIN"}</button><button style={{padding:12,background:"gold",color:"#000",border:"none",borderRadius:8,fontWeight:"bold"}}>💰 EARN GB</button></div>
<div style={{marginTop:8,display:"flex",justifyContent:"space-around"}}><span>🕹️</span><span>🎯</span><span>🏆</span><span>💎</span></div>
</div>
</div>
);
if(cur.type==="tiktok") return (
<div style={{background:"#000",height:360,position:"relative",overflow:"hidden"}}>
<div style={{height:"100%",background:"linear-gradient(0deg,#000 0%,#111 100%)",padding:10,display:"flex",flexDirection:"column",justifyContent:"flex-end"}}>
<div style={{background:"#111",borderRadius:12,padding:10,border:"1px solid #f0f"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}><div style={{width:32,height:32,background:"#f0f",borderRadius:20}}></div><div><div style={{fontSize:11,fontWeight:"bold"}}>@okidoki_creator</div><div style={{fontSize:8,color:"#888"}}>Advanced TikTok Prototype • 14K likes</div></div></div>
<p style={{fontSize:11,marginTop:6}}>OkiDoki Social - Vertical feed - Swipe up ⬆️ Touch to fit 〰️</p>
<div style={{display:"flex",gap:6,marginTop:8}}><span style={{fontSize:10,background:"#f0f",padding:"4px 8px",borderRadius:12}}>#OkiDoki</span><span style={{fontSize:10,background:"#000",padding:"4px 8px",borderRadius:12,border:"1px solid #f0f"}}>🎵 GeaTune</span></div>
</div>
</div>
<div style={{position:"absolute",right:8,top:60,bottom:80,display:"flex",flexDirection:"column",gap:12,alignItems:"center"}}>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{width:36,height:36,background:"#000",border:"2px solid #0f0",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center"}}>❤️</div><span style={{fontSize:9}}>14K</span></div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{width:36,height:36,background:"#000",border:"2px solid #fff",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center"}}>💬</div><span style={{fontSize:9}}>94</span></div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{width:36,height:36,background:"#000",border:"2px solid #fff",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center"}}>↗️</div><span style={{fontSize:9}}>217</span></div>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{width:36,height:36,background:"#000",border:"2px solid #fff",borderRadius:20,display:"flex",alignItems:"center",justifyContent:"center"}}>🔖</div><span style={{fontSize:9}}>757</span></div>
</div>
</div>
);
if(cur.type==="chat" || cur.type==="messenger") return (
<div style={{background:"#111",height:320,display:"flex",flexDirection:"column"}}>
<div style={{background:cur.id==="15-galarea-chat"?"#075e54":"#ffcc00",padding:10,color:cur.id==="15-galarea-chat"?"#fff":"#000",display:"flex",justifyContent:"space-between"}}>
<div style={{display:"flex",gap:8,alignItems:"center"}}><div style={{width:28,height:28,background:"#000",borderRadius:20}}></div><div><div style={{fontSize:11,fontWeight:"bold"}}>{cur.id==="15-galarea-chat"?"Galarea Chat - WhatsApp Prototype":"Yellow MyGea"}</div><div style={{fontSize:8}}>SAT Free Calls 📞 Holo ON 👁️</div></div></div><div style={{display:"flex",gap:10}}><span>📞</span><span>👁️</span><span>⋯</span></div>
</div>
<div style={{flex:1,padding:10,overflowY:"auto",background:"#0a0a0a"}}>
{chats.map((c,i)=><div key={i} style={{background:c.u==="CEO"?"#075e54":"#222",padding:8,borderRadius:8,marginBottom:6,marginLeft:c.u==="CEO"?40:0,marginRight:c.u==="CEO"?0:40,fontSize:11}}><b style={{fontSize:8,color:"#0f0"}}>{c.u} {c.t}</b><div>{c.m}</div></div>)}
</div>
<div style={{padding:8,display:"flex",gap:6,background:"#000"}}><input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Type SAT free call + Holo chat..." style={{flex:1,padding:10,background:"#222",color:"#fff",border:"none",borderRadius:20,fontSize:11}}/><button onClick={()=>{if(!msg)return;setChats([...chats,{u:"CEO",m:msg,t:"now"}]);setMsg("");}} style={{padding:10,background:"#075e54",color:"#fff",border:"none",borderRadius:20}}>📤</button></div>
</div>
);
if(cur.type==="store") return (
<div style={{background:"#fff",color:"#000",height:340,padding:10,overflowY:"auto"}}>
<div style={{display:"flex",justifyContent:"space-between"}}><h3 style={{fontSize:12}}>🏪 Gea Store+ Marketplace</h3><span style={{fontSize:10,background:"gold",padding:"4px 8px",borderRadius:12}}>💳 Gea Pay Linked</span></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:10}}>
{[
{name:"GeaTune Pro",price:"₦500",icon:"🎵"},
{name:"4K Studio",price:"₦1000",icon:"🎥"},
{name:"Gea Game RTM",price:"₦300",icon:"🎮"},
{name:"OkiDoki Boost",price:"₦200",icon:"🎬"},
].map(p=><div key={p.name} style={{border:"1px solid #ddd",borderRadius:10,padding:8,textAlign:"center"}}><div style={{fontSize:24}}>{p.icon}</div><div style={{fontSize:10,fontWeight:"bold",marginTop:4}}>{p.name}</div><div style={{fontSize:11,color:"#0a0",fontWeight:"bold"}}>{p.price}</div><button style={{marginTop:6,padding:6,background:"#0f0",border:"none",borderRadius:6,fontSize:9,fontWeight:"bold",width:"100%"}}>Pay & Download via Gea Pay</button></div>)}
</div>
</div>
);
if(cur.type==="map") return (
<div style={{background:"#000",height:320,position:"relative"}}>
<div style={{height:"100%",background:"linear-gradient(45deg,#001100,#003300)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:30}}>🗺️ 🛰️ SAT MAPS</div><div style={{fontSize:10,color:"#0f0",marginTop:6}}>Degalaxy Orbital - Locations + Drive + CCTV Remote</div>
<div style={{marginTop:10,background:"#111",padding:6,borderRadius:6,fontSize:8}}>LAT: 4.8156°N LONG: 7.0498°E PHC - Sensor ON 📡</div>
</div>
<div style={{position:"absolute",top:10,left:10,background:"#000",padding:6,borderRadius:6,border:"1px solid #0f0",fontSize:8}}>🛰️ NORAD TLE Tracking 🟢</div>
<div style={{position:"absolute",bottom:10,left:10,right:10,display:"flex",gap:6}}><button style={{flex:1,padding:8,background:"#0f0",border:"none",borderRadius:6,fontSize:9,fontWeight:"bold"}}>📹 CCTV Remote</button><button style={{flex:1,padding:8,background:"#222",color:"#fff",border:"1px solid #0f0",borderRadius:6,fontSize:9}}>📡 Sensors</button></div>
</div>
);
if(cur.type==="ai") return (
<div style={{background:"#111",height:320,display:"flex",flexDirection:"column"}}>
<div style={{padding:10,flex:1,overflowY:"auto"}}>
<div style={{background:"#000",padding:10,borderRadius:10,border:"1px solid #0f0",fontSize:11}}><b style={{color:"#0f0"}}>🤖 GSIA AI:</b> Global Super Intelligence Applications - Ask me anything! API LIVE 🟢</div>
{chats.map((c,i)=><div key={i} style={{marginTop:8,background:c.u==="CEO"?"#0f0":"#222",color:c.u==="CEO"?"#000":"#fff",padding:8,borderRadius:10,fontSize:11,marginLeft:c.u==="CEO"?20:0,marginRight:c.u==="CEO"?0:20}}>{c.m}</div>)}
</div>
<div style={{padding:8,display:"flex",gap:6,background:"#000"}}><input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Ask GSIA AI anything..." style={{flex:1,padding:10,background:"#222",color:"#0f0",border:"1px solid #0f0",borderRadius:20,fontSize:11}}/><button onClick={()=>{if(!msg)return;setChats([...chats,{u:"CEO",m:msg},{u:"GSIA",m:"GSIA AI Answer: Ready Green API - "+msg+" - Connected to CEO Dashboard"}]);setMsg("");}} style={{padding:10,background:"#0f0",border:"none",borderRadius:20}}>🤖</button></div>
</div>
);
if(cur.type==="weather") return (
<div style={{background:"linear-gradient(180deg,#001122,#000)",height:320,padding:10}}>
<div style={{display:"flex",gap:6}}>{["PHC","Lagos","Abuja","NY"].map(c=><button key={c} onClick={()=>setWeatherTab(c)} style={{padding:6,background:weatherTab===c?"#0f0":"#222",color:weatherTab===c?"#000":"#fff",border:"none",borderRadius:20,fontSize:10}}>{c}</button>)}</div>
<div style={{marginTop:10,background:"#111",borderRadius:12,padding:12,border:"1px solid #0ff"}}>
<div style={{display:"flex",justifyContent:"space-between"}}><div><div style={{fontSize:22}}>⛅ 31°C</div><div style={{fontSize:10,color:"#888"}}>{weatherTab} - RealOracle Weather Forecast</div></div><div style={{fontSize:30}}>🌦️</div></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginTop:12}}>
{[
{l:"Today",v:"31°/24°",i:"⛅"},
{l:"Tomorrow",v:"30°/23°",i:"🌧️"},
{l:"SAT Track",v:"Live",i:"🛰️"},
].map(w=><div key={w.l} style={{background:"#000",padding:8,borderRadius:8,textAlign:"center"}}><div style={{fontSize:16}}>{w.i}</div><div style={{fontSize:9,marginTop:4}}>{w.l}</div><div style={{fontSize:10,fontWeight:"bold",color:"#0ff"}}>{w.v}</div></div>)}
</div>
</div>
</div>
);
return (
<div style={{background:"#000",height:220,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:40}}>{cur.icon}</div><div style={{fontSize:12,color:"#0f0",marginTop:8}}>{cur.name} - {cur.type} Window Working</div>
</div>
);
};

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:10,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:40}}>
<span style={{fontSize:11}}>GEAPPLE 36 - BATCH 2: 13-24 - DIFF FORMATS - READY GREEN - RC:9882150</span>
<button onClick={()=>setMenu36(!menu36)} style={{background:"#000",color:"#0f0",border:"none",padding:6,borderRadius:6,fontSize:10,fontWeight:"bold"}}>☰ MENU 36</button>
</div>
{menu36 && (
<div style={{background:"#111",padding:10,borderBottom:"2px solid #0f0",maxHeight:"60vh",overflowY:"auto"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{APPS.map(a=>(
<button key={a.id} onClick={()=>{setActive(a.id);setMenu36(false);setVert(false);}} style={{padding:8,background:active===a.id?"#0f0":"#222",color:active===a.id?"#000":"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",textAlign:"left"}}>{a.icon} {a.name}</button>
))}
</div>
</div>
)}

<div style={{padding:8}}>
<div style={{background:"#111",border:"2px solid #0f0",borderRadius:16,overflow:"hidden",position:"relative"}}>

<div style={{background:"#0f0",color:"#000",padding:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span style={{fontSize:11,fontWeight:"bold"}}>{cur.icon} {cur.name} - Windows Page - {cur.type?.toUpperCase()} FORMAT - API LIVE 🟢</span>
<button onClick={()=>setVert(!vert)} style={{background:"#000",color:"#fff",border:"none",width:28,height:28,borderRadius:6}}>⋯</button>
</div>

{vert && (
<div style={{position:"absolute",top:36,right:6,width:170,background:"#000",border:"1px solid #0f0",borderRadius:10,zIndex:20,padding:6}}>
<div style={{fontSize:8,color:"#0f0",fontWeight:"bold",padding:4}}>〰️ 💨 VERTICAL TOOLS</div>
{["Post","Story","Reel","Live","Note","Share","Favorite","Edit","Delete","▶️ Play","⏸️ Pause","⏯️","⏩","◀️","🛑","🤳 Holo","💨 Window Effect","〰️ Fit Screen"].map(t=><div key={t} style={{padding:6,fontSize:10,borderBottom:"1px solid #111"}}>{t}</div>)}
<button onClick={()=>setVert(false)} style={{width:"100%",padding:6,background:"#0f0",border:"none",borderRadius:6,fontWeight:"bold",fontSize:9,marginTop:4}}>Close</button>
</div>
)}

<div style={{display:"flex",gap:3,padding:6,background:"#000",overflowX:"auto"}}>
{["home","settings","tools","manual","api","geamail"].map(m=><button key={m} onClick={()=>setSub(m)} style={{padding:6,background:sub===m?"#0f0":"#222",color:sub===m?"#000":"#fff",border:"none",borderRadius:20,fontSize:8,fontWeight:"bold"}}>{m.toUpperCase()}</button>)}
</div>

{renderWindow()}

<div style={{background:"#111",padding:6,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",gap:4}}>{["▶️","⏯️","⏩","◀️","🛑"].map(i=><button key={i} onClick={()=>setPlay(!play)} style={{width:26,height:26,background:"#000",border:"1px solid #333",borderRadius:13,fontSize:10}}>{i}</button>)}</div>
<div style={{display:"flex",gap:8,fontSize:10}}><span>👍 14K</span><span>💬 94</span><span>↗️ 217</span><span>🔖 757</span></div>
</div>

<div style={{padding:8,background:"#000"}}>
<div style={{fontSize:11,fontWeight:"bold",color:"#0f0"}}>{cur.icon} {cur.name} - {sub.toUpperCase()} - {cur.type} Format</div>
<p style={{fontSize:10,color:"#888",marginTop:4}}>{cur.desc} - Window effect: Touch to fit screen - Vertical tools in ⋯</p>
<div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}>
{cur.tools?.map(t=><span key={t} style={{padding:5,background:"#111",border:"1px solid #0f0",borderRadius:12,fontSize:9,color:"#0f0"}}>{t}</span>)}
</div>
</div>

<div style={{background:"#000",padding:6,display:"flex",justifyContent:"space-around",borderTop:"1px solid #222"}}>
{["🏠","🎬","👥","🏪","🔔"].map(i=><div key={i} style={{fontSize:16}}>{i}</div>)}
</div>

</div>
<div style={{marginTop:8,textAlign:"center",fontSize:7,color:"#444"}}>GEAPPLE RC:9882150 - BATCH 2: 13-24 - Different Formats - Game / TikTok / Chat WhatsApp / Store Marketplace / SAT Maps / Security / AI / Antivirus / Audit / Weather - Touch Fit 〰️ 💨 - Ready Green</div>
</div>
</div>
);
}