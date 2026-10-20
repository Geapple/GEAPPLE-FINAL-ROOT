"use client";
import {useState} from "react";
export default function StorePay({curId,apiCall}){
const [pay,setPay]=useState("Flutterwave");
return(
<div style={{background:"#000",padding:8,borderTop:"1px solid #222",marginTop:10}}>
<div style={{fontSize:9,color:"#0f0",fontWeight:"bold"}}>🏪 GEA STORE + 💳 GEA PAY - DOWNLOAD LINK - ALL 36 - GPay Flutterwave Paystack Monnify Realtime API</div>
<div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}>
{["GPay","Flutterwave","Paystack","Monnify"].map(p=>(
<button key={p} onClick={()=>{setPay(p);apiCall(curId,"pay-"+p);}} style={{padding:5,background:pay===p?"#0f0":"#222",color:pay===p?"#000":"#fff",border:"1px solid #0f0",borderRadius:12,fontSize:8,fontWeight:"bold"}}>{p} {pay===p?"🟢":""}</button>
))}
</div>
<div style={{marginTop:8,display:"flex",gap:6}}><button onClick={()=>apiCall(curId,"pay-"+pay)} style={{flex:1,padding:10,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold",fontSize:10}}>💳 Pay via {pay} - Realtime API - Download Link 🔗</button><button onClick={()=>apiCall(curId,"store")} style={{padding:10,background:"#222",color:"#fff",border:"1px solid #0f0",borderRadius:8,fontSize:10}}>🏪 Store</button></div>
</div>
);
}