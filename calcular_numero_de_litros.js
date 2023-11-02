const prompt = require("prompt-sync")();
// Obter a quantidade de latas do usuário
qtdLt = parseFloat(prompt("Informe a quantidade de latas de 350ml:"));

// Obter a quantidade de garrafas de 600ml do usuário
qtdGf = parseFloat(prompt("Informe a quantidade de garrafas de 600ml:"));

// Obter a quantidade de garrafas de 2 litros do usuário
qtdGfl = parseFloat(prompt("Informe a quantidade de garrafas de 2 litros:"));

// Calcular o total de litros de refrigerante
lt = qtdLt * 0.35;
gf = qtdGf * 0.6;
gfl = qtdGfl * 2;

// Calcular o total de litros somando as quantidades obtidas
totalL = lt + gf + gfl;

// Exibir o resultado no console
console.log(`A quantidade total de litros é: ${totalL}`);
