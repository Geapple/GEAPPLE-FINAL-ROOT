"use client";
import { useState } from "react";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");
const [socialPosts,setSocialPosts]=useState([{user:"CEO Apostle Dr Mighty",text:"MYGEA-SOCIAL + Holo Conference - Voice Translation - Holo Projector Sensors Camera LIVE!",likes:36,holo:true}]);
const [socialInput,setSocialInput]=useState("");
const [holoOn,setHoloOn]=useState(false);
const [voiceLang,setVoiceLang]=useState("English");
const [reelLikes,setReelLikes]=useState([36,128,50]);
const [reelIdx,setReelIdx]=useState(0);
const [skitScript,setSkitScript]=useState("");
const [emailName,setEmailName]=useState("");
const [geamailInbox,setGeamailInbox]=useState([
"Welcome: you@geamail.con linked to geapple.admin@gmail.com",
"CEO Dashboard: Bulk Mail to all 35 apps users ready",
"Investors: Payment receipt sent via GEAMAIL.CON",
"Data: Download link geamail.con/download/data-minting"
]);
const [geaConTab,setGeaConTab]=useState("web");
const [codeText,setCodeText]=useState("// GEA-CON Code Editor - GitHub / SPCK EDIT Prototype\nfunction geappleHub36(){ console.log('RC:9882150 - To Glory Of God'); }");
const [connectTab,setConnectTab]=useState("calls");
const [satCallTo,setSatCallTo]=useState("");
const [speakEnglish,setSpeakEnglish]=useState("Hello, how are you?");
const [bibleStory,setBibleStory]=useState("GENESIS_CREATION");
const [bibleVerse,setBibleVerse]=useState("Genesis 1:3 - Let there be light 🔥");

const APPS_36=[
{id:"1-mygea-social",name:"1-MYGEA-SOCIAL",icon:"🌐"},
{id:"2-reelgea",name:"2-REELGEA",icon:"🎬"},
{id:"3-geamail-con",name:"3-GEAMAIL.CON",icon:"📧"},
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
GENESIS_CREATION:{title:"Genesis 1 - Let There Be Light 🔥",text:"God said Let there be light and divided - 4K VR Real Human Form",verse:"Genesis 1:3-4"},
JESUS_AFRICAN:{title:"Jesus African Complexion",text:"Jesus real human form African complexion 4K Voice",verse:"Revelation 1:14-15"},
PROPHECY:{title:"All Prophecies Realtime",text:"Daniel Revelation Isaiah 4K movies VR",verse:"Revelation 21:1"},
};

const postSocial=()=>{if(!socialInput)return;setSocialPosts([{user:"You (CEO)",text:socialInput+(holoOn?" [HOLO PROJECTOR ON - Voice Translation: "+voiceLang+"]":""),likes:0,holo:holoOn},...socialPosts]);setSocialInput("");};
const reels=["🌟 MYGEA-SOCIAL Holo Conference Demo","📖 Bible VR - African Jesus 4K","🎬 Skit Creator Tool - Make Skits!"];

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
<span>GEAPPLE HUB 36 - BATCH 1 UPGRADED</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4}}>☰ Menu 36</button>
</div>
{menuOpen && (<div style={{background:"#111",padding:8,maxHeight:"85vh",overflowY:"auto",borderBottom:"2px solid #0f0"}}><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>{APPS_36.map(a=>(<button key={a.id} onClick={()=>{setActiveTool(a.id);setMenuOpen(false);}} style={{padding:10,background:a.gold?"gold":activeTool===a.id?"#0f0":"#222",color:a.gold?"#000":activeTool===a.id?"#000":"#fff",border:"none",borderRadius:6,fontSize:11,fontWeight:"bold"}}>{a.icon} {a.name}</button>))}</div></div>)}
<div style={{padding:12}}>
{activeTool==="home" && (<div><h2 style={{color:"#0f0"}}>BATCH 1 UPGRADED - CEO Specs ✅</h2><div style={{background:"#111",padding:8,borderRadius:8,marginTop:8,fontSize:11}}>
<p>✅ 1-SOCIAL: Holo Conf + Voice Translation + Projector Sensors Camera</p>
<p>✅ 2-REELGEA: Creator Tools Skits Making</p>
<p>✅ 3-GEAMAIL.CON: username@geamail.con → geapple.admin@gmail.com + Bulk + Payments + Data Link</p>
<p>✅ 4-GEA-CON: Web Cloud Mail Domains Drive + Code Editor GitHub/SPCK</p>
<p>✅ 5-GEACONNECT: Nino Simless SAT Free Calls + Interpreter Speak English Hear Local</p>
<p style={{color:"gold"}}>✅ 36-BIBLE: Let There Be Light 4K VR 🔥</p>
</div></div>)}

