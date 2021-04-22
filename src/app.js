/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector(".container").addEventListener("click", () => {
    document.querySelector("#newCard").innerHTML = generateCard();
  });
};

let generateCard = () => {
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

  document.querySelector("#figura1").innerHTML = `
            ${figure[figureIndex]}`;
  document.querySelector("#numero").innerHTML = `
            ${character[characterIndex]}`;
  document.querySelector("#figura2").innerHTML = `
            ${figure[figureIndex]}`;

  //   if (figure == "♦" || figure == "♥") {
  //     document.getElementById("#figura1", "#figura2").style.color = "red";
  //   }
};
