	/******** FOTO NOTICIA ********/

	var fotosPag = 5; // Número de fotos que sale en la paginación.
	function fotoNoticia(id,num,numTotal) {
		fotosN = document.getElementsByTagName('div');
		fotoOn = 1;
		fotoExp = new RegExp(id + "-");
		for(i=0;i<fotosN.length;i++) {
			if(fotosN[i].id.indexOf(id) == 0) {
				fotoOn = parseInt(fotosN[i].id.replace(fotoExp, ""));
				if(fotosN[i].style.display == "") {
					if(num == '+') num = fotoOn + 1;
					if(num == '-') num = fotoOn - 1;
				}
				fotosN[i].style.display = 'none';
			}
		}
		if(num == 0) num = numTotal;
		if((num > numTotal) || isNaN(num)) num = 1;
		if(fotoN = document.getElementById(id + '-' + num)) fotoN.style.display = "";
		indicePag = Math.ceil(num/fotosPag) - 1;
		for(i=1;i<=fotosPag;i++) {
			if(pag = document.getElementById(id + '-pag-' + i)) {
				pag.className = "";
				pagNum = i + (indicePag * fotosPag);
				if(pagNum > numTotal) {
					pag.innerHTML = "&nbsp;&nbsp;";
					pag.href = "#";
				}
				else {
					pag.innerHTML = i + (indicePag * fotosPag);
					pag.href = "JavaScript:fotoNoticia('" + id + "'," + pagNum + "," + numTotal + ");";
				}
			}
		}
		numPag = ((num - 1) % fotosPag) + 1;
		if(pag = document.getElementById(id + '-pag-' + numPag)) pag.className = "activo";
	}

	/******** FIN FOTO NOTICIA ********/


	/******** MODULOS METHODE ********/

	function canalesHoy(id,num,color) {
		colorPestana = ""
		if(!isNaN(color))
			colorPestana = " pestcanal-" + color;
		pestanaOn = id + "-pestana-" + num;
		contenidoOn = id + "-contenido-" + num;
		bottomOn = id + "-bottom-" + num;
		contenidosN = document.getElementsByTagName('div');
		for(i=0;i<contenidosN.length;i++) {
			if(contenidosN[i].id.indexOf(id) == 0) {
				if((contenidosN[i].id == contenidoOn) || (contenidosN[i].id == bottomOn))
					contenidosN[i].style.display = "";
				else
					contenidosN[i].style.display = "none";
			}
		}
		pestanasN = document.getElementsByTagName('a');
		for(i=0;i<pestanasN.length;i++) {
			if(pestanasN[i].id.indexOf(id) == 0) {
				if(pestanasN[i].id == pestanaOn)
					pestanasN[i].className = "activo";
				else
					pestanasN[i].className = "";
			}
		}
		if(objColor = document.getElementById('color-' + id))
			objColor.className = "modulocanaleshoy" + colorPestana;
	}

	function canalesClasi(id,canal) {
		contenidosN = document.getElementsByTagName('div');
		for(i=0;i<contenidosN.length;i++) {
			if(contenidosN[i].id.indexOf(id) == 0) {
				if(contenidosN[i].id == id + "-" + canal)
					contenidosN[i].style.display = "";
				else
					contenidosN[i].style.display = "none";
			}
		}
		pestanasN = document.getElementsByTagName('a');
		for(i=0;i<pestanasN.length;i++) {
			if(pestanasN[i].id.indexOf(id) == 0) {
				if(pestanasN[i].id == id + "-pestana-" + canal)
					pestanasN[i].className = "activo " + canal;
				else
					pestanasN[i].className = "";
			}
		}
	}

	function canalesInfo(id,num,numTotal) {
		contenidoOn = 1;
		contenidoExp = new RegExp(id + "-(contenido|fotografia)-");
		contenidosN = document.getElementsByTagName('div');
		for(i=0;i<contenidosN.length;i++) {
			if(contenidosN[i].id.indexOf(id) == 0) {
				contenidoOn = parseInt(contenidosN[i].id.replace(contenidoExp, ""));
				if(contenidosN[i].style.display == "") {
					if(num == '+') num = contenidoOn + 1;
					if(num == '-') num = contenidoOn - 1;
				}
				contenidosN[i].style.display = "none";
			}
		}
		if(num == 0) num = numTotal;
		if((num > numTotal) || isNaN(num)) num = 1;
		if(contenidoN = document.getElementById(id + '-fotografia-' + num)) contenidoN.style.display = "";
		if(contenidoN = document.getElementById(id + '-contenido-' + num)) contenidoN.style.display = "";
		numTxt = num.toString();
		if(num < 10)
			numTxt = "0" + numTxt;
		if(contenidoN = document.getElementById(id + '-num')) contenidoN.innerHTML = numTxt;
	}

	function servicios(id,num) {
		contenidosN = document.getElementsByTagName('div');
		for(i=0;i<contenidosN.length;i++) {
			if(contenidosN[i].id.indexOf(id + "-contenido-") == 0) {
				if(contenidosN[i].id == id + "-contenido-" + num)
					contenidosN[i].style.display = "";
				else
					contenidosN[i].style.display = "none";
			}
		}
		pestanasN = document.getElementsByTagName('li');
		for(i=0;i<pestanasN.length;i++) {
			if(pestanasN[i].id.indexOf(id + "-pestana-") == 0) {
				if(pestanasN[i].id == id + "-pestana-" + num)
					pestanasN[i].className = "activa";
				else
					pestanasN[i].className = "";
			}
		}
	}

	/******** MODULOS METHODE  ********/


	/******** GOOGLE  ********/
	function cs() {window.status=''};
	function ss(urlVisible){window.status=urlVisible;return true;};
	
	function google_ad_request_done(google_ads) {
		var i;
		var publi ='';
		accip = "off";
		if(google_ads.length > 0) {
			publi+='<div class="adds">';
			publi+='<div class="estilo_tit">Anuncios <strong>Google</strong></div>';
			publi+='<table class="addscontent" cellpadding="0" cellspacing="0">';
			for(i = 0; i < google_ads.length; ++i) {
				publi+='<tr>';
				publi+='<td class="estilo_txt">';
				publi+='<a href=\''+ google_ads[i].url + '\' target="_blank" onMouseOver="return ss(\'' + google_ads[i].visible_url + '\')" onMouseOut="cs()">';

				publi+='<span class="estilo_lnk">';
				publi+=google_ads[i].line1;
				publi+='</span>';
				publi+='<span class="estilo_descripcion">';
				publi+=google_ads[i].line2 + '&nbsp;';
				publi+=google_ads[i].line3 + '&nbsp;';
				publi+='</span>';
				publi+='<span class="estilo_url">';
				publi+=google_ads[i].visible_url;
				publi+='</span></a></td></tr>';
			}
			publi+='</table></div>';
			if(contNoxtrum = window.document.getElementById("publi1_noxtrum"))
				contNoxtrum.innerHTML = publi;
		}
	}
	/******** GOOGLE  ********/
	
	
	/******** NOXTRUM *************/

	/* function ss(w){window.status=w;return true}
	function cs(){window.status=''} */
	function ga(o,e,cu){if(document.getElementById){a=o.id.substring(1);p="";g=e.target;if(g){t=g.id;f=g.parentNode;if(f)p=f.id}else t=e.srcElement.id;if(t==a||p==a)return;window.open(document.getElementById(a).href, "new"+cu, "");}}

	function visualisar_publicidad_contexutal(pub_contex) {
		var i;
		var publi ='';
		if(pub_contex.length > 0) {
			publi+='<div class="adds">';
			publi+='<div class="estilo_tit">Enlaces Patrocinados</div>';
			publi+='<table class="addscontent" cellpadding="0" cellspacing="0">';
			for(i = 0; i < pub_contex.length; ++i) {
			   publi+='<tr>';
			   publi+='<td class="estilo_txt" bgcolor="#FFFFFF"  id=tpa' + i + '  onMouseOver="ss(\'' + pub_contex[i].vurl + '\')" onMouseOut="cs()" onClick="javascript:window.open(\''+ pub_contex[i].url +'\')">';
			   publi+='<span class="estilo_lnk">';
			   publi+=pub_contex[i].titulo;
			   publi+='</span>';
			   publi+='<span class="estilo_descripcion">';
			   publi+=pub_contex[i].descripicon + ' ';
			   publi+='</span>';
			   publi+='<span class="estilo_url">';
			   var aux_url = pub_contex[i].vurl;
			   if (aux_url.length > 50) {
			     aux_url = aux_url.substr(0,50) + "...";
			   }
			   publi+=aux_url;
			   publi+='</span></td></tr>';
			}
			publi+='</table></div><div class="separacion-colC"></div>';
			if(contNoxtrum = window.document.getElementById("publi1_noxtrum"))
				contNoxtrum.innerHTML = publi;
		}
	}
	
	/******** FIN NOXTRUM ********/
	
	/************ AJAX **********/
	
	function createRequestObject() {
		var ro;
		var browser = navigator.appName;
		
		if(browser == "Microsoft Internet Explorer"){
			ro = new ActiveXObject("Microsoft.XMLHTTP");
		}
		else{
			ro = new XMLHttpRequest();
		}
		return ro;
	}  
	
	/************ FIN AJAX **********/
	
	/************ COOKIES ***********/
	
	function setCookie(name, value, expires, path, domain, secure) {
		var curCookie = name + "=" + escape(value) + ((expires) ? "; expires=" + expires : "") + ((path) ? "; path=" + path : "") + ((domain) ? "; domain=" + domain : "") + ((secure) ? "; secure" : "");
		document.cookie = curCookie;
	}
    	
	function getCookie(name) {
		var dc = document.cookie;
		var prefix = name + "=";
		var begin = dc.indexOf("; " + prefix);
		if (begin == -1) {
			begin = dc.indexOf(prefix);
		if (begin != 0) return null;
		} else
			begin += 2;
		var end = document.cookie.indexOf(";", begin);
		if (end == -1)
			end = dc.length;
		return unescape(dc.substring(begin + prefix.length, end));
	}
	
	/************ FIN COOKIES ***********/
	
	/************ GENERICAS *************/
	
	function withoutCutes(cadena) {
	
		cadena = cadena.replace(/ /g, '');
		cadena = cadena.replace(/á/gi, 'a');
		cadena = cadena.replace(/é/gi, 'e');
		cadena = cadena.replace(/í/gi, 'i');
		cadena = cadena.replace(/ó/gi, 'o');
		cadena = cadena.replace(/ú/gi, 'u');
		cadena = cadena.replace(/ü/gi, 'u');
		cadena = cadena.replace(/ñ/gi, 'nn');
		cadena = cadena.replace(/-/gi, '');
		
		return cadena;
	
	}

	/************ FIN GENERICAS *************/
	
	var http = createRequestObject();

	http.open('get', '/acceso.php?pag=' + window.document.location.href + '&resolucion=' + screen.width + 'x' + screen.height + '&r=' + Math.random());
	http.send(null);

