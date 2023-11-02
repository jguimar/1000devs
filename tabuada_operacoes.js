const prompt = require("prompt-sync")();

// Obter o valor da tabuada do usuário
var n = parseInt(prompt("Insira o valor da tabuada"));

// Função para calcular e exibir as tabuadas de adição, subtração, multiplicação e divisão do número fornecido
function tabuadaOperacao(numero) {
  // Tabuada de adição
  console.log(`Tabuada adição ${numero}`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} + ${i} = ${numero + i}`);
  }

  // Tabuada de subtração
  console.log(`Tabuada subtração ${numero}`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} - ${i} = ${Math.abs(numero - i)}`);
  }

  // Tabuada de multiplicação
  console.log(`Tabuada multiplicação ${numero}`);
  for (let i = 0; i <= 10; i++) {
    console.log(`${numero} x ${i} = ${numero * i}`);
  }

  // Tabuada de divisão
  console.log(`Tabuada divisão ${numero}`);
  for (let i = 1; i <= 10; i++) {
    console.log(`${numero} ÷ ${i} = ${numero / i}`);
  }
}

// Chamar a função tabuadaOperacao com o valor fornecido pelo usuário
tabuadaOperacao(n);
