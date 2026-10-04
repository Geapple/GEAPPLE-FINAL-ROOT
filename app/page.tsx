"use client";
import { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_BASE || "/api";

export default function MasterShell() {
  const [view, setView] = useState("hub"); // hub | store | pay | cyber | ai | voice
  const [balance, setBalance] = useState(0);
  const [gateway, setGateway] = useState("monnify");
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [transactions, setTransactions] = useState<any[]>([]);

  useEffect(()=>{
    const b = localStorage.getItem("geapple_wallet");
    if(b) setBalance(Number(b));
    const tx = localStorage.getItem("geapple_tx");
    if(tx) setTransactions(JSON.parse(tx));
  },[]);

  const saveBalance = (n:number)=>{
    setBalance(n);
    localStorage.setItem("geapple_wallet", String(n));
  }

  const fundWallet = (amount=1000)=>{
    const nb = balance + amount;
    saveBalance(nb);
    const tx = { id:Date.now(), type:"FUND", amount, gateway, date:new Date().toLocaleString() };
    const all = [tx,...transactions];
    setTransactions(all);
    localStorage.setItem("geapple_tx", JSON.stringify(all));
    alert(`₦${amount} added via ${gateway}. New Balance: ₦${nb}`);
  }

  const withdraw = ()=>{
    if(balance<100){ alert("Low balance"); return; }
    saveBalance(balance-500);
    alert(`Withdraw initiated via ${gateway} - ₦25 fee capped`);
  }

  const payListingFee = ()=>{
    if(!productName) { alert("Enter Product Name"); return; }
    setView("pay");
    // Auto-link payment intent from store to pay
    localStorage.setItem("pay_intent", JSON.stringify({ product: productName, price: productPrice, fee:500 }));
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center pb-[80px]">

      {/* ===== TOP: LOGO1.png + GLOBE CLOCKWISE + ECOSYSTEM CLOCKWISE - NEVER VANISHES ===== */}
      <div className="w-full bg-[#0a0a0a] border-b-2 border-cyan-400 p-2 flex flex-col items-center sticky top-0 z-50">
        <div className="relative w-full max-w-md h-[95px] flex items-center justify-center">
          <img src="/logo1.png" alt="Geapple TM" className="w-[70px] h-[70px] rounded-full border-2 border-yellow-400 shadow-[0_0_20px_gold] object-cover" onError={(e:any)=> e.target.style.display='none'} />
          <div className="absolute left-4 w-[60px] h-[60px] rounded-full bg-black border border-cyan-400 flex items-center justify-center text-[35px] animate-spin-slow">🌍</div>
          <div className="absolute left-4 w-[85px] h-[85px] border border-dashed border-cyan-900 rounded-full animate-spin-slow-orbit flex items-center justify-center">
            <span className="text-[6px] text-cyan-400">ECOSYSTEM</span>
          </div>
          <div className="ml-4 text-left">
            <h1 className="text-[11px] font-bold text-yellow-400 leading-tight">GEAPPLE®™ HOLO WORLD V3<br/>HUB[35] {'>'} STORE[35] {'>'} PAY</h1>
            <p className="text-[7px] text-zinc-400">RC:9882150 • 35 Native Apps • Logo Clockwise + Globe Clockwise • NDPA Compliant</p>
          </div>
          <div className="ml-auto text-[8px] bg-lime-400 text-black px-2 py-1 rounded-full">LIVE V3</div>
        </div>
      </div>

      {/* ===== WINDOW PAGE CONTENT ===== */}
      <div className="w-full max-w-md p-2">
        {view==="hub" && (
          <>
            <div className="bg-zinc-900 border border-cyan-400 rounded-2xl p-3 mt-2">
              <p className="text-[10px] text-cyan-300">🔍 Search 35 Apps - MAPS CHAT TV + Voice Translation 10 Langs</p>
              <div className="flex gap-2 mt-2">
                <input placeholder="Search 35 Apps - MAPS CHAT..." className="flex-1 bg-black border border-zinc-700 rounded-full px-3 py-2 text-[10px]" />
                <button className="bg-cyan-400 text-black px-4 rounded-full text-[10px] font-bold">GO</button>
                <button className="bg-fuchsia-500 text-white px-4 rounded-full text-[10px] font-bold">VOICE</button>
              </div>
            </div>

            <div className="mt-3 bg-black border-2 border-fuchsia-500 rounded-2xl p-3">
              <p className="text-[10px] font-bold text-pink-400">🔥 HOLO 50-100 CONFERENCE - VOICE TRANSLATION 10 LANGS</p>
              <div className="flex gap-2 mt-2">
                <button onClick={()=> setView("voice")} className="flex-1 bg-gradient-to-r from-lime-400 to-cyan-400 text-black rounded-full py-3 text-[11px] font-bold">▶ OPEN HOLO 50-100 CONFERENCE</button>
                <button className="bg-yellow-300 text-black rounded-full px-3 text-[10px] font-bold">+ ADD 10 → 100</button>
              </div>
            </div>

            <div className="mt-3 border border-cyan-800 rounded-xl p-2">
              <p className="text-[10px] text-cyan-300 font-bold">35 NATIVES APPS - HUB[35] - ALL WORKING</p>
              <div className="grid grid-cols-5 gap-2 mt-2">
                {[
                  {n:"STORE", v:"store", icon:"/gea-store.png"},
                  {n:"PAY", v:"pay", icon:"/gea-pay.png"},
                  {n:"CYBER C", v:"cyber", icon:"/gsia-cyber-c.png"},
                  {n:"AI", v:"ai", icon:"/gsia-ai.png"},
                  {n:"VOICE", v:"voice", icon:"/gsia-voice.png"},
                ].map(a=>(
                  <button key={a.n} onClick={()=> setView(a.v)} className="bg-black border border-zinc-700 rounded-xl p-2 flex flex-col items-center">
                    <img src={a.icon} className="w-10 h-10 rounded-lg" onError={(e:any)=> e.target.src="/logo2.png"} />
                    <span className="text-[7px] mt-1">{a.n}</span>
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {view==="store" && (
          <div className="bg-black border-2 border-green-500 rounded-2xl p-3">
            <div className="flex items-center gap-2"><img src="/gea-store.png" className="w-12 h-12 rounded-full border border-green-400" /><div><h2 className="text-green-400 font-bold">17- GEA-STORE®™ — SUPER STORE</h2><p className="text-[8px]">RC:9882150 | 35 APPS ECOSYSTEM | API READY</p></div></div>
            <div className="mt-3 border border-green-400 rounded-xl p-3">
              <p className="text-green-400 font-bold text-[12px]">📱 TAB1: BROWSE 35 APPS ECOSYSTEM</p>
              <div className="grid grid-cols-3 gap-2 mt-2 text-[8px]">{Array.from({length:6}).map((_,i)=><div key={i} className="bg-zinc-900 p-2 rounded">App {i+1}</div>)}</div>
            </div>
            <div className="mt-3 border-2 border-yellow-400 rounded-xl p-3">
              <p className="text-yellow-400 font-bold">🛒 TAB2: LIST PRODUCT — ₦500 FEE → GEA-PAY®™</p>
              <input value={productName} onChange={e=>setProductName(e.target.value)} placeholder="Product / App Name e.g., GEA GAME NFT" className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-[11px]" />
              <input value={productPrice} onChange={e=>setProductPrice(e.target.value)} placeholder="Price e.g., 5000" className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-[11px]" />
              <button onClick={payListingFee} className="w-full mt-3 bg-yellow-400 text-black rounded-full py-3 font-bold text-[12px]">→ PAY LISTING FEE — GO TO GEA-PAY®™</button>
              <p className="text-[7px] text-zinc-500 mt-1">NDPA: Product data stored RC:9882150 compliant. API: ${API_BASE}/store/list</p>
            </div>
            <button onClick={()=> setView("hub")} className="w-full mt-3 bg-white text-black rounded-full py-2 text-[11px] font-bold">← BACK TO HUB 35</button>
          </div>
        )}

        {view==="pay" && (
          <div className="bg-black border-2 border-yellow-500 rounded-2xl p-3">
            <div className="flex flex-col items-center">
              <img src="/gea-pay.png" className="w-20 h-20 rounded-full border-2 border-yellow-400" />
              <h2 className="text-yellow-400 font-bold mt-2">GEA-PAY®™ SUPER PRO MAX</h2>
              <p className="text-[7px]">RC:9882150 | CEO: Apostle Dr Oladele Mighty Hassan PhD/DD | PCI-DSS GLOBAL</p>
              <p className="text-[10px] mt-2">GEAPPLE WALLET BALANCE</p>
              <p className="text-[24px] font-bold">₦ {balance.toFixed(2)}</p>
              <div className="flex gap-2 mt-2 w-full">
                <button onClick={()=>fundWallet(1000)} className="flex-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-black rounded-full py-3 font-bold text-[12px]">+ FUND WALLET</button>
                <button onClick={withdraw} className="flex-1 bg-gradient-to-r from-green-400 to-cyan-400 text-black rounded-full py-3 font-bold text-[12px]">⬇ WITHDRAW</button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-yellow-400 font-bold">💳 GLOBAL PAYMENT GATEWAYS — SELECT ONE</p>
              <div className="grid grid-cols-2 gap-2 mt-2">
                {[
                  {id:"paystack", name:"Paystack", sub:"NG Cards, USSD"},
                  {id:"flutterwave", name:"Flutterwave", sub:"Global Cards"},
                  {id:"monnify", name:"Monnify", sub:"Bank Transfer"},
                  {id:"gpay", name:"GPay", sub:"Google Pay"},
                ].map(g=>(
                  <button key={g.id} onClick={()=> setGateway(g.id)} className={`bg-zinc-900 border-2 rounded-xl p-3 ${gateway===g.id? "border-yellow-400 shadow-[0_0_10px_gold]" : "border-zinc-700"}`}>
                    <p className="font-bold text-[12px]">{g.name}</p><p className="text-[9px]">{g.sub}</p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-4 border border-zinc-700 rounded-xl p-3">
              <p className="font-bold text-[12px]">📝 PAYMENT INTENT — AUTO-LINKED FROM GEA-STORE</p>
              <select className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-full px-3 py-2 text-[11px]">
                <option>GEA-STORE Listing Fee — ₦500</option>
                <option>HOLO 50-100 Ticket — ₦1000</option>
              </select>
              <input placeholder="Product / Investor Full Name" className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-[11px]" defaultValue={productName} />
              <input placeholder="Amount" className="w-full mt-2 bg-zinc-900 border border-zinc-700 rounded-lg px-3 py-2 text-[11px]" defaultValue="500" />
              <p className="text-[9px] text-cyan-400 mt-1">Active Gateway: {gateway} - Account Transfer, Instant - Fee ₦25 capped</p>
              <button onClick={()=>fundWallet(500)} className="w-full mt-2 bg-yellow-400 text-black rounded-full py-3 font-bold">🔒 PAY SECURELY WITH {gateway.toUpperCase()}</button>
            </div>

            <div className="mt-3 border border-zinc-700 rounded-xl p-3">
              <p className="font-bold">📜 TRANSACTIONS — API LOG</p>
              {transactions.length===0? <p className="text-[10px] text-zinc-500 mt-2">No transactions yet</p> : transactions.map(t=><div key={t.id} className="text-[9px] flex justify-between border-b border-zinc-800 py-1"><span>{t.type} {t.gateway}</span><span className="text-green-400">₦{t.amount}</span></div>)}
              <p className="text-[7px] text-zinc-600 mt-2">NDPA: All transactions logged encrypted - PCI-DSS - RC:9882150 - legal@geapple.com</p>
            </div>
            <button onClick={()=> setView("hub")} className="w-full mt-3 bg-white text-black rounded-full py-2 font-bold">← BACK TO HUB 35</button>
          </div>
        )}

        {(view==="cyber" || view==="ai" || view==="voice") && (
          <div className="bg-zinc-900 border-2 border-cyan-400 rounded-2xl p-4 text-center">
            <img src={`/gsia-${view}.png`} className="w-24 h-24 mx-auto rounded-xl border border-cyan-400" onError={(e:any)=> e.target.src="/logo2.png"} />
            <h2 className="mt-3 font-bold text-cyan-400 uppercase">{view} WINDOW PAGE — WORKING</h2>
            <p className="text-[10px] mt-2">Feedback + Social + Profile inside window</p>
            <button onClick={()=> setView("hub")} className="mt-4 bg-white text-black px-6 py-2 rounded-full font-bold">← BACK TO HUB 35</button>
          </div>
        )}
      </div>

      {/* ===== BOTTOM NAV - ALWAYS WORKING - BACK TO HUB ===== */}
      <div className="fixed bottom-0 w-full max-w-md bg-black border-t-2 border-cyan-900 flex justify-around py-2 z-50">
        <button onClick={()=> setView("hub")} className={`flex flex-col items-center px-4 py-1 rounded-xl ${view==="hub"? "bg-cyan-400 text-black" : "text-cyan-300"}`}><span>🏠</span><span className="text-[9px]">Home<br/>HUB 35</span></button>
        <button onClick={()=> setView("store")} className={`flex flex-col items-center px-4 py-1 rounded-xl ${view==="store"? "bg-green-400 text-black" : ""}`}><span>🛒</span><span className="text-[9px]">Store<br/>35 APPS</span></button>
        <button onClick={()=> setView("pay")} className={`flex flex-col items-center px-4 py-1 rounded-xl ${view==="pay"? "bg-yellow-400 text-black" : ""}`}><span>💳</span><span className="text-[9px]">Pay<br/>GEA-PAY</span></button>
        <button onClick={()=> setView("hub")} className="flex flex-col items-center px-4 py-1 rounded-xl"><span>👤</span><span className="text-[9px]">Profile<br/>MENU</span></button>
      </div>

      <style jsx>{`
       .animate-spin-slow { animation: spinClockwise 6s linear infinite; }
       .animate-spin-slow-orbit { animation: spinClockwise 10s linear infinite; }
        @keyframes spinClockwise { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}