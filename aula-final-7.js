function imc(altura, peso) {
    return peso / (altura ** 2)
}

console.log('IMC atual: ', imc(1.78, 75))