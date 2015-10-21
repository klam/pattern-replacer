// Inicializamos funciones
function init() {
	reTarget();
	startList();
}

//Activacion de los submenus en IE
startList = function() {
	if (document.all&&document.getElementById) {
		navRoot = document.getElementById("nav");
		for (i=0; i<navRoot.childNodes.length; i++) {
			node = navRoot.childNodes[i];
			if (node.nodeName=="LI") {
				node.onmouseover=function() {
					this.className+=" over";
				}
				node.onmouseout=function() {
					this.className=this.className.replace(" over", "");
				}
			}
		}
	}
}


// Popups Accesibles
var Extras = {
   popup : function(where,w,h,s) {
      window.open( where, 'popupwindow', 'width='+w+', height='+h+', scrollbars='+s+', resizable=no');
   },

   reTarget : function() {
      var external = document.getElementsByTagName("a");
      for (var k=0; k<external.length; k++){
         if (external[k].href && external[k].rel.indexOf('popup') != -1) {
            var url = external[k].href;
	    var medidas =  external[k].rel.substring(6).split("x");
	    var s = "yes";
		var w = medidas[0];
	    var h = medidas[1];
            external[k].onclick = function(){
               Extras.popup(this.href,w,h,s);
               return false;
            }
         }
      }
   }
}

//Mostrar mensajes emergentes
function MM_popupMsg(msg) { //v1.0
  alert(msg);
}

//Aumentar y reducir el tamaño del texto
var prefsLoaded = false;
var original= .90;
incremento = 0;
tamano = 0;
function aumentar () {
	incremento+=.20;
	tamano = original + incremento;
	document.getElementById("contenido").style.fontSize = tamano + "em";
}
function reducir () {
	incremento-=.20;
	tamano = original + incremento;
	document.getElementById("contenido").style.fontSize = tamano + "em";
}
function restaurar () {
	document.getElementById("contenido").style.fontSize = original + "em";
	tamano = 0;
	incremento = 0;
}
function establecer(tamano) {
	if (tamano!=0) {
		document.getElementById("contenido").style.fontSize = tamano + "em";
	}
}
function createCookie(name,value,days) {
  if (days) {
    var date = new Date();
    date.setTime(date.getTime()+(days*24*60*60*1000));
    var expires = "; expires="+date.toGMTString();
  }
  else expires = "";
  document.cookie = name+"="+value+expires+"; path=/";
};

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
    var c = ca[i];
    while (c.charAt(0)==' ') c = c.substring(1,c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
};


function setUserOptions(){
	if(!prefsLoaded){

		cookie = readCookie("fontSize");
		tamano = cookie ? cookie : .90;
		establecer(tamano);
		prefsLoaded = true;
	}

}

window.onunload = saveSettings;

function saveSettings()
{
  createCookie("fontSize", tamano, 365);
}
window.onload= startList, function() {Extras.reTarget()};

// =================================================================
// FLACCESS v1.3 LITE (c)2004 Sergi Meseguer (http://zigotica.com/)
// For DOM browsers only and builds always on the fly (on call)
// Released under Creative Commons ShareAlike license:
// http://creativecommons.org/licenses/by-sa/2.0/
// Check out http://meddle.dzygn.com/eng/tools/ or
// http://meddle.dzygn.com/esp/utilidades/ for further info

// Añadidos por Victor marca.com
// Reparado pequeño bug con las comillas en el código generado
// nuevo parametro permitido "allowFullScreen"
// Si el parámetro es flashVars permitir que todo lo demás sean parámetros dentro de los flashvars... esto evita problemas con urls absolutas del tipo http://
// =================================================================

// Set this variable to 1 if you want to alert intermediate steps:
var flaccess_debug;

function checkFlash(min){
	var version = 0;
	if(!min) min = 10;
	if (navigator.plugins)  {
		if(navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]) {
			var desc = navigator.plugins["Shockwave Flash"].description;
			version = parseInt(desc.substring(16));
		}
		else if(navigator.appVersion.indexOf("MSIE")>-1){
			// loop by Geoff Stearns (geoff@deconcept.com, http://blog.deconcept.com/)
			result = false;
	   		for(var i = min; i >= 3 && result != true; i--){
	    			execScript('on error resume next: result = IsObject(CreateObject("ShockwaveFlash.ShockwaveFlash.'+i+'"))','VBScript');
				version = i;
			}
		}
	}
	return version;
}

