//
// Nombre:      comunes.js
// Version:     20061019
// Descripcion: Funciones comunes JS
// Copyright:   (c) Mundinteractivos
//
//////
//
// 20061019 : Recolocacion del fichero en el servidor y cambio de nombre.
//            Cambio del path del fichero "noflashc.swf".
// 20060802 : Definida nueva funcion EscribeReproductorFlash para usar el reproductor elastico de audio/video
// 20060517 : Aniadidas funciones para insertar objetos media player y applets
// 20060504 : Se permite devolver el codigo a la llamada de la funcion EscribeBloquePublicidadFlash pasando el parametro retornacodigo a true
// 20051110 : Se aniaden funciones para nuevos disenios css
// 20051021 : Modificacion funcion wRefresh para acceso a metodo scrolltop
// 20050715 : Se habilita soporte para version 8 de flash (damos margen hasta la 9)
// 20050512 : Se utiliza el nombre del swf para identificar del objeto flash o el que se pase por parametro idflash
// 20050319 : Se incluyen funciones para el sky deslizable y click en gifs de las creatividades
// 20050310 : Mejorada la deteccion de las versiones flash 5,6 y 7 en explorer
// 20050124 : Elimino la segmentacion para navegadores khtml
// 20050114 : Paso de parametro al tag del flash en EscribreGraficoFlash 
//            con la url al directorio que contine en flash que se inserta
// 20040401 : Aniadida justificacion en funcion EscribeGraficoFlash
//	      y modificada la salida en caso de no disponer de flash
//
//////

//Notifica la inclusion o no del codigo
var JSIncludePubli = true;

var JSflashVersion = 0;
var JSflashVersion_DONTKNOW = -1;

function getFlashVersion() {
	if(JSflashVersion>0){return JSflashVersion;}
	var agent = navigator.userAgent.toLowerCase(); 

   // NS3 needs JSflashVersion to be a local variable
   if (agent.indexOf("mozilla/3") != -1 && agent.indexOf("msie") == -1) {
      JSflashVersion = 0;
   }
   
	// NS3+, Opera3+, IE5+ Mac (support plugin array):  check for Flash plugin in plugin array
	if (navigator.plugins != null && navigator.plugins.length > 0) {
		var flashPlugin = navigator.plugins['Shockwave Flash'];
		if (typeof flashPlugin == 'object') { 
			if (flashPlugin.description.indexOf('10.') != -1) JSflashVersion = 10;
			else if (flashPlugin.description.indexOf('9.') != -1) JSflashVersion = 9;
			else if (flashPlugin.description.indexOf('8.') != -1) JSflashVersion = 8;
			else if (flashPlugin.description.indexOf('7.') != -1) JSflashVersion = 7;
			else if (flashPlugin.description.indexOf('6.') != -1) JSflashVersion = 6;
			else if (flashPlugin.description.indexOf('5.') != -1) JSflashVersion = 5;
			else if (flashPlugin.description.indexOf('4.') != -1) JSflashVersion = 4;
			else if (flashPlugin.description.indexOf('3.') != -1) JSflashVersion = 3;
		}
	}

	// IE4+ Win32:  attempt to create an ActiveX object using VBScript
	else if (agent.indexOf("msie") != -1 && parseInt(navigator.appVersion) >= 4 && agent.indexOf("win")!=-1 && agent.indexOf("16bit")==-1) {
	   document.write('<scr' + 'ipt language="VBScript"\> \n');
		document.write('on error resume next \n');
		document.write('dim obFlash \n');
		document.write('set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.10") \n');
		document.write('if IsObject(obFlash) then \n');
		document.write('JSflashVersion = 10 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.9") end if \n');
		document.write('if JSflashVersion < 10 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 9 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.8") end if \n');
		document.write('if JSflashVersion < 9 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 8 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.7") end if \n');
		document.write('if JSflashVersion < 8 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 7 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.6") end if \n');
		document.write('if JSflashVersion < 7 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 6 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.5") end if \n');
		document.write('if JSflashVersion < 6 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 5 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.4") end if \n');
		document.write('if JSflashVersion < 5 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 4 \n');
		document.write('else set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash.3") end if \n');
		document.write('if JSflashVersion < 4 and IsObject(obFlash) then \n');
		document.write('JSflashVersion = 3 \n');
		document.write('end if \n');
		//document.write('if JSFlashVersion > 4 then \n');
		//document.write('Set obFlash = CreateObject("ShockwaveFlash.ShockwaveFlash") \n');
		//document.write('JSFlashVersion = Left(Hex(obFlash.FlashVersion),1) \n');
		//document.write('end if \n');
		document.write('</scr' + 'ipt\> \n');
  }
		
	// WebTV 2.5 supports flash 3
	else if (agent.indexOf("webtv/2.5") != -1) JSflashVersion = 3;

	// older WebTV supports flash 2
	else if (agent.indexOf("webtv") != -1) JSflashVersion = 2;

	// Can't detect in all other cases
	else {
		JSflashVersion = JSflashVersion_DONTKNOW;
	}

	return JSflashVersion;
}

