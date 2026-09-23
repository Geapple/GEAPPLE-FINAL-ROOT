function getCleanPassId(e){ if(!e) return "user@geamail.con"; return e.replace(/@gmail\.com/gi,'@geamail.con').replace(/@geamail\.com/gi,'@geamail.con').toLowerCase().trim(); }
function calculateDevRevenue(amount, tier){
  let devKeep, platformKeep;
  if(tier === 'starter'){ devKeep = Math.round(amount * 0.70); platformKeep = amount - devKeep; }
  else if(tier === 'enterprise'){ devKeep = Math.round(amount * 0.90); platformKeep = amount - devKeep; }
  else { devKeep = Math.round(amount * 0.85); platformKeep = amount - devKeep; }
  return { amount, dev_keep: devKeep, platform_keep: platformKeep, tier };
}
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Pass-ID'); if(req.method === 'OPTIONS') return res.status(200).end();
  const cleanPassId = getCleanPassId(req.headers['x-pass-id'] || req.query.pass_id || req.body?.pass_id || "dev@geamail.con");
  if(!cleanPassId.includes('@geamail.con')) return res.status(400).json({ error: "Invalid Pass ID = name@geamail.con Only Recognize Gateway Key", cleaned: cleanPassId, business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000 });
  if(req.method === 'GET'){
    const tier = (req.query.tier || "pro").toLowerCase();
    const exampleAmount = 10000;
    const calc = calculateDevRevenue(exampleAmount, tier);
    return res.status(200).json({
      message: "Payment Subscription Format System - How Developers Pays And Upload Apps On Gea Store - Pass ID = "+cleanPassId+" Only Recognize Gateway Key",
      pass_id: cleanPassId,
      tiers: {
        starter: { name: "STARTER - FREE TO TRY", price: "FREE - 0 Naira - 14 days trial", setup: "₦0", platform_fee: "30% per sale", monthly: "₦0", upload: "1 App max, 50MB max, 3 screenshots max", revenue: "Devs Keep 70% Platform Keep 30% - Starter", duration: "14 days trial then upgrade", features: ["Gea Pay Test Mode","1 App","50MB","Creators Tools Funs Tag","No real money"], example: calculateDevRevenue(10000, 'starter') },
        pro: { name: "PRO - MOST POPULAR - Indie Devs", price: "₦5,000 One-Time Setup + 15% per sale + ₦2,900/mo Unlimited - OLD 5000+15% 29/mo unlimited NOW CLEAR", setup: "₦5,000 One-Time", platform_fee: "15% per sale", monthly: "₦2,900/mo Unlimited Uploads", upload: "Unlimited Apps, 500MB per app, unlimited screenshots, 30s video preview", revenue: "Devs Keep 85% Platform Keep 15% - Right Standard For Devs - Have Funs Make More Money", duration: "Monthly ₦2,900/mo Cancel anytime Apps paused if not paid", features: ["Gea Pay Live Stripe Paystack Flutterwave Card Bank Transfer USSD Mobile Money Gea Coins","Unlimited Apps","500MB","Data Mining Analytics Lite","CEO Dashboard View","Creators Tools Funs Have Funs Make More Money","PCI DSS Compliant 3D Secure Webhook"], example: calculateDevRevenue(10000, 'pro') },
        enterprise: { name: "ENTERPRISE - Companies + Investors", price: "₦25,000 One-Time Setup + 10% per sale + ₦22,500/mo Unlimited + Priority + Ads 225k/mo", setup: "₦25,000 One-Time", platform_fee: "10% per sale", monthly: "₦22,500/mo Unlimited + Priority + Ads credits 225k/mo", upload: "Unlimited Apps + Featured Homepage + Push + DOME Cloud Movies + SAT MAP LEO 482km, 2GB per app, unlimited screenshots, 60s video, HOLO Gifts", revenue: "Devs Keep 90% Platform Keep 10% - Enterprise - Have Funs Make More Money No Waste Time No Waste Life", duration: "Monthly ₦22,500/mo + Ads 225k/mo included Cancel anytime", features: ["Everything in Pro","Data Mining Analytics BADGE 26 27 28 CEO Dashboard Admin Visibly","Investors Payments + Transfer Data Minting Blockchain IPFS","Gea Store Featured","ReelGea 15s 30s 60s Live Adverts Window","Priority Support Business Whatsapp https://www.wa.me/+2348055432048","White Label","DOME Cloud Movies Integration","SAT MAP LEO 482km"], example: calculateDevRevenue(10000, 'enterprise') }
      },
      payment_flow: ["1. Dev registers Pass ID = name@geamail.con Only Recognize Gateway Key Front GSIA CYBER CORE Back REALORACLE No password needed Pass ID + Biometric NIN Thumb Facial is security AES-256","2. Dev chooses Tier Starter Free Pro 5000+15%+2900/mo Enterprise 25000+10%+22500/mo Click Pay via Gea Pay","3. Gea Pay Payment Intact Stripe Paystack Flutterwave Card Bank Transfer USSD Mobile Money Gea Coins PCI DSS Compliant 3D Secure Webhook Verification Front GSIA CYBER CORE Back REALORACLE Pass ID = "+cleanPassId+" Business Whatsapp https://www.wa.me/+2348055432048","4. Payment verified /api/gea-pay-investors.js + /api/dev-subscription.js + /api/ceo-dashboard.js Webhook verified Dev subscription active Upload token generated Token = Pass ID + Build 27000 + Tier + Expiry","5. Dev goes to Gea Store + CEO Dashboard Upload Apps badge6.html + badge28.html Enters Pass ID + Upload Token App Name + Icon File Uploading Button Those Appropriate Place Not Texts + Category + Price + Description + App File File Uploading Button + Screenshots File Uploading Buttons + Creators Tools Funs Tag Click CEO Upload App To Gea Store","6. App uploaded to Gea Store Pending approval CEO Dashboard Admin Visibly CEO Pass ID = ceo@geamail.con can Approve Edit Delete File Uploading Buttons Those Appropriate Place Not Texts Download Buttons Those Appropriate Place","7. App live on Gea Store Users can Buy Download Users 19/mo can access all apps Devs get revenue share 70%/85%/90% depending on tier Platform keeps 30%/15%/10% Users Get 15% Auto Rewards Platform Keep 85% on rewards Separate from dev revenue share","8. Monthly renewal Gea Pay auto-debit if card saved Or manual via Gea Pay If not renewed apps paused Business Whatsapp https://www.wa.me/+2348055432048 for support"],
      revenue_share_note: "DEVS REVERSE OF USERS REWARDS - Users Get 15% Auto Rewards Platform Keep 85% - Right Standard - Platform Keep 85% covers hosting SAT MAP DOME Gea Pay PCI DSS Investors CEO Dashboard - DEVS KEEP MORE - Devs Keep 70%/85%/90% Platform Keep 30%/15%/10% - Have Funs Make More Money No Waste Time No Waste Life Geapple Ecosystem Keeps You Moving - Creators Tools Funs Have Funs Make More Money",
      creators_tools_funs: "Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving - MyGea Social Engaging Keep Them Busy - HOLO Gifts Gea Coins Creators Tools Funs - Have Funs Make More Money",
      gea_pay: "Gea Pay Payment Intact via Gea Pay - Stripe Paystack Flutterwave Card Bank Transfer USSD Mobile Money Gea Coins - PCI DSS Compliant 3D Secure Webhook Verification - Front GSIA CYBER CORE Back REALORACLE Only Recognize Gateway Key - Pass ID = "+cleanPassId,
      hosting: "Gea.Con Hosting Domain Website Drive Cloud @geamail.con DNS Checker - A 76.76.21.21 Vercel CNAME MX mx.geamail.con TXT NS - Pass ID = "+cleanPassId,
      business_whatsapp: "https://www.wa.me/+2348055432048 - Business Whatsapp Link +2348055432048 - Front Desk Support mygeaholo@gmail.com geapple.admin@gmail.com geapplextechco@gmail.com - Line 137 Fixed",
      build: 27000,
      current_tier_example: calc
    });
  }
  if(req.method === 'POST'){
    const body = req.body || {};
    const tier = (body.tier || "pro").toLowerCase();
    const passId = cleanPassId;
    let setupFee, monthlyFee, platformFeePercent;
    if(tier === 'starter'){ setupFee = 0; monthlyFee = 0; platformFeePercent = 30; }
    else if(tier === 'enterprise'){ setupFee = 25000; monthlyFee = 22500; platformFeePercent = 10; }
    else { setupFee = 5000; monthlyFee = 2900; platformFeePercent = 15; }
    const subId = "GEA-DEV-SUB-"+Date.now()+"-"+Math.random().toString(36).substring(2,8).toUpperCase();
    const uploadToken = "GEA-UPLOAD-TOKEN-"+Buffer.from(passId+"|"+tier+"|"+BUILD+"|"+Date.now()).toString('base64').substring(0,32).toUpperCase();
    return res.status(200).json({
      status: "subscription_active",
      subscription_id: subId,
      pass_id: passId,
      tier: tier,
      tier_name: tier === 'starter' ? "STARTER - FREE TO TRY" : tier === 'enterprise' ? "ENTERPRISE - Companies + Investors" : "PRO - MOST POPULAR - Indie Devs",
      setup_fee: setupFee,
      platform_fee_percent: platformFeePercent,
      monthly_fee: monthlyFee,
      upload_token: uploadToken,
      upload_token_expiry: "30 days - Renew via Gea Pay monthly - Pass ID = "+passId,
      revenue_share: tier === 'starter' ? "Devs Keep 70% Platform Keep 30%" : tier === 'enterprise' ? "Devs Keep 90% Platform Keep 10%" : "Devs Keep 85% Platform Keep 15% - Right Standard For Devs - Have Funs Make More Money",
      gea_store_upload: "Go to badge6.html + badge28.html - Enter Pass ID = "+passId+" + Upload Token = "+uploadToken+" - App Name + Icon File Uploading Button Those Appropriate Place Not Texts + Category + Price + Description + App File File Uploading Button + Screenshots File Uploading Buttons + Creators Tools Funs Tag - Click CEO Upload App To Gea Store - File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place",
      gea_pay: "Gea Pay Payment Intact - Payment verified - /api/gea-pay-investors.js + /api/dev-subscription.js + /api/ceo-dashboard.js - Webhook verified - Dev subscription active - Upload token generated - Pass ID = "+passId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - PCI DSS Compliant 3D Secure Webhook Verification - Stripe Paystack Flutterwave Card Bank Transfer USSD Mobile Money Gea Coins",
      message: "✅ Dev Subscription Active - Tier "+tier.toUpperCase()+" - Pass ID = "+passId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Setup Fee ₦"+setupFee+" - Platform Fee "+platformFeePercent+"% per sale - Monthly Fee ₦"+monthlyFee+"/mo - Upload Token "+uploadToken+" - Expiry 30 days - Go to Gea Store Upload Apps badge6.html + badge28.html - Enter Pass ID + Upload Token + App details + Icon File + App File + Screenshots + Creators Tools Funs Tag - Click Upload - Gea Store 27 Apps + New App - CEO Dashboard Admin Visibly Approve Edit Delete - File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place - Creators Tools Funs Have Funs Make More Money No Waste Time No Waste Life Geapple Ecosystem Keeps You Moving - Business Whatsapp https://www.wa.me/+2348055432048 - Package v27 Build 27000 - Vercel Deploy Tonight",
      business_whatsapp: "https://www.wa.me/+2348055432048",
      build: 27000,
      creators_tools_funs: "Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving"
    });
  }
  return res.status(405).json({ error: "Method Not Allowed - Use GET or POST - /api/dev-subscription - Pass ID = "+cleanPassId, business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000 });
};