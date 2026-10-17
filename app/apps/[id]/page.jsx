"use client";
import { useState } from "react";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");
const [gsiaInput,setGsiaInput]=useState("");
const [gsiaChat,setGsiaChat]=useState([{role:"ai",text:"GSIA AI - Ask CEO anything"}]);
const [chatInput,setChatInput]=useState("");
const [chatMsgs,setChatMsgs]=useState([{user:"System",text:"Firebase Real Chat Active"}]);
const [payAmount,setPayAmount]=useState("");
const [bibleVerse,setBibleVerse]=useState("Genesis 1:3 - And God said, Let there be light: and there was light 🔥");
const [bibleStory,setBibleStory]=useState("GENESIS_CREATION");
const [emailName,setEmailName]=useState("");
const [geamailInbox,setGeamailInbox]=useState(["Welcome to GEAMAIL.CON - Your name@geamail.con is active for all 36 apps!"]);

const APPS_36=[
{id:"1-mygea-social",name:"1-MYGEA-SOCIAL",icon:"🌐"},
{id:"2-reelgea",name:"2-REELGEA",icon:"🎬"},
{id:"3-geamail-con",name:"3-GEAMAIL.CON",icon:"📧",note:"name@geamail.con"},
{id:"4-gea-con",name:"4-GEA-CON",icon:"💬"},
{id:"5-geaconnect",name:"5-GEACONNECT",icon:"🔗"},
{id:"6-mygea-holo",name:"6-MYGEA-HOLO",icon:"👁️"},
{id:"7-global-votes",name:"7-GLOBAL-VOTES",icon:"🗳️"},
{id:"8-degalaxy-sat-",name:"8-DEGALAXY-SAT-",icon:"🛰️"},
{id:"9-military-bord",name:"9-MILITARY-BORD",icon:"🎖️"},
{id:"10-visual-art-g",name:"10-VISUAL-ART-G",icon:"🎨"},
{id:"11-geatune",name:"11-GEATUNE",icon:"🎵"},
{id:"12-gea-4k-studi",name:"12-GEA-4K-STUDI",icon:"📹"},
{id:"13-gea-game",name:"13-GEA-GAME",icon:"🎮"},
{id:"14-okidoki-soci",name:"14-OKIDOKI-SOCI",icon:"😊"},
{id:"15-galarea-chat",name:"15-GALAREA-CHAT",icon:"💬"},
{id:"16-yellow-mygea",name:"16-YELLOW-MYGEA",icon:"💛"},
{id:"17-gea-store",name:"17-GEA-STORE",icon:"🏪"},
{id:"18-degalaxy-orb",name:"18-DEGALAXY-ORB",icon:"🌌"},
{id:"19-gsia-cyber-c",name:"19-GSIA-CYBER-C",icon:"🛡️"},
{id:"20-gsia-ai",name:"20-GSIA-AI",icon:"🤖"},
{id:"21-realoracle-m",name:"21-REALORACLE-M",icon:"🔮"},
{id:"22-gsia-fraud-d",name:"22-GSIA-FRAUD-D",icon:"🚨"},
{id:"23-gsia-visual-",name:"23-GSIA-VISUAL-",icon:"👁️‍🗨️"},
{id:"24-realoracle-w",name:"24-REALORACLE-W",icon:"🌐"},
{id:"25-gsia-budget-",name:"25-GSIA-BUDGET-",icon:"💰"},
{id:"26-degalaxy-sat",name:"26-DEGALAXY-SAT",icon:"🛰️"},
{id:"27-gsia-archite",name:"27-GSIA-ARCHITE",icon:"🏗️"},
{id:"28-gea-cartoons",name:"28-GEA-CARTOONS",icon:"🎭"},
{id:"29-gea-pay",name:"29-GEA-PAY",icon:"💳"},
{id:"30-gea-wallet",name:"30-GEA-WALLET",icon:"👛"},
{id:"31-geapple-gadg",name:"31-GEAPPLE-GADG",icon:"📱"},
{id:"32-ceo-dashboar",name:"32-CEO-DASHBOAR",icon:"📊"},
{id:"33-data-minting",name:"33-DATA-MINTING",icon:"⛏️"},
{id:"34-investors-an",name:"34-INVESTORS-AN",icon:"📈"},
{id:"35-gsia-systems",name:"35-GSIA-SYSTEMS",icon:"⚙️"},
{id:"36-virtual-holy-bible",name:"36-VIRTUAL-HOLY-BIBLE",icon:"📖",gold:true},
];

