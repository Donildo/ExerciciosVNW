//Remova uma propriedade desse objeto.

var Pessoa = {
    nome: 'Donildo',
    profissao:'Analista de Sistemas',
    idade: '23'
}

delete Pessoa.idade
console.log(Pessoa)