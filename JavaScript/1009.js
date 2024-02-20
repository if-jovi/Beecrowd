let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let nome = String(lines.shift())
let salario = Number(lines.shift())
let vendas = Number(lines.shift())

console.log(`TOTAL = R$ ${(salario+(vendas*(15/100))).toFixed(2)}`)