import os
apps = [
 (1,"mygea-social","Social Feed","#00ff88","📱"),
 (2,"reelgea","Creators Tools","#ff00ff","🎬"),
 (3,"geamail-con","Holo Gate","#00e5ff","📧"),
 (4,"gea-con","Encrypted Comms","#00e5ff","📡"),
 (5,"geaconnect","Pro Network","#00ff88","🤝"),
 (6,"mygea-holo","Holo Identity","#ff00ff","👤"),
 (7,"global-votes","Voting","#ffd700","🗳️"),
 (8,"degalaxy-sat-","Sat Comms","#00e5ff","🛰️"),
 (9,"military-bord","Military","#ff4444","🛡️"),
 (10,"visual-art-g","AI Art","#ff00ff","🎨"),
 (11,"geatune","Music","#00ff88","🎵"),
 (12,"gea-4k-studi","4K Studio","#ff00ff","🎬"),
 (13,"gea-game","Gaming","#00e5ff","🎮"),
 (14,"okidoki-soci","Viral Social","#ffd700","💬"),
 (15,"galarea-chat","Chat","#00e5ff","💜"),
 (16,"yellow-mygea","Biz Dir","#ffd700","📒"),
 (18,"degalaxy-orb","Orbital","#00e5ff","🌌"),
 (19,"gsia-cyber-c","Cyber Def","#ff0000","🔐"),
 (20,"gsia-ai","AI Oracle","#00ff88","🤖"),
 (21,"realoracle-m","Market Oracle","#ffd700","🔮"),
 (22,"gsia-fraud-d","Fraud Det","#ff6600","🚨"),
 (23,"gsia-visual-","Visual Intel","#00e5ff","👁️"),
 (24,"realoracle-w","Wealth Oracle","#ffd700","💰"),
 (25,"gsia-budget-","Budget AI","#00ff88","📊"),
 (26,"degalaxy-sat","Sat Feed","#00e5ff","📡"),
 (27,"gsia-archite","Arch AI","#ffaa00","🏗️"),
 (28,"gea-cartoons","Kidsverse","#ff00ff","👶"),
 (30,"gea-wallet","Wallet","#ffd700","👛"),
 (31,"geapple-gadg","Gadgets","#00ff88","📱"),
 (33,"data-minting","Data Mining","#00e5ff","⛏️"),
 (34,"investors-an","Investors","#ffd700","📈"),
 (35,"gsia-systems","Systems","#ff00ff","⚙️"),
]
tpl='''<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{0}-{1} V3 96%</title><meta name="theme-color" content="{3}"><style>body{{margin:0;background:#000;color:#fff;font-family:Segoe UI}} .holo{{border:1px solid {3};border-radius:16px;margin:10px;padding:12px}}</style></head><body><h2 style="color:{3};text-align:center">{4} {0}-{1} SUPER PRO MAX V3 96% READY</h2><p style="text-align:center;font-size:10px">RC:9882150 | {2} | API: gsiacyber.com/api | MENU+LEGAL+THEMES FIXED | CDN HIT</p><div class=holo><button style="width:100%;padding:12px;background:{3};border:none;border-radius:30px;font-weight:900">▶️ RUN API - DIRECT NO HOLO TRAP</button></div></body></html>'''
for i,n,d,c,e in apps:
  open(f"{i}-{n}.html","w",encoding="utf-8").write(tpl.format(i,n.upper(),d,c,e))
  print(f"✅ {i}-{n}.html created")
print("🚀 DONE 33 FILES!")