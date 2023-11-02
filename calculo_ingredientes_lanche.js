const prompt = require("prompt-sync")();

// Obter a quantidade de lanches do usuário
qtdLc = parseFloat(prompt("Informe a quantidade de lanches:"));

// Calcular a quantidade necessária de cada ingrediente para produzir os lanches
// qtdQj representa quantidade de mussarela necessários.
qtdQj = qtdLc * 0.1;

// qtdPst quantidade de presunto necessários.
qtdPst = qtdLc * 0.05;

// qtdHbg  quantidade de hambúrgueres necessários.
qtdHbg = qtdLc * 0.12;

// Exibir a quantidade necessária de cada ingrediente no console
console.log(`Para produzir ${qtdLc} lanches será necessário:`);
console.log(`${qtdQj.toFixed(2)} Kg de mussarela`);
console.log(`${qtdPst.toFixed(2)} Kg de presunto`);
console.log(`${qtdHbg.toFixed(2)} Kg de hambúrguer`);
