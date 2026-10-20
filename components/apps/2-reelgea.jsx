"use client";
export default function App2({apiCall,cameraOn,holoOn}){
return(
<div style={{background:"#000",height:300,position:"relative"}}>
<div style={{height:"100%",background:cameraOn?"#001100":"#111",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}>
<div style={{fontSize:40}}>🎬</div><div style={{fontSize:11,marginTop:6}}>2-REELGEA - Vertical Swipe - 4K Editor - API /reel/upload - Functional Appropriately</div>
<div style={{marginTop:8,display:"flex",gap:6,flexWrap:"wrap",justifyContent:"center"}}>
<button onClick={()=>apiCall("2-reel","upload")} style={{padding:6,background:"#0f0",border:"none",borderRadius:6,fontSize:9}}>⬆️ Upload API /upload</button>
<button onClick={()=>apiCall("2-reel","effects")} style={{padding:6,background:"#f0f",border:"none",borderRadius:6,fontSize:9}}>✨ Effects API /effects</button>
<button onClick={()=>apiCall("2-reel","music")} style={{padding:6,background:"#0ff",border:"none",borderRadius:6,fontSize:9}}>🎵 Music API /music</button>
<button onClick={()=>apiCall("2-reel","camera")} style={{padding:6,background:cameraOn?"#0f0":"#333",border:"none",borderRadius:6,fontSize:9}}>📷 5G {cameraOn?"ON":"OFF"}</button>
<button onClick={()=>apiCall("2-reel","holo")} style={{padding:6,background:holoOn?"#f0f":"#333",border:"none",borderRadius:6,fontSize:9}}>👁️ Holo {holoOn?"ON":"OFF"}</button>
</div>
</div>
<div style={{position:"absolute",right:8,top:20,bottom:50,display:"flex",flexDirection:"column",gap:8}}><span>❤️ 14K</span><span>💬 94</span><span>↗️ 217</span><span>🔖 757</span></div>
</div>
);
}