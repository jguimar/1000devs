const prompt = require("prompt-sync")();
console.clear();

let numero = parseInt(prompt("Digite um numero:"));

if( numero % 2 == 0 ){
    console.log(`Numero ${numero} é par:`);

}else{
    console.log(`Numero ${numero} é impar:`);
}