const prompt = require("prompt-sync")();
// Obter o peso em Kg do usuário
peso = parseFloat(prompt("Peso em Kg:"));

// Calcular o peso caso a pessoa engorde 15%
p1 = (peso * 0.15) + peso;

// Calcular o peso caso a pessoa engorde 20%
p2 = (peso * 0.20) + peso;

// Exibir os resultados no console
console.log(`Caso a pessoa engorde 15%, ficará com: ${p1} Kg`);
console.log(`Caso a pessoa engorde 20%, ficará com: ${p2} Kg`);
