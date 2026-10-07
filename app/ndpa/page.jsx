"use client";
export default function NdpaPage(){
 return(
  <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20}}>
   <button onClick={()=>location.href='/apps/1'} style={{background:'#111',color:'#fff',padding:'8px 12px',borderRadius:8}}>← Back</button>
   <h1 style={{color:'#0f0',marginTop:20}}>🛡️ NDPA Compliance</h1>
   <div style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:16,marginTop:16,fontSize:13,lineHeight:'20px'}}>
    <p>Nigeria Data Protection Act Compliant</p>
    <p>Rights: Access, Correction, Deletion, Portability</p>
    <p>DPO: via www.geapple.com</p>
    <p>Backup: JSON/JS/JSX linked to API, user controls data.</p>
    <p>CEO: Apostle Dr Oladele Mighty Hassan - RC:9882150</p>
   </div>
  </div>
 )
}