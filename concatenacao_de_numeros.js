const prompt = require("prompt-sync")();

var a = 10;
var b = 20;
var c = 30;

var resultado = parseFloat(a + b + c);

function soma(aaa,bbb,ccc,rrrr){

    console.log(`O valor de resultado é a soma de ${aaa}, ${bbb} e ${ccc} que dá: ${rrrr}`);

}

soma(a,b,c,resultado);