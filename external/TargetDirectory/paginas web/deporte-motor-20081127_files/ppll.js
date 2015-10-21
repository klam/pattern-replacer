<!--
	function cambialo(valor){
	//alert('entro???');
	document.getElementById('lo1').className = '';
	document.getElementById('lo2').className = '';
	document.getElementById('lo3').className = '';
	pestanna = 'lo' + valor;
	//alert(pestanna);
	document.getElementById(pestanna).className = 'activo';
	bloquepestanna = 'contenidolo' + valor;
	//alert(bloquepestanna);
	document.getElementById('contenidolo1').style.display = 'none';
	document.getElementById('contenidolo2').style.display = 'none';
	document.getElementById('contenidolo3').style.display = 'none';
	document.getElementById(bloquepestanna).style.display = 'block';
	}
	
	
	function elactivoprincipal(activo){
	document.writeln("<style type=text/css>");
	document.writeln("li#mi-"+ activo + " ol{ display:block;}");
	document.writeln("li#mi-"+ activo + " a.a{ text-decoration:none;  background: url(/img/marca_mion.gif) no-repeat; background-position: 7px 10px; color:#003366; font-weight:bold;}");
	document.writeln("</style>");
	}
	
	function elactivosecundario(activo2){
	document.writeln("<style type=text/css>");
	document.writeln("li#submi-"+ activo2 + " a {background:#F0F3F6 url(/img/marca_submion.gif) no-repeat; background-position: 7px 10px; color:#003366; font-weight:bold;}");
	document.writeln("li#submi-"+ activo2 + " a span{ padding:4px 0 4px 18px; display:block;}");
	document.writeln("</style>");
	}
	
	function visualizar(capa){
	document.getElementById(capa).style.display = 'block';
	
	
	}
	function ocultar(capa){
	document.getElementById(capa).style.display = 'none';
	}
	function ocultarticker(){
	document.getElementById('tickereconomia').style.display = 'none';
	document.getElementById('tickereconomiaoff').style.display = 'block';
	}
	function presentarticker(capa){
	document.getElementById('tickereconomiaoff').style.display = 'none';
	document.getElementById('tickereconomia').style.display = 'block';
	}
	
	function visualizacapasarticulo(capa,enlace){
	document.getElementById('envialanoticia').style.display = 'none';
	document.getElementById('enviar').style.color ='';
	document.getElementById('rectificalanoticia').style.display = 'none';
	document.getElementById('rectifica').style.color ='';
	document.getElementById(capa).style.display = 'block';
	document.getElementById(enlace).style.color ='#990000';
	
	}
	function ocultacapasarticulo(capa,enlace){
	document.getElementById(capa).style.display = 'none';
	document.getElementById(enlace).style.color ='';
	}
	
	function MM_openBrWindow(theURL,winName,features) {
		window.name='principal';
		window.open(theURL,winName,features);
	}

	function checkemail(email) {
		var filter=/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
		if (filter.test(email)) {
			return true
		}
		else{
			return false;
		}
	}
	
	function enviarNoticia(){
		var max_longitud = 120;
		var formulario =  window.document.envio_noticia;
		
		var nombre = formulario.nombre.value;
		var email_remitente = formulario.email_remitente.value;
		var para = formulario.para.value;
		var email_destinatario = formulario.email_destinatario.value;
		var comentario = formulario.comentario.value;
		
		if (!nombre || !email_remitente || !para || !email_destinatario)  {
			alert('No ha rellenado todos los campos');
			return;	
		}
		
		if (!checkemail(email_remitente)) {
			alert('El email del remitente no es correcto');
			formulario.email_remitente.focus();
			return;	
		}
		
		
		
		if (!checkemail(email_destinatario)) {
			alert('El email del destinatario no es correcto');
			formulario.email_destinatario.focus();
			return;	
		}
		
		var http = createRequestObject();
		var qs = "nombre=" + nombre + "&email_remitente=" + email_remitente + "&para=" + para;
		qs += "&email_destinatario=" + email_destinatario + "&comentario=" + comentario;
		qs += "&url=" + window.document.location.href;
		http.open("get", "/backend/enviar_noticia.php?" + qs +"&r=" + Math.random());
		http.onreadystatechange = function () {
			if(http.readyState == 4){
				if (http.responseText) {
					if (http.responseText.indexOf('OK') > -1) {
						var url_mostrar = (window.document.location.href.length > max_longitud) ? window.document.location.href.substr(0, max_longitud) + "..." : window.document.location.href;
						elHTML = "<form action=><div class=envianoticia><div class=envianoticiaOK><p>Su correo ha sido enviado correctamente.</p><p>Página enviada:</p><p class=url><a href='" + window.document.location.href + "' title='" + window.document.location.href + "'>" + url_mostrar + "</a></p></div><div class=clear></div></div><div class='envianoticia-botones boton'><a href=javascript:cerrarEnviarNoticia();>Cerrar</a></div></form>";
					}
					else {
						elHTML = "<form action=><div class=envianoticia><div class=envianoticiaOK><p>Ha ocurrido un ERROR al enviar la página, por favor intentelo más tarde.</p></div><div class=clear></div></div><div class='envianoticia-botones boton'><a href=javascript:cerrarEnviarNoticia();>Cerrar</a></div></form>";
					
					}
					
					formulario.reset();			
				
					window.document.getElementById('contenidoenvianoticia').innerHTML = elHTML;
	
						
				}
				else {
					alert("Ha habido un problema al enviar la noticia, por favor, intentelo más tarde.");
				}
				
			}	
		};
		http.send(null);	
		
		
	}
	
	function cerrarEnviarNoticia() {
		var contenido;
		
		window.document.getElementById('envialanoticia').style.display = 'none';
		
		contenido = '<form name="envio_noticia">';
		contenido += '	<fieldset>';
		contenido += '		<div class="envianoticia">';
		contenido += '			<p>Rellena los siguientes campos para enviar esta información a otras personas.</p>';
		contenido += '			<div class="envianoticiaI">';
		contenido += '				<table width="99%" border="0" cellspacing="0" cellpadding="0">';
		contenido += '					<tr>';
		contenido += '						<th>Nombre</th>';
		contenido += '						<td><input name="nombre" type="text" value="" /></td>';
		contenido += '						<th>Email remitente</th>';
		contenido += '						<td><input name="email_remitente" type="text" value="" /></td>';
		contenido += '					</tr>';
		contenido += '					<tr>';
		contenido += '						<th>Para</th>';
		contenido += '						<td><input name="para" type="text" value="" /></td>';
		contenido += '						<th>Email destinatario </th>';
		contenido += '						<td><input name="email_destinatario" type="text" value="" /></td>';
		contenido += '					</tr>';
		contenido += '				</table>';
		contenido += '			</div>';
		contenido += '			<div class="envianoticiaD">';
		contenido += '				<textarea name="comentario" cols="5" rows="5"></textarea>';
		contenido += '			</div>';
		contenido += '			<div class="clear"></div>';
		contenido += '		</div>';
		contenido += '		<div class="envianoticia-botones boton"><a href="#" onclick="window.document.envio_noticia.reset()">Borrar</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:enviarNoticia();">Enviar</a></div>';
		contenido += '	</fieldset>';
		contenido += '</form>	';
		
		window.document.getElementById('contenidoenvianoticia').innerHTML = contenido;
	}
	
	
	function rectificarNoticia(){
		
		var max_longitud = 120;
		
		var formulario =  window.document.rectificar_noticia;
		
		var nombre = formulario.nombre.value;
		var email = formulario.email.value;
		var comentario = formulario.comentario.value;
		
		if (!nombre || !email || !comentario)  {
			alert('No ha rellenado todos los campos');
			return;	
		}
		
		if (!checkemail(email)) {
			alert('El email no es correcto');
			formulario.email_remitente.focus();
			return;	
		}
		
		var http = createRequestObject();
		var qs = "nombre=" + encodeURIComponent(nombre) + "&email=" + encodeURIComponent(email) + "&comentario=" + encodeURIComponent(comentario);
		qs += "&url=" + encodeURIComponent(window.document.location.href);
//		http.open("get", "/backend/rectificar_noticia.php?" + qs +"&r=" + Math.random());
      http.open("post", "/backend/rectificar_noticia.php", true);
      http.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
		http.onreadystatechange = function () {
			if(http.readyState == 4){
				if (http.responseText) {
					if (http.responseText.indexOf('OK') > -1) {
						var url_mostrar = (window.document.location.href.length > max_longitud) ? window.document.location.href.substr(0, max_longitud) + "..." : window.document.location.href;
						elHTML = "<form action=><div class=envianoticia><div class=envianoticiaOK><p>Su rectificación ha sido enviada correctamente.</p><p>Página enviada:</p><p class=url><a href='" + window.document.location.href + "' title='" + window.document.location.href + "'>" + url_mostrar + "</a></p></div><div class=clear></div></div><div class='envianoticia-botones boton'><a href=javascript:cerrarRectificarNoticia();>Cerrar</a></div></form>";
					}
					else {
						elHTML = "<form action=><div class=envianoticia><div class=envianoticiaOK><p>Ha ocurrido un ERROR al enviar la rectificación, por favor intentelo más tarde.</p></div><div class=clear></div></div><div class='envianoticia-botones boton'><a href=javascript:cerrarRectificarNoticia();>Cerrar</a></div></form>";
					
					}
					
					formulario.reset();			
				
					window.document.getElementById('contenidorectificanoticia').innerHTML = elHTML;
	
						
				}
			}	
		};
//		http.send(null);	
		http.send(qs);   
	}
	
	function cerrarRectificarNoticia() {
		var contenido;
		
		window.document.getElementById('rectificalanoticia').style.display = 'none';
		
		contenido = '<form name="rectificar_noticia">';
                contenido += '      <fieldset>';
                contenido += '      <div class="rectificanoticia">';
                contenido += '        <p>Rellene todos los campos con sus datos.</p>';
                contenido += '        <div class="rectificanoticiaI">';
                contenido += '          <table width="99%" border="0" cellspacing="0" cellpadding="0">';
                contenido += '            <tr>';
                contenido += '              <th width="12%">Nombre<span class="obligatorio">*</span></th>';
                contenido += '              <td width="38%"><input name="nombre" type="text" value="" /></td>';
                contenido += '              <th width="9%">Email<span class="obligatorio">*</span></th>';
                contenido += '              <td width="41%"><input name="email" type="text" value="" /></td>';
                contenido += '            </tr>';
                contenido += '            <!--tr>';
                contenido += '              <th colspan="4">URL de la noticia<span class="obligatorio">*';
                contenido += '                <input name="text2" class="url" type="text" value="http://www.elcorreodigital.com/vizcaya/20070319/politicasdas das das das das das das ... " />';
		contenido += '		</span></th>';
                contenido += '            </tr-->';
                contenido += '          </table>';
		contenido += '				  </div>';
                contenido += '        <div class="rectificanoticiaD">';
                contenido += '          <textarea cols="5" rows="5" name="comentario"></textarea>';
                contenido += '        </div>';
                contenido += '        <div class="clear"></div>';
                contenido += '      </div>';
                contenido += '      <div class="envianoticia-botones boton"><span class="obligatorio" style="float:left;">* campo obligatorio</span><a href="#" onclick="window.document.rectificar_noticia.reset()">Borrar</a>&nbsp;&nbsp;&nbsp;&nbsp;<a href="javascript:rectificarNoticia();">Enviar</a></div>';
                contenido += '      </fieldset>';
                contenido += '    </form>	';
		
		window.document.getElementById('contenidorectificanoticia').innerHTML = contenido;
	}
	
	function votarticulo(puntos) {
		
		var direccion;
		
		if (window.document.location.href.indexOf('?') > 0) {
			var campos = window.document.location.href.split('?');
			direccion = campos[0];
		}
		else {
			direccion = window.document.location.href;
		}	
		
		var http = createRequestObject();
		http.open("get", "/backend/votaciones/votar.php?puntos=" + puntos + "&url=" + direccion + "&r=" + Math.random());
		http.onreadystatechange = function () {
			if(http.readyState == 4){
				if (http.responseText) {
					gracias = "<div class=label>Gracias por votar</div>";
					document.getElementById('contenidoestrellas').innerHTML = gracias;
					getEstrellas();
					getVotos();
						
				}
			}	
		};
		http.send(null);		
	}
	
	function getEstrellas() {
		
		var direccion;
		
		if (window.document.location.href.indexOf('?') > 0) {
			var campos = window.document.location.href.split('?');
			direccion = campos[0];
		}
		else {
			direccion = window.document.location.href;
		}
		
		var http = createRequestObject();
		http.open("get", "/backend/votaciones/estrellas.php?url=" + direccion);
		http.onreadystatechange = function () {
			if(http.readyState == 4){
				if (http.responseText) {
					var estrellas = http.responseText;
					
					if (estrellas.indexOf(".")) {
			
						campos = estrellas.split(".");
						estrellas = campos[0];	
						var media = (campos[1] > 0) ? 1 : 0;
					}
					
					var contenido = '';
					
					for (i = 0; i < estrellas; i++) {
						contenido += '<img src="/img/star_on.gif" alt="' + i +' votos" />';
					}
					
					if (media == 1) {
						contenido += '<img src="/img/star_on_md.gif" alt="' + estrellas +' votos" />';
						estrellas++;
					}
					
					for (i = estrellas; i < 5; i++) {
						contenido += '<img src="/img/star_off.gif" alt="' + i +' votos" />';	
					}
					
					window.document.getElementById('resultados-votos').innerHTML = contenido;
						
				}
			}	
		};
		http.send(null);
			
	}
	
	function getVotos() {
		
		var direccion;
		
		if (window.document.location.href.indexOf('?') > 0) {
			var campos = window.document.location.href.split('?');
			direccion = campos[0];
		}
		else {
			direccion = window.document.location.href;
		}
		
		var http = createRequestObject();
		//http.open("get", "/backend/votaciones/votos.php?url=" + direccion +"&r=" + Math.random());
		http.open("get", "/backend/votaciones/votos.php?url=" + direccion);
		http.onreadystatechange = function () {
			if(http.readyState == 4){
				if (http.responseText) {
					var votos = http.responseText;
					if (votos == 1) {
						window.document.getElementById('numvotos-votos').innerHTML = votos + ' voto';
					}
					else {
						window.document.getElementById('numvotos-votos').innerHTML = votos + ' votos';
					}
				}
			}	
		};
		http.send(null);
			
	}
	
	
	function graficoeconomia(valor2){
	document.getElementById('pestibex').className = '';
	document.getElementById('pestnasdaq').className = '';
	document.getElementById('pestdowjones').className = '';
	pestanna = 'pest' + valor2;
	document.getElementById(pestanna).className = 'activo';
	
	bloquepestanna2 = 'graf' + valor2;
	document.getElementById('grafibex').style.display = 'none';
	document.getElementById('grafnasdaq').style.display = 'none';
	document.getElementById('grafdowjones').style.display = 'none';
	document.getElementById(bloquepestanna2).style.display = 'inline';
	}
	
	/*necrologicas*/
	
	function NecrologicaOver(){
		this.className = 'necrologica-activa';
	}
	
	function NecrologicaOut(){
		this.className = 'necrologica';
	}
	
	/************************* Canal Meteo *********************************/
	