function addFlash(minversion,path,width,height,node) {
	if(!document.getElementById) return false;

	// defining arguments (from arguments array) in object and embed elements:
	var minargs = 5;
	var objpars = '<param name="movie" value="'+path+'">';
	var empars = ' src="'+path+'" ';
	var align = '';
	var flashid = '';
	var salign = '';
	var flvars = '';
	var allowedObjParams = ["menu","play","quality","scale","devicefont","bgcolor","wmode","salign","base","allowfullscreen"];
	var allowedEmbParams = ["menu","play","quality","scale","devicefont","bgcolor","wmode","base","swliveconnect","allowfullscreen"];

	for(var op=parseInt(arguments.length);op>minargs;op--) {
		var tmp = arguments[op-1].split(":");
		var tmpname = tmp[0]
		// Añadido
		if(tmpname.toLowerCase() == "flashvars") {

			var tmpvalue = arguments[op-1].slice(10,-1);

			} else {
			var tmpvalue = tmp[1];
		}

		//
		if(allowedObjParams.indexOf(tmpname.toLowerCase()) >-1) {
			objpars += '<param name="'+tmpname+'" value="'+tmpvalue+'">';
		}
		if(allowedEmbParams.indexOf(tmpname.toLowerCase()) >-1) {
			empars += ' '+tmpname+'="'+tmpvalue+'" ';
		}
		if(tmpname.toLowerCase() == "align") {
			align = ' align="'+tmpvalue+'" ';
		}
		if(tmpname.toLowerCase() == "salign") {
			salign = ' salign="'+tmpvalue+'" ';
		}
		if(tmpname.toLowerCase() == "flashvars") {
			if(minversion>=6) flvars = tmpvalue;
			else alert("flashVars support was not available until flash version 6");
		}
	}


	if(checkFlash(minversion) >= minversion){
		if(flaccess_debug==1) alert("minimum flash " + minversion + " is ok, we have version " + checkFlash())

		// splits flash id and node id
		var col = node.split(",");
		var flid = col[0];
		var parentid = col[1];
		if(minversion>=6){
			if(flvars!='') flvars += '&';
			flvars += 'flid='+node;
			objpars += '<param name="flashvars" value="'+flvars+'">';
		}

		// flash object:
		var obj = '<object '+flashid+' id="'+flid+'" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'+width+'" height="'+height+'" '+align+'>';
		obj += objpars;
		obj += '<embed src="'+path+'" name="'+flid+'" id="'+flid+'" width="'+width+'" height="'+height+'"  '+empars+' type="application/x-shockwave-flash" '+align+' '+salign;
		if(minversion>=6) obj += ' flashvars="'+flvars+'" ';
		obj += ' pluginspage="http://www.macromedia.com/go/getflashplayer"></embed>';
		obj += '</object>'

		if(flaccess_debug==1) alert(" flid: " + flid + "\n\n" + obj);

		if(document.getElementById(parentid)) {
			document.getElementById(parentid).innerHTML = obj;
			document.getElementById(parentid).style.height = height+"px";
			document.getElementById(parentid).style.width = width+"px";
		}

	}
	else {
		if(flaccess_debug==1) alert("we have version " + checkFlash() + " and we needed flash " + minversion)
	}

}

// extending Array, by Aaron Boodman (youngpup.net):
Array.prototype.indexOf = function(foo) {
	for (var i = 0; i < this.length; i++)
	if (foo == this[i]) return i;
	return -1;
}

<!--
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}
//-->

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}

<!--
function MM_jumpMenu(targ,selObj,restore){ //v3.0
  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
  if (restore) selObj.selectedIndex=0;
}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}
//-->


/* +++++ AjaxTabs - Script para el cambio de fotos en portada +++++ */
/***********************************************
* Ajax Tabs Content script- © Dynamic Drive DHTML code library (www.dynamicdrive.com)
* This notice MUST stay intact for legal use
* Visit Dynamic Drive at http://www.dynamicdrive.com/ for full source code
***********************************************/


var bustcachevar=1 //bust potential caching of external pages after initial request? (1=yes, 0=no)
var loadstatustext="<div style='color:#b2b8b9; font-size: 11px;'><img src='http://www.marca.com/imgs/home/cargando.gif' /> cargando ...</div>"

////NO NEED TO EDIT BELOW////////////////////////
var loadedobjects=""
var defaultcontentarray=new Object()
var bustcacheparameter=""

