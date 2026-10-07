"use client";
import { useState, useEffect } from "react";
import { db } from "./firebase";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";

export function useChat(room = "global") {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, `chats_${room}`), orderBy("createdAt", "asc"));
    const unsub = onSnapshot(q, (snap) => {
      setMessages(snap.docs.map(d => ({ id: d.id, ...d.data() })));
      setLoading(false);
    });
    return () => unsub();
  }, [room]);

  const sendMessage = async (text, user) => {
    if (!text.trim()) return;
    await addDoc(collection(db, `chats_${room}`), {
      text,
      user: user || "CTO",
      badge: "⚡",
      createdAt: serverTimestamp(),
    });
  };

  return { messages, sendMessage, loading };
}