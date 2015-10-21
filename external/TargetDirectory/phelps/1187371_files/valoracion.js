function valorarNoticiaOnLine(codigoNoticia, valoracion) {
		var mozillaFlag = false;
		var XMLHttpRequestObject = false;
		if (window.XMLHttpRequest) {
			XMLHttpRequestObject = new XMLHttpRequest();
			mozillaFlag = true;
		} else if (window.ActiveXObject) {
			XMLHttpRequestObject = new ActiveXObject("Microsoft.XMLHTTP");
		}				
				
		if(XMLHttpRequestObject) {
			var t = new Date().getTime();
			XMLHttpRequestObject.open("GET", "http://www.marca.com/servicios/noticias/opinion/valorar?opcion=1&codigo="+codigoNoticia+"&valoracion="+valoracion+"&tmp="+t, true);
			XMLHttpRequestObject.onreadystatechange = function() {
				if (XMLHttpRequestObject.readyState == 4 &&	XMLHttpRequestObject.status == 200) {
					var xmlDocument = XMLHttpRequestObject.responseXML;
					if(mozillaFlag) {
						removeWhitespace(xmlDocument);
					}
					displayResultadoValorarNoticiaOnLine(xmlDocument);
				}
			}
			XMLHttpRequestObject.send(null);
		}
	}
	
	function removeWhitespace(xml) {
		var loopIndex;
		for (loopIndex = 0; loopIndex < xml.childNodes.length; loopIndex++) {
			var currentNode = xml.childNodes[loopIndex];
			if (currentNode.nodeType == 1) {
				removeWhitespace(currentNode);
			}
			if (((/^\s+$/.test(currentNode.nodeValue))) && (currentNode.nodeType == 3)) {
				xml.removeChild(xml.childNodes[loopIndex--]);
			}
		}
	}
	
	function displayResultadoValorarNoticiaOnLine(xmldoc) {
		// Obtiene los datos del XML
		var valoracionEnviada=xmldoc.getElementsByTagName("ENVIADA")[0].firstChild.nodeValue;;
		var valoracionMedia=xmldoc.getElementsByTagName("MEDIA")[0].firstChild.nodeValue;
		var numeroVotos=xmldoc.getElementsByTagName("NUMEROVOTOS")[0].firstChild.nodeValue;
		// Desactiva la capa de enviando datos
		document.getElementById('enviandoValoracion').style.display='none';
		// Pinta la valoración envíada en la capa correspondiente
		document.getElementById('valoracionEnviadaStar').className='c'+valoracionEnviada;
		document.getElementById('valoracionEnviadaText').innerHTML=valoracionEnviada/2;
		document.getElementById('valoracionEnviadaPuntosText').innerHTML=(valoracionEnviada/2)+' / 5';
		document.getElementById('valoracionEnviadaStarActuales').className='c'+parseInt(valoracionMedia);
		document.getElementById('valoracionEnviadaTextActuales').innerHTML=valoracionMedia/2;
		document.getElementById('valoracionEnviadaPuntosActuales').innerHTML=(valoracionMedia/2)+' / 5 ';
		document.getElementById('valoracionEnviadaVotosActuales').innerHTML=numeroVotos+' votos';
		// Activa la capa de valoración envíada
		document.getElementById('valoracionEnviada').style.display='block';
	}
	
	function mostrarPuntos(ptos) {
		document.getElementById('valoracionPuntos').innerHTML=(ptos/2)+' / 5';
	}
	
	function valorar(ptos, noticia) {
		// Desactiva la capa de valoraciones 
		document.getElementById('valoracion').style.display='none';
		// Activa la capa de enviando datos (Espere...)
		document.getElementById('enviandoValoracion').style.display='block';
		// Envía la valoracion, via Ajax
		var codigoNoticia=noticia;
		valorarNoticiaOnLine(codigoNoticia,ptos);
	}