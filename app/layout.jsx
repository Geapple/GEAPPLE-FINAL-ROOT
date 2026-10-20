import "./globals.css";
export const metadata={
title:"GEA Store - Apps 1-9 Upgraded - 5G Cameras + Holo + Sat+Bio + Voice Translation + 25 Holo + Bulk Mail + Upload + Share + Votes + Military - API Connected - RC:9882150",
description:"GEA Store - Apps 1-9 Only - Next 10-18 Coming - 1-MYGEA-SOCIAL API Free Calls Dial Numbers ID Sat+Biometric + Voice Translation + 25 Holo + 5G Camera + Multi Streaming Live + 2-REELGEA Chat Forward Retweet Share + Skits Tools + 3-GEAMAIL Bulk Mail Upload Files Videos Share + 7-VOTES 100 Countries Electoral Commissions + Biometric + 8-SAT 5G Video Cameras Area Captured Snap Shots Share UI Platforms + 9-MILITARY 5G Video Cameras Sensor + Share - Apps 1-9 ONLY",
};
export default function RootLayout({children}){
return(
<html lang="en">
<body className="gea-root">
<div className="gea-topbar">
<div className="gea-topbar-left">
<span className="gea-logo">🌍 GEA STORE - RC:9882150 - APPS 1-9 UPGRADED ✅</span>
<span className="gea-status">🟢 Apps 1-9 Only - Next 10-18 Coming - API Connected OK - 5G Cameras + Holo + Sat+Bio + Voice Translation + 25 Holo + Bulk Mail + Upload + Share + Votes + Military - Working - Fit Screen 〰️</span>
</div>
<div className="gea-topbar-right">
<span className="gea-badge gea-badge-cam">📸 5G Cam</span>
<span className="gea-badge gea-badge-holo">👁️ Holo</span>
<span className="gea-badge gea-badge-sat">🛰️ Sat+Bio</span>
<span className="gea-badge gea-badge-voice">🗣️ Voice</span>
<span className="gea-badge">Apps 1-9 ✅</span>
</div>
</div>
<div className="gea-nav">
<a href="/apps/1-mygea" className="gea-nav-btn">1-MYGEA 🌍</a>
<a href="/apps/2-reel" className="gea-nav-btn">2-REEL 🎬</a>
<a href="/apps/3-mail" className="gea-nav-btn">3-MAIL 📧</a>
<a href="/apps/4-geo" className="gea-nav-btn">4-GEO 🌐</a>
<a href="/apps/5-geaconnect" className="gea-nav-btn">5-CONNECT 💬</a>
<a href="/apps/6-store" className="gea-nav-btn">6-STORE 🛒</a>
<a href="/apps/7-votes" className="gea-nav-btn">7-VOTES 🗳️</a>
<a href="/apps/8-sat" className="gea-nav-btn">8-SAT 🛰️</a>
<a href="/apps/9-mil" className="gea-nav-btn">9-MIL 🎖️</a>
</div>
<main className="gea-main">{children}</main>
<div className="gea-bottombar">
<div className="gea-bottombar-text">Apps 1-9 Upgraded Done ✅ | Next: Apps 10-18 Coming Soon | API: /api/social/post + /api/reel/upload + /api/geamail/send/bulk + /api/geamail/upload + /api/votes + /api/sat + /api/military + /api/sat/call/free + /api/voice/translate + /api/holo/25 + /api/camera/5g + /api/share/* + All Apps 1-9 Connected - RC:9882150 - Fit Screen 〰️</div>
</div>
</body>
</html>
);
}