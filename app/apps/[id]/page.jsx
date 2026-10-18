"use client";
import { useState } from "react";

const APPS12 = [
{id:"1-mygea-social",name:"1-MYGEA-SOCIAL",icon:"🌐",desc:"Social + Holo Projector + Voice EN→Local + Sensors Camera",tools:["🌐 Feed","👁️ Holo","🗣️ Translate","📷 Sensors"],color:"#0f0"},
{id:"2-reelgea",name:"2-REELGEA",icon:"🎬",desc:"Creator Upload Link Voice Effects Music Filters 4K Editor",tools:["📤 Upload Link","🎙️ Voice","✨ Effects","🎵 Music","🎨 Filters"],color:"#0ff"},
{id:"3-geamail-con",name:"3-GEAMAIL.CON",icon:"📧",desc:"username@geamail.con → geapple.admin@gmail.com Bulk Mail Pay Data",tools:["📧 @geamail.con","🔗 Gmail Link","📦 Bulk 36","💳 Pay"],color:"gold"},
{id:"4-gea-con",name:"4-GEA-CON",icon:"💬",desc:"Web Cloud Mail Drive Code GitHub SPCK Edit",tools:["🌐 Web","📧 Mail","☁️ Cloud","💾 Drive","💻 Code"],color:"#0f0"},
{id:"5-geaconnect",name:"5-GEACONNECT",icon:"🔗",desc:"SAT Free Calls Nino Simless Interpreter",tools:["📞 SAT Free Calls","🗣️ Interpreter","📡 Nino Simless"],color:"#0ff"},
{id:"6-mygea-holo",name:"6-MYGEA-HOLO",icon:"👁️",desc:"100 Holo Conference Avatar Country Voice EN→Local",tools:["👥 100 Holo","🌍 Avatar Country","🗣️ Voice"],color:"#f0f"},
{id:"7-global-votes",name:"7-GLOBAL-VOTES",icon:"🗳️",desc:"Voting Blockchain Verify via geamail.con",tools:["🗳️ Create Vote","✅ Vote","🔗 Blockchain"],color:"#0f0"},
{id:"8-degalaxy-sat-",name:"8-DEGALAXY-SAT",icon:"🛰️",desc:"Satellite Tracking NORAD TLE GPS Lock PHC",tools:["🛰️ Tracking","📡 NORAD TLE","📍 GPS Lock"],color:"#0ff"},
{id:"9-military-bord",name:"9-MILITARY-BORD",icon:"🎖️",desc:"Arms Drugs Sensors Erazer 5G Cameras GSIA-CYBER-C",tools:["🔫 Arms Detect","💊 Drugs Detect","📹 Sensors"],color:"#f00"},
{id:"10-visual-art-g",name:"10-VISUAL-ART-G",icon:"🎨",desc:"Story to 4K Movies Sketch Animate Cartoon to Reality Jesus African",tools:["📖 Story→4K","✏️ Sketch","🎬 Animate","🖼️ Reality"],color:"#f0f"},
{id:"11-geatune",name:"11-GEATUNE",icon:"🎵",desc:"Music for creators + iTunes prototype",tools:["🎵 Create Music","🎙️ Record","🎧 Mix","📀 iTunes Prototype"],color:"#0ff"},
{id:"12-gea-4k-studio",name:"12-GEA-4K-STUDIO",icon:"🎥",desc:"Movie room streaming + Decoder TV connectable",tools:["🎬 Movie Room","📺 Streaming","🔌 Decoder","📡 TV Connect"],color:"gold"},
];

export default function Batch1_12(){
const [active,setActive]=useState("1-mygea-social");
const [menu36,setMenu36]=useState(false);
const [subMenu,setSubMenu]=useState("home");
const [vertTools,setVertTools]=useState(false);
const [playing,setPlaying]=useState(false);
const [fitScreen,setFitScreen]=useState(false);
const [likes,setLikes]=useState(14000);
const [liked,setLiked]=useState(false);
const [comments,setComments]=useState(94);
const [shares,setShares]=useState(217);
const [saves,setSaves]=useState(757);

const cur = APPS12.find(a=>a.id===active) || APPS12[0];

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif",position:"relative"}}>

<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:40}}>
<span style={{fontSize:12}}>GEAPPLE 36 - BATCH 1: 1-12 - READY GREEN - RC:9882150</span>
<button onClick={()=>setMenu36(!menu36)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:6,fontWeight:"bold",fontSize:10}}>☰ MENU 36</button>
</div>

