 const prompt = require("prompt-sync")()
 console.clear()

 let val1, val2, val3;


 val1 = Number(prompt("Digite o valor 1:"));
 val2 = Number(prompt("Digite o valor 2:"));
 val3 = Number(prompt("Digite o valor 3:"));

 let soma = val1 + val2;
 if( soma < val3){

    console.log(`Soma de valor 1 (${val1}) e valor 2 (${val2}), soma: ${soma} e menor que valor 3 (${val3}) `)
 }
 
