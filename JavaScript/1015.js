let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a)

console.log(lines)

let [x1,y1] = pegarValores(lines.shift())
let [x2,y2] = pegarValores(lines.shift())

console.log(`${Math.sqrt(((x2 - x1)* (x2 - x1))+ ((y2 - y1)*(y2 - y1))).toFixed(4)}`)