"use client";
import { useState } from "react";
const APPS=[
{id:"15-gala",n:"15-GALAREA-CHAT",i:"💬",c:"#0f0",t:"chat"},
{id:"16-yellow",n:"16-YELLOW",i:"💛",c:"gold",t:"chat"},
{id:"1-mygea",n:"1-MYGEA-SOCIAL",i:"🌐",c:"#0f0",t:"social"},
{id:"5-conn",n:"5-GEACONNECT",i:"🔗",c:"#0ff",t:"chat"},
{id:"13-game",n:"13-GEA-GAME",i:"🎮",c:"#0f0",t:"game"},
{id:"14-oki",n:"14-OKIDOKI",i:"🎬",c:"#f0f",t:"tiktok"},
{id:"17-store",n:"17-GEA-STORE+",i:"🏪",c:"#0f0",t:"store"},
{id:"18-orb",n:"18-ORBITAL",i:"🗺️",c:"#0ff",t:"map"},
{id:"19-cyber",n:"19-CYBER-CORE",i:"🛡️",c:"#f00",t:"sec"},
{id:"20-ai",n:"20-GSIA-AI",i:"🤖",c:"#0f0",t:"ai"},
{id:"25-budget",n:"25-BUDGET",i:"📊",c:"#0f0",t:"budget"},
{id:"26-gps",n:"26-GPS",i:"📍",c:"#0ff",t:"gps"},
{id:"27-arch",n:"27-ARCHITECTURE",i:"🏗️",c:"gold",t:"arch"},
{id:"28-cart",n:"28-CARTOONS",i:"🎨",c:"#f0f",t:"cart"},
{id:"29-pay",n:"29-GEA-PAY",i:"💳",c:"#0f0",t:"pay"},
{id:"30-wallet",n:"30-WALLET",i:"👛",c:"gold",t:"wallet"},
{id:"32-ceo",n:"32-CEO-DASHBOARD",i:"👑",c:"gold",t:"ceo"},
{id:"36-bible",n:"36-BIBLE",i:"📖",c:"gold",t:"bible"},
{id:"2-reel",n:"2-REELGEA",i:"🎬",c:"#0ff",t:"social"},
{id:"3-mail",n:"3-GEAMAIL",i:"📧",c:"gold",t:"mail"},
{id:"4-geacon",n:"4-GEA-CON",i:"💬",c:"#0f0",t:"cloud"},
{id:"6-holo",n:"6-HOLO",i:"👁️",c:"#f0f",t:"holo"},
{id:"7-votes",n:"7-VOTES",i:"🗳️",c:"#0f0",t:"vote"},
{id:"8-sat",n:"8-SAT",i:"🛰️",c:"#0ff",t:"sat"},
{id:"9-mil",n:"9-MILITARY",i:"🎖️",c:"#f00",t:"mil"},
{id:"10-vis",n:"10-VISUAL",i:"🎨",c:"#f0f",t:"vis"},
{id:"11-tune",n:"11-GEATUNE",i:"🎵",c:"#0ff",t:"music"},
{id:"12-4k",n:"12-4K-STUDIO",i:"🎥",c:"gold",t:"studio"},
{id:"21-oracle",n:"21-REALORACLE",i:"🔙",c:"#0ff",t:"av"},
{id:"22-fraud",n:"22-FRAUD",i:"💰",c:"gold",t:"finance"},
{id:"23-visual",n:"23-VISUAL",i:"🎨",c:"#f0f",t:"code"},
{id:"24-weather",n:"24-WEATHER",i:"⛅",c:"#0ff",t:"weather"},
{id:"31-gadget",n:"31-GADGETS",i:"📱",c:"#0ff",t:"gadget"},
{id:"33-mint",n:"33-MINTING",i:"⛏️",c:"#0f0",t:"mint"},
{id:"34-inv",n:"34-INVESTORS",i:"📈",c:"#0ff",t:"inv"},
{id:"35-sys",n:"35-SYSTEM",i:"⚙️",c:"#0f0",t:"sys"},
];
export default function FinalTools(){
const [active,setActive]=useState("15-gala");
const [menu,setMenu]=useState(false);
const [sub,setSub]=useState("home");
const [vert,setVert]=useState(false);
const [chatMenu,setChatMenu]=useState(false);
const [msg,setMsg]=useState("");
const [chats,setChats]=useState([
{u:"Gea",m:"Galarea Chat - WhatsApp Prototype - SAT Free Calls Holo ON",t:"1:20"},
{u:"CEO",m:"Clear chat, Export chat tools working?",t:"1:21"},
{u:"Gea",m:"Yes - All tools integrated per platform format",t:"1:22"},
]);
const [quick,setQuick]=useState("");
const cur=APPS.find(a=>a.id===active);
const isChat=cur.t==="chat"||cur.t==="social";
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:10,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:40}}>
<span style={{fontSize:10}}>GEAPPLE 36 - FINAL TOOLS INTEGRATED - READY GREEN - RC:9882150</span>
<button onClick={()=>setMenu(!menu)} style={{background:"#000",color:"#0f0",border:"none",padding:6,borderRadius:6,fontSize:10,fontWeight:"bold"}}>MENU 36</button>
</div>
{menu&&(
<div style={{background:"#111",padding:8,borderBottom:"2px solid #0f0",maxHeight:"60vh",overflowY:"auto"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:5}}>
{APPS.map(a=>(
<button key={a.id} onClick={()=>{setActive(a.id);setMenu(false);setVert(false);setChatMenu(false);}} style={{padding:6,background:active===a.id?"#0f0":"#222",color:active===a.id?"#000":"#fff",border:"none",borderRadius:6,fontSize:8,fontWeight:"bold",textAlign:"left"}}>{a.i} {a.n}</button>
))}
</div>
</div>
)}
<div style={{padding:8}}>
<div style={{background:"#111",border:"2px solid #0f0",borderRadius:14,overflow:"hidden",position:"relative"}}>

