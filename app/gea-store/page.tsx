"use client";
import { useState } from "react";

export default function GeaStoreWindow() {
  const [cart, setCart] = useState(0);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-2 font-mono">

      {/* ===== TOP: TRADEMARK LOGO + REVOLVING GLOBE + ECOSYSTEM CLOCKWISE ===== */}
      <div className="relative w-full max-w-md h-[160px] flex flex-col items-center border-2 border-fuchsia-500 rounded-[30px] bg-[#0a0a0a] overflow-hidden">
        {/* Logo PNG 1 at TOP */}
        <img src="/logo1.png" alt="Geapple TM" className="absolute top-2 w-[110px] z-20 drop-shadow-[0_0_15px_magenta]" />

        {/* Digital Globe Revolving Clockwise */}
        <div className="absolute top-[55px] w-[90px] h-[90px] rounded-full bg-gradient-to-br from-blue-900 to-black border border-cyan-400 flex items-center justify-center text-[60px] animate-spin-slow">
          🌍
        </div>

        {/* Geapple Ecosystem Revolving CLOCKWISE Round the Globe */}
        <div className="absolute top-[55px] w-[145px] h-[145px] animate-spin-slow-reverse">
          <div className="w-full h-full rounded-full relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] text-cyan-300 tracking-[3px]">● GEAPPLE ECOSYSTEM ●</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-lime-300 tracking-[3px] rotate-180">● GEAPPLE ECOSYSTEM ●</span>
          </div>
        </div>

        <div className="absolute bottom-1 text-[7px] text-zinc-500">DIGITAL GLOBE • CLOCKWISE • TM</div>
      </div>

      {/* ===== WINDOW PAGE - WHERE APP LIVES (Not Menu) ===== */}
      <div className="w-full max-w-md mt-3 border-2 border-cyan-400 rounded-[25px] bg-zinc-900 p-3">

        {/* App Own Logo Icon Wrapping the App */}
        <div className="flex items-center gap-3 border border-cyan-900 rounded-2xl p-2 bg-black">
          <img src="/gea-store.png" className="w-14 h-14 rounded-xl border border-cyan-400" />
          <div>
            <h1 className="text-cyan-400 font-bold text-[14px]">GEA STORE</h1>
            <p className="text-[9px] text-lime-400">STORE 35 • WINDOW PAGE 1</p>
            <p className="text-[8px] text-zinc-400">Wrapped by own logo icon</p>
          </div>
          <div className="ml-auto bg-lime-400 text-black px-2 py-1 rounded-full text-[10px] font-bold">{cart}</div>
        </div>

        {/* APP FUNCTIONS INSIDE WINDOW */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button onClick={()=>setCart(c=>c+1)} className="bg-black border border-cyan-400 rounded-xl p-3 text-[10px] hover:bg-cyan-900">🛒 Buy Products</button>
          <button className="bg-black border border-zinc-700 rounded-xl p-3 text-[10px]">📦 My Orders</button>
          <button className="bg-black border border-zinc-700 rounded-xl p-3 text-[10px]">⭐ Feedback</button>
          <button className="bg-black border border-zinc-700 rounded-xl p-3 text-[10px]">👥 Social Activity</button>
        </div>

        {/* WINDOW OPERATING BUTTONS */}
        <div className="mt-3 border-t border-zinc-700 pt-2">
          <p className="text-[8px] text-yellow-400 mb-1">WINDOW OPERATING BUTTONS:</p>
          <div className="flex gap-2">
            <button className="flex-1 bg-cyan-500 text-black rounded-full py-2 text-[10px] font-bold">➕ Add to Cart</button>
            <button className="flex-1 bg-lime-400 text-black rounded-full py-2 text-[10px] font-bold">💳 Checkout</button>
          </div>
        </div>

        {/* USER PROFILE INSIDE WINDOW */}
        <div className="mt-3 bg-black rounded-xl p-2 flex justify-between items-center border border-zinc-800">
          <span className="text-[9px]">👤 Profile: CTO • CEO</span>
          <span className="text-[8px] text-lime-400">● Online</span>
        </div>

        {/* UI + FEEDBACK */}
        <div className="mt-2 text-[8px] text-zinc-500 bg-black p-2 rounded-lg">💬 UI Feedback: "Store loading fast, PWA ready!"</div>
      </div>

      {/* ===== MENU TOOLS (Vertical) + SETTINGS + FILES ===== */}
      <div className="w-full max-w-md mt-3 grid grid-cols-3 gap-2">
        <div className="border border-zinc-700 rounded-xl bg-zinc-900 p-2">
          <p className="text-[8px] text-cyan-400 font-bold">MENU TOOLS</p>
          <div className="text-[8px] mt-1 space-y-1">
            <div>⚙️ LANG SETTINGS</div>
            <div>☰ PROFILE MENU</div>
            <div>📖 MANUAL V3</div>
            <div>🎨 Themes</div>
          </div>
        </div>
        <div className="border border-zinc-700 rounded-xl bg-zinc-900 p-2">
          <p className="text-[8px] text-yellow-400 font-bold">FILES PAGE</p>
          <div className="text-[8px] mt-1 space-y-1">
            <div>⚖️ LEGAL - NDPA</div>
            <div>🔒 PRIVACY</div>
            <div>📜 TERMS</div>
            <div>📊 CEO DASHBOARD</div>
          </div>
        </div>
        <div className="border border-fuchsia-500 rounded-xl bg-black p-2 flex flex-col items-center">
          <img src="/logo2.png" className="w-12 h-12 rounded-lg" />
          <p className="text-[6px] text-center mt-1">PWA APK WRAPPER 35 APPS</p>
          <button className="mt-1 bg-fuchsia-600 text-white text-[7px] px-2 py-1 rounded-full">DOWNLOAD</button>
        </div>
      </div>

      <style jsx>{`
       .animate-spin-slow { animation: spinClockwise 8s linear infinite; }
       .animate-spin-slow-reverse { animation: spinClockwise 18s linear infinite; }
        @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <a href="/" className="mt-4 bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold">← BACK TO HUB 35</a>
    </div>
  );
}