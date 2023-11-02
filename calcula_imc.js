const prompt = require("prompt-sync")();
console.clear();

let altura = parseFloat(prompt("Digite sua altura: "));
let peso = parseFloat(prompt("Digite seu peso: "));
let imc = peso / (altura * altura);


if( imc < 18.5){

    console.log("Abaixo do peso")
}else if (imc > 18.5 && imc <= 25){

    console.log("Peso normal")

}else if(imc > 25 && imc <= 30){

    console.log("acima do peso")

}else{

    console.log("Obeso")

}