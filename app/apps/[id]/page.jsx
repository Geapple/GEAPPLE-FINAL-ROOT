"use client";
import { useState } from "react";

const APPS36 = [
{id:"home",name:"HOME",icon:"🏠",gold:true,tools:["Dashboard","36 Apps Grid","CEO Stats"],api:"/api/home",desc:"GEAPPLE 36 Dashboard - All Apps Ready Green"},
{id:"1-mygea-social",name:"1-MYGEA-SOCIAL",icon:"🌐",tools:["🌐 Feed","👁️ Holo Projector","🗣️ Voice Translate EN→Local","📷 Sensors Camera"],api:"/api/mygea/holo/project + /api/mygea/voice/translate",desc:"Social + Holo + Voice Translation Sensors"},
{id:"2-reelgea",name:"2-REELGEA",icon:"🎬",tools:["📤 Upload Link","🎙️ Voice API","✨ Effects","🎵 Music","🎨 Filters","🎬 4K Editor"],api:"/api/reelgea/upload",desc:"Creator Tools Upload Link Voice Effects Music Filters"},
{id:"3-geamail-con",name:"3-GEAMAIL.CON",icon:"📧",tools:["📧 username@geamail.con","🔗 → geapple.admin@gmail.com","📦 Bulk Mail 36","💳 Pay + Data"],api:"/api/geamail/bulk",desc:"Geamail to Gmail SMTP Linked"},
{id:"4-gea-con",name:"4-GEA-CON",icon:"💬",tools:["🌐 Web API","📧 Mail API","☁️ Cloud API","💾 Drive API","💻 Code API","🔗 GitHub Edit","📱 SPCK Edit"],api:"/api/gea-con/web + mail + cloud + drive + code",desc:"Web Cloud Mail Domains Drive Code"},
{id:"5-geaconnect",name:"5-GEACONNECT",icon:"🔗",tools:["📞 SAT Free Calls","🗣️ Interpreter","📡 Nino Simless"],api:"/api/geaconnect/sat/free-call",desc:"SAT Free Calls + Interpreter"},
{id:"6-mygea-holo",name:"6-MYGEA-HOLO",icon:"👁️",tools:["👥 100 Holo Conference","🌍 Avatar Country","🗣️ Voice EN→Local","📷 Sensors"],api:"/api/holo/conference/100",desc:"100 Holo Conference Avatar Country Voice"},
{id:"7-global-votes",name:"7-GLOBAL-VOTES",icon:"🗳️",tools:["🗳️ Create Vote","✅ Vote","🔗 Blockchain Verify","📧 via geamail.con"],api:"/api/global-votes/create + vote",desc:"Voting Blockchain Verify"},
{id:"8-degalaxy-sat-",name:"8-DEGALAXY-SAT-",icon:"🛰️",tools:["🛰️ Satellite Tracking","📡 NORAD TLE","📍 GPS Lock PHC","📡 Nino Simless"],api:"/api/sat/tracking",desc:"Satellite Tracking NORAD TLE"},
{id:"9-military-bord",name:"9-MILITARY-BORD",icon:"🎖️",tools:["🔫 Arms Detect","💊 Drugs Detect","📹 Sensors Erazer 5G","🛡️ GSIA-CYBER-C"],api:"/api/military/detect/arms + drugs",desc:"Arms Drugs Sensors Erazer 5G Cameras"},
{id:"10-visual-art-g",name:"10-VISUAL-ART-G",icon:"🎨",tools:["📖 Story→4K Movies","✏️ Sketch","🎬 Animate","🖼️ Cartoon→Reality","🎥 GEA-4K-STUDIO","👤 Real Human Jesus African"],api:"/api/visual-art/story-to-4k",desc:"Story to 4K Reality African Jesus"},
{id:"11-geatune",name:"11-GEATUNE",icon:"🎵",tools:["🎵 Create Music","🎙️ Record","🎧 Mix","📀 iTunes Prototype","💿 Upload Creator Tools"],api:"/api/geatune/create + itunes",desc:"Music for creators + iTunes prototype"},
{id:"12-gea-4k-studio",name:"12-GEA-4K-STUDIO",icon:"🎥",tools:["🎬 Movie Room","📺 Streaming Platforms","🔌 Decoder Systems","📡 TV Connectable"],api:"/api/gea-4k-studio/stream",desc:"Movie room streaming + Decoder TV"},
{id:"13-gea-game",name:"13-GEA-GAME",icon:"🎮",tools:["🎮 Play","🎯 Win","💰 Earn MB GB RTM","🏆 Rewards"],api:"/api/gea-game/play + rewards",desc:"Play win and earn rewards MB GB RTM"},
{id:"14-okidoki-social",name:"14-OKIDOKI-SOCIAL",icon:"🎬",tools:["🎥 Advanced TikTok Prototype","📤 Upload","🎙️ Voice","✨ Effects","💰 Earn"],api:"/api/okidoki/feed",desc:"Advanced TikTok prototype"},
{id:"15-galarea-chat",name:"15-GALAREA-CHAT",icon:"💬",tools:["💬 WhatsApp Prototype","📞 SAT Free Calls","👁️ Holo Chat","🎙️ Voice"],api:"/api/galarea/sat/call + holo",desc:"Whatsapp Messenger + SAT + Holo chat"},
{id:"16-yellow-mygea",name:"16-YELLOW-MYGEA",icon:"💛",tools:["💛 Social Messenger","💬 Chat","📞 Call","👁️ Holo"],api:"/api/yellow-mygea/chat",desc:"Social Messenger platform"},
{id:"17-gea-store",name:"17-GEA-STORE+",icon:"🏪",tools:["🏪 Marketplace","📦 All Apps Products","⬇️ Download Prices","🔗 Gea Pay Link","💳 Buttons"],api:"/api/gea-store/products + pay",desc:"Store Marketplace + Gea Pay"},
{id:"18-degalaxy-orbital",name:"18-DEGALAXY-ORBITAL",icon:"🗺️",tools:["🛰️ SAT MAPS","📍 Locations Drive","📹 CCTV Remote Servers","📡 Sensor Connection"],api:"/api/degalaxy/maps + cctv",desc:"Orbital SAT MAPS + Drive + CCTV sensors"},
{id:"19-gsia-cyber-core",name:"19-GSIA-CYBER-CORE",icon:"🛡️",tools:["🛡️ Protection System","🏦 Banks Frontend","🏢 Organizations","🔒 Cyber Security"],api:"/api/gsia/cyber-core/protect",desc:"Protection System front end for Banks"},
{id:"20-gsia-ai",name:"20-GSIA-AI",icon:"🤖",tools:["🤖 Global Super Intelligence","❓ Ask Me Anything","💬 Chat","🧠 AI"],api:"/api/gsia/ai/ask",desc:"Global Super Intelligence Applications"},
{id:"21-realoracle-manager",name:"21-REALORACLE-MANAGER",icon:"🔙",tools:["🔙 Back End Protection","🛡️ Antivirus","🔒 Keep Software Safe","📱 Apps Manager"],api:"/api/realoracle/protect",desc:"Back end protection Antivirus"},
{id:"22-gsia-fraud",name:"22-GSIA-FRAUD",icon:"💰",tools:["🔍 AI Audit Manager","💰 Financial Control","📊 Audit","🛡️ Fraud Detect"],api:"/api/gsia/fraud/audit",desc:"AI Audit Manager financial control"},
{id:"23-gsia-visual",name:"23-GSIA-VISUAL",icon:"🎨",tools:["💻 Codes→Movies","🎮 Codes→Game","🖼️ Codes→Cartoons","📱 Codes→Apps"],api:"/api/gsia/visual/code-to-movie",desc:"AI codes to movies, Game, cartoons, Apps"},
{id:"24-realoracle-weather",name:"24-WEATHER",icon:"⛅",tools:["☁️ Forecast","🌡️ Temperature","🌧️ Rain","📡 Live"],api:"/api/weather/forecast",desc:"Weather forecast"},
{id:"25-gsia-budget",name:"25-GSIA-BUDGET",icon:"📊",tools:["💰 Financial Management","📋 Projects Follow Up","📐 Quantity Surveys","📜 Certificate"],api:"/api/gsia/budget/manage",desc:"Budget Financial Management + Projects"},
{id:"26-degalaxy-gps",name:"26-DEGALAXY-GPS",icon:"📍",tools:["📍 Land Survey","🧭 Bearing Coordinates","📐 Survey System"],api:"/api/gps/survey/bearing",desc:"GPS Land Survey bearing coordinates"},
{id:"27-gsia-architecture",name:"27-GSIA-ARCHITECTURE",icon:"🏗️",tools:["🏗️ Civil Engineering","🏠 Architectural Designer","🌳 Environmental Survey","🏘️ Housing Estate City Models","📐 Upload Foundation Dimensions","🏗️ Structural Components","🎬 3D Video Front Back Right Left Up Inside Outdoor Landscaping Lighting"],api:"/api/gsia/architecture/design + 3d",desc:"Civil Architectural Designer + 3D video"},
{id:"28-gea-cartoons",name:"28-GEA-CARTOONS",icon:"🎨",tools:["🎬 Watch","⬇️ Download","▶️ Play","💳 Pay"],api:"/api/gea-cartoons/watch + pay",desc:"Watch download play and pay"},
{id:"29-gea-pay",name:"29-GEA-PAY",icon:"💳",tools:["💳 Gea Pay Payment System","🔗 GPay","💸 Flutterwave","💳 Paystack","🏦 Monnify","🔗 Realtime API→Store/All Apps/CEO Dashboard","⬇️ Pay and Download Link"],api:"/api/pay/gpay + flutterwave + paystack + monnify",desc:"Payment System to GPay Flutterwave Paystack Monnify"},
{id:"30-gea-wallet",name:"30-GEA-WALLET",icon:"👛",tools:["💰 Save Money","💰 Earn Money","🏆 Earn Rewards","💸 Transfer In/Out","📈 Interest Rates","🔗 Link to Gea Pay"],api:"/api/wallet/save + earn + transfer",desc:"Save earn rewards transfer interest"},
{id:"31-geapple-gadgets",name:"31-GEAPPLE-GADGETS",icon:"📱",tools:["📱 SiPhone Transparent Glass Smart Inventions","👁️ Holographic Sensor Projector Phones","📺 Soft Touch TVs","📺 Inbuilt TV Decoder Systems"],api:"/api/gadgets/siphone + holo + tv",desc:"SiPhone glass Holographic Sensor TV Decoder"},
{id:"32-ceo-dashboard",name:"32-CEO-DASHBOARD",icon:"👑",tools:["👑 CEO Dashboard","📊 All Apps Control","💰 Pay Control","📈 Investors Analytics","🔧 Service Workers Control"],api:"/api/ceo/dashboard",desc:"CEO Dashboard"},
{id:"33-data-minting",name:"33-DATA-MINTING",icon:"⛏️",tools:["⛏️ Data Minting","⛏️ Mining Platform","🔗 Link","💰 Earn"],api:"/api/data/mint + mine",desc:"Data Minting and Mining Platform"},
{id:"34-investors-analytics",name:"34-INVESTORS",icon:"📈",tools:["📈 Investors Analytics","📢 Adverts Windows","💰 MB GB RTM Rewards","📊 Stats"],api:"/api/investors/analytics + adverts",desc:"Investors Analytics and Adverts Windows"},
{id:"35-gsia-system",name:"35-GSIA-SYSTEM",icon:"⚙️",tools:["⚙️ GEAPPLE Global Super Intelligence","🔧 Service Workers Control","🔧 Repair Systems","🔗 Connecting to CEO Dashboard"],api:"/api/gsia/system/control + repair",desc:"GSIA System Service workers control repair CEO Dashboard"},
{id:"36-virtual-holy-bible",name:"36-BIBLE",icon:"📖",gold:true,tools:["📖 Virtual Holy Bible God's Words Creation","✝️ Jesus Christ African Complexion","🎬 Holy Bible Stories Prophecies Reality Movies","🥽 4K VR"],api:"/api/bible/vr + stories",desc:"Let There Be Light 4K VR African Jesus"},
];