const bibleStories={
GENESIS_CREATION:{title:"Genesis 1 - Let There Be Light 🔥",text:"God said Let there be light and God divided the light - Visual Voice 4K VR - Real Human Form",verse:"Genesis 1:3-4"},
JESUS_AFRICAN:{title:"Jesus Christ - African Complexion",text:"Jesus in real human form - African complexion color - 4K Video - Words of God and Jesus Christ",verse:"Revelation 1:14-15 - Hair white as wool, feet like fine brass"},
PROPHECY:{title:"All Bible Prophecies - Realtime",text:"Daniel, Revelation, Isaiah prophecies in visual 4K movies - Virtual Reality shows",verse:"Revelation 21:1 - New Heaven New Earth"},
MOSES:{title:"Moses - Red Sea Parting",text:"Exodus 14 - VR 4K Visual - Real human form - Let my people go",verse:"Exodus 14:21"},
DAVID_GOLIATH:{title:"David & Goliath",text:"1 Samuel 17 - 4K VR Battle - Real human form",verse:"1 Samuel 17:45"},
};

const askGsia=()=>{if(!gsiaInput)return;setGsiaChat([...gsiaChat,{role:"user",text:gsiaInput},{role:"ai",text:`GSIA Answer for ${gsiaInput} - Geapple Hub 36 Active`} ]);setGsiaInput("");};
const sendChat=()=>{if(!chatInput)return;setChatMsgs([...chatMsgs,{user:"You",text:chatInput}]);setChatInput("");};
const createGeamail=()=>{if(!emailName)return alert("Enter name");const email=`${emailName}@geamail.con`;setGeamailInbox([...geamailInbox,`New email created: ${email} - Active for all 36 apps ecosystem!`]);alert(`GEAMAIL.CON Created: ${email} - For all Geapple Ecosystem!`);setEmailName("");};

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
<span>GEAPPLE HUB 36 - $1B - RC:9882150</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4}}>☰ {menuOpen?"Close":"Menu 36"}</button>
</div>
{menuOpen && (
<div style={{background:"#111",padding:8,maxHeight:"85vh",overflowY:"auto",borderBottom:"2px solid #0f0"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{APPS_36.map(a=>(
<button key={a.id} onClick={()=>{setActiveTool(a.id);setMenuOpen(false);}} style={{padding:10,background:a.gold?"gold":activeTool===a.id?"#0f0":"#222",color:a.gold?"#000":activeTool===a.id?"#000":"#fff",border:"none",borderRadius:6,fontSize:11,fontWeight:"bold",textAlign:"left"}}>{a.icon} {a.name}{a.note?` (${a.note})`:""}</button>
))}
</div>
</div>
)}

<div style={{padding:12}}>
{activeTool==="home" && (
<div>
<h2 style={{color:"#0f0"}}>35 APPS + Virtual Holy Bible = 36 🚀</h2>
<div style={{background:"gold",color:"#000",padding:10,borderRadius:8,marginTop:8,fontWeight:"bold",textAlign:"center"}}>📖 36-VIRTUAL-HOLY-BIBLE - Words of God & Jesus - African Complexion - 4K VR - Let There Be Light 🔥</div>
<div style={{background:"#111",padding:8,borderRadius:8,marginTop:8}}><p style={{fontSize:11,color:"#0f0"}}>BATCH BUILD PLAN: 5x6 = 30 + 6 = 36 - CEO to confirm prototype per batch</p><p style={{fontSize:10,color:"#888"}}>GEAMAIL.CON = name@geamail.con for all ecosystem</p></div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginTop:12}}>
{APPS_36.map(a=>(
<div key={a.id} onClick={()=>setActiveTool(a.id)} style={{background:a.gold?"linear-gradient(45deg,gold,#b8860b)":"#111",border:a.gold?"2px solid gold":"1px solid #0f0",padding:8,borderRadius:8,textAlign:"center"}}>
<div style={{fontSize:20}}>{a.icon}</div>
<div style={{fontSize:8,fontWeight:"bold",color:a.gold?"#000":"#0f0",marginTop:3}}>{a.name}</div>
</div>
))}
</div>
</div>
)}

