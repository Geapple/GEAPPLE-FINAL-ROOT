"use client";
import { useState } from "react";
export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",padding:12,fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold"}}>GEAPPLE 36 - EMERGENCY READY BUILD - Fixing Batch2.jsc typo</div>
<h2 style={{color:"#0f0",marginTop:20}}>✅ 1-10 API Windows Ready Soon</h2>
<p style={{fontSize:12,marginTop:10}}>CEO: I fixed typo - Batch2-API.jsc → Batch2-API.jsx → Now renaming to Batch1.jsx + Batch2.jsx</p>
<p style={{fontSize:11,marginTop:10,color:"gold"}}>After this shows Ready Green, paste full API page again</p>
<div style={{background:"#111",padding:10,borderRadius:10,marginTop:15}}>
<p>Components folder should be:</p>
<p>✅ Batch1.jsx</p>
<p>✅ Batch2.jsx</p>
<p>❌ NOT Batch2-API.jsc</p>
</div>
<button onClick={()=>setMenuOpen(!menuOpen)} style={{background:"#0f0",color:"#000",padding:10,border:"none",borderRadius:6,marginTop:15,fontWeight:"bold"}}>Menu 36 Fix Done</button>
</div>
);
}