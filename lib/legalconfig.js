// lib/legalConfig.js - MENU SETTINGS TOOLS LOGIC - JS BACKUP
export const menuSettingsTools = {
  legal: {
    title: "Legal Information",
    content: "Geapple Inc RC:9882150 - All rights reserved. MYGEA SOCIAL NATIVE is part of Geapple Ecosystem.",
    link: "/legal",
    action: () => { localStorage.setItem('geapple_legal','viewed'); return "/legal"; }
  },
  terms: {
    title: "Terms & Conditions",
    content: "By using MYGEA, you agree to Geapple Terms. SAT Free Calls, 5G Sensor, HOLO Conference are provided as is. Users must be 13+.",
    link: "/terms",
    action: () => { localStorage.setItem('geapple_terms','accepted'); return "/terms"; }
  },
  privacy: {
    title: "Privacy Policy",
    content: "We collect minimal data. Camera, Mic used for 5G Sensor only. Backup JSON/JS/JSX stored locally. GSIA Secured - gsiacyber.com",
    link: "/privacy",
    action: () => { localStorage.setItem('geapple_privacy','viewed'); return "/privacy"; }
  },
  ndpa: {
    title: "NDPA Compliance",
    content: "Compliant with Nigeria Data Protection Act. User data rights: access, delete, portability. Contact DPO via geapple.com",
    link: "/ndpa",
    action: () => { localStorage.setItem('geapple_ndpa','compliant'); return "/ndpa"; }
  },
  profile: {
    title: "User Profiles",
    content: "Profile settings, backup, themes, SAT status",
    link: "/profile",
    action: () => { return "/profile"; }
  }
};

export const getMenuTool = (id) => menuSettingsTools[id];
export const backupMenuTools = () => {
  localStorage.setItem('geapple_menu_backup', JSON.stringify(menuSettingsTools));
  return "Menu Tools JS Backup Linked";
};