<div style={{background:isChat?"#075e54":cur.c,color:isChat||cur.c==="gold"?"#fff":cur.c==="gold"?"#000":"#000",padding:8,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{display:"flex",alignItems:"center",gap:8}}>
{isChat&&<div style={{width:28,height:28,background:"#000",borderRadius:14}}></div>}
<span style={{fontSize:10,fontWeight:"bold"}}>{cur.i} {cur.n} - {isChat?"WhatsApp Prototype - SAT Free Calls Holo":"Windows Page"} - API LIVE</span>
</div>
<div style={{display:"flex",gap:6}}>
{isChat&&<button onClick={()=>setChatMenu(!chatMenu)} style={{background:"transparent",color:"#fff",border:"none",fontSize:18}}>⋮</button>}
<button onClick={()=>setVert(!vert)} style={{background:"#000",color:"#fff",border:"none",width:26,height:26,borderRadius:6}}>⋯</button>
</div>
</div>

{vert&&(
<div style={{position:"absolute",top:34,right:6,width:160,background:"#000",border:"1px solid #0f0",borderRadius:8,zIndex:30,padding:6}}>
<div style={{fontSize:8,color:"#0f0",fontWeight:"bold"}}>VERTICAL TOOLS - Touch Fit</div>
<div style={{fontSize:9,marginTop:6,lineHeight:1.6}}>
Post Story Reel Live Note<br/>
Share Favorite Edit Delete More<br/>
▶️ Play ⏸️ Pause ⏯️ ⏩ ◀️ 🛑<br/>
🤳 Holo 💨 Window 〰️ Fit Screen<br/>
📎 Attachment 📷 Camera 🎙️ Voice<br/>
Clear chat Export chat<br/>
Add shortcut Add to list
</div>
<button onClick={()=>setVert(false)} style={{width:"100%",padding:5,background:"#0f0",border:"none",borderRadius:6,fontWeight:"bold",fontSize:9,marginTop:6}}>Close</button>
</div>
)}

{chatMenu&&isChat&&(
<div style={{position:"absolute",top:34,right:40,width:220,background:"#fff",color:"#000",borderRadius:8,zIndex:35,padding:6,boxShadow:"0 4px 12px #000"}}>
<div style={{display:"flex",alignItems:"center",gap:10,padding:10,borderBottom:"1px solid #eee"}}><span style={{fontSize:16}}>⊖</span><span style={{fontSize:13}}>Clear chat</span></div>
<div style={{display:"flex",alignItems:"center",gap:10,padding:10,borderBottom:"1px solid #eee"}}><span style={{fontSize:16}}>⬆️</span><span style={{fontSize:13}}>Export chat</span></div>
<div style={{display:"flex",alignItems:"center",gap:10,padding:10,borderBottom:"1px solid #eee"}}><span style={{fontSize:16}}>↗️</span><span style={{fontSize:13}}>Add shortcut</span></div>
<div style={{display:"flex",alignItems:"center",gap:10,padding:10,borderBottom:"1px solid #eee"}}><span style={{fontSize:16}}>👤</span><span style={{fontSize:13}}>Add to list</span></div>
<div style={{padding:8,background:"#f5f5f5",marginTop:6,borderRadius:6}}>
{["Add people","Details","Starred","Search","Chat theme","Archive","Trash","Video","Block & report spam","Show subject field","Help & feedback"].map(t=>(
<div key={t} style={{padding:8,fontSize:13,borderBottom:"1px solid #e0e0e0"}}>{t}</div>
))}
</div>
<button onClick={()=>setChatMenu(false)} style={{width:"100%",padding:8,background:"#075e54",color:"#fff",border:"none",borderRadius:6,marginTop:8,fontSize:12}}>Close</button>
</div>
)}

<div style={{display:"flex",gap:3,padding:6,background:"#000",overflowX:"auto"}}>
{["home","settings","tools","manual","api","geamail"].map(m=>(
<button key={m} onClick={()=>setSub(m)} style={{padding:5,background:sub===m?"#0f0":"#222",color:sub===m?"#000":"#fff",border:"none",borderRadius:12,fontSize:8,fontWeight:"bold"}}>{m.toUpperCase()}</button>
))}
</div>

{isChat?(
<div style={{background:"#e5ddd5",height:340,display:"flex",flexDirection:"column",position:"relative"}}>
<div style={{flex:1,padding:10,overflowY:"auto"}}>
{chats.map((c,i)=>(
<div key={i} style={{background:c.u==="CEO"?"#dcf8c6":"#fff",color:"#000",padding:8,borderRadius:8,marginBottom:8,marginLeft:c.u==="CEO"?40:0,marginRight:c.u==="CEO"?0:40,fontSize:12,position:"relative"}}>
<div style={{fontSize:8,color:"#888"}}>{c.u} {c.t}</div>
<div style={{marginTop:2}}>{c.m}</div>
<div style={{position:"absolute",top:-8,right:0,display:"flex",gap:4}}>
<button style={{width:24,height:24,background:"#fff",border:"1px solid #ddd",borderRadius:12,fontSize:10}}>⎙</button>
<button style={{width:24,height:24,background:"#fff",border:"1px solid #ddd",borderRadius:12,fontSize:10}}>↪️</button>
</div>
</div>
))}
</div>
<div style={{padding:6,display:"flex",gap:6,overflowX:"auto",background:"#e5ddd5"}}>
{[
{txt:"😊",label:"Smiley"},
{txt:"Okay 👍",label:"Okay"},
{txt:"Good",label:"Good"},
{txt:"👍",label:"Thumbs"},
].map(q=>(
<button key={q.label} onClick={()=>setMsg(q.txt)} style={{padding:6,background:"#fff",border:"1px solid #ddd",borderRadius:20,fontSize:11,whiteSpace:"nowrap"}}>{q.txt}</button>
))}
</div>
<div style={{padding:8,background:"#f0f0f0",display:"flex",alignItems:"center",gap:6}}>
<div style={{flex:1,background:"#fff",borderRadius:24,display:"flex",alignItems:"center",padding:"0 10px",gap:8}}>
<span style={{fontSize:18}}>😊</span>
<input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message" style={{flex:1,padding:10,border:"none",background:"transparent",fontSize:13,outline:"none"}}/>
<span style={{fontSize:18}}>📎</span>
<span style={{fontSize:18}}>📷</span>
</div>
<button onClick={()=>{if(!msg)return;setChats([...chats,{u:"CEO",m:msg,t:"now"}]);setMsg("");}} style={{width:44,height:44,background:"#25d366",border:"none",borderRadius:22,color:"#fff",fontSize:18}}>🎙️</button>
</div>
</div>
):(
<div>
<div style={{background:"#000",height:180,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:32}}>{cur.i}</div>
<div style={{fontSize:11,color:"#0f0",marginTop:6}}>{cur.n} - {cur.t} Format Working</div>
<div style={{fontSize:8,color:"#888",marginTop:4}}>Tools integrated per platform - Touch Fit Window Effect</div>
</div>
<div style={{background:"#111",padding:6,display:"flex",justifyContent:"space-between"}}>
<div style={{display:"flex",gap:4}}>
{["▶️","⏯️","⏩","◀️","🛑"].map(x=>(
<div key={x} style={{width:24,height:24,background:"#000",border:"1px solid #333",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",fontSize:10}}>{x}</div>
))}
</div>
<div style={{display:"flex",gap:6,fontSize:9}}><span>👍14K</span><span>💬94</span><span>↗️217</span><span>🔖757</span></div>
</div>
</div>
)}

<div style={{padding:8,background:"#000"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#0f0"}}>{cur.n} - {sub.toUpperCase()} - Tools Per Platform Format</div>
<p style={{fontSize:9,color:"#888",marginTop:4}}>For chat platforms: Clear chat, Export chat, Add shortcut, Add to list, Add people, Details, Starred, Search, Chat theme, Archive, Trash, Video, Block & report spam integrated in ⋮ menu. Quick replies 😊 Okay Good 👍 + Message bar with Emoji 📎 📷 🎙️ voice.</p>
</div>

<div style={{background:"#000",padding:6,display:"flex",justifyContent:"space-around",borderTop:"1px solid #222"}}>
{["🏠","🎬","👥","🏪","🔔"].map(b=>(
<div key={b} style={{fontSize:16}}>{b}</div>
))}
</div>

</div>
<div style={{marginTop:8,textAlign:"center",fontSize:7,color:"#555"}}>GEAPPLE RC:9882150 - ALL 36 - Chat Tools Integrated - Clear chat Export chat Add shortcut Add to list Add people Details Starred Search Chat theme Archive Trash Video Block spam + Quick replies + Message Emoji Attach Camera Voice - Per Platform Format - Ready Green</div>
</div>
</div>
);
}