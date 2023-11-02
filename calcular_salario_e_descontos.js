const prompt = require("prompt-sync")();
// Obter o valor do salário do usuário
var sal = parseFloat(prompt("Salário:"));

// Calcular o salário com reajuste de 15%
salrej = sal * 1.15;

// Calcular o valor do desconto de INSS (11%)
inss = salrej * 0.11;

// Calcular o valor do desconto de FGTS (8%)
fgts = salrej * 0.08;

// Calcular o total de descontos
desc = inss + fgts;

// Calcular o salário final após os descontos
salf = salrej - desc;

// Exibir os resultados no console
console.log(`Salário inicial: ${sal}`);
console.log(`Salário reajustado: ${salrej}`);
console.log(`Desconto INSS (11%): ${inss}`);
console.log(`Desconto FGTS (8%): ${fgts}`);
console.log(`Salário final: ${salf}`);
