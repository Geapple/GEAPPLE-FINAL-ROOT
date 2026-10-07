"use client";
export default function PrivacyPage(){
 return(
  <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20}}>
   <button onClick={()=>location.href='/apps/1'} style={{background:'#111',color:'#fff',padding:'8px 12px',borderRadius:8}}>← Back</button>
   <h1 style={{color:'#0f0',marginTop:20}}>🔒 Privacy Policy</h1>
   <div style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:16,marginTop:16,fontSize:13,lineHeight:'20px'}}>
    <p>Privacy: GSIA Secured - gsiacyber.com</p>
    <p>Data: Camera for 5G sensor, Mic for translation, Files for upload - stored locally + backup JSON.</p>
    <p>No selling data. NDPA Compliant.</p>
    <p>Backup: lib/menuSettingsTools.json, lib/legalConfig.js provisioned.</p>
   </div>
  </div>
 )
}