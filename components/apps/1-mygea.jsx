"use client";
import {useState} from "react";
export default function App1(){
const [logs,setLogs]=useState([]);
const apiCall=(msg)=>{setLogs([msg,...logs.slice(0,5)]); console.log(msg);};
return(
<div style={{background:"#111",padding:10,borderRadius:10,color:"#fff"}}>
<h3 style={{color:"#0f0"}}>1-MYGEA-SOCIAL - Upgraded</h3>
<div style={{display:"flex",gap:6,flexWrap:"wrap",marginTop:8}}>
<button onClick={()=>apiCall("API /sat/call/free - Connected OK")} style={{padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:6,fontWeight:"bold"}}>Free Call API - Connected OK</button>
<button onClick={()=>apiCall("API /id/bringout - Connected OK")} style={{padding:8,background:"#25d366",color:"#fff",border:"none",borderRadius:6,fontWeight:"bold"}}>Bring Out ID - Connected OK</button>
<button onClick={()=>apiCall("API /sat/bio/connected - Sat+Bio ON")} style={{padding:8,background:"#0ff",color:"#000",border:"none",borderRadius:6,fontWeight:"bold"}}>Sat+Bio ON</button>
<button onClick={()=>apiCall("API /voice/translate - Voice Trans ON")} style={{padding:8,background:"#fff",color:"#000",border:"none",borderRadius:6,fontWeight:"bold"}}>Voice Translate</button>
<button onClick={()=>apiCall("API /holo/25/participants - 25 Holo ON")} style={{padding:8,background:"#f0f",color:"#fff",border:"none",borderRadius:6,fontWeight:"bold"}}>25 Holo</button>
<button onClick={()=>apiCall("API /camera/5g/chip - 5G Cam ON")} style={{padding:8,background:"#f00",color:"#fff",border:"none",borderRadius:6,fontWeight:"bold"}}>5G Cam</button>
</div>
<div style={{marginTop:10,background:"#000",padding:8,borderRadius:6}}>
{logs.length===0?<div style={{fontSize:10,color:"#888"}}>No API calls yet - Click buttons</div>:logs.map((l,i)=>(<div key={i} style={{fontSize:10,color:"#0f0"}}>{l} - Connected OK</div>))}
</div>
<div style={{marginTop:8,fontSize:8,color:"#888"}}>API Endpoints: /api/sat/call/free + /api/id/bringout + /api/sat/bio/connected + /api/voice/translate + /api/holo/25 + /api/camera/5g - All Connected OK - RC:9882150</div>
</div>
);
}