function ajaxpage(url, containerid, targetobj){
var page_request = false
if (window.XMLHttpRequest) // if Mozilla, Safari etc
page_request = new XMLHttpRequest()
else if (window.ActiveXObject){ // if IE
try {
page_request = new ActiveXObject("Msxml2.XMLHTTP")
}
catch (e){
try{
page_request = new ActiveXObject("Microsoft.XMLHTTP")
}
catch (e){}
}
}
else
return false
var ullist=targetobj.parentNode.parentNode.getElementsByTagName("li")
for (var i=0; i<ullist.length; i++)
ullist[i].className=""  //deselect all tabs
targetobj.parentNode.className="selected"  //highlight currently clicked on tab
if (url.indexOf("#default")!=-1){ //if simply show default content within container (verus fetch it via ajax)
document.getElementById(containerid).innerHTML=defaultcontentarray[containerid]
return
}
document.getElementById(containerid).innerHTML=loadstatustext
page_request.onreadystatechange=function(){
loadpage(page_request, containerid)
}
if (bustcachevar) //if bust caching of external page
bustcacheparameter=(url.indexOf("?")!=-1)? "&"+new Date().getTime() : "?"+new Date().getTime()
page_request.open('GET', url+bustcacheparameter, true)
page_request.send(null)
}

function loadpage(page_request, containerid){
if (page_request.readyState == 4 && (page_request.status==200 || window.location.href.indexOf("http")==-1))
document.getElementById(containerid).innerHTML=page_request.responseText
}

function loadobjs(revattribute){
if (revattribute!=null && revattribute!=""){ //if "rev" attribute is defined (load external .js or .css files)
var objectlist=revattribute.split(/\s*,\s*/) //split the files and store as array
for (var i=0; i<objectlist.length; i++){
var file=objectlist[i]
var fileref=""
if (loadedobjects.indexOf(file)==-1){ //Check to see if this object has not already been added to page before proceeding
if (file.indexOf(".js")!=-1){ //If object is a js file
fileref=document.createElement('script')
fileref.setAttribute("type","text/javascript");
fileref.setAttribute("src", file);
}
else if (file.indexOf(".css")!=-1){ //If object is a css file
fileref=document.createElement("link")
fileref.setAttribute("rel", "stylesheet");
fileref.setAttribute("type", "text/css");
fileref.setAttribute("href", file);
}
}
if (fileref!=""){
document.getElementsByTagName("head").item(0).appendChild(fileref)
loadedobjects+=file+" " //Remember this object as being already added to page
}
}
}
}

function savedefaultcontent(contentid){// save default ajax tab content
if (typeof defaultcontentarray[contentid]=="undefined") //if default content hasn't already been saved
defaultcontentarray[contentid]=document.getElementById(contentid).innerHTML
}

