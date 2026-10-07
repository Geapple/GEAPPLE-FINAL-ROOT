"use client";
import { useEffect,useState } from "react";
export default function LegalPage(){
 const [data,setData]=useState(null);
 useEffect(()=>{
  fetch('/lib/menuSettingsTools.json').then(r=>r.json()).then(setData).catch(()=>{
   setData({legal:{terms:"Geapple Inc RC:9882150",privacy:"GSIA Secured",ndpa:"NDPA Compliant"}});
  });
  localStorage.setItem('geapple_legal','viewed');
 },[]);
 return(
  <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,fontFamily:'sans-serif'}}>
   <button onClick={()=>location.href='/apps/1'} style={{background:'#111',color:'#fff',padding:'8px 12px',borderRadius:8,border:'1px solid #222'}}>← Back to MYGEA</button>
   <h1 style={{color:'#0f0',marginTop:20}}>⚖️ Legal Information - MYGEA SOCIAL NATIVE</h1>
   <div style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:16,marginTop:16,lineHeight:'22px',fontSize:13}}>
    <p><b>Company:</b> Geapple Inc RC:9882150</p>
    <p><b>CEO:</b> Apostle Dr Oladele Mighty Hassan</p>
    <p><b>Platform:</b> MYGEA SOCIAL NATIVE V6.1 Clean Mature</p>
    <p><b>Ecosystem:</b> www.geapple.com • gsiacyber.com GSIA Secured</p>
    <p><b>Version:</b> V6.1 Professional Menu Settings Tools</p>
    <p style={{marginTop:12,color:'#aaa'}}>All content, 5G Sensor, HOLO Conference, SAT Free Calls are property of Geapple Inc. Unauthorized copy prohibited.</p>
    <div style={{marginTop:16,display:'flex',gap:8}}>
     <button onClick={()=>location.href='/terms'} style={{background:'#111',color:'#fff',border:'1px solid #222',padding:'8px 12px',borderRadius:8}}>📜 Terms 🔗</button>
     <button onClick={()=>location.href='/privacy'} style={{background:'#111',color:'#fff',border:'1px solid #222',padding:'8px 12px',borderRadius:8}}>🔒 Privacy 🔗</button>
     <button onClick={()=>location.href='/ndpa'} style={{background:'#111',color:'#fff',border:'1px solid #222',padding:'8px 12px',borderRadius:8}}>🛡️ NDPA 🔗</button>
    </div>
   </div>
  </div>
 )
}