let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()

for (let i = 2;i <= 10000;++i){
    if(i%N == 2){console.log(i)}    
}