{activeTool==="1-mygea-social" && (<div><h3>🌐 1-MYGEA-SOCIAL + Holo Conference</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8,border:"1px solid #0f0"}}>
<div style={{display:"flex",gap:6,flexWrap:"wrap"}}><button onClick={()=>setHoloOn(!holoOn)} style={{padding:8,background:holoOn?"#0f0":"#222",color:holoOn?"#000":"#fff",border:"none",borderRadius:20,fontSize:11,fontWeight:"bold"}}>👁️ Holo Projector {holoOn?"ON":"OFF"} - Sensors Camera</button><select value={voiceLang} onChange={e=>setVoiceLang(e.target.value)} style={{padding:8,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:20,fontSize:11}}><option>English</option><option>Yoruba</option><option>Hausa</option><option>Igbo</option><option>French</option><option>Arabic</option></select></div>
{holoOn && (<div style={{background:"#000",height:120,borderRadius:10,marginTop:10,border:"1px dashed #0f0",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><div style={{fontSize:30}}>👤 HOLO IMAGE PROJECTOR</div><p style={{fontSize:10,color:"#0f0"}}>Sensors Camera Active - Voice Translation: {voiceLang} - Real Human Form</p><div style={{width:60,height:60,borderRadius:"50%",background:"linear-gradient(#0f0,#000)",marginTop:5,animation:"pulse 2s infinite"}}></div></div>)}
<div style={{display:"flex",gap:6,marginTop:10}}><input value={socialInput} onChange={e=>setSocialInput(e.target.value)} placeholder="Post with Holo + Voice Translation..." style={{flex:1,padding:12,background:"#000",color:"#fff",border:"1px solid #0f0",borderRadius:20}}/><button onClick={postSocial} style={{background:"#0f0",color:"#000",padding:12,border:"none",borderRadius:20,fontWeight:"bold"}}>Post Holo</button></div>
<div style={{marginTop:12}}>{socialPosts.map((p,i)=><div key={i} style={{background:"#000",padding:10,borderRadius:10,margin:"8px 0",border:p.holo?"2px solid #0f0":"1px solid #222"}}><b style={{color:"#0f0"}}>{p.user} {p.holo?"[HOLO]":""}</b><p style={{fontSize:13,marginTop:4}}>{p.text}</p><div style={{display:"flex",gap:15,marginTop:8,fontSize:11,color:"#888"}}><span>❤️ {p.likes}</span><span>🎙️ Voice Translate {voiceLang}</span><span>👁️ Holo Project</span></div></div>)}</div>
</div></div>)}

{activeTool==="2-reelgea" && (<div><h3>🎬 2-REELGEA + Creator Tools Skits</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8}}>
<div style={{background:"#000",height:350,borderRadius:10,display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",border:"1px solid #0f0"}}>
<div style={{fontSize:50}}>🎥</div><p style={{marginTop:10,fontWeight:"bold"}}>{reels[reelIdx]}</p><div style={{marginTop:15,display:"flex",gap:20}}><button onClick={()=>{const nl=[...reelLikes];nl[reelIdx]++;setReelLikes(nl);}} style={{background:"none",border:"none",color:"#fff",fontSize:18}}>❤️ {reelLikes[reelIdx]}</button><span>💬</span><span>🔗</span></div>
</div>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:10}}><p style={{fontSize:11,color:"#0f0",fontWeight:"bold"}}>🎭 Creator Tools - Skits Making:</p><textarea value={skitScript} onChange={e=>setSkitScript(e.target.value)} placeholder="Write skit script: Scene 1: Man says 'Let there be light'..." style={{width:"100%",padding:8,background:"#111",color:"#fff",border:"1px solid #333",borderRadius:4,marginTop:5,fontSize:11,height:60}}/><div style={{display:"flex",gap:6,marginTop:5}}><button onClick={()=>alert("Skit Tools: Adding voice, effects, 4K render, auto-edit for REELGEA - "+skitScript.substring(0,20))} style={{flex:1,padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:4,fontWeight:"bold",fontSize:11}}>🎬 Make Skit - Auto 4K</button><button onClick={()=>alert("Adding captions, music, transitions")} style={{flex:1,padding:8,background:"#222",color:"#fff",border:"none",borderRadius:4,fontSize:11}}>✨ Effects</button></div></div>
<div style={{display:"flex",gap:6,marginTop:10}}><button onClick={()=>setReelIdx(Math.max(0,reelIdx-1))} style={{flex:1,padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6}}>⬆️ Prev</button><button onClick={()=>setReelIdx(Math.min(reels.length-1,reelIdx+1))} style={{flex:1,padding:10,background:"#0f0",color:"#000",border:"none",borderRadius:6,fontWeight:"bold"}}>⬇️ Next</button></div>
</div></div>)}

