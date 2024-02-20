let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
const pegarValores = (line) => line.split(" ").map(a => +a)

let total = 0
let [valor,quantidade] = pegarValores(lines.shift())
switch (valor){
    case(1) :
       total += 4
    break
    case(2) :
       total += 4.5
    break 
    case(3) :
       total += 5
    break
    case(4) :
       total += 2
    break
    case(5) :
        total += 1.5
    break 
}
console.log(`Total: R$ ${(total*quantidade).toFixed(2)}`)