/************ VIDEO NOTICIA *************/
function imganterioron(id) {
	document.getElementById("img_anterior-"+id+"").src="/img/flecha-izquierda-on.gif";
}

function imganterioroff(id) {
	document.getElementById("img_anterior-"+id+"").src="/img/flecha-izquierda-off.gif";
}

function imgsiguienteon(id) {
	document.getElementById("img_siguiente-"+id+"").src="/img/flecha-derecha-on.gif";
}

function imgsiguienteoff(id) {
	document.getElementById("img_siguiente-"+id+"").src="/img/flecha-derecha-off.gif";
}

function imgactiva(posicion,id) {
	document.getElementById("foto-noticia-"+posicion+"-"+id).className="transparencia_on";
}

function setactiva(numero, maxItems, id) {
	_global["focus"+id+""]=numero;

	for (i=1;i<=maxItems ;i++ )
	{
		if (i==_global["focus"+id+""])
		{
			document.getElementById("T-"+i+"-"+id+"").style.display="block";
			document.getElementById("FG-"+i+"-"+id+"").style.display="block";
			document.getElementById("foto-noticia-"+i+"-"+id+"").className="transparencia_on";
		}
		else
		{
			document.getElementById("T-"+i+"-"+id+"").style.display="none";
			document.getElementById("FG-"+i+"-"+id+"").style.display="none";
			document.getElementById("foto-noticia-"+i+"-"+id+"").className="transparencia";
		}
	}
}

