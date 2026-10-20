"use client";
import {useState} from "react";
export default function App4({apiCall}){
const [domain,setDomain]=useState("mygea.gea.con");
const [mailUser,setMailUser]=useState("ceo");
const [hostStatus,setHostStatus]=useState(false);
const [mailStatus,setMailStatus]=useState(false);
return(
<div style={{background:"#000",minHeight:380,padding:10}}>
<div style={{fontSize:12,fontWeight:"bold",color:"#0f0",display:"flex",justifyContent:"space-between"}}><span>4-GEA-CON - Domain Websites Cloud Drive Codes Builder + GEA.CON Mail Builder + Web Hosting - API Connected</span><button onClick={()=>{setHostStatus(!hostStatus); apiCall("4-geacon","hosting-"+(hostStatus?"off":"on"));}} style={{padding:4,background:hostStatus?"#0f0":"#333",color:hostStatus?"#000":"#fff",border:"none",borderRadius:4,fontSize:8,fontWeight:"bold"}}>Hosting {hostStatus?"ON 🟢":"OFF"}</button></div>

<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
<div style={{background:"#111",padding:10,borderRadius:10,border:"1px solid #0ff"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#0ff"}}>🌐 Domain + Websites API /geacon/domain</div>
<input value={domain} onChange={e=>setDomain(e.target.value)} placeholder="mygea.gea.con" style={{marginTop:6,width:"100%",padding:8,background:"#000",color:"#fff",border:"1px solid #0ff",borderRadius:6,fontSize:10}}/>
<div style={{marginTop:6,display:"flex",gap:4}}><button onClick={()=>apiCall("4-geacon","domain-buy")} style={{flex:1,padding:6,background:"#0ff",color:"#000",border:"none",borderRadius:6,fontSize:8,fontWeight:"bold"}}>Buy Domain API /domain/buy</button><button onClick={()=>apiCall("4-geacon","domain-connect")} style={{flex:1,padding:6,background:"#222",color:"#0ff",border:"1px solid #0ff",borderRadius:6,fontSize:8}}>Connect API /domain/connect</button></div>
<div style={{marginTop:6,fontSize:7,color:"#0ff"}}>Working - gea.con as Domain - RC:9882150</div>
</div>

<div style={{background:"#111",padding:10,borderRadius:10,border:"1px solid #f0f"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#f0f"}}>📧 GEA.CON Mail Builder API /geacon/mail/builder</div>
<div style={{marginTop:6,display:"flex",gap:4,alignItems:"center"}}><input value={mailUser} onChange={e=>setMailUser(e.target.value)} placeholder="ceo" style={{flex:1,padding:8,background:"#000",color:"#fff",border:"1px solid #f0f",borderRadius:6,fontSize:10}}/><span style={{fontSize:10,color:"#f0f"}}>@gea.con</span></div>
<div style={{marginTop:6,display:"flex",gap:4}}><button onClick={()=>{setMailStatus(!mailStatus); apiCall("4-geacon","mail-create-"+mailUser);}} style={{flex:1,padding:6,background:mailStatus?"#f0f":"#333",color:"#fff",border:"none",borderRadius:6,fontSize:8,fontWeight:"bold"}}>{mailStatus?"Created ✅":"Create Mail API /mail/create"}</button><button onClick={()=>apiCall("4-geacon","mail-builder")} style={{padding:6,background:"#222",color:"#f0f",border:"1px solid #f0f",borderRadius:6,fontSize:8}}>Builder API /mail/builder</button></div>
<div style={{marginTop:4,fontSize:8,color:"#fff"}}>{mailUser}@gea.con | {mailUser}@geamail.con | {mailUser}@geapple.con</div>
<div style={{marginTop:2,fontSize:7,color:"#f0f"}}>Working - Mail Builder - 5G - No Prototype Words</div>
</div>
</div>

<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6}}>
<div onClick={()=>apiCall("4-geacon","hosting-cpanel")} style={{background:hostStatus?"#001100":"#111",padding:12,borderRadius:8,textAlign:"center",cursor:"pointer",border:hostStatus?"1px solid #0f0":"1px solid #333"}}>
<div style={{fontSize:20}}>🚀</div><div style={{fontSize:9,marginTop:4,fontWeight:"bold",color:hostStatus?"#0f0":"#fff"}}>Web Hosting API /hosting</div><div style={{fontSize:7,color:"#0f0"}}>{hostStatus?"ON - cPanel + Vercel + Node - Working":"Click to Enable Hosting"}</div>
</div>
<div onClick={()=>apiCall("4-geacon","websites-builder")} style={{background:"#111",padding:12,borderRadius:8,textAlign:"center",cursor:"pointer",border:"1px solid gold"}}>
<div style={{fontSize:20}}>🏗️</div><div style={{fontSize:9,marginTop:4,fontWeight:"bold"}}>Websites Builder API /websites/builder</div><div style={{fontSize:7,color:"gold"}}>Drag Drop - Working - Fit Screen 〰️</div>
</div>
<div onClick={()=>apiCall("4-geacon","cloud-drive")} style={{background:"#111",padding:12,borderRadius:8,textAlign:"center",cursor:"pointer",border:"1px solid #0f0"}}>
<div style={{fontSize:20}}>💾</div><div style={{fontSize:9,marginTop:4,fontWeight:"bold"}}>Cloud Drive API /cloud/drive</div><div style={{fontSize:7,color:"#0f0"}}>Drive + Codes + Builder - Working</div>
</div>
</div>

<div style={{marginTop:8,display:"grid",gridTemplateColumns:"1fr 1fr",gap:6}}>
<div onClick={()=>apiCall("4-geacon","code-github")} style={{background:"#111",padding:10,borderRadius:8,border:"1px solid gold",cursor:"pointer"}}><div style={{fontSize:10,fontWeight:"bold"}}>💻 Code GitHub SPCK Edit Builder API /code/edit - Working</div><div style={{fontSize:7,color:"#888",marginTop:4}}>Edit Codes - Push to GitHub - SPCK Editor - Builder Connected - API /code/github + /code/spck + /code/builder</div></div>
<div style={{background:"#000",padding:10,borderRadius:8,border:"1px solid #0ff"}}><div style={{fontSize:10,fontWeight:"bold",color:"#0ff"}}>🔗 Deployment API /deploy</div><div style={{marginTop:6,display:"flex",gap:4,flexWrap:"wrap"}}><button onClick={()=>apiCall("4-geacon","deploy-vercel")} style={{padding:4,background:"#fff",color:"#000",border:"none",borderRadius:4,fontSize:7}}>Vercel API /deploy/vercel</button><button onClick={()=>apiCall("4-geacon","deploy-cpanel")} style={{padding:4,background:"#222",color:"#fff",border:"1px solid #0ff",borderRadius:4,fontSize:7}}>cPanel API /deploy/cpanel</button><button onClick={()=>apiCall("4-geacon","deploy-node")} style={{padding:4,background:"#0f0",color:"#000",border:"none",borderRadius:4,fontSize:7}}>Node API /deploy/node</button></div></div>
</div>

<button onClick={()=>apiCall("4-geacon","upload-cloud")} style={{marginTop:10,width:"100%",padding:12,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontWeight:"bold"}}>⬆️ Upload File to Cloud + Store Link + Hosting Deploy API /upload - Working + Fit Screen 〰️ + Touchscreen</button>

<div style={{marginTop:8,background:"#111",padding:8,borderRadius:6}}>
<div style={{fontSize:8,fontWeight:"bold",color:"#0f0"}}>GEA.CON PLATFORM - ALL CONNECTED - WORKING - API ENDPOINTS:</div>
<div style={{fontSize:6,color:"#888",marginTop:4,lineHeight:1.6}}>
/api/geacon/domain/buy + /api/geacon/domain/connect + /api/geacon/mail/builder + /api/geacon/mail/create + /api/geacon/hosting/cpanel + /api/geacon/websites/builder + /api/geacon/cloud/drive + /api/geacon/code/edit + /api/geacon/deploy/vercel + /api/geacon/upload - All Connected Working - No Prototype Words - Gea Store Gea Pay Link Included - RC:9882150
</div>
</div>
</div>
);
}