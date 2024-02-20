let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

console.log(lines)

const [A, B, C] = pegarValores(lines.shift())
let delta = (B*B-4*A*C)
let R1 = ((-B + (delta)**0.5)/(2*A))
let R2 = ((-B - (delta)**0.5)/(2*A))


if (A === 0 ||delta <= 0) {

    console.log("Impossivel calcular")
}
 else{
console.log(`R1 = ${R1.toFixed(5)}`)
console.log(`R2 = ${R2.toFixed(5)}`)
 }