function pintaFlechas(cursor, maxItems,id)
{
	if (cursor > 1) //sacamos flecha izq
	{	
		document.getElementById("img_anterior-"+id+"").style.visibility="visible";
	}
	else //no sacamos flecha izq
	{
		document.getElementById("img_anterior-"+id+"").style.visibility="hidden";
	}

	if ((cursor + 2) < maxItems) //sacamos flecha drcha
	{	
		document.getElementById("img_siguiente-"+id+"").style.visibility="visible";
	}
	else //no sacamos flecha drcha
	{
		document.getElementById("img_siguiente-"+id+"").style.visibility="hidden";
	}
}

function pinchaR(cursor, maxItems,id, focus)
{

	if ((cursor + 2) < maxItems) //sacamos flecha drcha
	{	
		_global["cursor"+id+""]++;

	}
	pintaThumbnails(_global["cursor"+id+""],maxItems,id);//muestro las imagenes
	pintaFlechas(_global["cursor"+id+""],maxItems,id);
	checkFocus(_global["cursor"+id+""], focus, id);


}

function pinchaL(cursor, maxItems,id, focus)
{

	if (cursor > 1) //sacamos flecha izq
	{	
		_global["cursor"+id+""]--;
	}
	pintaThumbnails(_global["cursor"+id+""],maxItems,id);//muestro las imagenes
	pintaFlechas(_global["cursor"+id+""],maxItems,id);
	checkFocus(_global["cursor"+id+""], focus, id);

}

