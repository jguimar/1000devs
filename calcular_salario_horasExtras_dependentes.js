const prompt = require("prompt-sync")();
// Obter a quantidade de horas trabalhadas do usuário
horaTrabalho = parseFloat(prompt("Informe a quantidade de horas trabalhadas:"));

// Obter a quantidade de horas extras do usuário
horaExtra = parseFloat(prompt("Informe a quantidade de horas extras:"));

// Obter a quantidade de dependentes menores de 6 anos do usuário
dependentes = parseFloat(prompt("Informe a quantidade de dependentes menores de 6 anos:"));

// Calcular o salário base (horas trabalhadas * valor por hora)
sal = horaTrabalho * 10;

// Calcular o valor do desconto (11% do salário base)
des = sal * 0.11;

// Calcular o valor adicional pelas horas extras (15 reais por hora extra)
extra = horaExtra * 15;

// Calcular o valor adicional pelos dependentes (90 reais por dependente menor de 6 anos)
ndp = dependentes * 90;

// Calcular o salário líquido após os descontos (salário base - desconto)
salLiquido = sal - des;

// Calcular o salário total (salário líquido + adicional horas extras + adicional dependentes)
salTotal = salLiquido + extra + ndp;

// Exibir os resultados no console
console.log(`Horas normais:  R$${sal}`);
console.log(`Horas extras:  R$${extra}`);
console.log(`Adicional por dependentes:  R$${ndp}`);
console.log(`Salário líquido (horas normais - descontos):  R$${salLiquido}`);
console.log(`Salário final:  R$${salTotal}`);
