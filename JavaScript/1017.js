let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let h = Number(lines.shift())
let km = Number(lines.shift())

console.log(`${((km*h)/12).toFixed(3)}`)