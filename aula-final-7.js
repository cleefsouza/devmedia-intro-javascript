function imc(altura, peso) {
    return peso / (altura ** 2)
}

var pessoas = [
    {
        nome: 'pedro',
        altura: 1.55,
        peso: 51
    },
    {
        nome: 'joão',
        altura: 1.89,
        peso: 74
    },
    {
        nome: 'maria',
        altura: 1.75,
        peso: 62
    }
]

for(var pessoa of pessoas){
    console.log('IMC de', pessoa.nome,': ', imc(pessoa.altura, pessoa.peso))
}