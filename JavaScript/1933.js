let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)
const [a,b] = pegarValores(lines.shift())

a>b? console.log(a):console.log(b)