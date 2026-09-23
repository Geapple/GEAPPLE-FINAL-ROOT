// api/analytics.js - Data Mining Analytics Dashboard Investors Linked CEO Dashboard Admin Visibly - Right Standard Approach - Investors Payments $199/mo Gea Pay + Transfer Data Minting Blockchain IPFS Drive Cloud Gea.Con Cloud DOME Cloud Movies CSV PDF JSON XLSX API - Pass ID = name@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE Only Recognize - Hosting Domain Website Drive Cloud @geamail.con DNS Checker - Business Whatsapp https://www.wa.me/+2348055432048 - Package com.geapple.com®™ v27 Build 27000 - Vercel Deploy Tonight - Apple Store Google Play Store Launch 1st October - Trade Mark ®™ - Super Pro Max - Logo top + GEAPPLE.COM only - Sec1/2 + Sec2/2 Combined Full File Closed No Break - Corrected Users Get 15% Auto Rewards Platform Keep 85%
const ANALYTICS_CONFIG = {
  package: "com.geapple.com®™",
  version: "v27",
  build: 27000,
  badge: "BADGE 16 + BADGE 26 - Data Mining Analytics - Investors Linked CEO Dashboard Admin Visibly - Right Standard Approach",
  pass_id: "name@geamail.con - Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE Only Recognize - Not name@gmail.con typo - Should be name@geamail.con - @geamail.com Alias",
  hosting: "Gea.Con®™ Hosting Domain Website Drive Cloud @geamail.con DNS DNS Checker - A 76.76.21.21 Vercel CNAME MX mx.geamail.con TXT NS - Pass ID = name@geamail.con",
  business_whatsapp: "https://www.wa.me/+2348055432048",
  rewards_corrected: "CORRECTED - Users Get 15% Auto Rewards - Platform Keep 85% - Right Standard Approach - Platform Keep 85% covers hosting + SAT MAP LEO 482km + DOME Cloud Movies + Gea Pay PCI DSS + Investors + CEO Dashboard - Users Auto Rewards 15% RTM Data MB GB"
};

function getCleanPassId(email){
  if(!email) return "user@geamail.con";
  return email.replace(/@gmail\.com/gi,'@geamail.con').replace(/@geamail\.com/gi,'@geamail.con').toLowerCase().trim();
}

function generateAnalyticsData(passId){
  const cleanPassId = getCleanPassId(passId);
  return {
    pass_id: cleanPassId,
    total_users: 45230,
    total_posts_daily: 8230,
    total_likes_daily: 45230,
    total_comments_daily: 12450,
    total_avatars: 78,
    total_participants: 100,
    total_countries: 78,
    total_languages: 50,
    sat_map: "LEO 482km CCTV 4 Feeds Biometric Face 3D 468 points INEC Linked SAT",
    dome_cloud_movies: "DOME Cloud Movies Nebula Beam Sky Transparent HOLO Smart Sky - Paid Live 100 500 1000 viewers",
    gea_pay: "Gea Pay®™ Payment Intact - Users 19/mo Devs 5000+15% 29/mo unlimited Ads 225k/mo Investors $199/mo Data Access - Stripe Paystack Flutterwave Card Bank Transfer USSD Mobile Money + Gea Coins - PCI DSS Compliant 3D Secure Webhook Verification",
    gea_coins: "Gea Coins Buy Tip Creator Fund - HOLO Gifts Gea Coins Creator Fund - 8,230 Posts Daily 45,230 Likes 12,450 Comments",
    reelgea: "ReelGea 15s 30s 60s Live Adverts Window - Adverts 225k/mo - MyGea Social Engaging Keep Them Busy",
    rewards_corrected: {
      total_earned_example: "₦47,500 - HOLO Gifts + ReelGea 15s 30s 60s + Live Streaming Adverts Window - MyGea Social Engaging",
      users_auto_rewards_15pct: "₦7,125 - Users Get 15% Auto Rewards - Platform Keep 85% = ₦40,375 - Right Standard",
      claim_methods: ["RTM - Real Time Money - Bank Transfer via Gea Pay®™ - Users Get 15% Auto Rewards Platform Keep 85%", "Data MB GB - Airtime Data Bundle MTN Glo Airtel 9mobile - Users Get 15% Auto Rewards Data Value Platform Keep 85%"],
      platform_keep_85pct: "Platform Keep 85% covers hosting domain website drive cloud @geamail.con DNS Checker + SAT MAP LEO 482km + DOME Cloud Movies + Gea Pay PCI DSS + Investors + CEO Dashboard + Data Mining Analytics",
      calculation: "You claim ₦10,000 - Users Get 15% Auto Rewards = ₦1,500 - Platform Keep 85% = ₦8,500 - You receive ₦1,500 RTM via Gea Pay OR ₦1,500 worth Data MB GB - Right Standard - Users Get 15% Platform Keep 85%"
    },
    hosting: "Gea.Con®™ Hosting Domain Website Drive Cloud @geamail.con DNS DNS Checker - A 76.76.21.21 Vercel CNAME MX mx.geamail.con TXT NS - Pass ID = "+cleanPassId,
    business_whatsapp: "https://www.wa.me/+2348055432048 - Business Whatsapp Link +2348055432048 - Front Desk Support",
    build: 27000,
    version: "v27 - Super Pro Max - Logo top + GEAPPLE.COM only - 25 Apps + Data Mining Analytics BADGE 26 = 26 Tiles - Pass ID = "+cleanPassId+" - Vercel Deploy Tonight - Apple Store Google Play Store Launch 1st October - Package Tonight - Trade Mark ®™"
  };
}

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Pass-ID');
  if(req.method === 'OPTIONS'){ return res.status(200).end(); }
  const passIdHeader = req.headers['x-pass-id'] || req.headers['X-Pass-ID'] || req.query.pass_id || (req.body && req.body.pass_id);
  const cleanPassId = getCleanPassId(passIdHeader || "user@geamail.con");
  if(!cleanPassId.includes('@geamail.con')){
    return res.status(400).json({ error: "Invalid Pass ID = name@geamail.con - Must be name@geamail.con Only Recognize Gateway Key - Front GSIA CYBER CORE Back REALORACLE Only Recognize", received: passIdHeader, cleaned: cleanPassId, business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000, corrected: "Users Get 15% Auto Rewards - Platform Keep 85%" });
  }
  if(req.method === 'GET' || req.method === 'POST'){
    const data = generateAnalyticsData(cleanPassId);
    return res.status(200).json(data);
  }
  return res.status(405).json({ error: "Method Not Allowed - Use GET or POST - /api/analytics - Pass ID = "+cleanPassId+" Only Recognize Gateway Key - Business Whatsapp https://www.wa.me/+2348055432048", business_whatsapp: "https://www.wa.me/+2348055432048", build: 27000, corrected: "Users Get 15% Auto Rewards - Platform Keep 85%" });
};