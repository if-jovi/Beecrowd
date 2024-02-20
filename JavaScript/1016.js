let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x =  Number(lines.shift())

console.log(`${x*2} minutos`)