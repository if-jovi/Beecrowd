let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(Number)

let [a,b,c] =  pegarValores(lines.shift())
const [A,B,C]=[a,b,c]

if (a>b){[a,b] = [b,a]}
if (b>c){[b,c] = [c,b]}
if (b<a){[a,b] = [b,a]}

console.log(a)
console.log(b)
console.log(c)
console.log(" ")
console.log(A)
console.log(B)
console.log(C)