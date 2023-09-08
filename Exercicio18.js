//  Mostre no console todas as propriedades desse objeto.

var Pessoa = {
    nome: 'Donildo',
    profissao:'Analista de Sistemas',
    idade: '23'
}

for (var propriedade in Pessoa) {
    console.log(propriedade,Pessoa [propriedade])
}