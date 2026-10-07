// lib/chatApi.js - REAL CHAT API - JS Backup
// This will make chat receive friend text!

// FOR NOW WITHOUT FIREBASE - USING VERCEL KV / LOCAL API SIMULATION
// Later we plug Firebase

export const sendMessage = async (postId, text, user) => {
  const msg = { id: Date.now(), postId, text, user, time: new Date().toISOString() };
  // Save to localStorage AND try to sync to server if available
  const key = `geapple_chat_${postId}`;
  const existing = JSON.parse(localStorage.getItem(key) || "[]");
  existing.push(msg);
  localStorage.setItem(key, JSON.stringify(existing));
  
  // If we have Firebase, it would be:
  // await addDoc(collection(db, `posts/${postId}/chats`), msg);
  
  // For now, also try to send to a shared backup (needs backend)
  try {
    await fetch('/api/chat', { method:'POST', body: JSON.stringify(msg) });
  } catch {}
  
  return msg;
};

export const getMessages = (postId) => {
  const key = `geapple_chat_${postId}`;
  return JSON.parse(localStorage.getItem(key) || "[]");
};

// Real-time listener (Firebase version)
// export const listenChats = (postId, callback) => {
//   return onSnapshot(collection(db, `posts/${postId}/chats`), (snap) => {
//     callback(snap.docs.map(d=>d.data()));
//   });
// };