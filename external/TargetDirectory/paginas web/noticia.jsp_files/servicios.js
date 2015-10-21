
function caja_anterior(indice,elemento)
{
	var anterior=parseInt(indice)-1;

	capa2= document.getElementById(elemento+indice);
	capa2.style.visibility="hidden";
	capa2.style.display="none";
	
	capa1= document.getElementById(elemento+anterior);
	capa1.style.visibility="visible";
	capa1.style.display="block";
}



function caja_siguiente(indice,elemento)
{
	var siguiente=parseInt(indice)+1;

	capa2= document.getElementById(elemento+indice);
	capa2.style.visibility="hidden";
	capa2.style.display="none";
	
	capa1= document.getElementById(elemento+siguiente);
	capa1.style.visibility="visible";
	capa1.style.display="block";
}
