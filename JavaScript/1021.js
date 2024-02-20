const { kMaxLength } = require('buffer')

let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = +lines.shift()
let notas = [100, 50, 20, 10, 5, 2]
let moedas = [1.00, 0.50, 0.25, 0.10, 0.05, 0.01]

console.log("NOTAS:")
for (const nota of notas) {
    const quantidade = Math.floor(x / nota)
        console.log(quantidade + " nota(s) de R$ "+ nota.toFixed(2))
        x %= nota

    
}
console.log("MOEDAS:")
for (const moeda of moedas){
     const quantidade = Math.floor(x / moeda)
        console.log(quantidade + " moeda(s) de R$ "+ moeda.toFixed(2))
        x = x % moeda
    
}