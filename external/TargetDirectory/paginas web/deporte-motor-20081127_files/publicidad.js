	/******** PUBLICIDAD ********/
	
	Array.prototype.in_array = function(search_term) {
	  var i = this.length;
	  if (i > 0) {
		 do {
			if (this[i] === search_term) {
			   return true;
			}
		 } while (i--);
	  }
	  return false;
	}

	// Postcarga de la publicidad
	var postcarga = 1;
	if(typeof(postcarga) == "undefined")
		var postcarga = 2;
	
	function publiMJX(position,desde) {
		if(postcarga == desde) {
			var position_dc = '';
			//v_tile++;
			switch (position) {
				case 'Position1':
					position_dc = 'dcopt=ist;pos=megabanner;tile=' + v_tile + ';sz=728x90,468x60';
					break;
				case 'x69':
					position_dc = 'pos=boton_superior;tile=' + v_tile + ';sz=234x45,234x90';
					break;
				case 'x96':
					position_dc = 'pos=boton_inferior;tile=' + v_tile + ';sz=234x45';
					break;
				case 'x43':
					position_dc = 'pos=cintillo_superior;tile=' + v_tile + ';sz=675x30';
					break;
				case 'Position3':
				case 'x26':
					position_dc = 'pos=robapaginas;tile=' + v_tile + ';sz=300x250,200x200';
					break;
				case 'x51':
				case 'Position4':
					position_dc = 'pos=boton_doble_local;tile=' + v_tile + ';sz=300x90,500x75';
					break;
				case 'x56':
					position_dc = 'pos=boton_local3;tile=' + v_tile + ';sz=300x45,147x80';
					break;
				case 'x53':
				case 'Top1':
				case 'Top2':
				case 'Middle':
					position_dc = 'pos=boton_local1;tile=' + v_tile + ';sz=300x45,147x80,120x60,90x150,160x50,120x120';
					break;
				case 'x54':
				case 'Top3':
					position_dc = 'pos=boton_nal2;tile=' + v_tile + ';sz=300x45,147x80,90x150,300x90';
					break;
				case 'x44':
					position_dc = 'pos=cintillo_local;tile=' + v_tile + ';sz=675x30,670x30';
					break;
				case 'x27':
					position_dc = 'pos=boton_local4;tile=' + v_tile + ';sz=300x45';
					break;
				case 'x29':
					position_dc = 'pos=boton_local5;tile=' + v_tile + ';sz=300x45';
					break;
				case 'x49':
					position_dc = 'pos=cintillo_inferior;tile=' + v_tile + ';sz=675x30';
					break;
				case 'x60':
					position_dc = 'pos=caja_inferior;tile=' + v_tile + ';sz=300x45';
					break;
				case 'Right':
					position_dc = 'pos=halfbanner;tile=' + v_tile + ';sz=234x90';
					break;
				case 'x32':
					position_dc = 'pos=skyscraper;tile=' + v_tile + ';sz=sz=120x600,200x600,160x600,120x240';
					break;
				case 'Left':
				case 'Middle2':
					position_dc = 'pos=boton_nal3;tile=' + v_tile + ';sz=300x90';
					break;
				case 'Middle3':
					position_dc = 'pos=1boton105x60;tile=' + v_tile + ';sz=105x60';
					break;
				case 'x11':
					position_dc = 'pos=2boton105x60;tile=' + v_tile + ';sz=105x60';
					break;
				case 'BottomRight':
					position_dc = 'pos=3boton105x60;tile=' + v_tile + ';sz=105x60';
					break;
				case 'Middle1':
					position_dc = 'pos=5boton105x60;tile=' + v_tile + ';sz=105x60';
					break;
				case 'x48':
					position_dc = 'pos=4boton105x60;tile=' + v_tile + ';sz=105x60';
					break;	
				case 'x10' :
					position_dc = 'pos=1boton180x125;tile='+ v_tile +';sz=180x125';
					break;
				case 'x05' :
					position_dc = 'pos=2boton180x125;tile='+ v_tile +';sz=180x125';            
					break;
				case 'x07' :
					position_dc = 'pos=1boton120x50;tile='+ v_tile +';sz=120x150';            
					break;
				case 'x09' :
					position_dc = 'pos=2boton120x50;tile='+ v_tile +';sz=120x150,468x60';  
					break;
				case 'x12' :
					position_dc = 'pos=3boton180x125;tile='+ v_tile +';sz=180x125';
					break;
				case 'x13' :
					position_dc = 'pos=4boton180x125;tile='+ v_tile +';sz=180x125';            
					break;
				case 'x20':
					position_dc = 'pos=robapaginas_small;tile=' + v_tile + ';sz=200x200';
					break;
				case 'megabanner':
					position_dc = 'dcopt=ist;pos=' + position + ';tile=' + v_tile + ';sz=728x90,468x60';
					break;
				case 'boton_superior':
				case 'boton_inferior':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=234x45';
					break;
				case 'cintillo_superior':
				case 'cintillo_local':
				case 'cintillo_inferior':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=675x30,670x30,728x75';
					break;
				case 'robapaginas':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x250,200x200';
					break;
				case 'robapaginas_small':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=200x200';
					break;
				case 'robapaginas_dos':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x250';
					break;
				case 'boton_local1':	
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x45,147x80,120x60,90x150,160x50,120x120';
					break;		
				case 'boton_local3':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x45,147x80,90x150,300x90,160x50';
					break;
				case 'boton_nal2':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x45,147x80,90x150,300x90';
					break;
				case 'recuerdo_corti_layer_nal':
				case 'boton_loc_superior':
				case 'boton_local2':
				case 'boton_local4':
				case 'boton_local5':
				case 'boton_local6':
				case 'boton_local7':
				case 'boton_local8':
				case 'boton_local9':
				case 'boton_local10':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x45';
					break;
				case 'boton_doble_local':
				case 'boton_doble_local2':
				case 'boton_doble_local3':
				case 'boton_doble_nacional':
				case 'boton_nal_abajo':
				case 'boton_nal3':
				case 'boton_nal1':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x90';
					break;
				case 'boton_254x90':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=254x90';
					break;	
				case 'boton_boton1D_170x50':
				case 'boton_boton2D_170x50':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=170x50';
					break;	
				case 'halfbanner':
					position_dc = 'pos=halfbanner;tile=' + v_tile + ';sz=234x90';
					break;
				case 'skyscraper':
					position_dc = 'pos=skyscraper;tile=' + v_tile + ';sz=120x600,200x600,120x240,160x600';
					break;
				case '1boton105x60':
				case '2boton105x60':
				case '3boton105x60':
				case '5boton105x60':
				case '4boton105x60':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=105x60';
					break;
				case '5boton180x125':
				case '6boton180x125':
				case '7boton180x125':
				case '8boton180x125':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=180x125';
					break;
				case '1boton115x54':
				case '2boton115x54':
				case '3boton115x54':
				case '4boton115x54':
				case '5boton115x54':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=115x54';
					break;
				case 'banner':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=468x60,420x80';
					break;
				case 'lva_robapaginas-local':
                                        position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x250,200x200';
                                        break;
                                case 'boton1i_170x50': 
				case 'boton2i_170x50': 
				case 'boton3i_170x50':  
				case 'boton4i_170x50':  
				case 'boton5i_170x50':
				case 'boton3d_170x50':
				case 'boton4d_170x50':
				case 'boton5d_170x50':
				case 'boton6d_170x50':
				case 'boton7d_170x50':
				case 'boton8d_170x50':
				case 'boton9d_170x50':
				case 'boton10d_170x50':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=170x50';
                                        break;
				case 'boton_central':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=254x120';
					break;
				case 'boton_especial_hsport':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x120';
					break;	
			}
			
			OAS_AD(position_dc);
		}
	}
	
	function cargarPubliMethode(posicion) {
		if(postcarga != 2)
			return;
		if(navigator.userAgent.indexOf("Netscape/7.0") > -1) {
			bIsNS70 = true;
		}
		else {
			bIsNS70 = false;
		}
		var ie4 = document.all;
		var ns6 = document.getElementById;
		if (ie4 || ns6) {
			var objOrigen = document.getElementById("publi2_" + posicion);
			var objDestino = document.getElementById("publi1_" + posicion);
			if((objDestino != null) && (!bIsNS70))
				objDestino.appendChild(objOrigen);
			else
				objOrigen.style.display = "none";
		}
	}
	
	// DC
	
	var campos = OAS_sitepage.split('/');
		
	var campos2 = campos[0].split('.');
	
	switch (campos2[1]) {
		case 'elcomercio-sa':
			var periodico = 'elcomerciodigital';
			break;
		case 'diario-elcorreo':
			var periodico = 'elcorreodigital';
			break;
		case 'la-verdad':
			var periodico = 'laverdad';
			break;
		case 'lavozdecadiz':
			var periodico = 'lavozdigital';
			break;
		default:
			var periodico = campos2[1];
			break;	
	}
	
	var ediciones = new Array('alava', 'vizcaya', 'aviles', 'gijon', 'oviedo', 'almeria', 'granada', 'jaen', 'alicante', 'valencia', 'albacete', 'murcia', 'cadiz', 'jerez', 'castellon');
		
	//var separador = ediciones.in_array(campos[1]) ? '.' : '/';	
	var separador = '/';
	
	var OAS_sitepage_dc = 'vocento.' + periodico + separador + campos[1];
		
	for (var i = 2; i < campos.length; i++) {
		OAS_sitepage_dc += '/' + campos[i];	
	}
	
	//alert(OAS_sitepage_dc);
	
	var v_tile = 1;
	
	//OAS_sitepage_dc = 'vocento.prueba/portada'; // <--- Pruebas
	
	if(typeof(v_randomnumber)=="undefined"){var v_randomnumber=Math.floor(Math.random()*10000000000)}
	
	function OAS_AD(pos) {
		
		var position_dc = '';
		v_tile++;
		switch (pos) {
			case 'Position1':
				position_dc = 'dcopt=ist;pos=megabanner;tile=' + v_tile + ';sz=728x90,468x60';
				break;
			case 'x69':
				position_dc = 'pos=boton_superior;tile=' + v_tile + ';sz=234x45';
				break;
			case 'x96':
				position_dc = 'pos=boton_inferior;tile=' + v_tile + ';sz=234x45';
				break;
			case 'x43':
				position_dc = 'pos=cintillo_superior;tile=' + v_tile + ';sz=675x30,670x30';
				break;
			case 'Position3':
			case 'x26':
				position_dc = 'pos=robapaginas;tile=' + v_tile + ';sz=300x250,200x200';
				break;
			case 'x51':
			case 'Position4':
				position_dc = 'pos=boton_doble_local;tile=' + v_tile + ';sz=300x90,500x75';
				break;
			case 'x56':
				position_dc = 'pos=boton_local3;tile=' + v_tile + ';sz=300x45,147x80';
				break;
			case 'x53':
			case 'Top1':
			case 'Top2':
			case 'Middle':
				position_dc = 'pos=boton_local1;tile=' + v_tile + ';sz=300x45,147x80,120x60,90x150,160x50,120x120';
				break;
			case 'x54':
			case 'Top3':
				position_dc = 'pos=boton_nal2;tile=' + v_tile + ';sz=300x45,147x80,90x150,300x90';
				break;
			case 'x44':
				position_dc = 'pos=cintillo_local;tile=' + v_tile + ';sz=675x30,670x30';
				break;
			case 'x27':
				position_dc = 'pos=boton_local4;tile=' + v_tile + ';sz=300x45';
				break;
			case 'x29':
				position_dc = 'pos=boton_local5;tile=' + v_tile + ';sz=300x45';
				break;
			case 'x49':
				position_dc = 'pos=cintillo_inferior;tile=' + v_tile + ';sz=675x30,670x30';
				break;
			case 'x60':
				position_dc = 'pos=caja_inferior;tile=' + v_tile + ';sz=300x45';
				break;
			case 'Right':
				position_dc = 'pos=halfbanner;tile=' + v_tile + ';sz=234x90';
				break;
			case 'x32':
				position_dc = 'pos=skyscraper;tile=' + v_tile + ';sz=120x600,200x600,160x600,120x240';
				break;
			case 'Left':
			case 'Middle2':
				position_dc = 'pos=boton_nal3;tile=' + v_tile + ';sz=300x90';
				break;
			case 'Middle3':
				position_dc = 'pos=1boton105x60;tile=' + v_tile + ';sz=105x60';
				break;
			case 'x11':
				position_dc = 'pos=2boton105x60;tile=' + v_tile + ';sz=105x60';
				break;
			case 'BottomRight':
				position_dc = 'pos=3boton105x60;tile=' + v_tile + ';sz=105x60';
				break;
			case 'Middle1':
				position_dc = 'pos=5boton105x60;tile=' + v_tile + ';sz=105x60';
				break;
			case 'x48':
				position_dc = 'pos=4boton105x60;tile=' + v_tile + ';sz=105x60';
				break;
				break;	
			case 'x10' :
				position_dc = 'pos=1boton180x125;tile='+ v_tile +';sz=180x125';
				break;
			case 'x05' :
				position_dc = 'pos=2boton180x125;tile='+ v_tile +';sz=180x125';            
				break;
			case 'x07' :
				position_dc = 'pos=1boton120x50;tile='+ v_tile +';sz=120x150';            
				break;
			case 'x09' :
				position_dc = 'pos=2boton120x50;tile='+ v_tile +';sz=120x150,468x60';  
				break;
			case 'x12' :
				position_dc = 'pos=3boton180x125;tile='+ v_tile +';sz=180x125';
				break;
			case 'x13' :
				position_dc = 'pos=4boton180x125;tile='+ v_tile +';sz=180x125';            
				break;	
			case 'x20':
				position_dc = 'pos=robapaginas_small;tile=' + v_tile + ';sz=200x200';
				break;
			case 'megabanner':
				position_dc = 'dcopt=ist;pos=' + pos + ';tile=' + v_tile + ';sz=728x90,468x60';
				break;
			case 'boton_superior':
			case 'boton_inferior':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=234x45';
				break;
			case 'cintillo_superior':
			case 'cintillo_local':
			case 'cintillo_inferior':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=675x30,728x75';
				break;
			case 'robapaginas':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=300x250,200x200';
				break;
			case 'robapaginas_small':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=200x200';
				break;
			case 'robapaginas_dos':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=300x250';
				break;	
			case 'boton_local1':	
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=300x45,147x80,120x60,90x150,160x50,120x120';
				break;	
			case 'boton_local3':
			case 'boton_nal2':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=300x45,147x80,90x150,300x90';
				break;
			case 'recuerdo_corti_layer_nal':
			case 'boton_loc_superior':
			case 'boton_local2':
			case 'boton_local4':
			case 'boton_local5':
			case 'boton_local6':
			case 'boton_local7':
			case 'boton_local8':
			case 'boton_local9':
			case 'boton_local10':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=300x45';
				break;
			case 'boton_doble_local':
			case 'boton_doble_local2':
			case 'boton_doble_local3':
			case 'boton_doble_nacional':
			case 'boton_nal_abajo':
			case 'boton_nal3':
			case 'boton_nal1':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=300x90';
				break;
			case 'boton_254x90':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=254x90';
				break;	
			case 'boton_boton1D_170x50':
			case 'boton_boton2D_170x50':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=170x50';
				break;		
			case 'halfbanner':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=234x90';
				break;
			case 'skyscraper':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=120x600,200x600,120x240,160x600';
				break;
			case '1boton105x60':
			case '2boton105x60':
			case '3boton105x60':
			case '5boton105x60':
			case '4boton105x60':
				position_dc = 'pos=' + pos + ';tile=' + v_tile + ';sz=105x60';
				break;
			case '5boton180x125':
			case '6boton180x125':
			case '7boton180x125':
			case '8boton180x125':
				position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=180x125';
				break;
			case '1boton115x54':
				case '2boton115x54':
				case '3boton115x54':
				case '4boton115x54':
				case '5boton115x54':
					position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=115x54';
					break;		
			case 'banner':
                                position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=468x60,420x80';
                                break;
			case 'lva_robapaginas-local':
                                position_dc = 'pos=' + position + ';tile=' + v_tile + ';sz=300x250,200x200';
                                break;
			default:
				position_dc = pos;
				break;	
		}
		
		pos = position_dc;
		//alert(pos + '->' + v_randomnumber);
		document.write('<scr'+'ipt src="http://ad.es.doubleclick.net/adj/' + OAS_sitepage_dc + ';' + pos + ';ord='+v_randomnumber+'?"><\/scr'+'ipt>');
		//document.write('<scr'+'ipt src="http://ad.uk.doubleclick.net/adj/' + OAS_sitepage_dc + ';' + pos + ';ord='+v_randomnumber+'?"><\/scr'+'ipt>');
	}
	
	/******** FIN PUBLICIDAD ********/