{activeTool==="3-geamail-con" && (<div><h3>📧 3-GEAMAIL.CON - Linked System</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8,border:"1px solid #0f0"}}>
<p style={{fontSize:11}}>All users: <b style={{color:"#0f0"}}>username@geamail.con</b> → Configured to <b style={{color:"gold"}}>geapple.admin@gmail.com</b></p>
<div style={{display:"flex",gap:6,marginTop:8}}><input value={emailName} onChange={e=>setEmailName(e.target.value)} placeholder="username" style={{flex:1,padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><span style={{padding:10,background:"#222",borderRadius:6,fontSize:11}}>@geamail.con</span></div>
<button onClick={()=>{if(!emailName)return;setGeamailInbox([`Linked: ${emailName}@geamail.con → geapple.admin@gmail.com configured - Bulk ready`,...geamailInbox]);setEmailName("");}} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>Link 🔗 to geapple.admin@gmail.com</button>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
<button onClick={()=>alert("CEO Dashboard: Bulk mail to all 36 apps users + investors from geapple.admin@gmail.com - Sending...")} style={{padding:10,background:"gold",color:"#000",border:"none",borderRadius:6,fontWeight:"bold",fontSize:11}}>📧 Bulk Mail All Users + Investors</button>
<button onClick={()=>alert("Investors Payment Link: geamail.con/pay/investors - Data download link active")} style={{padding:10,background:"#0f0",color:"#000",border:"none",borderRadius:6,fontWeight:"bold",fontSize:11}}>💳 Payment + Data Link</button>
</div>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:8,maxHeight:140,overflowY:"auto"}}>
{geamailInbox.map((m,i)=><div key={i} style={{padding:6,borderBottom:"1px solid #222",fontSize:11,background:i===0?"#111":""}}>{m} {m.includes("geapple.admin")&&<span style={{color:"gold"}}>🔗</span>}</div>)}
</div>
<p style={{fontSize:9,color:"#888",marginTop:6}}>Configure: All username@geamail.con → geapple.admin@gmail.com → CEO Dashboard bulk → Investors payment & data-minting download</p>
</div></div>)}

{activeTool==="4-gea-con" && (<div><h3>💻 4-GEA-CON - Web Cloud Code Builder</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8}}>
<div style={{display:"flex",gap:4,overflowX:"auto"}}>{["web","cloud","mail","domains","drive","code"].map(t=><button key={t} onClick={()=>setGeaConTab(t)} style={{padding:8,background:geaConTab===t?"#0f0":"#222",color:geaConTab===t?"#000":"#fff",border:"none",borderRadius:20,fontSize:10,fontWeight:"bold",textTransform:"uppercase"}}>{t}</button>)}</div>
{geaConTab==="web" && (<div style={{marginTop:10}}><p style={{fontSize:11}}>🌐 Web Hosting + Domains for 36 apps</p><div style={{background:"#000",padding:10,borderRadius:6,marginTop:5}}><input placeholder="yourdomain.geamail.con" style={{width:"100%",padding:8,background:"#111",color:"#0f0",border:"1px solid #0f0",borderRadius:4,fontSize:11}}/><button style={{background:"#0f0",color:"#000",padding:8,width:"100%",border:"none",borderRadius:4,marginTop:5,fontWeight:"bold",fontSize:11}}>Register Domain via GEA-CON</button></div></div>)}
{geaConTab==="code" && (<div style={{marginTop:10}}><p style={{fontSize:11,color:"#0f0"}}>💻 Code Editing - GitHub / SPCK EDIT Prototype Builders</p><textarea value={codeText} onChange={e=>setCodeText(e.target.value)} style={{width:"100%",height:150,padding:8,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6,marginTop:5,fontFamily:"monospace",fontSize:11}}/><div style={{display:"flex",gap:6,marginTop:6}}><button onClick={()=>alert("Pushing to GitHub via GEA-CON - RC:9882150")} style={{flex:1,padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:4,fontWeight:"bold",fontSize:11}}>GitHub Push</button><button onClick={()=>alert("SPCK Edit - Mobile IDE prototype - Building APK")} style={{flex:1,padding:8,background:"#222",color:"#fff",border:"none",borderRadius:4,fontSize:11}}>SPCK EDIT Build</button><button onClick={()=>alert("Running prototype builder for 36 apps")} style={{flex:1,padding:8,background:"gold",color:"#000",border:"none",borderRadius:4,fontWeight:"bold",fontSize:11}}>▶️ Run</button></div></div>)}
{geaConTab!=="web" && geaConTab!=="code" && (<div style={{marginTop:10,background:"#000",padding:15,borderRadius:6,textAlign:"center"}}><div style={{fontSize:30}}>{geaConTab==="cloud"?"☁️":geaConTab==="mail"?"📧":geaConTab==="domains"?"🌐":"💾"}</div><p style={{fontSize:12,marginTop:5}}>{geaConTab.toUpperCase()} - GEA-CON {geaConTab} manager for 36 apps</p><button style={{background:"#0f0",color:"#000",padding:8,border:"none",borderRadius:4,marginTop:8,fontWeight:"bold",fontSize:11}}>Open {geaConTab}</button></div>)}
</div></div>)}

