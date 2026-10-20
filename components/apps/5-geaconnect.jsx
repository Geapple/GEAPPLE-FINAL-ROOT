"use client";
import {useState} from "react";
export default function App5({apiCall,cameraOn}){
const [msg,setMsg]=useState("");
return(
<div style={{background:"#e5ddd5",minHeight:340,display:"flex",flexDirection:"column"}}>
<div style={{padding:8,background:"#075e54",color:"#fff",fontSize:9,display:"flex",justifyContent:"space-between"}}><span>5-GEACONNECT - SAT Free Calls + Nino Interpreter + Multi Streaming 5 Live - API /connect</span><span onClick={()=>apiCall("5-conn","camera")} style={{background:cameraOn?"#0f0":"#000",padding:3,borderRadius:4}}>📷 5G {cameraOn?"ON":"OFF"}</span></div>
<div style={{padding:8,flex:1}}>
<div style={{background:"#fff",padding:8,borderRadius:8,fontSize:11,color:"#000"}}>Gea: SAT Free Calls Holo ON - Nino Interpreter API /nino/translate - Speak English Hear Local - Working</div>
<div style={{marginTop:8,background:"#fff",padding:8,borderRadius:8}}><div style={{fontSize:10,fontWeight:"bold",color:"#000"}}>Nino Language Interpreter Translation Voice Technology - API /nino - Speak English and Hear Local Foreign Languages</div><div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}>{["English","Igbo","Yoruba","Hausa","French","Spanish","Chinese","Arabic"].map(l=>(<button key={l} onClick={()=>apiCall("5-conn","nino-"+l)} style={{padding:4,background:"#075e54",color:"#fff",border:"none",borderRadius:12,fontSize:8}}>{l} API</button>))}</div></div>
<div style={{marginTop:8,background:"#111",padding:8,borderRadius:8}}><div style={{fontSize:10,fontWeight:"bold",color:"#0ff"}}>Multi Streaming 5 Life Streaming UI Platforms Icons - API /stream/live - Working</div><div style={{marginTop:6,display:"flex",gap:6,flexWrap:"wrap"}}>{["YouTube Live","Facebook Live","TikTok Live","Instagram Live","Galarea Live"].map(s=>(<button key={s} onClick={()=>apiCall("5-conn","stream-"+s)} style={{padding:6,background:"#222",border:"1px solid #0ff",borderRadius:8,fontSize:8,color:"#fff"}}>{s} API</button>))}</div></div>
</div>
<div style={{padding:8,background:"#f0f0f0",display:"flex",gap:6,alignItems:"center"}}><div style={{flex:1,background:"#fff",borderRadius:24,display:"flex",alignItems:"center",padding:"0 10px",gap:8}}><span>😊</span><input value={msg} onChange={e=>setMsg(e.target.value)} placeholder="Message + Nino Translate + SAT Call" style={{flex:1,padding:10,border:"none",background:"transparent",fontSize:11}}/><span>📎</span><span>📷</span></div><button onClick={()=>{apiCall("5-conn","send"); setMsg("");}} style={{width:44,height:44,background:"#25d366",border:"none",borderRadius:22}}>🎙️</button></div>
</div>
);
}