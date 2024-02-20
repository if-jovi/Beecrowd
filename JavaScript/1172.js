let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x 
let lista = []

while(lines.length){
    x = +lines.shift()
    if( x === 0){
        x += 1
    }
    lista.push(x)
}


for ( let i = 0;i < lista.length;++ i){
    console.log(`X[${[i]}] = ${lista[i]}`)
}