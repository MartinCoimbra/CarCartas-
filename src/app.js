/* eslint-disable */
import "bootstrap";
import "./style.css";
/* ass */
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let iconos = ["♦", "♥", "♠", "♣"];
  /* 1 a 10, Rey, Reina, Jota o As */
  let simbolo = ["J", "Q", "R", "AS", 2, 3, 4, 5, 6, 7, 8, 9, 10];
  let numDelIconoInicial = -1;
  while (numDelIconoInicial === -1 || numDelIconoInicial === 4) {
    numDelIconoInicial = Math.floor(Math.random() * (5 - 1) - 1);
  }
  let numIconoCentro = -1;

  /* filtramos que no salga -1 o 13 */
  while (numIconoCentro === -1 || numIconoCentro === 12) {
    numIconoCentro = Math.floor(Math.random() * (13 - 1) - 1);
  }

  /* Cuando sea corazon o diamante lo ponemos en color rojo */
  if (iconos[numDelIconoInicial] == "♦" || iconos[numDelIconoInicial] == "♥") {
    let letradocument = document.querySelector("#iconoNum1");
    let letradocument2 = document.querySelector("#iconoNum2");
    letradocument.style.color = "red";
    letradocument2.style.color = "red";
  }
  console.log(numDelIconoInicial);
  document.querySelector("#numero").append(simbolo[numIconoCentro]);
  document.querySelector("#iconoNum1").append(iconos[numDelIconoInicial]);
  document.querySelector("#iconoNum2").append(iconos[numDelIconoInicial]);
};
