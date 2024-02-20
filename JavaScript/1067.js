let input = require('fs').readFileSync('./dev/stdin/file.txt', 'utf8')
let lines = input.split('\n')

let x = +lines.shift()
for (let i = 1; i <= x;i += 2){
    console.log(i)
}