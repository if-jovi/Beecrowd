let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()

for(let i = 0;i<N;++i){
    (console.log(`N[${i}] = ${(N).toFixed(4)}`))
    N = N/2
}