
const prompt = require("prompt-sync")();principal();

function principal() {
    
    let juros;
    let prestacao;
    let mesesEmAtraso;
    
    prestacao = getFloatNumber("Digite o valor de prestações em R$: ");
    juros = getFloatNumber("Digite o valor de juros%: ");
    mesesEmAtraso = getFloatNumber("Digite quantos messes estão em atraso: ");
    
    console.log("O valor da prestação em atraso é: R$" + prestacaoEmAtraso(prestacao, juros, mesesEmAtraso));
    
    function prestacaoEmAtraso(prestacao, juros, mesesEmAtraso) {
        return prestacao + (prestacao * (juros / 100) * mesesEmAtraso);
    }
}

function getFloatNumber(message){
    return parseFloat(prompt(message))
}
