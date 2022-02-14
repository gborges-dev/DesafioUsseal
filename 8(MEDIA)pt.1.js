//CRIANDO A FUNÇÃO QUE RECEBE OS VALORES E FAZ O CALCULO DA MÉDIA
function calcMedia(valor1, valor2, valor3) {
  var media = (valor1 + valor2 + valor3) / 3
  return media
}
//CRIANDO UMA VARIÁVEL QUE RECEBE OS VALORES TESTE
var teste = calcMedia(8, 5, 10)
//EXIBINDO NA TELA O RESULTADO,
console.log(teste)
