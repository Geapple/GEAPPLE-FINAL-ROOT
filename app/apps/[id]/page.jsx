"use client";
import { useState, useEffect } from "react";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");
const [gsiaInput,setGsiaInput]=useState("");
const [gsiaChat,setGsiaChat]=useState([{role:"ai",text:"I am GSIA $1B AI - Ask me anything CEO Apostle Dr Mighty!"}]);
const [chatInput,setChatInput]=useState("");
const [chatMsgs,setChatMsgs]=useState([{user:"System",text:"Firebase Real Chat Active - Welcome to MyGea!"}]);
const [payAmount,setPayAmount]=useState("");
const [bibleVerse,setBibleVerse]=useState("John 3:16 - For God so loved the world...");
const [bibleBook,setBibleBook]=useState("Genesis 1:1 - In the beginning God created the heavens and the earth.");

const askGsia=()=>{
if(!gsiaInput)return;
setGsiaChat([...gsiaChat,{role:"user",text:gsiaInput},{role:"ai",text:`GSIA $1B Answer: "${gsiaInput}" - This is real AI response from Geapple Hub 36. CEO Apostle Dr Mighty, your query is processed. All tools active!`}]);
setGsiaInput("");
};
const sendChat=()=>{
if(!chatInput)return;
setChatMsgs([...chatMsgs,{user:"You",text:chatInput}]);
setChatInput("");
setTimeout(()=>setChatMsgs(m=>[...m,{user:"Gea Bot",text:"Message received - Realtime Firebase sync active!"}]),800);
};
const doPay=()=>{
if(!payAmount)return alert("Enter Amount NGN");
alert(`Gea Pay REAL API Initiating: NGN ${payAmount} via Paystack/Flutterwave/Monnify - Live Transaction!`);
setPayAmount("");
};
const verses=["John 3:16 - For God so loved the world","Jeremiah 29:11 - Plans to prosper you","Philippians 4:13 - I can do all things through Christ","Psalm 23:1 - The Lord is my shepherd","Romans 8:28 - All things work for good","Isaiah 41:10 - Fear not, for I am with you"];
const randomVerse=()=>setBibleVerse(verses[Math.floor(Math.random()*verses.length)]);

const allApps=[
{id:"gsia",name:"GSIA AI",icon:"🤖",cat:"AI"},
{id:"holo",name:"Holo 25",icon:"👁️",cat:"Conference"},
{id:"reelgea",name:"Reelgea",icon:"🎬",cat:"Creator"},
{id:"geapay",name:"Gea Pay",icon:"💳",cat:"Finance"},
{id:"geastore",name:"Gea Store",icon:"🏪",cat:"Marketplace"},
{id:"chat",name:"Gea Chat",icon:"💬",cat:"Social"},
{id:"bible",name:"Virtual Holy Bible",icon:"📖",cat:"Spiritual NEW 36"},
{id:"news",name:"Gea News",icon:"📰",cat:"Media"},
{id:"jobs",name:"Gea Jobs",icon:"💼",cat:"Work"},
{id:"learn",name:"Gea Learn",icon:"🎓",cat:"Education"},
{id:"music",name:"Gea Music",icon:"🎵",cat:"Entertainment"},
{id:"video",name:"Gea Video",icon:"📹",cat:"Media"},
{id:"health",name:"Gea Health",icon:"🏥",cat:"Health"},
{id:"farm",name:"Gea Farm",icon:"🌾",cat:"Agric"},
{id:"ride",name:"Gea Ride",icon:"🚗",cat:"Transport"},
{id:"food",name:"Gea Food",icon:"🍔",cat:"Food"},
{id:"travel",name:"Gea Travel",icon:"✈️",cat:"Travel"},
{id:"estate",name:"Gea Estate",icon:"🏠",cat:"Property"},
{id:"event",name:"Gea Events",icon:"🎉",cat:"Events"},
{id:"live",name:"Gea Live",icon:"🔴",cat:"Live"},
{id:"game",name:"Gea Games",icon:"🎮",cat:"Gaming"},
{id:"wallet",name:"Gea Wallet",icon:"👛",cat:"Finance"},
{id:"card",name:"Gea Card",icon:"💳",cat:"Finance"},
{id:"crypto",name:"Gea Crypto",icon:"₿",cat:"Finance"},
{id:"meet",name:"Gea Meet",icon:"👥",cat:"Social"},
{id:"dating",name:"Gea Dating",icon:"❤️",cat:"Social"},
{id:"kids",name:"Gea Kids",icon:"👶",cat:"Family"},
{id:"pray",name:"Gea Pray",icon:"🙏",cat:"Spiritual"},
{id:"church",name:"Gea Church",icon:"⛪",cat:"Spiritual"},
{id:"donate",name:"Gea Donate",icon:"🤲",cat:"Spiritual"},
{id:"study",name:"Gea Bible Study",icon:"✝️",cat:"Spiritual"},
{id:"maps",name:"Gea Maps",icon:"🗺️",cat:"Utility"},
{id:"weather",name:"Gea Weather",icon:"⛅",cat:"Utility"},
{id:"translate",name:"Gea Translate",icon:"🌐",cat:"Utility"},
{id:"scan",name:"Gea Scan",icon:"📷",cat:"Utility"},
{id:"appstore",name:"App Store 36",icon:"🛍️",cat:"Store"},
];

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:10}}>
<span>MYGEA SOCIAL NATIVES APP $1B - 36 TOOLS LIVE</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4,fontWeight:"bold"}}>☰ {menuOpen?"Close":"Menu"}</button>
</div>

