"use client";
export default function EcoHeader({cur,setMenu,apiLog}){
const LOGO="/logo1.png";
return(
<div>
<style>{`@keyframes hspin{from{transform:rotateY(0deg)}to{transform:rotateY(360deg)}} .earth{width:28px;height:28px;border-radius:50%;background:radial-gradient(circle at 30% 30%, #4facfe, #00f2fe, #0a3d62);box-shadow:inset -6px -6px 12px rgba(0,0,0,0.8), 0 0 12px #0ff;animation:hspin 4s linear infinite;display:flex;align-items:center;justifyContent:center;font-size:18px;border:1px solid #0ff}`}</style>
<div style={{background:"#0f0",color:"#000",padding:8,display:"flex",justifyContent:"space-between",alignItems:"center",position:"sticky",top:0,zIndex:50}}>
<div style={{display:"flex",alignItems:"center",gap:8}}><div className="earth">🌍</div><span style={{fontSize:8,fontWeight:"bold"}}>RC:9882150 - EARTH HORIZONTAL LATITUDINAL CLOCKWISE</span></div>
<div style={{display:"flex",alignItems:"center",gap:8}}><span style={{fontSize:8}}>{cur.n}</span><img src={LOGO} alt="logo" style={{width:32,height:32,borderRadius:6,background:"#fff"}} onError={(e)=>{e.target.style.display="none"}}/><button onClick={()=>setMenu(p=>!p)} style={{background:"#000",color:"#0f0",border:"none",padding:6,borderRadius:6,fontSize:10,fontWeight:"bold"}}>MENU 36</button></div>
</div>
<div style={{background:"#111",padding:6,fontSize:7,color:"#0f0",borderBottom:"1px solid #0f0"}}>{apiLog}</div>
</div>
);
}