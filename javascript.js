//comentairo de uma linha
/*comentario de multiplas linhas*/
//tres formas e declarar uma variaval(sem tipo)
//o var e let se distinguiem pelo escopo de declaração.
let nome = "romulo";
var sobrenome;
const e = 2.78;
let idade = 20;
var pet = "dog";

if (nome == "romulo") {
    sobrenome = "Beninca";
    console.log("Nome: " + nome + " Sobrenome: " + sobrenome + " Idade: " + idade + " Pet: " + pet);
}

if (idade == 20) {
    console.log("nome:" + nome);
} else {
    console.log("nome:" + "gustavo");
}

let peso = 2;
let altura = 1.80;
let imc = peso / (altura * altura);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc >= 18.5 && imc < 25) {
    console.log("Peso normal");
} else if (imc >= 25 && imc < 30) {
    console.log("Acima do peso");
} else if (imc >= 30 && imc < 35) {
    console.log("Obesidade I");
} else if (imc >= 35 && imc < 40) {
    console.log("Obesidade II");
} else if (imc >= 40) {
    console.log("Obesidade III");
}

//switch case estrutura de seleção para imc
let categoria = "normal";
switch (true) {
    case imc < 18.5:
        categoria = "Abaixo do peso";
        break;
    case imc >= 18.5 && imc < 25:
        categoria = "Peso normal";
        break;
    case imc >= 25 && imc < 30:
        categoria = "Acima do peso";
        break;
    case imc >= 30 && imc < 35:
        categoria = "Obesidade I";
        break;
    case imc >= 35 && imc < 40:
        categoria = "Obesidade II";
        break;
    case imc >= 40:
        categoria = "Obesidade III";
        break;
    default:
        categoria = "Categoria não definida";
        break;
}
console.log("Categoria do IMC:", categoria);

//SWITCH CASE ESTRUTURA DE SELEÇÃO
let a = 2;
switch (a) {
    case 1:
        console.log("a");
        break;
    case 2:
        console.log("b");
        break;
    case 3:
        console.log("c");
        break;
    default:
        console.log("d");
        break;
}

// estrutura de repetição
//WHILE
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

//arrays
let carnesDoChurrasco = ["picanha", "costela", "alcatra", "fraldinha"];
carnesDoChurrasco.forEach(function (v1) {
    console.log(v1);
});

//definir variáveis
var b;
const c = 3;
// if else ; for ; switch

//String, Number, null, undefined

console.log("O tipo da variável a é: " + typeof b);
a = "2";
console.log("O tipo da variável a é: " + typeof a);

if (a == b) {
    console.log("O valor dessas variáveis é igual");
}

if (a !== b) {
    console.log("O valor dessas variáveis é diferente");
}

var itensChurrasco = [];
itensChurrasco.push("pão de alho");
itensChurrasco.push("costela");
itensChurrasco.push("alcatra");
itensChurrasco.push("fraldinha");

for (let i = 0; i < itensChurrasco.length - 1; i++) {
    console.log(itensChurrasco[i]);
}

itensChurrasco.forEach((e, i) => {
    console.log(i + "-" + e);
});

nome = "Arthut Aura Litio";
console.log(nome.split("").reverse().join(""));

//Funções com array
itensChurrasco.map((e) => {
    console.log(e.length);
});

//filter
console.log(itensChurrasco.filter((e, i) => {
    return i !== 3;
}));

console.log(itensChurrasco.filter((e, i) => {
    return e.includes("a");
}));

console.log(JSON.stringify(itensChurrasco));
array2=JSON.parse("[\"pão de alho\",\"costela\",\"alcatra\",\"fraldinha\"]");
console.log(array2[1]);