{activeTool==="5-geaconnect" && (<div><h3>🔗 5-GEACONNECT - Telecomms SAT Free Calls</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8}}>
<div style={{display:"flex",gap:4}}>{["calls","interpreter","translate"].map(t=><button key={t} onClick={()=>setConnectTab(t)} style={{padding:8,background:connectTab===t?"#0f0":"#222",color:connectTab===t?"#000":"#fff",border:"none",borderRadius:20,fontSize:10,fontWeight:"bold",textTransform:"uppercase"}}>{t}</button>)}</div>
{connectTab==="calls" && (<div style={{marginTop:10}}><p style={{fontSize:11,color:"#0f0"}}>📡 Nino Simless SAT - Free Calls - Voice Language Interpreter</p><div style={{background:"#000",padding:10,borderRadius:6,marginTop:5}}><input value={satCallTo} onChange={e=>setSatCallTo(e.target.value)} placeholder="Call username@geamail.con or phone via SAT" style={{width:"100%",padding:10,background:"#111",color:"#0f0",border:"1px solid #0f0",borderRadius:6,fontSize:11}}/><button onClick={()=>alert(`Nino Simless SAT Calling ${satCallTo} - Free Call via GEACONNECT - No SIM needed`)} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>📞 SAT Free Call - Simless</button><p style={{fontSize:9,color:"#888",marginTop:5}}>Telecomms: Free calls across 36 apps ecosystem via satellite - No SIM</p></div></div>)}
{connectTab==="interpreter" && (<div style={{marginTop:10}}><p style={{fontSize:11,color:"gold"}}>🗣️ Speak English, Hear Local Languages - Multi Language Voice Translation</p><div style={{background:"#000",padding:10,borderRadius:6,marginTop:5}}><p style={{fontSize:10}}>Speak:</p><input value={speakEnglish} onChange={e=>setSpeakEnglish(e.target.value)} style={{width:"100%",padding:10,background:"#111",color:"#fff",border:"1px solid #333",borderRadius:6,marginTop:3,fontSize:12}}/><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:8}}>
<button onClick={()=>alert(`Translating: ${speakEnglish} → Yoruba: Bawo ni o...`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ Yoruba</button>
<button onClick={()=>alert(`Translating: ${speakEnglish} → Hausa: Yaya kake...`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ Hausa</button>
<button onClick={()=>alert(`Translating: ${speakEnglish} → Igbo: Kedu ka ị mere...`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ Igbo</button>
<button onClick={()=>alert(`Translating: ${speakEnglish} → French...`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ French</button>
</div><button onClick={()=>alert("Voice Interpreter Active: Speak English, hearer hears local language - Real time")} style={{background:"gold",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>🎙️ Voice Interpreter ON - Real Time</button></div></div>)}
{connectTab==="translate" && (<div style={{marginTop:10,background:"#000",padding:15,borderRadius:6,textAlign:"center"}}><div style={{fontSize:30}}>🌐</div><p style={{fontSize:12}}>Multi Language Voice Translation Tech System - Built for 36 Apps</p><p style={{fontSize:10,color:"#888",marginTop:5}}>Speak English, system converts to hearer local language automatically</p></div>)}
</div></div>)}

{activeTool==="36-virtual-holy-bible" && (<div><h3 style={{color:"gold"}}>📖 36-VIRTUAL-HOLY-BIBLE - BUILT</h3><div style={{background:"#111",border:"2px solid gold",padding:12,borderRadius:10,marginTop:8}}><p style={{color:"gold",fontWeight:"bold"}}>{bibleStories[bibleStory].title}</p><p style={{fontSize:12,marginTop:6}}>{bibleStories[bibleStory].text}</p><div style={{width:"100%",height:100,background:"linear-gradient(45deg,#000,#333,gold)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",marginTop:10}}>🔥 LET THERE BE LIGHT - 4K VR</div><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:10}}>{Object.keys(bibleStories).map(k=><button key={k} onClick={()=>setBibleStory(k)} style={{padding:8,background:bibleStory===k?"gold":"#222",color:bibleStory===k?"#000":"#fff",border:"none",borderRadius:6,fontSize:10}}>{bibleStories[k].title}</button>)}</div><p style={{background:"#000",padding:8,borderRadius:6,marginTop:8,fontSize:12}}>{bibleVerse}</p></div></div>)}

</div>
<div style={{textAlign:"center",padding:10,color:"#333",fontSize:9}}>GEAPPLE RC:9882150 - Batch 1 Upgraded - CEO Specs - To The Glory Of God</div>
</div>
);
}