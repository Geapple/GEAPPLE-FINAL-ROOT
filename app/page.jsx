"use client";
import { useState,useRef } from "react";
const APPS=[
{id:1,n:"MYGEA SOCIAL",c:"Social OS",p:0},{id:2,n:"GEA STORE",c:"Marketplace",p:0},{id:3,n:"GEA PAY",c:"Pay System",p:0},
{id:4,n:"GEA CON",c:"Encrypted",p:5000},{id:5,n:"GEACONNECT",c:"Network",p:3000},{id:6,n:"HOLO",c:"Holo 25",p:15000},
{id:7,n:"VOTES",c:"Voting",p:2000},{id:8,n:"SAT COMMS",c:"SAT Calls",p:8000},{id:9,n:"MILITARY",c:"Military",p:20000},
{id:10,n:"ART G",c:"Gallery",p:4000},{id:11,n:"TUNE",c:"Music",p:2000},{id:12,n:"4K STUDIO",c:"Studio",p:7000},
{id:13,n:"GAME",c:"Games",p:3000},{id:14,n:"OKIDOKI",c:"Kids",p:1000},{id:15,n:"GALAREA",c:"Gallery",p:2500},
{id:16,n:"YELLOW",c:"Taxi",p:1500},{id:18,n:"ORB",c:"AI Orb",p:9000},{id:19,n:"CYBER C",c:"Cyber",p:6000},
{id:20,n:"GSIA AI",c:"AI Engine",p:12000},{id:21,n:"ORACLE M",c:"Oracle",p:11000},{id:22,n:"FRAUD D",c:"Fraud Detect",p:10000},
{id:23,n:"VISUAL",c:"Visual AI",p:8000},{id:24,n:"ORACLE W",c:"Oracle Web",p:9000},{id:25,n:"BUDGET",c:"Budget",p:3500},
{id:26,n:"SAT FEED",c:"SAT Feed",p:4000},{id:27,n:"ARCHI",c:"Archi",p:6000},{id:28,n:"CARTOONS",c:"Cartoons",p:2000},
{id:30,n:"WALLET",c:"Wallet",p:0},{id:31,n:"GADGETS",c:"Gadgets",p:25000},{id:33,n:"DATA MINT",c:"Data",p:5000},
{id:34,n:"INVESTORS",c:"Investors",p:0},{id:35,n:"SYSTEMS",c:"Core",p:0},
];
export default function Hub35SuperProMax(){
 const [products,setProducts]=useState([...APPS.map(a=>({...a,type:"app"})),{id:101,n:"5G Phone",c:"Geapple",p:120000,type:"product"},{id:102,n:"HOLO Glasses",c:"Gadget",p:150000,type:"product"}]);
 const [cart,setCart]=useState([]); const [notif,setNotif]=useState([]); const [payMethod,setPayMethod]=useState("Paystack");
 const [showUpload,setShowUpload]=useState(false); const [showPay,setShowPay]=useState(false); const [showCEO,setShowCEO]=useState(false);
 const fileRef=useRef(null);
 const addNotif=(m)=> setNotif([{id:Date.now(),m,t:new Date().toLocaleTimeString()},...notif]);
 const uploadProduct=(e)=>{ e.preventDefault(); const fd=new FormData(e.target); const name=fd.get('name'); const price=Number(fd.get('price')); const cat=fd.get('cat'); if(name){setProducts([{id:Date.now(),n:name.toUpperCase(),c:cat,p:price,type:"product"},...products]); addNotif(`Uploaded Product: ${name} - ₦${price}`); setShowUpload(false); e.target.reset();}};
 const buy=(item)=>{ setCart([...cart,item]); addNotif(`Order: ${item.n} - ${payMethod} - Pending Confirmation`); setShowPay(true); };
 const confirmPay=()=>{ addNotif(`✅ Payment Confirmed via ${payMethod} - CEO Dashboard Updated`); setCart([]); setShowPay(false); setShowCEO(true); };
 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',padding:12,fontFamily:'sans-serif'}}>
  <div style={{textAlign:'center',padding:12,border:'2px solid #0f0',borderRadius:16,background:'#0a0a0a'}}>
   <h1 style={{color:'#0f0',margin:0,fontSize:20}}>GEAPPLE HUB 35 - SUPER PRO MAX</h1>
   <p style={{fontSize:10,color:'#aaa',margin:'4px 0'}}>GEA STORE 🏪 + GEA PAY 💳 + HOLO 25 + SAT + NINO Language • RC:9882150 • CEO: Apostle Oladele</p>
   <div style={{display:'flex',gap:6,justifyContent:'center',marginTop:8,flexWrap:'wrap'}}>
    <button onClick={()=>setShowUpload(!showUpload)} style={{background:'#fd0',color:'#000',border:0,padding:'8px 12px',borderRadius:20,fontSize:10,fontWeight:'bold'}}>📤 Upload App/Product</button>
    <button onClick={()=>setShowCEO(!showCEO)} style={{background:'#0f0',color:'#000',border:0,padding:'8px 12px',borderRadius:20,fontSize:10,fontWeight:'bold'}}>CEO Dashboard {notif.length?`(${notif.length})`:''}</button>
    <button onClick={()=>location.href='/apps/1'} style={{background:'#111',border:'1px solid #0f0',color:'#0f0',padding:'8px 12px',borderRadius:20,fontSize:10}}>MYGEA V8</button>
   </div>
  </div>
  {showUpload && <form onSubmit={uploadProduct} style={{marginTop:12,background:'#0a0a0a',border:'1px solid #fd0',borderRadius:12,padding:12}}><div style={{fontWeight:'bold',color:'#fd0',fontSize:12}}>🏪 Upload System - Apps & Products</div><div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:8,marginTop:8}}><input name="name" placeholder="App/Product Name" required style={{background:'#111',border:'1px solid #333',padding:'10px',borderRadius:8,color:'#fff'}}/><input name="price" type="number" placeholder="Price ₦" required style={{background:'#111',border:'1px solid #333',padding:'10px',borderRadius:8,color:'#fff'}}/><input name="cat" placeholder="Category" style={{background:'#111',border:'1px solid #333',padding:'10px',borderRadius:8,color:'#fff'}}/><select style={{background:'#111',border:'1px solid #333',padding:'10px',borderRadius:8,color:'#fff'}}><option>App</option><option>Product</option><option>Gadget</option></select></div><button type="submit" style={{width:'100%',marginTop:8,background:'#fd0',color:'#000',border:0,padding:'10px',borderRadius:8,fontWeight:'bold'}}>Upload to GEA STORE 🔗</button></form>}
  {showCEO && <div style={{marginTop:12,background:'#0a0a0a',border:'1px solid #0f0',borderRadius:12,padding:12}}><div style={{fontWeight:'bold',color:'#0f0'}}>📊 CEO Dashboard - Payments + Notifications</div><div style={{marginTop:8,background:'#111',borderRadius:8,padding:8,maxHeight:160,overflowY:'auto'}}>{notif.length===0?<div style={{fontSize:10,color:'#666'}}>No notifications yet</div>:notif.map(n=><div key={n.id} style={{fontSize:10,padding:'6px 0',borderBottom:'1px solid #222'}}><span style={{color:'#0f0'}}>[{n.t}]</span> {n.m}</div>)}</div><div style={{marginTop:8,display:'flex',gap:6}}><span style={{fontSize:9,padding:'4px 8px',border:'1px solid #0f0',borderRadius:12}}>Paystack 🔗</span><span style={{fontSize:9,padding:'4px 8px',border:'1px solid #4285F4',borderRadius:12}}>Flutterwave 🔗</span><span style={{fontSize:9,padding:'4px 8px',border:'1px solid #f80',borderRadius:12}}>Monnify 🔗</span><span style={{fontSize:9,padding:'4px 8px',border:'1px solid #fff',borderRadius:12}}>GPay 🔗</span></div></div>}
  {showPay && <div style={{marginTop:12,background:'#0a0a0a',border:'2px solid #0ef',borderRadius:12,padding:12}}><div style={{color:'#0ef',fontWeight:'bold'}}>💳 GEA PAY - Select Payment</div><div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}>{["Paystack","Flutterwave","Monnify","GPay"].map(m=><button key={m} onClick={()=>setPayMethod(m)} style={{background:payMethod===m?'#0ef':'#111',color:payMethod===m?'#000':'#fff',border:'1px solid #0ef',padding:'8px 12px',borderRadius:20,fontSize:10,fontWeight:'bold'}}>{m}</button>)}</div><div style={{marginTop:8,fontSize:11}}>Cart: {cart.length} items • Total: ₦{cart.reduce((s,i)=>s+i.p,0).toLocaleString()} • Method: {payMethod}</div><button onClick={confirmPay} style={{width:'100%',marginTop:8,background:'#0ef',color:'#000',border:0,padding:'10px',borderRadius:8,fontWeight:'bold'}}>Confirm Payment via {payMethod} ✅</button></div>}
  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginTop:14}}>
   {products.map(a=>(
    <div key={a.id} onClick={()=>a.type==="app"? location.href=`/apps/${a.id}` : buy(a)} style={{background:'#111',border:`1px solid ${a.type==="product"?'#fd0':'#0f03'}`,borderRadius:12,padding:12,textAlign:'center',cursor:'pointer'}}>
     <div style={{fontSize:22}}>{a.type==="product"?'📦':'📱'}</div><div style={{fontSize:8,marginTop:6,fontWeight:'bold'}}>{a.id}-{a.n}</div><div style={{fontSize:7,color:'#888'}}>{a.c} {a.p?`• ₦${a.p.toLocaleString()}`:''}</div><div style={{fontSize:7,marginTop:4,background:a.type==="product"?'#fd0':'#0f0',color:'#000',padding:'2px 6px',borderRadius:10,display:'inline-block'}}>{a.type==="product"?'BUY 🛒':'OPEN'}</div>
    </div>
   ))}
  </div>
 </div>
 )
}