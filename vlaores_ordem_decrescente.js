const prompt = require("prompt-sync")();
console.clear();

let val1 = Number( prompt("digite um valor: "))
let val2 = Number( prompt("digite um valor: "))
let val3 = Number( prompt("digite um valor: "))

let temp

if( val1 < val2){

    temp = val1
    val1 = val2
    val2 = temp
}

if( val2 < val3){

    temp = val2
    val2 = val3
    val3 = temp
}


if( val1 < val2){

    temp = val1
    val1 = val2
    val2 = temp
}

console.log(val1, val2, val3)