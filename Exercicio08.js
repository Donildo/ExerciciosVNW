//crie uma função que  verifique se uma  variável é true ou false

function verifcacaoUsuarioLogado(logado) {
    if(logado === false) {
    return "Usuario logado"
} else {
    return "Usuario não estar logado"
 }
}

var usuarioLogado = true;

var status = verifcacaoUsuarioLogado(usuarioLogado)
console.log(status)

//Observações
// Nesse exercicio podemos perceber que a função verificarUsuarioLogado, recebe a
// a variavel usuario logado como paramentro, dependendo da função se for true ou não
// retorna um valor diferente