function pintaThumbnails(cursor,maxItems,id)
{
	for (i=1;i<=maxItems ;i++ )
	{
		if (i<= (cursor +2) && i >= cursor)
		{
			document.getElementById("foto-noticia-"+i+"-"+id+"").style.display="inline";
			document.getElementById("divSeparador-"+i+"-"+id+"").style.display="inline";			
			
		}
		else
		{
			document.getElementById("foto-noticia-"+i+"-"+id+"").style.display="none";
			document.getElementById("divSeparador-"+i+"-"+id+"").style.display="none";			
		}
	}
}

function setvisible(state, noticia, maxItems, focus,id,cursor)
{
	if (state=="over") {
		if (noticia!=1 && noticia!=maxItems) {
			if ((document.getElementById("foto-noticia-"+(noticia-1)+"-"+id+"").style.display=="inline") && (document.getElementById("foto-noticia-"+(noticia+1)+"-"+id+"").style.display=="inline" )) {
				document.getElementById("T-"+noticia+"-"+id+"").style.background="url(/img/apuntador2.gif) no-repeat";
			} else if (document.getElementById("foto-noticia-"+(noticia-2)+"-"+id+"") != null && document.getElementById("foto-noticia-"+(noticia-2)+"-"+id+"").style.display=="inline") {
				document.getElementById("T-"+noticia+"-"+id+"").style.background="url(/img/apuntador3.gif) no-repeat";
			} else if (document.getElementById("foto-noticia-"+(noticia+2)+"-"+id+"") != null && document.getElementById("foto-noticia-"+(noticia+2)+"-"+id+"").style.display=="inline") {
				document.getElementById("T-"+noticia+"-"+id+"").style.background="url(/img/apuntador1.gif) no-repeat";
			}
		} else if (noticia==1) {
			document.getElementById("T-"+noticia+"-"+id+"").style.background="url(/img/apuntador1.gif) no-repeat";
		} else if (noticia==maxItems) {
			document.getElementById("T-"+noticia+"-"+id+"").style.background="url(/img/apuntador3.gif) no-repeat";
		}

		for (i=1;i<=maxItems ;i++ )
		{
			if (i!=noticia)
			{
				document.getElementById("T-"+i+"-"+id+"").style.display="none";				
			}
			else
			{
				document.getElementById("T-"+i+"-"+id+"").style.display="block";
				document.getElementById("tela-"+i+"-"+id+"").className="MpLIMPIO";
			}
		}
	}
	if (state=="out") {
	
		if (cursor == focus) {
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador1.gif) no-repeat";
		}else if(focus == (cursor+1)){
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador2.gif) no-repeat";
		}else if(focus == (cursor+2)){
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador3.gif) no-repeat";
		}else{
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador0.gif) no-repeat";
		}

		for (i=1;i<=maxItems ;i++ )
		{
			if (i==focus)
			{
				document.getElementById("T-"+i+"-"+id+"").style.display="block";
			}
			else
			{
				document.getElementById("T-"+i+"-"+id+"").style.display="none";
				document.getElementById("tela-"+i+"-"+id+"").className="Mp";
			}
		}
	}
}