function flash_id(cadena)
// devuelve un identificador para el objeto flash basado en el nombre del swf.
//nos quedamos con el nombre del swf sin path ni extension
{
	var patron = /.*\/([\w-]+)\.swf$/i;
	if (patron.test(cadena))
	{
		return (RegExp.$1);
	}
	return "PeliculaFlash";
}

// Abre una nueva ventana cada vez que se pide
function abre_ventana_foto_grande(url,params)
{
	var wname = Math.round(Math.random() * 100000000);
	window.open(url,wname,params);
}



//Escritura bloque flash para publicidad
//archivoswf: url al archivo swf
//cadenaclicktag: parametros  que se le pasa al swf (cadena completa desde ? incluido)
//ancho: dimension x
//alto: dimension y
//wmode:    window, opaque, transparent  Uno de ellos
//idflash : Nombre del objeto para referenciarlo desde js
//retornacodigo : booleano que indica si el objeto se escribe o se devuelve una cadena con el codigo
function EscribeBloquePublicidadFlash(archivoswf, cadenaclicktag, ancho, alto, wmode, idflash, retornacodigo, bgcolor)
{
	if (idflash == "")
	{
		idflash = flash_id(archivoswf);
	}
	if (wmode != "transparent")
	{
		wmode="opaque";
	}
	var cadena = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' + 'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' + 'width="' + ancho + '" height="' + alto + '" id="' + idflash +'">\n';
	cadena = cadena + '<param name="movie" value="' + archivoswf + cadenaclicktag + '" />\n'; 
	cadena = cadena + '<param name="wmode" value="' + wmode +'" />\n';
	cadena = cadena + '<param name="quality" value="high" />\n';
	var colorstr = "";
        if (bgcolor)
        {
                cadena = cadena + '<param name="bgcolor" value="' + bgcolor +'" />\n';
                colorstr = 'bgcolor=' + bgcolor + '"'
        }
        cadena = cadena + '<embed wmode="' + wmode + '" src="' + archivoswf + cadenaclicktag + '" quality="high" ' + colorstr + ' menu="false" width="' + ancho + '" height="' + alto + '" name="' + idflash + '" type="application/x-shockwave-flash"' + ' pluginspage="http://www.macromedia.com/go/getflashplayer">\n';
	cadena = cadena + '</embed>\n';
	cadena = cadena + '</object>\n';
	if (retornacodigo)
	{
		return cadena;
	}
	else
	{
		document.write(cadena);
	}
}

//Utilizada en el caso del desplegable para salvar la patente de EOLAS
// Rellena el elemento id, con el codigo code
function writeCodeToElement(id, code)
{
	var bloque = (typeof (id) == 'string') ? document.getElementById(id) : id;
	bloque.innerHTML = code;
}


