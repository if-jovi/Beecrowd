let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a)

let [codigo, qtdePeca, vlrUnit] = pegarValores(lines.shift())
let [codigo2, qtdePeca2, vlrUnit2] = pegarValores(lines.shift())

let total = qtdePeca * vlrUnit + qtdePeca2 * vlrUnit2
console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)