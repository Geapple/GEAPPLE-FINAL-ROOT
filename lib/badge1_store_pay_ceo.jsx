"use client";
import { doc, updateDoc, addDoc, collection } from "firebase/firestore";
export function useStorePayCEO(db, products, setProducts, cart, setCart, setBalance, payMethod, payments, setPayments){
 const uploadProduct = async (e) => {
  e.preventDefault();
  const fd = new FormData(e.target);
  const name = fd.get('name');
  const price = Number(fd.get('price'));
  const type = fd.get('type');
  if(!name) return;
  const newItem = {id: Date.now(), n: name.toUpperCase(), p: price, type, status: "Pending"};
  setProducts([newItem,...products]);
  if(db){ try{ await addDoc(collection(db,"gea_store"), newItem); }catch(err){} }
  alert(newItem.n + " Uploaded!");
  e.target.reset();
 };
 const editProduct = (pid) => {
  const item = products.find(p=>p.id===pid);
  const newName = prompt("Edit Name:", item.n);
  const newPrice = prompt("Edit Price:", item.p);
  if(newName){ setProducts(prev=>prev.map(p=>p.id===pid?{...p, n:newName.toUpperCase(), p:Number(newPrice)||p.p}:p)); }
 };
 const approveProduct = async (pid) => {
  setProducts(prev=>prev.map(p=>p.id===pid?{...p, status:"Approved"}:p));
  if(db){ try{ await addDoc(collection(db,"ceo_actions"), {action:"Approved", productId:pid, createdAt:new Date()}); }catch(err){} }
 };
 const payActive = async () => {
  const total = cart.reduce((s,i)=>s+i.p,0)||5000;
  const ref = "GEA_" + Date.now();
  if(db){ try{ await addDoc(collection(db,"payments"), {amount:total, method:payMethod, ref, status:"Pending", cart, createdAt:new Date()}); }catch(err){} }
  alert(payMethod + " Pay NGN " + total + " Ref:" + ref + " CEO Notified!");
  setBalance(b=>b-total);
  setCart([]);
 };
 const confirmPayment = async (pid) => {
  if(db){ try{ await updateDoc(doc(db,"payments",pid), {status:"Confirmed"}); }catch(err){} }
  setPayments(prev=>prev.map(p=>p.id===pid?{...p, status:"Confirmed"}:p));
 };
 const mintData = () => {
  const data = JSON.stringify({products, payments, time:new Date().toISOString()}, null, 2);
  const blob = new Blob([data], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = "GEA_DATA_" + Date.now() + ".json";
  a.click();
 };
 return {uploadProduct, editProduct, approveProduct, payActive, confirmPayment, mintData};
}