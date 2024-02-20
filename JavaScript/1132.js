let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = +lines.shift()
let y = +lines.shift()
let soma = 0
let lista = []

if(x < y){
    for (let i = x;x <=y;++x){
        if(x%13 !== 0){
            lista.push(x)
        }
    }
}

if(x  > y){
    for (let i = x;x<= y;--x){
        if(x%13 != 0){
            lista.push(x)
        }
    }
}
soma = lista.reduce((a,b) => a+b)

console.log(soma )