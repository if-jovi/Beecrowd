let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

const pegarValores = (line) => line.split(" ").map(a => +a)

let num = lines.shift()
let lista = pegarValores(lines.shift())

let posicao = lista[0]
let menor = lista[0]

for(let i = 0; i <= lista.length;++i){
    if(lista[i] < menor){
        menor = lista[i]
        posicao = i
    }
}

console.log(`Menor valor: ${menor}`)
console.log(`Posicao: ${posicao}`)