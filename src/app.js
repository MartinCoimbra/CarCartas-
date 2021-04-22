/* eslint-disable */
import "bootstrap";
import "./style.css";
/* ass */
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};

/* EVENTO CLICK */
var btnClick = document.querySelector("#generar");
btnClick.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("generar").disabled = true;
  /* Tenemos que tomar el valor del input, la cantidad de carta que quiere y generarla con un for ;D*/
  let cantidadDeCartas = document.querySelector("#cantidadDeCartasInput").value;

  if (cantidadDeCartas !== "" && cantidadDeCartas <= 8) {
    for (let i = 0; i <= cantidadDeCartas; i++) {
      /* ************************************************************* */
      /* CREAMOS 1 CARTA */
      var iconoSuperior = document.createElement("div");
      iconoSuperior.classList.add("icono1");
      var parrafoSup = document.createElement("p");
      parrafoSup.setAttribute("id", "iconoNum1");
      /* Agregamos la etiqueta p dentro de su padre segun la estructura */
      iconoSuperior.append(parrafoSup);

      var numeroCentroDiv = document.createElement("div");
      numeroCentroDiv.classList.add("num");
      var parrafoMedio = document.createElement("p");
      parrafoMedio.setAttribute("id", "numero");

      /* Agregamos la etiqueta p dentro de su padre segun la estructura */
      numeroCentroDiv.append(parrafoMedio);

      var iconoInferior = document.createElement("div");
      iconoInferior.classList.add("icono2");
      var parrafoBajo = document.createElement("p");
      parrafoBajo.setAttribute("id", "iconoNum2");

      /* Agregamos la etiqueta p dentro de su padre segun la estructura */
      iconoInferior.append(parrafoBajo);

      var carta = document.createElement("div");
      carta.classList.add("carta");
      /* Agregamos todos nuestros 3 div al cartadiv */
      carta.append(iconoSuperior);
      carta.append(numeroCentroDiv);
      carta.append(iconoInferior);

      /* Agregamos la carta que creamos a el html */
      var contenedorAdd = document.querySelector("#contenedorAdd");
      contenedorAdd.append(carta);

      /* ************************************************************* */

      /* Array con iconos */
      let iconos = ["♦", "♥", "♠", "♣"];
      /* 1 a 10, Rey, Reina, Jota o As */
      let simbolo = ["J", "Q", "R", "AS", 2, 3, 4, 5, 6, 7, 8, 9, 10];

      /* ************************************************************* */
      /* Que no me salga un numero fuera de rango */
      let numDelIconoInicial = -1;
      while (numDelIconoInicial === -1 || numDelIconoInicial === 4) {
        numDelIconoInicial = Math.floor(Math.random() * (5 - 1) - 1);
      }
      /* filtramos que no salga -1 o 13 */
      let numIconoCentro = -1;
      while (numIconoCentro === -1 || numIconoCentro === 12) {
        numIconoCentro = Math.floor(Math.random() * (13 - 1) - 1);
      }
      /* ************************************************************* */

      /* Cuando sea corazon o diamante lo ponemos en color rojo */
      if (
        iconos[numDelIconoInicial] == "♦" ||
        iconos[numDelIconoInicial] == "♥"
      ) {
        let letradocument = document.querySelector("#iconoNum1");
        let letradocument2 = document.querySelector("#iconoNum2");
        letradocument.style.color = "red";
        letradocument2.style.color = "red";
      }

      /* Aca es donde :(  */
      /* Agregalo al mismo que */
      document.querySelector("#numero").append(simbolo[numIconoCentro]);
      document.querySelector("#iconoNum1").append(iconos[numDelIconoInicial]);
      document.querySelector("#iconoNum2").append(iconos[numDelIconoInicial]);
    }
  }
});
