"use client";
import { useState } from "react";
import { Batch1API } from "./components/Batch1-API";
import { Batch2API } from "./components/Batch2-API";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");
const [emailName,setEmailName]=useState("");
const [geamailInbox,setGeamailInbox]=useState([
"API: username@geamail.con -> geapple.admin@gmail.com - SMTP OK",
"API: /api/geamail/bulk - Bulk Mail 36 Apps Ready",
"API: /api/pay/investors - Payment + Data Ready"
]);
const [bibleStory,setBibleStory]=useState("GENESIS");

const APPS_36=[
{id:"home",name:"🏠 HOME",icon:"🏠",gold:true},
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
{id:"36-virtual-holy-bible",name:"36-BIBLE",icon:"📖",gold:true},
];

const bibleData={
GENESIS:{title:"Genesis 1 - Let There Be Light",verse:"Gen 1:3"},
JESUS:{title:"Jesus African Complexion",verse:"Rev 1:14-15"},
};

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
<span>GEAPPLE 36 - 1-10 API WINDOWS FIXED</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4}}>☰ Menu 36</button>
</div>

{menuOpen && (
<div style={{background:"#111",padding:8,borderBottom:"2px solid #0f0"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{APPS_36.map(a=>(
<button key={a.id} onClick={()=>{setActiveTool(a.id);setMenuOpen(false);}} style={{padding:10,background:a.gold?"gold":activeTool===a.id?"#0f0":"#222",color:a.gold?"#000":activeTool===a.id?"#000":"#fff",border:"none",borderRadius:6,fontSize:11,fontWeight:"bold"}}>{a.icon} {a.name}</button>
))}
</div>
</div>
)}

<div style={{padding:12}}>

{activeTool==="home" && (
<div>
<h2 style={{color:"#0f0"}}>🏠 HOME - All 1-10 API Built</h2>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8}}>
<p style={{fontSize:11,color:"#0f0"}}>✅ 1-10 API Package Functions + Windows + Menus Settings Tools Manual Home + Components Split Fix</p>
</div>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginTop:12}}>
{APPS_36.filter(a=>a.id!=="home").map(a=>(
<div key={a.id} onClick={()=>setActiveTool(a.id)} style={{background:a.gold?"#332a00":"#0a0",border:a.gold?"2px solid gold":"1px solid #0f0",padding:10,borderRadius:10,textAlign:"center"}}>
<div style={{fontSize:20}}>{a.icon}</div>
<div style={{fontSize:8,fontWeight:"bold",color:a.gold?"gold":"#0f0"}}>{a.name}</div>
<div style={{fontSize:7,color:"#888"}}>API Built</div>
</div>
))}
</div>
<div style={{marginTop:20}}>
<Batch1API />
<Batch2API />
</div>
</div>
)}

{activeTool==="3-geamail-con" && (
<div>
<h3>📧 3-GEAMAIL.CON - API Built</h3>
<div style={{background:"#111",border:"1px solid #0f0",borderRadius:10,padding:10,marginTop:8}}>
<p style={{fontSize:11}}>All: <b style={{color:"#0f0"}}>username@geamail.con</b> → <b style={{color:"gold"}}>geapple.admin@gmail.com</b></p>
<div style={{display:"flex",gap:6,marginTop:8}}><input value={emailName} onChange={e=>setEmailName(e.target.value)} placeholder="username" style={{flex:1,padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><span style={{padding:10,background:"#222",borderRadius:6}}> @geamail.con</span></div>
<button onClick={()=>{if(!emailName)return;setGeamailInbox([`Linked: ${emailName}@geamail.con -> geapple.admin@gmail.com`,...geamailInbox]);setEmailName("");}} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,marginTop:8,fontWeight:"bold"}}>Link API</button>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:8}}>{geamailInbox.map((m,i)=><div key={i} style={{padding:4,fontSize:11,borderBottom:"1px solid #222"}}>{m}</div>)}</div>
</div>
</div>
)}

{activeTool==="36-virtual-holy-bible" && (
<div>
<h3 style={{color:"gold"}}>📖 36-BIBLE - Let There Be Light</h3>
<div style={{background:"#111",border:"2px solid gold",padding:10,borderRadius:10,marginTop:8}}>
<p style={{color:"gold",fontWeight:"bold"}}>{bibleData[bibleStory].title}</p>
<div style={{height:100,background:"linear-gradient(45deg,#000,gold)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",marginTop:10}}>🔥 4K VR - African Jesus - API</div>
<p style={{background:"#000",padding:8,borderRadius:6,marginTop:8,fontSize:12}}>Genesis 1:3 - Let there be light</p>
</div>
</div>
)}

{activeTool!=="home" && activeTool!=="3-geamail-con" && activeTool!=="36-virtual-holy-bible" && (
<div style={{marginTop:10}}>
<div style={{background:"#111",padding:8,borderRadius:8,marginBottom:10,textAlign:"center"}}><p style={{fontSize:11,color:"#0f0"}}>Showing API Window for {activeTool} - Windows + Home + Settings + Tools + Manual + API Menus</p></div>
<Batch1API />
<Batch2API />
</div>
)}

</div>
<div style={{textAlign:"center",padding:10,color:"#333",fontSize:9}}>GEAPPLE RC:9882150 - Fixed Build Ready - Components Split - 1-10 API Windows</div>
</div>
);
}