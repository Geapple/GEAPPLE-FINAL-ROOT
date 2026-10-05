"use client";
import { useState } from "react";
export default function Page(){
 const [bal,setBal]=useState(0);
 return (
  <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:24,textAlign:'center',fontFamily:'sans-serif'}}>
   <img src="/logo1.png" width={80} height={80} style={{borderRadius:50,border:'2px solid #00ff00'}} alt="logo"/>
   <h1 style={{color:'#00ff00'}}>GEAPPLE HUB 35 - BUILD FIXED</h1>
   <p>Balance: ₦{bal}</p>
   <button onClick={()=>setBal(bal+1000)} style={{background:'#00ff00',color:'#000',padding:'12px 24px',border:0,borderRadius:8,fontWeight:'bold'}}>FUND +1000</button>
   <div style={{marginTop:24,display:'flex',justifyContent:'center',gap:12}}>
    <img src="/gea-store.png" width={50} height={50} style={{borderRadius:12}} />
    <img src="/gea-pay.png" width={50} height={50} style={{borderRadius:12}} />
    <img src="/gsia-cyber-c.png" width={50} height={50} style={{borderRadius:12}} />
   </div>
   <p style={{color:'#888',marginTop:20}}>If you see logos, public/ folder perfect!</p>
  </div>
 )
}