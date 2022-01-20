var vp = document.getElementById("farmArea");
var text = document.getElementById("instrucciones");
var papel = vp.getContext("2d");

var flechas = {
  LEFT :37,
  UP   :38,
  RIGHT:39,
  DOWN :40
}

var positionX = 300;
var positionY = 400;
var seleccion = "pollo";

//
var amountVacas = aleatorio(0, 8);
var amountCerdos = aleatorio(0, 3);
var amountPollos = aleatorio(0, 5);