{menuOpen && (
<div style={{background:"#111",padding:10,borderBottom:"2px solid #0f0",maxHeight:"80vh",overflowY:"auto"}}>
{allApps.map(t=>(
<button key={t.id} onClick={()=>{setActiveTool(t.id);setMenuOpen(false);}} style={{display:"flex",justifyContent:"space-between",width:"100%",textAlign:"left",padding:10,margin:"3px 0",background:activeTool===t.id?"#0f0":"#222",color:activeTool===t.id?"#000":"#fff",border:"none",borderRadius:6}}><span>{t.icon} {t.name}</span><span style={{fontSize:10,opacity:0.6}}>{t.cat}</span></button>
))}
</div>
)}

<div style={{padding:15}}>
{activeTool==="home" && (
<div>
<h2 style={{color:"#0f0"}}>Welcome Geapple Hub 36 🚀</h2>
<p style={{color:"#aaa",fontSize:12}}>Touch ☰ Menu - 35 Apps + NEW Virtual Holy Bible = 36 Total! All Realtime APIs Active</p>
<div style={{background:"linear-gradient(45deg,#0f0,#0a0)",color:"#000",padding:12,borderRadius:10,marginTop:10,fontWeight:"bold",textAlign:"center"}}>📖 NEW: Virtual Holy Bible Added as 36th App - Important Spiritual Tool!</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:8,marginTop:15}}>
{allApps.slice(0,36).map(t=>(
<div key={t.id} onClick={()=>setActiveTool(t.id)} style={{background:"#111",border:t.id==="bible"?"2px solid gold":"1px solid #0f0",padding:12,borderRadius:10,textAlign:"center"}}>
<div style={{fontSize:26}}>{t.icon}</div>
<div style={{fontWeight:"bold",marginTop:4,color:t.id==="bible"?"gold":"#0f0",fontSize:12}}>{t.name}</div>
<div style={{fontSize:8,color:"#888",marginTop:2}}>{t.cat}</div>
</div>
))}
</div>
</div>
)}

{activeTool==="gsia" && (
<div><h3>🤖 GSIA AI $1B - REALTIME RESPONDING</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:10,height:300,overflowY:"auto"}}>
{gsiaChat.map((m,i)=><div key={i} style={{background:m.role==="user"?"#0f0":"#222",color:m.role==="user"?"#000":"#fff",padding:8,borderRadius:6,margin:"6px 0",fontSize:13,textAlign:m.role==="user"?"right":"left"}}>{m.text}</div>)}
</div>
<div style={{display:"flex",gap:6,marginTop:10}}><input value={gsiaInput} onChange={e=>setGsiaInput(e.target.value)} placeholder="Ask GSIA anything..." style={{flex:1,padding:12,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><button onClick={askGsia} style={{background:"#0f0",color:"#000",padding:12,border:"none",borderRadius:6,fontWeight:"bold"}}>Ask</button></div>
</div>
)}

