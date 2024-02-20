let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let lista = []

for (let i = 0;i < 100;++i){
    let x = +lines.shift()
    
    if (x <= 10){
        console.log(`A[${i}] = ${x.toFixed(1)}`)
    }
}