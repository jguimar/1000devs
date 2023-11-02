const prompt = require("prompt-sync")();

// Obter o primeiro valor do usuário
n1 = parseInt(prompt("Primeiro valor:"));

// Obter o segundo valor do usuário
n2 = parseInt(prompt("Segundo valor:"));

// Calcular a divisão dos dois valores
d = parseFloat(n1 / n2);

// Exibir o resultado da divisão
console.log(`A divisão de ${n1} por ${n2} é: ${d}`);
