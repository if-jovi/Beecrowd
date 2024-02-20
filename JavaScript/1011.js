let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

console.log(lines)

let R = Number(lines.shift())
const pi =  3.14159

console.log(`VOLUME = ${((4/3) * pi * (R*R*R)).toFixed(3)}`)