import { useState, useEffect } from "react";
import { db } from "./firebase.js";
import { collection, addDoc, onSnapshot, query, orderBy, serverTimestamp } from "firebase/firestore";

export function useChat(roomId="v62-global"){
 const [messages,setMessages]=useState([]);
 useEffect(()=>{
  if(!db) return;
  const q=query(collection(db,"chats",roomId,"messages"), orderBy("createdAt","asc"));
  const unsub=onSnapshot(q,(snap)=>{
   setMessages(snap.docs.map(d=>({id:d.id,...d.data()})));
  });
  return ()=>unsub();
 },[roomId]);
 const sendMessage=async(text,user="geappleadmin")=>{
  if(!text.trim() ||!db) return;
  await addDoc(collection(db,"chats",roomId,"messages"),{
   text, user, createdAt: serverTimestamp()
  });
 };
 return {messages, sendMessage};
}