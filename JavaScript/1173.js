let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = +lines.shift()

for (let i = 0; i < 10;++i){
    console.log(`N[${i}] = ${x}`)
    x = x*2
}