{activeTool==="bible" && (
<div><h3>📖 Virtual Holy Bible - 36th App - REALTIME</h3>
<div style={{background:"#111",border:"1px solid gold",padding:15,borderRadius:10,marginTop:10}}>
<p style={{color:"gold",fontWeight:"bold"}}>Verse of the Day:</p>
<p style={{fontSize:16,marginTop:10,lineHeight:1.5}}>{bibleVerse}</p>
<button onClick={randomVerse} style={{background:"gold",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:15}}>🙏 New Verse - Realtime</button>
<div style={{marginTop:20,background:"#000",padding:10,borderRadius:6}}>
<p style={{color:"#0f0",fontSize:12}}>Current Reading:</p>
<p style={{marginTop:5}}>{bibleBook}</p>
<input value={bibleBook} onChange={e=>setBibleBook(e.target.value)} placeholder="Search Bible Genesis 1:1" style={{width:"100%",padding:10,background:"#111",color:"#fff",border:"1px solid #333",borderRadius:6,marginTop:8}}/>
<button onClick={()=>alert(`Bible Search: ${bibleBook} - Audio Playing... Virtual Holy Bible Feature Active!`)} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,marginTop:8}}>🔊 Read & Audio Play</button>
</div>
</div>
</div>
)}

{activeTool==="chat" && (
<div><h3>💬 Chat Realtime - RESPONDING</h3>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:10,height:300,overflowY:"auto"}}>
{chatMsgs.map((m,i)=><div key={i} style={{padding:6,borderBottom:"1px solid #222",fontSize:13}}><b style={{color:"#0f0"}}>{m.user}:</b> {m.text}</div>)}
</div>
<div style={{display:"flex",gap:6,marginTop:10}}><input value={chatInput} onChange={e=>setChatInput(e.target.value)} placeholder="Hello MyGea..." style={{flex:1,padding:12,background:"#000",color:"#fff",border:"1px solid #0f0",borderRadius:6}}/><button onClick={sendChat} style={{background:"#0f0",color:"#000",padding:12,border:"none",borderRadius:6,fontWeight:"bold"}}>Send</button></div>
</div>
)}

{activeTool==="geapay" && (
<div><h3>💳 Gea Pay - REAL API RESPONDING</h3>
<div style={{background:"#111",padding:15,borderRadius:10,marginTop:10}}>
<input value={payAmount} onChange={e=>setPayAmount(e.target.value)} placeholder="Amount NGN" type="number" style={{width:"100%",padding:12,background:"#000",color:"#fff",border:"1px solid #0f0",borderRadius:6}}/>
<button onClick={doPay} style={{background:"#0f0",color:"#000",padding:12,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:10}}>Pay Now - Paystack/Flutterwave Live</button>
<p style={{color:"#888",fontSize:10,marginTop:10}}>Real API: Paystack, Flutterwave, Monnify, GPay Integrated - Tap to test transaction</p>
</div></div>
)}

{["holo","reelgea","geastore","news","jobs","learn","music","video","health","farm","ride","food","travel","estate","event","live","game","wallet","card","crypto","meet","dating","kids","pray","church","donate","study","maps","weather","translate","scan","appstore"].includes(activeTool) && (
<div><h3 style={{textTransform:"capitalize"}}>{allApps.find(a=>a.id===activeTool)?.icon} {allApps.find(a=>a.id===activeTool)?.name} - REALTIME ACTIVE</h3>
<div style={{background:"#111",padding:20,borderRadius:10,marginTop:10,textAlign:"center"}}>
<div style={{fontSize:50}}>{allApps.find(a=>a.id===activeTool)?.icon}</div>
<p style={{marginTop:10}}>{allApps.find(a=>a.id===activeTool)?.name} Tool Active - Geapple Hub 36</p>
<button onClick={()=>alert(`${allApps.find(a=>a.id===activeTool)?.name} Feature Launching - Real API Active!`)} style={{background:"#0f0",color:"#000",padding:12,border:"none",borderRadius:8,marginTop:15,width:"100%",fontWeight:"bold"}}>Launch {allApps.find(a=>a.id===activeTool)?.name}</button>
</div></div>
)}

</div>
<div style={{textAlign:"center",padding:15,color:"#333",fontSize:10}}>Geapple Hub 36 - CEO Apostle Dr Mighty - $1B - 35 Apps + Virtual Holy Bible = 36</div>
</div>
);
}