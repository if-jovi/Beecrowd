let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let x = Number(lines.shift())
let y = Number(lines.shift())
let PROD = (x*y)
console.log(`PROD = ${PROD}`)