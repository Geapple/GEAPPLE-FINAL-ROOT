"use client";
const APPS=[
{id:1,n:"MYGEA SOCIAL"},{id:2,n:"GEA STORE"},{id:3,n:"GEA PAY"},
{id:4,n:"GEA CON"},{id:5,n:"GEACONNECT"},{id:6,n:"HOLO"},
{id:7,n:"VOTES"},{id:8,n:"SAT COMMS"},{id:9,n:"MILITARY"},
{id:10,n:"ART G"},{id:11,n:"TUNE"},{id:12,n:"4K STUDIO"},
{id:13,n:"GAME"},{id:14,n:"OKIDOKI"},{id:15,n:"GALAREA"},
{id:16,n:"YELLOW"},{id:18,n:"ORB"},{id:19,n:"CYBER C"},
{id:20,n:"GSIA AI"},{id:21,n:"ORACLE M"},{id:22,n:"FRAUD D"},
{id:23,n:"VISUAL"},{id:24,n:"ORACLE W"},{id:25,n:"BUDGET"},
{id:26,n:"SAT FEED"},{id:27,n:"ARCHI"},{id:28,n:"CARTOONS"},
{id:30,n:"WALLET"},{id:31,n:"GADGETS"},{id:33,n:"DATA MINT"},
{id:34,n:"INVESTORS"},{id:35,n:"SYSTEMS"},
];
export default function Page(){
 return(
 <div style={{background:'#000',minHeight:'100vh',color:'#fff',padding:12,fontFamily:'sans-serif'}}>
  <div style={{textAlign:'center',padding:10,border:'2px solid #0f0',borderRadius:12}}>
   <img src="/logo1.png" style={{width:60,height:60,borderRadius:30,border:'2px solid #0f0'}} onError={e=>e.target.style.display='none'}/>
   <h1 style={{color:'#0f0',margin:'6px 0'}}>GEAPPLE HUB 35</h1>
   <p style={{fontSize:10,color:'#aaa'}}>www.geapple.com | CEO: Apostle Oladele</p>
  </div>
  <div style={{display:'grid',gridTemplateColumns:'repeat(3,1fr)',gap:10,marginTop:14}}>
   {APPS.map(a=>(
    <div key={a.id} onClick={()=>location.href=`/apps/${a.id}`} style={{background:'#111',border:'1px solid #0f08',borderRadius:12,padding:14,textAlign:'center'}}>
     <div style={{fontSize:24}}>📱</div>
     <div style={{fontSize:8,marginTop:6,fontWeight:'bold'}}>{a.id}-{a.n}</div>
    </div>
   ))}
  </div>
 </div>
 )
}