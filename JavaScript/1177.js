let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
var num = 0

for ( let i = 0; i < 1000;++i){
    console.log(`N[${i}] = ${num}`)
    ++num
    if(num == N ){
        num = 0
    }
     
    
}