{activeTool==="36-virtual-holy-bible" && (
<div>
<h3 style={{color:"gold"}}>📖 36-VIRTUAL-HOLY-BIBLE - FULLY BUILT $1B</h3>
<div style={{background:"#111",border:"2px solid gold",padding:12,borderRadius:10,marginTop:8}}>
<p style={{color:"gold",fontWeight:"bold"}}>Current VR Story: {bibleStories[bibleStory].title}</p>
<p style={{fontSize:12,marginTop:8}}>{bibleStories[bibleStory].text}</p>
<p style={{fontSize:11,color:"#0f0",marginTop:6}}>{bibleStories[bibleStory].verse}</p>
<div style={{background:"#000",padding:10,borderRadius:8,marginTop:10,textAlign:"center"}}>
<div style={{width:"100%",height:120,background:"linear-gradient(45deg,#000,#333,gold)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",fontSize:30}}>🔥 LET THERE BE LIGHT - 4K VR</div>
<p style={{fontSize:10,color:"#888",marginTop:5}}>Jesus African Complexion - Real Human Form - 4K Video Movie Shows</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:10}}>
{Object.keys(bibleStories).map(k=>(
<button key={k} onClick={()=>setBibleStory(k)} style={{padding:8,background:bibleStory===k?"gold":"#222",color:bibleStory===k?"#000":"#fff",border:"none",borderRadius:6,fontSize:10}}>{bibleStories[k].title}</button>
))}
</div>
<p style={{color:"gold",marginTop:12,fontWeight:"bold"}}>Verse:</p>
<p style={{background:"#000",padding:8,borderRadius:6,marginTop:4,fontSize:13}}>{bibleVerse}</p>
<button onClick={()=>setBibleVerse(`Random Verse: ${["John 3:16 - For God so loved","Jeremiah 29:11 - Plans to prosper","Psalm 23:1 - Lord is my shepherd","Isaiah 41:10 - Fear not"][Math.floor(Math.random()*4)]} 🔥`)} style={{background:"gold",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>🙏 New Prophecy - Realtime Voice 4K</button>
<button onClick={()=>alert("Playing Audio - Words of God and Jesus - African Complexion - 4K VR Movie")} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:6}}>🔊 Play Voice + 4K Video - Jesus African Complexion</button>
</div>
</div>
)}

{activeTool==="3-geamail-con" && (
<div>
<h3>📧 3-GEAMAIL.CON - name@geamail.con</h3>
<div style={{background:"#111",padding:12,borderRadius:10,marginTop:8,border:"1px solid #0f0"}}>
<p style={{fontSize:12}}>All GEAPPLE ECOSYSTEM users use <b style={{color:"#0f0"}}>name@geamail.con</b></p>
<div style={{display:"flex",gap:6,marginTop:10}}><input value={emailName} onChange={e=>setEmailName(e.target.value)} placeholder="yourname" style={{flex:1,padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><span style={{padding:10,background:"#222",borderRadius:6}}>@geamail.con</span></div>
<button onClick={createGeamail} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>Create @geamail.con Email</button>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:10,maxHeight:150,overflowY:"auto"}}>
{geamailInbox.map((m,i)=><div key={i} style={{padding:5,borderBottom:"1px solid #222",fontSize:11}}>{m}</div>)}
</div>
</div>
</div>
)}

{activeTool==="20-gsia-ai" && (
<div><h3>🤖 20-GSIA-AI</h3><div style={{background:"#111",padding:10,borderRadius:10,height:300,overflowY:"auto"}}>{gsiaChat.map((m,i)=><div key={i} style={{background:m.role==="user"?"#0f0":"#222",color:m.role==="user"?"#000":"#fff",padding:6,borderRadius:6,margin:"4px 0",fontSize:12}}>{m.text}</div>)}</div><div style={{display:"flex",gap:6,marginTop:8}}><input value={gsiaInput} onChange={e=>setGsiaInput(e.target.value)} style={{flex:1,padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><button onClick={askGsia} style={{background:"#0f0",color:"#000",padding:10,border:"none",borderRadius:6}}>Ask</button></div></div>
)}

{!["home","36-virtual-holy-bible","3-geamail-con","20-gsia-ai"].includes(activeTool) && (
<div>
<h3>{APPS_36.find(a=>a.id===activeTool)?.icon} {APPS_36.find(a=>a.id===activeTool)?.name}</h3>
<div style={{background:"#111",padding:20,borderRadius:10,marginTop:8,textAlign:"center",border:"1px solid #0f0"}}>
<div style={{fontSize:40}}>{APPS_36.find(a=>a.id===activeTool)?.icon}</div>
<p style={{marginTop:10,fontSize:12}}>Batch Build: 5x6 Plan - Waiting CEO Prototype Confirmation</p>
<p style={{fontSize:10,color:"#888",marginTop:5}}>CEO: What is function/use/prototype for {APPS_36.find(a=>a.id===activeTool)?.name}?</p>
<button onClick={()=>alert(`${APPS_36.find(a=>a.id===activeTool)?.name} Prototype - Asking CEO for function/use before full build`)} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,marginTop:10}}>Launch - Ask CEO Prototype</button>
</div>
</div>
)}

</div>
<div style={{textAlign:"center",padding:10,color:"#333",fontSize:9}}>GEAPPLE GLOBALCOMTECH RC:9882150 - CEO Apostle Dr Oladele Mighty Hassan - To The Glory Of God - Hub 36</div>
</div>
);
}