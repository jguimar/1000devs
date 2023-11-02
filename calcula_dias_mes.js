const prompt = require("prompt-sync")();

let mesIncial;
let mesFinal;

console.clear();

mesIncial = parseInt(prompt("Digite o mes inicial:"));

mesFinal = parseInt(prompt("Digite o mes final:"));

let totalDias = 0;

if (mesIncial <= mesFinal) {
  for (let mes = mesIncial; mes <= mesFinal; mes++) {
    totalDias += calcularTotalDias(mes);
    console.log(totalDias);
  }
} else {
  console.log(
    `Mês inicial ${mesIncial} não pode ser maior que o mês final ${mesFinal}`
  );
}

console.log(`Total Dias: ${totalDias}`);

function mesPar(mes) {
  return mes % 2 == 0;
}
function primeiroSemestre(mes) {
  return mes >= 1 && mes <= 6;
}

function segundoSemestre(mes) {
  
  return mes >= 7 && mes <= 12;
}

function fevereiro(mes) {
  return mes == 2;
}
function julho(mes) {
  return mes == 7;
}

function calcularTotalDias(mes) {
  let totalDias = 0;

  if (fevereiro(mes)) {
    totalDias += 28;
  } else if (julho) {
    totalDias += 31;
  } else if (primeiroSemestre(mes) && mesPar(mes)) {
    totalDias += 30;
  } else if (primeiroSemestre(mes) && !mesPar(mes)) {
    totalDias += 31;
  } else if (segundoSemestre(mes) && mesPar(mes)) {
    totalDias += 31;
  } else if (segundoSemestre(mes) && !mesPar(mes)) {
    totalDias += 30;
  }
  return totalDias;
}
