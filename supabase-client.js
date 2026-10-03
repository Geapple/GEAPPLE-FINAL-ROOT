// supabase-client.js - GEAPPLE®™ gsiacyber.com - RC:9882150 - SUPER NATIVE - 5G CAMERA + HOLO 100 + SKY BEAM + GEA-PAY
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm';

const SUPABASE_URL = 'https://YOUR_PROJECT_ID.supabase.co'; // Replace with your URL
const SUPABASE_ANON_KEY = 'YOUR_ANON_KEY'; // Replace with your anon key

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// 5G CAMERA CHIP + SENSOR - SAVE SELFIE TO SUPABASE
export async function saveCameraCapture(imageData, note, chipInfo){
 const { data, error } = await supabase.from('camera_captures').insert([{
   type: 'selfie',
   image_url: imageData.slice(0,500), // For demo, store truncated - Use Storage for full
   note: note,
   chip_info: chipInfo
 }]).select();
 if(error){console.error('Supabase Camera Error',error);return null;}
 console.log('✅ 5G Camera Saved to Supabase',data);
 return data;
}

// HOLO 100 PROJECTOR - SAVE CONFERENCE 100 PARTICIPANTS + COUNTRY AVATAR
export async function saveHoloConference(participants, skyBeamActive){
 const { data, error } = await supabase.from('holo_conferences').insert([{
   title: 'HOLO 100 Projector Shadow Conference - '+new Date().toISOString(),
   participants: participants,
   sky_beam_active: skyBeamActive,
   multistream: true
 }]).select();
 if(error){console.error('Holo Save Error',error);return null;}
 console.log('✅ HOLO 100 Saved to Supabase',data);
 return data;
}

// SKY BEAM MOVIES - GET CLOUD VIDEOS
export async function getSkyBeamVideos(){
 const { data, error } = await supabase.from('sky_beam_videos').select('*').order('created_at',{ascending:false});
 if(error){console.error(error);return [];}
 return data;
}

// GEA-PAY - SAVE PAYMENT
export async function savePayment(amount, advertSlot){
 const { data, error } = await supabase.from('payments').insert([{
   amount: amount,
   advert_slot: advertSlot,
   status: 'success'
 }]).select();
 return data;
}

console.log('✅ SUPABASE CLIENT READY - gsiacyber.com - 5G Camera + Holo 100 + Sky Beam + GEA-PAY');