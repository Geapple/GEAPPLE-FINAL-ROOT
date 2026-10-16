"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home(){
const router=useRouter();
useEffect(()=>{
router.push("/apps/mygea");
},[router]);

return(
<div style={{background:"#000",color:"#0f0",minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontWeight:"bold"}}>
<div style={{fontSize:24}}>MYGEA SOCIAL NATIVES APP $1B</div>
<div style={{marginTop:10,fontSize:12,color:"#666"}}>Loading Geapple Hub 35 - All Tools Active...</div>
<div style={{marginTop:20,width:40,height:40,border:"3px solid #0f0",borderTop:"3px solid transparent",borderRadius:"50%"}}></div>
</div>
);
}