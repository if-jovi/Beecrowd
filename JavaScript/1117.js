let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let media = 0
let cont = 0

while(cont != 2){
    let nota = +lines.shift()

    if(nota > 0 && nota <= 10){
        media += nota
        ++cont
    }

    if (nota < 0 || nota > 10){
        console.log("nota invalida")
    }
}

console.log ( `media = ${(media/2).toFixed(2)}`)