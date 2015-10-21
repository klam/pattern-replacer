
arrayGoogle = new Array(18);
arrayGoogle[0] = 'Adsl';
arrayGoogle[1] = 'Amor';
arrayGoogle[2] = 'Amigos';
arrayGoogle[3] = 'Belleza';
arrayGoogle[4] = 'Créditos';
arrayGoogle[5] = 'Coches';
arrayGoogle[6] = 'Cursos';
arrayGoogle[7] = 'Hipotecas';
arrayGoogle[8] = 'Hoteles ';
arrayGoogle[9] = 'Oposiciones';
arrayGoogle[10] = 'Regalos';
arrayGoogle[11] = 'Restaurantes';
arrayGoogle[12] = 'Seguros de coche';
arrayGoogle[13] = 'Software';
arrayGoogle[14] = 'Turismo rural';
arrayGoogle[15] = 'Viajes';
arrayGoogle[16] = 'Videojuegos';
arrayGoogle[17] = 'Vuelos';
arrayGoogle[18] = 'Vuelos baratos';

function aleatorio(inferior,superior){ 
   numPosibilidades = superior - inferior 
   aleat = Math.random() * numPosibilidades 
   aleat = Math.floor(aleat) 
   return parseInt(inferior) + aleat 
} 

function RotaGoogle(){
	//var fecha = new Date();
	//var aleatgoogle = fecha.getSeconds() % 9;
	//return ( arrayGoogle[aleatgoogle] );
	aleatgoogle = aleatorio(0,arrayGoogle.length); 
	return ( arrayGoogle[aleatgoogle] );
}

mi_url = window.document.URL;
if((mi_url.indexOf("eldiariomontanes.es") <= 0) && (mi_url.indexOf("lavozdigital.es") <= 0) && (mi_url.indexOf("elcomerciodigital.com") <= 0) && (mi_url.indexOf("diariosur.es") <= 0) && (mi_url.indexOf("larioja.com") <= 0) && (mi_url.indexOf("hoy.es") <= 0)  && (mi_url.indexOf("nortecastilla.es") <= 0) && (mi_url.indexOf("ideal.es") <= 0) && (mi_url.indexOf("lasprovincias.es") <= 0) && (mi_url.indexOf("elcorreodigital.com") <= 0) && (mi_url.indexOf("diariovasco.com") <= 0)) {
		document.form_buscador_cabecera.qAND.value = RotaGoogle();
}
