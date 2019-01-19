var i = 1
console.log('inicio da festa!')
while (i <= 10) {
    console.log('convidado número ', i)
    if (i == 10) {
        console.log('está lotado!')
        break
    } else {
        i++
    }
}