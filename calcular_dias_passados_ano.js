const prompt = require("prompt-sync")();
// Solicita ao usuário o dia
dia = parseInt(prompt("Digite o dia:"));

// Solicita ao usuário o mês
mes = parseInt(prompt("Digite o mês:"));

// Calcula a quantidade de dias correspondentes ao mês informado (considerando 30 dias por mês)
mes = mes * 30;

// Calcula o total de dias somando os dias informados com a quantidade de dias do mês
total = dia + mes;

// Exibe a quantidade total de dias passados no console
console.log(`A quantidade de dias passados foi: ${total} dias`);
