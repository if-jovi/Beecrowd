let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let N = +lines.shift()
let num = 1
let i  = 0

while(i < N){
    console.log(`${num} ${(num + 1)} ${(num + 2)} PUM`)
    num += 4
    ++i
}