"use client";
import { addDoc, collection } from "firebase/firestore";
export function useChatLove(db, posts, setPosts){
 const likeActive = async (pid, likes, setLikes) => {
  setLikes(prev=>({...prev, [pid]:!prev[pid]}));
  if(db){ try{ await addDoc(collection(db,"likes"), {postId:pid, createdAt:new Date()}); }catch(err){} }
  setPosts(prev=>prev.map(p=>p.id===pid?{...p, l: likes[pid]? p.l-1 : p.l+1 }:p));
 };
 const sendChat = async (pid, dbLocal, chatMessages, setChatMessages) => {
  const el = document.getElementById("c-" + pid);
  if(!el ||!el.value) return;
  const txt = el.value;
  if(dbLocal){ try{ await addDoc(collection(dbLocal,"chats", String(pid), "messages"), {text:txt, user:"You", createdAt:new Date()}); }catch(err){} }
  setPosts(prev=>prev.map(p=>p.id===pid?{...p, comments:[...(p.comments||[]), txt]}:p));
  el.value = "";
 };
 const shareActive = (pl, pid) => {
  const url = typeof window!== 'undefined'? window.location.href + "?post=" + pid : "";
  if(pl==='wa') window.open("https://wa.me/?text=" + encodeURIComponent(url));
  if(pl==='fb') window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodeURIComponent(url));
  if(pl==='ig') window.open("https://instagram.com");
  if(pl==='tt') window.open("https://tiktok.com");
  if(pl==='yt') window.open("https://youtube.com");
  if(pl==='li') window.open("https://linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(url));
  if(pl==='copy'){ navigator.clipboard.writeText(url); alert("🔗 Copied!"); }
 };
 return {likeActive, sendChat, shareActive};
}