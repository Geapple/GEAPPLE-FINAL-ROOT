// GEAMAIL.CON GENERATOR - One NIN = One Pass!
function generateGeaMailPass(NIN, biometric) {
  const hash = btoa(NIN + biometric + Date.now());
  return `gea-${hash.slice(0,16)}.con`;
}
console.log("GEAMAIL PASS READY");
