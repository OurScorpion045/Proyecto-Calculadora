const visor = document.getElementById("visor");
const del = document.getElementById("del");
const c = document.getElementById("c");
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

del.addEventListener("click", () => {
    let content = visor.innerText;
    let long = content.length;
    let result = content.substring(0, long - 1);
    visor.innerHTML = result;
});

c.addEventListener("click", () => {
    visor.innerHTML = "";
})

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

result.addEventListener("click", () => {
    let content = visor.innerText;
    let arrayNum = content.split(/[+x/-]/)
    
    let arrayOp = obtenerArrayOp(content);

    let result = realizarOp(arrayNum, arrayOp);
    visor.innerHTML = result;
})

function obtenerArrayOp(content) {
    let arrayOp = [];
    for (let c of content) {
        if (c == "+") {
            arrayOp.push(c);
        } else if (c == "-") {
            arrayOp.push(c);
        } else if (c == "x") {
            arrayOp.push(c);
        } else if (c == "/") {
            arrayOp.push(c);
        }
    }
    return arrayOp;
}

function realizarOp(arrayNum, arrayOp) {
    let arrayOpMinor = [];
    let cont = 0;
    for (let index in arrayNum) {
        arrayNum[index] = parseFloat(arrayNum[index]);
    }

    for (let index in arrayOp) {
        if (arrayOp[index] == "x") {
            index = index - cont;
            let result = arrayNum[index] * arrayNum[String(+index + 1)];
            arrayNum.splice(index,2,result);
            cont += 1;
        } else if (arrayOp[index] == "/") {
            index = index - cont;
            let result = arrayNum[index] / arrayNum[String(+index + 1)];
            arrayNum.splice(index,2,result);
            cont += 1;
        }
    }
    cont = 0;
    
    for (let index in arrayOp) {
        if (arrayOp[index] == "+" || arrayOp[index] == "-") {
            arrayOpMinor.push(arrayOp[index]);
        }
    }

    for (let index in arrayOpMinor) {
        if (arrayOpMinor[index] == "+") {
            index = index - cont;
            let result = arrayNum[index] + arrayNum[String(+index + 1)];
            arrayNum.splice(index,2,result);
            cont += 1;
        } else if (arrayOpMinor[index] == "-") {
            index = index - cont;
            let result = arrayNum[index] - arrayNum[String(+index + 1)];
            arrayNum.splice(index,2,result);
            cont += 1;
        }
    }

    return String(arrayNum[0]);
}