{menu36 && (
<div style={{background:"#111",padding:10,borderBottom:"3px solid #0f0",maxHeight:"60vh",overflowY:"auto",position:"sticky",top:44,zIndex:30}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{APPS12.map(a=>(
<button key={a.id} onClick={()=>{setActive(a.id);setSubMenu("home");setMenu36(false);setVertTools(false);}} style={{padding:10,background:active===a.id?"#0f0":"#222",color:active===a.id?"#000":"#fff",border:"1px solid #333",borderRadius:8,fontSize:9,fontWeight:"bold",textAlign:"left"}}>{a.icon} {a.name}</button>
))}
<button onClick={()=>{setMenu36(false);}} style={{padding:10,background:"#333",color:"#888",borderRadius:8,fontSize:9}}>Close - Batch 2 (13-24) Next - Batch 3 (25-36) Next</button>
</div>
</div>
)}

<div style={{padding:10}}>

<div style={{background:"#111",border:`2px solid ${cur.color}`,borderRadius:16,overflow:"hidden",position:"relative"}}>

<div style={{background:cur.color,color:"#000",padding:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
<span style={{fontSize:16}}>{cur.icon}</span>
<div>
<div style={{fontWeight:"bold",fontSize:12}}>{cur.name} - Windows Page</div>
<div style={{fontSize:8}}>API LIVE 🟢 Ready Green | Batch 1/3</div>
</div>
</div>
<div style={{display:"flex",gap:6,alignItems:"center"}}>
<div style={{background:"#000",color:cur.color,padding:4,borderRadius:4,fontSize:7,fontWeight:"bold"}}>READY GREEN</div>
<button onClick={()=>setVertTools(!vertTools)} style={{background:"#000",color:"#fff",border:"none",width:32,height:32,borderRadius:8,fontSize:18,fontWeight:"bold"}}>⋯</button>
</div>
</div>

{vertTools && (
<div style={{position:"absolute",top:44,right:8,width:180,background:"#000",border:`1px solid ${cur.color}`,borderRadius:12,zIndex:20,padding:6,maxHeight:400,overflowY:"auto"}}>
<div style={{fontSize:9,color:cur.color,fontWeight:"bold",padding:6,borderBottom:"1px solid #222"}}>〰️ 💨 VERTICAL TOOLS - Touch Fit Window</div>
{[
{icon:"✏️",label:"Post"},
{icon:"⊕",label:"Story"},
{icon:"🎬",label:"Reel"},
{icon:"📹",label:"Live"},
{icon:"💬",label:"Note"},
].map(t=>(
<div key={t.label} style={{padding:8,display:"flex",gap:8,alignItems:"center",borderBottom:"1px solid #111",fontSize:11}}><span>{t.icon}</span><span>{t.label}</span></div>
))}
<div style={{height:6,background:"#111",margin:"6px 0"}}></div>
{[
{icon:"↗️",label:"Share"},
{icon:"♡",label:"Favorite"},
{icon:"✂️",label:"Edit"},
{icon:"🗑️",label:"Delete"},
{icon:"⋯",label:"More"},
].map(t=>(
<div key={t.label} style={{padding:8,display:"flex",gap:8,alignItems:"center",borderBottom:"1px solid #111",fontSize:11}}><span>{t.icon}</span><span>{t.label}</span></div>
))}
<div style={{height:6,background:"#111",margin:"6px 0"}}></div>
{[
{icon:"▶️",label:"Play",action:()=>setPlaying(true)},
{icon:"⏸️",label:"Pause",action:()=>setPlaying(false)},
{icon:"⏯️",label:"Play/Pause",action:()=>setPlaying(!playing)},
{icon:"⏩",label:"Forward"},
{icon:"◀️",label:"Rewind"},
{icon:"🛑",label:"Stop",action:()=>setPlaying(false)},
{icon:"🤳",label:"Selfie / Holo"},
{icon:"💨",label:"Window Effect",action:()=>setFitScreen(!fitScreen)},
{icon:"〰️",label:"Touch to Fit Screen",action:()=>setFitScreen(!fitScreen)},
].map(t=>(
<button key={t.label} onClick={t.action} style={{width:"100%",padding:8,display:"flex",gap:8,alignItems:"center",background:"#111",border:"none",color:"#fff",borderRadius:6,marginBottom:4,fontSize:11,textAlign:"left"}}><span>{t.icon}</span><span>{t.label}</span></button>
))}
<button onClick={()=>setVertTools(false)} style={{width:"100%",padding:8,background:cur.color,color:"#000",border:"none",borderRadius:6,fontWeight:"bold",fontSize:10,marginTop:6}}>Close ✕</button>
</div>
)}

<div style={{display:"flex",gap:4,padding:8,background:"#000",overflowX:"auto",borderBottom:"1px solid #222"}}>
{["home","settings","tools","manual","api","geamail"].map(m=>(
<button key={m} onClick={()=>setSubMenu(m)} style={{padding:7,background:subMenu===m?cur.color:"#222",color:subMenu===m?"#000":"#fff",border:"none",borderRadius:20,fontSize:9,fontWeight:"bold",textTransform:"uppercase"}}>{m==="home"?"🏠 HOME":m==="settings"?"⚙️ SETTINGS":m==="tools"?"🛠️ TOOLS":m==="manual"?"📖 MANUAL":m==="api"?"🔗 API":"📧 GEAMAIL"}</button>
))}
</div>

<div style={{background:"#000",position:"relative",height:fitScreen?360:220,transition:"0.3s",overflow:"hidden",borderBottom:`1px solid ${cur.color}`}}>
<div style={{width:"100%",height:"100%",background:`linear-gradient(135deg,#000,${cur.color}33)`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",position:"relative"}}>
<div style={{fontSize:40}}>{cur.icon}</div>
<div style={{fontSize:12,fontWeight:"bold",marginTop:6,color:cur.color}}>{cur.name} Window</div>
<div style={{fontSize:9,color:"#888",marginTop:4,textAlign:"center",padding:"0 20px"}}>{cur.desc}</div>
{playing && <div style={{position:"absolute",top:10,left:10,background:"#0f0",color:"#000",padding:4,borderRadius:4,fontSize:8,fontWeight:"bold"}}>▶️ PLAYING</div>}
<div style={{position:"absolute",bottom:10,left:10,right:10,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<button onClick={()=>setPlaying(!playing)} style={{background:"#000",color:cur.color,border:`1px solid ${cur.color}`,width:32,height:32,borderRadius:20,fontSize:14}}>{playing?"⏸️":"▶️"}</button>
<div style={{display:"flex",gap:4}}>
<button style={{background:"#000",color:"#fff",border:"1px solid #333",padding:4,borderRadius:6,fontSize:10}}>🤳</button>
<button onClick={()=>setFitScreen(!fitScreen)} style={{background:"#000",color:"#fff",border:"1px solid #333",padding:4,borderRadius:6,fontSize:10}}>{fitScreen?"〰️ Fit":"💨 Full"}</button>
</div>
</div>
</div>
</div>

<div style={{background:"#111",padding:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",gap:4,alignItems:"center"}}>
<button onClick={()=>{setPlaying(!playing);}} style={{background:"#000",color:"#fff",border:"1px solid #333",width:30,height:30,borderRadius:15,fontSize:12}}>{playing?"⏸️":"▶️"}</button>
<button style={{background:"#000",color:"#fff",border:"1px solid #333",width:30,height:30,borderRadius:15,fontSize:12}}>⏯️</button>
<button style={{background:"#000",color:"#fff",border:"1px solid #333",width:30,height:30,borderRadius:15,fontSize:12}}>⏩</button>
<button style={{background:"#000",color:"#fff",border:"1px solid #333",width:30,height:30,borderRadius:15,fontSize:12}}>◀️</button>
<button style={{background:"#000",color:"#fff",border:"1px solid #333",width:30,height:30,borderRadius:15,fontSize:12}}>🛑</button>
</div>
<div style={{display:"flex",gap:10,alignItems:"center",fontSize:11}}>
<button onClick={()=>{setLiked(!liked);setLikes(liked?likes-1:likes+1);}} style={{background:"none",border:"none",color:liked?"#f00":"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}>
<div style={{fontSize:16}}>{liked?"❤️":"👍"}</div><div style={{fontSize:9}}>{likes>999?(likes/1000).toFixed(1)+"K":likes}</div>
</button>
<div style={{display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{fontSize:16}}>💬</div><div style={{fontSize:9}}>{comments}</div></div>
<button onClick={()=>setShares(shares+1)} style={{background:"none",border:"none",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{fontSize:16}}>↗️</div><div style={{fontSize:9}}>{shares}</div></button>
<button onClick={()=>setSaves(saves+1)} style={{background:"none",border:"none",color:"#fff",display:"flex",flexDirection:"column",alignItems:"center"}}><div style={{fontSize:16}}>🔖</div><div style={{fontSize:9}}>{saves}</div></button>
<button onClick={()=>setVertTools(!vertTools)} style={{background:"none",border:"none",color:"#fff"}}>⋯</button>
</div>
</div>

<div style={{padding:10}}>
{subMenu==="home" && (
<div>
<h3 style={{color:cur.color,fontSize:14}}>{cur.icon} {cur.name} - HOME Window</h3>
<p style={{fontSize:11,color:"#ccc",marginTop:6}}>{cur.desc} - Working Window Page Screen</p>
<div style={{marginTop:10,display:"flex",gap:6,flexWrap:"wrap"}}>
{cur.tools.map(t=><div key={t} style={{padding:8,background:"#000",border:`1px solid ${cur.color}`,borderRadius:20,fontSize:10,color:cur.color}}>{t}</div>)}
</div>
<div style={{marginTop:10,background:"#000",padding:10,borderRadius:8,border:"1px dashed #333"}}>
<p style={{fontSize:10}}>Touch to fit screen: Pinch zoom, Double tap to expand. Window effect: Swipe to resize. All tools vertical in ⋯ menu at top right.</p>
</div>
</div>
)}
{subMenu==="tools" && (
<div>
<h3 style={{color:cur.color}}>🛠️ TOOLS - Vertical Format in ⋯</h3>
<div style={{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{cur.tools.concat(["▶️ Play","⏸️ Pause","⏯️ Play/Pause","⏩ Forward","◀️ Rewind","🛑 Stop","🤳 Holo Selfie","💨 Window Effect","〰️ Touch Fit Screen","↗️ Share","♡ Favorite","✂️ Edit","🗑️ Delete","Post","Story","Reel","Live","Note"]).map(t=><div key={t} style={{padding:10,background:"#000",border:`1px solid ${cur.color}`,borderRadius:10,fontSize:10}}>{t}</div>)}
</div>
</div>
)}
{subMenu!=="home" && subMenu!=="tools" && (
<div>
<h3 style={{color:cur.color}}>{subMenu.toUpperCase()} - {cur.name}</h3>
<p style={{fontSize:11,marginTop:8}}>API: /api/{cur.id} 🟢 Ready Green - Batch 1 Working</p>
</div>
)}
</div>

<div style={{background:"#000",padding:8,display:"flex",justifyContent:"space-around",borderTop:"1px solid #222"}}>
{[
{icon:"🏠",label:"Home",notif:""},
{icon:"🎬",label:"Reel",notif:""},
{icon:"👥",label:"Group",notif:""},
{icon:"🏪",label:"Shop",notif:"2"},
{icon:"🔔",label:"Bell",notif:"9+"},
].map(b=>(
<div key={b.label} style={{position:"relative",display:"flex",flexDirection:"column",alignItems:"center"}}>
<div style={{fontSize:18}}>{b.icon}</div>
{b.notif && <div style={{position:"absolute",top:-4,right:-8,background:"#f00",color:"#fff",fontSize:8,padding:"2px 5px",borderRadius:10,fontWeight:"bold"}}>{b.notif}</div>}
<div style={{fontSize:7,color:"#888",marginTop:2}}>{b.label}</div>
</div>
))}
</div>

</div>

<div style={{marginTop:10,textAlign:"center",fontSize:8,color:"#555",padding:10}}>
GEAPPLE RC:9882150 - BATCH 1: 1-12 - {cur.name} - Windows Page Screen Working - ▶️ ⏯️ 🤳 🛑 ⏩ ◀️ ⏸️ 〰️ 💨 Touch Fit Window Effect - Vertical Tools in ⋯ at top right - Ready Green
</div>

</div>
</div>
);
}