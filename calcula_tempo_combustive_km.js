const prompt = require("prompt-sync")(); // Importa a função "prompt-sync" para permitir a entrada do usuário no terminal.

principal(); // Chama a função principal para iniciar o programa.

function principal() {
    // Declaração das variáveis a serem usadas no programa.
    let distancia;
    let kmPorLitro;
    let valorLitro;
    let velocidadeMedia;

    // Solicita ao usuário que insira os valores necessários e armazena-os nas variáveis correspondentes.
    distancia = getFloatNumber("Digite a distancia a ser percorrida (km): ");
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ");
    kmPorLitro = getFloatNumber("Digite quantos km/l o veiculo faz: ");
    valorLitro = getFloatNumber("Digite o valor do litro do combustível: ");

    // Calcula o tempo de viagem e exibe o resultado.
    let totalHoras = calcTempoViagem(distancia, velocidadeMedia);
    console.log("A viagem irá demorar: " + converterHoras(totalHoras));

    // Calcula o gasto com combustível e exibe o resultado.
    console.log("O gasto com combustível será de R$: " + calcValorCombustivel(kmPorLitro, valorLitro, distancia));
}

// Calcula o tempo de viagem com base na distância e na velocidade média.
function calcTempoViagem(distancia, velocidadeMedia) {
    return (distancia / velocidadeMedia);
}

// Calcula o custo de combustível com base na quantidade de litros por km, no valor do litro e na distância.
function calcValorCombustivel(qtdeLitros, valorLitro, distancia) {
    return (distancia / qtdeLitros * valorLitro);
}

// Converte o tempo de viagem de horas fracionárias para o formato "horas:minutos".
function converterHoras(totalHoras) {
    let horas = Math.trunc(totalHoras);
    let minutos = Math.round((totalHoras - horas) * 60);
    return `${horas}h${minutos}min`;
}

// Função auxiliar para obter um número de ponto flutuante a partir da entrada do usuário.
function getFloatNumber(mensagem) {
    return parseFloat(prompt(mensagem));
}
