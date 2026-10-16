export const metadata={title:"MYGEA SOCIAL NATIVES APP $1B",description:"MYGEA - HOLO+REELGEA+GSIA+TUNE+PAY+STORE"};
export default function RootLayout({children}){
return(
<html lang="en">
<head>
<link rel="manifest" href="/manifest.json"/>
<meta name="theme-color" content="#00ff00"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
</head>
<body style={{margin:0,background:"#000"}}>{children}</body>
</html>
);
}