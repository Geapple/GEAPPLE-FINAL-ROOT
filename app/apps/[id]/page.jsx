"use client";
import {useState} from "react";
import EcoHeader from "../../../components/apps/EcoHeader";
import StorePay from "../../../components/apps/StorePay";
import ShareLinks from "../../../components/apps/ShareLinks";
import App1 from "../../../components/apps/1-mygea";
import App2 from "../../../components/apps/2-reel";
import App3 from "../../../components/apps/3-geamail";
import App4 from "../../../components/apps/4-geacon";
import App5 from "../../../components/apps/5-geaconnect";
import App6 from "../../../components/apps/6-holo";
import App7 from "../../../components/apps/7-votes";
import App8 from "../../../components/apps/8-sat";
import App9 from "../../../components/apps/9-military";

const APPS=[
{id:"1-mygea",n:"1-MYGEA-SOCIAL"},
{id:"2-reel",n:"2-REELGEA"},
{id:"3-mail",n:"3-GEAMAIL.CON"},
{id:"4-geacon",n:"4-GEA-CON"},
{id:"5-conn",n:"5-GEACONNECT"},
{id:"6-holo",n:"6-MYGEA-HOLO"},
{id:"7-votes",n:"7-GLOBAL-VOTES"},
{id:"8-sat",n:"8-DEGALAXY-SAT"},
{id:"9-mil",n:"9-MILITARY-BORD"},
];

export default function Router({params}){
const [menu,setMenu]=useState(false);
const [apiLog,setApiLog]=useState("API: Ready - RC:9882150 - Independent Edit System - Fix bugs without interfering");
const [cameraOn,setCameraOn]=useState(false);
const [holoOn,setHoloOn]=useState(false);
const curId=params?.id || "1-mygea";
const cur=APPS.find(a=>a.id===curId) || APPS[0];

const apiCall=(app,action)=>{
const log=app+" API: "+action+" -> /api/"+app+"/"+action+" - Connected OK";
setApiLog(log);
if(action.includes("camera")) setCameraOn(!cameraOn);
if(action.includes("holo")) setHoloOn(!holoOn);
};

const renderApp=()=>{
if(curId.includes("1-mygea")) return <App1 apiCall={apiCall} cameraOn={cameraOn} holoOn={holoOn}/>;
if(curId.includes("2-reel")) return <App2 apiCall={apiCall} cameraOn={cameraOn} holoOn={holoOn}/>;
if(curId.includes("3-mail")) return <App3 apiCall={apiCall} cameraOn={cameraOn} holoOn={holoOn}/>;
if(curId.includes("4-geacon")) return <App4 apiCall={apiCall}/>;
if(curId.includes("5-conn")) return <App5 apiCall={apiCall} cameraOn={cameraOn}/>;
if(curId.includes("6-holo")) return <App6 apiCall={apiCall} holoOn={holoOn}/>;
if(curId.includes("7-votes")) return <App7 apiCall={apiCall}/>;
if(curId.includes("8-sat")) return <App8 apiCall={apiCall}/>;
if(curId.includes("9-mil")) return <App9 apiCall={apiCall}/>;
return <App1 apiCall={apiCall} cameraOn={cameraOn} holoOn={holoOn}/>;
};

return(
<div style={{background:"#000",color:"#fff",minHeight:"100vh"}}>
<EcoHeader cur={cur} setMenu={setMenu} apiLog={apiLog}/>
{menu&&(<div style={{background:"#111",padding:8}}>{APPS.map(a=>(<button key={a.id} onClick={()=>{window.location.href="/apps/"+a.id;}} style={{padding:6,margin:3,background:"#222",color:"#fff",border:"none",borderRadius:6,fontSize:8}}>{a.n} - EDIT SOLO</button>))}</div>)}
{renderApp()}
<StorePay curId={curId} apiCall={apiCall}/>
<ShareLinks curId={curId} apiCall={apiCall}/>
</div>
);
}