function checkFocus(cursor, focus, id){
		if (cursor == focus) {
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador1.gif) no-repeat";
		}else if(focus == (cursor+1)){
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador2.gif) no-repeat";
		}else if(focus == (cursor+2)){
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador3.gif) no-repeat";
		}else{
			document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador0.gif) no-repeat";
		}
}
/************ FIN VIDEO NOTICIA *************/

/************ ENCUESTAS MULTIPLES ***********/

function validaEncMultiple(poll_id) {
	var frm = eval("window.document.encuesta_" + poll_id);
	var maxr = frm.maxrespuestas.value;
	var nump = frm.numpreguntas.value;
	var i = 1;
	var opt = "";
	var numrespuestas = 0;
	
	for(i=nump; i>=1; i--) {
		eval("opt = frm.option_id_" + i);
		if(opt.checked) {
			numrespuestas++;
		}
	}

	if(maxr && nump) {
		if(numrespuestas > maxr) {
			alert("Sólo se pueden marcar " + maxr + " respuestas posibles");
			return;
		}
	}
	frm.submit();
}


/************ FIN ENCUESTAS MULTIPLES ***********/




/*** 080630 ** Nuevas funciones ***/

var posicion=0;

function pinchaR2(cursor, maxItems,id, focus)
{

	if ((cursor + 2) < maxItems) 
	{	
		_global["cursor"+id+""]++;

	}
	pintaThumbnails(_global["cursor"+id+""],maxItems,id);
	pintaFlechas(_global["cursor"+id+""],maxItems,id);
	checkFocus2(_global["cursor"+id+""], focus, id, "C");
	
	posicion= posicion+1;
	
	
	document.getElementById("punta1").style.background="url(/img/apuntadorC1.gif) no-repeat";
	document.getElementById("punta1").style.display="block";
	document.getElementById("tela-"+(posicion+1)+"-"+id+"").focus();
	setactiva2((posicion+1),maxItems, id);

}

function pinchaL2(cursor, maxItems,id, focus)
{

	if (cursor > 1) 
	{	
		_global["cursor"+id+""]--;
	}
	pintaThumbnails(_global["cursor"+id+""],maxItems,id);
	pintaFlechas(_global["cursor"+id+""],maxItems,id);
	checkFocus2(_global["cursor"+id+""], focus, id, "C");
	
	posicion= posicion-1;
	
	
	document.getElementById("punta1").style.background="url(/img/apuntadorC1.gif) no-repeat";
	document.getElementById("punta1").style.display="block";
	document.getElementById("tela-"+(posicion+1)+"-"+id+"").focus();
	setactiva2((posicion+1),maxItems, id);

}



