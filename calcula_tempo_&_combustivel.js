const prompt = require("prompt-sync")();
principal();

function principal() {
    
    let distancia;
    let kmPorLitro;
    let valorLitro;
    let velocidadeMedia;
    
    distancia = getFloatNumber("Digite a distancia a ser percorrida (km): ")
    velocidadeMedia = getFloatNumber("Digite a velocidade média do carro: ")
    kmPorLitro = getFloatNumber("Digite quantos km/l o veiculo faz: ")
    valorLitro = getFloatNumber("Digite o valor do litro do combustível: ")
    
    let totalHoras = calcTempoViagem(distancia, velocidadeMedia);
    console.log("A viagem irá demorar: " + converterHoras(totalHoras) )
    console.log("O gasto com combustível será de R$: " + calcValorCombustivel(kmPorLitro, valorLitro, distancia) )

}

function calcTempoViagem(distancia, velocidadeMedia){
    return (distancia / velocidadeMedia);
}

function calcValorCombustivel(qtdeLitros, valorLitro, distancia){
    return (distancia/qtdeLitros * valorLitro);
}

//a função deve receber um valor de horas
function converterHoras(totalHoras){
   let horas = Math.trunc(totalHoras);
   let minutos = Math.round((totalHoras - horas) * 60);
   return `${horas}h${minutos}min`;
}

function getFloatNumber(mensagem) {
    return parseFloat(prompt(mensagem));
}
