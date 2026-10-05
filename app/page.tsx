"use client";
import { useState } from "react";
export default function Page(){
 const [bal,setBal]=useState(0);
 return <div style={{background:'black',color:'white',minHeight:'100vh',padding:20,textAlign:'center'}}>
  <img src="/logo1.png" width={90} height={90} style={{borderRadius:50,border:'2px solid lime'}} alt="logo1"/>
  <h1 style={{color:'lime'}}>GEAPPLE HUB 35 LIVE</h1>
  <p>Balance: ₦{bal}</p>
  <button onClick={()=>setBal(bal+1000)} style={{background:'lime',padding:'12px 24px',border:0,borderRadius:8}}>FUND +₦1000 WORKS!</button>
  <div style={{marginTop:20}}>
   <img src="/gea-store.png" width={60} /><img src="/gea-pay.png" width={60} style={{marginLeft:10}} />
  </div>
  <p style={{marginTop:20,color:'#aaa'}}>If you see this, Build FIXED!</p>
 </div>
}