var ANAJS_Date = new Date();
var ANAJS_ms = ANAJS_Date.getTime();
var PixelCounterIncluded = 0;

document.write('<SC' + 'RIPT LANGUAGE=JavaScript1.1 SRC="' + 'http://anajs.marca.com/' + 'anajsmultiple/' + 'marca' + '/1' + ANAJS_ms.toString() + '@otrosdeportes_int,otrosdeportes728,otrosdeportes300,otrosdeportes200x230,otrosdeportes200x90,otrosdeportes597x90,otrosdeportesticker?' + '"></SCRIPT>');
document.write('<SC' + 'RIPT LANGUAGE=JavaScript1.1 SRC="' + 'http://estaticos.marca.com/js/comunes.js' + '"></SCRIPT>');

function ANAJS_Publicidad(pos) {
  if (0 == PixelCounterIncluded) {
    document.write('<SC'+'RIPT LANGUAGE=JavaScript1.1 SRC="' + 'http://estaticos.marca.com/js/pixel.js' + '"></SCRIPT>');
    PixelCounterIncluded = 1;
  }
  if ('undefined' != typeof(ANAJS_Served)) {
    var PositionTmp = 'otrosdeportes' + pos;
    if ('pr640' == pos) {
        PositionTmp = pos;
    }
    var Creativity = ANAJS_Served(PositionTmp);
    if ('undefined' == typeof(Creativity)) {
      Creativity = "<!-- Position: " + pos + " doesn't exists on this page -->";
    }
    document.write(Creativity);
  }
}