function startajaxtabs(){
for (var i=0; i<arguments.length; i++){ //loop through passed UL ids
var ulobj=document.getElementById(arguments[i])
var ulist=ulobj.getElementsByTagName("li") //array containing the LI elements within UL
for (var x=0; x<ulist.length; x++){ //loop through each LI element
var ulistlink=ulist[x].getElementsByTagName("a")[0]
if (ulistlink.getAttribute("rel")){
var modifiedurl=ulistlink.getAttribute("href").replace(/^http:\/\/[^\/]+\//i, "http://"+window.location.hostname+"/")
ulistlink.setAttribute("href", modifiedurl) //replace URL's root domain with dynamic root domain, for ajax security sake
savedefaultcontent(ulistlink.getAttribute("rel")) //save default ajax tab content
ulistlink.onclick=function(){
ajaxpage(this.getAttribute("href"), this.getAttribute("rel"), this)
loadobjs(this.getAttribute("rev"))
return false
}
if (ulist[x].className=="selected"){
ajaxpage(ulistlink.getAttribute("href"), ulistlink.getAttribute("rel"), ulistlink) //auto load currenly selected tab content
loadobjs(ulistlink.getAttribute("rev")) //auto load any accompanying .js and .css files
}
}
}
}
}

/* +++++ Inicio script videos zoomin +++++ */

function ftvlaunch(video,quality,pid) {
	  var LeftPosition = (screen.width) ? (screen.width-665)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-430)/2 : 0;
	  var popwin = window.open('http://www.zoomin.tv/videoplayer/index.cfm?id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid,'MTV6_window','toolbar=no,width=665,height=430,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}

function tourlaunchNL(video,quality,pid,langid) {
	  var LeftPosition = (screen.width) ? (screen.width-648)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-460)/2 : 0;
	  var popwin = window.open('http://www.zoomin.tv/tourdefrance2005/videoplayer/index.cfm?id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid + '&lang='+ langid,'MTV6_window','toolbar=no,width=648,height=460,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}

function tourlaunch(video,quality,pid,langid) {
	switch(langid)
	{
		case "1":
			tourlaunchNL(video,quality,pid,"NL");
			break;
		case "2":
			tourlaunchBE(video,quality,pid,"BE");
			break;
	}
}

function tourlaunchBE(video,quality,pid,langid) {
	  var LeftPosition = (screen.width) ? (screen.width-665)/2 : 0;
	  var TopPosition = (screen.height) ? (screen.height-457)/2 : 0;
	  var popwin = window.open('http://www.zoomin.tv/tourdefrance2005/videoplayer/index.cfm?fuseaction=homebe&id='+video+'&mode=normal&quality='+ quality +'&pid='+ pid + '&lang='+ langid,'MTV7_window','toolbar=no,width=665,height=457,top='+TopPosition+',left='+LeftPosition+',directories=no,status=no,statusbar=0,scrollbars=no,resizable=no,menubar=no');
      popwin.focus();
}

/* +++++ Fin script videos zoomin +++++ */
/* +++++ Contador para videos flash de OJD (Provisional) +++++ function contadorVideosOJD (tag) {
	 var pixel = new Image();
	pixel.src = "http://marca.ojdinteractiva.com/cgi-bin/ivw/CP/videos/"+tag +";";
}
*/
function contadorVideosOJD ( seccion, tag ) {
	var pixel = new Image();
	var contenido="";
	if(tag){
		contenido = seccion+ "/"+ tag ;
		pixel.src = "http://marca.ojdinteractiva.com/cgi-bin/ivw/CP/"+contenido +";";
	} else {
		tag = seccion;
		pixel.src = "http://marca.ojdinteractiva.com/cgi-bin/ivw/CP/videos/"+tag +";";
	}
}

/* Este Script genera una ventana nueva con el flashVideo ampliado piezaTV*/
function fullFlashWindow( video, nombre ) { //v1.0
	var width= screen.width;
	var height=screen.height;
	var theURL = "http://www.marca.com/videos/piezaTV2.swf"+video;
	var features = 'scrollbars=0,width='+width+',height='+height+';';
	var ventanaFlash = window.open('',"zoom",features);

  ventanaFlash.document.write('<html><head><title>Video</title>');
  ventanaFlash.document.write('<style>* {margin: 0;padding: 0;}</style>');
  ventanaFlash.document.write('</head><body>');

  if (window.ActiveXObject)
{

// browser supports ActiveX
// Create object element with
// download URL for IE OCX

	ventanaFlash.document.write('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"');
	ventanaFlash.document.write(' codebase="http://download.macromedia.com');
	ventanaFlash.document.write('/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0"');
	ventanaFlash.document.write(' width="100%" height="100%" id="fullScreenSWF">');
	ventanaFlash.document.write(' <param name="movie" value="' + theURL + '" />');
	ventanaFlash.document.write(' <param name="quality" value="high" />');
	ventanaFlash.document.write('<param name="menu" value="false" />');
	ventanaFlash.document.write(' <param name="swliveconnect" value="true" />');
	ventanaFlash.document.write('<\/object>');

} else {

// browser supports Netscape Plugin API

	ventanaFlash.document.write('<object id="fullScreenSWF" data="'+theURL+'"');
	ventanaFlash.document.write(' type="application/x-shockwave-flash"');
	ventanaFlash.document.write(' width="100%" height="100%">');
	ventanaFlash.document.write('<param name="movie" value="'+ theURL +'" />');
	ventanaFlash.document.write('<param name="quality" value="high" />');
	ventanaFlash.document.write('<param name="menu" value="false" />');
	ventanaFlash.document.write('<param name="swliveconnect" value="true" />');
	ventanaFlash.document.write('<p>Necesita Flash para ver este contenido.');
	ventanaFlash.document.write(' Obtenga flash desde esta direccion');
	ventanaFlash.document.write(' <a href="http://www.adobe.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash">click aquÃ­<\/a>.');
	ventanaFlash.document.write('<\/p>');
	ventanaFlash.document.write('<\/object>');
}
  ventanaFlash.document.write('</body></html>');
}

// Menu motor

<!--
function montre(id) {
var d = document.getElementById(id);
	for (var i = 1; i<=10; i++) {
		if (document.getElementById('seccion'+i)) {document.getElementById('seccion'+i).style.display='none';}
	}
if (d) {d.style.display='block';}
}

<!-- Principio bootEmail
	function flip(rid)
	{
	    current=(document.getElementById(rid).style.display == 'none') ? 'block' : 'none';
	    document.getElementById(rid).style.display = current;
	}
	function mailnobot(nm,dm)
	{
	   mailurl = "mailto:" + nm + "@" + dm;
	   window.location = mailurl;
	}
// Fin bootEmail -->