"use client";
import { useState } from "react";
export function Batch1API({voiceLang,setVoiceLang}){
const [app2Tab,setApp2Tab]=useState("creator");
const [app4Tab,setApp4Tab]=useState("web");
const [app5Tab,setApp5Tab]=useState("calls");
const [skitScript,setSkitScript]=useState("");
const [skitVideos,setSkitVideos]=useState([{title:"Let There Be Light Skit",status:"4K Rendered",views:36}]);
const [uploadLink,setUploadLink]=useState("");
const [geamailUser,setGeamailUser]=useState("");const [geamailInbox,setGeamailInbox]=useState(["API: geamail.con SMTP linked to geapple.admin@gmail.com","API: Bulk mail endpoint /api/geamail/bulk ready","API: Payment webhook /api/pay/investors active"]);
const [codeText,setCodeText]=useState("// GEA-CON API: GitHub/SPCK EDIT\n// API: /api/gea-con/github/push\n// API: /api/gea-con/domains/register\nfunction geapple(){return 'RC:9882150';}");
const [satCallTo,setSatCallTo]=useState("");const [speakEnglish,setSpeakEnglish]=useState("Hello how are you?");
const [interpreterLogs,setInterpreterLogs]=useState(["API: Speech-to-Text EN ready","API: Translation Yoruba/Hausa/Igbo/French Ready","API: Nino Simless SAT Free Call Ready"]);

const AppWindow=({title,icon,children})=>(
<div style={{background:"#111",border:"1px solid #0f0",borderRadius:10,overflow:"hidden",marginTop:10}}>
<div style={{background:"#0f0",color:"#000",padding:8,fontWeight:"bold",display:"flex",justifyContent:"space-between"}}><span>{icon} {title} - Windows Page</span><span style={{fontSize:10}}>API: Connected 🟢</span></div>
<div style={{background:"#222",display:"flex",gap:4,padding:6,overflowX:"auto"}}>
{["🏠 Home","⚙️ Settings","🛠️ Tools","📖 Manual","🔗 API"].map(m=><button key={m} style={{padding:6,background:"#000",color:"#0f0",border:"1px solid #333",borderRadius:4,fontSize:9,whiteSpace:"nowrap"}}>{m}</button>)}
</div>
<div style={{padding:10}}>{children}</div>
</div>
);

return(
<div>

{/* APP 2 REELGEA API FULL */}
<div id="2-reelgea"><AppWindow title="2-REELGEA - Creator Tools Skits Making" icon="🎬">
<div style={{display:"flex",gap:4,marginBottom:8}}>
{["creator","my-skits","upload","effects","settings"].map(t=><button key={t} onClick={()=>setApp2Tab(t)} style={{padding:8,background:app2Tab===t?"#0f0":"#000",color:app2Tab===t?"#000":"#fff",border:"none",borderRadius:20,fontSize:10,fontWeight:"bold"}}>{t}</button>)}
</div>
{app2Tab==="creator" && (<div>
<p style={{fontSize:11,color:"#0f0"}}>API: /api/reelgea/skit/create + /api/reelgea/4k/render + /api/reelgea/captions</p>
<textarea value={skitScript} onChange={e=>setSkitScript(e.target.value)} placeholder="Write skit script: Scene 1 Man says Let there be light... API will generate voice, actors, effects" style={{width:"100%",height:80,padding:8,background:"#000",color:"#fff",border:"1px solid #0f0",borderRadius:6,fontSize:11}}/>
<input value={uploadLink} onChange={e=>setUploadLink(e.target.value)} placeholder="Upload link or Paste video link: geamail.con/upload" style={{width:"100%",padding:8,background:"#000",color:"#0f0",border:"1px solid #333",borderRadius:6,marginTop:6,fontSize:11}}/>
<div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:6,marginTop:8}}>
<button onClick={()=>alert("API: Adding voice - Speech API - Voice Translation")} style={{padding:8,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:10}}>🎙️ Voice API</button>
<button onClick={()=>alert("API: Adding effects - 4K Studio - Auto edit")} style={{padding:8,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:10}}>✨ Effects API</button>
<button onClick={()=>alert("API: Adding music, transitions, captions")} style={{padding:8,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:10}}>🎵 Music API</button>
</div>
<button onClick={()=>{if(!skitScript)return;setSkitVideos([{title:skitScript.substring(0,20)+" - 4K",status:"Rendering via API...",views:0},...skitVideos]);setTimeout(()=>alert("Skit Built: Story → 4K Movie - Real human - Share to MYGEA-SOCIAL"),500);}} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>🎬 Build Skit → 4K Reality Movie API</button>
</div>)}
{app2Tab==="my-skits" && (<div>{skitVideos.map((v,i)=><div key={i} style={{background:"#000",padding:8,borderRadius:6,margin:"6px 0",display:"flex",justifyContent:"space-between"}}><div><p style={{fontSize:11,fontWeight:"bold"}}>{v.title}</p><p style={{fontSize:9,color:"#888"}}>{v.status} - {v.views} views</p></div><button style={{padding:6,background:"#0f0",color:"#000",border:"none",borderRadius:4,fontSize:9}}>Share</button></div>)}</div>)}
{app2Tab==="upload" && (<div><p style={{fontSize:11}}>Upload API: /api/reelgea/upload + Drive + GEA-CON Cloud</p><div style={{height:100,background:"#000",border:"1px dashed #0f0",borderRadius:8,display:"flex",alignItems:"center",justifyContent:"center",marginTop:8}}>📤 Drag video or paste link: {uploadLink||"geamail.con/upload"}</div><button style={{background:"gold",color:"#000",padding:8,width:"100%",border:"none",borderRadius:6,marginTop:8,fontWeight:"bold"}}>Upload to GEA-CON Cloud API</button></div>)}
</AppWindow></div>

