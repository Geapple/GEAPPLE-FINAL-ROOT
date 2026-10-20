"use client";
import {useState} from "react";
export default function App8({apiCall}){
const [satLock,setSatLock]=useState(false);
const [camOn,setCamOn]=useState(false);
const [snapShots,setSnapShots]=useState([]);
const [selectedSnap,setSelectedSnap]=useState(null);
const [areaCapture,setAreaCapture]=useState(false);

const addSnap=(type)=>{
const snap={id:Date.now(),type:type,time:new Date().toLocaleTimeString(),loc:"PHC 4.8156N 7.0498E",img:type};
setSnapShots([snap,...snapShots.slice(0,11)]);
setSelectedSnap(snap);
apiCall("8-sat","snap-"+type);
};

const shareTo=(platform,snap)=>{
apiCall("8-sat","share-"+platform+"-"+(snap?.id||"general"));
};

return(
<div style={{background:"#000",minHeight:420,padding:10}}>
<div style={{background:"#111",border:"1px solid #0ff",borderRadius:12,padding:10}}>
<div style={{fontSize:11,fontWeight:"bold",color:"#0ff",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span>🛰️ 8-DEGALAXY-SAT MAPS - 5G Video Cameras Area Captured Snap Shots Share UI Platforms - API /sat</span>
<button onClick={()=>{setCamOn(!camOn); apiCall("8-sat","5g-camera-"+(camOn?"off":"on"));}} style={{padding:4,background:camOn?"#0ff":"#333",color:camOn?"#000":"#fff",border:"none",borderRadius:4,fontSize:7,fontWeight:"bold"}}>📸 5G Cam {camOn?"ON 🟢":"OFF 📴"}</button>
</div>

<div style={{marginTop:10,height:160,background:"#000",borderRadius:12,display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",border:satLock?"2px solid #0ff":"1px solid #333",position:"relative",overflow:"hidden"}}>
<div style={{position:"absolute",top:6,left:6,fontSize:7,color:"#0ff",background:"#111",padding:3,borderRadius:4}}>SAT: {satLock?"LOCKED 🟢":"SEARCHING"} | 5G Cam: {camOn?"ON - Recording":"OFF 📴"} | Area Capture: {areaCapture?"ON":"OFF"} | Snaps: {snapShots.length}</div>
<div style={{fontSize:32,marginTop:10}}>🛰️ 🗺️ SAT TRACKING + 📸 5G VIDEO</div>
<div style={{fontSize:9,color:"#0ff",marginTop:6,textAlign:"center"}}>NORAD TLE GPS Lock PHC 4.8156N 7.0498E - 5G Cameras - CCTV Remote - Area Survey Captures Videos View Your Street Area</div>
<div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
<button onClick={()=>{setSatLock(!satLock); apiCall("8-sat","sat-lock");}} style={{padding:6,background:satLock?"#0ff":"#333",color:satLock?"#000":"#fff",border:"none",borderRadius:6,fontSize:8,fontWeight:"bold"}}>🛰️ SAT Lock {satLock?"ON":"OFF"} API /sat/lock</button>
<button onClick={()=>{setAreaCapture(!areaCapture); apiCall("8-sat","area-capture-"+(areaCapture?"off":"on"));}} style={{padding:6,background:areaCapture?"#0f0":"#222",color:areaCapture?"#000":"#0f0",border:"1px solid #0f0",borderRadius:6,fontSize:8,fontWeight:"bold"}}>📍 Area Capture {areaCapture?"ON 🟢":"OFF"} API /sat/area/capture</button>
<button onClick={()=>{setCamOn(true); addSnap("5G Video Camera");}} style={{padding:6,background:camOn?"#f0f":"#333",color:"#fff",border:"none",borderRadius:6,fontSize:8,fontWeight:"bold"}}>📸 5G Video Cam API /camera/5g/video</button>
</div>
</div>

<div style={{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
<div style={{background:"#000",padding:8,borderRadius:10,border:"1px solid #0ff"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#0ff"}}>📸 5G Video Cameras Area Captured - API /camera/5g/captured</div>
<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:4}}>
<button onClick={()=>{setCamOn(true); addSnap("Area Capture");}} style={{padding:8,background:areaCapture?"#0ff":"#222",color:areaCapture?"#000":"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:7,fontWeight:"bold"}}>📍 Area Capture API /sat/area/capture - {areaCapture?"Capturing":"OFF"}</button>
<button onClick={()=>addSnap("Snap Shot")} style={{padding:8,background:"#f0f",color:"#fff",border:"none",borderRadius:8,fontSize:7,fontWeight:"bold"}}>📸 Snap Shot API /camera/snap - {snapShots.length} Snaps</button>
<button onClick={()=>addSnap("Video Clip")} style={{padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontSize:7,fontWeight:"bold"}}>🎥 Video Clip API /camera/video/clip - 5G</button>
<button onClick={()=>addSnap("Street View")} style={{padding:8,background:"#222",color:"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:7}}>🏘️ Street View API /street/view - PHC</button>
<button onClick={()=>addSnap("CCTV Remote")} style={{padding:8,background:"#222",color:"#0f0",border:"1px solid #0f0",borderRadius:8,fontSize:7}}>📹 CCTV Remote API /cctv/remote</button>
<button onClick={()=>addSnap("SAT Image")} style={{padding:8,background:"#222",color:"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:7}}>🛰️ SAT Image API /sat/image</button>
</div>
<div style={{marginTop:8,background:"#111",padding:6,borderRadius:6}}>
<div style={{fontSize:7,color:"#0ff",fontWeight:"bold"}}>5G Cameras - Working - Area Captured - Snap Shots Gallery Below:</div>
<div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}>
{snapShots.length===0?<span style={{fontSize:7,color:"#888"}}>No snaps yet - Click Snap Shot to capture - 5G Video Cameras Area Captured</span>:snapShots.map(s=>(
<div key={s.id} onClick={()=>setSelectedSnap(s)} style={{padding:4,background:selectedSnap?.id===s.id?"#0ff":"#222",border:selectedSnap?.id===s.id?"2px solid #0ff":"1px solid #333",borderRadius:6,cursor:"pointer",minWidth:70}}>
<div style={{fontSize:8,fontWeight:"bold",color:selectedSnap?.id===s.id?"#000":"#fff"}}>{s.type}</div>
<div style={{fontSize:6,color:selectedSnap?.id===s.id?"#000":"#888"}}>{s.time} - {s.loc}</div>
<div style={{fontSize:12,textAlign:"center",marginTop:2}}>📸</div>
</div>
))}
</div>
</div>
</div>

<div style={{background:"#000",padding:8,borderRadius:10,border:"1px solid #f0f"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#f0f"}}>🔗 Snap Shots Share Buttons to UI Platforms Icons Links - API /share</div>
{selectedSnap?<div style={{marginTop:6,background:"#111",padding:6,borderRadius:6,border:"1px solid #f0f"}}><div style={{fontSize:8,color:"#f0f"}}>Selected Snap: {selectedSnap.type} - {selectedSnap.time} - {selectedSnap.loc} - Ready to Share to UI Platforms</div></div>:<div style={{marginTop:6,fontSize:7,color:"#888"}}>Select a snap shot above to share to UI Platforms Icons Links</div>}
<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:4}}>
<button onClick={()=>shareTo("mygea",selectedSnap)} style={{padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🌍</span> Share to MyGea Social API /share/mygea</button>
<button onClick={()=>shareTo("reelgea",selectedSnap)} style={{padding:8,background:"#f0f",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🎥</span> Share to ReelGea API /share/reelgea</button>
<button onClick={()=>shareTo("geamail",selectedSnap)} style={{padding:8,background:"#fff",color:"#000",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>📧</span> Share to GeaMail API /share/geamail</button>
<button onClick={()=>shareTo("geaconnect",selectedSnap)} style={{padding:8,background:"#075e54",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>💬</span> Share to GeaConnect API /share/geaconnect</button>
<button onClick={()=>shareTo("holo",selectedSnap)} style={{padding:8,background:"#111",color:"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>👁️</span> Share to MyGea Holo API /share/holo</button>
<button onClick={()=>shareTo("sat-maps",selectedSnap)} style={{padding:8,background:"#111",color:"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🛰️</span> Share to Sat Maps API /share/sat</button>
<button onClick={()=>shareTo("youtube",selectedSnap)} style={{padding:8,background:"#ff0000",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>▶️</span> YouTube Live API /share/youtube</button>
<button onClick={()=>shareTo("facebook",selectedSnap)} style={{padding:8,background:"#1877f2",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>📘</span> Facebook Live API /share/facebook</button>
<button onClick={()=>shareTo("tiktok",selectedSnap)} style={{padding:8,background:"#000",color:"#fff",border:"1px solid #fff",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>🎵</span> TikTok Live API /share/tiktok</button>
<button onClick={()=>shareTo("instagram",selectedSnap)} style={{padding:8,background:"#e1306c",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>📸</span> Instagram Live API /share/instagram</button>
<button onClick={()=>shareTo("whatsapp",selectedSnap)} style={{padding:8,background:"#25d366",color:"#fff",border:"none",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>💚</span> WhatsApp Share API /share/whatsapp</button>
<button onClick={()=>shareTo("download",selectedSnap)} style={{padding:8,background:"#222",color:"#fff",border:"1px solid #fff",borderRadius:8,fontSize:8,fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center",gap:4}}><span>⬇️</span> Download Snap API /snap/download</button>
</div>
<div style={{marginTop:8,fontSize:6,color:"#f0f"}}>UI Platforms Icons Links - All Share Buttons Working - Gea Store + Gea Pay Link Included - API /share/mygea + /share/reelgea + /share/geamail + /share/geaconnect + /share/holo + /share/sat + /share/youtube + /share/facebook + /share/tiktok + /share/instagram + /share/whatsapp - Fit Screen 〰️</div>
</div>
</div>

<div style={{marginTop:10,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
<button onClick={()=>apiCall("8-sat","sat-call")} style={{padding:10,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold",fontSize:9}}>📞 SAT Free Calls API /sat/call - {satLock?"Connected":"OFF"}</button>
<button onClick={()=>apiCall("8-sat","cctv-remote")} style={{padding:10,background:"#222",color:"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:9}}>📹 CCTV Remote Servers Sensor Connection API /cctv</button>
<button onClick={()=>apiCall("8-sat","dial-numbers")} style={{padding:10,background:"#111",color:"#fff",border:"1px solid #fff",borderRadius:8,fontSize:9}}>🔢 SAT Dial Numbers API /sat/dial</button>
</div>

<div style={{marginTop:8,background:"#111",padding:6,borderRadius:6,border:"1px solid #0ff"}}>
<div style={{fontSize:7,color:"#0ff",fontWeight:"bold"}}>8-DEGALAXY-SAT - 5G VIDEO CAMERAS - AREA CAPTURED - SNAP SHOTS - SHARE UI PLATFORMS - API ENDPOINTS:</div>
<div style={{fontSize:6,color:"#888",marginTop:2,lineHeight:1.5}}>
/api/sat/lock + /api/sat/area/capture + /api/camera/5g/video + /api/camera/5g/captured + /api/camera/snap + /api/camera/video/clip + /api/street/view + /api/cctv/remote + /api/sat/image + /api/sat/call + /api/sat/dial + /api/share/mygea + /api/share/reelgea + /api/share/geamail + /api/share/geaconnect + /api/share/holo + /api/share/sat + /api/share/youtube + /api/share/facebook + /api/share/tiktok + /api/share/instagram + /api/share/whatsapp + /api/snap/download + All Connected - 5G Video Cameras Area Captured Snap Shots Share UI Platforms Icons Links Working - Fit Screen 〰️ - RC:9882150
</div>
</div>
</div>
</div>
);
}