let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let funcionario = Number(lines.shift())
let horas = Number(lines.shift())
let salario_h = Number(lines.shift())

console.log(`NUMBER = ${funcionario}`)
console.log(`SALARY = U$ ${(horas*salario_h).toFixed(2)}`)