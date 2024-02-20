let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x 
let lista = []
let cont = 0

while(lines.length){
    x = +lines.shift()
    if(x < 0) break
    lista.push(x)
    ++cont
}

let listar = lista.reduce((a,b)=>a+b)
console.log(listar/cont)