{/* APP 4 GEA-CON API FULL */}
<div id="4-gea-con"><AppWindow title="4-GEA-CON - Web Cloud Mail Domains Drive Code" icon="💻">
<div style={{display:"flex",gap:4,overflowX:"auto",marginBottom:8}}>
{["web","cloud","mail","domains","drive","code"].map(t=><button key={t} onClick={()=>setApp4Tab(t)} style={{padding:8,background:app4Tab===t?"#0f0":"#000",color:app4Tab===t?"#000":"#fff",border:"none",borderRadius:20,fontSize:10,fontWeight:"bold"}}>{t}</button>)}
</div>
<p style={{fontSize:9,color:"#0f0"}}>API Endpoints: /api/gea-con/{app4Tab} - Connected to GitHub/SPCK EDIT Prototype Builders</p>
{app4Tab==="web" && (<div style={{marginTop:8}}><input placeholder="yourdomain.geamail.con - Register via GEA-CON API" style={{width:"100%",padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6,fontSize:11}}/><button onClick={()=>alert("API: /api/gea-con/domains/register - Domain registered")} style={{background:"#0f0",color:"#000",padding:8,width:"100%",border:"none",borderRadius:6,marginTop:6,fontWeight:"bold",fontSize:11}}>🌐 Register Domain API</button></div>)}
{app4Tab==="code" && (<div style={{marginTop:8}}><p style={{fontSize:10,color:"#888"}}>Code Editor - GitHub API + SPCK EDIT Prototype Builders - API: /api/gea-con/github/push + /api/gea-con/spck/build</p><textarea value={codeText} onChange={e=>setCodeText(e.target.value)} style={{width:"100%",height:120,padding:8,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6,marginTop:5,fontFamily:"monospace",fontSize:11}}/><div style={{display:"flex",gap:6,marginTop:6}}><button onClick={()=>alert("API: GitHub Push - RC:9882150")} style={{flex:1,padding:8,background:"#0f0",color:"#000",border:"none",borderRadius:4,fontWeight:"bold",fontSize:11}}>GitHub Push API</button><button onClick={()=>alert("API: SPCK EDIT Build APK")} style={{flex:1,padding:8,background:"#222",color:"#fff",border:"none",borderRadius:4,fontSize:11}}>SPCK EDIT API</button></div></div>)}
{app4Tab!=="web" && app4Tab!=="code" && (<div style={{marginTop:8,background:"#000",padding:15,borderRadius:6,textAlign:"center"}}><div style={{fontSize:30}}>{app4Tab==="cloud"?"☁️":app4Tab==="mail"?"📧":app4Tab==="domains"?"🌐":"💾"}</div><p style={{fontSize:11}}>{app4Tab.toUpperCase()} API: /api/gea-con/{app4Tab}/list - {app4Tab} manager for 36 apps</p><button style={{background:"#0f0",color:"#000",padding:8,border:"none",borderRadius:4,marginTop:8,fontWeight:"bold",fontSize:11}}>Open {app4Tab} API</button></div>)}
</AppWindow></div>

