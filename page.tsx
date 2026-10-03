"use client";
import { useState, useEffect } from "react";

export default function Holo50100Conference() {
  const [speakingLang, setSpeakingLang] = useState("EN");
  const [participants, setParticipants] = useState(87);

  const langs = [
    { code: "YO", name: "Yoruba", flag: "🇳🇬" },
    { code: "IG", name: "Igbo", flag: "🇳🇬" },
    { code: "HA", name: "Hausa", flag: "🇳🇬" },
    { code: "FR", name: "Français", flag: "🇫🇷" },
    { code: "AR", name: "العربية", flag: "🇸🇦" },
    { code: "ES", name: "Español", flag: "🇪🇸" },
    { code: "ZH", name: "中文", flag: "🇨🇳" },
    { code: "SW", name: "Swahili", flag: "🇹🇿" },
    { code: "EN", name: "English", flag: "🇺🇸" },
    { code: "PT", name: "Português", flag: "🇧🇷" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setParticipants(Math.floor(Math.random() * 15) + 85);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-2 pb-24 font-mono">
      {/* TOP HEADER - MATCHES YOUR DESIGN */}
      <div className="border-2 border-lime-400 rounded-2xl p-3 bg-zinc-900 mb-2 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-cyan-400 rounded-full animate-pulse"></div>
          <div>
            <h1 className="text-lime-400 font-bold text-sm">HOLO 50-100 CONFERENCE LIVE</h1>
            <p className="text-[10px] text-white">Speak English → Hear Local + Avatar Flag</p>
          </div>
        </div>
        <div className="text-right">
          <div className="bg-red-600 text-white px-2 py-1 rounded text-[10px] animate-pulse">LIVE: {participants}/100</div>
          <div className="text-[9px] text-lime-300">VOICE TRANSLATION 10 LANGS</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-2">
        {/* LEFT VERTICAL TOOLS */}
        <div className="col-span-2 flex flex-col gap-2">
          {[
            "🎥 5G SELFIE CAM",
            "📡 SENSORS",
            "📽️ BEAM PROJECTOR",
            "☁️ CLOUD MOVIES",
            "📺 MULTI STREAM",
            "📢 ADVERTS",
            "📰 NEWS FEED",
            "👑 CEO DASHBOARD",
            "🤖 GSIA AI CHAT",
            "⚙️ SETTINGS"
          ].map((tool, i) => (
            <button key={i} className="bg-zinc-900 border border-cyan-400 rounded-xl p-2 text-[9px] hover:bg-cyan-900 text-left">
              {tool}
            </button>
          ))}
        </div>

        {/* CENTER - 100 PARTICIPANTS HOLO GRID */}
        <div className="col-span-7">
          {/* VIDEO PROJECTOR WINDOW */}
          <div className="border-2 border-cyan-400 rounded-2xl bg-zinc-900 p-2 mb-2">
            <div className="flex justify-between text-[10px] mb-1">
              <span className="text-cyan-400">📽️ BEAM: Watch Movies in Cloud + Multi Streaming</span>
              <span className="text-lime-400">● REC</span>
            </div>
            <div className="bg-black rounded-xl h-40 flex items-center justify-center border border-zinc-700 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20"></div>
              <p className="text-cyan-400 text-xs z-10">☁️ CLOUD MOVIE STREAMING + ADVERTS VIDEO</p>
              <div className="absolute bottom-1 left-1 right-1 flex gap-1">
                <div className="h-1 bg-red-600 flex-1 rounded"></div>
                <div className="h-1 bg-yellow-400 flex-1 rounded"></div>
                <div className="h-1 bg-lime-400 flex-1 rounded"></div>
              </div>
            </div>
          </div>

          {/* 100 PARTICIPANTS GRID */}
          <div className="border-2 border-yellow-400 rounded-2xl bg-zinc-900 p-2">
            <div className="flex justify-between text-[10px] mb-2">
              <span className="text-yellow-400 font-bold">👥 {participants} PARTICIPANTS - HOLO AVATARS</span>
              <span className="text-white">Speak EN → Hear Local</span>
            </div>
            <div className="grid grid-cols-10 gap-1 max-h-64 overflow-y-auto">
              {Array.from({ length: 100 }).map((_, i) => {
                const lang = langs[i % langs.length];
                return (
                  <div key={i} className={`rounded-lg p-1 text-center border ${i < participants? 'bg-zinc-800 border-lime-400/50' : 'bg-zinc-900 border-zinc-700 opacity-30'} `}>
                    <div className="text-[14px]">🧑‍🚀</div>
                    <div className="text-[7px]">{lang.flag}</div>
                    <div className="text-[6px] text-cyan-400">{lang.code}</div>
                    {i < 3 && <div className="w-1 h-1 bg-green-400 rounded-full animate-ping mx-auto"></div>}
                  </div>
                );
              })}
            </div>
          </div>

          {/* TRANSLATION SYSTEM */}
          <div className="mt-2 border border-lime-400 rounded-xl p-2 bg-zinc-900">
            <div className="text-[10px] text-lime-400 font-bold mb-1">🔊 VOICE TRANSLATION 10 LANGS - Interpreter System</div>
            <div className="flex gap-1 flex-wrap">
              {langs.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setSpeakingLang(l.code)}
                  className={`px-2 py-1 rounded-full text-[8px] border ${speakingLang === l.code? 'bg-lime-400 text-black border-lime-400' : 'bg-black text-white border-zinc-600'}`}
                >
                  {l.flag} {l.code}
                </button>
              ))}
            </div>
            <div className="mt-2 text-[9px] bg-black p-2 rounded">
              <span className="text-yellow-400">SPEAKING:</span> English → <span className="text-cyan-400">HEARING:</span> {langs.find(l=>l.code===speakingLang)?.name} {langs.find(l=>l.code===speakingLang)?.flag}
            </div>
          </div>
        </div>

        {/* RIGHT WINDOWS */}
        <div className="col-span-3 flex flex-col gap-2">
          {/* GSIA AI CHAT */}
          <div className="border border-cyan-400 rounded-xl bg-zinc-900 p-2 h-32">
            <div className="text-[10px] text-cyan-400 font-bold">🔍 GSIA (AI) CHAT</div>
            <div className="bg-black rounded p-1 mt-1 h-20 overflow-y-auto text-[8px] space-y-1">
              <div className="text-lime-400">GSIA: Welcome to Holo 50-100!</div>
              <div className="text-white">User 23: Hello from Lagos 🇳🇬</div>
              <div className="text-yellow-400">User 45: Bonjour from Paris 🇫🇷</div>
              <div className="text-cyan-400">System: Translating...</div>
            </div>
            <input placeholder="Type..." className="w-full mt-1 bg-black border border-zinc-700 rounded text-[8px] p-1" />
          </div>

          {/* CEO DASHBOARD LINK */}
          <div className="border border-yellow-400 rounded-xl bg-zinc-900 p-2">
            <div className="text-[9px] text-yellow-400 font-bold">👑 CEO DASHBOARD - Upload Videos</div>
            <button className="w-full mt-1 bg-yellow-400 text-black rounded py-1 text-[9px] font-bold">UPLOAD ADVERT VIDEO</button>
            <button className="w-full mt-1 bg-zinc-800 text-white rounded py-1 text-[9px] border border-zinc-600">UPLOAD NEWS FEED</button>
            <button className="w-full mt-1 bg-zinc-800 text-white rounded py-1 text-[9px] border border-zinc-600">UPLOAD MOVIE CLOUD</button>
          </div>

          {/* ADVERTS + NEWS */}
          <div className="border border-purple-400 rounded-xl bg-zinc-900 p-2 h-28">
            <div className="text-[9px] text-purple-400 font-bold">📢 ADVERTS + 📰 NEWS FEED</div>
            <div className="bg-black rounded mt-1 p-1 text-[7px] h-20">
              <div className="text-yellow-400">🔥 AD: STORE $10K + CEO $5K</div>
              <div className="text-white mt-1">📰 Breaking: Geapple Holo World...</div>
              <div className="text-cyan-400 mt-1">🎬 Now Streaming: To The Glory Of God</div>
            </div>
          </div>

          {/* SETTINGS */}
          <div className="border border-zinc-600 rounded-xl bg-zinc-900 p-2">
            <div className="text-[8px]">⚙️ MENU TOOLS</div>
            <div className="grid grid-cols-2 gap-1 mt-1">
              <button className="bg-black border rounded text-[7px] py-1">🔊 Volume</button>
              <button className="bg-black border rounded text-[7px] py-1">🎤 Mic</button>
              <button className="bg-black border rounded text-[7px] py-1">📹 Camera</button>
              <button className="bg-red-900 border border-red-500 rounded text-[7px] py-1">🔴 Leave</button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-3 text-center">
        <a href="/" className="bg-lime-400 text-black px-6 py-2 rounded-full text-xs font-bold">← BACK TO HUB 35</a>
      </div>
    </div>
  );
}