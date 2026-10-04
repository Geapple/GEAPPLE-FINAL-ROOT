"use client";
import { useState } from "react";

export default function GeaPayWindow() {
  const [balance, setBalance] = useState(10500);
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center p-2 font-mono">

      {/* ===== TOP: TRADEMARK LOGO 1 + REVOLVING GLOBE CLOCKWISE + ECOSYSTEM ORBIT CLOCKWISE ===== */}
      <div className="relative w-full max-w-md h-[160px] flex flex-col items-center border-2 border-lime-400 rounded-[30px] bg-[#0a0a0a] overflow-hidden">
        {/* Logo PNG 1 at TOP - Trademark */}
        <img src="/logo1.png" alt="Geapple TM" className="absolute top-2 w-[110px] z-20 drop-shadow-[0_0_15px_lime]" />

        {/* Digital 🌍 Revolving Clockwise */}
        <div className="absolute top-[55px] w-[90px] h-[90px] rounded-full bg-gradient-to-br from-green-900 to-black border border-lime-400 flex items-center justify-center text-[60px] animate-spin-slow">
          🌍
        </div>

        {/* Geapple Ecosystem Text Revolving CLOCKWISE Round the Globe */}
        <div className="absolute top-[55px] w-[145px] h-[145px] animate-spin-slow-orbit">
          <div className="w-full h-full rounded-full relative">
            <span className="absolute -top-2 left-1/2 -translate-x-1/2 text-[9px] text-lime-300 tracking-[3px] font-bold">● GEAPPLE ECOSYSTEM ●</span>
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 text-[9px] text-cyan-300 tracking-[3px] rotate-180">● PAY SYSTEM ●</span>
          </div>
        </div>
        <div className="absolute bottom-1 text-[7px] text-zinc-500">GEAPPLE TM • CLOCKWISE ROTATION</div>
      </div>

      {/* ===== WINDOW PAGE 2 - GEA PAY - WHERE APP LIVES ===== */}
      <div className="w-full max-w-md mt-3 border-2 border-lime-400 rounded-[25px] bg-zinc-900 p-3">

        {/* App Own Digital Logo Icon Wrapping the App - FULL APPLE 🍎 */}
        <div className="flex items-center gap-3 border border-lime-900 rounded-2xl p-2 bg-black">
          <img src="/gea-pay.png" className="w-14 h-14 rounded-xl border border-lime-400 bg-black" alt="GEA PAY Full Apple" />
          <div>
            <h1 className="text-lime-400 font-bold text-[14px]">GEA PAY</h1>
            <p className="text-[9px] text-cyan-400">FINTECH • WINDOW PAGE 2 • FULL 🍎</p>
            <p className="text-[8px] text-zinc-400">Wrapped by own logo icon</p>
          </div>
          <div className="ml-auto text-right">
            <div className="text-[8px] text-zinc-400">BALANCE</div>
            <div className="bg-lime-400 text-black px-2 py-1 rounded-full text-[11px] font-bold">₦{balance.toLocaleString()}</div>
          </div>
        </div>

        {/* APP FUNCTIONS INSIDE WINDOW - PAY FUNCTIONS ONLY */}
        <div className="grid grid-cols-2 gap-2 mt-3">
          <button onClick={()=>setBalance(b=>b+1000)} className="bg-black border border-lime-400 rounded-xl p-3 text-[10px] hover:bg-lime-900">
            <div className="text-[16px]">💰</div> Receive Money
          </button>
          <button onClick={()=>setBalance(b=>b-500)} className="bg-black border border-zinc-700 rounded-xl p-3 text-[10px]">
            <div className="text-[16px]">📤</div> Send Money
          </button>
          <button className="bg-black border border-zinc-700 rounded-xl p-3 text-[10px]">
            <div className="text-[16px]">⭐</div> Feedback
          </button>
          <button className="bg-black border border-zinc-700 rounded-xl p-3 text-[10px]">
            <div className="text-[16px]">👥</div> Social Activity
          </button>
        </div>

        {/* TRANSACTION HISTORY - UI INSIDE WINDOW */}
        <div className="mt-3 bg-black rounded-xl p-2 border border-zinc-800">
          <p className="text-[8px] text-lime-400">💳 Recent Transactions:</p>
          <div className="text-[8px] mt-1 space-y-1 text-zinc-300">
            <div className="flex justify-between"><span>• Store Purchase</span><span className="text-red-400">-₦2,500</span></div>
            <div className="flex justify-between"><span>• CEO Payment</span><span className="text-green-400">+₦5,000</span></div>
            <div className="flex justify-between"><span>• Holo Ticket</span><span className="text-red-400">-₦1,000</span></div>
          </div>
        </div>

        {/* WINDOW OPERATING BUTTONS - INSIDE WINDOW PAGE */}
        <div className="mt-3 border-t border-zinc-700 pt-2">
          <p className="text-[8px] text-yellow-400 mb-1">WINDOW OPERATING BUTTONS:</p>
          <div className="flex gap-2">
            <button className="flex-1 bg-lime-400 text-black rounded-full py-2 text-[10px] font-bold">💳 Pay Now</button>
            <button className="flex-1 bg-cyan-400 text-black rounded-full py-2 text-[10px] font-bold">📷 Scan QR</button>
          </div>
        </div>

        {/* USER PROFILE INSIDE WINDOW */}
        <div className="mt-3 bg-black rounded-xl p-2 flex justify-between items-center border border-zinc-800">
          <span className="text-[9px]">👤 Profile: CTO Wallet • Verified</span>
          <span className="text-[8px] text-lime-400">● Full 🍎 Secured</span>
        </div>
      </div>

      {/* ===== MENU TOOLS (Vertical) + FILES PAGE + PWA WRAPPER ===== */}
      <div className="w-full max-w-md mt-3 grid grid-cols-3 gap-2">
        <div className="border border-zinc-700 rounded-xl bg-zinc-900 p-2">
          <p className="text-[8px] text-lime-400 font-bold">MENU TOOLS</p>
          <div className="text-[8px] mt-1 space-y-1">
            <div>⚙️ PAY SETTINGS</div>
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
            <div>📜 TERMS & CONDITIONS</div>
            <div>📊 CEO DASHBOARD</div>
          </div>
        </div>
        <div className="border border-lime-500 rounded-xl bg-black p-2 flex flex-col items-center">
          <img src="/logo2.png" className="w-12 h-12 rounded-lg border border-lime-400" />
          <p className="text-[6px] text-center mt-1">PWA WRAPPER 35 APPS</p>
          <button className="mt-1 bg-lime-500 text-black text-[7px] px-2 py-1 rounded-full font-bold">DOWNLOAD APK</button>
        </div>
      </div>

      <style jsx>{`
      .animate-spin-slow { animation: spinClockwise 8s linear infinite; }
      .animate-spin-slow-orbit { animation: spinClockwise 18s linear infinite; }
        @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      <div className="flex gap-2 mt-4">
        <a href="/gea-store" className="bg-zinc-800 text-white px-4 py-2 rounded-full text-[10px]">← APP 1 STORE</a>
        <a href="/" className="bg-white text-black px-6 py-2 rounded-full text-[10px] font-bold">HUB 35 →</a>
      </div>
    </div>
  );
}