//Escritura bloque flash para graficos
//archivoswf: url al archivo swf
//cadenaclicktag: parametros  que se le pasa al swf (cadena completa desde ? incluido)
//ancho: dimension x
//alto: dimension y
//wmode:    window (opaco) transparent (transparente)
//version: version para la que ha sido creado el swf
//justificacion : alineacion del grafico : right, left, center
function EscribeGraficoFlash(archivoswf, cadenaclicktag, ancho, alto, wmode,version,justificacion)
{

	var LocalVersion = getFlashVersion();
	var cadena;
	if (wmode != "transparent")
        {
                wmode="opaque";
        }

	if (LocalVersion > 0)
	{
		//Si no se dispone de la version adecuada mostramos un flash version 1, respetando las dimensiones 
		if (LocalVersion < version)
		{
			archivoswf = "http://cache.elmundo.es/js/data/noflashc.swf";
			cadenaclicktag = "?clickTag=http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
			//ancho = 300;
			//alto = 300;
		}
		//Escribimos el bloque
		//Reparamos la url al swf si es www.telva.com
		archivoswf = archivoswf.replace(/http:\/\/www\.telva\.com/i,"http:\/\/estaticos\.telva\.com");
		//Extraemos la url del swf
		var urlflash = "";
		var re_url = /(http:\/\/.*)\/[\w-]+\.swf$/i;
		
		if ( re_url.test(archivoswf) )
		{
			urlflash = RegExp.$1;
		}
		var idflash = flash_id(archivoswf);
		cadena= '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' + 
			'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
			'width="' + ancho +
			'" height="' + alto +
			'" align="' + justificacion +
			'" id="' + idflash + '">\n';
		cadena = cadena + '<param name="movie" value="' + archivoswf + cadenaclicktag + '" />\n'; 
		cadena = cadena + '<param name="wmode" value="' + wmode + '" />\n';
		cadena = cadena + '<param name="quality" value="high" />\n';
		cadena = cadena + '<param name="menu" value="false" />\n';
		cadena = cadena + '<param name="allowScriptAccess" value="always" />\n';
		cadena = cadena + '<param name="flashvars" value="urldirectorioswf=' + urlflash + '" />\n';
		cadena = cadena + '<embed wmode="' + wmode + '" src="' + archivoswf + cadenaclicktag + '" quality="high" menu="false" width="' + ancho + '" height="' + alto + '" align="' + justificacion + '" name="' + idflash + '" flashvars="urldirectorioswf=' + urlflash + '" type="application/x-shockwave-flash" ' + ' pluginspage="http://www.macromedia.com/go/getflashplayer" allowScriptAccess="always">\n';
		cadena = cadena + '</embed>\n';
		cadena = cadena + '</object>\n';
		document.write(cadena);
	}
	else
	{
		cadena = '<table cellspacing="0" cellpadding="10" bgcolor="eeeeee" border="0" width="'+ ancho +'" height="'+ alto +'" align="'+ justificacion +'"><tr><td align="center"><a href="http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Instale el plug-in de Flash para ver correctamente este contenido</a></td></tr></table>\n'
		document.write(cadena);
	}
}

//Escritura bloque para videos
//archivowmv: url al archivo vmv
//ancho: dimension x
//alto: dimension y
//justificacion : alineacion del grafico : right, left, center
//autostart : true, false
function EscribeObjectVideo(archivowmv, ancho, alto, justificacion, autostart, retornaCodigo)
{

	cadena= '<object CLASSID="CLSID:6BF52A52-394A-11d3-B153-00C04F79FAA6" id="reproductorwmv" ' + 
		'width="' + ancho +
		'" height="' + alto +
		'" align="' + justificacion +
		'" type="application/x-oleobject">\n';
	cadena = cadena + '<param name="url" value="' + archivowmv + '" />\n'; 
	cadena = cadena + '<param name="AutoStart" value="' + autostart + '" />\n';
	cadena = cadena + '<embed type="application/x-mplayer2" src="' + archivowmv + '" width="' + ancho;
	cadena = cadena + '" height="' + alto + '" align="' + justificacion + '" autostart="' + autostart + '">\n';
	cadena = cadena + '</embed>\n';
	cadena = cadena + '</object>\n';
	
	//Escribimos el object
        if (retornaCodigo)
        {
                return cadena;

        }
        else
        {
                document.write(cadena);
        }
}




//
//Escritura bloque applet de java
//

function CParametro(n, v) {
    this.nombre = n;
    this.valor = v;
}


function EscribeAppletJava(valor_code, valor_codebase, valor_name, valor_width, valor_height, array_parametros_applet) 
{
 
  var cadena= '<applet code="' + valor_code + '" codebase="' + valor_codebase + '" name="' + valor_name + 
		'" width=' + valor_width + ' height=' + valor_height + ' MAYSCRIPT>\n';
 
  // Se generan los parametros
  var numero_parametros = array_parametros_applet.length;
 
  for (var i=0; i<numero_parametros; i++){
    nuevo_parametro = array_parametros_applet[i];
 
    // Se obtienen el nombre y el valor de cada parametro
    nombre_parametro = nuevo_parametro.nombre;
    valor_parametro  = nuevo_parametro.valor;
    cadena = cadena + '<param name="' + nombre_parametro + '" value="' + valor_parametro + '" />\n';
 
  }
 
  cadena = cadena + 'Java support is required for panoramic images.\n';
  cadena = cadena + '</applet>\n';
 
  // Se escribe la cadena
  document.write(cadena);
}



