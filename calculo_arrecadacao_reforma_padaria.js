const prompt = require("prompt-sync")();
// Constantes para os valores de cada pão e broa
const valPaes = 0.12;
const valBroa = 1.60;

// Solicita ao usuário a quantidade de paes e broas vendidos, e o valor da reforma
qtdPaes = parseInt(prompt("Informe quantos pães foram vendidos:"));
qtdBroa = parseInt(prompt("Informe quantas broas foram vendidas:"));
valReforma = parseInt(prompt("Informe valor da reforma:"));

// Calcula o faturamento total com a venda de paes e broas
totalPaes = qtdPaes * valPaes;
totalBroa = qtdBroa * valBroa;
total = totalPaes + totalBroa;

// Calcula o valor a ser depositado na poupança (10% do faturamento total)
poupalRef = total * 0.1;

// Calcula o tempo necessário para pagar a reforma com o valor depositado na poupança
tempoRef = valReforma / poupalRef;

// Exibe os resultados no console
console.log(`Faturamento com venda de broas: ${totalBroa}`);
console.log(`Faturamento com venda de pães: ${totalPaes}`);
console.log(`Faturamento diário com a venda de (broas + pães): ${total}`);
console.log(`Valor depositado na poupança: ${poupalRef}`);
console.log(`Para pagar a reforma serão necessários: ${Math.ceil(tempoRef)} dias`);
