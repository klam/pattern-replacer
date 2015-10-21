
	//Funciones para eliminación de espacios en cadenas de texto.
	function LTrim(str) {
		for (var i=0; str.charAt(i)==" "; i++);
			return str.substring(i,str.length);
	}
		 
	function RTrim(str) {
		for (var i=str.length-1; str.charAt(i)==" "; i--);
			return str.substring(0,i+1);
	}
		
	function Trim(str) { 
		return LTrim(RTrim(str));
	}
		
	function getXMLHttpRequest() {
	var req = false;
	// branch for native XMLHttpRequest object
	if(window.XMLHttpRequest) {
		try {
			req = new XMLHttpRequest();
		} catch(e) {
			req = false;
		} 
	// branch for IE/Windows ActiveX version
	} else if (window.ActiveXObject) {
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				req = new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e2) {
				req = false;
			}
		}
	}
	return req;
}	 // end getXMLHttpRequest()



var httpReqContenido;
var httpReqDcha;
var rq=0;

var TIPO_PAG_CONTENIDO="";
var TIPO_PAG_DCHA="Lat";
var codPagContenido;
var codPagDcha;
var idTimeOutContenido;
var idTimeOutDcha;
var tiempoRecargaContenido=60000;
var tiempoRecargaDcha=60000;


function getCodPagContenido() {
	return codPagContenido;
}

function getCodPagDcha() {
	return codPagDcha;
}


function setTimeoutCuadroFutbolContenido(statement) {
	if (idTimeOutContenido!=null) {
		clearTimeout(idTimeOutContenido);
	}
	idTimeOutContenido=setTimeout(statement, tiempoRecargaContenido);

}

function setTimeoutCuadroFutbolDcha(statement) {
	if (idTimeOutDcha!=null) {
		clearTimeout(idTimeOutDcha);
	}
	idTimeOutDcha=setTimeout(statement,tiempoRecargaDcha);
}


function recargarCuadroFutbolContenido() {

	cargarCuadroFutbolContenido(codPagContenido);
	//idTimeOut=setTimeout("recargarCuadroFutbolContenido()",tiempoRecarga);
	setTimeoutCuadroFutbolContenido("recargarCuadroFutbolContenido()");
}

function recargarCuadroFutbolDcha() {

	cargarCuadroFutbolDcha(codPagDcha);
	//idTimeOut=setTimeout("recargarCuadroFutbolContenido()",tiempoRecarga);
	setTimeoutCuadroFutbolDcha("recargarCuadroFutbolDcha()");
}


function cargarCuadroFutbolInicialContenido(cod) {
	cargarCuadroFutbolContenido(cod);
	setTimeoutCuadroFutbolContenido("recargarCuadroFutbolContenido()");
}

function cargarCuadroFutbolInicialDcha(cod) {
	cargarCuadroFutbolDcha(cod);
	setTimeoutCuadroFutbolDcha("recargarCuadroFutbolDcha()");
}

function cargarCuadroFutbolContenido(cod) {
	var codAux;
	if (cod=="0" || cod==0) {
		codAux="";
	} else {
		codAux=cod;
	}
	//cargarCuadroFutbol(codAux,'Contenido');
	cargarCuadroFutbol(codAux,TIPO_PAG_CONTENIDO);
}

function cargarCuadroFutbolDcha(cod) {
	var codAux;
	if (cod=="0" || cod==0) {
		codAux="";
	} else {
		codAux=cod;
	}
	//cargarCuadroFutbol(codAux,'Dcha');
	cargarCuadroFutbol(codAux,TIPO_PAG_DCHA);
}


function cargarCuadroFutbol(cod,tipo) {
	var url;
	var returnFunc=null;
	var args=null;
	var target;
	var httpReqAux;

	rq++;

	if (cod==null) {
		cod='';
	}

	//codPag=cod;

	url='/elementosExt/futbol/resultados/cuadroFutbol'+tipo+cod+'.html?rq='+rq;

	try {
		//httpReq=getXMLHttpRequest();
		httpReqAux=getXMLHttpRequest();
		
		// Establece la función Javascript que hace de callback para los eventos que produzca.
		//if (tipo=='Contenido') {
		if (tipo==TIPO_PAG_CONTENIDO) {
			codPagContenido=cod;
			httpReqContenido=httpReqAux;
			//httpReq.onreadystatechange = cuadroFutbolContenidoHandler;
			httpReqContenido.onreadystatechange = cuadroFutbolContenidoHandler;
		//} else if (tipo=='Dcha') {
		} else if (tipo==TIPO_PAG_DCHA) {
			codPagDcha=cod;
			httpReqDcha=httpReqAux;
			//httpReq.onreadystatechange = cuadroFutbolDchaHandler;
			httpReqDcha.onreadystatechange = cuadroFutbolDchaHandler;
		}
		// Establece la dirección para la petición
		target = url;

		// Realiza la llamada	
		//httpReq.open("GET", target, true);
		//httpReq.send(null);
		httpReqAux.open("GET", target, true);
		httpReqAux.send(null);
	} catch(e) {
		//alert(e.message);
	}


}

function cuadroFutbolContenidoHandler() {
	var obj;
	var respText;
	var respHtml;
	var sAux="";

	try {
		//if (httpReq.readyState == 4) {
	      //if (httpReq.status == 200) {
	       		//respText=httpReq.responseText;
					//respHtml=httpReq.responseHtml;
		if (httpReqContenido.readyState == 4) {
	      if (httpReqContenido.status == 200) {
	       		respText=httpReqContenido.responseText;

					if (respText!=null && respText!="") {
					//if (respHtml!=null && respHtml!="") {
						
						obj=document.getElementById("cuadroFutbolContenido");
						obj.innerHTML=respText;
						//obj.innerHTML=respHtml;
						obj.style.display="inline";
					} else {
						
					}
			          		
			} else {
				//alert("httpReq.status="+httpReq.status);
			}
		} else {

		}
		
  	} catch (e) {
 		//alert(e.message);
  	}
		
}


function cuadroFutbolDchaHandler() {
	var obj;
	var respText;
	var respHtml;
	var sAux="";

	try {
		//if (httpReq.readyState == 4) {
	      //if (httpReq.status == 200) {
	       		//respText=httpReq.responseText;
					//respHtml=httpReq.responseHtml;
		if (httpReqDcha.readyState == 4) {
	      if (httpReqDcha.status == 200) {
	       		respText=httpReqDcha.responseText;

					if (respText!=null && respText!="") {
					//if (respHtml!=null && respHtml!="") {
						
						obj=document.getElementById("cuadroFutbolDcha");
						obj.innerHTML=respText;
						//obj.innerHTML=respHtml;
						obj.style.display="inline";
					} else {
						
					}
			          		
			} else {
				//alert("httpReq.status="+httpReq.status);
			}
		} else {

		}
		
  	} catch (e) {
 		//alert(e.message);
  	}
		
}

