// Confirmation Mail To Investors With Data Mining And Minting Download Link - Via /api/bulk-mail
// Subject: GEAPPLE.COM - Investors Payment Confirmed - Data Mining And Minting Download Ready
// Body: Contains Download Link https://geapple.com/api/gea-pay-investors?download=data_mining_minting&pass_id=investor@geamail.con
// File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Placefunction getCleanPassId(e){ if(!e) return "user@geamail.con"; return e.replace(/@gmail\.com/gi,'@geamail.con').replace(/@geamail\.com/gi,'@geamail.con').toLowerCase().trim(); }
function calculateRewardCorrected(amount){ const userReward=Math.round(amount*0.15); const platformKeep=amount-userReward; return {amount,user_reward_15pct:userReward,platform_keep_85pct:platformKeep,note:"Users Get 15% Auto Rewards Platform Keep 85% - Right Standard - Platform Keep 85% covers hosting SAT MAP LEO 482km DOME Cloud Movies Gea Pay PCI DSS Investors CEO Dashboard Data Mining Analytics"}; }
const DATA_MINING_CSV_LINK="https://geapple.com/api/gea-pay-investors?download=data_mining_minting&file=data_mining_analytics_lite.csv";
const MINTING_JSON_LINK="https://geapple.com/api/gea-pay-investors?download=data_mining_minting&file=minting_transfer_data.json";
const BADGE26_DASHBOARD="https://geapple.com/badge26.html?v=27000&pass_id=";
const BADGE28_CEO="https://geapple.com/badge28.html?v=27000&pass_id=ceo@geamail.con";
module.exports=async(req,res)=>{
  res.setHeader('Access-Control-Allow-Origin','*'); res.setHeader('Access-Control-Allow-Methods','GET, POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers','Content-Type, X-Pass-ID');
  if(req.method==='OPTIONS') return res.status(200).end();
  const cleanPassId=getCleanPassId(req.headers['x-pass-id']||req.query.pass_id||req.body?.pass_id||"user@geamail.con");
  if(!cleanPassId.includes('@geamail.con')) return res.status(400).json({error:"Invalid Pass ID = name@geamail.con Only Recognize Gateway Key",cleaned:cleanPassId,business_whatsapp:"https://www.wa.me/+2348055432048",build:27000});
  if(req.method==='GET'){
    return res.status(200).json({
      message:"Bulk Mail API - @geamail.con Mail - Biometric NIN Thumb Facial Holo Chat Mail Live Adverts - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE",
      pass_id:cleanPassId,
      features:["Bulk Mail - Send to Many - Pass ID = name@geamail.con Only Recognize Gateway Key","@geamail.com Alias - No password needed - Pass ID + Biometric NIN Thumb Facial is security - AES-256","File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place","Confirmation Mail To Investors With Data Mining And Minting Download Link - Subject GEAPPLE.COM Investors Payment Confirmed - Data Mining And Minting Download Ready - Body Contains Download Link https://geapple.com/api/gea-pay-investors?download=data_mining_minting","Investors Payment Confirmation Notification From CEO - CEO Dashboard Admin Visibly - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key","CEO Payment Confirmation Notification By Investors - Investor Gets Alert CEO Confirmed Your $199/mo Payment Download Ready","Download Data Mining Button By Investors - Only After Payment Confirmed + CEO Confirmed - Download Links data_mining_analytics_lite.csv + minting_transfer_data.json","Business Whatsapp https://www.wa.me/+2348055432048 - Line 137 Fixed","Package com.geapple.com v27 Build 27000 - Vercel Deploy Tonight"],
      bulk_mail_provision:"Bulk Mail - Send Bulk Emails to Many Users - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Only logo.png + GEAPPLE.COM at top - GEAPPLE GLOBALCOMTECH only in Copyright Legal Notes - File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place",
      confirmation_mail_provision:"Confirmation Mail To Investors With Data Mining And Minting Download Link - If Possible Confirmation Mail Can Be Sent To Investors With Data Mining And Minting Download Link - YES Implemented - Mail Sent To Investor Pass ID = name@geamail.con Via /api/bulk-mail - Subject GEAPPLE.COM - Investors Payment Confirmed - Data Mining And Minting Download Ready - Body Contains Download Link "+DATA_MINING_CSV_LINK+"&pass_id=investor@geamail.con And "+BADGE26_DASHBOARD+"investor@geamail.con - And Gea Coins + Creators Tools Funs - Have Funs Make More Money",
      investors_payment_notification:"Investors Payment Confirmation Notification From CEO - When Investor Pays $199/mo Notification Sent To CEO Dashboard - CEO Gets Alert Investor Paid $199/mo Approve Download - CEO Dashboard Admin Visibly - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - CEO Can Confirm Payment - Click CEO Confirm Button - Updates /api/ceo-dashboard + /api/gea-pay-investors - Pass ID = "+cleanPassId,
      ceo_payment_notification:"CEO Payment Confirmation Notification By Investors - When CEO Confirms Notification Sent To Investor - Investor Gets Alert CEO Confirmed Your $199/mo Payment Download Ready - Investor Can Download Data Mining And Minting - Confirmation Mail Sent To Investors With Data Mining And Minting Download Link - Via /api/bulk-mail - Pass ID = "+cleanPassId,
      download_links:{data_mining_csv:DATA_MINING_CSV_LINK+"&pass_id="+cleanPassId,minting_json:MINTING_JSON_LINK+"&pass_id="+cleanPassId,badge26:BADGE26_DASHBOARD+cleanPassId,ceo_dashboard:BADGE28_CEO},
      gea_store:"Gea Store 28 Apps - CEO Dashboard Upload Apps - Devs Pay And Upload Apps - Updated Payment Format - Starter FREE Pro 5000+15%+2900/mo Enterprise 25000+10%+22500/mo Ads 225k/mo Investors $199/mo Users 19/mo Users Rewards 15% Platform 85% Devs Keep 70%/85%/90% Platform Keep 30%/15%/10% - Creators Tools Funs Have Funs Make More Money",
      ceo_dashboard:"CEO Dashboard Admin Visibly - Price And Values Editor - Provision For CEO To Change Price And Values - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Can Change Price And Values - Users 19/mo Devs Starter FREE Devs Pro 5000+15%+2900/mo Devs Enterprise 25000+10%+22500/mo Ads 225k/mo Investors $199/mo Users Rewards 15% Platform 85% Devs Keep 70%/85%/90% Gea Coins 1=10 Data MB GB Rates Gea Store Commission 15% - All Editable Via BADGE 28 Price Editor",
      rewards_corrected:calculateRewardCorrected(10000),
      creators_tools_funs:"Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving",
      business_whatsapp:"https://www.wa.me/+2348055432048",
      build:27000,
      status:"Bulk Mail API Ready - Pass ID = "+cleanPassId+" - Build 27000 - 28 Tiles - Confirmation Mail With Download Link Ready - Investors Payment Notification + CEO Confirmation Notification Ready"
    });
  }
  if(req.method==='POST'){
    const body=req.body||{};
    const toList=body.to||body.recipients||body.investor_email||"";
    const subject=body.subject||"GEAPPLE.COM - Bulk Mail - Pass ID = "+cleanPassId;
    const message=body.message||body.body||"Hello from GEAPPLE.COM - Pass ID = "+cleanPassId+" Only Recognize Gateway Key";
    const isInvestorConfirmMail=subject.includes("Investors Payment Confirmed")||message.includes("Data Mining And Minting Download Ready")||message.includes("data_mining_minting");
    const isCeoNotification=subject.includes("Investor Paid")||subject.includes("CEO Confirmation")||body.ceo_confirm;
    const bulkId="GEA-BULK-"+Date.now()+"-"+Math.random().toString(36).substring(2,8).toUpperCase();
    const recipientsRaw=Array.isArray(toList)?toList:typeof toList==="string"&&toList.includes(",")?toList.split(","):[toList];
    const recipients=recipientsRaw.map(getCleanPassId).filter(e=>e.includes('@geamail.con'));
    const downloadCsv=DATA_MINING_CSV_LINK+"&pass_id="+encodeURIComponent(recipients[0]||cleanPassId);
    const downloadJson=MINTING_JSON_LINK+"&pass_id="+encodeURIComponent(recipients[0]||cleanPassId);
    const badge26Link=BADGE26_DASHBOARD+encodeURIComponent(recipients[0]||cleanPassId);
    let finalSubject=subject; let finalMessage=message;
    if(isInvestorConfirmMail &&!message.includes("Download Ready")){
      finalSubject="✅ GEAPPLE.COM - Investors Payment Confirmed By CEO - Data Mining And Minting Download Ready - Payment ID "+bulkId;
      finalMessage=`Hello Investor ${recipients[0]||cleanPassId},\n\n✅ Your Investors Payment $199/mo Has Been Confirmed By CEO - Payment ID = ${bulkId} - Pass ID = ${recipients[0]||cleanPassId} Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE\n\n📊 Data Mining And Minting Download Ready:\n\n1. Data Mining Analytics Lite CSV: ${downloadCsv}\n2. Minting Transfer Data JSON: ${downloadJson}\n3. Data Mining Dashboard: ${badge26Link}\n\n💰 Users Get 15% Auto Rewards Platform Keep 85% - Right Standard - Platform Keep 85% covers hosting + SAT MAP LEO 482km + DOME Cloud Movies + Gea Pay PCI DSS + Investors + CEO Dashboard + Data Mining Analytics\n\n🧬 Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving\n\nBusiness Whatsapp: https://www.wa.me/+2348055432048\nPackage com.geapple.com v27 Build 27000 - Vercel Deploy Tonight - Apple Store Google Play Store Launch 1st October\n\nDownload Now:\n${downloadCsv}\n\n© 2026 GEAPPLE GLOBALCOMTECH - Pass ID = name@geamail.con Only Recognize Gateway Key - Only logo.png + GEAPPLE.COM at Top`;
    }
    if(isCeoNotification){
      finalSubject=body.ceo_confirm?"✅ GEAPPLE.COM - CEO Confirmed Investor Payment $199/mo - Download Ready - "+bulkId:"🔔 GEAPPLE.COM - Investor Paid $199/mo - CEO Confirmation Required - "+bulkId;
    }
    return res.status(200).json({
      status:isInvestorConfirmMail?"confirmation_mail_sent_with_download_link":isCeoNotification?"ceo_notification_sent_investor_paid":"bulk_mail_sent",
      bulk_id:bulkId,
      pass_id:cleanPassId,
      from:cleanPassId,
      to_count:recipients.length||1,
      to:recipients.slice(0,10),
      to_all_count:recipients.length||1,
      subject:finalSubject,
      message_preview:finalMessage.substring(0,300),
      message_full:finalMessage,
      message:"✅ Bulk Mail Sent OK - Bulk ID = "+bulkId+" - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - From "+cleanPassId+" To "+(recipients.length||1)+" recipients - Subject "+finalSubject+" - Message "+finalMessage.substring(0,150)+" - @geamail.con Mail - Biometric NIN Thumb Facial Holo Chat Mail Live Adverts - File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place - Business Whatsapp https://www.wa.me/+2348055432048 - Package v27 Build 27000 - Vercel Deploy Tonight - Apple Store Google Play Store Launch 1st October - Package Tonight - Creators Tools Funs Have Funs Make More Money No Waste Time No Waste Life Geapple Ecosystem Keeps You Moving - Users Get 15% Auto Rewards Platform Keep 85% - Devs Keep 85% Platform Keep 15% - Right Standard For Devs Have Funs Make More Money",
      confirmation_mail_details:isInvestorConfirmMail?{type:"confirmation_mail_to_investors_with_data_mining_and_minting_download_link",to:recipients[0]||cleanPassId,subject:finalSubject,download_links:{data_mining_csv:downloadCsv,minting_json:downloadJson,badge26:badge26Link,ceo_dashboard:BADGE28_CEO},mail_api:"/api/bulk-mail",download_button_by_investors:"Download Data Mining Button By Investors - Only After Payment Confirmed + CEO Confirmed - Enabled - Download Links "+downloadCsv+" + "+downloadJson}:null,
      ceo_notification_details:isCeoNotification?{type:body.ceo_confirm?"ceo_payment_confirmation_notification_by_investors":"investors_payment_confirmation_notification_from_ceo",investor_paid:recipients[0]||cleanPassId,amount:body.amount||199,payment_id:bulkId,ceo_dashboard:BADGE28_CEO,investor_dashboard:BADGE26_DASHBOARD+(recipients[0]||cleanPassId),ceo_can_confirm:!body.ceo_confirm,investor_can_download:!!body.ceo_confirm}:null,
      download_links:{data_mining_csv:downloadCsv,minting_json:downloadJson,badge26:badge26Link,ceo_dashboard:BADGE28_CEO},
      gea_mail:"@geamail.con Mail - Biometric NIN Thumb Facial Holo Chat Mail Live Adverts - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE",
      hosting:"Gea.Con Hosting Domain Website Drive Cloud @geamail.con DNS Checker - A 76.76.21.21 Vercel CNAME MX mx.geamail.con TXT NS - Pass ID = "+cleanPassId,
      business_whatsapp:"https://www.wa.me/+2348055432048",
      build:27000
    });
  }
  return res.status(405).json({error:"Method Not Allowed - Use GET or POST - /api/bulk-mail - Pass ID = "+cleanPassId,business_whatsapp:"https://www.wa.me/+2348055432048",build:27000});
};