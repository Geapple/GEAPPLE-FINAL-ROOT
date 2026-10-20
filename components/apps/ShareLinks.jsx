"use client";
export default function ShareLinks({curId,apiCall}){
return(
<div style={{padding:8,background:"#000",marginTop:6}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#0f0"}}>🔗 OS/UI SHARE LINK TO OTHER PLATFORMS - FUNCTIONAL - API /share</div>
<div style={{marginTop:6,display:"flex",gap:6,flexWrap:"wrap"}}>
{[
{icon:"💬",name:"WhatsApp"},
{icon:"📘",name:"Facebook"},
{icon:"✈️",name:"Telegram"},
{icon:"🐦",name:"Twitter"},
{icon:"📸",name:"Instagram"},
{icon:"🔗",name:"Copy Link"},
].map(s=>(
<button key={s.name} onClick={()=>{apiCall(curId,"share-"+s.name);}} style={{padding:6,background:"#222",border:"1px solid #333",borderRadius:20,fontSize:9}}>{s.icon} {s.name}</button>
))}
</div>
</div>
);
}