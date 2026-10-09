"use client";
import { useParams } from "next/navigation";
const APPS=[
{id:1,n:"MYGEA SOCIAL",d:"Viral Social OS"},{id:2,n:"GEA STORE",d:"Global Marketplace"},
{id:3,n:"GEA PAY",d:"Pay Engine"},{id:4,n:"GEA CON",d:"Encrypted Comms"},
{id:5,n:"GEACONNECT",d:"Professional Network"},{id:6,n:"HOLO",d:"Holo Identity"},
{id:7,n:"VOTES",d:"Voting System"},{id:8,n:"SAT COMMS",d:"Sat Comms"},
{id:9,n:"MILITARY",d:"Military Grade"},{id:10,n:"ART G",d:"Art Gallery"},
{id:35,n:"SYSTEMS",d:"Core Systems"},
];
export default function AppPage(){
 const {id}=useParams();
 const app=APPS.find(x=>String(x.id)===String(id)) || {n:`APP ${id}`,d:"Geapple Module"};
 return(
  <div style={{background:'#000',minHeight:'100vh',color:'#fff',padding:20,textAlign:'center'}}>
   <h1 style={{color:'#0f0'}}>{app.n}</h1>
   <p style={{color:'#aaa',marginTop:10}}>{app.d}</p>
   <button onClick={()=>history.back()} style={{marginTop:20,background:'#0f0',color:'#000',padding:'10px 20px',borderRadius:8,fontWeight:'bold'}}>← BACK TO HUB 35</button>
  </div>
 )
}