var A_Corunna = new Array('Betanzos', 'Ferrol', 'La Coruña', 'Noia', 'Padrón', 'Santiago');
var Alava = new Array('Amurrio', 'Labastida', 'Laudio', 'Oión', 'Salvatierra', 'Vitoria - Gasteiz');
var Albacete = new Array('Albacete', 'Almansa', 'Hellín');
var Alicante = new Array('Alcoi', 'Alicante', 'Altea', 'Benidorm', 'Calpe', 'Denia', 'Elda', 'Elx', 'Jávea', 'La Vila Joiosa', 'Orihuela', 'Santa Pola', 'Torrevieja');
var Almeria = new Array('Adra', 'Almería', 'Cabo Gata', 'Mojácar', 'Roquetas', 'Vera');
var Asturias = new Array('Avilés', 'Cangas de Narcea', 'Gijón', 'Llanes', 'Luarca', 'Oviedo', 'Picos de Europa', 'Ribadesella');
var Avila = new Array('Ávila');
var Badajoz = new Array('Almendralejo', 'Badajoz', 'Don Benito', 'Jerez de los C.', 'Merida', 'Villanueva', 'Zafra');
var Baleares = new Array('Alcudia', 'Andratx', 'Artá', 'Calviá', 'Ciutadella', 'Deiá', 'Felanitx', 'Ibiza', 'Inca', 'Llucmajor', 'Manacor', 'Maó', 'Palma', 'Pollença', 'San Antonio', 'Santa Eulalia', 'Soller');
var Barcelona = new Array('Barcelona', 'Calella', 'Granollers', 'Igualada', 'Mataró', 'Sabadell', 'Sitges', 'Terrassa', 'Vic', 'Vilafranca', 'Vilanova');
var Bizkaia = new Array('Balmaseda', 'Bermeo', 'Bilbao', 'Durango', 'Ermua', 'Gernika-Lumo', 'Güeñes', 'Lekeitio', 'Mungía', 'Ondarroa', 'Orduña', 'Ortuella', 'Uribe-Kosta', 'Zornotza');
var Burgos = new Array('Aranda', 'Burgos', 'Miranda');
var Caceres = new Array('Cáceres', 'Plasencia', 'Trujillo');
var Cadiz = new Array('Algeciras', 'Cadíz', 'Chiclana', 'Grazalema', 'Jerez', 'La Linea', 'San Fernando', 'Sanlúcar', 'Tarifa');
var Cantabria = new Array('Arredondo', 'Castro', 'Comillas', 'Laredo', 'Noja', 'Potes', 'Puente Viesgo', 'Reinosa', 'San Vicente de la Barquera', 'Santander', 'Santillana', 'Suances', 'Torrelavega');
var Castellon = new Array('Benicassim', 'Castellón', 'Oropesa', 'Peñiscola', 'Vinaros');
var Ceuta = new Array('Ceuta');
var Ciudad_Real = new Array('Alcaza S.J.', 'Almagro', 'Ciudad Real', 'Valdepeñas');
var Cordoba = new Array('Córdoba', 'Lucena', 'Montilla', 'Palma del Río');
var Cuenca = new Array('Cuenca', 'Tarancón');
var Gipuzkoa = new Array('Andoain', 'Arrasate', 'Azpeitia', 'Beasain', 'Bergara', 'Donostia', 'Eibar', 'Hondarribia', 'Irún', 'Lasarte', 'Legazpi', 'Oiartzun', 'Oñati', 'Ordizia', 'Tolosa', 'Zarautz', 'Zumaia', 'Zumárraga');
var Girona = new Array('Blanes', 'Cadaqués', 'Figueres', 'Girona', 'Lloret', 'Palamós', 'Puigcerdá', 'Sant Feliu de Guixols');
var Granada = new Array('Almuñécar', 'Baza', 'Granada', 'Guadix', 'Motril', 'Nevada', 'Sierra');
var Guadalajara = new Array('Guadalajara');
var Huelva = new Array('Ayamonte', 'Huelva', 'Utera');
var Huesca = new Array('Barbastro', 'Benasque', 'Bielsa', 'Fraga', 'Huesca', 'Jaca', 'Monzón', 'Sabiñánigo', 'Sallent');
var Jaen = new Array('Andújar', 'Baeza', 'Cazorla', 'Jaén', 'Linares', 'Úbeda');
var La_Rioja = new Array('Alfaro', 'Arnedo', 'Calahorra', 'Ezcaray', 'Haro', 'Logroño', 'Nájera', 'Sto. Domingo');
var Las_Palmas = new Array('Fuerteventura', 'Lanzarote', 'Las Palmas');
var Leon = new Array('Astorga', 'León', 'Ponferrada');
var Lleida = new Array('Lleida', 'Seu d´Urgell', 'Tarregá');
var Lugo = new Array('Lugo', 'Monforte de Lemos', 'Ribadeo');
var Madrid = new Array('Alcalá', 'Aranjuez', 'Brunete', 'Buitrago', 'Collado Villalba', 'Colmenar', 'El Escorial', 'Getafe', 'Madrid', 'Majadahonda', 'Móstoles', 'Navacerrada', 'Parla', 'Pozuelo', 'R. Chavela', 'Torrejón');
var Malaga = new Array('Antequera', 'Benalmádena', 'Estepona', 'Málaga', 'Marbella', 'Mijas', 'Nerja', 'Ronda', 'Torremolinos');
var Melilla = new Array('Melilla');
var Murcia = new Array('Aguilas', 'Caravaca', 'Cartagena', 'Jumilla', 'La Manga', 'Lorca', 'Los Alcázares', 'Mazarrón', 'Mula', 'Murcia', 'San Javier', 'Yecla');
var Navarra = new Array('Aoiz', 'Estella', 'Isaba', 'Leiza', 'Lesaka', 'Pamplona', 'Roncesvalles', 'Sangüesa', 'Tafalla', 'Tudela');
var Ourense = new Array('Ourense', 'Verín');
var Palencia = new Array('Palencia');
var Pontevedra = new Array('Baiona', 'Cambados', 'O Grove', 'Pontevedra', 'Tui', 'Vigo', 'Vilagarcía de Arousa');
var Salamanca = new Array('Béjar', 'Ciudad Rodrigo', 'Salamanca');
var Santa_Cruz_de_Tenerife = new Array('Gomera', 'Hierro', 'La Palma', 'Santa Cruz', 'Tenerife Centro', 'Tenerife Sur');
var Segovia = new Array('Cuellar', 'Segovia');
var Sevilla = new Array('Alcalá de Guadaira', 'Carmona', 'Dos Hermanas', 'Écija', 'Sevilla', 'Utrera');
var Soria = new Array('Burgo de Osma', 'Soria');
var Tarragona = new Array('Cambrils', 'Reus', 'Salou', 'Tarragona', 'Tortosa');
var Teruel = new Array('Albarracín', 'Alcañiz', 'Calamocha', 'Teruel');
var Toledo = new Array('Talavera de la Reina', 'Toledo');
var Valencia = new Array('Alzira', 'Cullera', 'Gandía', 'Ontinyent', 'Requena', 'Sagunt', 'Valencia', 'Xativa');
var Valladolid = new Array('Medina del Campo', 'Valladolid');
var Zamora = new Array('Benavente', 'Toro', 'Zamora');
var Zaragoza = new Array('Calatayud', 'Caspe', 'Tarazona', 'Zaragoza');	
	
	function poblar(tipo) {
	
	var localidad = (tipo == 1) ? "localidad-m" : "localidad";
	var provincia = (tipo == 1) ? "provincia-m" : "provincia";
	
	var seleccionado = window.document.getElementById(provincia).options[window.document.getElementById(provincia).selectedIndex].value;
	if (seleccionado != "") {
		eval('poblaciones = ' + seleccionado);
		window.document.getElementById(localidad).length = poblaciones.length + 1;
		option = new Option("Seleccione Localidad","");
		window.document.getElementById(localidad).options[0] = option;
		for (i = 0; i < poblaciones.length; i++) {
			eval('option' + i + '= new Option(\"' + poblaciones[i] + '\", \"' + poblaciones[i] + '\")');
			eval('window.document.getElementById("' + localidad + '").options[i + 1]=option' + i);	
		}
		window.document.getElementById(localidad).selectedIndex = 0;
	}
	else {
		window.document.getElementById(localidad).length = 1;
		option = new Option("Seleccione Localidad","");
		window.document.getElementById(localidad).options[0] = option; 
	}
		


	}
	
	function poblar2() {
		var seleccionado = window.document.getElementById("provincia2").options[window.document.getElementById("provincia2").selectedIndex].value;
		if (seleccionado != "") {
			eval('poblaciones = ' + seleccionado);
			window.document.getElementById("localidad2").length = poblaciones.length + 1;
			option = new Option("Seleccione Localidad","");
			window.document.getElementById("localidad2").options[0] = option;
			for (i = 0; i < poblaciones.length; i++) {
				eval('option' + i + '= new Option(\"' + poblaciones[i] + '\", \"' + poblaciones[i] + '\")');
				eval('window.document.getElementById("localidad2").options[i + 1]=option' + i);	
			}
			window.document.getElementById("localidad2").selectedIndex = 0;
		}
		else {
			window.document.getElementById("localidad2").length = 1;
			option = new Option("Seleccione Localidad","");
			window.document.getElementById("localidad2").options[0] = option; 
		}
			
	}
	
	
	function actualizaTiempo(ciudad, tipo) {
		
		if (ciudad) {
			ciudad = withoutCutes(ciudad.toLowerCase());
			var http = createRequestObject();
			http.open("get", "/includes/manuales/tiempo/include_" + ciudad + ".xml?r=" + Math.random());
			http.onreadystatechange = function () {
				if(http.readyState == 4){
					if (http.responseXML) {
						cambiaTiempo(http.responseXML, tipo);
							
					}
				}	
			};
			http.send(null);
		}	
		else {
			window.alert("Por favor, seleccione una localidad.");
			return;		
		}
	}
	
	function cambiaTiempo(response, tipo) {
		if (response) {
			var localidad = response.getElementsByTagName('localidad').item(0).firstChild.data; 
			var mapa = response.getElementsByTagName('mapa').item(0).firstChild.data;
			var m = (tipo == 1) ? "-m" : "";
			
			// Esto es porque el Explorer y el Firefox interpretan distinto el XML
			
			if (response.getElementsByTagName('previsiones').item(0).childNodes.length == 13) {
				
				var tiempo_hoy = response.getElementsByTagName('previsiones').item(0).childNodes[7].childNodes[3].firstChild.data;
				var temperaturamax_hoy = response.getElementsByTagName('previsiones').item(0).childNodes[7].childNodes[5].firstChild.data;
				var temperaturamin_hoy = response.getElementsByTagName('previsiones').item(0).childNodes[7].childNodes[7].firstChild.data;
				
				var dia_manana = response.getElementsByTagName('previsiones').item(0).childNodes[9].childNodes[1].firstChild.data;
				var tiempo_manana = response.getElementsByTagName('previsiones').item(0).childNodes[9].childNodes[3].firstChild.data;
				var temperaturamax_manana = response.getElementsByTagName('previsiones').item(0).childNodes[9].childNodes[5].firstChild.data;
				var temperaturamin_manana = response.getElementsByTagName('previsiones').item(0).childNodes[9].childNodes[7].firstChild.data;
				
				var dia_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[11].childNodes[1].firstChild.data;
				var tiempo_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[11].childNodes[3].firstChild.data;
				var temperaturamax_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[11].childNodes[5].firstChild.data;
				var temperaturamin_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[11].childNodes[7].firstChild.data;
			}
			else {
				var tiempo_hoy = response.getElementsByTagName('previsiones').item(0).childNodes[3].childNodes[1].firstChild.data;
				var temperaturamax_hoy = response.getElementsByTagName('previsiones').item(0).childNodes[3].childNodes[2].firstChild.data;
				var temperaturamin_hoy = response.getElementsByTagName('previsiones').item(0).childNodes[3].childNodes[3].firstChild.data;
				var dia_manana = response.getElementsByTagName('previsiones').item(0).childNodes[4].childNodes[0].firstChild.data;
				var tiempo_manana = response.getElementsByTagName('previsiones').item(0).childNodes[4].childNodes[1].firstChild.data;
				var temperaturamax_manana = response.getElementsByTagName('previsiones').item(0).childNodes[4].childNodes[2].firstChild.data;
				var temperaturamin_manana = response.getElementsByTagName('previsiones').item(0).childNodes[4].childNodes[3].firstChild.data;
				var dia_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[5].childNodes[0].firstChild.data;
				var tiempo_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[5].childNodes[1].firstChild.data;
				var temperaturamax_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[5].childNodes[2].firstChild.data;
				var temperaturamin_pasado = response.getElementsByTagName('previsiones').item(0).childNodes[5].childNodes[3].firstChild.data;
			}
			
			if (tipo ==  0) {
				var contenido = '<table border="0" cellspacing="0" cellpadding="0">';
				contenido += '          <tr>';
				contenido += '            <td rowspan="3" scope="col" class="imagentiempo"><img alt="" width="106" height="81" src="' + mapa + '"></td>';
				contenido += '            <th scope="col">';
				contenido += '              <strong>Hoy</strong>';
				contenido += '            </th>';
				contenido += '            <th scope="col">';
				contenido += '              <strong>' + dia_manana + '</strong>';
				contenido += '            </th>';
				contenido += '            <th scope="col">';
				contenido += '              <strong>' + dia_pasado + '</strong>';
				contenido += '            </th>';
				contenido += '            <td rowspan="3" scope="col" class="enlacetiempo">';
				contenido += '              <p>';
				contenido += '                <a href="#" onclick="cambiarLocalidad()">Cambiar<br>';
				contenido += '                  localidad</a>';
				contenido += '              </p>';
				contenido += '              <div class="separa"></div>';
				contenido += '              <p>';
				contenido += '                <a href="#" onclick="irMeteo(\'' + localidad + '\')">Ver<br>';
				contenido += '                    previsi&oacute;n</a>';
				contenido += '              </p>';
				contenido += '            </td>';
				contenido += '          </tr>';
				contenido += '          <tr>';
				contenido += '            <td><img src="/img/meteo/' + tiempo_hoy + '.gif" alt="" width="29" height="22"></td>';
				contenido += '            <td><img src="/img/meteo/' + tiempo_manana + '.gif" alt="" width="29" height="22"></td>';
				contenido += '            <td><img src="/img/meteo/' + tiempo_pasado + '.gif" alt="" width="29" height="22"></td>';
				contenido += '          </tr>';
				contenido += '          <tr>';
				contenido += '            <td class="temperatura">' + temperaturamax_hoy + '&ordm; / ' + temperaturamin_hoy + '&ordm;</td>';
				contenido += '            <td class="temperatura">' + temperaturamax_manana + '&ordm; / ' + temperaturamin_manana + '&ordm;</td>';
				contenido += '            <td class="temperatura">' + temperaturamax_pasado + '&ordm; / ' + temperaturamin_pasado + '&ordm;</td>';
				contenido += '          </tr>';
				contenido += '        </table>';
				
				window.document.getElementById('ciudad').innerHTML = 'en ' + localidad; 
			}
			else {
				var contenido = '<table border="0" cellspacing="0" cellpadding="0">';
				contenido += '    <tr>';
				contenido += '      <td rowspan="3" scope="col" class="imagentiempo"><img alt="" width="106" height="81" id="mapa" src="' + mapa + '"></td>';
				contenido += '      <th scope="col">';
				contenido += '        <strong>Hoy</strong>';
				contenido += '      </th>';
				contenido += '      <th scope="col">';
				contenido += '        <strong>' + dia_manana + '</strong>';
				contenido += '      </th>';
				contenido += '     <th scope="col">';
				contenido += '        <strong>' + dia_pasado + '</strong>';
				contenido += '      </th>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '      <td><img src="/img/meteo/' + tiempo_hoy + '.gif" alt="" width="29" height="22"></td>';
				contenido += '      <td><img src="/img/meteo/' + tiempo_manana + '.gif" alt="" width="29" height="22"></td>';
				contenido += '      <td><img src="/img/meteo/' + tiempo_pasado + '.gif" alt="" width="29" height="22"></td>';
				contenido += '    </tr>';
				contenido += '    <tr>';
				contenido += '        <td class="temperatura">' + temperaturamax_hoy + '&ordm; / ' + temperaturamin_hoy + '&ordm;</td>';
				contenido += '        <td class="temperatura">' + temperaturamax_manana + '&ordm; / ' + temperaturamin_manana + '&ordm;</td>';
				contenido += '        <td class="temperatura">' + temperaturamax_pasado + '&ordm; / ' + temperaturamin_pasado + '&ordm;</td>';
				contenido += '    </tr>';
				contenido += '  </table>';
			}
			
			window.document.getElementById('eltiempo-datos' + m).innerHTML = contenido;
			
			window.document.getElementById('eltiempo-datos' + m).style.display = 'block';
			window.document.getElementById('eltiempo-seleccion' + m).style.display = 'none'	
			
			setCookie('ciudad', localidad, 'Tue, 31-Dec-2010 00:00:00 GMT');
		}
		
	}
	
	
	function cambiarLocalidad(tipo) {
		
		var m = (tipo == 1) ? "-m" : "";
		
		window.document.getElementById('eltiempo-datos' + m).style.display = 'none';
		window.document.getElementById('eltiempo-seleccion' + m).style.display = 'block'		
	}
	
	function irMeteo(ciudad) {
		
		ciudad = getCookie('ciudad') ? getCookie('ciudad') : ciudad;
		
		if (ciudad) {
			var dir = document.location.href;
			campos = dir.split("/");
			campos2 = campos[2].split(".");
			window.location = 'http://canalmeteo.' + campos2[1] + '.' + campos2[2]+ "/ciudad.php?ciudad=" + escape(ciudad);	
		}
	}
	
	function tieneCookie(tipo) {
		var ciudad = getCookie('ciudad');
		if (ciudad) {
			actualizaTiempo(ciudad, tipo);
		}	
	}
	
	/************************* FIN Canal Meteo *********************************/
	
	
	/***************************** Comentarios **********************************/
	
	var ids_noticias = '';
	
	function getNumComentariosPortada(id) {
		
		ids_noticias = (ids_noticias != '') ? ids_noticias + '|' + id : id;
		
		if (window.document.getElementById('num-comentarios-' + id)) window.document.getElementById('num-comentarios-' + id).innerHTML = 'Comenta esta noticia';
                     
	 }
	 
	 function setNumComentariosPortada(id, v) {
	 	
	 	v = typeof(v) != 'undefined' ? v : '';
	 	
	 	var dir;
	 	
	 	if (id) {
	 		var http = createRequestObject();
	 		
	 		dir = '/backend/comentarios' + v + '/getComentariosPortada.php?id=' + id + '&by=date';
	 		
                        http.open('get', dir);
                        http.onreadystatechange = function () {
       				 if(http.readyState == 4){
                                	if (http.responseText) {     
                                                var campos = http.responseText.split('|');
                                                var limite = campos.length;
                                                var i = limite - 1;
                                                do {
                                                	campos2 = campos[i].split('@');
                                                       	
                                                       	var num = campos2[1];
                                                        
                                                        switch (num) {
                                                        	case '0':
                                                        		if (window.document.getElementById('num-comentarios-' + campos2[0])) window.document.getElementById('num-comentarios-' + campos2[0]).innerHTML = 'Comenta esta noticia';
                                                        		break;
                                                        	case '1':
                                                        		if (window.document.getElementById('num-comentarios-' + campos2[0])) window.document.getElementById('num-comentarios-' + campos2[0]).innerHTML = '<strong>' + num + '</strong> Comentario';
                                                        		break;
                                                        	default:
                                                        		if (window.document.getElementById('num-comentarios-' + campos2[0])) window.document.getElementById('num-comentarios-' + campos2[0]).innerHTML = '<strong>' + num + '</strong> Comentarios';
                                                        		break;		
                                                        }
                                                }
                                               while (i--);

                                        }
                                }
                        };
                        http.send(null);	
	 	}	
	 }
       	
       	function getNumComentarios(id) {
		if (id) {
			var http = createRequestObject();
			//http.open("get", "/backend/comentarios/getComentarios.php?id=" + id + "&by=date&r=" + Math.random());
			http.open("get", "/backend/comentarios/getComentarios.php?id=" + id + "&by=date");
			http.onreadystatechange = function () {
				
				if(http.readyState == 4){
					if (http.responseXML) {
						if (http.responseText.indexOf('comments') != -1) {
						//if (http.responseXML.getElementsByTagName('comments')) {
							var num = http.responseXML.getElementsByTagName('total_comments')[0].firstChild.data;
							window.document.getElementById('num-comentarios').innerHTML = '(' + num + ')';
						}
						
					}
				}	
			};
			http.send(null);
		}			
	}

	
	function getComentarios(id, by, v, a) {
		
		v = typeof(v) != 'undefined' ? v : '';
		a = typeof(a) != 'undefined' ? a : 1;
		
		var dir;
		
		if (id) {
			var http = createRequestObject();
			
			dir = '/backend/comentarios' + v + '/getComentarios.php?id=' + id + '&by=' + by + (a ? '' : '&r=' + Math.random());
			
			http.open('get', dir); 
			http.onreadystatechange = function () {
				
				if(http.readyState == 4){
					if (http.responseXML) {
						if (http.responseText.indexOf('comments') != -1) {
							
							eval('muestraComentarios' + v + '(http.responseXML)');
							
							window.document.getElementById('lomasreciente').className = (by == 'date') ? 'activo' : '';
							window.document.getElementById('lomasvalorado').className = (by == 'votes') ? 'activo' : '';
						}
						
					}
				}	
			};
			http.send(null);
		}		
	}
	
	
	
	function muestraComentarios(response) {
		
		var contenido;
		var html;
		var fecha_load = new Date();
		var browser = navigator.appName;
		var positive_votes;
		var negative_votes;
		
		var limite = response.getElementsByTagName('comment').length;
		html = '<div class="numopiniones"><span>' + response.getElementsByTagName('total_comments')[0].firstChild.data + ' OPINIONES</span></div>';
		
		limite_b = (limite > 5) ? 5 : limite;
		
		for (i = 0; i < limite_b; i++) {
			
			id = response.getElementsByTagName('id')[i].firstChild.data;
			fecha = response.getElementsByTagName('date')[i].firstChild.data;
			campos = fecha.split(' ');
			hora = campos[3];
			nombre = response.getElementsByTagName('name')[i].firstChild ? response.getElementsByTagName('name')[i].firstChild.data : '';
			if (browser == 'Microsoft Internet Explorer'){
				texto = response.getElementsByTagName('content')[i].firstChild.data;
			}
			else {
				texto = response.getElementsByTagName('content')[i].childNodes[1].data;
			}
			
			positive_votes = response.getElementsByTagName('positive_votes')[i].firstChild.data;
			negative_votes = response.getElementsByTagName('negative_votes')[i].firstChild.data;
			
			fecha = campos[2] + "/" + campos[1] + "/" + campos[5];
			
			contenido = '	<div class="opinion">';
	              	contenido += '<div class="fecha">' + fecha + ' | <span class="hora">' + hora + '</span></div>';
	   		contenido += '<h3>' + unescape(nombre) + '</h3>';
	              	contenido += '<div class="texto">' + unescape(texto) + '</div>';
	              	contenido += '<div class="detalles-opinion">';
	                contenido += '<div class="favorcontra" id="favorcontra-' + id + '"><a href="javascript:votarComentario(' + id+ ', 1);" class="afavor">A';
	                contenido += '    favor (' + positive_votes + ')</a><a href="javascript:votarComentario(' + id + ', 2);" class="encontra">En';
	                contenido += '    contra (' + negative_votes + ')</a></div>';
	                contenido += '<div class="inadecuado" id="inadecuadoboton"><a href="javascript:mostrarDenunciar(' + id + ');" class="boton" title="Comentario inadecuado"><img src="/img/ico_inadecuado.gif" alt="Comentario inadecuado" />Comentario';
	                contenido += '    inadecuado</a></div>';
	                contenido += '<div class="clear"></div>';
	              	contenido += '</div>';
	              	contenido += '<div class="formdenunciar" id="formdenunciar-' + id + '" style="display:none;">';
	              	contenido += '<form name="formulario_' + id + '" action="/backend/comentarios/denunciarComentario.php" method="post">';
	                contenido += '<input type="hidden" name="load_time" value="' + fecha_load.getTime() + '">';
			contenido += '<input type="hidden" name="submit_time" value="0">';
			contenido += '<input type="hidden" name="id" value="' + id + '">';
			contenido += '<input type="hidden" name="anchor" value="comentarios">';
	                contenido += '<p>Por favor seleciona el motivo por el que crees que este comentario';
	                contenido += '  es inadecuado </p>';
	                contenido += '<textarea name="denuncia_' + id + '">Escriba aquí el motivo de la denuncia.</textarea>';
	                contenido += '<a href="javascript:denunciarComentario(' + id + ');" class="boton">denunciar comentario</a>';
	                contenido += '</label>';
	                contenido += '<div class="clear"></div>';
	              	contenido += '</div>';
	              	contenido += '<div class="clear"></div>';
	              	contenido += '</form>';
	            	contenido += '</div>';
	            	
	            	html += contenido;
            	}
            	
            	window.document.getElementById('listado-comentarios').innerHTML = html;
            	
            	verMas(limite);
			
	}
	
	function muestraComentarios2(response, pagina) {
		var contenido;
		var html;
		var fecha_load = new Date();
		var browser = navigator.appName;
		var positive_votes;
		var negative_votes;
		var max_comentarios = 5;
		
		pagina = typeof(pagina) != 'undefined' ? pagina : 1;
		
		var limite = response.getElementsByTagName('comment').length;
		html = '<div class="numopiniones"><span>' + response.getElementsByTagName('total_comments')[0].firstChild.data + ' OPINIONES</span></div>';
		
		if (window.document.getElementById('num-comentarios')) {
			window.document.getElementById('num-comentarios').innerHTML = '(' + response.getElementsByTagName('total_comments')[0].firstChild.data + ')';	
		}
		
		var limite_b = ((((pagina - 1) * max_comentarios) + max_comentarios) > limite) ? limite : (((pagina - 1) * max_comentarios) + max_comentarios);
		var inicio = (pagina - 1) * max_comentarios;
		var paginas = Math.ceil(limite / max_comentarios);
		
		var pagina_ver = (pagina < 10) ? '0' + pagina : pagina;
		var paginas_ver = (paginas < 10) ? '0' + paginas : paginas;
		
		for (var i = inicio; i < limite_b; i++) {
			
			var id = response.getElementsByTagName('id')[i].firstChild.data;
			
			var fecha = response.getElementsByTagName('date')[i].firstChild.data;
			var campos = fecha.split(' ');
			var hora = campos[3];
			
			fecha = campos[2] + "/" + campos[1] + "/" + campos[5];
			
			/*
			var fecha = response.getElementsByTagName('date')[i].firstChild.data;
			var hora = fecha.substr(8,2) + ':' + fecha.substr(10,2)
			*/
			var nombre = response.getElementsByTagName('name')[i].firstChild ? response.getElementsByTagName('name')[i].firstChild.data : '';
			if (browser == 'Microsoft Internet Explorer'){
				var texto = response.getElementsByTagName('content')[i].firstChild.data;
			}
			else {
				var texto = response.getElementsByTagName('content')[i].childNodes[1].data;
			}
			
			positive_votes = response.getElementsByTagName('positive_votes')[i].firstChild.data;
			negative_votes = response.getElementsByTagName('negative_votes')[i].firstChild.data;
			//fecha = fecha.substr(6,2) + "/" + fecha.substr(4,2) + "/" + fecha.substr(0,4);
			contenido = '	<div class="opinion">';
			contenido += '<div class="fecha">' + fecha + ' | <span class="hora">' + hora + '</span></div>';
	   		contenido += '<h3>' + unescape(nombre) + '</h3>';
			contenido += '<div class="texto">' + unescape(texto) + '</div>';
			contenido += '<div class="detalles-opinion">';
			contenido += '<div class="favorcontra" id="favorcontra-' + id + '"><a href="javascript:votarComentario(' + id+ ', 1, 2);" class="afavor">A';
			contenido += '    favor (' + positive_votes + ')</a><a href="javascript:votarComentario(' + id + ', 2, 2);" class="encontra">En';
			contenido += '    contra (' + negative_votes + ')</a></div>';
			contenido += '<div class="inadecuado" id="inadecuadoboton"><a href="javascript:mostrarDenunciar(' + id + ');" class="boton" title="Comentario inadecuado"><img src="/img/ico_inadecuado.gif" alt="Comentario inadecuado" />Comentario';
			contenido += '    inadecuado</a></div>';
			contenido += '<div class="clear"></div>';
			contenido += '</div>';
			contenido += '<div class="formdenunciar" id="formdenunciar-' + id + '" style="display:none;">';
			contenido += '<form name="formulario_' + id + '" action="/backend/comentarios2/denunciarComentario.php" method="post">';
			contenido += '<input type="hidden" name="load_time" value="' + fecha_load.getTime() + '">';
			contenido += '<input type="hidden" name="submit_time" value="0">';
			contenido += '<input type="hidden" name="id" value="' + id + '">';
			contenido += '<input type="hidden" name="anchor" value="comentarios">';
			contenido += '<p>Por favor seleciona el motivo por el que crees que este comentario';
			contenido += '  es inadecuado </p>';
			contenido += '<textarea name="denuncia">Escriba aquí el motivo de la denuncia.</textarea>';
			contenido += '<a href="javascript:denunciarComentario(' + id + ');" class="boton">denunciar comentario</a>';
			contenido += '</label>';
			contenido += '<div class="clear"></div>';
			contenido += '</div>';
			contenido += '<div class="clear"></div>';
			contenido += '</form>';
			contenido += '</div>';

			html += contenido;
		}
		
		if (limite > max_comentarios) {
			html += '<div class="botones-listado"><a id="anterior" href="javascript:nada()" class="boton anterior">&lt;&lt;';
                  	html += 'Anterior</a>&nbsp;&nbsp;<span><strong>' + pagina_ver + '</strong>/' + paginas_ver + '</span>&nbsp;&nbsp;<a id="siguiente" href="javascript:nada()" class="boton siguiente">Siguiente';
                  	html += '&gt;&gt; </a></div>';	
		}		
		
		window.document.getElementById('listado-comentarios').innerHTML = html;
		
		
		if (limite > max_comentarios) {
			
			window.document.getElementById('anterior').onclick = function () {
				if (pagina != 1) {
					muestraComentarios2(response, (pagina - 1));	
				}	
				else {
					muestraComentarios2(response, pagina);
				}
							
			}
			
			window.document.getElementById('siguiente').onclick = function () {
				if (pagina != paginas) {
					muestraComentarios2(response, (pagina + 1));	
				}
				else {
					muestraComentarios2(response, pagina);
				}
								
			}
		}
		
	}
	
	function nada() {
		return;	
	}

	
	function desconectar() {
		window.location = '/backend/desconectar.php?url=' + window.location.href;
			
	}
	
	function conectar() {
		
		var direccion;
		
		if (window.document.location.href.indexOf('?') > 0) {
			var campos = window.document.location.href.split('?');
			direccion = campos[0];
		}
		else {
			direccion = window.document.location.href;
		}
		
		var qs = 'url=' + direccion;
		qs += '&email=' + window.document.logueo.email.value;
		qs += '&contrasena=' + window.document.logueo.contrasena.value;
		 
		window.location = '/backend/conectar.php?' + qs;	
	}
	
	function enviaComentario() {
	  var fecha_submit = new Date();
          var filter=/^[A-Za-z][A-Za-z0-9_.]*@[A-Za-z0-9_]+\.[A-Za-z0-9_.]+[A-za-z]$/;
	  
	  if (window.document.formulario.author_name.value == '') {
	  	alert('Por favor, introduce tu nombre');
	  	window.document.formulario.author_name.focus();
	  	return;	
	  }
	  
	  if (window.document.formulario.author_email.value == '') {
	  	alert('Por favor, introduce tu email');
	  	window.document.formulario.author_email.focus();
	  	return;	
	  }

	  if (!filter.test(window.document.formulario.author_email.value)) {
		alert('El email introducido no es válido');
		 window.document.formulario.author_email.focus();
                return;

	  }
	  
	  if (window.document.formulario.message.value == '') {
	  	alert('Por favor, introduce tu opinión');
	  	window.document.formulario.message.focus();
	  	return;	
	  }
	  
	  if (!window.document.formulario.acepto.checked) {
	  	alert('Tienes que aceptar las condiciones de uso');
	  	return;	
	  }
	  
	  var registrado = getCookie('registrado') ? ' (Usuario registrado)' : '';
	  
	  window.document.formulario.message.value = window.document.formulario.message.value;
	  window.document.formulario.author_name.value = window.document.formulario.author_name.value + registrado;
	  
	  window.document.formulario.submit_time.value = fecha_submit.getTime();
	  window.document.formulario.submit();
	  alert('Gracias por escribir un comentario');
	}
	
	function votarComentario(id, tipo, v) {
		
		v = typeof(v) != 'undefined' ? v : '';
		
		var dir;
		
		if (id) {
			var http = createRequestObject();
			
			dir = '/backend/comentarios' + v + '/votarComentario.php?id=' + id + '&tipo=' + tipo + '&r=' + Math.random();
			
			http.open('get', dir); 
			
			http.onreadystatechange = function () {
				if(http.readyState == 4){
					if (http.responseText) {
						var response = http.responseText;
						
						if (response.indexOf('ok')) {
							if (tipo == 1) {
								window.document.getElementById('favorcontra-' + id).innerHTML = '<span class="afavor">A favor</span> <span class="mensaje">| Gracias por votar</span>';	
							}
							else {
								window.document.getElementById('favorcontra-' + id).innerHTML = '<span class="encontra">En contra</span> <span class="mensaje">| Gracias por votar</span>';
							}
						}
							
					}
				}	
			};
			http.send(null);
		}		
	}
	
	function mostrarDenunciar(id) {
		var display = window.document.getElementById('formdenunciar-' + id).style.display;
		if (display == 'none' && !getCookie('registrado')) {
			alert('Para denunciar un comentario Regístrate');
			return;	
		}
		window.document.getElementById('formdenunciar-' + id).style.display = (display == 'none') ? 'block' : 'none';
	}
	
	function denunciarComentario(id) {
		var fecha_submit = new Date();
		eval('var formu = window.document.formulario_' + id);
		formu.submit_time.value = fecha_submit.getTime();
		formu.submit();
		 alert('Gracias por denunciar el comentario');
		
	}
	
	function muestraLogueo() {
		window.document.getElementById('artlogeo').style.display = '';	
	}
	
	function borrarTexto() {
		if (window.document.formulario.message.value == 'escribe aquí tu comentario') {
			window.document.formulario.message.value = '';	
		}	
	}
	
	/***************************** FIN Comentarios **********************************/
	
	function tienda(modulo,maximo){
                for (iq = 1; iq < maximo+1; iq++) {
                        bloque = "modulotienda" + iq;
                        //alert('oculto ' + bloque);
                        document.getElementById(bloque).style.display = 'none';
                }
       
                presentar = "modulotienda" + modulo;
                //alert('presento ' + presentar );
                document.getElementById(presentar).style.display = 'block';
       
	}

	function personalizaedicion(){
        document.getElementById('personalizaedicion').style.display = 'inline';
        }
                
        function personalizar(edicion) {
        	setCookie('plocales', edicion, 'Sun, 21 Jun 2900 00:00:01 GMT', '/');
        	tb_remove();
        	window.location = '/' + edicion;
	}

	

//-->
