//Adicione uma nova propriedade sem alterar seu objeto inicial.
//Usando o exercicio anterior como podemos simplesmente usar  adicionar uma 
//nova propriedade a um objeto em JavaScript sem alterar o objeto original usando a 
//notação de colchetes ou o operador de propriedade.


var Pessoa = {
    nome: 'Donildo',
    profissao:'Analista de Sistemas',
    idade: '23'
}

var InforAltura = Object.assign({}, Pessoa)

InforAltura.NovaAltura ='1,77'

console.log(Pessoa)
console.log(InforAltura)