//Funcion para el click del anunciante
function clickAnunciante(url)
{
        //Caso de existir url de enlace
        if (url.indexOf("+http%3A//+") == -1)
        {
                window.open(url);
        }
}

//Codigo para creatividad de 240x500 deslizable
function Is ()
{   // convert all characters to lowercase to simplify testing
    var agt=navigator.userAgent.toLowerCase();

    this.major = parseInt(navigator.appVersion);
    this.minor = parseFloat(navigator.appVersion);

    this.nav  = ((agt.indexOf('mozilla')!=-1) && (agt.indexOf('spoofer')==-1)
                && (agt.indexOf('compatible') == -1) && (agt.indexOf('opera')==-1)
                && (agt.indexOf('webtv')==-1) && (agt.indexOf('hotjava')==-1));
    this.nav2 = (this.nav && (this.major == 2));
    this.nav3 = (this.nav && (this.major == 3));
    this.nav4 = (this.nav && (this.major == 4));
    this.nav4up = (this.nav && (this.major >= 4));
    this.navonly      = (this.nav && ((agt.indexOf(";nav") != -1) ||
                          (agt.indexOf("; nav") != -1)) );
    this.nav6 = (this.nav && (this.major == 5));
    this.nav6up = (this.nav && (this.major >= 5));
    this.gecko = (agt.indexOf('gecko') != -1);


    this.ie     = ((agt.indexOf("msie") != -1) && (agt.indexOf("opera") == -1));
    this.ie3    = (this.ie && (this.major < 4));
    this.ie4    = (this.ie && (this.major == 4) && (agt.indexOf("msie 4")!=-1) );
    this.ie4up  = (this.ie  && (this.major >= 4));
    this.ie5    = (this.ie && (this.major == 4) && (agt.indexOf("msie 5.0")!=-1) );
    this.ie5_5  = (this.ie && (this.major == 4) && (agt.indexOf("msie 5.5") !=-1));
    this.ie5up  = (this.ie  && !this.ie3 && !this.ie4);
    this.ie5_5up =(this.ie && !this.ie3 && !this.ie4 && !this.ie5);
    this.ie6    = (this.ie && (this.major == 4) && (agt.indexOf("msie 6.")!=-1) );
    this.ie6up  = (this.ie  && !this.ie3 && !this.ie4 && !this.ie5 && !this.ie5_5);
    this.mac    = (agt.indexOf("mac")!=-1);
    this.CSS1 = (document.compatMode == "CSS1Compat");
}

var is;
var isIE3Mac = false;
// this section is designed specifically for IE3 for the Mac

if ((navigator.appVersion.indexOf("Mac")!=-1) && (navigator.userAgent.indexOf("MSIE")!=-1) && 
(parseInt(navigator.appVersion)==3))
       isIE3Mac = true;
else   is = new Is(); 

function GetObjectStyle(objectId) {
    // cross-browser function to get an object's style object given its id
    if (document.layers && document.layers[objectId]) {
        // NN 4 DOM.. note: this won't find nested layers
        return document.layers[objectId];
    }else  if(document.getElementById && document.getElementById(objectId)) {
        // W3C DOM
        return document.getElementById(objectId).style;
    } else if (document.all && document.all(objectId)) {
        // MSIE 4 DOM
        return document.all(objectId).style;
    } else {
        return false;
    }
} // GetObjectStyle

//Opciones de cerrar, maximizar, minimizar publicidad en Netscape
function cerrarPubNetscape(){
	document.Flotante.visibility="hidden";
}

function miniPubNetscape(){
	document.Flotante.resizeTo(240,11);	
}

function maxiPubNetscape(){
	document.Flotante.resizeTo(240,515);	
}

//Opciones de cerrar, maximizar, minimizar publicidad en Explorer

function cerrarPubExplorer(capa){
	if (document.all)
	{
		document.all(capa).style.visibility="hidden";
		document.all("anunciante").style.visibility="hidden";
	}
	else
	{
		 document.getElementById(capa).style.visibility="hidden";
		 document.getElementById("anunciante").style.visibility="hidden";
	}
}

