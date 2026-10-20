"use client";
import {useParams} from "next/navigation";
export default function PageId(){
const p=useParams();
const id=p?.id||"1-mygea";
return(<div style={{background:"#000",color:"#0f0",padding:10}}><h1>GEA Store ID: {id} - Apps 1-9 Working - RC:9882150</h1><p>If you see this, page.jsx OK!</p></div>);
}