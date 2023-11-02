const prompt = require("prompt-sync")();
// Obter a quantidade de cavalos
qtdc = parseInt(prompt("Informe a quantidade de cavalos:"));

// Obter o valor de uma ferradura
vf = parseInt(prompt("Informe o valor de uma ferradura:"));

// Calcular a quantidade total de ferraduras necessárias para os cavalos
qtf = qtdc * 4; // Cada cavalo possui 4 ferraduras

// Calcular o valor total das ferraduras
vt = qtdc * vf; // Multiplicar o valor de uma ferradura pelo número de cavalos

// Exibir a quantidade total de ferraduras e o valor total no console
console.log(`A quantidade total de ferraduras é: ${qtf}`);
console.log(`O valor total das ferraduras é: ${vt}`);
