document.write('<!-- Template Id = 1 Template Name = Banner Creative (Flash) -->\n<!-- Copyright 2002 DoubleClick Inc., All rights reserved. --><script src=\"http://m.fr.2mdn.net/879366/flashwrite_1_2.js\"><\/script>');document.write('\n');
 
var dcswf = "http://m.fr.2mdn.net/1978699/VOCENTO-nominatv-234x45.swf"; 
var dcgif = "http://m.fr.2mdn.net/1978699/1x1.gif"; 
var advurl = "http://ad.es.doubleclick.net/click%3Bh=v8/3786/3/0/%2a/i%3B209032525%3B0-0%3B1%3B26309792%3B3831-234/45%3B28208895/28226774/1%3B%3B%7Esscs%3D%3fhttp://www.banestopromociones.es?idm=5uyk-y842";
var dcadvurl = escape(advurl);
var dcminversion = 6;
var dccreativewidth = "234";
var dccreativeheight = "45";
var dcwmode = "opaque";
var dcbgcolor = "";
var dcallowscriptaccess = "never";

function getFlashVer() {
        var i,a,o,p,s="Shockwave",f="Flash",t=" 2.0",u=s+" "+f,v=s+f+".",rSW=RegExp("^"+u+" (\\d)");
        if((o=navigator.plugins)&&(p=o[u]||o[u+t])&&(a=p.description.match(rSW)))return a[1];
        else if(!!(window.ActiveXObject))for(i=10;i>0;i--)try{if(!!(new ActiveXObject(v+v+i)))return i}catch(e){}
        return 0;
      }

if (dcminversion<=getFlashVer())  {
 adcode = '<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"'+
  ' ID=FLASH_AD WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'">'+
  '<PARAM NAME=movie VALUE="' + dcswf + '"><param name="flashvars" value="clickTag='+ dcadvurl +'"><PARAM NAME=quality VALUE=high><PARAM NAME=bgcolor VALUE=#'+ dcbgcolor +'><PARAM NAME=wmode VALUE='+ dcwmode +'><PARAM NAME="AllowScriptAccess" VALUE="'+dcallowscriptaccess+'">'+
  '<EMBED src="' + dcswf + '?clickTag='+ dcadvurl +'" quality=high wmode='+dcwmode+
  ' swLiveConnect=TRUE WIDTH="'+ dccreativewidth +'" HEIGHT="'+ dccreativeheight +'" bgcolor=#'+ dcbgcolor+
  ' TYPE="application/x-shockwave-flash" AllowScriptAccess="'+dcallowscriptaccess+'"></EMBED></OBJECT>';
if(('j'!="j")&&(typeof dclkFlashWrite!="undefined")){dclkFlashWrite(adcode);}else{document.write(adcode);}
} else {
 document.write('<A TARGET="_blank" HREF="http://ad.es.doubleclick.net/click%3Bh=v8/3786/3/0/%2a/i%3B209032525%3B0-0%3B1%3B26309792%3B3831-234/45%3B28208895/28226774/1%3B%3B%7Esscs%3D%3fhttp://www.banestopromociones.es?idm=5uyk-y842"><IMG SRC="' + dcgif + '" alt="" BORDER=0></A>');
}
//-->

document.write('<NOSCRIPT><A TARGET=\"_blank\" HREF=\"http://ad.es.doubleclick.net/click%3Bh=v8/3786/3/0/%2a/i%3B209032525%3B0-0%3B1%3B26309792%3B3831-234/45%3B28208895/28226774/1%3B%3B%7Esscs%3D%3fhttp://www.banestopromociones.es?idm=5uyk-y842\"><IMG SRC=\"http://m.fr.2mdn.net/1978699/1x1.gif\" alt=\"\" BORDER=0></A></NOSCRIPT>');
