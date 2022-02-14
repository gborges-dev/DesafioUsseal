//CRIANDO O VETOR E INCLUINDO VALORES
var lista = []
lista.push('Teste1')
lista.push('Teste2')
lista.push('Teste1')
//VERIFICANDO SE EXISTE ALGUM VALOR REPITIDO
if (lista[0] == lista[1] || lista[0] == lista[2] || lista[1] == lista[2]) {
  console.log('Existe um valor repitido neste vetor!')
} else {
  console.log('Não existem valores repitidos!')
}
