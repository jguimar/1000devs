const prompt = require("prompt-sync")();
// Obter a metragem frontal do terreno do usuário
ft = parseFloat(prompt("Informe a metragem frontal do terreno:"));

// Obter a metragem lateral do terreno do usuário
lt = parseFloat(prompt("Informe a metragem lateral do terreno:"));

// Obter o valor por metro quadrado da área do terreno do usuário
vmq = parseFloat(prompt("Informe o valor por metro quadrado da área do terreno:"));

// Calcular a área total do terreno (metragem frontal * metragem lateral)
area = ft * lt;

// Calcular o valor total do terreno (valor por metro quadrado * área total)
valorTotal = vmq * area;

// Exibir os resultados no console
console.log("A área total do terreno de " + ft + "m de frente com " + lt + "m de lateral é: " + area + "m²");
console.log("O valor deste terreno é: R$ " + valorTotal.toFixed(2));
