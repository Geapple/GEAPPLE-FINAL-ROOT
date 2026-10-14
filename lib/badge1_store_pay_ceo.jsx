"use client";
import{addDoc,collection,doc,updateDoc}from"firebase/firestore";
export function usePay(db,products,setProducts,cart,setCart,setBal,method,payments,setPayments){
 const pay=async()=>{const t=cart.reduce((s,i)=>s+i.p,0)||5000;const l={Paystack:"https://paystack.com/pay/GEA_"+Date.now(),Flutterwave:"https://checkout.flutterwave.com/v3/hosted/pay",Monnify:"https://app.monnify.com/pay",GPay:"https://pay.google.com/gp/p/ui/pay"}[method];window.open(l+"?amount="+t,"_blank");if(db)try{await addDoc(collection(db,"payments"),{amount:t,method,status:"Pending",cart,createdAt:new Date()});}catch{}alert(method+" NGN "+t+" Real API CEO Notified!");setBal(b=>b-t);setCart([]);};
 const upload=async(e)=>{e.preventDefault();const f=new FormData(e.target);const n=f.get('name');const p=Number(f.get('price'));const ty=f.get('type');if(!n)return;const it={id:Date.now(),n:n.toUpperCase(),p, type:ty,status:"Pending"};setProducts([it,...products]);if(db)try{await addDoc(collection(db,"gea_store"),it);}catch{}e.target.reset();alert(it.n+" Uploaded!");};
 const approve=async(pid)=>{setProducts(x=>x.map(p=>p.id===pid?{...p,status:"Approved"}:p));if(db)try{await addDoc(collection(db,"ceo_actions"),{action:"Approved",productId:pid,createdAt:new Date()});}catch{}};
 const edit=(pid)=>{const it=products.find(p=>p.id===pid);const nn=prompt("Edit Name:",it.n);const np=prompt("Edit Price:",it.p);if(nn)setProducts(x=>x.map(p=>p.id===pid?{...p,n:nn.toUpperCase(),p:Number(np)||p.p}:p));};
 const confirm=async(pid)=>{if(db)try{await updateDoc(doc(db,"payments",pid),{status:"Confirmed"});}catch{}setPayments(x=>x.map(p=>p.id===pid?{...p,status:"Confirmed"}:p));};
 const mint=()=>{const d=JSON.stringify({products,payments,time:new Date().toISOString()},null,2);const b=new Blob([d],{type:"application/json"});const u=URL.createObjectURL(b);const a=document.createElement('a');a.href=u;a.download="GEA_DATA_"+Date.now()+".json";a.click();};
 return{pay,upload,approve,edit,confirm,mint};
}