"use client";
import { useState } from "react";
import { Batch1API } from "./components/Batch1";
import { Batch2API } from "./components/Batch2";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");
const [emailName,setEmailName]=useState("");
const [geamailInbox,setGeamailInbox]=useState(["API: username@geamail.con -> geapple.admin@gmail.com OK","API: Bulk Mail Ready","API: Payment Ready"]);

const APPS=[
{id:"home",name:"🏠 HOME",icon:"🏠",gold:true},
{id:"1",name:"1-MYGEA-SOCIAL",icon:"🌐"},
{id:"2",name:"2-REELGEA",icon:"🎬"},
{id:"3",name:"3-GEAMAIL.CON",icon:"📧"},
{id:"4",name:"4-GEA-CON",icon:"💬"},
{id:"5",name:"5-GEACONNECT",icon:"🔗"},
{id:"6",name:"6-MYGEA-HOLO",icon:"👁️"},
{id:"7",name:"7-GLOBAL-VOTES",icon:"🗳️"},
{id:"8",name:"8-DEGALAXY-SAT-",icon:"🛰️"},
{id:"9",name:"9-MILITARY-BORD",icon:"🎖️"},
{id:"10",name:"10-VISUAL-ART-G",icon:"🎨"},
{id:"36",name:"36-BIBLE",icon:"📖",gold:true},
];

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
<span>GEAPPLE 36 - FIXED MODULE READY</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4}}>Menu 36</button>
</div>

{menuOpen && (
<div style={{background:"#111",padding:8,borderBottom:"2px solid #0f0"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{APPS.map(a=>(
<button key={a.id} onClick={()=>{setActiveTool(a.id);setMenuOpen(false);}} style={{padding:10,background:a.gold?"gold":activeTool===a.id?"#0f0":"#222",color:a.gold?"#000":activeTool===a.id?"#000":"#fff",border:"none",borderRadius:6,fontSize:11,fontWeight:"bold"}}>{a.icon} {a.name}</button>
))}
</div>
</div>
)}

<div style={{padding:12}}>
<h2 style={{color:"#0f0"}}>🏠 HOME - 1-10 API Windows Fixed - No Module Error</h2>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:8}}>
<p style={{fontSize:11,color:"#0f0"}}>✅ Module not found fixed - Renamed to Batch1 + Batch2 simple</p>
<p style={{fontSize:10}}>API: All 2,4,5,6,7 built to working windows + Menus Settings Tools Manual Home</p>
</div>

<div style={{marginTop:15}}>
<Batch1API />
<Batch2API />
</div>

<div style={{background:"#111",border:"1px solid #0f0",borderRadius:10,padding:10,marginTop:20}}>
<h3>📧 3-GEAMAIL.CON - API</h3>
<p style={{fontSize:11}}>username@geamail.con → geapple.admin@gmail.com</p>
<div style={{display:"flex",gap:6,marginTop:8}}><input value={emailName} onChange={e=>setEmailName(e.target.value)} placeholder="username" style={{flex:1,padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><span style={{padding:10,background:"#222",borderRadius:6}}>@geamail.con</span></div>
<button onClick={()=>{if(!emailName)return;setGeamailInbox([`Linked: ${emailName}@geamail.con`,...geamailInbox]);setEmailName("");}} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,marginTop:8,fontWeight:"bold"}}>Link API</button>
<div style={{background:"#000",padding:8,borderRadius:6,marginTop:8}}>{geamailInbox.map((m,i)=><div key={i} style={{padding:4,fontSize:11,borderBottom:"1px solid #222"}}>{m}</div>)}</div>
</div>

<div style={{background:"#111",border:"2px solid gold",borderRadius:10,padding:10,marginTop:15}}>
<h3 style={{color:"gold"}}>📖 36-BIBLE - Let There Be Light</h3>
<div style={{height:80,background:"linear-gradient(45deg,#000,gold)",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",marginTop:8}}>🔥 4K VR - African Jesus</div>
</div>

</div>
<div style={{textAlign:"center",padding:10,color:"#333",fontSize:9}}>GEAPPLE RC:9882150 - Fixed Ready - Batch1 Batch2 Simple Names</div>
</div>
);
}