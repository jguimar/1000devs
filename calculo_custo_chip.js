const prompt = require("prompt-sync")();
// Obter a quantidade de frangos do usuário
qtdFrango = parseFloat(prompt("Informe a quantidade de frangos:"));

// Cálculo do custo em chips para a quantidade de frangos
custo = (3.5 * 2 + 4) * qtdFrango;

// Exibir o resultado no console
console.log(`O custo em chips para ${qtdFrango} frangos é de R$${custo}`);
