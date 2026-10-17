"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
export default function Page(){
const r=useRouter();
useEffect(()=>{r.push("/apps/mygea");},[r]);
return <div style={{background:"#000",color:"#0f0",padding:20,fontWeight:"bold",fontSize:18}}>MYGEA SOCIAL NATIVES APP $1B - Loading Geapple Hub 35...</div>;
}