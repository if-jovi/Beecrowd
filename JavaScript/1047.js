let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)


let [horaInicial,minInicial,horaFinal,minFinal] = pegarValores(lines.shift())

var hora = (24 - horaInicial) + horaFinal

var minuto = (60 - minInicial) + minFinal

if(hora > 24 ){

hora = hora - 24 
}

if(minInicial > minFinal){

hora = hora - 1
}

if(hora === 24 && minuto > 0 && minInicial != minFinal){

hora = 0
}

if(minuto >= 60){

minuto = minuto - 60
}

console.log(`O JOGO DUROU ${hora} HORA(S) E ${minuto} MINUTO(S)`)