let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

const pi = 3.14159
let raio = Number(lines.shift())
let area = pi*(raio * raio)

console.log(`A=${area.toFixed(4)}`)