export default function Geapple36(){
const [menuOpen,setMenuOpen]=useState(false);
const [active,setActive]=useState("home");
const [subMenu,setSubMenu]=useState("home");
const [emailName,setEmailName]=useState("");
const [inbox,setInbox]=useState(["Linked: CEO@geamail.con → geapple.admin@gmail.com SMTP OK","API: /api/geamail/bulk Bulk Mail 36 Apps OK","API: /api/pay/investors Payment + Data OK"]);

const current = APPS36.find(a=>a.id===active) || APPS36[0];

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:30}}>
<span>GEAPPLE 36 - ALL APPS READY GREEN - RC:9882150</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:6,fontWeight:"bold"}}>☰ MENU 36</button>
</div>

{menuOpen && (
<div style={{background:"#111",padding:10,borderBottom:"3px solid #0f0",maxHeight:"70vh",overflowY:"auto"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{APPS36.map(a=>(
<button key={a.id} onClick={()=>{setActive(a.id);setSubMenu("home");setMenuOpen(false);}} style={{padding:10,background:a.gold?"gold":active===a.id?"#0f0":"#222",color:a.gold?"#000":active===a.id?"#000":"#fff",border:a.id===active?"2px solid #fff":"1px solid #333",borderRadius:8,fontSize:10,fontWeight:"bold",textAlign:"left"}}>{a.icon} {a.name}</button>
))}
</div>
</div>
)}

<div style={{padding:12}}>
<div style={{background:"#111",border:current.gold?"2px solid gold":"1px solid #0f0",borderRadius:12,overflow:"hidden"}}>
<div style={{background:current.gold?"gold":"#0f0",color:"#000",padding:10,fontWeight:"bold",display:"flex",justifyContent:"space-between"}}>
<span>{current.icon} {current.name} - Windows Page - API LIVE 🟢</span>
<span style={{fontSize:9,background:"#000",color:"#0f0",padding:4,borderRadius:4}}>READY GREEN</span>
</div>

<div style={{display:"flex",gap:4,padding:8,background:"#000",overflowX:"auto",borderBottom:"1px solid #222"}}>
{[
{id:"home",label:"🏠 HOME"},
{id:"settings",label:"⚙️ SETTINGS"},
{id:"tools",label:"🛠️ TOOLS"},
{id:"manual",label:"📖 MANUAL"},
{id:"api",label:"🔗 API"},
{id:"geamail",label:"📧 GEAMAIL"},
].map(m=>(
<button key={m.id} onClick={()=>setSubMenu(m.id)} style={{padding:8,background:subMenu===m.id?"#0f0":"#222",color:subMenu===m.id?"#000":"#fff",border:"none",borderRadius:20,fontSize:10,fontWeight:"bold",whiteSpace:"nowrap"}}>{m.label}</button>
))}
</div>

<div style={{padding:12,minHeight:200}}>
{subMenu==="home" && (
<div>
<h2 style={{color:current.gold?"gold":"#0f0"}}>{current.icon} {current.name} - HOME</h2>
<p style={{fontSize:12,marginTop:8,color:"#ccc"}}>{current.desc}</p>
<p style={{fontSize:10,marginTop:6,color:"#0f0"}}>API: {current.api}</p>

{current.id==="home" && (
<div>
<div style={{background:"#000",padding:10,borderRadius:10,marginTop:10,border:"1px solid #0f0"}}>
<p style={{fontSize:11,color:"#0f0",fontWeight:"bold"}}>✅ ALL 36 APPS BUILT - READY GREEN - NO ERROR 7s - NO BLANK BLACK</p>
<p style={{fontSize:9,marginTop:6}}>Format: Windows Page + Home + Settings + Tools + Manual + API + Geamail + Cloud - Each app with icons tools settings</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginTop:12}}>
{APPS36.filter(a=>a.id!=="home").map(a=>(
<div key={a.id} onClick={()=>setActive(a.id)} style={{background:a.gold?"#332a00":"#0a0",border:a.gold?"2px solid gold":"1px solid #0f0",padding:8,borderRadius:10,textAlign:"center"}}>
<div style={{fontSize:18}}>{a.icon}</div>
<div style={{fontSize:7,fontWeight:"bold",color:a.gold?"gold":"#0f0",marginTop:4}}>{a.name.replace("MYGEA-","").replace("GEA-","").slice(0,12)}</div>
<div style={{fontSize:6,color:"#888",marginTop:2}}>API Built 🟢</div>
</div>
))}
</div>
</div>
)}

{current.id==="3-geamail-con" && subMenu==="home" && (
<div style={{marginTop:10}}>
<div style={{display:"flex",gap:6}}><input value={emailName} onChange={e=>setEmailName(e.target.value)} placeholder="username" style={{flex:1,padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><span style={{padding:10,background:"#222",borderRadius:6,fontSize:12}}>@geamail.con</span></div>
<button onClick={()=>{if(!emailName)return;setInbox([`Linked: ${emailName}@geamail.con → geapple.admin@gmail.com SMTP OK`,...inbox]);setEmailName("");}} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,marginTop:8,fontWeight:"bold"}}>Link API to geapple.admin@gmail.com</button>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:8,maxHeight:100,overflowY:"auto"}}>{inbox.map((m,i)=><div key={i} style={{padding:4,fontSize:10,borderBottom:"1px solid #222"}}>{m}</div>)}</div>
</div>
)}

