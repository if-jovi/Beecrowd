const { setEngine } = require('crypto')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let setence = +(lines.shift().split("\n"))
let resultado

for  (let i = 1;i <= setence;++i){
    let notas = lines.shift().split(" ", 3)
    let nota1 = parseFloat(notas[0])
    let nota2 = parseFloat(notas[1])
    let nota3 = parseFloat(notas[2])

    resultado = ((((nota1 *2)+ (nota2 * 3) + (nota3 *5)) / 10)).toFixed(1)
    console.log(`${resultado}`)
}

