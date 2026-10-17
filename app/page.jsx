"use client";
import { useEffect } from "react";
export default function Page(){
useEffect(()=>{
window.location.href="/apps/mygea";
},[]);
return <div style={{background:"#000",color:"#0f0",padding:20,fontWeight:"bold",fontSize:18,textAlign:"center",minHeight:"100vh",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}}><div>MYGEA SOCIAL NATIVES APP $1B</div><div style={{marginTop:10,fontSize:12,color:"#666"}}>Redirecting to Geapple Hub 35 - All Tools Active...</div><div style={{marginTop:20,width:40,height:40,border:"3px solid #0f0",borderTop:"3px solid transparent",borderRadius:"50%",animation:"spin 1s linear infinite"}}></div><style>{`@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}`}</style><a href="/apps/mygea" style={{marginTop:20,background:"#0f0",color:"#000",padding:12,borderRadius:8,textDecoration:"none",fontWeight:"bold"}}>TAP HERE IF NOT REDIRECTED - OPEN $1B APP</a></div>;
}