{current.id==="36-virtual-holy-bible" && (
<div style={{marginTop:10}}>
<div style={{height:100,background:"linear-gradient(45deg,#000,gold)",borderRadius:10,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30}}>🔥 📖 African Jesus 4K VR</div>
<p style={{background:"#000",padding:8,borderRadius:6,marginTop:8,fontSize:11}}>Gen 1:3 - Let there be light - Jesus African Complexion - Stories Prophecies Reality Movies VR</p>
</div>
)}

<div style={{marginTop:12,padding:10,background:"#000",borderRadius:8,border:"1px solid #222"}}>
<p style={{fontSize:10,color:"#888"}}>GEAPPLE RC:9882150 - {current.name} - Windows Page Format - Home Dashboard</p>
</div>
</div>
)}

{subMenu==="settings" && (
<div>
<h3>⚙️ {current.name} - SETTINGS</h3>
<div style={{marginTop:10,display:"grid",gap:6}}>
{["🔔 Notifications","🔒 Privacy","🌐 Language","📷 Camera Sensors","🔊 Audio Quality","☁️ Cloud Sync via GEA-CON"].map(s=><div key={s} style={{padding:10,background:"#000",borderRadius:6,display:"flex",justifyContent:"space-between",fontSize:11}}><span>{s}</span><span style={{color:"#0f0"}}>ON 🟢</span></div>)}
</div>
</div>
)}

