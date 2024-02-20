const { isAbsolute } = require('path/posix')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a)

console.log(lines)
let [A,B,C] = pegarValores(lines.shift())

console.log(Math.max(A,B,C),`eh o maior`)