const prompt = require("prompt-sync")();
console.clear();

let numero
numero = parseInt(prompt("Digite primeiro numero:"));


if ( numero < 0){

    numero = numero * 2
    
}else{

   numero = numero * 3
}
  


console.log(numero);