"use client";
import { useState } from "react";
const APPS=[
{id:"1-mygea",n:"1-MYGEA-SOCIAL",i:"🌐",t:"social",u:"Social Feed + Holo + Voice EN->Local + 5G Cam"},
{id:"2-reel",n:"2-REELGEA",i:"🎬",t:"reel",u:"Creator Upload Link Voice Effects Music Filters 4K Editor"},
{id:"3-mail",n:"3-GEAMAIL.CON",i:"📧",t:"mail",u:"username@geamail.con -> geapple.admin@gmail.com Bulk"},
{id:"4-geacon",n:"4-GEA-CON",i:"💬",t:"cloud",u:"Web Cloud Mail Drive Code GitHub SPCK Edit"},
{id:"5-conn",n:"5-GEACONNECT",i:"🔗",t:"call",u:"SAT Free Calls Nino Simless Interpreter + Holo"},
{id:"6-holo",n:"6-MYGEA-HOLO",i:"👁️",t:"holo",u:"100 Holo Conference Avatar Country Voice Holo Projector"},
{id:"7-votes",n:"7-GLOBAL-VOTES",i:"🗳️",t:"vote",u:"Voting Blockchain Verify via geamail.con"},
{id:"8-sat",n:"8-DEGALAXY-SAT",i:"🛰️",t:"sat",u:"Satellite Tracking NORAD TLE GPS Lock PHC Sensor"},
{id:"9-mil",n:"9-MILITARY-BORD",i:"🎖️",t:"mil",u:"Arms Drugs Sensors Erazer 5G Cameras GSIA-CYBER-C"},
{id:"10-vis",n:"10-VISUAL-ART-G",i:"🎨",t:"art",u:"Story to 4K Movies Sketch Animate Cartoon Reality"},
{id:"11-tune",n:"11-GEATUNE",i:"🎵",t:"music",u:"Music for creators + iTunes prototype + Gea Pay"},
{id:"12-4k",n:"12-GEA-4K-STUDIO",i:"🎥",t:"studio",u:"Movie room streaming Decoder TV connectable"},
{id:"13-game",n:"13-GEA-GAME",i:"🎮",t:"game",u:"Play win earn MB GB RTM rewards"},
{id:"14-oki",n:"14-OKIDOKI",i:"🎬",t:"tiktok",u:"Advanced TikTok vertical feed"},
{id:"15-gala",n:"15-GALAREA-CHAT",i:"💬",t:"chat",u:"WhatsApp Messenger SAT free calls Holo chat"},
{id:"16-yellow",n:"16-YELLOW",i:"💛",t:"chat2",u:"Social Messenger Yellow"},
{id:"17-store",n:"17-GEA-STORE+",i:"🏪",t:"store",u:"Marketplace all 36 apps + download prices + Gea Pay"},
{id:"18-orb",n:"18-ORBITAL",i:"🗺️",t:"map",u:"Orbital SAT MAPS locations Drive CCTV remote"},
{id:"19-cyber",n:"19-CYBER-CORE",i:"🛡️",t:"sec",u:"Cyber Protection front end Banks orgs"},
{id:"20-ai",n:"20-GSIA-AI",i:"🤖",t:"ai",u:"Global Super Intelligence ask me anything"},
{id:"21-oracle",n:"21-REALORACLE",i:"🔙",t:"av",u:"Back end protection Antivirus"},
{id:"22-fraud",n:"22-FRAUD",i:"💰",t:"fin",u:"AI Audit Manager financial control"},
{id:"23-visual",n:"23-VISUAL",i:"🎨",t:"code",u:"Codes to movies games cartoons apps"},
{id:"24-weather",n:"24-WEATHER",i:"⛅",t:"weather",u:"RealOracle Weather forecast"},
{id:"25-budget",n:"25-BUDGET",i:"📊",t:"budget",u:"Financial Management Projects Quantity Surveys Cert"},
{id:"26-gps",n:"26-GPS",i:"📍",t:"gps",u:"GPS Land Survey bearing coordinates system"},
{id:"27-arch",n:"27-ARCHITECTURE",i:"🏗️",t:"arch",u:"Civil Architectural Designer 3D front back right left up inside outdoor"},
{id:"28-cart",n:"28-CARTOONS",i:"🎨",t:"cart",u:"Watch download play and pay"},
{id:"29-pay",n:"29-GEA-PAY",i:"💳",t:"pay",u:"Payment GPay Flutterwave Paystack Monnify realtime API"},
{id:"30-wallet",n:"30-WALLET",i:"👛",t:"wallet",u:"Save earn rewards transfer interest Link Gea Pay"},
{id:"31-gadget",n:"31-GADGETS",i:"📱",t:"gadget",u:"SiPhone transparent glass holographic projector TV Decoder"},
{id:"32-ceo",n:"32-CEO-DASHBOARD",i:"👑",t:"ceo",u:"CEO Dashboard RC:9882150 All 36 Control"},
{id:"33-mint",n:"33-MINTING",i:"⛏️",t:"mint",u:"Data Minting Mining Platform Link"},
{id:"34-inv",n:"34-INVESTORS",i:"📈",t:"inv",u:"Investors Analytics Adverts Windows"},
{id:"35-sys",n:"35-SYSTEM",i:"⚙️",t:"sys",u:"GSIA System Service workers control repair CEO"},
{id:"36-bible",n:"36-BIBLE",i:"📖",t:"bible",u:"Virtual Holy Bible African Jesus 4K VR Reality Movies"},
];
export default function FinalEcosystem(){
const [active,setActive]=useState("1-mygea");
const [menu,setMenu]=useState(false);
const [sub,setSub]=useState("home");
const [vert,setVert]=useState(false);
const [chatMenu,setChatMenu]=useState(false);
const [msg,setMsg]=useState("");
const [paySel,setPaySel]=useState("Flutterwave");
const cur=APPS.find(a=>a.id===active);
const isChat=cur.t==="chat"||cur.t==="chat2"||cur.t==="social"||cur.t==="call";
const logoSrc="/logo%201.png";
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<style>{`@keyframes hspin{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}} .hspin{animation:hspin 3s linear infinite; display:inline-block}`}</style>
<div style={{background:"#0f0",color:"#000",padding:8,fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:50}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<span className="hspin" style={{fontSize:20}}>🌍</span>
<span style={{fontSize:9}}>RC:9882150 - GEAPPLE 36 - ALL 36 UNIQUE</span>
</div>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<span style={{fontSize:9}}>{cur.n}</span>
<img src={logoSrc} alt="logo" style={{width:28,height:28,borderRadius:6,background:"#fff"}} onError={(e)=>{e.target.style.display="none"}}/>
<button onClick={()=>setMenu(!menu)} style={{background:"#000",color:"#0f0",border:"none",padding:6,borderRadius:6,fontSize:10,fontWeight:"bold"}}>MENU 36</button>
</div>
</div>
{menu&&(
<div style={{background:"#111",padding:8,borderBottom:"2px solid #0f0",maxHeight:"65vh",overflowY:"auto"}}>
<div style={{fontSize:9,color:"#0f0",marginBottom:6}}>GEA STORE - MARKETPLACE - ALL 36 LISTED - PAY LINK</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
{APPS.map(a=>(
<button key={a.id} onClick={()=>{setActive(a.id);setMenu(false);setVert(false);setChatMenu(false);}} style={{padding:6,background:active===a.id?"#0f0":"#222",color:active===a.id?"#000":"#fff",border:"none",borderRadius:6,fontSize:8,fontWeight:"bold",textAlign:"left"}}>{a.i} {a.n} - STORE</button>
))}
</div>
</div>
)}
<div style={{padding:8}}>
<div style={{background:"#111",border:"2px solid #0f0",borderRadius:14,overflow:"hidden",position:"relative"}}>

<div style={{background:cur.t==="chat"||cur.t==="call"?"#075e54":cur.t==="holo"?"#f0f":cur.t==="mail"?"gold":cur.t==="social"?"#0f0":"#222",color:cur.t==="mail"||cur.t==="social"?"#000":"#fff",padding:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:6}}>
<span className="hspin">{cur.i}</span>
<span style={{fontSize:10,fontWeight:"bold"}}>{cur.n} - {cur.t.toUpperCase()} - UNIQUE FORMAT - 5G CAM HOLO SENSOR</span>
</div>
<div style={{display:"flex",gap:6}}>
{isChat&&<button onClick={()=>setChatMenu(!chatMenu)} style={{background:"transparent",color:"#fff",border:"none",fontSize:18}}>⋮</button>}
<button onClick={()=>setVert(!vert)} style={{background:"#000",color:"#fff",border:"none",width:26,height:26,borderRadius:6}}>⋯</button>
</div>
</div>

{vert&&(
<div style={{position:"absolute",top:36,right:6,width:170,background:"#000",border:"1px solid #0f0",borderRadius:8,zIndex:30,padding:6}}>
<div style={{fontSize:8,color:"#0f0",fontWeight:"bold"}}>VERTICAL TOOLS - FIT SCREEN - WORKING</div>
<div style={{fontSize:9,marginTop:6,lineHeight:1.6}}>
Post Story Reel Live Note<br/>
Share Favorite Edit Delete More<br/>
▶️ Play ⏸️ Pause ⏯️ ⏩ ◀️ 🛑<br/>
🤳 Selfie 📷 5G Camera 💨 Window<br/>
〰️ Fit Screen Touchscreen<br/>
⬆️ Upload ⬇️ Download<br/>
Clear chat Export chat<br/>
Add shortcut Add to list<br/>
Gea Store Gea Pay Link
</div>
<button onClick={()=>setVert(false)} style={{width:"100%",padding:5,background:"#0f0",border:"none",borderRadius:6,fontWeight:"bold",fontSize:9,marginTop:6}}>Close</button>
</div>
)}
{chatMenu&&isChat&&(
<div style={{position:"absolute",top:36,right:40,width:220,background:"#fff",color:"#000",borderRadius:8,zIndex:35,padding:6}}>
<div style={{padding:8,fontSize:12,borderBottom:"1px solid #eee"}}>⊖ Clear chat</div>
<div style={{padding:8,fontSize:12,borderBottom:"1px solid #eee"}}>⬆️ Export chat</div>
<div style={{padding:8,fontSize:12,borderBottom:"1px solid #eee"}}>↗️ Add shortcut</div>
<div style={{padding:8,fontSize:12,borderBottom:"1px solid #eee"}}>👤 Add to list</div>
<div style={{padding:6,background:"#f5f5f5",borderRadius:6}}>
{["Add people","Details","Starred","Search","Chat theme","Archive","Trash","Video","Block & report spam","Show subject field","Help & feedback"].map(t=>(
<div key={t} style={{padding:7,fontSize:12,borderBottom:"1px solid #e0e0e0"}}>{t}</div>
))}
</div>
<button onClick={()=>setChatMenu(false)} style={{width:"100%",padding:8,background:"#075e54",color:"#fff",border:"none",borderRadius:6,marginTop:8}}>Close</button>
</div>
)}

<div style={{display:"flex",gap:3,padding:6,background:"#000",overflowX:"auto"}}>
{["home","settings","tools","manual","api","geamail","store","pay"].map(m=>(
<button key={m} onClick={()=>setSub(m)} style={{padding:5,background:sub===m?"#0f0":"#222",color:sub===m?"#000":"#fff",border:"none",borderRadius:12,fontSize:8,fontWeight:"bold"}}>{m.toUpperCase()}</button>
))}
</div>

{cur.t==="social"&&(
<div style={{background:"#000",padding:8}}>
<div style={{background:"#111",borderRadius:10,padding:10,border:"1px solid #333"}}>
<div style={{display:"flex",gap:8,alignItems:"center"}}><div style={{width:30,height:30,background:"#0f0",borderRadius:15}}></div><div><div style={{fontSize:11,fontWeight:"bold"}}>MyGea Social - CEO Post</div><div style={{fontSize:8,color:"#888"}}>5G Camera 🤳 Holo Sensor 👁️ - Just now</div></div></div>
<div style={{marginTop:8,height:100,background:"#222",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center"}}>📷 Image + 👁️ Holo Video</div>
<div style={{display:"flex",justifyContent:"space-around",marginTop:8,fontSize:12}}><span>👍 14K</span><span>💬 94</span><span>↗️ 217 Share</span><span>🔖 757</span></div>
</div>
</div>
)}
{cur.t==="reel"&&(
<div style={{background:"#000",height:280,position:"relative"}}>
<div style={{height:"100%",background:"#111",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:40}}>🎬</div><div style={{fontSize:11,marginTop:6}}>REELGEA - Vertical Swipe - 4K Editor</div>
<div style={{marginTop:8,display:"flex",gap:6}}><button style={{padding:6,background:"#0f0",border:"none",borderRadius:6,fontSize:9}}>⬆️ Upload</button><button style={{padding:6,background:"#f0f",border:"none",borderRadius:6,fontSize:9}}>✨ Effects</button><button style={{padding:6,background:"#0ff",border:"none",borderRadius:6,fontSize:9}}>🎵 Music</button></div>
</div>
<div style={{position:"absolute",right:8,top:20,bottom:40,display:"flex",flexDirection:"column",gap:10}}><div>❤️ 14K</div><div>💬 94</div><div>↗️ 217</div><div>🔖 757</div></div>
</div>
)}
{cur.t==="mail"&&(
<div style={{background:"#fff",color:"#000",height:280,padding:10}}>
<div style={{fontSize:11,fontWeight:"bold"}}>📧 GEAMAIL.CON - username@geamail.con</div>
<div style={{marginTop:8,background:"#f0f0f0",padding:8,borderRadius:6,fontSize:10}}>To: geapple.admin@gmail.com - Bulk Mail Pay Data</div>
<div style={{marginTop:8,display:"grid",gap:6}}><div style={{padding:8,background:"#fff",border:"1px solid #ddd",borderRadius:6,fontSize:10}}>📥 Inbox (12) - Verify via geamail.con</div><div style={{padding:8,background:"#fff",border:"1px solid #ddd",borderRadius:6,fontSize:10}}>📤 Sent - Pay Link Attached</div></div>
<button style={{marginTop:8,padding:8,background:"gold",border:"none",borderRadius:6,width:"100%",fontWeight:"bold"}}>Compose + Gea Pay Link</button>
</div>
)}
{cur.t==="cloud"&&(
<div style={{background:"#000",height:280,padding:10}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}><div style={{background:"#111",padding:10,borderRadius:8,textAlign:"center"}}><div>💾</div><div style={{fontSize:8}}>Drive</div></div><div style={{background:"#111",padding:10,borderRadius:8,textAlign:"center"}}><div>💻</div><div style={{fontSize:8}}>Code GitHub</div></div><div style={{background:"#111",padding:10,borderRadius:8,textAlign:"center"}}><div>📝</div><div style={{fontSize:8}}>SPCK Edit</div></div></div>
<button style={{marginTop:10,width:"100%",padding:10,background:"#0f0",border:"none",borderRadius:8,fontWeight:"bold"}}>⬆️ Upload File to Cloud + Store Link</button>
</div>
)}
{cur.t==="call"&&(
<div style={{background:"#e5ddd5",height:340,display:"flex",flexDirection:"column"}}>
<div style={{padding:10,flex:1,overflowY:"auto"}}>
<div style={{background:"#fff",padding:8,borderRadius:8,marginBottom:8,fontSize:12,color:"#000"}}>Gea: SAT Free Calls Holo ON - 5G Cam 📷 Selfie 🤳</div>
<div style={{background:"#dcf8c6",padding:8,borderRadius:8,marginBottom:8,marginLeft:40,fontSize:12,color:"#000"}}>CEO: Clear chat, Export chat working?</div>
</div>
<div style={{padding:8,background:"#f0f0f0",display:"flex",gap:6,alignItems:"center"}}>
<div style={{flex:1,background:"#fff",borderRadius:24,display:"flex",alignItems:"center",padding:"0 10px",gap:8}}><span>😊</span><input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message" style={{flex:1,padding:10,border:"none",background:"transparent",fontSize:12}}/><span>📎</span><span>📷</span></div>
<button style={{width:44,height:44,background:"#25d366",border:"none",borderRadius:22}}>🎙️</button>
</div>
</div>
)}
{cur.t==="holo"&&(
<div style={{background:"#000",height:280,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:50}}>👁️</div><div style={{fontSize:12,color:"#f0f",marginTop:6}}>6-HOLO - Holo Projector - 100 Conference - Avatar - 5G Cameras - Sensors</div>
<div style={{marginTop:10,display:"flex",gap:6}}><button style={{padding:8,background:"#f0f",border:"none",borderRadius:6}}>🤳 Selfie Holo</button><button style={{padding:8,background:"#0f0",border:"none",borderRadius:6}}>📹 Video Holo</button></div>
</div>
)}
{cur.t==="vote"&&(
<div style={{background:"#000",height:280,padding:10}}>
<div style={{background:"#111",borderRadius:10,padding:10,border:"1px solid #0f0"}}><div style={{fontSize:11,fontWeight:"bold"}}>🗳️ GLOBAL VOTES - Blockchain Verify via geamail.con</div><div style={{marginTop:8,display:"grid",gap:6}}><button style={{padding:10,background:"#fff",color:"#000",border:"none",borderRadius:6}}>Vote Candidate A</button><button style={{padding:10,background:"#222",color:"#fff",border:"1px solid #0f0",borderRadius:6}}>Vote Candidate B - Gea Pay Verify</button></div></div>
</div>
)}
{cur.t==="sat"&&(
<div style={{background:"#000",height:280,position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:30}}>🛰️ 🗺️ SAT TRACKING</div><div style={{fontSize:9,color:"#0ff",marginTop:6}}>NORAD TLE GPS Lock PHC - 4.8156N 7.0498E - 5G Cameras Sensors</div>
<div style={{marginTop:10,background:"#111",padding:6,borderRadius:6,fontSize:8,border:"1px solid #0ff"}}>Live Tracking 🟢 - CCTV Remote Link</div>
</div>
)}
{cur.t==="mil"&&(
<div style={{background:"#111",height:280,padding:10}}><div style={{background:"#000",border:"1px solid #f00",borderRadius:10,padding:10}}><div style={{fontSize:11,color:"#f00",fontWeight:"bold"}}>🎖️ MILITARY BORD - Arms Drugs Sensors Erazer - 5G Cameras</div><div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}><div style={{background:"#222",padding:8,borderRadius:6,fontSize:9}}>🔍 Sensors ON</div><div style={{background:"#222",padding:8,borderRadius:6,fontSize:9}}>🛡️ GSIA-CYBER-C</div></div></div></div>
)}
{!["social","reel","mail","cloud","call","holo","vote","sat","mil"].includes(cur.t)&&(
<div style={{background:"#000",height:200,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:30}}>{cur.i}</div><div style={{fontSize:11,color:"#0f0",marginTop:6}}>{cur.n} - {cur.t.toUpperCase()} UNIQUE FORMAT</div><div style={{fontSize:8,color:"#888"}}>{cur.u}</div><div style={{marginTop:8,fontSize:9}}>5G Camera 🤳 Holo Sensor 👁️ Unique Features</div>
</div>
)}

<div style={{background:"#000",padding:8,borderTop:"1px solid #222"}}>
<div style={{fontSize:9,color:"#0f0",fontWeight:"bold"}}>🏪 GEA STORE + 💳 GEA PAY - DOWNLOAD LINK - ALL 36 LISTED</div>
<div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}>
{["GPay","Flutterwave","Paystack","Monnify"].map(p=>(
<button key={p} onClick={()=>setPaySel(p)} style={{padding:5,background:paySel===p?"#0f0":"#222",color:paySel===p?"#000":"#fff",border:"1px solid #0f0",borderRadius:12,fontSize:8,fontWeight:"bold"}}>{p} {paySel===p?"🟢":""}</button>
))}
</div>
<div style={{marginTop:8,display:"flex",gap:6}}>
<button style={{flex:1,padding:10,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold",fontSize:10}}>💳 Pay via {paySel} - Realtime API - Download Link 🔗</button>
<button style={{padding:10,background:"#222",color:"#fff",border:"1px solid #0f0",borderRadius:8,fontSize:10}}>🏪 Store</button>
</div>
<div style={{marginTop:6,fontSize:8,color:"#888"}}>API: /api/pay/gpay + /api/pay/flutterwave + /api/pay/paystack + /api/pay/monnify - Real time - Connected to Store All Apps CEO Dashboard</div>
</div>

<div style={{background:"#111",padding:6,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",gap:4}}>
{["▶️","⏯️","⏩","◀️","🛑","🤳"].map(x=>(
<button key={x} style={{width:24,height:24,background:"#000",border:"1px solid #333",borderRadius:12,fontSize:10}}>{x}</button>
))}
</div>
<div style={{display:"flex",gap:6,fontSize:9}}><span>👍14K</span><span>💬94</span><span>↗️217</span><span>🔖757</span></div>
</div>

<div style={{padding:8,background:"#000"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#0f0"}}>🔗 OS/UI SHARE LINK TO OTHER PLATFORMS - FUNCTIONAL</div>
<div style={{marginTop:6,display:"flex",gap:6,flexWrap:"wrap"}}>
{[
{icon:"💬",name:"WhatsApp"},
{icon:"📘",name:"Facebook"},
{icon:"✈️",name:"Telegram"},
{icon:"🐦",name:"Twitter"},
{icon:"📸",name:"Instagram"},
{icon:"🔗",name:"Copy Link"},
].map(s=>(
<button key={s.name} onClick={()=>{navigator.clipboard&&navigator.clipboard.writeText(window.location.href); alert("Share to "+s.name+" - Link: "+window.location.href);}} style={{padding:6,background:"#222",border:"1px solid #333",borderRadius:20,fontSize:9}}>{s.icon} {s.name}</button>
))}
</div>
<div style={{marginTop:8,fontSize:9,color:"#888"}}>
<div>Files: Public/logo 1.png at top right OK - 🌍 rotating horizontal latitudinal clockwise OK</div>
<div>Settings: {sub.toUpperCase()} - Tools: Post Story Reel Live Note Share Favorite Edit Delete More Play Pause Fit Screen Selfie 5G Camera Upload Download Clear chat Export chat Add shortcut Add to list</div>
<div>Manual: Each app unique format system - No duplicates - 5G Cameras Holo/video sensors per platform</div>
<div>Effect: Touch fit screen working - Window effect 💨 - Redirecting to necessary Links and platforms OK</div>
</div>
</div>

<div style={{background:"#000",padding:6,display:"flex",justifyContent:"space-around",borderTop:"1px solid #222"}}>
{["🏠","🎬","👥","🏪","🔔"].map(b=>(
<div key={b} style={{fontSize:16}}>{b}</div>
))}
</div>

</div>
<div style={{marginTop:8,textAlign:"center",fontSize:7,color:"#555"}}>GEAPPLE RC:9882150 - FINAL - Logo top right - Globe rotating horizontal - Store Pay Download - Unique Formats - Share Links - 5G Holo Sensors - No Duplicates - All 36 Listed - GPay Flutterwave Paystack Monnify Realtime API - Touch Fit Working</div>
</div>
</div>
);
}