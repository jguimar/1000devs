const prompt = require("prompt-sync")();

// Solicita ao usuário um valor de 4 dígitos
n = parseInt(prompt("Insira um valor de 4 dígitos:"));

// Extrai a parte dos milhares do número digitado pelo usuário
milhar = n / 1000;

// Extrai a parte das centenas do número digitado pelo usuário
centena = (n % 1000) / 100;

// Extrai a parte das dezenas do número digitado pelo usuário
dezena = (n % 1000) / 10;

// Extrai a parte das unidades do número digitado pelo usuário
unidade = n % 10;

// Exibe os resultados no console, correspondentes aos dígitos do número fornecido pelo usuário
console.log(`MILHARES = ${milhar}`);
console.log(`CENTENA = ${centena}`);
console.log(`DEZENA = ${dezena}`);
console.log(`UNIDADE = ${unidade}`);
