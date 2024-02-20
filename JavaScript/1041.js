let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)


let [x,y] = pegarValores(lines.shift())

if(x ==0 && y== 0){console.log("Origem")}
if(x > 0 && y > 0){console.log("Q1")}
if(x < 0 && y < 0){console.log("Q3")}
if(x < 0 && y > 0){console.log("Q2")}
if(x > 0 && y < 0){console.log("Q4")}
if(x == 0 && y != 0){console.log ("Eixo Y")}
if(x != 0 && y == 0){console.log ("Eixo X")}
