const prompt = require("prompt-sync")();
// Obter o ano de nascimento do usuário
ancmt = parseInt(prompt("Ano de nascimento:"));

// Obter o ano atual do usuário
at = parseInt(prompt("Ano atual:"));

// Calcular a idade em anos
idade = at - ancmt;

// Calcular a idade em meses 
idMeses = idade * 12;

// Calcular a idade em dias
idDias = idade * 360;

// Calcular a idade em semanas
idSemana = idade * 52;

// Exibir os resultados no console
console.log(`Anos: ${idade}`);
console.log(`Meses: ${idMeses}`);
console.log(`Semanas: ${idSemana}`);
console.log(`Dias: ${idDias}`);
