"use client";
import {useState} from "react";
export default function App1({apiCall,cameraOn,holoOn}){
const [msg,setMsg]=useState("");
return(
<div style={{background:"#000",padding:8}}>
<div style={{background:"#111",borderRadius:10,padding:10,border:"1px solid #333"}}>
<div style={{display:"flex",gap:8,alignItems:"center"}}><div style={{width:32,height:32,background:"#0f0",borderRadius:16}}></div><div><div style={{fontSize:11,fontWeight:"bold"}}>1-MYGEA-SOCIAL - API /social/post - Working Tools MENU Files Links Buttons API Connected</div><div style={{fontSize:8,color:"#888"}}>5G Camera {cameraOn?"ON 📷":"OFF"} | Holo {holoOn?"ON 👁️":"OFF"} | Voice EN-Local API /voice/translate</div></div></div>
<div style={{marginTop:8,height:110,background:"#222",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",border:cameraOn?"2px solid #0f0":"1px solid #333"}}><span>📷 + 👁️ Holo</span><button onClick={()=>apiCall("1-mygea","camera-selfie")} style={{marginTop:6,padding:6,background:"#0f0",border:"none",borderRadius:6,fontSize:9}}>🤳 Selfie - API /camera/selfie - Touchscreen Fit Working</button></div>
<div style={{display:"flex",justifyContent:"space-around",marginTop:8}}><button onClick={()=>apiCall("1-mygea","like")} style={{background:"none",border:"none",color:"#fff"}}>👍 14K</button><button onClick={()=>apiCall("1-mygea","comment")} style={{background:"none",border:"none",color:"#fff"}}>💬 94</button><button onClick={()=>apiCall("1-mygea","share")} style={{background:"none",border:"none",color:"#fff"}}>↗️ 217</button><button onClick={()=>apiCall("1-mygea","bookmark")} style={{background:"none",border:"none",color:"#fff"}}>🔖 757</button></div>
<div style={{marginTop:8,display:"flex",gap:4}}><button onClick={()=>apiCall("1-mygea","files")} style={{padding:5,background:"#222",border:"1px solid #0f0",borderRadius:6,fontSize:8}}>📁 Files Link API /files</button><button onClick={()=>apiCall("1-mygea","settings")} style={{padding:5,background:"#222",border:"1px solid #0ff",borderRadius:6,fontSize:8}}>⚙️ Settings API /settings</button><button onClick={()=>apiCall("1-mygea","manual")} style={{padding:5,background:"#222",border:"1px solid gold",borderRadius:6,fontSize:8}}>📖 Manual API /manual</button></div>
</div>
</div>
);
}