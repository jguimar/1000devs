const prompt = require("prompt-sync")();

var valor

valor = parseInt( prompt("Digite um valor: "))

function somaNumero(){
console.log("A variável somada com 10 produz o resultado:" + (valor + 10).toFixed(2));

}
somaNumero();