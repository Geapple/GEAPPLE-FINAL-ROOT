"use client";
import {useState} from "react";
export default function App6({apiCall,holoOn}){
const [imgProj,setImgProj]=useState(false);
const [sensorOn,setSensorOn]=useState(false);
const [apiOn,setApiOn]=useState(true);
const [holoImg,setHoloImg]=useState("holo1");
const [confOn,setConfOn]=useState(false);
return(
<div style={{background:"#000",minHeight:400,padding:10}}>
<div style={{background:"#111",border:"2px solid #f0f",borderRadius:12,padding:10}}>
<div style={{fontSize:11,fontWeight:"bold",color:"#f0f",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span>6-MYGEA-HOLO - Holo Images Projector Sensors API On/Off - 100 Participants Conference + Voice Translation</span>
<div style={{display:"flex",gap:4}}>
<button onClick={()=>{setApiOn(!apiOn); apiCall("6-holo","api-"+(apiOn?"off":"on"));}} style={{padding:4,background:apiOn?"#0f0":"#f00",color:apiOn?"#000":"#fff",border:"none",borderRadius:4,fontSize:7,fontWeight:"bold"}}>API {apiOn?"ON 🟢":"OFF 📴"}</button>
</div>
</div>

<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
<button onClick={()=>{setImgProj(!imgProj); apiCall("6-holo","projector-"+(imgProj?"off":"on"));}} style={{padding:8,background:imgProj?"#f0f":"#222",color:imgProj?"#fff":"#888",border:imgProj?"2px solid #f0f":"1px solid #333",borderRadius:8,fontSize:8,fontWeight:"bold"}}>
👁️ Projector {imgProj?"ON 🟢":"OFF 📴"} API /holo/projector/{imgProj?"on":"off"}
</button>
<button onClick={()=>{setSensorOn(!sensorOn); apiCall("6-holo","sensors-"+(sensorOn?"off":"on"));}} style={{padding:8,background:sensorOn?"#0ff":"#222",color:sensorOn?"#000":"#888",border:sensorOn?"2px solid #0ff":"1px solid #333",borderRadius:8,fontSize:8,fontWeight:"bold"}}>
📡 Sensors {sensorOn?"ON 🟢":"OFF 📴"} API /holo/sensors/{sensorOn?"on":"off"}
</button>
<button onClick={()=>{setConfOn(!confOn); apiCall("6-holo","100-conf-"+(confOn?"off":"on"));}} style={{padding:8,background:confOn?"#0f0":"#222",color:confOn?"#000":"#888",border:confOn?"2px solid #0f0":"1px solid #333",borderRadius:8,fontSize:8,fontWeight:"bold"}}>
👥 100 Holo {confOn?"ON 🟢":"OFF 📴"} API /holo/100
</button>
</div>

<div style={{marginTop:10,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",height:150,background:"#000",borderRadius:12,border:imgProj?"2px solid #f0f":"1px solid #333",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:6,left:6,fontSize:7,color:"#f0f",background:"#111",padding:3,borderRadius:4}}>Projector: {imgProj?"ON":"OFF 📴"} | Sensors: {sensorOn?"ON - 5G Cameras":"OFF 📴"} | API: {apiOn?"ON 🟢":"OFF 📴"} | {sensorOn?"Sensor Detecting":""}</div>
<div style={{fontSize:60,marginTop:10,filter:imgProj?"drop-shadow(0 0 20px #f0f)":"none",animation:imgProj?"holoFloat 3s ease-in-out infinite":"none"}}>👁️</div>
<div style={{fontSize:10,color:"#f0f",marginTop:6,textAlign:"center",fontWeight:"bold"}}>
{imgProj?"Holo Images Projector ON - "+holoImg+" - 5G Cameras Sensors Active - API /holo/images/projector - Working":"Holo Projector OFF 📴 - Click to Enable - 5G Cameras Sensors OFF"}
</div>
<div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
<button onClick={()=>{setHoloImg("holo1"); apiCall("6-holo","holo-image-1");}} style={{padding:6,background:holoImg==="holo1"&&imgProj?"#f0f":"#333",border:"none",borderRadius:6,fontSize:9,color:"#fff"}}>🖼️ Image 1 API /holo/image/1</button>
<button onClick={()=>{setHoloImg("holo2"); apiCall("6-holo","holo-image-2");}} style={{padding:6,background:holoImg==="holo2"&&imgProj?"#0ff":"#333",border:"none",borderRadius:6,fontSize:9,color:"#fff"}}>🖼️ Image 2 API /holo/image/2</button>
<button onClick={()=>apiCall("6-holo","holo-selfie")} style={{padding:6,background:"#f0f",border:"none",borderRadius:6,fontSize:9,color:"#fff"}}>🤳 Selfie Holo API /holo/selfie</button>
<button onClick={()=>apiCall("6-holo","holo-video")} style={{padding:6,background:"#0f0",border:"none",borderRadius:6,fontSize:9,color:"#000"}}>📹 Video Holo API /holo/video</button>
</div>
<style>{`@keyframes holoFloat{0%,100%{transform:translateY(0px) rotateY(0deg)}50%{transform:translateY(-10px) rotateY(20deg)}}`}</style>
</div>

<div style={{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
<div style={{background:"#000",padding:8,borderRadius:8,border:"1px solid #0ff"}}>
<div style={{fontSize:9,color:"#0ff",fontWeight:"bold"}}>📡 Sensors API On/Off - 5G Cameras Sensor Detection</div>
<div style={{marginTop:6,display:"flex",flexDirection:"column",gap:4}}>
<button onClick={()=>{setSensorOn(!sensorOn); apiCall("6-holo","camera-5g");}} style={{padding:6,background:sensorOn?"#0ff":"#222",color:sensorOn?"#000":"#0ff",border:"1px solid #0ff",borderRadius:6,fontSize:8,fontWeight:"bold"}}>📷 5G Cameras {sensorOn?"ON 🟢 - Sensor Active":"OFF 📴"} API /camera/5g/sensor</button>
<button onClick={()=>apiCall("6-holo","sensor-detect")} style={{padding:6,background:"#222",border:"1px solid #f0f",borderRadius:6,fontSize:8,color:"#f0f"}}>🔍 Sensor Detect API /sensor/detect - {sensorOn?"Detecting Objects":"OFF"}</button>
<button onClick={()=>apiCall("6-holo","sensor-projector")} style={{padding:6,background:"#222",border:"1px solid #0f0",borderRadius:6,fontSize:8,color:"#0f0"}}>📽️ Projector Sensor Sync API /sensor/projector/sync - {imgProj&&sensorOn?"Synced ✅":"OFF"}</button>
</div>
</div>
<div style={{background:"#000",padding:8,borderRadius:8,border:"1px solid #f0f"}}>
<div style={{fontSize:9,color:"#f0f",fontWeight:"bold"}}>🖼️ Holo Images Projector Gallery API /holo/images</div>
<div style={{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
{["🌍 Earth","👤 Avatar","🏠 Room","🚀 Space","🌊 Ocean","🏔️ Mountain"].map(img=>(
<div key={img} onClick={()=>{setHoloImg(img); setImgProj(true); apiCall("6-holo","gallery-"+img);}} style={{padding:6,background:imgProj?"#111":"#222",border:img===holoImg&&imgProj?"1px solid #f0f":"1px solid #333",borderRadius:6,textAlign:"center",cursor:"pointer",fontSize:7}}>{img} API</div>
))}
</div>
<div style={{marginTop:6,fontSize:7,color:"#f0f"}}>Images Projector {imgProj?"ON - Projecting "+holoImg:"OFF 📴"} - API /holo/images/projector/on-off - Working</div>
</div>
</div>

<div style={{marginTop:10,background:"#000",padding:8,borderRadius:8,border:"1px solid #0ff"}}>
<div style={{fontSize:9,color:"#0ff",fontWeight:"bold"}}>🗣️ Voice Translation Interpretation Technology API - Countries Avatar - Speak English Hear Local Foreign</div>
<div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}>
{["🇳🇬 Nigeria","🇺🇸 USA","🇬🇧 UK","🇨🇳 China","🇮🇳 India","🇿🇦 SA","🇧🇷 Brazil","🇩🇪 Germany","🇫🇷 France","🇯🇵 Japan"].map(c=>(
<div key={c} onClick={()=>apiCall("6-holo","avatar-"+c+"-"+(apiOn?"on":"off"))} style={{padding:4,background:apiOn?"#222":"#330000",border:apiOn?"1px solid #f0f":"1px solid #f00",borderRadius:12,fontSize:7,cursor:"pointer",opacity:apiOn?"1":"0.5"}}>{c} Avatar {apiOn?"API ON":"API OFF 📴"}</div>
))}
</div>
</div>

<div style={{marginTop:8,background:"#111",padding:6,borderRadius:6}}>
<div style={{fontSize:7,color:"#f0f",fontWeight:"bold"}}>HOLO PLATFORM API ENDPOINTS - ON/OFF WORKING:</div>
<div style={{fontSize:6,color:"#888",marginTop:4,lineHeight:1.5}}>
/api/holo/projector/on + /api/holo/projector/off + /api/holo/images/projector/on + /api/holo/images/projector/off + /api/holo/sensors/on + /api/holo/sensors/off + /api/holo/api/on + /api/holo/api/off + /api/holo/100/conference + /api/camera/5g/sensor + /api/sensor/detect + /api/holo/image/1 + /api/holo/image/2 + /api/holo/selfie + /api/holo/video + All Connected Working - Fit Screen 〰️ - RC:9882150
</div>
</div>
</div>
</div>
);
}