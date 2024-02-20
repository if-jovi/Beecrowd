let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()

for ( let i = 0;i <= N;++i){
    if(N%i == 0){
        console.log(i)
    }
}