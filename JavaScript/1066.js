let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let contadorimpar = 0
let contadorposit = 0
let contadorneg = 0
let contadorpar = 0
let numero 

for (let i = 0;i< 5 ;++i ){
    numero = lines.shift()
    if(numero % 2 == 0 ){
        ++contadorpar
    }
    if (Math.abs(numero) % 2 == 1){
        ++contadorimpar
    }
    if(numero > 0){
        ++contadorposit
    }
    if(numero < 0){
        ++contadorneg
    }

}
console.log(`${contadorpar} valor(es) par(es)`)
console.log(`${contadorimpar} valor(es) impar(es)`)
console.log(`${contadorposit} valor(es) positivo(s)`)
console.log(`${contadorneg} valor(es) negativo(s)`)