let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let n = +lines.shift()
let potencia = 2
let resul = 0

for (let i = 0;i < n;i +=2){
    resul += 2
    console.log(`${resul}^${potencia} = ${(resul**potencia)}`)
}