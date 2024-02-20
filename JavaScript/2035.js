let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

console.log(lines)

let [A,B,C,D] = pegarValores(lines.shift())

if ((B > C) && (D > A ) && (C + D > A + B) && (C , D >0) && (A %2==0 ))
   console.log("Valores aceitos")

else
  console.log("Valores nao aceitos")