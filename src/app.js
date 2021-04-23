/* eslint-disable */
import "bootstrap";
import "./style.css";
/* ass */
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {};
let arrayIconoTop = [];
let arrayMedio = [];
let los2Arr = [];
/* EVENTO CLICK */
var btnClick = document.querySelector("#generar");
btnClick.addEventListener("click", function(e) {
  e.preventDefault();
  document.getElementById("generar").disabled = true;
  /* Tenemos que tomar el valor del input, la cantidad de carta que quiere y generarla con un for ;D*/
  let cantidadDeCartas = document.querySelector("#cantidadDeCartasInput").value;
  let z = 0;
  if (cantidadDeCartas !== "" && cantidadDeCartas <= 10) {
    for (let i = 0; i < cantidadDeCartas; i++) {
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
      let simbolo = ["J", "Q", "K", "Ⓐ", 2, 3, 4, 5, 6, 7, 8, 9, 10];

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
        iconoSuperior.style.color = "red";
        iconoInferior.style.color = "red";
      }

      /* Aca es donde :(  */
      /* Agregalo al mismo que */

      iconoSuperior.append(iconos[numDelIconoInicial]);
      numeroCentroDiv.append(simbolo[numIconoCentro]);
      iconoInferior.append(iconos[numDelIconoInicial]);

      /* Guardamos los valores. */

      los2Arr[z] = [simbolo[numIconoCentro], iconos[numDelIconoInicial]];
      z++;
    }
  }

  console.log("array original");
  console.log(los2Arr);
});

/* Segundo boton */
var ordenarCartas = document.querySelector("#ordenarCartas");
ordenarCartas.addEventListener("click", function(e) {
  e.preventDefault();

  /* primero ordenamos con el metodo burbuja y luego vamos creando cada elemento con el for 
          y luego al final nos fijamos el temita de si salen 2 cartas iguales..puede que eso te de error,
          Capas creas tu ropia jerarquia de valor mayor ;D
          */
  /* Array ordenado */
  console.log("Array Ordenado por numeros");
  console.log(selectSort(los2Arr));
  /* ponemos los as al final siempre */

  /* Capas recorremos el array y le ponemos condicionales como IF los2Arr[i] == "AS lo guardamos en una variable y lo ponemso al final para ordenarlo" */
  /* guardamos el resultado burbuja en un arrray y usamos un for para insertarlos */
});

const selectSort = arr => {
  let min = 0;
  /* Ordenamos los numeros */
  while (min < arr.length) {
    for (let i = min + 1; i < arr.length; i++) {
      if (arr[min] > arr[i]) {
        let aux = arr[min];
        arr[min] = arr[i];
        arr[i] = aux;
      }
    }
    min++;
  }
  return arr;
};
