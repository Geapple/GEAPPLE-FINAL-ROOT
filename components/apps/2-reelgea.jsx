"use client";
import {useState} from "react";
export default function App2({apiCall,cameraOn,holoOn}){
const [likeOn,setLikeOn]=useState(false);
const [likes,setLikes]=useState(14000);
const [chatOn,setChatOn]=useState(false);
const [selectedTool,setSelectedTool]=useState(null);
const [skitMode,setSkitMode]=useState(false);

const addTool=(tool)=>{
setSelectedTool({id:Date.now(),tool:tool,time:new Date().toLocaleTimeString()});
apiCall("2-reel","tool-"+tool);
};

const shareTo=(platform)=>{
apiCall("2-reel","share-"+platform+"-reel");
};

return(
<div style={{background:"#000",height:420,position:"relative",overflow:"hidden"}}>
<div style={{height:"100%",background:cameraOn?"#001100":"#111",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:10}}>
<div style={{position:"absolute",top:8,left:8,right:70,display:"flex",justifyContent:"space-between",alignItems:"center"}}>
<div style={{fontSize:10,fontWeight:"bold",color:"#fff",background:"#000",padding:4,borderRadius:6}}>🎬 2-REELGEA - Vertical Swipe - 4K Editor - Skits Making Tools - API /reel/upload - Functional</div>
<div style={{display:"flex",gap:4}}>
<button onClick={()=>{setSkitMode(!skitMode); apiCall("2-reel","skits-"+(skitMode?"off":"on"));}} style={{padding:4,background:skitMode?"#f0f":"#333",color:"#fff",border:"none",borderRadius:4,fontSize:7,fontWeight:"bold"}}>🎭 Skits {skitMode?"ON 🟢":"OFF"}</button>
</div>
</div>

<div style={{fontSize:50,marginTop:30}}>🎬</div>
<div style={{fontSize:11,marginTop:6,color:"#fff",textAlign:"center",fontWeight:"bold"}}>2-REELGEA - Vertical Swipe - 4K Editor - Skits Making Tools Active - API /reel/upload - Functional Appropriately - {cameraOn?"5G Camera ON 📷":"5G OFF"} - {holoOn?"Holo ON 👁️":"Holo OFF"}</div>

<div style={{marginTop:10,background:"#000",padding:8,borderRadius:10,border:"1px solid #f0f",width:"90%"}}>
<div style={{fontSize:9,fontWeight:"bold",color:"#f0f",textAlign:"center"}}>🎭 Skits Making Tools Icons Active - API Connected Links - All Tools Functional</div>
<div style={{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:4}}>
<button onClick={()=>addTool("Camera 5G")} style={{padding:6,background:cameraOn?"#0f0":"#222",color:cameraOn?"#000":"#0ff",border:"1px solid #0f0",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>📷</span>5G Cam API /camera/5g {cameraOn?"ON":"OFF"}</button>
<button onClick={()=>addTool("Holo Projector")} style={{padding:6,background:holoOn?"#f0f":"#222",color:holoOn?"#fff":"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>👁️</span>Holo API /holo/projector {holoOn?"ON":"OFF"}</button>
<button onClick={()=>addTool("Effects")} style={{padding:6,background:"#111",color:"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>✨</span>Effects API /reel/effects - Active</button>
<button onClick={()=>addTool("Music")} style={{padding:6,background:"#111",color:"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>🎵</span>Music API /reel/music - Active</button>
<button onClick={()=>addTool("Upload")} style={{padding:6,background:"#0f0",color:"#000",border:"none",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>⬆️</span>Upload API /reel/upload - 4K</button>
<button onClick={()=>addTool("Trim Cut")} style={{padding:6,background:"#222",color:"#fff",border:"1px solid #fff",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>✂️</span>Trim Cut API /reel/trim - Active</button>
<button onClick={()=>addTool("Text Overlay")} style={{padding:6,background:"#222",color:"gold",border:"1px solid gold",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>📝</span>Text API /reel/text - Active</button>
<button onClick={()=>addTool("Filter")} style={{padding:6,background:"#222",color:"#0f0",border:"1px solid #0f0",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>🎨</span>Filter API /reel/filter - Active</button>
<button onClick={()=>addTool("Speed")} style={{padding:6,background:"#222",color:"#0ff",border:"1px solid #0ff",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>⚡</span>Speed API /reel/speed - Active</button>
<button onClick={()=>addTool("Transition")} style={{padding:6,background:"#222",color:"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>🔄</span>Transition API /reel/transition</button>
<button onClick={()=>addTool("Stickers")} style={{padding:6,background:"#222",color:"gold",border:"1px solid gold",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>😍</span>Stickers API /reel/stickers</button>
<button onClick={()=>addTool("AI Script")} style={{padding:6,background:skitMode?"#f0f":"#222",color:skitMode?"#fff":"#f0f",border:"1px solid #f0f",borderRadius:8,fontSize:7,fontWeight:"bold",display:"flex",flexDirection:"column",alignItems:"center"}}><span style={{fontSize:14}}>🤖</span>AI Skits API /reel/ai/skits {skitMode?"ON":"OFF"}</button>
</div>
{selectedTool&&<div style={{marginTop:6,background:"#111",padding:4,borderRadius:6,textAlign:"center",fontSize:7,color:"#0f0"}}>Selected Tool: {selectedTool.tool} - {selectedTool.time} - Active - API Connected - Working - Fit Screen 〰️</div>}
</div>

<div style={{marginTop:10,background:"#000",padding:6,borderRadius:8,border:"1px solid #0ff",width:"90%"}}>
<div style={{fontSize:8,fontWeight:"bold",color:"#0ff",textAlign:"center"}}>🔗 Share Buttons to UI Platforms Icons Links Active API Connected</div>
<div style={{marginTop:6,display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr",gap:4}}>
<button onClick={()=>shareTo("mygea")} style={{padding:4,background:"#0f0",color:"#000",border:"none",borderRadius:6,fontSize:6,fontWeight:"bold"}}>🌍 MyGea API /share/mygea/reel</button>
<button onClick={()=>shareTo("geamail")} style={{padding:4,background:"#fff",color:"#000",border:"none",borderRadius:6,fontSize:6,fontWeight:"bold"}}>📧 GeaMail API /share/geamail/reel</button>
<button onClick={()=>shareTo("geaconnect")} style={{padding:4,background:"#075e54",color:"#fff",border:"none",borderRadius:6,fontSize:6,fontWeight:"bold"}}>💬 GeaConnect API /share/geaconnect/reel</button>
<button onClick={()=>shareTo("holo")} style={{padding:4,background:"#111",color:"#f0f",border:"1px solid #f0f",borderRadius:6,fontSize:6,fontWeight:"bold"}}>👁️ Holo API /share/holo/reel</button>
<button onClick={()=>shareTo("youtube")} style={{padding:4,background:"#ff0000",color:"#fff",border:"none",borderRadius:6,fontSize:6,fontWeight:"bold"}}>▶️ YouTube API /share/youtube/reel</button>
<button onClick={()=>shareTo("facebook")} style={{padding:4,background:"#1877f2",color:"#fff",border:"none",borderRadius:6,fontSize:6,fontWeight:"bold"}}>📘 Facebook API /share/facebook/reel</button>
<button onClick={()=>shareTo("tiktok")} style={{padding:4,background:"#000",color:"#fff",border:"1px solid #fff",borderRadius:6,fontSize:6,fontWeight:"bold"}}>🎵 TikTok API /share/tiktok/reel</button>
<button onClick={()=>shareTo("instagram")} style={{padding:4,background:"#e1306c",color:"#fff",border:"none",borderRadius:6,fontSize:6,fontWeight:"bold"}}>📸 Instagram API /share/instagram/reel</button>
</div>
</div>
</div>

<div style={{position:"absolute",right:6,top:40,bottom:20,display:"flex",flexDirection:"column",gap:10,alignItems:"center",width:50}}>
<div onClick={()=>{setLikeOn(!likeOn); setLikes(likeOn?likes-1:likes+1); apiCall("2-reel","like");}} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",background:likeOn?"#f00":"#222",padding:6,borderRadius:12,border:likeOn?"2px solid #f00":"1px solid #333"}}>
<span style={{fontSize:20}}>{likeOn?"❤️":"🤍"}</span><span style={{fontSize:8,color:"#fff",fontWeight:"bold",marginTop:2}}>{(likes/1000).toFixed(1)}K</span><span style={{fontSize:6,color:"#888"}}>Like API /reel/like - {likeOn?"Liked":"Like"}</span>
</div>

<div onClick={()=>{setChatOn(!chatOn); apiCall("2-reel","chat");}} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",background:chatOn?"#0ff":"#222",padding:6,borderRadius:12,border:chatOn?"2px solid #0ff":"1px solid #333"}}>
<span style={{fontSize:20}}>💬</span><span style={{fontSize:8,color:"#fff",fontWeight:"bold",marginTop:2}}>94</span><span style={{fontSize:6,color:"#888"}}>Chat API /reel/chat - {chatOn?"ON":"OFF"} Functional</span>
</div>

<div onClick={()=>apiCall("2-reel","forward")} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",background:"#222",padding:6,borderRadius:12,border:"1px solid #0f0"}}>
<span style={{fontSize:20}}>💕</span><span style={{fontSize:8,color:"#fff",fontWeight:"bold",marginTop:2}}>Forward</span><span style={{fontSize:6,color:"#888"}}>Forward API /reel/forward - Active Link 🔗</span>
</div>

<div onClick={()=>apiCall("2-reel","retweet")} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",background:"#222",padding:6,borderRadius:12,border:"1px solid #0ff"}}>
<span style={{fontSize:20}}>🔄</span><span style={{fontSize:8,color:"#fff",fontWeight:"bold",marginTop:2}}>217</span><span style={{fontSize:6,color:"#888"}}>Retweet API /reel/retweet - Active</span>
</div>

<div onClick={()=>apiCall("2-reel","share")} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",background:"#222",padding:6,borderRadius:12,border:"1px solid gold"}}>
<span style={{fontSize:20}}>↗️</span><span style={{fontSize:8,color:"#fff",fontWeight:"bold",marginTop:2}}>Share</span><span style={{fontSize:6,color:"#888"}}>Share API /reel/share - Active Link 🔗</span>
</div>

<div onClick={()=>apiCall("2-reel","bookmark")} style={{display:"flex",flexDirection:"column",alignItems:"center",cursor:"pointer",background:"#222",padding:6,borderRadius:12,border:"1px solid #fff"}}>
<span style={{fontSize:20}}>🔖</span><span style={{fontSize:8,color:"#fff",fontWeight:"bold",marginTop:2}}>757</span><span style={{fontSize:6,color:"#888"}}>Bookmark API /reel/bookmark - Active</span>
</div>
</div>

<div style={{position:"absolute",left:8,bottom:8,right:70,background:"rgba(0,0,0,0.8)",padding:6,borderRadius:8}}>
<div style={{fontSize:9,color:"#fff",fontWeight:"bold"}}>@gea_user - Skits Making - 4K - Functional Appropriately - 5G {cameraOn?"ON 📷":"OFF 📴"} - Holo {holoOn?"ON 👁️":"OFF"}</div>
<div style={{fontSize:7,color:"#888",marginTop:2}}>Tools: Camera 5G + Holo + Effects + Music + Upload + Trim + Text + Filter + Speed + Transition + Stickers + AI Skits - All Active API Connected - Gea Store Gea Pay - RC:9882150</div>
</div>
</div>
);
}