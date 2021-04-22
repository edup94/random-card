/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let figure = ["♥", "♦", "♣", "♠"];
  let character = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let figureIndex = Math.floor(Math.random() * figure.length);
  let characterIndex = Math.floor(Math.random() * character.length);

  document.querySelector("#figura1").innerHTML = `<h1>
            ${figure[figureIndex]}</h1>`;
  document.querySelector("#numero").innerHTML = `<h1>
            ${character[characterIndex]}</h1>`;
  document.querySelector("#figura2").innerHTML = `<h1>
            ${figure[figureIndex]}</h1>`;

  if (figure == "♦" || figure == "♥") {
    document.getElementById("figure1", "figure2").style.color = "red";
    document.getElementById("numero").style.color = "red";
  }
};
