let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a)

console.log(lines)
let [A,B,C] = pegarValores(lines.shift())
const pi = 3.14159

console.log(`TRIANGULO: ${((A*C)/2).toFixed(3)}`)
console.log(`CIRCULO: ${((C*C)*pi).toFixed(3)}`)
console.log(`TRAPEZIO: ${(((A+B)*C)/2).toFixed(3)}`)
console.log(`QUADRADO: ${(B*B).toFixed(3)}`)
console.log(`RETANGULO: ${(A*B).toFixed(3)}`)