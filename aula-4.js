var convidado = {
    nome: 'cleef',
    idade: 23,
    bebeSuco: true
}

if (convidado.bebeSuco) {
    console.log(convidado.nome, 'bebeu um copo de suco!')
}

if (convidado.idade >= 18) {
    console.log(convidado.nome, 'é maior de idade!')
} else {
    console.log(convidado.nome, 'é menor de idade!')
}