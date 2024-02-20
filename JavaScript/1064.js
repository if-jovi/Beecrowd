let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let soma = 0
let contador = 0
let positivos = 0;
for(let i = 0; i < 6; ++i){
    let numero = +lines.shift()

    if(numero > 0){
    ++positivos
    ++contador
    soma += numero 
    }
}

console.log(`${positivos} valores positivos`);
console.log((soma/contador).toFixed(1))
