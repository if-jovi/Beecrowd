let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
let soma = N
let fatorial2 = (N -1)


for(let i = 1;i<= N ;++i){
    soma = soma*fatorial2
    --fatorial2
    if(fatorial2 == 1){break}
}
console.log(soma)