const prompt = require("prompt-sync")();
console.clear();

let nome, sexo, estadoCivil;

nome = prompt("Digite o nome:");
sexo = prompt("Digite o sexo(m ou f) :");
estadoCivil = prompt("Digite o estado civil :");

let tempoCasado = "";

if (
  (sexo == "f" || sexo == "m") && (estadoCivil == "casada" || estadoCivil == "casado")){
  tempoCasado = parseInt(prompt("Digite tempo de casado(a) em [anos]:"));
}

console.log(tempoCasado);
