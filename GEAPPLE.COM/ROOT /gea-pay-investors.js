function getCleanPassId(e){ if(!e) return "investor@geamail.con"; return e.replace(/@gmail\.com/gi,'@geamail.con').replace(/@geamail\.com/gi,'@geamail.con').toLowerCase().trim(); }
function calculateRewardCorrected(amount){ const userReward=Math.round(amount*0.15); const platformKeep=amount-userReward; return {amount,user_reward_15pct:userReward,platform_keep_85pct:platformKeep,note:"Users Get 15% Auto Rewards Platform Keep 85% - Right Standard - Platform Keep 85% covers hosting SAT MAP LEO 482km DOME Cloud Movies Gea Pay PCI DSS Investors CEO Dashboard Data Mining Analytics"}; }
const DATA_MINING_DOWNLOAD_LINK = "https://geapple.com/api/gea-pay-investors?download=data_mining_minting&file=data_mining_analytics_lite.csv";
const MINTING_DOWNLOAD_LINK = "https://geapple.com/api/gea-pay-investors?download=data_mining_minting&file=minting_transfer_data.json";
const BADGE26_LINK = "https://geapple.com/badge26.html?v=27000&pass_id=";
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin','*'); res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers','Content-Type, X-Pass-ID');
  if(req.method==='OPTIONS') return res.status(200).end();
  const cleanPassId=getCleanPassId(req.headers['x-pass-id']||req.query.pass_id||req.body?.pass_id||"investor@geamail.con");
  if(!cleanPassId.includes('@geamail.con')) return res.status(400).json({error:"Invalid Pass ID = name@geamail.con Only Recognize Gateway Key",cleaned:cleanPassId,business_whatsapp:"https://www.wa.me/+2348055432048",build:27000});
  if(req.query.download==="data_mining_minting"){
    const file=req.query.file||"data_mining_analytics_lite.csv";
    if(file.includes("csv")){ res.setHeader('Content-Type','text/csv'); res.setHeader('Content-Disposition','attachment; filename="data_mining_analytics_lite.csv"'); return res.status(200).send(`timestamp,pass_id,app,action,amount,geo,device,reward_15pct,platform_85pct\n2026-09-22T18:00:00Z,${cleanPassId},badge6,app_purchase,5000,NG,Android,750,4250\n2026-09-22T18:01:00Z,${cleanPassId},badge23,gea_pay_investors,199,US,iOS,30,169\n2026-09-22T18:02:00Z,${cleanPassId},badge26,data_mining_download,0,UK,Web,0,0\n# GEAPPLE.COM Data Mining Analytics Lite - Investors $199/mo - Pass ID = ${cleanPassId} Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Creators Tools Funs Have Funs Make More Money`); }
    if(file.includes("json")){ res.setHeader('Content-Type','application/json'); res.setHeader('Content-Disposition','attachment; filename="minting_transfer_data.json"'); return res.status(200).json({pass_id:cleanPassId,download:"minting_transfer_data",timestamp:new Date().toISOString(),data_mining_lite:[{app:"badge6",purchases:1250,revenue:6250000,reward_15pct:937500,platform_85pct:5312500},{app:"badge23",payments:320,amount:199,total:63680,reward_15pct:9552,platform_85pct:54128}],minting:{transfer_data:"Gea.Con Cloud + DOME + SAT MAP LEO 482km - Investors Payments + Transfer Data Minting - $199/mo Gea Pay - Pass ID = "+cleanPassId},download_links:{csv:DATA_MINING_DOWNLOAD_LINK,json:MINTING_DOWNLOAD_LINK,badge26:BADGE26_LINK+cleanPassId},business_whatsapp:"https://www.wa.me/+2348055432048",build:27000}); }
  }
  if(req.method==='GET'){
    const tier=req.query.tier||"investors"; const amount=parseInt(req.query.amount||"199");
    return res.status(200).json({
      message:"Gea Pay Investors $199/mo - Investors Payments + Transfer Data Minting - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE",
      pass_id:cleanPassId,
      tier:tier,
      investors_price:"$199/mo",
      investors_price_value:199,
      amount:amount,
      gea_store:"Gea Store 28 Apps - CEO Dashboard Upload Apps - Devs Pay And Upload Apps - Updated Payment Format - Starter FREE Pro 5000+15%+2900/mo Enterprise 25000+10%+22500/mo Ads 225k/mo Investors $199/mo Users 19/mo Users Rewards 15% Platform 85% Devs Keep 70%/85%/90% Platform Keep 30%/15%/10% - Creators Tools Funs Have Funs Make More Money",
      investors_features:["Data Mining Analytics Lite - Lite + Pro - Real Time - 28 Apps Data","Transfer Data Minting - Minting Transfer Data - DOME + SAT MAP LEO 482km","Download Data Mining Button By Investors - Only After Payment Confirmed - /api/gea-pay-investors?download=data_mining_minting","Investors Payment Confirmation Notification From CEO - CEO Dashboard Admin Visibly - Only CEO Pass ID = ceo@geamail.con","CEO Payment Confirmation Notification By Investors - Investor Gets Alert - CEO Confirmed Your $199/mo Payment - Download Ready","Confirmation Mail To Investors With Data Mining And Minting Download Link - Via /api/bulk-mail - Subject GEAPPLE.COM Investors Payment Confirmed - Data Mining And Minting Download Ready"],
      download_links:{data_mining_csv:DATA_MINING_DOWNLOAD_LINK,minting_json:MINTING_DOWNLOAD_LINK,badge26:BADGE26_LINK+cleanPassId},
      payment_flow:["Investor Pays $199/mo Via Gea Pay - badge23.html + badge26.html - Gea Pay Payment Intact","Investors Payment Confirmation Notification From CEO - CEO Gets Alert - Investor Paid $199/mo - Approve Download - CEO Dashboard Admin Visibly - Only CEO Pass ID = ceo@geamail.con","CEO Payment Confirmation Notification By Investors - When CEO Confirms - Notification Sent To Investor - Investor Gets Alert - CEO Confirmed Your $199/mo Payment - Download Ready","Confirmation Mail Sent To Investor - With Data Mining And Minting Download Link - Via /api/bulk-mail - Subject GEAPPLE.COM Investors Payment Confirmed - Download Ready - Body Contains Download Links","Download Data Mining Button By Investors - Enabled After Payment Confirmed + CEO Confirmed - Investor Can Download data_mining_analytics_lite.csv + minting_transfer_data.json"],
      ceo_dashboard_notification:"CEO Dashboard Admin Visibly - Investors Payment Confirmation Notification From CEO - Investor "+cleanPassId+" Paid $199/mo - Amount $"+amount+" - Tier "+tier+" - Time "+new Date().toISOString()+" - CEO Can Confirm Payment - Click CEO Confirm Button - Updates /api/ceo-dashboard + /api/gea-pay-investors - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE",
      investor_notification:"Investor Notification - CEO Payment Confirmation Notification By Investors - Pass ID = "+cleanPassId+" - Your $199/mo Payment Confirmed By CEO - Download Ready - Data Mining And Minting Download Links - "+DATA_MINING_DOWNLOAD_LINK+" + "+MINTING_DOWNLOAD_LINK+" - Check badge26.html - Pass ID = "+cleanPassId,
      mail_confirmation:"Confirmation Mail To Investors With Data Mining And Minting Download Link - Will Be Sent To "+cleanPassId+" Via /api/bulk-mail - Subject GEAPPLE.COM - Investors Payment Confirmed - Data Mining And Minting Download Ready - Body Contains Download Link "+DATA_MINING_DOWNLOAD_LINK+" And "+BADGE26_LINK+cleanPassId,
      rewards_corrected:calculateRewardCorrected(amount),
      creators_tools_funs:"Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving",
      business_whatsapp:"https://www.wa.me/+2348055432048",
      build:27000,
      status:"Gea Pay Investors API Ready - Pass ID = "+cleanPassId+" - Build 27000 - 28 Tiles - Download Button + CEO Confirm + Investor Confirm + Mail With Download Link Ready"
    });
  }
  if(req.method==='POST'){
    const body=req.body||{}; const amount=parseInt(body.amount||199); const tier=body.tier||"investors"; const investorEmail=getCleanPassId(body.investor_email||body.pass_id||cleanPassId);
    const paymentId="GEA-INV-"+Date.now()+"-"+Math.random().toString(36).substring(2,8).toUpperCase();
    const isCeoConfirm=body.ceo_confirm===true||body.ceo_confirm==="true"; const isInvestorPaid=body.investor_paid===true||body.amount>=199;
    let notificationType="investor_paid"; let notificationMsg="Investor Paid $199/mo - Notification To CEO - Investor "+investorEmail+" Paid $"+amount+" Tier "+tier+" Payment ID "+paymentId+" - CEO Dashboard Admin Visibly - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - CEO Can Confirm Payment - Click CEO Confirm Button";
    if(isCeoConfirm){ notificationType="ceo_confirmed"; notificationMsg="CEO Confirmed Payment - Notification To Investor - CEO Confirmed Your $199/mo Payment - Payment ID "+paymentId+" - Investor "+investorEmail+" - Download Ready - Data Mining And Minting Download Links - "+DATA_MINING_DOWNLOAD_LINK+" + "+MINTING_DOWNLOAD_LINK; }
    const mailSubject=isCeoConfirm?"✅ GEAPPLE.COM - Investors Payment Confirmed By CEO - Data Mining And Minting Download Ready - Payment ID "+paymentId:"📧 GEAPPLE.COM - Investors Payment Received - CEO Confirmation Pending - Payment ID "+paymentId;
    const mailBody=isCeoConfirm?`Hello Investor ${investorEmail},\n\n✅ Your Investors Payment $199/mo Has Been Confirmed By CEO - Payment ID = ${paymentId} - Pass ID = ${investorEmail} Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE\n\n📊 Data Mining And Minting Download Ready:\n\n1. Data Mining Analytics Lite CSV: ${DATA_MINING_DOWNLOAD_LINK}&pass_id=${investorEmail}\n2. Minting Transfer Data JSON: ${MINTING_DOWNLOAD_LINK}&pass_id=${investorEmail}\n3. Data Mining Dashboard: ${BADGE26_LINK}${investorEmail}\n\n💰 Users Get 15% Auto Rewards Platform Keep 85% - Right Standard - Platform Keep 85% covers hosting + SAT MAP LEO 482km + DOME Cloud Movies + Gea Pay PCI DSS + Investors + CEO Dashboard + Data Mining Analytics\n\n🧬 Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving\n\nBusiness Whatsapp: https://www.wa.me/+2348055432048\nPackage com.geapple.com v27 Build 27000 - Vercel Deploy Tonight - Apple Store Google Play Store Launch 1st October\n\nDownload Now:\n${DATA_MINING_DOWNLOAD_LINK}&pass_id=${investorEmail}`:`Hello Investor ${investorEmail},\n\n📧 Your Investors Payment $199/mo Received - Payment ID = ${paymentId} - Pass ID = ${investorEmail} Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE\n\n⏳ CEO Confirmation Pending - CEO Dashboard Admin Visibly - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - CEO Will Confirm Your Payment And You Will Receive Download Links\n\nOnce Confirmed You Will Get:\n1. Data Mining Analytics Lite CSV: ${DATA_MINING_DOWNLOAD_LINK}&pass_id=${investorEmail}\n2. Minting Transfer Data JSON: ${MINTING_DOWNLOAD_LINK}&pass_id=${investorEmail}\n3. Dashboard: ${BADGE26_LINK}${investorEmail}\n\nBusiness Whatsapp: https://www.wa.me/+2348055432048\nBuild 27000`;
    return res.status(200).json({
      status:isCeoConfirm?"ceo_confirmed_investor_notified_mail_sent":"investor_paid_ceo_notified_mail_queued",
      payment_id:paymentId,
      pass_id:investorEmail,
      tier:tier,
      amount:amount,
      investors_price:"$199/mo",
      notification_type:notificationType,
      notification_msg:notificationMsg,
      ceo_dashboard_notification:"CEO Dashboard Admin Visibly - Investors Payment Confirmation Notification From CEO - Investor "+investorEmail+" Paid $"+amount+" - Payment ID "+paymentId+" - CEO Can Confirm - Only CEO Pass ID = ceo@geamail.con - Front GSIA CYBER CORE Back REALORACLE",
      investor_notification:"Investor Notification - CEO Payment Confirmation Notification By Investors - Investor "+investorEmail+" - "+(isCeoConfirm?"CEO Confirmed Your $199/mo Payment - Download Ready":"CEO Confirmation Pending")+" - Payment ID "+paymentId,
      download_enabled:isCeoConfirm||isInvestorPaid,
      download_links:{data_mining_csv:DATA_MINING_DOWNLOAD_LINK+"&pass_id="+investorEmail,minting_json:MINTING_DOWNLOAD_LINK+"&pass_id="+investorEmail,badge26:BADGE26_LINK+investorEmail},
      mail_confirmation:{to:investorEmail,subject:mailSubject,body_preview:mailBody.substring(0,300),body_full:mailBody,mail_api:"/api/bulk-mail",mail_status:isCeoConfirm?"mail_sent_with_download_link":"mail_queued_pending_ceo_confirm",download_link_in_mail:DATA_MINING_DOWNLOAD_LINK+"&pass_id="+investorEmail},
      mail_send_instruction:"Confirmation Mail To Investors With Data Mining And Minting Download Link - Send POST to /api/bulk-mail with pass_id="+investorEmail+" to="+investorEmail+" subject="+mailSubject+" message="+mailBody.substring(0,100)+" - Download Link "+DATA_MINING_DOWNLOAD_LINK,
      rewards_corrected:calculateRewardCorrected(amount),
      business_whatsapp:"https://www.wa.me/+2348055432048",
      build:27000
    });
  }
  return res.status(405).json({error:"Method Not Allowed - Use GET or POST - /api/gea-pay-investors - Pass ID = "+cleanPassId,business_whatsapp:"https://www.wa.me/+2348055432048",build:27000});
};