function miniPubExplorer(capa){
	if (document.all)
	{
		document.all(capa).style.clip = 'rect('+0+' '+240+' '+11+' '+0+')';
	}
	else
	{
		//document.getElementById(capa).style.clip = 
		document.getElementById("anunciante").style.visibility="hidden";
	}
}

function maxiPubExplorer(capa){
	if (document.all)
	{
		document.all(capa).style.clip = 'rect('+0+' '+240+' '+515+' '+0+')';
	}
	else
	{
		document.getElementById("anunciante").style.visibility="visible";
	}
}

function wRefresh() 
{
	var distanciaTop=0;
	if (document.documentElement && document.documentElement.scrollTop)
	{
		distanciaTop = document.documentElement.scrollTop;
	}
	else
	{
		if (window.pageYOffset)
		{
			distanciaTop = window.pageYOffset;
		}
		else
		{
			distanciaTop = document.body.scrollTop;
		}
	}
	
	wMark.top = (posY + distanciaTop) + 'px';
}


//////////////////////////////////////////////////////////////////////////

function setVals() {

//barW = 0; // scrollbar compensation for PC Nav
//barH = 0;
	if (navDOM)
	{
		//if (document.height > innerHeight) barW = 20;
		//	if (document.width > innerWidth) barH = 20;
	}
	else 
	{
		innerWidth = document.body.clientWidth;
		innerHeight = document.body.clientHeight;
	}
	
	posX = 250;
	if (primeravez)
	{
		posY = altura - 2;
	}
	else
	{
		posY = 2;
	}
	primeravez = false;
	wRefresh();
}

function pinta()
{
	
	if  ( posY >= 29 )
	{
		posY-=20;
		setTimeout('pinta()',30);
	}
	else
	{
		posY = 2;	
	}
	if ((is.nav4 || is.nav4up) && posY<30 && !(is.CSS1))
	{
		markid = setInterval("wRefresh()",markRefresh);
	}
	wRefresh();
}

function markMe() {
	if (is.nav4)
	{
		document.layers["Flotante"].visibility = "show";
	}
	else
	{
		var ObjectStyleBarra = GetObjectStyle("Flotante");
		var ObjectStyleCreatividad = GetObjectStyle("anunciante");
    		if (ObjectStyleBarra) {  ObjectStyleBarra.visibility = "visible";  }
		if (ObjectStyleCreatividad) {  ObjectStyleCreatividad.visibility = "visible";  }
	}
	if ( (is.ie5up ||  is.nav4up)  && !(is.mac))
	{
		setVals();
		if (!is.CSS1)
		{
			window.onresize=setVals;
			window.onscroll=setVals;
		}
		pinta();
	}
} 


// Aumentar y disminuir letra

var tamanoLetrapordefecto = 5;
var tamanoLetra = tamanoLetrapordefecto;
var tamanoLetraminimo = 3;
var tamanoLetramaximo = 7;
var identidadLetra;

function aumentaLetra() {
    if (tamanoLetra < tamanoLetramaximo) {
    tamanoLetra += 1;
    identidadLetra = document.getElementById('tamano');
    identidadLetra.className = 'tamanoletra' + tamanoLetra;
    }
}

function disminuyeLetra() {
    if (tamanoLetra > tamanoLetraminimo) {
    tamanoLetra -= 1;
    identidadLetra = document.getElementById('tamano');
    identidadLetra.className = 'tamanoletra' + tamanoLetra;
    }
}

// FIN Aumentar y disminuir letra

function imprimir() {
    window.print();
}


//Menu desplegable Otras Secciones

function despliegaOS(estado) {

    if (document.getElementById) {
        var boton = document.getElementById("boton");
        boton.setAttribute("href", "#");
        var menu = document.getElementById("caja").firstChild;
        while (menu.nodeType != 1) {
        menu = menu.nextSibling;
    }
    ponClaseOS(boton, estado);
    ponClaseOS(menu, estado);
    }
}

function despliegaOSPortada(estado) {
     
     if (document.getElementById) {
         var boton = document.getElementById("boton");
         boton.setAttribute("href", "#");
         var menuDiv = document.getElementById("caja").firstChild;
         while (menuDiv.nodeType != 1) {
         menuDiv = menuDiv.nextSibling;
      }
         var botonDiv = document.getElementById("boton").firstChild;
         while (botonDiv.nodeType != 1) {
         botonDiv = botonDiv.nextSibling;
      }     
     ponClaseOS(botonDiv, estado);
     ponClaseOS(menuDiv, estado);
     }
 }

