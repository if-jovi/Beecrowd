let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let contador = 0
let numero 

for (let i = 0;i< 5 ;++i ){
    numero = lines.shift()
    if(numero % 2 == 0 ){
        ++contador
    }
}
console.log(`${contador} valores pares`)