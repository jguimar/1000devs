const prompt = require("prompt-sync")();
function main() {
    let metragemFrente, metragemLateral, areaTerreno
    let valorMetroQuadrado
    let valorTotalTerreno
    
    metragemFrente = obterValorFracionario("Digite a metragem da lateral: ")
    metragemLateral = obterValorFracionario("Digite a metragem da lateral: ")
    valorMetroQuadrado = obterValorFracionario("Digite o valor do metro quadrado R$: ")
    
    areaTerreno = calcularAreaTerreno(metragemFrente, metragemLateral) 
    valorTotalTerreno = calcularValorTotal(areaTerreno, valorMetroQuadrado)
    
   console.log(`A área do terreno com frente ${metragemFrente }e ${metragemLateral} é ${areaTerreno} mts`)    //desafio 1
    console.log (`O valor total do terreno será R$ ${valorTotalTerreno}`)                //desafio 2     valor de k com duas casas decimais    
}

function calcularValorTotal(area,valor){
    return area * valor
}

function calcularAreaTerreno(frente,lateral) {
    return frente * lateral
}

function obterValorFracionario(mensagem) {
    return parseFloat(prompt(mensagem))
}
