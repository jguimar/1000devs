var prompt = require("prompt-sync")();

console.clear();

const vetor = [];

for (let i = 0; i < 6; i++) {
  let valorVetor = parseInt(prompt(`Digite o ${i + 1}º valor:`));

  vetor.push(valorVetor);
}

for (let i = 0; i < 6; i++) {
  console.log(`Psoção ${[i]}: ${vetor[i] * i}`);
}
