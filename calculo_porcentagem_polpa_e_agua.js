const prompt = require("prompt-sync")();

// Obter a quantidade em litros de suco que deseja fazer do usuário
qtdSuco = parseFloat(prompt("Informe a quantidade em litros de suco que deseja fazer:"));

// Calcular a quantidade de água necessária
qtdAgua = qtdSuco * 0.80;

//// Calcular a quantidade de suco concentrado necessária
qtdPolpa = qtdSuco * 0.20;

// Exibir a quantidade necessária de água e polpa de suco concentrado
console.log(`Será necessário ${qtdAgua} litros de água e ${qtdPolpa} litros de suco concentrado para se fazer ${qtdSuco} litros de suco.`);
