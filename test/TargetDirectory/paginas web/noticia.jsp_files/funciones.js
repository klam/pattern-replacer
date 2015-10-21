
function addLoadEvent(func) {
  var oldonload = window.onload;
  if (typeof window.onload != 'function') {
    window.onload = func;
  } else {
    window.onload = function() {
      if (oldonload) {
        oldonload();
      }
      func();
    }
  }
}

function MM_openBrWindow(theURL,winName,features) 
{
  window.open(theURL,winName,features);
}

function fAbrirVentana(theURL,winName,features) { //v2.0
			window.open(theURL,winName,features);
}


function MM_reloadPage(init) 
{  //reloads the window if Nav4 resized
  if (init==true) with (navigator) {if ((appName=="Netscape")&&(parseInt(appVersion)==4)) {
    document.MM_pgW=innerWidth; document.MM_pgH=innerHeight; onresize=MM_reloadPage; }}
  else if (innerWidth!=document.MM_pgW || innerHeight!=document.MM_pgH) location.reload();
}
MM_reloadPage(true);



function desseleccionarMenus()
{

	var capamenu1= document.getElementById("menu1");
	capamenu1.className="menuprincipal";
	
	var capamenu2= document.getElementById("menu2");
	capamenu2.className="menuprincipal";

	var capamenu3= document.getElementById("menu3");
	capamenu3.className="menuprincipal";

	var capamenu4= document.getElementById("menu4");
	capamenu4.className="menuprincipal";

	var capamenu5= document.getElementById("menu5");
	capamenu5.className="menuprincipal";

	var capamenu6= document.getElementById("menu6");
	capamenu6.className="menuprincipal";
	
	var capamenu7= document.getElementById("menu7");
	capamenu7.className="menuprincipal";
	
	var capamenu8= document.getElementById("menu8");
	capamenu8.className="menuprincipal";
	
	var capamenu9= document.getElementById("menu9");
	capamenu9.className="menuprincipal";
	
	var capamenu10= document.getElementById("menu10");
	capamenu10.className="menuprincipal";
}

function ocultarSubmenus()
{

//alert("OcultarSubmenus");


	var capasubmenu1= document.getElementById("submenu1");
	capasubmenu1.style.display="none";
	
	var capasubmenu2= document.getElementById("submenu2");
	capasubmenu2.style.display="none";

	var capasubmenu3= document.getElementById("submenu3");
	capasubmenu3.style.display="none";

	var capasubmenu4= document.getElementById("submenu4");
	capasubmenu4.style.display="none";

	var capasubmenu5= document.getElementById("submenu5");
	capasubmenu5.style.display="none";

	var capasubmenu6= document.getElementById("submenu6");
	capasubmenu6.style.display="none";
	
	var capasubmenu7= document.getElementById("submenu7");
	capasubmenu7.style.display="none";
	
	var capasubmenu8= document.getElementById("submenu8");
	capasubmenu8.style.display="none";
		
	var capasubmenu9= document.getElementById("submenu9");
	capasubmenu9.style.display="none";

	var capasubmenu10= document.getElementById("submenu10");
	capasubmenu10.style.display="none";

}


function mostrarMenu(menu)
{

	desseleccionarMenus();	
	
	var capaMenuActivo= document.getElementById(menu);
	capaMenuActivo.className="menuprincipal_selec";

//alert("mostrarMenu "+menu);
	var elemento = "sub"+menu;
//alert("mostrarMenu "+menu);

	ocultarSubmenus();	
//ert("mostrarMenu "+menu);	
	var capaSubmenuActivo= document.getElementById(elemento);
	capaSubmenuActivo.style.display="block";
//alert(submenuActivo);


}


function imprimir(){
	window.print();
}

function sR(target,windowName,windowProperties,seccionOJD,descripcionOJD)
{
          pixel = new Image();
          window.open(target,windowName,windowProperties);
          pixel.src = "http://nuevaespana.ojdinteractiva.com/cgi-bin/ivw/CP/"+seccionOJD+";"+descripcionOJD;
          //alert(pixel.src);
}


		


var tamanoLetrapordefecto = 1;
var tamanoLetra = tamanoLetrapordefecto; 
var tamanoLetraminimo = 1; 
var tamanoLetramaximo = 5; 
var identidadLetra;
var identidadLetraEntradilla;

function aumentaLetra() 
{
	if (tamanoLetra < tamanoLetramaximo) 
	{
		tamanoLetra += 1;
		identidadLetra = document.getElementById('noticia_texto');
		identidadLetraEntradilla = document.getElementById('noticia_entradilla');
		identidadLetra.className = 'noticia_texto' + tamanoLetra;
		identidadLetraEntradilla.className = 'noticia_texto' + tamanoLetra;
				
	}
}

function disminuyeLetra() 
{
	if (tamanoLetra > tamanoLetraminimo) 
	{
		tamanoLetra -= 1;
		identidadLetra = document.getElementById('noticia_texto');
		identidadLetraEntradilla = document.getElementById('noticia_entradilla');
		identidadLetra.className = 'noticia_texto' + tamanoLetra;
		identidadLetraEntradilla.className = 'noticia_texto' + tamanoLetra;
	}
}

function Buscar()
{
	if (window.document.buscador.pBuscar.value != "")
	{
		if(document.getElementById("pBuscadorPeriodico").checked)
		{
		window.document.buscador.action = "/servicios/buscador/resultados.jsp";
		window.document.buscador.method = "post";
		window.document.buscador.submit();
	}
		else if(document.getElementById("pBuscadorGoogle").checked)
		{
/*
			window.document.buscador.q.value = window.document.buscador.pBuscar.value;
			window.document.buscador.action = "/servicios/buscador/resultadosGoogle.jsp";
			window.document.buscador.method = "get";
			window.document.buscador.target = "contenido";
*/
			window.document.buscador.q.value = window.document.buscador.pBuscar.value;
			window.document.buscador.action = "http://www.google.es/custom";
			window.document.buscador.method = "get";
			window.document.buscador.target = "google_window";
			window.document.buscador.submit();
		}
	}
	else
	{
		window.alert("Antes de buscar debe introducir un texto.");
		window.document.buscador.pBuscar.focus();
	}
}

function onEnterBusqueda(event)
{
	//For a full list of key codes go to
	//http://www.js-x.com/beginners/key_codes.php3
	var bolOldBrowser = (document.layers) ? true : false;
	var intKeyCode = 0;
	if (bolOldBrowser)
		intKeyCode = event.which;
	else
		intKeyCode = event.keyCode;
	if (intKeyCode == 13)
	Buscar();
}




