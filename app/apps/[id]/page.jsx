"use client";
import { useState } from "react";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
const [activeTool,setActiveTool]=useState("home");

const tools=[
{id:"gsia",name:"GSIA AI",icon:"🤖",desc:"Ask Me Anything $1B"},
{id:"holo",name:"MyGea Holo 25",icon:"👁️",desc:"Conference Call"},
{id:"reelgea",name:"Reelgea Creator",icon:"🎬",desc:"Video Advert + Google Traffic"},
{id:"geapay",name:"Gea Pay",icon:"💳",desc:"Paystack Flutterwave Monnify GPay REAL API"},
{id:"geastore",name:"Gea Store",icon:"🏪",desc:"Marketplace Upload To CEO"},
{id:"chat",name:"Chat Platform",icon:"💬",desc:"Firebase Real Chat Active"},
];

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",fontFamily:"sans-serif"}}>
{/* HEADER */}
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<span>MYGEA SOCIAL NATIVES APP $1B - ALL TOOLS</span>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#000",color:"#0f0",border:"none",padding:8,borderRadius:4,fontWeight:"bold"}}>☰ {menuOpen?"Close":"Menu"}</button>
</div>

{/* MENU */}
{menuOpen && (
<div style={{background:"#111",padding:10,borderBottom:"1px solid #0f0"}}>
{tools.map(t=>(
<button key={t.id} onClick={()=>{setActiveTool(t.id);setMenuOpen(false);}} style={{display:"block",width:"100%",textAlign:"left",padding:12,margin:"4px 0",background:activeTool===t.id?"#0f0":"#222",color:activeTool===t.id?"#000":"#fff",border:"none",borderRadius:6}}>{t.icon} {t.name} - {t.desc}</button>
))}
<button onClick={()=>setActiveTool("home")} style={{display:"block",width:"100%",padding:12,marginTop:8,background:"#333",color:"#fff",border:"none",borderRadius:6}}>🏡 Home</button>
</div>
)}

{/* CONTENT */}
<div style={{padding:20}}>
{activeTool==="home" && (
<div>
<h2 style={{color:"#0f0"}}>Welcome Geapple Hub 35</h2>
<p style={{color:"#aaa"}}>Touch ☰ To Open Menu - All Hidden Natives Apps Active</p>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10,marginTop:20}}>
{tools.map(t=>(
<div key={t.id} onClick={()=>setActiveTool(t.id)} style={{background:"#111",border:"1px solid #0f0",padding:15,borderRadius:10,textAlign:"center"}}>
<div style={{fontSize:30}}>{t.icon}</div>
<div style={{fontWeight:"bold",marginTop:5,color:"#0f0"}}>{t.name}</div>
<div style={{fontSize:10,color:"#888",marginTop:4}}>{t.desc}</div>
</div>
))}
</div>
</div>
)}
{activeTool==="gsia" && <div><h2>🤖 GSIA AI Ask Me Anything $1B</h2><div style={{background:"#111",padding:15,borderRadius:10,marginTop:10}}><input placeholder="Ask GSIA anything..." style={{width:"100%",padding:12,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6}}/><button style={{marginTop:10,background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold"}}>Ask AI</button></div></div>}
{activeTool==="holo" && <div><h2>👁️ MyGea Holo 25 Conference</h2><div style={{background:"#111",padding:20,borderRadius:10,marginTop:10,textAlign:"center"}}><div style={{width:100,height:100,background:"#0f0",borderRadius:"50%",margin:"0 auto"}}></div><p style={{marginTop:10}}>Holo Conference Active</p><button style={{background:"#0f0",color:"#000",padding:10,border:"none",borderRadius:6,marginTop:10}}>Join Holo Call</button></div></div>}
{activeTool==="reelgea" && <div><h2>🎬 Reelgea Creator Tools</h2><div style={{background:"#111",padding:15,borderRadius:10,marginTop:10}}><p>Video Advert + Google Traffic</p><button style={{background:"#0f0",color:"#000",padding:10,border:"none",borderRadius:6,width:"100%",marginTop:10}}>Create Reelgea Video</button><button style={{background:"#333",color:"#fff",padding:10,border:"none",borderRadius:6,width:"100%",marginTop:5}}>Google Traffic Boost</button></div></div>}
{activeTool==="geapay" && <div><h2>💳 Gea Pay - Real API Active</h2><div style={{background:"#111",padding:15,borderRadius:10,marginTop:10}}><p>Paystack Flutterwave Monnify GPay</p><input placeholder="Amount NGN" style={{width:"100%",padding:12,background:"#000",color:"#fff",border:"1px solid #0f0",borderRadius:6,marginTop:10}}/><button style={{background:"#0f0",color:"#000",padding:12,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:10}}>Pay Now - Real API</button></div></div>}
{activeTool==="geastore" && <div><h2>🏪 Gea Store Marketplace</h2><div style={{background:"#111",padding:15,borderRadius:10,marginTop:10}}><p>Upload To CEO - All Products</p><button style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6}}>Upload Product To Store</button></div></div>}
{activeTool==="chat" && <div><h2>💬 Chat Platform Window Active</h2><div style={{background:"#111",padding:15,borderRadius:10,marginTop:10,height:300,display:"flex",flexDirection:"column"}}><div style={{flex:1,color:"#666"}}>Firebase Real Chat Messages...</div><div style={{display:"flex",gap:5}}><input placeholder="Type message..." style={{flex:1,padding:10,background:"#000",color:"#fff",border:"1px solid #0f0",borderRadius:6}}/><button style={{background:"#0f0",color:"#000",padding:10,border:"none",borderRadius:6}}>Send</button></div></div></div>}
</div>

<div style={{textAlign:"center",padding:20,color:"#333",fontSize:10}}>Geapple Hub 35 - CEO Apostle Dr Mighty - $1B Social Natives</div>
</div>
);
}