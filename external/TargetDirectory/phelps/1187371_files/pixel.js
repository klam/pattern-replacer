var Pixel_Date = new Date();
var Pixel_ms = Pixel_Date.getTime();

function GetURL() {
	wl = window.location;
	if ("" == wl.search) {
		return wl.href;
	} else {
		return wl.protocol + '//' + wl.host + wl.pathname;
	}
}
document.write('<im' + 'g src="' + 'http://pixelcounter.marca.com/pixelcontabilizacion/pixelcontabilizacion.gifctl?r=' + escape(GetURL()) + '&s=home&d=' + Pixel_ms.toString() + '" alt=""/>');
document.write('<im' + 'g src="' + 'http://secure-uk.imrworldwide.com/cgi-bin/m?ci=es-ueditorial&amp;cg=0&amp;cc=1' + '" alt=""/>');

