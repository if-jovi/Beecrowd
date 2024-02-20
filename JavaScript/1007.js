let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let a = Number(lines.shift())
let b = Number(lines.shift())
let c = Number(lines.shift())
let d = Number(lines.shift())
let diferenca = (a*b-c*d)

console.log(`DIFERENCA = ${diferenca}`)