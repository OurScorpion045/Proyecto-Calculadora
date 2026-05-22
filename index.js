const visor = document.getElementById("visor");
const num7 = document.getElementById("7");
const num6 = document.getElementById("6");
const num5 = document.getElementById("5");
const num4 = document.getElementById("4");
const num3 = document.getElementById("3");
const num2 = document.getElementById("2");
const num1 = document.getElementById("1");
const num0 = document.getElementById("0");
const suma = document.getElementById("+");
const resta = document.getElementById("-");
const mult = document.getElementById("x");
const div = document.getElementById("/");
const result = document.getElementById("=");

num7.addEventListener("click", () => {
    visor.innerHTML += 7;
})