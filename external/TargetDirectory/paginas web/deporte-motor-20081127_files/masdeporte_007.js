document.write('<!-- Template Id = 5613 Template Name = Banner Creative (David) -->\n<!-- Copyright 2002 DoubleClick Inc., All rights reserved. --><script src=\"http://m.fr.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');
 
var dcswf = "http://m.fr.2mdn.net/806511/robapaginas_300X250_6_5_TAE_opcion_631.3.swf"; 
var dcgif = "http://m.fr.2mdn.net/806511/300x250_cuenta.1.gif"; 
var advurl = "http://ad.es.doubleclick.net/click%3Bh=v8/3786/3/0/%2a/f%3B208866834%3B0-0%3B0%3B30791367%3B4307-300/250%3B28898805/28916684/1%3B%3B%7Efdr%3D208977472%3B0-0%3B1%3B26309792%3B4307-300/250%3B28943945/28961824/1%3B%3B%7Esscs%3D%3fhttps://bancoonline.openbank.es/csopen/Satellite?c=ISBPromocion&canal=CWebPubOB&cid=1210614599973&empr=BrokerOpenBank&leng=es_ES&pagename=BrokerOpenBank%2FISBPromocion%2FWPOB_Pag14_OBInterior01_FichaComercial";
var dcadvurl = escape(advurl);
var dcminversion = 6;
var dcmaxversion = 9;
var plugin = false;
var dccreativewidth = "300";
var dccreativeheight = "250";
var dcwmode = "opaque";
var dcbgcolor = "";

if (((navigator.appName == "Netscape") && (navigator.userAgent.indexOf("Mozilla") != -1) && (parseFloat(navigator.appVersion) >= 4) && (navigator.javaEnabled()) && navigator.mimeTypes && navigator.mimeTypes["application/x-shockwave-flash"] && navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin)) {
var plugname=navigator.plugins['Shockwave Flash'].description;var plugsub=plugname.substring(plugname.indexOf("."),-1); var plugsubstr=plugsub.substr(-1)
if( plugsubstr >= dcminversion) { plugin = true;}
}
else if (navigator.userAgent && navigator.userAgent.indexOf("MSIE")>=0 && (navigator.userAgent.indexOf("Opera")<0) && (navigator.userAgent.indexOf("Windows 95")>=0 || navigator.userAgent.indexOf("Windows 98")>=0 || navigator.userAgent.indexOf("Windows NT")>=0) && document.all) 
{
document.write('<script language=VBScript>' + '\n' +
   'dcmaxversion = '+dcmaxversion + '\n' +
   'dcminversion = '+dcminversion + '\n' +
   'Do' + '\n' +
    'On Error Resume Next' + '\n' +
    'plugin = (IsObject(CreateObject(\"ShockwaveFlash.ShockwaveFlash.\" & dcmaxversion & \"\")))' + '\n' +
    'If plugin = true Then Exit Do' + '\n' +
    'dcmaxversion = dcmaxversion - 1' + '\n' +
    'Loop While dcmaxversion >= dcminversion' + '\n' +
  '<\/script>');
}
if ( plugin )  {
 adcode = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+
  ' ID=FLASH_AD WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">'+
  '<PARAM NAME=movie VALUE="' + dcswf + '?clickTag='+ dcadvurl +'"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'><PARAM NAME=wmode VALUE='+ dcwmode +'><PARAM NAME="AllowScriptAccess" VALUE="always">'+
  '<EMBED src="' + dcswf + '?clickTag='+ dcadvurl +'" quality=high wmode='+dcwmode+
  ' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor+
  ' TYPE="application/x-shockwave-flash" AllowScriptAccess="always"></EMBED></OBJECT>';
if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
} else {
 document.write('<A TARGET="_blank" HREF="http://ad.es.doubleclick.net/click%3Bh=v8/3786/3/0/%2a/f%3B208866834%3B0-0%3B0%3B30791367%3B4307-300/250%3B28898805/28916684/1%3B%3B%7Efdr%3D208977472%3B0-0%3B1%3B26309792%3B4307-300/250%3B28943945/28961824/1%3B%3B%7Esscs%3D%3fhttps://bancoonline.openbank.es/csopen/Satellite?c=ISBPromocion&canal=CWebPubOB&cid=1210614599973&empr=BrokerOpenBank&leng=es_ES&pagename=BrokerOpenBank%2FISBPromocion%2FWPOB_Pag14_OBInterior01_FichaComercial"><IMG SRC="' + dcgif + '" alt="" BORDER=0></A>');
}
//-->

document.write('<NOSCRIPT><A TARGET=\"_blank\" HREF=\"http://ad.es.doubleclick.net/click%3Bh=v8/3786/3/0/%2a/f%3B208866834%3B0-0%3B0%3B30791367%3B4307-300/250%3B28898805/28916684/1%3B%3B%7Efdr%3D208977472%3B0-0%3B1%3B26309792%3B4307-300/250%3B28943945/28961824/1%3B%3B%7Esscs%3D%3fhttps://bancoonline.openbank.es/csopen/Satellite?c=ISBPromocion&canal=CWebPubOB&cid=1210614599973&empr=BrokerOpenBank&leng=es_ES&pagename=BrokerOpenBank%2FISBPromocion%2FWPOB_Pag14_OBInterior01_FichaComercial\"><IMG SRC=\"http://m.fr.2mdn.net/806511/300x250_cuenta.1.gif\" alt=\"\" BORDER=0></A></NOSCRIPT>');
