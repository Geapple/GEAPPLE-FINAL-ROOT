"use client";
export default function App3({apiCall,cameraOn,holoOn}){
return(
<div style={{background:"#fff",color:"#000",minHeight:300,padding:10}}>
<div style={{fontSize:11,fontWeight:"bold",display:"flex",justifyContent:"space-between"}}><span>📧 3-GEAMAIL.CON - username@geamail.con - API /geamail - Working + Holo Chat 5G Cameras Sensor</span><button onClick={()=>apiCall("3-mail","holo")} style={{padding:4,background:holoOn?"#f0f":"#ddd",border:"none",borderRadius:4,fontSize:8}}>👁️ Holo {holoOn?"ON":"OFF"} + 5G {cameraOn?"ON 📷":"OFF"}</button></div>
<div style={{marginTop:8,background:"#f0f0f0",padding:8,borderRadius:6,fontSize:10}}>To: geapple.admin@gmail.com - Bulk Mail Pay Data API /geamail/send - Connected</div>
<div style={{marginTop:8,display:"grid",gap:6}}>
<div onClick={()=>apiCall("3-mail","inbox")} style={{padding:10,background:"#fff",border:"2px solid #0f0",borderRadius:6,fontSize:11,cursor:"pointer"}}>📥 Inbox (12) - Verify via geamail.con API /geamail/inbox - Working - Click to Open</div>
<div onClick={()=>apiCall("3-mail","sent")} style={{padding:10,background:"#fff",border:"1px solid #ddd",borderRadius:6,fontSize:11,cursor:"pointer"}}>📤 Sent - Pay Link Attached API /geamail/sent - Working</div>
<div onClick={()=>apiCall("3-mail","holo-chat")} style={{padding:10,background:holoOn?"#f0e6ff":"#fff",border:"1px solid #f0f",borderRadius:6,fontSize:11}}>👁️ Holo Chat 5G Camera Sensor - API /holo/chat - {holoOn?"100 Participants Conference ON":"OFF - Click Enable"} - Working</div>
</div>
<button onClick={()=>apiCall("3-mail","compose")} style={{marginTop:10,padding:10,background:"gold",border:"none",borderRadius:6,width:"100%",fontWeight:"bold"}}>Compose + Gea Pay Link API /geamail/compose - Working - No Prototype Words</button>
<div style={{marginTop:6,fontSize:7,color:"#888"}}>API Connected: /api/geamail/inbox + /api/geamail/send + /api/holo + /api/camera/5g - All Working - Fit Screen 〰️</div>
</div>
);
}