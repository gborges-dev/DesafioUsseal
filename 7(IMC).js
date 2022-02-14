//CRIANDO A FUNÇÃO QUE IRÁ RECEBER O PESO E A ALTURA PARA CALCULAR O IMC
function calculaIMC(peso, altura) {
  var imcIdeal = peso / (altura * altura)
  return imcIdeal
}

//CRIANDO VARIÁVEL QUE SIMULA O USO DO SISTEMAS, INCLUINDO UM PESO E UMA ALTURA
var meuImc = calculaIMC(74, 1.78)

//RESPOSTA DO SISTEMA
console.log(meuImc)