{/* APP 5 GEACONNECT API FULL */}
<div id="5-geaconnect"><AppWindow title="5-GEACONNECT - Telecomms Nino Simless SAT Free Calls Interpreter" icon="🔗">
<div style={{display:"flex",gap:4,marginBottom:8}}>
{["calls","interpreter","contacts","settings"].map(t=><button key={t} onClick={()=>setApp5Tab(t)} style={{padding:8,background:app5Tab===t?"#0f0":"#000",color:app5Tab===t?"#000":"#fff",border:"none",borderRadius:20,fontSize:10,fontWeight:"bold"}}>{t}</button>)}
</div>
{app5Tab==="calls" && (<div><p style={{fontSize:10,color:"#0f0"}}>API: /api/geaconnect/sat/call - Nino Simless SAT Free Calls - No SIM - Voice Interpreter</p><input value={satCallTo} onChange={e=>setSatCallTo(e.target.value)} placeholder="Call: username@geamail.con or Phone via SAT API" style={{width:"100%",padding:10,background:"#000",color:"#0f0",border:"1px solid #0f0",borderRadius:6,fontSize:11}}/><button onClick={()=>{setInterpreterLogs([`API: SAT Call ${satCallTo} via DEGALAXY-SAT-01 - Free - Simless`,...interpreterLogs]);alert(`Nino Simless SAT API Calling ${satCallTo} - Free - No SIM`);}} style={{background:"#0f0",color:"#000",padding:10,width:"100%",border:"none",borderRadius:6,fontWeight:"bold",marginTop:8}}>📞 SAT Free Call API - Simless</button></div>)}
{app5Tab==="interpreter" && (<div><p style={{fontSize:10,color:"gold"}}>API: /api/geaconnect/translate - Speak English Hear Local - Multi Language Voice Translation</p><input value={speakEnglish} onChange={e=>setSpeakEnglish(e.target.value)} placeholder="Speak English here" style={{width:"100%",padding:10,background:"#000",color:"#fff",border:"1px solid #333",borderRadius:6,fontSize:12}}/><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:6,marginTop:8}}><button onClick={()=>alert(`API Translate ${speakEnglish} → Yoruba`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ Yoruba API</button><button onClick={()=>alert(`API Translate → Hausa`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ Hausa API</button><button onClick={()=>alert(`API Translate → Igbo`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ Igbo API</button><button onClick={()=>alert(`API Translate → French`)} style={{padding:10,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:11}}>→ French API</button></div><div style={{background:"#000",padding:6,borderRadius:4,marginTop:8,maxHeight:80,overflowY:"auto"}}>{interpreterLogs.map((l,i)=><div key={i} style={{fontSize:9,padding:2,borderBottom:"1px solid #222"}}>{l}</div>)}</div></div>)}
</AppWindow></div>

</div>
);
}