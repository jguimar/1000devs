const prompt = require("prompt-sync")();
console.clear();

valorCompra = parseFloat(prompt("Digite o valor da compra: "))

console.log(`
codigo  condiçãoo de pagamento
   
   1     À vista em dinheiro  ou cheque, recebe 10% de desconto.
   2     À vista nocartão de crédito, recebe 15% de desconto
   3     Em duas vezes, preço normal de etiqueta sem juros.
   4     Em duas vezes, preço normal de etiqueta mais juros 10%.
`) 


codigo = parseFloat(prompt("Digite o codigo desejado: "))



if (codigo == 1) {
    console.log(`Valor final com 10% desconto: R$ ${valorCompra * 0.9} `)
}else if (codigo == 2) {
    console.log(`Valor final com 15% desconto: R$ ${valorCompra * 0.85}`)
}else if (codigo == 3) {
    console.log(`Valor final sem juros: R$ ${valorFInal}`)
    console.log(`2x: R$ ${(valorFInal / 2).toFixed(2)}`)
}else if (codigo == 4) {
    let valorFInal = (valorCompra * 1.1)
    console.log(`Valor final sem juros: R$ ${valorFInal}`)
    console.log(`3x: R$ ${(valorFInal / 3).toFixed(2) }`)
}