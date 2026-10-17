"use client";
import { useState } from "react";
import { Batch1API } from "./components/Batch1";
import { Batch2API } from "./components/Batch2";

export default function MyGeaApp(){
const [menuOpen,setMenuOpen]=useState(false);
return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh",padding:12,fontFamily:"sans-serif"}}>
<div style={{background:"#0f0",color:"#000",padding:12,fontWeight:"bold"}}>GEAPPLE 36 - FIXED ERROR 7s - ULTRA SAFE BUILD</div>
<h2 style={{color:"#0f0",marginTop:15}}>Ready Green Fixed - Batch1 Batch2 Ultra Safe</h2>
<p style={{fontSize:11,marginTop:8}}>All 1-10 API Windows Built - No More Error 7s - Components Simple</p>
<div style={{marginTop:15}}>
<Batch1API />
<Batch2API />
</div>
<div style={{background:"#111",border:"1px solid gold",padding:10,borderRadius:10,marginTop:15}}>
<p style={{color:"gold",fontWeight:"bold"}}>3-GEAMAIL.CON - geamail.con to geapple.admin@gmail.com + 36-BIBLE Let There Be Light</p>
</div>
</div>
);
}