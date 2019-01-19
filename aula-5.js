var convidados = [
    {
        nome: 'Pedro',
        idade: 20,
        bebeRefri: false,
        bebeCerveja: true
    },
    {
        nome: 'Carlos',
        idade: 16,
        bebeRefri: true,
        bebeCerveja: false
    },
    {
        nome: 'Maria',
        idade: 18,
        bebeRefri: false,
        bebeCerveja: false
    }
]

var comprarCerveja = false;
var comprarRefri = false;

for (var i = 0; i < convidados.length; i++) {
    if (convidados[i].bebeCerveja && convidados[i].idade >= 18) {
        comprarCerveja = true
        console.log(convidados[i].nome, 'comprou uma cerveja!')
    } else if (convidados[i].bebeRefri) {
        comprarRefri = true
        console.log(convidados[i].nome, 'comprou uma refri!')
    } else {
        console.log(convidados[i].nome, 'não comprou nada!')
    }
}