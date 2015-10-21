
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



var httpReq;
var rq=0;

var mVot;

function getMVot() {
	return mVot;
}

function votos(idPortal, idNoticia, val) {
	var url;
	var returnFunc=null;
	var args=null;
	var target;

	rq++;

	url='/includes/votNotDin.jsp?pIdPortal='+idPortal+'&pIdNoticia='+idNoticia+"&rq="+rq;
	url='/includes/votNotDinFich.jsp?pIdPortal='+idPortal+'&pIdNoticia='+idNoticia+"&rq="+rq;
	//url='<%=global.gDirControlEd%>/votNotDin.jsp?pIdPortal='+idPortal+'&pIdNoticia='+idNoticia+"&rq="+rq;

	try {
		httpReq=getXMLHttpRequest();
		
		// Establece la función Javascript que hace de callback para los eventos que produzca.
		httpReq.onreadystatechange = votosHandler;
		// Establece la dirección para la petición
		target = url;

		// Realiza la llamada	
		httpReq.open("GET", target, true);
		httpReq.send(null);
	} catch(e) {
		//alert(e.message);
	}


}

function votosHandler() {
	var obj;
	var objRes;
	var aAux;
	var respText;
	var sAux="";
	

	try {
		if (httpReq.readyState == 4) {
	        	if (httpReq.status == 200) {
	       		respText=Trim(httpReq.responseText);

					respText=respText.substring(0,respText.indexOf("#"));
					obj=document.getElementById("votosNoticia");
					//obj.innerHTML=respText;

					if (respText!=null && respText!="") {
						aAux=new Array();
						aAux=respText.split('-');
					
						objRes=new Object();
						
						objRes.visualizaciones=parseFloat(aAux[0]);						
						objRes.votos=parseFloat(aAux[1]);
						objRes.numVotaciones=parseFloat(aAux[2]);
						if (objRes.numVotaciones>0 && objRes.votos>0) {
							objRes.mediaVotos=objRes.votos/objRes.numVotaciones;
						} else {
							objRes.mediaVotos=0;
						}
						mVot=objRes.mediaVotos;
						
						if (objRes.visualizaciones>=0) {
							sAux="Visualizaciones : "+objRes.visualizaciones;
						} else {
							sAux="Visualizaciones : 0";
						}
						
						if (objRes.votos>=0) {
							sAux+=" Votos : "+objRes.votos;
						} else {
							sAux+=" Votos : 0";
						}
						
						if (objRes.numVotaciones>=0) {
							sAux+=" N&uacute;mero de votos : "+objRes.numVotaciones;
						} else {
							sAux+=" N&uacute;mero de votos : 0";
						}
										
						if (objRes.mediaVotos>0) {
							sAux+=" Media votaciones : "+objRes.mediaVotos;
						}
						/////>>>>>obj.innerHTML=sAux;
						if (mVot!=0 && mVot!=5) {
							mVot+=0.5;
						}
						swapImagenVoto(mVot,'mark');
						
						obj=document.getElementById("evotos");
						obj.style.display="inline";
					} else {
						objRes=null;
						//mVot=-1;
					}
			          		
			} else {
				objRes=null;
			}
		} else {
			objRes=null;
		}
		
  	} catch (e) {
 		//alert(e.message);
 		objRes=null;
  	}
 
		
}

function incVoto(idPortal, idNoticia, val) {
	var url;
	var returnFunc=null;
	var args=null;
	var target;


	rq++;

	url='/includes/incVot.jsp?pIdPortal='+idPortal+'&pIdNoticia='+idNoticia+"&v="+val+"&rq="+rq;

	try {
		httpReq=getXMLHttpRequest();
		
		// Establece la función Javascript que hace de callback para los eventos que produzca.
		//httpReq.onreadystatechange = enviarVotoHandler;
		// Establece la dirección para la petición
		target = url;

		// Realiza la llamada	
		httpReq.open("GET", target, false);
		httpReq.send(null);
	}  catch(e) {
		//alert(e.message);
	}

}


