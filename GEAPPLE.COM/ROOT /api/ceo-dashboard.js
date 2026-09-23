function getCleanPassId(e){ if(!e) return "ceo@geamail.con"; return e.replace(/@gmail\.com/gi,'@geamail.con').replace(/@geamail\.com/gi,'@geamail.con').toLowerCase().trim(); }
let CEO_PRICES = {
  users_price: "19/mo",
  users_price_value: 19,
  devs_starter_setup: 0,
  devs_starter_platform_fee: 30,
  devs_starter_monthly: 0,
  devs_starter_upload: 1,
  devs_starter_size: 50,
  devs_starter_dev_keep: 70,
  devs_starter_platform_keep: 30,
  devs_pro_setup: 5000,
  devs_pro_platform_fee: 15,
  devs_pro_monthly: 2900,
  devs_pro_upload: -1,
  devs_pro_size: 500,
  devs_pro_dev_keep: 85,
  devs_pro_platform_keep: 15,
  devs_enterprise_setup: 25000,
  devs_enterprise_platform_fee: 10,
  devs_enterprise_monthly: 22500,
  devs_enterprise_upload: -1,
  devs_enterprise_size: 2048,
  devs_enterprise_dev_keep: 90,
  devs_enterprise_platform_keep: 10,
  ads_price: "225k/mo",
  ads_price_value: 225000,
  investors_price: "$199/mo",
  investors_price_value: 199,
  users_rewards_percent: 15,
  platform_keep_percent: 85,
  gea_coins_rate: 10,
  gea_coins_rate_text: "1 Gea Coin = ₦10",
  data_500mb_price: 300,
  data_1gb_price: 500,
  data_2gb_price: 1000,
  data_5gb_price: 2500,
  data_10gb_price: 4000,
  gea_store_commission: 15,
  updated_by: "ceo@geamail.con",
  updated_at: new Date().toISOString(),
  build: 27000
};
module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*'); res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, OPTIONS'); res.setHeader('Access-Control-Allow-Headers', 'Content-Type, X-Pass-ID'); if(req.method === 'OPTIONS') return res.status(200).end();
  const cleanPassId = getCleanPassId(req.headers['x-pass-id'] || req.query.pass_id || req.body?.pass_id || "ceo@geamail.con");
  const isCEO = cleanPassId.includes('ceo@geamail.con') || cleanPassId.includes('admin@geamail.con') || cleanPassId === 'geapple.admin@gmail.com'.replace('@gmail.com','@geamail.con') || req.query.ceo === 'true' || req.body?.is_ceo === true;
  if(!cleanPassId.includes('@geamail.con')) return res.status(400).json({ error: "Invalid CEO Pass ID = name@geamail.con Only Recognize Gateway Key", cleaned: cleanPassId, business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000 });
  if(req.method === 'GET'){
    return res.status(200).json({
      message: "CEO Dashboard - Admin Visibly - Price And Values Editor - Provision For CEO To Change Price And Values - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE",
      pass_id: cleanPassId,
      is_ceo: isCEO,
      can_edit: isCEO,
      prices: CEO_PRICES,
      gea_store_apps: 28,
      apps: ["MyGea HOLO v17 v18","SAT MAP + VOTE INEC LEO 482km","SiPHONE v1 v2 + DOME","SiTV + GeaPad + GeaTop","Gea Game + Music","Gea Store + Gea Pay","Gea.Con Cloud + DOME","@geamail.con Mail","Gea.Con Hosting Domain","Workspace + Drive Cloud","ReelGea + Live Streaming","Gea Coins + Creators Tools Funs","VOTE + INEC Linked SAT","SAT Surveyor + LEO 482km","DNS DNS Checker","Data Mining Analytics Lite","Visual Art Pro + Code Edit","Countries Avatar + Flag","Voice Translation + NINO","MENU + SETTING + THEMES","Drive Cloud + File Upload","DOME Cloud Movies","Gea Pay Payment Intact","Hosting myname.con","Pass ID = name@geamail.con","Data Mining Analytics BADGE 26","BADGE 27 Creators Tools Funs","BADGE 28 CEO Dashboard"],
      provision: "CEO Can Change Price And Values On CEO Dashboard - Admin Visibly - Only CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Can Change: Users 19/mo, Devs Starter FREE 0+30%+0, Devs Pro 5000+15%+2900/mo, Devs Enterprise 25000+10%+22500/mo + Ads 225k/mo, Investors $199/mo, Users Rewards 15% Platform 85%, Devs Revenue 70%/85%/90%, Gea Coins Rate 1=₦10, Data MB GB Rates, Gea Store Commission 15% - All Editable Via BADGE 28 Price Editor - Inputs + Save Button + API POST /api/ceo-dashboard + localStorage + Immediate Update - File Uploading Buttons Those Appropriate Place Not Texts - Download Buttons Those Appropriate Place",
      edit_flow: ["1. CEO Login Pass ID = ceo@geamail.con Only Recognize Gateway Key Front GSIA CYBER CORE Back REALORACLE","2. Go To BADGE 28 CEO Dashboard - Price And Values Editor - See Current Prices - Users 19/mo, Devs Starter FREE, Devs Pro 5000+15%+2900/mo, Devs Enterprise 25000+10%+22500/mo, Ads 225k/mo, Investors $199/mo, Users Rewards 15% Platform 85%, Devs Keep 70%/85%/90%, Gea Coins 1=₦10, Data 500MB 300 1GB 500 2GB 1000 5GB 2500 10GB 4000, Commission 15%","3. CEO Edits Any Input - e.g. Change Users 19/mo to 29/mo, Change Devs Pro Setup 5000 to 7000, Monthly 2900 to 3900, Platform Fee 15% to 12%, Devs Keep 85% to 88%, Users Rewards 15% to 20% Platform 80% auto, Gea Coins Rate 10 to 20, Data rates etc","4. CEO Clicks Save Prices - Button Calls POST /api/ceo-dashboard with pass_id=ceo@geamail.con + new prices + is_ceo true","5. API Validates CEO Pass ID = ceo@geamail.con Only Recognize Gateway Key - Updates CEO_PRICES memory + Returns updated + Stores in localStorage for front end","6. All Apps Immediately Show Updated Prices - badge6.html Gea Store + badge23 Gea Pay + badge12 Claim Rewards + badge26 Data Mining + api/dev-subscription + api/gea-pay-investors + api/gea-rewards + index.html - All Read From /api/ceo-dashboard GET - No Code Change Needed - CEO Dashboard Admin Visibly","7. Vercel Deploy Tonight - Prices Persist In Memory Until Redeploy - For Permanent Persist - CEO Also Updates vercel.json env + analytics.js + gea-pay-investors.js + dev-subscription.js - But API Memory Enough For Now - Package Tonight"],
      creators_tools_funs: "Creators Tools Funs - Have Funs Make More Money - No Waste Time No Waste Life - Geapple Ecosystem Keeps You Moving",
      hosting: "Gea.Con Hosting Domain Website Drive Cloud @geamail.con DNS Checker - A 76.76.21.21 Vercel CNAME MX mx.geamail.con TXT NS - Pass ID = "+cleanPassId,
      business_whatsapp: "https://www.wa.me/+2348055432048",
      build: 27000
    });
  }
  if(req.method === 'POST' || req.method === 'PUT'){
    if(!isCEO) return res.status(403).json({ error: "Forbidden - Only CEO Pass ID = ceo@geamail.con / admin@geamail.con Only Recognize Gateway Key Can Change Price And Values - Front GSIA CYBER CORE Back REALORACLE - Your Pass ID = "+cleanPassId+" Not CEO - Contact Business Whatsapp https://www.wa.me/+2348055432048", pass_id: cleanPassId, is_ceo: isCEO, business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000 });
    const body = req.body || {};
    const oldPrices = { ...CEO_PRICES };
    CEO_PRICES.users_price = body.users_price || CEO_PRICES.users_price;
    CEO_PRICES.users_price_value = parseInt(body.users_price_value || CEO_PRICES.users_price_value);
    CEO_PRICES.devs_starter_setup = parseInt(body.devs_starter_setup ?? CEO_PRICES.devs_starter_setup);
    CEO_PRICES.devs_starter_platform_fee = parseInt(body.devs_starter_platform_fee ?? CEO_PRICES.devs_starter_platform_fee);
    CEO_PRICES.devs_starter_monthly = parseInt(body.devs_starter_monthly ?? CEO_PRICES.devs_starter_monthly);
    CEO_PRICES.devs_starter_upload = parseInt(body.devs_starter_upload ?? CEO_PRICES.devs_starter_upload);
    CEO_PRICES.devs_starter_size = parseInt(body.devs_starter_size ?? CEO_PRICES.devs_starter_size);
    CEO_PRICES.devs_starter_dev_keep = parseInt(body.devs_starter_dev_keep ?? CEO_PRICES.devs_starter_dev_keep);
    CEO_PRICES.devs_starter_platform_keep = 100 - CEO_PRICES.devs_starter_dev_keep;
    CEO_PRICES.devs_pro_setup = parseInt(body.devs_pro_setup ?? CEO_PRICES.devs_pro_setup);
    CEO_PRICES.devs_pro_platform_fee = parseInt(body.devs_pro_platform_fee ?? CEO_PRICES.devs_pro_platform_fee);
    CEO_PRICES.devs_pro_monthly = parseInt(body.devs_pro_monthly ?? CEO_PRICES.devs_pro_monthly);
    CEO_PRICES.devs_pro_upload = parseInt(body.devs_pro_upload ?? CEO_PRICES.devs_pro_upload);
    CEO_PRICES.devs_pro_size = parseInt(body.devs_pro_size ?? CEO_PRICES.devs_pro_size);
    CEO_PRICES.devs_pro_dev_keep = parseInt(body.devs_pro_dev_keep ?? CEO_PRICES.devs_pro_dev_keep);
    CEO_PRICES.devs_pro_platform_keep = 100 - CEO_PRICES.devs_pro_dev_keep;
    CEO_PRICES.devs_enterprise_setup = parseInt(body.devs_enterprise_setup ?? CEO_PRICES.devs_enterprise_setup);
    CEO_PRICES.devs_enterprise_platform_fee = parseInt(body.devs_enterprise_platform_fee ?? CEO_PRICES.devs_enterprise_platform_fee);
    CEO_PRICES.devs_enterprise_monthly = parseInt(body.devs_enterprise_monthly ?? CEO_PRICES.devs_enterprise_monthly);
    CEO_PRICES.devs_enterprise_upload = parseInt(body.devs_enterprise_upload ?? CEO_PRICES.devs_enterprise_upload);
    CEO_PRICES.devs_enterprise_size = parseInt(body.devs_enterprise_size ?? CEO_PRICES.devs_enterprise_size);
    CEO_PRICES.devs_enterprise_dev_keep = parseInt(body.devs_enterprise_dev_keep ?? CEO_PRICES.devs_enterprise_dev_keep);
    CEO_PRICES.devs_enterprise_platform_keep = 100 - CEO_PRICES.devs_enterprise_dev_keep;
    CEO_PRICES.ads_price = body.ads_price || CEO_PRICES.ads_price;
    CEO_PRICES.ads_price_value = parseInt(body.ads_price_value || CEO_PRICES.ads_price_value);
    CEO_PRICES.investors_price = body.investors_price || CEO_PRICES.investors_price;
    CEO_PRICES.investors_price_value = parseInt(body.investors_price_value || CEO_PRICES.investors_price_value);
    CEO_PRICES.users_rewards_percent = parseInt(body.users_rewards_percent ?? CEO_PRICES.users_rewards_percent);
    CEO_PRICES.platform_keep_percent = 100 - CEO_PRICES.users_rewards_percent;
    CEO_PRICES.gea_coins_rate = parseInt(body.gea_coins_rate ?? CEO_PRICES.gea_coins_rate);
    CEO_PRICES.gea_coins_rate_text = "1 Gea Coin = ₦"+CEO_PRICES.gea_coins_rate;
    CEO_PRICES.data_500mb_price = parseInt(body.data_500mb_price ?? CEO_PRICES.data_500mb_price);
    CEO_PRICES.data_1gb_price = parseInt(body.data_1gb_price ?? CEO_PRICES.data_1gb_price);
    CEO_PRICES.data_2gb_price = parseInt(body.data_2gb_price ?? CEO_PRICES.data_2gb_price);
    CEO_PRICES.data_5gb_price = parseInt(body.data_5gb_price ?? CEO_PRICES.data_5gb_price);
    CEO_PRICES.data_10gb_price = parseInt(body.data_10gb_price ?? CEO_PRICES.data_10gb_price);
    CEO_PRICES.gea_store_commission = parseInt(body.gea_store_commission ?? CEO_PRICES.gea_store_commission);
    CEO_PRICES.updated_by = cleanPassId;
    CEO_PRICES.updated_at = new Date().toISOString();
    return res.status(200).json({
      status: "prices_updated",
      pass_id: cleanPassId,
      is_ceo: true,
      old_prices: oldPrices,
      new_prices: CEO_PRICES,
      message: "✅ CEO Prices Updated OK - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE - Old Prices "+JSON.stringify(oldPrices).substring(0,200)+" - New Prices "+JSON.stringify(CEO_PRICES).substring(0,400)+" - All Apps Immediately Show Updated Prices - badge6.html Gea Store + badge23 Gea Pay + badge12 Claim Rewards + badge26 Data Mining + api/dev-subscription + api/gea-pay-investors + api/gea-rewards + index.html - All Read From /api/ceo-dashboard GET - No Code Change Needed - CEO Dashboard Admin Visibly - Creators Tools Funs Have Funs Make More Money No Waste Time No Waste Life Geapple Ecosystem Keeps You Moving - Business Whatsapp https://www.wa.me/+2348055432048 - Package v27 Build 27000 - Vercel Deploy Tonight",
      gea_store: "Gea Store 28 Apps - Prices Updated - Users "+CEO_PRICES.users_price+" Devs Starter FREE Devs Pro "+CEO_PRICES.devs_pro_setup+"+15%+"+CEO_PRICES.devs_pro_monthly+"/mo Devs Enterprise "+CEO_PRICES.devs_enterprise_setup+"+10%+"+CEO_PRICES.devs_enterprise_monthly+"/mo Ads "+CEO_PRICES.ads_price+" Investors "+CEO_PRICES.investors_price+" Users Rewards "+CEO_PRICES.users_rewards_percent+"% Platform "+CEO_PRICES.platform_keep_percent+"% Devs Keep "+CEO_PRICES.devs_pro_dev_keep+"% Platform "+CEO_PRICES.devs_pro_platform_keep+"% Gea Coins "+CEO_PRICES.gea_coins_rate_text+" Data 500MB ₦"+CEO_PRICES.data_500mb_price+" 1GB ₦"+CEO_PRICES.data_1gb_price+" etc",
      business_whatsapp: "https://www.wa.me/+2348055432048",
      build: 27000
    });
  }
  return res.status(405).json({ error: "Method Not Allowed - Use GET or POST - /api/ceo-dashboard - Pass ID = "+cleanPassId, business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000 });
};