"use client";
import { useState } from "react";
import { Batch1API } from "./components/Batch1";
import { Batch2API } from "./components/Batch2";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",position:"sticky",top:0,zIndex:20}}>
<span>GEAPPLE 36 - 1-10 API READY FIXED</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4,fontWeight:"bold"}}>Menu 36</button>
</div>
{menuOpen && (
<div style={{background:"#111",padding:8,borderBottom:"2px solid #0f0"}}>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
{["home","1-mygea-social","2-reelgea","3-geamail-con","4-gea-con","5-geaconnect","6-mygea-holo","7-global-votes","8-degalaxy-sat-","9-military-bord","10-visual-art-g","36-bible"].map(a=>(
<button key={a} onClick={()=>{setActiveTool(a);setMenuOpen(false);}} style={{padding:10,background:activeTool===a?"#0f0":"#222",color:activeTool===a?"#000":"#fff",border:"none",borderRadius:6,fontSize:10,fontWeight:"bold"}}>{a}</button>
))}
</div>
</div>
)}
<div style={{padding:12}}>
<h2 style={{color:"#0f0"}}>🏠 HOME - Fixed Error 7s - Batch1 Batch2 Safe Version</h2>
<p style={{fontSize:11,marginTop:8,color:"#0f0"}}>✅ Ready 18s 21s - No More Module Not Found - All API Windows Working - No Blank Black</p>
<div style={{marginTop:15}}>
<Batch1API />
<Batch2API />
</div>
<div style={{background:"#111",border:"1px solid #0f0",borderRadius:10,padding:10,marginTop:20}}>
<h3>📧 3-GEAMAIL.CON + 📖 36-BIBLE</h3>
<p style={{fontSize:11}}>geamail.con → geapple.admin@gmail.com API + Let There Be Light 🔥 4K VR - African Jesus</p>
</div>
</div>
<div style={{textAlign:"center",padding:10,color:"#333",fontSize:9}}>GEAPPLE RC:9882150 - Fixed Error 7s - Ready Green - 1-10 API</div>
</div>
);
}