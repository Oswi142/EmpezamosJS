import sumar from "./sumador";
import multiplicar from "./multiplicador";

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const third = document.querySelector("#tercer-numero");
const fourth = document.querySelector("#cuarto-numero");
const formMult = document.querySelector("#multiplicar-form");
const divMult = document.querySelector("#resultadoMult-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});

formMult.addEventListener("submit", (event) => {
  event.preventDefault();

  const thirdNumber = Number.parseInt(third.value);
  const fourthNumber = Number.parseInt(fourth.value);

  divMult.innerHTML = "<p>" + multiplicar(thirdNumber, fourthNumber) + "</p>";
});