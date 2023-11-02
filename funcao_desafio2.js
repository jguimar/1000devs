// Importa a função "prompt-sync" para permitir a entrada do usuário no terminal.
const prompt = require("prompt-sync")();

// Função principal que gerencia o fluxo do programa.
function main() {
    let nota1; // Armazena o valor da primeira nota.
    let nota2; // Armazena o valor da segunda nota.
    let nota3; // Armazena o valor da terceira nota.
    let resultado; // Armazena o resultado da média ponderada.

    nota1 = obterValorFracionario("Digite o valor da nota1: "); // Recebe o valor da primeira nota.
    nota2 = obterValorFracionario("Digite o valor da nota2: "); // Recebe o valor da segunda nota.
    nota3 = obterValorFracionario("Digite o valor da nota3: "); // Recebe o valor da terceira nota.
    
    resultado = calcularMediaPonderada(nota1, nota2, nota3); // Calcula a média ponderada das notas.
    console.log("A media ponderada das notas", nota1, ",", nota2, "e", nota3, "é:", resultado); // Exibe o resultado da média ponderada.
}

// Função para obter um valor fracionário a partir da entrada do usuário.
function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem)); // Converte o valor de entrada para um número de ponto flutuante.
}

// Função para calcular a média ponderada com base em três notas e seus pesos.
function calcularMediaPonderada(n1, n2, n3) {
    let peso1 = 1; // Peso da primeira nota.
    let peso2 = 2; // Peso da segunda nota.
    let peso3 = 3; // Peso da terceira nota.
    let somaPesos = peso1 + peso2 + peso3; // Soma dos pesos.

    // Calcula a média ponderada das notas.
    return ((n1 * peso1 + n2 * peso2 + n3 * peso3) / somaPesos);
}

// Chama a função principal para iniciar o programa.
main();