function obtenClaseOS(elemento) {

    if (elemento.getAttribute("class")) {
        return elemento.getAttribute("class");
    }
    
    else
    
    if (elemento.getAttribute("className")) {
        return elemento.getAttribute("className");
    }
}


function ponClaseOS(elemento, valorClase) {

    if (elemento.setAttribute("class", valorClase)) {
        elemento.setAttribute("class", valorClase);
    }
    
    else
    
    if (elemento.setAttribute("className", valorClase)) {
    elemento.setAttribute("className", valorClase);
    }
}

// FIN Menu desplegable Otras Secciones


// Estadisticas de resoluciones
function inserta_pixel_resoluciones()
{
        var screenWidth = screen.width;
        var screenHeight = screen.height;

        var browserWidth;
        var browserHeight;

	var random = Math.random() * 1000000000;
	var re = /\s/g;
	var agent = navigator.userAgent.toLowerCase().replace(re, "_");
	
        if (document.all)
        {
                browserWidth = document.body.clientWidth;
                browserHeight = document.body.clientHeight;
        }
        else
        {
                browserWidth = innerWidth;
                browserHeight = innerHeight;
        }
	document.write('<!--- ##IBEXCLU ---><!-- INICIO PIXELCOUNTER --><div style="position:absolute;top:0px;left:0px;width:1px;height:1px;visibility:hidden;z-Index:2"><img src="http://anapixel.elmundo.es/banner.gif?campaign=generico&group=generico&page=generico&creativity=generico&endpartialtimestamp=77359400&sign=BA4A9F01B3AFADEF9D0003A96FBDEF6D&type='+
	escape('S' + screenWidth + 'x' + screenHeight + '.B' + browserWidth + 'x' + browserHeight + ".U" + agent)+
	'&rnd=' + random + '" width="1" height="1" border="0" alt="anapixel" /></div><!-- FIN PIXELCOUNTER --><!--- ##FBEXCLU --->');
}

//inserta_pixel_resoluciones();


// Estadisticas de version de flash
function inserta_pixel_versionflash()
{
	var version = getFlashVersion();
	var random = Math.random() * 1000000000;
 	document.write('<!--- ##IBEXCLU ---><!-- INICIO PIXELCOUNTER --><div style="position:absolute;top:0px;left:0px;width:1px;height:1px;visibility:hidden;z-Index:2"><img src="http://anapixel.elmundo.es/banner.gif?campaign=generico&group=generico&page=generico&creativity=generico&endpartialtimestamp=77359400&sign=BA4A9F01B3AFADEF9D0003A96FBDEF6D&type=flashversion'+
	version + '&rnd=' + random + '" width="1" height="1" border="0" alt="anapixel" /></div><!-- FIN PIXELCOUNTER --><!--- ##FBEXCLU --->');
}

//inserta_pixel_versionflash();

function EscribeReproductorFlash(archivoswf, parametros, ancho, alto, retornaCodigo)
{
    var LocalVersion = getFlashVersion();
    var cadena = "";

    if (LocalVersion > 0)
    {
        // Si no se dispone de la version adecuada mostramos un flash version 1, respetando las dimensiones
        if (LocalVersion < 7)
        {
            archivoswf = "http://cache.elmundo.es/js/data/noflashc.swf";
            parametros = "?clickTag=http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
            //ancho = 300;
            //alto = 300;
        }
	else
	{
		if (LocalVersion > 7)
		{
			archivoswf = archivoswf.replace(/reproductorelastico\.swf/, "reproductorelastico_flash8\.swf");
		}
	}
        // Escribimos el bloque
        // Reparamos la url al swf si es www.telva.com
        archivoswf = archivoswf.replace(/http:\/\/www\.telva\.com/i, "http:\/\/estaticos\.telva\.com");
        // Extraemos la url del swf
        var urlflash = "";
        var re_url = /(http:\/\/.*)\/[w-]+\.swf$/i;

        if ( re_url.test(archivoswf) )
        {
            urlflash = RegExp.$1;
        }

        var idflash = flash_id(archivoswf);
        cadena = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' +
                'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
                'width="' + ancho +
                '" height="' + alto +
                '" id="' + idflash + '">\n';
        cadena = cadena + '<param name="movie" value="' + archivoswf + parametros + '" />\n';
        cadena = cadena + '<param name="quality" value="high" />\n';
        //cadena = cadena + '<param name="scale" value="exactfit" />\n';
        cadena = cadena + '<param name="allowFullScreen" value="true" />\n';
        cadena = cadena + '<param name="menu" value="false" />\n';
        cadena = cadena + '<param name="allowScriptAccess" value="always"/>\n';
        cadena = cadena + '<param name="flashvars" value="urldirectorioswf=' + urlflash + '" />\n';
        cadena = cadena + '<embed src="' + archivoswf +
                parametros +
                '" quality="high" menu="false" allowFullScreen="true" width="' + ancho +
                '" height="' + alto +
                '" name="' + idflash +
                '" allowScriptAccess=always "' + 
                '" flashvars="urldirectorioswf=' + urlflash +
                '" type="application/x-shockwave-flash" ' +
                ' pluginspage="http://www.macromedia.com/go/getflashplayer">\n';
        cadena = cadena + '</embed>\n';
        cadena = cadena + '</object>\n';
    }
    else
    {
        cadena = '<table cellspacing="0" cellpadding="10" bgcolor="eeeeee" border="0" width="' + ancho +
                '" height="' + alto +
                '"><tr><td align="center"><a href="http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Instale el plug-in de Flash para ver correctamente este contenido</a></td></tr></table>\n'
    }
    if (retornaCodigo)
    {
            return cadena;
    }
    else
    {
            document.write(cadena);
    }
}

