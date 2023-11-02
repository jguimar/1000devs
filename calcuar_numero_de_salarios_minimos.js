const prompt = require("prompt-sync")();
// Solicita ao usuário o valor do salário mínimo
var salmin = parseFloat(prompt("Informe o valor do salário mínimo"));

// Solicita ao usuário o valor do salário do funcionário
var sal = parseFloat(prompt("Informe o valor do salário do funcionário"));

// Calcula quantos salários mínimos o funcionário recebe
var nsm = sal / salmin;

// Exibe o resultado na saída do console, com duas casas decimais
console.log("O funcionário recebe " + nsm.toFixed(2) + " Salários mínimos!");
