console.log(window.screen);
document.body.style.backgroundColor = "gray";

let div = document.createElement("div");

div.style.display = "flex";
div.style.flexDirection = "column";
div.style.gap = "10px";

title = document.createElement("h1");
title.innerHTML = "Olá mundo";
div.appendChild(title);

//NOME
let divNome = document.createElement("div");
let pnome = document.createElement("p");
pnome.innerHTML = "INFORME SEU NOME";
let inputNome = document.createElement("input");
divNome.appendChild(pnome);
divNome.appendChild(inputNome);
div.appendChild(divNome);

//IDADE
let divIdade = document.createElement("div");
let pIdade = document.createElement("p");
pIdade.innerHTML = "INFORME SUA IDADE";
let inputIdade = document.createElement("input");
inputIdade.type = "number";
divIdade.appendChild(pIdade);
divIdade.appendChild(inputIdade);
div.appendChild(divIdade);

//PESO
let divPeso = document.createElement("div");
let pPeso = document.createElement("p");
pPeso.innerHTML = "INFORME SEU PESO";
let inputPeso = document.createElement("input");
inputPeso.type = "number";
inputPeso.id = "inputPeso";
divPeso.appendChild(pPeso);
divPeso.appendChild(inputPeso);
div.appendChild(divPeso);

//ALTURA
let divAltura = document.createElement("div");
let pAltura = document.createElement("p");
pAltura.innerHTML = "INFORME SUA ALTURA";
let inputAltura = document.createElement("input");
inputAltura.type = "number";
inputAltura.step = "0.01";
inputAltura.id = "inputAltura";
divAltura.appendChild(pAltura);
divAltura.appendChild(inputAltura);
div.appendChild(divAltura);

div.appendChild(document.createElement("br"));

//ADD BOTAO
let btnCalcular = document.createElement("button");
btnCalcular.id = "btnCalcular";
btnCalcular.innerHTML = "Calcular";
div.appendChild(btnCalcular);

document.body.appendChild(div);

//ADD EVENT LISTENER
btnCalcular.addEventListener("click", () => {
    const nome = inputNome.value;
    const idade = Number.parseInt(inputIdade.value, 10);
    const peso = Number.parseFloat(inputPeso.value);
    const altura = Number.parseFloat(inputAltura.value);

    if (nome === "") {
        console.log("Digite o nome");
        return;
    }

    if (Number.isNaN(idade)) {
        console.log("Digite a idade");
        return;
    }

    if (Number.isNaN(peso)) {
        console.log("Digite o peso");
        return;
    }

    if (Number.isNaN(altura) || altura <= 0) {
        console.log("Digite a altura");
        return;
    }

    const imc = peso / (altura * altura);
    console.log("Nome:", nome);
    console.log("Idade:", idade);
    console.log("IMC:", imc.toFixed(2));
});