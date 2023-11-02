const prompt = require("prompt-sync")();
console.clear();

let A, B
A = Boolean(prompt("Digite primeiro numero:"));
B = Boolean( prompt("Digite segundo numero :"));

console.log(`São iguais: ${A == B}`)