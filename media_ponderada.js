const prompt = require("prompt-sync")();
console.clear();

let codigo = parseInt(prompt("Digite o codigo de indentificação:"));

let nota1 = parseFloat(prompt("Digite a nota 1:"));
let nota2 = parseFloat(prompt("Digite a nota 2:"));
let nota3 = parseFloat(prompt("Digite a nota 3:"));

let trabalho = parseFloat(prompt("Digite a media dos trabalhos do aluno:"));

media = (nota1 + nota2 * 2 + nota3 * 3 + trabalho) / 7;


notasAluno(codigo, nota1, nota2, nota3, trabalho);
let status = StatusAluno(media);

function notasAluno(codigo, nota1, nota2, nota3, trabalho) {
  console.log(`Codigo aluno: ${codigo}`);
  console.log(`Nota prova1: ${nota1}`);
  console.log(`Nota prova2: ${nota2}`);
  console.log(`Nota prova3: ${nota3}`);
  console.log(`Media trabalhos: ${trabalho}`);
}

function StatusAluno(media) {
  let status;
  if (media >= 90) {
    status = "Aprovado";
    console.log("Nota A");
    console.log(status);
  } else if (media >= 75 && media < 90) {
    status = "Aprovado";
    console.log("Nota B");
    console.log(status);
  } else if (media >= 60 && media < 75) {
    status = "Aprovado";
    console.log("Nota C");
    console.log(status);
  } else if (media >= 40 && media < 60) {
    status = "Reprovado";
    console.log("Nota D");
    console.log(status);
  } else if (media < 40) {
    status = "Reprovado";
    console.log("Nota E");
    console.log(status);
  }
  return status;
}
