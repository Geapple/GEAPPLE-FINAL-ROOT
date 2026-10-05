"use client";
import { useState } from "react";
export default function Page(){
 const [bal,setBal]=useState(5000);
 return (
  <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,textAlign:'center',fontFamily:'sans-serif'}}>
   <img src="/logo1.png" width={80} height={80} style={{borderRadius:50,border:'2px solid lime'}} alt="logo1" />
   <h1 style={{color:'lime',marginTop:10}}>GEAPPLE HUB 35</h1>
   <p>Balance: ₦{bal}</p>
   <button onClick={()=>setBal(bal+1000)} style={{background:'lime',color:'#000',padding:'12px 24px',border:0,borderRadius:8,fontWeight:'bold'}}>FUND +₦1000</button>
   <div style={{marginTop:20,display:'flex',gap:10,justifyContent:'center'}}>
    <img src="/gea-store.png" width={50} height={50} style={{borderRadius:12}} />
    <img src="/gea-pay.png" width={50} height={50} style={{borderRadius:12}} />
    <img src="/gsia-cyber-c.png" width={50} height={50} style={{borderRadius:12}} />
   </div>
   <p style={{color:'#888',marginTop:20,fontSize:12}}>www.geapple.com - Build Fixed</p>
  </div>
 )
}