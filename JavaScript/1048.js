let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let salario = (+lines.shift())
let porcentual

if (salario > 0 && salario <= 400){
     porcentual = 15
}

if( salario > 400 && salario <= 800){
    porcentual = 12
}

if( salario > 800 && salario <= 1200){
    porcentual = 10
}

if( salario > 1200 && salario <= 2000){
    porcentual = 7
}

if( salario > 2000){
    porcentual = 4
}

console.log(`Novo salario: ${(((salario*porcentual)/100)+ salario).toFixed(2)}`)
console.log(`Reajuste ganho: ${((salario*porcentual)/100).toFixed(2)}`)
console.log(`Em percentual: ${porcentual} %`)