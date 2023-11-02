const prompt = require("prompt-sync")();
console.clear();

let A, B, C, mensagem
A = parseInt(prompt("Digite primeiro numero:"));
B = parseInt( prompt("Digite segundo numero :"));

if ( A == B){

    mensagem = "SOMA"
    C = A + B
    
}else{

    mensagem = "MULTIPLICAÇÃO"
    C = A * B
}
  


console.log(`O resultado da ${mensagem} de ${A} e ${B}: ${C}`);