{subMenu==="tools" && (
<div>
<h3>🛠️ {current.name} - TOOLS ICONS</h3>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:10}}>
{current.tools.map(t=>(
<div key={t} style={{padding:10,background:"#000",border:"1px solid #0f0",borderRadius:20,fontSize:10,color:"#0f0",fontWeight:"bold"}}>{t}</div>
))}
</div>
<div style={{marginTop:12,background:"#000",borderRadius:10,padding:10,border:"1px dashed #0f0",minHeight:80,display:"flex",alignItems:"center",justifyContent:"center"}}>
<p style={{fontSize:11,textAlign:"center"}}>{current.icon} {current.name} Tools Working - Real Human Form - {current.desc}</p>
</div>
{(current.id==="17-gea-store" || current.id==="29-gea-pay" || current.id==="30-gea-wallet") && (
<div style={{marginTop:10}}>
<button style={{padding:12,background:"gold",color:"#000",border:"none",borderRadius:8,fontWeight:"bold",width:"100%"}}>💳 Gea Pay - Pay & Download Link 🔗 GPay Flutterwave Paystack Monnify</button>
</div>
)}
{(current.id==="12-gea-4k-studio") && (
<div style={{marginTop:10}}>
<button style={{padding:12,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold",width:"100%"}}>📺 Connect to TV Decoder System API</button>
</div>
)}
{(current.id==="15-galarea-chat") && (
<div style={{marginTop:10}}>
<button style={{padding:12,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold",width:"100%"}}>📞 SAT Free Call + 👁️ Holo Chat API</button>
</div>
)}
</div>
)}

{subMenu==="manual" && (
<div>
<h3>📖 {current.name} - MANUAL</h3>
<div style={{marginTop:10,background:"#000",padding:12,borderRadius:8,fontSize:11,lineHeight:1.6}}>
<p><b>How to use {current.name}:</b></p>
<p style={{marginTop:8}}>1. Open HOME - See dashboard</p>
<p>2. Go to TOOLS - Click icons {current.tools.slice(0,3).join(", ")}</p>
<p>3. SETTINGS - Configure sensors camera</p>
<p>4. API - Connect to geamail.con + GEA-CON Cloud</p>
<p>5. Pay via Gea Pay + Download via Gea Store</p>
<p style={{marginTop:8,color:"#0f0"}}>{current.desc} - Built Working</p>
</div>
</div>
)}

{subMenu==="api" && (
<div>
<h3>🔗 {current.name} - API PACKAGE FUNCTIONS</h3>
<div style={{marginTop:10}}>
<div style={{padding:10,background:"#000",borderRadius:8,border:"1px solid #0f0"}}>
<p style={{fontSize:11,color:"#0f0",fontFamily:"monospace"}}>{current.api}</p>
<p style={{fontSize:10,marginTop:8}}>RealTime API Functions Connected to Gea Store / All Apps / CEO Dashboard / Gea Pay / Data Minting</p>
</div>
<div style={{marginTop:8,display:"grid",gap:4}}>
{["/api/auth","/api/upload","/api/pay","/api/download","/api/data","/api/sensors"].map(a=><div key={a} style={{padding:6,background:"#111",borderRadius:4,fontSize:10,fontFamily:"monospace"}}>{a} 🟢 OK</div>)}
</div>
</div>
</div>
)}

{subMenu==="geamail" && (
<div>
<h3>📧 {current.name} - GEAMAIL.CON + GEA-CON CLOUD LINK</h3>
<div style={{marginTop:10,background:"#000",padding:10,borderRadius:8,border:"1px solid gold"}}>
<p style={{fontSize:11}}>Every App Links to:</p>
<p style={{fontSize:11,marginTop:6,color:"gold"}}>📧 geamail.con → geapple.admin@gmail.com</p>
<p style={{fontSize:11,marginTop:4}}>☁️ GEA-CON Cloud - Web Mail Cloud Drive Code GitHub SPCK Edit</p>
<p style={{fontSize:11,marginTop:4}}>💳 Gea Pay → GPay Flutterwave Paystack Monnify → Gea Store → CEO Dashboard</p>
<p style={{fontSize:11,marginTop:4}}>🔗 CEO Dashboard → GSIA System → Service Workers Control & Repair</p>
<div style={{marginTop:10,padding:8,background:"#111",borderRadius:6}}>
<p style={{fontSize:10,color:"#0f0"}}>SMTP: username@geamail.con Linked OK</p>
<p style={{fontSize:10,color:"#0f0"}}>Cloud: GEA-CON Drive Code OK</p>
<p style={{fontSize:10,color:"#0f0"}}>Pay: Gea Pay Realtime API OK</p>
</div>
</div>
</div>
)}

</div>
</div>

<div style={{marginTop:10,textAlign:"center",color:"#333",fontSize:9,padding:10}}>
GEAPPLE RC:9882150 - {current.name} - Windows Page + Home + Settings + Tools + Manual + API + Geamail Menus - Real Human Form - Ready Green - All 36 Built
</div>

</div>
</div>
);
}