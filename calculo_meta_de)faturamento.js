const prompt = require("prompt-sync")();

// Definição dos valores dos produtos
valorProduto1 = 150;
valorProduto2 = 220;
valorProduto3 = 97;

// Obter o valor do faturamento do último mês do usuário
faturamentoUltimoMes = parseFloat(prompt("Digite o valor do faturamento do último mês:"));

// Calcular a meta de aumento de faturamento em 20%
metaAumentoFaturamento = faturamentoUltimoMes * 1.2;

// Calcular a quantidade de peças necessárias de cada produto para atingir a meta
quantidadeProduto1 = ((metaAumentoFaturamento - faturamentoUltimoMes) / valorProduto1);
quantidadeProduto2 = ((metaAumentoFaturamento - faturamentoUltimoMes) / valorProduto2);
quantidadeProduto3 = ((metaAumentoFaturamento - faturamentoUltimoMes) / valorProduto3);

// Exibir os resultados no console
console.log(`a) Faturamento do próximo mês para bater a meta de 20%: R$ ${metaAumentoFaturamento.toFixed(2)}`);
console.log(`b) Quantidade de peças do produto 1 necessárias: ${quantidadeProduto1.toFixed(2)}`);
console.log(`c) Quantidade de peças do produto 2 necessárias: ${quantidadeProduto2.toFixed(2)}`);
console.log(`d) Quantidade de peças do produto 3 necessárias: ${quantidadeProduto3.toFixed(2)}`);
