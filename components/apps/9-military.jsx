"use client";
import {useState} from "react";
export default function App9({apiCall}){
const [milScan,setMilScan]=useState(false);
const [cam5g,setCam5g]=useState(false);
const [eraserOn,setEraserOn]=useState(false);
const [scanResult,setScanResult]=useState(null);
const [selectedScan,setSelectedScan]=useState(null);
const [defenseOn,setDefenseOn]=useState(false);

const addScan=(type,status)=>{
const scan={id:Date.now(),type:type,status:status||"Detected",time:new Date().toLocaleTimeString(),loc:"Border Control - PHC 4.8156N 7.0498E - 5G Camera",cam:"5G Video Camera Sensor"};
setScanResult(scan);
setSelectedScan(scan);
};

const shareTo=(platform,scan)=>{
apiCall("9-mil","share-"+platform+"-"+(scan?.id||"general")+"-military");
};

return(
<div style={{background:"#111",minHeight:420,padding:10}}>
<div style={{background:"#000",border:"1px solid #f00",borderRadius:12,padding:10}}>
<div style={{fontSize:11,fontWeight:"bold",color:"#f00",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span>🎖️ 9-MILITARY-BORD - 5G Video Cameras Sensor + Share UI Platforms + Defense Surveillance - API /military</span>
<div style={{display:"flex",gap:4}}>
<button onClick={()=>{setCam5g(!cam5g); apiCall("9-mil","5g-camera-"+(cam5g?"off":"on"));}} style={{padding:4,background:cam5g?"#0ff":"#333",color:cam5g?"#000":"#fff",border:"none",borderRadius:4,fontSize:7,fontWeight:"bold"}}>📸 5G Cam {cam5g?"ON 🟢":"OFF 📴"}</button>
<button onClick={()=>{setDefenseOn(!defenseOn); apiCall("9-mil","defense-"+(defenseOn?"off":"on"));}} style={{padding:4,background:defenseOn?"#f00":"#333",color:"#fff",border:"none",borderRadius:4,fontSize:7,fontWeight:"bold"}}>🛡️ Defense {defenseOn?"ON 🟢":"OFF"}</button>
</div>
</div>

<div style={{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
<div onClick={()=>{setMilScan(!milScan); setCam5g(true); apiCall("9-mil","sensors"); addScan("Sensors Scan","Scanning");}} style={{background:milScan?"#330000":"#222",border:milScan?"2px solid #f00":"1px solid #333",padding:10,borderRadius:8,cursor:"pointer"}}>
<div style={{fontSize:9,fontWeight:"bold"}}>🔍 Sensors {milScan?"ON SCANNING 🟢":"OFF - Click to Scan"} - API /military/sensors</div>
<div style={{fontSize:7,color:"#f00",marginTop:4}}>5G Cameras + Eraser Sensors - {cam5g?"5G Cam ON Recording":"OFF"} - Working - API /military/sensors/on</div>
</div>
<div onClick={()=>{setEraserOn(!eraserOn); apiCall("9-mil","eraser-"+(eraserOn?"off":"on")); addScan("Eraser Sensor",eraserOn?"ON Erasing":"OFF");}} style={{background:eraserOn?"#330000":"#222",border:eraserOn?"2px solid gold":"1px solid #333",padding:10,borderRadius:8,cursor:"pointer"}}>
<div style={{fontSize:9,fontWeight:"bold",color:"gold"}}>🧹 Eraser Sensors {eraserOn?"ON Erasing 🟢":"OFF"} - API /military/eraser/{eraserOn?"on":"off"}</div>
<div style={{fontSize:7,color:"gold",marginTop:4}}>Eraser Sensors - Drugs Weapons IED Contraband - API /eraser/sensor - Working</div>
</div>
<div onClick={()=>apiCall("9-mil","gsia-cyber")} style={{background:"#222",border:"1px solid #f00",padding:10,borderRadius:8,cursor:"pointer"}}>
<div style={{fontSize:9,fontWeight:"bold"}}>🛡️ GSIA-CYBER-C API /cyber/core - Working - {defenseOn?"Defense ON 🟢":"OFF"}</div>
<div style={{fontSize:7,color:"#f00",marginTop:4}}>Cyber Core - Defense Surveillance - API /cyber/core - Connected</div>
</div>
</div>

<div style={{marginTop:10,background:"#000",padding:10,borderRadius:10,border:"1px solid #f00"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#f00",display:"flex",justifyContent:"space-between"}}>
<span>📸 5G Video Cameras Sensor - Scan Drugs Weapons IED Contraband Detecting Sensors - API /military/scan - Working</span>
<span style={{fontSize:7,background:cam5g?"#0ff":"#333",color:cam5g?"#000":"#fff",padding:3,borderRadius:4}}>5G Cam {cam5g?"ON - Recording 5G Video":"OFF 📴"}</span>
</div>
<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
{[
{icon:"💊",name:"Drugs Scan",api:"drugs",color:"#f0f"},
{icon:"🔫",name:"Weapons Scan",api:"weapons",color:"#f00"},
{icon:"💣",name:"IED Scan",api:"ied",color:"#ff0"},
{icon:"📦",name:"Contraband",api:"contraband",color:"gold"},
{icon:"📷",name:"5G Cameras",api:"5g-cameras",color:"#0ff"},
{icon:"🧹",name:"Eraser Sensors",api:"eraser-sensors",color:"#0f0"},
{icon:"🚶",name:"Human Detect",api:"human",color:"#0ff"},
{icon:"🚗",name:"Vehicle Scan",api:"vehicle",color:"#f00"},
{icon:"📡",name:"RFID Scan",api:"rfid",color:"gold"},
].map(s=>(
<button key={s.name} onClick={()=>{setMilScan(true); setCam5g(true); apiCall("9-mil","scan-"+s.api); addScan(s.name,"Detected - 5G Camera");}} style={{padding:8,background:milScan?"#330000":"#222",color:s.color,border:milScan?"2px solid "+s.color:"1px solid #333",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
<span style={{fontSize:14}}>{s.icon}</span><span>{s.name}</span><span style={{fontSize:6,color:"#888"}}>API /military/scan/{s.api} {milScan?"SCANNING 5G":""}</span>
</button>
))}
</div>
{scanResult&&(
<div style={{marginTop:8,background:"#111",padding:8,borderRadius:8,border:"1px solid #f00"}}>
<div style={{fontSize:8,color:"#f00",fontWeight:"bold"}}>🔍 Scan Result - 5G Video Camera Sensor Captured - {scanResult.time} - {scanResult.loc}</div>
<div style={{fontSize:10,marginTop:4}}>{scanResult.type} - {scanResult.status} - 📸 5G Video Camera Sensor - {scanResult.cam}</div>
<div style={{fontSize:7,color:"#888",marginTop:2}}>Captured by 5G Video Camera Sensor - Border Control - Defense Surveillance - Ready to Share to UI Platforms Icons Links - API /military/scan/result - Working</div>
</div>
)}
</div>

<div style={{marginTop:10,background:"#000",padding:10,borderRadius:10,border:"1px solid #0ff"}}>
<div style={{fontSize:11,fontWeight:"bold",color:"#0ff"}}>🔗 5G Video Cameras Sensor + Share Buttons Functional Links to UI Platforms Icons API Connected - API /share</div>
{selectedScan?<div style={{marginTop:6,background:"#111",padding:6,borderRadius:6,border:"1px solid #0ff"}}><div style={{fontSize:8,color:"#0ff"}}>Selected Scan: {selectedScan.type} - {selectedScan.status} - {selectedScan.time} - 📸 5G Video Camera Sensor - Ready to Share to UI Platforms - Defense Level: {defenseOn?"Classified":"Unclassified"}</div></div>:<div style={{marginTop:6,fontSize:7,color:"#888"}}>Click any Scan above (Drugs Weapons IED etc) to capture with 5G Video Camera Sensor, then share to UI Platforms Icons Links</div>}
<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
<button onClick={()=>shareTo("mygea",selectedScan)} style={{padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🌍</span> Share to MyGea Social API /share/mygea/military - 5G Cam</button>
<button onClick={()=>shareTo("reelgea",selectedScan)} style={{padding:8,background:"#f0f",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🎥</span> Share to ReelGea API /share/reelgea/military - 5G Video</button>
<button onClick={()=>shareTo("geamail",selectedScan)} style={{padding:8,background:"#fff",color:"#000",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>📧</span> Share to GeaMail API /share/geamail/military - Secure</button>
<button onClick={()=>shareTo("geaconnect",selectedScan)} style={{padding:8,background:"#075e54",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>💬</span> Share to GeaConnect API /share/geaconnect/military - Encrypted</button>
<button onClick={()=>shareTo("holo",selectedScan)} style={{padding:8,background:"#111",color:"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>👁️</span> Share to MyGea Holo API /share/holo/military - Holo</button>
<button onClick={()=>shareTo("sat-maps",selectedScan)} style={{padding:8,background:"#111",color:"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🛰️</span> Share to Sat Maps API /share/sat/military - GPS</button>
<button onClick={()=>shareTo("command",selectedScan)} style={{padding:8,background:"#f00",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🎖️</span> Share to Command Center API /share/command - Defense</button>
<button onClick={()=>shareTo("gsia",selectedScan)} style={{padding:8,background:"#111",color:"#f00",border:"1px solid #f00",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🛡️</span> Share to GSIA-CYBER-C API /share/gsia/cyber - Cyber</button>
<button onClick={()=>shareTo("youtube",selectedScan)} style={{padding:8,background:"#ff0000",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>▶️</span> YouTube Live API /share/youtube/military - 5G Video</button>
<button onClick={()=>shareTo("facebook",selectedScan)} style={{padding:8,background:"#1877f2",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>📘</span> Facebook Live API /share/facebook/military - 5G</button>
<button onClick={()=>shareTo("tiktok",selectedScan)} style={{padding:8,background:"#000",color:"#fff",border:"1px solid #fff",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🎵</span> TikTok Live API /share/tiktok/military - 5G Video</button>
<button onClick={()=>shareTo("download",selectedScan)} style={{padding:8,background:"#222",color:"#fff",border:"1px solid #fff",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>⬇️</span> Download Scan API /military/download - 5G Camera</button>
</div>
<div style={{marginTop:8,fontSize:6,color:"#f00"}}>UI Platforms Icons Links - All Share Buttons Functional - 5G Video Cameras Sensor - Gea Store + Gea Pay + Defense - API /share/mygea/military + /share/reelgea/military + /share/geamail/military + /share/geaconnect/military + /share/holo/military + /share/sat/military + /share/command + /share/gsia/cyber + /share/youtube/military + /share/facebook/military + /share/tiktok/military - Fit Screen 〰️ - Defense Surveillance</div>
</div>

<button onClick={()=>{setDefenseOn(!defenseOn); apiCall("9-mil","border-control");}} style={{marginTop:10,width:"100%",padding:12,background:defenseOn?"#0f0":"#f00",color:defenseOn?"#000":"#fff",border:"none",borderRadius:8,fontWeight:"bold"}}>🎖️ Border Control {defenseOn?"ON 🟢 - Defense Surveillance Active - 5G Cameras ON":"ON - Click to Activate Defense Surveillance"} - Systems API /border/control - Working</button>

<div style={{marginTop:8,background:"#111",padding:6,borderRadius:6,border:"1px solid #f00"}}>
<div style={{fontSize:7,color:"#f00",fontWeight:"bold"}}>9-MILITARY-BORD - 5G VIDEO CAMERAS SENSOR + SHARE UI PLATFORMS - API ENDPOINTS:</div>
<div style={{fontSize:6,color:"#888",marginTop:2,lineHeight:1.5}}>
/api/military/sensors/on + /api/military/5g/camera/on + /api/military/eraser/on + /api/military/scan/drugs + /api/military/scan/weapons + /api/military/scan/ied + /api/military/scan/contraband + /api/military/scan/5g-cameras + /api/military/scan/human + /api/military/scan/vehicle + /api/military/scan/rfid + /api/military/border/control + /api/cyber/core + /api/share/mygea/military + /api/share/reelgea/military + /api/share/geamail/military + /api/share/geaconnect/military + /api/share/holo/military + /api/share/sat/military + /api/share/command + /api/share/gsia/cyber + /api/share/youtube/military + /api/military/download + All Connected - 5G Video Cameras Sensor + Share Buttons Functional Links to UI Platforms Icons API Connected - Working - Fit Screen 〰️ - RC:9882150 - Defense
</div>
</div>
</div>
</div>
);
}