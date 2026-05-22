const visor = document.getElementById("visor");
const del = document.getElementById("del")
const num9 = document.getElementById("9");
const num8 = document.getElementById("8");
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

console.log(visor.innerHTML);

del.addEventListener("click", () => {
    let content = visor.innerText;
    let long = content.length;
    let result = content.substring(0, long - 1);
    visor.innerHTML = result;
});

num9.addEventListener("click", () => {
    visor.innerHTML += 9;
});

num8.addEventListener("click", () => {
    visor.innerHTML += 8;
});

num7.addEventListener("click", () => {
    visor.innerHTML += 7;
});

num6.addEventListener("click", () => {
    visor.innerHTML += 6;
});

num5.addEventListener("click", () => {
    visor.innerHTML += 5;
});

num4.addEventListener("click", () => {
    visor.innerHTML += 4;
});

num3.addEventListener("click", () => {
    visor.innerHTML += 3;
});

num2.addEventListener("click", () => {
    visor.innerHTML += 2;
});

num1.addEventListener("click", () => {
    visor.innerHTML += 1;
});

num0.addEventListener("click", () => {
    visor.innerHTML += 0;
});

suma.addEventListener("click", () => {
    visor.innerHTML += "+";
});

resta.addEventListener("click", () => {
    visor.innerHTML += "-";
});

mult.addEventListener("click", () => {
    visor.innerHTML += "x";
});

div.addEventListener("click", () => {
    visor.innerHTML += "/";
})