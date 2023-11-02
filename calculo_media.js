const prompt = require("prompt-sync")();

// Obter os três valores do usuário
var n1 = parseFloat(prompt("Informe o primeiro valor:"));
var n2 = parseFloat(prompt("Informe o segundo valor:"));
var n3 = parseFloat(prompt("Informe o terceiro valor:"));

// Calcular a média ponderada das notas
media = (n1 + n2 + n3) / 3;

// Exibir o resultado no console
console.log("A média ponderada das notas " + n1 + ", " + n2 + ", " + n3 + " é: " + media.toFixed(2));
