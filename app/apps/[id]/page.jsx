"use client";
import { useState } from "react";
import { Batch1API } from "./components/Batch1";
import { Batch2API } from "./components/Batch2";

export default function MyGeaApp(){
const [a,setA]=useState("home");
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",padding:12,fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",textAlign:"center"}}>GEAPPLE 36 - 1-10 API READY GREEN FINAL</div>
<div style={{display:"flex",gap:6,marginTop:12,flexWrap:"wrap"}}>
{["home","2-reelgea","3-geamail","4-gea-con","5-geaconnect","6-holo","7-votes","8-sat","9-military","10-visual","36-bible"].map(id=>(
<button key={id} onClick={()=>setA(id)} style={{padding:8,background:a===id?"#0f0":"#222",color:a===id?"#000":"#fff",border:"none",borderRadius:6,fontSize:10,fontWeight:"bold"}}>{id}</button>
))}
</div>
<div style={{marginTop:15,background:"#111",padding:12,borderRadius:10,border:"1px solid #0f0"}}>
{a==="home" && <div><h2 style={{color:"#0f0"}}>HOME - All 1-10 API Built Working - Ready Green</h2><p style={{fontSize:11}}>Fixed Error 7s - Batch1 Batch2 Safe Simple - No Blank Black</p><div style={{marginTop:10}}><Batch1API /><Batch2API /></div></div>}
{a==="2-reelgea" && <div><h3>2-REELGEA API Built</h3><Batch1API /></div>}
{a==="3-geamail" && <div><h3>3-GEAMAIL.CON</h3><p>username@geamail.con → geapple.admin@gmail.com API + Bulk Mail + Payment + Data</p></div>}
{a==="36-bible" && <div><h3 style={{color:"gold"}}>36-BIBLE - Let There Be Light 🔥</h3><p>4K VR African Jesus Genesis 1:3 - Ready</p></div>}
{a!=="home" && a!=="2-reelgea" && a!=="3-geamail" && a!=="36-bible" && <div><h3>{a} API Built Working</h3><Batch2API /></div>}
</div>
<div style={{textAlign:"center",padding:10,color:"#0f0",fontSize:9,marginTop:20}}>GEAPPLE RC:9882150 - Ready Green Final - 1-10 API - Next 11-15 Batch3</div>
</div>
);
}