function setactiva2(numero, maxItems, id) {
	_global["focus"+id+""]=numero;
	
	for (i=1;i<=maxItems ;i++ )
	{
			if (i==_global["focus"+id+""])
			{
				if((i-posicion)>0&&(i-posicion)<4)
					document.getElementById("punta"+(i-posicion)).style.display="block";
				document.getElementById("T-"+i+"-"+id+"").style.display="block";
				document.getElementById("FG-"+i+"-"+id+"").style.display="block";
				document.getElementById("foto-noticia-"+i+"-"+id+"").className="transparencia_on";
			}
			else
			{
				if((i-posicion)>0&&(i-posicion)<4)
					document.getElementById("punta"+(i-posicion)).style.display="none";
				document.getElementById("T-"+i+"-"+id+"").style.display="none";
				document.getElementById("FG-"+i+"-"+id+"").style.display="none";
				document.getElementById("foto-noticia-"+i+"-"+id+"").className="transparencia";
			}
			
	}
}

function setvisible2(state, noticia, maxItems, focus,id,cursor,zona)
{
	
	if (!zona) zona = "";
	
	if (state=="over")
	 {
		if  (noticia != 1 &&  noticia != maxItems ) 
		{
			if ((document.getElementById("foto-noticia-"+(noticia-1)+"-"+id+"").style.display=="inline") && (document.getElementById("foto-noticia-"+(noticia+1)+"-"+id+"").style.display=="inline" )) 
			{
				//document.getElementById("punta2").style.display="block";
				document.getElementById("punta2").style.background="url(/img/apuntador"+zona+"2.gif) no-repeat";
				
			} 
			else if (document.getElementById("foto-noticia-"+(noticia-2)+"-"+id+"") != null && document.getElementById("foto-noticia-"+(noticia-2)+"-"+id+"").style.display=="inline")
			 {
				//document.getElementById("punta3").style.display="block";
				document.getElementById("punta3").style.background="url(/img/apuntador"+zona+"3.gif) no-repeat";
				
			} 
			else if (document.getElementById("foto-noticia-"+(noticia+2)+"-"+id+"") != null && document.getElementById("foto-noticia-"+(noticia+2)+"-"+id+"").style.display=="inline") 
			{
				//document.getElementById("punta1").style.display="block";
				document.getElementById("punta1").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
			}
		} 
		else if (noticia==1) 
		{
			//document.getElementById("punta1").style.display="block";
			document.getElementById("punta1").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
			
		} 
		else if (noticia==maxItems)
		 {
			//document.getElementById("punta3").style.display="block";
			document.getElementById("punta3").style.background="url(/img/apuntador"+zona+"3.gif) no-repeat";
			
		}
		
		
		for (i = 1; i<=maxItems ; i++  )
		{
			if (i!=noticia)
			{
				if((i-posicion)>0&&(i-posicion)<4)
					document.getElementById("punta"+(i-posicion)).style.display="none";	
				document.getElementById("T-"+i+"-"+id+"").style.display="none";
			}
			else
			{
				if((i-posicion)>0&&(i-posicion)<4)
					document.getElementById("punta"+(i-posicion)).style.display="block";
				document.getElementById("T-"+i+"-"+id+"").style.display="block";
				document.getElementById("tela-"+i+"-"+id+"").className="MpLIMPIO";
			}
		}
	}
	
	if (state=="out") 
	{
		if (cursor == focus) 
		{
			//document.getElementById("punta1").style.display="none";
			document.getElementById("punta1").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
			
		}
		else if(focus == (cursor+1))
		{
			//document.getElementById("punta2").style.display="none";
			document.getElementById("punta2").style.background="url(/img/apuntador"+zona+"2.gif) no-repeat";
			
		}
		else if(focus == (cursor+2))
		{
			//document.getElementById("punta3").style.display="none";
			document.getElementById("punta3").style.background="url(/img/apuntador"+zona+"3.gif) no-repeat";
			
		}else
		{
			//document.getElementById("punta1").style.display="none";
			document.getElementById("punta1").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
		}

			
		
		for (i=1;i<=maxItems ;i++ )
		{
			if (i==focus)
			{
				if((i-posicion)>0&&(i-posicion)<4)
					document.getElementById("punta"+(i-posicion)).style.display="block";
				document.getElementById("T-"+i+"-"+id+"").style.display="block";
			}
			else
			{
				if((i-posicion)>0&&(i-posicion)<4)
					document.getElementById("punta"+(i-posicion)).style.display="none";
				document.getElementById("T-"+i+"-"+id+"").style.display="none";
				document.getElementById("tela-"+i+"-"+id+"").className="Mp";
			}
		}
	}

}

