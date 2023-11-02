const prompt = require("prompt-sync")();
console.clear();

let numero
numero = parseInt(prompt("Digite primeiro numero:"));


if ( (numero % 2 == 0) && (numero != 0)){

   console.log(numero + 5)
    
}else if (numero != 0){

    console.log(numero + 8)
}
  