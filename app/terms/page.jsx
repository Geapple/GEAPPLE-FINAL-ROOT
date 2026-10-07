"use client";
export default function TermsPage(){
 return(
  <div style={{background:'#000',color:'#fff',minHeight:'100vh',padding:20,fontFamily:'sans-serif'}}>
   <button onClick={()=>location.href='/apps/1'} style={{background:'#111',color:'#fff',padding:'8px 12px',borderRadius:8}}>← Back to MYGEA</button>
   <h1 style={{color:'#0f0',marginTop:20}}>📜 Terms & Conditions</h1>
   <div style={{background:'#0a0a0a',border:'1px solid #222',borderRadius:12,padding:16,marginTop:16,fontSize:13,lineHeight:'20px'}}>
    <p>1. Acceptance: Using MYGEA V6 means accepting Geapple Ecosystem terms.</p>
    <p>2. 5G Sensor & HOLO: Camera/Mic used for sensor functions only.</p>
    <p>3. SAT Free Calls 🤙: Online/Offline calls subject to SAT availability.</p>
    <p>4. Uploads: Users own their files/videos, grant Geapple display license.</p>
    <p>5. Backup JSON/JS/JSX: Local storage for profiles, linked to API.</p>
    <p>6. Age: 13+ required.</p>
    <p>7. Legal: RC:9882150 - Port Harcourt, Nigeria.</p>
    <button onClick={()=>{localStorage.setItem('geapple_terms','accepted'); alert('Terms Accepted! Backup Linked!'); location.href='/apps/1';}} style={{marginTop:16,background:'#0f0',color:'#000',border:0,padding:'10px 16px',borderRadius:8,fontWeight:'bold'}}>Accept Terms & Backup Link 🔗</button>
   </div>
  </div>
 )
}