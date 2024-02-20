let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

console.log(lines)

let [A, B, C] = lines.shift().trim().split(' ').map((x) => parseFloat(x));

if(A < B + C && B < A + C && C < A + B){
    console.log(`Perimetro = ${(A + B + C).toFixed(1)}`);
}else{
    console.log(`Area = ${((A + B)/2 * C).toFixed(1)}`);
}