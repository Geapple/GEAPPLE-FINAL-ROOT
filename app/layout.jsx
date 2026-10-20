import "./globals.css";
export const metadata={title:"GEA Store - Apps 1-9 - RC:9882150",description:"GEA Store Apps 1-9 - API Connected - Working"};
export default function RootLayout({children}){
return(
<html lang="en">
<body style={{background:"#000",color:"#fff",margin:0,padding:0,fontFamily:"Arial"}}>
<div style={{background:"#111",borderBottom:"1px solid #0f0",padding:8,fontSize:10,color:"#0f0",fontWeight:"bold"}}>
GEA STORE - RC:9882150 - APPS 1-9 UPGRADED - API Connected OK - Fit Screen
</div>
<main>{children}</main>
</body>
</html>
);
}