function checkFocus2(cursor, focus, id,zona)
{
	if (!zona) zona = "";
	if (cursor == focus) 
	{
		//document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
		document.getElementById("punta"+focus+"").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
	}
	else if(focus == (cursor+1))
	{
		//document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador"+zona+"2.gif) no-repeat";
		document.getElementById("punta"+focus+"").style.background="url(/img/apuntador"+zona+"2.gif) no-repeat";
	}
	else if(focus == (cursor+2))
	{
		//document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador"+zona+"3.gif) no-repeat";
		document.getElementById("punta"+focus+"").style.background="url(/img/apuntador"+zona+"3.gif) no-repeat";
	}
	else
	{
		//document.getElementById("T-"+focus+"-"+id+"").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
		document.getElementById("punta"+focus+"").style.background="url(/img/apuntador"+zona+"1.gif) no-repeat";
	}
}

/******** RANDOM ********/

function aleatorio(inferior,superior){
numPosibilidades = superior - inferior;
rand = Math.random() * numPosibilidades;
rand = Math.round(rand);
return parseInt(inferior) + rand;
}

/******** FIN RANDOM ********/

/*MODULO CANON*/
var publicanon_modelos = new Array("Digital IXUS 870 IS","Digital IXUS 980 IS","PowerShot E1","Digital IXUS 80 IS");
var publicanon_enlaces = new Array("http://www.canon.es/IXUS870IS","http://www.canon.es/IXUS980IS","http://www.canon.es/PowerShotA1000IS","http://www.canon.es/IXUS80IS");
var publicanon_modelo = Math.floor(Math.random() * 4);
var publicanon_numColores = (publicanon_modelo == 0)?2:3;
var publicanon_color = Math.floor(Math.random() * publicanon_numColores);

function cargarPropiedades() {
	// Propiedades de "modulo-canon-cabecera-link"
	document.getElementById("modulo-canon-cabecera-link").title = "Canon " + publicanon_modelos[publicanon_modelo] + " te ofrece las fotos del día";
	document.getElementById("modulo-canon-cabecera-link").href = publicanon_enlaces[publicanon_modelo];
	// Propiedades de "modulo-canon-cabecera-modelo"
	document.getElementById("modulo-canon-cabecera-modelo").innerHTML = publicanon_modelos[publicanon_modelo];
	// Propiedades de "modulo-canon-carcasa-img"
	document.getElementById("modulo-canon-carcasa-img").src = "/img/canon/canon-carcasa-" + publicanon_modelo + publicanon_color + ".gif";
	document.getElementById("modulo-canon-carcasa-img").alt = publicanon_modelos[publicanon_modelo];
	// Propiedades de "modulo-canon-carcasa-link"
	document.getElementById("modulo-canon-carcasa-link").title = publicanon_modelos[publicanon_modelo];
	document.getElementById("modulo-canon-carcasa-link").href = publicanon_enlaces[publicanon_modelo];
	// Propiedades de "modulo-canon-noticia"
	document.getElementById("modulo-canon-noticia").className = "modulo-canon-noticia-" + publicanon_modelo;
}
/*FIN MODULO CANON*/