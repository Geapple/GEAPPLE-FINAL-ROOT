"use client";
import {useParams} from "next/navigation";
export default function PageId(){
const params=useParams();
const id=params?.id||"1-mygea";
return(
<div style={{background:"#000",color:"#0f0",padding:10,minHeight:"100vh"}}>
<div style={{fontSize:12,fontWeight:"bold"}}>GEA Store - ID: {id} - Apps 1-9 - API Connected OK - RC:9882150 - Fit Screen</div>
<div style={{marginTop:10,fontSize:10}}>If you see this, page.jsx is working! Now we can add App1 to App9 one by one.</div>
<div style={{marginTop:10,display:"flex",gap:6,flexWrap:"wrap"}}>
{["1-mygea","2-reelgea","3-geamail","4-geacon","5-geaconnect","6-holo","7-votes","8-sat","9-military"].map(a=>(
<a key={a} href={`/apps/${a}`} style={{padding:8,background:id===a?"#0f0":"#222",color:id===a?"#000":"#fff",borderRadius:6,textDecoration:"none",fontSize:10}}>{a}</a>
))}
</div>
</div>
);
}