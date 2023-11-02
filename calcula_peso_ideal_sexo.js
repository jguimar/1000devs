const prompt = require("prompt-sync")();
console.clear();

let altura = parseFloat(prompt("Digite sua altura: "));
let sexo = prompt("Digite seu sexo (masculino/m ou feminino/f): ").toLowerCase();

if (sexo === "masculino" || sexo === "m") {

    peso = (72.7 * altura) - 58;
    console.log(`Peso ideal ${peso.toFixed(2)}Kg`);

} else if (sexo === "feminino" || sexo === "f") {

    peso = (62.1 * altura) - 44.7;

    console.log(`Peso ideal ${peso.toFixed(2)}Kg`);
} else {
    console.log("Sexo não reconhecido. Por favor, digite 'masculino' ou 'feminino'.");
}
