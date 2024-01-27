let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let Q = (+lines.shift())-2
let cont = 0
let seg = 1
let pri = 0
let ter =+ pri + seg 
let lista = [pri , seg]


while(cont < Q){
    lista.push(ter)
    pri = seg
    seg = ter
    ter = pri + seg
    
    ++cont
}

console.log(lista.join(" "))