function EscribeReproductorFlashP(archivoswf, parametros, ancho, alto, retornaCodigo)
{
    var LocalVersion = getFlashVersion();
    var cadena = "";

    if (LocalVersion > 0)
    {
        // Si no se dispone de la version adecuada mostramos un flash version 1, respetando las dimensiones
        if (LocalVersion < 7)
        {
            archivoswf = "http://cache.elmundo.es/js/data/noflashc.swf";
            parametros = "?clickTag=http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash";
            //ancho = 300;
            //alto = 300;
        }
        // Escribimos el bloque
        // Reparamos la url al swf si es www.telva.com
        archivoswf = archivoswf.replace(/http:\/\/www\.telva\.com/i, "http:\/\/estaticos\.telva\.com");
        // Extraemos la url del swf
        var urlflash = "";
        var re_url = /(http:\/\/.*)\/[w-]+\.swf$/i;

        if ( re_url.test(archivoswf) )
        {
            urlflash = RegExp.$1;
        }

        var idflash = flash_id(archivoswf);
        cadena = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" ' +
                'codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" ' +
                'width="' + ancho +
                '" height="' + alto +
                '" id="' + idflash + '">\n';
        cadena = cadena + '<param name="movie" value="' + archivoswf + parametros + '" />\n';
        cadena = cadena + '<param name="quality" value="high" />\n';
        //cadena = cadena + '<param name="scale" value="exactfit" />\n';
        cadena = cadena + '<param name="allowFullScreen" value="true" />\n';
        cadena = cadena + '<param name="menu" value="false" />\n';
        cadena = cadena + '<param name="scale" value="exactfit" />\n';
        cadena = cadena + '<param name="allowScriptAccess" value="always"/>\n';
        cadena = cadena + '<param name="flashvars" value="urldirectorioswf=' + urlflash + '" />\n';
        cadena = cadena + '<embed src="' + archivoswf +
                parametros +
                '" quality="high" menu="false" allowFullScreen="true" width="' + ancho +
                '" height="' + alto +
                '" name="' + idflash +
                '" allowScriptAccess="always"  scale="exactfit" flashvars="urldirectorioswf=' + urlflash +
                '" type="application/x-shockwave-flash" ' +
                ' pluginspage="http://www.macromedia.com/go/getflashplayer">\n';
        cadena = cadena + '</embed>\n';
        cadena = cadena + '</object>\n';
    }
    else
    {
        cadena = '<table cellspacing="0" cellpadding="10" bgcolor="eeeeee" border="0" width="' + ancho +
                '" height="' + alto +
                '"><tr><td align="center"><a href="http://www.macromedia.com/shockwave/download/download.cgi?P1_Prod_Version=ShockwaveFlash" target="_blank">Instale el plug-in de Flash para ver correctamente este contenido</a></td></tr></table>\n'
    }
    if (retornaCodigo)
    {
            return cadena;
    }
    else
    {
            document.write(cadena);
    }
}
