const prompt = require("prompt-sync")();
// Cálculo da área do trapézio
console.log(`Área do trapézio:`);

// Obter o valor da base menor 
me = parseFloat(prompt("Informe a base menor:"));

// Obter o valor da base maior
al = parseFloat(prompt("Informe a base maior:"));

// Obter o valor da altura do trapézio do usuário
ma = parseFloat(prompt("Informe o valor da altura:"));

// Calcular a área do trapézio
tpz = ((me + ma) * al) / 2;

// Exibir os resultados no console
console.log(`Base menor: ${me}`);
console.log(`Base maior: ${al}`);
console.log(`Altura: ${ma}`);
console.log(`Área: ${tpz}`);

// Cálculo da área do quadrado
console.log(`Área do quadrado:`);

// Obter o valor do lado do quadrado
ld = parseFloat(prompt("Informe o valor do lado:"));

// Calcular a área do quadrado
qd = ld * ld;

// Exibir os resultados no console
console.log(`Valor do lado: ${ld}`);
console.log(`Área: ${qd}`);

// Cálculo da área do retângulo
console.log(`Área do retângulo:`);

// Obter o valor da base do retângulo
b = parseFloat(prompt("Informe o valor da base:"));

// Obter o valor da altura do retângulo
h = parseFloat(prompt("Informe o valor da altura:"));

// Calcular a área do retângulo
rtgl = b * h;

// Exibir os resultados no console
console.log(`Valor da base: ${b}`);
console.log(`Valor da altura: ${h}`);
console.log(`Área: ${rtgl}`);

// Cálculo da área do círculo
console.log(`Área do círculo:`);

// Obter o valor do raio do círculo  
r = parseFloat(prompt("Informe o valor do raio:"));

// Calcular a área do círculo
cl = r ** 2 * Math.PI;

// Exibir os resultados no console
console.log(`Valor do raio: ${r}`);
console.log(`Área: ${cl}`);

// Cálculo da área do triângulo
console.log(`Área do triângulo:`);

// Obter o valor da base do triângulo  
tb = parseFloat(prompt("Informe o valor da base:"));

// Obter o valor da altura do triângulo  
th = parseFloat(prompt("Informe o valor da altura:"));

// Calcular a área do triângulo
tagl = (tb * th) / 2;

// Exibir os resultados no console
console.log(`Valor da base: ${tb}`);
console.log(`Valor da altura: ${th}`);
console.log(`Área: ${tagl}`);
