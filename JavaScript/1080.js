let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')
lista = []

while(lines.length){
    let x = +lines.shift()
    if(!x) break
    lista.push(x)
}
    
let maior = 0
let posicao = 0

for ( let i = 1; i <= 100;++ i){
    if(lista[i-1] > maior){
        maior = lista[i-1] 
        posicao = i 
    }
}
console.log(maior+"\n"+posicao)